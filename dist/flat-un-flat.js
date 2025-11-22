function i(e, r = "", t = {}) {
  for (const n in e) {
    const c = r ? `${r}.${n}` : n;
    typeof e[n] == "object" && e[n] !== null ? i(e[n], c, t) : t[c] = e[n];
  }
  return t;
}
function l(e, r = "", t = {}) {
  for (const n in e) {
    const c = r ? `${r}.${n}` : n;
    Array.isArray(e[n]) ? t[c] = e[n] : typeof e[n] == "object" && e[n] !== null ? l(e[n], c, t) : t[c] = e[n];
  }
  return t;
}
const u = (e, r = { preserveArrays: !1 }) => {
  const { preserveArrays: t } = r;
  return t ? l(e) : i(e);
};
function y(e, r = ".") {
  const t = {};
  for (const n in e) {
    const c = n.split(r);
    let s = t;
    c.forEach((f, o) => {
      o === c.length - 1 ? s[f] = e[n] : (s[f] || (s[f] = {}), s = s[f]);
    });
  }
  return t;
}
export {
  u as flattenObject,
  y as unflattenObject
};
//# sourceMappingURL=flat-un-flat.js.map
