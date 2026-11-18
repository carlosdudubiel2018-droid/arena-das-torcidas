(function (root) {
  function applyDelta(cache, response) {
    const next = {...cache};
    for (const name of response.removed) delete next[name];
    Object.assign(next, response.changed);
    const fans = Object.entries(next)
      .filter(([name]) => name.startsWith("fans:"))
      .flatMap(([, chunk]) => chunk.data);
    fans.sort((a, b) => a.handle === b.handle ? 0 : a.handle < b.handle ? -1 : 1);
    return {
      cache: next,
      versions: Object.fromEntries(Object.entries(next).map(([name, chunk]) => [name, chunk.version])),
      scores: {...next.metadata.data, fans, team_bonuses: next.team_bonuses.data}
    };
  }
  root.ArenaScoreDelta = { applyDelta };
})(globalThis);
