import { defineComponent as fe, openBlock as O, createElementBlock as A, Fragment as pe, normalizeClass as ae, createCommentVNode as I, createElementVNode as C, cloneVNode as Rs, h as Ve, inject as pt, provide as bt, ref as M, onMounted as Oe, watchEffect as dt, computed as D, onUnmounted as it, watch as ze, Teleport as mu, reactive as sn, unref as b, shallowRef as Ms, nextTick as ot, toRaw as ht, resolveComponent as Ke, createBlock as me, withCtx as te, renderSlot as J, toDisplayString as be, renderList as Re, useSlots as pi, toRef as Dn, createVNode as Ae, mergeProps as We, isRef as Vt, createSlots as ut, normalizeProps as Je, guardReactiveProps as Ot, resolveDynamicComponent as hu, withKeys as _e, withModifiers as Rt, Transition as Xt, normalizeStyle as Et, createTextVNode as st, withDirectives as On, vShow as $n, onBeforeUpdate as Ns, getCurrentScope as Es, onScopeDispose as As, pushScopeId as Is, popScopeId as Ls } from "vue";
function _n(e, t, n) {
  return parseInt(e.substr(t, n), 16);
}
function bu(e) {
  return e |= 0, e < 0 ? "00" : e < 16 ? "0" + e.toString(16) : e < 256 ? e.toString(16) : "ff";
}
function xa(e, t, n) {
  return n = n < 0 ? n + 6 : n > 6 ? n - 6 : n, bu(255 * (n < 1 ? e + (t - e) * n : n < 3 ? t : n < 4 ? e + (t - e) * (4 - n) : e));
}
function Bs(e) {
  if (/^#[0-9a-f]{3,8}$/i.test(e)) {
    let t;
    const n = e.length;
    if (n < 6) {
      const r = e[1], a = e[2], o = e[3], i = e[4] || "";
      t = "#" + r + r + a + a + o + o + i + i;
    }
    return (n == 7 || n > 8) && (t = e), t;
  }
}
function Ys(e, t, n) {
  let r;
  if (t == 0) {
    const a = bu(n * 255);
    r = a + a + a;
  } else {
    const a = n <= 0.5 ? n * (t + 1) : n + t - n * t, o = n * 2 - a;
    r = xa(o, a, e * 6 + 2) + xa(o, a, e * 6) + xa(o, a, e * 6 - 2);
  }
  return "#" + r;
}
function dn(e, t, n) {
  const r = [0.55, 0.5, 0.5, 0.46, 0.6, 0.55, 0.55], a = r[e * 6 + 0.5 | 0];
  return n = n < 0.5 ? n * a * 2 : a + (n - 0.5) * (1 - a) * 2, Ys(e, t, n);
}
const Us = typeof window < "u" ? window : typeof self < "u" ? self : typeof global < "u" ? global : {}, Mi = {
  V: "jdenticon_config",
  n: "config"
};
var Fs = {};
function js(e, t) {
  const n = typeof e == "object" && e || Fs[
    Mi.n
    /*MODULE*/
  ] || Us[
    Mi.V
    /*GLOBAL*/
  ] || {}, r = n.lightness || {}, a = n.saturation || {}, o = "color" in a ? a.color : a, i = a.grayscale, l = n.backColor, c = n.padding;
  function u(d, f) {
    let m = r[d];
    return m && m.length > 1 || (m = f), function(_) {
      return _ = m[0] + _ * (m[1] - m[0]), _ < 0 ? 0 : _ > 1 ? 1 : _;
    };
  }
  function p(d) {
    const f = n.hues;
    let m;
    return f && f.length > 0 && (m = f[0 | 0.999 * d * f.length]), typeof m == "number" ? (
      // A hue was specified. We need to convert the hue from
      // degrees on any turn - e.g. 746° is a perfectly valid hue -
      // to turns in the range [0, 1).
      (m / 360 % 1 + 1) % 1
    ) : (
      // No hue configured => use original hue
      d
    );
  }
  return {
    W: p,
    o: typeof o == "number" ? o : 0.5,
    D: typeof i == "number" ? i : 0,
    p: u("color", [0.4, 0.8]),
    F: u("grayscale", [0.3, 0.9]),
    G: Bs(l),
    X: typeof e == "number" ? e : typeof c == "number" ? c : t
  };
}
class In {
  /**
   * @param {number} x 
   * @param {number} y 
   */
  constructor(t, n) {
    this.x = t, this.y = n;
  }
}
class gu {
  /**
   * @param {number} x The x-coordinate of the upper left corner of the transformed rectangle.
   * @param {number} y The y-coordinate of the upper left corner of the transformed rectangle.
   * @param {number} size The size of the transformed rectangle.
   * @param {number} rotation Rotation specified as 0 = 0 rad, 1 = 0.5π rad, 2 = π rad, 3 = 1.5π rad
   */
  constructor(t, n, r, a) {
    this.q = t, this.t = n, this.H = r, this.Y = a;
  }
  /**
   * Transforms the specified point based on the translation and rotation specification for this Transform.
   * @param {number} x x-coordinate
   * @param {number} y y-coordinate
   * @param {number=} w The width of the transformed rectangle. If greater than 0, this will ensure the returned point is of the upper left corner of the transformed rectangle.
   * @param {number=} h The height of the transformed rectangle. If greater than 0, this will ensure the returned point is of the upper left corner of the transformed rectangle.
   */
  I(t, n, r, a) {
    const o = this.q + this.H, i = this.t + this.H, l = this.Y;
    return l === 1 ? new In(o - n - (a || 0), this.t + t) : l === 2 ? new In(o - t - (r || 0), i - n - (a || 0)) : l === 3 ? new In(this.q + n, i - t - (r || 0)) : new In(this.q + t, this.t + n);
  }
}
const Vs = new gu(0, 0, 0, 0);
class Hs {
  /**
   * @param {Renderer} renderer 
   */
  constructor(t) {
    this.J = t, this.u = Vs;
  }
  /**
   * Adds a polygon to the underlying renderer.
   * @param {Array<number>} points The points of the polygon clockwise on the format [ x0, y0, x1, y1, ..., xn, yn ]
   * @param {boolean=} invert Specifies if the polygon will be inverted.
   */
  g(t, n) {
    const r = n ? -2 : 2, a = [];
    for (let o = n ? t.length - 2 : 0; o < t.length && o >= 0; o += r)
      a.push(this.u.I(t[o], t[o + 1]));
    this.J.g(a);
  }
  /**
   * Adds a polygon to the underlying renderer.
   * Source: http://stackoverflow.com/a/2173084
   * @param {number} x The x-coordinate of the upper left corner of the rectangle holding the entire ellipse.
   * @param {number} y The y-coordinate of the upper left corner of the rectangle holding the entire ellipse.
   * @param {number} size The size of the ellipse.
   * @param {boolean=} invert Specifies if the ellipse will be inverted.
   */
  h(t, n, r, a) {
    const o = this.u.I(t, n, r, r);
    this.J.h(o, r, a);
  }
  /**
   * Adds a rectangle to the underlying renderer.
   * @param {number} x The x-coordinate of the upper left corner of the rectangle.
   * @param {number} y The y-coordinate of the upper left corner of the rectangle.
   * @param {number} w The width of the rectangle.
   * @param {number} h The height of the rectangle.
   * @param {boolean=} invert Specifies if the rectangle will be inverted.
   */
  i(t, n, r, a, o) {
    this.g([
      t,
      n,
      t + r,
      n,
      t + r,
      n + a,
      t,
      n + a
    ], o);
  }
  /**
   * Adds a right triangle to the underlying renderer.
   * @param {number} x The x-coordinate of the upper left corner of the rectangle holding the triangle.
   * @param {number} y The y-coordinate of the upper left corner of the rectangle holding the triangle.
   * @param {number} w The width of the triangle.
   * @param {number} h The height of the triangle.
   * @param {number} r The rotation of the triangle (clockwise). 0 = right corner of the triangle in the lower left corner of the bounding rectangle.
   * @param {boolean=} invert Specifies if the triangle will be inverted.
   */
  j(t, n, r, a, o, i) {
    const l = [
      t + r,
      n,
      t + r,
      n + a,
      t,
      n + a,
      t,
      n
    ];
    l.splice((o || 0) % 4 * 2, 2), this.g(l, i);
  }
  /**
   * Adds a rhombus to the underlying renderer.
   * @param {number} x The x-coordinate of the upper left corner of the rectangle holding the rhombus.
   * @param {number} y The y-coordinate of the upper left corner of the rectangle holding the rhombus.
   * @param {number} w The width of the rhombus.
   * @param {number} h The height of the rhombus.
   * @param {boolean=} invert Specifies if the rhombus will be inverted.
   */
  K(t, n, r, a, o) {
    this.g([
      t + r / 2,
      n,
      t + r,
      n + a / 2,
      t + r / 2,
      n + a,
      t,
      n + a / 2
    ], o);
  }
}
function Ws(e, t, n, r) {
  e = e % 14;
  let a, o, i, l, c, u;
  e ? e == 1 ? (i = 0 | n * 0.5, l = 0 | n * 0.8, t.j(n - i, 0, i, l, 2)) : e == 2 ? (i = 0 | n / 3, t.i(i, i, n - i, n - i)) : e == 3 ? (c = n * 0.1, // Use fixed outer border widths in small icons to ensure the border is drawn
  u = n < 6 ? 1 : n < 8 ? 2 : 0 | n * 0.25, c = c > 1 ? 0 | c : (
    // large icon => truncate decimals
    c > 0.5 ? 1 : (
      // medium size icon => fixed width
      c
    )
  ), // small icon => anti-aliased border
  t.i(u, u, n - c - u, n - c - u)) : e == 4 ? (o = 0 | n * 0.15, i = 0 | n * 0.5, t.h(n - i - o, n - i - o, i)) : e == 5 ? (c = n * 0.1, u = c * 4, // Align edge to nearest pixel in large icons
  u > 3 && (u = 0 | u), t.i(0, 0, n, n), t.g([
    u,
    u,
    n - c,
    u,
    u + (n - u - c) / 2,
    n - c
  ], !0)) : e == 6 ? t.g([
    0,
    0,
    n,
    0,
    n,
    n * 0.7,
    n * 0.4,
    n * 0.4,
    n * 0.7,
    n,
    0,
    n
  ]) : e == 7 ? t.j(n / 2, n / 2, n / 2, n / 2, 3) : e == 8 ? (t.i(0, 0, n, n / 2), t.i(0, n / 2, n / 2, n / 2), t.j(n / 2, n / 2, n / 2, n / 2, 1)) : e == 9 ? (c = n * 0.14, // Use fixed outer border widths in small icons to ensure the border is drawn
  u = n < 4 ? 1 : n < 6 ? 2 : 0 | n * 0.35, c = n < 8 ? c : (
    // small icon => anti-aliased border
    0 | c
  ), // large icon => truncate decimals
  t.i(0, 0, n, n), t.i(u, u, n - u - c, n - u - c, !0)) : e == 10 ? (c = n * 0.12, u = c * 3, t.i(0, 0, n, n), t.h(u, u, n - c - u, !0)) : e == 11 ? t.j(n / 2, n / 2, n / 2, n / 2, 3) : e == 12 ? (o = n * 0.25, t.i(0, 0, n, n), t.K(o, o, n - o, n - o, !0)) : (
    // 13
    !r && (o = n * 0.4, i = n * 1.2, t.h(o, o, i))
  ) : (a = n * 0.42, t.g([
    0,
    0,
    n,
    0,
    n,
    n - a * 2,
    n - a,
    n,
    0,
    n
  ]));
}
function Ni(e, t, n) {
  e = e % 4;
  let r;
  e ? e == 1 ? t.j(0, n / 2, n, n / 2, 0) : e == 2 ? t.K(0, 0, n, n) : (
    // 3
    (r = n / 6, t.h(r, r, n - 2 * r))
  ) : t.j(0, 0, n, n, 0);
}
function qs(e, t) {
  return e = t.W(e), [
    // Dark gray
    dn(e, t.D, t.F(0)),
    // Mid color
    dn(e, t.o, t.p(0.5)),
    // Light gray
    dn(e, t.D, t.F(1)),
    // Light color
    dn(e, t.o, t.p(1)),
    // Dark color
    dn(e, t.o, t.p(0))
  ];
}
function zs(e, t, n) {
  const r = js(n, 0.08);
  r.G && e.m(
    r.G
    /*backColor*/
  );
  let a = e.k;
  const o = 0.5 + a * r.X | 0;
  a -= o * 2;
  const i = new Hs(e), l = 0 | a / 4, c = 0 | o + a / 2 - l * 2, u = 0 | o + a / 2 - l * 2;
  function p(g, Y, P, T, F) {
    const j = _n(t, P, 1);
    let W = T ? _n(t, T, 1) : 0;
    e.L(f[m[g]]);
    for (let Z = 0; Z < F.length; Z++)
      i.u = new gu(c + F[Z][0] * l, u + F[Z][1] * l, l, W++ % 4), Y(j, i, l, Z);
    e.M();
  }
  const d = _n(t, -7) / 268435455, f = qs(d, r), m = [];
  let _;
  function x(g) {
    if (g.indexOf(_) >= 0) {
      for (let Y = 0; Y < g.length; Y++)
        if (m.indexOf(g[Y]) >= 0)
          return !0;
    }
  }
  for (let g = 0; g < 3; g++)
    _ = _n(t, 8 + g, 1) % f.length, (x([0, 4]) || // Disallow dark gray and dark color combo
    x([2, 3])) && (_ = 1), m.push(_);
  p(0, Ni, 2, 3, [[1, 0], [2, 0], [2, 3], [1, 3], [0, 1], [3, 1], [3, 2], [0, 2]]), p(1, Ni, 4, 5, [[0, 0], [3, 0], [3, 3], [0, 3]]), p(2, Ws, 1, null, [[1, 1], [2, 1], [2, 2], [1, 2]]), e.finish();
}
function Gs(e) {
  var r = 0, a = 0, o = encodeURI(e) + "%80", i = [], l, c = [], u = 1732584193, p = 4023233417, d = ~u, f = ~p, m = 3285377520, _ = [u, p, d, f, m], x = 0, g = "";
  function Y(P, T) {
    return P << T | P >>> 32 - T;
  }
  for (; r < o.length; a++)
    i[a >> 2] = i[a >> 2] | (o[r] == "%" ? parseInt(o.substring(r + 1, r += 3), 16) : o.charCodeAt(r++)) << (3 - (a & 3)) * 8;
  for (l = ((a + 7 >> 6) + 1) * 16, i[l - 1] = a * 8 - 8; x < l; x += 16) {
    for (r = 0; r < 80; r++)
      a = Y(u, 5) + m + // Ch
      (r < 20 ? (p & d ^ ~p & f) + 1518500249 : (
        // Parity
        r < 40 ? (p ^ d ^ f) + 1859775393 : (
          // Maj
          r < 60 ? (p & d ^ p & f ^ d & f) + 2400959708 : (
            // Parity
            (p ^ d ^ f) + 3395469782
          )
        )
      )) + (c[r] = r < 16 ? i[x + r] | 0 : Y(c[r - 3] ^ c[r - 8] ^ c[r - 14] ^ c[r - 16], 1)), m = f, f = d, d = Y(p, 30), p = u, u = a;
    _[0] = u = _[0] + u | 0, _[1] = p = _[1] + p | 0, _[2] = d = _[2] + d | 0, _[3] = f = _[3] + f | 0, _[4] = m = _[4] + m | 0;
  }
  for (r = 0; r < 40; r++)
    g += // Get word (2^3 half-bytes per word)
    (_[r >> 3] >>> // Append half-bytes in reverse order
    (7 - (r & 7)) * 4 & 15).toString(16);
  return g;
}
function Ks(e) {
  return /^[0-9a-f]{11,}$/i.test(e) && e;
}
function Qs(e) {
  return Gs(e == null ? "" : "" + e);
}
function en(e) {
  return (e * 10 + 0.5 | 0) / 10;
}
class Xs {
  constructor() {
    this.v = "";
  }
  /**
   * Adds a polygon with the current fill color to the SVG path.
   * @param points An array of Point objects.
   */
  g(t) {
    let n = "";
    for (let r = 0; r < t.length; r++)
      n += (r ? "L" : "M") + en(t[r].x) + " " + en(t[r].y);
    this.v += n + "Z";
  }
  /**
   * Adds a circle with the current fill color to the SVG path.
   * @param {Point} point The upper left corner of the circle bounding box.
   * @param {number} diameter The diameter of the circle.
   * @param {boolean} counterClockwise True if the circle is drawn counter-clockwise (will result in a hole if rendered on a clockwise path).
   */
  h(t, n, r) {
    const a = r ? 0 : 1, o = en(n / 2), i = en(n), l = "a" + o + "," + o + " 0 1," + a + " ";
    this.v += "M" + en(t.x) + " " + en(t.y + n / 2) + l + i + ",0" + l + -i + ",0";
  }
}
class Zs {
  /**
   * @param {SvgElement|SvgWriter} target 
   */
  constructor(t) {
    this.A, this.B = {}, this.N = t, this.k = t.k;
  }
  /**
   * Fills the background with the specified color.
   * @param {string} fillColor  Fill color on the format #rrggbb[aa].
   */
  m(t) {
    const n = /^(#......)(..)?/.exec(t), r = n[2] ? _n(n[2], 0) / 255 : 1;
    this.N.m(n[1], r);
  }
  /**
   * Marks the beginning of a new shape of the specified color. Should be ended with a call to endShape.
   * @param {string} color Fill color on format #xxxxxx.
   */
  L(t) {
    this.A = this.B[t] || (this.B[t] = new Xs());
  }
  /**
   * Marks the end of the currently drawn shape.
   */
  M() {
  }
  /**
   * Adds a polygon with the current fill color to the SVG.
   * @param points An array of Point objects.
   */
  g(t) {
    this.A.g(t);
  }
  /**
   * Adds a circle with the current fill color to the SVG.
   * @param {Point} point The upper left corner of the circle bounding box.
   * @param {number} diameter The diameter of the circle.
   * @param {boolean} counterClockwise True if the circle is drawn counter-clockwise (will result in a hole if rendered on a clockwise path).
   */
  h(t, n, r) {
    this.A.h(t, n, r);
  }
  /**
   * Called when the icon has been completely drawn.
   */
  finish() {
    const t = this.B;
    for (let n in t)
      t.hasOwnProperty(n) && this.N.O(
        n,
        t[n].v
        /*dataString*/
      );
  }
}
const Js = {
  P: "http://www.w3.org/2000/svg",
  R: "width",
  S: "height"
};
class ec {
  /**
   * @param {number} iconSize - Icon width and height in pixels.
   */
  constructor(t) {
    this.k = t, this.C = '<svg xmlns="' + Js.P + '" width="' + t + '" height="' + t + '" viewBox="0 0 ' + t + " " + t + '">';
  }
  /**
   * Fills the background with the specified color.
   * @param {string} fillColor  Fill color on the format #rrggbb.
   * @param {number} opacity  Opacity in the range [0.0, 1.0].
   */
  m(t, n) {
    n && (this.C += '<rect width="100%" height="100%" fill="' + t + '" opacity="' + n.toFixed(2) + '"/>');
  }
  /**
   * Writes a path to the SVG string.
   * @param {string} color Fill color on format #rrggbb.
   * @param {string} dataString The SVG path data string.
   */
  O(t, n) {
    this.C += '<path fill="' + t + '" d="' + n + '"/>';
  }
  /**
   * Gets the rendered image as an SVG string.
   */
  toString() {
    return this.C + "</svg>";
  }
}
function tc(e, t, n) {
  const r = new ec(t);
  return zs(
    new Zs(r),
    Ks(e) || Qs(e),
    n
  ), r.toString();
}
typeof document < "u" && document.querySelectorAll.bind(document);
const nc = fe({
  props: {
    imageUrl: {
      type: String,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    cssClasses: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    function t(r) {
      return tc(r, 200);
    }
    return {
      defaultCssClasses: "h-32 w-32 text-gray-500 border p-2 text-4xl bg-white",
      getIcon: t
    };
  }
}), ct = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, a] of t)
    n[r] = a;
  return n;
}, rc = ["src", "alt"], ac = ["innerHTML"], oc = /* @__PURE__ */ C("svg", {
  class: "w-12 h-12 text-gray-200 dark:text-gray-600",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  fill: "currentColor",
  viewBox: "0 0 640 512"
}, [
  /* @__PURE__ */ C("path", { d: "M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" })
], -1), ic = [
  oc
];
function lc(e, t, n, r, a, o) {
  return O(), A(pe, null, [
    e.imageUrl ? (O(), A("img", {
      key: 0,
      src: e.imageUrl,
      alt: e.name,
      class: ae(["flex-shrink-0 rounded-full !p-0", e.cssClasses ?? e.defaultCssClasses])
    }, null, 10, rc)) : I("", !0),
    !e.imageUrl && e.name ? (O(), A("div", {
      key: 1,
      class: ae(["flex-shrink-0 rounded-full flex justify-center items-center font-serif font-extrabold overflow-hidden", e.cssClasses ?? e.defaultCssClasses]),
      innerHTML: e.getIcon(e.name)
    }, null, 10, ac)) : I("", !0),
    !e.imageUrl && !e.name ? (O(), A("div", {
      key: 2,
      class: ae(["flex justify-center items-center flex-shrink-0 rounded-full animate-pulse", e.cssClasses ?? e.defaultCssClasses])
    }, ic, 2)) : I("", !0)
  ], 64);
}
const uc = /* @__PURE__ */ ct(nc, [["render", lc]]);
function qe(e, t, ...n) {
  if (e in t) {
    let a = t[e];
    return typeof a == "function" ? a(...n) : a;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, qe), r;
}
var an = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(an || {}), It = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(It || {});
function Fe({ visible: e = !0, features: t = 0, ourProps: n, theirProps: r, ...a }) {
  var o;
  let i = wu(r, n), l = Object.assign(a, { props: i });
  if (e || t & 2 && i.static)
    return Ca(l);
  if (t & 1) {
    let c = (o = i.unmount) == null || o ? 0 : 1;
    return qe(c, { [0]() {
      return null;
    }, [1]() {
      return Ca({ ...a, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ca(l);
}
function Ca({ props: e, attrs: t, slots: n, slot: r, name: a }) {
  var o, i;
  let { as: l, ...c } = ma(e, ["unmount", "static"]), u = (o = n.default) == null ? void 0 : o.call(n, r), p = {};
  if (r) {
    let d = !1, f = [];
    for (let [m, _] of Object.entries(r))
      typeof _ == "boolean" && (d = !0), _ === !0 && f.push(m);
    d && (p["data-headlessui-state"] = f.join(" "));
  }
  if (l === "template") {
    if (u = _u(u ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [d, ...f] = u ?? [];
      if (!sc(d) || f.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map((x) => x.trim()).filter((x, g, Y) => Y.indexOf(x) === g).sort((x, g) => x.localeCompare(g)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let m = wu((i = d.props) != null ? i : {}, c), _ = Rs(d, m);
      for (let x in m)
        x.startsWith("on") && (_.props || (_.props = {}), _.props[x] = m[x]);
      return _;
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return Ve(l, Object.assign({}, c, p), { default: () => u });
}
function _u(e) {
  return e.flatMap((t) => t.type === pe ? _u(t.children) : [t]);
}
function wu(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let r of e)
    for (let a in r)
      a.startsWith("on") && typeof r[a] == "function" ? (n[a] != null || (n[a] = []), n[a].push(r[a])) : t[a] = r[a];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, { [r](a, ...o) {
      let i = n[r];
      for (let l of i) {
        if (a instanceof Event && a.defaultPrevented)
          return;
        l(a, ...o);
      }
    } });
  return t;
}
function Ou(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function ma(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t)
    r in n && delete n[r];
  return n;
}
function sc(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let cc = 0;
function fc() {
  return ++cc;
}
function vt() {
  return fc();
}
var Be = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(Be || {});
function dc(e) {
  throw new Error("Unexpected object: " + e);
}
var nt = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(nt || {});
function pc(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let r = t.resolveActiveIndex(), a = r ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = n.slice().reverse().findIndex((l, c, u) => a !== -1 && u.length - c - 1 >= a ? !1 : !t.resolveDisabled(l));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 2:
        return n.findIndex((i, l) => l <= a ? !1 : !t.resolveDisabled(i));
      case 3: {
        let i = n.slice().reverse().findIndex((l) => !t.resolveDisabled(l));
        return i === -1 ? i : n.length - 1 - i;
      }
      case 4:
        return n.findIndex((i) => t.resolveId(i) === e.id);
      case 5:
        return null;
      default:
        dc(e);
    }
  })();
  return o === -1 ? r : o;
}
function ye(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let $u = Symbol("Context");
var Qe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Qe || {});
function vc() {
  return ha() !== null;
}
function ha() {
  return pt($u, null);
}
function Su(e) {
  bt($u, e);
}
function Ei(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function ku(e, t) {
  let n = M(Ei(e.value.type, e.value.as));
  return Oe(() => {
    n.value = Ei(e.value.type, e.value.as);
  }), dt(() => {
    var r;
    n.value || ye(t) && ye(t) instanceof HTMLButtonElement && !((r = ye(t)) != null && r.hasAttribute("type")) && (n.value = "button");
  }), n;
}
var yc = Object.defineProperty, mc = (e, t, n) => t in e ? yc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ai = (e, t, n) => (mc(e, typeof t != "symbol" ? t + "" : t, n), n);
let hc = class {
  constructor() {
    Ai(this, "current", this.detect()), Ai(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, Cn = new hc();
function Rn(e) {
  if (Cn.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = ye(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
let Ga = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var At = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(At || {}), Pu = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Pu || {}), bc = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(bc || {});
function gc(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ga)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var vi = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(vi || {});
function Tu(e, t = 0) {
  var n;
  return e === ((n = Rn(e)) == null ? void 0 : n.body) ? !1 : qe(t, { [0]() {
    return e.matches(Ga);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Ga))
        return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
function zt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let _c = ["textarea", "input"].join(",");
function wc(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, _c)) != null ? n : !1;
}
function Du(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let a = t(n), o = t(r);
    if (a === null || o === null)
      return 0;
    let i = a.compareDocumentPosition(o);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function Fn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: a = [] } = {}) {
  var o;
  let i = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, l = Array.isArray(e) ? n ? Du(e) : e : gc(e);
  a.length > 0 && l.length > 1 && (l = l.filter((_) => !a.includes(_))), r = r ?? i.activeElement;
  let c = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, l.indexOf(r)) - 1;
    if (t & 4)
      return Math.max(0, l.indexOf(r)) + 1;
    if (t & 8)
      return l.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p = t & 32 ? { preventScroll: !0 } : {}, d = 0, f = l.length, m;
  do {
    if (d >= f || d + f <= 0)
      return 0;
    let _ = u + d;
    if (t & 16)
      _ = (_ + f) % f;
    else {
      if (_ < 0)
        return 3;
      if (_ >= f)
        return 1;
    }
    m = l[_], m == null || m.focus(p), d += c;
  } while (m !== i.activeElement);
  return t & 6 && wc(m) && m.select(), m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"), 2;
}
function Ra(e, t, n) {
  Cn.isServer || dt((r) => {
    document.addEventListener(e, t, n), r(() => document.removeEventListener(e, t, n));
  });
}
function xu(e, t, n = D(() => !0)) {
  function r(o, i) {
    if (!n.value || o.defaultPrevented)
      return;
    let l = i(o);
    if (l === null || !l.getRootNode().contains(l))
      return;
    let c = function u(p) {
      return typeof p == "function" ? u(p()) : Array.isArray(p) || p instanceof Set ? p : [p];
    }(e);
    for (let u of c) {
      if (u === null)
        continue;
      let p = u instanceof HTMLElement ? u : ye(u);
      if (p != null && p.contains(l) || o.composed && o.composedPath().includes(p))
        return;
    }
    return !Tu(l, vi.Loose) && l.tabIndex !== -1 && o.preventDefault(), t(o, l);
  }
  let a = M(null);
  Ra("mousedown", (o) => {
    var i, l;
    n.value && (a.value = ((l = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : l[0]) || o.target);
  }, !0), Ra("click", (o) => {
    a.value && (r(o, () => a.value), a.value = null);
  }, !0), Ra("blur", (o) => r(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var on = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(on || {});
let xn = fe({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: r, ...a } = e, o = { "aria-hidden": (r & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
    return Fe({ ourProps: o, theirProps: a, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function Cu(e = {}, t = null, n = []) {
  for (let [r, a] of Object.entries(e))
    Mu(n, Ru(t, r), a);
  return n;
}
function Ru(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Mu(e, t, n) {
  if (Array.isArray(n))
    for (let [r, a] of n.entries())
      Mu(e, Ru(t, r.toString()), a);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Cu(n, t, e);
}
function Oc(e) {
  var t;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let r of n.elements)
      if (r.tagName === "INPUT" && r.type === "submit" || r.tagName === "BUTTON" && r.type === "submit" || r.nodeName === "INPUT" && r.type === "image") {
        r.click();
        return;
      }
  }
}
function Nu(e, t, n) {
  let r = M(n == null ? void 0 : n.value), a = D(() => e.value !== void 0);
  return [D(() => a.value ? e.value : r.value), function(o) {
    return a.value || (r.value = o), t == null ? void 0 : t(o);
  }];
}
function Ii(e) {
  return [e.screenX, e.screenY];
}
function $c() {
  let e = M([-1, -1]);
  return { wasMoved(t) {
    let n = Ii(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = Ii(t);
  } };
}
function Sc() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function kc(e, t, n) {
  Cn.isServer || dt((r) => {
    window.addEventListener(e, t, n), r(() => window.removeEventListener(e, t, n));
  });
}
var wn = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(wn || {});
function Pc() {
  let e = M(0);
  return kc("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Eu(e, t, n, r) {
  Cn.isServer || dt((a) => {
    e = e ?? window, e.addEventListener(t, n, r), a(() => e.removeEventListener(t, n, r));
  });
}
function Au(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Iu(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.value) {
    let r = ye(n);
    r instanceof HTMLElement && t.add(r);
  }
  return t;
}
var Lu = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Lu || {});
let pn = Object.assign(fe({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: M(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let a = M(null);
  r({ el: a, $el: a });
  let o = D(() => Rn(a)), i = M(!1);
  Oe(() => i.value = !0), it(() => i.value = !1), Dc({ ownerDocument: o }, D(() => i.value && !!(e.features & 16)));
  let l = xc({ ownerDocument: o, container: a, initialFocus: D(() => e.initialFocus) }, D(() => i.value && !!(e.features & 2)));
  Cc({ ownerDocument: o, container: a, containers: e.containers, previousActiveElement: l }, D(() => i.value && !!(e.features & 8)));
  let c = Pc();
  function u(m) {
    let _ = ye(a);
    _ && ((x) => x())(() => {
      qe(c.value, { [wn.Forwards]: () => {
        Fn(_, At.First, { skipElements: [m.relatedTarget] });
      }, [wn.Backwards]: () => {
        Fn(_, At.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let p = M(!1);
  function d(m) {
    m.key === "Tab" && (p.value = !0, requestAnimationFrame(() => {
      p.value = !1;
    }));
  }
  function f(m) {
    if (!i.value)
      return;
    let _ = Iu(e.containers);
    ye(a) instanceof HTMLElement && _.add(ye(a));
    let x = m.relatedTarget;
    x instanceof HTMLElement && x.dataset.headlessuiFocusGuard !== "true" && (Bu(_, x) || (p.value ? Fn(ye(a), qe(c.value, { [wn.Forwards]: () => At.Next, [wn.Backwards]: () => At.Previous }) | At.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && zt(m.target)));
  }
  return () => {
    let m = {}, _ = { ref: a, onKeydown: d, onFocusout: f }, { features: x, initialFocus: g, containers: Y, ...P } = e;
    return Ve(pe, [!!(x & 4) && Ve(xn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: on.Focusable }), Fe({ ourProps: _, theirProps: { ...t, ...P }, slot: m, attrs: t, slots: n, name: "FocusTrap" }), !!(x & 4) && Ve(xn, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: on.Focusable })]);
  };
} }), { features: Lu }), Ht = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Ht[0] !== t.target && (Ht.unshift(t.target), Ht = Ht.filter((n) => n != null && n.isConnected), Ht.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function Tc(e) {
  let t = M(Ht.slice());
  return ze([e], ([n], [r]) => {
    r === !0 && n === !1 ? Au(() => {
      t.value.splice(0);
    }) : r === !1 && n === !0 && (t.value = Ht.slice());
  }, { flush: "post" }), () => {
    var n;
    return (n = t.value.find((r) => r != null && r.isConnected)) != null ? n : null;
  };
}
function Dc({ ownerDocument: e }, t) {
  let n = Tc(t);
  Oe(() => {
    dt(() => {
      var r, a;
      t.value || ((r = e.value) == null ? void 0 : r.activeElement) === ((a = e.value) == null ? void 0 : a.body) && zt(n());
    }, { flush: "post" });
  }), it(() => {
    zt(n());
  });
}
function xc({ ownerDocument: e, container: t, initialFocus: n }, r) {
  let a = M(null), o = M(!1);
  return Oe(() => o.value = !0), it(() => o.value = !1), Oe(() => {
    ze([t, n, r], (i, l) => {
      if (i.every((u, p) => (l == null ? void 0 : l[p]) === u) || !r.value)
        return;
      let c = ye(t);
      c && Au(() => {
        var u, p;
        if (!o.value)
          return;
        let d = ye(n), f = (u = e.value) == null ? void 0 : u.activeElement;
        if (d) {
          if (d === f) {
            a.value = f;
            return;
          }
        } else if (c.contains(f)) {
          a.value = f;
          return;
        }
        d ? zt(d) : Fn(c, At.First | At.NoScroll) === Pu.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a.value = (p = e.value) == null ? void 0 : p.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), a;
}
function Cc({ ownerDocument: e, container: t, containers: n, previousActiveElement: r }, a) {
  var o;
  Eu((o = e.value) == null ? void 0 : o.defaultView, "focus", (i) => {
    if (!a.value)
      return;
    let l = Iu(n);
    ye(t) instanceof HTMLElement && l.add(ye(t));
    let c = r.value;
    if (!c)
      return;
    let u = i.target;
    u && u instanceof HTMLElement ? Bu(l, u) ? (r.value = u, zt(u)) : (i.preventDefault(), i.stopPropagation(), zt(c)) : zt(r.value);
  }, !0);
}
function Bu(e, t) {
  for (let n of e)
    if (n.contains(t))
      return !0;
  return !1;
}
let Ma = /* @__PURE__ */ new Map(), vn = /* @__PURE__ */ new Map();
function Li(e, t = M(!0)) {
  dt((n) => {
    var r;
    if (!t.value)
      return;
    let a = ye(e);
    if (!a)
      return;
    n(function() {
      var i;
      if (!a)
        return;
      let l = (i = vn.get(a)) != null ? i : 1;
      if (l === 1 ? vn.delete(a) : vn.set(a, l - 1), l !== 1)
        return;
      let c = Ma.get(a);
      c && (c["aria-hidden"] === null ? a.removeAttribute("aria-hidden") : a.setAttribute("aria-hidden", c["aria-hidden"]), a.inert = c.inert, Ma.delete(a));
    });
    let o = (r = vn.get(a)) != null ? r : 0;
    vn.set(a, o + 1), o === 0 && (Ma.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), a.setAttribute("aria-hidden", "true"), a.inert = !0);
  });
}
let Yu = Symbol("ForcePortalRootContext");
function Rc() {
  return pt(Yu, !1);
}
let Ka = fe({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return bt(Yu, e.force), () => {
    let { force: r, ...a } = e;
    return Fe({ theirProps: a, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function Mc(e) {
  let t = Rn(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let r = t.createElement("div");
  return r.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(r);
}
let Uu = fe({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let r = M(null), a = D(() => Rn(r)), o = Rc(), i = pt(Fu, null), l = M(o === !0 || i == null ? Mc(r.value) : i.resolveTarget());
  return dt(() => {
    o || i != null && (l.value = i.resolveTarget());
  }), it(() => {
    var c, u;
    let p = (c = a.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    p && l.value === p && l.value.children.length <= 0 && ((u = l.value.parentElement) == null || u.removeChild(l.value));
  }), () => {
    if (l.value === null)
      return null;
    let c = { ref: r, "data-headlessui-portal": "" };
    return Ve(mu, { to: l.value }, Fe({ ourProps: c, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Fu = Symbol("PortalGroupContext"), Nc = fe({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let r = sn({ resolveTarget() {
    return e.target;
  } });
  return bt(Fu, r), () => {
    let { target: a, ...o } = e;
    return Fe({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), ju = Symbol("StackContext");
var Qa = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Qa || {});
function Ec() {
  return pt(ju, () => {
  });
}
function Ac({ type: e, enabled: t, element: n, onUpdate: r }) {
  let a = Ec();
  function o(...i) {
    r == null || r(...i), a(...i);
  }
  Oe(() => {
    ze(t, (i, l) => {
      i ? o(0, e, n) : l === !0 && o(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), it(() => {
    t.value && o(1, e, n);
  }), bt(ju, o);
}
let Vu = Symbol("DescriptionContext");
function Ic() {
  let e = pt(Vu, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Hu({ slot: e = M({}), name: t = "Description", props: n = {} } = {}) {
  let r = M([]);
  function a(o) {
    return r.value.push(o), () => {
      let i = r.value.indexOf(o);
      i !== -1 && r.value.splice(i, 1);
    };
  }
  return bt(Vu, { register: a, slot: e, name: t, props: n }), D(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
fe({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${vt()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = Ic();
  return Oe(() => it(r.register(e.id))), () => {
    let { name: a = "Description", slot: o = M({}), props: i = {} } = r, { id: l, ...c } = e, u = { ...Object.entries(i).reduce((p, [d, f]) => Object.assign(p, { [d]: b(f) }), {}), id: l };
    return Fe({ ourProps: u, theirProps: c, slot: o.value, attrs: t, slots: n, name: a });
  };
} });
function Lc(e) {
  let t = Ms(e.getSnapshot());
  return it(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function ba() {
  let e = [], t = { addEventListener(n, r, a, o) {
    return n.addEventListener(r, a, o), t.add(() => n.removeEventListener(r, a, o));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...n);
    });
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    t.add(() => clearTimeout(r));
  }, style(n, r, a) {
    let o = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: a }), this.add(() => {
      Object.assign(n.style, { [r]: o });
    });
  }, group(n) {
    let r = ba();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0)
        for (let a of e.splice(r, 1))
          a();
    };
  }, dispose() {
    for (let n of e.splice(0))
      n();
  } };
  return t;
}
function Bc(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(a) {
    return r.add(a), () => r.delete(a);
  }, dispatch(a, ...o) {
    let i = t[a].call(n, ...o);
    i && (n = i, r.forEach((l) => l()));
  } };
}
function Yc() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement;
    e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth;
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, a = r.clientWidth - r.offsetWidth, o = e - a;
    n.style(r, "paddingRight", `${o}px`);
  } };
}
function Uc() {
  if (!Sc())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: n, meta: r }) {
    function a(i) {
      return r.containers.flatMap((l) => l()).some((l) => l.contains(i));
    }
    n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let o = null;
    n.addEventListener(t, "click", (i) => {
      if (i.target instanceof HTMLElement)
        try {
          let l = i.target.closest("a");
          if (!l)
            return;
          let { hash: c } = new URL(l.href), u = t.querySelector(c);
          u && !a(u) && (o = u);
        } catch {
        }
    }, !0), n.addEventListener(t, "touchmove", (i) => {
      i.target instanceof HTMLElement && !a(i.target) && i.preventDefault();
    }, { passive: !1 }), n.add(() => {
      window.scrollTo(0, window.pageYOffset + e), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
    });
  } };
}
function Fc() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function jc(e) {
  let t = {};
  for (let n of e)
    Object.assign(t, n(t));
  return t;
}
let Wt = Bc(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: ba(), meta: /* @__PURE__ */ new Set() };
  return r.count++, r.meta.add(t), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: n }) {
  let r = { doc: e, d: t, meta: jc(n) }, a = [Uc(), Yc(), Fc()];
  a.forEach(({ before: o }) => o == null ? void 0 : o(r)), a.forEach(({ after: o }) => o == null ? void 0 : o(r));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Wt.subscribe(() => {
  let e = Wt.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e)
    t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", a = n.count !== 0;
    (a && !r || !a && r) && Wt.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && Wt.dispatch("TEARDOWN", n);
  }
});
function Vc(e, t, n) {
  let r = Lc(Wt), a = D(() => {
    let o = e.value ? r.value.get(e.value) : void 0;
    return o ? o.count > 0 : !1;
  });
  return ze([e, t], ([o, i], [l], c) => {
    if (!o || !i)
      return;
    Wt.dispatch("PUSH", o, n);
    let u = !1;
    c(() => {
      u || (Wt.dispatch("POP", l ?? o, n), u = !0);
    });
  }, { immediate: !0 }), a;
}
var Hc = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Hc || {});
let Xa = Symbol("DialogContext");
function Mn(e) {
  let t = pt(Xa, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Mn), n;
  }
  return t;
}
let Ln = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Wc = fe({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ln }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${vt()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: a }) {
  var o;
  let i = M(!1);
  Oe(() => {
    i.value = !0;
  });
  let l = M(0), c = ha(), u = D(() => e.open === Ln && c !== null ? (c.value & Qe.Open) === Qe.Open : e.open), p = M(null), d = M(null), f = D(() => Rn(p));
  if (a({ el: p, $el: p }), !(e.open !== Ln || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof u.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value === Ln ? void 0 : e.open}`);
  let m = D(() => i.value && u.value ? 0 : 1), _ = D(() => m.value === 0), x = D(() => l.value > 1), g = pt(Xa, null) !== null, Y = D(() => x.value ? "parent" : "leaf"), P = D(() => c !== null ? (c.value & Qe.Closing) === Qe.Closing : !1), T = D(() => g || P.value ? !1 : _.value), F = D(() => {
    var Q, H, E;
    return (E = Array.from((H = (Q = f.value) == null ? void 0 : Q.querySelectorAll("body > *")) != null ? H : []).find((s) => s.id === "headlessui-portal-root" ? !1 : s.contains(ye(d)) && s instanceof HTMLElement)) != null ? E : null;
  });
  Li(F, T);
  let j = D(() => x.value ? !0 : _.value), W = D(() => {
    var Q, H, E;
    return (E = Array.from((H = (Q = f.value) == null ? void 0 : Q.querySelectorAll("[data-headlessui-portal]")) != null ? H : []).find((s) => s.contains(ye(d)) && s instanceof HTMLElement)) != null ? E : null;
  });
  Li(W, j), Ac({ type: "Dialog", enabled: D(() => m.value === 0), element: p, onUpdate: (Q, H) => {
    if (H === "Dialog")
      return qe(Q, { [Qa.Add]: () => l.value += 1, [Qa.Remove]: () => l.value -= 1 });
  } });
  let Z = Hu({ name: "DialogDescription", slot: D(() => ({ open: u.value })) }), L = M(null), w = { titleId: L, panelRef: M(null), dialogState: m, setTitleId(Q) {
    L.value !== Q && (L.value = Q);
  }, close() {
    t("close", !1);
  } };
  bt(Xa, w);
  function U() {
    var Q, H, E;
    return [...Array.from((H = (Q = f.value) == null ? void 0 : Q.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? H : []).filter((s) => !(s === document.body || s === document.head || !(s instanceof HTMLElement) || s.contains(ye(d)) || w.panelRef.value && s.contains(w.panelRef.value))), (E = w.panelRef.value) != null ? E : p.value];
  }
  let N = D(() => !(!_.value || x.value));
  xu(() => U(), (Q, H) => {
    w.close(), ot(() => H == null ? void 0 : H.focus());
  }, N);
  let G = D(() => !(x.value || m.value !== 0));
  Eu((o = f.value) == null ? void 0 : o.defaultView, "keydown", (Q) => {
    G.value && (Q.defaultPrevented || Q.key === Be.Escape && (Q.preventDefault(), Q.stopPropagation(), w.close()));
  });
  let K = D(() => !(P.value || m.value !== 0 || g));
  return Vc(f, K, (Q) => {
    var H;
    return { containers: [...(H = Q.containers) != null ? H : [], U] };
  }), dt((Q) => {
    if (m.value !== 0)
      return;
    let H = ye(p);
    if (!H)
      return;
    let E = new ResizeObserver((s) => {
      for (let v of s) {
        let $ = v.target.getBoundingClientRect();
        $.x === 0 && $.y === 0 && $.width === 0 && $.height === 0 && w.close();
      }
    });
    E.observe(H), Q(() => E.disconnect());
  }), () => {
    let { id: Q, open: H, initialFocus: E, ...s } = e, v = { ...n, ref: p, id: Q, role: "dialog", "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": L.value, "aria-describedby": Z.value }, $ = { open: m.value === 0 };
    return Ve(Ka, { force: !0 }, () => [Ve(Uu, () => Ve(Nc, { target: p.value }, () => Ve(Ka, { force: !1 }, () => Ve(pn, { initialFocus: E, containers: U, features: _.value ? qe(Y.value, { parent: pn.features.RestoreFocus, leaf: pn.features.All & ~pn.features.FocusLock }) : pn.features.None }, () => Fe({ ourProps: v, theirProps: s, slot: $, attrs: n, slots: r, visible: m.value === 0, features: an.RenderStrategy | an.Static, name: "Dialog" }))))), Ve(xn, { features: on.Hidden, ref: d })]);
  };
} });
fe({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${vt()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = Mn("DialogOverlay");
  function a(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), r.close());
  }
  return () => {
    let { id: o, ...i } = e;
    return Fe({ ourProps: { id: o, "aria-hidden": !0, onClick: a }, theirProps: i, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
fe({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${vt()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: r }) {
  let a = Mn("DialogBackdrop"), o = M(null);
  return r({ el: o, $el: o }), Oe(() => {
    if (a.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...l } = e, c = { id: i, ref: o, "aria-hidden": !0 };
    return Ve(Ka, { force: !0 }, () => Ve(Uu, () => Fe({ ourProps: c, theirProps: { ...t, ...l }, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let qc = fe({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${vt()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let a = Mn("DialogPanel");
  r({ el: a.panelRef, $el: a.panelRef });
  function o(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...l } = e, c = { id: i, ref: a.panelRef, onClick: o };
    return Fe({ ourProps: c, theirProps: l, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), zc = fe({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${vt()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = Mn("DialogTitle");
  return Oe(() => {
    r.setTitleId(e.id), it(() => r.setTitleId(null));
  }), () => {
    let { id: a, ...o } = e;
    return Fe({ ourProps: { id: a }, theirProps: o, slot: { open: r.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
function Gc(e, t) {
  return e === t;
}
var Kc = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Kc || {}), Qc = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Qc || {}), Xc = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Xc || {});
function Zc(e) {
  requestAnimationFrame(() => requestAnimationFrame(e));
}
let Wu = Symbol("ListboxContext");
function Nn(e) {
  let t = pt(Wu, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Nn), n;
  }
  return t;
}
let Jc = fe({ name: "Listbox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Gc }, horizontal: { type: [Boolean], default: !1 }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: r }) {
  let a = M(1), o = M(null), i = M(null), l = M(null), c = M([]), u = M(""), p = M(null), d = M(1);
  function f(P = (T) => T) {
    let T = p.value !== null ? c.value[p.value] : null, F = Du(P(c.value.slice()), (W) => ye(W.dataRef.domRef)), j = T ? F.indexOf(T) : null;
    return j === -1 && (j = null), { options: F, activeOptionIndex: j };
  }
  let m = D(() => e.multiple ? 1 : 0), [_, x] = Nu(D(() => e.modelValue === void 0 ? qe(m.value, { [1]: [], [0]: void 0 }) : e.modelValue), (P) => r("update:modelValue", P), D(() => e.defaultValue)), g = { listboxState: a, value: _, mode: m, compare(P, T) {
    if (typeof e.by == "string") {
      let F = e.by;
      return (P == null ? void 0 : P[F]) === (T == null ? void 0 : T[F]);
    }
    return e.by(P, T);
  }, orientation: D(() => e.horizontal ? "horizontal" : "vertical"), labelRef: o, buttonRef: i, optionsRef: l, disabled: D(() => e.disabled), options: c, searchQuery: u, activeOptionIndex: p, activationTrigger: d, closeListbox() {
    e.disabled || a.value !== 1 && (a.value = 1, p.value = null);
  }, openListbox() {
    e.disabled || a.value !== 0 && (a.value = 0);
  }, goToOption(P, T, F) {
    if (e.disabled || a.value === 1)
      return;
    let j = f(), W = pc(P === nt.Specific ? { focus: nt.Specific, id: T } : { focus: P }, { resolveItems: () => j.options, resolveActiveIndex: () => j.activeOptionIndex, resolveId: (Z) => Z.id, resolveDisabled: (Z) => Z.dataRef.disabled });
    u.value = "", p.value = W, d.value = F ?? 1, c.value = j.options;
  }, search(P) {
    if (e.disabled || a.value === 1)
      return;
    let T = u.value !== "" ? 0 : 1;
    u.value += P.toLowerCase();
    let F = (p.value !== null ? c.value.slice(p.value + T).concat(c.value.slice(0, p.value + T)) : c.value).find((W) => W.dataRef.textValue.startsWith(u.value) && !W.dataRef.disabled), j = F ? c.value.indexOf(F) : -1;
    j === -1 || j === p.value || (p.value = j, d.value = 1);
  }, clearSearch() {
    e.disabled || a.value !== 1 && u.value !== "" && (u.value = "");
  }, registerOption(P, T) {
    let F = f((j) => [...j, { id: P, dataRef: T }]);
    c.value = F.options, p.value = F.activeOptionIndex;
  }, unregisterOption(P) {
    let T = f((F) => {
      let j = F.findIndex((W) => W.id === P);
      return j !== -1 && F.splice(j, 1), F;
    });
    c.value = T.options, p.value = T.activeOptionIndex, d.value = 1;
  }, select(P) {
    e.disabled || x(qe(m.value, { [0]: () => P, [1]: () => {
      let T = ht(g.value.value).slice(), F = ht(P), j = T.findIndex((W) => g.compare(F, ht(W)));
      return j === -1 ? T.push(F) : T.splice(j, 1), T;
    } }));
  } };
  xu([i, l], (P, T) => {
    var F;
    g.closeListbox(), Tu(T, vi.Loose) || (P.preventDefault(), (F = ye(i)) == null || F.focus());
  }, D(() => a.value === 0)), bt(Wu, g), Su(D(() => qe(a.value, { [0]: Qe.Open, [1]: Qe.Closed })));
  let Y = D(() => {
    var P;
    return (P = ye(i)) == null ? void 0 : P.closest("form");
  });
  return Oe(() => {
    ze([Y], () => {
      if (!Y.value || e.defaultValue === void 0)
        return;
      function P() {
        g.select(e.defaultValue);
      }
      return Y.value.addEventListener("reset", P), () => {
        var T;
        (T = Y.value) == null || T.removeEventListener("reset", P);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: P, modelValue: T, disabled: F, ...j } = e, W = { open: a.value === 0, disabled: F, value: _.value };
    return Ve(pe, [...P != null && _.value != null ? Cu({ [P]: _.value }).map(([Z, L]) => Ve(xn, Ou({ features: on.Hidden, key: Z, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: Z, value: L }))) : [], Fe({ ourProps: {}, theirProps: { ...n, ...ma(j, ["defaultValue", "onUpdate:modelValue", "horizontal", "multiple", "by"]) }, slot: W, slots: t, attrs: n, name: "Listbox" })]);
  };
} }), ef = fe({ name: "ListboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-listbox-label-${vt()}` } }, setup(e, { attrs: t, slots: n }) {
  let r = Nn("ListboxLabel");
  function a() {
    var o;
    (o = ye(r.buttonRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: r.listboxState.value === 0, disabled: r.disabled.value }, { id: i, ...l } = e, c = { id: i, ref: r.labelRef, onClick: a };
    return Fe({ ourProps: c, theirProps: l, slot: o, attrs: t, slots: n, name: "ListboxLabel" });
  };
} }), tf = fe({ name: "ListboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-listbox-button-${vt()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let a = Nn("ListboxButton");
  r({ el: a.buttonRef, $el: a.buttonRef });
  function o(u) {
    switch (u.key) {
      case Be.Space:
      case Be.Enter:
      case Be.ArrowDown:
        u.preventDefault(), a.openListbox(), ot(() => {
          var p;
          (p = ye(a.optionsRef)) == null || p.focus({ preventScroll: !0 }), a.value.value || a.goToOption(nt.First);
        });
        break;
      case Be.ArrowUp:
        u.preventDefault(), a.openListbox(), ot(() => {
          var p;
          (p = ye(a.optionsRef)) == null || p.focus({ preventScroll: !0 }), a.value.value || a.goToOption(nt.Last);
        });
        break;
    }
  }
  function i(u) {
    switch (u.key) {
      case Be.Space:
        u.preventDefault();
        break;
    }
  }
  function l(u) {
    a.disabled.value || (a.listboxState.value === 0 ? (a.closeListbox(), ot(() => {
      var p;
      return (p = ye(a.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
    })) : (u.preventDefault(), a.openListbox(), Zc(() => {
      var p;
      return (p = ye(a.optionsRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
    })));
  }
  let c = ku(D(() => ({ as: e.as, type: t.type })), a.buttonRef);
  return () => {
    var u, p;
    let d = { open: a.listboxState.value === 0, disabled: a.disabled.value, value: a.value.value }, { id: f, ...m } = e, _ = { ref: a.buttonRef, id: f, type: c.value, "aria-haspopup": "listbox", "aria-controls": (u = ye(a.optionsRef)) == null ? void 0 : u.id, "aria-expanded": a.disabled.value ? void 0 : a.listboxState.value === 0, "aria-labelledby": a.labelRef.value ? [(p = ye(a.labelRef)) == null ? void 0 : p.id, f].join(" ") : void 0, disabled: a.disabled.value === !0 ? !0 : void 0, onKeydown: o, onKeyup: i, onClick: l };
    return Fe({ ourProps: _, theirProps: m, slot: d, attrs: t, slots: n, name: "ListboxButton" });
  };
} }), nf = fe({ name: "ListboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-listbox-options-${vt()}` } }, setup(e, { attrs: t, slots: n, expose: r }) {
  let a = Nn("ListboxOptions"), o = M(null);
  r({ el: a.optionsRef, $el: a.optionsRef });
  function i(u) {
    switch (o.value && clearTimeout(o.value), u.key) {
      case Be.Space:
        if (a.searchQuery.value !== "")
          return u.preventDefault(), u.stopPropagation(), a.search(u.key);
      case Be.Enter:
        if (u.preventDefault(), u.stopPropagation(), a.activeOptionIndex.value !== null) {
          let p = a.options.value[a.activeOptionIndex.value];
          a.select(p.dataRef.value);
        }
        a.mode.value === 0 && (a.closeListbox(), ot(() => {
          var p;
          return (p = ye(a.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        }));
        break;
      case qe(a.orientation.value, { vertical: Be.ArrowDown, horizontal: Be.ArrowRight }):
        return u.preventDefault(), u.stopPropagation(), a.goToOption(nt.Next);
      case qe(a.orientation.value, { vertical: Be.ArrowUp, horizontal: Be.ArrowLeft }):
        return u.preventDefault(), u.stopPropagation(), a.goToOption(nt.Previous);
      case Be.Home:
      case Be.PageUp:
        return u.preventDefault(), u.stopPropagation(), a.goToOption(nt.First);
      case Be.End:
      case Be.PageDown:
        return u.preventDefault(), u.stopPropagation(), a.goToOption(nt.Last);
      case Be.Escape:
        u.preventDefault(), u.stopPropagation(), a.closeListbox(), ot(() => {
          var p;
          return (p = ye(a.buttonRef)) == null ? void 0 : p.focus({ preventScroll: !0 });
        });
        break;
      case Be.Tab:
        u.preventDefault(), u.stopPropagation();
        break;
      default:
        u.key.length === 1 && (a.search(u.key), o.value = setTimeout(() => a.clearSearch(), 350));
        break;
    }
  }
  let l = ha(), c = D(() => l !== null ? (l.value & Qe.Open) === Qe.Open : a.listboxState.value === 0);
  return () => {
    var u, p, d, f;
    let m = { open: a.listboxState.value === 0 }, { id: _, ...x } = e, g = { "aria-activedescendant": a.activeOptionIndex.value === null || (u = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : u.id, "aria-multiselectable": a.mode.value === 1 ? !0 : void 0, "aria-labelledby": (f = (p = ye(a.labelRef)) == null ? void 0 : p.id) != null ? f : (d = ye(a.buttonRef)) == null ? void 0 : d.id, "aria-orientation": a.orientation.value, id: _, onKeydown: i, role: "listbox", tabIndex: 0, ref: a.optionsRef };
    return Fe({ ourProps: g, theirProps: x, slot: m, attrs: t, slots: n, features: an.RenderStrategy | an.Static, visible: c.value, name: "ListboxOptions" });
  };
} }), rf = fe({ name: "ListboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-listbox.option-${vt()}` } }, setup(e, { slots: t, attrs: n, expose: r }) {
  let a = Nn("ListboxOption"), o = M(null);
  r({ el: o, $el: o });
  let i = D(() => a.activeOptionIndex.value !== null ? a.options.value[a.activeOptionIndex.value].id === e.id : !1), l = D(() => qe(a.mode.value, { [0]: () => a.compare(ht(a.value.value), ht(e.value)), [1]: () => ht(a.value.value).some((g) => a.compare(ht(g), ht(e.value))) })), c = D(() => qe(a.mode.value, { [1]: () => {
    var g;
    let Y = ht(a.value.value);
    return ((g = a.options.value.find((P) => Y.some((T) => a.compare(ht(T), ht(P.dataRef.value))))) == null ? void 0 : g.id) === e.id;
  }, [0]: () => l.value })), u = D(() => ({ disabled: e.disabled, value: e.value, textValue: "", domRef: o }));
  Oe(() => {
    var g, Y;
    let P = (Y = (g = ye(o)) == null ? void 0 : g.textContent) == null ? void 0 : Y.toLowerCase().trim();
    P !== void 0 && (u.value.textValue = P);
  }), Oe(() => a.registerOption(e.id, u)), it(() => a.unregisterOption(e.id)), Oe(() => {
    ze([a.listboxState, l], () => {
      a.listboxState.value === 0 && l.value && qe(a.mode.value, { [1]: () => {
        c.value && a.goToOption(nt.Specific, e.id);
      }, [0]: () => {
        a.goToOption(nt.Specific, e.id);
      } });
    }, { immediate: !0 });
  }), dt(() => {
    a.listboxState.value === 0 && i.value && a.activationTrigger.value !== 0 && ot(() => {
      var g, Y;
      return (Y = (g = ye(o)) == null ? void 0 : g.scrollIntoView) == null ? void 0 : Y.call(g, { block: "nearest" });
    });
  });
  function p(g) {
    if (e.disabled)
      return g.preventDefault();
    a.select(e.value), a.mode.value === 0 && (a.closeListbox(), ot(() => {
      var Y;
      return (Y = ye(a.buttonRef)) == null ? void 0 : Y.focus({ preventScroll: !0 });
    }));
  }
  function d() {
    if (e.disabled)
      return a.goToOption(nt.Nothing);
    a.goToOption(nt.Specific, e.id);
  }
  let f = $c();
  function m(g) {
    f.update(g);
  }
  function _(g) {
    f.wasMoved(g) && (e.disabled || i.value || a.goToOption(nt.Specific, e.id, 0));
  }
  function x(g) {
    f.wasMoved(g) && (e.disabled || i.value && a.goToOption(nt.Nothing));
  }
  return () => {
    let { disabled: g } = e, Y = { active: i.value, selected: l.value, disabled: g }, { id: P, value: T, disabled: F, ...j } = e, W = { id: P, ref: o, role: "option", tabIndex: g === !0 ? void 0 : -1, "aria-disabled": g === !0 ? !0 : void 0, "aria-selected": l.value, disabled: void 0, onClick: p, onFocus: d, onPointerenter: m, onMouseenter: m, onPointermove: _, onMousemove: _, onPointerleave: x, onMouseleave: x };
    return Fe({ ourProps: W, theirProps: j, slot: Y, attrs: n, slots: t, name: "ListboxOption" });
  };
} }), qu = Symbol("LabelContext");
function zu() {
  let e = pt(qu, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, zu), t;
  }
  return e;
}
function af({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let r = M([]);
  function a(o) {
    return r.value.push(o), () => {
      let i = r.value.indexOf(o);
      i !== -1 && r.value.splice(i, 1);
    };
  }
  return bt(qu, { register: a, slot: e, name: t, props: n }), D(() => r.value.length > 0 ? r.value.join(" ") : void 0);
}
fe({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${vt()}` } }, setup(e, { slots: t, attrs: n }) {
  let r = zu();
  return Oe(() => it(r.register(e.id))), () => {
    let { name: a = "Label", slot: o = {}, props: i = {} } = r, { id: l, passive: c, ...u } = e, p = { ...Object.entries(i).reduce((d, [f, m]) => Object.assign(d, { [f]: b(m) }), {}), id: l };
    return c && (delete p.onClick, delete p.htmlFor, delete u.onClick), Fe({ ourProps: p, theirProps: u, slot: o, attrs: n, slots: t, name: a });
  };
} });
let Gu = Symbol("GroupContext");
fe({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let r = M(null), a = af({ name: "SwitchLabel", props: { htmlFor: D(() => {
    var i;
    return (i = r.value) == null ? void 0 : i.id;
  }), onClick(i) {
    r.value && (i.currentTarget.tagName === "LABEL" && i.preventDefault(), r.value.click(), r.value.focus({ preventScroll: !0 }));
  } } }), o = Hu({ name: "SwitchDescription" });
  return bt(Gu, { switchRef: r, labelledby: a, describedby: o }), () => Fe({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: n, name: "SwitchGroup" });
} });
let of = fe({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${vt()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: r, expose: a }) {
  let o = pt(Gu, null), [i, l] = Nu(D(() => e.modelValue), (g) => t("update:modelValue", g), D(() => e.defaultChecked));
  function c() {
    l(!i.value);
  }
  let u = M(null), p = o === null ? u : o.switchRef, d = ku(D(() => ({ as: e.as, type: n.type })), p);
  a({ el: p, $el: p });
  function f(g) {
    g.preventDefault(), c();
  }
  function m(g) {
    g.key === Be.Space ? (g.preventDefault(), c()) : g.key === Be.Enter && Oc(g.currentTarget);
  }
  function _(g) {
    g.preventDefault();
  }
  let x = D(() => {
    var g, Y;
    return (Y = (g = ye(p)) == null ? void 0 : g.closest) == null ? void 0 : Y.call(g, "form");
  });
  return Oe(() => {
    ze([x], () => {
      if (!x.value || e.defaultChecked === void 0)
        return;
      function g() {
        l(e.defaultChecked);
      }
      return x.value.addEventListener("reset", g), () => {
        var Y;
        (Y = x.value) == null || Y.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: g, name: Y, value: P, ...T } = e, F = { checked: i.value }, j = { id: g, ref: p, role: "switch", type: d.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": o == null ? void 0 : o.labelledby.value, "aria-describedby": o == null ? void 0 : o.describedby.value, onClick: f, onKeyup: m, onKeypress: _ };
    return Ve(pe, [Y != null && i.value != null ? Ve(xn, Ou({ features: on.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: i.value, name: Y, value: P })) : null, Fe({ ourProps: j, theirProps: { ...n, ...ma(T, ["modelValue", "defaultChecked"]) }, slot: F, attrs: n, slots: r, name: "Switch" })]);
  };
} });
function lf(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function Na(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Bn(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Za = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Za || {});
function uf(e, t) {
  let n = ba();
  if (!e)
    return n.dispose;
  let { transitionDuration: r, transitionDelay: a } = getComputedStyle(e), [o, i] = [r, a].map((l) => {
    let [c = 0] = l.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, p) => p - u);
    return c;
  });
  return o !== 0 ? n.setTimeout(() => t("finished"), o + i) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Bi(e, t, n, r, a, o) {
  let i = ba(), l = o !== void 0 ? lf(o) : () => {
  };
  return Bn(e, ...a), Na(e, ...t, ...n), i.nextFrame(() => {
    Bn(e, ...n), Na(e, ...r), i.add(uf(e, (c) => (Bn(e, ...r, ...t), Na(e, ...a), l(c))));
  }), i.add(() => Bn(e, ...t, ...n, ...r, ...a)), i.add(() => l("cancelled")), i.dispose;
}
function Ut(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let yi = Symbol("TransitionContext");
var sf = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(sf || {});
function cf() {
  return pt(yi, null) !== null;
}
function ff() {
  let e = pt(yi, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function df() {
  let e = pt(mi, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let mi = Symbol("NestingContext");
function ga(e) {
  return "children" in e ? ga(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ku(e) {
  let t = M([]), n = M(!1);
  Oe(() => n.value = !0), it(() => n.value = !1);
  function r(o, i = It.Hidden) {
    let l = t.value.findIndex(({ id: c }) => c === o);
    l !== -1 && (qe(i, { [It.Unmount]() {
      t.value.splice(l, 1);
    }, [It.Hidden]() {
      t.value[l].state = "hidden";
    } }), !ga(t) && n.value && (e == null || e()));
  }
  function a(o) {
    let i = t.value.find(({ id: l }) => l === o);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: o, state: "visible" }), () => r(o, It.Unmount);
  }
  return { children: t, register: a, unregister: r };
}
let Qu = an.RenderStrategy, Xu = fe({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r, expose: a }) {
  let o = M(0);
  function i() {
    o.value |= Qe.Opening, t("beforeEnter");
  }
  function l() {
    o.value &= ~Qe.Opening, t("afterEnter");
  }
  function c() {
    o.value |= Qe.Closing, t("beforeLeave");
  }
  function u() {
    o.value &= ~Qe.Closing, t("afterLeave");
  }
  if (!cf() && vc())
    return () => Ve(hi, { ...e, onBeforeEnter: i, onAfterEnter: l, onBeforeLeave: c, onAfterLeave: u }, r);
  let p = M(null), d = M("visible"), f = D(() => e.unmount ? It.Unmount : It.Hidden);
  a({ el: p, $el: p });
  let { show: m, appear: _ } = ff(), { register: x, unregister: g } = df(), Y = { value: !0 }, P = vt(), T = { value: !1 }, F = Ku(() => {
    !T.value && d.value !== "hidden" && (d.value = "hidden", g(P), u());
  });
  Oe(() => {
    let K = x(P);
    it(K);
  }), dt(() => {
    if (f.value === It.Hidden && P) {
      if (m && d.value !== "visible") {
        d.value = "visible";
        return;
      }
      qe(d.value, { hidden: () => g(P), visible: () => x(P) });
    }
  });
  let j = Ut(e.enter), W = Ut(e.enterFrom), Z = Ut(e.enterTo), L = Ut(e.entered), w = Ut(e.leave), U = Ut(e.leaveFrom), N = Ut(e.leaveTo);
  Oe(() => {
    dt(() => {
      if (d.value === "visible") {
        let K = ye(p);
        if (K instanceof Comment && K.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function G(K) {
    let Q = Y.value && !_.value, H = ye(p);
    !H || !(H instanceof HTMLElement) || Q || (T.value = !0, m.value && i(), m.value || c(), K(m.value ? Bi(H, j, W, Z, L, (E) => {
      T.value = !1, E === Za.Finished && l();
    }) : Bi(H, w, U, N, L, (E) => {
      T.value = !1, E === Za.Finished && (ga(F) || (d.value = "hidden", g(P), u()));
    })));
  }
  return Oe(() => {
    ze([m], (K, Q, H) => {
      G(H), Y.value = !1;
    }, { immediate: !0 });
  }), bt(mi, F), Su(D(() => qe(d.value, { visible: Qe.Open, hidden: Qe.Closed }) | o.value)), () => {
    let { appear: K, show: Q, enter: H, enterFrom: E, enterTo: s, entered: v, leave: $, leaveFrom: S, leaveTo: z, ...X } = e, q = { ref: p }, y = { ...X, ..._ && m && Cn.isServer ? { class: ae([n.class, X.class, ...j, ...W]) } : {} };
    return Fe({ theirProps: y, ourProps: q, slot: {}, slots: r, attrs: n, features: Qu, visible: d.value === "visible", name: "TransitionChild" });
  };
} }), pf = Xu, hi = fe({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: r }) {
  let a = ha(), o = D(() => e.show === null && a !== null ? (a.value & Qe.Open) === Qe.Open : e.show);
  dt(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = M(o.value ? "visible" : "hidden"), l = Ku(() => {
    i.value = "hidden";
  }), c = M(!0), u = { show: o, appear: D(() => e.appear || !c.value) };
  return Oe(() => {
    dt(() => {
      c.value = !1, o.value ? i.value = "visible" : ga(l) || (i.value = "hidden");
    });
  }), bt(mi, l), bt(yi, u), () => {
    let p = ma(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return Fe({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...r, default: () => [Ve(pf, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...d, ...p }, r.default)] }, attrs: {}, features: Qu, visible: i.value === "visible", name: "Transition" });
  };
} });
const vf = fe({
  components: {
    TransitionRoot: hi
  },
  props: {
    isOpen: {
      type: Boolean,
      required: !1,
      default: !1
    },
    message: {
      type: String,
      required: !1
    },
    mobileMessage: {
      type: String,
      required: !1
    },
    timer: {
      type: Number,
      required: !1
    }
  },
  setup(e, { emit: t }) {
    ze(
      () => e.isOpen,
      (r, a) => {
        e.timer && e.isOpen && window.setTimeout(() => {
          n();
        }, e.timer);
      }
    );
    function n() {
      t("close");
    }
    return {
      close: n
    };
  }
}), yf = { class: "w-full fixed z-50 inset-x-0 bottom-0 pb-2 sm:pb-5" }, mf = { class: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" }, hf = { class: "rounded-lg bg-blue-600 p-2 shadow-lg sm:p-3" }, bf = { class: "flex flex-wrap items-center justify-between" }, gf = { class: "flex w-0 flex-1 items-center" }, _f = { class: "flex px-2" }, wf = { class: "w-full block ml-3 py-2 whitespace-nowrap font-medium text-white text-sm overflow-auto" }, Of = { class: "md:hidden" }, $f = { class: "hidden md:inline" }, Sf = { class: "order-2 flex-shrink-0 sm:order-3 sm:ml-2" }, kf = /* @__PURE__ */ C("span", { class: "sr-only" }, "Dismiss", -1), Pf = /* @__PURE__ */ C("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-6 w-6 text-white"
}, [
  /* @__PURE__ */ C("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Tf = [
  kf,
  Pf
];
function Df(e, t, n, r, a, o) {
  const i = Ke("TransitionRoot");
  return O(), me(i, {
    appear: "",
    show: e.isOpen,
    as: "template"
  }, {
    default: te(() => [
      C("div", yf, [
        C("div", mf, [
          C("div", hf, [
            C("div", bf, [
              C("div", gf, [
                C("span", _f, [
                  J(e.$slots, "icon")
                ]),
                C("p", wf, [
                  C("span", Of, be(e.mobileMessage ?? e.message), 1),
                  C("span", $f, be(e.message), 1)
                ])
              ]),
              C("div", Sf, [
                C("button", {
                  onClick: t[0] || (t[0] = (...l) => e.close && e.close(...l)),
                  type: "button",
                  class: "-mr-1 flex rounded-md p-2 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-base-300"
                }, Tf)
              ])
            ])
          ])
        ])
      ])
    ]),
    _: 3
  }, 8, ["show"]);
}
const xf = /* @__PURE__ */ ct(vf, [["render", Df]]), Cf = fe({
  props: {
    rootItem: {
      type: Object,
      required: !0
    },
    currentItem: {
      type: Object,
      required: !0
    },
    items: {
      type: Object,
      required: !0
    }
  },
  emits: ["selectBreadcrumb"],
  setup(e, { emit: t }) {
    function n(r) {
      t("selectBreadcrumb", r);
    }
    return {
      selectBreadcrumb: n
    };
  }
}), Rf = {
  key: 0,
  class: "flex",
  "aria-label": "Breadcrumb"
}, Mf = {
  role: "list",
  class: "flex items-center space-x-4 flex-wrap ml-5"
}, Nf = { class: "flex items-center -ml-5" }, Ef = /* @__PURE__ */ C("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "h-5 w-5 flex-shrink-0"
}, [
  /* @__PURE__ */ C("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
  })
], -1), Af = /* @__PURE__ */ C("span", { class: "sr-only" }, "Home", -1), If = [
  Ef,
  Af
], Lf = { class: "flex items-center" }, Bf = /* @__PURE__ */ C("span", { class: "text-gray-400" }, "|", -1), Yf = ["onClick"], Uf = { class: "flex items-center -ml-5" }, Ff = /* @__PURE__ */ C("span", { class: "text-gray-400" }, "|", -1), jf = { class: "ml-4 text-gray-700 text-sm font-semibold" };
function Vf(e, t, n, r, a, o) {
  var i;
  return e.rootItem && e.items ? (O(), A("nav", Rf, [
    C("ol", Mf, [
      C("li", Nf, [
        C("button", {
          onClick: t[0] || (t[0] = (l) => e.selectBreadcrumb(e.rootItem)),
          class: "text-gray-400 hover:text-gray-500"
        }, If)
      ]),
      (O(!0), A(pe, null, Re(e.items, (l) => (O(), A("li", {
        key: l.name
      }, [
        C("div", Lf, [
          Bf,
          C("button", {
            onClick: (c) => e.selectBreadcrumb(l),
            class: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
          }, be(l.name), 9, Yf)
        ])
      ]))), 128)),
      C("li", Uf, [
        Ff,
        C("button", jf, be((i = e.currentItem) == null ? void 0 : i.name), 1)
      ])
    ])
  ])) : I("", !0);
}
const Hf = /* @__PURE__ */ ct(Cf, [["render", Vf]]), Wf = fe({
  props: {
    cssClasses: {
      type: String,
      required: !1
    },
    buttonStyle: {
      type: String,
      default: void 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return {
      defaultCssClasses: "border rounded-md px-4 py-2 text-sm font-medium shadow-sm",
      secondaryStyling: "border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
      primaryStyling: "border-transparent text-white bg-blue-600 hover:bg-blue-700"
    };
  }
}), qf = ["disabled"], zf = {
  key: 1,
  class: "inline-flex items-center justify-center text-sm font-medium text-white h-5"
}, Gf = /* @__PURE__ */ C("span", { class: "inline-flex items-center gap-px" }, [
  /* @__PURE__ */ C("span", { class: "animate-blink mx-px h-1.5 w-1.5 rounded-full bg-white" }),
  /* @__PURE__ */ C("span", { class: "animate-blink animation-delay-150 mx-px h-1.5 w-1.5 rounded-full bg-white" }),
  /* @__PURE__ */ C("span", { class: "animate-blink animation-delay-300 mx-px h-1.5 w-1.5 rounded-full bg-white" })
], -1), Kf = [
  Gf
];
function Qf(e, t, n, r, a, o) {
  return O(), A("button", {
    type: "button",
    disabled: e.disabled || e.loading,
    class: ae(["cursor-pointer inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100", [
      e.cssClasses ?? e.defaultCssClasses,
      e.buttonStyle === "secondary" ? e.secondaryStyling : "",
      e.buttonStyle === "primary" ? e.primaryStyling : "",
      e.disabled || e.loading ? "!opacity-50 !pointer-events-none" : ""
    ]])
  }, [
    e.loading ? I("", !0) : J(e.$slots, "default", { key: 0 }),
    e.loading ? (O(), A("div", zf, Kf)) : I("", !0)
  ], 10, qf);
}
const Zu = /* @__PURE__ */ ct(Wf, [["render", Qf]]), Xf = fe({
  props: {
    itemName: {
      type: String,
      default: "checkbox"
    },
    title: {
      type: String,
      default: "Checkbox items"
    },
    items: {
      type: Array,
      default: []
    },
    modelValue: {
      type: Array,
      default: []
    }
  },
  setup(e, { emit: t }) {
    function n(a) {
      return e.modelValue.filter((o) => o.value === a.value).length > 0;
    }
    function r(a, o) {
      const i = o ? [...e.modelValue, a] : e.modelValue.filter(
        (l) => l.value !== a.value
      );
      t("update:modelValue", i);
    }
    return {
      isItemChecked: n,
      update: r
    };
  }
}), Zf = { class: "space-y-5" }, Jf = { class: "sr-only" }, ed = { class: "flex h-5 items-center" }, td = ["id", "onChange", "name", "checked", "value"], nd = ["for"];
function rd(e, t, n, r, a, o) {
  return O(), A("fieldset", Zf, [
    C("legend", Jf, be(e.title), 1),
    (O(!0), A(pe, null, Re(e.items, (i, l) => (O(), A("div", {
      class: "relative flex items-start",
      key: i.label
    }, [
      C("div", ed, [
        C("input", {
          id: e.itemName + "-" + l,
          onChange: (c) => e.update(
            i,
            c.target.checked
          ),
          name: e.itemName,
          checked: e.modelValue.map((c) => c.value).includes(i.value),
          value: e.modelValue,
          type: "checkbox",
          class: "h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        }, null, 40, td)
      ]),
      C("label", {
        for: e.itemName + "-" + l,
        class: "ml-3 text-sm font-medium text-gray-700"
      }, be(i.label), 9, nd)
    ]))), 128))
  ]);
}
const ad = /* @__PURE__ */ ct(Xf, [["render", rd]]);
function le(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function ne(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? jn = function(n) {
    return typeof n;
  } : jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, jn(e);
}
function se(e) {
  ne(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || jn(e) === "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), /* @__PURE__ */ new Date(NaN));
}
function Lt(e, t) {
  ne(2, arguments);
  var n = se(e), r = le(t);
  return isNaN(r) ? /* @__PURE__ */ new Date(NaN) : (r && n.setDate(n.getDate() + r), n);
}
function Tt(e, t) {
  ne(2, arguments);
  var n = se(e), r = le(t);
  if (isNaN(r))
    return /* @__PURE__ */ new Date(NaN);
  if (!r)
    return n;
  var a = n.getDate(), o = new Date(n.getTime());
  o.setMonth(n.getMonth() + r + 1, 0);
  var i = o.getDate();
  return a >= i ? o : (n.setFullYear(o.getFullYear(), o.getMonth(), a), n);
}
function Vn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Vn = function(n) {
    return typeof n;
  } : Vn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Vn(e);
}
function Ju(e, t) {
  if (ne(2, arguments), !t || Vn(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? le(t.years) : 0, r = t.months ? le(t.months) : 0, a = t.weeks ? le(t.weeks) : 0, o = t.days ? le(t.days) : 0, i = t.hours ? le(t.hours) : 0, l = t.minutes ? le(t.minutes) : 0, c = t.seconds ? le(t.seconds) : 0, u = se(e), p = r || n ? Tt(u, r + n * 12) : u, d = o || a ? Lt(p, o + a * 7) : p, f = l + i * 60, m = c + f * 60, _ = m * 1e3, x = new Date(d.getTime() + _);
  return x;
}
function od(e, t) {
  ne(2, arguments);
  var n = se(e).getTime(), r = le(t);
  return new Date(n + r);
}
var id = {};
function Dt() {
  return id;
}
function Kt(e, t) {
  var n, r, a, o, i, l, c, u;
  ne(1, arguments);
  var p = Dt(), d = le((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : p.weekStartsOn) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = se(e), m = f.getDay(), _ = (m < d ? 7 : 0) + m - d;
  return f.setDate(f.getDate() - _), f.setHours(0, 0, 0, 0), f;
}
function xr(e) {
  return ne(1, arguments), Kt(e, {
    weekStartsOn: 1
  });
}
function ld(e) {
  ne(1, arguments);
  var t = se(e), n = t.getFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  var a = xr(r), o = /* @__PURE__ */ new Date(0);
  o.setFullYear(n, 0, 4), o.setHours(0, 0, 0, 0);
  var i = xr(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function ud(e) {
  ne(1, arguments);
  var t = ld(e), n = /* @__PURE__ */ new Date(0);
  n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0);
  var r = xr(n);
  return r;
}
function Cr(e) {
  var t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
  return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Yi(e) {
  ne(1, arguments);
  var t = se(e);
  return t.setHours(0, 0, 0, 0), t;
}
var sd = 864e5;
function cd(e, t) {
  ne(2, arguments);
  var n = Yi(e), r = Yi(t), a = n.getTime() - Cr(n), o = r.getTime() - Cr(r);
  return Math.round((a - o) / sd);
}
function es(e, t) {
  ne(2, arguments);
  var n = le(t);
  return Tt(e, n * 12);
}
var bi = 6e4, gi = 36e5, fd = 1e3;
function Hn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Hn = function(n) {
    return typeof n;
  } : Hn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Hn(e);
}
function ts(e) {
  return ne(1, arguments), e instanceof Date || Hn(e) === "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Sn(e) {
  if (ne(1, arguments), !ts(e) && typeof e != "number")
    return !1;
  var t = se(e);
  return !isNaN(Number(t));
}
function Ui(e, t) {
  var n;
  ne(1, arguments);
  var r = e || {}, a = se(r.start), o = se(r.end), i = o.getTime();
  if (!(a.getTime() <= i))
    throw new RangeError("Invalid interval");
  var l = [], c = a;
  c.setHours(0, 0, 0, 0);
  var u = Number((n = t == null ? void 0 : t.step) !== null && n !== void 0 ? n : 1);
  if (u < 1 || isNaN(u))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; c.getTime() <= i; )
    l.push(se(c)), c.setDate(c.getDate() + u), c.setHours(0, 0, 0, 0);
  return l;
}
function dd(e, t) {
  var n, r, a, o, i, l, c, u;
  ne(1, arguments);
  var p = Dt(), d = le((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : p.weekStartsOn) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = se(e), m = f.getDay(), _ = (m < d ? -7 : 0) + 6 - (m - d);
  return f.setDate(f.getDate() + _), f.setHours(23, 59, 59, 999), f;
}
function ns(e, t) {
  ne(2, arguments);
  var n = le(t);
  return od(e, -n);
}
var pd = 864e5;
function vd(e) {
  ne(1, arguments);
  var t = se(e), n = t.getTime();
  t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  var r = t.getTime(), a = n - r;
  return Math.floor(a / pd) + 1;
}
function ln(e) {
  ne(1, arguments);
  var t = 1, n = se(e), r = n.getUTCDay(), a = (r < t ? 7 : 0) + r - t;
  return n.setUTCDate(n.getUTCDate() - a), n.setUTCHours(0, 0, 0, 0), n;
}
function rs(e) {
  ne(1, arguments);
  var t = se(e), n = t.getUTCFullYear(), r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(n + 1, 0, 4), r.setUTCHours(0, 0, 0, 0);
  var a = ln(r), o = /* @__PURE__ */ new Date(0);
  o.setUTCFullYear(n, 0, 4), o.setUTCHours(0, 0, 0, 0);
  var i = ln(o);
  return t.getTime() >= a.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function yd(e) {
  ne(1, arguments);
  var t = rs(e), n = /* @__PURE__ */ new Date(0);
  n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = ln(n);
  return r;
}
var md = 6048e5;
function as(e) {
  ne(1, arguments);
  var t = se(e), n = ln(t).getTime() - yd(t).getTime();
  return Math.round(n / md) + 1;
}
function Qt(e, t) {
  var n, r, a, o, i, l, c, u;
  ne(1, arguments);
  var p = Dt(), d = le((n = (r = (a = (o = t == null ? void 0 : t.weekStartsOn) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && a !== void 0 ? a : p.weekStartsOn) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.weekStartsOn) !== null && n !== void 0 ? n : 0);
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var f = se(e), m = f.getUTCDay(), _ = (m < d ? 7 : 0) + m - d;
  return f.setUTCDate(f.getUTCDate() - _), f.setUTCHours(0, 0, 0, 0), f;
}
function _i(e, t) {
  var n, r, a, o, i, l, c, u;
  ne(1, arguments);
  var p = se(e), d = p.getUTCFullYear(), f = Dt(), m = le((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var _ = /* @__PURE__ */ new Date(0);
  _.setUTCFullYear(d + 1, 0, m), _.setUTCHours(0, 0, 0, 0);
  var x = Qt(_, t), g = /* @__PURE__ */ new Date(0);
  g.setUTCFullYear(d, 0, m), g.setUTCHours(0, 0, 0, 0);
  var Y = Qt(g, t);
  return p.getTime() >= x.getTime() ? d + 1 : p.getTime() >= Y.getTime() ? d : d - 1;
}
function hd(e, t) {
  var n, r, a, o, i, l, c, u;
  ne(1, arguments);
  var p = Dt(), d = le((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = _i(e, t), m = /* @__PURE__ */ new Date(0);
  m.setUTCFullYear(f, 0, d), m.setUTCHours(0, 0, 0, 0);
  var _ = Qt(m, t);
  return _;
}
var bd = 6048e5;
function os(e, t) {
  ne(1, arguments);
  var n = se(e), r = Qt(n, t).getTime() - hd(n, t).getTime();
  return Math.round(r / bd) + 1;
}
function ke(e, t) {
  for (var n = e < 0 ? "-" : "", r = Math.abs(e).toString(); r.length < t; )
    r = "0" + r;
  return n + r;
}
var gd = {
  // Year
  y: function(t, n) {
    var r = t.getUTCFullYear(), a = r > 0 ? r : 1 - r;
    return ke(n === "yy" ? a % 100 : a, n.length);
  },
  // Month
  M: function(t, n) {
    var r = t.getUTCMonth();
    return n === "M" ? String(r + 1) : ke(r + 1, 2);
  },
  // Day of the month
  d: function(t, n) {
    return ke(t.getUTCDate(), n.length);
  },
  // AM or PM
  a: function(t, n) {
    var r = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h: function(t, n) {
    return ke(t.getUTCHours() % 12 || 12, n.length);
  },
  // Hour [0-23]
  H: function(t, n) {
    return ke(t.getUTCHours(), n.length);
  },
  // Minute
  m: function(t, n) {
    return ke(t.getUTCMinutes(), n.length);
  },
  // Second
  s: function(t, n) {
    return ke(t.getUTCSeconds(), n.length);
  },
  // Fraction of second
  S: function(t, n) {
    var r = n.length, a = t.getUTCMilliseconds(), o = Math.floor(a * Math.pow(10, r - 3));
    return ke(o, n.length);
  }
};
const Nt = gd;
var tn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, _d = {
  // Era
  G: function(t, n, r) {
    var a = t.getUTCFullYear() > 0 ? 1 : 0;
    switch (n) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(a, {
          width: "abbreviated"
        });
      case "GGGGG":
        return r.era(a, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return r.era(a, {
          width: "wide"
        });
    }
  },
  // Year
  y: function(t, n, r) {
    if (n === "yo") {
      var a = t.getUTCFullYear(), o = a > 0 ? a : 1 - a;
      return r.ordinalNumber(o, {
        unit: "year"
      });
    }
    return Nt.y(t, n);
  },
  // Local week-numbering year
  Y: function(t, n, r, a) {
    var o = _i(t, a), i = o > 0 ? o : 1 - o;
    if (n === "YY") {
      var l = i % 100;
      return ke(l, 2);
    }
    return n === "Yo" ? r.ordinalNumber(i, {
      unit: "year"
    }) : ke(i, n.length);
  },
  // ISO week-numbering year
  R: function(t, n) {
    var r = rs(t);
    return ke(r, n.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(t, n) {
    var r = t.getUTCFullYear();
    return ke(r, n.length);
  },
  // Quarter
  Q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "Q":
        return String(a);
      case "QQ":
        return ke(a, 2);
      case "Qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "QQQ":
        return r.quarter(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(a, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(t, n, r) {
    var a = Math.ceil((t.getUTCMonth() + 1) / 3);
    switch (n) {
      case "q":
        return String(a);
      case "qq":
        return ke(a, 2);
      case "qo":
        return r.ordinalNumber(a, {
          unit: "quarter"
        });
      case "qqq":
        return r.quarter(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(a, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "M":
      case "MM":
        return Nt.M(t, n);
      case "Mo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "MMM":
        return r.month(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(a, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone month
  L: function(t, n, r) {
    var a = t.getUTCMonth();
    switch (n) {
      case "L":
        return String(a + 1);
      case "LL":
        return ke(a + 1, 2);
      case "Lo":
        return r.ordinalNumber(a + 1, {
          unit: "month"
        });
      case "LLL":
        return r.month(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(a, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Local week of year
  w: function(t, n, r, a) {
    var o = os(t, a);
    return n === "wo" ? r.ordinalNumber(o, {
      unit: "week"
    }) : ke(o, n.length);
  },
  // ISO week of year
  I: function(t, n, r) {
    var a = as(t);
    return n === "Io" ? r.ordinalNumber(a, {
      unit: "week"
    }) : ke(a, n.length);
  },
  // Day of the month
  d: function(t, n, r) {
    return n === "do" ? r.ordinalNumber(t.getUTCDate(), {
      unit: "date"
    }) : Nt.d(t, n);
  },
  // Day of year
  D: function(t, n, r) {
    var a = vd(t);
    return n === "Do" ? r.ordinalNumber(a, {
      unit: "dayOfYear"
    }) : ke(a, n.length);
  },
  // Day of week
  E: function(t, n, r) {
    var a = t.getUTCDay();
    switch (n) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(t, n, r, a) {
    var o = t.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "e":
        return String(i);
      case "ee":
        return ke(i, 2);
      case "eo":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "eee":
        return r.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(t, n, r, a) {
    var o = t.getUTCDay(), i = (o - a.weekStartsOn + 8) % 7 || 7;
    switch (n) {
      case "c":
        return String(i);
      case "cc":
        return ke(i, n.length);
      case "co":
        return r.ordinalNumber(i, {
          unit: "day"
        });
      case "ccc":
        return r.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(t, n, r) {
    var a = t.getUTCDay(), o = a === 0 ? 7 : a;
    switch (n) {
      case "i":
        return String(o);
      case "ii":
        return ke(o, n.length);
      case "io":
        return r.ordinalNumber(o, {
          unit: "day"
        });
      case "iii":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(t, n, r) {
    var a = t.getUTCHours(), o = a / 12 >= 1 ? "pm" : "am";
    switch (n) {
      case "a":
      case "aa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(t, n, r) {
    var a = t.getUTCHours(), o;
    switch (a === 12 ? o = tn.noon : a === 0 ? o = tn.midnight : o = a / 12 >= 1 ? "pm" : "am", n) {
      case "b":
      case "bb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(t, n, r) {
    var a = t.getUTCHours(), o;
    switch (a >= 17 ? o = tn.evening : a >= 12 ? o = tn.afternoon : a >= 4 ? o = tn.morning : o = tn.night, n) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(t, n, r) {
    if (n === "ho") {
      var a = t.getUTCHours() % 12;
      return a === 0 && (a = 12), r.ordinalNumber(a, {
        unit: "hour"
      });
    }
    return Nt.h(t, n);
  },
  // Hour [0-23]
  H: function(t, n, r) {
    return n === "Ho" ? r.ordinalNumber(t.getUTCHours(), {
      unit: "hour"
    }) : Nt.H(t, n);
  },
  // Hour [0-11]
  K: function(t, n, r) {
    var a = t.getUTCHours() % 12;
    return n === "Ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ke(a, n.length);
  },
  // Hour [1-24]
  k: function(t, n, r) {
    var a = t.getUTCHours();
    return a === 0 && (a = 24), n === "ko" ? r.ordinalNumber(a, {
      unit: "hour"
    }) : ke(a, n.length);
  },
  // Minute
  m: function(t, n, r) {
    return n === "mo" ? r.ordinalNumber(t.getUTCMinutes(), {
      unit: "minute"
    }) : Nt.m(t, n);
  },
  // Second
  s: function(t, n, r) {
    return n === "so" ? r.ordinalNumber(t.getUTCSeconds(), {
      unit: "second"
    }) : Nt.s(t, n);
  },
  // Fraction of second
  S: function(t, n) {
    return Nt.S(t, n);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    if (i === 0)
      return "Z";
    switch (n) {
      case "X":
        return ji(i);
      case "XXXX":
      case "XX":
        return jt(i);
      case "XXXXX":
      case "XXX":
      default:
        return jt(i, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (n) {
      case "x":
        return ji(i);
      case "xxxx":
      case "xx":
        return jt(i);
      case "xxxxx":
      case "xxx":
      default:
        return jt(i, ":");
    }
  },
  // Timezone (GMT)
  O: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (n) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Fi(i, ":");
      case "OOOO":
      default:
        return "GMT" + jt(i, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTimezoneOffset();
    switch (n) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Fi(i, ":");
      case "zzzz":
      default:
        return "GMT" + jt(i, ":");
    }
  },
  // Seconds timestamp
  t: function(t, n, r, a) {
    var o = a._originalDate || t, i = Math.floor(o.getTime() / 1e3);
    return ke(i, n.length);
  },
  // Milliseconds timestamp
  T: function(t, n, r, a) {
    var o = a._originalDate || t, i = o.getTime();
    return ke(i, n.length);
  }
};
function Fi(e, t) {
  var n = e > 0 ? "-" : "+", r = Math.abs(e), a = Math.floor(r / 60), o = r % 60;
  if (o === 0)
    return n + String(a);
  var i = t || "";
  return n + String(a) + i + ke(o, 2);
}
function ji(e, t) {
  if (e % 60 === 0) {
    var n = e > 0 ? "-" : "+";
    return n + ke(Math.abs(e) / 60, 2);
  }
  return jt(e, t);
}
function jt(e, t) {
  var n = t || "", r = e > 0 ? "-" : "+", a = Math.abs(e), o = ke(Math.floor(a / 60), 2), i = ke(a % 60, 2);
  return r + o + n + i;
}
const wd = _d;
var Vi = function(t, n) {
  switch (t) {
    case "P":
      return n.date({
        width: "short"
      });
    case "PP":
      return n.date({
        width: "medium"
      });
    case "PPP":
      return n.date({
        width: "long"
      });
    case "PPPP":
    default:
      return n.date({
        width: "full"
      });
  }
}, is = function(t, n) {
  switch (t) {
    case "p":
      return n.time({
        width: "short"
      });
    case "pp":
      return n.time({
        width: "medium"
      });
    case "ppp":
      return n.time({
        width: "long"
      });
    case "pppp":
    default:
      return n.time({
        width: "full"
      });
  }
}, Od = function(t, n) {
  var r = t.match(/(P+)(p+)?/) || [], a = r[1], o = r[2];
  if (!o)
    return Vi(t, n);
  var i;
  switch (a) {
    case "P":
      i = n.dateTime({
        width: "short"
      });
      break;
    case "PP":
      i = n.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      i = n.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      i = n.dateTime({
        width: "full"
      });
      break;
  }
  return i.replace("{{date}}", Vi(a, n)).replace("{{time}}", is(o, n));
}, $d = {
  p: is,
  P: Od
};
const Ja = $d;
var Sd = ["D", "DD"], kd = ["YY", "YYYY"];
function ls(e) {
  return Sd.indexOf(e) !== -1;
}
function us(e) {
  return kd.indexOf(e) !== -1;
}
function Rr(e, t, n) {
  if (e === "YYYY")
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "YY")
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(t, "`) for formatting years to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "D")
    throw new RangeError("Use `d` instead of `D` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  if (e === "DD")
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(t, "`) for formatting days of the month to the input `").concat(n, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
}
var Pd = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Td = function(t, n, r) {
  var a, o = Pd[t];
  return typeof o == "string" ? a = o : n === 1 ? a = o.one : a = o.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + a : a + " ago" : a;
};
const Dd = Td;
function Ea(e) {
  return function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.width ? String(t.width) : e.defaultWidth, r = e.formats[n] || e.formats[e.defaultWidth];
    return r;
  };
}
var xd = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Cd = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Rd = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Md = {
  date: Ea({
    formats: xd,
    defaultWidth: "full"
  }),
  time: Ea({
    formats: Cd,
    defaultWidth: "full"
  }),
  dateTime: Ea({
    formats: Rd,
    defaultWidth: "full"
  })
};
const Nd = Md;
var Ed = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ad = function(t, n, r, a) {
  return Ed[t];
};
const Id = Ad;
function yn(e) {
  return function(t, n) {
    var r = n != null && n.context ? String(n.context) : "standalone", a;
    if (r === "formatting" && e.formattingValues) {
      var o = e.defaultFormattingWidth || e.defaultWidth, i = n != null && n.width ? String(n.width) : o;
      a = e.formattingValues[i] || e.formattingValues[o];
    } else {
      var l = e.defaultWidth, c = n != null && n.width ? String(n.width) : e.defaultWidth;
      a = e.values[c] || e.values[l];
    }
    var u = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[u];
  };
}
var Ld = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Bd = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Yd = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}, Ud = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}, Fd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, jd = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Vd = function(t, n) {
  var r = Number(t), a = r % 100;
  if (a > 20 || a < 10)
    switch (a % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Hd = {
  ordinalNumber: Vd,
  era: yn({
    values: Ld,
    defaultWidth: "wide"
  }),
  quarter: yn({
    values: Bd,
    defaultWidth: "wide",
    argumentCallback: function(t) {
      return t - 1;
    }
  }),
  month: yn({
    values: Yd,
    defaultWidth: "wide"
  }),
  day: yn({
    values: Ud,
    defaultWidth: "wide"
  }),
  dayPeriod: yn({
    values: Fd,
    defaultWidth: "wide",
    formattingValues: jd,
    defaultFormattingWidth: "wide"
  })
};
const Wd = Hd;
function mn(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.width, a = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    var i = o[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? zd(l, function(d) {
      return d.test(i);
    }) : qd(l, function(d) {
      return d.test(i);
    }), u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? n.valueCallback(u) : u;
    var p = t.slice(i.length);
    return {
      value: u,
      rest: p
    };
  };
}
function qd(e, t) {
  for (var n in e)
    if (e.hasOwnProperty(n) && t(e[n]))
      return n;
}
function zd(e, t) {
  for (var n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Gd(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.match(e.matchPattern);
    if (!r)
      return null;
    var a = r[0], o = t.match(e.parsePattern);
    if (!o)
      return null;
    var i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    var l = t.slice(a.length);
    return {
      value: i,
      rest: l
    };
  };
}
var Kd = /^(\d+)(th|st|nd|rd)?/i, Qd = /\d+/i, Xd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Zd = {
  any: [/^b/i, /^(a|c)/i]
}, Jd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ep = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, tp = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, np = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}, rp = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ap = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, op = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ip = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, lp = {
  ordinalNumber: Gd({
    matchPattern: Kd,
    parsePattern: Qd,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: mn({
    matchPatterns: Xd,
    defaultMatchWidth: "wide",
    parsePatterns: Zd,
    defaultParseWidth: "any"
  }),
  quarter: mn({
    matchPatterns: Jd,
    defaultMatchWidth: "wide",
    parsePatterns: ep,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: mn({
    matchPatterns: tp,
    defaultMatchWidth: "wide",
    parsePatterns: np,
    defaultParseWidth: "any"
  }),
  day: mn({
    matchPatterns: rp,
    defaultMatchWidth: "wide",
    parsePatterns: ap,
    defaultParseWidth: "any"
  }),
  dayPeriod: mn({
    matchPatterns: op,
    defaultMatchWidth: "any",
    parsePatterns: ip,
    defaultParseWidth: "any"
  })
};
const up = lp;
var sp = {
  code: "en-US",
  formatDistance: Dd,
  formatLong: Nd,
  formatRelative: Id,
  localize: Wd,
  match: up,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
const ss = sp;
var cp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, fp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, dp = /^'([^]*?)'?$/, pp = /''/g, vp = /[a-zA-Z]/;
function kn(e, t, n) {
  var r, a, o, i, l, c, u, p, d, f, m, _, x, g, Y, P, T, F;
  ne(2, arguments);
  var j = String(t), W = Dt(), Z = (r = (a = n == null ? void 0 : n.locale) !== null && a !== void 0 ? a : W.locale) !== null && r !== void 0 ? r : ss, L = le((o = (i = (l = (c = n == null ? void 0 : n.firstWeekContainsDate) !== null && c !== void 0 ? c : n == null || (u = n.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && l !== void 0 ? l : W.firstWeekContainsDate) !== null && i !== void 0 ? i : (d = W.locale) === null || d === void 0 || (f = d.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
  if (!(L >= 1 && L <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var w = le((m = (_ = (x = (g = n == null ? void 0 : n.weekStartsOn) !== null && g !== void 0 ? g : n == null || (Y = n.locale) === null || Y === void 0 || (P = Y.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && x !== void 0 ? x : W.weekStartsOn) !== null && _ !== void 0 ? _ : (T = W.locale) === null || T === void 0 || (F = T.options) === null || F === void 0 ? void 0 : F.weekStartsOn) !== null && m !== void 0 ? m : 0);
  if (!(w >= 0 && w <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!Z.localize)
    throw new RangeError("locale must contain localize property");
  if (!Z.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var U = se(e);
  if (!Sn(U))
    throw new RangeError("Invalid time value");
  var N = Cr(U), G = ns(U, N), K = {
    firstWeekContainsDate: L,
    weekStartsOn: w,
    locale: Z,
    _originalDate: U
  }, Q = j.match(fp).map(function(H) {
    var E = H[0];
    if (E === "p" || E === "P") {
      var s = Ja[E];
      return s(H, Z.formatLong);
    }
    return H;
  }).join("").match(cp).map(function(H) {
    if (H === "''")
      return "'";
    var E = H[0];
    if (E === "'")
      return yp(H);
    var s = wd[E];
    if (s)
      return !(n != null && n.useAdditionalWeekYearTokens) && us(H) && Rr(H, t, String(e)), !(n != null && n.useAdditionalDayOfYearTokens) && ls(H) && Rr(H, t, String(e)), s(G, H, Z.localize, K);
    if (E.match(vp))
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + E + "`");
    return H;
  }).join("");
  return Q;
}
function yp(e) {
  var t = e.match(dp);
  return t ? t[1].replace(pp, "'") : e;
}
function mp(e, t) {
  if (e == null)
    throw new TypeError("assign requires that input parameter not be null or undefined");
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
  return e;
}
function hp(e) {
  ne(1, arguments);
  var t = se(e), n = t.getDay();
  return n;
}
function bp(e) {
  ne(1, arguments);
  var t = se(e), n = t.getFullYear(), r = t.getMonth(), a = /* @__PURE__ */ new Date(0);
  return a.setFullYear(n, r + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
function xt(e) {
  ne(1, arguments);
  var t = se(e), n = t.getHours();
  return n;
}
var gp = 6048e5;
function _p(e) {
  ne(1, arguments);
  var t = se(e), n = xr(t).getTime() - ud(t).getTime();
  return Math.round(n / gp) + 1;
}
function Ct(e) {
  ne(1, arguments);
  var t = se(e), n = t.getMinutes();
  return n;
}
function De(e) {
  ne(1, arguments);
  var t = se(e), n = t.getMonth();
  return n;
}
function un(e) {
  ne(1, arguments);
  var t = se(e), n = t.getSeconds();
  return n;
}
function wp(e, t) {
  var n, r, a, o, i, l, c, u;
  ne(1, arguments);
  var p = se(e), d = p.getFullYear(), f = Dt(), m = le((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : f.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = f.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1);
  if (!(m >= 1 && m <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var _ = /* @__PURE__ */ new Date(0);
  _.setFullYear(d + 1, 0, m), _.setHours(0, 0, 0, 0);
  var x = Kt(_, t), g = /* @__PURE__ */ new Date(0);
  g.setFullYear(d, 0, m), g.setHours(0, 0, 0, 0);
  var Y = Kt(g, t);
  return p.getTime() >= x.getTime() ? d + 1 : p.getTime() >= Y.getTime() ? d : d - 1;
}
function Op(e, t) {
  var n, r, a, o, i, l, c, u;
  ne(1, arguments);
  var p = Dt(), d = le((n = (r = (a = (o = t == null ? void 0 : t.firstWeekContainsDate) !== null && o !== void 0 ? o : t == null || (i = t.locale) === null || i === void 0 || (l = i.options) === null || l === void 0 ? void 0 : l.firstWeekContainsDate) !== null && a !== void 0 ? a : p.firstWeekContainsDate) !== null && r !== void 0 ? r : (c = p.locale) === null || c === void 0 || (u = c.options) === null || u === void 0 ? void 0 : u.firstWeekContainsDate) !== null && n !== void 0 ? n : 1), f = wp(e, t), m = /* @__PURE__ */ new Date(0);
  m.setFullYear(f, 0, d), m.setHours(0, 0, 0, 0);
  var _ = Kt(m, t);
  return _;
}
var $p = 6048e5;
function Sp(e, t) {
  ne(1, arguments);
  var n = se(e), r = Kt(n, t).getTime() - Op(n, t).getTime();
  return Math.round(r / $p) + 1;
}
function xe(e) {
  return ne(1, arguments), se(e).getFullYear();
}
function wi(e, t) {
  ne(2, arguments);
  var n = se(e), r = se(t);
  return n.getTime() > r.getTime();
}
function Oi(e, t) {
  ne(2, arguments);
  var n = se(e), r = se(t);
  return n.getTime() < r.getTime();
}
function cs(e, t) {
  ne(2, arguments);
  var n = se(e), r = se(t);
  return n.getTime() === r.getTime();
}
function Wn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Wn = function(n) {
    return typeof n;
  } : Wn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Wn(e);
}
function fs(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && eo(e, t);
}
function eo(e, t) {
  return eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, eo(e, t);
}
function ds(e) {
  var t = Pp();
  return function() {
    var r = Mr(e), a;
    if (t) {
      var o = Mr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return kp(this, a);
  };
}
function kp(e, t) {
  return t && (Wn(t) === "object" || typeof t == "function") ? t : to(e);
}
function to(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Mr(e) {
  return Mr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Mr(e);
}
function $i(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Si(e, t, n) {
  return t && Hi(e.prototype, t), n && Hi(e, n), e;
}
function no(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Tp = 10, ps = /* @__PURE__ */ function() {
  function e() {
    $i(this, e), no(this, "subPriority", 0);
  }
  return Si(e, [{
    key: "validate",
    value: function(n, r) {
      return !0;
    }
  }]), e;
}(), Dp = /* @__PURE__ */ function(e) {
  fs(n, e);
  var t = ds(n);
  function n(r, a, o, i, l) {
    var c;
    return $i(this, n), c = t.call(this), c.value = r, c.validateValue = a, c.setValue = o, c.priority = i, l && (c.subPriority = l), c;
  }
  return Si(n, [{
    key: "validate",
    value: function(a, o) {
      return this.validateValue(a, this.value, o);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return this.setValue(a, o, this.value, i);
    }
  }]), n;
}(ps), xp = /* @__PURE__ */ function(e) {
  fs(n, e);
  var t = ds(n);
  function n() {
    var r;
    $i(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), no(to(r), "priority", Tp), no(to(r), "subPriority", -1), r;
  }
  return Si(n, [{
    key: "set",
    value: function(a, o) {
      if (o.timestampIsSet)
        return a;
      var i = /* @__PURE__ */ new Date(0);
      return i.setFullYear(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()), i.setHours(a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds()), i;
    }
  }]), n;
}(ps);
function Cp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Wi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Rp(e, t, n) {
  return t && Wi(e.prototype, t), n && Wi(e, n), e;
}
var $e = /* @__PURE__ */ function() {
  function e() {
    Cp(this, e);
  }
  return Rp(e, [{
    key: "run",
    value: function(n, r, a, o) {
      var i = this.parse(n, r, a, o);
      return i ? {
        setter: new Dp(i.value, this.validate, this.set, this.priority, this.subPriority),
        rest: i.rest
      } : null;
    }
  }, {
    key: "validate",
    value: function(n, r, a) {
      return !0;
    }
  }]), e;
}();
function qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? qn = function(n) {
    return typeof n;
  } : qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, qn(e);
}
function Mp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Np(e, t, n) {
  return t && qi(e.prototype, t), n && qi(e, n), e;
}
function Ep(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ro(e, t);
}
function ro(e, t) {
  return ro = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ro(e, t);
}
function Ap(e) {
  var t = Lp();
  return function() {
    var r = Nr(e), a;
    if (t) {
      var o = Nr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ip(this, a);
  };
}
function Ip(e, t) {
  return t && (qn(t) === "object" || typeof t == "function") ? t : ao(e);
}
function ao(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Lp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Nr(e) {
  return Nr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Nr(e);
}
function zi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Bp = /* @__PURE__ */ function(e) {
  Ep(n, e);
  var t = Ap(n);
  function n() {
    var r;
    Mp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), zi(ao(r), "priority", 140), zi(ao(r), "incompatibleTokens", ["R", "u", "t", "T"]), r;
  }
  return Np(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "G":
        case "GG":
        case "GGG":
          return i.era(a, {
            width: "abbreviated"
          }) || i.era(a, {
            width: "narrow"
          });
        case "GGGGG":
          return i.era(a, {
            width: "narrow"
          });
        case "GGGG":
        default:
          return i.era(a, {
            width: "wide"
          }) || i.era(a, {
            width: "abbreviated"
          }) || i.era(a, {
            width: "narrow"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return o.era = i, a.setUTCFullYear(i, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e), Ye = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/
  // 0 to 9999, -0 to -9999
}, kt = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function Ue(e, t) {
  return e && {
    value: t(e.value),
    rest: e.rest
  };
}
function Me(e, t) {
  var n = t.match(e);
  return n ? {
    value: parseInt(n[0], 10),
    rest: t.slice(n[0].length)
  } : null;
}
function Pt(e, t) {
  var n = t.match(e);
  if (!n)
    return null;
  if (n[0] === "Z")
    return {
      value: 0,
      rest: t.slice(1)
    };
  var r = n[1] === "+" ? 1 : -1, a = n[2] ? parseInt(n[2], 10) : 0, o = n[3] ? parseInt(n[3], 10) : 0, i = n[5] ? parseInt(n[5], 10) : 0;
  return {
    value: r * (a * gi + o * bi + i * fd),
    rest: t.slice(n[0].length)
  };
}
function vs(e) {
  return Me(Ye.anyDigitsSigned, e);
}
function Ie(e, t) {
  switch (e) {
    case 1:
      return Me(Ye.singleDigit, t);
    case 2:
      return Me(Ye.twoDigits, t);
    case 3:
      return Me(Ye.threeDigits, t);
    case 4:
      return Me(Ye.fourDigits, t);
    default:
      return Me(new RegExp("^\\d{1," + e + "}"), t);
  }
}
function Er(e, t) {
  switch (e) {
    case 1:
      return Me(Ye.singleDigitSigned, t);
    case 2:
      return Me(Ye.twoDigitsSigned, t);
    case 3:
      return Me(Ye.threeDigitsSigned, t);
    case 4:
      return Me(Ye.fourDigitsSigned, t);
    default:
      return Me(new RegExp("^-?\\d{1," + e + "}"), t);
  }
}
function ki(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function ys(e, t) {
  var n = t > 0, r = n ? t : 1 - t, a;
  if (r <= 50)
    a = e || 100;
  else {
    var o = r + 50, i = Math.floor(o / 100) * 100, l = e >= o % 100;
    a = e + i - (l ? 100 : 0);
  }
  return n ? a : 1 - a;
}
function ms(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? zn = function(n) {
    return typeof n;
  } : zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, zn(e);
}
function Yp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Up(e, t, n) {
  return t && Gi(e.prototype, t), n && Gi(e, n), e;
}
function Fp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && oo(e, t);
}
function oo(e, t) {
  return oo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, oo(e, t);
}
function jp(e) {
  var t = Hp();
  return function() {
    var r = Ar(e), a;
    if (t) {
      var o = Ar(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Vp(this, a);
  };
}
function Vp(e, t) {
  return t && (zn(t) === "object" || typeof t == "function") ? t : io(e);
}
function io(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Hp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ar(e) {
  return Ar = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ar(e);
}
function Ki(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wp = /* @__PURE__ */ function(e) {
  Fp(n, e);
  var t = jp(n);
  function n() {
    var r;
    Yp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ki(io(r), "priority", 130), Ki(io(r), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return Up(n, [{
    key: "parse",
    value: function(a, o, i) {
      var l = function(u) {
        return {
          year: u,
          isTwoDigitYear: o === "yy"
        };
      };
      switch (o) {
        case "y":
          return Ue(Ie(4, a), l);
        case "yo":
          return Ue(i.ordinalNumber(a, {
            unit: "year"
          }), l);
        default:
          return Ue(Ie(o.length, a), l);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var l = a.getUTCFullYear();
      if (i.isTwoDigitYear) {
        var c = ys(i.year, l);
        return a.setUTCFullYear(c, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
      }
      var u = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return a.setUTCFullYear(u, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Gn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gn = function(n) {
    return typeof n;
  } : Gn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Gn(e);
}
function qp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Qi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function zp(e, t, n) {
  return t && Qi(e.prototype, t), n && Qi(e, n), e;
}
function Gp(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && lo(e, t);
}
function lo(e, t) {
  return lo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, lo(e, t);
}
function Kp(e) {
  var t = Xp();
  return function() {
    var r = Ir(e), a;
    if (t) {
      var o = Ir(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Qp(this, a);
  };
}
function Qp(e, t) {
  return t && (Gn(t) === "object" || typeof t == "function") ? t : uo(e);
}
function uo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xp() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ir(e) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ir(e);
}
function Xi(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Zp = /* @__PURE__ */ function(e) {
  Gp(n, e);
  var t = Kp(n);
  function n() {
    var r;
    qp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Xi(uo(r), "priority", 130), Xi(uo(r), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return zp(n, [{
    key: "parse",
    value: function(a, o, i) {
      var l = function(u) {
        return {
          year: u,
          isTwoDigitYear: o === "YY"
        };
      };
      switch (o) {
        case "Y":
          return Ue(Ie(4, a), l);
        case "Yo":
          return Ue(i.ordinalNumber(a, {
            unit: "year"
          }), l);
        default:
          return Ue(Ie(o.length, a), l);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o.isTwoDigitYear || o.year > 0;
    }
  }, {
    key: "set",
    value: function(a, o, i, l) {
      var c = _i(a, l);
      if (i.isTwoDigitYear) {
        var u = ys(i.year, c);
        return a.setUTCFullYear(u, 0, l.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Qt(a, l);
      }
      var p = !("era" in o) || o.era === 1 ? i.year : 1 - i.year;
      return a.setUTCFullYear(p, 0, l.firstWeekContainsDate), a.setUTCHours(0, 0, 0, 0), Qt(a, l);
    }
  }]), n;
}($e);
function Kn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kn = function(n) {
    return typeof n;
  } : Kn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Kn(e);
}
function Jp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zi(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ev(e, t, n) {
  return t && Zi(e.prototype, t), n && Zi(e, n), e;
}
function tv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && so(e, t);
}
function so(e, t) {
  return so = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, so(e, t);
}
function nv(e) {
  var t = av();
  return function() {
    var r = Lr(e), a;
    if (t) {
      var o = Lr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return rv(this, a);
  };
}
function rv(e, t) {
  return t && (Kn(t) === "object" || typeof t == "function") ? t : co(e);
}
function co(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function av() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Lr(e) {
  return Lr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Lr(e);
}
function Ji(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ov = /* @__PURE__ */ function(e) {
  tv(n, e);
  var t = nv(n);
  function n() {
    var r;
    Jp(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ji(co(r), "priority", 130), Ji(co(r), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return ev(n, [{
    key: "parse",
    value: function(a, o) {
      return Er(o === "R" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var l = /* @__PURE__ */ new Date(0);
      return l.setUTCFullYear(i, 0, 4), l.setUTCHours(0, 0, 0, 0), ln(l);
    }
  }]), n;
}($e);
function Qn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Qn = function(n) {
    return typeof n;
  } : Qn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Qn(e);
}
function iv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function el(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function lv(e, t, n) {
  return t && el(e.prototype, t), n && el(e, n), e;
}
function uv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && fo(e, t);
}
function fo(e, t) {
  return fo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, fo(e, t);
}
function sv(e) {
  var t = fv();
  return function() {
    var r = Br(e), a;
    if (t) {
      var o = Br(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return cv(this, a);
  };
}
function cv(e, t) {
  return t && (Qn(t) === "object" || typeof t == "function") ? t : po(e);
}
function po(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Br(e) {
  return Br = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Br(e);
}
function tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var dv = /* @__PURE__ */ function(e) {
  uv(n, e);
  var t = sv(n);
  function n() {
    var r;
    iv(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), tl(po(r), "priority", 130), tl(po(r), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), r;
  }
  return lv(n, [{
    key: "parse",
    value: function(a, o) {
      return Er(o === "u" ? 4 : o.length, a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCFullYear(i, 0, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Xn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Xn = function(n) {
    return typeof n;
  } : Xn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Xn(e);
}
function pv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vv(e, t, n) {
  return t && nl(e.prototype, t), n && nl(e, n), e;
}
function yv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && vo(e, t);
}
function vo(e, t) {
  return vo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, vo(e, t);
}
function mv(e) {
  var t = bv();
  return function() {
    var r = Yr(e), a;
    if (t) {
      var o = Yr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return hv(this, a);
  };
}
function hv(e, t) {
  return t && (Xn(t) === "object" || typeof t == "function") ? t : yo(e);
}
function yo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Yr(e) {
  return Yr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Yr(e);
}
function rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gv = /* @__PURE__ */ function(e) {
  yv(n, e);
  var t = mv(n);
  function n() {
    var r;
    pv(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), rl(yo(r), "priority", 120), rl(yo(r), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return vv(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "Q":
        case "QQ":
          return Ie(o.length, a);
        case "Qo":
          return i.ordinalNumber(a, {
            unit: "quarter"
          });
        case "QQQ":
          return i.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQQ":
          return i.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
        case "QQQQ":
        default:
          return i.quarter(a, {
            width: "wide",
            context: "formatting"
          }) || i.quarter(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.quarter(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMonth((i - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Zn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Zn = function(n) {
    return typeof n;
  } : Zn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Zn(e);
}
function _v(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function al(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function wv(e, t, n) {
  return t && al(e.prototype, t), n && al(e, n), e;
}
function Ov(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && mo(e, t);
}
function mo(e, t) {
  return mo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, mo(e, t);
}
function $v(e) {
  var t = kv();
  return function() {
    var r = Ur(e), a;
    if (t) {
      var o = Ur(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Sv(this, a);
  };
}
function Sv(e, t) {
  return t && (Zn(t) === "object" || typeof t == "function") ? t : ho(e);
}
function ho(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ur(e) {
  return Ur = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ur(e);
}
function ol(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Pv = /* @__PURE__ */ function(e) {
  Ov(n, e);
  var t = $v(n);
  function n() {
    var r;
    _v(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ol(ho(r), "priority", 120), ol(ho(r), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), r;
  }
  return wv(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "q":
        case "qq":
          return Ie(o.length, a);
        case "qo":
          return i.ordinalNumber(a, {
            unit: "quarter"
          });
        case "qqq":
          return i.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqqq":
          return i.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
        case "qqqq":
        default:
          return i.quarter(a, {
            width: "wide",
            context: "standalone"
          }) || i.quarter(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.quarter(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 4;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMonth((i - 1) * 3, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Jn(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Jn = function(n) {
    return typeof n;
  } : Jn = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Jn(e);
}
function Tv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Dv(e, t, n) {
  return t && il(e.prototype, t), n && il(e, n), e;
}
function xv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && bo(e, t);
}
function bo(e, t) {
  return bo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, bo(e, t);
}
function Cv(e) {
  var t = Mv();
  return function() {
    var r = Fr(e), a;
    if (t) {
      var o = Fr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Rv(this, a);
  };
}
function Rv(e, t) {
  return t && (Jn(t) === "object" || typeof t == "function") ? t : go(e);
}
function go(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Mv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Fr(e) {
  return Fr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Fr(e);
}
function ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Nv = /* @__PURE__ */ function(e) {
  xv(n, e);
  var t = Cv(n);
  function n() {
    var r;
    Tv(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), ll(go(r), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), ll(go(r), "priority", 110), r;
  }
  return Dv(n, [{
    key: "parse",
    value: function(a, o, i) {
      var l = function(u) {
        return u - 1;
      };
      switch (o) {
        case "M":
          return Ue(Me(Ye.month, a), l);
        case "MM":
          return Ue(Ie(2, a), l);
        case "Mo":
          return Ue(i.ordinalNumber(a, {
            unit: "month"
          }), l);
        case "MMM":
          return i.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMMM":
          return i.month(a, {
            width: "narrow",
            context: "formatting"
          });
        case "MMMM":
        default:
          return i.month(a, {
            width: "wide",
            context: "formatting"
          }) || i.month(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.month(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMonth(i, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function er(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? er = function(n) {
    return typeof n;
  } : er = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, er(e);
}
function Ev(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Av(e, t, n) {
  return t && ul(e.prototype, t), n && ul(e, n), e;
}
function Iv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && _o(e, t);
}
function _o(e, t) {
  return _o = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, _o(e, t);
}
function Lv(e) {
  var t = Yv();
  return function() {
    var r = jr(e), a;
    if (t) {
      var o = jr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Bv(this, a);
  };
}
function Bv(e, t) {
  return t && (er(t) === "object" || typeof t == "function") ? t : wo(e);
}
function wo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Yv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jr(e) {
  return jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, jr(e);
}
function sl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Uv = /* @__PURE__ */ function(e) {
  Iv(n, e);
  var t = Lv(n);
  function n() {
    var r;
    Ev(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), sl(wo(r), "priority", 110), sl(wo(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return Av(n, [{
    key: "parse",
    value: function(a, o, i) {
      var l = function(u) {
        return u - 1;
      };
      switch (o) {
        case "L":
          return Ue(Me(Ye.month, a), l);
        case "LL":
          return Ue(Ie(2, a), l);
        case "Lo":
          return Ue(i.ordinalNumber(a, {
            unit: "month"
          }), l);
        case "LLL":
          return i.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLLL":
          return i.month(a, {
            width: "narrow",
            context: "standalone"
          });
        case "LLLL":
        default:
          return i.month(a, {
            width: "wide",
            context: "standalone"
          }) || i.month(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.month(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMonth(i, 1), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Fv(e, t, n) {
  ne(2, arguments);
  var r = se(e), a = le(t), o = os(r, n) - a;
  return r.setUTCDate(r.getUTCDate() - o * 7), r;
}
function tr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? tr = function(n) {
    return typeof n;
  } : tr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, tr(e);
}
function jv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Vv(e, t, n) {
  return t && cl(e.prototype, t), n && cl(e, n), e;
}
function Hv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Oo(e, t);
}
function Oo(e, t) {
  return Oo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Oo(e, t);
}
function Wv(e) {
  var t = zv();
  return function() {
    var r = Vr(e), a;
    if (t) {
      var o = Vr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return qv(this, a);
  };
}
function qv(e, t) {
  return t && (tr(t) === "object" || typeof t == "function") ? t : $o(e);
}
function $o(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function zv() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Vr(e) {
  return Vr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Vr(e);
}
function fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Gv = /* @__PURE__ */ function(e) {
  Hv(n, e);
  var t = Wv(n);
  function n() {
    var r;
    jv(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), fl($o(r), "priority", 100), fl($o(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), r;
  }
  return Vv(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "w":
          return Me(Ye.week, a);
        case "wo":
          return i.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(a, o, i, l) {
      return Qt(Fv(a, i, l), l);
    }
  }]), n;
}($e);
function Kv(e, t) {
  ne(2, arguments);
  var n = se(e), r = le(t), a = as(n) - r;
  return n.setUTCDate(n.getUTCDate() - a * 7), n;
}
function nr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nr = function(n) {
    return typeof n;
  } : nr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, nr(e);
}
function Qv(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xv(e, t, n) {
  return t && dl(e.prototype, t), n && dl(e, n), e;
}
function Zv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && So(e, t);
}
function So(e, t) {
  return So = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, So(e, t);
}
function Jv(e) {
  var t = ty();
  return function() {
    var r = Hr(e), a;
    if (t) {
      var o = Hr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ey(this, a);
  };
}
function ey(e, t) {
  return t && (nr(t) === "object" || typeof t == "function") ? t : ko(e);
}
function ko(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ty() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Hr(e) {
  return Hr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Hr(e);
}
function pl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ny = /* @__PURE__ */ function(e) {
  Zv(n, e);
  var t = Jv(n);
  function n() {
    var r;
    Qv(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), pl(ko(r), "priority", 100), pl(ko(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), r;
  }
  return Xv(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "I":
          return Me(Ye.week, a);
        case "Io":
          return i.ordinalNumber(a, {
            unit: "week"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 53;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return ln(Kv(a, i));
    }
  }]), n;
}($e);
function rr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? rr = function(n) {
    return typeof n;
  } : rr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, rr(e);
}
function ry(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function vl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ay(e, t, n) {
  return t && vl(e.prototype, t), n && vl(e, n), e;
}
function oy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Po(e, t);
}
function Po(e, t) {
  return Po = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Po(e, t);
}
function iy(e) {
  var t = uy();
  return function() {
    var r = Wr(e), a;
    if (t) {
      var o = Wr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return ly(this, a);
  };
}
function ly(e, t) {
  return t && (rr(t) === "object" || typeof t == "function") ? t : ar(e);
}
function ar(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Wr(e) {
  return Wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Wr(e);
}
function Aa(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var sy = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], cy = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], fy = /* @__PURE__ */ function(e) {
  oy(n, e);
  var t = iy(n);
  function n() {
    var r;
    ry(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Aa(ar(r), "priority", 90), Aa(ar(r), "subPriority", 1), Aa(ar(r), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), r;
  }
  return ay(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "d":
          return Me(Ye.date, a);
        case "do":
          return i.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var i = a.getUTCFullYear(), l = ms(i), c = a.getUTCMonth();
      return l ? o >= 1 && o <= cy[c] : o >= 1 && o <= sy[c];
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCDate(i), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function or(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? or = function(n) {
    return typeof n;
  } : or = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, or(e);
}
function dy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function py(e, t, n) {
  return t && yl(e.prototype, t), n && yl(e, n), e;
}
function vy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && To(e, t);
}
function To(e, t) {
  return To = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, To(e, t);
}
function yy(e) {
  var t = hy();
  return function() {
    var r = qr(e), a;
    if (t) {
      var o = qr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return my(this, a);
  };
}
function my(e, t) {
  return t && (or(t) === "object" || typeof t == "function") ? t : ir(e);
}
function ir(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function qr(e) {
  return qr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, qr(e);
}
function Ia(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var by = /* @__PURE__ */ function(e) {
  vy(n, e);
  var t = yy(n);
  function n() {
    var r;
    dy(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ia(ir(r), "priority", 90), Ia(ir(r), "subpriority", 1), Ia(ir(r), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), r;
  }
  return py(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "D":
        case "DD":
          return Me(Ye.dayOfYear, a);
        case "Do":
          return i.ordinalNumber(a, {
            unit: "date"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      var i = a.getUTCFullYear(), l = ms(i);
      return l ? o >= 1 && o <= 366 : o >= 1 && o <= 365;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMonth(0, i), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Pi(e, t, n) {
  var r, a, o, i, l, c, u, p;
  ne(2, arguments);
  var d = Dt(), f = le((r = (a = (o = (i = n == null ? void 0 : n.weekStartsOn) !== null && i !== void 0 ? i : n == null || (l = n.locale) === null || l === void 0 || (c = l.options) === null || c === void 0 ? void 0 : c.weekStartsOn) !== null && o !== void 0 ? o : d.weekStartsOn) !== null && a !== void 0 ? a : (u = d.locale) === null || u === void 0 || (p = u.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && r !== void 0 ? r : 0);
  if (!(f >= 0 && f <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var m = se(e), _ = le(t), x = m.getUTCDay(), g = _ % 7, Y = (g + 7) % 7, P = (Y < f ? 7 : 0) + _ - x;
  return m.setUTCDate(m.getUTCDate() + P), m;
}
function lr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lr = function(n) {
    return typeof n;
  } : lr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, lr(e);
}
function gy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ml(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function _y(e, t, n) {
  return t && ml(e.prototype, t), n && ml(e, n), e;
}
function wy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Do(e, t);
}
function Do(e, t) {
  return Do = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Do(e, t);
}
function Oy(e) {
  var t = Sy();
  return function() {
    var r = zr(e), a;
    if (t) {
      var o = zr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return $y(this, a);
  };
}
function $y(e, t) {
  return t && (lr(t) === "object" || typeof t == "function") ? t : xo(e);
}
function xo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Sy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function zr(e) {
  return zr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, zr(e);
}
function hl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var ky = /* @__PURE__ */ function(e) {
  wy(n, e);
  var t = Oy(n);
  function n() {
    var r;
    gy(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), hl(xo(r), "priority", 90), hl(xo(r), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), r;
  }
  return _y(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "E":
        case "EE":
        case "EEE":
          return i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEE":
          return i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEEEE":
          return i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "EEEE":
        default:
          return i.day(a, {
            width: "wide",
            context: "formatting"
          }) || i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(a, o, i, l) {
      return a = Pi(a, i, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function ur(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ur = function(n) {
    return typeof n;
  } : ur = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, ur(e);
}
function Py(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ty(e, t, n) {
  return t && bl(e.prototype, t), n && bl(e, n), e;
}
function Dy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Co(e, t);
}
function Co(e, t) {
  return Co = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Co(e, t);
}
function xy(e) {
  var t = Ry();
  return function() {
    var r = Gr(e), a;
    if (t) {
      var o = Gr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Cy(this, a);
  };
}
function Cy(e, t) {
  return t && (ur(t) === "object" || typeof t == "function") ? t : Ro(e);
}
function Ro(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Ry() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Gr(e) {
  return Gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Gr(e);
}
function gl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var My = /* @__PURE__ */ function(e) {
  Dy(n, e);
  var t = xy(n);
  function n() {
    var r;
    Py(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), gl(Ro(r), "priority", 90), gl(Ro(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), r;
  }
  return Ty(n, [{
    key: "parse",
    value: function(a, o, i, l) {
      var c = function(p) {
        var d = Math.floor((p - 1) / 7) * 7;
        return (p + l.weekStartsOn + 6) % 7 + d;
      };
      switch (o) {
        case "e":
        case "ee":
          return Ue(Ie(o.length, a), c);
        case "eo":
          return Ue(i.ordinalNumber(a, {
            unit: "day"
          }), c);
        case "eee":
          return i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeee":
          return i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeeeee":
          return i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
        case "eeee":
        default:
          return i.day(a, {
            width: "wide",
            context: "formatting"
          }) || i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(a, o, i, l) {
      return a = Pi(a, i, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function sr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? sr = function(n) {
    return typeof n;
  } : sr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, sr(e);
}
function Ny(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ey(e, t, n) {
  return t && _l(e.prototype, t), n && _l(e, n), e;
}
function Ay(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Mo(e, t);
}
function Mo(e, t) {
  return Mo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Mo(e, t);
}
function Iy(e) {
  var t = By();
  return function() {
    var r = Kr(e), a;
    if (t) {
      var o = Kr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Ly(this, a);
  };
}
function Ly(e, t) {
  return t && (sr(t) === "object" || typeof t == "function") ? t : No(e);
}
function No(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function By() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Kr(e) {
  return Kr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Kr(e);
}
function wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Yy = /* @__PURE__ */ function(e) {
  Ay(n, e);
  var t = Iy(n);
  function n() {
    var r;
    Ny(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), wl(No(r), "priority", 90), wl(No(r), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), r;
  }
  return Ey(n, [{
    key: "parse",
    value: function(a, o, i, l) {
      var c = function(p) {
        var d = Math.floor((p - 1) / 7) * 7;
        return (p + l.weekStartsOn + 6) % 7 + d;
      };
      switch (o) {
        case "c":
        case "cc":
          return Ue(Ie(o.length, a), c);
        case "co":
          return Ue(i.ordinalNumber(a, {
            unit: "day"
          }), c);
        case "ccc":
          return i.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(a, {
            width: "short",
            context: "standalone"
          }) || i.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "ccccc":
          return i.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccccc":
          return i.day(a, {
            width: "short",
            context: "standalone"
          }) || i.day(a, {
            width: "narrow",
            context: "standalone"
          });
        case "cccc":
        default:
          return i.day(a, {
            width: "wide",
            context: "standalone"
          }) || i.day(a, {
            width: "abbreviated",
            context: "standalone"
          }) || i.day(a, {
            width: "short",
            context: "standalone"
          }) || i.day(a, {
            width: "narrow",
            context: "standalone"
          });
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 6;
    }
  }, {
    key: "set",
    value: function(a, o, i, l) {
      return a = Pi(a, i, l), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function Uy(e, t) {
  ne(2, arguments);
  var n = le(t);
  n % 7 === 0 && (n = n - 7);
  var r = 1, a = se(e), o = a.getUTCDay(), i = n % 7, l = (i + 7) % 7, c = (l < r ? 7 : 0) + n - o;
  return a.setUTCDate(a.getUTCDate() + c), a;
}
function cr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? cr = function(n) {
    return typeof n;
  } : cr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, cr(e);
}
function Fy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ol(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function jy(e, t, n) {
  return t && Ol(e.prototype, t), n && Ol(e, n), e;
}
function Vy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Eo(e, t);
}
function Eo(e, t) {
  return Eo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Eo(e, t);
}
function Hy(e) {
  var t = qy();
  return function() {
    var r = Qr(e), a;
    if (t) {
      var o = Qr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Wy(this, a);
  };
}
function Wy(e, t) {
  return t && (cr(t) === "object" || typeof t == "function") ? t : Ao(e);
}
function Ao(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Qr(e) {
  return Qr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Qr(e);
}
function $l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var zy = /* @__PURE__ */ function(e) {
  Vy(n, e);
  var t = Hy(n);
  function n() {
    var r;
    Fy(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), $l(Ao(r), "priority", 90), $l(Ao(r), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), r;
  }
  return jy(n, [{
    key: "parse",
    value: function(a, o, i) {
      var l = function(u) {
        return u === 0 ? 7 : u;
      };
      switch (o) {
        case "i":
        case "ii":
          return Ie(o.length, a);
        case "io":
          return i.ordinalNumber(a, {
            unit: "day"
          });
        case "iii":
          return Ue(i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
        case "iiiii":
          return Ue(i.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
        case "iiiiii":
          return Ue(i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
        case "iiii":
        default:
          return Ue(i.day(a, {
            width: "wide",
            context: "formatting"
          }) || i.day(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.day(a, {
            width: "short",
            context: "formatting"
          }) || i.day(a, {
            width: "narrow",
            context: "formatting"
          }), l);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 7;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a = Uy(a, i), a.setUTCHours(0, 0, 0, 0), a;
    }
  }]), n;
}($e);
function fr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fr = function(n) {
    return typeof n;
  } : fr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fr(e);
}
function Gy(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Sl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ky(e, t, n) {
  return t && Sl(e.prototype, t), n && Sl(e, n), e;
}
function Qy(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Io(e, t);
}
function Io(e, t) {
  return Io = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Io(e, t);
}
function Xy(e) {
  var t = Jy();
  return function() {
    var r = Xr(e), a;
    if (t) {
      var o = Xr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Zy(this, a);
  };
}
function Zy(e, t) {
  return t && (fr(t) === "object" || typeof t == "function") ? t : Lo(e);
}
function Lo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jy() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Xr(e) {
  return Xr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Xr(e);
}
function kl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var em = /* @__PURE__ */ function(e) {
  Qy(n, e);
  var t = Xy(n);
  function n() {
    var r;
    Gy(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), kl(Lo(r), "priority", 80), kl(Lo(r), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), r;
  }
  return Ky(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "a":
        case "aa":
        case "aaa":
          return i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaa":
        default:
          return i.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCHours(ki(i), 0, 0, 0), a;
    }
  }]), n;
}($e);
function dr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? dr = function(n) {
    return typeof n;
  } : dr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, dr(e);
}
function tm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function nm(e, t, n) {
  return t && Pl(e.prototype, t), n && Pl(e, n), e;
}
function rm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Bo(e, t);
}
function Bo(e, t) {
  return Bo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Bo(e, t);
}
function am(e) {
  var t = im();
  return function() {
    var r = Zr(e), a;
    if (t) {
      var o = Zr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return om(this, a);
  };
}
function om(e, t) {
  return t && (dr(t) === "object" || typeof t == "function") ? t : Yo(e);
}
function Yo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function im() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Zr(e) {
  return Zr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Zr(e);
}
function Tl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var lm = /* @__PURE__ */ function(e) {
  rm(n, e);
  var t = am(n);
  function n() {
    var r;
    tm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Tl(Yo(r), "priority", 80), Tl(Yo(r), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), r;
  }
  return nm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "b":
        case "bb":
        case "bbb":
          return i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbbb":
          return i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "bbbb":
        default:
          return i.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCHours(ki(i), 0, 0, 0), a;
    }
  }]), n;
}($e);
function pr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? pr = function(n) {
    return typeof n;
  } : pr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, pr(e);
}
function um(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Dl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function sm(e, t, n) {
  return t && Dl(e.prototype, t), n && Dl(e, n), e;
}
function cm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Uo(e, t);
}
function Uo(e, t) {
  return Uo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Uo(e, t);
}
function fm(e) {
  var t = pm();
  return function() {
    var r = Jr(e), a;
    if (t) {
      var o = Jr(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return dm(this, a);
  };
}
function dm(e, t) {
  return t && (pr(t) === "object" || typeof t == "function") ? t : Fo(e);
}
function Fo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Jr(e) {
  return Jr = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Jr(e);
}
function xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var vm = /* @__PURE__ */ function(e) {
  cm(n, e);
  var t = fm(n);
  function n() {
    var r;
    um(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), xl(Fo(r), "priority", 80), xl(Fo(r), "incompatibleTokens", ["a", "b", "t", "T"]), r;
  }
  return sm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "B":
        case "BB":
        case "BBB":
          return i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBBB":
          return i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
        case "BBBB":
        default:
          return i.dayPeriod(a, {
            width: "wide",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting"
          }) || i.dayPeriod(a, {
            width: "narrow",
            context: "formatting"
          });
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCHours(ki(i), 0, 0, 0), a;
    }
  }]), n;
}($e);
function vr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vr = function(n) {
    return typeof n;
  } : vr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, vr(e);
}
function ym(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function mm(e, t, n) {
  return t && Cl(e.prototype, t), n && Cl(e, n), e;
}
function hm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && jo(e, t);
}
function jo(e, t) {
  return jo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, jo(e, t);
}
function bm(e) {
  var t = _m();
  return function() {
    var r = ea(e), a;
    if (t) {
      var o = ea(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return gm(this, a);
  };
}
function gm(e, t) {
  return t && (vr(t) === "object" || typeof t == "function") ? t : Vo(e);
}
function Vo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _m() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ea(e) {
  return ea = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ea(e);
}
function Rl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var wm = /* @__PURE__ */ function(e) {
  hm(n, e);
  var t = bm(n);
  function n() {
    var r;
    ym(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Rl(Vo(r), "priority", 70), Rl(Vo(r), "incompatibleTokens", ["H", "K", "k", "t", "T"]), r;
  }
  return mm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "h":
          return Me(Ye.hour12h, a);
        case "ho":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 12;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var l = a.getUTCHours() >= 12;
      return l && i < 12 ? a.setUTCHours(i + 12, 0, 0, 0) : !l && i === 12 ? a.setUTCHours(0, 0, 0, 0) : a.setUTCHours(i, 0, 0, 0), a;
    }
  }]), n;
}($e);
function yr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yr = function(n) {
    return typeof n;
  } : yr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, yr(e);
}
function Om(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ml(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function $m(e, t, n) {
  return t && Ml(e.prototype, t), n && Ml(e, n), e;
}
function Sm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Ho(e, t);
}
function Ho(e, t) {
  return Ho = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Ho(e, t);
}
function km(e) {
  var t = Tm();
  return function() {
    var r = ta(e), a;
    if (t) {
      var o = ta(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Pm(this, a);
  };
}
function Pm(e, t) {
  return t && (yr(t) === "object" || typeof t == "function") ? t : Wo(e);
}
function Wo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Tm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ta(e) {
  return ta = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ta(e);
}
function Nl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Dm = /* @__PURE__ */ function(e) {
  Sm(n, e);
  var t = km(n);
  function n() {
    var r;
    Om(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Nl(Wo(r), "priority", 70), Nl(Wo(r), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), r;
  }
  return $m(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "H":
          return Me(Ye.hour23h, a);
        case "Ho":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 23;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCHours(i, 0, 0, 0), a;
    }
  }]), n;
}($e);
function mr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mr = function(n) {
    return typeof n;
  } : mr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, mr(e);
}
function xm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function El(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Cm(e, t, n) {
  return t && El(e.prototype, t), n && El(e, n), e;
}
function Rm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && qo(e, t);
}
function qo(e, t) {
  return qo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, qo(e, t);
}
function Mm(e) {
  var t = Em();
  return function() {
    var r = na(e), a;
    if (t) {
      var o = na(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Nm(this, a);
  };
}
function Nm(e, t) {
  return t && (mr(t) === "object" || typeof t == "function") ? t : zo(e);
}
function zo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Em() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function na(e) {
  return na = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, na(e);
}
function Al(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Am = /* @__PURE__ */ function(e) {
  Rm(n, e);
  var t = Mm(n);
  function n() {
    var r;
    xm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Al(zo(r), "priority", 70), Al(zo(r), "incompatibleTokens", ["h", "H", "k", "t", "T"]), r;
  }
  return Cm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "K":
          return Me(Ye.hour11h, a);
        case "Ko":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 11;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var l = a.getUTCHours() >= 12;
      return l && i < 12 ? a.setUTCHours(i + 12, 0, 0, 0) : a.setUTCHours(i, 0, 0, 0), a;
    }
  }]), n;
}($e);
function hr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? hr = function(n) {
    return typeof n;
  } : hr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, hr(e);
}
function Im(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Il(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Lm(e, t, n) {
  return t && Il(e.prototype, t), n && Il(e, n), e;
}
function Bm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Go(e, t);
}
function Go(e, t) {
  return Go = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Go(e, t);
}
function Ym(e) {
  var t = Fm();
  return function() {
    var r = ra(e), a;
    if (t) {
      var o = ra(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return Um(this, a);
  };
}
function Um(e, t) {
  return t && (hr(t) === "object" || typeof t == "function") ? t : Ko(e);
}
function Ko(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Fm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ra(e) {
  return ra = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ra(e);
}
function Ll(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var jm = /* @__PURE__ */ function(e) {
  Bm(n, e);
  var t = Ym(n);
  function n() {
    var r;
    Im(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Ll(Ko(r), "priority", 70), Ll(Ko(r), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), r;
  }
  return Lm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "k":
          return Me(Ye.hour24h, a);
        case "ko":
          return i.ordinalNumber(a, {
            unit: "hour"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 1 && o <= 24;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      var l = i <= 24 ? i % 24 : i;
      return a.setUTCHours(l, 0, 0, 0), a;
    }
  }]), n;
}($e);
function br(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? br = function(n) {
    return typeof n;
  } : br = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, br(e);
}
function Vm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Hm(e, t, n) {
  return t && Bl(e.prototype, t), n && Bl(e, n), e;
}
function Wm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Qo(e, t);
}
function Qo(e, t) {
  return Qo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Qo(e, t);
}
function qm(e) {
  var t = Gm();
  return function() {
    var r = aa(e), a;
    if (t) {
      var o = aa(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return zm(this, a);
  };
}
function zm(e, t) {
  return t && (br(t) === "object" || typeof t == "function") ? t : Xo(e);
}
function Xo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Gm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function aa(e) {
  return aa = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, aa(e);
}
function Yl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Km = /* @__PURE__ */ function(e) {
  Wm(n, e);
  var t = qm(n);
  function n() {
    var r;
    Vm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Yl(Xo(r), "priority", 60), Yl(Xo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Hm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "m":
          return Me(Ye.minute, a);
        case "mo":
          return i.ordinalNumber(a, {
            unit: "minute"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMinutes(i, 0, 0), a;
    }
  }]), n;
}($e);
function gr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? gr = function(n) {
    return typeof n;
  } : gr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, gr(e);
}
function Qm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ul(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Xm(e, t, n) {
  return t && Ul(e.prototype, t), n && Ul(e, n), e;
}
function Zm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && Zo(e, t);
}
function Zo(e, t) {
  return Zo = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, Zo(e, t);
}
function Jm(e) {
  var t = t0();
  return function() {
    var r = oa(e), a;
    if (t) {
      var o = oa(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return e0(this, a);
  };
}
function e0(e, t) {
  return t && (gr(t) === "object" || typeof t == "function") ? t : Jo(e);
}
function Jo(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function t0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function oa(e) {
  return oa = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, oa(e);
}
function Fl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var n0 = /* @__PURE__ */ function(e) {
  Zm(n, e);
  var t = Jm(n);
  function n() {
    var r;
    Qm(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Fl(Jo(r), "priority", 50), Fl(Jo(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return Xm(n, [{
    key: "parse",
    value: function(a, o, i) {
      switch (o) {
        case "s":
          return Me(Ye.second, a);
        case "so":
          return i.ordinalNumber(a, {
            unit: "second"
          });
        default:
          return Ie(o.length, a);
      }
    }
  }, {
    key: "validate",
    value: function(a, o) {
      return o >= 0 && o <= 59;
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCSeconds(i, 0), a;
    }
  }]), n;
}($e);
function _r(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _r = function(n) {
    return typeof n;
  } : _r = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, _r(e);
}
function r0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function jl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function a0(e, t, n) {
  return t && jl(e.prototype, t), n && jl(e, n), e;
}
function o0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ei(e, t);
}
function ei(e, t) {
  return ei = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ei(e, t);
}
function i0(e) {
  var t = u0();
  return function() {
    var r = ia(e), a;
    if (t) {
      var o = ia(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return l0(this, a);
  };
}
function l0(e, t) {
  return t && (_r(t) === "object" || typeof t == "function") ? t : ti(e);
}
function ti(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function u0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ia(e) {
  return ia = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ia(e);
}
function Vl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var s0 = /* @__PURE__ */ function(e) {
  o0(n, e);
  var t = i0(n);
  function n() {
    var r;
    r0(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Vl(ti(r), "priority", 30), Vl(ti(r), "incompatibleTokens", ["t", "T"]), r;
  }
  return a0(n, [{
    key: "parse",
    value: function(a, o) {
      var i = function(c) {
        return Math.floor(c * Math.pow(10, -o.length + 3));
      };
      return Ue(Ie(o.length, a), i);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return a.setUTCMilliseconds(i), a;
    }
  }]), n;
}($e);
function wr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? wr = function(n) {
    return typeof n;
  } : wr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, wr(e);
}
function c0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function f0(e, t, n) {
  return t && Hl(e.prototype, t), n && Hl(e, n), e;
}
function d0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ni(e, t);
}
function ni(e, t) {
  return ni = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ni(e, t);
}
function p0(e) {
  var t = y0();
  return function() {
    var r = la(e), a;
    if (t) {
      var o = la(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return v0(this, a);
  };
}
function v0(e, t) {
  return t && (wr(t) === "object" || typeof t == "function") ? t : ri(e);
}
function ri(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function y0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function la(e) {
  return la = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, la(e);
}
function Wl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var m0 = /* @__PURE__ */ function(e) {
  d0(n, e);
  var t = p0(n);
  function n() {
    var r;
    c0(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Wl(ri(r), "priority", 10), Wl(ri(r), "incompatibleTokens", ["t", "T", "x"]), r;
  }
  return f0(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "X":
          return Pt(kt.basicOptionalMinutes, a);
        case "XX":
          return Pt(kt.basic, a);
        case "XXXX":
          return Pt(kt.basicOptionalSeconds, a);
        case "XXXXX":
          return Pt(kt.extendedOptionalSeconds, a);
        case "XXX":
        default:
          return Pt(kt.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return o.timestampIsSet ? a : new Date(a.getTime() - i);
    }
  }]), n;
}($e);
function Or(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Or = function(n) {
    return typeof n;
  } : Or = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Or(e);
}
function h0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ql(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function b0(e, t, n) {
  return t && ql(e.prototype, t), n && ql(e, n), e;
}
function g0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ai(e, t);
}
function ai(e, t) {
  return ai = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ai(e, t);
}
function _0(e) {
  var t = O0();
  return function() {
    var r = ua(e), a;
    if (t) {
      var o = ua(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return w0(this, a);
  };
}
function w0(e, t) {
  return t && (Or(t) === "object" || typeof t == "function") ? t : oi(e);
}
function oi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function O0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ua(e) {
  return ua = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ua(e);
}
function zl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var $0 = /* @__PURE__ */ function(e) {
  g0(n, e);
  var t = _0(n);
  function n() {
    var r;
    h0(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), zl(oi(r), "priority", 10), zl(oi(r), "incompatibleTokens", ["t", "T", "X"]), r;
  }
  return b0(n, [{
    key: "parse",
    value: function(a, o) {
      switch (o) {
        case "x":
          return Pt(kt.basicOptionalMinutes, a);
        case "xx":
          return Pt(kt.basic, a);
        case "xxxx":
          return Pt(kt.basicOptionalSeconds, a);
        case "xxxxx":
          return Pt(kt.extendedOptionalSeconds, a);
        case "xxx":
        default:
          return Pt(kt.extended, a);
      }
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return o.timestampIsSet ? a : new Date(a.getTime() - i);
    }
  }]), n;
}($e);
function $r(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? $r = function(n) {
    return typeof n;
  } : $r = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, $r(e);
}
function S0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Gl(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function k0(e, t, n) {
  return t && Gl(e.prototype, t), n && Gl(e, n), e;
}
function P0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ii(e, t);
}
function ii(e, t) {
  return ii = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ii(e, t);
}
function T0(e) {
  var t = x0();
  return function() {
    var r = sa(e), a;
    if (t) {
      var o = sa(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return D0(this, a);
  };
}
function D0(e, t) {
  return t && ($r(t) === "object" || typeof t == "function") ? t : li(e);
}
function li(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function x0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function sa(e) {
  return sa = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, sa(e);
}
function Kl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var C0 = /* @__PURE__ */ function(e) {
  P0(n, e);
  var t = T0(n);
  function n() {
    var r;
    S0(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Kl(li(r), "priority", 40), Kl(li(r), "incompatibleTokens", "*"), r;
  }
  return k0(n, [{
    key: "parse",
    value: function(a) {
      return vs(a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return [new Date(i * 1e3), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}($e);
function Sr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Sr = function(n) {
    return typeof n;
  } : Sr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Sr(e);
}
function R0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ql(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function M0(e, t, n) {
  return t && Ql(e.prototype, t), n && Ql(e, n), e;
}
function N0(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && ui(e, t);
}
function ui(e, t) {
  return ui = Object.setPrototypeOf || function(r, a) {
    return r.__proto__ = a, r;
  }, ui(e, t);
}
function E0(e) {
  var t = I0();
  return function() {
    var r = ca(e), a;
    if (t) {
      var o = ca(this).constructor;
      a = Reflect.construct(r, arguments, o);
    } else
      a = r.apply(this, arguments);
    return A0(this, a);
  };
}
function A0(e, t) {
  return t && (Sr(t) === "object" || typeof t == "function") ? t : si(e);
}
function si(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function I0() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ca(e) {
  return ca = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ca(e);
}
function Xl(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var L0 = /* @__PURE__ */ function(e) {
  N0(n, e);
  var t = E0(n);
  function n() {
    var r;
    R0(this, n);
    for (var a = arguments.length, o = new Array(a), i = 0; i < a; i++)
      o[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(o)), Xl(si(r), "priority", 20), Xl(si(r), "incompatibleTokens", "*"), r;
  }
  return M0(n, [{
    key: "parse",
    value: function(a) {
      return vs(a);
    }
  }, {
    key: "set",
    value: function(a, o, i) {
      return [new Date(i), {
        timestampIsSet: !0
      }];
    }
  }]), n;
}($e), B0 = {
  G: new Bp(),
  y: new Wp(),
  Y: new Zp(),
  R: new ov(),
  u: new dv(),
  Q: new gv(),
  q: new Pv(),
  M: new Nv(),
  L: new Uv(),
  w: new Gv(),
  I: new ny(),
  d: new fy(),
  D: new by(),
  E: new ky(),
  e: new My(),
  c: new Yy(),
  i: new zy(),
  a: new em(),
  b: new lm(),
  B: new vm(),
  h: new wm(),
  H: new Dm(),
  K: new Am(),
  k: new jm(),
  m: new Km(),
  s: new n0(),
  S: new s0(),
  X: new m0(),
  x: new $0(),
  t: new C0(),
  T: new L0()
};
function kr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? kr = function(n) {
    return typeof n;
  } : kr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, kr(e);
}
function Zl(e, t) {
  var n;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (n = Y0(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(u) {
        throw u;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0, i = !1, l;
  return { s: function() {
    n = e[Symbol.iterator]();
  }, n: function() {
    var u = n.next();
    return o = u.done, u;
  }, e: function(u) {
    i = !0, l = u;
  }, f: function() {
    try {
      !o && n.return != null && n.return();
    } finally {
      if (i)
        throw l;
    }
  } };
}
function Y0(e, t) {
  if (e) {
    if (typeof e == "string")
      return Jl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Jl(e, t);
  }
}
function Jl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var U0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, F0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, j0 = /^'([^]*?)'?$/, V0 = /''/g, H0 = /\S/, W0 = /[a-zA-Z]/;
function ci(e, t, n, r) {
  var a, o, i, l, c, u, p, d, f, m, _, x, g, Y, P, T, F, j;
  ne(3, arguments);
  var W = String(e), Z = String(t), L = Dt(), w = (a = (o = r == null ? void 0 : r.locale) !== null && o !== void 0 ? o : L.locale) !== null && a !== void 0 ? a : ss;
  if (!w.match)
    throw new RangeError("locale must contain match property");
  var U = le((i = (l = (c = (u = r == null ? void 0 : r.firstWeekContainsDate) !== null && u !== void 0 ? u : r == null || (p = r.locale) === null || p === void 0 || (d = p.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && c !== void 0 ? c : L.firstWeekContainsDate) !== null && l !== void 0 ? l : (f = L.locale) === null || f === void 0 || (m = f.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
  if (!(U >= 1 && U <= 7))
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var N = le((_ = (x = (g = (Y = r == null ? void 0 : r.weekStartsOn) !== null && Y !== void 0 ? Y : r == null || (P = r.locale) === null || P === void 0 || (T = P.options) === null || T === void 0 ? void 0 : T.weekStartsOn) !== null && g !== void 0 ? g : L.weekStartsOn) !== null && x !== void 0 ? x : (F = L.locale) === null || F === void 0 || (j = F.options) === null || j === void 0 ? void 0 : j.weekStartsOn) !== null && _ !== void 0 ? _ : 0);
  if (!(N >= 0 && N <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (Z === "")
    return W === "" ? se(n) : /* @__PURE__ */ new Date(NaN);
  var G = {
    firstWeekContainsDate: U,
    weekStartsOn: N,
    locale: w
  }, K = [new xp()], Q = Z.match(F0).map(function(re) {
    var he = re[0];
    if (he in Ja) {
      var Le = Ja[he];
      return Le(re, w.formatLong);
    }
    return re;
  }).join("").match(U0), H = [], E = Zl(Q), s;
  try {
    var v = function() {
      var he = s.value;
      !(r != null && r.useAdditionalWeekYearTokens) && us(he) && Rr(he, Z, e), !(r != null && r.useAdditionalDayOfYearTokens) && ls(he) && Rr(he, Z, e);
      var Le = he[0], ce = B0[Le];
      if (ce) {
        var gt = ce.incompatibleTokens;
        if (Array.isArray(gt)) {
          var ft = H.find(function(St) {
            return gt.includes(St.token) || St.token === Le;
          });
          if (ft)
            throw new RangeError("The format string mustn't contain `".concat(ft.fullToken, "` and `").concat(he, "` at the same time"));
        } else if (ce.incompatibleTokens === "*" && H.length > 0)
          throw new RangeError("The format string mustn't contain `".concat(he, "` and any other token at the same time"));
        H.push({
          token: Le,
          fullToken: he
        });
        var je = ce.run(W, he, w.match, G);
        if (!je)
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
        K.push(je.setter), W = je.rest;
      } else {
        if (Le.match(W0))
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + Le + "`");
        if (he === "''" ? he = "'" : Le === "'" && (he = q0(he)), W.indexOf(he) === 0)
          W = W.slice(he.length);
        else
          return {
            v: /* @__PURE__ */ new Date(NaN)
          };
      }
    };
    for (E.s(); !(s = E.n()).done; ) {
      var $ = v();
      if (kr($) === "object")
        return $.v;
    }
  } catch (re) {
    E.e(re);
  } finally {
    E.f();
  }
  if (W.length > 0 && H0.test(W))
    return /* @__PURE__ */ new Date(NaN);
  var S = K.map(function(re) {
    return re.priority;
  }).sort(function(re, he) {
    return he - re;
  }).filter(function(re, he, Le) {
    return Le.indexOf(re) === he;
  }).map(function(re) {
    return K.filter(function(he) {
      return he.priority === re;
    }).sort(function(he, Le) {
      return Le.subPriority - he.subPriority;
    });
  }).map(function(re) {
    return re[0];
  }), z = se(n);
  if (isNaN(z.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var X = ns(z, Cr(z)), q = {}, y = Zl(S), k;
  try {
    for (y.s(); !(k = y.n()).done; ) {
      var ve = k.value;
      if (!ve.validate(X, G))
        return /* @__PURE__ */ new Date(NaN);
      var we = ve.set(X, q, G);
      Array.isArray(we) ? (X = we[0], mp(q, we[1])) : X = we;
    }
  } catch (re) {
    y.e(re);
  } finally {
    y.f();
  }
  return X;
}
function q0(e) {
  return e.match(j0)[1].replace(V0, "'");
}
function z0(e, t) {
  ne(2, arguments);
  var n = le(t);
  return Lt(e, -n);
}
function G0(e, t) {
  var n;
  ne(1, arguments);
  var r = le((n = t == null ? void 0 : t.additionalDigits) !== null && n !== void 0 ? n : 2);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = Z0(e), o;
  if (a.date) {
    var i = J0(a.date, r);
    o = eh(i.restDateString, i.year);
  }
  if (!o || isNaN(o.getTime()))
    return /* @__PURE__ */ new Date(NaN);
  var l = o.getTime(), c = 0, u;
  if (a.time && (c = th(a.time), isNaN(c)))
    return /* @__PURE__ */ new Date(NaN);
  if (a.timezone) {
    if (u = nh(a.timezone), isNaN(u))
      return /* @__PURE__ */ new Date(NaN);
  } else {
    var p = new Date(l + c), d = /* @__PURE__ */ new Date(0);
    return d.setFullYear(p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate()), d.setHours(p.getUTCHours(), p.getUTCMinutes(), p.getUTCSeconds(), p.getUTCMilliseconds()), d;
  }
  return new Date(l + c + u);
}
var Yn = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
}, K0 = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/, Q0 = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/, X0 = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Z0(e) {
  var t = {}, n = e.split(Yn.dateTimeDelimiter), r;
  if (n.length > 2)
    return t;
  if (/:/.test(n[0]) ? r = n[0] : (t.date = n[0], r = n[1], Yn.timeZoneDelimiter.test(t.date) && (t.date = e.split(Yn.timeZoneDelimiter)[0], r = e.substr(t.date.length, e.length))), r) {
    var a = Yn.timezone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timezone = a[1]) : t.time = r;
  }
  return t;
}
function J0(e, t) {
  var n = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"), r = e.match(n);
  if (!r)
    return {
      year: NaN,
      restDateString: ""
    };
  var a = r[1] ? parseInt(r[1]) : null, o = r[2] ? parseInt(r[2]) : null;
  return {
    year: o === null ? a : o * 100,
    restDateString: e.slice((r[1] || r[2]).length)
  };
}
function eh(e, t) {
  if (t === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = e.match(K0);
  if (!n)
    return /* @__PURE__ */ new Date(NaN);
  var r = !!n[4], a = hn(n[1]), o = hn(n[2]) - 1, i = hn(n[3]), l = hn(n[4]), c = hn(n[5]) - 1;
  if (r)
    return lh(t, l, c) ? rh(t, l, c) : /* @__PURE__ */ new Date(NaN);
  var u = /* @__PURE__ */ new Date(0);
  return !oh(t, o, i) || !ih(t, a) ? /* @__PURE__ */ new Date(NaN) : (u.setUTCFullYear(t, o, Math.max(a, i)), u);
}
function hn(e) {
  return e ? parseInt(e) : 1;
}
function th(e) {
  var t = e.match(Q0);
  if (!t)
    return NaN;
  var n = La(t[1]), r = La(t[2]), a = La(t[3]);
  return uh(n, r, a) ? n * gi + r * bi + a * 1e3 : NaN;
}
function La(e) {
  return e && parseFloat(e.replace(",", ".")) || 0;
}
function nh(e) {
  if (e === "Z")
    return 0;
  var t = e.match(X0);
  if (!t)
    return 0;
  var n = t[1] === "+" ? -1 : 1, r = parseInt(t[2]), a = t[3] && parseInt(t[3]) || 0;
  return sh(r, a) ? n * (r * gi + a * bi) : NaN;
}
function rh(e, t, n) {
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = (t - 1) * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var ah = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function hs(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function oh(e, t, n) {
  return t >= 0 && t <= 11 && n >= 1 && n <= (ah[t] || (hs(e) ? 29 : 28));
}
function ih(e, t) {
  return t >= 1 && t <= (hs(e) ? 366 : 365);
}
function lh(e, t, n) {
  return t >= 1 && t <= 53 && n >= 0 && n <= 6;
}
function uh(e, t, n) {
  return e === 24 ? t === 0 && n === 0 : n >= 0 && n < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function sh(e, t) {
  return t >= 0 && t <= 59;
}
function Pn(e, t) {
  ne(2, arguments);
  var n = se(e), r = le(t), a = n.getFullYear(), o = n.getDate(), i = /* @__PURE__ */ new Date(0);
  i.setFullYear(a, r, 15), i.setHours(0, 0, 0, 0);
  var l = bp(i);
  return n.setMonth(r, Math.min(o, l)), n;
}
function Pr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pr = function(n) {
    return typeof n;
  } : Pr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Pr(e);
}
function Xe(e, t) {
  if (ne(2, arguments), Pr(t) !== "object" || t === null)
    throw new RangeError("values parameter must be an object");
  var n = se(e);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (t.year != null && n.setFullYear(t.year), t.month != null && (n = Pn(n, t.month)), t.date != null && n.setDate(le(t.date)), t.hours != null && n.setHours(le(t.hours)), t.minutes != null && n.setMinutes(le(t.minutes)), t.seconds != null && n.setSeconds(le(t.seconds)), t.milliseconds != null && n.setMilliseconds(le(t.milliseconds)), n);
}
function bs(e, t) {
  ne(2, arguments);
  var n = se(e), r = le(t);
  return n.setHours(r), n;
}
function Ti(e, t) {
  ne(2, arguments);
  var n = se(e), r = le(t);
  return n.setMilliseconds(r), n;
}
function gs(e, t) {
  ne(2, arguments);
  var n = se(e), r = le(t);
  return n.setMinutes(r), n;
}
function _s(e, t) {
  ne(2, arguments);
  var n = se(e), r = le(t);
  return n.setSeconds(r), n;
}
function Gt(e, t) {
  ne(2, arguments);
  var n = se(e), r = le(t);
  return isNaN(n.getTime()) ? /* @__PURE__ */ new Date(NaN) : (n.setFullYear(r), n);
}
function rn(e, t) {
  ne(2, arguments);
  var n = le(t);
  return Tt(e, -n);
}
function Tr(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tr = function(n) {
    return typeof n;
  } : Tr = function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, Tr(e);
}
function ch(e, t) {
  if (ne(2, arguments), !t || Tr(t) !== "object")
    return /* @__PURE__ */ new Date(NaN);
  var n = t.years ? le(t.years) : 0, r = t.months ? le(t.months) : 0, a = t.weeks ? le(t.weeks) : 0, o = t.days ? le(t.days) : 0, i = t.hours ? le(t.hours) : 0, l = t.minutes ? le(t.minutes) : 0, c = t.seconds ? le(t.seconds) : 0, u = rn(e, r + n * 12), p = z0(u, o + a * 7), d = l + i * 60, f = c + d * 60, m = f * 1e3, _ = new Date(p.getTime() - m);
  return _;
}
function fh(e, t) {
  ne(2, arguments);
  var n = le(t);
  return es(e, -n);
}
function _a() {
  return O(), A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      C("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
      }),
      C("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      C("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      }),
      C("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
      })
    ]
  );
}
function dh() {
  return O(), A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      C("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
      }),
      C("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
function eu() {
  return O(), A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      C("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function tu() {
  return O(), A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      C("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
      })
    ]
  );
}
function ws() {
  return O(), A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      C("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
      }),
      C("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
      })
    ]
  );
}
function Os() {
  return O(), A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      C("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
      })
    ]
  );
}
function $s() {
  return O(), A(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 32 32",
      fill: "currentColor",
      "aria-hidden": "true",
      class: "dp__icon"
    },
    [
      C("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
      })
    ]
  );
}
const nu = (e, t, n, r) => {
  const a = ci(e, t.slice(0, e.length), /* @__PURE__ */ new Date());
  return Sn(a) && ts(a) ? r ? a : Xe(a, {
    hours: +n.hours,
    minutes: +(n == null ? void 0 : n.minutes),
    seconds: +(n == null ? void 0 : n.seconds),
    milliseconds: 0
  }) : null;
}, ph = (e, t, n, r) => {
  const a = Array.isArray(n) ? n[0] : n;
  if (typeof t == "string")
    return nu(e, t, a, r);
  if (Array.isArray(t)) {
    let o = null;
    for (const i of t)
      if (o = nu(e, i, a, r), o)
        break;
    return o;
  }
  return typeof t == "function" ? t(e) : null;
}, V = (e) => e ? new Date(e) : /* @__PURE__ */ new Date(), vh = (e, t) => {
  if (t) {
    const r = (e.getMonth() + 1).toString().padStart(2, "0"), a = e.getDate().toString().padStart(2, "0"), o = e.getHours().toString().padStart(2, "0"), i = e.getMinutes().toString().padStart(2, "0");
    return `${e.getFullYear()}-${r}-${a}T${o}:${i}:00.000Z`;
  }
  const n = Date.UTC(
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds()
  );
  return new Date(n).toISOString();
}, $t = (e) => {
  let t = V(JSON.parse(JSON.stringify(e)));
  return t = bs(t, 0), t = gs(t, 0), t = _s(t, 0), t = Ti(t, 0), t;
}, mt = (e, t, n, r) => {
  let a = e ? V(e) : V();
  return (t || t === 0) && (a = bs(a, +t)), (n || n === 0) && (a = gs(a, +n)), (r || r === 0) && (a = _s(a, +r)), Ti(a, 0);
}, et = (e, t) => !e || !t ? !1 : Oi($t(e), $t(t)), Pe = (e, t) => !e || !t ? !1 : cs($t(e), $t(t)), at = (e, t) => !e || !t ? !1 : wi($t(e), $t(t)), Ss = (e, t, n) => e && e[0] && e[1] ? at(n, e[0]) && et(n, e[1]) : e && e[0] && t ? at(n, e[0]) && et(n, t) || et(n, e[0]) && at(n, t) : !1, bn = (e) => {
  const t = Xe(new Date(e), { date: 1 });
  return $t(t);
}, gn = sn({
  menuFocused: !1,
  shiftKeyInMenu: !1
}), ks = () => {
  const e = (n) => {
    gn.menuFocused = n;
  }, t = (n) => {
    gn.shiftKeyInMenu !== n && (gn.shiftKeyInMenu = n);
  };
  return {
    control: D(() => ({ shiftKeyInMenu: gn.shiftKeyInMenu, menuFocused: gn.menuFocused })),
    setMenuFocused: e,
    setShiftKey: t
  };
};
function Di(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fa = {}, yh = {
  get exports() {
    return fa;
  },
  set exports(e) {
    fa = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    if (r === null || r === !0 || r === !1)
      return NaN;
    var a = Number(r);
    return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
  }
  e.exports = t.default;
})(yh, fa);
const mh = /* @__PURE__ */ Di(fa);
var da = {}, hh = {
  get exports() {
    return da;
  },
  set exports(e) {
    da = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r) {
    var a = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()));
    return a.setUTCFullYear(r.getFullYear()), r.getTime() - a.getTime();
  }
  e.exports = t.default;
})(hh, da);
const ru = /* @__PURE__ */ Di(da);
function bh(e, t) {
  var n = Oh(t);
  return n.formatToParts ? _h(n, e) : wh(n, e);
}
var gh = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function _h(e, t) {
  try {
    for (var n = e.formatToParts(t), r = [], a = 0; a < n.length; a++) {
      var o = gh[n[a].type];
      o >= 0 && (r[o] = parseInt(n[a].value, 10));
    }
    return r;
  } catch (i) {
    if (i instanceof RangeError)
      return [NaN];
    throw i;
  }
}
function wh(e, t) {
  var n = e.format(t).replace(/\u200E/g, ""), r = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(n);
  return [r[3], r[1], r[2], r[4], r[5], r[6]];
}
var Ba = {};
function Oh(e) {
  if (!Ba[e]) {
    var t = new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: "America/New_York",
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(/* @__PURE__ */ new Date("2014-06-25T04:00:00.123Z")), n = t === "06/25/2014, 00:00:00" || t === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    Ba[e] = n ? new Intl.DateTimeFormat("en-US", {
      hour12: !1,
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }) : new Intl.DateTimeFormat("en-US", {
      hourCycle: "h23",
      timeZone: e,
      year: "numeric",
      month: "numeric",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
  }
  return Ba[e];
}
function xi(e, t, n, r, a, o, i) {
  var l = /* @__PURE__ */ new Date(0);
  return l.setUTCFullYear(e, t, n), l.setUTCHours(r, a, o, i), l;
}
var au = 36e5, $h = 6e4, Ya = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Ci(e, t, n) {
  var r, a;
  if (!e || (r = Ya.timezoneZ.exec(e), r))
    return 0;
  var o;
  if (r = Ya.timezoneHH.exec(e), r)
    return o = parseInt(r[1], 10), ou(o) ? -(o * au) : NaN;
  if (r = Ya.timezoneHHMM.exec(e), r) {
    o = parseInt(r[1], 10);
    var i = parseInt(r[2], 10);
    return ou(o, i) ? (a = Math.abs(o) * au + i * $h, o > 0 ? -a : a) : NaN;
  }
  if (Ph(e)) {
    t = new Date(t || Date.now());
    var l = n ? t : Sh(t), c = fi(l, e), u = n ? c : kh(t, c, e);
    return -u;
  }
  return NaN;
}
function Sh(e) {
  return xi(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function fi(e, t) {
  var n = bh(e, t), r = xi(
    n[0],
    n[1] - 1,
    n[2],
    n[3] % 24,
    n[4],
    n[5],
    0
  ).getTime(), a = e.getTime(), o = a % 1e3;
  return a -= o >= 0 ? o : 1e3 + o, r - a;
}
function kh(e, t, n) {
  var r = e.getTime(), a = r - t, o = fi(new Date(a), n);
  if (t === o)
    return t;
  a -= o - t;
  var i = fi(new Date(a), n);
  return o === i ? o : Math.max(o, i);
}
function ou(e, t) {
  return -23 <= e && e <= 23 && (t == null || 0 <= t && t <= 59);
}
var iu = {};
function Ph(e) {
  if (iu[e])
    return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), iu[e] = !0, !0;
  } catch {
    return !1;
  }
}
var Th = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;
const Ps = Th;
var Ua = 36e5, lu = 6e4, Dh = 2, rt = {
  dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
  datePattern: /^([0-9W+-]+)(.*)/,
  plainTime: /:/,
  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/,
    // 0 additional digits
    /^([+-]\d{3})$/,
    // 1 additional digit
    /^([+-]\d{4})$/
    // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/,
    // 0 additional digits
    /^([+-]\d{5})/,
    // 1 additional digit
    /^([+-]\d{6})/
    // 2 additional digits
  ],
  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,
  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
  // time zone tokens (to identify the presence of a tz)
  timeZone: Ps
};
function di(e, t) {
  if (arguments.length < 1)
    throw new TypeError("1 argument required, but only " + arguments.length + " present");
  if (e === null)
    return /* @__PURE__ */ new Date(NaN);
  var n = t || {}, r = n.additionalDigits == null ? Dh : mh(n.additionalDigits);
  if (r !== 2 && r !== 1 && r !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]")
    return new Date(e.getTime());
  if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]")
    return new Date(e);
  if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]"))
    return /* @__PURE__ */ new Date(NaN);
  var a = xh(e), o = Ch(a.date, r), i = o.year, l = o.restDateString, c = Rh(l, i);
  if (isNaN(c))
    return /* @__PURE__ */ new Date(NaN);
  if (c) {
    var u = c.getTime(), p = 0, d;
    if (a.time && (p = Mh(a.time), isNaN(p)))
      return /* @__PURE__ */ new Date(NaN);
    if (a.timeZone || n.timeZone) {
      if (d = Ci(a.timeZone || n.timeZone, new Date(u + p)), isNaN(d))
        return /* @__PURE__ */ new Date(NaN);
    } else
      d = ru(new Date(u + p)), d = ru(new Date(u + p + d));
    return new Date(u + p + d);
  } else
    return /* @__PURE__ */ new Date(NaN);
}
function xh(e) {
  var t = {}, n = rt.dateTimePattern.exec(e), r;
  if (n ? (t.date = n[1], r = n[3]) : (n = rt.datePattern.exec(e), n ? (t.date = n[1], r = n[2]) : (t.date = null, r = e)), r) {
    var a = rt.timeZone.exec(r);
    a ? (t.time = r.replace(a[1], ""), t.timeZone = a[1].trim()) : t.time = r;
  }
  return t;
}
function Ch(e, t) {
  var n = rt.YYY[t], r = rt.YYYYY[t], a;
  if (a = rt.YYYY.exec(e) || r.exec(e), a) {
    var o = a[1];
    return {
      year: parseInt(o, 10),
      restDateString: e.slice(o.length)
    };
  }
  if (a = rt.YY.exec(e) || n.exec(e), a) {
    var i = a[1];
    return {
      year: parseInt(i, 10) * 100,
      restDateString: e.slice(i.length)
    };
  }
  return {
    year: null
  };
}
function Rh(e, t) {
  if (t === null)
    return null;
  var n, r, a, o;
  if (e.length === 0)
    return r = /* @__PURE__ */ new Date(0), r.setUTCFullYear(t), r;
  if (n = rt.MM.exec(e), n)
    return r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1, su(t, a) ? (r.setUTCFullYear(t, a), r) : /* @__PURE__ */ new Date(NaN);
  if (n = rt.DDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0);
    var i = parseInt(n[1], 10);
    return Ah(t, i) ? (r.setUTCFullYear(t, 0, i), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = rt.MMDD.exec(e), n) {
    r = /* @__PURE__ */ new Date(0), a = parseInt(n[1], 10) - 1;
    var l = parseInt(n[2], 10);
    return su(t, a, l) ? (r.setUTCFullYear(t, a, l), r) : /* @__PURE__ */ new Date(NaN);
  }
  if (n = rt.Www.exec(e), n)
    return o = parseInt(n[1], 10) - 1, cu(t, o) ? uu(t, o) : /* @__PURE__ */ new Date(NaN);
  if (n = rt.WwwD.exec(e), n) {
    o = parseInt(n[1], 10) - 1;
    var c = parseInt(n[2], 10) - 1;
    return cu(t, o, c) ? uu(t, o, c) : /* @__PURE__ */ new Date(NaN);
  }
  return null;
}
function Mh(e) {
  var t, n, r;
  if (t = rt.HH.exec(e), t)
    return n = parseFloat(t[1].replace(",", ".")), Fa(n) ? n % 24 * Ua : NaN;
  if (t = rt.HHMM.exec(e), t)
    return n = parseInt(t[1], 10), r = parseFloat(t[2].replace(",", ".")), Fa(n, r) ? n % 24 * Ua + r * lu : NaN;
  if (t = rt.HHMMSS.exec(e), t) {
    n = parseInt(t[1], 10), r = parseInt(t[2], 10);
    var a = parseFloat(t[3].replace(",", "."));
    return Fa(n, r, a) ? n % 24 * Ua + r * lu + a * 1e3 : NaN;
  }
  return null;
}
function uu(e, t, n) {
  t = t || 0, n = n || 0;
  var r = /* @__PURE__ */ new Date(0);
  r.setUTCFullYear(e, 0, 4);
  var a = r.getUTCDay() || 7, o = t * 7 + n + 1 - a;
  return r.setUTCDate(r.getUTCDate() + o), r;
}
var Nh = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Eh = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ts(e) {
  return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0;
}
function su(e, t, n) {
  if (t < 0 || t > 11)
    return !1;
  if (n != null) {
    if (n < 1)
      return !1;
    var r = Ts(e);
    if (r && n > Eh[t] || !r && n > Nh[t])
      return !1;
  }
  return !0;
}
function Ah(e, t) {
  if (t < 1)
    return !1;
  var n = Ts(e);
  return !(n && t > 366 || !n && t > 365);
}
function cu(e, t, n) {
  return !(t < 0 || t > 52 || n != null && (n < 0 || n > 6));
}
function Fa(e, t, n) {
  return !(e != null && (e < 0 || e >= 25) || t != null && (t < 0 || t >= 60) || n != null && (n < 0 || n >= 60));
}
var pa = {}, Ih = {
  get exports() {
    return pa;
  },
  set exports(e) {
    pa = e;
  }
}, va = {}, Lh = {
  get exports() {
    return va;
  },
  set exports(e) {
    va = e;
  }
};
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = n;
  function n(r, a) {
    if (r == null)
      throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var o in a)
      Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
    return r;
  }
  e.exports = t.default;
})(Lh, va);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = a;
  var n = r(va);
  function r(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function a(o) {
    return (0, n.default)({}, o);
  }
  e.exports = t.default;
})(Ih, pa);
const Bh = /* @__PURE__ */ Di(pa);
function Yh(e, t, n) {
  var r = di(e, n), a = Ci(t, r, !0), o = new Date(r.getTime() - a), i = /* @__PURE__ */ new Date(0);
  return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()), i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()), i;
}
function Uh(e, t, n) {
  if (typeof e == "string" && !e.match(Ps)) {
    var r = Bh(n);
    return r.timeZone = t, di(e, r);
  }
  var a = di(e, n), o = xi(
    a.getFullYear(),
    a.getMonth(),
    a.getDate(),
    a.getHours(),
    a.getMinutes(),
    a.getSeconds(),
    a.getMilliseconds()
  ).getTime(), i = Ci(t, new Date(o));
  return new Date(o + i);
}
const Fh = (e, t = 3) => {
  const n = [];
  for (let r = 0; r < e.length; r += t)
    n.push([e[r], e[r + 1], e[r + 2]]);
  return n;
}, jh = (e, t) => {
  const n = [1, 2, 3, 4, 5, 6, 7].map((o) => new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" }).format(/* @__PURE__ */ new Date(`2017-01-0${o}T00:00:00+00:00`)).slice(0, 2)), r = n.slice(0, t), a = n.slice(t + 1, n.length);
  return [n[t]].concat(...a).concat(...r);
}, Vh = (e, t) => {
  const n = [];
  for (let r = +e[0]; r <= +e[1]; r++)
    n.push({ value: +r, text: `${r}` });
  return t ? n.reverse() : n;
}, Hh = (e, t) => {
  const n = new Intl.DateTimeFormat(e, { month: t, timeZone: "UTC" });
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((r) => {
    const a = r < 10 ? `0${r}` : r;
    return /* @__PURE__ */ new Date(`2017-${a}-01T00:00:00+00:00`);
  }).map((r, a) => ({
    text: n.format(r),
    value: a
  }));
}, Wh = (e) => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e], He = (e) => {
  const t = b(e);
  return t != null && t.$el ? t == null ? void 0 : t.$el : t;
}, qh = (e) => Object.assign({ type: "dot" }, e), Ds = (e) => Array.isArray(e) ? !!e[0] && !!e[1] : !1, ya = {
  prop: (e) => `"${e}" prop must be enabled!`,
  dateArr: (e) => `You need to use array as "model-value" binding in order to support "${e}"`
}, Ze = (e) => e, fu = (e) => e === 0 ? e : !e || isNaN(+e) ? null : +e, du = (e) => Object.assign(
  {
    menuAppear: "dp-menu-appear",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down"
  },
  e
), zh = (e) => Object.assign(
  {
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (t) => `Increment ${t}`,
    decrementValue: (t) => `Decrement ${t}`,
    openTpOverlay: (t) => `Open ${t} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    day: () => ""
  },
  e
), Gh = (e) => e === null ? 0 : typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2, Kh = (e, t, n) => e || (typeof n == "string" ? n : t), Qh = (e) => typeof e == "boolean" ? e ? du({}) : !1 : du(e), Xh = () => ({
  enterSubmit: !0,
  tabSubmit: !0,
  openMenu: !0,
  rangeSeparator: " - "
}), Zh = (e) => Object.assign({ months: [], years: [], times: { hours: [], minutes: [], seconds: [] } }, e), yt = (e) => {
  const t = () => {
    if (e.partialRange)
      return null;
    throw new Error(ya.prop("partial-range"));
  }, n = D(() => ({
    ariaLabels: zh(e.ariaLabels),
    textInputOptions: Object.assign(Xh(), e.textInputOptions),
    multiCalendars: Gh(e.multiCalendars),
    previewFormat: Kh(e.previewFormat, e.format, o()),
    filters: Zh(e.filters),
    transitions: Qh(e.transitions),
    startTime: f()
  })), r = (s) => {
    if (e.range)
      return s();
    throw new Error(ya.prop("range"));
  }, a = () => {
    const s = e.enableSeconds ? ":ss" : "";
    return e.is24 ? `HH:mm${s}` : `hh:mm${s} aa`;
  }, o = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? a() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${a()}` : "MM/dd/yyyy", i = (s, v) => {
    if (typeof e.format == "function")
      return e.format(s);
    const $ = v || o(), S = e.formatLocale ? { locale: e.formatLocale } : void 0;
    return Array.isArray(s) ? `${kn(s[0], $, S)} ${e.modelAuto && !s[1] ? "" : n.value.textInputOptions.rangeSeparator || "-"} ${s[1] ? kn(s[1], $, S) : ""}` : kn(s, $, S);
  }, l = (s) => e.timezone ? Yh(s, e.timezone) : s, c = (s) => e.timezone ? Uh(s, e.timezone) : s, u = D(() => (s) => {
    var v;
    return (v = e.hideNavigation) == null ? void 0 : v.includes(s);
  }), p = (s) => {
    const v = e.maxDate ? at(l(s), l(V(e.maxDate))) : !1, $ = e.minDate ? et(l(s), l(V(e.minDate))) : !1, S = Y(s, e.disabledDates), z = n.value.filters.months.map((ve) => +ve).includes(De(s)), X = e.disabledWeekDays.length ? e.disabledWeekDays.some((ve) => +ve === hp(s)) : !1, q = e.allowedDates.length ? !e.allowedDates.some((ve) => Pe(l(V(ve)), l(s))) : !1, y = xe(s), k = y < +e.yearRange[0] || y > +e.yearRange[1];
    return !(v || $ || S || z || k || X || q);
  }, d = (s) => {
    const v = {
      hours: xt(V()),
      minutes: Ct(V()),
      seconds: e.enableSeconds ? un(V()) : 0
    };
    return Object.assign(v, s);
  }, f = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [d(e.startTime[0]), d(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? d(e.startTime) : null, m = (s) => !p(s), _ = (s) => Array.isArray(s) ? Sn(s[0]) && (s[1] ? Sn(s[1]) : !0) : s ? Sn(s) : !1, x = (s) => s instanceof Date ? s : G0(s), g = (s) => {
    const v = Kt(l(s), { weekStartsOn: +e.weekStart }), $ = dd(l(s), { weekStartsOn: +e.weekStart });
    return [v, $];
  }, Y = (s, v) => Array.isArray(v) ? v.some(($) => Pe(l(V($)), l(s))) : v(s), P = (s, v, $) => {
    let S = s ? V(s) : V();
    return (v || v === 0) && (S = Pn(S, v)), $ && (S = Gt(S, $)), S;
  }, T = (s) => Xe(V(), { hours: xt(s), minutes: Ct(s), seconds: un(s) }), F = (s) => Xe(V(), {
    hours: +s.hours || 0,
    minutes: +s.minutes || 0,
    seconds: +s.seconds || 0
  }), j = (s, v, $, S) => {
    if (!s)
      return !0;
    if (S) {
      const z = $ === "max" ? Oi(s, v) : wi(s, v), X = { seconds: 0, milliseconds: 0 };
      return z || cs(Xe(s, X), Xe(v, X));
    }
    return $ === "max" ? s.getTime() <= v.getTime() : s.getTime() >= v.getTime();
  }, W = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, Z = (s) => Array.isArray(s) ? [s[0] ? T(s[0]) : null, s[1] ? T(s[1]) : null] : T(s), L = (s) => {
    const v = e.maxTime ? F(e.maxTime) : V(e.maxDate);
    return Array.isArray(s) ? j(s[0], v, "max", !!e.maxDate) && j(s[1], v, "max", !!e.maxDate) : j(s, v, "max", !!e.maxDate);
  }, w = (s, v) => {
    const $ = e.minTime ? F(e.minTime) : V(e.minDate);
    return Array.isArray(s) ? j(s[0], $, "min", !!e.minDate) && j(s[1], $, "min", !!e.minDate) && v : j(s, $, "min", !!e.minDate) && v;
  }, U = (s) => {
    let v = !0;
    if (!s || W())
      return !0;
    const $ = !e.minDate && !e.maxDate ? Z(s) : s;
    return (e.maxTime || e.maxDate) && (v = L(Ze($))), (e.minTime || e.minDate) && (v = w(Ze($), v)), v;
  }, N = (s, v) => {
    const $ = V(JSON.parse(JSON.stringify(s))), S = [];
    for (let z = 0; z < 7; z++) {
      const X = Lt($, z), q = De(X) !== v;
      S.push({
        text: e.hideOffsetDates && q ? "" : X.getDate(),
        value: X,
        current: !q,
        classData: {}
      });
    }
    return S;
  }, G = (s, v) => {
    const $ = [], S = V(l(new Date(v, s))), z = V(l(new Date(v, s + 1, 0))), X = Kt(S, { weekStartsOn: e.weekStart }), q = (y) => {
      const k = N(y, s);
      if ($.push({ days: k }), !$[$.length - 1].days.some(
        (ve) => Pe($t(ve.value), $t(z))
      )) {
        const ve = Lt(y, 7);
        q(ve);
      }
    };
    if (q(X), e.sixWeeks && $.length < 6) {
      const y = 6 - $.length;
      for (let k = 1; k <= y; k++) {
        const ve = $[$.length - 1], we = ve.days[ve.days.length - 1], re = N(Lt(we.value, 1), De(S));
        $.push({ days: re });
      }
    }
    return $;
  }, K = (s, v, $) => [Xe(V(s), { date: 1 }), Xe(V(), { month: v, year: $, date: 1 })], Q = (s, v) => et(...K(e.minDate, s, v)) || Pe(...K(e.minDate, s, v)), H = (s, v) => at(...K(e.maxDate, s, v)) || Pe(...K(e.maxDate, s, v)), E = (s, v, $) => {
    let S = !1;
    return e.maxDate && $ && H(s, v) && (S = !0), e.minDate && !$ && Q(s, v) && (S = !0), S;
  };
  return {
    checkPartialRangeValue: t,
    checkRangeEnabled: r,
    getZonedDate: l,
    getZonedToUtc: c,
    formatDate: i,
    getDefaultPattern: o,
    validateDate: p,
    getDefaultStartTime: f,
    isDisabled: m,
    isValidDate: _,
    sanitizeDate: x,
    getWeekFromDate: g,
    matchDate: Y,
    setDateMonthOrYear: P,
    isValidTime: U,
    getCalendarDays: G,
    validateMonthYearInRange: (s, v, $, S) => {
      let z = !1;
      return S ? e.minDate && e.maxDate ? z = E(s, v, $) : (e.minDate && Q(s, v) || e.maxDate && H(s, v)) && (z = !0) : z = !0, z;
    },
    validateMaxDate: H,
    validateMinDate: Q,
    assignDefaultTime: d,
    defaults: n,
    hideNavigationButtons: u
  };
}, Te = sn({
  monthYear: [],
  calendar: [],
  time: [],
  actionRow: [],
  selectionGrid: [],
  timePicker: {
    0: [],
    1: []
  },
  monthPicker: []
}), ja = M(null), Un = M(!1), Va = M(!1), Ha = M(!1), Wa = M(!1), tt = M(0), Ge = M(0), Bt = () => {
  const e = D(() => Un.value ? [...Te.selectionGrid, Te.actionRow].filter((d) => d.length) : Va.value ? [
    ...Te.timePicker[0],
    ...Te.timePicker[1],
    Wa.value ? [] : [ja.value],
    Te.actionRow
  ].filter((d) => d.length) : Ha.value ? [...Te.monthPicker, Te.actionRow] : [Te.monthYear, ...Te.calendar, Te.time, Te.actionRow].filter((d) => d.length)), t = (d) => {
    tt.value = d ? tt.value + 1 : tt.value - 1;
    let f = null;
    e.value[Ge.value] && (f = e.value[Ge.value][tt.value]), f || (tt.value = d ? tt.value - 1 : tt.value + 1);
  }, n = (d) => {
    Ge.value === 0 && !d || Ge.value === e.value.length && d || (Ge.value = d ? Ge.value + 1 : Ge.value - 1, e.value[Ge.value] ? e.value[Ge.value] && !e.value[Ge.value][tt.value] && tt.value !== 0 && (tt.value = e.value[Ge.value].length - 1) : Ge.value = d ? Ge.value - 1 : Ge.value + 1);
  }, r = (d) => {
    let f = null;
    e.value[Ge.value] && (f = e.value[Ge.value][tt.value]), f ? f.focus({ preventScroll: !Un.value }) : tt.value = d ? tt.value - 1 : tt.value + 1;
  }, a = () => {
    t(!0), r(!0);
  }, o = () => {
    t(!1), r(!1);
  }, i = () => {
    n(!1), r(!0);
  }, l = () => {
    n(!0), r(!0);
  }, c = (d, f) => {
    Te[f] = d;
  }, u = (d, f) => {
    Te[f] = d;
  }, p = () => {
    tt.value = 0, Ge.value = 0;
  };
  return {
    buildMatrix: c,
    buildMultiLevelMatrix: u,
    setTimePickerBackRef: (d) => {
      ja.value = d;
    },
    setSelectionGrid: (d) => {
      Un.value = d, p(), d || (Te.selectionGrid = []);
    },
    setTimePicker: (d, f = !1) => {
      Va.value = d, Wa.value = f, p(), d || (Te.timePicker[0] = [], Te.timePicker[1] = []);
    },
    setTimePickerElements: (d, f = 0) => {
      Te.timePicker[f] = d;
    },
    arrowRight: a,
    arrowLeft: o,
    arrowUp: i,
    arrowDown: l,
    clearArrowNav: () => {
      Te.monthYear = [], Te.calendar = [], Te.time = [], Te.actionRow = [], Te.selectionGrid = [], Te.timePicker[0] = [], Te.timePicker[1] = [], Un.value = !1, Va.value = !1, Wa.value = !1, Ha.value = !1, p(), ja.value = null;
    },
    setMonthPicker: (d) => {
      Ha.value = d, p();
    },
    refSets: Te
    // exposed for testing
  };
}, pu = (e) => Array.isArray(e), Ft = (e) => Array.isArray(e), vu = (e) => Array.isArray(e) && e.length === 2, Jh = (e, t, n, r, a) => {
  const {
    getDefaultStartTime: o,
    isDisabled: i,
    sanitizeDate: l,
    getWeekFromDate: c,
    setDateMonthOrYear: u,
    validateMonthYearInRange: p,
    defaults: d
  } = yt(e), f = D({
    get: () => e.internalModelValue,
    set: (h) => {
      !e.readonly && !e.disabled && t("update:internal-model-value", h);
    }
  }), m = M([]);
  ze(f, () => {
    W();
  });
  const _ = Dn(e, "multiCalendars");
  ze(_, () => {
    Se(0);
  });
  const x = M([{ month: De(V()), year: xe(V()) }]), g = sn({
    hours: e.range ? [xt(V()), xt(V())] : xt(V()),
    minutes: e.range ? [Ct(V()), Ct(V())] : Ct(V()),
    seconds: e.range ? [0, 0] : 0
  }), Y = D(
    () => (h) => x.value[h] ? x.value[h].month : 0
  ), P = D(
    () => (h) => x.value[h] ? x.value[h].year : 0
  ), T = D(() => e.flow && e.flow.length && !e.partialFlow ? a.value === e.flow.length : !0), F = (h, B, oe) => {
    var ue, Ne;
    x.value[h] || (x.value[h] = { month: 0, year: 0 }), x.value[h].month = B === null ? (ue = x.value[h]) == null ? void 0 : ue.month : B, x.value[h].year = oe === null ? (Ne = x.value[h]) == null ? void 0 : Ne.year : oe;
  }, j = (h, B) => {
    g[h] = B;
  };
  Oe(() => {
    f.value || (e.startDate && (F(0, De(V(e.startDate)), xe(V(e.startDate))), d.value.multiCalendars && Se(0)), d.value.startTime && E()), W(!0);
  });
  const W = (h = !1) => {
    if (f.value)
      return Array.isArray(f.value) ? (m.value = f.value, N(h)) : L(f.value);
    if (e.timePicker)
      return G();
    if (e.monthPicker && !e.range)
      return K();
    if (e.yearPicker && !e.range)
      return Q();
    if (d.value.multiCalendars && h && !e.startDate)
      return Z(V(), h);
  }, Z = (h, B = !1) => {
    if ((!d.value.multiCalendars || !e.multiStatic || B) && F(0, De(h), xe(h)), d.value.multiCalendars)
      for (let oe = 1; oe < d.value.multiCalendars; oe++) {
        const ue = Xe(V(), { month: Y.value(oe - 1), year: P.value(oe - 1) }), Ne = Ju(ue, { months: 1 });
        x.value[oe] = { month: De(Ne), year: xe(Ne) };
      }
  }, L = (h) => {
    Z(h), j("hours", xt(h)), j("minutes", Ct(h)), j("seconds", un(h));
  }, w = (h, B) => {
    Z(h[0], B);
    const oe = (ue, Ne) => [
      ue(h[0]),
      h[1] ? ue(h[1]) : g[Ne][1]
    ];
    j("hours", oe(xt, "hours")), j("minutes", oe(Ct, "minutes")), j("seconds", oe(un, "seconds"));
  }, U = (h, B) => {
    if ((e.range || e.weekPicker) && !e.multiDates)
      return w(h, B);
    if (e.multiDates) {
      const oe = h[h.length - 1];
      return L(oe);
    }
  }, N = (h) => {
    const B = f.value;
    U(B, h), d.value.multiCalendars && e.multiCalendarsSolo && v();
  }, G = () => {
    if (E(), !e.range)
      f.value = mt(V(), g.hours, g.minutes, H());
    else {
      const h = g.hours, B = g.minutes;
      f.value = [
        mt(V(), h[0], B[0], H()),
        mt(V(), h[1], B[1], H(!1))
      ];
    }
  }, K = () => {
    e.multiDates ? f.value = [u(V(), Y.value(0), P.value(0))] : f.value = u(V(), Y.value(0), P.value(0));
  }, Q = () => {
    f.value = V();
  }, H = (h = !0) => e.enableSeconds ? Array.isArray(g.seconds) ? h ? g.seconds[0] : g.seconds[1] : g.seconds : 0, E = () => {
    const h = o();
    if (h) {
      const B = Array.isArray(h), oe = B ? [+h[0].hours, +h[1].hours] : +h.hours, ue = B ? [+h[0].minutes, +h[1].minutes] : +h.minutes, Ne = B ? [+h[0].seconds, +h[1].seconds] : +h.seconds;
      j("hours", oe), j("minutes", ue), e.enableSeconds && j("seconds", Ne);
    }
  }, s = () => Array.isArray(f.value) && f.value.length ? f.value[f.value.length - 1] : null, v = () => {
    if (Array.isArray(f.value) && f.value.length === 2) {
      const h = V(
        V(f.value[1] ? f.value[1] : Tt(f.value[0], 1))
      ), [B, oe] = [De(f.value[0]), xe(f.value[0])], [ue, Ne] = [De(f.value[1]), xe(f.value[1])];
      (B !== ue || B === ue && oe !== Ne) && e.multiCalendarsSolo && F(1, De(h), xe(h));
    }
  }, $ = (h) => {
    const B = Tt(h, 1);
    return { month: De(B), year: xe(B) };
  }, S = (h) => {
    const B = De(V(h)), oe = xe(V(h));
    if (F(0, B, oe), d.value.multiCalendars > 0)
      for (let ue = 1; ue < d.value.multiCalendars; ue++) {
        const Ne = $(
          Xe(V(h), { year: Y.value(ue - 1), month: P.value(ue - 1) })
        );
        F(ue, Ne.month, Ne.year);
      }
  }, z = (h) => {
    if (f.value && Array.isArray(f.value))
      if (f.value.some((B) => Pe(h, B))) {
        const B = f.value.filter((oe) => !Pe(oe, h));
        f.value = B.length ? B : null;
      } else
        (e.multiDatesLimit && +e.multiDatesLimit > f.value.length || !e.multiDatesLimit) && f.value.push(h);
    else
      f.value = [h];
  }, X = (h, B) => {
    const oe = at(h, B) ? B : h, ue = at(B, h) ? B : h;
    return Ui({ start: oe, end: ue });
  }, q = (h, B = 0) => {
    if (Array.isArray(f.value) && f.value[B]) {
      const oe = cd(h, f.value[B]), ue = X(f.value[B], h), Ne = ue.length === 1 ? 0 : ue.filter((R) => i(R)).length, wt = Math.abs(oe) - Ne;
      if (e.minRange && e.maxRange)
        return wt >= +e.minRange && wt <= +e.maxRange;
      if (e.minRange)
        return wt >= +e.minRange;
      if (e.maxRange)
        return wt <= +e.maxRange;
    }
    return !0;
  }, y = (h) => Array.isArray(f.value) && f.value.length === 2 ? e.fixedStart && (at(h, f.value[0]) || Pe(h, f.value[0])) ? [f.value[0], h] : e.fixedEnd && (et(h, f.value[1]) || Pe(h, f.value[1])) ? [h, f.value[1]] : (t("invalid-fixed-range", h), f.value) : [], k = () => {
    e.autoApply && T.value && t("auto-apply", e.partialFlow);
  }, ve = () => {
    e.autoApply && t("select-date");
  }, we = (h) => !Ui({ start: h[0], end: h[1] }).some((B) => i(B)), re = (h) => (f.value = c(V(h.value)), k()), he = (h) => {
    const B = mt(V(h.value), g.hours, g.minutes, H());
    e.multiDates ? z(B) : f.value = B, n(), k();
  }, Le = () => {
    m.value = f.value ? f.value.slice() : [], m.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (m.value = []);
  }, ce = (h, B) => {
    const oe = [V(h.value), Lt(V(h.value), +e.autoRange)];
    we(oe) && (B && S(h.value), m.value = oe);
  }, gt = (h) => {
    ft(h.value) || !q(h.value, e.fixedStart ? 0 : 1) || (m.value = y(V(h.value)));
  }, ft = (h) => e.noDisabledRange ? X(m.value[0], h).some((B) => i(B)) : !1, je = (h, B) => {
    if (Le(), e.autoRange)
      return ce(h, B);
    if (e.fixedStart || e.fixedEnd)
      return gt(h);
    m.value[0] ? q(V(h.value)) && !ft(h.value) && (et(V(h.value), V(m.value[0])) ? m.value.unshift(V(h.value)) : m.value[1] = V(h.value)) : m.value[0] = V(h.value);
  }, St = (h) => {
    m.value[h] = mt(
      m.value[h],
      g.hours[h],
      g.minutes[h],
      H(h !== 1)
    );
  }, cn = () => {
    m.value.length && (m.value[0] && !m.value[1] ? St(0) : (St(0), St(1), n()), f.value = m.value.slice(), m.value[0] && m.value[1] && e.autoApply && t("auto-apply"), m.value[0] && !m.value[1] && e.modelAuto && e.autoApply && t("auto-apply"));
  }, de = (h, B = !1) => {
    if (!(i(h.value) || !h.current && e.hideOffsetDates)) {
      if (e.weekPicker)
        return re(h);
      if (!e.range)
        return he(h);
      Ft(g.hours) && Ft(g.minutes) && !e.multiDates && (je(h, B), cn());
    }
  }, Ce = (h) => {
    const B = h[0];
    return e.weekNumbers === "local" ? Sp(B.value, { weekStartsOn: +e.weekStart }) : e.weekNumbers === "iso" ? _p(B.value) : typeof e.weekNumbers == "function" ? e.weekNumbers(B.value) : "";
  }, Se = (h) => {
    for (let B = h - 1; B >= 0; B--) {
      const oe = rn(Xe(V(), { month: Y.value(B + 1), year: P.value(B + 1) }), 1);
      F(B, De(oe), xe(oe));
    }
    for (let B = h + 1; B <= d.value.multiCalendars - 1; B++) {
      const oe = Tt(Xe(V(), { month: Y.value(B - 1), year: P.value(B - 1) }), 1);
      F(B, De(oe), xe(oe));
    }
  }, _t = (h) => u(V(), Y.value(h), P.value(h)), Mt = (h) => mt(h, g.hours, g.minutes, H()), Oa = (h) => {
    z(_t(h));
  }, $a = (h, B) => {
    const oe = e.monthPicker ? Y.value(h) !== B.month || !B.fromNav : P.value(h) !== B.year;
    if (F(h, B.month, B.year), d.value.multiCalendars && !e.multiCalendarsSolo && Se(h), e.monthPicker || e.yearPicker)
      if (e.multiDates)
        oe && Oa(h);
      else if (e.range) {
        if (oe) {
          let ue = f.value ? f.value.slice() : [];
          ue.length === 2 && ue[1] !== null && (ue = []), ue.length ? et(_t(h), ue[0]) ? ue.unshift(_t(h)) : ue[1] = _t(h) : ue = [_t(h)], f.value = ue;
        }
      } else
        f.value = _t(h);
    t("update-month-year", { instance: h, month: B.month, year: B.year }), r(e.multiCalendarsSolo ? h : void 0);
  }, Sa = async (h = !1) => {
    if (e.autoApply && (e.monthPicker || e.yearPicker)) {
      await ot();
      const B = e.monthPicker ? h : !1;
      e.range ? t("auto-apply", B || !f.value || f.value.length === 1) : t("auto-apply", B);
    }
    n();
  }, En = (h, B) => {
    const oe = Xe(V(), { month: Y.value(B), year: P.value(B) }), ue = h < 0 ? Tt(oe, 1) : rn(oe, 1);
    p(De(ue), xe(ue), h < 0, e.preventMinMaxNavigation) && (F(B, De(ue), xe(ue)), d.value.multiCalendars && !e.multiCalendarsSolo && Se(B), t("update-month-year", { instance: B, month: De(ue), year: xe(ue) }), r());
  }, fn = (h) => {
    pu(h) && pu(f.value) && Ft(g.hours) && Ft(g.minutes) ? (h[0] && f.value[0] && (f.value[0] = mt(h[0], g.hours[0], g.minutes[0], H())), h[1] && f.value[1] && (f.value[1] = mt(h[1], g.hours[1], g.minutes[1], H(!1)))) : e.multiDates && Array.isArray(f.value) ? f.value[f.value.length - 1] = Mt(h) : !e.range && !vu(h) && (f.value = Mt(h)), t("time-update");
  }, ka = (h, B = !0, oe = !1) => {
    const ue = B ? h : g.hours, Ne = !B && !oe ? h : g.minutes, wt = oe ? h : g.seconds;
    if (e.range && vu(f.value) && Ft(ue) && Ft(Ne) && Ft(wt) && !e.disableTimeRangeValidation) {
      const R = (Ee) => mt(f.value[Ee], ue[Ee], Ne[Ee], wt[Ee]), ee = (Ee) => Ti(f.value[Ee], 0);
      if (Pe(f.value[0], f.value[1]) && (wi(R(0), ee(1)) || Oi(R(1), ee(0))))
        return;
    }
    if (j("hours", ue), j("minutes", Ne), j("seconds", wt), f.value)
      if (e.multiDates) {
        const R = s();
        R && fn(R);
      } else
        fn(f.value);
    else
      e.timePicker && fn(e.range ? [V(), V()] : V());
    n();
  }, Pa = (h, B) => {
    e.monthChangeOnScroll && En(e.monthChangeOnScroll !== "inverse" ? -h.deltaY : h.deltaY, B);
  }, Ta = (h, B, oe = !1) => {
    e.monthChangeOnArrows && e.vertical === oe && An(h, B);
  }, An = (h, B) => {
    En(h === "right" ? -1 : 1, B);
  };
  return {
    time: g,
    month: Y,
    year: P,
    modelValue: f,
    calendars: x,
    monthYearSelect: Sa,
    isDisabled: i,
    updateTime: ka,
    getWeekNum: Ce,
    selectDate: de,
    updateMonthYear: $a,
    handleScroll: Pa,
    getMarker: (h) => e.markers.find((B) => Pe(l(h.value), l(B.date))),
    handleArrow: Ta,
    handleSwipe: An,
    selectCurrentDate: () => {
      e.range ? f.value && Array.isArray(f.value) && f.value[0] ? f.value = et(V(), f.value[0]) ? [V(), f.value[0]] : [f.value[0], V()] : f.value = [V()] : f.value = V(), ve();
    },
    presetDateRange: (h, B) => {
      B || h.length && h.length <= 2 && e.range && (f.value = h.map((oe) => V(oe)), ve(), e.multiCalendars && ot().then(() => W(!0)));
    }
  };
}, eb = (e, t, n) => {
  const r = M(), {
    getZonedToUtc: a,
    getZonedDate: o,
    formatDate: i,
    getDefaultPattern: l,
    checkRangeEnabled: c,
    checkPartialRangeValue: u,
    isValidDate: p,
    setDateMonthOrYear: d,
    defaults: f
  } = yt(t), m = M(""), _ = Dn(t, "format");
  ze(r, () => {
    e("internal-model-change", r.value);
  }), ze(_, () => {
    v();
  });
  const x = (y) => {
    const k = y || V();
    return t.modelType ? S(k) : {
      hours: xt(k),
      minutes: Ct(k),
      seconds: t.enableSeconds ? un(k) : 0
    };
  }, g = (y) => t.modelType ? S(y) : { month: De(y), year: xe(y) }, Y = (y) => Array.isArray(y) ? c(() => [
    Gt(V(), y[0]),
    y[1] ? Gt(V(), y[1]) : u()
  ]) : Gt(V(), +y), P = (y, k) => (typeof y == "string" || typeof y == "number") && t.modelType ? $(y) : k, T = (y) => Array.isArray(y) ? [
    P(
      y[0],
      mt(null, +y[0].hours, +y[0].minutes, y[0].seconds)
    ),
    P(
      y[1],
      mt(null, +y[1].hours, +y[1].minutes, y[1].seconds)
    )
  ] : P(y, mt(null, y.hours, y.minutes, y.seconds)), F = (y) => Array.isArray(y) ? t.multiDates ? y.map((k) => P(k, d(null, +k.month, +k.year))) : c(() => [
    P(y[0], d(null, +y[0].month, +y[0].year)),
    P(
      y[1],
      y[1] ? d(null, +y[1].month, +y[1].year) : u()
    )
  ]) : P(y, d(null, +y.month, +y.year)), j = (y) => {
    if (Array.isArray(y))
      return y.map((k) => $(k));
    throw new Error(ya.dateArr("multi-dates"));
  }, W = (y) => {
    if (Array.isArray(y))
      return [V(y[0]), V(y[1])];
    throw new Error(ya.dateArr("week-picker"));
  }, Z = (y) => t.modelAuto ? Array.isArray(y) ? [$(y[0]), $(y[1])] : t.autoApply ? [$(y)] : [$(y), null] : Array.isArray(y) ? c(() => [
    $(y[0]),
    y[1] ? $(y[1]) : u()
  ]) : $(y), L = () => {
    Array.isArray(r.value) && t.range && r.value.length === 1 && r.value.push(u());
  }, w = () => {
    const y = r.value;
    return [
      S(y[0]),
      y[1] ? S(y[1]) : u()
    ];
  }, U = () => r.value[1] ? w() : S(Ze(r.value[0])), N = () => (r.value || []).map((y) => S(y)), G = () => (L(), t.modelAuto ? U() : t.multiDates ? N() : Array.isArray(r.value) ? c(() => w()) : S(Ze(r.value))), K = (y) => y ? t.timePicker ? T(Ze(y)) : t.monthPicker ? F(Ze(y)) : t.yearPicker ? Y(Ze(y)) : t.multiDates ? j(Ze(y)) : t.weekPicker ? W(Ze(y)) : Z(Ze(y)) : null, Q = (y) => {
    const k = K(y);
    p(Ze(k)) ? (r.value = Ze(k), v()) : (r.value = null, m.value = "");
  }, H = () => {
    var y;
    const k = (ve) => {
      var we;
      return kn(ve, (we = f.value.textInputOptions) == null ? void 0 : we.format);
    };
    return `${k(r.value[0])} ${(y = f.value.textInputOptions) == null ? void 0 : y.rangeSeparator} ${r.value[1] ? k(r.value[1]) : ""}`;
  }, E = () => {
    var y;
    return n.value && r.value ? Array.isArray(r.value) ? H() : kn(r.value, (y = f.value.textInputOptions) == null ? void 0 : y.format) : i(r.value);
  }, s = () => {
    var y;
    return r.value ? t.multiDates ? r.value.map((k) => i(k)).join("; ") : t.textInput && typeof ((y = f.value.textInputOptions) == null ? void 0 : y.format) == "string" ? E() : i(r.value) : "";
  }, v = () => {
    !t.format || typeof t.format == "string" ? m.value = s() : m.value = t.format(r.value);
  }, $ = (y) => {
    if (t.utc) {
      const k = new Date(y);
      return t.utc === "preserve" ? new Date(k.getTime() + k.getTimezoneOffset() * 6e4) : k;
    }
    return t.modelType ? t.modelType === "date" || t.modelType === "timestamp" ? o(new Date(y)) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? ci(y, l(), /* @__PURE__ */ new Date()) : o(ci(y, t.modelType, /* @__PURE__ */ new Date())) : o(new Date(y));
  }, S = (y) => y ? t.utc ? vh(y, t.utc === "preserve") : t.modelType ? t.modelType === "timestamp" ? +a(y) : t.modelType === "format" && (typeof t.format == "string" || !t.format) ? i(a(y)) : i(a(y), t.modelType) : a(y) : "", z = (y) => {
    e("update:model-value", y);
  }, X = (y) => Array.isArray(r.value) ? t.multiDates ? r.value.map((k) => y(k)) : [
    y(r.value[0]),
    r.value[1] ? y(r.value[1]) : u()
  ] : y(Ze(r.value)), q = (y) => z(Ze(X(y)));
  return {
    inputValue: m,
    internalModelValue: r,
    checkBeforeEmit: () => r.value ? t.range ? t.partialRange ? r.value.length >= 1 : r.value.length === 2 : !!r.value : !1,
    parseExternalModelValue: Q,
    formatInputValue: v,
    emitModelValue: () => (v(), t.monthPicker ? q(g) : t.timePicker ? q(x) : t.yearPicker ? q(xe) : t.weekPicker ? z(r.value) : z(G()))
  };
}, tb = (e, t) => {
  const { validateMonthYearInRange: n, validateMaxDate: r, validateMinDate: a, defaults: o } = yt(e), i = (d, f) => {
    let m = d;
    return o.value.filters.months.includes(De(m)) ? (m = f ? Tt(d, 1) : rn(d, 1), i(m, f)) : m;
  }, l = (d, f) => {
    let m = d;
    return o.value.filters.years.includes(xe(m)) ? (m = f ? es(d, 1) : fh(d, 1), l(m, f)) : m;
  }, c = (d) => {
    const f = Xe(/* @__PURE__ */ new Date(), { month: e.month, year: e.year });
    let m = d ? Tt(f, 1) : rn(f, 1), _ = De(m), x = xe(m);
    o.value.filters.months.includes(_) && (m = i(m, d), _ = De(m), x = xe(m)), o.value.filters.years.includes(x) && (m = l(m, d), x = xe(m)), n(_, x, d, e.preventMinMaxNavigation) && u(_, x);
  }, u = (d, f) => {
    t("update-month-year", { month: d, year: f });
  }, p = D(() => (d) => {
    if (!e.preventMinMaxNavigation || d && !e.maxDate || !d && !e.minDate)
      return !1;
    const f = Xe(/* @__PURE__ */ new Date(), { month: e.month, year: e.year }), m = d ? Tt(f, 1) : rn(f, 1), _ = [De(m), xe(m)];
    return d ? !r(..._) : !a(..._);
  });
  return { handleMonthYearChange: c, isDisabled: p, updateMonthYear: u };
};
var Dr = /* @__PURE__ */ ((e) => (e.center = "center", e.left = "left", e.right = "right", e))(Dr || {});
const nb = (e, t, n, r) => {
  const a = M({
    top: "0",
    left: "0",
    transform: "none"
  }), o = M(!1), i = Dn(r, "teleportCenter");
  ze(i, () => {
    x();
  });
  const l = (L) => {
    if (r.teleport) {
      const w = L.getBoundingClientRect();
      return {
        left: w.left + window.scrollX,
        top: w.top + window.scrollY
      };
    }
    return { top: 0, left: 0 };
  }, c = (L, w) => {
    a.value.left = `${L + w}px`, a.value.transform = "translateX(-100%)";
  }, u = (L) => {
    a.value.left = `${L}px`, a.value.transform = "translateX(0)";
  }, p = (L, w, U = !1) => {
    r.position === Dr.left && u(L), r.position === Dr.right && c(L, w), r.position === Dr.center && (a.value.left = `${L + w / 2}px`, a.value.transform = U ? "translate(-50%, -50%)" : "translateX(-50%)");
  }, d = (L) => {
    const { width: w, height: U } = L.getBoundingClientRect(), { top: N, left: G } = r.altPosition ? r.altPosition(L) : l(L);
    return { top: +N, left: +G, width: w, height: U };
  }, f = () => {
    const L = He(t);
    if (L) {
      const { top: w, left: U, width: N, height: G } = d(L);
      a.value.top = `${w + G / 2}px`, a.value.transform = "translateY(-50%)", p(U, N, !0);
    }
  }, m = () => {
    a.value.left = "50%", a.value.top = "50%", a.value.transform = "translate(-50%, -50%)", a.value.position = "fixed";
  }, _ = () => {
    const L = He(t), { top: w, left: U, transform: N } = r.altPosition(L);
    a.value = { top: `${w}px`, left: `${U}px`, transform: N || "" };
  }, x = (L = !0) => {
    if (!r.inline)
      return i.value ? m() : r.altPosition !== null ? _() : (L && n("recalculate-position"), j());
  }, g = ({
    inputEl: L,
    menuEl: w,
    left: U,
    width: N
  }) => {
    window.screen.width > 768 && p(U, N), T(L, w);
  }, Y = (L, w) => {
    const { top: U, left: N, height: G, width: K } = d(L);
    a.value.top = `${G + U + +r.offset}px`, g({ inputEl: L, menuEl: w, left: N, width: K }), o.value = !1;
  }, P = (L, w) => {
    const { top: U, left: N, width: G } = d(L), { height: K } = w.getBoundingClientRect();
    a.value.top = `${U - K - +r.offset}px`, g({ inputEl: L, menuEl: w, left: N, width: G }), o.value = !0;
  }, T = (L, w) => {
    if (r.autoPosition) {
      const { left: U, width: N } = d(L), { left: G, right: K } = w.getBoundingClientRect();
      return G <= 0 || G <= U ? u(U) : K >= document.documentElement.clientWidth ? c(U, N) : p(U, N);
    }
  }, F = (L, w) => {
    const { height: U } = w.getBoundingClientRect(), { top: N, height: G } = L.getBoundingClientRect(), K = window.innerHeight - N - G, Q = N;
    return U <= K ? Y(L, w) : U > K && U <= Q ? P(L, w) : K >= Q ? Y(L, w) : P(L, w);
  }, j = () => {
    const L = He(t), w = He(e);
    if (L && w)
      return r.autoPosition ? F(L, w) : Y(L, w);
  }, W = function(L) {
    if (L) {
      const w = L.scrollHeight > L.clientHeight, U = window.getComputedStyle(L).overflowY.indexOf("hidden") !== -1;
      return w && !U;
    }
    return !0;
  }, Z = function(L) {
    return !L || L === document.body || L.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : W(L) ? L : Z(L.parentNode);
  };
  return { openOnTop: o, menuPosition: a, setMenuPosition: x, setInitialPosition: f, getScrollableParent: Z };
}, nn = [
  { name: "clock-icon", use: ["time", "calendar"] },
  { name: "arrow-left", use: ["month-year", "calendar"] },
  { name: "arrow-right", use: ["month-year", "calendar"] },
  { name: "arrow-up", use: ["time", "calendar"] },
  { name: "arrow-down", use: ["time", "calendar"] },
  { name: "calendar-icon", use: ["month-year", "time", "calendar"] },
  { name: "day", use: ["calendar"] },
  { name: "month-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay-value", use: ["calendar", "month-year"] },
  { name: "year-overlay", use: ["month-year"] },
  { name: "month-overlay", use: ["month-year"] },
  { name: "month-overlay-header", use: ["month-year"] },
  { name: "year-overlay-header", use: ["month-year"] },
  { name: "hours-overlay-value", use: ["calendar", "time"] },
  { name: "minutes-overlay-value", use: ["calendar", "time"] },
  { name: "seconds-overlay-value", use: ["calendar", "time"] },
  { name: "hours", use: ["calendar", "time"] },
  { name: "minutes", use: ["calendar", "time"] },
  { name: "month", use: ["calendar", "month-year"] },
  { name: "year", use: ["calendar", "month-year"] },
  { name: "action-select", use: ["action"] },
  { name: "action-preview", use: ["action"] },
  { name: "calendar-header", use: ["calendar"] },
  { name: "marker-tooltip", use: ["calendar"] },
  { name: "now-button", use: [] },
  { name: "time-picker-overlay", use: ["calendar", "time"] },
  { name: "am-pm-button", use: ["calendar", "time"] },
  { name: "left-sidebar", use: ["menu"] },
  { name: "right-sidebar", use: ["menu"] },
  { name: "month-year", use: ["month-year"] },
  { name: "time-picker", use: ["menu"] },
  { name: "action-row", use: ["action"] }
], rb = [{ name: "trigger" }, { name: "input-icon" }, { name: "clear-icon" }, { name: "dp-input" }], ab = {
  all: () => nn,
  monthYear: () => nn.filter((e) => e.use.includes("month-year")),
  input: () => rb,
  timePicker: () => nn.filter((e) => e.use.includes("time")),
  action: () => nn.filter((e) => e.use.includes("action")),
  calendar: () => nn.filter((e) => e.use.includes("calendar")),
  menu: () => nn.filter((e) => e.use.includes("menu"))
}, qt = (e, t, n) => {
  const r = [];
  return ab[t]().forEach((a) => {
    e[a.name] && r.push(a.name);
  }), n && n.length && n.forEach((a) => {
    a.slot && r.push(a.slot);
  }), r;
}, wa = (e) => ({ transitionName: D(() => (t) => e && typeof e != "boolean" ? t ? e.open : e.close : ""), showTransition: !!e }), Yt = {
  multiCalendars: { type: [Boolean, Number, String], default: null },
  modelValue: { type: [String, Date, Array, Object, Number], default: null },
  modelType: { type: String, default: null },
  position: { type: String, default: "center" },
  dark: { type: Boolean, default: !1 },
  format: {
    type: [String, Function],
    default: () => null
  },
  closeOnScroll: { type: Boolean, default: !1 },
  autoPosition: { type: Boolean, default: !0 },
  closeOnAutoApply: { type: Boolean, default: !0 },
  altPosition: { type: Function, default: null },
  transitions: { type: [Boolean, Object], default: !0 },
  formatLocale: { type: Object, default: null },
  utc: { type: [Boolean, String], default: !1 },
  ariaLabels: { type: Object, default: () => ({}) },
  offset: { type: [Number, String], default: 10 },
  hideNavigation: { type: Array, default: () => [] },
  timezone: { type: String, default: null },
  vertical: { type: Boolean, default: !1 },
  disableMonthYearSelect: { type: Boolean, default: !1 },
  menuClassName: { type: String, default: null },
  dayClass: { type: Function, default: null },
  yearRange: { type: Array, default: () => [1900, 2100] },
  multiCalendarsSolo: { type: Boolean, default: !1 },
  calendarCellClassName: { type: String, default: null },
  enableTimePicker: { type: Boolean, default: !0 },
  autoApply: { type: Boolean, default: !1 },
  disabledDates: { type: [Array, Function], default: () => [] },
  monthNameFormat: { type: String, default: "short" },
  startDate: { type: [Date, String], default: null },
  startTime: { type: [Object, Array], default: null },
  hideOffsetDates: { type: Boolean, default: !1 },
  autoRange: { type: [Number, String], default: null },
  noToday: { type: Boolean, default: !1 },
  disabledWeekDays: { type: Array, default: () => [] },
  allowedDates: { type: Array, default: () => [] },
  showNowButton: { type: Boolean, default: !1 },
  nowButtonLabel: { type: String, default: "Now" },
  markers: { type: Array, default: () => [] },
  modeHeight: { type: [Number, String], default: 255 },
  escClose: { type: Boolean, default: !0 },
  spaceConfirm: { type: Boolean, default: !0 },
  monthChangeOnArrows: { type: Boolean, default: !0 },
  presetRanges: { type: Array, default: () => [] },
  flow: { type: Array, default: () => [] },
  partialFlow: { type: Boolean, default: !1 },
  preventMinMaxNavigation: { type: Boolean, default: !1 },
  minRange: { type: [Number, String], default: null },
  maxRange: { type: [Number, String], default: null },
  multiDatesLimit: { type: [Number, String], default: null },
  reverseYears: { type: Boolean, default: !1 },
  keepActionRow: { type: Boolean, default: !1 },
  weekPicker: { type: Boolean, default: !1 },
  filters: { type: Object, default: () => ({}) },
  arrowNavigation: { type: Boolean, default: !1 },
  multiStatic: { type: Boolean, default: !0 },
  disableTimeRangeValidation: { type: Boolean, default: !1 },
  highlight: {
    type: [Array, Function],
    default: null
  },
  highlightWeekDays: {
    type: Array,
    default: null
  },
  highlightDisabledDays: { type: Boolean, default: !1 },
  teleport: { type: [String, Boolean], default: null },
  teleportCenter: { type: Boolean, default: !1 },
  locale: { type: String, default: "en-Us" },
  weekNumName: { type: String, default: "W" },
  weekStart: { type: [Number, String], default: 1 },
  weekNumbers: {
    type: [String, Function],
    default: null
  },
  calendarClassName: { type: String, default: null },
  noSwipe: { type: Boolean, default: !1 },
  monthChangeOnScroll: { type: [Boolean, String], default: !0 },
  dayNames: {
    type: [Function, Array],
    default: null
  },
  monthPicker: { type: Boolean, default: !1 },
  customProps: { type: Object, default: null },
  yearPicker: { type: Boolean, default: !1 },
  modelAuto: { type: Boolean, default: !1 },
  selectText: { type: String, default: "Select" },
  cancelText: { type: String, default: "Cancel" },
  previewFormat: {
    type: [String, Function],
    default: () => ""
  },
  multiDates: { type: Boolean, default: !1 },
  partialRange: { type: Boolean, default: !0 },
  ignoreTimeValidation: { type: Boolean, default: !1 },
  minDate: { type: [Date, String], default: null },
  maxDate: { type: [Date, String], default: null },
  minTime: { type: Object, default: null },
  maxTime: { type: Object, default: null },
  name: { type: String, default: null },
  placeholder: { type: String, default: "" },
  hideInputIcon: { type: Boolean, default: !1 },
  clearable: { type: Boolean, default: !0 },
  state: { type: Boolean, default: null },
  required: { type: Boolean, default: !1 },
  autocomplete: { type: String, default: "off" },
  inputClassName: { type: String, default: null },
  inlineWithInput: { type: Boolean, default: !1 },
  textInputOptions: { type: Object, default: () => null },
  fixedStart: { type: Boolean, default: !1 },
  fixedEnd: { type: Boolean, default: !1 },
  timePicker: { type: Boolean, default: !1 },
  enableSeconds: { type: Boolean, default: !1 },
  is24: { type: Boolean, default: !0 },
  noHoursOverlay: { type: Boolean, default: !1 },
  noMinutesOverlay: { type: Boolean, default: !1 },
  noSecondsOverlay: { type: Boolean, default: !1 },
  hoursGridIncrement: { type: [String, Number], default: 1 },
  minutesGridIncrement: { type: [String, Number], default: 5 },
  secondsGridIncrement: { type: [String, Number], default: 5 },
  hoursIncrement: { type: [Number, String], default: 1 },
  minutesIncrement: { type: [Number, String], default: 1 },
  secondsIncrement: { type: [Number, String], default: 1 },
  range: { type: Boolean, default: !1 },
  uid: { type: String, default: null },
  disabled: { type: Boolean, default: !1 },
  readonly: { type: Boolean, default: !1 },
  inline: { type: Boolean, default: !1 },
  textInput: { type: Boolean, default: !1 },
  onClickOutside: { type: Function, default: null },
  noDisabledRange: { type: Boolean, default: !1 },
  sixWeeks: { type: Boolean, default: !1 }
}, ob = ["aria-label", "aria-disabled", "aria-readonly"], ib = {
  key: 1,
  class: "dp__input_wrap"
}, lb = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "onKeydown"], ub = {
  key: 2,
  class: "dp__input_icon"
}, sb = {
  key: 4,
  class: "dp__clear_icon"
}, cb = /* @__PURE__ */ fe({
  __name: "DatepickerInput",
  props: {
    isMenuOpen: { type: Boolean, default: !1 },
    inputValue: { type: String, default: "" },
    ...Yt
  },
  emits: [
    "clear",
    "open",
    "update:input-value",
    "set-input-date",
    "close",
    "select-date",
    "set-empty-date",
    "toggle",
    "focus-prev",
    "focus",
    "blur"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { getDefaultPattern: a, isValidDate: o, defaults: i, getDefaultStartTime: l, assignDefaultTime: c } = yt(r), u = M(), p = M(null), d = M(!1), f = D(
      () => ({
        dp__pointer: !r.disabled && !r.readonly && !r.textInput,
        dp__disabled: r.disabled,
        dp__input_readonly: !r.textInput,
        dp__input: !0,
        dp__input_icon_pad: !r.hideInputIcon,
        dp__input_valid: r.state,
        dp__input_invalid: r.state === !1,
        dp__input_focus: d.value || r.isMenuOpen,
        dp__input_reg: !r.textInput,
        [r.inputClassName]: !!r.inputClassName
      })
    ), m = () => {
      n("set-input-date", null), r.autoApply && (n("set-empty-date"), u.value = null);
    }, _ = (w) => {
      var U;
      const N = l();
      return ph(
        w,
        ((U = i.value.textInputOptions) == null ? void 0 : U.format) || a(),
        N || c({}),
        r.inputValue
      );
    }, x = (w) => {
      const { rangeSeparator: U } = i.value.textInputOptions, [N, G] = w.split(`${U}`);
      if (N) {
        const K = _(N.trim()), Q = G ? _(G.trim()) : null, H = K && Q ? [K, Q] : [K];
        u.value = K ? H : null;
      }
    }, g = (w) => {
      if (r.range)
        x(w);
      else if (r.multiDates) {
        const U = w.split(";");
        u.value = U.map((N) => _(N.trim())).filter((N) => N);
      } else
        u.value = _(w);
    }, Y = (w) => {
      var U;
      const { value: N } = w.target;
      N !== "" ? ((U = i.value.textInputOptions) != null && U.openMenu && !r.isMenuOpen && n("open"), g(N), n("set-input-date", u.value)) : m(), n("update:input-value", N);
    }, P = () => {
      var w, U;
      (w = i.value.textInputOptions) != null && w.enterSubmit && o(u.value) && r.inputValue !== "" ? (n("set-input-date", u.value, !0), u.value = null) : (U = i.value.textInputOptions) != null && U.enterSubmit && r.inputValue === "" && (u.value = null, n("clear"));
    }, T = () => {
      var w, U;
      (w = i.value.textInputOptions) != null && w.tabSubmit && o(u.value) && r.inputValue !== "" ? (n("set-input-date", u.value, !0), u.value = null) : (U = i.value.textInputOptions) != null && U.tabSubmit && r.inputValue === "" && (u.value = null, n("clear"));
    }, F = () => {
      d.value = !0, n("focus");
    }, j = (w) => {
      var U;
      w.preventDefault(), w.stopImmediatePropagation(), w.stopPropagation(), r.textInput && (U = i.value.textInputOptions) != null && U.openMenu && !r.inlineWithInput ? r.isMenuOpen ? i.value.textInputOptions.enterSubmit && n("select-date") : n("open") : r.textInput || n("toggle");
    }, W = () => {
      d.value = !1, r.isMenuOpen || n("blur"), r.autoApply && r.textInput && u.value && (n("set-input-date", u.value), n("select-date"), u.value = null);
    }, Z = () => {
      n("clear");
    }, L = (w) => {
      if (!r.textInput) {
        if (w.code === "Tab")
          return;
        w.preventDefault();
      }
    };
    return t({
      focusInput: () => {
        p.value && p.value.focus({ preventScroll: !0 });
      },
      setParsedDate: (w) => {
        u.value = w;
      }
    }), (w, U) => {
      var N;
      return O(), A("div", {
        onClick: j,
        "aria-label": (N = b(i).ariaLabels) == null ? void 0 : N.input,
        role: "textbox",
        "aria-multiline": "false",
        "aria-disabled": w.disabled,
        "aria-readonly": w.readonly
      }, [
        w.$slots.trigger && !w.$slots["dp-input"] && !w.inline ? J(w.$slots, "trigger", { key: 0 }) : I("", !0),
        !w.$slots.trigger && (!w.inline || w.inlineWithInput) ? (O(), A("div", ib, [
          w.$slots["dp-input"] && !w.$slots.trigger && !w.inline ? J(w.$slots, "dp-input", {
            key: 0,
            value: e.inputValue,
            onInput: Y,
            onEnter: P,
            onTab: T,
            onClear: Z
          }) : I("", !0),
          w.$slots["dp-input"] ? I("", !0) : (O(), A("input", {
            key: 1,
            ref_key: "inputRef",
            ref: p,
            id: w.uid ? `dp-input-${w.uid}` : void 0,
            name: w.name,
            class: ae(b(f)),
            inputmode: w.textInput ? "text" : "none",
            placeholder: w.placeholder,
            disabled: w.disabled,
            readonly: w.readonly,
            required: w.required,
            value: e.inputValue,
            autocomplete: w.autocomplete,
            onInput: Y,
            onKeydown: [
              _e(j, ["enter"]),
              _e(T, ["tab"]),
              L
            ],
            onBlur: W,
            onFocus: F,
            onKeypress: L
          }, null, 42, lb)),
          w.$slots["input-icon"] && !w.hideInputIcon ? (O(), A("span", ub, [
            J(w.$slots, "input-icon")
          ])) : I("", !0),
          !w.$slots["input-icon"] && !w.hideInputIcon && !w.$slots["dp-input"] ? (O(), me(b(_a), {
            key: 3,
            class: "dp__input_icon dp__input_icons"
          })) : I("", !0),
          w.$slots["clear-icon"] && e.inputValue && w.clearable && !w.disabled && !w.readonly ? (O(), A("span", sb, [
            J(w.$slots, "clear-icon", { clear: Z })
          ])) : I("", !0),
          w.clearable && !w.$slots["clear-icon"] && e.inputValue && !w.disabled && !w.readonly ? (O(), me(b(dh), {
            key: 5,
            class: "dp__clear_icon dp__input_icons",
            "data-test": "clear-icon",
            onClick: Rt(Z, ["stop", "prevent"])
          }, null, 8, ["onClick"])) : I("", !0)
        ])) : I("", !0)
      ], 8, ob);
    };
  }
}), fb = { class: "dp__selection_preview" }, db = { class: "dp__action_buttons" }, pb = ["onKeydown"], vb = /* @__PURE__ */ fe({
  __name: "ActionRow",
  props: {
    calendarWidth: { type: Number, default: 0 },
    menuMount: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Yt
  },
  emits: ["close-picker", "select-date", "invalid-select"],
  setup(e, { emit: t }) {
    const n = e, { formatDate: r, isValidTime: a, defaults: o } = yt(n), { buildMatrix: i } = Bt(), l = M(null), c = M(null);
    Oe(() => {
      n.arrowNavigation && i([He(l), He(c)], "actionRow");
    });
    const u = D(() => n.range && !n.partialRange && n.internalModelValue ? n.internalModelValue.length === 2 : !0), p = D(() => !f.value || !m.value || !u.value), d = D(() => ({
      dp__action: !0,
      dp__select: !0,
      dp__action_disabled: p.value
    })), f = D(() => !n.enableTimePicker || n.ignoreTimeValidation ? !0 : a(n.internalModelValue)), m = D(() => n.monthPicker ? n.range && Array.isArray(n.internalModelValue) ? !n.internalModelValue.filter((T) => !Y(T)).length : Y(n.internalModelValue) : !0), _ = () => {
      const T = o.value.previewFormat;
      return n.timePicker || n.monthPicker, T(Ze(n.internalModelValue));
    }, x = () => {
      const T = n.internalModelValue;
      return o.value.multiCalendars > 0 ? `${r(T[0])} - ${r(T[1])}` : [r(T[0]), r(T[1])];
    }, g = D(() => !n.internalModelValue || !n.menuMount ? "" : typeof o.value.previewFormat == "string" ? Array.isArray(n.internalModelValue) ? n.internalModelValue.length === 2 && n.internalModelValue[1] ? x() : n.multiDates ? n.internalModelValue.map((T) => `${r(T)}`) : n.modelAuto ? `${r(n.internalModelValue[0])}` : `${r(n.internalModelValue[0])} -` : r(n.internalModelValue) : _()), Y = (T) => {
      if (!n.monthPicker)
        return !0;
      let F = !0;
      const j = V(bn(T));
      if (n.minDate && n.maxDate) {
        const W = V(bn(n.minDate)), Z = V(bn(n.maxDate));
        return at(j, W) && et(j, Z) || Pe(j, W) || Pe(j, Z);
      }
      if (n.minDate) {
        const W = V(bn(n.minDate));
        F = at(j, W) || Pe(j, W);
      }
      if (n.maxDate) {
        const W = V(bn(n.maxDate));
        F = et(j, W) || Pe(j, W);
      }
      return F;
    }, P = () => {
      f.value && m.value && u.value ? t("select-date") : t("invalid-select");
    };
    return (T, F) => (O(), A("div", {
      class: "dp__action_row",
      style: Et(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {})
    }, [
      T.$slots["action-row"] ? J(T.$slots, "action-row", Je(We({ key: 0 }, {
        internalModelValue: e.internalModelValue,
        disabled: b(p),
        selectDate: () => T.$emit("select-date"),
        closePicker: () => T.$emit("close-picker")
      }))) : (O(), A(pe, { key: 1 }, [
        C("div", fb, [
          T.$slots["action-preview"] ? J(T.$slots, "action-preview", {
            key: 0,
            value: e.internalModelValue
          }) : I("", !0),
          T.$slots["action-preview"] ? I("", !0) : (O(), A(pe, { key: 1 }, [
            Array.isArray(b(g)) ? I("", !0) : (O(), A(pe, { key: 0 }, [
              st(be(b(g)), 1)
            ], 64)),
            Array.isArray(b(g)) ? (O(!0), A(pe, { key: 1 }, Re(b(g), (j, W) => (O(), A("div", { key: W }, be(j), 1))), 128)) : I("", !0)
          ], 64))
        ]),
        C("div", db, [
          T.$slots["action-select"] ? J(T.$slots, "action-select", {
            key: 0,
            value: e.internalModelValue
          }) : I("", !0),
          T.$slots["action-select"] ? I("", !0) : (O(), A(pe, { key: 1 }, [
            T.inline ? I("", !0) : (O(), A("span", {
              key: 0,
              class: "dp__action dp__cancel",
              ref_key: "cancelButtonRef",
              ref: l,
              tabindex: "0",
              onClick: F[0] || (F[0] = (j) => T.$emit("close-picker")),
              onKeydown: [
                F[1] || (F[1] = _e((j) => T.$emit("close-picker"), ["enter"])),
                F[2] || (F[2] = _e((j) => T.$emit("close-picker"), ["space"]))
              ]
            }, be(T.cancelText), 545)),
            C("span", {
              class: ae(b(d)),
              tabindex: "0",
              onKeydown: [
                _e(P, ["enter"]),
                _e(P, ["space"])
              ],
              onClick: P,
              "data-test": "select-button",
              ref_key: "selectButtonRef",
              ref: c
            }, be(T.selectText), 43, pb)
          ], 64))
        ])
      ], 64))
    ], 4));
  }
}), yb = ["aria-label"], mb = {
  class: "dp__calendar_header",
  role: "row"
}, hb = {
  key: 0,
  class: "dp__calendar_header_item",
  role: "gridcell"
}, bb = /* @__PURE__ */ C("div", { class: "dp__calendar_header_separator" }, null, -1), gb = ["aria-label"], _b = {
  key: 0,
  role: "gridcell",
  class: "dp__calendar_item dp__week_num"
}, wb = { class: "dp__cell_inner" }, Ob = ["aria-selected", "aria-disabled", "aria-label", "data-test", "onClick", "onKeydown", "onMouseenter", "onMouseleave"], $b = /* @__PURE__ */ fe({
  __name: "Calendar",
  props: {
    mappedDates: { type: Array, default: () => [] },
    getWeekNum: {
      type: Function,
      default: () => ""
    },
    specificMode: { type: Boolean, default: !1 },
    instance: { type: Number, default: 0 },
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    ...Yt
  },
  emits: [
    "select-date",
    "set-hover-date",
    "handle-scroll",
    "mount",
    "handle-swipe",
    "handle-space",
    "tooltip-open",
    "tooltip-close"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { buildMultiLevelMatrix: a } = Bt(), { setDateMonthOrYear: o, defaults: i } = yt(r), l = M(null), c = M({
      bottom: "",
      left: "",
      transform: ""
    }), u = M([]), p = M(null), d = M(!0), f = M(""), m = M({ startX: 0, endX: 0, startY: 0, endY: 0 }), _ = M([]), x = M({ left: "50%" }), g = D(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : jh(r.locale, +r.weekStart));
    Oe(() => {
      n("mount", { cmp: "calendar", refs: u }), r.noSwipe || p.value && (p.value.addEventListener("touchstart", N, { passive: !1 }), p.value.addEventListener("touchend", G, { passive: !1 }), p.value.addEventListener("touchmove", K, { passive: !1 })), r.monthChangeOnScroll && p.value && p.value.addEventListener("wheel", E, { passive: !1 });
    });
    const Y = (s) => s ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous", P = (s, v) => {
      if (r.transitions) {
        const $ = $t(o(V(), r.month, r.year));
        f.value = at($t(o(V(), s, v)), $) ? i.value.transitions[Y(!0)] : i.value.transitions[Y(!1)], d.value = !1, ot(() => {
          d.value = !0;
        });
      }
    }, T = D(
      () => ({
        dp__calendar_wrap: !0,
        [r.calendarClassName]: !!r.calendarClassName
      })
    ), F = D(() => (s) => {
      const v = qh(s);
      return {
        dp__marker_dot: v.type === "dot",
        dp__marker_line: v.type === "line"
      };
    }), j = D(() => (s) => Pe(s, l.value)), W = D(() => ({
      dp__calendar: !0,
      dp__calendar_next: i.value.multiCalendars > 0 && r.instance !== 0
    })), Z = D(() => (s) => r.hideOffsetDates ? s.current : !0), L = D(() => r.specificMode ? { height: `${r.modeHeight}px` } : void 0), w = async (s, v, $) => {
      var S, z;
      if (n("set-hover-date", s), (z = (S = s.marker) == null ? void 0 : S.tooltip) != null && z.length) {
        const X = He(u.value[v][$]);
        if (X) {
          const { width: q, height: y } = X.getBoundingClientRect();
          l.value = s.value;
          let k = { left: `${q / 2}px` }, ve = -50;
          if (await ot(), _.value[0]) {
            const { left: we, width: re } = _.value[0].getBoundingClientRect();
            we < 0 && (k = { left: "0" }, ve = 0, x.value.left = `${q / 2}px`), window.innerWidth < we + re && (k = { right: "0" }, ve = 0, x.value.left = `${re - q / 2}px`);
          }
          c.value = {
            bottom: `${y}px`,
            ...k,
            transform: `translateX(${ve}%)`
          }, n("tooltip-open", s.marker);
        }
      }
    }, U = (s) => {
      l.value && (l.value = null, c.value = JSON.parse(JSON.stringify({ bottom: "", left: "", transform: "" })), n("tooltip-close", s.marker));
    }, N = (s) => {
      m.value.startX = s.changedTouches[0].screenX, m.value.startY = s.changedTouches[0].screenY;
    }, G = (s) => {
      m.value.endX = s.changedTouches[0].screenX, m.value.endY = s.changedTouches[0].screenY, Q();
    }, K = (s) => {
      r.vertical && !r.inline && s.preventDefault();
    }, Q = () => {
      const s = r.vertical ? "Y" : "X";
      Math.abs(m.value[`start${s}`] - m.value[`end${s}`]) > 10 && n("handle-swipe", m.value[`start${s}`] > m.value[`end${s}`] ? "right" : "left");
    }, H = (s, v, $) => {
      s && (Array.isArray(u.value[v]) ? u.value[v][$] = s : u.value[v] = [s]), r.arrowNavigation && a(u.value, "calendar");
    }, E = (s) => {
      r.monthChangeOnScroll && (s.preventDefault(), n("handle-scroll", s));
    };
    return t({ triggerTransition: P }), (s, v) => {
      var $;
      return O(), A("div", {
        class: ae(b(W))
      }, [
        C("div", {
          style: Et(b(L))
        }, [
          e.specificMode ? I("", !0) : (O(), A("div", {
            key: 0,
            ref_key: "calendarWrapRef",
            ref: p,
            class: ae(b(T)),
            role: "grid",
            "aria-label": ($ = b(i).ariaLabels) == null ? void 0 : $.calendarWrap
          }, [
            C("div", mb, [
              s.weekNumbers ? (O(), A("div", hb, be(s.weekNumName), 1)) : I("", !0),
              (O(!0), A(pe, null, Re(b(g), (S, z) => (O(), A("div", {
                class: "dp__calendar_header_item",
                role: "gridcell",
                key: z,
                "data-test": "calendar-header"
              }, [
                s.$slots["calendar-header"] ? J(s.$slots, "calendar-header", {
                  key: 0,
                  day: S,
                  index: z
                }) : I("", !0),
                s.$slots["calendar-header"] ? I("", !0) : (O(), A(pe, { key: 1 }, [
                  st(be(S), 1)
                ], 64))
              ]))), 128))
            ]),
            bb,
            Ae(Xt, {
              name: f.value,
              css: !!s.transitions
            }, {
              default: te(() => {
                var S;
                return [
                  d.value ? (O(), A("div", {
                    key: 0,
                    class: "dp__calendar",
                    role: "grid",
                    "aria-label": (S = b(i).ariaLabels) == null ? void 0 : S.calendarDays
                  }, [
                    (O(!0), A(pe, null, Re(e.mappedDates, (z, X) => (O(), A("div", {
                      class: "dp__calendar_row",
                      role: "row",
                      key: X
                    }, [
                      s.weekNumbers ? (O(), A("div", _b, [
                        C("div", wb, be(e.getWeekNum(z.days)), 1)
                      ])) : I("", !0),
                      (O(!0), A(pe, null, Re(z.days, (q, y) => {
                        var k, ve, we;
                        return O(), A("div", {
                          role: "gridcell",
                          class: "dp__calendar_item",
                          ref_for: !0,
                          ref: (re) => H(re, X, y),
                          key: y + X,
                          "aria-selected": q.classData.dp__active_date || q.classData.dp__range_start || q.classData.dp__range_start,
                          "aria-disabled": q.classData.dp__cell_disabled,
                          "aria-label": (ve = (k = b(i).ariaLabels) == null ? void 0 : k.day) == null ? void 0 : ve.call(k, q),
                          tabindex: "0",
                          "data-test": q.value,
                          onClick: Rt((re) => s.$emit("select-date", q), ["stop", "prevent"]),
                          onKeydown: [
                            _e((re) => s.$emit("select-date", q), ["enter"]),
                            _e((re) => s.$emit("handle-space", q), ["space"])
                          ],
                          onMouseenter: (re) => w(q, X, y),
                          onMouseleave: (re) => U(q)
                        }, [
                          C("div", {
                            class: ae(["dp__cell_inner", q.classData])
                          }, [
                            s.$slots.day && b(Z)(q) ? J(s.$slots, "day", {
                              key: 0,
                              day: +q.text,
                              date: q.value
                            }) : I("", !0),
                            s.$slots.day ? I("", !0) : (O(), A(pe, { key: 1 }, [
                              st(be(q.text), 1)
                            ], 64)),
                            q.marker && b(Z)(q) ? (O(), A("div", {
                              key: 2,
                              class: ae(b(F)(q.marker)),
                              style: Et(q.marker.color ? { backgroundColor: q.marker.color } : {})
                            }, null, 6)) : I("", !0),
                            b(j)(q.value) ? (O(), A("div", {
                              key: 3,
                              class: "dp__marker_tooltip",
                              ref_for: !0,
                              ref_key: "activeTooltip",
                              ref: _,
                              style: Et(c.value)
                            }, [
                              (we = q.marker) != null && we.tooltip ? (O(), A("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: v[0] || (v[0] = Rt(() => {
                                }, ["stop"]))
                              }, [
                                (O(!0), A(pe, null, Re(q.marker.tooltip, (re, he) => (O(), A("div", {
                                  key: he,
                                  class: "dp__tooltip_text"
                                }, [
                                  s.$slots["marker-tooltip"] ? J(s.$slots, "marker-tooltip", {
                                    key: 0,
                                    tooltip: re,
                                    day: q.value
                                  }) : I("", !0),
                                  s.$slots["marker-tooltip"] ? I("", !0) : (O(), A(pe, { key: 1 }, [
                                    C("div", {
                                      class: "dp__tooltip_mark",
                                      style: Et(re.color ? { backgroundColor: re.color } : {})
                                    }, null, 4),
                                    C("div", null, be(re.text), 1)
                                  ], 64))
                                ]))), 128)),
                                C("div", {
                                  class: "dp__arrow_bottom_tp",
                                  style: Et(x.value)
                                }, null, 4)
                              ])) : I("", !0)
                            ], 4)) : I("", !0)
                          ], 2)
                        ], 40, Ob);
                      }), 128))
                    ]))), 128))
                  ], 8, gb)) : I("", !0)
                ];
              }),
              _: 3
            }, 8, ["name", "css"])
          ], 10, yb))
        ], 4)
      ], 2);
    };
  }
}), Sb = ["aria-label", "aria-disabled"], qa = /* @__PURE__ */ fe({
  __name: "ActionIcon",
  props: {
    ariaLabel: { type: String, default: "" },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["activate", "set-ref"],
  setup(e, { emit: t }) {
    const n = M(null);
    return Oe(() => t("set-ref", n)), (r, a) => (O(), A("div", {
      class: "dp__month_year_col_nav",
      onClick: a[0] || (a[0] = (o) => r.$emit("activate")),
      onKeydown: [
        a[1] || (a[1] = _e((o) => r.$emit("activate"), ["enter"])),
        a[2] || (a[2] = _e((o) => r.$emit("activate"), ["space"]))
      ],
      tabindex: "0",
      role: "button",
      "aria-label": e.ariaLabel,
      "aria-disabled": e.disabled,
      ref_key: "elRef",
      ref: n
    }, [
      C("div", {
        class: ae(["dp__inner_nav", { dp__inner_nav_disabled: e.disabled }])
      }, [
        J(r.$slots, "default")
      ], 2)
    ], 40, Sb));
  }
}), kb = ["onKeydown"], Pb = { class: "dp__selection_grid_header" }, Tb = ["aria-selected", "aria-disabled", "data-test", "onClick", "onKeydown", "onMouseover"], Db = ["aria-label", "onKeydown"], Tn = /* @__PURE__ */ fe({
  __name: "SelectionGrid",
  props: {
    items: { type: Array, default: () => [] },
    modelValue: { type: [String, Number], default: null },
    multiModelValue: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: [Number, String], default: null },
    maxValue: { type: [Number, String], default: null },
    year: { type: Number, default: 0 },
    skipActive: { type: Boolean, default: !1 },
    headerRefs: { type: Array, default: () => [] },
    skipButtonRef: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "selected", "toggle", "reset-flow"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setSelectionGrid: a, buildMultiLevelMatrix: o, setMonthPicker: i } = Bt(), { hideNavigationButtons: l } = yt(r), c = M(!1), u = M(null), p = M(null), d = M([]), f = M(), m = M(null), _ = M(0), x = M(null);
    Ns(() => {
      u.value = null;
    }), Oe(() => {
      ot().then(() => w()), Y(), g(!0);
    }), it(() => g(!1));
    const g = (E) => {
      var s;
      r.arrowNavigation && ((s = r.headerRefs) != null && s.length ? i(E) : a(E));
    }, Y = () => {
      const E = He(p);
      E && (r.textInput || E.focus({ preventScroll: !0 }), c.value = E.clientHeight < E.scrollHeight);
    }, P = D(
      () => ({
        dp__overlay: !0
      })
    ), T = D(() => ({
      dp__overlay_col: !0
    })), F = (E) => r.skipActive ? !1 : E.value === r.modelValue, j = D(() => r.items.map((E) => E.filter((s) => s).map((s) => {
      var v, $, S;
      const z = r.disabledValues.some((q) => q === s.value) || L(s.value), X = (v = r.multiModelValue) != null && v.length ? ($ = r.multiModelValue) == null ? void 0 : $.some(
        (q) => Pe(
          q,
          Gt(
            r.monthPicker ? Pn(/* @__PURE__ */ new Date(), s.value) : /* @__PURE__ */ new Date(),
            r.monthPicker ? r.year : s.value
          )
        )
      ) : F(s);
      return {
        ...s,
        className: {
          dp__overlay_cell_active: X,
          dp__overlay_cell: !X,
          dp__overlay_cell_disabled: z,
          dp__overlay_cell_active_disabled: z && X,
          dp__overlay_cell_pad: !0,
          dp__cell_in_between: (S = r.multiModelValue) != null && S.length && r.skipActive ? N(s.value) : !1
        }
      };
    }))), W = D(
      () => ({
        dp__button: !0,
        dp__overlay_action: !0,
        dp__over_action_scroll: c.value,
        dp__button_bottom: r.autoApply
      })
    ), Z = D(() => {
      var E, s;
      return {
        dp__overlay_container: !0,
        dp__container_flex: ((E = r.items) == null ? void 0 : E.length) <= 6,
        dp__container_block: ((s = r.items) == null ? void 0 : s.length) > 6
      };
    }), L = (E) => {
      const s = r.maxValue || r.maxValue === 0, v = r.minValue || r.minValue === 0;
      return !s && !v ? !1 : s && v ? +E > +r.maxValue || +E < +r.minValue : s ? +E > +r.maxValue : v ? +E < +r.minValue : !1;
    }, w = () => {
      const E = He(u), s = He(p), v = He(m), $ = He(x), S = v ? v.getBoundingClientRect().height : 0;
      s && (_.value = s.getBoundingClientRect().height - S), E && $ && ($.scrollTop = E.offsetTop - $.offsetTop - (_.value / 2 - E.getBoundingClientRect().height) - S);
    }, U = (E) => {
      !r.disabledValues.some((s) => s === E) && !L(E) && (n("update:model-value", E), n("selected"));
    }, N = (E) => {
      const s = r.monthPicker ? r.year : E;
      return Ss(
        r.multiModelValue,
        Gt(
          r.monthPicker ? Pn(/* @__PURE__ */ new Date(), f.value || 0) : /* @__PURE__ */ new Date(),
          r.monthPicker ? s : f.value || s
        ),
        Gt(r.monthPicker ? Pn(/* @__PURE__ */ new Date(), E) : /* @__PURE__ */ new Date(), s)
      );
    }, G = () => {
      n("toggle"), n("reset-flow");
    }, K = () => {
      r.escClose && G();
    }, Q = (E, s, v, $) => {
      E && (s.value === +r.modelValue && !r.disabledValues.includes(s.value) && (u.value = E), r.arrowNavigation && (Array.isArray(d.value[v]) ? d.value[v][$] = E : d.value[v] = [E], H()));
    }, H = () => {
      var E, s;
      const v = (E = r.headerRefs) != null && E.length ? [r.headerRefs].concat(d.value) : d.value.concat([r.skipButtonRef ? [] : [m.value]]);
      o(Ze(v), (s = r.headerRefs) != null && s.length ? "monthPicker" : "selectionGrid");
    };
    return t({ focusGrid: Y }), (E, s) => {
      var v;
      return O(), A("div", {
        ref_key: "gridWrapRef",
        ref: p,
        class: ae(b(P)),
        role: "dialog",
        tabindex: "0",
        onKeydown: _e(K, ["esc"])
      }, [
        C("div", {
          class: ae(b(Z)),
          ref_key: "containerRef",
          ref: x,
          role: "grid",
          style: Et({ height: `${_.value}px` })
        }, [
          C("div", Pb, [
            J(E.$slots, "header")
          ]),
          E.$slots.overlay ? J(E.$slots, "overlay", { key: 0 }) : (O(!0), A(pe, { key: 1 }, Re(b(j), ($, S) => (O(), A("div", {
            class: "dp__overlay_row",
            key: S,
            role: "row"
          }, [
            (O(!0), A(pe, null, Re($, (z, X) => (O(), A("div", {
              role: "gridcell",
              class: ae(b(T)),
              key: z.value,
              "aria-selected": z.value === e.modelValue && !e.disabledValues.includes(z.value),
              "aria-disabled": z.className.dp__overlay_cell_disabled,
              ref_for: !0,
              ref: (q) => Q(q, z, S, X),
              tabindex: "0",
              "data-test": z.text,
              onClick: (q) => U(z.value),
              onKeydown: [
                _e((q) => U(z.value), ["enter"]),
                _e((q) => U(z.value), ["space"])
              ],
              onMouseover: (q) => f.value = z.value
            }, [
              C("div", {
                class: ae(z.className)
              }, [
                E.$slots.item ? J(E.$slots, "item", {
                  key: 0,
                  item: z
                }) : I("", !0),
                E.$slots.item ? I("", !0) : (O(), A(pe, { key: 1 }, [
                  st(be(z.text), 1)
                ], 64))
              ], 2)
            ], 42, Tb))), 128))
          ]))), 128))
        ], 6),
        E.$slots["button-icon"] ? On((O(), A("div", {
          key: 0,
          role: "button",
          "aria-label": (v = e.ariaLabels) == null ? void 0 : v.toggleOverlay,
          class: ae(b(W)),
          tabindex: "0",
          ref_key: "toggleButton",
          ref: m,
          onClick: G,
          onKeydown: _e(G, ["enter"])
        }, [
          J(E.$slots, "button-icon")
        ], 42, Db)), [
          [$n, !b(l)(e.type)]
        ]) : I("", !0)
      ], 42, kb);
    };
  }
}), xb = ["aria-label"], yu = /* @__PURE__ */ fe({
  __name: "RegularPicker",
  props: {
    ariaLabel: { type: String, default: "" },
    showSelectionGrid: { type: Boolean, default: !1 },
    modelValue: { type: Number, default: null },
    items: { type: Array, default: () => [] },
    disabledValues: { type: Array, default: () => [] },
    minValue: { type: Number, default: null },
    maxValue: { type: Number, default: null },
    slotName: { type: String, default: "" },
    overlaySlot: { type: String, default: "" },
    headerRefs: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    type: { type: String, default: null },
    transitions: { type: [Object, Boolean], default: !1 },
    arrowNavigation: { type: Boolean, default: !1 },
    autoApply: { type: Boolean, default: !1 },
    textInput: { type: Boolean, default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    hideNavigation: { type: Array, default: () => [] }
  },
  emits: ["update:model-value", "toggle", "set-ref"],
  setup(e, { emit: t }) {
    const n = e, { transitionName: r, showTransition: a } = wa(n.transitions), o = M(null);
    return Oe(() => t("set-ref", o)), (i, l) => (O(), A(pe, null, [
      C("div", {
        class: "dp__month_year_select",
        onClick: l[0] || (l[0] = (c) => i.$emit("toggle")),
        onKeydown: [
          l[1] || (l[1] = _e((c) => i.$emit("toggle"), ["enter"])),
          l[2] || (l[2] = _e((c) => i.$emit("toggle"), ["space"]))
        ],
        role: "button",
        "aria-label": e.ariaLabel,
        tabindex: "0",
        ref_key: "elRef",
        ref: o
      }, [
        J(i.$slots, "default")
      ], 40, xb),
      Ae(Xt, {
        name: b(r)(e.showSelectionGrid),
        css: b(a)
      }, {
        default: te(() => [
          e.showSelectionGrid ? (O(), me(Tn, We({ key: 0 }, {
            modelValue: e.modelValue,
            items: e.items,
            disabledValues: e.disabledValues,
            minValue: e.minValue,
            maxValue: e.maxValue,
            escClose: e.escClose,
            type: e.type,
            arrowNavigation: e.arrowNavigation,
            textInput: e.textInput,
            autoApply: e.autoApply,
            ariaLabels: e.ariaLabels,
            hideNavigation: e.hideNavigation
          }, {
            "header-refs": [],
            "onUpdate:modelValue": l[3] || (l[3] = (c) => i.$emit("update:model-value", c)),
            onToggle: l[4] || (l[4] = (c) => i.$emit("toggle"))
          }), ut({
            "button-icon": te(() => [
              i.$slots["calendar-icon"] ? J(i.$slots, "calendar-icon", { key: 0 }) : I("", !0),
              i.$slots["calendar-icon"] ? I("", !0) : (O(), me(b(_a), { key: 1 }))
            ]),
            _: 2
          }, [
            i.$slots[e.slotName] ? {
              name: "item",
              fn: te(({ item: c }) => [
                J(i.$slots, e.slotName, { item: c })
              ]),
              key: "0"
            } : void 0,
            i.$slots[e.overlaySlot] ? {
              name: "overlay",
              fn: te(() => [
                J(i.$slots, e.overlaySlot)
              ]),
              key: "1"
            } : void 0,
            i.$slots[`${e.overlaySlot}-header`] ? {
              name: "header",
              fn: te(() => [
                J(i.$slots, `${e.overlaySlot}-header`)
              ]),
              key: "2"
            } : void 0
          ]), 1040)) : I("", !0)
        ]),
        _: 3
      }, 8, ["name", "css"])
    ], 64));
  }
}), Cb = { class: "dp__month_year_row" }, Rb = { class: "dp__month_year_wrap" }, Mb = { class: "dp__month_picker_header" }, Nb = ["aria-label"], Eb = ["aria-label"], Ab = ["aria-label"], Ib = /* @__PURE__ */ fe({
  __name: "MonthYearPicker",
  props: {
    month: { type: Number, default: 0 },
    year: { type: Number, default: 0 },
    instance: { type: Number, default: 0 },
    years: { type: Array, default: () => [] },
    months: { type: Array, default: () => [] },
    internalModelValue: { type: [Date, Array], default: null },
    ...Yt
  },
  emits: ["update-month-year", "month-year-select", "mount", "reset-flow", "overlay-closed"],
  setup(e, { expose: t, emit: n }) {
    const r = e, { defaults: a } = yt(r), { transitionName: o, showTransition: i } = wa(a.value.transitions), { buildMatrix: l } = Bt(), { handleMonthYearChange: c, isDisabled: u, updateMonthYear: p } = tb(r, n), d = M(!1), f = M(!1), m = M([null, null, null, null]), _ = M(null), x = M(null), g = M(null);
    Oe(() => {
      n("mount");
    });
    const Y = (y) => ({
      get: () => r[y],
      set: (k) => {
        const ve = y === "month" ? "year" : "month";
        n("update-month-year", { [y]: k, [ve]: r[ve] }), n("month-year-select", y === "year"), y === "month" ? $(!0) : S(!0);
      }
    }), P = D(Y("month")), T = D(Y("year")), F = (y) => {
      const k = xe(V(y));
      return r.year === k;
    }, j = D(() => r.monthPicker ? Array.isArray(r.disabledDates) ? r.disabledDates.map((y) => V(y)).filter((y) => F(y)).map((y) => De(y)) : [] : []), W = D(() => (y) => {
      const k = y === "month";
      return {
        showSelectionGrid: (k ? d : f).value,
        items: (k ? H : E).value,
        disabledValues: a.value.filters[k ? "months" : "years"].concat(j.value),
        minValue: (k ? U : L).value,
        maxValue: (k ? N : w).value,
        headerRefs: k && r.monthPicker ? [_.value, x.value, g.value] : [],
        escClose: r.escClose,
        transitions: a.value.transitions,
        ariaLabels: a.value.ariaLabels,
        textInput: r.textInput,
        autoApply: r.autoApply,
        arrowNavigation: r.arrowNavigation,
        hideNavigation: r.hideNavigation
      };
    }), Z = D(() => (y) => ({
      month: r.month,
      year: r.year,
      items: y === "month" ? r.months : r.years,
      instance: r.instance,
      updateMonthYear: p,
      toggle: y === "month" ? $ : S
    })), L = D(() => r.minDate ? xe(V(r.minDate)) : null), w = D(() => r.maxDate ? xe(V(r.maxDate)) : null), U = D(() => {
      if (r.minDate && L.value) {
        if (L.value > r.year)
          return 12;
        if (L.value === r.year)
          return De(V(r.minDate));
      }
      return null;
    }), N = D(() => r.maxDate && w.value ? w.value < r.year ? -1 : w.value === r.year ? De(V(r.maxDate)) : null : null), G = D(() => (r.range || r.multiDates) && r.internalModelValue && (r.monthPicker || r.yearPicker) ? r.internalModelValue : []), K = (y) => {
      const k = [], ve = (we) => we;
      for (let we = 0; we < y.length; we += 3) {
        const re = [y[we], y[we + 1], y[we + 2]];
        k.push(ve(re));
      }
      return k;
    }, Q = D(() => r.months.find((k) => k.value === r.month) || { text: "", value: 0 }), H = D(() => K(r.months)), E = D(() => K(r.years)), s = D(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === 0 : !0), v = D(() => a.value.multiCalendars ? r.multiCalendarsSolo ? !0 : r.instance === a.value.multiCalendars - 1 : !0), $ = (y = !1) => {
      z(y), d.value = !d.value, d.value || n("overlay-closed");
    }, S = (y = !1) => {
      z(y), f.value = !f.value, f.value || n("overlay-closed");
    }, z = (y) => {
      y || n("reset-flow");
    }, X = (y = !1) => {
      u.value(y) || n("update-month-year", {
        year: y ? r.year + 1 : r.year - 1,
        month: r.month,
        fromNav: !0
      });
    }, q = (y, k) => {
      r.arrowNavigation && (m.value[k] = He(y), l(m.value, "monthYear"));
    };
    return t({
      toggleMonthPicker: $,
      toggleYearPicker: S,
      handleMonthYearChange: c
    }), (y, k) => {
      var ve, we, re, he, Le;
      return O(), A("div", Cb, [
        y.$slots["month-year"] ? J(y.$slots, "month-year", Je(We({ key: 0 }, { month: e.month, year: e.year, months: e.months, years: e.years, updateMonthYear: b(p), handleMonthYearChange: b(c), instance: e.instance }))) : (O(), A(pe, { key: 1 }, [
          !y.monthPicker && !y.yearPicker ? (O(), A(pe, { key: 0 }, [
            b(s) && !y.vertical ? (O(), me(qa, {
              key: 0,
              "aria-label": (ve = b(a).ariaLabels) == null ? void 0 : ve.prevMonth,
              disabled: b(u)(!1),
              onActivate: k[0] || (k[0] = (ce) => b(c)(!1)),
              onSetRef: k[1] || (k[1] = (ce) => q(ce, 0))
            }, {
              default: te(() => [
                y.$slots["arrow-left"] ? J(y.$slots, "arrow-left", { key: 0 }) : I("", !0),
                y.$slots["arrow-left"] ? I("", !0) : (O(), me(b(eu), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : I("", !0),
            C("div", Rb, [
              Ae(yu, We({
                type: "month",
                "slot-name": "month-overlay-val",
                "overlay-slot": "overlay-month",
                "aria-label": (we = b(a).ariaLabels) == null ? void 0 : we.openMonthsOverlay,
                modelValue: b(P),
                "onUpdate:modelValue": k[2] || (k[2] = (ce) => Vt(P) ? P.value = ce : null)
              }, b(W)("month"), {
                onToggle: $,
                onSetRef: k[3] || (k[3] = (ce) => q(ce, 1))
              }), ut({
                default: te(() => [
                  y.$slots.month ? J(y.$slots, "month", Je(We({ key: 0 }, b(Q)))) : I("", !0),
                  y.$slots.month ? I("", !0) : (O(), A(pe, { key: 1 }, [
                    st(be(b(Q).text), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                y.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: te(() => [
                    J(y.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                y.$slots["month-overlay-value"] ? {
                  name: "month-overlay-val",
                  fn: te(({ item: ce }) => [
                    J(y.$slots, "month-overlay-value", {
                      text: ce.text,
                      value: ce.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                y.$slots["month-overlay"] ? {
                  name: "overlay-month",
                  fn: te(() => [
                    J(y.$slots, "month-overlay", Je(Ot(b(Z)("month"))))
                  ]),
                  key: "2"
                } : void 0,
                y.$slots["month-overlay-header"] ? {
                  name: "overlay-month-header",
                  fn: te(() => [
                    J(y.$slots, "month-overlay-header", { toggle: $ })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"]),
              Ae(yu, We({
                type: "year",
                "slot-name": "year-overlay-val",
                "overlay-slot": "overlay-year",
                "aria-label": (re = b(a).ariaLabels) == null ? void 0 : re.openYearsOverlay,
                modelValue: b(T),
                "onUpdate:modelValue": k[4] || (k[4] = (ce) => Vt(T) ? T.value = ce : null)
              }, b(W)("year"), {
                onToggle: S,
                onSetRef: k[5] || (k[5] = (ce) => q(ce, 2))
              }), ut({
                default: te(() => [
                  y.$slots.year ? J(y.$slots, "year", {
                    key: 0,
                    year: e.year
                  }) : I("", !0),
                  y.$slots.year ? I("", !0) : (O(), A(pe, { key: 1 }, [
                    st(be(e.year), 1)
                  ], 64))
                ]),
                _: 2
              }, [
                y.$slots["calendar-icon"] ? {
                  name: "calendar-icon",
                  fn: te(() => [
                    J(y.$slots, "calendar-icon")
                  ]),
                  key: "0"
                } : void 0,
                y.$slots["year-overlay-value"] ? {
                  name: "year-overlay-val",
                  fn: te(({ item: ce }) => [
                    J(y.$slots, "year-overlay-value", {
                      text: ce.text,
                      value: ce.value
                    })
                  ]),
                  key: "1"
                } : void 0,
                y.$slots["year-overlay"] ? {
                  name: "overlay-year",
                  fn: te(() => [
                    J(y.$slots, "year-overlay", Je(Ot(b(Z)("year"))))
                  ]),
                  key: "2"
                } : void 0,
                y.$slots["year-overlay-header"] ? {
                  name: "overlay-year-header",
                  fn: te(() => [
                    J(y.$slots, "year-overlay-header", { toggle: S })
                  ]),
                  key: "3"
                } : void 0
              ]), 1040, ["aria-label", "modelValue"])
            ]),
            b(s) && y.vertical ? (O(), me(qa, {
              key: 1,
              "aria-label": (he = b(a).ariaLabels) == null ? void 0 : he.prevMonth,
              disabled: b(u)(!1),
              onActivate: k[6] || (k[6] = (ce) => b(c)(!1))
            }, {
              default: te(() => [
                y.$slots["arrow-up"] ? J(y.$slots, "arrow-up", { key: 0 }) : I("", !0),
                y.$slots["arrow-up"] ? I("", !0) : (O(), me(b(Os), { key: 1 }))
              ]),
              _: 3
            }, 8, ["aria-label", "disabled"])) : I("", !0),
            b(v) ? (O(), me(qa, {
              key: 2,
              ref: "rightIcon",
              disabled: b(u)(!0),
              "aria-label": (Le = b(a).ariaLabels) == null ? void 0 : Le.nextMonth,
              onActivate: k[7] || (k[7] = (ce) => b(c)(!0)),
              onSetRef: k[8] || (k[8] = (ce) => q(ce, 3))
            }, {
              default: te(() => [
                y.$slots[y.vertical ? "arrow-down" : "arrow-right"] ? J(y.$slots, y.vertical ? "arrow-down" : "arrow-right", { key: 0 }) : I("", !0),
                y.$slots[y.vertical ? "arrow-down" : "arrow-right"] ? I("", !0) : (O(), me(hu(y.vertical ? b($s) : b(tu)), { key: 1 }))
              ]),
              _: 3
            }, 8, ["disabled", "aria-label"])) : I("", !0)
          ], 64)) : I("", !0),
          y.monthPicker ? (O(), me(Tn, We({ key: 1 }, b(W)("month"), {
            "skip-active": y.range,
            year: e.year,
            "multi-model-value": b(G),
            "month-picker": "",
            modelValue: b(P),
            "onUpdate:modelValue": k[17] || (k[17] = (ce) => Vt(P) ? P.value = ce : null),
            onToggle: $,
            onSelected: k[18] || (k[18] = (ce) => y.$emit("overlay-closed"))
          }), ut({
            header: te(() => {
              var ce, gt, ft;
              return [
                C("div", Mb, [
                  C("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpPrevIconRef",
                    ref: _,
                    onClick: k[9] || (k[9] = (je) => X(!1)),
                    onKeydown: k[10] || (k[10] = _e((je) => X(!1), ["enter"]))
                  }, [
                    C("div", {
                      class: ae(["dp__inner_nav", { dp__inner_nav_disabled: b(u)(!1) }]),
                      role: "button",
                      "aria-label": (ce = b(a).ariaLabels) == null ? void 0 : ce.prevMonth
                    }, [
                      y.$slots["arrow-left"] ? J(y.$slots, "arrow-left", { key: 0 }) : I("", !0),
                      y.$slots["arrow-left"] ? I("", !0) : (O(), me(b(eu), { key: 1 }))
                    ], 10, Nb)
                  ], 544),
                  C("div", {
                    class: "dp__pointer",
                    role: "button",
                    ref_key: "mpYearButtonRef",
                    ref: x,
                    "aria-label": (gt = b(a).ariaLabels) == null ? void 0 : gt.openYearsOverlay,
                    tabindex: "0",
                    onClick: k[11] || (k[11] = () => S(!1)),
                    onKeydown: k[12] || (k[12] = _e(() => S(!1), ["enter"]))
                  }, [
                    y.$slots.year ? J(y.$slots, "year", {
                      key: 0,
                      year: e.year
                    }) : I("", !0),
                    y.$slots.year ? I("", !0) : (O(), A(pe, { key: 1 }, [
                      st(be(e.year), 1)
                    ], 64))
                  ], 40, Eb),
                  C("div", {
                    class: "dp__month_year_col_nav",
                    tabindex: "0",
                    ref_key: "mpNextIconRef",
                    ref: g,
                    onClick: k[13] || (k[13] = (je) => X(!0)),
                    onKeydown: k[14] || (k[14] = _e((je) => X(!0), ["enter"]))
                  }, [
                    C("div", {
                      class: ae(["dp__inner_nav", { dp__inner_nav_disabled: b(u)(!0) }]),
                      role: "button",
                      "aria-label": (ft = b(a).ariaLabels) == null ? void 0 : ft.nextMonth
                    }, [
                      y.$slots["arrow-right"] ? J(y.$slots, "arrow-right", { key: 0 }) : I("", !0),
                      y.$slots["arrow-right"] ? I("", !0) : (O(), me(b(tu), { key: 1 }))
                    ], 10, Ab)
                  ], 544)
                ]),
                Ae(Xt, {
                  name: b(o)(f.value),
                  css: b(i)
                }, {
                  default: te(() => [
                    f.value ? (O(), me(Tn, We({ key: 0 }, b(W)("year"), {
                      modelValue: b(T),
                      "onUpdate:modelValue": k[15] || (k[15] = (je) => Vt(T) ? T.value = je : null),
                      onToggle: S,
                      onSelected: k[16] || (k[16] = (je) => y.$emit("overlay-closed"))
                    }), ut({
                      "button-icon": te(() => [
                        y.$slots["calendar-icon"] ? J(y.$slots, "calendar-icon", { key: 0 }) : I("", !0),
                        y.$slots["calendar-icon"] ? I("", !0) : (O(), me(b(_a), { key: 1 }))
                      ]),
                      _: 2
                    }, [
                      y.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: te(({ item: je }) => [
                          J(y.$slots, "year-overlay-value", {
                            text: je.text,
                            value: je.value
                          })
                        ]),
                        key: "0"
                      } : void 0
                    ]), 1040, ["modelValue"])) : I("", !0)
                  ]),
                  _: 3
                }, 8, ["name", "css"])
              ];
            }),
            _: 2
          }, [
            y.$slots["month-overlay-value"] ? {
              name: "item",
              fn: te(({ item: ce }) => [
                J(y.$slots, "month-overlay-value", {
                  text: ce.text,
                  value: ce.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["skip-active", "year", "multi-model-value", "modelValue"])) : I("", !0),
          y.yearPicker ? (O(), me(Tn, We({ key: 2 }, b(W)("year"), {
            modelValue: b(T),
            "onUpdate:modelValue": k[19] || (k[19] = (ce) => Vt(T) ? T.value = ce : null),
            "multi-model-value": b(G),
            "skip-active": y.range,
            "skip-button-ref": "",
            "year-picker": "",
            onToggle: S,
            onSelected: k[20] || (k[20] = (ce) => y.$emit("overlay-closed"))
          }), ut({ _: 2 }, [
            y.$slots["year-overlay-value"] ? {
              name: "item",
              fn: te(({ item: ce }) => [
                J(y.$slots, "year-overlay-value", {
                  text: ce.text,
                  value: ce.value
                })
              ]),
              key: "0"
            } : void 0
          ]), 1040, ["modelValue", "multi-model-value", "skip-active"])) : I("", !0)
        ], 64))
      ]);
    };
  }
}), Lb = {
  key: 0,
  class: "dp__time_input"
}, Bb = ["aria-label", "onKeydown", "onClick"], Yb = ["aria-label", "data-test", "onKeydown", "onClick"], Ub = ["aria-label", "onKeydown", "onClick"], Fb = { key: 0 }, jb = ["aria-label", "onKeydown"], Vb = /* @__PURE__ */ fe({
  __name: "TimeInput",
  props: {
    hours: { type: Number, default: 0 },
    minutes: { type: Number, default: 0 },
    seconds: { type: Number, default: 0 },
    closeTimePickerBtn: { type: Object, default: null },
    order: { type: Number, default: 0 },
    ...Yt
  },
  emits: [
    "set-hours",
    "set-minutes",
    "update:hours",
    "update:minutes",
    "update:seconds",
    "reset-flow",
    "mounted",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setTimePickerElements: a, setTimePickerBackRef: o } = Bt(), { defaults: i } = yt(r), { transitionName: l, showTransition: c } = wa(i.value.transitions), u = sn({
      hours: !1,
      minutes: !1,
      seconds: !1
    }), p = M("AM"), d = M(null), f = M([]);
    Oe(() => {
      n("mounted");
    });
    const m = D(() => (s) => !!(r.maxTime && r.maxTime[s] && r.maxTime[s] < r[s] + +r[`${s}Increment`])), _ = D(() => (s) => !!(r.minTime && r.minTime[s] && r.minTime[s] > r[s] - +r[`${s}Increment`])), x = (s, v) => Ju(Xe(V(), s), v), g = (s, v) => ch(Xe(V(), s), v), Y = D(
      () => ({
        dp__time_col: !0,
        dp__time_col_reg: !r.enableSeconds && r.is24,
        dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
        dp__time_col_sec: r.enableSeconds && r.is24,
        dp__time_col_sec_with_button: r.enableSeconds && !r.is24
      })
    ), P = D(() => {
      const s = [{ type: "hours" }, { type: "", separator: !0 }, { type: "minutes" }];
      return r.enableSeconds ? s.concat([{ type: "", separator: !0 }, { type: "seconds" }]) : s;
    }), T = D(() => P.value.filter((s) => !s.separator)), F = D(() => (s) => {
      if (s === "hours") {
        const v = G(r.hours);
        return { text: v < 10 ? `0${v}` : `${v}`, value: v };
      }
      return { text: r[s] < 10 ? `0${r[s]}` : `${r[s]}`, value: r[s] };
    }), j = (s) => {
      const v = r.is24 ? 24 : 12, $ = s === "hours" ? v : 60, S = +r[`${s}GridIncrement`], z = s === "hours" && !r.is24 ? S : 0, X = [];
      for (let q = z; q < $; q += S)
        X.push({ value: q, text: q < 10 ? `0${q}` : `${q}` });
      return s === "hours" && !r.is24 && X.push({ value: 0, text: "12" }), Fh(X);
    }, W = (s, v) => {
      const $ = r.minTime && r.minTime[v], S = r.maxTime && r.maxTime[v];
      return $ && S ? s < $ || s > S : $ ? s < $ : S ? s > S : !1;
    }, Z = D(() => (s) => j(s).flat().filter((v) => v).map((v) => v.value).filter((v) => W(v, s))), L = (s) => r[`no${s[0].toUpperCase() + s.slice(1)}Overlay`], w = (s) => {
      L(s) || (u[s] = !u[s], u[s] || n("overlay-closed"));
    }, U = (s) => s === "hours" ? xt : s === "minutes" ? Ct : un, N = (s, v = !0) => {
      const $ = v ? x : g;
      (v ? m.value(s) : _.value(s)) || n(
        `update:${s}`,
        U(s)($({ [s]: +r[s] }, { [s]: +r[`${s}Increment`] }))
      );
    }, G = (s) => r.is24 ? s : (s >= 12 ? p.value = "PM" : p.value = "AM", Wh(s)), K = () => {
      p.value === "PM" ? (p.value = "AM", n("update:hours", r.hours - 12)) : (p.value = "PM", n("update:hours", r.hours + 12));
    }, Q = (s) => {
      u[s] = !0;
    }, H = (s, v, $) => {
      if (s && r.arrowNavigation) {
        Array.isArray(f.value[v]) ? f.value[v][$] = s : f.value[v] = [s];
        const S = f.value.reduce(
          (z, X) => X.map((q, y) => [...z[y] || [], X[y]]),
          []
        );
        o(r.closeTimePickerBtn), d.value && (S[1] = S[1].concat(d.value)), a(S, r.order);
      }
    }, E = (s, v) => s === "hours" && !r.is24 ? n(`update:${s}`, p.value === "PM" ? v + 12 : v) : n(`update:${s}`, v);
    return t({ openChildCmp: Q }), (s, v) => {
      var $;
      return s.disabled ? I("", !0) : (O(), A("div", Lb, [
        (O(!0), A(pe, null, Re(b(P), (S, z) => {
          var X, q, y;
          return O(), A("div", {
            key: z,
            class: ae(b(Y))
          }, [
            S.separator ? (O(), A(pe, { key: 0 }, [
              st(" : ")
            ], 64)) : (O(), A(pe, { key: 1 }, [
              C("div", {
                class: ae({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: b(m)(S.type)
                }),
                role: "button",
                "data-test": "time-inc-btn",
                "aria-label": (X = b(i).ariaLabels) == null ? void 0 : X.incrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  _e((k) => N(S.type), ["enter"]),
                  _e((k) => N(S.type), ["space"])
                ],
                onClick: (k) => N(S.type),
                ref_for: !0,
                ref: (k) => H(k, z, 0)
              }, [
                s.$slots["arrow-up"] ? J(s.$slots, "arrow-up", { key: 0 }) : I("", !0),
                s.$slots["arrow-up"] ? I("", !0) : (O(), me(b(Os), { key: 1 }))
              ], 42, Bb),
              C("div", {
                role: "button",
                "aria-label": (q = b(i).ariaLabels) == null ? void 0 : q.openTpOverlay(S.type),
                class: ae(L(S.type) ? "" : "dp__time_display"),
                tabindex: "0",
                "data-test": `${S.type}-toggle-overlay-btn`,
                onKeydown: [
                  _e((k) => w(S.type), ["enter"]),
                  _e((k) => w(S.type), ["space"])
                ],
                onClick: (k) => w(S.type),
                ref_for: !0,
                ref: (k) => H(k, z, 1)
              }, [
                s.$slots[S.type] ? J(s.$slots, S.type, {
                  key: 0,
                  text: b(F)(S.type).text,
                  value: b(F)(S.type).value
                }) : I("", !0),
                s.$slots[S.type] ? I("", !0) : (O(), A(pe, { key: 1 }, [
                  st(be(b(F)(S.type).text), 1)
                ], 64))
              ], 42, Yb),
              C("div", {
                class: ae({
                  dp__inc_dec_button: !0,
                  dp__inc_dec_button_disabled: b(_)(S.type)
                }),
                role: "button",
                "data-test": "time-dec-btn",
                "aria-label": (y = b(i).ariaLabels) == null ? void 0 : y.decrementValue(S.type),
                tabindex: "0",
                onKeydown: [
                  _e((k) => N(S.type, !1), ["enter"]),
                  _e((k) => N(S.type, !1), ["space"])
                ],
                onClick: (k) => N(S.type, !1),
                ref_for: !0,
                ref: (k) => H(k, z, 2)
              }, [
                s.$slots["arrow-down"] ? J(s.$slots, "arrow-down", { key: 0 }) : I("", !0),
                s.$slots["arrow-down"] ? I("", !0) : (O(), me(b($s), { key: 1 }))
              ], 42, Ub)
            ], 64))
          ], 2);
        }), 128)),
        s.is24 ? I("", !0) : (O(), A("div", Fb, [
          s.$slots["am-pm-button"] ? J(s.$slots, "am-pm-button", {
            key: 0,
            toggle: K,
            value: p.value
          }) : I("", !0),
          s.$slots["am-pm-button"] ? I("", !0) : (O(), A("button", {
            key: 1,
            ref_key: "amPmButton",
            ref: d,
            type: "button",
            class: "dp__pm_am_button",
            role: "button",
            "aria-label": ($ = b(i).ariaLabels) == null ? void 0 : $.amPmButton,
            tabindex: "0",
            onClick: K,
            onKeydown: [
              _e(Rt(K, ["prevent"]), ["enter"]),
              _e(Rt(K, ["prevent"]), ["space"])
            ]
          }, be(p.value), 41, jb))
        ])),
        (O(!0), A(pe, null, Re(b(T), (S, z) => (O(), me(Xt, {
          key: z,
          name: b(l)(u[S.type]),
          css: b(c)
        }, {
          default: te(() => [
            u[S.type] ? (O(), me(Tn, {
              key: 0,
              items: j(S.type),
              "disabled-values": b(i).filters.times[S.type].concat(b(Z)(S.type)),
              "esc-close": s.escClose,
              "aria-labels": b(i).ariaLabels,
              "hide-navigation": s.hideNavigation,
              "onUpdate:modelValue": (X) => E(S.type, X),
              onSelected: (X) => w(S.type),
              onToggle: (X) => w(S.type),
              onResetFlow: v[0] || (v[0] = (X) => s.$emit("reset-flow")),
              type: S.type
            }, ut({
              "button-icon": te(() => [
                s.$slots["clock-icon"] ? J(s.$slots, "clock-icon", { key: 0 }) : I("", !0),
                s.$slots["clock-icon"] ? I("", !0) : (O(), me(b(ws), { key: 1 }))
              ]),
              _: 2
            }, [
              s.$slots[`${S.type}-overlay-value`] ? {
                name: "item",
                fn: te(({ item: X }) => [
                  J(s.$slots, `${S.type}-overlay-value`, {
                    text: X.text,
                    value: X.value
                  })
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["items", "disabled-values", "esc-close", "aria-labels", "hide-navigation", "onUpdate:modelValue", "onSelected", "onToggle", "type"])) : I("", !0)
          ]),
          _: 2
        }, 1032, ["name", "css"]))), 128))
      ]));
    };
  }
}), Hb = ["aria-label"], Wb = { class: "dp__overlay_container dp__container_flex dp__time_picker_overlay_container" }, qb = {
  key: 1,
  class: "dp__overlay_row"
}, zb = ["aria-label"], Gb = /* @__PURE__ */ fe({
  __name: "TimePicker",
  props: {
    hours: { type: [Number, Array], default: 0 },
    minutes: { type: [Number, Array], default: 0 },
    seconds: { type: [Number, Array], default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Yt
  },
  emits: [
    "update:hours",
    "update:minutes",
    "update:seconds",
    "mount",
    "reset-flow",
    "overlay-opened",
    "overlay-closed"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { buildMatrix: a, setTimePicker: o } = Bt(), i = pi(), { hideNavigationButtons: l, defaults: c } = yt(r), { transitionName: u, showTransition: p } = wa(c.value.transitions), d = M(null), f = M(null), m = M([]), _ = M(null);
    Oe(() => {
      n("mount"), !r.timePicker && r.arrowNavigation ? a([He(d.value)], "time") : o(!0, r.timePicker);
    });
    const x = D(() => r.range && r.modelAuto ? Ds(r.internalModelValue) : !0), g = M(!1), Y = (N) => ({
      hours: Array.isArray(r.hours) ? r.hours[N] : r.hours,
      minutes: Array.isArray(r.minutes) ? r.minutes[N] : r.minutes,
      seconds: Array.isArray(r.seconds) ? r.seconds[N] : r.seconds
    }), P = D(() => {
      const N = [];
      if (r.range)
        for (let G = 0; G < 2; G++)
          N.push(Y(G));
      else
        N.push(Y(0));
      return N;
    }), T = (N, G = !1, K = "") => {
      G || n("reset-flow"), g.value = N, N && n("overlay-opened"), r.arrowNavigation && (o(N), N || n("overlay-closed")), ot(() => {
        K !== "" && m.value[0] && m.value[0].openChildCmp(K);
      });
    }, F = D(() => ({
      dp__button: !0,
      dp__button_bottom: r.autoApply
    })), j = qt(i, "timePicker"), W = (N, G, K) => r.range ? G === 0 ? [N, P.value[1][K]] : [P.value[0][K], N] : N, Z = (N) => {
      n("update:hours", N);
    }, L = (N) => {
      n("update:minutes", N);
    }, w = (N) => {
      n("update:seconds", N);
    }, U = () => {
      _.value && r.arrowNavigation && _.value.focus({ preventScroll: !0 });
    };
    return t({ toggleTimePicker: T }), (N, G) => {
      var K;
      return O(), A("div", null, [
        N.timePicker ? I("", !0) : On((O(), A("div", {
          key: 0,
          class: ae(b(F)),
          role: "button",
          "aria-label": (K = b(c).ariaLabels) == null ? void 0 : K.openTimePicker,
          tabindex: "0",
          "data-test": "open-time-picker-btn",
          ref_key: "openTimePickerBtn",
          ref: d,
          onKeydown: [
            G[0] || (G[0] = _e((Q) => T(!0), ["enter"])),
            G[1] || (G[1] = _e((Q) => T(!0), ["space"]))
          ],
          onClick: G[2] || (G[2] = (Q) => T(!0))
        }, [
          N.$slots["clock-icon"] ? J(N.$slots, "clock-icon", { key: 0 }) : I("", !0),
          N.$slots["clock-icon"] ? I("", !0) : (O(), me(b(ws), { key: 1 }))
        ], 42, Hb)), [
          [$n, !b(l)("time")]
        ]),
        Ae(Xt, {
          name: b(u)(g.value),
          css: b(p)
        }, {
          default: te(() => {
            var Q;
            return [
              g.value || N.timePicker ? (O(), A("div", {
                key: 0,
                class: "dp__overlay",
                ref_key: "overlayRef",
                ref: _,
                tabindex: "0"
              }, [
                C("div", Wb, [
                  N.$slots["time-picker-overlay"] ? J(N.$slots, "time-picker-overlay", {
                    key: 0,
                    hours: e.hours,
                    minutes: e.minutes,
                    seconds: e.seconds,
                    setHours: Z,
                    setMinutes: L,
                    setSeconds: w
                  }) : I("", !0),
                  N.$slots["time-picker-overlay"] ? I("", !0) : (O(), A("div", qb, [
                    (O(!0), A(pe, null, Re(b(P), (H, E) => On((O(), me(Vb, We({ key: E }, {
                      ...N.$props,
                      order: E,
                      hours: H.hours,
                      minutes: H.minutes,
                      seconds: H.seconds,
                      closeTimePickerBtn: f.value,
                      disabled: E === 0 ? N.fixedStart : N.fixedEnd
                    }, {
                      ref_for: !0,
                      ref_key: "timeInputRefs",
                      ref: m,
                      "onUpdate:hours": (s) => Z(W(s, E, "hours")),
                      "onUpdate:minutes": (s) => L(W(s, E, "minutes")),
                      "onUpdate:seconds": (s) => w(W(s, E, "seconds")),
                      onMounted: U,
                      onOverlayClosed: U
                    }), ut({ _: 2 }, [
                      Re(b(j), (s, v) => ({
                        name: s,
                        fn: te(($) => [
                          J(N.$slots, s, Je(Ot($)))
                        ])
                      }))
                    ]), 1040, ["onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                      [$n, E === 0 ? !0 : b(x)]
                    ])), 128))
                  ])),
                  N.timePicker ? I("", !0) : On((O(), A("div", {
                    key: 2,
                    ref_key: "closeTimePickerBtn",
                    ref: f,
                    class: ae(b(F)),
                    role: "button",
                    "aria-label": (Q = b(c).ariaLabels) == null ? void 0 : Q.closeTimePicker,
                    tabindex: "0",
                    onKeydown: [
                      G[3] || (G[3] = _e((H) => T(!1), ["enter"])),
                      G[4] || (G[4] = _e((H) => T(!1), ["space"]))
                    ],
                    onClick: G[5] || (G[5] = (H) => T(!1))
                  }, [
                    N.$slots["calendar-icon"] ? J(N.$slots, "calendar-icon", { key: 0 }) : I("", !0),
                    N.$slots["calendar-icon"] ? I("", !0) : (O(), me(b(_a), { key: 1 }))
                  ], 42, zb)), [
                    [$n, !b(l)("time")]
                  ])
                ])
              ], 512)) : I("", !0)
            ];
          }),
          _: 3
        }, 8, ["name", "css"])
      ]);
    };
  }
}), Kb = (e, t) => {
  const { isDisabled: n, matchDate: r, getWeekFromDate: a } = yt(t), o = M(null), i = M(V()), l = (v) => {
    !v.current && t.hideOffsetDates || (o.value = v.value);
  }, c = () => {
    o.value = null;
  }, u = (v) => Array.isArray(e.value) && t.range && e.value[0] && o.value ? v ? at(o.value, e.value[0]) : et(o.value, e.value[0]) : !0, p = (v, $) => {
    const S = () => e.value ? $ ? e.value[0] || null : e.value[1] : null, z = e.value && Array.isArray(e.value) ? S() : null;
    return Pe(V(v.value), z);
  }, d = (v) => {
    const $ = Array.isArray(e.value) ? e.value[0] : null;
    return v ? !et(o.value || null, $) : !0;
  }, f = (v, $ = !0) => (t.range || t.weekPicker) && Array.isArray(e.value) ? t.hideOffsetDates && !v.current ? !1 : Pe(V(v.value), e.value[$ ? 0 : 1]) : t.range ? p(v, $) && d($) || Pe(v.value, Array.isArray(e.value) ? e.value[0] : null) && u($) : !1, m = (v, $, S) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? v ? !1 : S ? at(e.value[0], $.value) : et(e.value[0], $.value) : !1, _ = (v) => !e.value || t.hideOffsetDates && !v.current ? !1 : t.range ? t.modelAuto && Array.isArray(e.value) ? Pe(v.value, e.value[0] ? e.value[0] : i.value) : !1 : t.multiDates && Array.isArray(e.value) ? e.value.some(($) => Pe($, v.value)) : Pe(v.value, e.value ? e.value : i.value), x = (v) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !v.current)
          return !1;
        const $ = Lt(o.value, +t.autoRange), S = a(V(o.value));
        return t.weekPicker ? Pe(S[1], V(v.value)) : Pe($, V(v.value));
      }
      return !1;
    }
    return !1;
  }, g = (v) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        const $ = Lt(o.value, +t.autoRange);
        if (t.hideOffsetDates && !v.current)
          return !1;
        const S = a(V(o.value));
        return t.weekPicker ? at(v.value, S[0]) && et(v.value, S[1]) : at(v.value, o.value) && et(v.value, $);
      }
      return !1;
    }
    return !1;
  }, Y = (v) => {
    if (t.autoRange || t.weekPicker) {
      if (o.value) {
        if (t.hideOffsetDates && !v.current)
          return !1;
        const $ = a(V(o.value));
        return t.weekPicker ? Pe($[0], v.value) : Pe(o.value, v.value);
      }
      return !1;
    }
    return !1;
  }, P = (v) => Ss(e.value, o.value, v.value), T = () => t.modelAuto && Array.isArray(t.internalModelValue) ? !!t.internalModelValue[0] : !1, F = () => t.modelAuto ? Ds(t.internalModelValue) : !0, j = (v) => {
    if (Array.isArray(e.value) && e.value.length || t.weekPicker)
      return !1;
    const $ = t.range ? !f(v) && !f(v, !1) : !0;
    return !n(v.value) && !_(v) && !(!v.current && t.hideOffsetDates) && $;
  }, W = (v) => t.range ? t.modelAuto ? T() && _(v) : !1 : _(v), Z = (v) => t.highlight ? r(v.value, t.highlight) : !1, L = (v) => n(v.value) && t.highlightDisabledDays === !1, w = (v) => t.highlightWeekDays && t.highlightWeekDays.includes(v.value.getDay()), U = (v) => (t.range || t.weekPicker) && (!(t.multiCalendars > 0) || v.current) && F() && !(!v.current && t.hideOffsetDates) && !_(v) ? P(v) : !1, N = (v) => {
    const { isRangeStart: $, isRangeEnd: S } = Q(v), z = t.range ? $ || S : !1;
    return {
      dp__cell_offset: !v.current,
      dp__pointer: !t.disabled && !(!v.current && t.hideOffsetDates) && !n(v.value),
      dp__cell_disabled: n(v.value),
      dp__cell_highlight: !L(v) && (Z(v) || w(v)) && !W(v) && !z,
      dp__cell_highlight_active: !L(v) && (Z(v) || w(v)) && W(v),
      dp__today: !t.noToday && Pe(v.value, i.value) && v.current
    };
  }, G = (v) => ({
    dp__active_date: W(v),
    dp__date_hover: j(v)
  }), K = (v) => ({
    ...H(v),
    ...E(v),
    dp__range_between_week: U(v) && t.weekPicker
  }), Q = (v) => {
    const $ = t.multiCalendars > 0 ? v.current && f(v) && F() : f(v) && F(), S = t.multiCalendars > 0 ? v.current && f(v, !1) && F() : f(v, !1) && F();
    return { isRangeStart: $, isRangeEnd: S };
  }, H = (v) => {
    const { isRangeStart: $, isRangeEnd: S } = Q(v);
    return {
      dp__range_start: $,
      dp__range_end: S,
      dp__range_between: U(v) && !t.weekPicker,
      dp__date_hover_start: m(j(v), v, !0),
      dp__date_hover_end: m(j(v), v, !1)
    };
  }, E = (v) => ({
    ...H(v),
    dp__cell_auto_range: g(v),
    dp__cell_auto_range_start: Y(v),
    dp__cell_auto_range_end: x(v)
  }), s = (v) => t.range ? t.autoRange ? E(v) : t.modelAuto ? { ...G(v), ...H(v) } : H(v) : t.weekPicker ? K(v) : G(v);
  return {
    setHoverDate: l,
    clearHoverDate: c,
    getDayClassData: (v) => ({
      ...N(v),
      ...s(v),
      [t.dayClass ? t.dayClass(v.value) : ""]: !0,
      [t.calendarCellClassName]: !!t.calendarCellClassName
    })
  };
}, Qb = ["id", "onKeydown"], Xb = {
  key: 0,
  class: "dp__sidebar_left"
}, Zb = {
  key: 1,
  class: "dp__preset_ranges"
}, Jb = ["onClick"], eg = {
  key: 2,
  class: "dp__sidebar_right"
}, tg = {
  key: 3,
  class: "dp__now_wrap"
}, ng = /* @__PURE__ */ fe({
  __name: "DatepickerMenu",
  props: {
    openOnTop: { type: Boolean, default: !1 },
    internalModelValue: { type: [Date, Array], default: null },
    ...Yt
  },
  emits: [
    "close-picker",
    "select-date",
    "auto-apply",
    "time-update",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "update:internal-model-value",
    "recalculate-position",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, { setMenuFocused: a, setShiftKey: o, control: i } = ks(), { getCalendarDays: l, defaults: c } = yt(r), u = pi(), p = M(null), d = sn({
      timePicker: !!(!r.enableTimePicker || r.timePicker || r.monthPicker),
      monthYearInput: !!r.timePicker,
      calendar: !1
    }), f = M([]), m = M([]), _ = M(null), x = M(null), g = M(0), Y = M(!1), P = M(0);
    Oe(() => {
      var R;
      Y.value = !0, !((R = r.presetRanges) != null && R.length) && !u["left-sidebar"] && !u["right-sidebar"] && de();
      const ee = He(x);
      if (ee && !r.textInput && !r.inline && (a(!0), L()), ee) {
        const Ee = (lt) => {
          ["action-row", "time-picker", "month-year"].some(
            (Zt) => Object.keys(u).includes(Zt)
          ) || lt.preventDefault(), lt.stopImmediatePropagation(), lt.stopPropagation();
        };
        ee.addEventListener("pointerdown", Ee), ee.addEventListener("mousedown", Ee);
      }
      window.addEventListener("resize", de);
    }), it(() => {
      window.removeEventListener("resize", de);
    });
    const { arrowRight: T, arrowLeft: F, arrowDown: j, arrowUp: W } = Bt(), Z = (R) => {
      R || R === 0 ? m.value[R].triggerTransition(
        K.value(R),
        Q.value(R)
      ) : m.value.forEach(
        (ee, Ee) => ee.triggerTransition(K.value(Ee), Q.value(Ee))
      );
    }, L = () => {
      const R = He(x);
      R && R.focus({ preventScroll: !0 });
    }, w = () => {
      var R;
      (R = r.flow) != null && R.length && P.value !== -1 && (P.value += 1, n("flow-step", P.value), oe());
    }, U = () => {
      P.value = -1;
    }, {
      calendars: N,
      modelValue: G,
      month: K,
      year: Q,
      time: H,
      updateTime: E,
      updateMonthYear: s,
      selectDate: v,
      getWeekNum: $,
      monthYearSelect: S,
      handleScroll: z,
      handleArrow: X,
      handleSwipe: q,
      getMarker: y,
      selectCurrentDate: k,
      presetDateRange: ve
    } = Jh(r, n, w, Z, P), { setHoverDate: we, clearHoverDate: re, getDayClassData: he } = Kb(G, r);
    ze(
      N,
      () => {
        r.openOnTop && setTimeout(() => {
          n("recalculate-position");
        }, 0);
      },
      { deep: !0 }
    );
    const Le = qt(u, "calendar"), ce = qt(u, "action"), gt = qt(u, "timePicker"), ft = qt(u, "monthYear"), je = D(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"), St = D(() => Vh(r.yearRange, r.reverseYears)), cn = D(() => Hh(r.locale, r.monthNameFormat)), de = () => {
      const R = He(p);
      R && (g.value = R.getBoundingClientRect().width);
    }, Ce = D(() => (R) => l(K.value(R), Q.value(R))), Se = D(
      () => c.value.multiCalendars > 0 && r.range ? [...Array(c.value.multiCalendars).keys()] : [0]
    ), _t = D(
      () => (R) => R === 1
    ), Mt = D(() => r.monthPicker || r.timePicker || r.yearPicker), Oa = D(
      () => ({
        dp__flex_display: c.value.multiCalendars > 0
      })
    ), $a = D(() => ({
      dp__instance_calendar: c.value.multiCalendars > 0
    })), Sa = D(() => ({
      dp__menu_disabled: r.disabled,
      dp__menu_readonly: r.readonly
    })), En = D(
      () => (R) => ka(Ce, R)
    ), fn = D(
      () => ({
        dp__menu: !0,
        dp__menu_index: !r.inline,
        dp__relative: r.inline,
        [r.menuClassName]: !!r.menuClassName
      })
    ), ka = (R, ee) => R.value(ee).map((Ee) => ({
      ...Ee,
      days: Ee.days.map((lt) => (lt.marker = y(lt), lt.classData = he(lt), lt))
    })), Pa = (R) => {
      R.stopPropagation(), R.stopImmediatePropagation();
    }, Ta = () => {
      r.escClose && n("close-picker");
    }, An = (R, ee = !1) => {
      v(R, ee), r.spaceConfirm && n("select-date");
    }, h = (R) => {
      var ee;
      (ee = r.flow) != null && ee.length && (d[R] = !0, Object.keys(d).filter((Ee) => !d[Ee]).length || oe());
    }, B = (R, ee, Ee, lt, ...Zt) => {
      if (r.flow[P.value] === R) {
        const ie = lt ? ee.value[0] : ee.value;
        ie && ie[Ee](...Zt);
      }
    }, oe = () => {
      B("month", f, "toggleMonthPicker", !0, !0), B("year", f, "toggleYearPicker", !0, !0), B("calendar", _, "toggleTimePicker", !1, !1, !0), B("time", _, "toggleTimePicker", !1, !0, !0);
      const R = r.flow[P.value];
      (R === "hours" || R === "minutes" || R === "seconds") && B(R, _, "toggleTimePicker", !1, !0, !0, R);
    }, ue = (R) => {
      if (r.arrowNavigation) {
        if (R === "up")
          return W();
        if (R === "down")
          return j();
        if (R === "left")
          return F();
        if (R === "right")
          return T();
      } else
        R === "left" || R === "up" ? X("left", 0, R === "up") : X("right", 0, R === "down");
    }, Ne = (R) => {
      o(R.shiftKey), !r.disableMonthYearSelect && R.code === "Tab" && R.target.classList.contains("dp__menu") && i.value.shiftKeyInMenu && (R.preventDefault(), R.stopImmediatePropagation(), n("close-picker"));
    }, wt = (R) => {
      f.value[0] && f.value[0].handleMonthYearChange(R);
    };
    return t({
      updateMonthYear: s
    }), (R, ee) => {
      var Ee;
      return O(), me(Xt, {
        appear: "",
        name: (Ee = b(c).transitions) == null ? void 0 : Ee.menuAppear,
        mode: "out-in",
        css: !!R.transitions
      }, {
        default: te(() => {
          var lt, Zt;
          return [
            C("div", {
              id: R.uid ? `dp-menu-${R.uid}` : void 0,
              tabindex: "0",
              ref_key: "dpMenuRef",
              ref: x,
              role: "dialog",
              class: ae(b(fn)),
              onMouseleave: ee[15] || (ee[15] = //@ts-ignore
              (...ie) => b(re) && b(re)(...ie)),
              onClick: Pa,
              onKeydown: [
                _e(Ta, ["esc"]),
                ee[16] || (ee[16] = _e(Rt((ie) => ue("left"), ["prevent"]), ["left"])),
                ee[17] || (ee[17] = _e(Rt((ie) => ue("up"), ["prevent"]), ["up"])),
                ee[18] || (ee[18] = _e(Rt((ie) => ue("down"), ["prevent"]), ["down"])),
                ee[19] || (ee[19] = _e(Rt((ie) => ue("right"), ["prevent"]), ["right"])),
                Ne
              ]
            }, [
              (R.disabled || R.readonly) && R.inline ? (O(), A("div", {
                key: 0,
                class: ae(b(Sa))
              }, null, 2)) : I("", !0),
              !R.inline && !R.teleportCenter ? (O(), A("div", {
                key: 1,
                class: ae(b(je))
              }, null, 2)) : I("", !0),
              C("div", {
                class: ae({
                  dp__menu_content_wrapper: ((lt = R.presetRanges) == null ? void 0 : lt.length) || !!R.$slots["left-sidebar"] || !!R.$slots["right-sidebar"]
                })
              }, [
                R.$slots["left-sidebar"] ? (O(), A("div", Xb, [
                  J(R.$slots, "left-sidebar", Je(Ot({ handleMonthYearChange: wt })))
                ])) : I("", !0),
                (Zt = R.presetRanges) != null && Zt.length ? (O(), A("div", Zb, [
                  (O(!0), A(pe, null, Re(R.presetRanges, (ie, Jt) => (O(), A("div", {
                    key: Jt,
                    style: Et(ie.style || {}),
                    class: "dp__preset_range",
                    onClick: (ge) => b(ve)(ie.range, !!ie.slot)
                  }, [
                    ie.slot ? J(R.$slots, ie.slot, {
                      key: 0,
                      presetDateRange: b(ve),
                      label: ie.label,
                      range: ie.range
                    }) : (O(), A(pe, { key: 1 }, [
                      st(be(ie.label), 1)
                    ], 64))
                  ], 12, Jb))), 128))
                ])) : I("", !0),
                C("div", {
                  class: "dp__instance_calendar",
                  ref_key: "calendarWrapperRef",
                  ref: p,
                  role: "document"
                }, [
                  C("div", {
                    class: ae(b(Oa))
                  }, [
                    (O(!0), A(pe, null, Re(b(Se), (ie, Jt) => (O(), A("div", {
                      key: ie,
                      class: ae(b($a))
                    }, [
                      !R.disableMonthYearSelect && !R.timePicker ? (O(), me(Ib, We({
                        key: 0,
                        ref_for: !0,
                        ref: (ge) => {
                          ge && (f.value[Jt] = ge);
                        },
                        months: b(cn),
                        years: b(St),
                        month: b(K)(ie),
                        year: b(Q)(ie),
                        instance: ie,
                        "internal-model-value": e.internalModelValue
                      }, R.$props, {
                        onMount: ee[0] || (ee[0] = (ge) => h("monthYearInput")),
                        onResetFlow: U,
                        onUpdateMonthYear: (ge) => b(s)(ie, ge),
                        onMonthYearSelect: b(S),
                        onOverlayClosed: L
                      }), ut({ _: 2 }, [
                        Re(b(ft), (ge, Cs) => ({
                          name: ge,
                          fn: te((Da) => [
                            J(R.$slots, ge, Je(Ot(Da)))
                          ])
                        }))
                      ]), 1040, ["months", "years", "month", "year", "instance", "internal-model-value", "onUpdateMonthYear", "onMonthYearSelect"])) : I("", !0),
                      Ae($b, We({
                        ref_for: !0,
                        ref: (ge) => {
                          ge && (m.value[Jt] = ge);
                        },
                        "specific-mode": b(Mt),
                        "get-week-num": b($),
                        instance: ie,
                        "mapped-dates": b(En)(ie),
                        month: b(K)(ie),
                        year: b(Q)(ie)
                      }, R.$props, {
                        "flow-step": P.value,
                        "onUpdate:flowStep": ee[1] || (ee[1] = (ge) => P.value = ge),
                        onSelectDate: (ge) => b(v)(ge, !b(_t)(ie)),
                        onHandleSpace: (ge) => An(ge, !b(_t)(ie)),
                        onSetHoverDate: ee[2] || (ee[2] = (ge) => b(we)(ge)),
                        onHandleScroll: (ge) => b(z)(ge, ie),
                        onHandleSwipe: (ge) => b(q)(ge, ie),
                        onMount: ee[3] || (ee[3] = (ge) => h("calendar")),
                        onResetFlow: U,
                        onTooltipOpen: ee[4] || (ee[4] = (ge) => R.$emit("tooltip-open", ge)),
                        onTooltipClose: ee[5] || (ee[5] = (ge) => R.$emit("tooltip-close", ge))
                      }), ut({ _: 2 }, [
                        Re(b(Le), (ge, Cs) => ({
                          name: ge,
                          fn: te((Da) => [
                            J(R.$slots, ge, Je(Ot({ ...Da })))
                          ])
                        }))
                      ]), 1040, ["specific-mode", "get-week-num", "instance", "mapped-dates", "month", "year", "flow-step", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])
                    ], 2))), 128))
                  ], 2),
                  C("div", null, [
                    R.$slots["time-picker"] ? J(R.$slots, "time-picker", Je(We({ key: 0 }, { time: b(H), updateTime: b(E) }))) : (O(), A(pe, { key: 1 }, [
                      R.enableTimePicker && !R.monthPicker && !R.weekPicker ? (O(), me(Gb, We({
                        key: 0,
                        ref_key: "timePickerRef",
                        ref: _,
                        hours: b(H).hours,
                        minutes: b(H).minutes,
                        seconds: b(H).seconds,
                        "internal-model-value": e.internalModelValue
                      }, R.$props, {
                        onMount: ee[6] || (ee[6] = (ie) => h("timePicker")),
                        "onUpdate:hours": ee[7] || (ee[7] = (ie) => b(E)(ie)),
                        "onUpdate:minutes": ee[8] || (ee[8] = (ie) => b(E)(ie, !1)),
                        "onUpdate:seconds": ee[9] || (ee[9] = (ie) => b(E)(ie, !1, !0)),
                        onResetFlow: U,
                        onOverlayClosed: L,
                        onOverlayOpened: ee[10] || (ee[10] = (ie) => R.$emit("time-picker-open", ie))
                      }), ut({ _: 2 }, [
                        Re(b(gt), (ie, Jt) => ({
                          name: ie,
                          fn: te((ge) => [
                            J(R.$slots, ie, Je(Ot(ge)))
                          ])
                        }))
                      ]), 1040, ["hours", "minutes", "seconds", "internal-model-value"])) : I("", !0)
                    ], 64))
                  ])
                ], 512),
                R.$slots["right-sidebar"] ? (O(), A("div", eg, [
                  J(R.$slots, "right-sidebar", Je(Ot({ handleMonthYearChange: wt })))
                ])) : I("", !0),
                R.showNowButton ? (O(), A("div", tg, [
                  R.$slots["now-button"] ? J(R.$slots, "now-button", {
                    key: 0,
                    selectCurrentDate: b(k)
                  }) : I("", !0),
                  R.$slots["now-button"] ? I("", !0) : (O(), A("button", {
                    key: 1,
                    type: "button",
                    role: "button",
                    class: "dp__now_button",
                    onClick: ee[11] || (ee[11] = //@ts-ignore
                    (...ie) => b(k) && b(k)(...ie))
                  }, be(R.nowButtonLabel), 1))
                ])) : I("", !0)
              ], 2),
              !R.autoApply || R.keepActionRow ? (O(), me(vb, We({
                key: 2,
                "menu-mount": Y.value,
                "calendar-width": g.value,
                "internal-model-value": e.internalModelValue
              }, R.$props, {
                onClosePicker: ee[12] || (ee[12] = (ie) => R.$emit("close-picker")),
                onSelectDate: ee[13] || (ee[13] = (ie) => R.$emit("select-date")),
                onInvalidSelect: ee[14] || (ee[14] = (ie) => R.$emit("invalid-select"))
              }), ut({ _: 2 }, [
                Re(b(ce), (ie, Jt) => ({
                  name: ie,
                  fn: te((ge) => [
                    J(R.$slots, ie, Je(Ot({ ...ge })))
                  ])
                }))
              ]), 1040, ["menu-mount", "calendar-width", "internal-model-value"])) : I("", !0)
            ], 42, Qb)
          ];
        }),
        _: 3
      }, 8, ["name", "css"]);
    };
  }
}), rg = typeof window < "u" ? window : void 0, za = () => {
}, ag = (e) => Es() ? (As(e), !0) : !1, og = (e, t, n, r) => {
  if (!e)
    return za;
  let a = za;
  const o = ze(
    () => b(e),
    (l) => {
      a(), l && (l.addEventListener(t, n, r), a = () => {
        l.removeEventListener(t, n, r), a = za;
      });
    },
    { immediate: !0, flush: "post" }
  ), i = () => {
    o(), a();
  };
  return ag(i), i;
}, ig = (e, t, n, r = {}) => {
  const { window: a = rg, event: o = "pointerdown" } = r;
  return a ? og(a, o, (i) => {
    const l = He(e), c = He(t);
    !l || !c || l === i.target || i.composedPath().includes(l) || i.composedPath().includes(c) || n(i);
  }, { passive: !0 }) : void 0;
}, lg = /* @__PURE__ */ fe({
  __name: "VueDatePicker",
  props: {
    ...Yt
  },
  emits: [
    "update:model-value",
    "text-submit",
    "closed",
    "cleared",
    "open",
    "focus",
    "blur",
    "internal-model-change",
    "recalculate-position",
    "flow-step",
    "update-month-year",
    "invalid-select",
    "invalid-fixed-range",
    "tooltip-open",
    "tooltip-close",
    "time-picker-open"
  ],
  setup(e, { expose: t, emit: n }) {
    const r = e, a = pi(), o = M(!1), i = Dn(r, "modelValue"), l = Dn(r, "timezone"), c = M(null), u = M(null), p = M(!1), d = M(null), { setMenuFocused: f, setShiftKey: m } = ks(), { clearArrowNav: _ } = Bt(), { validateDate: x, isValidTime: g, defaults: Y } = yt(r);
    Oe(() => {
      N(r.modelValue), r.inline || (L(d.value).addEventListener("scroll", v), window.addEventListener("resize", $)), r.inline && (o.value = !0);
    }), it(() => {
      if (!r.inline) {
        const de = L(d.value);
        de && de.removeEventListener("scroll", v), window.removeEventListener("resize", $);
      }
    });
    const P = qt(a, "all", r.presetRanges), T = qt(a, "input");
    ze(
      [i, l],
      () => {
        N(i.value);
      },
      { deep: !0 }
    );
    const { openOnTop: F, menuPosition: j, setMenuPosition: W, setInitialPosition: Z, getScrollableParent: L } = nb(
      c,
      u,
      n,
      r
    ), {
      inputValue: w,
      internalModelValue: U,
      parseExternalModelValue: N,
      emitModelValue: G,
      formatInputValue: K,
      checkBeforeEmit: Q
    } = eb(n, r, p), H = D(
      () => ({
        dp__main: !0,
        dp__theme_dark: r.dark,
        dp__theme_light: !r.dark,
        dp__flex_display: r.inline,
        dp__flex_display_with_input: r.inlineWithInput
      })
    ), E = D(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), s = D(() => r.teleport ? {
      to: typeof r.teleport == "boolean" ? "body" : r.teleport,
      disabled: r.inline
    } : { class: "dp__outer_menu_wrap" }), v = () => {
      o.value && (r.closeOnScroll ? re() : W());
    }, $ = () => {
      o.value && W();
    }, S = () => {
      !r.disabled && !r.readonly && (Z(), o.value = !0, ot().then(() => {
        W(), o.value && n("open");
      }), o.value || we(), N(r.modelValue));
    }, z = () => {
      w.value = "", we(), n("update:model-value", null), n("cleared"), re();
    }, X = () => {
      const de = U.value;
      return !de || !Array.isArray(de) && x(de) ? !0 : Array.isArray(de) ? de.length === 2 && x(de[0]) && x(de[1]) ? !0 : x(de[0]) : !1;
    }, q = () => {
      Q() && X() ? (G(), re()) : n("invalid-select", U.value);
    }, y = (de) => {
      k(), G(), r.closeOnAutoApply && !de && re();
    }, k = () => {
      u.value && r.textInput && u.value.setParsedDate(U.value);
    }, ve = (de = !1) => {
      r.autoApply && g(U.value) && X() && (r.range && Array.isArray(U.value) ? (r.partialRange || U.value.length === 2) && y(de) : y(de));
    }, we = () => {
      r.textInput || (U.value = null);
    }, re = () => {
      r.inline || (o.value && (o.value = !1, f(!1), m(!1), _(), n("closed"), Z(), w.value && N(i.value)), we());
    }, he = (de, Ce) => {
      if (!de) {
        U.value = null;
        return;
      }
      U.value = de, Ce && (q(), n("text-submit"));
    }, Le = () => {
      r.autoApply && g(U.value) && G(), k();
    }, ce = () => o.value ? re() : S(), gt = (de) => {
      U.value = de;
    }, ft = D(() => r.textInput && Y.value.textInputOptions.format), je = () => {
      ft.value && (p.value = !0, K()), n("focus");
    }, St = () => {
      ft.value && (p.value = !1, K()), n("blur");
    }, cn = (de) => {
      c.value && c.value.updateMonthYear(0, {
        month: fu(de.month),
        year: fu(de.year)
      });
    };
    return ig(
      c,
      u,
      r.onClickOutside ? () => r.onClickOutside(X) : re
    ), t({
      closeMenu: re,
      selectDate: q,
      clearValue: z,
      openMenu: S,
      onScroll: v,
      formatInputValue: K,
      // exposed for testing purposes
      updateInternalModelValue: gt,
      // modify internal modelValue
      setMonthYear: cn
    }), (de, Ce) => (O(), A("div", {
      class: ae(b(H)),
      ref_key: "pickerWrapperRef",
      ref: d
    }, [
      Ae(cb, We({
        ref_key: "inputRef",
        ref: u,
        "is-menu-open": o.value,
        "input-value": b(w),
        "onUpdate:inputValue": Ce[0] || (Ce[0] = (Se) => Vt(w) ? w.value = Se : null)
      }, de.$props, {
        onClear: z,
        onOpen: S,
        onSetInputDate: he,
        onSetEmptyDate: b(G),
        onSelectDate: q,
        onToggle: ce,
        onClose: re,
        onFocus: je,
        onBlur: St
      }), ut({ _: 2 }, [
        Re(b(T), (Se, _t) => ({
          name: Se,
          fn: te((Mt) => [
            J(de.$slots, Se, Je(Ot(Mt)))
          ])
        }))
      ]), 1040, ["is-menu-open", "input-value", "onSetEmptyDate"]),
      o.value ? (O(), me(hu(de.teleport ? mu : "div"), Je(We({ key: 0 }, b(s))), {
        default: te(() => [
          o.value ? (O(), me(ng, We({
            key: 0,
            ref_key: "dpMenuRef",
            ref: c,
            class: b(E),
            style: b(j),
            "open-on-top": b(F)
          }, de.$props, {
            "internal-model-value": b(U),
            "onUpdate:internalModelValue": Ce[1] || (Ce[1] = (Se) => Vt(U) ? U.value = Se : null),
            onClosePicker: re,
            onSelectDate: q,
            onAutoApply: ve,
            onTimeUpdate: Le,
            onFlowStep: Ce[2] || (Ce[2] = (Se) => de.$emit("flow-step", Se)),
            onUpdateMonthYear: Ce[3] || (Ce[3] = (Se) => de.$emit("update-month-year", Se)),
            onInvalidSelect: Ce[4] || (Ce[4] = (Se) => de.$emit("invalid-select", b(U))),
            onInvalidFixedRange: Ce[5] || (Ce[5] = (Se) => de.$emit("invalid-fixed-range", Se)),
            onRecalculatePosition: b(W),
            onTooltipOpen: Ce[6] || (Ce[6] = (Se) => de.$emit("tooltip-open", Se)),
            onTooltipClose: Ce[7] || (Ce[7] = (Se) => de.$emit("tooltip-close", Se)),
            onTimePickerOpen: Ce[8] || (Ce[8] = (Se) => de.$emit("time-picker-open", Se))
          }), ut({ _: 2 }, [
            Re(b(P), (Se, _t) => ({
              name: Se,
              fn: te((Mt) => [
                J(de.$slots, Se, Je(Ot({ ...Mt })))
              ])
            }))
          ]), 1040, ["class", "style", "open-on-top", "internal-model-value", "onRecalculatePosition"])) : I("", !0)
        ]),
        _: 3
      }, 16)) : I("", !0)
    ], 2));
  }
}), Ri = /* @__PURE__ */ (() => {
  const e = lg;
  return e.install = (t) => {
    t.component("Vue3DatePicker", e);
  }, e;
})(), ug = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ri
}, Symbol.toStringTag, { value: "Module" }));
Object.entries(ug).forEach(([e, t]) => {
  e !== "default" && (Ri[e] = t);
});
const sg = fe({
  props: {
    modelValue: {
      type: Date
    },
    required: {
      type: Boolean,
      required: !1,
      default: !1
    },
    labelCssClasses: {
      type: String,
      required: !1
    },
    inputCssClasses: {
      type: String,
      required: !1
    },
    readOnly: {
      type: Boolean,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    enableDateTime: {
      type: Boolean,
      required: !1,
      default: !1
    }
  },
  components: {
    Datepicker: Ri
  },
  setup(e, { emit: t }) {
    function n(r) {
      t("update:modelValue", r), t("updated", r);
    }
    return {
      updated: n
    };
  }
}), cg = ["for"], fg = ["id", "disabled", "value"];
function dg(e, t, n, r, a, o) {
  const i = Ke("Datepicker");
  return O(), A(pe, null, [
    e.label ? (O(), A("label", {
      key: 0,
      for: e.id ?? e.name,
      class: ae(e.labelCssClasses ?? "block text-sm font-medium text-gray-700")
    }, be(e.label) + be(e.required ? "*" : ""), 11, cg)) : I("", !0),
    Ae(i, {
      modelValue: e.modelValue,
      "auto-apply": "",
      "enable-time-picker": !!e.enableDateTime,
      "is-24": e.enableDateTime ? !1 : void 0,
      disabled: !!e.readOnly,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.updated(l))
    }, {
      "dp-input": te(({ value: l, onInput: c, onEnter: u, onTab: p, onClear: d }) => [
        C("input", {
          id: e.id ?? e.name,
          disabled: !!e.readOnly,
          class: ae([
            e.readOnly ? "border-transparent p-0" : "border-gray-300 px-3 py-2",
            e.inputCssClasses ?? "block w-full appearance-none cursor-pointer rounded-md border placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
          ]),
          type: "text",
          value: l
        }, null, 10, fg)
      ]),
      _: 1
    }, 8, ["modelValue", "enable-time-picker", "is-24", "disabled"])
  ], 64);
}
const pg = /* @__PURE__ */ ct(sg, [["render", dg]]), vg = fe({
  props: {
    isOpen: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      required: !0
    },
    titleButtonEnabled: {
      type: Boolean,
      default: !1
    },
    disableClose: {
      type: Boolean,
      default: !1
    },
    maxWidth: {
      type: String,
      required: !1
    },
    maxHeight: {
      type: String,
      required: !1
    }
  },
  components: {
    TransitionRoot: hi,
    TransitionChild: Xu,
    Dialog: Wc,
    DialogPanel: qc,
    DialogTitle: zc,
    ButtonComponent: Zu
  },
  setup(e, { emit: t }) {
    function n() {
      t("closeModal");
    }
    function r() {
      t("titleButtonClicked");
    }
    return {
      closeModal: n,
      titleButtonClicked: r
    };
  }
}), yg = /* @__PURE__ */ C("div", { class: "fixed inset-0 bg-black bg-opacity-80" }, null, -1), mg = { class: "fixed inset-0 overflow-y-auto" }, hg = { class: "flex min-h-full items-center justify-center p-4 text-center" }, bg = { class: "absolute top-2.5 right-4 pt-2" }, gg = /* @__PURE__ */ C("span", { class: "sr-only" }, "Close sidebar", -1), _g = /* @__PURE__ */ C("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-6 h-6 text-gray-400"
}, [
  /* @__PURE__ */ C("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), wg = [
  gg,
  _g
], Og = { class: "flex items-center justify-between" };
function $g(e, t, n, r, a, o) {
  const i = Ke("TransitionChild"), l = Ke("DialogTitle"), c = Ke("ButtonComponent"), u = Ke("DialogPanel"), p = Ke("Dialog"), d = Ke("TransitionRoot");
  return O(), me(d, {
    appear: "",
    show: e.isOpen,
    as: "template"
  }, {
    default: te(() => [
      Ae(p, {
        as: "div",
        onClose: e.closeModal,
        class: "relative z-40"
      }, {
        default: te(() => [
          Ae(i, {
            as: "template",
            enter: "ease-in-out duration-300",
            "enter-from": "opacity-0",
            "enter-to": "opacity-100",
            leave: "ease-in-out duration-300",
            "leave-from": "opacity-100",
            "leave-to": "opacity-0"
          }, {
            default: te(() => [
              yg
            ]),
            _: 1
          }),
          C("div", mg, [
            C("div", hg, [
              Ae(i, {
                as: "template",
                enter: "duration-300 ease-out",
                "enter-from": "opacity-0 scale-95",
                "enter-to": "opacity-100 scale-100",
                leave: "duration-200 ease-in",
                "leave-from": "opacity-100 scale-100",
                "leave-to": "opacity-0 scale-95"
              }, {
                default: te(() => [
                  Ae(u, {
                    class: ae([[e.maxWidth ?? "w-full max-w-md", e.maxHeight], "bg-white relative transform overflow-hidden rounded-2xl bg-base-100 p-6 text-left align-middle shadow-xl transition-all"])
                  }, {
                    default: te(() => [
                      Ae(i, { as: "template" }, {
                        default: te(() => [
                          On(C("div", bg, [
                            C("button", {
                              type: "button",
                              class: "ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500",
                              onClick: t[0] || (t[0] = (...f) => e.closeModal && e.closeModal(...f))
                            }, wg)
                          ], 512), [
                            [$n, !e.disableClose]
                          ])
                        ]),
                        _: 1
                      }),
                      C("div", Og, [
                        Ae(l, {
                          as: "h3",
                          class: "text-lg font-medium leading-6 text-gray-900"
                        }, {
                          default: te(() => [
                            st(be(e.title), 1)
                          ]),
                          _: 1
                        }),
                        e.titleButtonEnabled ? (O(), me(c, {
                          key: 0,
                          style: "secondary",
                          onClick: e.titleButtonClicked
                        }, {
                          default: te(() => [
                            J(e.$slots, "titleButton")
                          ]),
                          _: 3
                        }, 8, ["onClick"])) : I("", !0)
                      ]),
                      C("div", {
                        class: ae([[e.maxHeight], "overflow-auto p-1"])
                      }, [
                        J(e.$slots, "default")
                      ], 2)
                    ]),
                    _: 3
                  }, 8, ["class"])
                ]),
                _: 3
              })
            ])
          ])
        ]),
        _: 3
      }, 8, ["onClose"])
    ]),
    _: 3
  }, 8, ["show"]);
}
const Sg = /* @__PURE__ */ ct(vg, [["render", $g]]), kg = fe({
  props: {
    modelValue: {
      type: String
    },
    required: {
      type: Boolean,
      required: !1,
      default: !1
    },
    labelCssClasses: {
      type: String,
      required: !1
    },
    inputCssClasses: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    readOnly: {
      type: Boolean,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    name: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      required: !1,
      default: "text"
    },
    autocomplete: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    return {};
  }
}), Pg = ["for"], Tg = ["value", "id", "name", "type", "autocomplete", "disabled"];
function Dg(e, t, n, r, a, o) {
  return O(), A("div", null, [
    e.label ? (O(), A("label", {
      key: 0,
      for: e.name,
      class: ae(
        e.labelCssClasses ?? "block text-sm font-medium text-gray-700 mb-1"
      )
    }, be(e.label) + be(e.required ? "*" : ""), 11, Pg)) : I("", !0),
    C("input", {
      value: e.modelValue,
      onInput: t[0] || (t[0] = (i) => e.$emit(
        "update:modelValue",
        i.target.value
      )),
      id: e.id ?? e.name,
      name: e.name,
      type: e.type,
      autocomplete: e.autocomplete,
      disabled: e.readOnly || e.disabled,
      class: ae([
        e.readOnly ? "border-transparent !p-0" : "border-gray-300 px-3 py-2",
        e.disabled ? "border-gray-300 px-3 py-2 bg-gray-50" : "border-gray-300 px-3 py-2",
        e.inputCssClasses ?? "block w-full appearance-none rounded-md border placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
      ])
    }, null, 42, Tg)
  ]);
}
const xg = /* @__PURE__ */ ct(kg, [["render", Dg]]), Cg = fe({
  props: {
    active: {
      type: Boolean,
      required: !1,
      default: !1
    },
    cssClasses: {
      type: String,
      required: !1
    }
  },
  setup(e) {
  }
});
const xs = (e) => (Is("data-v-ad046b99"), e = e(), Ls(), e), Rg = /* @__PURE__ */ xs(() => /* @__PURE__ */ C("div", { class: "spin" }, null, -1)), Mg = /* @__PURE__ */ xs(() => /* @__PURE__ */ C("div", { class: "bounce" }, null, -1)), Ng = [
  Rg,
  Mg
];
function Eg(e, t, n, r, a, o) {
  return O(), A("div", {
    class: ae(["loader", e.cssClasses ?? ""])
  }, Ng, 2);
}
const Ag = /* @__PURE__ */ ct(Cg, [["render", Eg], ["__scopeId", "data-v-ad046b99"]]), Ig = fe({
  props: {
    cssClasses: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    return {
      defaultCssClasses: "h-2.5 bg-gray-200 dark:bg-gray-700 w-48"
    };
  }
});
function Lg(e, t, n, r, a, o) {
  return O(), A("div", {
    class: ae([e.cssClasses ?? e.defaultCssClasses, "animate-pulse rounded-full"])
  }, null, 2);
}
const Bg = /* @__PURE__ */ ct(Ig, [["render", Lg]]), Yg = fe({
  props: {
    items: {
      type: Array,
      default: []
    },
    modelValue: {
      type: Object
    },
    required: {
      type: Boolean,
      required: !1,
      default: !1
    },
    labelCssClasses: {
      type: String,
      required: !1
    },
    inputCssClasses: {
      type: String,
      required: !1
    },
    readOnly: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    }
  },
  components: {
    Listbox: Jc,
    ListboxButton: tf,
    ListboxLabel: ef,
    ListboxOption: rf,
    ListboxOptions: nf
  },
  setup(e, { emit: t }) {
    function n(r) {
      t("update:modelValue", r), t("updated", r);
    }
    return {
      updated: n
    };
  }
}), Ug = { class: "relative mt-1" }, Fg = { class: "block truncate" }, jg = { class: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2" }, Vg = /* @__PURE__ */ C("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ C("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 12.75l6 6 9-13.5"
  })
], -1), Hg = [
  Vg
], Wg = /* @__PURE__ */ C("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ C("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4.5 12.75l6 6 9-13.5"
  })
], -1), qg = [
  Wg
];
function zg(e, t, n, r, a, o) {
  const i = Ke("ListboxLabel"), l = Ke("ChevronUpDownIcon"), c = Ke("ListboxButton"), u = Ke("ListboxOption"), p = Ke("ListboxOptions"), d = Ke("Listbox");
  return O(), me(d, {
    as: "div",
    disabled: e.readOnly || e.disabled,
    modelValue: e.modelValue,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.updated(f))
  }, {
    default: te(() => [
      e.label ? (O(), me(i, {
        key: 0,
        class: "block text-sm font-medium text-gray-700"
      }, {
        default: te(() => [
          st(be(e.label) + be(e.required ? "*" : ""), 1)
        ]),
        _: 1
      })) : I("", !0),
      C("div", Ug, [
        Ae(c, {
          class: ae([
            e.readOnly ? "border-transparent !p-0" : "border-gray-300 py-2 pl-3 pr-10",
            e.disabled ? "border-gray-300 py-2 pl-3 pr-10 bg-gray-50" : "border-gray-300 py-2 pl-3 pr-10",
            e.inputCssClasses ?? "relative w-full cursor-pointer rounded-md border border-gray-300 bg-white text-left focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          ])
        }, {
          default: te(() => {
            var f;
            return [
              C("span", Fg, be(((f = e.modelValue) == null ? void 0 : f.label) ?? "Select an option"), 1),
              C("span", jg, [
                e.readOnly ? I("", !0) : (O(), me(l, {
                  key: 0,
                  class: "h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                }))
              ])
            ];
          }),
          _: 1
        }, 8, ["class"]),
        Ae(Xt, {
          "leave-active-class": "transition ease-in duration-100",
          "leave-from-class": "opacity-100",
          "leave-to-class": "opacity-0"
        }, {
          default: te(() => [
            Ae(p, { class: "absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, {
              default: te(() => [
                Ae(u, {
                  as: "template",
                  key: "00",
                  value: void 0,
                  disabled: !0
                }, {
                  default: te(({ active: f, modelValue: m }) => [
                    C("li", {
                      class: ae([
                        f ? "text-white bg-blue-600" : "text-gray-500",
                        "relative cursor-pointer select-none py-2 pl-3 pr-9"
                      ])
                    }, [
                      C("span", {
                        class: ae([
                          m ? "font-semibold" : "font-normal",
                          "block truncate"
                        ])
                      }, "Select an option", 2),
                      m ? (O(), A("span", {
                        key: 0,
                        class: ae([
                          f ? "text-white" : "text-blue-600",
                          "absolute inset-y-0 right-0 flex items-center pr-4"
                        ])
                      }, Hg, 2)) : I("", !0)
                    ], 2)
                  ]),
                  _: 1
                }),
                (O(!0), A(pe, null, Re(e.items, (f) => (O(), me(u, {
                  as: "template",
                  key: f.value,
                  value: f
                }, {
                  default: te(({ active: m, modelValue: _ }) => [
                    C("li", {
                      class: ae([
                        m ? "text-white bg-blue-600" : "text-gray-900",
                        "relative cursor-pointer select-none py-2 pl-3 pr-9"
                      ])
                    }, [
                      C("span", {
                        class: ae([
                          _ ? "font-semibold" : "font-normal",
                          "block truncate"
                        ])
                      }, be(f.label), 3),
                      _ ? (O(), A("span", {
                        key: 0,
                        class: ae([
                          m ? "text-white" : "text-blue-600",
                          "absolute inset-y-0 right-0 flex items-center pr-4"
                        ])
                      }, qg, 2)) : I("", !0)
                    ], 2)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["disabled", "modelValue"]);
}
const Gg = /* @__PURE__ */ ct(Yg, [["render", zg]]), Kg = fe({
  props: {
    modelValue: {
      type: String
    },
    required: {
      type: Boolean,
      required: !1,
      default: !1
    },
    labelCssClasses: {
      type: String,
      required: !1
    },
    inputCssClasses: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    readOnly: {
      type: Boolean,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    name: {
      type: String,
      required: !0
    },
    autocomplete: {
      type: String,
      required: !1
    },
    rows: {
      type: Number,
      required: !1,
      default: 3
    },
    label: {
      type: String,
      required: !1
    }
  },
  setup(e) {
    return {};
  }
}), Qg = ["for"], Xg = ["value", "rows", "id", "name", "autocomplete", "disabled"];
function Zg(e, t, n, r, a, o) {
  return O(), A("div", null, [
    e.label ? (O(), A("label", {
      key: 0,
      for: e.name,
      class: ae(
        e.labelCssClasses ?? "block text-sm font-medium text-gray-700 mb-1"
      )
    }, be(e.label) + be(e.required ? "*" : ""), 11, Qg)) : I("", !0),
    C("textarea", {
      value: e.modelValue,
      onInput: t[0] || (t[0] = (i) => e.$emit(
        "update:modelValue",
        i.target.value
      )),
      rows: e.rows,
      id: e.id ?? e.name,
      name: e.name,
      autocomplete: e.autocomplete,
      disabled: e.readOnly || e.disabled,
      class: ae([
        e.readOnly ? "border-transparent !p-0" : "border-gray-300 px-3 py-2",
        e.disabled ? "border-gray-300 px-3 py-2 bg-gray-50" : "border-gray-300 px-3 py-2",
        e.inputCssClasses ?? "block w-full appearance-none rounded-md border placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
      ])
    }, null, 42, Xg)
  ]);
}
const Jg = /* @__PURE__ */ ct(Kg, [["render", Zg]]), e_ = fe({
  props: {
    modelValue: {
      type: Boolean,
      default: !1
    },
    cssClasses: {
      type: String,
      required: !1
    },
    label: {
      type: String,
      required: !1
    },
    labelCssClasses: {
      type: String,
      required: !1
    },
    id: {
      type: String,
      required: !1
    },
    name: {
      type: String,
      required: !0
    }
  },
  components: {
    Switch: of
  },
  emits: ["updated", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = M(!1);
    function r(a) {
      t("update:modelValue", a), t("updated", a);
    }
    return {
      enabled: n,
      emit: t,
      updated: r
    };
  }
}), t_ = ["for"], n_ = /* @__PURE__ */ C("span", { class: "sr-only" }, "Use setting", -1);
function r_(e, t, n, r, a, o) {
  const i = Ke("Switch");
  return O(), A(pe, null, [
    e.label ? (O(), A("label", {
      key: 0,
      for: e.name,
      class: ae(
        e.labelCssClasses ?? "block text-sm font-medium text-gray-700 mb-1"
      )
    }, be(e.label), 11, t_)) : I("", !0),
    Ae(i, {
      modelValue: e.modelValue,
      name: e.name,
      id: e.id,
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.updated(l)),
      class: ae([
        e.modelValue ? "bg-blue-600" : "bg-gray-200",
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      ])
    }, {
      default: te(() => [
        n_,
        C("span", {
          "aria-hidden": "true",
          class: ae([
            e.modelValue ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          ])
        }, null, 2)
      ]),
      _: 1
    }, 8, ["modelValue", "name", "id", "class"])
  ], 64);
}
const a_ = /* @__PURE__ */ ct(e_, [["render", r_]]), o_ = fe({
  name: "FolderNavigation",
  components: { DialogComponent: Sg, ButtonComponent: Zu },
  props: {
    showPopup: {
      type: Boolean,
      required: !0
    },
    folders: {
      type: Array,
      required: !0
    },
    rootId: {
      type: String,
      required: !0
    }
  },
  emits: ["move-file", "close"],
  setup(e, { emit: t }) {
    const n = M(e.rootId), r = D(() => {
      const p = u(
        e.folders,
        n.value ?? e.rootId
      );
      return console.log(e.folders), p ? p.name : "Root";
    }), a = D(() => {
      const p = n.value ?? e.rootId, d = u(e.folders, p);
      return d && d.children ? d.children : [];
    });
    function o(p) {
      n.value = p.id;
    }
    function i() {
      n.value !== null && t("move-file", n.value), n.value = null, t("close");
    }
    function l() {
      if (n.value !== null && n.value !== e.rootId) {
        const p = u(
          e.folders,
          n.value
        );
        p && p.parent !== null && (n.value = p.parent);
      }
    }
    function c() {
      t("close"), n.value = null;
    }
    function u(p, d) {
      for (const f of p) {
        if (f.id === d)
          return f;
        if (f.children) {
          const m = u(f.children || [], d);
          if (m !== null)
            return m;
        }
      }
      return null;
    }
    return ze(
      () => e.showPopup,
      (p) => {
        p || (n.value = null);
      }
    ), {
      currentFolder: r,
      visibleFolders: a,
      selectedFolderId: n,
      selectFolder: o,
      moveFileHere: i,
      goBack: l,
      closePopup: c,
      toRaw: ht
    };
  }
}), i_ = { class: "w-full" }, l_ = { class: "mt-4 p-8 pt-4 border rounded-lg" }, u_ = { class: "flex items-center py-3" }, s_ = /* @__PURE__ */ C("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ C("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
  })
], -1), c_ = [
  s_
], f_ = { class: "text-lg font-medium" }, d_ = ["onClick"], p_ = { key: 0 }, v_ = /* @__PURE__ */ C("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-4 h-4 text-gray-400"
}, [
  /* @__PURE__ */ C("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  })
], -1), y_ = [
  v_
], m_ = { class: "mt-4 flex justify-end gap-4" };
function h_(e, t, n, r, a, o) {
  const i = Ke("ButtonComponent"), l = Ke("DialogComponent");
  return O(), me(l, {
    title: "Move file",
    isOpen: e.showPopup,
    maxWidth: "w-full max-w-2xl",
    onCloseModal: e.closePopup
  }, {
    default: te(() => [
      C("div", i_, [
        C("div", l_, [
          C("div", u_, [
            C("button", {
              class: ae([
                e.selectedFolderId !== e.rootId ? "visible" : "hidden",
                "text-gray-400 hover:text-gray-800 -ml-8 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm"
              ]),
              onClick: t[0] || (t[0] = (...c) => e.goBack && e.goBack(...c))
            }, c_, 2),
            C("h3", f_, be(e.currentFolder), 1)
          ]),
          C("div", null, [
            (O(!0), A(pe, null, Re(e.toRaw(e.visibleFolders), (c) => (O(), A("button", {
              key: c.id,
              class: ae(["flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm", {
                "selected bg-gray-100": c.id === e.selectedFolderId
              }]),
              onClick: (u) => e.selectFolder(c)
            }, [
              C("span", null, be(c.name), 1),
              c.children ? (O(), A("span", p_, y_)) : I("", !0)
            ], 10, d_))), 128))
          ])
        ]),
        C("div", m_, [
          Ae(i, {
            onClick: e.moveFileHere,
            style: "primary",
            disabled: e.selectedFolderId === null
          }, {
            default: te(() => [
              st(" Move Here ")
            ]),
            _: 1
          }, 8, ["onClick", "disabled"]),
          Ae(i, {
            onClick: e.closePopup,
            style: "secondary"
          }, {
            default: te(() => [
              st(" Cancel ")
            ]),
            _: 1
          }, 8, ["onClick"])
        ])
      ])
    ]),
    _: 1
  }, 8, ["isOpen", "onCloseModal"]);
}
const b_ = /* @__PURE__ */ ct(o_, [["render", h_]]), w_ = {
  install: (e) => {
    e.component("AvatarComponent", uc), e.component("BannerComponent", xf), e.component("BreadcrumbsComponent", Hf), e.component("CheckboxGroupComponent", ad), e.component("DatepickerComponent", pg), e.component(
      "FolderNavigationComponent",
      b_
    ), e.component("InputComponent", xg), e.component("LoadingBarComponent", Bg), e.component("LoaderComponent", Ag), e.component("SelectComponent", Gg), e.component("TextareaComponent", Jg), e.component("ToggleComponent", a_);
  }
};
export {
  uc as AvatarComponent,
  xf as BannerComponent,
  Hf as BreadcrumbsComponent,
  Zu as ButtonComponent,
  ad as CheckboxGroupComponent,
  pg as DatepickerComponent,
  Sg as DialogComponent,
  b_ as FolderNavigationComponent,
  xg as InputComponent,
  Ag as LoaderComponent,
  Bg as LoadingBarComponent,
  Gg as SelectComponent,
  Jg as TextareaComponent,
  a_ as ToggleComponent,
  w_ as default
};
