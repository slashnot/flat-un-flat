function f(e, s = "", n = {}) {
  for (const t in e) {
    const r = s ? `${s}.${t}` : t;
    typeof e[t] == "object" && e[t] !== null ? f(e[t], r, n) : n[r] = e[t];
  }
  return n;
}
function l(e, s = "", n = {}) {
  for (const t in e) {
    const r = s ? `${s}.${t}` : t;
    Array.isArray(e[t]) ? n[r] = e[t] : typeof e[t] == "object" && e[t] !== null ? l(e[t], r, n) : n[r] = e[t];
  }
  return n;
}
const y = (e, s = { preserveArrays: !1 }) => {
  const { preserveArrays: n } = s;
  return n ? l(e) : f(e);
};
function a(e, s = ".") {
  const n = {};
  for (const t in e) {
    const r = t.split(s);
    let c = n;
    r.forEach((i, o) => {
      o === r.length - 1 ? c[i] = e[t] : (c[i] || (c[i] = {}), c = c[i]);
    });
  }
  return u(n);
}
function u(e) {
  if (e === null || typeof e != "object")
    return e;
  for (const n in e)
    e[n] = u(e[n]);
  const s = Object.keys(e);
  if (s.length > 0) {
    const n = s.map((r) => parseInt(r, 10));
    if (n.every((r, c) => !isNaN(r) && s[c] === String(r)) && (n.sort((c, i) => c - i), n.every((c, i) => c === i) && n[0] === 0))
      return n.map((c) => e[String(c)]);
  }
  return e;
}
export {
  y as flattenObject,
  a as unflattenObject
};
//# sourceMappingURL=flat-un-flat.js.map
