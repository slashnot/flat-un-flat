function f(e, c = "", t = {}) {
  for (const n in e) {
    const r = c ? `${c}.${n}` : n;
    typeof e[n] == "object" && e[n] !== null ? f(e[n], r, t) : t[r] = e[n];
  }
  return t;
}
function i(e, c = "", t = {}) {
  for (const n in e) {
    const r = c ? `${c}.${n}` : n;
    Array.isArray(e[n]) ? t[r] = e[n] : typeof e[n] == "object" && e[n] !== null ? i(e[n], r, t) : t[r] = e[n];
  }
  return t;
}
function o(e) {
  const c = {};
  for (const t in e) {
    const n = t.split(".");
    let r = c;
    n.forEach((s, l) => {
      l === n.length - 1 ? r[s] = e[t] : (r[s] || (r[s] = {}), r = r[s]);
    });
  }
  return c;
}
const u = (e, c = { preserverArrays: !1 }) => {
  const { preserverArrays: t } = c;
  return t ? i(e) : f(e);
};
export {
  u as flattenObject,
  o as unflattenObject
};
//# sourceMappingURL=flattenUnflatten.js.map
