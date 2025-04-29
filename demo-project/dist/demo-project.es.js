import bh, { useState as zh } from "react";
import Ah from "react-dom";
var wc = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var p1;
function Th() {
  if (p1) return ie;
  p1 = 1;
  var E = Symbol.for("react.transitional.element"), Xl = Symbol.for("react.fragment");
  function vl(b, hl, gl) {
    var ia = null;
    if (gl !== void 0 && (ia = "" + gl), hl.key !== void 0 && (ia = "" + hl.key), "key" in hl) {
      gl = {};
      for (var Ha in hl)
        Ha !== "key" && (gl[Ha] = hl[Ha]);
    } else gl = hl;
    return hl = gl.ref, {
      $$typeof: E,
      type: b,
      key: ia,
      ref: hl !== void 0 ? hl : null,
      props: gl
    };
  }
  return ie.Fragment = Xl, ie.jsx = vl, ie.jsxs = vl, ie;
}
var L1;
function oh() {
  return L1 || (L1 = 1, wc.exports = Th()), wc.exports;
}
var Ol = oh(), Wc = { exports: {} }, ve = {}, $c = { exports: {} }, kc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function Mh() {
  return J1 || (J1 = 1, function(E) {
    function Xl(z, T) {
      var H = z.length;
      z.push(T);
      l: for (; 0 < H; ) {
        var L = H - 1 >>> 1, J = z[L];
        if (0 < hl(J, T))
          z[L] = T, z[H] = J, H = L;
        else break l;
      }
    }
    function vl(z) {
      return z.length === 0 ? null : z[0];
    }
    function b(z) {
      if (z.length === 0) return null;
      var T = z[0], H = z.pop();
      if (H !== T) {
        z[0] = H;
        l: for (var L = 0, J = z.length, bl = J >>> 1; L < bl; ) {
          var w = 2 * (L + 1) - 1, Z = z[w], el = w + 1, aa = z[el];
          if (0 > hl(Z, H))
            el < J && 0 > hl(aa, Z) ? (z[L] = aa, z[el] = H, L = el) : (z[L] = Z, z[w] = H, L = w);
          else if (el < J && 0 > hl(aa, H))
            z[L] = aa, z[el] = H, L = el;
          else break l;
        }
      }
      return T;
    }
    function hl(z, T) {
      var H = z.sortIndex - T.sortIndex;
      return H !== 0 ? H : z.id - T.id;
    }
    if (E.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var gl = performance;
      E.unstable_now = function() {
        return gl.now();
      };
    } else {
      var ia = Date, Ha = ia.now();
      E.unstable_now = function() {
        return ia.now() - Ha;
      };
    }
    var Wl = [], $l = [], C = 1, Al = null, F = 3, va = !1, Ql = !1, _a = !1, au = !1, he = typeof setTimeout == "function" ? setTimeout : null, vt = typeof clearTimeout == "function" ? clearTimeout : null, Zl = typeof setImmediate < "u" ? setImmediate : null;
    function Ra(z) {
      for (var T = vl($l); T !== null; ) {
        if (T.callback === null) b($l);
        else if (T.startTime <= z)
          b($l), T.sortIndex = T.expirationTime, Xl(Wl, T);
        else break;
        T = vl($l);
      }
    }
    function uu(z) {
      if (_a = !1, Ra(z), !Ql)
        if (vl(Wl) !== null)
          Ql = !0, la || (la = !0, xl());
        else {
          var T = vl($l);
          T !== null && ya(uu, T.startTime - z);
        }
    }
    var la = !1, ha = -1, kl = 5, ou = -1;
    function ye() {
      return au ? !0 : !(E.unstable_now() - ou < kl);
    }
    function Mu() {
      if (au = !1, la) {
        var z = E.unstable_now();
        ou = z;
        var T = !0;
        try {
          l: {
            Ql = !1, _a && (_a = !1, vt(ha), ha = -1), va = !0;
            var H = F;
            try {
              a: {
                for (Ra(z), Al = vl(Wl); Al !== null && !(Al.expirationTime > z && ye()); ) {
                  var L = Al.callback;
                  if (typeof L == "function") {
                    Al.callback = null, F = Al.priorityLevel;
                    var J = L(
                      Al.expirationTime <= z
                    );
                    if (z = E.unstable_now(), typeof J == "function") {
                      Al.callback = J, Ra(z), T = !0;
                      break a;
                    }
                    Al === vl(Wl) && b(Wl), Ra(z);
                  } else b(Wl);
                  Al = vl(Wl);
                }
                if (Al !== null) T = !0;
                else {
                  var bl = vl($l);
                  bl !== null && ya(
                    uu,
                    bl.startTime - z
                  ), T = !1;
                }
              }
              break l;
            } finally {
              Al = null, F = H, va = !1;
            }
            T = void 0;
          }
        } finally {
          T ? xl() : la = !1;
        }
      }
    }
    var xl;
    if (typeof Zl == "function")
      xl = function() {
        Zl(Mu);
      };
    else if (typeof MessageChannel < "u") {
      var de = new MessageChannel(), ht = de.port2;
      de.port1.onmessage = Mu, xl = function() {
        ht.postMessage(null);
      };
    } else
      xl = function() {
        he(Mu, 0);
      };
    function ya(z, T) {
      ha = he(function() {
        z(E.unstable_now());
      }, T);
    }
    E.unstable_IdlePriority = 5, E.unstable_ImmediatePriority = 1, E.unstable_LowPriority = 4, E.unstable_NormalPriority = 3, E.unstable_Profiling = null, E.unstable_UserBlockingPriority = 2, E.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, E.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : kl = 0 < z ? Math.floor(1e3 / z) : 5;
    }, E.unstable_getCurrentPriorityLevel = function() {
      return F;
    }, E.unstable_next = function(z) {
      switch (F) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = F;
      }
      var H = F;
      F = T;
      try {
        return z();
      } finally {
        F = H;
      }
    }, E.unstable_requestPaint = function() {
      au = !0;
    }, E.unstable_runWithPriority = function(z, T) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var H = F;
      F = z;
      try {
        return T();
      } finally {
        F = H;
      }
    }, E.unstable_scheduleCallback = function(z, T, H) {
      var L = E.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? L + H : L) : H = L, z) {
        case 1:
          var J = -1;
          break;
        case 2:
          J = 250;
          break;
        case 5:
          J = 1073741823;
          break;
        case 4:
          J = 1e4;
          break;
        default:
          J = 5e3;
      }
      return J = H + J, z = {
        id: C++,
        callback: T,
        priorityLevel: z,
        startTime: H,
        expirationTime: J,
        sortIndex: -1
      }, H > L ? (z.sortIndex = H, Xl($l, z), vl(Wl) === null && z === vl($l) && (_a ? (vt(ha), ha = -1) : _a = !0, ya(uu, H - L))) : (z.sortIndex = J, Xl(Wl, z), Ql || va || (Ql = !0, la || (la = !0, xl()))), z;
    }, E.unstable_shouldYield = ye, E.unstable_wrapCallback = function(z) {
      var T = F;
      return function() {
        var H = F;
        F = T;
        try {
          return z.apply(this, arguments);
        } finally {
          F = H;
        }
      };
    };
  }(kc)), kc;
}
var r1;
function Eh() {
  return r1 || (r1 = 1, $c.exports = Mh()), $c.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w1;
function Dh() {
  if (w1) return ve;
  w1 = 1;
  var E = Eh(), Xl = bh, vl = Ah;
  function b(l) {
    var a = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        a += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function hl(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function gl(l) {
    var a = l, u = l;
    if (l.alternate) for (; a.return; ) a = a.return;
    else {
      l = a;
      do
        a = l, (a.flags & 4098) !== 0 && (u = a.return), l = a.return;
      while (l);
    }
    return a.tag === 3 ? u : null;
  }
  function ia(l) {
    if (l.tag === 13) {
      var a = l.memoizedState;
      if (a === null && (l = l.alternate, l !== null && (a = l.memoizedState)), a !== null) return a.dehydrated;
    }
    return null;
  }
  function Ha(l) {
    if (gl(l) !== l)
      throw Error(b(188));
  }
  function Wl(l) {
    var a = l.alternate;
    if (!a) {
      if (a = gl(l), a === null) throw Error(b(188));
      return a !== l ? null : l;
    }
    for (var u = l, t = a; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (t = e.return, t !== null) {
          u = t;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return Ha(e), l;
          if (n === t) return Ha(e), a;
          n = n.sibling;
        }
        throw Error(b(188));
      }
      if (u.return !== t.return) u = e, t = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, t = n;
            break;
          }
          if (c === t) {
            f = !0, t = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, t = e;
              break;
            }
            if (c === t) {
              f = !0, t = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(b(189));
        }
      }
      if (u.alternate !== t) throw Error(b(190));
    }
    if (u.tag !== 3) throw Error(b(188));
    return u.stateNode.current === u ? l : a;
  }
  function $l(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l;
    for (l = l.child; l !== null; ) {
      if (a = $l(l), a !== null) return a;
      l = l.sibling;
    }
    return null;
  }
  var C = Object.assign, Al = Symbol.for("react.element"), F = Symbol.for("react.transitional.element"), va = Symbol.for("react.portal"), Ql = Symbol.for("react.fragment"), _a = Symbol.for("react.strict_mode"), au = Symbol.for("react.profiler"), he = Symbol.for("react.provider"), vt = Symbol.for("react.consumer"), Zl = Symbol.for("react.context"), Ra = Symbol.for("react.forward_ref"), uu = Symbol.for("react.suspense"), la = Symbol.for("react.suspense_list"), ha = Symbol.for("react.memo"), kl = Symbol.for("react.lazy"), ou = Symbol.for("react.activity"), ye = Symbol.for("react.memo_cache_sentinel"), Mu = Symbol.iterator;
  function xl(l) {
    return l === null || typeof l != "object" ? null : (l = Mu && l[Mu] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var de = Symbol.for("react.client.reference");
  function ht(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === de ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ql:
        return "Fragment";
      case au:
        return "Profiler";
      case _a:
        return "StrictMode";
      case uu:
        return "Suspense";
      case la:
        return "SuspenseList";
      case ou:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case va:
          return "Portal";
        case Zl:
          return (l.displayName || "Context") + ".Provider";
        case vt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ra:
          var a = l.render;
          return l = l.displayName, l || (l = a.displayName || a.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ha:
          return a = l.displayName || null, a !== null ? a : ht(l.type) || "Memo";
        case kl:
          a = l._payload, l = l._init;
          try {
            return ht(l(a));
          } catch {
          }
      }
    return null;
  }
  var ya = Array.isArray, z = Xl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, T = vl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, L = [], J = -1;
  function bl(l) {
    return { current: l };
  }
  function w(l) {
    0 > J || (l.current = L[J], L[J] = null, J--);
  }
  function Z(l, a) {
    J++, L[J] = l.current, l.current = a;
  }
  var el = bl(null), aa = bl(null), Na = bl(null), se = bl(null);
  function me(l, a) {
    switch (Z(Na, a), Z(aa, l), Z(el, null), a.nodeType) {
      case 9:
      case 11:
        l = (l = a.documentElement) && (l = l.namespaceURI) ? b1(l) : 0;
        break;
      default:
        if (l = a.tagName, a = a.namespaceURI)
          a = b1(a), l = z1(a, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    w(el), Z(el, l);
  }
  function Eu() {
    w(el), w(aa), w(Na);
  }
  function qn(l) {
    l.memoizedState !== null && Z(se, l);
    var a = el.current, u = z1(a, l.type);
    a !== u && (Z(aa, l), Z(el, u));
  }
  function Se(l) {
    aa.current === l && (w(el), w(aa)), se.current === l && (w(se), te._currentValue = H);
  }
  var Bn = Object.prototype.hasOwnProperty, Yn = E.unstable_scheduleCallback, Gn = E.unstable_cancelCallback, $1 = E.unstable_shouldYield, k1 = E.unstable_requestPaint, ua = E.unstable_now, F1 = E.unstable_getCurrentPriorityLevel, Fc = E.unstable_ImmediatePriority, Ic = E.unstable_UserBlockingPriority, ge = E.unstable_NormalPriority, I1 = E.unstable_LowPriority, Pc = E.unstable_IdlePriority, P1 = E.log, l3 = E.unstable_setDisableYieldValue, yt = null, Ul = null;
  function qa(l) {
    if (typeof P1 == "function" && l3(l), Ul && typeof Ul.setStrictMode == "function")
      try {
        Ul.setStrictMode(yt, l);
      } catch {
      }
  }
  var Hl = Math.clz32 ? Math.clz32 : t3, a3 = Math.log, u3 = Math.LN2;
  function t3(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (a3(l) / u3 | 0) | 0;
  }
  var be = 256, ze = 4194304;
  function tu(l) {
    var a = l & 42;
    if (a !== 0) return a;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Ae(l, a, u) {
    var t = l.pendingLanes;
    if (t === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = t & 134217727;
    return c !== 0 ? (t = c & ~n, t !== 0 ? e = tu(t) : (f &= c, f !== 0 ? e = tu(f) : u || (u = c & ~l, u !== 0 && (e = tu(u))))) : (c = t & ~n, c !== 0 ? e = tu(c) : f !== 0 ? e = tu(f) : u || (u = t & ~l, u !== 0 && (e = tu(u)))), e === 0 ? 0 : a !== 0 && a !== e && (a & n) === 0 && (n = e & -e, u = a & -a, n >= u || n === 32 && (u & 4194048) !== 0) ? a : e;
  }
  function dt(l, a) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & a) === 0;
  }
  function e3(l, a) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function li() {
    var l = be;
    return be <<= 1, (be & 4194048) === 0 && (be = 256), l;
  }
  function ai() {
    var l = ze;
    return ze <<= 1, (ze & 62914560) === 0 && (ze = 4194304), l;
  }
  function Xn(l) {
    for (var a = [], u = 0; 31 > u; u++) a.push(l);
    return a;
  }
  function st(l, a) {
    l.pendingLanes |= a, a !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function n3(l, a, u, t, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, d = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var S = 31 - Hl(u), A = 1 << S;
      c[S] = 0, i[S] = -1;
      var s = d[S];
      if (s !== null)
        for (d[S] = null, S = 0; S < s.length; S++) {
          var m = s[S];
          m !== null && (m.lane &= -536870913);
        }
      u &= ~A;
    }
    t !== 0 && ui(l, t, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~a));
  }
  function ui(l, a, u) {
    l.pendingLanes |= a, l.suspendedLanes &= ~a;
    var t = 31 - Hl(a);
    l.entangledLanes |= a, l.entanglements[t] = l.entanglements[t] | 1073741824 | u & 4194090;
  }
  function ti(l, a) {
    var u = l.entangledLanes |= a;
    for (l = l.entanglements; u; ) {
      var t = 31 - Hl(u), e = 1 << t;
      e & a | l[t] & a && (l[t] |= a), u &= ~e;
    }
  }
  function Qn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Zn(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ei() {
    var l = T.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Z1(l.type));
  }
  function f3(l, a) {
    var u = T.p;
    try {
      return T.p = l, a();
    } finally {
      T.p = u;
    }
  }
  var Ba = Math.random().toString(36).slice(2), ml = "__reactFiber$" + Ba, Tl = "__reactProps$" + Ba, Du = "__reactContainer$" + Ba, xn = "__reactEvents$" + Ba, c3 = "__reactListeners$" + Ba, i3 = "__reactHandles$" + Ba, ni = "__reactResources$" + Ba, mt = "__reactMarker$" + Ba;
  function jn(l) {
    delete l[ml], delete l[Tl], delete l[xn], delete l[c3], delete l[i3];
  }
  function Ou(l) {
    var a = l[ml];
    if (a) return a;
    for (var u = l.parentNode; u; ) {
      if (a = u[Du] || u[ml]) {
        if (u = a.alternate, a.child !== null || u !== null && u.child !== null)
          for (l = M1(l); l !== null; ) {
            if (u = l[ml]) return u;
            l = M1(l);
          }
        return a;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Uu(l) {
    if (l = l[ml] || l[Du]) {
      var a = l.tag;
      if (a === 5 || a === 6 || a === 13 || a === 26 || a === 27 || a === 3)
        return l;
    }
    return null;
  }
  function St(l) {
    var a = l.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return l.stateNode;
    throw Error(b(33));
  }
  function Hu(l) {
    var a = l[ni];
    return a || (a = l[ni] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), a;
  }
  function nl(l) {
    l[mt] = !0;
  }
  var fi = /* @__PURE__ */ new Set(), ci = {};
  function eu(l, a) {
    _u(l, a), _u(l + "Capture", a);
  }
  function _u(l, a) {
    for (ci[l] = a, l = 0; l < a.length; l++)
      fi.add(a[l]);
  }
  var v3 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), ii = {}, vi = {};
  function h3(l) {
    return Bn.call(vi, l) ? !0 : Bn.call(ii, l) ? !1 : v3.test(l) ? vi[l] = !0 : (ii[l] = !0, !1);
  }
  function Te(l, a, u) {
    if (h3(a))
      if (u === null) l.removeAttribute(a);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(a);
            return;
          case "boolean":
            var t = a.toLowerCase().slice(0, 5);
            if (t !== "data-" && t !== "aria-") {
              l.removeAttribute(a);
              return;
            }
        }
        l.setAttribute(a, "" + u);
      }
  }
  function oe(l, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttribute(a, "" + u);
    }
  }
  function da(l, a, u, t) {
    if (t === null) l.removeAttribute(u);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(a, u, "" + t);
    }
  }
  var Vn, hi;
  function Ru(l) {
    if (Vn === void 0)
      try {
        throw Error();
      } catch (u) {
        var a = u.stack.trim().match(/\n( *(at )?)/);
        Vn = a && a[1] || "", hi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Vn + l + hi;
  }
  var Cn = !1;
  function Kn(l, a) {
    if (!l || Cn) return "";
    Cn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var t = {
        DetermineComponentFrameRoot: function() {
          try {
            if (a) {
              var A = function() {
                throw Error();
              };
              if (Object.defineProperty(A.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(A, []);
                } catch (m) {
                  var s = m;
                }
                Reflect.construct(l, [], A);
              } else {
                try {
                  A.call();
                } catch (m) {
                  s = m;
                }
                l.call(A.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (m) {
                s = m;
              }
              (A = l()) && typeof A.catch == "function" && A.catch(function() {
              });
            }
          } catch (m) {
            if (m && s && typeof m.stack == "string")
              return [m.stack, s.stack];
          }
          return [null, null];
        }
      };
      t.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        t.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        t.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = t.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), d = c.split(`
`);
        for (e = t = 0; t < i.length && !i[t].includes("DetermineComponentFrameRoot"); )
          t++;
        for (; e < d.length && !d[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (t === i.length || e === d.length)
          for (t = i.length - 1, e = d.length - 1; 1 <= t && 0 <= e && i[t] !== d[e]; )
            e--;
        for (; 1 <= t && 0 <= e; t--, e--)
          if (i[t] !== d[e]) {
            if (t !== 1 || e !== 1)
              do
                if (t--, e--, 0 > e || i[t] !== d[e]) {
                  var S = `
` + i[t].replace(" at new ", " at ");
                  return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
                }
              while (1 <= t && 0 <= e);
            break;
          }
      }
    } finally {
      Cn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Ru(u) : "";
  }
  function y3(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ru(l.type);
      case 16:
        return Ru("Lazy");
      case 13:
        return Ru("Suspense");
      case 19:
        return Ru("SuspenseList");
      case 0:
      case 15:
        return Kn(l.type, !1);
      case 11:
        return Kn(l.type.render, !1);
      case 1:
        return Kn(l.type, !0);
      case 31:
        return Ru("Activity");
      default:
        return "";
    }
  }
  function yi(l) {
    try {
      var a = "";
      do
        a += y3(l), l = l.return;
      while (l);
      return a;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function jl(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function di(l) {
    var a = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (a === "checkbox" || a === "radio");
  }
  function d3(l) {
    var a = di(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      a
    ), t = "" + l[a];
    if (!l.hasOwnProperty(a) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var e = u.get, n = u.set;
      return Object.defineProperty(l, a, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          t = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, a, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return t;
        },
        setValue: function(f) {
          t = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[a];
        }
      };
    }
  }
  function Me(l) {
    l._valueTracker || (l._valueTracker = d3(l));
  }
  function si(l) {
    if (!l) return !1;
    var a = l._valueTracker;
    if (!a) return !0;
    var u = a.getValue(), t = "";
    return l && (t = di(l) ? l.checked ? "true" : "false" : l.value), l = t, l !== u ? (a.setValue(l), !0) : !1;
  }
  function Ee(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var s3 = /[\n"\\]/g;
  function Vl(l) {
    return l.replace(
      s3,
      function(a) {
        return "\\" + a.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function pn(l, a, u, t, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), a != null ? f === "number" ? (a === 0 && l.value === "" || l.value != a) && (l.value = "" + jl(a)) : l.value !== "" + jl(a) && (l.value = "" + jl(a)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), a != null ? Ln(l, f, jl(a)) : u != null ? Ln(l, f, jl(u)) : t != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + jl(c) : l.removeAttribute("name");
  }
  function mi(l, a, u, t, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), a != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || a != null))
        return;
      u = u != null ? "" + jl(u) : "", a = a != null ? "" + jl(a) : u, c || a === l.value || (l.value = a), l.defaultValue = a;
    }
    t = t ?? e, t = typeof t != "function" && typeof t != "symbol" && !!t, l.checked = c ? l.checked : !!t, l.defaultChecked = !!t, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f);
  }
  function Ln(l, a, u) {
    a === "number" && Ee(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Nu(l, a, u, t) {
    if (l = l.options, a) {
      a = {};
      for (var e = 0; e < u.length; e++)
        a["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = a.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && t && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + jl(u), a = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, t && (l[e].defaultSelected = !0);
          return;
        }
        a !== null || l[e].disabled || (a = l[e]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Si(l, a, u) {
    if (a != null && (a = "" + jl(a), a !== l.value && (l.value = a), u == null)) {
      l.defaultValue !== a && (l.defaultValue = a);
      return;
    }
    l.defaultValue = u != null ? "" + jl(u) : "";
  }
  function gi(l, a, u, t) {
    if (a == null) {
      if (t != null) {
        if (u != null) throw Error(b(92));
        if (ya(t)) {
          if (1 < t.length) throw Error(b(93));
          t = t[0];
        }
        u = t;
      }
      u == null && (u = ""), a = u;
    }
    u = jl(a), l.defaultValue = u, t = l.textContent, t === u && t !== "" && t !== null && (l.value = t);
  }
  function qu(l, a) {
    if (a) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = a;
        return;
      }
    }
    l.textContent = a;
  }
  var m3 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function bi(l, a, u) {
    var t = a.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? t ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "" : t ? l.setProperty(a, u) : typeof u != "number" || u === 0 || m3.has(a) ? a === "float" ? l.cssFloat = u : l[a] = ("" + u).trim() : l[a] = u + "px";
  }
  function zi(l, a, u) {
    if (a != null && typeof a != "object")
      throw Error(b(62));
    if (l = l.style, u != null) {
      for (var t in u)
        !u.hasOwnProperty(t) || a != null && a.hasOwnProperty(t) || (t.indexOf("--") === 0 ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "");
      for (var e in a)
        t = a[e], a.hasOwnProperty(e) && u[e] !== t && bi(l, e, t);
    } else
      for (var n in a)
        a.hasOwnProperty(n) && bi(l, n, a[n]);
  }
  function Jn(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var S3 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), g3 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function De(l) {
    return g3.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var rn = null;
  function wn(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Bu = null, Yu = null;
  function Ai(l) {
    var a = Uu(l);
    if (a && (l = a.stateNode)) {
      var u = l[Tl] || null;
      l: switch (l = a.stateNode, a.type) {
        case "input":
          if (pn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), a = u.name, u.type === "radio" && a != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + Vl(
                "" + a
              ) + '"][type="radio"]'
            ), a = 0; a < u.length; a++) {
              var t = u[a];
              if (t !== l && t.form === l.form) {
                var e = t[Tl] || null;
                if (!e) throw Error(b(90));
                pn(
                  t,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (a = 0; a < u.length; a++)
              t = u[a], t.form === l.form && si(t);
          }
          break l;
        case "textarea":
          Si(l, u.value, u.defaultValue);
          break l;
        case "select":
          a = u.value, a != null && Nu(l, !!u.multiple, a, !1);
      }
    }
  }
  var Wn = !1;
  function Ti(l, a, u) {
    if (Wn) return l(a, u);
    Wn = !0;
    try {
      var t = l(a);
      return t;
    } finally {
      if (Wn = !1, (Bu !== null || Yu !== null) && (hn(), Bu && (a = Bu, l = Yu, Yu = Bu = null, Ai(a), l)))
        for (a = 0; a < l.length; a++) Ai(l[a]);
    }
  }
  function gt(l, a) {
    var u = l.stateNode;
    if (u === null) return null;
    var t = u[Tl] || null;
    if (t === null) return null;
    u = t[a];
    l: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (t = !t.disabled) || (l = l.type, t = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !t;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        b(231, a, typeof u)
      );
    return u;
  }
  var sa = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $n = !1;
  if (sa)
    try {
      var bt = {};
      Object.defineProperty(bt, "passive", {
        get: function() {
          $n = !0;
        }
      }), window.addEventListener("test", bt, bt), window.removeEventListener("test", bt, bt);
    } catch {
      $n = !1;
    }
  var Ya = null, kn = null, Oe = null;
  function oi() {
    if (Oe) return Oe;
    var l, a = kn, u = a.length, t, e = "value" in Ya ? Ya.value : Ya.textContent, n = e.length;
    for (l = 0; l < u && a[l] === e[l]; l++) ;
    var f = u - l;
    for (t = 1; t <= f && a[u - t] === e[n - t]; t++) ;
    return Oe = e.slice(l, 1 < t ? 1 - t : void 0);
  }
  function Ue(l) {
    var a = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && a === 13 && (l = 13)) : l = a, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function He() {
    return !0;
  }
  function Mi() {
    return !1;
  }
  function ol(l) {
    function a(u, t, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = t, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? He : Mi, this.isPropagationStopped = Mi, this;
    }
    return C(a.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = He);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = He);
      },
      persist: function() {
      },
      isPersistent: He
    }), a;
  }
  var nu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, _e = ol(nu), zt = C({}, nu, { view: 0, detail: 0 }), b3 = ol(zt), Fn, In, At, Re = C({}, zt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: lf,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== At && (At && l.type === "mousemove" ? (Fn = l.screenX - At.screenX, In = l.screenY - At.screenY) : In = Fn = 0, At = l), Fn);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : In;
    }
  }), Ei = ol(Re), z3 = C({}, Re, { dataTransfer: 0 }), A3 = ol(z3), T3 = C({}, zt, { relatedTarget: 0 }), Pn = ol(T3), o3 = C({}, nu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), M3 = ol(o3), E3 = C({}, nu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), D3 = ol(E3), O3 = C({}, nu, { data: 0 }), Di = ol(O3), U3 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, H3 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, _3 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function R3(l) {
    var a = this.nativeEvent;
    return a.getModifierState ? a.getModifierState(l) : (l = _3[l]) ? !!a[l] : !1;
  }
  function lf() {
    return R3;
  }
  var N3 = C({}, zt, {
    key: function(l) {
      if (l.key) {
        var a = U3[l.key] || l.key;
        if (a !== "Unidentified") return a;
      }
      return l.type === "keypress" ? (l = Ue(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? H3[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: lf,
    charCode: function(l) {
      return l.type === "keypress" ? Ue(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Ue(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), q3 = ol(N3), B3 = C({}, Re, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Oi = ol(B3), Y3 = C({}, zt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lf
  }), G3 = ol(Y3), X3 = C({}, nu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Q3 = ol(X3), Z3 = C({}, Re, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), x3 = ol(Z3), j3 = C({}, nu, {
    newState: 0,
    oldState: 0
  }), V3 = ol(j3), C3 = [9, 13, 27, 32], af = sa && "CompositionEvent" in window, Tt = null;
  sa && "documentMode" in document && (Tt = document.documentMode);
  var K3 = sa && "TextEvent" in window && !Tt, Ui = sa && (!af || Tt && 8 < Tt && 11 >= Tt), Hi = " ", _i = !1;
  function Ri(l, a) {
    switch (l) {
      case "keyup":
        return C3.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ni(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Gu = !1;
  function p3(l, a) {
    switch (l) {
      case "compositionend":
        return Ni(a);
      case "keypress":
        return a.which !== 32 ? null : (_i = !0, Hi);
      case "textInput":
        return l = a.data, l === Hi && _i ? null : l;
      default:
        return null;
    }
  }
  function L3(l, a) {
    if (Gu)
      return l === "compositionend" || !af && Ri(l, a) ? (l = oi(), Oe = kn = Ya = null, Gu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
          if (a.char && 1 < a.char.length)
            return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return Ui && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var J3 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function qi(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a === "input" ? !!J3[l.type] : a === "textarea";
  }
  function Bi(l, a, u, t) {
    Bu ? Yu ? Yu.push(t) : Yu = [t] : Bu = t, a = gn(a, "onChange"), 0 < a.length && (u = new _e(
      "onChange",
      "change",
      null,
      u,
      t
    ), l.push({ event: u, listeners: a }));
  }
  var ot = null, Mt = null;
  function r3(l) {
    d1(l, 0);
  }
  function Ne(l) {
    var a = St(l);
    if (si(a)) return l;
  }
  function Yi(l, a) {
    if (l === "change") return a;
  }
  var Gi = !1;
  if (sa) {
    var uf;
    if (sa) {
      var tf = "oninput" in document;
      if (!tf) {
        var Xi = document.createElement("div");
        Xi.setAttribute("oninput", "return;"), tf = typeof Xi.oninput == "function";
      }
      uf = tf;
    } else uf = !1;
    Gi = uf && (!document.documentMode || 9 < document.documentMode);
  }
  function Qi() {
    ot && (ot.detachEvent("onpropertychange", Zi), Mt = ot = null);
  }
  function Zi(l) {
    if (l.propertyName === "value" && Ne(Mt)) {
      var a = [];
      Bi(
        a,
        Mt,
        l,
        wn(l)
      ), Ti(r3, a);
    }
  }
  function w3(l, a, u) {
    l === "focusin" ? (Qi(), ot = a, Mt = u, ot.attachEvent("onpropertychange", Zi)) : l === "focusout" && Qi();
  }
  function W3(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ne(Mt);
  }
  function $3(l, a) {
    if (l === "click") return Ne(a);
  }
  function k3(l, a) {
    if (l === "input" || l === "change")
      return Ne(a);
  }
  function F3(l, a) {
    return l === a && (l !== 0 || 1 / l === 1 / a) || l !== l && a !== a;
  }
  var _l = typeof Object.is == "function" ? Object.is : F3;
  function Et(l, a) {
    if (_l(l, a)) return !0;
    if (typeof l != "object" || l === null || typeof a != "object" || a === null)
      return !1;
    var u = Object.keys(l), t = Object.keys(a);
    if (u.length !== t.length) return !1;
    for (t = 0; t < u.length; t++) {
      var e = u[t];
      if (!Bn.call(a, e) || !_l(l[e], a[e]))
        return !1;
    }
    return !0;
  }
  function xi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ji(l, a) {
    var u = xi(l);
    l = 0;
    for (var t; u; ) {
      if (u.nodeType === 3) {
        if (t = l + u.textContent.length, l <= a && t >= a)
          return { node: u, offset: a - l };
        l = t;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = xi(u);
    }
  }
  function Vi(l, a) {
    return l && a ? l === a ? !0 : l && l.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Vi(l, a.parentNode) : "contains" in l ? l.contains(a) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(a) & 16) : !1 : !1;
  }
  function Ci(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var a = Ee(l.document); a instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof a.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = a.contentWindow;
      else break;
      a = Ee(l.document);
    }
    return a;
  }
  function ef(l) {
    var a = l && l.nodeName && l.nodeName.toLowerCase();
    return a && (a === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || a === "textarea" || l.contentEditable === "true");
  }
  var I3 = sa && "documentMode" in document && 11 >= document.documentMode, Xu = null, nf = null, Dt = null, ff = !1;
  function Ki(l, a, u) {
    var t = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    ff || Xu == null || Xu !== Ee(t) || (t = Xu, "selectionStart" in t && ef(t) ? t = { start: t.selectionStart, end: t.selectionEnd } : (t = (t.ownerDocument && t.ownerDocument.defaultView || window).getSelection(), t = {
      anchorNode: t.anchorNode,
      anchorOffset: t.anchorOffset,
      focusNode: t.focusNode,
      focusOffset: t.focusOffset
    }), Dt && Et(Dt, t) || (Dt = t, t = gn(nf, "onSelect"), 0 < t.length && (a = new _e(
      "onSelect",
      "select",
      null,
      a,
      u
    ), l.push({ event: a, listeners: t }), a.target = Xu)));
  }
  function fu(l, a) {
    var u = {};
    return u[l.toLowerCase()] = a.toLowerCase(), u["Webkit" + l] = "webkit" + a, u["Moz" + l] = "moz" + a, u;
  }
  var Qu = {
    animationend: fu("Animation", "AnimationEnd"),
    animationiteration: fu("Animation", "AnimationIteration"),
    animationstart: fu("Animation", "AnimationStart"),
    transitionrun: fu("Transition", "TransitionRun"),
    transitionstart: fu("Transition", "TransitionStart"),
    transitioncancel: fu("Transition", "TransitionCancel"),
    transitionend: fu("Transition", "TransitionEnd")
  }, cf = {}, pi = {};
  sa && (pi = document.createElement("div").style, "AnimationEvent" in window || (delete Qu.animationend.animation, delete Qu.animationiteration.animation, delete Qu.animationstart.animation), "TransitionEvent" in window || delete Qu.transitionend.transition);
  function cu(l) {
    if (cf[l]) return cf[l];
    if (!Qu[l]) return l;
    var a = Qu[l], u;
    for (u in a)
      if (a.hasOwnProperty(u) && u in pi)
        return cf[l] = a[u];
    return l;
  }
  var Li = cu("animationend"), Ji = cu("animationiteration"), ri = cu("animationstart"), P3 = cu("transitionrun"), lv = cu("transitionstart"), av = cu("transitioncancel"), wi = cu("transitionend"), Wi = /* @__PURE__ */ new Map(), vf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vf.push("scrollEnd");
  function Fl(l, a) {
    Wi.set(l, a), eu(a, [l]);
  }
  var $i = /* @__PURE__ */ new WeakMap();
  function Cl(l, a) {
    if (typeof l == "object" && l !== null) {
      var u = $i.get(l);
      return u !== void 0 ? u : (a = {
        value: l,
        source: a,
        stack: yi(a)
      }, $i.set(l, a), a);
    }
    return {
      value: l,
      source: a,
      stack: yi(a)
    };
  }
  var Kl = [], Zu = 0, hf = 0;
  function qe() {
    for (var l = Zu, a = hf = Zu = 0; a < l; ) {
      var u = Kl[a];
      Kl[a++] = null;
      var t = Kl[a];
      Kl[a++] = null;
      var e = Kl[a];
      Kl[a++] = null;
      var n = Kl[a];
      if (Kl[a++] = null, t !== null && e !== null) {
        var f = t.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), t.pending = e;
      }
      n !== 0 && ki(u, e, n);
    }
  }
  function Be(l, a, u, t) {
    Kl[Zu++] = l, Kl[Zu++] = a, Kl[Zu++] = u, Kl[Zu++] = t, hf |= t, l.lanes |= t, l = l.alternate, l !== null && (l.lanes |= t);
  }
  function yf(l, a, u, t) {
    return Be(l, a, u, t), Ye(l);
  }
  function xu(l, a) {
    return Be(l, null, null, a), Ye(l);
  }
  function ki(l, a, u) {
    l.lanes |= u;
    var t = l.alternate;
    t !== null && (t.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, t = n.alternate, t !== null && (t.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && a !== null && (e = 31 - Hl(u), l = n.hiddenUpdates, t = l[e], t === null ? l[e] = [a] : t.push(a), a.lane = u | 536870912), n) : null;
  }
  function Ye(l) {
    if (50 < $t)
      throw $t = 0, bc = null, Error(b(185));
    for (var a = l.return; a !== null; )
      l = a, a = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ju = {};
  function uv(l, a, u, t) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = t, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Rl(l, a, u, t) {
    return new uv(l, a, u, t);
  }
  function df(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function ma(l, a) {
    var u = l.alternate;
    return u === null ? (u = Rl(
      l.tag,
      a,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = a, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, a = l.dependencies, u.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Fi(l, a) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = a, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, a = u.dependencies, l.dependencies = a === null ? null : {
      lanes: a.lanes,
      firstContext: a.firstContext
    }), l;
  }
  function Ge(l, a, u, t, e, n) {
    var f = 0;
    if (t = l, typeof l == "function") df(l) && (f = 1);
    else if (typeof l == "string")
      f = eh(
        l,
        u,
        el.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case ou:
          return l = Rl(31, u, a, e), l.elementType = ou, l.lanes = n, l;
        case Ql:
          return iu(u.children, e, n, a);
        case _a:
          f = 8, e |= 24;
          break;
        case au:
          return l = Rl(12, u, a, e | 2), l.elementType = au, l.lanes = n, l;
        case uu:
          return l = Rl(13, u, a, e), l.elementType = uu, l.lanes = n, l;
        case la:
          return l = Rl(19, u, a, e), l.elementType = la, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case he:
              case Zl:
                f = 10;
                break l;
              case vt:
                f = 9;
                break l;
              case Ra:
                f = 11;
                break l;
              case ha:
                f = 14;
                break l;
              case kl:
                f = 16, t = null;
                break l;
            }
          f = 29, u = Error(
            b(130, l === null ? "null" : typeof l, "")
          ), t = null;
      }
    return a = Rl(f, u, a, e), a.elementType = l, a.type = t, a.lanes = n, a;
  }
  function iu(l, a, u, t) {
    return l = Rl(7, l, t, a), l.lanes = u, l;
  }
  function sf(l, a, u) {
    return l = Rl(6, l, null, a), l.lanes = u, l;
  }
  function mf(l, a, u) {
    return a = Rl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      a
    ), a.lanes = u, a.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, a;
  }
  var Vu = [], Cu = 0, Xe = null, Qe = 0, pl = [], Ll = 0, vu = null, Sa = 1, ga = "";
  function hu(l, a) {
    Vu[Cu++] = Qe, Vu[Cu++] = Xe, Xe = l, Qe = a;
  }
  function Ii(l, a, u) {
    pl[Ll++] = Sa, pl[Ll++] = ga, pl[Ll++] = vu, vu = l;
    var t = Sa;
    l = ga;
    var e = 32 - Hl(t) - 1;
    t &= ~(1 << e), u += 1;
    var n = 32 - Hl(a) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (t & (1 << f) - 1).toString(32), t >>= f, e -= f, Sa = 1 << 32 - Hl(a) + e | u << e | t, ga = n + l;
    } else
      Sa = 1 << n | u << e | t, ga = l;
  }
  function Sf(l) {
    l.return !== null && (hu(l, 1), Ii(l, 1, 0));
  }
  function gf(l) {
    for (; l === Xe; )
      Xe = Vu[--Cu], Vu[Cu] = null, Qe = Vu[--Cu], Vu[Cu] = null;
    for (; l === vu; )
      vu = pl[--Ll], pl[Ll] = null, ga = pl[--Ll], pl[Ll] = null, Sa = pl[--Ll], pl[Ll] = null;
  }
  var zl = null, $ = null, G = !1, yu = null, ta = !1, bf = Error(b(519));
  function du(l) {
    var a = Error(b(418, ""));
    throw Ht(Cl(a, l)), bf;
  }
  function Pi(l) {
    var a = l.stateNode, u = l.type, t = l.memoizedProps;
    switch (a[ml] = l, a[Tl] = t, u) {
      case "dialog":
        q("cancel", a), q("close", a);
        break;
      case "iframe":
      case "object":
      case "embed":
        q("load", a);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Ft.length; u++)
          q(Ft[u], a);
        break;
      case "source":
        q("error", a);
        break;
      case "img":
      case "image":
      case "link":
        q("error", a), q("load", a);
        break;
      case "details":
        q("toggle", a);
        break;
      case "input":
        q("invalid", a), mi(
          a,
          t.value,
          t.defaultValue,
          t.checked,
          t.defaultChecked,
          t.type,
          t.name,
          !0
        ), Me(a);
        break;
      case "select":
        q("invalid", a);
        break;
      case "textarea":
        q("invalid", a), gi(a, t.value, t.defaultValue, t.children), Me(a);
    }
    u = t.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || a.textContent === "" + u || t.suppressHydrationWarning === !0 || g1(a.textContent, u) ? (t.popover != null && (q("beforetoggle", a), q("toggle", a)), t.onScroll != null && q("scroll", a), t.onScrollEnd != null && q("scrollend", a), t.onClick != null && (a.onclick = bn), a = !0) : a = !1, a || du(l);
  }
  function l0(l) {
    for (zl = l.return; zl; )
      switch (zl.tag) {
        case 5:
        case 13:
          ta = !1;
          return;
        case 27:
        case 3:
          ta = !0;
          return;
        default:
          zl = zl.return;
      }
  }
  function Ot(l) {
    if (l !== zl) return !1;
    if (!G) return l0(l), G = !0, !1;
    var a = l.tag, u;
    if ((u = a !== 3 && a !== 27) && ((u = a === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Yc(l.type, l.memoizedProps)), u = !u), u && $ && du(l), l0(l), a === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(b(317));
      l: {
        for (l = l.nextSibling, a = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (a === 0) {
                $ = Pl(l.nextSibling);
                break l;
              }
              a--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || a++;
          l = l.nextSibling;
        }
        $ = null;
      }
    } else
      a === 27 ? (a = $, $a(l.type) ? (l = Zc, Zc = null, $ = l) : $ = a) : $ = zl ? Pl(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ut() {
    $ = zl = null, G = !1;
  }
  function a0() {
    var l = yu;
    return l !== null && (Dl === null ? Dl = l : Dl.push.apply(
      Dl,
      l
    ), yu = null), l;
  }
  function Ht(l) {
    yu === null ? yu = [l] : yu.push(l);
  }
  var zf = bl(null), su = null, ba = null;
  function Ga(l, a, u) {
    Z(zf, a._currentValue), a._currentValue = u;
  }
  function za(l) {
    l._currentValue = zf.current, w(zf);
  }
  function Af(l, a, u) {
    for (; l !== null; ) {
      var t = l.alternate;
      if ((l.childLanes & a) !== a ? (l.childLanes |= a, t !== null && (t.childLanes |= a)) : t !== null && (t.childLanes & a) !== a && (t.childLanes |= a), l === u) break;
      l = l.return;
    }
  }
  function Tf(l, a, u, t) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < a.length; i++)
            if (c.context === a[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Af(
                n.return,
                u,
                l
              ), t || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(b(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Af(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function _t(l, a, u, t) {
    l = null;
    for (var e = a, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(b(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          _l(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === se.current) {
        if (f = e.alternate, f === null) throw Error(b(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(te) : l = [te]);
      }
      e = e.return;
    }
    l !== null && Tf(
      a,
      l,
      u,
      t
    ), a.flags |= 262144;
  }
  function Ze(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!_l(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function mu(l) {
    su = l, ba = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Sl(l) {
    return u0(su, l);
  }
  function xe(l, a) {
    return su === null && mu(l), u0(l, a);
  }
  function u0(l, a) {
    var u = a._currentValue;
    if (a = { context: a, memoizedValue: u, next: null }, ba === null) {
      if (l === null) throw Error(b(308));
      ba = a, l.dependencies = { lanes: 0, firstContext: a }, l.flags |= 524288;
    } else ba = ba.next = a;
    return u;
  }
  var tv = typeof AbortController < "u" ? AbortController : function() {
    var l = [], a = this.signal = {
      aborted: !1,
      addEventListener: function(u, t) {
        l.push(t);
      }
    };
    this.abort = function() {
      a.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, ev = E.unstable_scheduleCallback, nv = E.unstable_NormalPriority, ul = {
    $$typeof: Zl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function of() {
    return {
      controller: new tv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Rt(l) {
    l.refCount--, l.refCount === 0 && ev(nv, function() {
      l.controller.abort();
    });
  }
  var Nt = null, Mf = 0, Ku = 0, pu = null;
  function fv(l, a) {
    if (Nt === null) {
      var u = Nt = [];
      Mf = 0, Ku = Dc(), pu = {
        status: "pending",
        value: void 0,
        then: function(t) {
          u.push(t);
        }
      };
    }
    return Mf++, a.then(t0, t0), a;
  }
  function t0() {
    if (--Mf === 0 && Nt !== null) {
      pu !== null && (pu.status = "fulfilled");
      var l = Nt;
      Nt = null, Ku = 0, pu = null;
      for (var a = 0; a < l.length; a++) (0, l[a])();
    }
  }
  function cv(l, a) {
    var u = [], t = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        t.status = "fulfilled", t.value = a;
        for (var e = 0; e < u.length; e++) (0, u[e])(a);
      },
      function(e) {
        for (t.status = "rejected", t.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), t;
  }
  var e0 = z.S;
  z.S = function(l, a) {
    typeof a == "object" && a !== null && typeof a.then == "function" && fv(l, a), e0 !== null && e0(l, a);
  };
  var Su = bl(null);
  function Ef() {
    var l = Su.current;
    return l !== null ? l : p.pooledCache;
  }
  function je(l, a) {
    a === null ? Z(Su, Su.current) : Z(Su, a.pool);
  }
  function n0() {
    var l = Ef();
    return l === null ? null : { parent: ul._currentValue, pool: l };
  }
  var qt = Error(b(460)), f0 = Error(b(474)), Ve = Error(b(542)), Df = { then: function() {
  } };
  function c0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ce() {
  }
  function i0(l, a, u) {
    switch (u = l[u], u === void 0 ? l.push(a) : u !== a && (a.then(Ce, Ce), a = u), a.status) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw l = a.reason, h0(l), l;
      default:
        if (typeof a.status == "string") a.then(Ce, Ce);
        else {
          if (l = p, l !== null && 100 < l.shellSuspendCounter)
            throw Error(b(482));
          l = a, l.status = "pending", l.then(
            function(t) {
              if (a.status === "pending") {
                var e = a;
                e.status = "fulfilled", e.value = t;
              }
            },
            function(t) {
              if (a.status === "pending") {
                var e = a;
                e.status = "rejected", e.reason = t;
              }
            }
          );
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw l = a.reason, h0(l), l;
        }
        throw Bt = a, qt;
    }
  }
  var Bt = null;
  function v0() {
    if (Bt === null) throw Error(b(459));
    var l = Bt;
    return Bt = null, l;
  }
  function h0(l) {
    if (l === qt || l === Ve)
      throw Error(b(483));
  }
  var Xa = !1;
  function Of(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Uf(l, a) {
    l = l.updateQueue, a.updateQueue === l && (a.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Qa(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Za(l, a, u) {
    var t = l.updateQueue;
    if (t === null) return null;
    if (t = t.shared, (X & 2) !== 0) {
      var e = t.pending;
      return e === null ? a.next = a : (a.next = e.next, e.next = a), t.pending = a, a = Ye(l), ki(l, null, u), a;
    }
    return Be(l, t, a, u), Ye(l);
  }
  function Yt(l, a, u) {
    if (a = a.updateQueue, a !== null && (a = a.shared, (u & 4194048) !== 0)) {
      var t = a.lanes;
      t &= l.pendingLanes, u |= t, a.lanes = u, ti(l, u);
    }
  }
  function Hf(l, a) {
    var u = l.updateQueue, t = l.alternate;
    if (t !== null && (t = t.updateQueue, u === t)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = a : n = n.next = a;
      } else e = n = a;
      u = {
        baseState: t.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: t.shared,
        callbacks: t.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = a : l.next = a, u.lastBaseUpdate = a;
  }
  var _f = !1;
  function Gt() {
    if (_f) {
      var l = pu;
      if (l !== null) throw l;
    }
  }
  function Xt(l, a, u, t) {
    _f = !1;
    var e = l.updateQueue;
    Xa = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, d = i.next;
      i.next = null, f === null ? n = d : f.next = d, f = i;
      var S = l.alternate;
      S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = d : c.next = d, S.lastBaseUpdate = i));
    }
    if (n !== null) {
      var A = e.baseState;
      f = 0, S = d = i = null, c = n;
      do {
        var s = c.lane & -536870913, m = s !== c.lane;
        if (m ? (B & s) === s : (t & s) === s) {
          s !== 0 && s === Ku && (_f = !0), S !== null && (S = S.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var U = l, D = c;
            s = a;
            var V = u;
            switch (D.tag) {
              case 1:
                if (U = D.payload, typeof U == "function") {
                  A = U.call(V, A, s);
                  break l;
                }
                A = U;
                break l;
              case 3:
                U.flags = U.flags & -65537 | 128;
              case 0:
                if (U = D.payload, s = typeof U == "function" ? U.call(V, A, s) : U, s == null) break l;
                A = C({}, A, s);
                break l;
              case 2:
                Xa = !0;
            }
          }
          s = c.callback, s !== null && (l.flags |= 64, m && (l.flags |= 8192), m = e.callbacks, m === null ? e.callbacks = [s] : m.push(s));
        } else
          m = {
            lane: s,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (d = S = m, i = A) : S = S.next = m, f |= s;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          m = c, c = m.next, m.next = null, e.lastBaseUpdate = m, e.shared.pending = null;
        }
      } while (!0);
      S === null && (i = A), e.baseState = i, e.firstBaseUpdate = d, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), Ja |= f, l.lanes = f, l.memoizedState = A;
    }
  }
  function y0(l, a) {
    if (typeof l != "function")
      throw Error(b(191, l));
    l.call(a);
  }
  function d0(l, a) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        y0(u[l], a);
  }
  var Lu = bl(null), Ke = bl(0);
  function s0(l, a) {
    l = Oa, Z(Ke, l), Z(Lu, a), Oa = l | a.baseLanes;
  }
  function Rf() {
    Z(Ke, Oa), Z(Lu, Lu.current);
  }
  function Nf() {
    Oa = Ke.current, w(Lu), w(Ke);
  }
  var xa = 0, _ = null, x = null, ll = null, pe = !1, Ju = !1, gu = !1, Le = 0, Qt = 0, ru = null, iv = 0;
  function I() {
    throw Error(b(321));
  }
  function qf(l, a) {
    if (a === null) return !1;
    for (var u = 0; u < a.length && u < l.length; u++)
      if (!_l(l[u], a[u])) return !1;
    return !0;
  }
  function Bf(l, a, u, t, e, n) {
    return xa = n, _ = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, z.H = l === null || l.memoizedState === null ? k0 : F0, gu = !1, n = u(t, e), gu = !1, Ju && (n = S0(
      a,
      u,
      t,
      e
    )), m0(l), n;
  }
  function m0(l) {
    z.H = ke;
    var a = x !== null && x.next !== null;
    if (xa = 0, ll = x = _ = null, pe = !1, Qt = 0, ru = null, a) throw Error(b(300));
    l === null || fl || (l = l.dependencies, l !== null && Ze(l) && (fl = !0));
  }
  function S0(l, a, u, t) {
    _ = l;
    var e = 0;
    do {
      if (Ju && (ru = null), Qt = 0, Ju = !1, 25 <= e) throw Error(b(301));
      if (e += 1, ll = x = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      z.H = Sv, n = a(u, t);
    } while (Ju);
    return n;
  }
  function vv() {
    var l = z.H, a = l.useState()[0];
    return a = typeof a.then == "function" ? Zt(a) : a, l = l.useState()[0], (x !== null ? x.memoizedState : null) !== l && (_.flags |= 1024), a;
  }
  function Yf() {
    var l = Le !== 0;
    return Le = 0, l;
  }
  function Gf(l, a, u) {
    a.updateQueue = l.updateQueue, a.flags &= -2053, l.lanes &= ~u;
  }
  function Xf(l) {
    if (pe) {
      for (l = l.memoizedState; l !== null; ) {
        var a = l.queue;
        a !== null && (a.pending = null), l = l.next;
      }
      pe = !1;
    }
    xa = 0, ll = x = _ = null, Ju = !1, Qt = Le = 0, ru = null;
  }
  function Ml() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ll === null ? _.memoizedState = ll = l : ll = ll.next = l, ll;
  }
  function al() {
    if (x === null) {
      var l = _.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = x.next;
    var a = ll === null ? _.memoizedState : ll.next;
    if (a !== null)
      ll = a, x = l;
    else {
      if (l === null)
        throw _.alternate === null ? Error(b(467)) : Error(b(310));
      x = l, l = {
        memoizedState: x.memoizedState,
        baseState: x.baseState,
        baseQueue: x.baseQueue,
        queue: x.queue,
        next: null
      }, ll === null ? _.memoizedState = ll = l : ll = ll.next = l;
    }
    return ll;
  }
  function Qf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zt(l) {
    var a = Qt;
    return Qt += 1, ru === null && (ru = []), l = i0(ru, l, a), a = _, (ll === null ? a.memoizedState : ll.next) === null && (a = a.alternate, z.H = a === null || a.memoizedState === null ? k0 : F0), l;
  }
  function Je(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Zt(l);
      if (l.$$typeof === Zl) return Sl(l);
    }
    throw Error(b(438, String(l)));
  }
  function Zf(l) {
    var a = null, u = _.updateQueue;
    if (u !== null && (a = u.memoCache), a == null) {
      var t = _.alternate;
      t !== null && (t = t.updateQueue, t !== null && (t = t.memoCache, t != null && (a = {
        data: t.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (a == null && (a = { data: [], index: 0 }), u === null && (u = Qf(), _.updateQueue = u), u.memoCache = a, u = a.data[a.index], u === void 0)
      for (u = a.data[a.index] = Array(l), t = 0; t < l; t++)
        u[t] = ye;
    return a.index++, u;
  }
  function Aa(l, a) {
    return typeof a == "function" ? a(l) : a;
  }
  function re(l) {
    var a = al();
    return xf(a, x, l);
  }
  function xf(l, a, u) {
    var t = l.queue;
    if (t === null) throw Error(b(311));
    t.lastRenderedReducer = u;
    var e = l.baseQueue, n = t.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      a.baseQueue = e = n, t.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      a = e.next;
      var c = f = null, i = null, d = a, S = !1;
      do {
        var A = d.lane & -536870913;
        if (A !== d.lane ? (B & A) === A : (xa & A) === A) {
          var s = d.revertLane;
          if (s === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), A === Ku && (S = !0);
          else if ((xa & s) === s) {
            d = d.next, s === Ku && (S = !0);
            continue;
          } else
            A = {
              lane: 0,
              revertLane: d.revertLane,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, i === null ? (c = i = A, f = n) : i = i.next = A, _.lanes |= s, Ja |= s;
          A = d.action, gu && u(n, A), n = d.hasEagerState ? d.eagerState : u(n, A);
        } else
          s = {
            lane: A,
            revertLane: d.revertLane,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, i === null ? (c = i = s, f = n) : i = i.next = s, _.lanes |= A, Ja |= A;
        d = d.next;
      } while (d !== null && d !== a);
      if (i === null ? f = n : i.next = c, !_l(n, l.memoizedState) && (fl = !0, S && (u = pu, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, t.lastRenderedState = n;
    }
    return e === null && (t.lanes = 0), [l.memoizedState, t.dispatch];
  }
  function jf(l) {
    var a = al(), u = a.queue;
    if (u === null) throw Error(b(311));
    u.lastRenderedReducer = l;
    var t = u.dispatch, e = u.pending, n = a.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      _l(n, a.memoizedState) || (fl = !0), a.memoizedState = n, a.baseQueue === null && (a.baseState = n), u.lastRenderedState = n;
    }
    return [n, t];
  }
  function g0(l, a, u) {
    var t = _, e = al(), n = G;
    if (n) {
      if (u === void 0) throw Error(b(407));
      u = u();
    } else u = a();
    var f = !_l(
      (x || e).memoizedState,
      u
    );
    f && (e.memoizedState = u, fl = !0), e = e.queue;
    var c = A0.bind(null, t, e, l);
    if (xt(2048, 8, c, [l]), e.getSnapshot !== a || f || ll !== null && ll.memoizedState.tag & 1) {
      if (t.flags |= 2048, wu(
        9,
        we(),
        z0.bind(
          null,
          t,
          e,
          u,
          a
        ),
        null
      ), p === null) throw Error(b(349));
      n || (xa & 124) !== 0 || b0(t, a, u);
    }
    return u;
  }
  function b0(l, a, u) {
    l.flags |= 16384, l = { getSnapshot: a, value: u }, a = _.updateQueue, a === null ? (a = Qf(), _.updateQueue = a, a.stores = [l]) : (u = a.stores, u === null ? a.stores = [l] : u.push(l));
  }
  function z0(l, a, u, t) {
    a.value = u, a.getSnapshot = t, T0(a) && o0(l);
  }
  function A0(l, a, u) {
    return u(function() {
      T0(a) && o0(l);
    });
  }
  function T0(l) {
    var a = l.getSnapshot;
    l = l.value;
    try {
      var u = a();
      return !_l(l, u);
    } catch {
      return !0;
    }
  }
  function o0(l) {
    var a = xu(l, 2);
    a !== null && Gl(a, l, 2);
  }
  function Vf(l) {
    var a = Ml();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), gu) {
        qa(!0);
        try {
          u();
        } finally {
          qa(!1);
        }
      }
    }
    return a.memoizedState = a.baseState = l, a.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Aa,
      lastRenderedState: l
    }, a;
  }
  function M0(l, a, u, t) {
    return l.baseState = u, xf(
      l,
      x,
      typeof t == "function" ? t : Aa
    );
  }
  function hv(l, a, u, t, e) {
    if ($e(l)) throw Error(b(485));
    if (l = a.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      z.T !== null ? u(!0) : n.isTransition = !1, t(n), u = a.pending, u === null ? (n.next = a.pending = n, E0(a, n)) : (n.next = u.next, a.pending = u.next = n);
    }
  }
  function E0(l, a) {
    var u = a.action, t = a.payload, e = l.state;
    if (a.isTransition) {
      var n = z.T, f = {};
      z.T = f;
      try {
        var c = u(e, t), i = z.S;
        i !== null && i(f, c), D0(l, a, c);
      } catch (d) {
        Cf(l, a, d);
      } finally {
        z.T = n;
      }
    } else
      try {
        n = u(e, t), D0(l, a, n);
      } catch (d) {
        Cf(l, a, d);
      }
  }
  function D0(l, a, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(t) {
        O0(l, a, t);
      },
      function(t) {
        return Cf(l, a, t);
      }
    ) : O0(l, a, u);
  }
  function O0(l, a, u) {
    a.status = "fulfilled", a.value = u, U0(a), l.state = u, a = l.pending, a !== null && (u = a.next, u === a ? l.pending = null : (u = u.next, a.next = u, E0(l, u)));
  }
  function Cf(l, a, u) {
    var t = l.pending;
    if (l.pending = null, t !== null) {
      t = t.next;
      do
        a.status = "rejected", a.reason = u, U0(a), a = a.next;
      while (a !== t);
    }
    l.action = null;
  }
  function U0(l) {
    l = l.listeners;
    for (var a = 0; a < l.length; a++) (0, l[a])();
  }
  function H0(l, a) {
    return a;
  }
  function _0(l, a) {
    if (G) {
      var u = p.formState;
      if (u !== null) {
        l: {
          var t = _;
          if (G) {
            if ($) {
              a: {
                for (var e = $, n = ta; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break a;
                  }
                  if (e = Pl(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break a;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                $ = Pl(
                  e.nextSibling
                ), t = e.data === "F!";
                break l;
              }
            }
            du(t);
          }
          t = !1;
        }
        t && (a = u[0]);
      }
    }
    return u = Ml(), u.memoizedState = u.baseState = a, t = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: H0,
      lastRenderedState: a
    }, u.queue = t, u = w0.bind(
      null,
      _,
      t
    ), t.dispatch = u, t = Vf(!1), n = rf.bind(
      null,
      _,
      !1,
      t.queue
    ), t = Ml(), e = {
      state: a,
      dispatch: null,
      action: l,
      pending: null
    }, t.queue = e, u = hv.bind(
      null,
      _,
      e,
      n,
      u
    ), e.dispatch = u, t.memoizedState = l, [a, u, !1];
  }
  function R0(l) {
    var a = al();
    return N0(a, x, l);
  }
  function N0(l, a, u) {
    if (a = xf(
      l,
      a,
      H0
    )[0], l = re(Aa)[0], typeof a == "object" && a !== null && typeof a.then == "function")
      try {
        var t = Zt(a);
      } catch (f) {
        throw f === qt ? Ve : f;
      }
    else t = a;
    a = al();
    var e = a.queue, n = e.dispatch;
    return u !== a.memoizedState && (_.flags |= 2048, wu(
      9,
      we(),
      yv.bind(null, e, u),
      null
    )), [t, n, l];
  }
  function yv(l, a) {
    l.action = a;
  }
  function q0(l) {
    var a = al(), u = x;
    if (u !== null)
      return N0(a, u, l);
    al(), a = a.memoizedState, u = al();
    var t = u.queue.dispatch;
    return u.memoizedState = l, [a, t, !1];
  }
  function wu(l, a, u, t) {
    return l = { tag: l, create: u, deps: t, inst: a, next: null }, a = _.updateQueue, a === null && (a = Qf(), _.updateQueue = a), u = a.lastEffect, u === null ? a.lastEffect = l.next = l : (t = u.next, u.next = l, l.next = t, a.lastEffect = l), l;
  }
  function we() {
    return { destroy: void 0, resource: void 0 };
  }
  function B0() {
    return al().memoizedState;
  }
  function We(l, a, u, t) {
    var e = Ml();
    t = t === void 0 ? null : t, _.flags |= l, e.memoizedState = wu(
      1 | a,
      we(),
      u,
      t
    );
  }
  function xt(l, a, u, t) {
    var e = al();
    t = t === void 0 ? null : t;
    var n = e.memoizedState.inst;
    x !== null && t !== null && qf(t, x.memoizedState.deps) ? e.memoizedState = wu(a, n, u, t) : (_.flags |= l, e.memoizedState = wu(
      1 | a,
      n,
      u,
      t
    ));
  }
  function Y0(l, a) {
    We(8390656, 8, l, a);
  }
  function G0(l, a) {
    xt(2048, 8, l, a);
  }
  function X0(l, a) {
    return xt(4, 2, l, a);
  }
  function Q0(l, a) {
    return xt(4, 4, l, a);
  }
  function Z0(l, a) {
    if (typeof a == "function") {
      l = l();
      var u = a(l);
      return function() {
        typeof u == "function" ? u() : a(null);
      };
    }
    if (a != null)
      return l = l(), a.current = l, function() {
        a.current = null;
      };
  }
  function x0(l, a, u) {
    u = u != null ? u.concat([l]) : null, xt(4, 4, Z0.bind(null, a, l), u);
  }
  function Kf() {
  }
  function j0(l, a) {
    var u = al();
    a = a === void 0 ? null : a;
    var t = u.memoizedState;
    return a !== null && qf(a, t[1]) ? t[0] : (u.memoizedState = [l, a], l);
  }
  function V0(l, a) {
    var u = al();
    a = a === void 0 ? null : a;
    var t = u.memoizedState;
    if (a !== null && qf(a, t[1]))
      return t[0];
    if (t = l(), gu) {
      qa(!0);
      try {
        l();
      } finally {
        qa(!1);
      }
    }
    return u.memoizedState = [t, a], t;
  }
  function pf(l, a, u) {
    return u === void 0 || (xa & 1073741824) !== 0 ? l.memoizedState = a : (l.memoizedState = u, l = p2(), _.lanes |= l, Ja |= l, u);
  }
  function C0(l, a, u, t) {
    return _l(u, a) ? u : Lu.current !== null ? (l = pf(l, u, t), _l(l, a) || (fl = !0), l) : (xa & 42) === 0 ? (fl = !0, l.memoizedState = u) : (l = p2(), _.lanes |= l, Ja |= l, a);
  }
  function K0(l, a, u, t, e) {
    var n = T.p;
    T.p = n !== 0 && 8 > n ? n : 8;
    var f = z.T, c = {};
    z.T = c, rf(l, !1, a, u);
    try {
      var i = e(), d = z.S;
      if (d !== null && d(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var S = cv(
          i,
          t
        );
        jt(
          l,
          a,
          S,
          Yl(l)
        );
      } else
        jt(
          l,
          a,
          t,
          Yl(l)
        );
    } catch (A) {
      jt(
        l,
        a,
        { then: function() {
        }, status: "rejected", reason: A },
        Yl()
      );
    } finally {
      T.p = n, z.T = f;
    }
  }
  function dv() {
  }
  function Lf(l, a, u, t) {
    if (l.tag !== 5) throw Error(b(476));
    var e = p0(l).queue;
    K0(
      l,
      e,
      a,
      H,
      u === null ? dv : function() {
        return L0(l), u(t);
      }
    );
  }
  function p0(l) {
    var a = l.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: H,
      baseState: H,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Aa,
        lastRenderedState: H
      },
      next: null
    };
    var u = {};
    return a.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Aa,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = a, l = l.alternate, l !== null && (l.memoizedState = a), a;
  }
  function L0(l) {
    var a = p0(l).next.queue;
    jt(l, a, {}, Yl());
  }
  function Jf() {
    return Sl(te);
  }
  function J0() {
    return al().memoizedState;
  }
  function r0() {
    return al().memoizedState;
  }
  function sv(l) {
    for (var a = l.return; a !== null; ) {
      switch (a.tag) {
        case 24:
        case 3:
          var u = Yl();
          l = Qa(u);
          var t = Za(a, l, u);
          t !== null && (Gl(t, a, u), Yt(t, a, u)), a = { cache: of() }, l.payload = a;
          return;
      }
      a = a.return;
    }
  }
  function mv(l, a, u) {
    var t = Yl();
    u = {
      lane: t,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $e(l) ? W0(a, u) : (u = yf(l, a, u, t), u !== null && (Gl(u, l, t), $0(u, a, t)));
  }
  function w0(l, a, u) {
    var t = Yl();
    jt(l, a, u, t);
  }
  function jt(l, a, u, t) {
    var e = {
      lane: t,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if ($e(l)) W0(a, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = a.lastRenderedReducer, n !== null))
        try {
          var f = a.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, _l(c, f))
            return Be(l, a, e, 0), p === null && qe(), !1;
        } catch {
        } finally {
        }
      if (u = yf(l, a, e, t), u !== null)
        return Gl(u, l, t), $0(u, a, t), !0;
    }
    return !1;
  }
  function rf(l, a, u, t) {
    if (t = {
      lane: 2,
      revertLane: Dc(),
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, $e(l)) {
      if (a) throw Error(b(479));
    } else
      a = yf(
        l,
        u,
        t,
        2
      ), a !== null && Gl(a, l, 2);
  }
  function $e(l) {
    var a = l.alternate;
    return l === _ || a !== null && a === _;
  }
  function W0(l, a) {
    Ju = pe = !0;
    var u = l.pending;
    u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
  }
  function $0(l, a, u) {
    if ((u & 4194048) !== 0) {
      var t = a.lanes;
      t &= l.pendingLanes, u |= t, a.lanes = u, ti(l, u);
    }
  }
  var ke = {
    readContext: Sl,
    use: Je,
    useCallback: I,
    useContext: I,
    useEffect: I,
    useImperativeHandle: I,
    useLayoutEffect: I,
    useInsertionEffect: I,
    useMemo: I,
    useReducer: I,
    useRef: I,
    useState: I,
    useDebugValue: I,
    useDeferredValue: I,
    useTransition: I,
    useSyncExternalStore: I,
    useId: I,
    useHostTransitionStatus: I,
    useFormState: I,
    useActionState: I,
    useOptimistic: I,
    useMemoCache: I,
    useCacheRefresh: I
  }, k0 = {
    readContext: Sl,
    use: Je,
    useCallback: function(l, a) {
      return Ml().memoizedState = [
        l,
        a === void 0 ? null : a
      ], l;
    },
    useContext: Sl,
    useEffect: Y0,
    useImperativeHandle: function(l, a, u) {
      u = u != null ? u.concat([l]) : null, We(
        4194308,
        4,
        Z0.bind(null, a, l),
        u
      );
    },
    useLayoutEffect: function(l, a) {
      return We(4194308, 4, l, a);
    },
    useInsertionEffect: function(l, a) {
      We(4, 2, l, a);
    },
    useMemo: function(l, a) {
      var u = Ml();
      a = a === void 0 ? null : a;
      var t = l();
      if (gu) {
        qa(!0);
        try {
          l();
        } finally {
          qa(!1);
        }
      }
      return u.memoizedState = [t, a], t;
    },
    useReducer: function(l, a, u) {
      var t = Ml();
      if (u !== void 0) {
        var e = u(a);
        if (gu) {
          qa(!0);
          try {
            u(a);
          } finally {
            qa(!1);
          }
        }
      } else e = a;
      return t.memoizedState = t.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, t.queue = l, l = l.dispatch = mv.bind(
        null,
        _,
        l
      ), [t.memoizedState, l];
    },
    useRef: function(l) {
      var a = Ml();
      return l = { current: l }, a.memoizedState = l;
    },
    useState: function(l) {
      l = Vf(l);
      var a = l.queue, u = w0.bind(null, _, a);
      return a.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Kf,
    useDeferredValue: function(l, a) {
      var u = Ml();
      return pf(u, l, a);
    },
    useTransition: function() {
      var l = Vf(!1);
      return l = K0.bind(
        null,
        _,
        l.queue,
        !0,
        !1
      ), Ml().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, a, u) {
      var t = _, e = Ml();
      if (G) {
        if (u === void 0)
          throw Error(b(407));
        u = u();
      } else {
        if (u = a(), p === null)
          throw Error(b(349));
        (B & 124) !== 0 || b0(t, a, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: a };
      return e.queue = n, Y0(A0.bind(null, t, n, l), [
        l
      ]), t.flags |= 2048, wu(
        9,
        we(),
        z0.bind(
          null,
          t,
          n,
          u,
          a
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Ml(), a = p.identifierPrefix;
      if (G) {
        var u = ga, t = Sa;
        u = (t & ~(1 << 32 - Hl(t) - 1)).toString(32) + u, a = "«" + a + "R" + u, u = Le++, 0 < u && (a += "H" + u.toString(32)), a += "»";
      } else
        u = iv++, a = "«" + a + "r" + u.toString(32) + "»";
      return l.memoizedState = a;
    },
    useHostTransitionStatus: Jf,
    useFormState: _0,
    useActionState: _0,
    useOptimistic: function(l) {
      var a = Ml();
      a.memoizedState = a.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return a.queue = u, a = rf.bind(
        null,
        _,
        !0,
        u
      ), u.dispatch = a, [l, a];
    },
    useMemoCache: Zf,
    useCacheRefresh: function() {
      return Ml().memoizedState = sv.bind(
        null,
        _
      );
    }
  }, F0 = {
    readContext: Sl,
    use: Je,
    useCallback: j0,
    useContext: Sl,
    useEffect: G0,
    useImperativeHandle: x0,
    useInsertionEffect: X0,
    useLayoutEffect: Q0,
    useMemo: V0,
    useReducer: re,
    useRef: B0,
    useState: function() {
      return re(Aa);
    },
    useDebugValue: Kf,
    useDeferredValue: function(l, a) {
      var u = al();
      return C0(
        u,
        x.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = re(Aa)[0], a = al().memoizedState;
      return [
        typeof l == "boolean" ? l : Zt(l),
        a
      ];
    },
    useSyncExternalStore: g0,
    useId: J0,
    useHostTransitionStatus: Jf,
    useFormState: R0,
    useActionState: R0,
    useOptimistic: function(l, a) {
      var u = al();
      return M0(u, x, l, a);
    },
    useMemoCache: Zf,
    useCacheRefresh: r0
  }, Sv = {
    readContext: Sl,
    use: Je,
    useCallback: j0,
    useContext: Sl,
    useEffect: G0,
    useImperativeHandle: x0,
    useInsertionEffect: X0,
    useLayoutEffect: Q0,
    useMemo: V0,
    useReducer: jf,
    useRef: B0,
    useState: function() {
      return jf(Aa);
    },
    useDebugValue: Kf,
    useDeferredValue: function(l, a) {
      var u = al();
      return x === null ? pf(u, l, a) : C0(
        u,
        x.memoizedState,
        l,
        a
      );
    },
    useTransition: function() {
      var l = jf(Aa)[0], a = al().memoizedState;
      return [
        typeof l == "boolean" ? l : Zt(l),
        a
      ];
    },
    useSyncExternalStore: g0,
    useId: J0,
    useHostTransitionStatus: Jf,
    useFormState: q0,
    useActionState: q0,
    useOptimistic: function(l, a) {
      var u = al();
      return x !== null ? M0(u, x, l, a) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Zf,
    useCacheRefresh: r0
  }, Wu = null, Vt = 0;
  function Fe(l) {
    var a = Vt;
    return Vt += 1, Wu === null && (Wu = []), i0(Wu, l, a);
  }
  function Ct(l, a) {
    a = a.props.ref, l.ref = a !== void 0 ? a : null;
  }
  function Ie(l, a) {
    throw a.$$typeof === Al ? Error(b(525)) : (l = Object.prototype.toString.call(a), Error(
      b(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : l
      )
    ));
  }
  function I0(l) {
    var a = l._init;
    return a(l._payload);
  }
  function P0(l) {
    function a(h, v) {
      if (l) {
        var y = h.deletions;
        y === null ? (h.deletions = [v], h.flags |= 16) : y.push(v);
      }
    }
    function u(h, v) {
      if (!l) return null;
      for (; v !== null; )
        a(h, v), v = v.sibling;
      return null;
    }
    function t(h) {
      for (var v = /* @__PURE__ */ new Map(); h !== null; )
        h.key !== null ? v.set(h.key, h) : v.set(h.index, h), h = h.sibling;
      return v;
    }
    function e(h, v) {
      return h = ma(h, v), h.index = 0, h.sibling = null, h;
    }
    function n(h, v, y) {
      return h.index = y, l ? (y = h.alternate, y !== null ? (y = y.index, y < v ? (h.flags |= 67108866, v) : y) : (h.flags |= 67108866, v)) : (h.flags |= 1048576, v);
    }
    function f(h) {
      return l && h.alternate === null && (h.flags |= 67108866), h;
    }
    function c(h, v, y, g) {
      return v === null || v.tag !== 6 ? (v = sf(y, h.mode, g), v.return = h, v) : (v = e(v, y), v.return = h, v);
    }
    function i(h, v, y, g) {
      var o = y.type;
      return o === Ql ? S(
        h,
        v,
        y.props.children,
        g,
        y.key
      ) : v !== null && (v.elementType === o || typeof o == "object" && o !== null && o.$$typeof === kl && I0(o) === v.type) ? (v = e(v, y.props), Ct(v, y), v.return = h, v) : (v = Ge(
        y.type,
        y.key,
        y.props,
        null,
        h.mode,
        g
      ), Ct(v, y), v.return = h, v);
    }
    function d(h, v, y, g) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== y.containerInfo || v.stateNode.implementation !== y.implementation ? (v = mf(y, h.mode, g), v.return = h, v) : (v = e(v, y.children || []), v.return = h, v);
    }
    function S(h, v, y, g, o) {
      return v === null || v.tag !== 7 ? (v = iu(
        y,
        h.mode,
        g,
        o
      ), v.return = h, v) : (v = e(v, y), v.return = h, v);
    }
    function A(h, v, y) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = sf(
          "" + v,
          h.mode,
          y
        ), v.return = h, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case F:
            return y = Ge(
              v.type,
              v.key,
              v.props,
              null,
              h.mode,
              y
            ), Ct(y, v), y.return = h, y;
          case va:
            return v = mf(
              v,
              h.mode,
              y
            ), v.return = h, v;
          case kl:
            var g = v._init;
            return v = g(v._payload), A(h, v, y);
        }
        if (ya(v) || xl(v))
          return v = iu(
            v,
            h.mode,
            y,
            null
          ), v.return = h, v;
        if (typeof v.then == "function")
          return A(h, Fe(v), y);
        if (v.$$typeof === Zl)
          return A(
            h,
            xe(h, v),
            y
          );
        Ie(h, v);
      }
      return null;
    }
    function s(h, v, y, g) {
      var o = v !== null ? v.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return o !== null ? null : c(h, v, "" + y, g);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case F:
            return y.key === o ? i(h, v, y, g) : null;
          case va:
            return y.key === o ? d(h, v, y, g) : null;
          case kl:
            return o = y._init, y = o(y._payload), s(h, v, y, g);
        }
        if (ya(y) || xl(y))
          return o !== null ? null : S(h, v, y, g, null);
        if (typeof y.then == "function")
          return s(
            h,
            v,
            Fe(y),
            g
          );
        if (y.$$typeof === Zl)
          return s(
            h,
            v,
            xe(h, y),
            g
          );
        Ie(h, y);
      }
      return null;
    }
    function m(h, v, y, g, o) {
      if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint")
        return h = h.get(y) || null, c(v, h, "" + g, o);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case F:
            return h = h.get(
              g.key === null ? y : g.key
            ) || null, i(v, h, g, o);
          case va:
            return h = h.get(
              g.key === null ? y : g.key
            ) || null, d(v, h, g, o);
          case kl:
            var R = g._init;
            return g = R(g._payload), m(
              h,
              v,
              y,
              g,
              o
            );
        }
        if (ya(g) || xl(g))
          return h = h.get(y) || null, S(v, h, g, o, null);
        if (typeof g.then == "function")
          return m(
            h,
            v,
            y,
            Fe(g),
            o
          );
        if (g.$$typeof === Zl)
          return m(
            h,
            v,
            y,
            xe(v, g),
            o
          );
        Ie(v, g);
      }
      return null;
    }
    function U(h, v, y, g) {
      for (var o = null, R = null, M = v, O = v = 0, il = null; M !== null && O < y.length; O++) {
        M.index > O ? (il = M, M = null) : il = M.sibling;
        var Y = s(
          h,
          M,
          y[O],
          g
        );
        if (Y === null) {
          M === null && (M = il);
          break;
        }
        l && M && Y.alternate === null && a(h, M), v = n(Y, v, O), R === null ? o = Y : R.sibling = Y, R = Y, M = il;
      }
      if (O === y.length)
        return u(h, M), G && hu(h, O), o;
      if (M === null) {
        for (; O < y.length; O++)
          M = A(h, y[O], g), M !== null && (v = n(
            M,
            v,
            O
          ), R === null ? o = M : R.sibling = M, R = M);
        return G && hu(h, O), o;
      }
      for (M = t(M); O < y.length; O++)
        il = m(
          M,
          h,
          O,
          y[O],
          g
        ), il !== null && (l && il.alternate !== null && M.delete(
          il.key === null ? O : il.key
        ), v = n(
          il,
          v,
          O
        ), R === null ? o = il : R.sibling = il, R = il);
      return l && M.forEach(function(lu) {
        return a(h, lu);
      }), G && hu(h, O), o;
    }
    function D(h, v, y, g) {
      if (y == null) throw Error(b(151));
      for (var o = null, R = null, M = v, O = v = 0, il = null, Y = y.next(); M !== null && !Y.done; O++, Y = y.next()) {
        M.index > O ? (il = M, M = null) : il = M.sibling;
        var lu = s(h, M, Y.value, g);
        if (lu === null) {
          M === null && (M = il);
          break;
        }
        l && M && lu.alternate === null && a(h, M), v = n(lu, v, O), R === null ? o = lu : R.sibling = lu, R = lu, M = il;
      }
      if (Y.done)
        return u(h, M), G && hu(h, O), o;
      if (M === null) {
        for (; !Y.done; O++, Y = y.next())
          Y = A(h, Y.value, g), Y !== null && (v = n(Y, v, O), R === null ? o = Y : R.sibling = Y, R = Y);
        return G && hu(h, O), o;
      }
      for (M = t(M); !Y.done; O++, Y = y.next())
        Y = m(M, h, O, Y.value, g), Y !== null && (l && Y.alternate !== null && M.delete(Y.key === null ? O : Y.key), v = n(Y, v, O), R === null ? o = Y : R.sibling = Y, R = Y);
      return l && M.forEach(function(gh) {
        return a(h, gh);
      }), G && hu(h, O), o;
    }
    function V(h, v, y, g) {
      if (typeof y == "object" && y !== null && y.type === Ql && y.key === null && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case F:
            l: {
              for (var o = y.key; v !== null; ) {
                if (v.key === o) {
                  if (o = y.type, o === Ql) {
                    if (v.tag === 7) {
                      u(
                        h,
                        v.sibling
                      ), g = e(
                        v,
                        y.props.children
                      ), g.return = h, h = g;
                      break l;
                    }
                  } else if (v.elementType === o || typeof o == "object" && o !== null && o.$$typeof === kl && I0(o) === v.type) {
                    u(
                      h,
                      v.sibling
                    ), g = e(v, y.props), Ct(g, y), g.return = h, h = g;
                    break l;
                  }
                  u(h, v);
                  break;
                } else a(h, v);
                v = v.sibling;
              }
              y.type === Ql ? (g = iu(
                y.props.children,
                h.mode,
                g,
                y.key
              ), g.return = h, h = g) : (g = Ge(
                y.type,
                y.key,
                y.props,
                null,
                h.mode,
                g
              ), Ct(g, y), g.return = h, h = g);
            }
            return f(h);
          case va:
            l: {
              for (o = y.key; v !== null; ) {
                if (v.key === o)
                  if (v.tag === 4 && v.stateNode.containerInfo === y.containerInfo && v.stateNode.implementation === y.implementation) {
                    u(
                      h,
                      v.sibling
                    ), g = e(v, y.children || []), g.return = h, h = g;
                    break l;
                  } else {
                    u(h, v);
                    break;
                  }
                else a(h, v);
                v = v.sibling;
              }
              g = mf(y, h.mode, g), g.return = h, h = g;
            }
            return f(h);
          case kl:
            return o = y._init, y = o(y._payload), V(
              h,
              v,
              y,
              g
            );
        }
        if (ya(y))
          return U(
            h,
            v,
            y,
            g
          );
        if (xl(y)) {
          if (o = xl(y), typeof o != "function") throw Error(b(150));
          return y = o.call(y), D(
            h,
            v,
            y,
            g
          );
        }
        if (typeof y.then == "function")
          return V(
            h,
            v,
            Fe(y),
            g
          );
        if (y.$$typeof === Zl)
          return V(
            h,
            v,
            xe(h, y),
            g
          );
        Ie(h, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, v !== null && v.tag === 6 ? (u(h, v.sibling), g = e(v, y), g.return = h, h = g) : (u(h, v), g = sf(y, h.mode, g), g.return = h, h = g), f(h)) : u(h, v);
    }
    return function(h, v, y, g) {
      try {
        Vt = 0;
        var o = V(
          h,
          v,
          y,
          g
        );
        return Wu = null, o;
      } catch (M) {
        if (M === qt || M === Ve) throw M;
        var R = Rl(29, M, null, h.mode);
        return R.lanes = g, R.return = h, R;
      } finally {
      }
    };
  }
  var $u = P0(!0), l2 = P0(!1), Jl = bl(null), ea = null;
  function ja(l) {
    var a = l.alternate;
    Z(tl, tl.current & 1), Z(Jl, l), ea === null && (a === null || Lu.current !== null || a.memoizedState !== null) && (ea = l);
  }
  function a2(l) {
    if (l.tag === 22) {
      if (Z(tl, tl.current), Z(Jl, l), ea === null) {
        var a = l.alternate;
        a !== null && a.memoizedState !== null && (ea = l);
      }
    } else Va();
  }
  function Va() {
    Z(tl, tl.current), Z(Jl, Jl.current);
  }
  function Ta(l) {
    w(Jl), ea === l && (ea = null), w(tl);
  }
  var tl = bl(0);
  function Pe(l) {
    for (var a = l; a !== null; ) {
      if (a.tag === 13) {
        var u = a.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || Qc(u)))
          return a;
      } else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === l) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === l) return null;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
    return null;
  }
  function wf(l, a, u, t) {
    a = l.memoizedState, u = u(t, a), u = u == null ? a : C({}, a, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Wf = {
    enqueueSetState: function(l, a, u) {
      l = l._reactInternals;
      var t = Yl(), e = Qa(t);
      e.payload = a, u != null && (e.callback = u), a = Za(l, e, t), a !== null && (Gl(a, l, t), Yt(a, l, t));
    },
    enqueueReplaceState: function(l, a, u) {
      l = l._reactInternals;
      var t = Yl(), e = Qa(t);
      e.tag = 1, e.payload = a, u != null && (e.callback = u), a = Za(l, e, t), a !== null && (Gl(a, l, t), Yt(a, l, t));
    },
    enqueueForceUpdate: function(l, a) {
      l = l._reactInternals;
      var u = Yl(), t = Qa(u);
      t.tag = 2, a != null && (t.callback = a), a = Za(l, t, u), a !== null && (Gl(a, l, u), Yt(a, l, u));
    }
  };
  function u2(l, a, u, t, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(t, n, f) : a.prototype && a.prototype.isPureReactComponent ? !Et(u, t) || !Et(e, n) : !0;
  }
  function t2(l, a, u, t) {
    l = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(u, t), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(u, t), a.state !== l && Wf.enqueueReplaceState(a, a.state, null);
  }
  function bu(l, a) {
    var u = a;
    if ("ref" in a) {
      u = {};
      for (var t in a)
        t !== "ref" && (u[t] = a[t]);
    }
    if (l = l.defaultProps) {
      u === a && (u = C({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  var ln = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var a = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(a)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function e2(l) {
    ln(l);
  }
  function n2(l) {
    console.error(l);
  }
  function f2(l) {
    ln(l);
  }
  function an(l, a) {
    try {
      var u = l.onUncaughtError;
      u(a.value, { componentStack: a.stack });
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  function c2(l, a, u) {
    try {
      var t = l.onCaughtError;
      t(u.value, {
        componentStack: u.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function $f(l, a, u) {
    return u = Qa(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      an(l, a);
    }, u;
  }
  function i2(l) {
    return l = Qa(l), l.tag = 3, l;
  }
  function v2(l, a, u, t) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = t.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        c2(a, u, t);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      c2(a, u, t), typeof e != "function" && (ra === null ? ra = /* @__PURE__ */ new Set([this]) : ra.add(this));
      var c = t.stack;
      this.componentDidCatch(t.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function gv(l, a, u, t, e) {
    if (u.flags |= 32768, t !== null && typeof t == "object" && typeof t.then == "function") {
      if (a = u.alternate, a !== null && _t(
        a,
        u,
        e,
        !0
      ), u = Jl.current, u !== null) {
        switch (u.tag) {
          case 13:
            return ea === null ? Ac() : u.alternate === null && k === 0 && (k = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, t === Df ? u.flags |= 16384 : (a = u.updateQueue, a === null ? u.updateQueue = /* @__PURE__ */ new Set([t]) : a.add(t), oc(l, t, e)), !1;
          case 22:
            return u.flags |= 65536, t === Df ? u.flags |= 16384 : (a = u.updateQueue, a === null ? (a = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([t])
            }, u.updateQueue = a) : (u = a.retryQueue, u === null ? a.retryQueue = /* @__PURE__ */ new Set([t]) : u.add(t)), oc(l, t, e)), !1;
        }
        throw Error(b(435, u.tag));
      }
      return oc(l, t, e), Ac(), !1;
    }
    if (G)
      return a = Jl.current, a !== null ? ((a.flags & 65536) === 0 && (a.flags |= 256), a.flags |= 65536, a.lanes = e, t !== bf && (l = Error(b(422), { cause: t }), Ht(Cl(l, u)))) : (t !== bf && (a = Error(b(423), {
        cause: t
      }), Ht(
        Cl(a, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, t = Cl(t, u), e = $f(
        l.stateNode,
        t,
        e
      ), Hf(l, e), k !== 4 && (k = 2)), !1;
    var n = Error(b(520), { cause: t });
    if (n = Cl(n, u), Wt === null ? Wt = [n] : Wt.push(n), k !== 4 && (k = 2), a === null) return !0;
    t = Cl(t, u), u = a;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = $f(u.stateNode, t, l), Hf(u, l), !1;
        case 1:
          if (a = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof a.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ra === null || !ra.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = i2(e), v2(
              e,
              l,
              u,
              t
            ), Hf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var h2 = Error(b(461)), fl = !1;
  function yl(l, a, u, t) {
    a.child = l === null ? l2(a, null, u, t) : $u(
      a,
      l.child,
      u,
      t
    );
  }
  function y2(l, a, u, t, e) {
    u = u.render;
    var n = a.ref;
    if ("ref" in t) {
      var f = {};
      for (var c in t)
        c !== "ref" && (f[c] = t[c]);
    } else f = t;
    return mu(a), t = Bf(
      l,
      a,
      u,
      f,
      n,
      e
    ), c = Yf(), l !== null && !fl ? (Gf(l, a, e), oa(l, a, e)) : (G && c && Sf(a), a.flags |= 1, yl(l, a, t, e), a.child);
  }
  function d2(l, a, u, t, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !df(n) && n.defaultProps === void 0 && u.compare === null ? (a.tag = 15, a.type = n, s2(
        l,
        a,
        n,
        t,
        e
      )) : (l = Ge(
        u.type,
        null,
        t,
        a,
        a.mode,
        e
      ), l.ref = a.ref, l.return = a, a.child = l);
    }
    if (n = l.child, !tc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Et, u(f, t) && l.ref === a.ref)
        return oa(l, a, e);
    }
    return a.flags |= 1, l = ma(n, t), l.ref = a.ref, l.return = a, a.child = l;
  }
  function s2(l, a, u, t, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Et(n, t) && l.ref === a.ref)
        if (fl = !1, a.pendingProps = t = n, tc(l, e))
          (l.flags & 131072) !== 0 && (fl = !0);
        else
          return a.lanes = l.lanes, oa(l, a, e);
    }
    return kf(
      l,
      a,
      u,
      t,
      e
    );
  }
  function m2(l, a, u) {
    var t = a.pendingProps, e = t.children, n = l !== null ? l.memoizedState : null;
    if (t.mode === "hidden") {
      if ((a.flags & 128) !== 0) {
        if (t = n !== null ? n.baseLanes | u : u, l !== null) {
          for (e = a.child = l.child, n = 0; e !== null; )
            n = n | e.lanes | e.childLanes, e = e.sibling;
          a.childLanes = n & ~t;
        } else a.childLanes = 0, a.child = null;
        return S2(
          l,
          a,
          t,
          u
        );
      }
      if ((u & 536870912) !== 0)
        a.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && je(
          a,
          n !== null ? n.cachePool : null
        ), n !== null ? s0(a, n) : Rf(), a2(a);
      else
        return a.lanes = a.childLanes = 536870912, S2(
          l,
          a,
          n !== null ? n.baseLanes | u : u,
          u
        );
    } else
      n !== null ? (je(a, n.cachePool), s0(a, n), Va(), a.memoizedState = null) : (l !== null && je(a, null), Rf(), Va());
    return yl(l, a, e, u), a.child;
  }
  function S2(l, a, u, t) {
    var e = Ef();
    return e = e === null ? null : { parent: ul._currentValue, pool: e }, a.memoizedState = {
      baseLanes: u,
      cachePool: e
    }, l !== null && je(a, null), Rf(), a2(a), l !== null && _t(l, a, t, !0), null;
  }
  function un(l, a) {
    var u = a.ref;
    if (u === null)
      l !== null && l.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(b(284));
      (l === null || l.ref !== u) && (a.flags |= 4194816);
    }
  }
  function kf(l, a, u, t, e) {
    return mu(a), u = Bf(
      l,
      a,
      u,
      t,
      void 0,
      e
    ), t = Yf(), l !== null && !fl ? (Gf(l, a, e), oa(l, a, e)) : (G && t && Sf(a), a.flags |= 1, yl(l, a, u, e), a.child);
  }
  function g2(l, a, u, t, e, n) {
    return mu(a), a.updateQueue = null, u = S0(
      a,
      t,
      u,
      e
    ), m0(l), t = Yf(), l !== null && !fl ? (Gf(l, a, n), oa(l, a, n)) : (G && t && Sf(a), a.flags |= 1, yl(l, a, u, n), a.child);
  }
  function b2(l, a, u, t, e) {
    if (mu(a), a.stateNode === null) {
      var n = ju, f = u.contextType;
      typeof f == "object" && f !== null && (n = Sl(f)), n = new u(t, n), a.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = Wf, a.stateNode = n, n._reactInternals = a, n = a.stateNode, n.props = t, n.state = a.memoizedState, n.refs = {}, Of(a), f = u.contextType, n.context = typeof f == "object" && f !== null ? Sl(f) : ju, n.state = a.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (wf(
        a,
        u,
        f,
        t
      ), n.state = a.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && Wf.enqueueReplaceState(n, n.state, null), Xt(a, t, n, e), Gt(), n.state = a.memoizedState), typeof n.componentDidMount == "function" && (a.flags |= 4194308), t = !0;
    } else if (l === null) {
      n = a.stateNode;
      var c = a.memoizedProps, i = bu(u, c);
      n.props = i;
      var d = n.context, S = u.contextType;
      f = ju, typeof S == "object" && S !== null && (f = Sl(S));
      var A = u.getDerivedStateFromProps;
      S = typeof A == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = a.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || d !== f) && t2(
        a,
        n,
        t,
        f
      ), Xa = !1;
      var s = a.memoizedState;
      n.state = s, Xt(a, t, n, e), Gt(), d = a.memoizedState, c || s !== d || Xa ? (typeof A == "function" && (wf(
        a,
        u,
        A,
        t
      ), d = a.memoizedState), (i = Xa || u2(
        a,
        u,
        i,
        t,
        s,
        d,
        f
      )) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = t, a.memoizedState = d), n.props = t, n.state = d, n.context = f, t = i) : (typeof n.componentDidMount == "function" && (a.flags |= 4194308), t = !1);
    } else {
      n = a.stateNode, Uf(l, a), f = a.memoizedProps, S = bu(u, f), n.props = S, A = a.pendingProps, s = n.context, d = u.contextType, i = ju, typeof d == "object" && d !== null && (i = Sl(d)), c = u.getDerivedStateFromProps, (d = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== A || s !== i) && t2(
        a,
        n,
        t,
        i
      ), Xa = !1, s = a.memoizedState, n.state = s, Xt(a, t, n, e), Gt();
      var m = a.memoizedState;
      f !== A || s !== m || Xa || l !== null && l.dependencies !== null && Ze(l.dependencies) ? (typeof c == "function" && (wf(
        a,
        u,
        c,
        t
      ), m = a.memoizedState), (S = Xa || u2(
        a,
        u,
        S,
        t,
        s,
        m,
        i
      ) || l !== null && l.dependencies !== null && Ze(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(t, m, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        t,
        m,
        i
      )), typeof n.componentDidUpdate == "function" && (a.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && s === l.memoizedState || (a.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && s === l.memoizedState || (a.flags |= 1024), a.memoizedProps = t, a.memoizedState = m), n.props = t, n.state = m, n.context = i, t = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && s === l.memoizedState || (a.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && s === l.memoizedState || (a.flags |= 1024), t = !1);
    }
    return n = t, un(l, a), t = (a.flags & 128) !== 0, n || t ? (n = a.stateNode, u = t && typeof u.getDerivedStateFromError != "function" ? null : n.render(), a.flags |= 1, l !== null && t ? (a.child = $u(
      a,
      l.child,
      null,
      e
    ), a.child = $u(
      a,
      null,
      u,
      e
    )) : yl(l, a, u, e), a.memoizedState = n.state, l = a.child) : l = oa(
      l,
      a,
      e
    ), l;
  }
  function z2(l, a, u, t) {
    return Ut(), a.flags |= 256, yl(l, a, u, t), a.child;
  }
  var Ff = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function If(l) {
    return { baseLanes: l, cachePool: n0() };
  }
  function Pf(l, a, u) {
    return l = l !== null ? l.childLanes & ~u : 0, a && (l |= rl), l;
  }
  function A2(l, a, u) {
    var t = a.pendingProps, e = !1, n = (a.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (tl.current & 2) !== 0), f && (e = !0, a.flags &= -129), f = (a.flags & 32) !== 0, a.flags &= -33, l === null) {
      if (G) {
        if (e ? ja(a) : Va(), G) {
          var c = $, i;
          if (i = c) {
            l: {
              for (i = c, c = ta; i.nodeType !== 8; ) {
                if (!c) {
                  c = null;
                  break l;
                }
                if (i = Pl(
                  i.nextSibling
                ), i === null) {
                  c = null;
                  break l;
                }
              }
              c = i;
            }
            c !== null ? (a.memoizedState = {
              dehydrated: c,
              treeContext: vu !== null ? { id: Sa, overflow: ga } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, i = Rl(
              18,
              null,
              null,
              0
            ), i.stateNode = c, i.return = a, a.child = i, zl = a, $ = null, i = !0) : i = !1;
          }
          i || du(a);
        }
        if (c = a.memoizedState, c !== null && (c = c.dehydrated, c !== null))
          return Qc(c) ? a.lanes = 32 : a.lanes = 536870912, null;
        Ta(a);
      }
      return c = t.children, t = t.fallback, e ? (Va(), e = a.mode, c = tn(
        { mode: "hidden", children: c },
        e
      ), t = iu(
        t,
        e,
        u,
        null
      ), c.return = a, t.return = a, c.sibling = t, a.child = c, e = a.child, e.memoizedState = If(u), e.childLanes = Pf(
        l,
        f,
        u
      ), a.memoizedState = Ff, t) : (ja(a), lc(a, c));
    }
    if (i = l.memoizedState, i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        a.flags & 256 ? (ja(a), a.flags &= -257, a = ac(
          l,
          a,
          u
        )) : a.memoizedState !== null ? (Va(), a.child = l.child, a.flags |= 128, a = null) : (Va(), e = t.fallback, c = a.mode, t = tn(
          { mode: "visible", children: t.children },
          c
        ), e = iu(
          e,
          c,
          u,
          null
        ), e.flags |= 2, t.return = a, e.return = a, t.sibling = e, a.child = t, $u(
          a,
          l.child,
          null,
          u
        ), t = a.child, t.memoizedState = If(u), t.childLanes = Pf(
          l,
          f,
          u
        ), a.memoizedState = Ff, a = e);
      else if (ja(a), Qc(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var d = f.dgst;
        f = d, t = Error(b(419)), t.stack = "", t.digest = f, Ht({ value: t, source: null, stack: null }), a = ac(
          l,
          a,
          u
        );
      } else if (fl || _t(l, a, u, !1), f = (u & l.childLanes) !== 0, fl || f) {
        if (f = p, f !== null && (t = u & -u, t = (t & 42) !== 0 ? 1 : Qn(t), t = (t & (f.suspendedLanes | u)) !== 0 ? 0 : t, t !== 0 && t !== i.retryLane))
          throw i.retryLane = t, xu(l, t), Gl(f, l, t), h2;
        c.data === "$?" || Ac(), a = ac(
          l,
          a,
          u
        );
      } else
        c.data === "$?" ? (a.flags |= 192, a.child = l.child, a = null) : (l = i.treeContext, $ = Pl(
          c.nextSibling
        ), zl = a, G = !0, yu = null, ta = !1, l !== null && (pl[Ll++] = Sa, pl[Ll++] = ga, pl[Ll++] = vu, Sa = l.id, ga = l.overflow, vu = a), a = lc(
          a,
          t.children
        ), a.flags |= 4096);
      return a;
    }
    return e ? (Va(), e = t.fallback, c = a.mode, i = l.child, d = i.sibling, t = ma(i, {
      mode: "hidden",
      children: t.children
    }), t.subtreeFlags = i.subtreeFlags & 65011712, d !== null ? e = ma(d, e) : (e = iu(
      e,
      c,
      u,
      null
    ), e.flags |= 2), e.return = a, t.return = a, t.sibling = e, a.child = t, t = e, e = a.child, c = l.child.memoizedState, c === null ? c = If(u) : (i = c.cachePool, i !== null ? (d = ul._currentValue, i = i.parent !== d ? { parent: d, pool: d } : i) : i = n0(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: i
    }), e.memoizedState = c, e.childLanes = Pf(
      l,
      f,
      u
    ), a.memoizedState = Ff, t) : (ja(a), u = l.child, l = u.sibling, u = ma(u, {
      mode: "visible",
      children: t.children
    }), u.return = a, u.sibling = null, l !== null && (f = a.deletions, f === null ? (a.deletions = [l], a.flags |= 16) : f.push(l)), a.child = u, a.memoizedState = null, u);
  }
  function lc(l, a) {
    return a = tn(
      { mode: "visible", children: a },
      l.mode
    ), a.return = l, l.child = a;
  }
  function tn(l, a) {
    return l = Rl(22, l, null, a), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function ac(l, a, u) {
    return $u(a, l.child, null, u), l = lc(
      a,
      a.pendingProps.children
    ), l.flags |= 2, a.memoizedState = null, l;
  }
  function T2(l, a, u) {
    l.lanes |= a;
    var t = l.alternate;
    t !== null && (t.lanes |= a), Af(l.return, a, u);
  }
  function uc(l, a, u, t, e) {
    var n = l.memoizedState;
    n === null ? l.memoizedState = {
      isBackwards: a,
      rendering: null,
      renderingStartTime: 0,
      last: t,
      tail: u,
      tailMode: e
    } : (n.isBackwards = a, n.rendering = null, n.renderingStartTime = 0, n.last = t, n.tail = u, n.tailMode = e);
  }
  function o2(l, a, u) {
    var t = a.pendingProps, e = t.revealOrder, n = t.tail;
    if (yl(l, a, t.children, u), t = tl.current, (t & 2) !== 0)
      t = t & 1 | 2, a.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        l: for (l = a.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && T2(l, u, a);
          else if (l.tag === 19)
            T2(l, u, a);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === a) break l;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === a)
              break l;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      t &= 1;
    }
    switch (Z(tl, t), e) {
      case "forwards":
        for (u = a.child, e = null; u !== null; )
          l = u.alternate, l !== null && Pe(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = a.child, a.child = null) : (e = u.sibling, u.sibling = null), uc(
          a,
          !1,
          e,
          u,
          n
        );
        break;
      case "backwards":
        for (u = null, e = a.child, a.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && Pe(l) === null) {
            a.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        uc(
          a,
          !0,
          u,
          null,
          n
        );
        break;
      case "together":
        uc(a, !1, null, null, void 0);
        break;
      default:
        a.memoizedState = null;
    }
    return a.child;
  }
  function oa(l, a, u) {
    if (l !== null && (a.dependencies = l.dependencies), Ja |= a.lanes, (u & a.childLanes) === 0)
      if (l !== null) {
        if (_t(
          l,
          a,
          u,
          !1
        ), (u & a.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && a.child !== l.child)
      throw Error(b(153));
    if (a.child !== null) {
      for (l = a.child, u = ma(l, l.pendingProps), a.child = u, u.return = a; l.sibling !== null; )
        l = l.sibling, u = u.sibling = ma(l, l.pendingProps), u.return = a;
      u.sibling = null;
    }
    return a.child;
  }
  function tc(l, a) {
    return (l.lanes & a) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ze(l)));
  }
  function bv(l, a, u) {
    switch (a.tag) {
      case 3:
        me(a, a.stateNode.containerInfo), Ga(a, ul, l.memoizedState.cache), Ut();
        break;
      case 27:
      case 5:
        qn(a);
        break;
      case 4:
        me(a, a.stateNode.containerInfo);
        break;
      case 10:
        Ga(
          a,
          a.type,
          a.memoizedProps.value
        );
        break;
      case 13:
        var t = a.memoizedState;
        if (t !== null)
          return t.dehydrated !== null ? (ja(a), a.flags |= 128, null) : (u & a.child.childLanes) !== 0 ? A2(l, a, u) : (ja(a), l = oa(
            l,
            a,
            u
          ), l !== null ? l.sibling : null);
        ja(a);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (t = (u & a.childLanes) !== 0, t || (_t(
          l,
          a,
          u,
          !1
        ), t = (u & a.childLanes) !== 0), e) {
          if (t)
            return o2(
              l,
              a,
              u
            );
          a.flags |= 128;
        }
        if (e = a.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), Z(tl, tl.current), t) break;
        return null;
      case 22:
      case 23:
        return a.lanes = 0, m2(l, a, u);
      case 24:
        Ga(a, ul, l.memoizedState.cache);
    }
    return oa(l, a, u);
  }
  function M2(l, a, u) {
    if (l !== null)
      if (l.memoizedProps !== a.pendingProps)
        fl = !0;
      else {
        if (!tc(l, u) && (a.flags & 128) === 0)
          return fl = !1, bv(
            l,
            a,
            u
          );
        fl = (l.flags & 131072) !== 0;
      }
    else
      fl = !1, G && (a.flags & 1048576) !== 0 && Ii(a, Qe, a.index);
    switch (a.lanes = 0, a.tag) {
      case 16:
        l: {
          l = a.pendingProps;
          var t = a.elementType, e = t._init;
          if (t = e(t._payload), a.type = t, typeof t == "function")
            df(t) ? (l = bu(t, l), a.tag = 1, a = b2(
              null,
              a,
              t,
              l,
              u
            )) : (a.tag = 0, a = kf(
              null,
              a,
              t,
              l,
              u
            ));
          else {
            if (t != null) {
              if (e = t.$$typeof, e === Ra) {
                a.tag = 11, a = y2(
                  null,
                  a,
                  t,
                  l,
                  u
                );
                break l;
              } else if (e === ha) {
                a.tag = 14, a = d2(
                  null,
                  a,
                  t,
                  l,
                  u
                );
                break l;
              }
            }
            throw a = ht(t) || t, Error(b(306, a, ""));
          }
        }
        return a;
      case 0:
        return kf(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 1:
        return t = a.type, e = bu(
          t,
          a.pendingProps
        ), b2(
          l,
          a,
          t,
          e,
          u
        );
      case 3:
        l: {
          if (me(
            a,
            a.stateNode.containerInfo
          ), l === null) throw Error(b(387));
          t = a.pendingProps;
          var n = a.memoizedState;
          e = n.element, Uf(l, a), Xt(a, t, null, u);
          var f = a.memoizedState;
          if (t = f.cache, Ga(a, ul, t), t !== n.cache && Tf(
            a,
            [ul],
            u,
            !0
          ), Gt(), t = f.element, n.isDehydrated)
            if (n = {
              element: t,
              isDehydrated: !1,
              cache: f.cache
            }, a.updateQueue.baseState = n, a.memoizedState = n, a.flags & 256) {
              a = z2(
                l,
                a,
                t,
                u
              );
              break l;
            } else if (t !== e) {
              e = Cl(
                Error(b(424)),
                a
              ), Ht(e), a = z2(
                l,
                a,
                t,
                u
              );
              break l;
            } else {
              switch (l = a.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for ($ = Pl(l.firstChild), zl = a, G = !0, yu = null, ta = !0, u = l2(
                a,
                null,
                t,
                u
              ), a.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Ut(), t === e) {
              a = oa(
                l,
                a,
                u
              );
              break l;
            }
            yl(
              l,
              a,
              t,
              u
            );
          }
          a = a.child;
        }
        return a;
      case 26:
        return un(l, a), l === null ? (u = U1(
          a.type,
          null,
          a.pendingProps,
          null
        )) ? a.memoizedState = u : G || (u = a.type, l = a.pendingProps, t = zn(
          Na.current
        ).createElement(u), t[ml] = a, t[Tl] = l, sl(t, u, l), nl(t), a.stateNode = t) : a.memoizedState = U1(
          a.type,
          l.memoizedProps,
          a.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return qn(a), l === null && G && (t = a.stateNode = E1(
          a.type,
          a.pendingProps,
          Na.current
        ), zl = a, ta = !0, e = $, $a(a.type) ? (Zc = e, $ = Pl(
          t.firstChild
        )) : $ = e), yl(
          l,
          a,
          a.pendingProps.children,
          u
        ), un(l, a), l === null && (a.flags |= 4194304), a.child;
      case 5:
        return l === null && G && ((e = t = $) && (t = Jv(
          t,
          a.type,
          a.pendingProps,
          ta
        ), t !== null ? (a.stateNode = t, zl = a, $ = Pl(
          t.firstChild
        ), ta = !1, e = !0) : e = !1), e || du(a)), qn(a), e = a.type, n = a.pendingProps, f = l !== null ? l.memoizedProps : null, t = n.children, Yc(e, n) ? t = null : f !== null && Yc(e, f) && (a.flags |= 32), a.memoizedState !== null && (e = Bf(
          l,
          a,
          vv,
          null,
          null,
          u
        ), te._currentValue = e), un(l, a), yl(l, a, t, u), a.child;
      case 6:
        return l === null && G && ((l = u = $) && (u = rv(
          u,
          a.pendingProps,
          ta
        ), u !== null ? (a.stateNode = u, zl = a, $ = null, l = !0) : l = !1), l || du(a)), null;
      case 13:
        return A2(l, a, u);
      case 4:
        return me(
          a,
          a.stateNode.containerInfo
        ), t = a.pendingProps, l === null ? a.child = $u(
          a,
          null,
          t,
          u
        ) : yl(
          l,
          a,
          t,
          u
        ), a.child;
      case 11:
        return y2(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 7:
        return yl(
          l,
          a,
          a.pendingProps,
          u
        ), a.child;
      case 8:
        return yl(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 12:
        return yl(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 10:
        return t = a.pendingProps, Ga(a, a.type, t.value), yl(
          l,
          a,
          t.children,
          u
        ), a.child;
      case 9:
        return e = a.type._context, t = a.pendingProps.children, mu(a), e = Sl(e), t = t(e), a.flags |= 1, yl(l, a, t, u), a.child;
      case 14:
        return d2(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 15:
        return s2(
          l,
          a,
          a.type,
          a.pendingProps,
          u
        );
      case 19:
        return o2(l, a, u);
      case 31:
        return t = a.pendingProps, u = a.mode, t = {
          mode: t.mode,
          children: t.children
        }, l === null ? (u = tn(
          t,
          u
        ), u.ref = a.ref, a.child = u, u.return = a, a = u) : (u = ma(l.child, t), u.ref = a.ref, a.child = u, u.return = a, a = u), a;
      case 22:
        return m2(l, a, u);
      case 24:
        return mu(a), t = Sl(ul), l === null ? (e = Ef(), e === null && (e = p, n = of(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), a.memoizedState = {
          parent: t,
          cache: e
        }, Of(a), Ga(a, ul, e)) : ((l.lanes & u) !== 0 && (Uf(l, a), Xt(a, null, null, u), Gt()), e = l.memoizedState, n = a.memoizedState, e.parent !== t ? (e = { parent: t, cache: t }, a.memoizedState = e, a.lanes === 0 && (a.memoizedState = a.updateQueue.baseState = e), Ga(a, ul, t)) : (t = n.cache, Ga(a, ul, t), t !== e.cache && Tf(
          a,
          [ul],
          u,
          !0
        ))), yl(
          l,
          a,
          a.pendingProps.children,
          u
        ), a.child;
      case 29:
        throw a.pendingProps;
    }
    throw Error(b(156, a.tag));
  }
  function Ma(l) {
    l.flags |= 4;
  }
  function E2(l, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !q1(a)) {
      if (a = Jl.current, a !== null && ((B & 4194048) === B ? ea !== null : (B & 62914560) !== B && (B & 536870912) === 0 || a !== ea))
        throw Bt = Df, f0;
      l.flags |= 8192;
    }
  }
  function en(l, a) {
    a !== null && (l.flags |= 4), l.flags & 16384 && (a = l.tag !== 22 ? ai() : 536870912, l.lanes |= a, Pu |= a);
  }
  function Kt(l, a) {
    if (!G)
      switch (l.tailMode) {
        case "hidden":
          a = l.tail;
          for (var u = null; a !== null; )
            a.alternate !== null && (u = a), a = a.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var t = null; u !== null; )
            u.alternate !== null && (t = u), u = u.sibling;
          t === null ? a || l.tail === null ? l.tail = null : l.tail.sibling = null : t.sibling = null;
      }
  }
  function W(l) {
    var a = l.alternate !== null && l.alternate.child === l.child, u = 0, t = 0;
    if (a)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, t |= e.subtreeFlags & 65011712, t |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, t |= e.subtreeFlags, t |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= t, l.childLanes = u, a;
  }
  function zv(l, a, u) {
    var t = a.pendingProps;
    switch (gf(a), a.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return W(a), null;
      case 1:
        return W(a), null;
      case 3:
        return u = a.stateNode, t = null, l !== null && (t = l.memoizedState.cache), a.memoizedState.cache !== t && (a.flags |= 2048), za(ul), Eu(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Ot(a) ? Ma(a) : l === null || l.memoizedState.isDehydrated && (a.flags & 256) === 0 || (a.flags |= 1024, a0())), W(a), null;
      case 26:
        return u = a.memoizedState, l === null ? (Ma(a), u !== null ? (W(a), E2(a, u)) : (W(a), a.flags &= -16777217)) : u ? u !== l.memoizedState ? (Ma(a), W(a), E2(a, u)) : (W(a), a.flags &= -16777217) : (l.memoizedProps !== t && Ma(a), W(a), a.flags &= -16777217), null;
      case 27:
        Se(a), u = Na.current;
        var e = a.type;
        if (l !== null && a.stateNode != null)
          l.memoizedProps !== t && Ma(a);
        else {
          if (!t) {
            if (a.stateNode === null)
              throw Error(b(166));
            return W(a), null;
          }
          l = el.current, Ot(a) ? Pi(a) : (l = E1(e, t, u), a.stateNode = l, Ma(a));
        }
        return W(a), null;
      case 5:
        if (Se(a), u = a.type, l !== null && a.stateNode != null)
          l.memoizedProps !== t && Ma(a);
        else {
          if (!t) {
            if (a.stateNode === null)
              throw Error(b(166));
            return W(a), null;
          }
          if (l = el.current, Ot(a))
            Pi(a);
          else {
            switch (e = zn(
              Na.current
            ), l) {
              case 1:
                l = e.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = e.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = e.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = e.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = e.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof t.is == "string" ? e.createElement("select", { is: t.is }) : e.createElement("select"), t.multiple ? l.multiple = !0 : t.size && (l.size = t.size);
                    break;
                  default:
                    l = typeof t.is == "string" ? e.createElement(u, { is: t.is }) : e.createElement(u);
                }
            }
            l[ml] = a, l[Tl] = t;
            l: for (e = a.child; e !== null; ) {
              if (e.tag === 5 || e.tag === 6)
                l.appendChild(e.stateNode);
              else if (e.tag !== 4 && e.tag !== 27 && e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
              }
              if (e === a) break l;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === a)
                  break l;
                e = e.return;
              }
              e.sibling.return = e.return, e = e.sibling;
            }
            a.stateNode = l;
            l: switch (sl(l, u, t), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!t.autoFocus;
                break l;
              case "img":
                l = !0;
                break l;
              default:
                l = !1;
            }
            l && Ma(a);
          }
        }
        return W(a), a.flags &= -16777217, null;
      case 6:
        if (l && a.stateNode != null)
          l.memoizedProps !== t && Ma(a);
        else {
          if (typeof t != "string" && a.stateNode === null)
            throw Error(b(166));
          if (l = Na.current, Ot(a)) {
            if (l = a.stateNode, u = a.memoizedProps, t = null, e = zl, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  t = e.memoizedProps;
              }
            l[ml] = a, l = !!(l.nodeValue === u || t !== null && t.suppressHydrationWarning === !0 || g1(l.nodeValue, u)), l || du(a);
          } else
            l = zn(l).createTextNode(
              t
            ), l[ml] = a, a.stateNode = l;
        }
        return W(a), null;
      case 13:
        if (t = a.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = Ot(a), t !== null && t.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(b(318));
              if (e = a.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(b(317));
              e[ml] = a;
            } else
              Ut(), (a.flags & 128) === 0 && (a.memoizedState = null), a.flags |= 4;
            W(a), e = !1;
          } else
            e = a0(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return a.flags & 256 ? (Ta(a), a) : (Ta(a), null);
        }
        if (Ta(a), (a.flags & 128) !== 0)
          return a.lanes = u, a;
        if (u = t !== null, l = l !== null && l.memoizedState !== null, u) {
          t = a.child, e = null, t.alternate !== null && t.alternate.memoizedState !== null && t.alternate.memoizedState.cachePool !== null && (e = t.alternate.memoizedState.cachePool.pool);
          var n = null;
          t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), n !== e && (t.flags |= 2048);
        }
        return u !== l && u && (a.child.flags |= 8192), en(a, a.updateQueue), W(a), null;
      case 4:
        return Eu(), l === null && _c(a.stateNode.containerInfo), W(a), null;
      case 10:
        return za(a.type), W(a), null;
      case 19:
        if (w(tl), e = a.memoizedState, e === null) return W(a), null;
        if (t = (a.flags & 128) !== 0, n = e.rendering, n === null)
          if (t) Kt(e, !1);
          else {
            if (k !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = a.child; l !== null; ) {
                if (n = Pe(l), n !== null) {
                  for (a.flags |= 128, Kt(e, !1), l = n.updateQueue, a.updateQueue = l, en(a, l), a.subtreeFlags = 0, l = u, u = a.child; u !== null; )
                    Fi(u, l), u = u.sibling;
                  return Z(
                    tl,
                    tl.current & 1 | 2
                  ), a.child;
                }
                l = l.sibling;
              }
            e.tail !== null && ua() > cn && (a.flags |= 128, t = !0, Kt(e, !1), a.lanes = 4194304);
          }
        else {
          if (!t)
            if (l = Pe(n), l !== null) {
              if (a.flags |= 128, t = !0, l = l.updateQueue, a.updateQueue = l, en(a, l), Kt(e, !0), e.tail === null && e.tailMode === "hidden" && !n.alternate && !G)
                return W(a), null;
            } else
              2 * ua() - e.renderingStartTime > cn && u !== 536870912 && (a.flags |= 128, t = !0, Kt(e, !1), a.lanes = 4194304);
          e.isBackwards ? (n.sibling = a.child, a.child = n) : (l = e.last, l !== null ? l.sibling = n : a.child = n, e.last = n);
        }
        return e.tail !== null ? (a = e.tail, e.rendering = a, e.tail = a.sibling, e.renderingStartTime = ua(), a.sibling = null, l = tl.current, Z(tl, t ? l & 1 | 2 : l & 1), a) : (W(a), null);
      case 22:
      case 23:
        return Ta(a), Nf(), t = a.memoizedState !== null, l !== null ? l.memoizedState !== null !== t && (a.flags |= 8192) : t && (a.flags |= 8192), t ? (u & 536870912) !== 0 && (a.flags & 128) === 0 && (W(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : W(a), u = a.updateQueue, u !== null && en(a, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), t = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (t = a.memoizedState.cachePool.pool), t !== u && (a.flags |= 2048), l !== null && w(Su), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), a.memoizedState.cache !== u && (a.flags |= 2048), za(ul), W(a), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(b(156, a.tag));
  }
  function Av(l, a) {
    switch (gf(a), a.tag) {
      case 1:
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 3:
        return za(ul), Eu(), l = a.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (a.flags = l & -65537 | 128, a) : null;
      case 26:
      case 27:
      case 5:
        return Se(a), null;
      case 13:
        if (Ta(a), l = a.memoizedState, l !== null && l.dehydrated !== null) {
          if (a.alternate === null)
            throw Error(b(340));
          Ut();
        }
        return l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 19:
        return w(tl), null;
      case 4:
        return Eu(), null;
      case 10:
        return za(a.type), null;
      case 22:
      case 23:
        return Ta(a), Nf(), l !== null && w(Su), l = a.flags, l & 65536 ? (a.flags = l & -65537 | 128, a) : null;
      case 24:
        return za(ul), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function D2(l, a) {
    switch (gf(a), a.tag) {
      case 3:
        za(ul), Eu();
        break;
      case 26:
      case 27:
      case 5:
        Se(a);
        break;
      case 4:
        Eu();
        break;
      case 13:
        Ta(a);
        break;
      case 19:
        w(tl);
        break;
      case 10:
        za(a.type);
        break;
      case 22:
      case 23:
        Ta(a), Nf(), l !== null && w(Su);
        break;
      case 24:
        za(ul);
    }
  }
  function pt(l, a) {
    try {
      var u = a.updateQueue, t = u !== null ? u.lastEffect : null;
      if (t !== null) {
        var e = t.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            t = void 0;
            var n = u.create, f = u.inst;
            t = n(), f.destroy = t;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      K(a, a.return, c);
    }
  }
  function Ca(l, a, u) {
    try {
      var t = a.updateQueue, e = t !== null ? t.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        t = n;
        do {
          if ((t.tag & l) === l) {
            var f = t.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = a;
              var i = u, d = c;
              try {
                d();
              } catch (S) {
                K(
                  e,
                  i,
                  S
                );
              }
            }
          }
          t = t.next;
        } while (t !== n);
      }
    } catch (S) {
      K(a, a.return, S);
    }
  }
  function O2(l) {
    var a = l.updateQueue;
    if (a !== null) {
      var u = l.stateNode;
      try {
        d0(a, u);
      } catch (t) {
        K(l, l.return, t);
      }
    }
  }
  function U2(l, a, u) {
    u.props = bu(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (t) {
      K(l, a, t);
    }
  }
  function Lt(l, a) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var t = l.stateNode;
            break;
          case 30:
            t = l.stateNode;
            break;
          default:
            t = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(t) : u.current = t;
      }
    } catch (e) {
      K(l, a, e);
    }
  }
  function na(l, a) {
    var u = l.ref, t = l.refCleanup;
    if (u !== null)
      if (typeof t == "function")
        try {
          t();
        } catch (e) {
          K(l, a, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          K(l, a, e);
        }
      else u.current = null;
  }
  function H2(l) {
    var a = l.type, u = l.memoizedProps, t = l.stateNode;
    try {
      l: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && t.focus();
          break l;
        case "img":
          u.src ? t.src = u.src : u.srcSet && (t.srcset = u.srcSet);
      }
    } catch (e) {
      K(l, l.return, e);
    }
  }
  function ec(l, a, u) {
    try {
      var t = l.stateNode;
      Vv(t, l.type, u, a), t[Tl] = a;
    } catch (e) {
      K(l, l.return, e);
    }
  }
  function _2(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && $a(l.type) || l.tag === 4;
  }
  function nc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || _2(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && $a(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function fc(l, a, u) {
    var t = l.tag;
    if (t === 5 || t === 6)
      l = l.stateNode, a ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, a) : (a = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, a.appendChild(l), u = u._reactRootContainer, u != null || a.onclick !== null || (a.onclick = bn));
    else if (t !== 4 && (t === 27 && $a(l.type) && (u = l.stateNode, a = null), l = l.child, l !== null))
      for (fc(l, a, u), l = l.sibling; l !== null; )
        fc(l, a, u), l = l.sibling;
  }
  function nn(l, a, u) {
    var t = l.tag;
    if (t === 5 || t === 6)
      l = l.stateNode, a ? u.insertBefore(l, a) : u.appendChild(l);
    else if (t !== 4 && (t === 27 && $a(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (nn(l, a, u), l = l.sibling; l !== null; )
        nn(l, a, u), l = l.sibling;
  }
  function R2(l) {
    var a = l.stateNode, u = l.memoizedProps;
    try {
      for (var t = l.type, e = a.attributes; e.length; )
        a.removeAttributeNode(e[0]);
      sl(a, t, u), a[ml] = l, a[Tl] = u;
    } catch (n) {
      K(l, l.return, n);
    }
  }
  var Ea = !1, P = !1, cc = !1, N2 = typeof WeakSet == "function" ? WeakSet : Set, cl = null;
  function Tv(l, a) {
    if (l = l.containerInfo, qc = Dn, l = Ci(l), ef(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var t = u.getSelection && u.getSelection();
          if (t && t.rangeCount !== 0) {
            u = t.anchorNode;
            var e = t.anchorOffset, n = t.focusNode;
            t = t.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, d = 0, S = 0, A = l, s = null;
            a: for (; ; ) {
              for (var m; A !== u || e !== 0 && A.nodeType !== 3 || (c = f + e), A !== n || t !== 0 && A.nodeType !== 3 || (i = f + t), A.nodeType === 3 && (f += A.nodeValue.length), (m = A.firstChild) !== null; )
                s = A, A = m;
              for (; ; ) {
                if (A === l) break a;
                if (s === u && ++d === e && (c = f), s === n && ++S === t && (i = f), (m = A.nextSibling) !== null) break;
                A = s, s = A.parentNode;
              }
              A = m;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Bc = { focusedElem: l, selectionRange: u }, Dn = !1, cl = a; cl !== null; )
      if (a = cl, l = a.child, (a.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = a, cl = l;
      else
        for (; cl !== null; ) {
          switch (a = cl, n = a.alternate, l = a.flags, a.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = a, e = n.memoizedProps, n = n.memoizedState, t = u.stateNode;
                try {
                  var U = bu(
                    u.type,
                    e,
                    u.elementType === u.type
                  );
                  l = t.getSnapshotBeforeUpdate(
                    U,
                    n
                  ), t.__reactInternalSnapshotBeforeUpdate = l;
                } catch (D) {
                  K(
                    u,
                    u.return,
                    D
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = a.stateNode.containerInfo, u = l.nodeType, u === 9)
                  Xc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Xc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(b(163));
          }
          if (l = a.sibling, l !== null) {
            l.return = a.return, cl = l;
            break;
          }
          cl = a.return;
        }
  }
  function q2(l, a, u) {
    var t = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Ka(l, u), t & 4 && pt(5, u);
        break;
      case 1:
        if (Ka(l, u), t & 4)
          if (l = u.stateNode, a === null)
            try {
              l.componentDidMount();
            } catch (f) {
              K(u, u.return, f);
            }
          else {
            var e = bu(
              u.type,
              a.memoizedProps
            );
            a = a.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                a,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              K(
                u,
                u.return,
                f
              );
            }
          }
        t & 64 && O2(u), t & 512 && Lt(u, u.return);
        break;
      case 3:
        if (Ka(l, u), t & 64 && (l = u.updateQueue, l !== null)) {
          if (a = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                a = u.child.stateNode;
                break;
              case 1:
                a = u.child.stateNode;
            }
          try {
            d0(l, a);
          } catch (f) {
            K(u, u.return, f);
          }
        }
        break;
      case 27:
        a === null && t & 4 && R2(u);
      case 26:
      case 5:
        Ka(l, u), a === null && t & 4 && H2(u), t & 512 && Lt(u, u.return);
        break;
      case 12:
        Ka(l, u);
        break;
      case 13:
        Ka(l, u), t & 4 && G2(l, u), t & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = Rv.bind(
          null,
          u
        ), wv(l, u))));
        break;
      case 22:
        if (t = u.memoizedState !== null || Ea, !t) {
          a = a !== null && a.memoizedState !== null || P, e = Ea;
          var n = P;
          Ea = t, (P = a) && !n ? pa(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Ka(l, u), Ea = e, P = n;
        }
        break;
      case 30:
        break;
      default:
        Ka(l, u);
    }
  }
  function B2(l) {
    var a = l.alternate;
    a !== null && (l.alternate = null, B2(a)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (a = l.stateNode, a !== null && jn(a)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var r = null, El = !1;
  function Da(l, a, u) {
    for (u = u.child; u !== null; )
      Y2(l, a, u), u = u.sibling;
  }
  function Y2(l, a, u) {
    if (Ul && typeof Ul.onCommitFiberUnmount == "function")
      try {
        Ul.onCommitFiberUnmount(yt, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        P || na(u, a), Da(
          l,
          a,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        P || na(u, a);
        var t = r, e = El;
        $a(u.type) && (r = u.stateNode, El = !1), Da(
          l,
          a,
          u
        ), Pt(u.stateNode), r = t, El = e;
        break;
      case 5:
        P || na(u, a);
      case 6:
        if (t = r, e = El, r = null, Da(
          l,
          a,
          u
        ), r = t, El = e, r !== null)
          if (El)
            try {
              (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).removeChild(u.stateNode);
            } catch (n) {
              K(
                u,
                a,
                n
              );
            }
          else
            try {
              r.removeChild(u.stateNode);
            } catch (n) {
              K(
                u,
                a,
                n
              );
            }
        break;
      case 18:
        r !== null && (El ? (l = r, o1(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), ce(l)) : o1(r, u.stateNode));
        break;
      case 4:
        t = r, e = El, r = u.stateNode.containerInfo, El = !0, Da(
          l,
          a,
          u
        ), r = t, El = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        P || Ca(2, u, a), P || Ca(4, u, a), Da(
          l,
          a,
          u
        );
        break;
      case 1:
        P || (na(u, a), t = u.stateNode, typeof t.componentWillUnmount == "function" && U2(
          u,
          a,
          t
        )), Da(
          l,
          a,
          u
        );
        break;
      case 21:
        Da(
          l,
          a,
          u
        );
        break;
      case 22:
        P = (t = P) || u.memoizedState !== null, Da(
          l,
          a,
          u
        ), P = t;
        break;
      default:
        Da(
          l,
          a,
          u
        );
    }
  }
  function G2(l, a) {
    if (a.memoizedState === null && (l = a.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ce(l);
      } catch (u) {
        K(a, a.return, u);
      }
  }
  function ov(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var a = l.stateNode;
        return a === null && (a = l.stateNode = new N2()), a;
      case 22:
        return l = l.stateNode, a = l._retryCache, a === null && (a = l._retryCache = new N2()), a;
      default:
        throw Error(b(435, l.tag));
    }
  }
  function ic(l, a) {
    var u = ov(l);
    a.forEach(function(t) {
      var e = Nv.bind(null, l, t);
      u.has(t) || (u.add(t), t.then(e, e));
    });
  }
  function Nl(l, a) {
    var u = a.deletions;
    if (u !== null)
      for (var t = 0; t < u.length; t++) {
        var e = u[t], n = l, f = a, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if ($a(c.type)) {
                r = c.stateNode, El = !1;
                break l;
              }
              break;
            case 5:
              r = c.stateNode, El = !1;
              break l;
            case 3:
            case 4:
              r = c.stateNode.containerInfo, El = !0;
              break l;
          }
          c = c.return;
        }
        if (r === null) throw Error(b(160));
        Y2(n, f, e), r = null, El = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (a.subtreeFlags & 13878)
      for (a = a.child; a !== null; )
        X2(a, l), a = a.sibling;
  }
  var Il = null;
  function X2(l, a) {
    var u = l.alternate, t = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Nl(a, l), ql(l), t & 4 && (Ca(3, l, l.return), pt(3, l), Ca(5, l, l.return));
        break;
      case 1:
        Nl(a, l), ql(l), t & 512 && (P || u === null || na(u, u.return)), t & 64 && Ea && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? t : u.concat(t))));
        break;
      case 26:
        var e = Il;
        if (Nl(a, l), ql(l), t & 512 && (P || u === null || na(u, u.return)), t & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (t = l.memoizedState, u === null)
            if (t === null)
              if (l.stateNode === null) {
                l: {
                  t = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  a: switch (t) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[mt] || n[ml] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(t), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), sl(n, t, u), n[ml] = l, nl(n), t = n;
                      break l;
                    case "link":
                      var f = R1(
                        "link",
                        "href",
                        e
                      ).get(t + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break a;
                          }
                      }
                      n = e.createElement(t), sl(n, t, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = R1(
                        "meta",
                        "content",
                        e
                      ).get(t + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break a;
                          }
                      }
                      n = e.createElement(t), sl(n, t, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(b(468, t));
                  }
                  n[ml] = l, nl(n), t = n;
                }
                l.stateNode = t;
              } else
                N1(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = _1(
                e,
                t,
                l.memoizedProps
              );
          else
            n !== t ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, t === null ? N1(
              e,
              l.type,
              l.stateNode
            ) : _1(
              e,
              t,
              l.memoizedProps
            )) : t === null && l.stateNode !== null && ec(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Nl(a, l), ql(l), t & 512 && (P || u === null || na(u, u.return)), u !== null && t & 4 && ec(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Nl(a, l), ql(l), t & 512 && (P || u === null || na(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            qu(e, "");
          } catch (m) {
            K(l, l.return, m);
          }
        }
        t & 4 && l.stateNode != null && (e = l.memoizedProps, ec(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), t & 1024 && (cc = !0);
        break;
      case 6:
        if (Nl(a, l), ql(l), t & 4) {
          if (l.stateNode === null)
            throw Error(b(162));
          t = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = t;
          } catch (m) {
            K(l, l.return, m);
          }
        }
        break;
      case 3:
        if (on = null, e = Il, Il = An(a.containerInfo), Nl(a, l), Il = e, ql(l), t & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            ce(a.containerInfo);
          } catch (m) {
            K(l, l.return, m);
          }
        cc && (cc = !1, Q2(l));
        break;
      case 4:
        t = Il, Il = An(
          l.stateNode.containerInfo
        ), Nl(a, l), ql(l), Il = t;
        break;
      case 12:
        Nl(a, l), ql(l);
        break;
      case 13:
        Nl(a, l), ql(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (mc = ua()), t & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, ic(l, t)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, d = Ea, S = P;
        if (Ea = d || e, P = S || i, Nl(a, l), P = S, Ea = d, ql(l), t & 8192)
          l: for (a = l.stateNode, a._visibility = e ? a._visibility & -2 : a._visibility | 1, e && (u === null || i || Ea || P || zu(l)), u = null, a = l; ; ) {
            if (a.tag === 5 || a.tag === 26) {
              if (u === null) {
                i = u = a;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var A = i.memoizedProps.style, s = A != null && A.hasOwnProperty("display") ? A.display : null;
                    c.style.display = s == null || typeof s == "boolean" ? "" : ("" + s).trim();
                  }
                } catch (m) {
                  K(i, i.return, m);
                }
              }
            } else if (a.tag === 6) {
              if (u === null) {
                i = a;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (m) {
                  K(i, i.return, m);
                }
              }
            } else if ((a.tag !== 22 && a.tag !== 23 || a.memoizedState === null || a === l) && a.child !== null) {
              a.child.return = a, a = a.child;
              continue;
            }
            if (a === l) break l;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === l) break l;
              u === a && (u = null), a = a.return;
            }
            u === a && (u = null), a.sibling.return = a.return, a = a.sibling;
          }
        t & 4 && (t = l.updateQueue, t !== null && (u = t.retryQueue, u !== null && (t.retryQueue = null, ic(l, u))));
        break;
      case 19:
        Nl(a, l), ql(l), t & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, ic(l, t)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Nl(a, l), ql(l);
    }
  }
  function ql(l) {
    var a = l.flags;
    if (a & 2) {
      try {
        for (var u, t = l.return; t !== null; ) {
          if (_2(t)) {
            u = t;
            break;
          }
          t = t.return;
        }
        if (u == null) throw Error(b(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = nc(l);
            nn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (qu(f, ""), u.flags &= -33);
            var c = nc(l);
            nn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, d = nc(l);
            fc(
              l,
              d,
              i
            );
            break;
          default:
            throw Error(b(161));
        }
      } catch (S) {
        K(l, l.return, S);
      }
      l.flags &= -3;
    }
    a & 4096 && (l.flags &= -4097);
  }
  function Q2(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var a = l;
        Q2(a), a.tag === 5 && a.flags & 1024 && a.stateNode.reset(), l = l.sibling;
      }
  }
  function Ka(l, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null; )
        q2(l, a.alternate, a), a = a.sibling;
  }
  function zu(l) {
    for (l = l.child; l !== null; ) {
      var a = l;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ca(4, a, a.return), zu(a);
          break;
        case 1:
          na(a, a.return);
          var u = a.stateNode;
          typeof u.componentWillUnmount == "function" && U2(
            a,
            a.return,
            u
          ), zu(a);
          break;
        case 27:
          Pt(a.stateNode);
        case 26:
        case 5:
          na(a, a.return), zu(a);
          break;
        case 22:
          a.memoizedState === null && zu(a);
          break;
        case 30:
          zu(a);
          break;
        default:
          zu(a);
      }
      l = l.sibling;
    }
  }
  function pa(l, a, u) {
    for (u = u && (a.subtreeFlags & 8772) !== 0, a = a.child; a !== null; ) {
      var t = a.alternate, e = l, n = a, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          pa(
            e,
            n,
            u
          ), pt(4, n);
          break;
        case 1:
          if (pa(
            e,
            n,
            u
          ), t = n, e = t.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (d) {
              K(t, t.return, d);
            }
          if (t = n, e = t.updateQueue, e !== null) {
            var c = t.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  y0(i[e], c);
            } catch (d) {
              K(t, t.return, d);
            }
          }
          u && f & 64 && O2(n), Lt(n, n.return);
          break;
        case 27:
          R2(n);
        case 26:
        case 5:
          pa(
            e,
            n,
            u
          ), u && t === null && f & 4 && H2(n), Lt(n, n.return);
          break;
        case 12:
          pa(
            e,
            n,
            u
          );
          break;
        case 13:
          pa(
            e,
            n,
            u
          ), u && f & 4 && G2(e, n);
          break;
        case 22:
          n.memoizedState === null && pa(
            e,
            n,
            u
          ), Lt(n, n.return);
          break;
        case 30:
          break;
        default:
          pa(
            e,
            n,
            u
          );
      }
      a = a.sibling;
    }
  }
  function vc(l, a) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (l = a.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Rt(u));
  }
  function hc(l, a) {
    l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Rt(l));
  }
  function fa(l, a, u, t) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; )
        Z2(
          l,
          a,
          u,
          t
        ), a = a.sibling;
  }
  function Z2(l, a, u, t) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        fa(
          l,
          a,
          u,
          t
        ), e & 2048 && pt(9, a);
        break;
      case 1:
        fa(
          l,
          a,
          u,
          t
        );
        break;
      case 3:
        fa(
          l,
          a,
          u,
          t
        ), e & 2048 && (l = null, a.alternate !== null && (l = a.alternate.memoizedState.cache), a = a.memoizedState.cache, a !== l && (a.refCount++, l != null && Rt(l)));
        break;
      case 12:
        if (e & 2048) {
          fa(
            l,
            a,
            u,
            t
          ), l = a.stateNode;
          try {
            var n = a.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              a.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            K(a, a.return, i);
          }
        } else
          fa(
            l,
            a,
            u,
            t
          );
        break;
      case 13:
        fa(
          l,
          a,
          u,
          t
        );
        break;
      case 23:
        break;
      case 22:
        n = a.stateNode, f = a.alternate, a.memoizedState !== null ? n._visibility & 2 ? fa(
          l,
          a,
          u,
          t
        ) : Jt(l, a) : n._visibility & 2 ? fa(
          l,
          a,
          u,
          t
        ) : (n._visibility |= 2, ku(
          l,
          a,
          u,
          t,
          (a.subtreeFlags & 10256) !== 0
        )), e & 2048 && vc(f, a);
        break;
      case 24:
        fa(
          l,
          a,
          u,
          t
        ), e & 2048 && hc(a.alternate, a);
        break;
      default:
        fa(
          l,
          a,
          u,
          t
        );
    }
  }
  function ku(l, a, u, t, e) {
    for (e = e && (a.subtreeFlags & 10256) !== 0, a = a.child; a !== null; ) {
      var n = l, f = a, c = u, i = t, d = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ku(
            n,
            f,
            c,
            i,
            e
          ), pt(8, f);
          break;
        case 23:
          break;
        case 22:
          var S = f.stateNode;
          f.memoizedState !== null ? S._visibility & 2 ? ku(
            n,
            f,
            c,
            i,
            e
          ) : Jt(
            n,
            f
          ) : (S._visibility |= 2, ku(
            n,
            f,
            c,
            i,
            e
          )), e && d & 2048 && vc(
            f.alternate,
            f
          );
          break;
        case 24:
          ku(
            n,
            f,
            c,
            i,
            e
          ), e && d & 2048 && hc(f.alternate, f);
          break;
        default:
          ku(
            n,
            f,
            c,
            i,
            e
          );
      }
      a = a.sibling;
    }
  }
  function Jt(l, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null; ) {
        var u = l, t = a, e = t.flags;
        switch (t.tag) {
          case 22:
            Jt(u, t), e & 2048 && vc(
              t.alternate,
              t
            );
            break;
          case 24:
            Jt(u, t), e & 2048 && hc(t.alternate, t);
            break;
          default:
            Jt(u, t);
        }
        a = a.sibling;
      }
  }
  var rt = 8192;
  function Fu(l) {
    if (l.subtreeFlags & rt)
      for (l = l.child; l !== null; )
        x2(l), l = l.sibling;
  }
  function x2(l) {
    switch (l.tag) {
      case 26:
        Fu(l), l.flags & rt && l.memoizedState !== null && fh(
          Il,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Fu(l);
        break;
      case 3:
      case 4:
        var a = Il;
        Il = An(l.stateNode.containerInfo), Fu(l), Il = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = rt, rt = 16777216, Fu(l), rt = a) : Fu(l));
        break;
      default:
        Fu(l);
    }
  }
  function j2(l) {
    var a = l.alternate;
    if (a !== null && (l = a.child, l !== null)) {
      a.child = null;
      do
        a = l.sibling, l.sibling = null, l = a;
      while (l !== null);
    }
  }
  function wt(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var t = a[u];
          cl = t, C2(
            t,
            l
          );
        }
      j2(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        V2(l), l = l.sibling;
  }
  function V2(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        wt(l), l.flags & 2048 && Ca(9, l, l.return);
        break;
      case 3:
        wt(l);
        break;
      case 12:
        wt(l);
        break;
      case 22:
        var a = l.stateNode;
        l.memoizedState !== null && a._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (a._visibility &= -3, fn(l)) : wt(l);
        break;
      default:
        wt(l);
    }
  }
  function fn(l) {
    var a = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (a !== null)
        for (var u = 0; u < a.length; u++) {
          var t = a[u];
          cl = t, C2(
            t,
            l
          );
        }
      j2(l);
    }
    for (l = l.child; l !== null; ) {
      switch (a = l, a.tag) {
        case 0:
        case 11:
        case 15:
          Ca(8, a, a.return), fn(a);
          break;
        case 22:
          u = a.stateNode, u._visibility & 2 && (u._visibility &= -3, fn(a));
          break;
        default:
          fn(a);
      }
      l = l.sibling;
    }
  }
  function C2(l, a) {
    for (; cl !== null; ) {
      var u = cl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          Ca(8, u, a);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var t = u.memoizedState.cachePool.pool;
            t != null && t.refCount++;
          }
          break;
        case 24:
          Rt(u.memoizedState.cache);
      }
      if (t = u.child, t !== null) t.return = u, cl = t;
      else
        l: for (u = l; cl !== null; ) {
          t = cl;
          var e = t.sibling, n = t.return;
          if (B2(t), t === u) {
            cl = null;
            break l;
          }
          if (e !== null) {
            e.return = n, cl = e;
            break l;
          }
          cl = n;
        }
    }
  }
  var Mv = {
    getCacheForType: function(l) {
      var a = Sl(ul), u = a.data.get(l);
      return u === void 0 && (u = l(), a.data.set(l, u)), u;
    }
  }, Ev = typeof WeakMap == "function" ? WeakMap : Map, X = 0, p = null, N = null, B = 0, Q = 0, Bl = null, La = !1, Iu = !1, yc = !1, Oa = 0, k = 0, Ja = 0, Au = 0, dc = 0, rl = 0, Pu = 0, Wt = null, Dl = null, sc = !1, mc = 0, cn = 1 / 0, vn = null, ra = null, dl = 0, wa = null, lt = null, at = 0, Sc = 0, gc = null, K2 = null, $t = 0, bc = null;
  function Yl() {
    if ((X & 2) !== 0 && B !== 0)
      return B & -B;
    if (z.T !== null) {
      var l = Ku;
      return l !== 0 ? l : Dc();
    }
    return ei();
  }
  function p2() {
    rl === 0 && (rl = (B & 536870912) === 0 || G ? li() : 536870912);
    var l = Jl.current;
    return l !== null && (l.flags |= 32), rl;
  }
  function Gl(l, a, u) {
    (l === p && (Q === 2 || Q === 9) || l.cancelPendingCommit !== null) && (ut(l, 0), Wa(
      l,
      B,
      rl,
      !1
    )), st(l, u), ((X & 2) === 0 || l !== p) && (l === p && ((X & 2) === 0 && (Au |= u), k === 4 && Wa(
      l,
      B,
      rl,
      !1
    )), ca(l));
  }
  function L2(l, a, u) {
    if ((X & 6) !== 0) throw Error(b(327));
    var t = !u && (a & 124) === 0 && (a & l.expiredLanes) === 0 || dt(l, a), e = t ? Uv(l, a) : Tc(l, a, !0), n = t;
    do {
      if (e === 0) {
        Iu && !t && Wa(l, a, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !Dv(u)) {
          e = Tc(l, a, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = a, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            a = f;
            l: {
              var c = l;
              e = Wt;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (ut(c, f).flags |= 256), f = Tc(
                c,
                f,
                !1
              ), f !== 2) {
                if (yc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Au |= n, e = 4;
                  break l;
                }
                n = Dl, Dl = e, n !== null && (Dl === null ? Dl = n : Dl.push.apply(
                  Dl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          ut(l, 0), Wa(l, a, 0, !0);
          break;
        }
        l: {
          switch (t = l, n = e, n) {
            case 0:
            case 1:
              throw Error(b(345));
            case 4:
              if ((a & 4194048) !== a) break;
            case 6:
              Wa(
                t,
                a,
                rl,
                !La
              );
              break l;
            case 2:
              Dl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(b(329));
          }
          if ((a & 62914560) === a && (e = mc + 300 - ua(), 10 < e)) {
            if (Wa(
              t,
              a,
              rl,
              !La
            ), Ae(t, 0, !0) !== 0) break l;
            t.timeoutHandle = A1(
              J2.bind(
                null,
                t,
                u,
                Dl,
                vn,
                sc,
                a,
                rl,
                Au,
                Pu,
                La,
                n,
                2,
                -0,
                0
              ),
              e
            );
            break l;
          }
          J2(
            t,
            u,
            Dl,
            vn,
            sc,
            a,
            rl,
            Au,
            Pu,
            La,
            n,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ca(l);
  }
  function J2(l, a, u, t, e, n, f, c, i, d, S, A, s, m) {
    if (l.timeoutHandle = -1, A = a.subtreeFlags, (A & 8192 || (A & 16785408) === 16785408) && (ue = { stylesheets: null, count: 0, unsuspend: nh }, x2(a), A = ch(), A !== null)) {
      l.cancelPendingCommit = A(
        I2.bind(
          null,
          l,
          a,
          n,
          u,
          t,
          e,
          f,
          c,
          i,
          S,
          1,
          s,
          m
        )
      ), Wa(l, n, f, !d);
      return;
    }
    I2(
      l,
      a,
      n,
      u,
      t,
      e,
      f,
      c,
      i
    );
  }
  function Dv(l) {
    for (var a = l; ; ) {
      var u = a.tag;
      if ((u === 0 || u === 11 || u === 15) && a.flags & 16384 && (u = a.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var t = 0; t < u.length; t++) {
          var e = u[t], n = e.getSnapshot;
          e = e.value;
          try {
            if (!_l(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = a.child, a.subtreeFlags & 16384 && u !== null)
        u.return = a, a = u;
      else {
        if (a === l) break;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === l) return !0;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    return !0;
  }
  function Wa(l, a, u, t) {
    a &= ~dc, a &= ~Au, l.suspendedLanes |= a, l.pingedLanes &= ~a, t && (l.warmLanes |= a), t = l.expirationTimes;
    for (var e = a; 0 < e; ) {
      var n = 31 - Hl(e), f = 1 << n;
      t[n] = -1, e &= ~f;
    }
    u !== 0 && ui(l, u, a);
  }
  function hn() {
    return (X & 6) === 0 ? (kt(0), !1) : !0;
  }
  function zc() {
    if (N !== null) {
      if (Q === 0)
        var l = N.return;
      else
        l = N, ba = su = null, Xf(l), Wu = null, Vt = 0, l = N;
      for (; l !== null; )
        D2(l.alternate, l), l = l.return;
      N = null;
    }
  }
  function ut(l, a) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Kv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), zc(), p = l, N = u = ma(l.current, null), B = a, Q = 0, Bl = null, La = !1, Iu = dt(l, a), yc = !1, Pu = rl = dc = Au = Ja = k = 0, Dl = Wt = null, sc = !1, (a & 8) !== 0 && (a |= a & 32);
    var t = l.entangledLanes;
    if (t !== 0)
      for (l = l.entanglements, t &= a; 0 < t; ) {
        var e = 31 - Hl(t), n = 1 << e;
        a |= l[e], t &= ~n;
      }
    return Oa = a, qe(), u;
  }
  function r2(l, a) {
    _ = null, z.H = ke, a === qt || a === Ve ? (a = v0(), Q = 3) : a === f0 ? (a = v0(), Q = 4) : Q = a === h2 ? 8 : a !== null && typeof a == "object" && typeof a.then == "function" ? 6 : 1, Bl = a, N === null && (k = 1, an(
      l,
      Cl(a, l.current)
    ));
  }
  function w2() {
    var l = z.H;
    return z.H = ke, l === null ? ke : l;
  }
  function W2() {
    var l = z.A;
    return z.A = Mv, l;
  }
  function Ac() {
    k = 4, La || (B & 4194048) !== B && Jl.current !== null || (Iu = !0), (Ja & 134217727) === 0 && (Au & 134217727) === 0 || p === null || Wa(
      p,
      B,
      rl,
      !1
    );
  }
  function Tc(l, a, u) {
    var t = X;
    X |= 2;
    var e = w2(), n = W2();
    (p !== l || B !== a) && (vn = null, ut(l, a)), a = !1;
    var f = k;
    l: do
      try {
        if (Q !== 0 && N !== null) {
          var c = N, i = Bl;
          switch (Q) {
            case 8:
              zc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Jl.current === null && (a = !0);
              var d = Q;
              if (Q = 0, Bl = null, tt(l, c, i, d), u && Iu) {
                f = 0;
                break l;
              }
              break;
            default:
              d = Q, Q = 0, Bl = null, tt(l, c, i, d);
          }
        }
        Ov(), f = k;
        break;
      } catch (S) {
        r2(l, S);
      }
    while (!0);
    return a && l.shellSuspendCounter++, ba = su = null, X = t, z.H = e, z.A = n, N === null && (p = null, B = 0, qe()), f;
  }
  function Ov() {
    for (; N !== null; ) $2(N);
  }
  function Uv(l, a) {
    var u = X;
    X |= 2;
    var t = w2(), e = W2();
    p !== l || B !== a ? (vn = null, cn = ua() + 500, ut(l, a)) : Iu = dt(
      l,
      a
    );
    l: do
      try {
        if (Q !== 0 && N !== null) {
          a = N;
          var n = Bl;
          a: switch (Q) {
            case 1:
              Q = 0, Bl = null, tt(l, a, n, 1);
              break;
            case 2:
            case 9:
              if (c0(n)) {
                Q = 0, Bl = null, k2(a);
                break;
              }
              a = function() {
                Q !== 2 && Q !== 9 || p !== l || (Q = 7), ca(l);
              }, n.then(a, a);
              break l;
            case 3:
              Q = 7;
              break l;
            case 4:
              Q = 5;
              break l;
            case 7:
              c0(n) ? (Q = 0, Bl = null, k2(a)) : (Q = 0, Bl = null, tt(l, a, n, 7));
              break;
            case 5:
              var f = null;
              switch (N.tag) {
                case 26:
                  f = N.memoizedState;
                case 5:
                case 27:
                  var c = N;
                  if (!f || q1(f)) {
                    Q = 0, Bl = null;
                    var i = c.sibling;
                    if (i !== null) N = i;
                    else {
                      var d = c.return;
                      d !== null ? (N = d, yn(d)) : N = null;
                    }
                    break a;
                  }
              }
              Q = 0, Bl = null, tt(l, a, n, 5);
              break;
            case 6:
              Q = 0, Bl = null, tt(l, a, n, 6);
              break;
            case 8:
              zc(), k = 6;
              break l;
            default:
              throw Error(b(462));
          }
        }
        Hv();
        break;
      } catch (S) {
        r2(l, S);
      }
    while (!0);
    return ba = su = null, z.H = t, z.A = e, X = u, N !== null ? 0 : (p = null, B = 0, qe(), k);
  }
  function Hv() {
    for (; N !== null && !$1(); )
      $2(N);
  }
  function $2(l) {
    var a = M2(l.alternate, l, Oa);
    l.memoizedProps = l.pendingProps, a === null ? yn(l) : N = a;
  }
  function k2(l) {
    var a = l, u = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = g2(
          u,
          a,
          a.pendingProps,
          a.type,
          void 0,
          B
        );
        break;
      case 11:
        a = g2(
          u,
          a,
          a.pendingProps,
          a.type.render,
          a.ref,
          B
        );
        break;
      case 5:
        Xf(a);
      default:
        D2(u, a), a = N = Fi(a, Oa), a = M2(u, a, Oa);
    }
    l.memoizedProps = l.pendingProps, a === null ? yn(l) : N = a;
  }
  function tt(l, a, u, t) {
    ba = su = null, Xf(a), Wu = null, Vt = 0;
    var e = a.return;
    try {
      if (gv(
        l,
        e,
        a,
        u,
        B
      )) {
        k = 1, an(
          l,
          Cl(u, l.current)
        ), N = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw N = e, n;
      k = 1, an(
        l,
        Cl(u, l.current)
      ), N = null;
      return;
    }
    a.flags & 32768 ? (G || t === 1 ? l = !0 : Iu || (B & 536870912) !== 0 ? l = !1 : (La = l = !0, (t === 2 || t === 9 || t === 3 || t === 6) && (t = Jl.current, t !== null && t.tag === 13 && (t.flags |= 16384))), F2(a, l)) : yn(a);
  }
  function yn(l) {
    var a = l;
    do {
      if ((a.flags & 32768) !== 0) {
        F2(
          a,
          La
        );
        return;
      }
      l = a.return;
      var u = zv(
        a.alternate,
        a,
        Oa
      );
      if (u !== null) {
        N = u;
        return;
      }
      if (a = a.sibling, a !== null) {
        N = a;
        return;
      }
      N = a = l;
    } while (a !== null);
    k === 0 && (k = 5);
  }
  function F2(l, a) {
    do {
      var u = Av(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, N = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !a && (l = l.sibling, l !== null)) {
        N = l;
        return;
      }
      N = l = u;
    } while (l !== null);
    k = 6, N = null;
  }
  function I2(l, a, u, t, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      dn();
    while (dl !== 0);
    if ((X & 6) !== 0) throw Error(b(327));
    if (a !== null) {
      if (a === l.current) throw Error(b(177));
      if (n = a.lanes | a.childLanes, n |= hf, n3(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === p && (N = p = null, B = 0), lt = a, wa = l, at = u, Sc = n, gc = e, K2 = t, (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, qv(ge, function() {
        return t1(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), t = (a.flags & 13878) !== 0, (a.subtreeFlags & 13878) !== 0 || t) {
        t = z.T, z.T = null, e = T.p, T.p = 2, f = X, X |= 4;
        try {
          Tv(l, a, u);
        } finally {
          X = f, T.p = e, z.T = t;
        }
      }
      dl = 1, P2(), l1(), a1();
    }
  }
  function P2() {
    if (dl === 1) {
      dl = 0;
      var l = wa, a = lt, u = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || u) {
        u = z.T, z.T = null;
        var t = T.p;
        T.p = 2;
        var e = X;
        X |= 4;
        try {
          X2(a, l);
          var n = Bc, f = Ci(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && Vi(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && ef(c)) {
              var d = i.start, S = i.end;
              if (S === void 0 && (S = d), "selectionStart" in c)
                c.selectionStart = d, c.selectionEnd = Math.min(
                  S,
                  c.value.length
                );
              else {
                var A = c.ownerDocument || document, s = A && A.defaultView || window;
                if (s.getSelection) {
                  var m = s.getSelection(), U = c.textContent.length, D = Math.min(i.start, U), V = i.end === void 0 ? D : Math.min(i.end, U);
                  !m.extend && D > V && (f = V, V = D, D = f);
                  var h = ji(
                    c,
                    D
                  ), v = ji(
                    c,
                    V
                  );
                  if (h && v && (m.rangeCount !== 1 || m.anchorNode !== h.node || m.anchorOffset !== h.offset || m.focusNode !== v.node || m.focusOffset !== v.offset)) {
                    var y = A.createRange();
                    y.setStart(h.node, h.offset), m.removeAllRanges(), D > V ? (m.addRange(y), m.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), m.addRange(y));
                  }
                }
              }
            }
            for (A = [], m = c; m = m.parentNode; )
              m.nodeType === 1 && A.push({
                element: m,
                left: m.scrollLeft,
                top: m.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < A.length; c++) {
              var g = A[c];
              g.element.scrollLeft = g.left, g.element.scrollTop = g.top;
            }
          }
          Dn = !!qc, Bc = qc = null;
        } finally {
          X = e, T.p = t, z.T = u;
        }
      }
      l.current = a, dl = 2;
    }
  }
  function l1() {
    if (dl === 2) {
      dl = 0;
      var l = wa, a = lt, u = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || u) {
        u = z.T, z.T = null;
        var t = T.p;
        T.p = 2;
        var e = X;
        X |= 4;
        try {
          q2(l, a.alternate, a);
        } finally {
          X = e, T.p = t, z.T = u;
        }
      }
      dl = 3;
    }
  }
  function a1() {
    if (dl === 4 || dl === 3) {
      dl = 0, k1();
      var l = wa, a = lt, u = at, t = K2;
      (a.subtreeFlags & 10256) !== 0 || (a.flags & 10256) !== 0 ? dl = 5 : (dl = 0, lt = wa = null, u1(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (ra = null), Zn(u), a = a.stateNode, Ul && typeof Ul.onCommitFiberRoot == "function")
        try {
          Ul.onCommitFiberRoot(
            yt,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (t !== null) {
        a = z.T, e = T.p, T.p = 2, z.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < t.length; f++) {
            var c = t[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          z.T = a, T.p = e;
        }
      }
      (at & 3) !== 0 && dn(), ca(l), e = l.pendingLanes, (u & 4194090) !== 0 && (e & 42) !== 0 ? l === bc ? $t++ : ($t = 0, bc = l) : $t = 0, kt(0);
    }
  }
  function u1(l, a) {
    (l.pooledCacheLanes &= a) === 0 && (a = l.pooledCache, a != null && (l.pooledCache = null, Rt(a)));
  }
  function dn(l) {
    return P2(), l1(), a1(), t1();
  }
  function t1() {
    if (dl !== 5) return !1;
    var l = wa, a = Sc;
    Sc = 0;
    var u = Zn(at), t = z.T, e = T.p;
    try {
      T.p = 32 > u ? 32 : u, z.T = null, u = gc, gc = null;
      var n = wa, f = at;
      if (dl = 0, lt = wa = null, at = 0, (X & 6) !== 0) throw Error(b(331));
      var c = X;
      if (X |= 4, V2(n.current), Z2(
        n,
        n.current,
        f,
        u
      ), X = c, kt(0, !1), Ul && typeof Ul.onPostCommitFiberRoot == "function")
        try {
          Ul.onPostCommitFiberRoot(yt, n);
        } catch {
        }
      return !0;
    } finally {
      T.p = e, z.T = t, u1(l, a);
    }
  }
  function e1(l, a, u) {
    a = Cl(u, a), a = $f(l.stateNode, a, 2), l = Za(l, a, 2), l !== null && (st(l, 2), ca(l));
  }
  function K(l, a, u) {
    if (l.tag === 3)
      e1(l, l, u);
    else
      for (; a !== null; ) {
        if (a.tag === 3) {
          e1(
            a,
            l,
            u
          );
          break;
        } else if (a.tag === 1) {
          var t = a.stateNode;
          if (typeof a.type.getDerivedStateFromError == "function" || typeof t.componentDidCatch == "function" && (ra === null || !ra.has(t))) {
            l = Cl(u, l), u = i2(2), t = Za(a, u, 2), t !== null && (v2(
              u,
              t,
              a,
              l
            ), st(t, 2), ca(t));
            break;
          }
        }
        a = a.return;
      }
  }
  function oc(l, a, u) {
    var t = l.pingCache;
    if (t === null) {
      t = l.pingCache = new Ev();
      var e = /* @__PURE__ */ new Set();
      t.set(a, e);
    } else
      e = t.get(a), e === void 0 && (e = /* @__PURE__ */ new Set(), t.set(a, e));
    e.has(u) || (yc = !0, e.add(u), l = _v.bind(null, l, a, u), a.then(l, l));
  }
  function _v(l, a, u) {
    var t = l.pingCache;
    t !== null && t.delete(a), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, p === l && (B & u) === u && (k === 4 || k === 3 && (B & 62914560) === B && 300 > ua() - mc ? (X & 2) === 0 && ut(l, 0) : dc |= u, Pu === B && (Pu = 0)), ca(l);
  }
  function n1(l, a) {
    a === 0 && (a = ai()), l = xu(l, a), l !== null && (st(l, a), ca(l));
  }
  function Rv(l) {
    var a = l.memoizedState, u = 0;
    a !== null && (u = a.retryLane), n1(l, u);
  }
  function Nv(l, a) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var t = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        t = l.stateNode;
        break;
      case 22:
        t = l.stateNode._retryCache;
        break;
      default:
        throw Error(b(314));
    }
    t !== null && t.delete(a), n1(l, u);
  }
  function qv(l, a) {
    return Yn(l, a);
  }
  var sn = null, et = null, Mc = !1, mn = !1, Ec = !1, Tu = 0;
  function ca(l) {
    l !== et && l.next === null && (et === null ? sn = et = l : et = et.next = l), mn = !0, Mc || (Mc = !0, Yv());
  }
  function kt(l, a) {
    if (!Ec && mn) {
      Ec = !0;
      do
        for (var u = !1, t = sn; t !== null; ) {
          if (l !== 0) {
            var e = t.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = t.suspendedLanes, c = t.pingedLanes;
              n = (1 << 31 - Hl(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, v1(t, n));
          } else
            n = B, n = Ae(
              t,
              t === p ? n : 0,
              t.cancelPendingCommit !== null || t.timeoutHandle !== -1
            ), (n & 3) === 0 || dt(t, n) || (u = !0, v1(t, n));
          t = t.next;
        }
      while (u);
      Ec = !1;
    }
  }
  function Bv() {
    f1();
  }
  function f1() {
    mn = Mc = !1;
    var l = 0;
    Tu !== 0 && (Cv() && (l = Tu), Tu = 0);
    for (var a = ua(), u = null, t = sn; t !== null; ) {
      var e = t.next, n = c1(t, a);
      n === 0 ? (t.next = null, u === null ? sn = e : u.next = e, e === null && (et = u)) : (u = t, (l !== 0 || (n & 3) !== 0) && (mn = !0)), t = e;
    }
    kt(l);
  }
  function c1(l, a) {
    for (var u = l.suspendedLanes, t = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Hl(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & t) !== 0) && (e[f] = e3(c, a)) : i <= a && (l.expiredLanes |= c), n &= ~c;
    }
    if (a = p, u = B, u = Ae(
      l,
      l === a ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), t = l.callbackNode, u === 0 || l === a && (Q === 2 || Q === 9) || l.cancelPendingCommit !== null)
      return t !== null && t !== null && Gn(t), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || dt(l, u)) {
      if (a = u & -u, a === l.callbackPriority) return a;
      switch (t !== null && Gn(t), Zn(u)) {
        case 2:
        case 8:
          u = Ic;
          break;
        case 32:
          u = ge;
          break;
        case 268435456:
          u = Pc;
          break;
        default:
          u = ge;
      }
      return t = i1.bind(null, l), u = Yn(u, t), l.callbackPriority = a, l.callbackNode = u, a;
    }
    return t !== null && t !== null && Gn(t), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function i1(l, a) {
    if (dl !== 0 && dl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (dn() && l.callbackNode !== u)
      return null;
    var t = B;
    return t = Ae(
      l,
      l === p ? t : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), t === 0 ? null : (L2(l, t, a), c1(l, ua()), l.callbackNode != null && l.callbackNode === u ? i1.bind(null, l) : null);
  }
  function v1(l, a) {
    if (dn()) return null;
    L2(l, a, !0);
  }
  function Yv() {
    pv(function() {
      (X & 6) !== 0 ? Yn(
        Fc,
        Bv
      ) : f1();
    });
  }
  function Dc() {
    return Tu === 0 && (Tu = li()), Tu;
  }
  function h1(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : De("" + l);
  }
  function y1(l, a) {
    var u = a.ownerDocument.createElement("input");
    return u.name = a.name, u.value = a.value, l.id && u.setAttribute("form", l.id), a.parentNode.insertBefore(u, a), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Gv(l, a, u, t, e) {
    if (a === "submit" && u && u.stateNode === e) {
      var n = h1(
        (e[Tl] || null).action
      ), f = t.submitter;
      f && (a = (a = f[Tl] || null) ? h1(a.formAction) : f.getAttribute("formAction"), a !== null && (n = a, f = null));
      var c = new _e(
        "action",
        "action",
        null,
        t,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (t.defaultPrevented) {
                if (Tu !== 0) {
                  var i = f ? y1(e, f) : new FormData(e);
                  Lf(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? y1(e, f) : new FormData(e), Lf(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var Oc = 0; Oc < vf.length; Oc++) {
    var Uc = vf[Oc], Xv = Uc.toLowerCase(), Qv = Uc[0].toUpperCase() + Uc.slice(1);
    Fl(
      Xv,
      "on" + Qv
    );
  }
  Fl(Li, "onAnimationEnd"), Fl(Ji, "onAnimationIteration"), Fl(ri, "onAnimationStart"), Fl("dblclick", "onDoubleClick"), Fl("focusin", "onFocus"), Fl("focusout", "onBlur"), Fl(P3, "onTransitionRun"), Fl(lv, "onTransitionStart"), Fl(av, "onTransitionCancel"), Fl(wi, "onTransitionEnd"), _u("onMouseEnter", ["mouseout", "mouseover"]), _u("onMouseLeave", ["mouseout", "mouseover"]), _u("onPointerEnter", ["pointerout", "pointerover"]), _u("onPointerLeave", ["pointerout", "pointerover"]), eu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), eu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), eu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), eu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), eu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), eu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Ft = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Zv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ft)
  );
  function d1(l, a) {
    a = (a & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var t = l[u], e = t.event;
      t = t.listeners;
      l: {
        var n = void 0;
        if (a)
          for (var f = t.length - 1; 0 <= f; f--) {
            var c = t[f], i = c.instance, d = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              ln(S);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < t.length; f++) {
            if (c = t[f], i = c.instance, d = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = d;
            try {
              n(e);
            } catch (S) {
              ln(S);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function q(l, a) {
    var u = a[xn];
    u === void 0 && (u = a[xn] = /* @__PURE__ */ new Set());
    var t = l + "__bubble";
    u.has(t) || (s1(a, l, 2, !1), u.add(t));
  }
  function Hc(l, a, u) {
    var t = 0;
    a && (t |= 4), s1(
      u,
      l,
      t,
      a
    );
  }
  var Sn = "_reactListening" + Math.random().toString(36).slice(2);
  function _c(l) {
    if (!l[Sn]) {
      l[Sn] = !0, fi.forEach(function(u) {
        u !== "selectionchange" && (Zv.has(u) || Hc(u, !1, l), Hc(u, !0, l));
      });
      var a = l.nodeType === 9 ? l : l.ownerDocument;
      a === null || a[Sn] || (a[Sn] = !0, Hc("selectionchange", !1, a));
    }
  }
  function s1(l, a, u, t) {
    switch (Z1(a)) {
      case 2:
        var e = hh;
        break;
      case 8:
        e = yh;
        break;
      default:
        e = Kc;
    }
    u = e.bind(
      null,
      a,
      u,
      l
    ), e = void 0, !$n || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (e = !0), t ? e !== void 0 ? l.addEventListener(a, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(a, u, !0) : e !== void 0 ? l.addEventListener(a, u, {
      passive: e
    }) : l.addEventListener(a, u, !1);
  }
  function Rc(l, a, u, t, e) {
    var n = t;
    if ((a & 1) === 0 && (a & 2) === 0 && t !== null)
      l: for (; ; ) {
        if (t === null) return;
        var f = t.tag;
        if (f === 3 || f === 4) {
          var c = t.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = t.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Ou(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              t = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        t = t.return;
      }
    Ti(function() {
      var d = n, S = wn(u), A = [];
      l: {
        var s = Wi.get(l);
        if (s !== void 0) {
          var m = _e, U = l;
          switch (l) {
            case "keypress":
              if (Ue(u) === 0) break l;
            case "keydown":
            case "keyup":
              m = q3;
              break;
            case "focusin":
              U = "focus", m = Pn;
              break;
            case "focusout":
              U = "blur", m = Pn;
              break;
            case "beforeblur":
            case "afterblur":
              m = Pn;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Ei;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = A3;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = G3;
              break;
            case Li:
            case Ji:
            case ri:
              m = M3;
              break;
            case wi:
              m = Q3;
              break;
            case "scroll":
            case "scrollend":
              m = b3;
              break;
            case "wheel":
              m = x3;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = D3;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Oi;
              break;
            case "toggle":
            case "beforetoggle":
              m = V3;
          }
          var D = (a & 4) !== 0, V = !D && (l === "scroll" || l === "scrollend"), h = D ? s !== null ? s + "Capture" : null : s;
          D = [];
          for (var v = d, y; v !== null; ) {
            var g = v;
            if (y = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || y === null || h === null || (g = gt(v, h), g != null && D.push(
              It(v, g, y)
            )), V) break;
            v = v.return;
          }
          0 < D.length && (s = new m(
            s,
            U,
            null,
            u,
            S
          ), A.push({ event: s, listeners: D }));
        }
      }
      if ((a & 7) === 0) {
        l: {
          if (s = l === "mouseover" || l === "pointerover", m = l === "mouseout" || l === "pointerout", s && u !== rn && (U = u.relatedTarget || u.fromElement) && (Ou(U) || U[Du]))
            break l;
          if ((m || s) && (s = S.window === S ? S : (s = S.ownerDocument) ? s.defaultView || s.parentWindow : window, m ? (U = u.relatedTarget || u.toElement, m = d, U = U ? Ou(U) : null, U !== null && (V = gl(U), D = U.tag, U !== V || D !== 5 && D !== 27 && D !== 6) && (U = null)) : (m = null, U = d), m !== U)) {
            if (D = Ei, g = "onMouseLeave", h = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (D = Oi, g = "onPointerLeave", h = "onPointerEnter", v = "pointer"), V = m == null ? s : St(m), y = U == null ? s : St(U), s = new D(
              g,
              v + "leave",
              m,
              u,
              S
            ), s.target = V, s.relatedTarget = y, g = null, Ou(S) === d && (D = new D(
              h,
              v + "enter",
              U,
              u,
              S
            ), D.target = y, D.relatedTarget = V, g = D), V = g, m && U)
              a: {
                for (D = m, h = U, v = 0, y = D; y; y = nt(y))
                  v++;
                for (y = 0, g = h; g; g = nt(g))
                  y++;
                for (; 0 < v - y; )
                  D = nt(D), v--;
                for (; 0 < y - v; )
                  h = nt(h), y--;
                for (; v--; ) {
                  if (D === h || h !== null && D === h.alternate)
                    break a;
                  D = nt(D), h = nt(h);
                }
                D = null;
              }
            else D = null;
            m !== null && m1(
              A,
              s,
              m,
              D,
              !1
            ), U !== null && V !== null && m1(
              A,
              V,
              U,
              D,
              !0
            );
          }
        }
        l: {
          if (s = d ? St(d) : window, m = s.nodeName && s.nodeName.toLowerCase(), m === "select" || m === "input" && s.type === "file")
            var o = Yi;
          else if (qi(s))
            if (Gi)
              o = k3;
            else {
              o = W3;
              var R = w3;
            }
          else
            m = s.nodeName, !m || m.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? d && Jn(d.elementType) && (o = Yi) : o = $3;
          if (o && (o = o(l, d))) {
            Bi(
              A,
              o,
              u,
              S
            );
            break l;
          }
          R && R(l, s, d), l === "focusout" && d && s.type === "number" && d.memoizedProps.value != null && Ln(s, "number", s.value);
        }
        switch (R = d ? St(d) : window, l) {
          case "focusin":
            (qi(R) || R.contentEditable === "true") && (Xu = R, nf = d, Dt = null);
            break;
          case "focusout":
            Dt = nf = Xu = null;
            break;
          case "mousedown":
            ff = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ff = !1, Ki(A, u, S);
            break;
          case "selectionchange":
            if (I3) break;
          case "keydown":
          case "keyup":
            Ki(A, u, S);
        }
        var M;
        if (af)
          l: {
            switch (l) {
              case "compositionstart":
                var O = "onCompositionStart";
                break l;
              case "compositionend":
                O = "onCompositionEnd";
                break l;
              case "compositionupdate":
                O = "onCompositionUpdate";
                break l;
            }
            O = void 0;
          }
        else
          Gu ? Ri(l, u) && (O = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (O = "onCompositionStart");
        O && (Ui && u.locale !== "ko" && (Gu || O !== "onCompositionStart" ? O === "onCompositionEnd" && Gu && (M = oi()) : (Ya = S, kn = "value" in Ya ? Ya.value : Ya.textContent, Gu = !0)), R = gn(d, O), 0 < R.length && (O = new Di(
          O,
          l,
          null,
          u,
          S
        ), A.push({ event: O, listeners: R }), M ? O.data = M : (M = Ni(u), M !== null && (O.data = M)))), (M = K3 ? p3(l, u) : L3(l, u)) && (O = gn(d, "onBeforeInput"), 0 < O.length && (R = new Di(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          S
        ), A.push({
          event: R,
          listeners: O
        }), R.data = M)), Gv(
          A,
          l,
          d,
          u,
          S
        );
      }
      d1(A, a);
    });
  }
  function It(l, a, u) {
    return {
      instance: l,
      listener: a,
      currentTarget: u
    };
  }
  function gn(l, a) {
    for (var u = a + "Capture", t = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = gt(l, u), e != null && t.unshift(
        It(l, e, n)
      ), e = gt(l, a), e != null && t.push(
        It(l, e, n)
      )), l.tag === 3) return t;
      l = l.return;
    }
    return [];
  }
  function nt(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function m1(l, a, u, t, e) {
    for (var n = a._reactName, f = []; u !== null && u !== t; ) {
      var c = u, i = c.alternate, d = c.stateNode;
      if (c = c.tag, i !== null && i === t) break;
      c !== 5 && c !== 26 && c !== 27 || d === null || (i = d, e ? (d = gt(u, n), d != null && f.unshift(
        It(u, d, i)
      )) : e || (d = gt(u, n), d != null && f.push(
        It(u, d, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: a, listeners: f });
  }
  var xv = /\r\n?/g, jv = /\u0000|\uFFFD/g;
  function S1(l) {
    return (typeof l == "string" ? l : "" + l).replace(xv, `
`).replace(jv, "");
  }
  function g1(l, a) {
    return a = S1(a), S1(l) === a;
  }
  function bn() {
  }
  function j(l, a, u, t, e, n) {
    switch (u) {
      case "children":
        typeof t == "string" ? a === "body" || a === "textarea" && t === "" || qu(l, t) : (typeof t == "number" || typeof t == "bigint") && a !== "body" && qu(l, "" + t);
        break;
      case "className":
        oe(l, "class", t);
        break;
      case "tabIndex":
        oe(l, "tabindex", t);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        oe(l, u, t);
        break;
      case "style":
        zi(l, t, n);
        break;
      case "data":
        if (a !== "object") {
          oe(l, "data", t);
          break;
        }
      case "src":
      case "href":
        if (t === "" && (a !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (t == null || typeof t == "function" || typeof t == "symbol" || typeof t == "boolean") {
          l.removeAttribute(u);
          break;
        }
        t = De("" + t), l.setAttribute(u, t);
        break;
      case "action":
      case "formAction":
        if (typeof t == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (a !== "input" && j(l, a, "name", e.name, e, null), j(
            l,
            a,
            "formEncType",
            e.formEncType,
            e,
            null
          ), j(
            l,
            a,
            "formMethod",
            e.formMethod,
            e,
            null
          ), j(
            l,
            a,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (j(l, a, "encType", e.encType, e, null), j(l, a, "method", e.method, e, null), j(l, a, "target", e.target, e, null)));
        if (t == null || typeof t == "symbol" || typeof t == "boolean") {
          l.removeAttribute(u);
          break;
        }
        t = De("" + t), l.setAttribute(u, t);
        break;
      case "onClick":
        t != null && (l.onclick = bn);
        break;
      case "onScroll":
        t != null && q("scroll", l);
        break;
      case "onScrollEnd":
        t != null && q("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t))
            throw Error(b(61));
          if (u = t.__html, u != null) {
            if (e.children != null) throw Error(b(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "muted":
        l.muted = t && typeof t != "function" && typeof t != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (t == null || typeof t == "function" || typeof t == "boolean" || typeof t == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = De("" + t), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        t != null && typeof t != "function" && typeof t != "symbol" ? l.setAttribute(u, "" + t) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        t && typeof t != "function" && typeof t != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        t === !0 ? l.setAttribute(u, "") : t !== !1 && t != null && typeof t != "function" && typeof t != "symbol" ? l.setAttribute(u, t) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        t != null && typeof t != "function" && typeof t != "symbol" && !isNaN(t) && 1 <= t ? l.setAttribute(u, t) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        t == null || typeof t == "function" || typeof t == "symbol" || isNaN(t) ? l.removeAttribute(u) : l.setAttribute(u, t);
        break;
      case "popover":
        q("beforetoggle", l), q("toggle", l), Te(l, "popover", t);
        break;
      case "xlinkActuate":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          t
        );
        break;
      case "xlinkArcrole":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          t
        );
        break;
      case "xlinkRole":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          t
        );
        break;
      case "xlinkShow":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          t
        );
        break;
      case "xlinkTitle":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          t
        );
        break;
      case "xlinkType":
        da(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          t
        );
        break;
      case "xmlBase":
        da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          t
        );
        break;
      case "xmlLang":
        da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          t
        );
        break;
      case "xmlSpace":
        da(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          t
        );
        break;
      case "is":
        Te(l, "is", t);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = S3.get(u) || u, Te(l, u, t));
    }
  }
  function Nc(l, a, u, t, e, n) {
    switch (u) {
      case "style":
        zi(l, t, n);
        break;
      case "dangerouslySetInnerHTML":
        if (t != null) {
          if (typeof t != "object" || !("__html" in t))
            throw Error(b(61));
          if (u = t.__html, u != null) {
            if (e.children != null) throw Error(b(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof t == "string" ? qu(l, t) : (typeof t == "number" || typeof t == "bigint") && qu(l, "" + t);
        break;
      case "onScroll":
        t != null && q("scroll", l);
        break;
      case "onScrollEnd":
        t != null && q("scrollend", l);
        break;
      case "onClick":
        t != null && (l.onclick = bn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!ci.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), a = u.slice(2, e ? u.length - 7 : void 0), n = l[Tl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(a, n, e), typeof t == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(a, t, e);
              break l;
            }
            u in l ? l[u] = t : t === !0 ? l.setAttribute(u, "") : Te(l, u, t);
          }
    }
  }
  function sl(l, a, u) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        q("error", l), q("load", l);
        var t = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  t = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(b(137, a));
                default:
                  j(l, a, n, f, u, null);
              }
          }
        e && j(l, a, "srcSet", u.srcSet, u, null), t && j(l, a, "src", u.src, u, null);
        return;
      case "input":
        q("invalid", l);
        var c = n = f = e = null, i = null, d = null;
        for (t in u)
          if (u.hasOwnProperty(t)) {
            var S = u[t];
            if (S != null)
              switch (t) {
                case "name":
                  e = S;
                  break;
                case "type":
                  f = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  d = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  c = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null)
                    throw Error(b(137, a));
                  break;
                default:
                  j(l, a, t, S, u, null);
              }
          }
        mi(
          l,
          n,
          c,
          i,
          d,
          f,
          e,
          !1
        ), Me(l);
        return;
      case "select":
        q("invalid", l), t = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                t = c;
              default:
                j(l, a, e, c, u, null);
            }
        a = n, u = f, l.multiple = !!t, a != null ? Nu(l, !!t, a, !1) : u != null && Nu(l, !!t, u, !0);
        return;
      case "textarea":
        q("invalid", l), n = e = t = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                t = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(b(91));
                break;
              default:
                j(l, a, f, c, u, null);
            }
        gi(l, t, e, n), Me(l);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (t = u[i], t != null))
            switch (i) {
              case "selected":
                l.selected = t && typeof t != "function" && typeof t != "symbol";
                break;
              default:
                j(l, a, i, t, u, null);
            }
        return;
      case "dialog":
        q("beforetoggle", l), q("toggle", l), q("cancel", l), q("close", l);
        break;
      case "iframe":
      case "object":
        q("load", l);
        break;
      case "video":
      case "audio":
        for (t = 0; t < Ft.length; t++)
          q(Ft[t], l);
        break;
      case "image":
        q("error", l), q("load", l);
        break;
      case "details":
        q("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        q("error", l), q("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in u)
          if (u.hasOwnProperty(d) && (t = u[d], t != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(b(137, a));
              default:
                j(l, a, d, t, u, null);
            }
        return;
      default:
        if (Jn(a)) {
          for (S in u)
            u.hasOwnProperty(S) && (t = u[S], t !== void 0 && Nc(
              l,
              a,
              S,
              t,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (t = u[c], t != null && j(l, a, c, t, u, null));
  }
  function Vv(l, a, u, t) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, d = null, S = null;
        for (m in u) {
          var A = u[m];
          if (u.hasOwnProperty(m) && A != null)
            switch (m) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = A;
              default:
                t.hasOwnProperty(m) || j(l, a, m, null, t, A);
            }
        }
        for (var s in t) {
          var m = t[s];
          if (A = u[s], t.hasOwnProperty(s) && (m != null || A != null))
            switch (s) {
              case "type":
                n = m;
                break;
              case "name":
                e = m;
                break;
              case "checked":
                d = m;
                break;
              case "defaultChecked":
                S = m;
                break;
              case "value":
                f = m;
                break;
              case "defaultValue":
                c = m;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (m != null)
                  throw Error(b(137, a));
                break;
              default:
                m !== A && j(
                  l,
                  a,
                  s,
                  m,
                  t,
                  A
                );
            }
        }
        pn(
          l,
          f,
          c,
          i,
          d,
          S,
          n,
          e
        );
        return;
      case "select":
        m = f = c = s = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                m = i;
              default:
                t.hasOwnProperty(n) || j(
                  l,
                  a,
                  n,
                  null,
                  t,
                  i
                );
            }
        for (e in t)
          if (n = t[e], i = u[e], t.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                s = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && j(
                  l,
                  a,
                  e,
                  n,
                  t,
                  i
                );
            }
        a = c, u = f, t = m, s != null ? Nu(l, !!u, s, !1) : !!t != !!u && (a != null ? Nu(l, !!u, a, !0) : Nu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        m = s = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !t.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                j(l, a, c, null, t, e);
            }
        for (f in t)
          if (e = t[f], n = u[f], t.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                s = e;
                break;
              case "defaultValue":
                m = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(b(91));
                break;
              default:
                e !== n && j(l, a, f, e, t, n);
            }
        Si(l, s, m);
        return;
      case "option":
        for (var U in u)
          if (s = u[U], u.hasOwnProperty(U) && s != null && !t.hasOwnProperty(U))
            switch (U) {
              case "selected":
                l.selected = !1;
                break;
              default:
                j(
                  l,
                  a,
                  U,
                  null,
                  t,
                  s
                );
            }
        for (i in t)
          if (s = t[i], m = u[i], t.hasOwnProperty(i) && s !== m && (s != null || m != null))
            switch (i) {
              case "selected":
                l.selected = s && typeof s != "function" && typeof s != "symbol";
                break;
              default:
                j(
                  l,
                  a,
                  i,
                  s,
                  t,
                  m
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var D in u)
          s = u[D], u.hasOwnProperty(D) && s != null && !t.hasOwnProperty(D) && j(l, a, D, null, t, s);
        for (d in t)
          if (s = t[d], m = u[d], t.hasOwnProperty(d) && s !== m && (s != null || m != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (s != null)
                  throw Error(b(137, a));
                break;
              default:
                j(
                  l,
                  a,
                  d,
                  s,
                  t,
                  m
                );
            }
        return;
      default:
        if (Jn(a)) {
          for (var V in u)
            s = u[V], u.hasOwnProperty(V) && s !== void 0 && !t.hasOwnProperty(V) && Nc(
              l,
              a,
              V,
              void 0,
              t,
              s
            );
          for (S in t)
            s = t[S], m = u[S], !t.hasOwnProperty(S) || s === m || s === void 0 && m === void 0 || Nc(
              l,
              a,
              S,
              s,
              t,
              m
            );
          return;
        }
    }
    for (var h in u)
      s = u[h], u.hasOwnProperty(h) && s != null && !t.hasOwnProperty(h) && j(l, a, h, null, t, s);
    for (A in t)
      s = t[A], m = u[A], !t.hasOwnProperty(A) || s === m || s == null && m == null || j(l, a, A, s, t, m);
  }
  var qc = null, Bc = null;
  function zn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function b1(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function z1(l, a) {
    if (l === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && a === "foreignObject" ? 0 : l;
  }
  function Yc(l, a) {
    return l === "textarea" || l === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.children == "bigint" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null;
  }
  var Gc = null;
  function Cv() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Gc ? !1 : (Gc = l, !0) : (Gc = null, !1);
  }
  var A1 = typeof setTimeout == "function" ? setTimeout : void 0, Kv = typeof clearTimeout == "function" ? clearTimeout : void 0, T1 = typeof Promise == "function" ? Promise : void 0, pv = typeof queueMicrotask == "function" ? queueMicrotask : typeof T1 < "u" ? function(l) {
    return T1.resolve(null).then(l).catch(Lv);
  } : A1;
  function Lv(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function $a(l) {
    return l === "head";
  }
  function o1(l, a) {
    var u = a, t = 0, e = 0;
    do {
      var n = u.nextSibling;
      if (l.removeChild(u), n && n.nodeType === 8)
        if (u = n.data, u === "/$") {
          if (0 < t && 8 > t) {
            u = t;
            var f = l.ownerDocument;
            if (u & 1 && Pt(f.documentElement), u & 2 && Pt(f.body), u & 4)
              for (u = f.head, Pt(u), f = u.firstChild; f; ) {
                var c = f.nextSibling, i = f.nodeName;
                f[mt] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && f.rel.toLowerCase() === "stylesheet" || u.removeChild(f), f = c;
              }
          }
          if (e === 0) {
            l.removeChild(n), ce(a);
            return;
          }
          e--;
        } else
          u === "$" || u === "$?" || u === "$!" ? e++ : t = u.charCodeAt(0) - 48;
      else t = 0;
      u = n;
    } while (u);
    ce(a);
  }
  function Xc(l) {
    var a = l.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a; ) {
      var u = a;
      switch (a = a.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xc(u), jn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function Jv(l, a, u, t) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!t && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (t) {
        if (!l[mt])
          switch (a) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (a === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Pl(l.nextSibling), l === null) break;
    }
    return null;
  }
  function rv(l, a, u) {
    if (a === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Pl(l.nextSibling), l === null)) return null;
    return l;
  }
  function Qc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function wv(l, a) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      a();
    else {
      var t = function() {
        a(), u.removeEventListener("DOMContentLoaded", t);
      };
      u.addEventListener("DOMContentLoaded", t), l._reactRetry = t;
    }
  }
  function Pl(l) {
    for (; l != null; l = l.nextSibling) {
      var a = l.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (a = l.data, a === "$" || a === "$!" || a === "$?" || a === "F!" || a === "F")
          break;
        if (a === "/$") return null;
      }
    }
    return l;
  }
  var Zc = null;
  function M1(l) {
    l = l.previousSibling;
    for (var a = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (a === 0) return l;
          a--;
        } else u === "/$" && a++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function E1(l, a, u) {
    switch (a = zn(u), l) {
      case "html":
        if (l = a.documentElement, !l) throw Error(b(452));
        return l;
      case "head":
        if (l = a.head, !l) throw Error(b(453));
        return l;
      case "body":
        if (l = a.body, !l) throw Error(b(454));
        return l;
      default:
        throw Error(b(451));
    }
  }
  function Pt(l) {
    for (var a = l.attributes; a.length; )
      l.removeAttributeNode(a[0]);
    jn(l);
  }
  var wl = /* @__PURE__ */ new Map(), D1 = /* @__PURE__ */ new Set();
  function An(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Ua = T.d;
  T.d = {
    f: Wv,
    r: $v,
    D: kv,
    C: Fv,
    L: Iv,
    m: Pv,
    X: ah,
    S: lh,
    M: uh
  };
  function Wv() {
    var l = Ua.f(), a = hn();
    return l || a;
  }
  function $v(l) {
    var a = Uu(l);
    a !== null && a.tag === 5 && a.type === "form" ? L0(a) : Ua.r(l);
  }
  var ft = typeof document > "u" ? null : document;
  function O1(l, a, u) {
    var t = ft;
    if (t && typeof a == "string" && a) {
      var e = Vl(a);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), D1.has(e) || (D1.add(e), l = { rel: l, crossOrigin: u, href: a }, t.querySelector(e) === null && (a = t.createElement("link"), sl(a, "link", l), nl(a), t.head.appendChild(a)));
    }
  }
  function kv(l) {
    Ua.D(l), O1("dns-prefetch", l, null);
  }
  function Fv(l, a) {
    Ua.C(l, a), O1("preconnect", l, a);
  }
  function Iv(l, a, u) {
    Ua.L(l, a, u);
    var t = ft;
    if (t && l && a) {
      var e = 'link[rel="preload"][as="' + Vl(a) + '"]';
      a === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + Vl(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + Vl(
        u.imageSizes
      ) + '"]')) : e += '[href="' + Vl(l) + '"]';
      var n = e;
      switch (a) {
        case "style":
          n = ct(l);
          break;
        case "script":
          n = it(l);
      }
      wl.has(n) || (l = C(
        {
          rel: "preload",
          href: a === "image" && u && u.imageSrcSet ? void 0 : l,
          as: a
        },
        u
      ), wl.set(n, l), t.querySelector(e) !== null || a === "style" && t.querySelector(le(n)) || a === "script" && t.querySelector(ae(n)) || (a = t.createElement("link"), sl(a, "link", l), nl(a), t.head.appendChild(a)));
    }
  }
  function Pv(l, a) {
    Ua.m(l, a);
    var u = ft;
    if (u && l) {
      var t = a && typeof a.as == "string" ? a.as : "script", e = 'link[rel="modulepreload"][as="' + Vl(t) + '"][href="' + Vl(l) + '"]', n = e;
      switch (t) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = it(l);
      }
      if (!wl.has(n) && (l = C({ rel: "modulepreload", href: l }, a), wl.set(n, l), u.querySelector(e) === null)) {
        switch (t) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(ae(n)))
              return;
        }
        t = u.createElement("link"), sl(t, "link", l), nl(t), u.head.appendChild(t);
      }
    }
  }
  function lh(l, a, u) {
    Ua.S(l, a, u);
    var t = ft;
    if (t && l) {
      var e = Hu(t).hoistableStyles, n = ct(l);
      a = a || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = t.querySelector(
          le(n)
        ))
          c.loading = 5;
        else {
          l = C(
            { rel: "stylesheet", href: l, "data-precedence": a },
            u
          ), (u = wl.get(n)) && xc(l, u);
          var i = f = t.createElement("link");
          nl(i), sl(i, "link", l), i._p = new Promise(function(d, S) {
            i.onload = d, i.onerror = S;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Tn(f, a, t);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function ah(l, a) {
    Ua.X(l, a);
    var u = ft;
    if (u && l) {
      var t = Hu(u).hoistableScripts, e = it(l), n = t.get(e);
      n || (n = u.querySelector(ae(e)), n || (l = C({ src: l, async: !0 }, a), (a = wl.get(e)) && jc(l, a), n = u.createElement("script"), nl(n), sl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, t.set(e, n));
    }
  }
  function uh(l, a) {
    Ua.M(l, a);
    var u = ft;
    if (u && l) {
      var t = Hu(u).hoistableScripts, e = it(l), n = t.get(e);
      n || (n = u.querySelector(ae(e)), n || (l = C({ src: l, async: !0, type: "module" }, a), (a = wl.get(e)) && jc(l, a), n = u.createElement("script"), nl(n), sl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, t.set(e, n));
    }
  }
  function U1(l, a, u, t) {
    var e = (e = Na.current) ? An(e) : null;
    if (!e) throw Error(b(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (a = ct(u.href), u = Hu(
          e
        ).hoistableStyles, t = u.get(a), t || (t = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, t)), t) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ct(u.href);
          var n = Hu(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            le(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), wl.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, wl.set(l, u), n || th(
            e,
            l,
            u,
            f.state
          ))), a && t === null)
            throw Error(b(528, ""));
          return f;
        }
        if (a && t !== null)
          throw Error(b(529, ""));
        return null;
      case "script":
        return a = u.async, u = u.src, typeof u == "string" && a && typeof a != "function" && typeof a != "symbol" ? (a = it(u), u = Hu(
          e
        ).hoistableScripts, t = u.get(a), t || (t = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(a, t)), t) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(b(444, l));
    }
  }
  function ct(l) {
    return 'href="' + Vl(l) + '"';
  }
  function le(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function H1(l) {
    return C({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function th(l, a, u, t) {
    l.querySelector('link[rel="preload"][as="style"][' + a + "]") ? t.loading = 1 : (a = l.createElement("link"), t.preload = a, a.addEventListener("load", function() {
      return t.loading |= 1;
    }), a.addEventListener("error", function() {
      return t.loading |= 2;
    }), sl(a, "link", u), nl(a), l.head.appendChild(a));
  }
  function it(l) {
    return '[src="' + Vl(l) + '"]';
  }
  function ae(l) {
    return "script[async]" + l;
  }
  function _1(l, a, u) {
    if (a.count++, a.instance === null)
      switch (a.type) {
        case "style":
          var t = l.querySelector(
            'style[data-href~="' + Vl(u.href) + '"]'
          );
          if (t)
            return a.instance = t, nl(t), t;
          var e = C({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return t = (l.ownerDocument || l).createElement(
            "style"
          ), nl(t), sl(t, "style", e), Tn(t, u.precedence, l), a.instance = t;
        case "stylesheet":
          e = ct(u.href);
          var n = l.querySelector(
            le(e)
          );
          if (n)
            return a.state.loading |= 4, a.instance = n, nl(n), n;
          t = H1(u), (e = wl.get(e)) && xc(t, e), n = (l.ownerDocument || l).createElement("link"), nl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), sl(n, "link", t), a.state.loading |= 4, Tn(n, u.precedence, l), a.instance = n;
        case "script":
          return n = it(u.src), (e = l.querySelector(
            ae(n)
          )) ? (a.instance = e, nl(e), e) : (t = u, (e = wl.get(n)) && (t = C({}, u), jc(t, e)), l = l.ownerDocument || l, e = l.createElement("script"), nl(e), sl(e, "link", t), l.head.appendChild(e), a.instance = e);
        case "void":
          return null;
        default:
          throw Error(b(443, a.type));
      }
    else
      a.type === "stylesheet" && (a.state.loading & 4) === 0 && (t = a.instance, a.state.loading |= 4, Tn(t, u.precedence, l));
    return a.instance;
  }
  function Tn(l, a, u) {
    for (var t = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = t.length ? t[t.length - 1] : null, n = e, f = 0; f < t.length; f++) {
      var c = t[f];
      if (c.dataset.precedence === a) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (a = u.nodeType === 9 ? u.head : u, a.insertBefore(l, a.firstChild));
  }
  function xc(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.title == null && (l.title = a.title);
  }
  function jc(l, a) {
    l.crossOrigin == null && (l.crossOrigin = a.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = a.referrerPolicy), l.integrity == null && (l.integrity = a.integrity);
  }
  var on = null;
  function R1(l, a, u) {
    if (on === null) {
      var t = /* @__PURE__ */ new Map(), e = on = /* @__PURE__ */ new Map();
      e.set(u, t);
    } else
      e = on, t = e.get(u), t || (t = /* @__PURE__ */ new Map(), e.set(u, t));
    if (t.has(l)) return t;
    for (t.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[mt] || n[ml] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(a) || "";
        f = l + f;
        var c = t.get(f);
        c ? c.push(n) : t.set(f, [n]);
      }
    }
    return t;
  }
  function N1(l, a, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      a === "title" ? l.querySelector("head > title") : null
    );
  }
  function eh(l, a, u) {
    if (u === 1 || a.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof a.precedence != "string" || typeof a.href != "string" || a.href === "")
          break;
        return !0;
      case "link":
        if (typeof a.rel != "string" || typeof a.href != "string" || a.href === "" || a.onLoad || a.onError)
          break;
        switch (a.rel) {
          case "stylesheet":
            return l = a.disabled, typeof a.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (a.async && typeof a.async != "function" && typeof a.async != "symbol" && !a.onLoad && !a.onError && a.src && typeof a.src == "string")
          return !0;
    }
    return !1;
  }
  function q1(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var ue = null;
  function nh() {
  }
  function fh(l, a, u) {
    if (ue === null) throw Error(b(475));
    var t = ue;
    if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var e = ct(u.href), n = l.querySelector(
          le(e)
        );
        if (n) {
          l = n._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Mn.bind(t), l.then(t, t)), a.state.loading |= 4, a.instance = n, nl(n);
          return;
        }
        n = l.ownerDocument || l, u = H1(u), (e = wl.get(e)) && xc(u, e), n = n.createElement("link"), nl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), sl(n, "link", u), a.instance = n;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(a, l), (l = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++, a = Mn.bind(t), l.addEventListener("load", a), l.addEventListener("error", a));
    }
  }
  function ch() {
    if (ue === null) throw Error(b(475));
    var l = ue;
    return l.stylesheets && l.count === 0 && Vc(l, l.stylesheets), 0 < l.count ? function(a) {
      var u = setTimeout(function() {
        if (l.stylesheets && Vc(l, l.stylesheets), l.unsuspend) {
          var t = l.unsuspend;
          l.unsuspend = null, t();
        }
      }, 6e4);
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function Mn() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) Vc(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var En = null;
  function Vc(l, a) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, En = /* @__PURE__ */ new Map(), a.forEach(ih, l), En = null, Mn.call(l));
  }
  function ih(l, a) {
    if (!(a.state.loading & 4)) {
      var u = En.get(l);
      if (u) var t = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), En.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), t = f);
        }
        t && u.set(null, t);
      }
      e = a.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || t, n === t && u.set(null, e), u.set(f, e), this.count++, t = Mn.bind(this), e.addEventListener("load", t), e.addEventListener("error", t), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), a.state.loading |= 4;
    }
  }
  var te = {
    $$typeof: Zl,
    Provider: null,
    Consumer: null,
    _currentValue: H,
    _currentValue2: H,
    _threadCount: 0
  };
  function vh(l, a, u, t, e, n, f, c) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xn(0), this.hiddenUpdates = Xn(null), this.identifierPrefix = t, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function B1(l, a, u, t, e, n, f, c, i, d, S, A) {
    return l = new vh(
      l,
      a,
      u,
      f,
      c,
      i,
      d,
      A
    ), a = 1, n === !0 && (a |= 24), n = Rl(3, null, null, a), l.current = n, n.stateNode = l, a = of(), a.refCount++, l.pooledCache = a, a.refCount++, n.memoizedState = {
      element: t,
      isDehydrated: u,
      cache: a
    }, Of(n), l;
  }
  function Y1(l) {
    return l ? (l = ju, l) : ju;
  }
  function G1(l, a, u, t, e, n) {
    e = Y1(e), t.context === null ? t.context = e : t.pendingContext = e, t = Qa(a), t.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (t.callback = n), u = Za(l, t, a), u !== null && (Gl(u, l, a), Yt(u, l, a));
  }
  function X1(l, a) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < a ? u : a;
    }
  }
  function Cc(l, a) {
    X1(l, a), (l = l.alternate) && X1(l, a);
  }
  function Q1(l) {
    if (l.tag === 13) {
      var a = xu(l, 67108864);
      a !== null && Gl(a, l, 67108864), Cc(l, 67108864);
    }
  }
  var Dn = !0;
  function hh(l, a, u, t) {
    var e = z.T;
    z.T = null;
    var n = T.p;
    try {
      T.p = 2, Kc(l, a, u, t);
    } finally {
      T.p = n, z.T = e;
    }
  }
  function yh(l, a, u, t) {
    var e = z.T;
    z.T = null;
    var n = T.p;
    try {
      T.p = 8, Kc(l, a, u, t);
    } finally {
      T.p = n, z.T = e;
    }
  }
  function Kc(l, a, u, t) {
    if (Dn) {
      var e = pc(t);
      if (e === null)
        Rc(
          l,
          a,
          t,
          On,
          u
        ), x1(l, t);
      else if (sh(
        e,
        l,
        a,
        u,
        t
      ))
        t.stopPropagation();
      else if (x1(l, t), a & 4 && -1 < dh.indexOf(l)) {
        for (; e !== null; ) {
          var n = Uu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = tu(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Hl(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    ca(n), (X & 6) === 0 && (cn = ua() + 500, kt(0));
                  }
                }
                break;
              case 13:
                c = xu(n, 2), c !== null && Gl(c, n, 2), hn(), Cc(n, 2);
            }
          if (n = pc(t), n === null && Rc(
            l,
            a,
            t,
            On,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && t.stopPropagation();
      } else
        Rc(
          l,
          a,
          t,
          null,
          u
        );
    }
  }
  function pc(l) {
    return l = wn(l), Lc(l);
  }
  var On = null;
  function Lc(l) {
    if (On = null, l = Ou(l), l !== null) {
      var a = gl(l);
      if (a === null) l = null;
      else {
        var u = a.tag;
        if (u === 13) {
          if (l = ia(a), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          l = null;
        } else a !== l && (l = null);
      }
    }
    return On = l, null;
  }
  function Z1(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (F1()) {
          case Fc:
            return 2;
          case Ic:
            return 8;
          case ge:
          case I1:
            return 32;
          case Pc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Jc = !1, ka = null, Fa = null, Ia = null, ee = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map(), Pa = [], dh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function x1(l, a) {
    switch (l) {
      case "focusin":
      case "focusout":
        ka = null;
        break;
      case "dragenter":
      case "dragleave":
        Fa = null;
        break;
      case "mouseover":
      case "mouseout":
        Ia = null;
        break;
      case "pointerover":
      case "pointerout":
        ee.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ne.delete(a.pointerId);
    }
  }
  function fe(l, a, u, t, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: a,
      domEventName: u,
      eventSystemFlags: t,
      nativeEvent: n,
      targetContainers: [e]
    }, a !== null && (a = Uu(a), a !== null && Q1(a)), l) : (l.eventSystemFlags |= t, a = l.targetContainers, e !== null && a.indexOf(e) === -1 && a.push(e), l);
  }
  function sh(l, a, u, t, e) {
    switch (a) {
      case "focusin":
        return ka = fe(
          ka,
          l,
          a,
          u,
          t,
          e
        ), !0;
      case "dragenter":
        return Fa = fe(
          Fa,
          l,
          a,
          u,
          t,
          e
        ), !0;
      case "mouseover":
        return Ia = fe(
          Ia,
          l,
          a,
          u,
          t,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return ee.set(
          n,
          fe(
            ee.get(n) || null,
            l,
            a,
            u,
            t,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ne.set(
          n,
          fe(
            ne.get(n) || null,
            l,
            a,
            u,
            t,
            e
          )
        ), !0;
    }
    return !1;
  }
  function j1(l) {
    var a = Ou(l.target);
    if (a !== null) {
      var u = gl(a);
      if (u !== null) {
        if (a = u.tag, a === 13) {
          if (a = ia(u), a !== null) {
            l.blockedOn = a, f3(l.priority, function() {
              if (u.tag === 13) {
                var t = Yl();
                t = Qn(t);
                var e = xu(u, t);
                e !== null && Gl(e, u, t), Cc(u, t);
              }
            });
            return;
          }
        } else if (a === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Un(l) {
    if (l.blockedOn !== null) return !1;
    for (var a = l.targetContainers; 0 < a.length; ) {
      var u = pc(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var t = new u.constructor(
          u.type,
          u
        );
        rn = t, u.target.dispatchEvent(t), rn = null;
      } else
        return a = Uu(u), a !== null && Q1(a), l.blockedOn = u, !1;
      a.shift();
    }
    return !0;
  }
  function V1(l, a, u) {
    Un(l) && u.delete(a);
  }
  function mh() {
    Jc = !1, ka !== null && Un(ka) && (ka = null), Fa !== null && Un(Fa) && (Fa = null), Ia !== null && Un(Ia) && (Ia = null), ee.forEach(V1), ne.forEach(V1);
  }
  function Hn(l, a) {
    l.blockedOn === a && (l.blockedOn = null, Jc || (Jc = !0, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      mh
    )));
  }
  var _n = null;
  function C1(l) {
    _n !== l && (_n = l, E.unstable_scheduleCallback(
      E.unstable_NormalPriority,
      function() {
        _n === l && (_n = null);
        for (var a = 0; a < l.length; a += 3) {
          var u = l[a], t = l[a + 1], e = l[a + 2];
          if (typeof t != "function") {
            if (Lc(t || u) === null)
              continue;
            break;
          }
          var n = Uu(u);
          n !== null && (l.splice(a, 3), a -= 3, Lf(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: t
            },
            t,
            e
          ));
        }
      }
    ));
  }
  function ce(l) {
    function a(i) {
      return Hn(i, l);
    }
    ka !== null && Hn(ka, l), Fa !== null && Hn(Fa, l), Ia !== null && Hn(Ia, l), ee.forEach(a), ne.forEach(a);
    for (var u = 0; u < Pa.length; u++) {
      var t = Pa[u];
      t.blockedOn === l && (t.blockedOn = null);
    }
    for (; 0 < Pa.length && (u = Pa[0], u.blockedOn === null); )
      j1(u), u.blockedOn === null && Pa.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (t = 0; t < u.length; t += 3) {
        var e = u[t], n = u[t + 1], f = e[Tl] || null;
        if (typeof n == "function")
          f || C1(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Tl] || null)
              c = f.formAction;
            else if (Lc(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[t + 1] = c : (u.splice(t, 3), t -= 3), C1(u);
        }
      }
  }
  function rc(l) {
    this._internalRoot = l;
  }
  Rn.prototype.render = rc.prototype.render = function(l) {
    var a = this._internalRoot;
    if (a === null) throw Error(b(409));
    var u = a.current, t = Yl();
    G1(u, t, l, a, null, null);
  }, Rn.prototype.unmount = rc.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var a = l.containerInfo;
      G1(l.current, 2, null, l, null, null), hn(), a[Du] = null;
    }
  };
  function Rn(l) {
    this._internalRoot = l;
  }
  Rn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var a = ei();
      l = { blockedOn: null, target: l, priority: a };
      for (var u = 0; u < Pa.length && a !== 0 && a < Pa[u].priority; u++) ;
      Pa.splice(u, 0, l), u === 0 && j1(l);
    }
  };
  var K1 = Xl.version;
  if (K1 !== "19.1.0")
    throw Error(
      b(
        527,
        K1,
        "19.1.0"
      )
    );
  T.findDOMNode = function(l) {
    var a = l._reactInternals;
    if (a === void 0)
      throw typeof l.render == "function" ? Error(b(188)) : (l = Object.keys(l).join(","), Error(b(268, l)));
    return l = Wl(a), l = l !== null ? $l(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Sh = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Nn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Nn.isDisabled && Nn.supportsFiber)
      try {
        yt = Nn.inject(
          Sh
        ), Ul = Nn;
      } catch {
      }
  }
  return ve.createRoot = function(l, a) {
    if (!hl(l)) throw Error(b(299));
    var u = !1, t = "", e = e2, n = n2, f = f2, c = null;
    return a != null && (a.unstable_strictMode === !0 && (u = !0), a.identifierPrefix !== void 0 && (t = a.identifierPrefix), a.onUncaughtError !== void 0 && (e = a.onUncaughtError), a.onCaughtError !== void 0 && (n = a.onCaughtError), a.onRecoverableError !== void 0 && (f = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (c = a.unstable_transitionCallbacks)), a = B1(
      l,
      1,
      !1,
      null,
      null,
      u,
      t,
      e,
      n,
      f,
      c,
      null
    ), l[Du] = a.current, _c(l), new rc(a);
  }, ve.hydrateRoot = function(l, a, u) {
    if (!hl(l)) throw Error(b(299));
    var t = !1, e = "", n = e2, f = n2, c = f2, i = null, d = null;
    return u != null && (u.unstable_strictMode === !0 && (t = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (i = u.unstable_transitionCallbacks), u.formState !== void 0 && (d = u.formState)), a = B1(
      l,
      1,
      !0,
      a,
      u ?? null,
      t,
      e,
      n,
      f,
      c,
      i,
      d
    ), a.context = Y1(null), u = a.current, t = Yl(), t = Qn(t), e = Qa(t), e.callback = null, Za(u, e, t), u = t, a.current.lanes = u, st(a, u), ca(a), l[Du] = a.current, _c(l), new Rn(a);
  }, ve.version = "19.1.0", ve;
}
var W1;
function Oh() {
  if (W1) return Wc.exports;
  W1 = 1;
  function E() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (Xl) {
        console.error(Xl);
      }
  }
  return E(), Wc.exports = Dh(), Wc.exports;
}
var Uh = Oh();
const Hh = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", _h = "/vite.svg";
function Rh() {
  const [E, Xl] = zh(0);
  return /* @__PURE__ */ Ol.jsxs(Ol.Fragment, { children: [
    /* @__PURE__ */ Ol.jsxs("div", { children: [
      /* @__PURE__ */ Ol.jsx("a", { href: "https://vite.dev", target: "_blank", children: /* @__PURE__ */ Ol.jsx("img", { src: _h, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ Ol.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ Ol.jsx("img", { src: Hh, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ Ol.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ Ol.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ Ol.jsxs("button", { onClick: () => Xl((vl) => vl + 1), children: [
        "count is ",
        E
      ] }),
      /* @__PURE__ */ Ol.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ Ol.jsx("code", { children: "src/App.jsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ Ol.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
window.mount = (E) => {
  Uh.createRoot(E).render(/* @__PURE__ */ Ol.jsx(Rh, {}));
};
