from pathlib import Path
import json,re,base64,io,hashlib
from PIL import Image,ImageDraw,ImageFont
R=Path(__file__).resolve().parents[1];O=Path(__file__).resolve().parent
catalog=json.loads((O/'catalog-readonly.json').read_text(encoding='utf-8-sig'))
old=json.loads((R/'.sites-runtime/auditoria-2026-10-31/new-teams.json').read_text())
meta={t['id']:t for t in old};sources=[]
P=O/'escudos';P.mkdir(exist_ok=True)
for t in catalog:
 raw=t.get('crest_url') or ''
 if t['id']=='inter-bebedouro':
  raw='data:image/webp;base64,'+base64.b64encode((R/'dist/arena-viva/assets/escudos/inter-bebedouro.webp').read_bytes()).decode()
  meta[t['id']]={'source':'https://commons.wikimedia.org/wiki/File:Inter_de_Bebedouro.png'}
 if t['id']=='ibis':
  raw='data:image/jpeg;base64,'+base64.b64encode((O/'ibis-avatar.jpg').read_bytes()).decode();t['name']='Íbis'
  meta[t['id']]={'source':'https://linktr.ee/Ibissportclub'}
 if not raw.startswith('data:image/'):continue
 ident=t['id'];data=base64.b64decode(raw.split(',',1)[1]);im=Image.open(io.BytesIO(data)).convert('RGBA')
 if ident=='ibis':
  # Remove only the connected white background outside the official round crest.
  import collections
  seen=set();q=collections.deque([(0,0),(im.width-1,0),(0,im.height-1),(im.width-1,im.height-1)]);px=im.load()
  while q:
   x,y=q.popleft()
   if x<0 or y<0 or x>=im.width or y>=im.height or (x,y) in seen:continue
   seen.add((x,y));r,g,b,a=px[x,y]
   if min(r,g,b)<220:continue
   px[x,y]=(r,g,b,0);q.extend([(x-1,y),(x+1,y),(x,y-1),(x,y+1)])
 box=im.getbbox()
 if box:im=im.crop(box)
 im.thumbnail((120,120),Image.Resampling.LANCZOS)
 out=Image.new('RGBA',(128,128));out.alpha_composite(im,((128-im.width)//2,(128-im.height)//2))
 path=P/(ident+'.webp');out.save(path,'WEBP',quality=88,method=6)
 sources.append({'id':ident,'name':t['name'],'path':'escudos/'+path.name,'width':128,'height':128,'bytes':path.stat().st_size,'sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'origin':'Escudo real previamente cadastrado no catálogo público, extraído sem alterar o banco','reference_page':meta.get(ident,{}).get('source'),'checked_at':'2026-10-31','generic':False,'transparent':True})
 if ident=='ibis':sources[-1].update(origin='Avatar da conta oficial do Íbis no Linktree',asset_url='https://ugc.production.linktr.ee/b50db2b5-2e42-47b5-9c8b-f20c9a4ebc98_1c167bead7e042374ab04ae091edd76a-tplv-tiktokx-cropcenter-1080-1080.jpeg?io=true&size=avatar-v3_0',modifications='Fundo branco externo removido por flood-fill; resize128px, margem transparente4px, compressão WebP')
 if ident=='inter-bebedouro':sources[-1].update(origin='Asset local existente do clube, originalmente do Wikimedia Commons',license='CC BY-SA 4.0',author='Ilie Bentes',license_url='https://creativecommons.org/licenses/by-sa/4.0/',modifications='Resize128px, margem transparente4px e compressão WebP')
crests=json.loads(re.search(r'window.CRESTS\s*=\s*(\{.*?\})\s*;', (R/'crest-map.js').read_text(),re.S).group(1))
missing=[]
for t in catalog:
 if t['id'] in [s['id'] for s in sources]:continue
 path=(t.get('crest_url') or crests.get(t['id']) or 'assets/escudos/'+t['id']+'.png')
 if not path.startswith('http') and not (R/path.lstrip('/')).exists() and not (R/'dist'/path.lstrip('/')).exists():missing.append({'id':t['id'],'name':t['name'],'path':path})
(O/'sources.json').write_text(json.dumps({'items':sources,'unresolved':missing,'scope':'laboratory-only; no official or database mutation'},ensure_ascii=False,indent=2),encoding='utf-8')
mapping={s['id']:s['path'] for s in sources}
js='''/* Lab-only official crest override. Load after crest-map/crest-lite, before app. */
(function(){
 const base=new URL('.',document.currentScript.src).href,files=MAP;
 const original=window.ARENA_CREST;
 const url=id=>files[id]?new URL(files[id],base).href:null;
 window.ARENA_ROUNDS_CREST_FILES=Object.fromEntries(Object.keys(files).map(id=>[id,url(id)]));
 window.CRESTS=Object.assign(window.CRESTS||{},window.ARENA_ROUNDS_CREST_FILES);
 window.ARENA_CREST=t=>url(t?.id)||(original?original(t):t.crest_url||window.CRESTS[t.id]);
})();
'''.replace('MAP',json.dumps(mapping,ensure_ascii=False))
(O/'crest-override.js').write_text(js,encoding='utf-8')
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',18)
sheet=Image.new('RGB',(660,230*((len(sources)+3)//4)), '#10253e');draw=ImageDraw.Draw(sheet)
for i,s in enumerate(sources):
 x=(i%4)*165;y=(i//4)*230
 crest=Image.open(P/(s['id']+'.webp')).convert('RGBA');sheet.paste(crest,(x+18,y+20),crest)
 draw.text((x+8,y+160),s['name'],font=font,fill='white');draw.text((x+8,y+190),f"{s['bytes']/1024:.1f} KB",font=font,fill='#ffdc65')
sheet.save(O/'escudos-auditados.jpg',quality=90)
print(json.dumps({'crests':len(sources),'bytes':sum(s['bytes'] for s in sources),'unresolved':missing,'sizes':{s['id']:s['bytes'] for s in sources}},ensure_ascii=False,indent=2))
