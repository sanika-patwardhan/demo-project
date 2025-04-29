import R1, { useState as Vb } from "react";
import C2 from "react-dom";
var Fp = { exports: {} }, Py = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A2;
function Xb() {
  if (A2) return Py;
  A2 = 1;
  var L = Symbol.for("react.transitional.element"), Dt = Symbol.for("react.fragment");
  function tt(q, Fe, ut) {
    var el = null;
    if (ut !== void 0 && (el = "" + ut), Fe.key !== void 0 && (el = "" + Fe.key), "key" in Fe) {
      ut = {};
      for (var Al in Fe)
        Al !== "key" && (ut[Al] = Fe[Al]);
    } else ut = Fe;
    return Fe = ut.ref, {
      $$typeof: L,
      type: q,
      key: el,
      ref: Fe !== void 0 ? Fe : null,
      props: ut
    };
  }
  return Py.Fragment = Dt, Py.jsx = tt, Py.jsxs = tt, Py;
}
var em = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R2;
function jb() {
  return R2 || (R2 = 1, process.env.NODE_ENV !== "production" && function() {
    function L(C) {
      if (C == null) return null;
      if (typeof C == "function")
        return C.$$typeof === pt ? null : C.displayName || C.name || null;
      if (typeof C == "string") return C;
      switch (C) {
        case Yl:
          return "Fragment";
        case $e:
          return "Profiler";
        case ct:
          return "StrictMode";
        case _l:
          return "Suspense";
        case Mt:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof C == "object")
        switch (typeof C.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), C.$$typeof) {
          case rt:
            return "Portal";
          case Ot:
            return (C.displayName || "Context") + ".Provider";
          case va:
            return (C._context.displayName || "Context") + ".Consumer";
          case yl:
            var P = C.render;
            return C = C.displayName, C || (C = P.displayName || P.name || "", C = C !== "" ? "ForwardRef(" + C + ")" : "ForwardRef"), C;
          case qe:
            return P = C.displayName || null, P !== null ? P : L(C.type) || "Memo";
          case Zt:
            P = C._payload, C = C._init;
            try {
              return L(C(P));
            } catch {
            }
        }
      return null;
    }
    function Dt(C) {
      return "" + C;
    }
    function tt(C) {
      try {
        Dt(C);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var J = P.error, ue = typeof Symbol == "function" && Symbol.toStringTag && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return J.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ue
        ), Dt(C);
      }
    }
    function q(C) {
      if (C === Yl) return "<>";
      if (typeof C == "object" && C !== null && C.$$typeof === Zt)
        return "<...>";
      try {
        var P = L(C);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Fe() {
      var C = Xe.A;
      return C === null ? null : C.getOwner();
    }
    function ut() {
      return Error("react-stack-top-frame");
    }
    function el(C) {
      if (de.call(C, "key")) {
        var P = Object.getOwnPropertyDescriptor(C, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return C.key !== void 0;
    }
    function Al(C, P) {
      function J() {
        Bt || (Bt = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      J.isReactWarning = !0, Object.defineProperty(C, "key", {
        get: J,
        configurable: !0
      });
    }
    function K() {
      var C = L(this.type);
      return A[C] || (A[C] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), C = this.props.ref, C !== void 0 ? C : null;
    }
    function Nt(C, P, J, ue, Ae, Pe, Ue, Uu) {
      return J = Pe.ref, C = {
        $$typeof: mt,
        type: C,
        key: P,
        props: Pe,
        _owner: Ae
      }, (J !== void 0 ? J : null) !== null ? Object.defineProperty(C, "ref", {
        enumerable: !1,
        get: K
      }) : Object.defineProperty(C, "ref", { enumerable: !1, value: null }), C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(C, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(C, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ue
      }), Object.defineProperty(C, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Uu
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    }
    function Be(C, P, J, ue, Ae, Pe, Ue, Uu) {
      var vt = P.children;
      if (vt !== void 0)
        if (ue)
          if (Lt(vt)) {
            for (ue = 0; ue < vt.length; ue++)
              Ie(vt[ue]);
            Object.freeze && Object.freeze(vt);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else Ie(vt);
      if (de.call(P, "key")) {
        vt = L(C);
        var tl = Object.keys(P).filter(function(Ec) {
          return Ec !== "key";
        });
        ue = 0 < tl.length ? "{key: someKey, " + tl.join(": ..., ") + ": ...}" : "{key: someKey}", ne[vt + ue] || (tl = 0 < tl.length ? "{" + tl.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ue,
          vt,
          tl,
          vt
        ), ne[vt + ue] = !0);
      }
      if (vt = null, J !== void 0 && (tt(J), vt = "" + J), el(P) && (tt(P.key), vt = "" + P.key), "key" in P) {
        J = {};
        for (var ga in P)
          ga !== "key" && (J[ga] = P[ga]);
      } else J = P;
      return vt && Al(
        J,
        typeof C == "function" ? C.displayName || C.name || "Unknown" : C
      ), Nt(
        C,
        vt,
        Pe,
        Ae,
        Fe(),
        J,
        Ue,
        Uu
      );
    }
    function Ie(C) {
      typeof C == "object" && C !== null && C.$$typeof === mt && C._store && (C._store.validated = 1);
    }
    var ge = R1, mt = Symbol.for("react.transitional.element"), rt = Symbol.for("react.portal"), Yl = Symbol.for("react.fragment"), ct = Symbol.for("react.strict_mode"), $e = Symbol.for("react.profiler"), va = Symbol.for("react.consumer"), Ot = Symbol.for("react.context"), yl = Symbol.for("react.forward_ref"), _l = Symbol.for("react.suspense"), Mt = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), Zt = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), pt = Symbol.for("react.client.reference"), Xe = ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = Object.prototype.hasOwnProperty, Lt = Array.isArray, Rl = console.createTask ? console.createTask : function() {
      return null;
    };
    ge = {
      "react-stack-bottom-frame": function(C) {
        return C();
      }
    };
    var Bt, A = {}, j = ge["react-stack-bottom-frame"].bind(
      ge,
      ut
    )(), Z = Rl(q(ut)), ne = {};
    em.Fragment = Yl, em.jsx = function(C, P, J, ue, Ae) {
      var Pe = 1e4 > Xe.recentlyCreatedOwnerStacks++;
      return Be(
        C,
        P,
        J,
        !1,
        ue,
        Ae,
        Pe ? Error("react-stack-top-frame") : j,
        Pe ? Rl(q(C)) : Z
      );
    }, em.jsxs = function(C, P, J, ue, Ae) {
      var Pe = 1e4 > Xe.recentlyCreatedOwnerStacks++;
      return Be(
        C,
        P,
        J,
        !0,
        ue,
        Ae,
        Pe ? Error("react-stack-top-frame") : j,
        Pe ? Rl(q(C)) : Z
      );
    };
  }()), em;
}
var z2;
function Qb() {
  return z2 || (z2 = 1, process.env.NODE_ENV === "production" ? Fp.exports = Xb() : Fp.exports = jb()), Fp.exports;
}
var Ga = Qb(), Ip = { exports: {} }, tm = {}, Pp = { exports: {} }, E1 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D2;
function Zb() {
  return D2 || (D2 = 1, function(L) {
    function Dt(A, j) {
      var Z = A.length;
      A.push(j);
      e: for (; 0 < Z; ) {
        var ne = Z - 1 >>> 1, C = A[ne];
        if (0 < Fe(C, j))
          A[ne] = j, A[Z] = C, Z = ne;
        else break e;
      }
    }
    function tt(A) {
      return A.length === 0 ? null : A[0];
    }
    function q(A) {
      if (A.length === 0) return null;
      var j = A[0], Z = A.pop();
      if (Z !== j) {
        A[0] = Z;
        e: for (var ne = 0, C = A.length, P = C >>> 1; ne < P; ) {
          var J = 2 * (ne + 1) - 1, ue = A[J], Ae = J + 1, Pe = A[Ae];
          if (0 > Fe(ue, Z))
            Ae < C && 0 > Fe(Pe, ue) ? (A[ne] = Pe, A[Ae] = Z, ne = Ae) : (A[ne] = ue, A[J] = Z, ne = J);
          else if (Ae < C && 0 > Fe(Pe, Z))
            A[ne] = Pe, A[Ae] = Z, ne = Ae;
          else break e;
        }
      }
      return j;
    }
    function Fe(A, j) {
      var Z = A.sortIndex - j.sortIndex;
      return Z !== 0 ? Z : A.id - j.id;
    }
    if (L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ut = performance;
      L.unstable_now = function() {
        return ut.now();
      };
    } else {
      var el = Date, Al = el.now();
      L.unstable_now = function() {
        return el.now() - Al;
      };
    }
    var K = [], Nt = [], Be = 1, Ie = null, ge = 3, mt = !1, rt = !1, Yl = !1, ct = !1, $e = typeof setTimeout == "function" ? setTimeout : null, va = typeof clearTimeout == "function" ? clearTimeout : null, Ot = typeof setImmediate < "u" ? setImmediate : null;
    function yl(A) {
      for (var j = tt(Nt); j !== null; ) {
        if (j.callback === null) q(Nt);
        else if (j.startTime <= A)
          q(Nt), j.sortIndex = j.expirationTime, Dt(K, j);
        else break;
        j = tt(Nt);
      }
    }
    function _l(A) {
      if (Yl = !1, yl(A), !rt)
        if (tt(K) !== null)
          rt = !0, Mt || (Mt = !0, de());
        else {
          var j = tt(Nt);
          j !== null && Bt(_l, j.startTime - A);
        }
    }
    var Mt = !1, qe = -1, Zt = 5, te = -1;
    function pt() {
      return ct ? !0 : !(L.unstable_now() - te < Zt);
    }
    function Xe() {
      if (ct = !1, Mt) {
        var A = L.unstable_now();
        te = A;
        var j = !0;
        try {
          e: {
            rt = !1, Yl && (Yl = !1, va(qe), qe = -1), mt = !0;
            var Z = ge;
            try {
              t: {
                for (yl(A), Ie = tt(K); Ie !== null && !(Ie.expirationTime > A && pt()); ) {
                  var ne = Ie.callback;
                  if (typeof ne == "function") {
                    Ie.callback = null, ge = Ie.priorityLevel;
                    var C = ne(
                      Ie.expirationTime <= A
                    );
                    if (A = L.unstable_now(), typeof C == "function") {
                      Ie.callback = C, yl(A), j = !0;
                      break t;
                    }
                    Ie === tt(K) && q(K), yl(A);
                  } else q(K);
                  Ie = tt(K);
                }
                if (Ie !== null) j = !0;
                else {
                  var P = tt(Nt);
                  P !== null && Bt(
                    _l,
                    P.startTime - A
                  ), j = !1;
                }
              }
              break e;
            } finally {
              Ie = null, ge = Z, mt = !1;
            }
            j = void 0;
          }
        } finally {
          j ? de() : Mt = !1;
        }
      }
    }
    var de;
    if (typeof Ot == "function")
      de = function() {
        Ot(Xe);
      };
    else if (typeof MessageChannel < "u") {
      var Lt = new MessageChannel(), Rl = Lt.port2;
      Lt.port1.onmessage = Xe, de = function() {
        Rl.postMessage(null);
      };
    } else
      de = function() {
        $e(Xe, 0);
      };
    function Bt(A, j) {
      qe = $e(function() {
        A(L.unstable_now());
      }, j);
    }
    L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(A) {
      A.callback = null;
    }, L.unstable_forceFrameRate = function(A) {
      0 > A || 125 < A ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Zt = 0 < A ? Math.floor(1e3 / A) : 5;
    }, L.unstable_getCurrentPriorityLevel = function() {
      return ge;
    }, L.unstable_next = function(A) {
      switch (ge) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = ge;
      }
      var Z = ge;
      ge = j;
      try {
        return A();
      } finally {
        ge = Z;
      }
    }, L.unstable_requestPaint = function() {
      ct = !0;
    }, L.unstable_runWithPriority = function(A, j) {
      switch (A) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          A = 3;
      }
      var Z = ge;
      ge = A;
      try {
        return j();
      } finally {
        ge = Z;
      }
    }, L.unstable_scheduleCallback = function(A, j, Z) {
      var ne = L.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ne + Z : ne) : Z = ne, A) {
        case 1:
          var C = -1;
          break;
        case 2:
          C = 250;
          break;
        case 5:
          C = 1073741823;
          break;
        case 4:
          C = 1e4;
          break;
        default:
          C = 5e3;
      }
      return C = Z + C, A = {
        id: Be++,
        callback: j,
        priorityLevel: A,
        startTime: Z,
        expirationTime: C,
        sortIndex: -1
      }, Z > ne ? (A.sortIndex = Z, Dt(Nt, A), tt(K) === null && A === tt(Nt) && (Yl ? (va(qe), qe = -1) : Yl = !0, Bt(_l, Z - ne))) : (A.sortIndex = C, Dt(K, A), rt || mt || (rt = !0, Mt || (Mt = !0, de()))), A;
    }, L.unstable_shouldYield = pt, L.unstable_wrapCallback = function(A) {
      var j = ge;
      return function() {
        var Z = ge;
        ge = j;
        try {
          return A.apply(this, arguments);
        } finally {
          ge = Z;
        }
      };
    };
  }(E1)), E1;
}
var A1 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var O2;
function Lb() {
  return O2 || (O2 = 1, function(L) {
    process.env.NODE_ENV !== "production" && function() {
      function Dt() {
        if (_l = !1, te) {
          var A = L.unstable_now();
          de = A;
          var j = !0;
          try {
            e: {
              Ot = !1, yl && (yl = !1, qe(pt), pt = -1), va = !0;
              var Z = $e;
              try {
                t: {
                  for (el(A), ct = q(mt); ct !== null && !(ct.expirationTime > A && K()); ) {
                    var ne = ct.callback;
                    if (typeof ne == "function") {
                      ct.callback = null, $e = ct.priorityLevel;
                      var C = ne(
                        ct.expirationTime <= A
                      );
                      if (A = L.unstable_now(), typeof C == "function") {
                        ct.callback = C, el(A), j = !0;
                        break t;
                      }
                      ct === q(mt) && Fe(mt), el(A);
                    } else Fe(mt);
                    ct = q(mt);
                  }
                  if (ct !== null) j = !0;
                  else {
                    var P = q(rt);
                    P !== null && Nt(
                      Al,
                      P.startTime - A
                    ), j = !1;
                  }
                }
                break e;
              } finally {
                ct = null, $e = Z, va = !1;
              }
              j = void 0;
            }
          } finally {
            j ? Lt() : te = !1;
          }
        }
      }
      function tt(A, j) {
        var Z = A.length;
        A.push(j);
        e: for (; 0 < Z; ) {
          var ne = Z - 1 >>> 1, C = A[ne];
          if (0 < ut(C, j))
            A[ne] = j, A[Z] = C, Z = ne;
          else break e;
        }
      }
      function q(A) {
        return A.length === 0 ? null : A[0];
      }
      function Fe(A) {
        if (A.length === 0) return null;
        var j = A[0], Z = A.pop();
        if (Z !== j) {
          A[0] = Z;
          e: for (var ne = 0, C = A.length, P = C >>> 1; ne < P; ) {
            var J = 2 * (ne + 1) - 1, ue = A[J], Ae = J + 1, Pe = A[Ae];
            if (0 > ut(ue, Z))
              Ae < C && 0 > ut(Pe, ue) ? (A[ne] = Pe, A[Ae] = Z, ne = Ae) : (A[ne] = ue, A[J] = Z, ne = J);
            else if (Ae < C && 0 > ut(Pe, Z))
              A[ne] = Pe, A[Ae] = Z, ne = Ae;
            else break e;
          }
        }
        return j;
      }
      function ut(A, j) {
        var Z = A.sortIndex - j.sortIndex;
        return Z !== 0 ? Z : A.id - j.id;
      }
      function el(A) {
        for (var j = q(rt); j !== null; ) {
          if (j.callback === null) Fe(rt);
          else if (j.startTime <= A)
            Fe(rt), j.sortIndex = j.expirationTime, tt(mt, j);
          else break;
          j = q(rt);
        }
      }
      function Al(A) {
        if (yl = !1, el(A), !Ot)
          if (q(mt) !== null)
            Ot = !0, te || (te = !0, Lt());
          else {
            var j = q(rt);
            j !== null && Nt(
              Al,
              j.startTime - A
            );
          }
      }
      function K() {
        return _l ? !0 : !(L.unstable_now() - de < Xe);
      }
      function Nt(A, j) {
        pt = Mt(function() {
          A(L.unstable_now());
        }, j);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), L.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Be = performance;
        L.unstable_now = function() {
          return Be.now();
        };
      } else {
        var Ie = Date, ge = Ie.now();
        L.unstable_now = function() {
          return Ie.now() - ge;
        };
      }
      var mt = [], rt = [], Yl = 1, ct = null, $e = 3, va = !1, Ot = !1, yl = !1, _l = !1, Mt = typeof setTimeout == "function" ? setTimeout : null, qe = typeof clearTimeout == "function" ? clearTimeout : null, Zt = typeof setImmediate < "u" ? setImmediate : null, te = !1, pt = -1, Xe = 5, de = -1;
      if (typeof Zt == "function")
        var Lt = function() {
          Zt(Dt);
        };
      else if (typeof MessageChannel < "u") {
        var Rl = new MessageChannel(), Bt = Rl.port2;
        Rl.port1.onmessage = Dt, Lt = function() {
          Bt.postMessage(null);
        };
      } else
        Lt = function() {
          Mt(Dt, 0);
        };
      L.unstable_IdlePriority = 5, L.unstable_ImmediatePriority = 1, L.unstable_LowPriority = 4, L.unstable_NormalPriority = 3, L.unstable_Profiling = null, L.unstable_UserBlockingPriority = 2, L.unstable_cancelCallback = function(A) {
        A.callback = null;
      }, L.unstable_forceFrameRate = function(A) {
        0 > A || 125 < A ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Xe = 0 < A ? Math.floor(1e3 / A) : 5;
      }, L.unstable_getCurrentPriorityLevel = function() {
        return $e;
      }, L.unstable_next = function(A) {
        switch ($e) {
          case 1:
          case 2:
          case 3:
            var j = 3;
            break;
          default:
            j = $e;
        }
        var Z = $e;
        $e = j;
        try {
          return A();
        } finally {
          $e = Z;
        }
      }, L.unstable_requestPaint = function() {
        _l = !0;
      }, L.unstable_runWithPriority = function(A, j) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var Z = $e;
        $e = A;
        try {
          return j();
        } finally {
          $e = Z;
        }
      }, L.unstable_scheduleCallback = function(A, j, Z) {
        var ne = L.unstable_now();
        switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? ne + Z : ne) : Z = ne, A) {
          case 1:
            var C = -1;
            break;
          case 2:
            C = 250;
            break;
          case 5:
            C = 1073741823;
            break;
          case 4:
            C = 1e4;
            break;
          default:
            C = 5e3;
        }
        return C = Z + C, A = {
          id: Yl++,
          callback: j,
          priorityLevel: A,
          startTime: Z,
          expirationTime: C,
          sortIndex: -1
        }, Z > ne ? (A.sortIndex = Z, tt(rt, A), q(mt) === null && A === q(rt) && (yl ? (qe(pt), pt = -1) : yl = !0, Nt(Al, Z - ne))) : (A.sortIndex = C, tt(mt, A), Ot || va || (Ot = !0, te || (te = !0, Lt()))), A;
      }, L.unstable_shouldYield = K, L.unstable_wrapCallback = function(A) {
        var j = $e;
        return function() {
          var Z = $e;
          $e = j;
          try {
            return A.apply(this, arguments);
          } finally {
            $e = Z;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(A1)), A1;
}
var M2;
function N2() {
  return M2 || (M2 = 1, process.env.NODE_ENV === "production" ? Pp.exports = Zb() : Pp.exports = Lb()), Pp.exports;
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
var U2;
function wb() {
  if (U2) return tm;
  U2 = 1;
  var L = N2(), Dt = R1, tt = C2;
  function q(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Fe(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ut(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function el(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Al(l) {
    if (ut(l) !== l)
      throw Error(q(188));
  }
  function K(l) {
    var n = l.alternate;
    if (!n) {
      if (n = ut(l), n === null) throw Error(q(188));
      return n !== l ? null : l;
    }
    for (var u = l, i = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (i = s.return, i !== null) {
          u = i;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return Al(s), l;
          if (r === i) return Al(s), n;
          r = r.sibling;
        }
        throw Error(q(188));
      }
      if (u.return !== i.return) u = s, i = r;
      else {
        for (var y = !1, m = s.child; m; ) {
          if (m === u) {
            y = !0, u = s, i = r;
            break;
          }
          if (m === i) {
            y = !0, i = s, u = r;
            break;
          }
          m = m.sibling;
        }
        if (!y) {
          for (m = r.child; m; ) {
            if (m === u) {
              y = !0, u = r, i = s;
              break;
            }
            if (m === i) {
              y = !0, i = r, u = s;
              break;
            }
            m = m.sibling;
          }
          if (!y) throw Error(q(189));
        }
      }
      if (u.alternate !== i) throw Error(q(190));
    }
    if (u.tag !== 3) throw Error(q(188));
    return u.stateNode.current === u ? l : n;
  }
  function Nt(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Nt(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var Be = Object.assign, Ie = Symbol.for("react.element"), ge = Symbol.for("react.transitional.element"), mt = Symbol.for("react.portal"), rt = Symbol.for("react.fragment"), Yl = Symbol.for("react.strict_mode"), ct = Symbol.for("react.profiler"), $e = Symbol.for("react.provider"), va = Symbol.for("react.consumer"), Ot = Symbol.for("react.context"), yl = Symbol.for("react.forward_ref"), _l = Symbol.for("react.suspense"), Mt = Symbol.for("react.suspense_list"), qe = Symbol.for("react.memo"), Zt = Symbol.for("react.lazy"), te = Symbol.for("react.activity"), pt = Symbol.for("react.memo_cache_sentinel"), Xe = Symbol.iterator;
  function de(l) {
    return l === null || typeof l != "object" ? null : (l = Xe && l[Xe] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Lt = Symbol.for("react.client.reference");
  function Rl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Lt ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case rt:
        return "Fragment";
      case ct:
        return "Profiler";
      case Yl:
        return "StrictMode";
      case _l:
        return "Suspense";
      case Mt:
        return "SuspenseList";
      case te:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case mt:
          return "Portal";
        case Ot:
          return (l.displayName || "Context") + ".Provider";
        case va:
          return (l._context.displayName || "Context") + ".Consumer";
        case yl:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case qe:
          return n = l.displayName || null, n !== null ? n : Rl(l.type) || "Memo";
        case Zt:
          n = l._payload, l = l._init;
          try {
            return Rl(l(n));
          } catch {
          }
      }
    return null;
  }
  var Bt = Array.isArray, A = Dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ne = [], C = -1;
  function P(l) {
    return { current: l };
  }
  function J(l) {
    0 > C || (l.current = ne[C], ne[C] = null, C--);
  }
  function ue(l, n) {
    C++, ne[C] = l.current, l.current = n;
  }
  var Ae = P(null), Pe = P(null), Ue = P(null), Uu = P(null);
  function vt(l, n) {
    switch (ue(Ue, n), ue(Pe, l), ue(Ae, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? gu(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = gu(n), l = zo(n, l);
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
    J(Ae), ue(Ae, l);
  }
  function tl() {
    J(Ae), J(Pe), J(Ue);
  }
  function ga(l) {
    l.memoizedState !== null && ue(Uu, l);
    var n = Ae.current, u = zo(n, l.type);
    n !== u && (ue(Pe, l), ue(Ae, u));
  }
  function Ec(l) {
    Pe.current === l && (J(Ae), J(Pe)), Uu.current === l && (J(Uu), Il._currentValue = Z);
  }
  var Gs = Object.prototype.hasOwnProperty, Ac = L.unstable_scheduleCallback, ih = L.unstable_cancelCallback, ev = L.unstable_shouldYield, Rc = L.unstable_requestPaint, ea = L.unstable_now, $o = L.unstable_getCurrentPriorityLevel, am = L.unstable_ImmediatePriority, oh = L.unstable_UserBlockingPriority, Wo = L.unstable_NormalPriority, fh = L.unstable_LowPriority, Hi = L.unstable_IdlePriority, tv = L.log, nm = L.unstable_setDisableYieldValue, Ci = null, zl = null;
  function $n(l) {
    if (typeof tv == "function" && nm(l), zl && typeof zl.setStrictMode == "function")
      try {
        zl.setStrictMode(Ci, l);
      } catch {
      }
  }
  var Gl = Math.clz32 ? Math.clz32 : lv, sh = Math.log, um = Math.LN2;
  function lv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (sh(l) / um | 0) | 0;
  }
  var Ni = 256, Wn = 4194304;
  function ta(l) {
    var n = l & 42;
    if (n !== 0) return n;
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
  function xu(l, n, u) {
    var i = l.pendingLanes;
    if (i === 0) return 0;
    var s = 0, r = l.suspendedLanes, y = l.pingedLanes;
    l = l.warmLanes;
    var m = i & 134217727;
    return m !== 0 ? (i = m & ~r, i !== 0 ? s = ta(i) : (y &= m, y !== 0 ? s = ta(y) : u || (u = m & ~l, u !== 0 && (s = ta(u))))) : (m = i & ~r, m !== 0 ? s = ta(m) : y !== 0 ? s = ta(y) : u || (u = i & ~l, u !== 0 && (s = ta(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function nn(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function wt(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
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
        return n + 5e3;
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
  function Hu() {
    var l = Ni;
    return Ni <<= 1, (Ni & 4194048) === 0 && (Ni = 256), l;
  }
  function zc() {
    var l = Wn;
    return Wn <<= 1, (Wn & 62914560) === 0 && (Wn = 4194304), l;
  }
  function Cu(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Dc(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function cm(l, n, u, i, s, r) {
    var y = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var m = l.entanglements, g = l.expirationTimes, D = l.hiddenUpdates;
    for (u = y & ~u; 0 < u; ) {
      var G = 31 - Gl(u), X = 1 << G;
      m[G] = 0, g[G] = -1;
      var M = D[G];
      if (M !== null)
        for (D[G] = null, G = 0; G < M.length; G++) {
          var x = M[G];
          x !== null && (x.lane &= -536870913);
        }
      u &= ~X;
    }
    i !== 0 && Fo(l, i, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(y & ~n));
  }
  function Fo(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var i = 31 - Gl(n);
    l.entangledLanes |= n, l.entanglements[i] = l.entanglements[i] | 1073741824 | u & 4194090;
  }
  function Io(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var i = 31 - Gl(u), s = 1 << i;
      s & n | l[i] & n && (l[i] |= n), u &= ~s;
    }
  }
  function Va(l) {
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
  function Vs(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function im() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : yy(l.type));
  }
  function av(l, n) {
    var u = j.p;
    try {
      return j.p = l, n();
    } finally {
      j.p = u;
    }
  }
  var qt = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + qt, Dl = "__reactProps$" + qt, Bi = "__reactContainer$" + qt, Xs = "__reactEvents$" + qt, om = "__reactListeners$" + qt, js = "__reactHandles$" + qt, fm = "__reactResources$" + qt, W = "__reactMarker$" + qt;
  function Po(l) {
    delete l[Jt], delete l[Dl], delete l[Xs], delete l[om], delete l[js];
  }
  function ll(l) {
    var n = l[Jt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Bi] || u[Jt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = fl(l); l !== null; ) {
            if (u = l[Jt]) return u;
            l = fl(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Oc(l) {
    if (l = l[Jt] || l[Bi]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function ef(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(q(33));
  }
  function Fn(l) {
    var n = l[fm];
    return n || (n = l[fm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Yt(l) {
    l[W] = !0;
  }
  var tf = /* @__PURE__ */ new Set(), la = {};
  function Nu(l, n) {
    Bu(l, n), Bu(l + "Capture", n);
  }
  function Bu(l, n) {
    for (la[l] = n, l = 0; l < n.length; l++)
      tf.add(n[l]);
  }
  var sm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Qs = {}, rh = {};
  function rm(l) {
    return Gs.call(rh, l) ? !0 : Gs.call(Qs, l) ? !1 : sm.test(l) ? rh[l] = !0 : (Qs[l] = !0, !1);
  }
  function In(l, n, u) {
    if (rm(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var i = n.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function lf(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function un(l, n, u, i) {
    if (i === null) l.removeAttribute(u);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + i);
    }
  }
  var Zs, dh;
  function Mc(l) {
    if (Zs === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        Zs = n && n[1] || "", dh = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zs + l + dh;
  }
  var Ol = !1;
  function qu(l, n) {
    if (!l || Ol) return "";
    Ol = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (x) {
                  var M = x;
                }
                Reflect.construct(l, [], X);
              } else {
                try {
                  X.call();
                } catch (x) {
                  M = x;
                }
                l.call(X.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                M = x;
              }
              (X = l()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (x) {
            if (x && M && typeof x.stack == "string")
              return [x.stack, M.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = i.DetermineComponentFrameRoot(), y = r[0], m = r[1];
      if (y && m) {
        var g = y.split(`
`), D = m.split(`
`);
        for (s = i = 0; i < g.length && !g[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; s < D.length && !D[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (i === g.length || s === D.length)
          for (i = g.length - 1, s = D.length - 1; 1 <= i && 0 <= s && g[i] !== D[s]; )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (g[i] !== D[s]) {
            if (i !== 1 || s !== 1)
              do
                if (i--, s--, 0 > s || g[i] !== D[s]) {
                  var G = `
` + g[i].replace(" at new ", " at ");
                  return l.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", l.displayName)), G;
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      Ol = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Mc(u) : "";
  }
  function Uc(l) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Mc(l.type);
      case 16:
        return Mc("Lazy");
      case 13:
        return Mc("Suspense");
      case 19:
        return Mc("SuspenseList");
      case 0:
      case 15:
        return qu(l.type, !1);
      case 11:
        return qu(l.type.render, !1);
      case 1:
        return qu(l.type, !0);
      case 31:
        return Mc("Activity");
      default:
        return "";
    }
  }
  function hh(l) {
    try {
      var n = "";
      do
        n += Uc(l), l = l.return;
      while (l);
      return n;
    } catch (u) {
      return `
Error generating stack: ` + u.message + `
` + u.stack;
    }
  }
  function ml(l) {
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
  function af(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function yh(l) {
    var n = af(l) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    ), i = "" + l[n];
    if (!l.hasOwnProperty(n) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
      var s = u.get, r = u.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(y) {
          i = "" + y, r.call(this, y);
        }
      }), Object.defineProperty(l, n, {
        enumerable: u.enumerable
      }), {
        getValue: function() {
          return i;
        },
        setValue: function(y) {
          i = "" + y;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function Yu(l) {
    l._valueTracker || (l._valueTracker = yh(l));
  }
  function xc(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), i = "";
    return l && (i = af(l) ? l.checked ? "true" : "false" : l.value), l = i, l !== u ? (n.setValue(l), !0) : !1;
  }
  function qi(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var nv = /[\n"\\]/g;
  function ba(l) {
    return l.replace(
      nv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Ls(l, n, u, i, s, r, y, m) {
    l.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? l.type = y : l.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + ml(n)) : l.value !== "" + ml(n) && (l.value = "" + ml(n)) : y !== "submit" && y !== "reset" || l.removeAttribute("value"), n != null ? nf(l, y, ml(n)) : u != null ? nf(l, y, ml(u)) : i != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.name = "" + ml(m) : l.removeAttribute("name");
  }
  function ws(l, n, u, i, s, r, y, m) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null))
        return;
      u = u != null ? "" + ml(u) : "", n = n != null ? "" + ml(n) : u, m || n === l.value || (l.value = n), l.defaultValue = n;
    }
    i = i ?? s, i = typeof i != "function" && typeof i != "symbol" && !!i, l.checked = m ? l.checked : !!i, l.defaultChecked = !!i, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (l.name = y);
  }
  function nf(l, n, u) {
    n === "number" && qi(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Hc(l, n, u, i) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && i && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ml(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, i && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function mh(l, n, u) {
    if (n != null && (n = "" + ml(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + ml(u) : "";
  }
  function ph(l, n, u, i) {
    if (n == null) {
      if (i != null) {
        if (u != null) throw Error(q(92));
        if (Bt(i)) {
          if (1 < i.length) throw Error(q(93));
          i = i[0];
        }
        u = i;
      }
      u == null && (u = ""), n = u;
    }
    u = ml(n), l.defaultValue = u, i = l.textContent, i === u && i !== "" && i !== null && (l.value = i);
  }
  function Yi(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var dm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Js(l, n, u) {
    var i = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? i ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : i ? l.setProperty(n, u) : typeof u != "number" || u === 0 || dm.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function uf(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(q(62));
    if (l = l.style, u != null) {
      for (var i in u)
        !u.hasOwnProperty(i) || n != null && n.hasOwnProperty(i) || (i.indexOf("--") === 0 ? l.setProperty(i, "") : i === "float" ? l.cssFloat = "" : l[i] = "");
      for (var s in n)
        i = n[s], n.hasOwnProperty(s) && u[s] !== i && Js(l, s, i);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Js(l, r, n[r]);
  }
  function Cc(l) {
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
  var uv = /* @__PURE__ */ new Map([
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
  ]), hm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function cf(l) {
    return hm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  var Nc = null;
  function Ks(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var _i = null, Gi = null;
  function ym(l) {
    var n = Oc(l);
    if (n && (l = n.stateNode)) {
      var u = l[Dl] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (Ls(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + ba(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var i = u[n];
              if (i !== l && i.form === l.form) {
                var s = i[Dl] || null;
                if (!s) throw Error(q(90));
                Ls(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              i = u[n], i.form === l.form && xc(i);
          }
          break e;
        case "textarea":
          mh(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Hc(l, !!u.multiple, n, !1);
      }
    }
  }
  var vh = !1;
  function Vi(l, n, u) {
    if (vh) return l(n, u);
    vh = !0;
    try {
      var i = l(n);
      return i;
    } finally {
      if (vh = !1, (_i !== null || Gi !== null) && (ri(), _i && (n = _i, l = Gi, Gi = _i = null, ym(n), l)))
        for (n = 0; n < l.length; n++) ym(l[n]);
    }
  }
  function Bc(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var i = u[Dl] || null;
    if (i === null) return null;
    u = i[n];
    e: switch (n) {
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
        (i = !i.disabled) || (l = l.type, i = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !i;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        q(231, n, typeof u)
      );
    return u;
  }
  var cn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ks = !1;
  if (cn)
    try {
      var Pn = {};
      Object.defineProperty(Pn, "passive", {
        get: function() {
          ks = !0;
        }
      }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
    } catch {
      ks = !1;
    }
  var eu = null, Xi = null, qc = null;
  function gh() {
    if (qc) return qc;
    var l, n = Xi, u = n.length, i, s = "value" in eu ? eu.value : eu.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var y = u - l;
    for (i = 1; i <= y && n[u - i] === s[r - i]; i++) ;
    return qc = s.slice(l, 1 < i ? 1 - i : void 0);
  }
  function al(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function $s() {
    return !0;
  }
  function Ws() {
    return !1;
  }
  function Ml(l) {
    function n(u, i, s, r, y) {
      this._reactName = u, this._targetInst = s, this.type = i, this.nativeEvent = r, this.target = y, this.currentTarget = null;
      for (var m in l)
        l.hasOwnProperty(m) && (u = l[m], this[m] = u ? u(r) : r[m]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? $s : Ws, this.isPropagationStopped = Ws, this;
    }
    return Be(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = $s);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = $s);
      },
      persist: function() {
      },
      isPersistent: $s
    }), n;
  }
  var _u = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Fs = Ml(_u), of = Be({}, _u, { view: 0, detail: 0 }), mm = Ml(of), bh, Is, ff, Yc = Be({}, of, {
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
    getModifierState: tu,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ff && (ff && l.type === "mousemove" ? (bh = l.screenX - ff.screenX, Is = l.screenY - ff.screenY) : Is = bh = 0, ff = l), bh);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Is;
    }
  }), Sh = Ml(Yc), pm = Be({}, Yc, { dataTransfer: 0 }), vm = Ml(pm), cv = Be({}, of, { relatedTarget: 0 }), Th = Ml(cv), iv = Be({}, _u, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ov = Ml(iv), fv = Be({}, _u, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), sf = Ml(fv), gm = Be({}, _u, { data: 0 }), Eh = Ml(gm), bm = {
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
  }, Sm = {
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
  }, Ah = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Tm(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Ah[l]) ? !!n[l] : !1;
  }
  function tu() {
    return Tm;
  }
  var _c = Be({}, of, {
    key: function(l) {
      if (l.key) {
        var n = bm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = al(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Sm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: tu,
    charCode: function(l) {
      return l.type === "keypress" ? al(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? al(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Xa = Ml(_c), aa = Be({}, Yc, {
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
  }), rf = Ml(aa), Ps = Be({}, of, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: tu
  }), Rh = Ml(Ps), Vl = Be({}, _u, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Em = Ml(Vl), er = Be({}, Yc, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Gc = Ml(er), zh = Be({}, _u, {
    newState: 0,
    oldState: 0
  }), Am = Ml(zh), Rm = [9, 13, 27, 32], df = cn && "CompositionEvent" in window, hf = null;
  cn && "documentMode" in document && (hf = document.documentMode);
  var Dh = cn && "TextEvent" in window && !hf, on = cn && (!df || hf && 8 < hf && 11 >= hf), Oh = " ", tr = !1;
  function yf(l, n) {
    switch (l) {
      case "keyup":
        return Rm.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gu(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Vu = !1;
  function Mh(l, n) {
    switch (l) {
      case "compositionend":
        return Gu(n);
      case "keypress":
        return n.which !== 32 ? null : (tr = !0, Oh);
      case "textInput":
        return l = n.data, l === Oh && tr ? null : l;
      default:
        return null;
    }
  }
  function Vc(l, n) {
    if (Vu)
      return l === "compositionend" || !df && yf(l, n) ? (l = gh(), qc = Xi = eu = null, Vu = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return on && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var zm = {
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
  function lr(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!zm[l.type] : n === "textarea";
  }
  function ar(l, n, u, i) {
    _i ? Gi ? Gi.push(i) : Gi = [i] : _i = i, n = Ro(n, "onChange"), 0 < n.length && (u = new Fs(
      "onChange",
      "change",
      null,
      u,
      i
    ), l.push({ event: u, listeners: n }));
  }
  var ja = null, Qa = null;
  function Uh(l) {
    mi(l, 0);
  }
  function fn(l) {
    var n = ef(l);
    if (xc(n)) return l;
  }
  function xh(l, n) {
    if (l === "change") return n;
  }
  var Hh = !1;
  if (cn) {
    var Xc;
    if (cn) {
      var jc = "oninput" in document;
      if (!jc) {
        var Ch = document.createElement("div");
        Ch.setAttribute("oninput", "return;"), jc = typeof Ch.oninput == "function";
      }
      Xc = jc;
    } else Xc = !1;
    Hh = Xc && (!document.documentMode || 9 < document.documentMode);
  }
  function ji() {
    ja && (ja.detachEvent("onpropertychange", Nh), Qa = ja = null);
  }
  function Nh(l) {
    if (l.propertyName === "value" && fn(Qa)) {
      var n = [];
      ar(
        n,
        Qa,
        l,
        Ks(l)
      ), Vi(Uh, n);
    }
  }
  function nr(l, n, u) {
    l === "focusin" ? (ji(), ja = n, Qa = u, ja.attachEvent("onpropertychange", Nh)) : l === "focusout" && ji();
  }
  function Xu(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return fn(Qa);
  }
  function lu(l, n) {
    if (l === "click") return fn(n);
  }
  function Bh(l, n) {
    if (l === "input" || l === "change")
      return fn(n);
  }
  function qh(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var nl = typeof Object.is == "function" ? Object.is : qh;
  function ju(l, n) {
    if (nl(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), i = Object.keys(n);
    if (u.length !== i.length) return !1;
    for (i = 0; i < u.length; i++) {
      var s = u[i];
      if (!Gs.call(n, s) || !nl(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Qu(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function lt(l, n) {
    var u = Qu(l);
    l = 0;
    for (var i; u; ) {
      if (u.nodeType === 3) {
        if (i = l + u.textContent.length, l <= n && i >= n)
          return { node: u, offset: n - l };
        l = i;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Qu(u);
    }
  }
  function mf(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? mf(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Yh(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = qi(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = qi(l.document);
    }
    return n;
  }
  function pf(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var Qc = cn && "documentMode" in document && 11 >= document.documentMode, sn = null, Za = null, Zu = null, Zc = !1;
  function ur(l, n, u) {
    var i = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Zc || sn == null || sn !== qi(i) || (i = sn, "selectionStart" in i && pf(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Zu && ju(Zu, i) || (Zu = i, i = Ro(Za, "onSelect"), 0 < i.length && (n = new Fs(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: i }), n.target = sn)));
  }
  function au(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Lc = {
    animationend: au("Animation", "AnimationEnd"),
    animationiteration: au("Animation", "AnimationIteration"),
    animationstart: au("Animation", "AnimationStart"),
    transitionrun: au("Transition", "TransitionRun"),
    transitionstart: au("Transition", "TransitionStart"),
    transitioncancel: au("Transition", "TransitionCancel"),
    transitionend: au("Transition", "TransitionEnd")
  }, Sa = {}, La = {};
  cn && (La = document.createElement("div").style, "AnimationEvent" in window || (delete Lc.animationend.animation, delete Lc.animationiteration.animation, delete Lc.animationstart.animation), "TransitionEvent" in window || delete Lc.transitionend.transition);
  function rn(l) {
    if (Sa[l]) return Sa[l];
    if (!Lc[l]) return l;
    var n = Lc[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in La)
        return Sa[l] = n[u];
    return l;
  }
  var Dm = rn("animationend"), _h = rn("animationiteration"), Om = rn("animationstart"), Gh = rn("transitionrun"), cr = rn("transitionstart"), Mm = rn("transitioncancel"), Vh = rn("transitionend"), Xh = /* @__PURE__ */ new Map(), Qi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Qi.push("scrollEnd");
  function Ta(l, n) {
    Xh.set(l, n), Nu(n, [l]);
  }
  var jh = /* @__PURE__ */ new WeakMap();
  function na(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = jh.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: hh(n)
      }, jh.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: hh(n)
    };
  }
  var Xl = [], Lu = 0, dn = 0;
  function wa() {
    for (var l = Lu, n = dn = Lu = 0; n < l; ) {
      var u = Xl[n];
      Xl[n++] = null;
      var i = Xl[n];
      Xl[n++] = null;
      var s = Xl[n];
      Xl[n++] = null;
      var r = Xl[n];
      if (Xl[n++] = null, i !== null && s !== null) {
        var y = i.pending;
        y === null ? s.next = s : (s.next = y.next, y.next = s), i.pending = s;
      }
      r !== 0 && Li(u, s, r);
    }
  }
  function wu(l, n, u, i) {
    Xl[Lu++] = l, Xl[Lu++] = n, Xl[Lu++] = u, Xl[Lu++] = i, dn |= i, l.lanes |= i, l = l.alternate, l !== null && (l.lanes |= i);
  }
  function Zi(l, n, u, i) {
    return wu(l, n, u, i), vf(l);
  }
  function hn(l, n) {
    return wu(l, null, null, n), vf(l);
  }
  function Li(l, n, u) {
    l.lanes |= u;
    var i = l.alternate;
    i !== null && (i.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, i = r.alternate, i !== null && (i.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Gl(u), l = r.hiddenUpdates, i = l[s], i === null ? l[s] = [n] : i.push(n), n.lane = u | 536870912), r) : null;
  }
  function vf(l) {
    if (50 < go)
      throw go = 0, j0 = null, Error(q(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var wi = {};
  function Um(l, n, u, i) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function jl(l, n, u, i) {
    return new Um(l, n, u, i);
  }
  function gf(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Ja(l, n) {
    var u = l.alternate;
    return u === null ? (u = jl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Se(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Q(l, n, u, i, s, r) {
    var y = 0;
    if (i = l, typeof l == "function") gf(l) && (y = 1);
    else if (typeof l == "string")
      y = fp(
        l,
        u,
        Ae.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case te:
          return l = jl(31, u, n, s), l.elementType = te, l.lanes = r, l;
        case rt:
          return Ea(u.children, s, r, n);
        case Yl:
          y = 8, s |= 24;
          break;
        case ct:
          return l = jl(12, u, n, s | 2), l.elementType = ct, l.lanes = r, l;
        case _l:
          return l = jl(13, u, n, s), l.elementType = _l, l.lanes = r, l;
        case Mt:
          return l = jl(19, u, n, s), l.elementType = Mt, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case $e:
              case Ot:
                y = 10;
                break e;
              case va:
                y = 9;
                break e;
              case yl:
                y = 11;
                break e;
              case qe:
                y = 14;
                break e;
              case Zt:
                y = 16, i = null;
                break e;
            }
          y = 29, u = Error(
            q(130, l === null ? "null" : typeof l, "")
          ), i = null;
      }
    return n = jl(y, u, n, s), n.elementType = l, n.type = i, n.lanes = r, n;
  }
  function Ea(l, n, u, i) {
    return l = jl(7, l, i, n), l.lanes = u, l;
  }
  function Ji(l, n, u) {
    return l = jl(6, l, null, n), l.lanes = u, l;
  }
  function dt(l, n, u) {
    return n = jl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Ju = [], Ku = 0, bf = null, Ki = 0, Aa = [], Ql = 0, nu = null, Ka = 1, gt = "";
  function xe(l, n) {
    Ju[Ku++] = Ki, Ju[Ku++] = bf, bf = l, Ki = n;
  }
  function ir(l, n, u) {
    Aa[Ql++] = Ka, Aa[Ql++] = gt, Aa[Ql++] = nu, nu = l;
    var i = Ka;
    l = gt;
    var s = 32 - Gl(i) - 1;
    i &= ~(1 << s), u += 1;
    var r = 32 - Gl(n) + s;
    if (30 < r) {
      var y = s - s % 5;
      r = (i & (1 << y) - 1).toString(32), i >>= y, s -= y, Ka = 1 << 32 - Gl(n) + s | u << s | i, gt = r + l;
    } else
      Ka = 1 << r | u << s | i, gt = l;
  }
  function wc(l) {
    l.return !== null && (xe(l, 1), ir(l, 1, 0));
  }
  function yn(l) {
    for (; l === bf; )
      bf = Ju[--Ku], Ju[Ku] = null, Ki = Ju[--Ku], Ju[Ku] = null;
    for (; l === nu; )
      nu = Aa[--Ql], Aa[Ql] = null, gt = Aa[--Ql], Aa[Ql] = null, Ka = Aa[--Ql], Aa[Ql] = null;
  }
  var Ut = null, Ye = null, Ne = !1, Ra = null, za = !1, Jc = Error(q(519));
  function uu(l) {
    var n = Error(q(418, ""));
    throw Wi(na(n, l)), Jc;
  }
  function Sf(l) {
    var n = l.stateNode, u = l.type, i = l.memoizedProps;
    switch (n[Jt] = l, n[Dl] = i, u) {
      case "dialog":
        ye("cancel", n), ye("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ye("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < us.length; u++)
          ye(us[u], n);
        break;
      case "source":
        ye("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ye("error", n), ye("load", n);
        break;
      case "details":
        ye("toggle", n);
        break;
      case "input":
        ye("invalid", n), ws(
          n,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        ), Yu(n);
        break;
      case "select":
        ye("invalid", n);
        break;
      case "textarea":
        ye("invalid", n), ph(n, i.value, i.defaultValue, i.children), Yu(n);
    }
    u = i.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || i.suppressHydrationWarning === !0 || ty(n.textContent, u) ? (i.popover != null && (ye("beforetoggle", n), ye("toggle", n)), i.onScroll != null && ye("scroll", n), i.onScrollEnd != null && ye("scrollend", n), i.onClick != null && (n.onclick = vd), n = !0) : n = !1, n || uu(l);
  }
  function Qh(l) {
    for (Ut = l.return; Ut; )
      switch (Ut.tag) {
        case 5:
        case 13:
          za = !1;
          return;
        case 27:
        case 3:
          za = !0;
          return;
        default:
          Ut = Ut.return;
      }
  }
  function ki(l) {
    if (l !== Ut) return !1;
    if (!Ne) return Qh(l), Ne = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Bn(l.type, l.memoizedProps)), u = !u), u && Ye && uu(l), Qh(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(q(317));
      e: {
        for (l = l.nextSibling, n = 0; l; ) {
          if (l.nodeType === 8)
            if (u = l.data, u === "/$") {
              if (n === 0) {
                Ye = Pa(l.nextSibling);
                break e;
              }
              n--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || n++;
          l = l.nextSibling;
        }
        Ye = null;
      }
    } else
      n === 27 ? (n = Ye, rc(l.type) ? (l = dc, dc = null, Ye = l) : Ye = n) : Ye = Ut ? Pa(l.stateNode.nextSibling) : null;
    return !0;
  }
  function $i() {
    Ye = Ut = null, Ne = !1;
  }
  function Zh() {
    var l = Ra;
    return l !== null && (kl === null ? kl = l : kl.push.apply(
      kl,
      l
    ), Ra = null), l;
  }
  function Wi(l) {
    Ra === null ? Ra = [l] : Ra.push(l);
  }
  var Tf = P(null), cu = null, ka = null;
  function iu(l, n, u) {
    ue(Tf, n._currentValue), n._currentValue = u;
  }
  function mn(l) {
    l._currentValue = Tf.current, J(Tf);
  }
  function or(l, n, u) {
    for (; l !== null; ) {
      var i = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, i !== null && (i.childLanes |= n)) : i !== null && (i.childLanes & n) !== n && (i.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Lh(l, n, u, i) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var y = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var m = r;
          r = s;
          for (var g = 0; g < n.length; g++)
            if (m.context === n[g]) {
              r.lanes |= u, m = r.alternate, m !== null && (m.lanes |= u), or(
                r.return,
                u,
                l
              ), i || (y = null);
              break e;
            }
          r = m.next;
        }
      } else if (s.tag === 18) {
        if (y = s.return, y === null) throw Error(q(341));
        y.lanes |= u, r = y.alternate, r !== null && (r.lanes |= u), or(y, u, l), y = null;
      } else y = s.child;
      if (y !== null) y.return = s;
      else
        for (y = s; y !== null; ) {
          if (y === l) {
            y = null;
            break;
          }
          if (s = y.sibling, s !== null) {
            s.return = y.return, y = s;
            break;
          }
          y = y.return;
        }
      s = y;
    }
  }
  function Fi(l, n, u, i) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var y = s.alternate;
        if (y === null) throw Error(q(387));
        if (y = y.memoizedProps, y !== null) {
          var m = s.type;
          nl(s.pendingProps.value, y.value) || (l !== null ? l.push(m) : l = [m]);
        }
      } else if (s === Uu.current) {
        if (y = s.alternate, y === null) throw Error(q(387));
        y.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Il) : l = [Il]);
      }
      s = s.return;
    }
    l !== null && Lh(
      n,
      l,
      u,
      i
    ), n.flags |= 262144;
  }
  function Ef(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!nl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ku(l) {
    cu = l, ka = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Kt(l) {
    return wh(cu, l);
  }
  function Af(l, n) {
    return cu === null && ku(l), wh(l, n);
  }
  function wh(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, ka === null) {
      if (l === null) throw Error(q(308));
      ka = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else ka = ka.next = n;
    return u;
  }
  var Ii = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, i) {
        l.push(i);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, fr = L.unstable_scheduleCallback, xm = L.unstable_NormalPriority, _t = {
    $$typeof: Ot,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Pi() {
    return {
      controller: new Ii(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pn(l) {
    l.refCount--, l.refCount === 0 && fr(xm, function() {
      l.controller.abort();
    });
  }
  var $u = null, Rf = 0, Da = 0, Gt = null;
  function sr(l, n) {
    if ($u === null) {
      var u = $u = [];
      Rf = 0, Da = yi(), Gt = {
        status: "pending",
        value: void 0,
        then: function(i) {
          u.push(i);
        }
      };
    }
    return Rf++, n.then(rr, rr), n;
  }
  function rr() {
    if (--Rf === 0 && $u !== null) {
      Gt !== null && (Gt.status = "fulfilled");
      var l = $u;
      $u = null, Da = 0, Gt = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Hm(l, n) {
    var u = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        i.status = "fulfilled", i.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (i.status = "rejected", i.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), i;
  }
  var dr = A.S;
  A.S = function(l, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && sr(l, n), dr !== null && dr(l, n);
  };
  var vn = P(null);
  function zf() {
    var l = vn.current;
    return l !== null ? l : We.pooledCache;
  }
  function Kc(l, n) {
    n === null ? ue(vn, vn.current) : ue(vn, n.pool);
  }
  function hr() {
    var l = zf();
    return l === null ? null : { parent: _t._currentValue, pool: l };
  }
  var Wu = Error(q(460)), yr = Error(q(474)), Df = Error(q(542)), mr = { then: function() {
  } };
  function pr(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Of() {
  }
  function Jh(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Of, Of), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, kh(l), l;
      default:
        if (typeof n.status == "string") n.then(Of, Of);
        else {
          if (l = We, l !== null && 100 < l.shellSuspendCounter)
            throw Error(q(482));
          l = n, l.status = "pending", l.then(
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = i;
              }
            },
            function(i) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = i;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, kh(l), l;
        }
        throw kc = n, Wu;
    }
  }
  var kc = null;
  function Kh() {
    if (kc === null) throw Error(q(459));
    var l = kc;
    return kc = null, l;
  }
  function kh(l) {
    if (l === Wu || l === Df)
      throw Error(q(483));
  }
  var gn = !1;
  function vr(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function gr(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Zl(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function bn(l, n, u) {
    var i = l.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Qe & 2) !== 0) {
      var s = i.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), i.pending = n, n = vf(l), Li(l, null, u), n;
    }
    return wu(l, i, n, u), vf(l);
  }
  function $c(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, Io(l, u);
    }
  }
  function $h(l, n) {
    var u = l.updateQueue, i = l.alternate;
    if (i !== null && (i = i.updateQueue, u === i)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var y = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = y : r = r.next = y, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: i.shared,
        callbacks: i.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var Wh = !1;
  function eo() {
    if (Wh) {
      var l = Gt;
      if (l !== null) throw l;
    }
  }
  function ou(l, n, u, i) {
    Wh = !1;
    var s = l.updateQueue;
    gn = !1;
    var r = s.firstBaseUpdate, y = s.lastBaseUpdate, m = s.shared.pending;
    if (m !== null) {
      s.shared.pending = null;
      var g = m, D = g.next;
      g.next = null, y === null ? r = D : y.next = D, y = g;
      var G = l.alternate;
      G !== null && (G = G.updateQueue, m = G.lastBaseUpdate, m !== y && (m === null ? G.firstBaseUpdate = D : m.next = D, G.lastBaseUpdate = g));
    }
    if (r !== null) {
      var X = s.baseState;
      y = 0, G = D = g = null, m = r;
      do {
        var M = m.lane & -536870913, x = M !== m.lane;
        if (x ? (De & M) === M : (i & M) === M) {
          M !== 0 && M === Da && (Wh = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: m.tag,
            payload: m.payload,
            callback: null,
            next: null
          });
          e: {
            var le = l, ae = m;
            M = n;
            var Ge = u;
            switch (ae.tag) {
              case 1:
                if (le = ae.payload, typeof le == "function") {
                  X = le.call(Ge, X, M);
                  break e;
                }
                X = le;
                break e;
              case 3:
                le.flags = le.flags & -65537 | 128;
              case 0:
                if (le = ae.payload, M = typeof le == "function" ? le.call(Ge, X, M) : le, M == null) break e;
                X = Be({}, X, M);
                break e;
              case 2:
                gn = !0;
            }
          }
          M = m.callback, M !== null && (l.flags |= 64, x && (l.flags |= 8192), x = s.callbacks, x === null ? s.callbacks = [M] : x.push(M));
        } else
          x = {
            lane: M,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null
          }, G === null ? (D = G = x, g = X) : G = G.next = x, y |= M;
        if (m = m.next, m === null) {
          if (m = s.shared.pending, m === null)
            break;
          x = m, m = x.next, x.next = null, s.lastBaseUpdate = x, s.shared.pending = null;
        }
      } while (!0);
      G === null && (g = X), s.baseState = g, s.firstBaseUpdate = D, s.lastBaseUpdate = G, r === null && (s.shared.lanes = 0), mu |= y, l.lanes = y, l.memoizedState = X;
    }
  }
  function br(l, n) {
    if (typeof l != "function")
      throw Error(q(191, l));
    l.call(n);
  }
  function Mf(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        br(u[l], n);
  }
  var Wc = P(null), Uf = P(0);
  function kt(l, n) {
    l = yu, ue(Uf, l), ue(Wc, n), yu = l | n.baseLanes;
  }
  function to() {
    ue(Uf, yu), ue(Wc, Wc.current);
  }
  function lo() {
    yu = Uf.current, J(Wc), J(Uf);
  }
  var Oa = 0, he = null, je = null, ht = null, xf = !1, ua = !1, Fu = !1, $a = 0, ca = 0, fu = null, Fh = 0;
  function yt() {
    throw Error(q(321));
  }
  function Sr(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!nl(l[u], n[u])) return !1;
    return !0;
  }
  function Tr(l, n, u, i, s, r) {
    return Oa = r, he = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, A.H = l === null || l.memoizedState === null ? d0 : h0, Fu = !1, r = u(i, s), Fu = !1, ua && (r = Ih(
      n,
      u,
      i,
      s
    )), Iu(l), r;
  }
  function Iu(l) {
    A.H = Gr;
    var n = je !== null && je.next !== null;
    if (Oa = 0, ht = je = he = null, xf = !1, ca = 0, fu = null, n) throw Error(q(300));
    l === null || Vt || (l = l.dependencies, l !== null && Ef(l) && (Vt = !0));
  }
  function Ih(l, n, u, i) {
    he = l;
    var s = 0;
    do {
      if (ua && (fu = null), ca = 0, ua = !1, 25 <= s) throw Error(q(301));
      if (s += 1, ht = je = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      A.H = su, r = n(u, i);
    } while (ua);
    return r;
  }
  function Cm() {
    var l = A.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? Cf(n) : n, l = l.useState()[0], (je !== null ? je.memoizedState : null) !== l && (he.flags |= 1024), n;
  }
  function Er() {
    var l = $a !== 0;
    return $a = 0, l;
  }
  function ao(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ar(l) {
    if (xf) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      xf = !1;
    }
    Oa = 0, ht = je = he = null, ua = !1, ca = $a = 0, fu = null;
  }
  function pl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ht === null ? he.memoizedState = ht = l : ht = ht.next = l, ht;
  }
  function bt() {
    if (je === null) {
      var l = he.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = je.next;
    var n = ht === null ? he.memoizedState : ht.next;
    if (n !== null)
      ht = n, je = l;
    else {
      if (l === null)
        throw he.alternate === null ? Error(q(467)) : Error(q(310));
      je = l, l = {
        memoizedState: je.memoizedState,
        baseState: je.baseState,
        baseQueue: je.baseQueue,
        queue: je.queue,
        next: null
      }, ht === null ? he.memoizedState = ht = l : ht = ht.next = l;
    }
    return ht;
  }
  function Hf() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Cf(l) {
    var n = ca;
    return ca += 1, fu === null && (fu = []), l = Jh(fu, l, n), n = he, (ht === null ? n.memoizedState : ht.next) === null && (n = n.alternate, A.H = n === null || n.memoizedState === null ? d0 : h0), l;
  }
  function xt(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Cf(l);
      if (l.$$typeof === Ot) return Kt(l);
    }
    throw Error(q(438, String(l)));
  }
  function Rr(l) {
    var n = null, u = he.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var i = he.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (n = {
        data: i.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Hf(), he.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), i = 0; i < l; i++)
        u[i] = pt;
    return n.index++, u;
  }
  function Sn(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Nf(l) {
    var n = bt();
    return zr(n, je, l);
  }
  function zr(l, n, u) {
    var i = l.queue;
    if (i === null) throw Error(q(311));
    i.lastRenderedReducer = u;
    var s = l.baseQueue, r = i.pending;
    if (r !== null) {
      if (s !== null) {
        var y = s.next;
        s.next = r.next, r.next = y;
      }
      n.baseQueue = s = r, i.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var m = y = null, g = null, D = n, G = !1;
      do {
        var X = D.lane & -536870913;
        if (X !== D.lane ? (De & X) === X : (Oa & X) === X) {
          var M = D.revertLane;
          if (M === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }), X === Da && (G = !0);
          else if ((Oa & M) === M) {
            D = D.next, M === Da && (G = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: D.revertLane,
              action: D.action,
              hasEagerState: D.hasEagerState,
              eagerState: D.eagerState,
              next: null
            }, g === null ? (m = g = X, y = r) : g = g.next = X, he.lanes |= M, mu |= M;
          X = D.action, Fu && u(r, X), r = D.hasEagerState ? D.eagerState : u(r, X);
        } else
          M = {
            lane: X,
            revertLane: D.revertLane,
            action: D.action,
            hasEagerState: D.hasEagerState,
            eagerState: D.eagerState,
            next: null
          }, g === null ? (m = g = M, y = r) : g = g.next = M, he.lanes |= X, mu |= X;
        D = D.next;
      } while (D !== null && D !== n);
      if (g === null ? y = r : g.next = m, !nl(r, l.memoizedState) && (Vt = !0, G && (u = Gt, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = y, l.baseQueue = g, i.lastRenderedState = r;
    }
    return s === null && (i.lanes = 0), [l.memoizedState, i.dispatch];
  }
  function Dr(l) {
    var n = bt(), u = n.queue;
    if (u === null) throw Error(q(311));
    u.lastRenderedReducer = l;
    var i = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var y = s = s.next;
      do
        r = l(r, y.action), y = y.next;
      while (y !== s);
      nl(r, n.memoizedState) || (Vt = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, i];
  }
  function Bf(l, n, u) {
    var i = he, s = bt(), r = Ne;
    if (r) {
      if (u === void 0) throw Error(q(407));
      u = u();
    } else u = n();
    var y = !nl(
      (je || s).memoizedState,
      u
    );
    y && (s.memoizedState = u, Vt = !0), s = s.queue;
    var m = e0.bind(null, i, s, l);
    if (Je(2048, 8, m, [l]), s.getSnapshot !== n || y || ht !== null && ht.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ll(
        9,
        _f(),
        Ph.bind(
          null,
          i,
          s,
          u,
          n
        ),
        null
      ), We === null) throw Error(q(349));
      r || (Oa & 124) !== 0 || Or(i, n, u);
    }
    return u;
  }
  function Or(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = he.updateQueue, n === null ? (n = Hf(), he.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function Ph(l, n, u, i) {
    n.value = u, n.getSnapshot = i, t0(n) && Mr(l);
  }
  function e0(l, n, u) {
    return u(function() {
      t0(n) && Mr(l);
    });
  }
  function t0(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !nl(l, u);
    } catch {
      return !0;
    }
  }
  function Mr(l) {
    var n = hn(l, 2);
    n !== null && fa(n, l, 2);
  }
  function qf(l) {
    var n = pl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Fu) {
        $n(!0);
        try {
          u();
        } finally {
          $n(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sn,
      lastRenderedState: l
    }, n;
  }
  function Ur(l, n, u, i) {
    return l.baseState = u, zr(
      l,
      je,
      typeof i == "function" ? i : Sn
    );
  }
  function Nm(l, n, u, i, s) {
    if (ei(l)) throw Error(q(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          r.listeners.push(y);
        }
      };
      A.T !== null ? u(!0) : r.isTransition = !1, i(r), u = n.pending, u === null ? (r.next = n.pending = r, xr(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function xr(l, n) {
    var u = n.action, i = n.payload, s = l.state;
    if (n.isTransition) {
      var r = A.T, y = {};
      A.T = y;
      try {
        var m = u(s, i), g = A.S;
        g !== null && g(y, m), Yf(l, n, m);
      } catch (D) {
        Cr(l, n, D);
      } finally {
        A.T = r;
      }
    } else
      try {
        r = u(s, i), Yf(l, n, r);
      } catch (D) {
        Cr(l, n, D);
      }
  }
  function Yf(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(i) {
        Hr(l, n, i);
      },
      function(i) {
        return Cr(l, n, i);
      }
    ) : Hr(l, n, u);
  }
  function Hr(l, n, u) {
    n.status = "fulfilled", n.value = u, l0(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, xr(l, u)));
  }
  function Cr(l, n, u) {
    var i = l.pending;
    if (l.pending = null, i !== null) {
      i = i.next;
      do
        n.status = "rejected", n.reason = u, l0(n), n = n.next;
      while (n !== i);
    }
    l.action = null;
  }
  function l0(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Nr(l, n) {
    return n;
  }
  function a0(l, n) {
    if (Ne) {
      var u = We.formState;
      if (u !== null) {
        e: {
          var i = he;
          if (Ne) {
            if (Ye) {
              t: {
                for (var s = Ye, r = za; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Pa(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Ye = Pa(
                  s.nextSibling
                ), i = s.data === "F!";
                break e;
              }
            }
            uu(i);
          }
          i = !1;
        }
        i && (n = u[0]);
      }
    }
    return u = pl(), u.memoizedState = u.baseState = n, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nr,
      lastRenderedState: n
    }, u.queue = i, u = s0.bind(
      null,
      he,
      i
    ), i.dispatch = u, i = qf(!1), r = Xf.bind(
      null,
      he,
      !1,
      i.queue
    ), i = pl(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, i.queue = s, u = Nm.bind(
      null,
      he,
      s,
      r,
      u
    ), s.dispatch = u, i.memoizedState = l, [n, u, !1];
  }
  function Tn(l) {
    var n = bt();
    return Br(n, je, l);
  }
  function Br(l, n, u) {
    if (n = zr(
      l,
      n,
      Nr
    )[0], l = Nf(Sn)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var i = Cf(n);
      } catch (y) {
        throw y === Wu ? Df : y;
      }
    else i = n;
    n = bt();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (he.flags |= 2048, Ll(
      9,
      _f(),
      sv.bind(null, s, u),
      null
    )), [i, r, l];
  }
  function sv(l, n) {
    l.action = n;
  }
  function qr(l) {
    var n = bt(), u = je;
    if (u !== null)
      return Br(n, u, l);
    bt(), n = n.memoizedState, u = bt();
    var i = u.queue.dispatch;
    return u.memoizedState = l, [n, i, !1];
  }
  function Ll(l, n, u, i) {
    return l = { tag: l, create: u, deps: i, inst: n, next: null }, n = he.updateQueue, n === null && (n = Hf(), he.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (i = u.next, u.next = l, l.next = i, n.lastEffect = l), l;
  }
  function _f() {
    return { destroy: void 0, resource: void 0 };
  }
  function Gf() {
    return bt().memoizedState;
  }
  function Pu(l, n, u, i) {
    var s = pl();
    i = i === void 0 ? null : i, he.flags |= l, s.memoizedState = Ll(
      1 | n,
      _f(),
      u,
      i
    );
  }
  function Je(l, n, u, i) {
    var s = bt();
    i = i === void 0 ? null : i;
    var r = s.memoizedState.inst;
    je !== null && i !== null && Sr(i, je.memoizedState.deps) ? s.memoizedState = Ll(n, r, u, i) : (he.flags |= l, s.memoizedState = Ll(
      1 | n,
      r,
      u,
      i
    ));
  }
  function Bm(l, n) {
    Pu(8390656, 8, l, n);
  }
  function qm(l, n) {
    Je(2048, 8, l, n);
  }
  function n0(l, n) {
    return Je(4, 2, l, n);
  }
  function Wa(l, n) {
    return Je(4, 4, l, n);
  }
  function u0(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function Yr(l, n, u) {
    u = u != null ? u.concat([l]) : null, Je(4, 4, u0.bind(null, n, l), u);
  }
  function Fc() {
  }
  function Ic(l, n) {
    var u = bt();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    return n !== null && Sr(n, i[1]) ? i[0] : (u.memoizedState = [l, n], l);
  }
  function c0(l, n) {
    var u = bt();
    n = n === void 0 ? null : n;
    var i = u.memoizedState;
    if (n !== null && Sr(n, i[1]))
      return i[0];
    if (i = l(), Fu) {
      $n(!0);
      try {
        l();
      } finally {
        $n(!1);
      }
    }
    return u.memoizedState = [i, n], i;
  }
  function Vf(l, n, u) {
    return u === void 0 || (Oa & 1073741824) !== 0 ? l.memoizedState = n : (l.memoizedState = u, l = Q0(), he.lanes |= l, mu |= l, u);
  }
  function i0(l, n, u, i) {
    return nl(u, n) ? u : Wc.current !== null ? (l = Vf(l, u, i), nl(l, n) || (Vt = !0), l) : (Oa & 42) === 0 ? (Vt = !0, l.memoizedState = u) : (l = Q0(), he.lanes |= l, mu |= l, n);
  }
  function Ym(l, n, u, i, s) {
    var r = j.p;
    j.p = r !== 0 && 8 > r ? r : 8;
    var y = A.T, m = {};
    A.T = m, Xf(l, !1, n, u);
    try {
      var g = s(), D = A.S;
      if (D !== null && D(m, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var G = Hm(
          g,
          i
        );
        Pc(
          l,
          n,
          G,
          oa(l)
        );
      } else
        Pc(
          l,
          n,
          i,
          oa(l)
        );
    } catch (X) {
      Pc(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: X },
        oa()
      );
    } finally {
      j.p = r, A.T = y;
    }
  }
  function rv() {
  }
  function _r(l, n, u, i) {
    if (l.tag !== 5) throw Error(q(476));
    var s = _m(l).queue;
    Ym(
      l,
      s,
      n,
      Z,
      u === null ? rv : function() {
        return no(l), u(i);
      }
    );
  }
  function _m(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: Z,
      baseState: Z,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sn,
        lastRenderedState: Z
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sn,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function no(l) {
    var n = _m(l).next.queue;
    Pc(l, n, {}, oa());
  }
  function Ma() {
    return Kt(Il);
  }
  function o0() {
    return bt().memoizedState;
  }
  function Gm() {
    return bt().memoizedState;
  }
  function Vm(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = oa();
          l = Zl(u);
          var i = bn(n, l, u);
          i !== null && (fa(i, n, u), $c(i, n, u)), n = { cache: Pi() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function f0(l, n, u) {
    var i = oa();
    u = {
      lane: i,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ei(l) ? Xm(n, u) : (u = Zi(l, n, u, i), u !== null && (fa(u, l, i), r0(u, n, i)));
  }
  function s0(l, n, u) {
    var i = oa();
    Pc(l, n, u, i);
  }
  function Pc(l, n, u, i) {
    var s = {
      lane: i,
      revertLane: 0,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ei(l)) Xm(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var y = n.lastRenderedState, m = r(y, u);
          if (s.hasEagerState = !0, s.eagerState = m, nl(m, y))
            return wu(l, n, s, 0), We === null && wa(), !1;
        } catch {
        } finally {
        }
      if (u = Zi(l, n, s, i), u !== null)
        return fa(u, l, i), r0(u, n, i), !0;
    }
    return !1;
  }
  function Xf(l, n, u, i) {
    if (i = {
      lane: 2,
      revertLane: yi(),
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ei(l)) {
      if (n) throw Error(q(479));
    } else
      n = Zi(
        l,
        u,
        i,
        2
      ), n !== null && fa(n, l, 2);
  }
  function ei(l) {
    var n = l.alternate;
    return l === he || n !== null && n === he;
  }
  function Xm(l, n) {
    ua = xf = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function r0(l, n, u) {
    if ((u & 4194048) !== 0) {
      var i = n.lanes;
      i &= l.pendingLanes, u |= i, n.lanes = u, Io(l, u);
    }
  }
  var Gr = {
    readContext: Kt,
    use: xt,
    useCallback: yt,
    useContext: yt,
    useEffect: yt,
    useImperativeHandle: yt,
    useLayoutEffect: yt,
    useInsertionEffect: yt,
    useMemo: yt,
    useReducer: yt,
    useRef: yt,
    useState: yt,
    useDebugValue: yt,
    useDeferredValue: yt,
    useTransition: yt,
    useSyncExternalStore: yt,
    useId: yt,
    useHostTransitionStatus: yt,
    useFormState: yt,
    useActionState: yt,
    useOptimistic: yt,
    useMemoCache: yt,
    useCacheRefresh: yt
  }, d0 = {
    readContext: Kt,
    use: xt,
    useCallback: function(l, n) {
      return pl().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: Kt,
    useEffect: Bm,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Pu(
        4194308,
        4,
        u0.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Pu(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Pu(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = pl();
      n = n === void 0 ? null : n;
      var i = l();
      if (Fu) {
        $n(!0);
        try {
          l();
        } finally {
          $n(!1);
        }
      }
      return u.memoizedState = [i, n], i;
    },
    useReducer: function(l, n, u) {
      var i = pl();
      if (u !== void 0) {
        var s = u(n);
        if (Fu) {
          $n(!0);
          try {
            u(n);
          } finally {
            $n(!1);
          }
        }
      } else s = n;
      return i.memoizedState = i.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, i.queue = l, l = l.dispatch = f0.bind(
        null,
        he,
        l
      ), [i.memoizedState, l];
    },
    useRef: function(l) {
      var n = pl();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = qf(l);
      var n = l.queue, u = s0.bind(null, he, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: Fc,
    useDeferredValue: function(l, n) {
      var u = pl();
      return Vf(u, l, n);
    },
    useTransition: function() {
      var l = qf(!1);
      return l = Ym.bind(
        null,
        he,
        l.queue,
        !0,
        !1
      ), pl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var i = he, s = pl();
      if (Ne) {
        if (u === void 0)
          throw Error(q(407));
        u = u();
      } else {
        if (u = n(), We === null)
          throw Error(q(349));
        (De & 124) !== 0 || Or(i, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Bm(e0.bind(null, i, r, l), [
        l
      ]), i.flags |= 2048, Ll(
        9,
        _f(),
        Ph.bind(
          null,
          i,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = pl(), n = We.identifierPrefix;
      if (Ne) {
        var u = gt, i = Ka;
        u = (i & ~(1 << 32 - Gl(i) - 1)).toString(32) + u, n = "«" + n + "R" + u, u = $a++, 0 < u && (n += "H" + u.toString(32)), n += "»";
      } else
        u = Fh++, n = "«" + n + "r" + u.toString(32) + "»";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ma,
    useFormState: a0,
    useActionState: a0,
    useOptimistic: function(l) {
      var n = pl();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = Xf.bind(
        null,
        he,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Rr,
    useCacheRefresh: function() {
      return pl().memoizedState = Vm.bind(
        null,
        he
      );
    }
  }, h0 = {
    readContext: Kt,
    use: xt,
    useCallback: Ic,
    useContext: Kt,
    useEffect: qm,
    useImperativeHandle: Yr,
    useInsertionEffect: n0,
    useLayoutEffect: Wa,
    useMemo: c0,
    useReducer: Nf,
    useRef: Gf,
    useState: function() {
      return Nf(Sn);
    },
    useDebugValue: Fc,
    useDeferredValue: function(l, n) {
      var u = bt();
      return i0(
        u,
        je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Nf(Sn)[0], n = bt().memoizedState;
      return [
        typeof l == "boolean" ? l : Cf(l),
        n
      ];
    },
    useSyncExternalStore: Bf,
    useId: o0,
    useHostTransitionStatus: Ma,
    useFormState: Tn,
    useActionState: Tn,
    useOptimistic: function(l, n) {
      var u = bt();
      return Ur(u, je, l, n);
    },
    useMemoCache: Rr,
    useCacheRefresh: Gm
  }, su = {
    readContext: Kt,
    use: xt,
    useCallback: Ic,
    useContext: Kt,
    useEffect: qm,
    useImperativeHandle: Yr,
    useInsertionEffect: n0,
    useLayoutEffect: Wa,
    useMemo: c0,
    useReducer: Dr,
    useRef: Gf,
    useState: function() {
      return Dr(Sn);
    },
    useDebugValue: Fc,
    useDeferredValue: function(l, n) {
      var u = bt();
      return je === null ? Vf(u, l, n) : i0(
        u,
        je.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Dr(Sn)[0], n = bt().memoizedState;
      return [
        typeof l == "boolean" ? l : Cf(l),
        n
      ];
    },
    useSyncExternalStore: Bf,
    useId: o0,
    useHostTransitionStatus: Ma,
    useFormState: qr,
    useActionState: qr,
    useOptimistic: function(l, n) {
      var u = bt();
      return je !== null ? Ur(u, je, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Rr,
    useCacheRefresh: Gm
  }, ti = null, uo = 0;
  function Vr(l) {
    var n = uo;
    return uo += 1, ti === null && (ti = []), Jh(ti, l, n);
  }
  function li(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function vl(l, n) {
    throw n.$$typeof === Ie ? Error(q(525)) : (l = Object.prototype.toString.call(n), Error(
      q(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function y0(l) {
    var n = l._init;
    return n(l._payload);
  }
  function wl(l) {
    function n(R, E) {
      if (l) {
        var z = R.deletions;
        z === null ? (R.deletions = [E], R.flags |= 16) : z.push(E);
      }
    }
    function u(R, E) {
      if (!l) return null;
      for (; E !== null; )
        n(R, E), E = E.sibling;
      return null;
    }
    function i(R) {
      for (var E = /* @__PURE__ */ new Map(); R !== null; )
        R.key !== null ? E.set(R.key, R) : E.set(R.index, R), R = R.sibling;
      return E;
    }
    function s(R, E) {
      return R = Ja(R, E), R.index = 0, R.sibling = null, R;
    }
    function r(R, E, z) {
      return R.index = z, l ? (z = R.alternate, z !== null ? (z = z.index, z < E ? (R.flags |= 67108866, E) : z) : (R.flags |= 67108866, E)) : (R.flags |= 1048576, E);
    }
    function y(R) {
      return l && R.alternate === null && (R.flags |= 67108866), R;
    }
    function m(R, E, z, V) {
      return E === null || E.tag !== 6 ? (E = Ji(z, R.mode, V), E.return = R, E) : (E = s(E, z), E.return = R, E);
    }
    function g(R, E, z, V) {
      var $ = z.type;
      return $ === rt ? G(
        R,
        E,
        z.props.children,
        V,
        z.key
      ) : E !== null && (E.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Zt && y0($) === E.type) ? (E = s(E, z.props), li(E, z), E.return = R, E) : (E = Q(
        z.type,
        z.key,
        z.props,
        null,
        R.mode,
        V
      ), li(E, z), E.return = R, E);
    }
    function D(R, E, z, V) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = dt(z, R.mode, V), E.return = R, E) : (E = s(E, z.children || []), E.return = R, E);
    }
    function G(R, E, z, V, $) {
      return E === null || E.tag !== 7 ? (E = Ea(
        z,
        R.mode,
        V,
        $
      ), E.return = R, E) : (E = s(E, z), E.return = R, E);
    }
    function X(R, E, z) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Ji(
          "" + E,
          R.mode,
          z
        ), E.return = R, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case ge:
            return z = Q(
              E.type,
              E.key,
              E.props,
              null,
              R.mode,
              z
            ), li(z, E), z.return = R, z;
          case mt:
            return E = dt(
              E,
              R.mode,
              z
            ), E.return = R, E;
          case Zt:
            var V = E._init;
            return E = V(E._payload), X(R, E, z);
        }
        if (Bt(E) || de(E))
          return E = Ea(
            E,
            R.mode,
            z,
            null
          ), E.return = R, E;
        if (typeof E.then == "function")
          return X(R, Vr(E), z);
        if (E.$$typeof === Ot)
          return X(
            R,
            Af(R, E),
            z
          );
        vl(R, E);
      }
      return null;
    }
    function M(R, E, z, V) {
      var $ = E !== null ? E.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return $ !== null ? null : m(R, E, "" + z, V);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ge:
            return z.key === $ ? g(R, E, z, V) : null;
          case mt:
            return z.key === $ ? D(R, E, z, V) : null;
          case Zt:
            return $ = z._init, z = $(z._payload), M(R, E, z, V);
        }
        if (Bt(z) || de(z))
          return $ !== null ? null : G(R, E, z, V, null);
        if (typeof z.then == "function")
          return M(
            R,
            E,
            Vr(z),
            V
          );
        if (z.$$typeof === Ot)
          return M(
            R,
            E,
            Af(R, z),
            V
          );
        vl(R, z);
      }
      return null;
    }
    function x(R, E, z, V, $) {
      if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
        return R = R.get(z) || null, m(E, R, "" + V, $);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case ge:
            return R = R.get(
              V.key === null ? z : V.key
            ) || null, g(E, R, V, $);
          case mt:
            return R = R.get(
              V.key === null ? z : V.key
            ) || null, D(E, R, V, $);
          case Zt:
            var Te = V._init;
            return V = Te(V._payload), x(
              R,
              E,
              z,
              V,
              $
            );
        }
        if (Bt(V) || de(V))
          return R = R.get(z) || null, G(E, R, V, $, null);
        if (typeof V.then == "function")
          return x(
            R,
            E,
            z,
            Vr(V),
            $
          );
        if (V.$$typeof === Ot)
          return x(
            R,
            E,
            z,
            Af(E, V),
            $
          );
        vl(E, V);
      }
      return null;
    }
    function le(R, E, z, V) {
      for (var $ = null, Te = null, ee = E, ie = E = 0, Ft = null; ee !== null && ie < z.length; ie++) {
        ee.index > ie ? (Ft = ee, ee = null) : Ft = ee.sibling;
        var Ce = M(
          R,
          ee,
          z[ie],
          V
        );
        if (Ce === null) {
          ee === null && (ee = Ft);
          break;
        }
        l && ee && Ce.alternate === null && n(R, ee), E = r(Ce, E, ie), Te === null ? $ = Ce : Te.sibling = Ce, Te = Ce, ee = Ft;
      }
      if (ie === z.length)
        return u(R, ee), Ne && xe(R, ie), $;
      if (ee === null) {
        for (; ie < z.length; ie++)
          ee = X(R, z[ie], V), ee !== null && (E = r(
            ee,
            E,
            ie
          ), Te === null ? $ = ee : Te.sibling = ee, Te = ee);
        return Ne && xe(R, ie), $;
      }
      for (ee = i(ee); ie < z.length; ie++)
        Ft = x(
          ee,
          R,
          ie,
          z[ie],
          V
        ), Ft !== null && (l && Ft.alternate !== null && ee.delete(
          Ft.key === null ? ie : Ft.key
        ), E = r(
          Ft,
          E,
          ie
        ), Te === null ? $ = Ft : Te.sibling = Ft, Te = Ft);
      return l && ee.forEach(function(vc) {
        return n(R, vc);
      }), Ne && xe(R, ie), $;
    }
    function ae(R, E, z, V) {
      if (z == null) throw Error(q(151));
      for (var $ = null, Te = null, ee = E, ie = E = 0, Ft = null, Ce = z.next(); ee !== null && !Ce.done; ie++, Ce = z.next()) {
        ee.index > ie ? (Ft = ee, ee = null) : Ft = ee.sibling;
        var vc = M(R, ee, Ce.value, V);
        if (vc === null) {
          ee === null && (ee = Ft);
          break;
        }
        l && ee && vc.alternate === null && n(R, ee), E = r(vc, E, ie), Te === null ? $ = vc : Te.sibling = vc, Te = vc, ee = Ft;
      }
      if (Ce.done)
        return u(R, ee), Ne && xe(R, ie), $;
      if (ee === null) {
        for (; !Ce.done; ie++, Ce = z.next())
          Ce = X(R, Ce.value, V), Ce !== null && (E = r(Ce, E, ie), Te === null ? $ = Ce : Te.sibling = Ce, Te = Ce);
        return Ne && xe(R, ie), $;
      }
      for (ee = i(ee); !Ce.done; ie++, Ce = z.next())
        Ce = x(ee, R, ie, Ce.value, V), Ce !== null && (l && Ce.alternate !== null && ee.delete(Ce.key === null ? ie : Ce.key), E = r(Ce, E, ie), Te === null ? $ = Ce : Te.sibling = Ce, Te = Ce);
      return l && ee.forEach(function(Av) {
        return n(R, Av);
      }), Ne && xe(R, ie), $;
    }
    function Ge(R, E, z, V) {
      if (typeof z == "object" && z !== null && z.type === rt && z.key === null && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case ge:
            e: {
              for (var $ = z.key; E !== null; ) {
                if (E.key === $) {
                  if ($ = z.type, $ === rt) {
                    if (E.tag === 7) {
                      u(
                        R,
                        E.sibling
                      ), V = s(
                        E,
                        z.props.children
                      ), V.return = R, R = V;
                      break e;
                    }
                  } else if (E.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === Zt && y0($) === E.type) {
                    u(
                      R,
                      E.sibling
                    ), V = s(E, z.props), li(V, z), V.return = R, R = V;
                    break e;
                  }
                  u(R, E);
                  break;
                } else n(R, E);
                E = E.sibling;
              }
              z.type === rt ? (V = Ea(
                z.props.children,
                R.mode,
                V,
                z.key
              ), V.return = R, R = V) : (V = Q(
                z.type,
                z.key,
                z.props,
                null,
                R.mode,
                V
              ), li(V, z), V.return = R, R = V);
            }
            return y(R);
          case mt:
            e: {
              for ($ = z.key; E !== null; ) {
                if (E.key === $)
                  if (E.tag === 4 && E.stateNode.containerInfo === z.containerInfo && E.stateNode.implementation === z.implementation) {
                    u(
                      R,
                      E.sibling
                    ), V = s(E, z.children || []), V.return = R, R = V;
                    break e;
                  } else {
                    u(R, E);
                    break;
                  }
                else n(R, E);
                E = E.sibling;
              }
              V = dt(z, R.mode, V), V.return = R, R = V;
            }
            return y(R);
          case Zt:
            return $ = z._init, z = $(z._payload), Ge(
              R,
              E,
              z,
              V
            );
        }
        if (Bt(z))
          return le(
            R,
            E,
            z,
            V
          );
        if (de(z)) {
          if ($ = de(z), typeof $ != "function") throw Error(q(150));
          return z = $.call(z), ae(
            R,
            E,
            z,
            V
          );
        }
        if (typeof z.then == "function")
          return Ge(
            R,
            E,
            Vr(z),
            V
          );
        if (z.$$typeof === Ot)
          return Ge(
            R,
            E,
            Af(R, z),
            V
          );
        vl(R, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, E !== null && E.tag === 6 ? (u(R, E.sibling), V = s(E, z), V.return = R, R = V) : (u(R, E), V = Ji(z, R.mode, V), V.return = R, R = V), y(R)) : u(R, E);
    }
    return function(R, E, z, V) {
      try {
        uo = 0;
        var $ = Ge(
          R,
          E,
          z,
          V
        );
        return ti = null, $;
      } catch (ee) {
        if (ee === Wu || ee === Df) throw ee;
        var Te = jl(29, ee, null, R.mode);
        return Te.lanes = V, Te.return = R, Te;
      } finally {
      }
    };
  }
  var ai = wl(!0), En = wl(!1), ia = P(null), gl = null;
  function ru(l) {
    var n = l.alternate;
    ue(Ke, Ke.current & 1), ue(ia, l), gl === null && (n === null || Wc.current !== null || n.memoizedState !== null) && (gl = l);
  }
  function An(l) {
    if (l.tag === 22) {
      if (ue(Ke, Ke.current), ue(ia, l), gl === null) {
        var n = l.alternate;
        n !== null && n.memoizedState !== null && (gl = l);
      }
    } else Rn();
  }
  function Rn() {
    ue(Ke, Ke.current), ue(ia, ia.current);
  }
  function Fa(l) {
    J(ia), gl === l && (gl = null), J(Ke);
  }
  var Ke = P(0);
  function jf(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || ss(u)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function ec(l, n, u, i) {
    n = l.memoizedState, u = u(i, n), u = u == null ? n : Be({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Xr = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var i = oa(), s = Zl(i);
      s.payload = n, u != null && (s.callback = u), n = bn(l, s, i), n !== null && (fa(n, l, i), $c(n, l, i));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var i = oa(), s = Zl(i);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = bn(l, s, i), n !== null && (fa(n, l, i), $c(n, l, i));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = oa(), i = Zl(u);
      i.tag = 2, n != null && (i.callback = n), n = bn(l, i, u), n !== null && (fa(n, l, u), $c(n, l, u));
    }
  };
  function co(l, n, u, i, s, r, y) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(i, r, y) : n.prototype && n.prototype.isPureReactComponent ? !ju(u, i) || !ju(s, r) : !0;
  }
  function ni(l, n, u, i) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, i), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, i), n.state !== l && Xr.enqueueReplaceState(n, n.state, null);
  }
  function tc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var i in n)
        i !== "ref" && (u[i] = n[i]);
    }
    if (l = l.defaultProps) {
      u === n && (u = Be({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  var Qf = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  };
  function io(l) {
    Qf(l);
  }
  function m0(l) {
    console.error(l);
  }
  function Zf(l) {
    Qf(l);
  }
  function Lf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function p0(l, n, u) {
    try {
      var i = l.onCaughtError;
      i(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function v0(l, n, u) {
    return u = Zl(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      Lf(l, n);
    }, u;
  }
  function g0(l) {
    return l = Zl(l), l.tag = 3, l;
  }
  function Jl(l, n, u, i) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = i.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        p0(n, u, i);
      };
    }
    var y = u.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (l.callback = function() {
      p0(n, u, i), typeof s != "function" && (uc === null ? uc = /* @__PURE__ */ new Set([this]) : uc.add(this));
      var m = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: m !== null ? m : ""
      });
    });
  }
  function jm(l, n, u, i, s) {
    if (u.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (n = u.alternate, n !== null && Fi(
        n,
        u,
        s,
        !0
      ), u = ia.current, u !== null) {
        switch (u.tag) {
          case 13:
            return gl === null ? hi() : u.alternate === null && At === 0 && (At = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, i === mr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([i]) : n.add(i), dd(l, i, s)), !1;
          case 22:
            return u.flags |= 65536, i === mr ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([i]) : u.add(i)), dd(l, i, s)), !1;
        }
        throw Error(q(435, u.tag));
      }
      return dd(l, i, s), hi(), !1;
    }
    if (Ne)
      return n = ia.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, i !== Jc && (l = Error(q(422), { cause: i }), Wi(na(l, u)))) : (i !== Jc && (n = Error(q(423), {
        cause: i
      }), Wi(
        na(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, i = na(i, u), s = v0(
        l.stateNode,
        i,
        s
      ), $h(l, s), At !== 4 && (At = 2)), !1;
    var r = Error(q(520), { cause: i });
    if (r = na(r, u), mo === null ? mo = [r] : mo.push(r), At !== 4 && (At = 2), n === null) return !0;
    i = na(i, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = v0(u.stateNode, i, l), $h(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (uc === null || !uc.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = g0(s), Jl(
              s,
              l,
              u,
              i
            ), $h(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var St = Error(q(461)), Vt = !1;
  function $t(l, n, u, i) {
    n.child = l === null ? En(n, null, u, i) : ai(
      n,
      l.child,
      u,
      i
    );
  }
  function Qm(l, n, u, i, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in i) {
      var y = {};
      for (var m in i)
        m !== "ref" && (y[m] = i[m]);
    } else y = i;
    return ku(n), i = Tr(
      l,
      n,
      u,
      y,
      r,
      s
    ), m = Er(), l !== null && !Vt ? (ao(l, n, s), zn(l, n, s)) : (Ne && m && wc(n), n.flags |= 1, $t(l, n, i, s), n.child);
  }
  function du(l, n, u, i, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !gf(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, ui(
        l,
        n,
        r,
        i,
        s
      )) : (l = Q(
        u.type,
        null,
        i,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !Wr(l, s)) {
      var y = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : ju, u(y, i) && l.ref === n.ref)
        return zn(l, n, s);
    }
    return n.flags |= 1, l = Ja(r, i), l.ref = n.ref, l.return = n, n.child = l;
  }
  function ui(l, n, u, i, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (ju(r, i) && l.ref === n.ref)
        if (Vt = !1, n.pendingProps = i = r, Wr(l, s))
          (l.flags & 131072) !== 0 && (Vt = !0);
        else
          return n.lanes = l.lanes, zn(l, n, s);
    }
    return Qr(
      l,
      n,
      u,
      i,
      s
    );
  }
  function jr(l, n, u) {
    var i = n.pendingProps, s = i.children, r = l !== null ? l.memoizedState : null;
    if (i.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (i = r !== null ? r.baseLanes | u : u, l !== null) {
          for (s = n.child = l.child, r = 0; s !== null; )
            r = r | s.lanes | s.childLanes, s = s.sibling;
          n.childLanes = r & ~i;
        } else n.childLanes = 0, n.child = null;
        return ci(
          l,
          n,
          i,
          u
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Kc(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? kt(n, r) : to(), An(n);
      else
        return n.lanes = n.childLanes = 536870912, ci(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u
        );
    } else
      r !== null ? (Kc(n, r.cachePool), kt(n, r), Rn(), n.memoizedState = null) : (l !== null && Kc(n, null), to(), Rn());
    return $t(l, n, s, u), n.child;
  }
  function ci(l, n, u, i) {
    var s = zf();
    return s = s === null ? null : { parent: _t._currentValue, pool: s }, n.memoizedState = {
      baseLanes: u,
      cachePool: s
    }, l !== null && Kc(n, null), to(), An(n), l !== null && Fi(l, n, i, !0), null;
  }
  function wf(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(q(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Qr(l, n, u, i, s) {
    return ku(n), u = Tr(
      l,
      n,
      u,
      i,
      void 0,
      s
    ), i = Er(), l !== null && !Vt ? (ao(l, n, s), zn(l, n, s)) : (Ne && i && wc(n), n.flags |= 1, $t(l, n, u, s), n.child);
  }
  function b0(l, n, u, i, s, r) {
    return ku(n), n.updateQueue = null, u = Ih(
      n,
      i,
      u,
      s
    ), Iu(l), i = Er(), l !== null && !Vt ? (ao(l, n, r), zn(l, n, r)) : (Ne && i && wc(n), n.flags |= 1, $t(l, n, u, r), n.child);
  }
  function Zr(l, n, u, i, s) {
    if (ku(n), n.stateNode === null) {
      var r = wi, y = u.contextType;
      typeof y == "object" && y !== null && (r = Kt(y)), r = new u(i, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Xr, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = i, r.state = n.memoizedState, r.refs = {}, vr(n), y = u.contextType, r.context = typeof y == "object" && y !== null ? Kt(y) : wi, r.state = n.memoizedState, y = u.getDerivedStateFromProps, typeof y == "function" && (ec(
        n,
        u,
        y,
        i
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (y = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), y !== r.state && Xr.enqueueReplaceState(r, r.state, null), ou(n, i, r, s), eo(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !0;
    } else if (l === null) {
      r = n.stateNode;
      var m = n.memoizedProps, g = tc(u, m);
      r.props = g;
      var D = r.context, G = u.contextType;
      y = wi, typeof G == "object" && G !== null && (y = Kt(G));
      var X = u.getDerivedStateFromProps;
      G = typeof X == "function" || typeof r.getSnapshotBeforeUpdate == "function", m = n.pendingProps !== m, G || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m || D !== y) && ni(
        n,
        r,
        i,
        y
      ), gn = !1;
      var M = n.memoizedState;
      r.state = M, ou(n, i, r, s), eo(), D = n.memoizedState, m || M !== D || gn ? (typeof X == "function" && (ec(
        n,
        u,
        X,
        i
      ), D = n.memoizedState), (g = gn || co(
        n,
        u,
        g,
        i,
        M,
        D,
        y
      )) ? (G || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = i, n.memoizedState = D), r.props = i, r.state = D, r.context = y, i = g) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), i = !1);
    } else {
      r = n.stateNode, gr(l, n), y = n.memoizedProps, G = tc(u, y), r.props = G, X = n.pendingProps, M = r.context, D = u.contextType, g = wi, typeof D == "object" && D !== null && (g = Kt(D)), m = u.getDerivedStateFromProps, (D = typeof m == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y !== X || M !== g) && ni(
        n,
        r,
        i,
        g
      ), gn = !1, M = n.memoizedState, r.state = M, ou(n, i, r, s), eo();
      var x = n.memoizedState;
      y !== X || M !== x || gn || l !== null && l.dependencies !== null && Ef(l.dependencies) ? (typeof m == "function" && (ec(
        n,
        u,
        m,
        i
      ), x = n.memoizedState), (G = gn || co(
        n,
        u,
        G,
        i,
        M,
        x,
        g
      ) || l !== null && l.dependencies !== null && Ef(l.dependencies)) ? (D || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(i, x, g), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        i,
        x,
        g
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 1024), n.memoizedProps = i, n.memoizedState = x), r.props = i, r.state = x, r.context = g, i = G) : (typeof r.componentDidUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || y === l.memoizedProps && M === l.memoizedState || (n.flags |= 1024), i = !1);
    }
    return r = i, wf(l, n), i = (n.flags & 128) !== 0, r || i ? (r = n.stateNode, u = i && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && i ? (n.child = ai(
      n,
      l.child,
      null,
      s
    ), n.child = ai(
      n,
      null,
      u,
      s
    )) : $t(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = zn(
      l,
      n,
      s
    ), l;
  }
  function Lr(l, n, u, i) {
    return $i(), n.flags |= 256, $t(l, n, u, i), n.child;
  }
  var wr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function S0(l) {
    return { baseLanes: l, cachePool: hr() };
  }
  function T0(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ha), l;
  }
  function E0(l, n, u) {
    var i = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, y;
    if ((y = r) || (y = l !== null && l.memoizedState === null ? !1 : (Ke.current & 2) !== 0), y && (s = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (Ne) {
        if (s ? ru(n) : Rn(), Ne) {
          var m = Ye, g;
          if (g = m) {
            e: {
              for (g = m, m = za; g.nodeType !== 8; ) {
                if (!m) {
                  m = null;
                  break e;
                }
                if (g = Pa(
                  g.nextSibling
                ), g === null) {
                  m = null;
                  break e;
                }
              }
              m = g;
            }
            m !== null ? (n.memoizedState = {
              dehydrated: m,
              treeContext: nu !== null ? { id: Ka, overflow: gt } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, g = jl(
              18,
              null,
              null,
              0
            ), g.stateNode = m, g.return = n, n.child = g, Ut = n, Ye = null, g = !0) : g = !1;
          }
          g || uu(n);
        }
        if (m = n.memoizedState, m !== null && (m = m.dehydrated, m !== null))
          return ss(m) ? n.lanes = 32 : n.lanes = 536870912, null;
        Fa(n);
      }
      return m = i.children, i = i.fallback, s ? (Rn(), s = n.mode, m = Kr(
        { mode: "hidden", children: m },
        s
      ), i = Ea(
        i,
        s,
        u,
        null
      ), m.return = n, i.return = n, m.sibling = i, n.child = m, s = n.child, s.memoizedState = S0(u), s.childLanes = T0(
        l,
        y,
        u
      ), n.memoizedState = wr, i) : (ru(n), Jr(n, m));
    }
    if (g = l.memoizedState, g !== null && (m = g.dehydrated, m !== null)) {
      if (r)
        n.flags & 256 ? (ru(n), n.flags &= -257, n = lc(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Rn(), n.child = l.child, n.flags |= 128, n = null) : (Rn(), s = i.fallback, m = n.mode, i = Kr(
          { mode: "visible", children: i.children },
          m
        ), s = Ea(
          s,
          m,
          u,
          null
        ), s.flags |= 2, i.return = n, s.return = n, i.sibling = s, n.child = i, ai(
          n,
          l.child,
          null,
          u
        ), i = n.child, i.memoizedState = S0(u), i.childLanes = T0(
          l,
          y,
          u
        ), n.memoizedState = wr, n = s);
      else if (ru(n), ss(m)) {
        if (y = m.nextSibling && m.nextSibling.dataset, y) var D = y.dgst;
        y = D, i = Error(q(419)), i.stack = "", i.digest = y, Wi({ value: i, source: null, stack: null }), n = lc(
          l,
          n,
          u
        );
      } else if (Vt || Fi(l, n, u, !1), y = (u & l.childLanes) !== 0, Vt || y) {
        if (y = We, y !== null && (i = u & -u, i = (i & 42) !== 0 ? 1 : Va(i), i = (i & (y.suspendedLanes | u)) !== 0 ? 0 : i, i !== 0 && i !== g.retryLane))
          throw g.retryLane = i, hn(l, i), fa(y, l, i), St;
        m.data === "$?" || hi(), n = lc(
          l,
          n,
          u
        );
      } else
        m.data === "$?" ? (n.flags |= 192, n.child = l.child, n = null) : (l = g.treeContext, Ye = Pa(
          m.nextSibling
        ), Ut = n, Ne = !0, Ra = null, za = !1, l !== null && (Aa[Ql++] = Ka, Aa[Ql++] = gt, Aa[Ql++] = nu, Ka = l.id, gt = l.overflow, nu = n), n = Jr(
          n,
          i.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Rn(), s = i.fallback, m = n.mode, g = l.child, D = g.sibling, i = Ja(g, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = g.subtreeFlags & 65011712, D !== null ? s = Ja(D, s) : (s = Ea(
      s,
      m,
      u,
      null
    ), s.flags |= 2), s.return = n, i.return = n, i.sibling = s, n.child = i, i = s, s = n.child, m = l.child.memoizedState, m === null ? m = S0(u) : (g = m.cachePool, g !== null ? (D = _t._currentValue, g = g.parent !== D ? { parent: D, pool: D } : g) : g = hr(), m = {
      baseLanes: m.baseLanes | u,
      cachePool: g
    }), s.memoizedState = m, s.childLanes = T0(
      l,
      y,
      u
    ), n.memoizedState = wr, i) : (ru(n), u = l.child, l = u.sibling, u = Ja(u, {
      mode: "visible",
      children: i.children
    }), u.return = n, u.sibling = null, l !== null && (y = n.deletions, y === null ? (n.deletions = [l], n.flags |= 16) : y.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function Jr(l, n) {
    return n = Kr(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function Kr(l, n) {
    return l = jl(22, l, null, n), l.lanes = 0, l.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, l;
  }
  function lc(l, n, u) {
    return ai(n, l.child, null, u), l = Jr(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function Jf(l, n, u) {
    l.lanes |= n;
    var i = l.alternate;
    i !== null && (i.lanes |= n), or(l.return, n, u);
  }
  function kr(l, n, u, i, s) {
    var r = l.memoizedState;
    r === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: u,
      tailMode: s
    } : (r.isBackwards = n, r.rendering = null, r.renderingStartTime = 0, r.last = i, r.tail = u, r.tailMode = s);
  }
  function $r(l, n, u) {
    var i = n.pendingProps, s = i.revealOrder, r = i.tail;
    if ($t(l, n, i.children, u), i = Ke.current, (i & 2) !== 0)
      i = i & 1 | 2, n.flags |= 128;
    else {
      if (l !== null && (l.flags & 128) !== 0)
        e: for (l = n.child; l !== null; ) {
          if (l.tag === 13)
            l.memoizedState !== null && Jf(l, u, n);
          else if (l.tag === 19)
            Jf(l, u, n);
          else if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
          if (l === n) break e;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === n)
              break e;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      i &= 1;
    }
    switch (ue(Ke, i), s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && jf(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), kr(
          n,
          !1,
          s,
          u,
          r
        );
        break;
      case "backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && jf(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        kr(
          n,
          !0,
          u,
          null,
          r
        );
        break;
      case "together":
        kr(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function zn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), mu |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Fi(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(q(153));
    if (n.child !== null) {
      for (l = n.child, u = Ja(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = Ja(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function Wr(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ef(l)));
  }
  function Zm(l, n, u) {
    switch (n.tag) {
      case 3:
        vt(n, n.stateNode.containerInfo), iu(n, _t, l.memoizedState.cache), $i();
        break;
      case 27:
      case 5:
        ga(n);
        break;
      case 4:
        vt(n, n.stateNode.containerInfo);
        break;
      case 10:
        iu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var i = n.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (ru(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? E0(l, n, u) : (ru(n), l = zn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        ru(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (i = (u & n.childLanes) !== 0, i || (Fi(
          l,
          n,
          u,
          !1
        ), i = (u & n.childLanes) !== 0), s) {
          if (i)
            return $r(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), ue(Ke, Ke.current), i) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, jr(l, n, u);
      case 24:
        iu(n, _t, l.memoizedState.cache);
    }
    return zn(l, n, u);
  }
  function Lm(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Vt = !0;
      else {
        if (!Wr(l, u) && (n.flags & 128) === 0)
          return Vt = !1, Zm(
            l,
            n,
            u
          );
        Vt = (l.flags & 131072) !== 0;
      }
    else
      Vt = !1, Ne && (n.flags & 1048576) !== 0 && ir(n, Ki, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          l = n.pendingProps;
          var i = n.elementType, s = i._init;
          if (i = s(i._payload), n.type = i, typeof i == "function")
            gf(i) ? (l = tc(i, l), n.tag = 1, n = Zr(
              null,
              n,
              i,
              l,
              u
            )) : (n.tag = 0, n = Qr(
              null,
              n,
              i,
              l,
              u
            ));
          else {
            if (i != null) {
              if (s = i.$$typeof, s === yl) {
                n.tag = 11, n = Qm(
                  null,
                  n,
                  i,
                  l,
                  u
                );
                break e;
              } else if (s === qe) {
                n.tag = 14, n = du(
                  null,
                  n,
                  i,
                  l,
                  u
                );
                break e;
              }
            }
            throw n = Rl(i) || i, Error(q(306, n, ""));
          }
        }
        return n;
      case 0:
        return Qr(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return i = n.type, s = tc(
          i,
          n.pendingProps
        ), Zr(
          l,
          n,
          i,
          s,
          u
        );
      case 3:
        e: {
          if (vt(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(q(387));
          i = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, gr(l, n), ou(n, i, null, u);
          var y = n.memoizedState;
          if (i = y.cache, iu(n, _t, i), i !== r.cache && Lh(
            n,
            [_t],
            u,
            !0
          ), eo(), i = y.element, r.isDehydrated)
            if (r = {
              element: i,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Lr(
                l,
                n,
                i,
                u
              );
              break e;
            } else if (i !== s) {
              s = na(
                Error(q(424)),
                n
              ), Wi(s), n = Lr(
                l,
                n,
                i,
                u
              );
              break e;
            } else {
              switch (l = n.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (Ye = Pa(l.firstChild), Ut = n, Ne = !0, Ra = null, za = !0, u = En(
                n,
                null,
                i,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if ($i(), i === s) {
              n = zn(
                l,
                n,
                u
              );
              break e;
            }
            $t(
              l,
              n,
              i,
              u
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return wf(l, n), l === null ? (u = cp(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : Ne || (u = n.type, l = n.pendingProps, i = Na(
          Ue.current
        ).createElement(u), i[Jt] = n, i[Dl] = l, oe(i, u, l), Yt(i), n.stateNode = i) : n.memoizedState = cp(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ga(n), l === null && Ne && (i = n.stateNode = k(
          n.type,
          n.pendingProps,
          Ue.current
        ), Ut = n, za = !0, s = Ye, rc(n.type) ? (dc = s, Ye = Pa(
          i.firstChild
        )) : Ye = s), $t(
          l,
          n,
          n.pendingProps.children,
          u
        ), wf(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && Ne && ((s = i = Ye) && (i = Oo(
          i,
          n.type,
          n.pendingProps,
          za
        ), i !== null ? (n.stateNode = i, Ut = n, Ye = Pa(
          i.firstChild
        ), za = !1, s = !0) : s = !1), s || uu(n)), ga(n), s = n.type, r = n.pendingProps, y = l !== null ? l.memoizedProps : null, i = r.children, Bn(s, r) ? i = null : y !== null && Bn(s, y) && (n.flags |= 32), n.memoizedState !== null && (s = Tr(
          l,
          n,
          Cm,
          null,
          null,
          u
        ), Il._currentValue = s), wf(l, n), $t(l, n, i, u), n.child;
      case 6:
        return l === null && Ne && ((l = u = Ye) && (u = Sv(
          u,
          n.pendingProps,
          za
        ), u !== null ? (n.stateNode = u, Ut = n, Ye = null, l = !0) : l = !1), l || uu(n)), null;
      case 13:
        return E0(l, n, u);
      case 4:
        return vt(
          n,
          n.stateNode.containerInfo
        ), i = n.pendingProps, l === null ? n.child = ai(
          n,
          null,
          i,
          u
        ) : $t(
          l,
          n,
          i,
          u
        ), n.child;
      case 11:
        return Qm(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return $t(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return $t(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return $t(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return i = n.pendingProps, iu(n, n.type, i.value), $t(
          l,
          n,
          i.children,
          u
        ), n.child;
      case 9:
        return s = n.type._context, i = n.pendingProps.children, ku(n), s = Kt(s), i = i(s), n.flags |= 1, $t(l, n, i, u), n.child;
      case 14:
        return du(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return ui(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return $r(l, n, u);
      case 31:
        return i = n.pendingProps, u = n.mode, i = {
          mode: i.mode,
          children: i.children
        }, l === null ? (u = Kr(
          i,
          u
        ), u.ref = n.ref, n.child = u, u.return = n, n = u) : (u = Ja(l.child, i), u.ref = n.ref, n.child = u, u.return = n, n = u), n;
      case 22:
        return jr(l, n, u);
      case 24:
        return ku(n), i = Kt(_t), l === null ? (s = zf(), s === null && (s = We, r = Pi(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = {
          parent: i,
          cache: s
        }, vr(n), iu(n, _t, s)) : ((l.lanes & u) !== 0 && (gr(l, n), ou(n, null, null, u), eo()), s = l.memoizedState, r = n.memoizedState, s.parent !== i ? (s = { parent: i, cache: i }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), iu(n, _t, i)) : (i = r.cache, iu(n, _t, i), i !== s.cache && Lh(
          n,
          [_t],
          u,
          !0
        ))), $t(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(q(156, n.tag));
  }
  function Dn(l) {
    l.flags |= 4;
  }
  function oo(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !uy(n)) {
      if (n = ia.current, n !== null && ((De & 4194048) === De ? gl !== null : (De & 62914560) !== De && (De & 536870912) === 0 || n !== gl))
        throw kc = mr, yr;
      l.flags |= 8192;
    }
  }
  function Kf(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? zc() : 536870912, l.lanes |= n, yo |= n);
  }
  function fo(l, n) {
    if (!Ne)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var i = null; u !== null; )
            u.alternate !== null && (i = u), u = u.sibling;
          i === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : i.sibling = null;
      }
  }
  function ce(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, i = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags & 65011712, i |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, i |= s.subtreeFlags, i |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= i, l.childLanes = u, n;
  }
  function A0(l, n, u) {
    var i = n.pendingProps;
    switch (yn(n), n.tag) {
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
        return ce(n), null;
      case 1:
        return ce(n), null;
      case 3:
        return u = n.stateNode, i = null, l !== null && (i = l.memoizedState.cache), n.memoizedState.cache !== i && (n.flags |= 2048), mn(_t), tl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ki(n) ? Dn(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Zh())), ce(n), null;
      case 26:
        return u = n.memoizedState, l === null ? (Dn(n), u !== null ? (ce(n), oo(n, u)) : (ce(n), n.flags &= -16777217)) : u ? u !== l.memoizedState ? (Dn(n), ce(n), oo(n, u)) : (ce(n), n.flags &= -16777217) : (l.memoizedProps !== i && Dn(n), ce(n), n.flags &= -16777217), null;
      case 27:
        Ec(n), u = Ue.current;
        var s = n.type;
        if (l !== null && n.stateNode != null)
          l.memoizedProps !== i && Dn(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(q(166));
            return ce(n), null;
          }
          l = Ae.current, ki(n) ? Sf(n) : (l = k(s, i, u), n.stateNode = l, Dn(n));
        }
        return ce(n), null;
      case 5:
        if (Ec(n), u = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== i && Dn(n);
        else {
          if (!i) {
            if (n.stateNode === null)
              throw Error(q(166));
            return ce(n), null;
          }
          if (l = Ae.current, ki(n))
            Sf(n);
          else {
            switch (s = Na(
              Ue.current
            ), l) {
              case 1:
                l = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                l = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    l = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    l = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    l = s.createElement("div"), l.innerHTML = "<script><\/script>", l = l.removeChild(l.firstChild);
                    break;
                  case "select":
                    l = typeof i.is == "string" ? s.createElement("select", { is: i.is }) : s.createElement("select"), i.multiple ? l.multiple = !0 : i.size && (l.size = i.size);
                    break;
                  default:
                    l = typeof i.is == "string" ? s.createElement(u, { is: i.is }) : s.createElement(u);
                }
            }
            l[Jt] = n, l[Dl] = i;
            e: for (s = n.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                l.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === n) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === n)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            n.stateNode = l;
            e: switch (oe(l, u, i), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!i.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Dn(n);
          }
        }
        return ce(n), n.flags &= -16777217, null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== i && Dn(n);
        else {
          if (typeof i != "string" && n.stateNode === null)
            throw Error(q(166));
          if (l = Ue.current, ki(n)) {
            if (l = n.stateNode, u = n.memoizedProps, i = null, s = Ut, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            l[Jt] = n, l = !!(l.nodeValue === u || i !== null && i.suppressHydrationWarning === !0 || ty(l.nodeValue, u)), l || uu(n);
          } else
            l = Na(l).createTextNode(
              i
            ), l[Jt] = n, n.stateNode = l;
        }
        return ce(n), null;
      case 13:
        if (i = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = ki(n), i !== null && i.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(q(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(q(317));
              s[Jt] = n;
            } else
              $i(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ce(n), s = !1;
          } else
            s = Zh(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Fa(n), n) : (Fa(n), null);
        }
        if (Fa(n), (n.flags & 128) !== 0)
          return n.lanes = u, n;
        if (u = i !== null, l = l !== null && l.memoizedState !== null, u) {
          i = n.child, s = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (s = i.alternate.memoizedState.cachePool.pool);
          var r = null;
          i.memoizedState !== null && i.memoizedState.cachePool !== null && (r = i.memoizedState.cachePool.pool), r !== s && (i.flags |= 2048);
        }
        return u !== l && u && (n.child.flags |= 8192), Kf(n, n.updateQueue), ce(n), null;
      case 4:
        return tl(), l === null && P0(n.stateNode.containerInfo), ce(n), null;
      case 10:
        return mn(n.type), ce(n), null;
      case 19:
        if (J(Ke), s = n.memoizedState, s === null) return ce(n), null;
        if (i = (n.flags & 128) !== 0, r = s.rendering, r === null)
          if (i) fo(s, !1);
          else {
            if (At !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = jf(l), r !== null) {
                  for (n.flags |= 128, fo(s, !1), l = r.updateQueue, n.updateQueue = l, Kf(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Se(u, l), u = u.sibling;
                  return ue(
                    Ke,
                    Ke.current & 1 | 2
                  ), n.child;
                }
                l = l.sibling;
              }
            s.tail !== null && ea() > ud && (n.flags |= 128, i = !0, fo(s, !1), n.lanes = 4194304);
          }
        else {
          if (!i)
            if (l = jf(r), l !== null) {
              if (n.flags |= 128, i = !0, l = l.updateQueue, n.updateQueue = l, Kf(n, l), fo(s, !0), s.tail === null && s.tailMode === "hidden" && !r.alternate && !Ne)
                return ce(n), null;
            } else
              2 * ea() - s.renderingStartTime > ud && u !== 536870912 && (n.flags |= 128, i = !0, fo(s, !1), n.lanes = 4194304);
          s.isBackwards ? (r.sibling = n.child, n.child = r) : (l = s.last, l !== null ? l.sibling = r : n.child = r, s.last = r);
        }
        return s.tail !== null ? (n = s.tail, s.rendering = n, s.tail = n.sibling, s.renderingStartTime = ea(), n.sibling = null, l = Ke.current, ue(Ke, i ? l & 1 | 2 : l & 1), n) : (ce(n), null);
      case 22:
      case 23:
        return Fa(n), lo(), i = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== i && (n.flags |= 8192) : i && (n.flags |= 8192), i ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (ce(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ce(n), u = n.updateQueue, u !== null && Kf(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), i = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (i = n.memoizedState.cachePool.pool), i !== u && (n.flags |= 2048), l !== null && J(vn), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), mn(_t), ce(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(q(156, n.tag));
  }
  function dv(l, n) {
    switch (yn(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return mn(_t), tl(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Ec(n), null;
      case 13:
        if (Fa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(q(340));
          $i();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return J(Ke), null;
      case 4:
        return tl(), null;
      case 10:
        return mn(n.type), null;
      case 22:
      case 23:
        return Fa(n), lo(), l !== null && J(vn), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return mn(_t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function R0(l, n) {
    switch (yn(n), n.tag) {
      case 3:
        mn(_t), tl();
        break;
      case 26:
      case 27:
      case 5:
        Ec(n);
        break;
      case 4:
        tl();
        break;
      case 13:
        Fa(n);
        break;
      case 19:
        J(Ke);
        break;
      case 10:
        mn(n.type);
        break;
      case 22:
      case 23:
        Fa(n), lo(), l !== null && J(vn);
        break;
      case 24:
        mn(_t);
    }
  }
  function kf(l, n) {
    try {
      var u = n.updateQueue, i = u !== null ? u.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            i = void 0;
            var r = u.create, y = u.inst;
            i = r(), y.destroy = i;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (m) {
      Le(n, n.return, m);
    }
  }
  function ac(l, n, u) {
    try {
      var i = n.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        i = r;
        do {
          if ((i.tag & l) === l) {
            var y = i.inst, m = y.destroy;
            if (m !== void 0) {
              y.destroy = void 0, s = n;
              var g = u, D = m;
              try {
                D();
              } catch (G) {
                Le(
                  s,
                  g,
                  G
                );
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    } catch (G) {
      Le(n, n.return, G);
    }
  }
  function Fr(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Mf(n, u);
      } catch (i) {
        Le(l, l.return, i);
      }
    }
  }
  function z0(l, n, u) {
    u.props = tc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (i) {
      Le(l, n, i);
    }
  }
  function so(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var i = l.stateNode;
            break;
          case 30:
            i = l.stateNode;
            break;
          default:
            i = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(i) : u.current = i;
      }
    } catch (s) {
      Le(l, n, s);
    }
  }
  function Ia(l, n) {
    var u = l.ref, i = l.refCleanup;
    if (u !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Le(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Le(l, n, s);
        }
      else u.current = null;
  }
  function ro(l) {
    var n = l.type, u = l.memoizedProps, i = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && i.focus();
          break e;
        case "img":
          u.src ? i.src = u.src : u.srcSet && (i.srcset = u.srcSet);
      }
    } catch (s) {
      Le(l, l.return, s);
    }
  }
  function D0(l, n, u) {
    try {
      var i = l.stateNode;
      vv(i, l.type, u, n), i[Dl] = n;
    } catch (s) {
      Le(l, l.return, s);
    }
  }
  function wm(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && rc(l.type) || l.tag === 4;
  }
  function Ua(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || wm(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && rc(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function ii(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = vd));
    else if (i !== 4 && (i === 27 && rc(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (ii(l, n, u), l = l.sibling; l !== null; )
        ii(l, n, u), l = l.sibling;
  }
  function Ir(l, n, u) {
    var i = l.tag;
    if (i === 5 || i === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (i !== 4 && (i === 27 && rc(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (Ir(l, n, u), l = l.sibling; l !== null; )
        Ir(l, n, u), l = l.sibling;
  }
  function Pr(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var i = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      oe(n, i, u), n[Jt] = l, n[Dl] = u;
    } catch (r) {
      Le(l, l.return, r);
    }
  }
  var On = !1, Tt = !1, ed = !1, td = typeof WeakSet == "function" ? WeakSet : Set, Xt = null;
  function O0(l, n) {
    if (l = l.containerInfo, is = hs, l = Yh(l), pf(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var i = u.getSelection && u.getSelection();
          if (i && i.rangeCount !== 0) {
            u = i.anchorNode;
            var s = i.anchorOffset, r = i.focusNode;
            i = i.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var y = 0, m = -1, g = -1, D = 0, G = 0, X = l, M = null;
            t: for (; ; ) {
              for (var x; X !== u || s !== 0 && X.nodeType !== 3 || (m = y + s), X !== r || i !== 0 && X.nodeType !== 3 || (g = y + i), X.nodeType === 3 && (y += X.nodeValue.length), (x = X.firstChild) !== null; )
                M = X, X = x;
              for (; ; ) {
                if (X === l) break t;
                if (M === u && ++D === s && (m = y), M === r && ++G === i && (g = y), (x = X.nextSibling) !== null) break;
                X = M, M = X.parentNode;
              }
              X = x;
            }
            u = m === -1 || g === -1 ? null : { start: m, end: g };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (os = { focusedElem: l, selectionRange: u }, hs = !1, Xt = n; Xt !== null; )
      if (n = Xt, l = n.child, (n.subtreeFlags & 1024) !== 0 && l !== null)
        l.return = n, Xt = l;
      else
        for (; Xt !== null; ) {
          switch (n = Xt, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, i = u.stateNode;
                try {
                  var le = tc(
                    u.type,
                    s,
                    u.elementType === u.type
                  );
                  l = i.getSnapshotBeforeUpdate(
                    le,
                    r
                  ), i.__reactInternalSnapshotBeforeUpdate = l;
                } catch (ae) {
                  Le(
                    u,
                    u.return,
                    ae
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  fs(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      fs(l);
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
              if ((l & 1024) !== 0) throw Error(q(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Xt = l;
            break;
          }
          Xt = n.return;
        }
  }
  function M0(l, n, u) {
    var i = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Un(l, u), i & 4 && kf(5, u);
        break;
      case 1:
        if (Un(l, u), i & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (y) {
              Le(u, u.return, y);
            }
          else {
            var s = tc(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              Le(
                u,
                u.return,
                y
              );
            }
          }
        i & 64 && Fr(u), i & 512 && so(u, u.return);
        break;
      case 3:
        if (Un(l, u), i & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            Mf(l, n);
          } catch (y) {
            Le(u, u.return, y);
          }
        }
        break;
      case 27:
        n === null && i & 4 && Pr(u);
      case 26:
      case 5:
        Un(l, u), n === null && i & 4 && ro(u), i & 512 && so(u, u.return);
        break;
      case 12:
        Un(l, u);
        break;
      case 13:
        Un(l, u), i & 4 && ld(l, u), i & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = hv.bind(
          null,
          u
        ), Tv(l, u))));
        break;
      case 22:
        if (i = u.memoizedState !== null || On, !i) {
          n = n !== null && n.memoizedState !== null || Tt, s = On;
          var r = Tt;
          On = i, (Tt = n) && !r ? nc(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Un(l, u), On = s, Tt = r;
        }
        break;
      case 30:
        break;
      default:
        Un(l, u);
    }
  }
  function U0(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, U0(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && Po(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var it = null, ul = !1;
  function Mn(l, n, u) {
    for (u = u.child; u !== null; )
      Re(l, n, u), u = u.sibling;
  }
  function Re(l, n, u) {
    if (zl && typeof zl.onCommitFiberUnmount == "function")
      try {
        zl.onCommitFiberUnmount(Ci, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Tt || Ia(u, n), Mn(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Tt || Ia(u, n);
        var i = it, s = ul;
        rc(u.type) && (it = u.stateNode, ul = !1), Mn(
          l,
          n,
          u
        ), Wl(u.stateNode), it = i, ul = s;
        break;
      case 5:
        Tt || Ia(u, n);
      case 6:
        if (i = it, s = ul, it = null, Mn(
          l,
          n,
          u
        ), it = i, ul = s, it !== null)
          if (ul)
            try {
              (it.nodeType === 9 ? it.body : it.nodeName === "HTML" ? it.ownerDocument.body : it).removeChild(u.stateNode);
            } catch (r) {
              Le(
                u,
                n,
                r
              );
            }
          else
            try {
              it.removeChild(u.stateNode);
            } catch (r) {
              Le(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        it !== null && (ul ? (l = it, bd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), _n(l)) : bd(it, u.stateNode));
        break;
      case 4:
        i = it, s = ul, it = u.stateNode.containerInfo, ul = !0, Mn(
          l,
          n,
          u
        ), it = i, ul = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Tt || ac(2, u, n), Tt || ac(4, u, n), Mn(
          l,
          n,
          u
        );
        break;
      case 1:
        Tt || (Ia(u, n), i = u.stateNode, typeof i.componentWillUnmount == "function" && z0(
          u,
          n,
          i
        )), Mn(
          l,
          n,
          u
        );
        break;
      case 21:
        Mn(
          l,
          n,
          u
        );
        break;
      case 22:
        Tt = (i = Tt) || u.memoizedState !== null, Mn(
          l,
          n,
          u
        ), Tt = i;
        break;
      default:
        Mn(
          l,
          n,
          u
        );
    }
  }
  function ld(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        _n(l);
      } catch (u) {
        Le(n, n.return, u);
      }
  }
  function x0(l) {
    switch (l.tag) {
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new td()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new td()), n;
      default:
        throw Error(q(435, l.tag));
    }
  }
  function ad(l, n) {
    var u = x0(l);
    n.forEach(function(i) {
      var s = yv.bind(null, l, i);
      u.has(i) || (u.add(i), i.then(s, s));
    });
  }
  function Ul(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var i = 0; i < u.length; i++) {
        var s = u[i], r = l, y = n, m = y;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (rc(m.type)) {
                it = m.stateNode, ul = !1;
                break e;
              }
              break;
            case 5:
              it = m.stateNode, ul = !1;
              break e;
            case 3:
            case 4:
              it = m.stateNode.containerInfo, ul = !0;
              break e;
          }
          m = m.return;
        }
        if (it === null) throw Error(q(160));
        Re(r, y, s), it = null, ul = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        $f(n, l), n = n.sibling;
  }
  var xl = null;
  function $f(l, n) {
    var u = l.alternate, i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ul(n, l), Wt(l), i & 4 && (ac(3, l, l.return), kf(3, l), ac(5, l, l.return));
        break;
      case 1:
        Ul(n, l), Wt(l), i & 512 && (Tt || u === null || Ia(u, u.return)), i & 64 && On && (l = l.updateQueue, l !== null && (i = l.callbacks, i !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? i : u.concat(i))));
        break;
      case 26:
        var s = xl;
        if (Ul(n, l), Wt(l), i & 512 && (Tt || u === null || Ia(u, u.return)), i & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (i = l.memoizedState, u === null)
            if (i === null)
              if (l.stateNode === null) {
                e: {
                  i = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (i) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[W] || r[Jt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(i), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), oe(r, i, u), r[Jt] = l, Yt(r), i = r;
                      break e;
                    case "link":
                      var y = ay(
                        "link",
                        "href",
                        s
                      ).get(i + (u.href || ""));
                      if (y) {
                        for (var m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(i), oe(r, i, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (y = ay(
                        "meta",
                        "content",
                        s
                      ).get(i + (u.content || ""))) {
                        for (m = 0; m < y.length; m++)
                          if (r = y[m], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            y.splice(m, 1);
                            break t;
                          }
                      }
                      r = s.createElement(i), oe(r, i, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(q(468, i));
                  }
                  r[Jt] = l, Yt(r), i = r;
                }
                l.stateNode = i;
              } else
                ny(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = op(
                s,
                i,
                l.memoizedProps
              );
          else
            r !== i ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, i === null ? ny(
              s,
              l.type,
              l.stateNode
            ) : op(
              s,
              i,
              l.memoizedProps
            )) : i === null && l.stateNode !== null && D0(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ul(n, l), Wt(l), i & 512 && (Tt || u === null || Ia(u, u.return)), u !== null && i & 4 && D0(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ul(n, l), Wt(l), i & 512 && (Tt || u === null || Ia(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Yi(s, "");
          } catch (x) {
            Le(l, l.return, x);
          }
        }
        i & 4 && l.stateNode != null && (s = l.memoizedProps, D0(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), i & 1024 && (ed = !0);
        break;
      case 6:
        if (Ul(n, l), Wt(l), i & 4) {
          if (l.stateNode === null)
            throw Error(q(162));
          i = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = i;
          } catch (x) {
            Le(l, l.return, x);
          }
        }
        break;
      case 3:
        if (mc = null, s = xl, xl = Sd(n.containerInfo), Ul(n, l), xl = s, Wt(l), i & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            _n(n.containerInfo);
          } catch (x) {
            Le(l, l.return, x);
          }
        ed && (ed = !1, H0(l));
        break;
      case 4:
        i = xl, xl = Sd(
          l.stateNode.containerInfo
        ), Ul(n, l), Wt(l), xl = i;
        break;
      case 12:
        Ul(n, l), Wt(l);
        break;
      case 13:
        Ul(n, l), Wt(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (V0 = ea()), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, ad(l, i)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var g = u !== null && u.memoizedState !== null, D = On, G = Tt;
        if (On = D || s, Tt = G || g, Ul(n, l), Tt = G, On = D, Wt(l), i & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || g || On || Tt || ot(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                g = u = n;
                try {
                  if (r = g.stateNode, s)
                    y = r.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none";
                  else {
                    m = g.stateNode;
                    var X = g.memoizedProps.style, M = X != null && X.hasOwnProperty("display") ? X.display : null;
                    m.style.display = M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (x) {
                  Le(g, g.return, x);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                g = n;
                try {
                  g.stateNode.nodeValue = s ? "" : g.memoizedProps;
                } catch (x) {
                  Le(g, g.return, x);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        i & 4 && (i = l.updateQueue, i !== null && (u = i.retryQueue, u !== null && (i.retryQueue = null, ad(l, u))));
        break;
      case 19:
        Ul(n, l), Wt(l), i & 4 && (i = l.updateQueue, i !== null && (l.updateQueue = null, ad(l, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ul(n, l), Wt(l);
    }
  }
  function Wt(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, i = l.return; i !== null; ) {
          if (wm(i)) {
            u = i;
            break;
          }
          i = i.return;
        }
        if (u == null) throw Error(q(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = Ua(l);
            Ir(l, r, s);
            break;
          case 5:
            var y = u.stateNode;
            u.flags & 32 && (Yi(y, ""), u.flags &= -33);
            var m = Ua(l);
            Ir(l, m, y);
            break;
          case 3:
          case 4:
            var g = u.stateNode.containerInfo, D = Ua(l);
            ii(
              l,
              D,
              g
            );
            break;
          default:
            throw Error(q(161));
        }
      } catch (G) {
        Le(l, l.return, G);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function H0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        H0(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Un(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        M0(l, n.alternate, n), n = n.sibling;
  }
  function ot(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ac(4, n, n.return), ot(n);
          break;
        case 1:
          Ia(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && z0(
            n,
            n.return,
            u
          ), ot(n);
          break;
        case 27:
          Wl(n.stateNode);
        case 26:
        case 5:
          Ia(n, n.return), ot(n);
          break;
        case 22:
          n.memoizedState === null && ot(n);
          break;
        case 30:
          ot(n);
          break;
        default:
          ot(n);
      }
      l = l.sibling;
    }
  }
  function nc(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var i = n.alternate, s = l, r = n, y = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          nc(
            s,
            r,
            u
          ), kf(4, r);
          break;
        case 1:
          if (nc(
            s,
            r,
            u
          ), i = r, s = i.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (D) {
              Le(i, i.return, D);
            }
          if (i = r, s = i.updateQueue, s !== null) {
            var m = i.stateNode;
            try {
              var g = s.shared.hiddenCallbacks;
              if (g !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < g.length; s++)
                  br(g[s], m);
            } catch (D) {
              Le(i, i.return, D);
            }
          }
          u && y & 64 && Fr(r), so(r, r.return);
          break;
        case 27:
          Pr(r);
        case 26:
        case 5:
          nc(
            s,
            r,
            u
          ), u && i === null && y & 4 && ro(r), so(r, r.return);
          break;
        case 12:
          nc(
            s,
            r,
            u
          );
          break;
        case 13:
          nc(
            s,
            r,
            u
          ), u && y & 4 && ld(s, r);
          break;
        case 22:
          r.memoizedState === null && nc(
            s,
            r,
            u
          ), so(r, r.return);
          break;
        case 30:
          break;
        default:
          nc(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function xa(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && pn(u));
  }
  function nd(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && pn(l));
  }
  function cl(l, n, u, i) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        C0(
          l,
          n,
          u,
          i
        ), n = n.sibling;
  }
  function C0(l, n, u, i) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        cl(
          l,
          n,
          u,
          i
        ), s & 2048 && kf(9, n);
        break;
      case 1:
        cl(
          l,
          n,
          u,
          i
        );
        break;
      case 3:
        cl(
          l,
          n,
          u,
          i
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && pn(l)));
        break;
      case 12:
        if (s & 2048) {
          cl(
            l,
            n,
            u,
            i
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, y = r.id, m = r.onPostCommit;
            typeof m == "function" && m(
              y,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (g) {
            Le(n, n.return, g);
          }
        } else
          cl(
            l,
            n,
            u,
            i
          );
        break;
      case 13:
        cl(
          l,
          n,
          u,
          i
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, y = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? cl(
          l,
          n,
          u,
          i
        ) : _e(l, n) : r._visibility & 2 ? cl(
          l,
          n,
          u,
          i
        ) : (r._visibility |= 2, hu(
          l,
          n,
          u,
          i,
          (n.subtreeFlags & 10256) !== 0
        )), s & 2048 && xa(y, n);
        break;
      case 24:
        cl(
          l,
          n,
          u,
          i
        ), s & 2048 && nd(n.alternate, n);
        break;
      default:
        cl(
          l,
          n,
          u,
          i
        );
    }
  }
  function hu(l, n, u, i, s) {
    for (s = s && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var r = l, y = n, m = u, g = i, D = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          hu(
            r,
            y,
            m,
            g,
            s
          ), kf(8, y);
          break;
        case 23:
          break;
        case 22:
          var G = y.stateNode;
          y.memoizedState !== null ? G._visibility & 2 ? hu(
            r,
            y,
            m,
            g,
            s
          ) : _e(
            r,
            y
          ) : (G._visibility |= 2, hu(
            r,
            y,
            m,
            g,
            s
          )), s && D & 2048 && xa(
            y.alternate,
            y
          );
          break;
        case 24:
          hu(
            r,
            y,
            m,
            g,
            s
          ), s && D & 2048 && nd(y.alternate, y);
          break;
        default:
          hu(
            r,
            y,
            m,
            g,
            s
          );
      }
      n = n.sibling;
    }
  }
  function _e(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, i = n, s = i.flags;
        switch (i.tag) {
          case 22:
            _e(u, i), s & 2048 && xa(
              i.alternate,
              i
            );
            break;
          case 24:
            _e(u, i), s & 2048 && nd(i.alternate, i);
            break;
          default:
            _e(u, i);
        }
        n = n.sibling;
      }
  }
  var oi = 8192;
  function Et(l) {
    if (l.subtreeFlags & oi)
      for (l = l.child; l !== null; )
        Jm(l), l = l.sibling;
  }
  function Jm(l) {
    switch (l.tag) {
      case 26:
        Et(l), l.flags & oi && l.memoizedState !== null && rp(
          xl,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Et(l);
        break;
      case 3:
      case 4:
        var n = xl;
        xl = Sd(l.stateNode.containerInfo), Et(l), xl = n;
        break;
      case 22:
        l.memoizedState === null && (n = l.alternate, n !== null && n.memoizedState !== null ? (n = oi, oi = 16777216, Et(l), oi = n) : Et(l));
        break;
      default:
        Et(l);
    }
  }
  function N0(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function fi(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          Xt = i, q0(
            i,
            l
          );
        }
      N0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        B0(l), l = l.sibling;
  }
  function B0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fi(l), l.flags & 2048 && ac(9, l, l.return);
        break;
      case 3:
        fi(l);
        break;
      case 12:
        fi(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, Hl(l)) : fi(l);
        break;
      default:
        fi(l);
    }
  }
  function Hl(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var i = n[u];
          Xt = i, q0(
            i,
            l
          );
        }
      N0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          ac(8, n, n.return), Hl(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, Hl(n));
          break;
        default:
          Hl(n);
      }
      l = l.sibling;
    }
  }
  function q0(l, n) {
    for (; Xt !== null; ) {
      var u = Xt;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          ac(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var i = u.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          pn(u.memoizedState.cache);
      }
      if (i = u.child, i !== null) i.return = u, Xt = i;
      else
        e: for (u = l; Xt !== null; ) {
          i = Xt;
          var s = i.sibling, r = i.return;
          if (U0(i), i === u) {
            Xt = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Xt = s;
            break e;
          }
          Xt = r;
        }
    }
  }
  var Y0 = {
    getCacheForType: function(l) {
      var n = Kt(_t), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    }
  }, Km = typeof WeakMap == "function" ? WeakMap : Map, Qe = 0, We = null, ze = null, De = 0, Ze = 0, Kl = null, xn = !1, ho = !1, _0 = !1, yu = 0, At = 0, mu = 0, si = 0, Hn = 0, Ha = 0, yo = 0, mo = null, kl = null, G0 = !1, V0 = 0, ud = 1 / 0, po = null, uc = null, il = 0, Cn = null, vo = null, ol = 0, cd = 0, id = null, X0 = null, go = 0, j0 = null;
  function oa() {
    if ((Qe & 2) !== 0 && De !== 0)
      return De & -De;
    if (A.T !== null) {
      var l = Da;
      return l !== 0 ? l : yi();
    }
    return im();
  }
  function Q0() {
    Ha === 0 && (Ha = (De & 536870912) === 0 || Ne ? Hu() : 536870912);
    var l = ia.current;
    return l !== null && (l.flags |= 32), Ha;
  }
  function fa(l, n, u) {
    (l === We && (Ze === 2 || Ze === 9) || l.cancelPendingCommit !== null) && (Nn(l, 0), pu(
      l,
      De,
      Ha,
      !1
    )), Dc(l, u), ((Qe & 2) === 0 || l !== We) && (l === We && ((Qe & 2) === 0 && (si |= u), At === 4 && pu(
      l,
      De,
      Ha,
      !1
    )), $l(l));
  }
  function bo(l, n, u) {
    if ((Qe & 6) !== 0) throw Error(q(327));
    var i = !u && (n & 124) === 0 && (n & l.expiredLanes) === 0 || nn(l, n), s = i ? L0(l, n) : od(l, n, !0), r = i;
    do {
      if (s === 0) {
        ho && !i && pu(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !km(u)) {
          s = od(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var y = 0;
          else
            y = l.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var m = l;
              s = mo;
              var g = m.current.memoizedState.isDehydrated;
              if (g && (Nn(m, y).flags |= 256), y = od(
                m,
                y,
                !1
              ), y !== 2) {
                if (_0 && !g) {
                  m.errorRecoveryDisabledLanes |= r, si |= r, s = 4;
                  break e;
                }
                r = kl, kl = s, r !== null && (kl === null ? kl = r : kl.push.apply(
                  kl,
                  r
                ));
              }
              s = y;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Nn(l, 0), pu(l, n, 0, !0);
          break;
        }
        e: {
          switch (i = l, r = s, r) {
            case 0:
            case 1:
              throw Error(q(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              pu(
                i,
                n,
                Ha,
                !xn
              );
              break e;
            case 2:
              kl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(q(329));
          }
          if ((n & 62914560) === n && (s = V0 + 300 - ea(), 10 < s)) {
            if (pu(
              i,
              n,
              Ha,
              !xn
            ), xu(i, 0, !0) !== 0) break e;
            i.timeoutHandle = gd(
              Wf.bind(
                null,
                i,
                u,
                kl,
                po,
                G0,
                n,
                Ha,
                si,
                yo,
                xn,
                r,
                2,
                -0,
                0
              ),
              s
            );
            break e;
          }
          Wf(
            i,
            u,
            kl,
            po,
            G0,
            n,
            Ha,
            si,
            yo,
            xn,
            r,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    $l(l);
  }
  function Wf(l, n, u, i, s, r, y, m, g, D, G, X, M, x) {
    if (l.timeoutHandle = -1, X = n.subtreeFlags, (X & 8192 || (X & 16785408) === 16785408) && (Ho = { stylesheets: null, count: 0, unsuspend: sp }, Jm(n), X = cy(), X !== null)) {
      l.cancelPendingCommit = X(
        Fm.bind(
          null,
          l,
          n,
          r,
          u,
          i,
          s,
          y,
          m,
          g,
          G,
          1,
          M,
          x
        )
      ), pu(l, r, y, !D);
      return;
    }
    Fm(
      l,
      n,
      r,
      u,
      i,
      s,
      y,
      m,
      g
    );
  }
  function km(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var i = 0; i < u.length; i++) {
          var s = u[i], r = s.getSnapshot;
          s = s.value;
          try {
            if (!nl(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function pu(l, n, u, i) {
    n &= ~Hn, n &= ~si, l.suspendedLanes |= n, l.pingedLanes &= ~n, i && (l.warmLanes |= n), i = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Gl(s), y = 1 << r;
      i[r] = -1, s &= ~y;
    }
    u !== 0 && Fo(l, u, n);
  }
  function ri() {
    return (Qe & 6) === 0 ? (es(0), !1) : !0;
  }
  function cc() {
    if (ze !== null) {
      if (Ze === 0)
        var l = ze.return;
      else
        l = ze, ka = cu = null, Ar(l), ti = null, uo = 0, l = ze;
      for (; l !== null; )
        R0(l.alternate, l), l = l.return;
      ze = null;
    }
  }
  function Nn(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, gv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), cc(), We = l, ze = u = Ja(l.current, null), De = n, Ze = 0, Kl = null, xn = !1, ho = nn(l, n), _0 = !1, yo = Ha = Hn = si = mu = At = 0, kl = mo = null, G0 = !1, (n & 8) !== 0 && (n |= n & 32);
    var i = l.entangledLanes;
    if (i !== 0)
      for (l = l.entanglements, i &= n; 0 < i; ) {
        var s = 31 - Gl(i), r = 1 << s;
        n |= l[s], i &= ~r;
      }
    return yu = n, wa(), u;
  }
  function Z0(l, n) {
    he = null, A.H = Gr, n === Wu || n === Df ? (n = Kh(), Ze = 3) : n === yr ? (n = Kh(), Ze = 4) : Ze = n === St ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Kl = n, ze === null && (At = 1, Lf(
      l,
      na(n, l.current)
    ));
  }
  function $m() {
    var l = A.H;
    return A.H = Gr, l === null ? Gr : l;
  }
  function di() {
    var l = A.A;
    return A.A = Y0, l;
  }
  function hi() {
    At = 4, xn || (De & 4194048) !== De && ia.current !== null || (ho = !0), (mu & 134217727) === 0 && (si & 134217727) === 0 || We === null || pu(
      We,
      De,
      Ha,
      !1
    );
  }
  function od(l, n, u) {
    var i = Qe;
    Qe |= 2;
    var s = $m(), r = di();
    (We !== l || De !== n) && (po = null, Nn(l, n)), n = !1;
    var y = At;
    e: do
      try {
        if (Ze !== 0 && ze !== null) {
          var m = ze, g = Kl;
          switch (Ze) {
            case 8:
              cc(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ia.current === null && (n = !0);
              var D = Ze;
              if (Ze = 0, Kl = null, So(l, m, g, D), u && ho) {
                y = 0;
                break e;
              }
              break;
            default:
              D = Ze, Ze = 0, Kl = null, So(l, m, g, D);
          }
        }
        fd(), y = At;
        break;
      } catch (G) {
        Z0(l, G);
      }
    while (!0);
    return n && l.shellSuspendCounter++, ka = cu = null, Qe = i, A.H = s, A.A = r, ze === null && (We = null, De = 0, wa()), y;
  }
  function fd() {
    for (; ze !== null; ) J0(ze);
  }
  function L0(l, n) {
    var u = Qe;
    Qe |= 2;
    var i = $m(), s = di();
    We !== l || De !== n ? (po = null, ud = ea() + 500, Nn(l, n)) : ho = nn(
      l,
      n
    );
    e: do
      try {
        if (Ze !== 0 && ze !== null) {
          n = ze;
          var r = Kl;
          t: switch (Ze) {
            case 1:
              Ze = 0, Kl = null, So(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (pr(r)) {
                Ze = 0, Kl = null, K0(n);
                break;
              }
              n = function() {
                Ze !== 2 && Ze !== 9 || We !== l || (Ze = 7), $l(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ze = 7;
              break e;
            case 4:
              Ze = 5;
              break e;
            case 7:
              pr(r) ? (Ze = 0, Kl = null, K0(n)) : (Ze = 0, Kl = null, So(l, n, r, 7));
              break;
            case 5:
              var y = null;
              switch (ze.tag) {
                case 26:
                  y = ze.memoizedState;
                case 5:
                case 27:
                  var m = ze;
                  if (!y || uy(y)) {
                    Ze = 0, Kl = null;
                    var g = m.sibling;
                    if (g !== null) ze = g;
                    else {
                      var D = m.return;
                      D !== null ? (ze = D, Ff(D)) : ze = null;
                    }
                    break t;
                  }
              }
              Ze = 0, Kl = null, So(l, n, r, 5);
              break;
            case 6:
              Ze = 0, Kl = null, So(l, n, r, 6);
              break;
            case 8:
              cc(), At = 6;
              break e;
            default:
              throw Error(q(462));
          }
        }
        w0();
        break;
      } catch (G) {
        Z0(l, G);
      }
    while (!0);
    return ka = cu = null, A.H = i, A.A = s, Qe = u, ze !== null ? 0 : (We = null, De = 0, wa(), At);
  }
  function w0() {
    for (; ze !== null && !ev(); )
      J0(ze);
  }
  function J0(l) {
    var n = Lm(l.alternate, l, yu);
    l.memoizedProps = l.pendingProps, n === null ? Ff(l) : ze = n;
  }
  function K0(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = b0(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          De
        );
        break;
      case 11:
        n = b0(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          De
        );
        break;
      case 5:
        Ar(n);
      default:
        R0(u, n), n = ze = Se(n, yu), n = Lm(u, n, yu);
    }
    l.memoizedProps = l.pendingProps, n === null ? Ff(l) : ze = n;
  }
  function So(l, n, u, i) {
    ka = cu = null, Ar(n), ti = null, uo = 0;
    var s = n.return;
    try {
      if (jm(
        l,
        s,
        n,
        u,
        De
      )) {
        At = 1, Lf(
          l,
          na(u, l.current)
        ), ze = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ze = s, r;
      At = 1, Lf(
        l,
        na(u, l.current)
      ), ze = null;
      return;
    }
    n.flags & 32768 ? (Ne || i === 1 ? l = !0 : ho || (De & 536870912) !== 0 ? l = !1 : (xn = l = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = ia.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Wm(n, l)) : Ff(n);
  }
  function Ff(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        Wm(
          n,
          xn
        );
        return;
      }
      l = n.return;
      var u = A0(
        n.alternate,
        n,
        yu
      );
      if (u !== null) {
        ze = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ze = n;
        return;
      }
      ze = n = l;
    } while (n !== null);
    At === 0 && (At = 5);
  }
  function Wm(l, n) {
    do {
      var u = dv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ze = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ze = l;
        return;
      }
      ze = l = u;
    } while (l !== null);
    At = 6, ze = null;
  }
  function Fm(l, n, u, i, s, r, y, m, g) {
    l.cancelPendingCommit = null;
    do
      rd();
    while (il !== 0);
    if ((Qe & 6) !== 0) throw Error(q(327));
    if (n !== null) {
      if (n === l.current) throw Error(q(177));
      if (r = n.lanes | n.childLanes, r |= dn, cm(
        l,
        u,
        r,
        y,
        m,
        g
      ), l === We && (ze = We = null, De = 0), vo = n, Cn = l, ol = u, cd = r, id = s, X0 = i, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, mv(Wo, function() {
        return k0(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), i = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || i) {
        i = A.T, A.T = null, s = j.p, j.p = 2, y = Qe, Qe |= 4;
        try {
          O0(l, n, u);
        } finally {
          Qe = y, j.p = s, A.T = i;
        }
      }
      il = 1, Im(), If(), sd();
    }
  }
  function Im() {
    if (il === 1) {
      il = 0;
      var l = Cn, n = vo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = A.T, A.T = null;
        var i = j.p;
        j.p = 2;
        var s = Qe;
        Qe |= 4;
        try {
          $f(n, l);
          var r = os, y = Yh(l.containerInfo), m = r.focusedElem, g = r.selectionRange;
          if (y !== m && m && m.ownerDocument && mf(
            m.ownerDocument.documentElement,
            m
          )) {
            if (g !== null && pf(m)) {
              var D = g.start, G = g.end;
              if (G === void 0 && (G = D), "selectionStart" in m)
                m.selectionStart = D, m.selectionEnd = Math.min(
                  G,
                  m.value.length
                );
              else {
                var X = m.ownerDocument || document, M = X && X.defaultView || window;
                if (M.getSelection) {
                  var x = M.getSelection(), le = m.textContent.length, ae = Math.min(g.start, le), Ge = g.end === void 0 ? ae : Math.min(g.end, le);
                  !x.extend && ae > Ge && (y = Ge, Ge = ae, ae = y);
                  var R = lt(
                    m,
                    ae
                  ), E = lt(
                    m,
                    Ge
                  );
                  if (R && E && (x.rangeCount !== 1 || x.anchorNode !== R.node || x.anchorOffset !== R.offset || x.focusNode !== E.node || x.focusOffset !== E.offset)) {
                    var z = X.createRange();
                    z.setStart(R.node, R.offset), x.removeAllRanges(), ae > Ge ? (x.addRange(z), x.extend(E.node, E.offset)) : (z.setEnd(E.node, E.offset), x.addRange(z));
                  }
                }
              }
            }
            for (X = [], x = m; x = x.parentNode; )
              x.nodeType === 1 && X.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof m.focus == "function" && m.focus(), m = 0; m < X.length; m++) {
              var V = X[m];
              V.element.scrollLeft = V.left, V.element.scrollTop = V.top;
            }
          }
          hs = !!is, os = is = null;
        } finally {
          Qe = s, j.p = i, A.T = u;
        }
      }
      l.current = n, il = 2;
    }
  }
  function If() {
    if (il === 2) {
      il = 0;
      var l = Cn, n = vo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = A.T, A.T = null;
        var i = j.p;
        j.p = 2;
        var s = Qe;
        Qe |= 4;
        try {
          M0(l, n.alternate, n);
        } finally {
          Qe = s, j.p = i, A.T = u;
        }
      }
      il = 3;
    }
  }
  function sd() {
    if (il === 4 || il === 3) {
      il = 0, Rc();
      var l = Cn, n = vo, u = ol, i = X0;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? il = 5 : (il = 0, vo = Cn = null, Pm(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (uc = null), Vs(u), n = n.stateNode, zl && typeof zl.onCommitFiberRoot == "function")
        try {
          zl.onCommitFiberRoot(
            Ci,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        n = A.T, s = j.p, j.p = 2, A.T = null;
        try {
          for (var r = l.onRecoverableError, y = 0; y < i.length; y++) {
            var m = i[y];
            r(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          A.T = n, j.p = s;
        }
      }
      (ol & 3) !== 0 && rd(), $l(l), s = l.pendingLanes, (u & 4194090) !== 0 && (s & 42) !== 0 ? l === j0 ? go++ : (go = 0, j0 = l) : go = 0, es(0);
    }
  }
  function Pm(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, pn(n)));
  }
  function rd(l) {
    return Im(), If(), sd(), k0();
  }
  function k0() {
    if (il !== 5) return !1;
    var l = Cn, n = cd;
    cd = 0;
    var u = Vs(ol), i = A.T, s = j.p;
    try {
      j.p = 32 > u ? 32 : u, A.T = null, u = id, id = null;
      var r = Cn, y = ol;
      if (il = 0, vo = Cn = null, ol = 0, (Qe & 6) !== 0) throw Error(q(331));
      var m = Qe;
      if (Qe |= 4, B0(r.current), C0(
        r,
        r.current,
        y,
        u
      ), Qe = m, es(0, !1), zl && typeof zl.onPostCommitFiberRoot == "function")
        try {
          zl.onPostCommitFiberRoot(Ci, r);
        } catch {
        }
      return !0;
    } finally {
      j.p = s, A.T = i, Pm(l, n);
    }
  }
  function $0(l, n, u) {
    n = na(u, n), n = v0(l.stateNode, n, 2), l = bn(l, n, 2), l !== null && (Dc(l, 2), $l(l));
  }
  function Le(l, n, u) {
    if (l.tag === 3)
      $0(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          $0(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var i = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (uc === null || !uc.has(i))) {
            l = na(u, l), u = g0(2), i = bn(n, u, 2), i !== null && (Jl(
              u,
              i,
              n,
              l
            ), Dc(i, 2), $l(i));
            break;
          }
        }
        n = n.return;
      }
  }
  function dd(l, n, u) {
    var i = l.pingCache;
    if (i === null) {
      i = l.pingCache = new Km();
      var s = /* @__PURE__ */ new Set();
      i.set(n, s);
    } else
      s = i.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(n, s));
    s.has(u) || (_0 = !0, s.add(u), l = W0.bind(null, l, n, u), n.then(l, l));
  }
  function W0(l, n, u) {
    var i = l.pingCache;
    i !== null && i.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, We === l && (De & u) === u && (At === 4 || At === 3 && (De & 62914560) === De && 300 > ea() - V0 ? (Qe & 2) === 0 && Nn(l, 0) : Hn |= u, yo === De && (yo = 0)), $l(l);
  }
  function F0(l, n) {
    n === 0 && (n = zc()), l = hn(l, n), l !== null && (Dc(l, n), $l(l));
  }
  function hv(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), F0(l, u);
  }
  function yv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 13:
        var i = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        i = l.stateNode;
        break;
      case 22:
        i = l.stateNode._retryCache;
        break;
      default:
        throw Error(q(314));
    }
    i !== null && i.delete(n), F0(l, u);
  }
  function mv(l, n) {
    return Ac(l, n);
  }
  var hd = null, ic = null, Pf = !1, To = !1, yd = !1, oc = 0;
  function $l(l) {
    l !== ic && l.next === null && (ic === null ? hd = ic = l : ic = ic.next = l), To = !0, Pf || (Pf = !0, lp());
  }
  function es(l, n) {
    if (!yd && To) {
      yd = !0;
      do
        for (var u = !1, i = hd; i !== null; ) {
          if (l !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var y = i.suspendedLanes, m = i.pingedLanes;
              r = (1 << 31 - Gl(42 | l) + 1) - 1, r &= s & ~(y & ~m), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, ls(i, r));
          } else
            r = De, r = xu(
              i,
              i === We ? r : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (r & 3) === 0 || nn(i, r) || (u = !0, ls(i, r));
          i = i.next;
        }
      while (u);
      yd = !1;
    }
  }
  function ep() {
    ts();
  }
  function ts() {
    To = Pf = !1;
    var l = 0;
    oc !== 0 && (bu() && (l = oc), oc = 0);
    for (var n = ea(), u = null, i = hd; i !== null; ) {
      var s = i.next, r = I0(i, n);
      r === 0 ? (i.next = null, u === null ? hd = s : u.next = s, s === null && (ic = u)) : (u = i, (l !== 0 || (r & 3) !== 0) && (To = !0)), i = s;
    }
    es(l);
  }
  function I0(l, n) {
    for (var u = l.suspendedLanes, i = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var y = 31 - Gl(r), m = 1 << y, g = s[y];
      g === -1 ? ((m & u) === 0 || (m & i) !== 0) && (s[y] = wt(m, n)) : g <= n && (l.expiredLanes |= m), r &= ~m;
    }
    if (n = We, u = De, u = xu(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i = l.callbackNode, u === 0 || l === n && (Ze === 2 || Ze === 9) || l.cancelPendingCommit !== null)
      return i !== null && i !== null && ih(i), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || nn(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (i !== null && ih(i), Vs(u)) {
        case 2:
        case 8:
          u = oh;
          break;
        case 32:
          u = Wo;
          break;
        case 268435456:
          u = Hi;
          break;
        default:
          u = Wo;
      }
      return i = tp.bind(null, l), u = Ac(u, i), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return i !== null && i !== null && ih(i), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function tp(l, n) {
    if (il !== 0 && il !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (rd() && l.callbackNode !== u)
      return null;
    var i = De;
    return i = xu(
      l,
      l === We ? i : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), i === 0 ? null : (bo(l, i, n), I0(l, ea()), l.callbackNode != null && l.callbackNode === u ? tp.bind(null, l) : null);
  }
  function ls(l, n) {
    if (rd()) return null;
    bo(l, n, !0);
  }
  function lp() {
    bv(function() {
      (Qe & 6) !== 0 ? Ac(
        am,
        ep
      ) : ts();
    });
  }
  function yi() {
    return oc === 0 && (oc = Hu()), oc;
  }
  function md(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : cf("" + l);
  }
  function as(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function ap(l, n, u, i, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = md(
        (s[Dl] || null).action
      ), y = i.submitter;
      y && (n = (n = y[Dl] || null) ? md(n.formAction) : y.getAttribute("formAction"), n !== null && (r = n, y = null));
      var m = new Fs(
        "action",
        "action",
        null,
        i,
        s
      );
      l.push({
        event: m,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (oc !== 0) {
                  var g = y ? as(s, y) : new FormData(s);
                  _r(
                    u,
                    {
                      pending: !0,
                      data: g,
                      method: s.method,
                      action: r
                    },
                    null,
                    g
                  );
                }
              } else
                typeof r == "function" && (m.preventDefault(), g = y ? as(s, y) : new FormData(s), _r(
                  u,
                  {
                    pending: !0,
                    data: g,
                    method: s.method,
                    action: r
                  },
                  r,
                  g
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Rt = 0; Rt < Qi.length; Rt++) {
    var ns = Qi[Rt], pv = ns.toLowerCase(), be = ns[0].toUpperCase() + ns.slice(1);
    Ta(
      pv,
      "on" + be
    );
  }
  Ta(Dm, "onAnimationEnd"), Ta(_h, "onAnimationIteration"), Ta(Om, "onAnimationStart"), Ta("dblclick", "onDoubleClick"), Ta("focusin", "onFocus"), Ta("focusout", "onBlur"), Ta(Gh, "onTransitionRun"), Ta(cr, "onTransitionStart"), Ta(Mm, "onTransitionCancel"), Ta(Vh, "onTransitionEnd"), Bu("onMouseEnter", ["mouseout", "mouseover"]), Bu("onMouseLeave", ["mouseout", "mouseover"]), Bu("onPointerEnter", ["pointerout", "pointerover"]), Bu("onPointerLeave", ["pointerout", "pointerover"]), Nu(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Nu(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Nu("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Nu(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Nu(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Nu(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var us = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), fc = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(us)
  );
  function mi(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var i = l[u], s = i.event;
      i = i.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var y = i.length - 1; 0 <= y; y--) {
            var m = i[y], g = m.instance, D = m.currentTarget;
            if (m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = D;
            try {
              r(s);
            } catch (G) {
              Qf(G);
            }
            s.currentTarget = null, r = g;
          }
        else
          for (y = 0; y < i.length; y++) {
            if (m = i[y], g = m.instance, D = m.currentTarget, m = m.listener, g !== r && s.isPropagationStopped())
              break e;
            r = m, s.currentTarget = D;
            try {
              r(s);
            } catch (G) {
              Qf(G);
            }
            s.currentTarget = null, r = g;
          }
      }
    }
  }
  function ye(l, n) {
    var u = n[Xs];
    u === void 0 && (u = n[Xs] = /* @__PURE__ */ new Set());
    var i = l + "__bubble";
    u.has(i) || (pd(n, l, 2, !1), u.add(i));
  }
  function Eo(l, n, u) {
    var i = 0;
    n && (i |= 4), pd(
      u,
      l,
      i,
      n
    );
  }
  var Ao = "_reactListening" + Math.random().toString(36).slice(2);
  function P0(l) {
    if (!l[Ao]) {
      l[Ao] = !0, tf.forEach(function(u) {
        u !== "selectionchange" && (fc.has(u) || Eo(u, !1, l), Eo(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Ao] || (n[Ao] = !0, Eo("selectionchange", !1, n));
    }
  }
  function pd(l, n, u, i) {
    switch (yy(n)) {
      case 2:
        var s = dp;
        break;
      case 8:
        s = hp;
        break;
      default:
        s = dy;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !ks || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), i ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function Ca(l, n, u, i, s) {
    var r = i;
    if ((n & 1) === 0 && (n & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var y = i.tag;
        if (y === 3 || y === 4) {
          var m = i.stateNode.containerInfo;
          if (m === s) break;
          if (y === 4)
            for (y = i.return; y !== null; ) {
              var g = y.tag;
              if ((g === 3 || g === 4) && y.stateNode.containerInfo === s)
                return;
              y = y.return;
            }
          for (; m !== null; ) {
            if (y = ll(m), y === null) return;
            if (g = y.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              i = r = y;
              continue e;
            }
            m = m.parentNode;
          }
        }
        i = i.return;
      }
    Vi(function() {
      var D = r, G = Ks(u), X = [];
      e: {
        var M = Xh.get(l);
        if (M !== void 0) {
          var x = Fs, le = l;
          switch (l) {
            case "keypress":
              if (al(u) === 0) break e;
            case "keydown":
            case "keyup":
              x = Xa;
              break;
            case "focusin":
              le = "focus", x = Th;
              break;
            case "focusout":
              le = "blur", x = Th;
              break;
            case "beforeblur":
            case "afterblur":
              x = Th;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              x = Sh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = vm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = Rh;
              break;
            case Dm:
            case _h:
            case Om:
              x = ov;
              break;
            case Vh:
              x = Em;
              break;
            case "scroll":
            case "scrollend":
              x = mm;
              break;
            case "wheel":
              x = Gc;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = sf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = rf;
              break;
            case "toggle":
            case "beforetoggle":
              x = Am;
          }
          var ae = (n & 4) !== 0, Ge = !ae && (l === "scroll" || l === "scrollend"), R = ae ? M !== null ? M + "Capture" : null : M;
          ae = [];
          for (var E = D, z; E !== null; ) {
            var V = E;
            if (z = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || z === null || R === null || (V = Bc(E, R), V != null && ae.push(
              vu(E, V, z)
            )), Ge) break;
            E = E.return;
          }
          0 < ae.length && (M = new x(
            M,
            le,
            null,
            u,
            G
          ), X.push({ event: M, listeners: ae }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (M = l === "mouseover" || l === "pointerover", x = l === "mouseout" || l === "pointerout", M && u !== Nc && (le = u.relatedTarget || u.fromElement) && (ll(le) || le[Bi]))
            break e;
          if ((x || M) && (M = G.window === G ? G : (M = G.ownerDocument) ? M.defaultView || M.parentWindow : window, x ? (le = u.relatedTarget || u.toElement, x = D, le = le ? ll(le) : null, le !== null && (Ge = ut(le), ae = le.tag, le !== Ge || ae !== 5 && ae !== 27 && ae !== 6) && (le = null)) : (x = null, le = D), x !== le)) {
            if (ae = Sh, V = "onMouseLeave", R = "onMouseEnter", E = "mouse", (l === "pointerout" || l === "pointerover") && (ae = rf, V = "onPointerLeave", R = "onPointerEnter", E = "pointer"), Ge = x == null ? M : ef(x), z = le == null ? M : ef(le), M = new ae(
              V,
              E + "leave",
              x,
              u,
              G
            ), M.target = Ge, M.relatedTarget = z, V = null, ll(G) === D && (ae = new ae(
              R,
              E + "enter",
              le,
              u,
              G
            ), ae.target = z, ae.relatedTarget = Ge, V = ae), Ge = V, x && le)
              t: {
                for (ae = x, R = le, E = 0, z = ae; z; z = sc(z))
                  E++;
                for (z = 0, V = R; V; V = sc(V))
                  z++;
                for (; 0 < E - z; )
                  ae = sc(ae), E--;
                for (; 0 < z - E; )
                  R = sc(R), z--;
                for (; E--; ) {
                  if (ae === R || R !== null && ae === R.alternate)
                    break t;
                  ae = sc(ae), R = sc(R);
                }
                ae = null;
              }
            else ae = null;
            x !== null && cs(
              X,
              M,
              x,
              ae,
              !1
            ), le !== null && Ge !== null && cs(
              X,
              Ge,
              le,
              ae,
              !0
            );
          }
        }
        e: {
          if (M = D ? ef(D) : window, x = M.nodeName && M.nodeName.toLowerCase(), x === "select" || x === "input" && M.type === "file")
            var $ = xh;
          else if (lr(M))
            if (Hh)
              $ = Bh;
            else {
              $ = Xu;
              var Te = nr;
            }
          else
            x = M.nodeName, !x || x.toLowerCase() !== "input" || M.type !== "checkbox" && M.type !== "radio" ? D && Cc(D.elementType) && ($ = xh) : $ = lu;
          if ($ && ($ = $(l, D))) {
            ar(
              X,
              $,
              u,
              G
            );
            break e;
          }
          Te && Te(l, M, D), l === "focusout" && D && M.type === "number" && D.memoizedProps.value != null && nf(M, "number", M.value);
        }
        switch (Te = D ? ef(D) : window, l) {
          case "focusin":
            (lr(Te) || Te.contentEditable === "true") && (sn = Te, Za = D, Zu = null);
            break;
          case "focusout":
            Zu = Za = sn = null;
            break;
          case "mousedown":
            Zc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zc = !1, ur(X, u, G);
            break;
          case "selectionchange":
            if (Qc) break;
          case "keydown":
          case "keyup":
            ur(X, u, G);
        }
        var ee;
        if (df)
          e: {
            switch (l) {
              case "compositionstart":
                var ie = "onCompositionStart";
                break e;
              case "compositionend":
                ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ie = "onCompositionUpdate";
                break e;
            }
            ie = void 0;
          }
        else
          Vu ? yf(l, u) && (ie = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (ie = "onCompositionStart");
        ie && (on && u.locale !== "ko" && (Vu || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && Vu && (ee = gh()) : (eu = G, Xi = "value" in eu ? eu.value : eu.textContent, Vu = !0)), Te = Ro(D, ie), 0 < Te.length && (ie = new Eh(
          ie,
          l,
          null,
          u,
          G
        ), X.push({ event: ie, listeners: Te }), ee ? ie.data = ee : (ee = Gu(u), ee !== null && (ie.data = ee)))), (ee = Dh ? Mh(l, u) : Vc(l, u)) && (ie = Ro(D, "onBeforeInput"), 0 < ie.length && (Te = new Eh(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          G
        ), X.push({
          event: Te,
          listeners: ie
        }), Te.data = ee)), ap(
          X,
          l,
          D,
          u,
          G
        );
      }
      mi(X, n);
    });
  }
  function vu(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Ro(l, n) {
    for (var u = n + "Capture", i = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Bc(l, u), s != null && i.unshift(
        vu(l, s, r)
      ), s = Bc(l, n), s != null && i.push(
        vu(l, s, r)
      )), l.tag === 3) return i;
      l = l.return;
    }
    return [];
  }
  function sc(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function cs(l, n, u, i, s) {
    for (var r = n._reactName, y = []; u !== null && u !== i; ) {
      var m = u, g = m.alternate, D = m.stateNode;
      if (m = m.tag, g !== null && g === i) break;
      m !== 5 && m !== 26 && m !== 27 || D === null || (g = D, s ? (D = Bc(u, r), D != null && y.unshift(
        vu(u, D, g)
      )) : s || (D = Bc(u, r), D != null && y.push(
        vu(u, D, g)
      ))), u = u.return;
    }
    y.length !== 0 && l.push({ event: n, listeners: y });
  }
  var sa = /\r\n?/g, ey = /\u0000|\uFFFD/g;
  function np(l) {
    return (typeof l == "string" ? l : "" + l).replace(sa, `
`).replace(ey, "");
  }
  function ty(l, n) {
    return n = np(n), np(l) === n;
  }
  function vd() {
  }
  function se(l, n, u, i, s, r) {
    switch (u) {
      case "children":
        typeof i == "string" ? n === "body" || n === "textarea" && i === "" || Yi(l, i) : (typeof i == "number" || typeof i == "bigint") && n !== "body" && Yi(l, "" + i);
        break;
      case "className":
        lf(l, "class", i);
        break;
      case "tabIndex":
        lf(l, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        lf(l, u, i);
        break;
      case "style":
        uf(l, i, r);
        break;
      case "data":
        if (n !== "object") {
          lf(l, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = cf("" + i), l.setAttribute(u, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && se(l, n, "name", s.name, s, null), se(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), se(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), se(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (se(l, n, "encType", s.encType, s, null), se(l, n, "method", s.method, s, null), se(l, n, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          l.removeAttribute(u);
          break;
        }
        i = cf("" + i), l.setAttribute(u, i);
        break;
      case "onClick":
        i != null && (l.onclick = vd);
        break;
      case "onScroll":
        i != null && ye("scroll", l);
        break;
      case "onScrollEnd":
        i != null && ye("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(q(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(q(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        l.muted = i && typeof i != "function" && typeof i != "symbol";
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
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = cf("" + i), l.setAttributeNS(
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
        i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "" + i) : l.removeAttribute(u);
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
        i && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        i === !0 ? l.setAttribute(u, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? l.setAttribute(u, i) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? l.removeAttribute(u) : l.setAttribute(u, i);
        break;
      case "popover":
        ye("beforetoggle", l), ye("toggle", l), In(l, "popover", i);
        break;
      case "xlinkActuate":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        un(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        un(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        In(l, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = uv.get(u) || u, In(l, u, i));
    }
  }
  function H(l, n, u, i, s, r) {
    switch (u) {
      case "style":
        uf(l, i, r);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(q(61));
          if (u = i.__html, u != null) {
            if (s.children != null) throw Error(q(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof i == "string" ? Yi(l, i) : (typeof i == "number" || typeof i == "bigint") && Yi(l, "" + i);
        break;
      case "onScroll":
        i != null && ye("scroll", l);
        break;
      case "onScrollEnd":
        i != null && ye("scrollend", l);
        break;
      case "onClick":
        i != null && (l.onclick = vd);
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
        if (!la.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[Dl] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof i == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, i, s);
              break e;
            }
            u in l ? l[u] = i : i === !0 ? l.setAttribute(u, "") : In(l, u, i);
          }
    }
  }
  function oe(l, n, u) {
    switch (n) {
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
        ye("error", l), ye("load", l);
        var i = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var y = u[r];
            if (y != null)
              switch (r) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(q(137, n));
                default:
                  se(l, n, r, y, u, null);
              }
          }
        s && se(l, n, "srcSet", u.srcSet, u, null), i && se(l, n, "src", u.src, u, null);
        return;
      case "input":
        ye("invalid", l);
        var m = r = y = s = null, g = null, D = null;
        for (i in u)
          if (u.hasOwnProperty(i)) {
            var G = u[i];
            if (G != null)
              switch (i) {
                case "name":
                  s = G;
                  break;
                case "type":
                  y = G;
                  break;
                case "checked":
                  g = G;
                  break;
                case "defaultChecked":
                  D = G;
                  break;
                case "value":
                  r = G;
                  break;
                case "defaultValue":
                  m = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(q(137, n));
                  break;
                default:
                  se(l, n, i, G, u, null);
              }
          }
        ws(
          l,
          r,
          m,
          g,
          D,
          y,
          s,
          !1
        ), Yu(l);
        return;
      case "select":
        ye("invalid", l), i = y = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (m = u[s], m != null))
            switch (s) {
              case "value":
                r = m;
                break;
              case "defaultValue":
                y = m;
                break;
              case "multiple":
                i = m;
              default:
                se(l, n, s, m, u, null);
            }
        n = r, u = y, l.multiple = !!i, n != null ? Hc(l, !!i, n, !1) : u != null && Hc(l, !!i, u, !0);
        return;
      case "textarea":
        ye("invalid", l), r = s = i = null;
        for (y in u)
          if (u.hasOwnProperty(y) && (m = u[y], m != null))
            switch (y) {
              case "value":
                i = m;
                break;
              case "defaultValue":
                s = m;
                break;
              case "children":
                r = m;
                break;
              case "dangerouslySetInnerHTML":
                if (m != null) throw Error(q(91));
                break;
              default:
                se(l, n, y, m, u, null);
            }
        ph(l, i, s, r), Yu(l);
        return;
      case "option":
        for (g in u)
          if (u.hasOwnProperty(g) && (i = u[g], i != null))
            switch (g) {
              case "selected":
                l.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                se(l, n, g, i, u, null);
            }
        return;
      case "dialog":
        ye("beforetoggle", l), ye("toggle", l), ye("cancel", l), ye("close", l);
        break;
      case "iframe":
      case "object":
        ye("load", l);
        break;
      case "video":
      case "audio":
        for (i = 0; i < us.length; i++)
          ye(us[i], l);
        break;
      case "image":
        ye("error", l), ye("load", l);
        break;
      case "details":
        ye("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ye("error", l), ye("load", l);
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
        for (D in u)
          if (u.hasOwnProperty(D) && (i = u[D], i != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(q(137, n));
              default:
                se(l, n, D, i, u, null);
            }
        return;
      default:
        if (Cc(n)) {
          for (G in u)
            u.hasOwnProperty(G) && (i = u[G], i !== void 0 && H(
              l,
              n,
              G,
              i,
              u,
              void 0
            ));
          return;
        }
    }
    for (m in u)
      u.hasOwnProperty(m) && (i = u[m], i != null && se(l, n, m, i, u, null));
  }
  function vv(l, n, u, i) {
    switch (n) {
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
        var s = null, r = null, y = null, m = null, g = null, D = null, G = null;
        for (x in u) {
          var X = u[x];
          if (u.hasOwnProperty(x) && X != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = X;
              default:
                i.hasOwnProperty(x) || se(l, n, x, null, i, X);
            }
        }
        for (var M in i) {
          var x = i[M];
          if (X = u[M], i.hasOwnProperty(M) && (x != null || X != null))
            switch (M) {
              case "type":
                r = x;
                break;
              case "name":
                s = x;
                break;
              case "checked":
                D = x;
                break;
              case "defaultChecked":
                G = x;
                break;
              case "value":
                y = x;
                break;
              case "defaultValue":
                m = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(q(137, n));
                break;
              default:
                x !== X && se(
                  l,
                  n,
                  M,
                  x,
                  i,
                  X
                );
            }
        }
        Ls(
          l,
          y,
          m,
          g,
          D,
          G,
          r,
          s
        );
        return;
      case "select":
        x = y = m = M = null;
        for (r in u)
          if (g = u[r], u.hasOwnProperty(r) && g != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                x = g;
              default:
                i.hasOwnProperty(r) || se(
                  l,
                  n,
                  r,
                  null,
                  i,
                  g
                );
            }
        for (s in i)
          if (r = i[s], g = u[s], i.hasOwnProperty(s) && (r != null || g != null))
            switch (s) {
              case "value":
                M = r;
                break;
              case "defaultValue":
                m = r;
                break;
              case "multiple":
                y = r;
              default:
                r !== g && se(
                  l,
                  n,
                  s,
                  r,
                  i,
                  g
                );
            }
        n = m, u = y, i = x, M != null ? Hc(l, !!u, M, !1) : !!i != !!u && (n != null ? Hc(l, !!u, n, !0) : Hc(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        x = M = null;
        for (m in u)
          if (s = u[m], u.hasOwnProperty(m) && s != null && !i.hasOwnProperty(m))
            switch (m) {
              case "value":
                break;
              case "children":
                break;
              default:
                se(l, n, m, null, i, s);
            }
        for (y in i)
          if (s = i[y], r = u[y], i.hasOwnProperty(y) && (s != null || r != null))
            switch (y) {
              case "value":
                M = s;
                break;
              case "defaultValue":
                x = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(q(91));
                break;
              default:
                s !== r && se(l, n, y, s, i, r);
            }
        mh(l, M, x);
        return;
      case "option":
        for (var le in u)
          if (M = u[le], u.hasOwnProperty(le) && M != null && !i.hasOwnProperty(le))
            switch (le) {
              case "selected":
                l.selected = !1;
                break;
              default:
                se(
                  l,
                  n,
                  le,
                  null,
                  i,
                  M
                );
            }
        for (g in i)
          if (M = i[g], x = u[g], i.hasOwnProperty(g) && M !== x && (M != null || x != null))
            switch (g) {
              case "selected":
                l.selected = M && typeof M != "function" && typeof M != "symbol";
                break;
              default:
                se(
                  l,
                  n,
                  g,
                  M,
                  i,
                  x
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
        for (var ae in u)
          M = u[ae], u.hasOwnProperty(ae) && M != null && !i.hasOwnProperty(ae) && se(l, n, ae, null, i, M);
        for (D in i)
          if (M = i[D], x = u[D], i.hasOwnProperty(D) && M !== x && (M != null || x != null))
            switch (D) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null)
                  throw Error(q(137, n));
                break;
              default:
                se(
                  l,
                  n,
                  D,
                  M,
                  i,
                  x
                );
            }
        return;
      default:
        if (Cc(n)) {
          for (var Ge in u)
            M = u[Ge], u.hasOwnProperty(Ge) && M !== void 0 && !i.hasOwnProperty(Ge) && H(
              l,
              n,
              Ge,
              void 0,
              i,
              M
            );
          for (G in i)
            M = i[G], x = u[G], !i.hasOwnProperty(G) || M === x || M === void 0 && x === void 0 || H(
              l,
              n,
              G,
              M,
              i,
              x
            );
          return;
        }
    }
    for (var R in u)
      M = u[R], u.hasOwnProperty(R) && M != null && !i.hasOwnProperty(R) && se(l, n, R, null, i, M);
    for (X in i)
      M = i[X], x = u[X], !i.hasOwnProperty(X) || M === x || M == null && x == null || se(l, n, X, M, i, x);
  }
  var is = null, os = null;
  function Na(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function gu(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zo(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function Bn(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Do = null;
  function bu() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Do ? !1 : (Do = l, !0) : (Do = null, !1);
  }
  var gd = typeof setTimeout == "function" ? setTimeout : void 0, gv = typeof clearTimeout == "function" ? clearTimeout : void 0, up = typeof Promise == "function" ? Promise : void 0, bv = typeof queueMicrotask == "function" ? queueMicrotask : typeof up < "u" ? function(l) {
    return up.resolve(null).then(l).catch(qn);
  } : gd;
  function qn(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function rc(l) {
    return l === "head";
  }
  function bd(l, n) {
    var u = n, i = 0, s = 0;
    do {
      var r = u.nextSibling;
      if (l.removeChild(u), r && r.nodeType === 8)
        if (u = r.data, u === "/$") {
          if (0 < i && 8 > i) {
            u = i;
            var y = l.ownerDocument;
            if (u & 1 && Wl(y.documentElement), u & 2 && Wl(y.body), u & 4)
              for (u = y.head, Wl(u), y = u.firstChild; y; ) {
                var m = y.nextSibling, g = y.nodeName;
                y[W] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && y.rel.toLowerCase() === "stylesheet" || u.removeChild(y), y = m;
              }
          }
          if (s === 0) {
            l.removeChild(r), _n(n);
            return;
          }
          s--;
        } else
          u === "$" || u === "$?" || u === "$!" ? s++ : i = u.charCodeAt(0) - 48;
      else i = 0;
      u = r;
    } while (u);
    _n(n);
  }
  function fs(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          fs(u), Po(u);
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
  function Oo(l, n, u, i) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!i && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (i) {
        if (!l[W])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Pa(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Sv(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Pa(l.nextSibling), l === null)) return null;
    return l;
  }
  function ss(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState === "complete";
  }
  function Tv(l, n) {
    var u = l.ownerDocument;
    if (l.data !== "$?" || u.readyState === "complete")
      n();
    else {
      var i = function() {
        n(), u.removeEventListener("DOMContentLoaded", i);
      };
      u.addEventListener("DOMContentLoaded", i), l._reactRetry = i;
    }
  }
  function Pa(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return l;
  }
  var dc = null;
  function fl(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (n === 0) return l;
          n--;
        } else u === "/$" && n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function k(l, n, u) {
    switch (n = Na(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(q(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(q(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(q(454));
        return l;
      default:
        throw Error(q(451));
    }
  }
  function Wl(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    Po(l);
  }
  var zt = /* @__PURE__ */ new Map(), bl = /* @__PURE__ */ new Set();
  function Sd(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Su = j.d;
  j.d = {
    f: Td,
    r: Ed,
    D: Tu,
    C: Ad,
    L: hc,
    m: Sl,
    X: yc,
    S: Fl,
    M: ly
  };
  function Td() {
    var l = Su.f(), n = ri();
    return l || n;
  }
  function Ed(l) {
    var n = Oc(l);
    n !== null && n.tag === 5 && n.type === "form" ? no(n) : Su.r(l);
  }
  var sl = typeof document > "u" ? null : document;
  function en(l, n, u) {
    var i = sl;
    if (i && typeof n == "string" && n) {
      var s = ba(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), bl.has(s) || (bl.add(s), l = { rel: l, crossOrigin: u, href: n }, i.querySelector(s) === null && (n = i.createElement("link"), oe(n, "link", l), Yt(n), i.head.appendChild(n)));
    }
  }
  function Tu(l) {
    Su.D(l), en("dns-prefetch", l, null);
  }
  function Ad(l, n) {
    Su.C(l, n), en("preconnect", l, n);
  }
  function hc(l, n, u) {
    Su.L(l, n, u);
    var i = sl;
    if (i && l && n) {
      var s = 'link[rel="preload"][as="' + ba(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + ba(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + ba(
        u.imageSizes
      ) + '"]')) : s += '[href="' + ba(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = Mo(l);
          break;
        case "script":
          r = Ba(l);
      }
      zt.has(r) || (l = Be(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), zt.set(r, l), i.querySelector(s) !== null || n === "style" && i.querySelector(Uo(r)) || n === "script" && i.querySelector(pi(r)) || (n = i.createElement("link"), oe(n, "link", l), Yt(n), i.head.appendChild(n)));
    }
  }
  function Sl(l, n) {
    Su.m(l, n);
    var u = sl;
    if (u && l) {
      var i = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + ba(i) + '"][href="' + ba(l) + '"]', r = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = Ba(l);
      }
      if (!zt.has(r) && (l = Be({ rel: "modulepreload", href: l }, n), zt.set(r, l), u.querySelector(s) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(pi(r)))
              return;
        }
        i = u.createElement("link"), oe(i, "link", l), Yt(i), u.head.appendChild(i);
      }
    }
  }
  function Fl(l, n, u) {
    Su.S(l, n, u);
    var i = sl;
    if (i && l) {
      var s = Fn(i).hoistableStyles, r = Mo(l);
      n = n || "default";
      var y = s.get(r);
      if (!y) {
        var m = { loading: 0, preload: null };
        if (y = i.querySelector(
          Uo(r)
        ))
          m.loading = 5;
        else {
          l = Be(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = zt.get(r)) && zd(l, u);
          var g = y = i.createElement("link");
          Yt(g), oe(g, "link", l), g._p = new Promise(function(D, G) {
            g.onload = D, g.onerror = G;
          }), g.addEventListener("load", function() {
            m.loading |= 1;
          }), g.addEventListener("error", function() {
            m.loading |= 2;
          }), m.loading |= 4, Rd(y, n, i);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: m
        }, s.set(r, y);
      }
    }
  }
  function yc(l, n) {
    Su.X(l, n);
    var u = sl;
    if (u && l) {
      var i = Fn(u).hoistableScripts, s = Ba(l), r = i.get(s);
      r || (r = u.querySelector(pi(s)), r || (l = Be({ src: l, async: !0 }, n), (n = zt.get(s)) && Dd(l, n), r = u.createElement("script"), Yt(r), oe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function ly(l, n) {
    Su.M(l, n);
    var u = sl;
    if (u && l) {
      var i = Fn(u).hoistableScripts, s = Ba(l), r = i.get(s);
      r || (r = u.querySelector(pi(s)), r || (l = Be({ src: l, async: !0, type: "module" }, n), (n = zt.get(s)) && Dd(l, n), r = u.createElement("script"), Yt(r), oe(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, i.set(s, r));
    }
  }
  function cp(l, n, u, i) {
    var s = (s = Ue.current) ? Sd(s) : null;
    if (!s) throw Error(q(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = Mo(u.href), u = Fn(
          s
        ).hoistableStyles, i = u.get(n), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = Mo(u.href);
          var r = Fn(
            s
          ).hoistableStyles, y = r.get(l);
          if (y || (s = s.ownerDocument || s, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, y), (r = s.querySelector(
            Uo(l)
          )) && !r._p && (y.instance = r, y.state.loading = 5), zt.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, zt.set(l, u), r || ip(
            s,
            l,
            u,
            y.state
          ))), n && i === null)
            throw Error(q(528, ""));
          return y;
        }
        if (n && i !== null)
          throw Error(q(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ba(u), u = Fn(
          s
        ).hoistableScripts, i = u.get(n), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(q(444, l));
    }
  }
  function Mo(l) {
    return 'href="' + ba(l) + '"';
  }
  function Uo(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function xo(l) {
    return Be({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function ip(l, n, u, i) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? i.loading = 1 : (n = l.createElement("link"), i.preload = n, n.addEventListener("load", function() {
      return i.loading |= 1;
    }), n.addEventListener("error", function() {
      return i.loading |= 2;
    }), oe(n, "link", u), Yt(n), l.head.appendChild(n));
  }
  function Ba(l) {
    return '[src="' + ba(l) + '"]';
  }
  function pi(l) {
    return "script[async]" + l;
  }
  function op(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var i = l.querySelector(
            'style[data-href~="' + ba(u.href) + '"]'
          );
          if (i)
            return n.instance = i, Yt(i), i;
          var s = Be({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return i = (l.ownerDocument || l).createElement(
            "style"
          ), Yt(i), oe(i, "style", s), Rd(i, u.precedence, l), n.instance = i;
        case "stylesheet":
          s = Mo(u.href);
          var r = l.querySelector(
            Uo(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Yt(r), r;
          i = xo(u), (s = zt.get(s)) && zd(i, s), r = (l.ownerDocument || l).createElement("link"), Yt(r);
          var y = r;
          return y._p = new Promise(function(m, g) {
            y.onload = m, y.onerror = g;
          }), oe(r, "link", i), n.state.loading |= 4, Rd(r, u.precedence, l), n.instance = r;
        case "script":
          return r = Ba(u.src), (s = l.querySelector(
            pi(r)
          )) ? (n.instance = s, Yt(s), s) : (i = u, (s = zt.get(r)) && (i = Be({}, u), Dd(i, s)), l = l.ownerDocument || l, s = l.createElement("script"), Yt(s), oe(s, "link", i), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(q(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (i = n.instance, n.state.loading |= 4, Rd(i, u.precedence, l));
    return n.instance;
  }
  function Rd(l, n, u) {
    for (var i = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = i.length ? i[i.length - 1] : null, r = s, y = 0; y < i.length; y++) {
      var m = i[y];
      if (m.dataset.precedence === n) r = m;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function zd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Dd(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var mc = null;
  function ay(l, n, u) {
    if (mc === null) {
      var i = /* @__PURE__ */ new Map(), s = mc = /* @__PURE__ */ new Map();
      s.set(u, i);
    } else
      s = mc, i = s.get(u), i || (i = /* @__PURE__ */ new Map(), s.set(u, i));
    if (i.has(l)) return i;
    for (i.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[W] || r[Jt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = r.getAttribute(n) || "";
        y = l + y;
        var m = i.get(y);
        m ? m.push(r) : i.set(y, [r]);
      }
    }
    return i;
  }
  function ny(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function fp(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return l = n.disabled, typeof n.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function uy(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  var Ho = null;
  function sp() {
  }
  function rp(l, n, u) {
    if (Ho === null) throw Error(q(475));
    var i = Ho;
    if (n.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = Mo(u.href), r = l.querySelector(
          Uo(s)
        );
        if (r) {
          l = r._p, l !== null && typeof l == "object" && typeof l.then == "function" && (i.count++, i = rs.bind(i), l.then(i, i)), n.state.loading |= 4, n.instance = r, Yt(r);
          return;
        }
        r = l.ownerDocument || l, u = xo(u), (s = zt.get(s)) && zd(u, s), r = r.createElement("link"), Yt(r);
        var y = r;
        y._p = new Promise(function(m, g) {
          y.onload = m, y.onerror = g;
        }), oe(r, "link", u), n.instance = r;
      }
      i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(n, l), (l = n.state.preload) && (n.state.loading & 3) === 0 && (i.count++, n = rs.bind(i), l.addEventListener("load", n), l.addEventListener("error", n));
    }
  }
  function cy() {
    if (Ho === null) throw Error(q(475));
    var l = Ho;
    return l.stylesheets && l.count === 0 && ds(l, l.stylesheets), 0 < l.count ? function(n) {
      var u = setTimeout(function() {
        if (l.stylesheets && ds(l, l.stylesheets), l.unsuspend) {
          var i = l.unsuspend;
          l.unsuspend = null, i();
        }
      }, 6e4);
      return l.unsuspend = n, function() {
        l.unsuspend = null, clearTimeout(u);
      };
    } : null;
  }
  function rs() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) ds(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Co = null;
  function ds(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Co = /* @__PURE__ */ new Map(), n.forEach(ra, l), Co = null, rs.call(l));
  }
  function ra(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Co.get(l);
      if (u) var i = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Co.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var y = s[r];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (u.set(y.dataset.precedence, y), i = y);
        }
        i && u.set(null, i);
      }
      s = n.instance, y = s.getAttribute("data-precedence"), r = u.get(y) || i, r === i && u.set(null, s), u.set(y, s), this.count++, i = rs.bind(this), s.addEventListener("load", i), s.addEventListener("error", i), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Il = {
    $$typeof: Ot,
    Provider: null,
    Consumer: null,
    _currentValue: Z,
    _currentValue2: Z,
    _threadCount: 0
  };
  function Ev(l, n, u, i, s, r, y, m) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Cu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cu(0), this.hiddenUpdates = Cu(null), this.identifierPrefix = i, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function iy(l, n, u, i, s, r, y, m, g, D, G, X) {
    return l = new Ev(
      l,
      n,
      u,
      y,
      m,
      g,
      D,
      X
    ), n = 1, r === !0 && (n |= 24), r = jl(3, null, null, n), l.current = r, r.stateNode = l, n = Pi(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: i,
      isDehydrated: u,
      cache: n
    }, vr(r), l;
  }
  function oy(l) {
    return l ? (l = wi, l) : wi;
  }
  function fy(l, n, u, i, s, r) {
    s = oy(s), i.context === null ? i.context = s : i.pendingContext = s, i = Zl(n), i.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (i.callback = r), u = bn(l, i, n), u !== null && (fa(u, l, n), $c(u, l, n));
  }
  function sy(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function Od(l, n) {
    sy(l, n), (l = l.alternate) && sy(l, n);
  }
  function ry(l) {
    if (l.tag === 13) {
      var n = hn(l, 67108864);
      n !== null && fa(n, l, 67108864), Od(l, 67108864);
    }
  }
  var hs = !0;
  function dp(l, n, u, i) {
    var s = A.T;
    A.T = null;
    var r = j.p;
    try {
      j.p = 2, dy(l, n, u, i);
    } finally {
      j.p = r, A.T = s;
    }
  }
  function hp(l, n, u, i) {
    var s = A.T;
    A.T = null;
    var r = j.p;
    try {
      j.p = 8, dy(l, n, u, i);
    } finally {
      j.p = r, A.T = s;
    }
  }
  function dy(l, n, u, i) {
    if (hs) {
      var s = Md(i);
      if (s === null)
        Ca(
          l,
          n,
          i,
          Ud,
          u
        ), vi(l, i);
      else if (mp(
        s,
        l,
        n,
        u,
        i
      ))
        i.stopPropagation();
      else if (vi(l, i), n & 4 && -1 < yp.indexOf(l)) {
        for (; s !== null; ) {
          var r = Oc(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var y = ta(r.pendingLanes);
                  if (y !== 0) {
                    var m = r;
                    for (m.pendingLanes |= 2, m.entangledLanes |= 2; y; ) {
                      var g = 1 << 31 - Gl(y);
                      m.entanglements[1] |= g, y &= ~g;
                    }
                    $l(r), (Qe & 6) === 0 && (ud = ea() + 500, es(0));
                  }
                }
                break;
              case 13:
                m = hn(r, 2), m !== null && fa(m, r, 2), ri(), Od(r, 2);
            }
          if (r = Md(i), r === null && Ca(
            l,
            n,
            i,
            Ud,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && i.stopPropagation();
      } else
        Ca(
          l,
          n,
          i,
          null,
          u
        );
    }
  }
  function Md(l) {
    return l = Ks(l), hy(l);
  }
  var Ud = null;
  function hy(l) {
    if (Ud = null, l = ll(l), l !== null) {
      var n = ut(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = el(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return Ud = l, null;
  }
  function yy(l) {
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
        switch ($o()) {
          case am:
            return 2;
          case oh:
            return 8;
          case Wo:
          case fh:
            return 32;
          case Hi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var No = !1, Yn = null, Eu = null, Au = null, ys = /* @__PURE__ */ new Map(), ms = /* @__PURE__ */ new Map(), pc = [], yp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function vi(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Yn = null;
        break;
      case "dragenter":
      case "dragleave":
        Eu = null;
        break;
      case "mouseover":
      case "mouseout":
        Au = null;
        break;
      case "pointerover":
      case "pointerout":
        ys.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ms.delete(n.pointerId);
    }
  }
  function gi(l, n, u, i, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: i,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Oc(n), n !== null && ry(n)), l) : (l.eventSystemFlags |= i, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function mp(l, n, u, i, s) {
    switch (n) {
      case "focusin":
        return Yn = gi(
          Yn,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "dragenter":
        return Eu = gi(
          Eu,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "mouseover":
        return Au = gi(
          Au,
          l,
          n,
          u,
          i,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return ys.set(
          r,
          gi(
            ys.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, ms.set(
          r,
          gi(
            ms.get(r) || null,
            l,
            n,
            u,
            i,
            s
          )
        ), !0;
    }
    return !1;
  }
  function my(l) {
    var n = ll(l.target);
    if (n !== null) {
      var u = ut(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = el(u), n !== null) {
            l.blockedOn = n, av(l.priority, function() {
              if (u.tag === 13) {
                var i = oa();
                i = Va(i);
                var s = hn(u, i);
                s !== null && fa(s, u, i), Od(u, i);
              }
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function ps(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = Md(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var i = new u.constructor(
          u.type,
          u
        );
        Nc = i, u.target.dispatchEvent(i), Nc = null;
      } else
        return n = Oc(u), n !== null && ry(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function vs(l, n, u) {
    ps(l) && u.delete(n);
  }
  function Bo() {
    No = !1, Yn !== null && ps(Yn) && (Yn = null), Eu !== null && ps(Eu) && (Eu = null), Au !== null && ps(Au) && (Au = null), ys.forEach(vs), ms.forEach(vs);
  }
  function xd(l, n) {
    l.blockedOn === n && (l.blockedOn = null, No || (No = !0, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      Bo
    )));
  }
  var bi = null;
  function py(l) {
    bi !== l && (bi = l, L.unstable_scheduleCallback(
      L.unstable_NormalPriority,
      function() {
        bi === l && (bi = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], i = l[n + 1], s = l[n + 2];
          if (typeof i != "function") {
            if (hy(i || u) === null)
              continue;
            break;
          }
          var r = Oc(u);
          r !== null && (l.splice(n, 3), n -= 3, _r(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: i
            },
            i,
            s
          ));
        }
      }
    ));
  }
  function _n(l) {
    function n(g) {
      return xd(g, l);
    }
    Yn !== null && xd(Yn, l), Eu !== null && xd(Eu, l), Au !== null && xd(Au, l), ys.forEach(n), ms.forEach(n);
    for (var u = 0; u < pc.length; u++) {
      var i = pc[u];
      i.blockedOn === l && (i.blockedOn = null);
    }
    for (; 0 < pc.length && (u = pc[0], u.blockedOn === null); )
      my(u), u.blockedOn === null && pc.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (i = 0; i < u.length; i += 3) {
        var s = u[i], r = u[i + 1], y = s[Dl] || null;
        if (typeof r == "function")
          y || py(u);
        else if (y) {
          var m = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, y = r[Dl] || null)
              m = y.formAction;
            else if (hy(s) !== null) continue;
          } else m = y.action;
          typeof m == "function" ? u[i + 1] = m : (u.splice(i, 3), i -= 3), py(u);
        }
      }
  }
  function vy(l) {
    this._internalRoot = l;
  }
  Hd.prototype.render = vy.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(q(409));
    var u = n.current, i = oa();
    fy(u, i, l, n, null, null);
  }, Hd.prototype.unmount = vy.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      fy(l.current, 2, null, l, null, null), ri(), n[Bi] = null;
    }
  };
  function Hd(l) {
    this._internalRoot = l;
  }
  Hd.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = im();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < pc.length && n !== 0 && n < pc[u].priority; u++) ;
      pc.splice(u, 0, l), u === 0 && my(l);
    }
  };
  var gy = Dt.version;
  if (gy !== "19.1.0")
    throw Error(
      q(
        527,
        gy,
        "19.1.0"
      )
    );
  j.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(q(188)) : (l = Object.keys(l).join(","), Error(q(268, l)));
    return l = K(n), l = l !== null ? Nt(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Cl = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gs.isDisabled && gs.supportsFiber)
      try {
        Ci = gs.inject(
          Cl
        ), zl = gs;
      } catch {
      }
  }
  return tm.createRoot = function(l, n) {
    if (!Fe(l)) throw Error(q(299));
    var u = !1, i = "", s = io, r = m0, y = Zf, m = null;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (m = n.unstable_transitionCallbacks)), n = iy(
      l,
      1,
      !1,
      null,
      null,
      u,
      i,
      s,
      r,
      y,
      m,
      null
    ), l[Bi] = n.current, P0(l), new vy(n);
  }, tm.hydrateRoot = function(l, n, u) {
    if (!Fe(l)) throw Error(q(299));
    var i = !1, s = "", r = io, y = m0, m = Zf, g = null, D = null;
    return u != null && (u.unstable_strictMode === !0 && (i = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (y = u.onCaughtError), u.onRecoverableError !== void 0 && (m = u.onRecoverableError), u.unstable_transitionCallbacks !== void 0 && (g = u.unstable_transitionCallbacks), u.formState !== void 0 && (D = u.formState)), n = iy(
      l,
      1,
      !0,
      n,
      u ?? null,
      i,
      s,
      r,
      y,
      m,
      g,
      D
    ), n.context = oy(null), u = n.current, i = oa(), i = Va(i), s = Zl(i), s.callback = null, bn(u, s, i), u = i, n.current.lanes = u, Dc(n, u), $l(n), l[Bi] = n.current, P0(l), new Hd(n);
  }, tm.version = "19.1.0", tm;
}
var lm = {};
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x2;
function Jb() {
  return x2 || (x2 = 1, process.env.NODE_ENV !== "production" && function() {
    function L(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function Dt(e, t, a, c) {
      if (a >= t.length) return c;
      var o = t[a], f = se(e) ? e.slice() : be({}, e);
      return f[o] = Dt(e[o], t, a + 1, c), f;
    }
    function tt(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var c = 0; c < a.length - 1; c++)
          if (t[c] !== a[c]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return q(e, t, a, 0);
      }
    }
    function q(e, t, a, c) {
      var o = t[c], f = se(e) ? e.slice() : be({}, e);
      return c + 1 === t.length ? (f[a[c]] = f[o], se(f) ? f.splice(o, 1) : delete f[o]) : f[o] = q(
        e[o],
        t,
        a,
        c + 1
      ), f;
    }
    function Fe(e, t, a) {
      var c = t[a], o = se(e) ? e.slice() : be({}, e);
      return a + 1 === t.length ? (se(o) ? o.splice(c, 1) : delete o[c], o) : (o[c] = Fe(e[c], t, a + 1), o);
    }
    function ut() {
      return !1;
    }
    function el() {
      return null;
    }
    function Al() {
    }
    function K() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function Nt() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Be() {
    }
    function Ie(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function ge(e, t, a, c) {
      return new hf(e, t, a, c);
    }
    function mt(e, t) {
      e.context === qo && (Le(e.current, 2, t, e, null, null), ui());
    }
    function rt(e, t) {
      if (Vn !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, oo(), df(
          e.current,
          t,
          a
        ), ui();
      }
    }
    function Yl(e) {
      Vn = e;
    }
    function ct(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function $e(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function va(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Ot(e) {
      if ($e(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function yl(e) {
      var t = e.alternate;
      if (!t) {
        if (t = $e(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, c = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (c = o.return, c !== null) {
            a = c;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Ot(o), e;
            if (f === c) return Ot(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== c.return) a = o, c = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, c = f;
              break;
            }
            if (h === c) {
              d = !0, c = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, c = o;
                break;
              }
              if (h === c) {
                d = !0, c = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== c)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function _l(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = _l(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function Mt(e) {
      return e === null || typeof e != "object" ? null : (e = ty && e[ty] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function qe(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === vd ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case ye:
          return "Fragment";
        case Ao:
          return "Profiler";
        case Eo:
          return "StrictMode";
        case Ro:
          return "Suspense";
        case sc:
          return "SuspenseList";
        case ey:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case mi:
            return "Portal";
          case Ca:
            return (e.displayName || "Context") + ".Provider";
          case pd:
            return (e._context.displayName || "Context") + ".Consumer";
          case vu:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case cs:
            return t = e.displayName || null, t !== null ? t : qe(e.type) || "Memo";
          case sa:
            t = e._payload, e = e._init;
            try {
              return qe(e(t));
            } catch {
            }
        }
      return null;
    }
    function Zt(e) {
      return typeof e.tag == "number" ? te(e) : typeof e.name == "string" ? e.name : null;
    }
    function te(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return (t.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return qe(t);
        case 8:
          return t === Eo ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return te(e.return);
      }
      return null;
    }
    function pt(e) {
      return { current: e };
    }
    function Xe(e, t) {
      0 > Na ? console.error("Unexpected pop.") : (t !== os[Na] && console.error("Unexpected Fiber popped."), e.current = is[Na], is[Na] = null, os[Na] = null, Na--);
    }
    function de(e, t, a) {
      Na++, is[Na] = e.current, os[Na] = a, e.current = t;
    }
    function Lt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Rl(e, t) {
      de(Bn, t, e), de(zo, e, e), de(gu, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? Ze(t) : Mi;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = Ze(t), t = Kl(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = uh;
                break;
              case "math":
                t = Lp;
                break;
              default:
                t = Mi;
            }
      }
      a = a.toLowerCase(), a = mh(null, a), a = {
        context: t,
        ancestorInfo: a
      }, Xe(gu, e), de(gu, a, e);
    }
    function Bt(e) {
      Xe(gu, e), Xe(zo, e), Xe(Bn, e);
    }
    function A() {
      return Lt(gu.current);
    }
    function j(e) {
      e.memoizedState !== null && de(Do, e, e);
      var t = Lt(gu.current), a = e.type, c = Kl(t.context, a);
      a = mh(t.ancestorInfo, a), c = { context: c, ancestorInfo: a }, t !== c && (de(zo, e, e), de(gu, c, e));
    }
    function Z(e) {
      zo.current === e && (Xe(gu, e), Xe(zo, e)), Do.current === e && (Xe(Do, e), Wy._currentValue = _s);
    }
    function ne(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function C(e) {
      try {
        return P(e), !1;
      } catch {
        return !0;
      }
    }
    function P(e) {
      return "" + e;
    }
    function J(e, t) {
      if (C(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ne(e)
        ), P(e);
    }
    function ue(e, t) {
      if (C(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          ne(e)
        ), P(e);
    }
    function Ae(e) {
      if (C(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          ne(e)
        ), P(e);
    }
    function Pe(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        dc = t.inject(e), fl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Ue(e) {
      if (typeof Tv == "function" && Pa(e), fl && typeof fl.setStrictMode == "function")
        try {
          fl.setStrictMode(dc, e);
        } catch (t) {
          Wl || (Wl = !0, console.error(
            "React instrumentation encountered an error: %s",
            t
          ));
        }
    }
    function Uu(e) {
      k = e;
    }
    function vt() {
      k !== null && typeof k.markCommitStopped == "function" && k.markCommitStopped();
    }
    function tl(e) {
      k !== null && typeof k.markComponentRenderStarted == "function" && k.markComponentRenderStarted(e);
    }
    function ga() {
      k !== null && typeof k.markComponentRenderStopped == "function" && k.markComponentRenderStopped();
    }
    function Ec(e) {
      k !== null && typeof k.markRenderStarted == "function" && k.markRenderStarted(e);
    }
    function Gs() {
      k !== null && typeof k.markRenderStopped == "function" && k.markRenderStopped();
    }
    function Ac(e, t) {
      k !== null && typeof k.markStateUpdateScheduled == "function" && k.markStateUpdateScheduled(e, t);
    }
    function ih(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Sd(e) / Su | 0) | 0;
    }
    function ev(e) {
      if (e & 1) return "SyncHydrationLane";
      if (e & 2) return "Sync";
      if (e & 4) return "InputContinuousHydration";
      if (e & 8) return "InputContinuous";
      if (e & 16) return "DefaultHydration";
      if (e & 32) return "Default";
      if (e & 128) return "TransitionHydration";
      if (e & 4194048) return "Transition";
      if (e & 62914560) return "Retry";
      if (e & 67108864) return "SelectiveHydration";
      if (e & 134217728) return "IdleHydration";
      if (e & 268435456) return "Idle";
      if (e & 536870912) return "Offscreen";
      if (e & 1073741824) return "Deferred";
    }
    function Rc(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
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
          return e & 4194048;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function ea(e, t, a) {
      var c = e.pendingLanes;
      if (c === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = c & 134217727;
      return h !== 0 ? (c = h & ~f, c !== 0 ? o = Rc(c) : (d &= h, d !== 0 ? o = Rc(d) : a || (a = h & ~e, a !== 0 && (o = Rc(a))))) : (h = c & ~f, h !== 0 ? o = Rc(h) : d !== 0 ? o = Rc(d) : a || (a = c & ~e, a !== 0 && (o = Rc(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function $o(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function am(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
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
          return t + 5e3;
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
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function oh() {
      var e = Td;
      return Td <<= 1, (Td & 4194048) === 0 && (Td = 256), e;
    }
    function Wo() {
      var e = Ed;
      return Ed <<= 1, (Ed & 62914560) === 0 && (Ed = 4194304), e;
    }
    function fh(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function Hi(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function tv(e, t, a, c, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, p = e.expirationTimes, v = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var U = 31 - bl(a), B = 1 << U;
        h[U] = 0, p[U] = -1;
        var O = v[U];
        if (O !== null)
          for (v[U] = null, U = 0; U < O.length; U++) {
            var Y = O[U];
            Y !== null && (Y.lane &= -536870913);
          }
        a &= ~B;
      }
      c !== 0 && nm(e, c, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function nm(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var c = 31 - bl(t);
      e.entangledLanes |= t, e.entanglements[c] = e.entanglements[c] | 1073741824 | a & 4194090;
    }
    function Ci(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var c = 31 - bl(a), o = 1 << c;
        o & t | e[c] & t && (e[c] |= t), a &= ~o;
      }
    }
    function zl(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
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
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function $n(e, t, a) {
      if (zt)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var c = 31 - bl(a), o = 1 << c;
          e[c].add(t), a &= ~o;
        }
    }
    function Gl(e, t) {
      if (zt)
        for (var a = e.pendingUpdatersLaneMap, c = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - bl(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && c.has(d) || c.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function sh(e) {
      return e &= -e, sl < e ? en < e ? (e & 134217727) !== 0 ? Tu : Ad : en : sl;
    }
    function um() {
      var e = oe.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Tu : yd(e.type));
    }
    function lv(e, t) {
      var a = oe.p;
      try {
        return oe.p = e, t();
      } finally {
        oe.p = a;
      }
    }
    function Ni(e) {
      delete e[Sl], delete e[Fl], delete e[ly], delete e[cp], delete e[Mo];
    }
    function Wn(e) {
      var t = e[Sl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[yc] || a[Sl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = go(e); e !== null; ) {
              if (a = e[Sl])
                return a;
              e = go(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ta(e) {
      if (e = e[Sl] || e[yc]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function xu(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function nn(e) {
      var t = e[Uo];
      return t || (t = e[Uo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function wt(e) {
      e[xo] = !0;
    }
    function Hu(e, t) {
      zc(e, t), zc(e + "Capture", t);
    }
    function zc(e, t) {
      Ba[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Ba[e] = t;
      var a = e.toLowerCase();
      for (pi[a] = e, e === "onDoubleClick" && (pi.ondblclick = e), e = 0; e < t.length; e++)
        ip.add(t[e]);
    }
    function Cu(e, t) {
      op[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Dc(e) {
      return bu.call(Dd, e) ? !0 : bu.call(zd, e) ? !1 : Rd.test(e) ? Dd[e] = !0 : (zd[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function cm(e, t, a) {
      if (Dc(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (J(a, t), e === "" + a ? a : e);
      }
    }
    function Fo(e, t, a) {
      if (Dc(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var c = t.toLowerCase().slice(0, 5);
              if (c !== "data-" && c !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          J(a, t), e.setAttribute(t, "" + a);
        }
    }
    function Io(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        J(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Va(e, t, a, c) {
      if (c === null) e.removeAttribute(a);
      else {
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        J(c, a), e.setAttributeNS(t, a, "" + c);
      }
    }
    function Vs() {
    }
    function im() {
      if (mc === 0) {
        ay = console.log, ny = console.info, fp = console.warn, uy = console.error, Ho = console.group, sp = console.groupCollapsed, rp = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Vs,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      mc++;
    }
    function av() {
      if (mc--, mc === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: be({}, e, { value: ay }),
          info: be({}, e, { value: ny }),
          warn: be({}, e, { value: fp }),
          error: be({}, e, { value: uy }),
          group: be({}, e, { value: Ho }),
          groupCollapsed: be({}, e, { value: sp }),
          groupEnd: be({}, e, { value: rp })
        });
      }
      0 > mc && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function qt(e) {
      if (cy === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          cy = t && t[1] || "", rs = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + cy + e + rs;
    }
    function Jt(e, t) {
      if (!e || Co) return "";
      var a = ds.get(e);
      if (a !== void 0) return a;
      Co = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var c = null;
      c = H.H, H.H = null, im();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var O = function() {
                  throw Error();
                };
                if (Object.defineProperty(O.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(O, []);
                  } catch (F) {
                    var Y = F;
                  }
                  Reflect.construct(e, [], O);
                } else {
                  try {
                    O.call();
                  } catch (F) {
                    Y = F;
                  }
                  e.call(O.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (F) {
                  Y = F;
                }
                (O = e()) && typeof O.catch == "function" && O.catch(function() {
                });
              }
            } catch (F) {
              if (F && Y && typeof F.stack == "string")
                return [F.stack, Y.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], p = d[1];
        if (h && p) {
          var v = h.split(`
`), U = p.split(`
`);
          for (d = f = 0; f < v.length && !v[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < U.length && !U[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === v.length || d === U.length)
            for (f = v.length - 1, d = U.length - 1; 1 <= f && 0 <= d && v[f] !== U[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (v[f] !== U[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || v[f] !== U[d]) {
                    var B = `
` + v[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && ds.set(e, B), B;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Co = !1, H.H = c, av(), Error.prepareStackTrace = a;
      }
      return v = (v = e ? e.displayName || e.name : "") ? qt(v) : "", typeof e == "function" && ds.set(e, v), v;
    }
    function Dl(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react-stack-bottom-frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function Bi(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return qt(e.type);
        case 16:
          return qt("Lazy");
        case 13:
          return qt("Suspense");
        case 19:
          return qt("SuspenseList");
        case 0:
        case 15:
          return Jt(e.type, !1);
        case 11:
          return Jt(e.type.render, !1);
        case 1:
          return Jt(e.type, !0);
        case 31:
          return qt("Activity");
        default:
          return "";
      }
    }
    function Xs(e) {
      try {
        var t = "";
        do {
          t += Bi(e);
          var a = e._debugInfo;
          if (a)
            for (var c = a.length - 1; 0 <= c; c--) {
              var o = a[c];
              if (typeof o.name == "string") {
                var f = t, d = o.env, h = qt(
                  o.name + (d ? " [" + d + "]" : "")
                );
                t = f + h;
              }
            }
          e = e.return;
        } while (e);
        return t;
      } catch (p) {
        return `
Error generating stack: ` + p.message + `
` + p.stack;
      }
    }
    function om(e) {
      return (e = e ? e.displayName || e.name : "") ? qt(e) : "";
    }
    function js() {
      if (ra === null) return null;
      var e = ra._debugOwner;
      return e != null ? Zt(e) : null;
    }
    function fm() {
      if (ra === null) return "";
      var e = ra;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += qt(e.type);
            break;
          case 13:
            t += qt("Suspense");
            break;
          case 19:
            t += qt("SuspenseList");
            break;
          case 31:
            t += qt("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += om(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += om(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var c = a._debugStack;
            e && c && (typeof c != "string" && (a._debugStack = c = Dl(c)), c !== "" && (t += `
` + c));
          } else if (e.debugStack != null) {
            var o = e.debugStack;
            (e = e.owner) && o && (t += `
` + Dl(o));
          } else break;
        var f = t;
      } catch (d) {
        f = `
Error generating stack: ` + d.message + `
` + d.stack;
      }
      return f;
    }
    function W(e, t, a, c, o, f, d) {
      var h = ra;
      Po(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, c, o, f, d)
        ) : t(a, c, o, f, d);
      } finally {
        Po(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Po(e) {
      H.getCurrentStack = e === null ? null : fm, Il = !1, ra = e;
    }
    function ll(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Ae(e), e;
        default:
          return "";
      }
    }
    function Oc(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ef(e) {
      var t = Oc(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      Ae(e[t]);
      var c = "" + e[t];
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var o = a.get, f = a.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            Ae(d), c = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return c;
          },
          setValue: function(d) {
            Ae(d), c = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function Fn(e) {
      e._valueTracker || (e._valueTracker = ef(e));
    }
    function Yt(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), c = "";
      return e && (c = Oc(e) ? e.checked ? "true" : "false" : e.value), e = c, e !== a ? (t.setValue(e), !0) : !1;
    }
    function tf(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function la(e) {
      return e.replace(
        Ev,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function Nu(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || oy || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        js() || "A component",
        t.type
      ), oy = !0), t.value === void 0 || t.defaultValue === void 0 || iy || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        js() || "A component",
        t.type
      ), iy = !0);
    }
    function Bu(e, t, a, c, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (J(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ll(t)) : e.value !== "" + ll(t) && (e.value = "" + ll(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Qs(e, d, ll(t)) : a != null ? Qs(e, d, ll(a)) : c != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (J(h, "name"), e.name = "" + ll(h)) : e.removeAttribute("name");
    }
    function sm(e, t, a, c, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (J(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null))
          return;
        a = a != null ? "" + ll(a) : "", t = t != null ? "" + ll(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      c = c ?? o, c = typeof c != "function" && typeof c != "symbol" && !!c, e.checked = h ? e.checked : !!c, e.defaultChecked = !!c, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (J(d, "name"), e.name = d);
    }
    function Qs(e, t, a) {
      t === "number" && tf(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function rh(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? ns.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || sy || (sy = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || Od || (Od = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || fy || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), fy = !0);
    }
    function rm() {
      var e = js();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function In(e, t, a, c) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && c && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + ll(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, c && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function lf(e, t) {
      for (e = 0; e < hs.length; e++) {
        var a = hs[e];
        if (t[a] != null) {
          var c = se(t[a]);
          t.multiple && !c ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            rm()
          ) : !t.multiple && c && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            rm()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || ry || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), ry = !0);
    }
    function un(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || dp || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        js() || "A component"
      ), dp = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Zs(e, t, a) {
      if (t != null && (t = "" + ll(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + ll(a) : "";
    }
    function dh(e, t, a, c) {
      if (t == null) {
        if (c != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (se(c)) {
            if (1 < c.length)
              throw Error("<textarea> can only have at most one child.");
            c = c[0];
          }
          a = c;
        }
        a == null && (a = ""), t = a;
      }
      a = ll(t), e.defaultValue = a, c = e.textContent, c === a && c !== "" && c !== null && (e.value = c);
    }
    function Mc(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Mc(e.children[0], t) : e;
    }
    function Ol(e) {
      return "  " + "  ".repeat(e);
    }
    function qu(e) {
      return "+ " + "  ".repeat(e);
    }
    function Uc(e) {
      return "- " + "  ".repeat(e);
    }
    function hh(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function ml(e, t) {
      return hp.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function af(e, t, a) {
      var c = 120 - 2 * a;
      if (t === null)
        return qu(a) + ml(e, c) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > c - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), qu(a) + ml(e, c) + `
` + Uc(a) + ml(t, c) + `
`;
      }
      return Ol(a) + ml(e, c) + `
`;
    }
    function yh(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function Yu(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (se(e)) return "[...]";
          if (e.$$typeof === fc)
            return (t = qe(e.type)) ? "<" + t + ">" : "<...>";
          var a = yh(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var c in e)
              if (e.hasOwnProperty(c)) {
                var o = JSON.stringify(c);
                if (o !== '"' + c + '"' && (c = o), t -= c.length - 2, o = Yu(
                  e[c],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + c + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function xc(e, t) {
      return typeof e != "string" || hp.test(e) ? "{" + Yu(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function qi(e, t, a) {
      var c = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = xc(
            t[f],
            120 - a.length - f.length - 1
          );
          c -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < c ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function nv(e, t, a) {
      var c = "", o = be({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = Yu(e[f], d);
          t.hasOwnProperty(f) ? (d = Yu(t[f], d), c += qu(a) + f + ": " + h + `
`, c += Uc(a) + f + ": " + d + `
`) : c += qu(a) + f + ": " + h + `
`;
        }
      for (var p in o)
        o.hasOwnProperty(p) && (e = Yu(
          o[p],
          120 - 2 * a - p.length - 2
        ), c += Uc(a) + p + ": " + e + `
`);
      return c;
    }
    function ba(e, t, a, c) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (v in a)
        a.hasOwnProperty(v) && f.set(
          v.toLowerCase(),
          v
        );
      if (f.size === 1 && f.has("children"))
        o += qi(
          e,
          t,
          Ol(c)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (c + 1) - d.length - 1, p = f.get(d.toLowerCase());
            if (p !== void 0) {
              f.delete(d.toLowerCase());
              var v = t[d];
              p = a[p];
              var U = xc(
                v,
                h
              );
              h = xc(
                p,
                h
              ), typeof v == "object" && v !== null && typeof p == "object" && p !== null && yh(v) === "Object" && yh(p) === "Object" && (2 < Object.keys(v).length || 2 < Object.keys(p).length || -1 < U.indexOf("...") || -1 < h.indexOf("...")) ? o += Ol(c + 1) + d + `={{
` + nv(
                v,
                p,
                c + 2
              ) + Ol(c + 1) + `}}
` : (o += qu(c + 1) + d + "=" + U + `
`, o += Uc(c + 1) + d + "=" + h + `
`);
            } else
              o += Ol(c + 1) + d + "=" + xc(t[d], h) + `
`;
          }
        f.forEach(function(B) {
          if (B !== "children") {
            var O = 120 - 2 * (c + 1) - B.length - 1;
            o += Uc(c + 1) + B + "=" + xc(a[B], O) + `
`;
          }
        }), o = o === "" ? Ol(c) + "<" + e + `>
` : Ol(c) + "<" + e + `
` + o + Ol(c) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += af(f, "" + e, c + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + af("" + t, null, c + 1) : o + af("" + t, void 0, c + 1)), o;
    }
    function Ls(e, t) {
      var a = hh(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Ls(e, t), e = e.sibling;
        return a;
      }
      return Ol(t) + "<" + a + `>
`;
    }
    function ws(e, t) {
      var a = Mc(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ol(t) + `...
` + ws(a, t + 1);
      a = "";
      var c = e.fiber._debugInfo;
      if (c)
        for (var o = 0; o < c.length; o++) {
          var f = c[o].name;
          typeof f == "string" && (a += Ol(t) + "<" + f + `>
`, t++);
        }
      if (c = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        c = af(o, e.serverProps, t), t++;
      else if (f = hh(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          c = t;
          var d = 120 - 2 * c - f.length - 2, h = "";
          for (v in o)
            if (o.hasOwnProperty(v) && v !== "children") {
              var p = xc(o[v], 15);
              if (d -= v.length + p.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + v + "=" + p;
            }
          c = Ol(c) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (c = qi(
            f,
            o,
            qu(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (c = ba(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var v = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (v += ws(d, t), f++) : v += Ls(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (v += Ol(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], v = typeof f == "string" ? v + (Uc(t) + ml(f, 120 - 2 * t) + `
`) : v + qi(
          f.type,
          f.props,
          Uc(t)
        );
      return a + c + v;
    }
    function nf(e) {
      try {
        return `

` + ws(e, 0);
      } catch {
        return "";
      }
    }
    function Hc(e, t, a) {
      for (var c = t, o = null, f = 0; c; )
        c === e && (f = 0), o = {
          fiber: c,
          children: o !== null ? [o] : [],
          serverProps: c === t ? a : c === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, c = c.return;
      return o !== null ? nf(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function mh(e, t) {
      var a = be({}, e || yy), c = { tag: t };
      return Md.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Ud.indexOf(t) !== -1 && (a.pTagInButtonScope = null), dy.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = c, t === "form" && (a.formTag = c), t === "a" && (a.aTagInScope = c), t === "button" && (a.buttonTagInScope = c), t === "nobr" && (a.nobrTagInScope = c), t === "p" && (a.pTagInButtonScope = c), t === "li" && (a.listItemTagAutoclosing = c), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = c), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = c), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function ph(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return hy.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function Yi(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function dm(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function Js(e, t) {
      t = t || yy;
      var a = t.current;
      if (t = (a = ph(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : Yi(e, t), t = a || t, !t) return !0;
      var c = t.tag;
      if (t = String(!!a) + "|" + e + "|" + c, No[t]) return !1;
      No[t] = !0;
      var o = (t = ra) ? dm(t.return, c) : null, f = t !== null && o !== null ? Hc(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", c === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        c,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        c,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || W(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          c,
          d
        );
      })), !1;
    }
    function uf(e, t, a) {
      if (a || ph("#text", t, !1))
        return !0;
      if (a = "#text|" + t, No[a]) return !1;
      No[a] = !0;
      var c = (a = ra) ? dm(a, t) : null;
      return a = a !== null && c !== null ? Hc(
        c,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Cc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function uv(e) {
      return e.replace(pc, function(t, a) {
        return a.toUpperCase();
      });
    }
    function hm(e, t, a) {
      var c = t.indexOf("--") === 0;
      c || (-1 < t.indexOf("-") ? vi.hasOwnProperty(t) && vi[t] || (vi[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        uv(t.replace(ms, "ms-"))
      )) : ys.test(t) ? vi.hasOwnProperty(t) && vi[t] || (vi[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !yp.test(a) || gi.hasOwnProperty(a) && gi[a] || (gi[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(yp, "")
      )), typeof a == "number" && (isNaN(a) ? mp || (mp = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || my || (my = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? c ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : c ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ps.has(t) ? t === "float" ? e.cssFloat = a : (ue(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function cf(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var c = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = Yn[o] || [o], d = 0; d < f.length; d++)
                  c[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Yn[h] || [h], f = 0; f < o.length; f++)
                c[o[f]] = h;
          h = {};
          for (var p in t)
            for (o = Yn[p] || [p], f = 0; f < o.length; f++)
              h[o[f]] = p;
          p = {};
          for (var v in c)
            if (o = c[v], (f = h[v]) && o !== f && (d = o + "," + f, !p[d])) {
              p[d] = !0, d = console;
              var U = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                U == null || typeof U == "boolean" || U === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var B in a)
          !a.hasOwnProperty(B) || t != null && t.hasOwnProperty(B) || (B.indexOf("--") === 0 ? e.setProperty(B, "") : B === "float" ? e.cssFloat = "" : e[B] = "");
        for (var O in t)
          v = t[O], t.hasOwnProperty(O) && a[O] !== v && hm(e, O, v);
      } else
        for (c in t)
          t.hasOwnProperty(c) && hm(e, c, t[c]);
    }
    function Nc(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
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
    function Ks(e) {
      return xd.get(e) || e;
    }
    function _i(e, t) {
      if (bu.call(_n, t) && _n[t])
        return !0;
      if (Hd.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = py.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), _n[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), _n[t] = !0;
      }
      if (vy.test(t)) {
        if (e = t.toLowerCase(), e = py.hasOwnProperty(e) ? e : null, e == null) return _n[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), _n[t] = !0);
      }
      return !0;
    }
    function Gi(e, t) {
      var a = [], c;
      for (c in t)
        _i(e, c) || a.push(c);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function ym(e, t, a, c) {
      if (bu.call(Cl, t) && Cl[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Cl[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (c != null) {
        if (e = c.possibleRegistrationNames, c.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (c = e.hasOwnProperty(o) ? e[o] : null, c != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            c
          ), Cl[t] = !0;
        if (gs.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Cl[t] = !0;
      } else if (gs.test(t))
        return l.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Cl[t] = !0;
      if (n.test(t) || u.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Cl[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Cl[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Cl[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Cl[t] = !0;
      if (bi.hasOwnProperty(o)) {
        if (o = bi[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Cl[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Cl[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
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
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Cl[t] = !0);
          }
        case "function":
        case "symbol":
          return Cl[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
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
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Cl[t] = !0;
          }
      }
      return !0;
    }
    function vh(e, t, a) {
      var c = [], o;
      for (o in t)
        ym(e, o, t[o], a) || c.push(o);
      t = c.map(function(f) {
        return "`" + f + "`";
      }).join(", "), c.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < c.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function Vi(e) {
      return i.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Bc(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function cn(e) {
      var t = ta(e);
      if (t && (e = t.stateNode)) {
        var a = e[Fl] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Bu(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (J(t, "name"), a = a.querySelectorAll(
                'input[name="' + la(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var c = a[t];
                if (c !== e && c.form === e.form) {
                  var o = c[Fl] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Bu(
                    c,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                c = a[t], c.form === e.form && Yt(c);
            }
            break e;
          case "textarea":
            Zs(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && In(e, !!a.multiple, t, !1);
        }
      }
    }
    function ks(e, t, a) {
      if (m) return e(t, a);
      m = !0;
      try {
        var c = e(t);
        return c;
      } finally {
        if (m = !1, (r !== null || y !== null) && (ui(), r && (t = r, e = y, y = r = null, cn(t), e)))
          for (t = 0; t < e.length; t++) cn(e[t]);
      }
    }
    function Pn(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var c = a[Fl] || null;
      if (c === null) return null;
      a = c[t];
      e: switch (t) {
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
          (c = !c.disabled) || (e = e.type, c = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !c;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function eu() {
      if (x) return x;
      var e, t = M, a = t.length, c, o = "value" in X ? X.value : X.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (c = 1; c <= d && t[a - c] === o[f - c]; c++) ;
      return x = o.slice(e, 1 < c ? 1 - c : void 0);
    }
    function Xi(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function qc() {
      return !0;
    }
    function gh() {
      return !1;
    }
    function al(e) {
      function t(a, c, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = c, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? qc : gh, this.isPropagationStopped = gh, this;
      }
      return be(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = qc);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = qc);
        },
        persist: function() {
        },
        isPersistent: qc
      }), t;
    }
    function $s(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = X2[e]) ? !!t[e] : !1;
    }
    function Ws() {
      return $s;
    }
    function Ml(e, t) {
      switch (e) {
        case "keyup":
          return I2.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== O1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function _u(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Fs(e, t) {
      switch (e) {
        case "compositionend":
          return _u(t);
        case "keypress":
          return t.which !== U1 ? null : (H1 = !0, x1);
        case "textInput":
          return e = t.data, e === x1 && H1 ? null : e;
        default:
          return null;
      }
    }
    function of(e, t) {
      if (Cd)
        return e === "compositionend" || !Rv && Ml(e, t) ? (e = eu(), x = M = X = null, Cd = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return M1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function mm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!eb[e.type] : t === "textarea";
    }
    function bh(e) {
      if (!g) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Is(e, t, a, c) {
      r ? y ? y.push(c) : y = [c] : r = c, t = $f(t, "onChange"), 0 < t.length && (a = new ae(
        "onChange",
        "change",
        null,
        a,
        c
      ), e.push({ event: a, listeners: t }));
    }
    function ff(e) {
      Mn(e, 0);
    }
    function Yc(e) {
      var t = xu(e);
      if (Yt(t)) return e;
    }
    function Sh(e, t) {
      if (e === "change") return t;
    }
    function pm() {
      Sy && (Sy.detachEvent("onpropertychange", vm), Ty = Sy = null);
    }
    function vm(e) {
      if (e.propertyName === "value" && Yc(Ty)) {
        var t = [];
        Is(
          t,
          Ty,
          e,
          Bc(e)
        ), ks(ff, t);
      }
    }
    function cv(e, t, a) {
      e === "focusin" ? (pm(), Sy = t, Ty = a, Sy.attachEvent("onpropertychange", vm)) : e === "focusout" && pm();
    }
    function Th(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Yc(Ty);
    }
    function iv(e, t) {
      if (e === "click") return Yc(t);
    }
    function ov(e, t) {
      if (e === "input" || e === "change")
        return Yc(t);
    }
    function fv(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function sf(e, t) {
      if (da(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), c = Object.keys(t);
      if (a.length !== c.length) return !1;
      for (c = 0; c < a.length; c++) {
        var o = a[c];
        if (!bu.call(t, o) || !da(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function gm(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Eh(e, t) {
      var a = gm(e);
      e = 0;
      for (var c; a; ) {
        if (a.nodeType === 3) {
          if (c = e + a.textContent.length, e <= t && c >= t)
            return { node: a, offset: t - e };
          e = c;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = gm(a);
      }
    }
    function bm(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bm(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Sm(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = tf(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = tf(e.document);
      }
      return t;
    }
    function Ah(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Tm(e, t, a) {
      var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Dv || Nd == null || Nd !== tf(c) || (c = Nd, "selectionStart" in c && Ah(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
        anchorNode: c.anchorNode,
        anchorOffset: c.anchorOffset,
        focusNode: c.focusNode,
        focusOffset: c.focusOffset
      }), Ey && sf(Ey, c) || (Ey = c, c = $f(zv, "onSelect"), 0 < c.length && (t = new ae(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: c }), t.target = Nd)));
    }
    function tu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function _c(e) {
      if (Ov[e]) return Ov[e];
      if (!Bd[e]) return e;
      var t = Bd[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in N1)
          return Ov[e] = t[a];
      return e;
    }
    function Xa(e, t) {
      G1.set(e, t), Hu(t, [e]);
    }
    function aa(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = Uv.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Xs(t)
        }, Uv.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Xs(t)
      };
    }
    function rf() {
      for (var e = qd, t = Hv = qd = 0; t < e; ) {
        var a = Gn[t];
        Gn[t++] = null;
        var c = Gn[t];
        Gn[t++] = null;
        var o = Gn[t];
        Gn[t++] = null;
        var f = Gn[t];
        if (Gn[t++] = null, c !== null && o !== null) {
          var d = c.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), c.pending = o;
        }
        f !== 0 && Em(a, o, f);
      }
    }
    function Ps(e, t, a, c) {
      Gn[qd++] = e, Gn[qd++] = t, Gn[qd++] = a, Gn[qd++] = c, Hv |= c, e.lanes |= c, e = e.alternate, e !== null && (e.lanes |= c);
    }
    function Rh(e, t, a, c) {
      return Ps(e, t, a, c), er(e);
    }
    function Vl(e, t) {
      return Ps(e, null, null, t), er(e);
    }
    function Em(e, t, a) {
      e.lanes |= a;
      var c = e.alternate;
      c !== null && (c.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, c = f.alternate, c !== null && (c.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & xv || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - bl(a), e = f.hiddenUpdates, c = e[o], c === null ? e[o] = [t] : c.push(t), t.lane = a | 536870912), f) : null;
    }
    function er(e) {
      if (Ly > Ab)
        throw Cs = Ly = 0, wy = i1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      Cs > Rb && (Cs = 0, wy = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Ia(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Ia(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Gc(e) {
      if (Vn === null) return e;
      var t = Vn(e);
      return t === void 0 ? e : t.current;
    }
    function zh(e) {
      if (Vn === null) return e;
      var t = Vn(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Gc(e.render), e.render !== t) ? (t = { $$typeof: vu, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Am(e, t) {
      if (Vn === null) return !1;
      var a = e.elementType;
      t = t.type;
      var c = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (c = !0);
          break;
        case 0:
          (typeof t == "function" || o === sa) && (c = !0);
          break;
        case 11:
          (o === vu || o === sa) && (c = !0);
          break;
        case 14:
        case 15:
          (o === cs || o === sa) && (c = !0);
          break;
        default:
          return !1;
      }
      return !!(c && (e = Vn(a), e !== void 0 && e === Vn(t)));
    }
    function Rm(e) {
      Vn !== null && typeof WeakSet == "function" && (Yd === null && (Yd = /* @__PURE__ */ new WeakSet()), Yd.add(e));
    }
    function df(e, t, a) {
      var c = e.alternate, o = e.child, f = e.sibling, d = e.tag, h = e.type, p = null;
      switch (d) {
        case 0:
        case 15:
        case 1:
          p = h;
          break;
        case 11:
          p = h.render;
      }
      if (Vn === null)
        throw Error("Expected resolveFamily to be set during hot reload.");
      var v = !1;
      h = !1, p !== null && (p = Vn(p), p !== void 0 && (a.has(p) ? h = !0 : t.has(p) && (d === 1 ? h = !0 : v = !0))), Yd !== null && (Yd.has(e) || c !== null && Yd.has(c)) && (h = !0), h && (e._debugNeedsRemount = !0), (h || v) && (c = Vl(e, 2), c !== null && St(c, e, 2)), o === null || h || df(
        o,
        t,
        a
      ), f !== null && df(
        f,
        t,
        a
      );
    }
    function hf(e, t, a, c) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, X1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Dh(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function on(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = ge(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Gc(e.type);
          break;
        case 1:
          a.type = Gc(e.type);
          break;
        case 11:
          a.type = zh(e.type);
      }
      return a;
    }
    function Oh(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function tr(e, t, a, c, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Dh(e) && (d = 1), h = Gc(h);
      else if (typeof e == "string")
        d = A(), d = So(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case ey:
            return t = ge(31, a, t, o), t.elementType = ey, t.lanes = f, t;
          case ye:
            return Gu(
              a.children,
              o,
              f,
              t
            );
          case Eo:
            d = 8, o |= Pl, o |= Ru;
            break;
          case Ao:
            return e = a, c = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = ge(12, e, t, c | Nl), t.elementType = Ao, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case Ro:
            return t = ge(13, a, t, o), t.elementType = Ro, t.lanes = f, t;
          case sc:
            return t = ge(19, a, t, o), t.elementType = sc, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case P0:
                case Ca:
                  d = 10;
                  break e;
                case pd:
                  d = 9;
                  break e;
                case vu:
                  d = 11, h = zh(h);
                  break e;
                case cs:
                  d = 14;
                  break e;
                case sa:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : se(e) ? a = "array" : e !== void 0 && e.$$typeof === fc ? (a = "<" + (qe(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = c ? Zt(c) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = ge(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = c, t;
    }
    function yf(e, t, a) {
      return t = tr(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Gu(e, t, a, c) {
      return e = ge(7, e, c, t), e.lanes = a, e;
    }
    function Vu(e, t, a) {
      return e = ge(6, e, null, t), e.lanes = a, e;
    }
    function Mh(e, t, a) {
      return t = ge(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Vc(e, t) {
      ja(), _d[Gd++] = vp, _d[Gd++] = pp, pp = e, vp = t;
    }
    function zm(e, t, a) {
      ja(), Xn[jn++] = Si, Xn[jn++] = Ti, Xn[jn++] = Ss, Ss = e;
      var c = Si;
      e = Ti;
      var o = 32 - bl(c) - 1;
      c &= ~(1 << o), a += 1;
      var f = 32 - bl(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (c & (1 << d) - 1).toString(32), c >>= d, o -= d, Si = 1 << 32 - bl(t) + o | a << o | c, Ti = f + e;
      } else
        Si = 1 << f | a << o | c, Ti = e;
    }
    function lr(e) {
      ja(), e.return !== null && (Vc(e, 1), zm(e, 1, 0));
    }
    function ar(e) {
      for (; e === pp; )
        pp = _d[--Gd], _d[Gd] = null, vp = _d[--Gd], _d[Gd] = null;
      for (; e === Ss; )
        Ss = Xn[--jn], Xn[jn] = null, Ti = Xn[--jn], Xn[jn] = null, Si = Xn[--jn], Xn[jn] = null;
    }
    function ja() {
      Ve || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Qa(e, t) {
      if (e.return === null) {
        if (Qn === null)
          Qn = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (Qn.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          Qn.distanceFromLeaf > t && (Qn.distanceFromLeaf = t);
        }
        return Qn;
      }
      var a = Qa(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Uh(e, t) {
      Ei || (e = Qa(e, 0), e.serverProps = null, t !== null && (t = cd(t), e.serverTail.push(t)));
    }
    function fn(e) {
      var t = "", a = Qn;
      throw a !== null && (Qn = null, t = nf(a)), ji(
        aa(
          Error(
            `Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + t
          ),
          e
        )
      ), Cv;
    }
    function xh(e) {
      var t = e.stateNode, a = e.type, c = e.memoizedProps;
      switch (t[Sl] = e, t[Fl] = c, Un(a, c), a) {
        case "dialog":
          Re("cancel", t), Re("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Re("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Jy.length; a++)
            Re(Jy[a], t);
          break;
        case "source":
          Re("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Re("error", t), Re("load", t);
          break;
        case "details":
          Re("toggle", t);
          break;
        case "input":
          Cu("input", c), Re("invalid", t), Nu(t, c), sm(
            t,
            c.value,
            c.defaultValue,
            c.checked,
            c.defaultChecked,
            c.type,
            c.name,
            !0
          ), Fn(t);
          break;
        case "option":
          rh(t, c);
          break;
        case "select":
          Cu("select", c), Re("invalid", t), lf(t, c);
          break;
        case "textarea":
          Cu("textarea", c), Re("invalid", t), un(t, c), dh(
            t,
            c.value,
            c.defaultValue,
            c.children
          ), Fn(t);
      }
      a = c.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || c.suppressHydrationWarning === !0 || C0(t.textContent, a) ? (c.popover != null && (Re("beforetoggle", t), Re("toggle", t)), c.onScroll != null && Re("scroll", t), c.onScrollEnd != null && Re("scrollend", t), c.onClick != null && (t.onclick = hu), t = !0) : t = !1, t || fn(e);
    }
    function Hh(e) {
      for (ha = e.return; ha; )
        switch (ha.tag) {
          case 5:
          case 13:
            gc = !1;
            return;
          case 27:
          case 3:
            gc = !0;
            return;
          default:
            ha = ha.return;
        }
    }
    function Xc(e) {
      if (e !== ha) return !1;
      if (!Ve)
        return Hh(e), Ve = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || xn(e.type, e.memoizedProps)), a = !a), a && Ht) {
        for (a = Ht; a; ) {
          var c = Qa(e, 0), o = cd(a);
          c.serverTail.push(o), a = o.type === "Suspense" ? X0(a) : ol(a.nextSibling);
        }
        fn(e);
      }
      if (Hh(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        Ht = X0(e);
      } else
        t === 27 ? (t = Ht, Hn(e.type) ? (e = b1, b1 = null, Ht = e) : Ht = t) : Ht = ha ? ol(e.stateNode.nextSibling) : null;
      return !0;
    }
    function jc() {
      Ht = ha = null, Ei = Ve = !1;
    }
    function Ch() {
      var e = Ts;
      return e !== null && (pa === null ? pa = e : pa.push.apply(
        pa,
        e
      ), Ts = null), e;
    }
    function ji(e) {
      Ts === null ? Ts = [e] : Ts.push(e);
    }
    function Nh() {
      var e = Qn;
      if (e !== null) {
        Qn = null;
        for (var t = nf(e); 0 < e.children.length; )
          e = e.children[0];
        W(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function nr() {
      Vd = gp = null, Xd = !1;
    }
    function Xu(e, t, a) {
      de(Nv, t._currentValue, e), t._currentValue = a, de(Bv, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== L1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = L1;
    }
    function lu(e, t) {
      e._currentValue = Nv.current;
      var a = Bv.current;
      Xe(Bv, t), e._currentRenderer = a, Xe(Nv, t);
    }
    function Bh(e, t, a) {
      for (; e !== null; ) {
        var c = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, c !== null && (c.childLanes |= t)) : c !== null && (c.childLanes & t) !== t && (c.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function qh(e, t, a, c) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var p = 0; p < t.length; p++)
              if (h.context === t[p]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Bh(
                  f.return,
                  a,
                  e
                ), c || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Bh(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function nl(e, t, a, c) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            da(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Do.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Wy) : e = [Wy]);
        }
        o = o.return;
      }
      e !== null && qh(
        t,
        e,
        a,
        c
      ), t.flags |= 262144;
    }
    function ju(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!da(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Qu(e) {
      gp = e, Vd = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function lt(e) {
      return Xd && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), Yh(gp, e);
    }
    function mf(e, t) {
      return gp === null && Qu(e), Yh(e, t);
    }
    function Yh(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Vd === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Vd = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Vd = Vd.next = t;
      return a;
    }
    function pf() {
      return {
        controller: new ob(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Qc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function sn(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && fb(sb, function() {
        e.controller.abort();
      });
    }
    function Za() {
      var e = Es;
      return Es = 0, e;
    }
    function Zu(e) {
      var t = Es;
      return Es = e, t;
    }
    function Zc(e) {
      var t = Es;
      return Es += e, t;
    }
    function ur(e) {
      qa = jd(), 0 > e.actualStartTime && (e.actualStartTime = qa);
    }
    function au(e) {
      if (0 <= qa) {
        var t = jd() - qa;
        e.actualDuration += t, e.selfBaseDuration = t, qa = -1;
      }
    }
    function Lc(e) {
      if (0 <= qa) {
        var t = jd() - qa;
        e.actualDuration += t, qa = -1;
      }
    }
    function Sa() {
      if (0 <= qa) {
        var e = jd() - qa;
        qa = -1, Es += e;
      }
    }
    function La() {
      qa = jd();
    }
    function rn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Dm(e, t) {
      if (Ay === null) {
        var a = Ay = [];
        qv = 0, As = O0(), Qd = {
          status: "pending",
          value: void 0,
          then: function(c) {
            a.push(c);
          }
        };
      }
      return qv++, t.then(_h, _h), t;
    }
    function _h() {
      if (--qv === 0 && Ay !== null) {
        Qd !== null && (Qd.status = "fulfilled");
        var e = Ay;
        Ay = null, As = 0, Qd = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Om(e, t) {
      var a = [], c = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          c.status = "fulfilled", c.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (c.status = "rejected", c.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), c;
    }
    function Gh() {
      var e = Rs.current;
      return e !== null ? e : at.pooledCache;
    }
    function cr(e, t) {
      t === null ? de(Rs, Rs.current, e) : de(Rs, t.pool, e);
    }
    function Mm() {
      var e = Gh();
      return e === null ? null : { parent: rl._currentValue, pool: e };
    }
    function Vh() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Xh(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Qi() {
    }
    function Ta(e, t, a) {
      H.actQueue !== null && (H.didUsePromise = !0);
      var c = e.thenables;
      switch (a = c[a], a === void 0 ? c.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Qi, Qi), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, na(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Qi, Qi);
          else {
            if (e = at, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "fulfilled", f.value = o;
                }
              },
              function(o) {
                if (t.status === "pending") {
                  var f = t;
                  f.status = "rejected", f.reason = o;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, na(e), e;
          }
          throw Hy = t, Rp = !0, xy;
      }
    }
    function jh() {
      if (Hy === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Hy;
      return Hy = null, Rp = !1, e;
    }
    function na(e) {
      if (e === xy || e === Ap)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Xl(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Lu(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function dn(e) {
      return {
        lane: e,
        tag: $1,
        payload: null,
        callback: null,
        next: null
      };
    }
    function wa(e, t, a) {
      var c = e.updateQueue;
      if (c === null) return null;
      if (c = c.shared, Gv === c && !I1) {
        var o = te(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), I1 = !0;
      }
      return (we & ma) !== tn ? (o = c.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), c.pending = t, t = er(e), Em(e, null, a), t) : (Ps(e, c, t, a), er(e));
    }
    function wu(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var c = t.lanes;
        c &= e.pendingLanes, a |= c, t.lanes = a, Ci(e, a);
      }
    }
    function Zi(e, t) {
      var a = e.updateQueue, c = e.alternate;
      if (c !== null && (c = c.updateQueue, a === c)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: c.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: c.shared,
          callbacks: c.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function hn() {
      if (Vv) {
        var e = Qd;
        if (e !== null) throw e;
      }
    }
    function Li(e, t, a, c) {
      Vv = !1;
      var o = e.updateQueue;
      Yo = !1, Gv = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var p = h, v = p.next;
        p.next = null, d === null ? f = v : d.next = v, d = p;
        var U = e.alternate;
        U !== null && (U = U.updateQueue, h = U.lastBaseUpdate, h !== d && (h === null ? U.firstBaseUpdate = v : h.next = v, U.lastBaseUpdate = p));
      }
      if (f !== null) {
        var B = o.baseState;
        d = 0, U = v = p = null, h = f;
        do {
          var O = h.lane & -536870913, Y = O !== h.lane;
          if (Y ? (Me & O) === O : (c & O) === O) {
            O !== 0 && O === As && (Vv = !0), U !== null && (U = U.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              O = e;
              var F = h, fe = t, nt = a;
              switch (F.tag) {
                case W1:
                  if (F = F.payload, typeof F == "function") {
                    Xd = !0;
                    var He = F.call(
                      nt,
                      B,
                      fe
                    );
                    if (O.mode & Pl) {
                      Ue(!0);
                      try {
                        F.call(nt, B, fe);
                      } finally {
                        Ue(!1);
                      }
                    }
                    Xd = !1, B = He;
                    break e;
                  }
                  B = F;
                  break e;
                case _v:
                  O.flags = O.flags & -65537 | 128;
                case $1:
                  if (He = F.payload, typeof He == "function") {
                    if (Xd = !0, F = He.call(
                      nt,
                      B,
                      fe
                    ), O.mode & Pl) {
                      Ue(!0);
                      try {
                        He.call(nt, B, fe);
                      } finally {
                        Ue(!1);
                      }
                    }
                    Xd = !1;
                  } else F = He;
                  if (F == null) break e;
                  B = be({}, B, F);
                  break e;
                case F1:
                  Yo = !0;
              }
            }
            O = h.callback, O !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = o.callbacks, Y === null ? o.callbacks = [O] : Y.push(O));
          } else
            Y = {
              lane: O,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, U === null ? (v = U = Y, p = B) : U = U.next = Y, d |= O;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            Y = h, h = Y.next, Y.next = null, o.lastBaseUpdate = Y, o.shared.pending = null;
          }
        } while (!0);
        U === null && (p = B), o.baseState = p, o.firstBaseUpdate = v, o.lastBaseUpdate = U, f === null && (o.shared.lanes = 0), Xo |= d, e.lanes = d, e.memoizedState = B;
      }
      Gv = null;
    }
    function vf(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function wi(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          vf(a[e], t);
    }
    function Um(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          vf(a[e], t);
    }
    function jl(e, t) {
      var a = Tc;
      de(zp, a, e), de(Zd, t, e), Tc = a | t.baseLanes;
    }
    function gf(e) {
      de(zp, Tc, e), de(
        Zd,
        Zd.current,
        e
      );
    }
    function Ja(e) {
      Tc = zp.current, Xe(Zd, e), Xe(zp, e);
    }
    function Se() {
      var e = N;
      wn === null ? wn = [e] : wn.push(e);
    }
    function Q() {
      var e = N;
      if (wn !== null && (Ri++, wn[Ri] !== e)) {
        var t = te(re);
        if (!P1.has(t) && (P1.add(t), wn !== null)) {
          for (var a = "", c = 0; c <= Ri; c++) {
            var o = wn[c], f = c === Ri ? e : o;
            for (o = c + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function Ea(e) {
      e == null || se(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        N,
        typeof e
      );
    }
    function Ji() {
      var e = te(re);
      tg.has(e) || (tg.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function dt() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function Ju(e, t) {
      if (Ny) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          N
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        N,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!da(e[a], t[a])) return !1;
      return !0;
    }
    function Ku(e, t, a, c, o, f) {
      _o = f, re = t, wn = e !== null ? e._debugHookTypes : null, Ri = -1, Ny = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = te(re), Xv.has(f) || (Xv.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, H.H = e !== null && e.memoizedState !== null ? Qv : wn !== null ? lg : jv, Ds = f = (t.mode & Pl) !== ft;
      var d = Zv(a, c, o);
      if (Ds = !1, wd && (d = Ki(
        t,
        a,
        c,
        o
      )), f) {
        Ue(!0);
        try {
          d = Ki(
            t,
            a,
            c,
            o
          );
        } finally {
          Ue(!1);
        }
      }
      return bf(e, t), d;
    }
    function bf(e, t) {
      t._debugHookTypes = wn, t.dependencies === null ? Ai !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Ai
      }) : t.dependencies._debugThenableState = Ai, H.H = Mp;
      var a = et !== null && et.next !== null;
      if (_o = 0, wn = N = It = et = re = null, Ri = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), Dp = !1, Cy = 0, Ai = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Tl || (e = e.dependencies, e !== null && ju(e) && (Tl = !0)), Rp ? (Rp = !1, e = !0) : e = !1, e && (t = te(t) || "Unknown", eg.has(t) || Xv.has(t) || (eg.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Ki(e, t, a, c) {
      re = e;
      var o = 0;
      do {
        if (wd && (Ai = null), Cy = 0, wd = !1, o >= db)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, Ny = !1, It = et = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Ri = -1, H.H = ag, f = Zv(t, a, c);
      } while (wd);
      return f;
    }
    function Aa() {
      var e = H.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? wc(t) : t, e = e.useState()[0], (et !== null ? et.memoizedState : null) !== e && (re.flags |= 1024), t;
    }
    function Ql() {
      var e = Op !== 0;
      return Op = 0, e;
    }
    function nu(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ru) !== ft ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Ka(e) {
      if (Dp) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Dp = !1;
      }
      _o = 0, wn = It = et = re = null, Ri = -1, N = null, wd = !1, Cy = Op = 0, Ai = null;
    }
    function gt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return It === null ? re.memoizedState = It = e : It = It.next = e, It;
    }
    function xe() {
      if (et === null) {
        var e = re.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = et.next;
      var t = It === null ? re.memoizedState : It.next;
      if (t !== null)
        It = t, et = e;
      else {
        if (e === null)
          throw re.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        et = e, e = {
          memoizedState: et.memoizedState,
          baseState: et.baseState,
          baseQueue: et.baseQueue,
          queue: et.queue,
          next: null
        }, It === null ? re.memoizedState = It = e : It = It.next = e;
      }
      return It;
    }
    function ir() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function wc(e) {
      var t = Cy;
      return Cy += 1, Ai === null && (Ai = Vh()), e = Ta(Ai, e, t), t = re, (It === null ? t.memoizedState : It.next) === null && (t = t.alternate, H.H = t !== null && t.memoizedState !== null ? Qv : jv), e;
    }
    function yn(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return wc(e);
        if (e.$$typeof === Ca) return lt(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ut(e) {
      var t = null, a = re.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var c = re.alternate;
        c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (t = {
          data: c.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = ir(), re.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || Ny)
        for (a = t.data[t.index] = Array(e), c = 0; c < e; c++)
          a[c] = np;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Ye(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Ne(e, t, a) {
      var c = gt();
      if (a !== void 0) {
        var o = a(t);
        if (Ds) {
          Ue(!0);
          try {
            a(t);
          } finally {
            Ue(!1);
          }
        }
      } else o = t;
      return c.memoizedState = c.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, c.queue = e, e = e.dispatch = Wh.bind(
        null,
        re,
        e
      ), [c.memoizedState, e];
    }
    function Ra(e) {
      var t = xe();
      return za(t, et, e);
    }
    function za(e, t, a) {
      var c = e.queue;
      if (c === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      c.lastRenderedReducer = a;
      var o = e.baseQueue, f = c.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, c.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, p = null, v = t, U = !1;
        do {
          var B = v.lane & -536870913;
          if (B !== v.lane ? (Me & B) === B : (_o & B) === B) {
            var O = v.revertLane;
            if (O === 0)
              p !== null && (p = p.next = {
                lane: 0,
                revertLane: 0,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }), B === As && (U = !0);
            else if ((_o & O) === O) {
              v = v.next, O === As && (U = !0);
              continue;
            } else
              B = {
                lane: 0,
                revertLane: v.revertLane,
                action: v.action,
                hasEagerState: v.hasEagerState,
                eagerState: v.eagerState,
                next: null
              }, p === null ? (h = p = B, d = f) : p = p.next = B, re.lanes |= O, Xo |= O;
            B = v.action, Ds && a(f, B), f = v.hasEagerState ? v.eagerState : a(f, B);
          } else
            O = {
              lane: B,
              revertLane: v.revertLane,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, p === null ? (h = p = O, d = f) : p = p.next = O, re.lanes |= B, Xo |= B;
          v = v.next;
        } while (v !== null && v !== t);
        if (p === null ? d = f : p.next = h, !da(f, e.memoizedState) && (Tl = !0, U && (a = Qd, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = p, c.lastRenderedState = f;
      }
      return o === null && (c.lanes = 0), [e.memoizedState, c.dispatch];
    }
    function Jc(e) {
      var t = xe(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var c = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        da(f, t.memoizedState) || (Tl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, c];
    }
    function uu(e, t, a) {
      var c = re, o = gt();
      if (Ve) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        Ld || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), Ld = !0);
      } else {
        if (f = t(), Ld || (a = t(), da(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Ld = !0)), at === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (Me & 124) !== 0 || Qh(c, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, sr(
        $i.bind(null, c, a, e),
        [e]
      ), c.flags |= 2048, pn(
        Ln | dl,
        $u(),
        ki.bind(
          null,
          c,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Sf(e, t, a) {
      var c = re, o = xe(), f = Ve;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !Ld) {
        var d = t();
        da(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), Ld = !0);
      }
      (d = !da(
        (et || o).memoizedState,
        a
      )) && (o.memoizedState = a, Tl = !0), o = o.queue;
      var h = $i.bind(null, c, o, e);
      if (Gt(2048, dl, h, [e]), o.getSnapshot !== t || d || It !== null && It.memoizedState.tag & Ln) {
        if (c.flags |= 2048, pn(
          Ln | dl,
          $u(),
          ki.bind(
            null,
            c,
            o,
            a,
            t
          ),
          null
        ), at === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (_o & 124) !== 0 || Qh(c, t, a);
      }
      return a;
    }
    function Qh(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = re.updateQueue, t === null ? (t = ir(), re.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ki(e, t, a, c) {
      t.value = a, t.getSnapshot = c, Zh(t) && Wi(e);
    }
    function $i(e, t, a) {
      return a(function() {
        Zh(t) && Wi(e);
      });
    }
    function Zh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !da(e, a);
      } catch {
        return !0;
      }
    }
    function Wi(e) {
      var t = Vl(e, 2);
      t !== null && St(t, e, 2);
    }
    function Tf(e) {
      var t = gt();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Ds) {
          Ue(!0);
          try {
            a();
          } finally {
            Ue(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ye,
        lastRenderedState: e
      }, t;
    }
    function cu(e) {
      e = Tf(e);
      var t = e.queue, a = eo.bind(null, re, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function ka(e) {
      var t = gt();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = br.bind(
        null,
        re,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function iu(e, t) {
      var a = xe();
      return mn(a, et, e, t);
    }
    function mn(e, t, a, c) {
      return e.baseState = a, za(
        e,
        et,
        typeof c == "function" ? c : Ye
      );
    }
    function or(e, t) {
      var a = xe();
      return et !== null ? mn(a, et, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Lh(e, t, a, c, o) {
      if (Mf(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        H.T !== null ? a(!0) : f.isTransition = !1, c(f), a = t.pending, a === null ? (f.next = t.pending = f, Fi(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function Fi(e, t) {
      var a = t.action, c = t.payload, o = e.state;
      if (t.isTransition) {
        var f = H.T, d = {};
        H.T = d, H.T._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var h = a(o, c), p = H.S;
          p !== null && p(d, h), Ef(e, t, h);
        } catch (v) {
          Kt(e, t, v);
        } finally {
          H.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, c), Ef(e, t, d);
        } catch (v) {
          Kt(e, t, v);
        }
    }
    function Ef(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (a.then(
        function(c) {
          ku(e, t, c);
        },
        function(c) {
          return Kt(e, t, c);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : ku(e, t, a);
    }
    function ku(e, t, a) {
      t.status = "fulfilled", t.value = a, Af(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, Fi(e, a)));
    }
    function Kt(e, t, a) {
      var c = e.pending;
      if (e.pending = null, c !== null) {
        c = c.next;
        do
          t.status = "rejected", t.reason = a, Af(t), t = t.next;
        while (t !== c);
      }
      e.action = null;
    }
    function Af(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function wh(e, t) {
      return t;
    }
    function Ii(e, t) {
      if (Ve) {
        var a = at.formState;
        if (a !== null) {
          e: {
            var c = re;
            if (Ve) {
              if (Ht) {
                t: {
                  for (var o = Ht, f = gc; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = ol(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === m1 || f === t2 ? o : null;
                }
                if (o) {
                  Ht = ol(
                    o.nextSibling
                  ), c = o.data === m1;
                  break e;
                }
              }
              fn(c);
            }
            c = !1;
          }
          c && (t = a[0]);
        }
      }
      return a = gt(), a.memoizedState = a.baseState = t, c = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wh,
        lastRenderedState: t
      }, a.queue = c, a = eo.bind(
        null,
        re,
        c
      ), c.dispatch = a, c = Tf(!1), f = br.bind(
        null,
        re,
        !1,
        c.queue
      ), c = gt(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, c.queue = o, a = Lh.bind(
        null,
        re,
        o,
        f,
        a
      ), o.dispatch = a, c.memoizedState = e, [t, a, !1];
    }
    function fr(e) {
      var t = xe();
      return xm(t, et, e);
    }
    function xm(e, t, a) {
      if (t = za(
        e,
        t,
        wh
      )[0], e = Ra(Ye)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var c = wc(t);
        } catch (d) {
          throw d === xy ? Ap : d;
        }
      else c = t;
      t = xe();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (re.flags |= 2048, pn(
        Ln | dl,
        $u(),
        _t.bind(null, o, a),
        null
      )), [c, f, e];
    }
    function _t(e, t) {
      e.action = t;
    }
    function Pi(e) {
      var t = xe(), a = et;
      if (a !== null)
        return xm(t, a, e);
      xe(), t = t.memoizedState, a = xe();
      var c = a.queue.dispatch;
      return a.memoizedState = e, [t, c, !1];
    }
    function pn(e, t, a, c) {
      return e = {
        tag: e,
        create: a,
        deps: c,
        inst: t,
        next: null
      }, t = re.updateQueue, t === null && (t = ir(), re.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (c = a.next, a.next = e, e.next = c, t.lastEffect = e), e;
    }
    function $u() {
      return { destroy: void 0, resource: void 0 };
    }
    function Rf(e) {
      var t = gt();
      return e = { current: e }, t.memoizedState = e;
    }
    function Da(e, t, a, c) {
      var o = gt();
      c = c === void 0 ? null : c, re.flags |= e, o.memoizedState = pn(
        Ln | t,
        $u(),
        a,
        c
      );
    }
    function Gt(e, t, a, c) {
      var o = xe();
      c = c === void 0 ? null : c;
      var f = o.memoizedState.inst;
      et !== null && c !== null && Ju(c, et.memoizedState.deps) ? o.memoizedState = pn(t, f, a, c) : (re.flags |= e, o.memoizedState = pn(
        Ln | t,
        f,
        a,
        c
      ));
    }
    function sr(e, t) {
      (re.mode & Ru) !== ft && (re.mode & V1) === ft ? Da(276826112, dl, e, t) : Da(8390656, dl, e, t);
    }
    function rr(e, t) {
      var a = 4194308;
      return (re.mode & Ru) !== ft && (a |= 134217728), Da(a, Bl, e, t);
    }
    function Hm(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function dr(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var c = 4194308;
      (re.mode & Ru) !== ft && (c |= 134217728), Da(
        c,
        Bl,
        Hm.bind(null, t, e),
        a
      );
    }
    function vn(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Gt(
        4,
        Bl,
        Hm.bind(null, t, e),
        a
      );
    }
    function zf(e, t) {
      return gt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Kc(e, t) {
      var a = xe();
      t = t === void 0 ? null : t;
      var c = a.memoizedState;
      return t !== null && Ju(t, c[1]) ? c[0] : (a.memoizedState = [e, t], e);
    }
    function hr(e, t) {
      var a = gt();
      t = t === void 0 ? null : t;
      var c = e();
      if (Ds) {
        Ue(!0);
        try {
          e();
        } finally {
          Ue(!1);
        }
      }
      return a.memoizedState = [c, t], c;
    }
    function Wu(e, t) {
      var a = xe();
      t = t === void 0 ? null : t;
      var c = a.memoizedState;
      if (t !== null && Ju(t, c[1]))
        return c[0];
      if (c = e(), Ds) {
        Ue(!0);
        try {
          e();
        } finally {
          Ue(!1);
        }
      }
      return a.memoizedState = [c, t], c;
    }
    function yr(e, t) {
      var a = gt();
      return pr(a, e, t);
    }
    function Df(e, t) {
      var a = xe();
      return Of(
        a,
        et.memoizedState,
        e,
        t
      );
    }
    function mr(e, t) {
      var a = xe();
      return et === null ? pr(a, e, t) : Of(
        a,
        et.memoizedState,
        e,
        t
      );
    }
    function pr(e, t, a) {
      return a === void 0 || (_o & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a, e = jm(), re.lanes |= e, Xo |= e, a);
    }
    function Of(e, t, a, c) {
      return da(a, t) ? a : Zd.current !== null ? (e = pr(e, a, c), da(e, t) || (Tl = !0), e) : (_o & 42) === 0 ? (Tl = !0, e.memoizedState = a) : (e = jm(), re.lanes |= e, Xo |= e, t);
    }
    function Jh(e, t, a, c, o) {
      var f = oe.p;
      oe.p = f !== 0 && f < en ? f : en;
      var d = H.T, h = {};
      H.T = h, br(e, !1, t, a), h._updatedFibers = /* @__PURE__ */ new Set();
      try {
        var p = o(), v = H.S;
        if (v !== null && v(h, p), p !== null && typeof p == "object" && typeof p.then == "function") {
          var U = Om(
            p,
            c
          );
          ou(
            e,
            t,
            U,
            Jl(e)
          );
        } else
          ou(
            e,
            t,
            c,
            Jl(e)
          );
      } catch (B) {
        ou(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: B },
          Jl(e)
        );
      } finally {
        oe.p = f, H.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function kc(e, t, a, c) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Kh(e).queue;
      Jh(
        e,
        o,
        t,
        _s,
        a === null ? Be : function() {
          return kh(e), a(c);
        }
      );
    }
    function Kh(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: _s,
        baseState: _s,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ye,
          lastRenderedState: _s
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ye,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function kh(e) {
      H.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Kh(e).next.queue;
      ou(
        e,
        t,
        {},
        Jl(e)
      );
    }
    function gn() {
      var e = Tf(!1);
      return e = Jh.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), gt().memoizedState = e, [!1, e];
    }
    function vr() {
      var e = Ra(Ye)[0], t = xe().memoizedState;
      return [
        typeof e == "boolean" ? e : wc(e),
        t
      ];
    }
    function gr() {
      var e = Jc(Ye)[0], t = xe().memoizedState;
      return [
        typeof e == "boolean" ? e : wc(e),
        t
      ];
    }
    function Zl() {
      return lt(Wy);
    }
    function bn() {
      var e = gt(), t = at.identifierPrefix;
      if (Ve) {
        var a = Ti, c = Si;
        a = (c & ~(1 << 32 - bl(c) - 1)).toString(32) + a, t = "«" + t + "R" + a, a = Op++, 0 < a && (t += "H" + a.toString(32)), t += "»";
      } else
        a = rb++, t = "«" + t + "r" + a.toString(32) + "»";
      return e.memoizedState = t;
    }
    function $c() {
      return gt().memoizedState = $h.bind(
        null,
        re
      );
    }
    function $h(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var c = Jl(a);
            e = dn(c);
            var o = wa(a, e, c);
            o !== null && (St(o, a, c), wu(o, a, c)), a = pf(), t != null && o !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), e.payload = { cache: a };
            return;
        }
        a = a.return;
      }
    }
    function Wh(e, t, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Jl(e);
      var o = {
        lane: c,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      Mf(e) ? Wc(t, o) : (o = Rh(e, t, o, c), o !== null && (St(o, e, c), Uf(o, t, c))), Ac(e, c);
    }
    function eo(e, t, a) {
      var c = arguments;
      typeof c[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), c = Jl(e), ou(e, t, a, c), Ac(e, c);
    }
    function ou(e, t, a, c) {
      var o = {
        lane: c,
        revertLane: 0,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Mf(e)) Wc(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = H.H;
          H.H = Du;
          try {
            var h = t.lastRenderedState, p = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = p, da(p, h))
              return Ps(e, t, o, 0), at === null && rf(), !1;
          } catch {
          } finally {
            H.H = d;
          }
        }
        if (a = Rh(e, t, o, c), a !== null)
          return St(a, e, c), Uf(a, t, c), !0;
      }
      return !1;
    }
    function br(e, t, a, c) {
      if (H.T === null && As === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), c = {
        lane: 2,
        revertLane: O0(),
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, Mf(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = Rh(
          e,
          a,
          c,
          2
        ), t !== null && St(t, e, 2);
      Ac(e, 2);
    }
    function Mf(e) {
      var t = e.alternate;
      return e === re || t !== null && t === re;
    }
    function Wc(e, t) {
      wd = Dp = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Uf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var c = t.lanes;
        c &= e.pendingLanes, a |= c, t.lanes = a, Ci(e, a);
      }
    }
    function kt(e) {
      var t = Ee;
      return e != null && (Ee = t === null ? e : t.concat(e)), t;
    }
    function to(e, t, a) {
      for (var c = Object.keys(e.props), o = 0; o < c.length; o++) {
        var f = c[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = yf(e, a.mode, 0), t._debugInfo = Ee, t.return = a), W(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function lo(e) {
      var t = By;
      return By += 1, Jd === null && (Jd = Vh()), Ta(Jd, e, t);
    }
    function Oa(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function he(e, t) {
      throw t.$$typeof === us ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function je(e, t) {
      var a = te(e) || "Component";
      gg[a] || (gg[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function ht(e, t) {
      var a = te(e) || "Component";
      bg[a] || (bg[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function xf(e) {
      function t(b, S) {
        if (e) {
          var T = b.deletions;
          T === null ? (b.deletions = [S], b.flags |= 16) : T.push(S);
        }
      }
      function a(b, S) {
        if (!e) return null;
        for (; S !== null; )
          t(b, S), S = S.sibling;
        return null;
      }
      function c(b) {
        for (var S = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? S.set(b.key, b) : S.set(b.index, b), b = b.sibling;
        return S;
      }
      function o(b, S) {
        return b = on(b, S), b.index = 0, b.sibling = null, b;
      }
      function f(b, S, T) {
        return b.index = T, e ? (T = b.alternate, T !== null ? (T = T.index, T < S ? (b.flags |= 67108866, S) : T) : (b.flags |= 67108866, S)) : (b.flags |= 1048576, S);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, S, T, _) {
        return S === null || S.tag !== 6 ? (S = Vu(
          T,
          b.mode,
          _
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = Ee, S) : (S = o(S, T), S.return = b, S._debugInfo = Ee, S);
      }
      function p(b, S, T, _) {
        var w = T.type;
        return w === ye ? (S = U(
          b,
          S,
          T.props.children,
          _,
          T.key
        ), to(T, S, b), S) : S !== null && (S.elementType === w || Am(S, T) || typeof w == "object" && w !== null && w.$$typeof === sa && Go(w) === S.type) ? (S = o(S, T.props), Oa(S, T), S.return = b, S._debugOwner = T._owner, S._debugInfo = Ee, S) : (S = yf(T, b.mode, _), Oa(S, T), S.return = b, S._debugInfo = Ee, S);
      }
      function v(b, S, T, _) {
        return S === null || S.tag !== 4 || S.stateNode.containerInfo !== T.containerInfo || S.stateNode.implementation !== T.implementation ? (S = Mh(T, b.mode, _), S.return = b, S._debugInfo = Ee, S) : (S = o(S, T.children || []), S.return = b, S._debugInfo = Ee, S);
      }
      function U(b, S, T, _, w) {
        return S === null || S.tag !== 7 ? (S = Gu(
          T,
          b.mode,
          _,
          w
        ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = Ee, S) : (S = o(S, T), S.return = b, S._debugInfo = Ee, S);
      }
      function B(b, S, T) {
        if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint")
          return S = Vu(
            "" + S,
            b.mode,
            T
          ), S.return = b, S._debugOwner = b, S._debugTask = b._debugTask, S._debugInfo = Ee, S;
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case fc:
              return T = yf(
                S,
                b.mode,
                T
              ), Oa(T, S), T.return = b, b = kt(S._debugInfo), T._debugInfo = Ee, Ee = b, T;
            case mi:
              return S = Mh(
                S,
                b.mode,
                T
              ), S.return = b, S._debugInfo = Ee, S;
            case sa:
              var _ = kt(S._debugInfo);
              return S = Go(S), b = B(b, S, T), Ee = _, b;
          }
          if (se(S) || Mt(S))
            return T = Gu(
              S,
              b.mode,
              T,
              null
            ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, b = kt(S._debugInfo), T._debugInfo = Ee, Ee = b, T;
          if (typeof S.then == "function")
            return _ = kt(S._debugInfo), b = B(
              b,
              lo(S),
              T
            ), Ee = _, b;
          if (S.$$typeof === Ca)
            return B(
              b,
              mf(b, S),
              T
            );
          he(b, S);
        }
        return typeof S == "function" && je(b, S), typeof S == "symbol" && ht(b, S), null;
      }
      function O(b, S, T, _) {
        var w = S !== null ? S.key : null;
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return w !== null ? null : h(b, S, "" + T, _);
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case fc:
              return T.key === w ? (w = kt(T._debugInfo), b = p(
                b,
                S,
                T,
                _
              ), Ee = w, b) : null;
            case mi:
              return T.key === w ? v(b, S, T, _) : null;
            case sa:
              return w = kt(T._debugInfo), T = Go(T), b = O(
                b,
                S,
                T,
                _
              ), Ee = w, b;
          }
          if (se(T) || Mt(T))
            return w !== null ? null : (w = kt(T._debugInfo), b = U(
              b,
              S,
              T,
              _,
              null
            ), Ee = w, b);
          if (typeof T.then == "function")
            return w = kt(T._debugInfo), b = O(
              b,
              S,
              lo(T),
              _
            ), Ee = w, b;
          if (T.$$typeof === Ca)
            return O(
              b,
              S,
              mf(b, T),
              _
            );
          he(b, T);
        }
        return typeof T == "function" && je(b, T), typeof T == "symbol" && ht(b, T), null;
      }
      function Y(b, S, T, _, w) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
          return b = b.get(T) || null, h(S, b, "" + _, w);
        if (typeof _ == "object" && _ !== null) {
          switch (_.$$typeof) {
            case fc:
              return T = b.get(
                _.key === null ? T : _.key
              ) || null, b = kt(_._debugInfo), S = p(
                S,
                T,
                _,
                w
              ), Ee = b, S;
            case mi:
              return b = b.get(
                _.key === null ? T : _.key
              ) || null, v(S, b, _, w);
            case sa:
              var me = kt(_._debugInfo);
              return _ = Go(_), S = Y(
                b,
                S,
                T,
                _,
                w
              ), Ee = me, S;
          }
          if (se(_) || Mt(_))
            return T = b.get(T) || null, b = kt(_._debugInfo), S = U(
              S,
              T,
              _,
              w,
              null
            ), Ee = b, S;
          if (typeof _.then == "function")
            return me = kt(_._debugInfo), S = Y(
              b,
              S,
              T,
              lo(_),
              w
            ), Ee = me, S;
          if (_.$$typeof === Ca)
            return Y(
              b,
              S,
              T,
              mf(S, _),
              w
            );
          he(S, _);
        }
        return typeof _ == "function" && je(S, _), typeof _ == "symbol" && ht(S, _), null;
      }
      function F(b, S, T, _) {
        if (typeof T != "object" || T === null) return _;
        switch (T.$$typeof) {
          case fc:
          case mi:
            Al(b, S, T);
            var w = T.key;
            if (typeof w != "string") break;
            if (_ === null) {
              _ = /* @__PURE__ */ new Set(), _.add(w);
              break;
            }
            if (!_.has(w)) {
              _.add(w);
              break;
            }
            W(S, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                w
              );
            });
            break;
          case sa:
            T = Go(T), F(b, S, T, _);
        }
        return _;
      }
      function fe(b, S, T, _) {
        for (var w = null, me = null, I = null, pe = S, ve = S = 0, st = null; pe !== null && ve < T.length; ve++) {
          pe.index > ve ? (st = pe, pe = null) : st = pe.sibling;
          var Qt = O(
            b,
            pe,
            T[ve],
            _
          );
          if (Qt === null) {
            pe === null && (pe = st);
            break;
          }
          w = F(
            b,
            Qt,
            T[ve],
            w
          ), e && pe && Qt.alternate === null && t(b, pe), S = f(Qt, S, ve), I === null ? me = Qt : I.sibling = Qt, I = Qt, pe = st;
        }
        if (ve === T.length)
          return a(b, pe), Ve && Vc(b, ve), me;
        if (pe === null) {
          for (; ve < T.length; ve++)
            pe = B(b, T[ve], _), pe !== null && (w = F(
              b,
              pe,
              T[ve],
              w
            ), S = f(
              pe,
              S,
              ve
            ), I === null ? me = pe : I.sibling = pe, I = pe);
          return Ve && Vc(b, ve), me;
        }
        for (pe = c(pe); ve < T.length; ve++)
          st = Y(
            pe,
            b,
            ve,
            T[ve],
            _
          ), st !== null && (w = F(
            b,
            st,
            T[ve],
            w
          ), e && st.alternate !== null && pe.delete(
            st.key === null ? ve : st.key
          ), S = f(
            st,
            S,
            ve
          ), I === null ? me = st : I.sibling = st, I = st);
        return e && pe.forEach(function(xi) {
          return t(b, xi);
        }), Ve && Vc(b, ve), me;
      }
      function nt(b, S, T, _) {
        if (T == null)
          throw Error("An iterable object provided no iterator.");
        for (var w = null, me = null, I = S, pe = S = 0, ve = null, st = null, Qt = T.next(); I !== null && !Qt.done; pe++, Qt = T.next()) {
          I.index > pe ? (ve = I, I = null) : ve = I.sibling;
          var xi = O(b, I, Qt.value, _);
          if (xi === null) {
            I === null && (I = ve);
            break;
          }
          st = F(
            b,
            xi,
            Qt.value,
            st
          ), e && I && xi.alternate === null && t(b, I), S = f(xi, S, pe), me === null ? w = xi : me.sibling = xi, me = xi, I = ve;
        }
        if (Qt.done)
          return a(b, I), Ve && Vc(b, pe), w;
        if (I === null) {
          for (; !Qt.done; pe++, Qt = T.next())
            I = B(b, Qt.value, _), I !== null && (st = F(
              b,
              I,
              Qt.value,
              st
            ), S = f(
              I,
              S,
              pe
            ), me === null ? w = I : me.sibling = I, me = I);
          return Ve && Vc(b, pe), w;
        }
        for (I = c(I); !Qt.done; pe++, Qt = T.next())
          ve = Y(
            I,
            b,
            pe,
            Qt.value,
            _
          ), ve !== null && (st = F(
            b,
            ve,
            Qt.value,
            st
          ), e && ve.alternate !== null && I.delete(
            ve.key === null ? pe : ve.key
          ), S = f(
            ve,
            S,
            pe
          ), me === null ? w = ve : me.sibling = ve, me = ve);
        return e && I.forEach(function(Gb) {
          return t(b, Gb);
        }), Ve && Vc(b, pe), w;
      }
      function He(b, S, T, _) {
        if (typeof T == "object" && T !== null && T.type === ye && T.key === null && (to(T, null, b), T = T.props.children), typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case fc:
              var w = kt(T._debugInfo);
              e: {
                for (var me = T.key; S !== null; ) {
                  if (S.key === me) {
                    if (me = T.type, me === ye) {
                      if (S.tag === 7) {
                        a(
                          b,
                          S.sibling
                        ), _ = o(
                          S,
                          T.props.children
                        ), _.return = b, _._debugOwner = T._owner, _._debugInfo = Ee, to(T, _, b), b = _;
                        break e;
                      }
                    } else if (S.elementType === me || Am(
                      S,
                      T
                    ) || typeof me == "object" && me !== null && me.$$typeof === sa && Go(me) === S.type) {
                      a(
                        b,
                        S.sibling
                      ), _ = o(S, T.props), Oa(_, T), _.return = b, _._debugOwner = T._owner, _._debugInfo = Ee, b = _;
                      break e;
                    }
                    a(b, S);
                    break;
                  } else t(b, S);
                  S = S.sibling;
                }
                T.type === ye ? (_ = Gu(
                  T.props.children,
                  b.mode,
                  _,
                  T.key
                ), _.return = b, _._debugOwner = b, _._debugTask = b._debugTask, _._debugInfo = Ee, to(T, _, b), b = _) : (_ = yf(
                  T,
                  b.mode,
                  _
                ), Oa(_, T), _.return = b, _._debugInfo = Ee, b = _);
              }
              return b = d(b), Ee = w, b;
            case mi:
              e: {
                for (w = T, T = w.key; S !== null; ) {
                  if (S.key === T)
                    if (S.tag === 4 && S.stateNode.containerInfo === w.containerInfo && S.stateNode.implementation === w.implementation) {
                      a(
                        b,
                        S.sibling
                      ), _ = o(
                        S,
                        w.children || []
                      ), _.return = b, b = _;
                      break e;
                    } else {
                      a(b, S);
                      break;
                    }
                  else t(b, S);
                  S = S.sibling;
                }
                _ = Mh(
                  w,
                  b.mode,
                  _
                ), _.return = b, b = _;
              }
              return d(b);
            case sa:
              return w = kt(T._debugInfo), T = Go(T), b = He(
                b,
                S,
                T,
                _
              ), Ee = w, b;
          }
          if (se(T))
            return w = kt(T._debugInfo), b = fe(
              b,
              S,
              T,
              _
            ), Ee = w, b;
          if (Mt(T)) {
            if (w = kt(T._debugInfo), me = Mt(T), typeof me != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var I = me.call(T);
            return I === T ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(I) !== "[object Generator]") && (pg || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), pg = !0) : T.entries !== me || wv || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), wv = !0), b = nt(
              b,
              S,
              I,
              _
            ), Ee = w, b;
          }
          if (typeof T.then == "function")
            return w = kt(T._debugInfo), b = He(
              b,
              S,
              lo(T),
              _
            ), Ee = w, b;
          if (T.$$typeof === Ca)
            return He(
              b,
              S,
              mf(b, T),
              _
            );
          he(b, T);
        }
        return typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint" ? (w = "" + T, S !== null && S.tag === 6 ? (a(
          b,
          S.sibling
        ), _ = o(S, w), _.return = b, b = _) : (a(b, S), _ = Vu(
          w,
          b.mode,
          _
        ), _.return = b, _._debugOwner = b, _._debugTask = b._debugTask, _._debugInfo = Ee, b = _), d(b)) : (typeof T == "function" && je(b, T), typeof T == "symbol" && ht(b, T), a(b, S));
      }
      return function(b, S, T, _) {
        var w = Ee;
        Ee = null;
        try {
          By = 0;
          var me = He(
            b,
            S,
            T,
            _
          );
          return Jd = null, me;
        } catch (st) {
          if (st === xy || st === Ap) throw st;
          var I = ge(29, st, null, b.mode);
          I.lanes = _, I.return = b;
          var pe = I._debugInfo = Ee;
          if (I._debugOwner = b._debugOwner, I._debugTask = b._debugTask, pe != null) {
            for (var ve = pe.length - 1; 0 <= ve; ve--)
              if (typeof pe[ve].stack == "string") {
                I._debugOwner = pe[ve], I._debugTask = pe[ve].debugTask;
                break;
              }
          }
          return I;
        } finally {
          Ee = w;
        }
      };
    }
    function ua(e) {
      var t = e.alternate;
      de(
        hl,
        hl.current & kd,
        e
      ), de(Jn, e, e), Sc === null && (t === null || Zd.current !== null || t.memoizedState !== null) && (Sc = e);
    }
    function Fu(e) {
      if (e.tag === 22) {
        if (de(hl, hl.current, e), de(Jn, e, e), Sc === null) {
          var t = e.alternate;
          t !== null && t.memoizedState !== null && (Sc = e);
        }
      } else $a(e);
    }
    function $a(e) {
      de(hl, hl.current, e), de(
        Jn,
        Jn.current,
        e
      );
    }
    function ca(e) {
      Xe(Jn, e), Sc === e && (Sc = null), Xe(hl, e);
    }
    function fu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || a.data === Oi || Cn(a)))
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function Fh(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        Hg.has(t) || (Hg.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function yt(e, t, a, c) {
      var o = e.memoizedState, f = a(c, o);
      if (e.mode & Pl) {
        Ue(!0);
        try {
          f = a(c, o);
        } finally {
          Ue(!1);
        }
      }
      f === void 0 && (t = qe(t) || "Component", Og.has(t) || (Og.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : be({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Sr(e, t, a, c, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          c,
          f,
          d
        ), e.mode & Pl) {
          Ue(!0);
          try {
            a = h.shouldComponentUpdate(
              c,
              f,
              d
            );
          } finally {
            Ue(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          qe(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !sf(a, c) || !sf(o, f) : !0;
    }
    function Tr(e, t, a, c) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, c), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, c), t.state !== o && (e = te(e) || "Component", Eg.has(e) || (Eg.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), Jv.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Iu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var c in t)
          c !== "ref" && (a[c] = t[c]);
      }
      if (e = e.defaultProps) {
        a === t && (a = be({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Ih(e) {
      Kv(e), console.warn(
        `%s

%s
`,
        $d ? "An error occurred in the <" + $d + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function Cm(e) {
      var t = $d ? "The above error occurred in the <" + $d + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((kv || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var c = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          f2 + e[0],
          s2,
          Kp + c + Kp,
          r2
        ) : e.splice(
          0,
          0,
          f2,
          s2,
          Kp + c + Kp,
          r2
        ), e.unshift(console), c = Yb.apply(console.error, e), c();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function Er(e) {
      Kv(e);
    }
    function ao(e, t) {
      try {
        $d = t.source ? te(t.source) : null, kv = null;
        var a = t.value;
        if (H.actQueue !== null)
          H.thrownErrors.push(a);
        else {
          var c = e.onUncaughtError;
          c(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Ar(e, t, a) {
      try {
        $d = a.source ? te(a.source) : null, kv = te(t);
        var c = e.onCaughtError;
        c(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function pl(e, t, a) {
      return a = dn(a), a.tag = _v, a.payload = { element: null }, a.callback = function() {
        W(t.source, ao, e, t);
      }, a;
    }
    function bt(e) {
      return e = dn(e), e.tag = _v, e;
    }
    function Hf(e, t, a, c) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = c.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Rm(a), W(
            c.source,
            Ar,
            t,
            a,
            c
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Rm(a), W(
          c.source,
          Ar,
          t,
          a,
          c
        ), typeof o != "function" && (Qo === null ? Qo = /* @__PURE__ */ new Set([this]) : Qo.add(this)), hb(this, c), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          te(a) || "Unknown"
        );
      });
    }
    function Cf(e, t, a, c, o) {
      if (a.flags |= 32768, zt && ro(e, o), c !== null && typeof c == "object" && typeof c.then == "function") {
        if (t = a.alternate, t !== null && nl(
          t,
          a,
          o,
          !0
        ), Ve && (Ei = !0), a = Jn.current, a !== null) {
          switch (a.tag) {
            case 13:
              return Sc === null ? Zr() : a.alternate === null && Ct === Di && (Ct = Iv), a.flags &= -257, a.flags |= 65536, a.lanes = o, c === Yv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([c]) : t.add(c), A0(e, c, o)), !1;
            case 22:
              return a.flags |= 65536, c === Yv ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([c])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([c]) : a.add(c)), A0(e, c, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return A0(e, c, o), Zr(), !1;
      }
      if (Ve)
        return Ei = !0, t = Jn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, c !== Cv && ji(
          aa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: c }
            ),
            a
          )
        )) : (c !== Cv && ji(
          aa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: c }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, c = aa(c, a), o = pl(
          e.stateNode,
          c,
          o
        ), Zi(e, o), Ct !== Os && (Ct = Pd)), !1;
      var f = aa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: c }
        ),
        a
      );
      if (Qy === null ? Qy = [f] : Qy.push(f), Ct !== Os && (Ct = Pd), t === null) return !0;
      c = aa(c, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = pl(
              a.stateNode,
              c,
              e
            ), Zi(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Qo === null || !Qo.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = bt(o), Hf(
                o,
                e,
                a,
                c
              ), Zi(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function xt(e, t, a, c) {
      t.child = e === null ? Sg(t, null, a, c) : Kd(
        t,
        e.child,
        a,
        c
      );
    }
    function Rr(e, t, a, c, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in c) {
        var d = {};
        for (var h in c)
          h !== "ref" && (d[h] = c[h]);
      } else d = c;
      return Qu(t), tl(t), c = Ku(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = Ql(), ga(), e !== null && !Tl ? (nu(e, t, o), Tn(e, t, o)) : (Ve && h && lr(t), t.flags |= 1, xt(e, t, c, o), t.child);
    }
    function Sn(e, t, a, c, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Dh(f) && f.defaultProps === void 0 && a.compare === null ? (a = Gc(f), t.tag = 15, t.type = a, Mr(t, f), Nf(
          e,
          t,
          a,
          c,
          o
        )) : (e = tr(
          a.type,
          null,
          c,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !Br(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : sf, a(d, c) && e.ref === t.ref)
          return Tn(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = on(f, c), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Nf(e, t, a, c, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (sf(f, c) && e.ref === t.ref && t.type === e.type)
          if (Tl = !1, t.pendingProps = c = f, Br(e, o))
            (e.flags & 131072) !== 0 && (Tl = !0);
          else
            return t.lanes = e.lanes, Tn(e, t, o);
      }
      return Or(
        e,
        t,
        a,
        c,
        o
      );
    }
    function zr(e, t, a) {
      var c = t.pendingProps, o = c.children, f = e !== null ? e.memoizedState : null;
      if (c.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (c = f !== null ? f.baseLanes | a : a, e !== null) {
            for (o = t.child = e.child, f = 0; o !== null; )
              f = f | o.lanes | o.childLanes, o = o.sibling;
            t.childLanes = f & ~c;
          } else t.childLanes = 0, t.child = null;
          return Dr(
            e,
            t,
            c,
            a
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && cr(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? jl(t, f) : gf(t), Fu(t);
        else
          return t.lanes = t.childLanes = 536870912, Dr(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a
          );
      } else
        f !== null ? (cr(t, f.cachePool), jl(t, f), $a(t), t.memoizedState = null) : (e !== null && cr(t, null), gf(t), $a(t));
      return xt(e, t, o, a), t.child;
    }
    function Dr(e, t, a, c) {
      var o = Gh();
      return o = o === null ? null : {
        parent: rl._currentValue,
        pool: o
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: o
      }, e !== null && cr(t, null), gf(t), Fu(t), e !== null && nl(e, t, c, !0), null;
    }
    function Bf(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function Or(e, t, a, c, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = qe(a) || "Unknown";
        Ng[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), Ng[f] = !0);
      }
      return t.mode & Pl && zu.recordLegacyContextWarning(
        t,
        null
      ), e === null && (Mr(t, t.type), a.contextTypes && (f = qe(a) || "Unknown", qg[f] || (qg[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Qu(t), tl(t), a = Ku(
        e,
        t,
        a,
        c,
        void 0,
        o
      ), c = Ql(), ga(), e !== null && !Tl ? (nu(e, t, o), Tn(e, t, o)) : (Ve && c && lr(t), t.flags |= 1, xt(e, t, a, o), t.child);
    }
    function Ph(e, t, a, c, o, f) {
      return Qu(t), tl(t), Ri = -1, Ny = e !== null && e.type !== t.type, t.updateQueue = null, a = Ki(
        t,
        c,
        a,
        o
      ), bf(e, t), c = Ql(), ga(), e !== null && !Tl ? (nu(e, t, f), Tn(e, t, f)) : (Ve && c && lr(t), t.flags |= 1, xt(e, t, a, f), t.child);
    }
    function e0(e, t, a, c, o) {
      switch (el(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = at, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = bt(h), Hf(
            h,
            d,
            t,
            aa(f, t)
          ), Zi(t, h);
      }
      if (Qu(t), t.stateNode === null) {
        if (d = qo, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== Ca) && !xg.has(a) && (xg.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === pd ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          qe(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = lt(f)), f = new a(c, d), t.mode & Pl) {
          Ue(!0);
          try {
            f = new a(c, d);
          } finally {
            Ue(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Jv, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Tg, typeof a.getDerivedStateFromProps == "function" && d === null && (d = qe(a) || "Component", Ag.has(d) || (Ag.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var p = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? p = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (p = "UNSAFE_componentWillUpdate"), d !== null || h !== null || p !== null) {
            f = qe(a) || "Component";
            var v = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            zg.has(f) || (zg.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              v,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              p !== null ? `
  ` + p : ""
            ));
          }
        }
        f = t.stateNode, d = qe(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Ug.has(a) && (Ug.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Mg.has(a) && (Mg.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          qe(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== c, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Rg.has(a) || (Rg.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          qe(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || se(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = c, f.state = t.memoizedState, f.refs = {}, Xl(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? lt(d) : qo, f.state === c && (d = qe(a) || "Component", Dg.has(d) || (Dg.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Pl && zu.recordLegacyContextWarning(
          t,
          f
        ), zu.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (yt(
          t,
          a,
          d,
          c
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          te(t) || "Component"
        ), Jv.enqueueReplaceState(
          f,
          f.state,
          null
        )), Li(t, c, f, o), hn(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== ft && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var U = t.memoizedProps;
        h = Iu(a, U), f.props = h;
        var B = f.context;
        p = a.contextType, d = qo, typeof p == "object" && p !== null && (d = lt(p)), v = a.getDerivedStateFromProps, p = typeof v == "function" || typeof f.getSnapshotBeforeUpdate == "function", U = t.pendingProps !== U, p || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (U || B !== d) && Tr(
          t,
          f,
          c,
          d
        ), Yo = !1;
        var O = t.memoizedState;
        f.state = O, Li(t, c, f, o), hn(), B = t.memoizedState, U || O !== B || Yo ? (typeof v == "function" && (yt(
          t,
          a,
          v,
          c
        ), B = t.memoizedState), (h = Yo || Sr(
          t,
          a,
          h,
          c,
          O,
          B,
          d
        )) ? (p || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== ft && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== ft && (t.flags |= 134217728), t.memoizedProps = c, t.memoizedState = B), f.props = c, f.state = B, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ru) !== ft && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Lu(e, t), d = t.memoizedProps, p = Iu(a, d), f.props = p, v = t.pendingProps, O = f.context, B = a.contextType, h = qo, typeof B == "object" && B !== null && (h = lt(B)), U = a.getDerivedStateFromProps, (B = typeof U == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== v || O !== h) && Tr(
          t,
          f,
          c,
          h
        ), Yo = !1, O = t.memoizedState, f.state = O, Li(t, c, f, o), hn();
        var Y = t.memoizedState;
        d !== v || O !== Y || Yo || e !== null && e.dependencies !== null && ju(e.dependencies) ? (typeof U == "function" && (yt(
          t,
          a,
          U,
          c
        ), Y = t.memoizedState), (p = Yo || Sr(
          t,
          a,
          p,
          c,
          O,
          Y,
          h
        ) || e !== null && e.dependencies !== null && ju(e.dependencies)) ? (B || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(c, Y, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          c,
          Y,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), t.memoizedProps = c, t.memoizedState = Y), f.props = c, f.state = Y, f.context = h, f = p) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && O === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Bf(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Po(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, qa = -1;
        else {
          if (tl(t), a = cg(h), t.mode & Pl) {
            Ue(!0);
            try {
              cg(h);
            } finally {
              Ue(!1);
            }
          }
          ga();
        }
        t.flags |= 1, e !== null && d ? (t.child = Kd(
          t,
          e.child,
          null,
          o
        ), t.child = Kd(
          t,
          null,
          a,
          o
        )) : xt(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Tn(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== c && (Wd || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        te(t) || "a component"
      ), Wd = !0), e;
    }
    function t0(e, t, a, c) {
      return jc(), t.flags |= 256, xt(e, t, a, c), t.child;
    }
    function Mr(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = qe(t) || "Unknown", Yg[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Yg[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = qe(t) || "Unknown", Bg[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Bg[t] = !0));
    }
    function qf(e) {
      return { baseLanes: e, cachePool: Mm() };
    }
    function Ur(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= an), e;
    }
    function Nm(e, t, a) {
      var c, o = t.pendingProps;
      ut(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((c = d) || (c = e !== null && e.memoizedState === null ? !1 : (hl.current & qy) !== 0), c && (f = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (Ve) {
          if (f ? ua(t) : $a(t), Ve) {
            var h = Ht, p;
            if (!(p = !h)) {
              e: {
                var v = h;
                for (p = gc; v.nodeType !== 8; ) {
                  if (!p) {
                    p = null;
                    break e;
                  }
                  if (v = ol(v.nextSibling), v === null) {
                    p = null;
                    break e;
                  }
                }
                p = v;
              }
              p !== null ? (ja(), t.memoizedState = {
                dehydrated: p,
                treeContext: Ss !== null ? { id: Si, overflow: Ti } : null,
                retryLane: 536870912,
                hydrationErrors: null
              }, v = ge(18, null, null, ft), v.stateNode = p, v.return = t, t.child = v, ha = t, Ht = null, p = !0) : p = !1, p = !p;
            }
            p && (Uh(
              t,
              h
            ), fn(t));
          }
          if (h = t.memoizedState, h !== null && (h = h.dehydrated, h !== null))
            return Cn(h) ? t.lanes = 32 : t.lanes = 536870912, null;
          ca(t);
        }
        return h = o.children, o = o.fallback, f ? ($a(t), f = t.mode, h = Yf(
          {
            mode: "hidden",
            children: h
          },
          f
        ), o = Gu(
          o,
          f,
          a,
          null
        ), h.return = t, o.return = t, h.sibling = o, t.child = h, f = t.child, f.memoizedState = qf(a), f.childLanes = Ur(
          e,
          c,
          a
        ), t.memoizedState = Wv, o) : (ua(t), xr(
          t,
          h
        ));
      }
      var U = e.memoizedState;
      if (U !== null && (h = U.dehydrated, h !== null)) {
        if (d)
          t.flags & 256 ? (ua(t), t.flags &= -257, t = Hr(
            e,
            t,
            a
          )) : t.memoizedState !== null ? ($a(t), t.child = e.child, t.flags |= 128, t = null) : ($a(t), f = o.fallback, h = t.mode, o = Yf(
            {
              mode: "visible",
              children: o.children
            },
            h
          ), f = Gu(
            f,
            h,
            a,
            null
          ), f.flags |= 2, o.return = t, f.return = t, o.sibling = f, t.child = o, Kd(
            t,
            e.child,
            null,
            a
          ), o = t.child, o.memoizedState = qf(a), o.childLanes = Ur(
            e,
            c,
            a
          ), t.memoizedState = Wv, t = f);
        else if (ua(t), Ve && console.error(
          "We should not be hydrating here. This is a bug in React. Please file a bug."
        ), Cn(h)) {
          if (c = h.nextSibling && h.nextSibling.dataset, c) {
            p = c.dgst;
            var B = c.msg;
            v = c.stck;
            var O = c.cstck;
          }
          h = B, c = p, o = v, p = f = O, f = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), f.stack = o || "", f.digest = c, c = p === void 0 ? null : p, o = {
            value: f,
            source: null,
            stack: c
          }, typeof c == "string" && Uv.set(
            f,
            o
          ), ji(o), t = Hr(
            e,
            t,
            a
          );
        } else if (Tl || nl(
          e,
          t,
          a,
          !1
        ), c = (a & e.childLanes) !== 0, Tl || c) {
          if (c = at, c !== null && (o = a & -a, o = (o & 42) !== 0 ? 1 : zl(
            o
          ), o = (o & (c.suspendedLanes | a)) !== 0 ? 0 : o, o !== 0 && o !== U.retryLane))
            throw U.retryLane = o, Vl(
              e,
              o
            ), St(
              c,
              e,
              o
            ), Cg;
          h.data === Oi || Zr(), t = Hr(
            e,
            t,
            a
          );
        } else
          h.data === Oi ? (t.flags |= 192, t.child = e.child, t = null) : (e = U.treeContext, Ht = ol(
            h.nextSibling
          ), ha = t, Ve = !0, Ts = null, Ei = !1, Qn = null, gc = !1, e !== null && (ja(), Xn[jn++] = Si, Xn[jn++] = Ti, Xn[jn++] = Ss, Si = e.id, Ti = e.overflow, Ss = t), t = xr(
            t,
            o.children
          ), t.flags |= 4096);
        return t;
      }
      return f ? ($a(t), f = o.fallback, h = t.mode, p = e.child, v = p.sibling, o = on(
        p,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = p.subtreeFlags & 65011712, v !== null ? f = on(
        v,
        f
      ) : (f = Gu(
        f,
        h,
        a,
        null
      ), f.flags |= 2), f.return = t, o.return = t, o.sibling = f, t.child = o, o = f, f = t.child, h = e.child.memoizedState, h === null ? h = qf(a) : (p = h.cachePool, p !== null ? (v = rl._currentValue, p = p.parent !== v ? { parent: v, pool: v } : p) : p = Mm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: p
      }), f.memoizedState = h, f.childLanes = Ur(
        e,
        c,
        a
      ), t.memoizedState = Wv, o) : (ua(t), a = e.child, e = a.sibling, a = on(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function xr(e, t) {
      return t = Yf(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Yf(e, t) {
      return e = ge(22, e, null, t), e.lanes = 0, e.stateNode = {
        _visibility: xv,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }, e;
    }
    function Hr(e, t, a) {
      return Kd(t, e.child, null, a), e = xr(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Cr(e, t, a) {
      e.lanes |= t;
      var c = e.alternate;
      c !== null && (c.lanes |= t), Bh(
        e.return,
        t,
        a
      );
    }
    function l0(e, t) {
      var a = se(e);
      return e = !a && typeof Mt(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Nr(e, t, a, c, o) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: a,
        tailMode: o
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = c, f.tail = a, f.tailMode = o);
    }
    function a0(e, t, a) {
      var c = t.pendingProps, o = c.revealOrder, f = c.tail;
      if (c = c.children, o !== void 0 && o !== "forwards" && o !== "backwards" && o !== "together" && !_g[o])
        if (_g[o] = !0, typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',
            o
          );
      f === void 0 || $v[f] || (f !== "collapsed" && f !== "hidden" ? ($v[f] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && ($v[f] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards") && c !== void 0 && c !== null && c !== !1)
        if (se(c)) {
          for (var d = 0; d < c.length; d++)
            if (!l0(c[d], d)) break e;
        } else if (d = Mt(c), typeof d == "function") {
          if (d = d.call(c))
            for (var h = d.next(), p = 0; !h.done; h = d.next()) {
              if (!l0(h.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (xt(e, t, c, a), c = hl.current, (c & qy) !== 0)
        c = c & kd | qy, t.flags |= 128;
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Cr(
                e,
                a,
                t
              );
            else if (e.tag === 19)
              Cr(e, a, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
        c &= kd;
      }
      switch (de(hl, c, t), o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && fu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Nr(
            t,
            !1,
            o,
            a,
            f
          );
          break;
        case "backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && fu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Nr(
            t,
            !0,
            a,
            null,
            f
          );
          break;
        case "together":
          Nr(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Tn(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), qa = -1, Xo |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (nl(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = on(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = on(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Br(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && ju(e)));
    }
    function sv(e, t, a) {
      switch (t.tag) {
        case 3:
          Rl(
            t,
            t.stateNode.containerInfo
          ), Xu(
            t,
            rl,
            e.memoizedState.cache
          ), jc();
          break;
        case 27:
        case 5:
          j(t);
          break;
        case 4:
          Rl(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Xu(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var c = t.stateNode;
          c.effectDuration = -0, c.passiveEffectDuration = -0;
          break;
        case 13:
          if (c = t.memoizedState, c !== null)
            return c.dehydrated !== null ? (ua(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Nm(
              e,
              t,
              a
            ) : (ua(t), e = Tn(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          ua(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (c = (a & t.childLanes) !== 0, c || (nl(
            e,
            t,
            a,
            !1
          ), c = (a & t.childLanes) !== 0), o) {
            if (c)
              return a0(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), de(
            hl,
            hl.current,
            t
          ), c) break;
          return null;
        case 22:
        case 23:
          return t.lanes = 0, zr(e, t, a);
        case 24:
          Xu(
            t,
            rl,
            e.memoizedState.cache
          );
      }
      return Tn(e, t, a);
    }
    function qr(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = tr(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var c = t.return;
        if (c === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === c.child)
          c.child = a;
        else {
          var o = c.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = c.deletions, t === null ? (c.deletions = [e], c.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          Tl = !0;
        else {
          if (!Br(e, a) && (t.flags & 128) === 0)
            return Tl = !1, sv(
              e,
              t,
              a
            );
          Tl = (e.flags & 131072) !== 0;
        }
      else
        Tl = !1, (c = Ve) && (ja(), c = (t.flags & 1048576) !== 0), c && (c = t.index, ja(), zm(t, vp, c));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (c = t.pendingProps, e = Go(t.elementType), t.type = e, typeof e == "function")
            Dh(e) ? (c = Iu(
              e,
              c
            ), t.tag = 1, t.type = e = Gc(e), t = e0(
              null,
              t,
              e,
              c,
              a
            )) : (t.tag = 0, Mr(t, e), t.type = e = Gc(e), t = Or(
              null,
              t,
              e,
              c,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === vu) {
                t.tag = 11, t.type = e = zh(e), t = Rr(
                  null,
                  t,
                  e,
                  c,
                  a
                );
                break e;
              } else if (o === cs) {
                t.tag = 14, t = Sn(
                  null,
                  t,
                  e,
                  c,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === sa && (t = " Did you wrap a component in React.lazy() more than once?"), e = qe(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + e + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Or(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return c = t.type, o = Iu(
            c,
            t.pendingProps
          ), e0(
            e,
            t,
            c,
            o,
            a
          );
        case 3:
          e: {
            if (Rl(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            c = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Lu(e, t), Li(t, c, null, a);
            var d = t.memoizedState;
            if (c = d.cache, Xu(t, rl, c), c !== f.cache && qh(
              t,
              [rl],
              a,
              !0
            ), hn(), c = d.element, f.isDehydrated)
              if (f = {
                element: c,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = t0(
                  e,
                  t,
                  c,
                  a
                );
                break e;
              } else if (c !== o) {
                o = aa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), ji(o), t = t0(
                  e,
                  t,
                  c,
                  a
                );
                break e;
              } else {
                switch (e = t.stateNode.containerInfo, e.nodeType) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                }
                for (Ht = ol(e.firstChild), ha = t, Ve = !0, Ts = null, Ei = !1, Qn = null, gc = !0, e = Sg(
                  t,
                  null,
                  c,
                  a
                ), t.child = e; e; )
                  e.flags = e.flags & -3 | 4096, e = e.sibling;
              }
            else {
              if (jc(), c === o) {
                t = Tn(
                  e,
                  t,
                  a
                );
                break e;
              }
              xt(
                e,
                t,
                c,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Bf(e, t), e === null ? (e = pu(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = e : Ve || (e = t.type, a = t.pendingProps, c = Lt(
            Bn.current
          ), c = De(
            c
          ).createElement(e), c[Sl] = t, c[Fl] = a, Et(c, e, a), wt(c), t.stateNode = c) : t.memoizedState = pu(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return j(t), e === null && Ve && (c = Lt(Bn.current), o = A(), c = t.stateNode = Q0(
            t.type,
            t.pendingProps,
            c,
            o,
            !1
          ), Ei || (o = We(
            c,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Qa(t, 0).serverProps = o)), ha = t, gc = !0, o = Ht, Hn(t.type) ? (b1 = o, Ht = ol(
            c.firstChild
          )) : Ht = o), xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), Bf(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && Ve && (f = A(), c = Js(
            t.type,
            f.ancestorInfo
          ), o = Ht, (d = !o) || (d = uc(
            o,
            t.type,
            t.pendingProps,
            gc
          ), d !== null ? (t.stateNode = d, Ei || (f = We(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Qa(t, 0).serverProps = f)), ha = t, Ht = ol(
            d.firstChild
          ), gc = !1, f = !0) : f = !1, d = !f), d && (c && Uh(t, o), fn(t))), j(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, c = f.children, xn(o, f) ? c = null : d !== null && xn(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = Ku(
            e,
            t,
            Aa,
            null,
            null,
            a
          ), Wy._currentValue = o), Bf(e, t), xt(
            e,
            t,
            c,
            a
          ), t.child;
        case 6:
          return e === null && Ve && (e = t.pendingProps, a = A(), c = a.ancestorInfo.current, e = c != null ? uf(
            e,
            c.tag,
            a.ancestorInfo.implicitRootScope
          ) : !0, a = Ht, (c = !a) || (c = il(
            a,
            t.pendingProps,
            gc
          ), c !== null ? (t.stateNode = c, ha = t, Ht = null, c = !0) : c = !1, c = !c), c && (e && Uh(t, a), fn(t))), null;
        case 13:
          return Nm(e, t, a);
        case 4:
          return Rl(
            t,
            t.stateNode.containerInfo
          ), c = t.pendingProps, e === null ? t.child = Kd(
            t,
            null,
            c,
            a
          ) : xt(
            e,
            t,
            c,
            a
          ), t.child;
        case 11:
          return Rr(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return xt(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, c = t.stateNode, c.effectDuration = -0, c.passiveEffectDuration = -0, xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return c = t.type, o = t.pendingProps, f = o.value, "value" in o || Gg || (Gg = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Xu(t, c, f), xt(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, c = t.pendingProps.children, typeof c != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Qu(t), o = lt(o), tl(t), c = Zv(
            c,
            o,
            void 0
          ), ga(), t.flags |= 1, xt(
            e,
            t,
            c,
            a
          ), t.child;
        case 14:
          return Sn(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Nf(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return a0(
            e,
            t,
            a
          );
        case 31:
          return c = t.pendingProps, a = t.mode, c = {
            mode: c.mode,
            children: c.children
          }, e === null ? (e = Yf(
            c,
            a
          ), e.ref = t.ref, t.child = e, e.return = t, t = e) : (e = on(e.child, c), e.ref = t.ref, t.child = e, e.return = t, t = e), t;
        case 22:
          return zr(e, t, a);
        case 24:
          return Qu(t), c = lt(rl), e === null ? (o = Gh(), o === null && (o = at, f = pf(), o.pooledCache = f, Qc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: c,
            cache: o
          }, Xl(t), Xu(t, rl, o)) : ((e.lanes & a) !== 0 && (Lu(e, t), Li(t, null, null, a), hn()), o = e.memoizedState, f = t.memoizedState, o.parent !== c ? (o = {
            parent: c,
            cache: c
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Xu(t, rl, c)) : (c = f.cache, Xu(t, rl, c), c !== o.cache && qh(
            t,
            [rl],
            a,
            !0
          ))), xt(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Ll(e) {
      e.flags |= 4;
    }
    function _f(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & Kn) !== Ys)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Ff(t)) {
        if (t = Jn.current, t !== null && ((Me & 4194048) === Me ? Sc !== null : (Me & 62914560) !== Me && (Me & 536870912) === 0 || t !== Sc))
          throw Hy = Yv, k1;
        e.flags |= 8192;
      }
    }
    function Gf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Wo() : 536870912, e.lanes |= t, xs |= t);
    }
    function Pu(e, t) {
      if (!Ve)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var c = null; a !== null; )
              a.alternate !== null && (c = a), a = a.sibling;
            c === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : c.sibling = null;
        }
    }
    function Je(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, c = 0;
      if (t)
        if ((e.mode & Nl) !== ft) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, c |= f.subtreeFlags & 65011712, c |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, c |= o.subtreeFlags & 65011712, c |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & Nl) !== ft) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, c |= d.subtreeFlags, c |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, c |= o.subtreeFlags, c |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= c, e.childLanes = a, t;
    }
    function Bm(e, t, a) {
      var c = t.pendingProps;
      switch (ar(t), t.tag) {
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
          return Je(t), null;
        case 1:
          return Je(t), null;
        case 3:
          return a = t.stateNode, c = null, e !== null && (c = e.memoizedState.cache), t.memoizedState.cache !== c && (t.flags |= 2048), lu(rl, t), Bt(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Xc(t) ? (Nh(), Ll(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ch())), Je(t), null;
        case 26:
          return a = t.memoizedState, e === null ? (Ll(t), a !== null ? (Je(t), _f(
            t,
            a
          )) : (Je(t), t.flags &= -16777217)) : a ? a !== e.memoizedState ? (Ll(t), Je(t), _f(
            t,
            a
          )) : (Je(t), t.flags &= -16777217) : (e.memoizedProps !== c && Ll(t), Je(t), t.flags &= -16777217), null;
        case 27:
          Z(t), a = Lt(Bn.current);
          var o = t.type;
          if (e !== null && t.stateNode != null)
            e.memoizedProps !== c && Ll(t);
          else {
            if (!c) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Je(t), null;
            }
            e = A(), Xc(t) ? xh(t) : (e = Q0(
              o,
              c,
              a,
              e,
              !0
            ), t.stateNode = e, Ll(t));
          }
          return Je(t), null;
        case 5:
          if (Z(t), a = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== c && Ll(t);
          else {
            if (!c) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Je(t), null;
            }
            if (o = A(), Xc(t))
              xh(t);
            else {
              switch (e = Lt(Bn.current), Js(a, o.ancestorInfo), o = o.context, e = De(e), o) {
                case uh:
                  e = e.createElementNS(Bo, a);
                  break;
                case Lp:
                  e = e.createElementNS(
                    vs,
                    a
                  );
                  break;
                default:
                  switch (a) {
                    case "svg":
                      e = e.createElementNS(
                        Bo,
                        a
                      );
                      break;
                    case "math":
                      e = e.createElementNS(
                        vs,
                        a
                      );
                      break;
                    case "script":
                      e = e.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                      break;
                    case "select":
                      e = typeof c.is == "string" ? e.createElement("select", { is: c.is }) : e.createElement("select"), c.multiple ? e.multiple = !0 : c.size && (e.size = c.size);
                      break;
                    default:
                      e = typeof c.is == "string" ? e.createElement(a, {
                        is: c.is
                      }) : e.createElement(a), a.indexOf("-") === -1 && (a !== a.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        a
                      ), Object.prototype.toString.call(e) !== "[object HTMLUnknownElement]" || bu.call(
                        a2,
                        a
                      ) || (a2[a] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        a
                      )));
                  }
              }
              e[Sl] = t, e[Fl] = c;
              e: for (o = t.child; o !== null; ) {
                if (o.tag === 5 || o.tag === 6)
                  e.appendChild(o.stateNode);
                else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                  o.child.return = o, o = o.child;
                  continue;
                }
                if (o === t) break e;
                for (; o.sibling === null; ) {
                  if (o.return === null || o.return === t)
                    break e;
                  o = o.return;
                }
                o.sibling.return = o.return, o = o.sibling;
              }
              t.stateNode = e;
              e: switch (Et(e, a, c), a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  e = !!c.autoFocus;
                  break e;
                case "img":
                  e = !0;
                  break e;
                default:
                  e = !1;
              }
              e && Ll(t);
            }
          }
          return Je(t), t.flags &= -16777217, null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== c && Ll(t);
          else {
            if (typeof c != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Lt(Bn.current), a = A(), Xc(t)) {
              e = t.stateNode, a = t.memoizedProps, o = !Ei, c = null;
              var f = ha;
              if (f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = id(
                      e,
                      a,
                      c
                    ), o !== null && (Qa(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    c = f.memoizedProps, o && (o = id(
                      e,
                      a,
                      c
                    ), o !== null && (Qa(
                      t,
                      0
                    ).serverProps = o));
                }
              e[Sl] = t, e = !!(e.nodeValue === a || c !== null && c.suppressHydrationWarning === !0 || C0(e.nodeValue, a)), e || fn(t);
            } else
              o = a.ancestorInfo.current, o != null && uf(
                c,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = De(e).createTextNode(
                c
              ), e[Sl] = t, t.stateNode = e;
          }
          return Je(t), null;
        case 13:
          if (c = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = Xc(t), c !== null && c.dehydrated !== null) {
              if (e === null) {
                if (!o)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                o[Sl] = t, Je(t), (t.mode & Nl) !== ft && c !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Nh(), jc(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4, Je(t), (t.mode & Nl) !== ft && c !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Ch(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (ca(t), t) : (ca(t), null);
          }
          return ca(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & Nl) !== ft && rn(t), t) : (a = c !== null, e = e !== null && e.memoizedState !== null, a && (c = t.child, o = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (o = c.alternate.memoizedState.cachePool.pool), f = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (f = c.memoizedState.cachePool.pool), f !== o && (c.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), Gf(t, t.updateQueue), Je(t), (t.mode & Nl) !== ft && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return Bt(t), e === null && x0(
            t.stateNode.containerInfo
          ), Je(t), null;
        case 10:
          return lu(t.type, t), Je(t), null;
        case 19:
          if (Xe(hl, t), o = t.memoizedState, o === null) return Je(t), null;
          if (c = (t.flags & 128) !== 0, f = o.rendering, f === null)
            if (c) Pu(o, !1);
            else {
              if (Ct !== Di || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = fu(e), f !== null) {
                    for (t.flags |= 128, Pu(o, !1), e = f.updateQueue, t.updateQueue = e, Gf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Oh(a, e), a = a.sibling;
                    return de(
                      hl,
                      hl.current & kd | qy,
                      t
                    ), t.child;
                  }
                  e = e.sibling;
                }
              o.tail !== null && qn() > Cp && (t.flags |= 128, c = !0, Pu(o, !1), t.lanes = 4194304);
            }
          else {
            if (!c)
              if (e = fu(f), e !== null) {
                if (t.flags |= 128, c = !0, e = e.updateQueue, t.updateQueue = e, Gf(t, e), Pu(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Ve)
                  return Je(t), null;
              } else
                2 * qn() - o.renderingStartTime > Cp && a !== 536870912 && (t.flags |= 128, c = !0, Pu(o, !1), t.lanes = 4194304);
            o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
          }
          return o.tail !== null ? (e = o.tail, o.rendering = e, o.tail = e.sibling, o.renderingStartTime = qn(), e.sibling = null, a = hl.current, a = c ? a & kd | qy : a & kd, de(hl, a, t), e) : (Je(t), null);
        case 22:
        case 23:
          return ca(t), Ja(t), c = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== c && (t.flags |= 8192) : c && (t.flags |= 8192), c ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Je(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Je(t), a = t.updateQueue, a !== null && Gf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), c = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (c = t.memoizedState.cachePool.pool), c !== a && (t.flags |= 2048), e !== null && Xe(Rs, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), lu(rl, t), Je(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function qm(e, t) {
      switch (ar(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Nl) !== ft && rn(t), t) : null;
        case 3:
          return lu(rl, t), Bt(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Z(t), null;
        case 13:
          if (ca(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            jc();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Nl) !== ft && rn(t), t) : null;
        case 19:
          return Xe(hl, t), null;
        case 4:
          return Bt(t), null;
        case 10:
          return lu(t.type, t), null;
        case 22:
        case 23:
          return ca(t), Ja(t), e !== null && Xe(Rs, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & Nl) !== ft && rn(t), t) : null;
        case 24:
          return lu(rl, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function n0(e, t) {
      switch (ar(t), t.tag) {
        case 3:
          lu(rl, t), Bt(t);
          break;
        case 26:
        case 27:
        case 5:
          Z(t);
          break;
        case 4:
          Bt(t);
          break;
        case 13:
          ca(t);
          break;
        case 19:
          Xe(hl, t);
          break;
        case 10:
          lu(t.type, t);
          break;
        case 22:
        case 23:
          ca(t), Ja(t), e !== null && Xe(Rs, t);
          break;
        case 24:
          lu(rl, t);
      }
    }
    function Wa(e) {
      return (e.mode & Nl) !== ft;
    }
    function u0(e, t) {
      Wa(e) ? (La(), Fc(t, e), Sa()) : Fc(t, e);
    }
    function Yr(e, t, a) {
      Wa(e) ? (La(), Ic(
        a,
        e,
        t
      ), Sa()) : Ic(
        a,
        e,
        t
      );
    }
    function Fc(e, t) {
      try {
        var a = t.updateQueue, c = a !== null ? a.lastEffect : null;
        if (c !== null) {
          var o = c.next;
          a = o;
          do {
            if ((a.tag & e) === e && ((e & dl) !== Zn ? k !== null && typeof k.markComponentPassiveEffectMountStarted == "function" && k.markComponentPassiveEffectMountStarted(
              t
            ) : (e & Bl) !== Zn && k !== null && typeof k.markComponentLayoutEffectMountStarted == "function" && k.markComponentLayoutEffectMountStarted(
              t
            ), c = void 0, (e & ya) !== Zn && (ah = !0), c = W(
              t,
              yb,
              a
            ), (e & ya) !== Zn && (ah = !1), (e & dl) !== Zn ? k !== null && typeof k.markComponentPassiveEffectMountStopped == "function" && k.markComponentPassiveEffectMountStopped() : (e & Bl) !== Zn && k !== null && typeof k.markComponentLayoutEffectMountStopped == "function" && k.markComponentLayoutEffectMountStopped(), c !== void 0 && typeof c != "function")) {
              var f = void 0;
              f = (a.tag & Bl) !== 0 ? "useLayoutEffect" : (a.tag & ya) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = c === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof c.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + c, W(
                t,
                function(h, p) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    p
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        ce(t, t.return, h);
      }
    }
    function Ic(e, t, a) {
      try {
        var c = t.updateQueue, o = c !== null ? c.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          c = f;
          do {
            if ((c.tag & e) === e) {
              var d = c.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & dl) !== Zn ? k !== null && typeof k.markComponentPassiveEffectUnmountStarted == "function" && k.markComponentPassiveEffectUnmountStarted(
                t
              ) : (e & Bl) !== Zn && k !== null && typeof k.markComponentLayoutEffectUnmountStarted == "function" && k.markComponentLayoutEffectUnmountStarted(
                t
              ), (e & ya) !== Zn && (ah = !0), o = t, W(
                o,
                mb,
                o,
                a,
                h
              ), (e & ya) !== Zn && (ah = !1), (e & dl) !== Zn ? k !== null && typeof k.markComponentPassiveEffectUnmountStopped == "function" && k.markComponentPassiveEffectUnmountStopped() : (e & Bl) !== Zn && k !== null && typeof k.markComponentLayoutEffectUnmountStopped == "function" && k.markComponentLayoutEffectUnmountStopped());
            }
            c = c.next;
          } while (c !== f);
        }
      } catch (p) {
        ce(t, t.return, p);
      }
    }
    function c0(e, t) {
      Wa(e) ? (La(), Fc(t, e), Sa()) : Fc(t, e);
    }
    function Vf(e, t, a) {
      Wa(e) ? (La(), Ic(
        a,
        e,
        t
      ), Sa()) : Ic(
        a,
        e,
        t
      );
    }
    function i0(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Wd || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          te(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          te(e) || "instance"
        ));
        try {
          W(
            e,
            Um,
            t,
            a
          );
        } catch (c) {
          ce(e, e.return, c);
        }
      }
    }
    function Ym(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function rv(e, t) {
      var a = t.memoizedProps, c = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Wd || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        te(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        te(e) || "instance"
      ));
      try {
        var o = Iu(
          e.type,
          a,
          e.elementType === e.type
        ), f = W(
          e,
          Ym,
          t,
          o,
          c
        );
        a = Vg, f !== void 0 || a.has(e.type) || (a.add(e.type), W(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            te(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        ce(e, e.return, d);
      }
    }
    function _r(e, t, a) {
      a.props = Iu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Wa(e) ? (La(), W(
        e,
        dg,
        e,
        t,
        a
      ), Sa()) : W(
        e,
        dg,
        e,
        t,
        a
      );
    }
    function _m(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (Wa(e))
            try {
              La(), e.refCleanup = t(a);
            } finally {
              Sa();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            te(e)
          ), t.current = a;
      }
    }
    function no(e, t) {
      try {
        W(e, _m, e);
      } catch (a) {
        ce(e, t, a);
      }
    }
    function Ma(e, t) {
      var a = e.ref, c = e.refCleanup;
      if (a !== null)
        if (typeof c == "function")
          try {
            if (Wa(e))
              try {
                La(), W(e, c);
              } finally {
                Sa(e);
              }
            else W(e, c);
          } catch (o) {
            ce(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Wa(e))
              try {
                La(), W(e, a, null);
              } finally {
                Sa(e);
              }
            else W(e, a, null);
          } catch (o) {
            ce(e, t, o);
          }
        else a.current = null;
    }
    function o0(e, t, a, c) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", Sp && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(
        e.memoizedProps.id,
        t,
        c,
        a
      );
    }
    function Gm(e, t, a, c) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", Sp && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        c,
        a
      );
    }
    function Vm(e) {
      var t = e.type, a = e.memoizedProps, c = e.stateNode;
      try {
        W(
          e,
          yu,
          c,
          t,
          a,
          e
        );
      } catch (o) {
        ce(e, e.return, o);
      }
    }
    function f0(e, t, a) {
      try {
        W(
          e,
          At,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (c) {
        ce(e, e.return, c);
      }
    }
    function s0(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Hn(e.type) || e.tag === 4;
    }
    function Pc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || s0(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Hn(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Xf(e, t, a) {
      var c = e.tag;
      if (c === 5 || c === 6)
        e = e.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = hu));
      else if (c !== 4 && (c === 27 && Hn(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (Xf(e, t, a), e = e.sibling; e !== null; )
          Xf(e, t, a), e = e.sibling;
    }
    function ei(e, t, a) {
      var c = e.tag;
      if (c === 5 || c === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (c !== 4 && (c === 27 && Hn(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (ei(e, t, a), e = e.sibling; e !== null; )
          ei(e, t, a), e = e.sibling;
    }
    function Xm(e) {
      for (var t, a = e.return; a !== null; ) {
        if (s0(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = Pc(e), ei(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (mu(a), t.flags &= -33), t = Pc(e), ei(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = Pc(e), Xf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function r0(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        W(
          e,
          fa,
          e.type,
          a,
          t,
          e
        );
      } catch (c) {
        ce(e, e.return, c);
      }
    }
    function Gr(e, t) {
      if (e = e.containerInfo, p1 = kp, e = Sm(e), Ah(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var c = a.getSelection && a.getSelection();
            if (c && c.rangeCount !== 0) {
              a = c.anchorNode;
              var o = c.anchorOffset, f = c.focusNode;
              c = c.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, p = -1, v = 0, U = 0, B = e, O = null;
              t: for (; ; ) {
                for (var Y; B !== a || o !== 0 && B.nodeType !== 3 || (h = d + o), B !== f || c !== 0 && B.nodeType !== 3 || (p = d + c), B.nodeType === 3 && (d += B.nodeValue.length), (Y = B.firstChild) !== null; )
                  O = B, B = Y;
                for (; ; ) {
                  if (B === e) break t;
                  if (O === a && ++v === o && (h = d), O === f && ++U === c && (p = d), (Y = B.nextSibling) !== null) break;
                  B = O, O = B.parentNode;
                }
                B = Y;
              }
              a = h === -1 || p === -1 ? null : { start: h, end: p };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (v1 = {
        focusedElem: e,
        selectionRange: a
      }, kp = !1, El = t; El !== null; )
        if (t = El, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
          e.return = t, El = e;
        else
          for (; El !== null; ) {
            switch (e = t = El, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && rv(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    po(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        po(e);
                        break;
                      default:
                        e.textContent = "";
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
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, El = e;
              break;
            }
            El = t.return;
          }
    }
    function d0(e, t, a) {
      var c = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          En(e, a), c & 4 && u0(a, Bl | Ln);
          break;
        case 1:
          if (En(e, a), c & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Wd || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                te(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                te(a) || "instance"
              )), Wa(a) ? (La(), W(
                a,
                Lv,
                a,
                e
              ), Sa()) : W(
                a,
                Lv,
                a,
                e
              );
            else {
              var o = Iu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Wd || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                te(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                te(a) || "instance"
              )), Wa(a) ? (La(), W(
                a,
                fg,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Sa()) : W(
                a,
                fg,
                a,
                e,
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          c & 64 && i0(a), c & 512 && no(a, a.return);
          break;
        case 3:
          if (t = Za(), En(e, a), c & 64 && (c = a.updateQueue, c !== null)) {
            if (o = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  o = a.child.stateNode;
                  break;
                case 1:
                  o = a.child.stateNode;
              }
            try {
              W(
                a,
                Um,
                c,
                o
              );
            } catch (d) {
              ce(a, a.return, d);
            }
          }
          e.effectDuration += Zu(t);
          break;
        case 27:
          t === null && c & 4 && r0(a);
        case 26:
        case 5:
          En(e, a), t === null && c & 4 && Vm(a), c & 512 && no(a, a.return);
          break;
        case 12:
          if (c & 4) {
            c = Za(), En(e, a), e = a.stateNode, e.effectDuration += Zc(c);
            try {
              W(
                a,
                o0,
                a,
                t,
                bp,
                e.effectDuration
              );
            } catch (d) {
              ce(a, a.return, d);
            }
          } else En(e, a);
          break;
        case 13:
          En(e, a), c & 4 && uo(e, a), c & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = kf.bind(
            null,
            a
          ), vo(e, a))));
          break;
        case 22:
          if (c = a.memoizedState !== null || zi, !c) {
            t = t !== null && t.memoizedState !== null || jt, o = zi;
            var f = jt;
            zi = c, (jt = t) && !f ? An(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ) : En(e, a), zi = o, jt = f;
          }
          break;
        case 30:
          break;
        default:
          En(e, a);
      }
    }
    function h0(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, h0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ni(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function su(e, t, a) {
      for (a = a.child; a !== null; )
        ti(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function ti(e, t, a) {
      if (fl && typeof fl.onCommitFiberUnmount == "function")
        try {
          fl.onCommitFiberUnmount(dc, a);
        } catch (f) {
          Wl || (Wl = !0, console.error(
            "React instrumentation encountered an error: %s",
            f
          ));
        }
      switch (a.tag) {
        case 26:
          jt || Ma(a, t), su(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          jt || Ma(a, t);
          var c = Pt, o = Ya;
          Hn(a.type) && (Pt = a.stateNode, Ya = !1), su(
            e,
            t,
            a
          ), W(
            a,
            bo,
            a.stateNode
          ), Pt = c, Ya = o;
          break;
        case 5:
          jt || Ma(a, t);
        case 6:
          if (c = Pt, o = Ya, Pt = null, su(
            e,
            t,
            a
          ), Pt = c, Ya = o, Pt !== null)
            if (Ya)
              try {
                W(
                  a,
                  yo,
                  Pt,
                  a.stateNode
                );
              } catch (f) {
                ce(
                  a,
                  t,
                  f
                );
              }
            else
              try {
                W(
                  a,
                  Ha,
                  Pt,
                  a.stateNode
                );
              } catch (f) {
                ce(
                  a,
                  t,
                  f
                );
              }
          break;
        case 18:
          Pt !== null && (Ya ? (e = Pt, mo(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), yi(e)) : mo(Pt, a.stateNode));
          break;
        case 4:
          c = Pt, o = Ya, Pt = a.stateNode.containerInfo, Ya = !0, su(
            e,
            t,
            a
          ), Pt = c, Ya = o;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          jt || Ic(
            ya,
            a,
            t
          ), jt || Yr(
            a,
            t,
            Bl
          ), su(
            e,
            t,
            a
          );
          break;
        case 1:
          jt || (Ma(a, t), c = a.stateNode, typeof c.componentWillUnmount == "function" && _r(
            a,
            t,
            c
          )), su(
            e,
            t,
            a
          );
          break;
        case 21:
          su(
            e,
            t,
            a
          );
          break;
        case 22:
          jt = (c = jt) || a.memoizedState !== null, su(
            e,
            t,
            a
          ), jt = c;
          break;
        default:
          su(
            e,
            t,
            a
          );
      }
    }
    function uo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          W(
            t,
            oa,
            e
          );
        } catch (a) {
          ce(t, t.return, a);
        }
    }
    function Vr(e) {
      switch (e.tag) {
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Xg()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Xg()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function li(e, t) {
      var a = Vr(e);
      t.forEach(function(c) {
        var o = ac.bind(null, e, c);
        if (!a.has(c)) {
          if (a.add(c), zt)
            if (Fd !== null && Id !== null)
              ro(Id, Fd);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          c.then(o, o);
        }
      });
    }
    function vl(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var c = 0; c < a.length; c++) {
          var o = e, f = t, d = a[c], h = f;
          e: for (; h !== null; ) {
            switch (h.tag) {
              case 27:
                if (Hn(h.type)) {
                  Pt = h.stateNode, Ya = !1;
                  break e;
                }
                break;
              case 5:
                Pt = h.stateNode, Ya = !1;
                break e;
              case 3:
              case 4:
                Pt = h.stateNode.containerInfo, Ya = !0;
                break e;
            }
            h = h.return;
          }
          if (Pt === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          ti(o, f, d), Pt = null, Ya = !1, o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13878)
        for (t = t.child; t !== null; )
          y0(t, e), t = t.sibling;
    }
    function y0(e, t) {
      var a = e.alternate, c = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vl(t, e), wl(e), c & 4 && (Ic(
            ya | Ln,
            e,
            e.return
          ), Fc(ya | Ln, e), Yr(
            e,
            e.return,
            Bl | Ln
          ));
          break;
        case 1:
          vl(t, e), wl(e), c & 512 && (jt || a === null || Ma(a, a.return)), c & 64 && zi && (e = e.updateQueue, e !== null && (c = e.callbacks, c !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? c : a.concat(c))));
          break;
        case 26:
          var o = Ou;
          if (vl(t, e), wl(e), c & 512 && (jt || a === null || Ma(a, a.return)), c & 4)
            if (t = a !== null ? a.memoizedState : null, c = e.memoizedState, a === null)
              if (c === null)
                if (e.stateNode === null) {
                  e: {
                    c = e.type, a = e.memoizedProps, t = o.ownerDocument || o;
                    t: switch (c) {
                      case "title":
                        o = t.getElementsByTagName("title")[0], (!o || o[xo] || o[Sl] || o.namespaceURI === Bo || o.hasAttribute("itemprop")) && (o = t.createElement(c), t.head.insertBefore(
                          o,
                          t.querySelector("head > title")
                        )), Et(o, c, a), o[Sl] = e, wt(o), c = o;
                        break e;
                      case "link":
                        var f = J0(
                          "link",
                          "href",
                          t
                        ).get(c + (a.href || ""));
                        if (f) {
                          for (var d = 0; d < f.length; d++)
                            if (o = f[d], o.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && o.getAttribute("rel") === (a.rel == null ? null : a.rel) && o.getAttribute("title") === (a.title == null ? null : a.title) && o.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(c), Et(o, c, a), t.head.appendChild(o);
                        break;
                      case "meta":
                        if (f = J0(
                          "meta",
                          "content",
                          t
                        ).get(c + (a.content || ""))) {
                          for (d = 0; d < f.length; d++)
                            if (o = f[d], J(
                              a.content,
                              "content"
                            ), o.getAttribute("content") === (a.content == null ? null : "" + a.content) && o.getAttribute("name") === (a.name == null ? null : a.name) && o.getAttribute("property") === (a.property == null ? null : a.property) && o.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && o.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              f.splice(d, 1);
                              break t;
                            }
                        }
                        o = t.createElement(c), Et(o, c, a), t.head.appendChild(o);
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + c + '". This is a bug in React.'
                        );
                    }
                    o[Sl] = e, wt(o), c = o;
                  }
                  e.stateNode = c;
                } else
                  K0(
                    o,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = od(
                  o,
                  c,
                  e.memoizedProps
                );
            else
              t !== c ? (t === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : t.count--, c === null ? K0(
                o,
                e.type,
                e.stateNode
              ) : od(
                o,
                c,
                e.memoizedProps
              )) : c === null && e.stateNode !== null && f0(
                e,
                e.memoizedProps,
                a.memoizedProps
              );
          break;
        case 27:
          vl(t, e), wl(e), c & 512 && (jt || a === null || Ma(a, a.return)), a !== null && c & 4 && f0(
            e,
            e.memoizedProps,
            a.memoizedProps
          );
          break;
        case 5:
          if (vl(t, e), wl(e), c & 512 && (jt || a === null || Ma(a, a.return)), e.flags & 32) {
            t = e.stateNode;
            try {
              W(e, mu, t);
            } catch (U) {
              ce(e, e.return, U);
            }
          }
          c & 4 && e.stateNode != null && (t = e.memoizedProps, f0(
            e,
            t,
            a !== null ? a.memoizedProps : t
          )), c & 1024 && (Fv = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (vl(t, e), wl(e), c & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            c = e.memoizedProps, a = a !== null ? a.memoizedProps : c, t = e.stateNode;
            try {
              W(
                e,
                si,
                t,
                a,
                c
              );
            } catch (U) {
              ce(e, e.return, U);
            }
          }
          break;
        case 3:
          if (o = Za(), wp = null, f = Ou, Ou = Wf(t.containerInfo), vl(t, e), Ou = f, wl(e), c & 4 && a !== null && a.memoizedState.isDehydrated)
            try {
              W(
                e,
                j0,
                t.containerInfo
              );
            } catch (U) {
              ce(e, e.return, U);
            }
          Fv && (Fv = !1, ai(e)), t.effectDuration += Zu(o);
          break;
        case 4:
          c = Ou, Ou = Wf(
            e.stateNode.containerInfo
          ), vl(t, e), wl(e), Ou = c;
          break;
        case 12:
          c = Za(), vl(t, e), wl(e), e.stateNode.effectDuration += Zc(c);
          break;
        case 13:
          vl(t, e), wl(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (a1 = qn()), c & 4 && (c = e.updateQueue, c !== null && (e.updateQueue = null, li(e, c)));
          break;
        case 22:
          o = e.memoizedState !== null;
          var h = a !== null && a.memoizedState !== null, p = zi, v = jt;
          if (zi = p || o, jt = v || h, vl(t, e), jt = v, zi = p, wl(e), c & 8192)
            e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | xv, o && (a === null || h || zi || jt || gl(e)), a = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (a === null) {
                  h = a = t;
                  try {
                    f = h.stateNode, o ? W(h, kl, f) : W(
                      h,
                      V0,
                      h.stateNode,
                      h.memoizedProps
                    );
                  } catch (U) {
                    ce(h, h.return, U);
                  }
                }
              } else if (t.tag === 6) {
                if (a === null) {
                  h = t;
                  try {
                    d = h.stateNode, o ? W(h, G0, d) : W(
                      h,
                      ud,
                      d,
                      h.memoizedProps
                    );
                  } catch (U) {
                    ce(h, h.return, U);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                a === t && (a = null), t = t.return;
              }
              a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
            }
          c & 4 && (c = e.updateQueue, c !== null && (a = c.retryQueue, a !== null && (c.retryQueue = null, li(e, a))));
          break;
        case 19:
          vl(t, e), wl(e), c & 4 && (c = e.updateQueue, c !== null && (e.updateQueue = null, li(e, c)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          vl(t, e), wl(e);
      }
    }
    function wl(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          W(e, Xm, e);
        } catch (a) {
          ce(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function ai(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          ai(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function En(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          d0(e, t.alternate, t), t = t.sibling;
    }
    function ia(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Yr(
            e,
            e.return,
            Bl
          ), gl(e);
          break;
        case 1:
          Ma(e, e.return);
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _r(
            e,
            e.return,
            t
          ), gl(e);
          break;
        case 27:
          W(
            e,
            bo,
            e.stateNode
          );
        case 26:
        case 5:
          Ma(e, e.return), gl(e);
          break;
        case 22:
          e.memoizedState === null && gl(e);
          break;
        case 30:
          gl(e);
          break;
        default:
          gl(e);
      }
    }
    function gl(e) {
      for (e = e.child; e !== null; )
        ia(e), e = e.sibling;
    }
    function ru(e, t, a, c) {
      var o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          An(
            e,
            a,
            c
          ), u0(a, Bl);
          break;
        case 1:
          if (An(
            e,
            a,
            c
          ), t = a.stateNode, typeof t.componentDidMount == "function" && W(
            a,
            Lv,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              W(
                a,
                wi,
                t,
                e
              );
            } catch (f) {
              ce(a, a.return, f);
            }
          }
          c && o & 64 && i0(a), no(a, a.return);
          break;
        case 27:
          r0(a);
        case 26:
        case 5:
          An(
            e,
            a,
            c
          ), c && t === null && o & 4 && Vm(a), no(a, a.return);
          break;
        case 12:
          if (c && o & 4) {
            o = Za(), An(
              e,
              a,
              c
            ), c = a.stateNode, c.effectDuration += Zc(o);
            try {
              W(
                a,
                o0,
                a,
                t,
                bp,
                c.effectDuration
              );
            } catch (f) {
              ce(a, a.return, f);
            }
          } else
            An(
              e,
              a,
              c
            );
          break;
        case 13:
          An(
            e,
            a,
            c
          ), c && o & 4 && uo(e, a);
          break;
        case 22:
          a.memoizedState === null && An(
            e,
            a,
            c
          ), no(a, a.return);
          break;
        case 30:
          break;
        default:
          An(
            e,
            a,
            c
          );
      }
    }
    function An(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        ru(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function Rn(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Qc(e), a != null && sn(a));
    }
    function Fa(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Qc(t), e != null && sn(e));
    }
    function Ke(e, t, a, c) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; )
          jf(
            e,
            t,
            a,
            c
          ), t = t.sibling;
    }
    function jf(e, t, a, c) {
      var o = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ke(
            e,
            t,
            a,
            c
          ), o & 2048 && c0(t, dl | Ln);
          break;
        case 1:
          Ke(
            e,
            t,
            a,
            c
          );
          break;
        case 3:
          var f = Za();
          Ke(
            e,
            t,
            a,
            c
          ), o & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (Qc(t), a != null && sn(a))), e.passiveEffectDuration += Zu(f);
          break;
        case 12:
          if (o & 2048) {
            o = Za(), Ke(
              e,
              t,
              a,
              c
            ), e = t.stateNode, e.passiveEffectDuration += Zc(o);
            try {
              W(
                t,
                Gm,
                t,
                t.alternate,
                bp,
                e.passiveEffectDuration
              );
            } catch (h) {
              ce(t, t.return, h);
            }
          } else
            Ke(
              e,
              t,
              a,
              c
            );
          break;
        case 13:
          Ke(
            e,
            t,
            a,
            c
          );
          break;
        case 23:
          break;
        case 22:
          f = t.stateNode;
          var d = t.alternate;
          t.memoizedState !== null ? f._visibility & bs ? Ke(
            e,
            t,
            a,
            c
          ) : co(
            e,
            t
          ) : f._visibility & bs ? Ke(
            e,
            t,
            a,
            c
          ) : (f._visibility |= bs, ec(
            e,
            t,
            a,
            c,
            (t.subtreeFlags & 10256) !== 0
          )), o & 2048 && Rn(d, t);
          break;
        case 24:
          Ke(
            e,
            t,
            a,
            c
          ), o & 2048 && Fa(t.alternate, t);
          break;
        default:
          Ke(
            e,
            t,
            a,
            c
          );
      }
    }
    function ec(e, t, a, c, o) {
      for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
        Xr(
          e,
          t,
          a,
          c,
          o
        ), t = t.sibling;
    }
    function Xr(e, t, a, c, o) {
      var f = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          ec(
            e,
            t,
            a,
            c,
            o
          ), c0(t, dl);
          break;
        case 23:
          break;
        case 22:
          var d = t.stateNode;
          t.memoizedState !== null ? d._visibility & bs ? ec(
            e,
            t,
            a,
            c,
            o
          ) : co(
            e,
            t
          ) : (d._visibility |= bs, ec(
            e,
            t,
            a,
            c,
            o
          )), o && f & 2048 && Rn(
            t.alternate,
            t
          );
          break;
        case 24:
          ec(
            e,
            t,
            a,
            c,
            o
          ), o && f & 2048 && Fa(t.alternate, t);
          break;
        default:
          ec(
            e,
            t,
            a,
            c,
            o
          );
      }
    }
    function co(e, t) {
      if (t.subtreeFlags & 10256)
        for (t = t.child; t !== null; ) {
          var a = e, c = t, o = c.flags;
          switch (c.tag) {
            case 22:
              co(
                a,
                c
              ), o & 2048 && Rn(
                c.alternate,
                c
              );
              break;
            case 24:
              co(
                a,
                c
              ), o & 2048 && Fa(
                c.alternate,
                c
              );
              break;
            default:
              co(
                a,
                c
              );
          }
          t = t.sibling;
        }
    }
    function ni(e) {
      if (e.subtreeFlags & Yy)
        for (e = e.child; e !== null; )
          tc(e), e = e.sibling;
    }
    function tc(e) {
      switch (e.tag) {
        case 26:
          ni(e), e.flags & Yy && e.memoizedState !== null && Fm(
            Ou,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          ni(e);
          break;
        case 3:
        case 4:
          var t = Ou;
          Ou = Wf(
            e.stateNode.containerInfo
          ), ni(e), Ou = t;
          break;
        case 22:
          e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Yy, Yy = 16777216, ni(e), Yy = t) : ni(e));
          break;
        default:
          ni(e);
      }
    }
    function Qf(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function io(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var c = t[a];
            El = c, p0(
              c,
              e
            );
          }
        Qf(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          m0(e), e = e.sibling;
    }
    function m0(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          io(e), e.flags & 2048 && Vf(
            e,
            e.return,
            dl | Ln
          );
          break;
        case 3:
          var t = Za();
          io(e), e.stateNode.passiveEffectDuration += Zu(t);
          break;
        case 12:
          t = Za(), io(e), e.stateNode.passiveEffectDuration += Zc(t);
          break;
        case 22:
          t = e.stateNode, e.memoizedState !== null && t._visibility & bs && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Zf(e)) : io(e);
          break;
        default:
          io(e);
      }
    }
    function Zf(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var c = t[a];
            El = c, p0(
              c,
              e
            );
          }
        Qf(e);
      }
      for (e = e.child; e !== null; )
        Lf(e), e = e.sibling;
    }
    function Lf(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Vf(
            e,
            e.return,
            dl
          ), Zf(e);
          break;
        case 22:
          var t = e.stateNode;
          t._visibility & bs && (t._visibility &= -3, Zf(e));
          break;
        default:
          Zf(e);
      }
    }
    function p0(e, t) {
      for (; El !== null; ) {
        var a = El, c = a;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            Vf(
              c,
              t,
              dl
            );
            break;
          case 23:
          case 22:
            c.memoizedState !== null && c.memoizedState.cachePool !== null && (c = c.memoizedState.cachePool.pool, c != null && Qc(c));
            break;
          case 24:
            sn(c.memoizedState.cache);
        }
        if (c = a.child, c !== null) c.return = a, El = c;
        else
          e: for (a = e; El !== null; ) {
            c = El;
            var o = c.sibling, f = c.return;
            if (h0(c), c === a) {
              El = null;
              break e;
            }
            if (o !== null) {
              o.return = f, El = o;
              break e;
            }
            El = f;
          }
      }
    }
    function v0() {
      vb.forEach(function(e) {
        return e();
      });
    }
    function g0() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || H.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function Jl(e) {
      if ((we & ma) !== tn && Me !== 0)
        return Me & -Me;
      var t = H.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), e = As, e !== 0 ? e : O0()) : um();
    }
    function jm() {
      an === 0 && (an = (Me & 536870912) === 0 || Ve ? oh() : 536870912);
      var e = Jn.current;
      return e !== null && (e.flags |= 32), an;
    }
    function St(e, t, a) {
      if (ah && console.error("useInsertionEffect must not schedule updates."), o1 && (Np = !0), (e === at && (ke === Ms || ke === Us) || e.cancelPendingCommit !== null) && (ci(e, 0), du(
        e,
        Me,
        an,
        !1
      )), Hi(e, a), (we & ma) !== 0 && e === at) {
        if (Il)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = Oe && te(Oe) || "Unknown", Wg.has(e) || (Wg.add(e), t = te(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              $g || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), $g = !0);
          }
      } else
        zt && $n(e, t, a), wm(t), e === at && ((we & ma) === tn && (jo |= a), Ct === Os && du(
          e,
          Me,
          an,
          !1
        )), Ua(e);
    }
    function Vt(e, t, a) {
      if ((we & (ma | Mu)) !== tn)
        throw Error("Should not already be working.");
      var c = !a && (t & 124) === 0 && (t & e.expiredLanes) === 0 || $o(e, t), o = c ? S0(e, t) : Lr(e, t, !0), f = c;
      do {
        if (o === Di) {
          th && !c && du(e, t, 0, !1);
          break;
        } else {
          if (a = e.current.alternate, f && !Qm(a)) {
            o = Lr(e, t, !1), f = !1;
            continue;
          }
          if (o === Pd) {
            if (f = t, e.errorRecoveryDisabledLanes & f)
              var d = 0;
            else
              d = e.pendingLanes & -536870913, d = d !== 0 ? d : d & 536870912 ? 536870912 : 0;
            if (d !== 0) {
              t = d;
              e: {
                o = e;
                var h = d;
                d = Qy;
                var p = o.current.memoizedState.isDehydrated;
                if (p && (ci(
                  o,
                  h
                ).flags |= 256), h = Lr(
                  o,
                  h,
                  !1
                ), h !== Pd) {
                  if (t1 && !p) {
                    o.errorRecoveryDisabledLanes |= f, jo |= f, o = Os;
                    break e;
                  }
                  o = pa, pa = d, o !== null && (pa === null ? pa = o : pa.push.apply(
                    pa,
                    o
                  ));
                }
                o = h;
              }
              if (f = !1, o !== Pd) continue;
            }
          }
          if (o === Gy) {
            ci(e, 0), du(e, t, 0, !0);
            break;
          }
          e: {
            switch (c = e, o) {
              case Di:
              case Gy:
                throw Error("Root did not complete. This is a bug in React.");
              case Os:
                if ((t & 4194048) !== t) break;
              case xp:
                du(
                  c,
                  t,
                  an,
                  !Vo
                );
                break e;
              case Pd:
                pa = null;
                break;
              case Iv:
              case jg:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (H.actQueue !== null)
              $r(
                c,
                a,
                t,
                pa,
                Zy,
                Hp,
                an,
                jo,
                xs
              );
            else {
              if ((t & 62914560) === t && (f = a1 + Zg - qn(), 10 < f)) {
                if (du(
                  c,
                  t,
                  an,
                  !Vo
                ), ea(c, 0, !0) !== 0) break e;
                c.timeoutHandle = n2(
                  $t.bind(
                    null,
                    c,
                    a,
                    pa,
                    Zy,
                    Hp,
                    t,
                    an,
                    jo,
                    xs,
                    Vo,
                    o,
                    Tb,
                    w1,
                    0
                  ),
                  f
                );
                break e;
              }
              $t(
                c,
                a,
                pa,
                Zy,
                Hp,
                t,
                an,
                jo,
                xs,
                Vo,
                o,
                bb,
                w1,
                0
              );
            }
          }
        }
        break;
      } while (!0);
      Ua(e);
    }
    function $t(e, t, a, c, o, f, d, h, p, v, U, B, O, Y) {
      if (e.timeoutHandle = qs, B = t.subtreeFlags, (B & 8192 || (B & 16785408) === 16785408) && ($y = { stylesheets: null, count: 0, unsuspend: Wm }, tc(t), B = Im(), B !== null)) {
        e.cancelPendingCommit = B(
          $r.bind(
            null,
            e,
            t,
            f,
            a,
            c,
            o,
            d,
            h,
            p,
            U,
            Sb,
            O,
            Y
          )
        ), du(
          e,
          f,
          d,
          !v
        );
        return;
      }
      $r(
        e,
        t,
        f,
        a,
        c,
        o,
        d,
        h,
        p
      );
    }
    function Qm(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var c = 0; c < a.length; c++) {
            var o = a[c], f = o.getSnapshot;
            o = o.value;
            try {
              if (!da(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function du(e, t, a, c) {
      t &= ~l1, t &= ~jo, e.suspendedLanes |= t, e.pingedLanes &= ~t, c && (e.warmLanes |= t), c = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - bl(o), d = 1 << f;
        c[f] = -1, o &= ~d;
      }
      a !== 0 && nm(e, a, t);
    }
    function ui() {
      return (we & (ma | Mu)) === tn ? (ii(0), !1) : !0;
    }
    function jr() {
      if (Oe !== null) {
        if (ke === _a)
          var e = Oe.return;
        else
          e = Oe, nr(), Ka(e), Jd = null, By = 0, e = Oe;
        for (; e !== null; )
          n0(e.alternate, e), e = e.return;
        Oe = null;
      }
    }
    function ci(e, t) {
      var a = e.timeoutHandle;
      a !== qs && (e.timeoutHandle = qs, Bb(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), jr(), at = e, Oe = a = on(e.current, null), Me = t, ke = _a, ln = null, Vo = !1, th = $o(e, t), t1 = !1, Ct = Di, xs = an = l1 = jo = Xo = 0, pa = Qy = null, Hp = !1, (t & 8) !== 0 && (t |= t & 32);
      var c = e.entangledLanes;
      if (c !== 0)
        for (e = e.entanglements, c &= t; 0 < c; ) {
          var o = 31 - bl(c), f = 1 << o;
          t |= e[o], c &= ~f;
        }
      return Tc = t, rf(), t = Z1(), 1e3 < t - Q1 && (H.recentlyCreatedOwnerStacks = 0, Q1 = t), zu.discardPendingWarnings(), a;
    }
    function wf(e, t) {
      re = null, H.H = Mp, H.getCurrentStack = null, Il = !1, ra = null, t === xy || t === Ap ? (t = jh(), ke = Xy) : t === k1 ? (t = jh(), ke = Qg) : ke = t === Cg ? e1 : t !== null && typeof t == "object" && typeof t.then == "function" ? eh : Vy, ln = t;
      var a = Oe;
      if (a === null)
        Ct = Gy, ao(
          e,
          aa(t, e.current)
        );
      else
        switch (a.mode & Nl && au(a), ga(), ke) {
          case Vy:
            k !== null && typeof k.markComponentErrored == "function" && k.markComponentErrored(
              a,
              t,
              Me
            );
            break;
          case Ms:
          case Us:
          case Xy:
          case eh:
          case jy:
            k !== null && typeof k.markComponentSuspended == "function" && k.markComponentSuspended(
              a,
              t,
              Me
            );
        }
    }
    function Qr() {
      var e = H.H;
      return H.H = Mp, e === null ? Mp : e;
    }
    function b0() {
      var e = H.A;
      return H.A = pb, e;
    }
    function Zr() {
      Ct = Os, Vo || (Me & 4194048) !== Me && Jn.current !== null || (th = !0), (Xo & 134217727) === 0 && (jo & 134217727) === 0 || at === null || du(
        at,
        Me,
        an,
        !1
      );
    }
    function Lr(e, t, a) {
      var c = we;
      we |= ma;
      var o = Qr(), f = b0();
      if (at !== e || Me !== t) {
        if (zt) {
          var d = e.memoizedUpdaters;
          0 < d.size && (ro(e, Me), d.clear()), Gl(e, t);
        }
        Zy = null, ci(e, t);
      }
      Ec(t), t = !1, d = Ct;
      e: do
        try {
          if (ke !== _a && Oe !== null) {
            var h = Oe, p = ln;
            switch (ke) {
              case e1:
                jr(), d = xp;
                break e;
              case Xy:
              case Ms:
              case Us:
              case eh:
                Jn.current === null && (t = !0);
                var v = ke;
                if (ke = _a, ln = null, lc(e, h, p, v), a && th) {
                  d = Di;
                  break e;
                }
                break;
              default:
                v = ke, ke = _a, ln = null, lc(e, h, p, v);
            }
          }
          wr(), d = Ct;
          break;
        } catch (U) {
          wf(e, U);
        }
      while (!0);
      return t && e.shellSuspendCounter++, nr(), we = c, H.H = o, H.A = f, Gs(), Oe === null && (at = null, Me = 0, rf()), d;
    }
    function wr() {
      for (; Oe !== null; ) E0(Oe);
    }
    function S0(e, t) {
      var a = we;
      we |= ma;
      var c = Qr(), o = b0();
      if (at !== e || Me !== t) {
        if (zt) {
          var f = e.memoizedUpdaters;
          0 < f.size && (ro(e, Me), f.clear()), Gl(e, t);
        }
        Zy = null, Cp = qn() + Lg, ci(e, t);
      } else
        th = $o(
          e,
          t
        );
      Ec(t);
      e: do
        try {
          if (ke !== _a && Oe !== null)
            t: switch (t = Oe, f = ln, ke) {
              case Vy:
                ke = _a, ln = null, lc(
                  e,
                  t,
                  f,
                  Vy
                );
                break;
              case Ms:
              case Us:
                if (Xh(f)) {
                  ke = _a, ln = null, Jr(t);
                  break;
                }
                t = function() {
                  ke !== Ms && ke !== Us || at !== e || (ke = jy), Ua(e);
                }, f.then(t, t);
                break e;
              case Xy:
                ke = jy;
                break e;
              case Qg:
                ke = Pv;
                break e;
              case jy:
                Xh(f) ? (ke = _a, ln = null, Jr(t)) : (ke = _a, ln = null, lc(
                  e,
                  t,
                  f,
                  jy
                ));
                break;
              case Pv:
                var d = null;
                switch (Oe.tag) {
                  case 26:
                    d = Oe.memoizedState;
                  case 5:
                  case 27:
                    var h = Oe;
                    if (!d || Ff(d)) {
                      ke = _a, ln = null;
                      var p = h.sibling;
                      if (p !== null) Oe = p;
                      else {
                        var v = h.return;
                        v !== null ? (Oe = v, Jf(v)) : Oe = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                ke = _a, ln = null, lc(
                  e,
                  t,
                  f,
                  Pv
                );
                break;
              case eh:
                ke = _a, ln = null, lc(
                  e,
                  t,
                  f,
                  eh
                );
                break;
              case e1:
                jr(), Ct = xp;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          H.actQueue !== null ? wr() : T0();
          break;
        } catch (U) {
          wf(e, U);
        }
      while (!0);
      return nr(), H.H = c, H.A = o, we = a, Oe !== null ? (k !== null && typeof k.markRenderYielded == "function" && k.markRenderYielded(), Di) : (Gs(), at = null, Me = 0, rf(), Ct);
    }
    function T0() {
      for (; Oe !== null && !up(); )
        E0(Oe);
    }
    function E0(e) {
      var t = e.alternate;
      (e.mode & Nl) !== ft ? (ur(e), t = W(
        e,
        qr,
        t,
        e,
        Tc
      ), au(e)) : t = W(
        e,
        qr,
        t,
        e,
        Tc
      ), e.memoizedProps = e.pendingProps, t === null ? Jf(e) : Oe = t;
    }
    function Jr(e) {
      var t = W(e, Kr, e);
      e.memoizedProps = e.pendingProps, t === null ? Jf(e) : Oe = t;
    }
    function Kr(e) {
      var t = e.alternate, a = (e.mode & Nl) !== ft;
      switch (a && ur(e), e.tag) {
        case 15:
        case 0:
          t = Ph(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            Me
          );
          break;
        case 11:
          t = Ph(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            Me
          );
          break;
        case 5:
          Ka(e);
        default:
          n0(t, e), e = Oe = Oh(e, Tc), t = qr(t, e, Tc);
      }
      return a && au(e), t;
    }
    function lc(e, t, a, c) {
      nr(), Ka(t), Jd = null, By = 0;
      var o = t.return;
      try {
        if (Cf(
          e,
          o,
          t,
          a,
          Me
        )) {
          Ct = Gy, ao(
            e,
            aa(a, e.current)
          ), Oe = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw Oe = o, f;
        Ct = Gy, ao(
          e,
          aa(a, e.current)
        ), Oe = null;
        return;
      }
      t.flags & 32768 ? (Ve || c === Vy ? e = !0 : th || (Me & 536870912) !== 0 ? e = !1 : (Vo = e = !0, (c === Ms || c === Us || c === Xy || c === eh) && (c = Jn.current, c !== null && c.tag === 13 && (c.flags |= 16384))), kr(t, e)) : Jf(t);
    }
    function Jf(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          kr(
            t,
            Vo
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, ur(t), a = W(
          t,
          Bm,
          a,
          t,
          Tc
        ), (t.mode & Nl) !== ft && Lc(t), a !== null) {
          Oe = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          Oe = t;
          return;
        }
        Oe = t = e;
      } while (t !== null);
      Ct === Di && (Ct = jg);
    }
    function kr(e, t) {
      do {
        var a = qm(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, Oe = a;
          return;
        }
        if ((e.mode & Nl) !== ft) {
          Lc(e), a = e.actualDuration;
          for (var c = e.child; c !== null; )
            a += c.actualDuration, c = c.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          Oe = e;
          return;
        }
        Oe = e = a;
      } while (e !== null);
      Ct = xp, Oe = null;
    }
    function $r(e, t, a, c, o, f, d, h, p) {
      e.cancelPendingCommit = null;
      do
        oo();
      while (ql !== Hs);
      if (zu.flushLegacyContextWarning(), zu.flushPendingUnsafeLifecycleWarnings(), (we & (ma | Mu)) !== tn)
        throw Error("Should not already be working.");
      if (k !== null && typeof k.markCommitStarted == "function" && k.markCommitStarted(a), t === null) vt();
      else {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= Hv, tv(
          e,
          a,
          f,
          d,
          h,
          p
        ), e === at && (Oe = at = null, Me = 0), lh = t, Zo = e, Lo = a, u1 = f, c1 = o, kg = c, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, D0(Oo, function() {
          return Kf(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), bp = jd(), c = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || c) {
          c = H.T, H.T = null, o = oe.p, oe.p = sl, d = we, we |= Mu;
          try {
            Gr(e, t, a);
          } finally {
            we = d, oe.p = o, H.T = c;
          }
        }
        ql = wg, zn(), Wr(), Zm();
      }
    }
    function zn() {
      if (ql === wg) {
        ql = Hs;
        var e = Zo, t = lh, a = Lo, c = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || c) {
          c = H.T, H.T = null;
          var o = oe.p;
          oe.p = sl;
          var f = we;
          we |= Mu;
          try {
            Fd = a, Id = e, y0(t, e), Id = Fd = null, a = v1;
            var d = Sm(e.containerInfo), h = a.focusedElem, p = a.selectionRange;
            if (d !== h && h && h.ownerDocument && bm(
              h.ownerDocument.documentElement,
              h
            )) {
              if (p !== null && Ah(h)) {
                var v = p.start, U = p.end;
                if (U === void 0 && (U = v), "selectionStart" in h)
                  h.selectionStart = v, h.selectionEnd = Math.min(
                    U,
                    h.value.length
                  );
                else {
                  var B = h.ownerDocument || document, O = B && B.defaultView || window;
                  if (O.getSelection) {
                    var Y = O.getSelection(), F = h.textContent.length, fe = Math.min(
                      p.start,
                      F
                    ), nt = p.end === void 0 ? fe : Math.min(p.end, F);
                    !Y.extend && fe > nt && (d = nt, nt = fe, fe = d);
                    var He = Eh(
                      h,
                      fe
                    ), b = Eh(
                      h,
                      nt
                    );
                    if (He && b && (Y.rangeCount !== 1 || Y.anchorNode !== He.node || Y.anchorOffset !== He.offset || Y.focusNode !== b.node || Y.focusOffset !== b.offset)) {
                      var S = B.createRange();
                      S.setStart(He.node, He.offset), Y.removeAllRanges(), fe > nt ? (Y.addRange(S), Y.extend(b.node, b.offset)) : (S.setEnd(b.node, b.offset), Y.addRange(S));
                    }
                  }
                }
              }
              for (B = [], Y = h; Y = Y.parentNode; )
                Y.nodeType === 1 && B.push({
                  element: Y,
                  left: Y.scrollLeft,
                  top: Y.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < B.length; h++) {
                var T = B[h];
                T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
              }
            }
            kp = !!p1, v1 = p1 = null;
          } finally {
            we = f, oe.p = o, H.T = c;
          }
        }
        e.current = t, ql = Jg;
      }
    }
    function Wr() {
      if (ql === Jg) {
        ql = Hs;
        var e = Zo, t = lh, a = Lo, c = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || c) {
          c = H.T, H.T = null;
          var o = oe.p;
          oe.p = sl;
          var f = we;
          we |= Mu;
          try {
            k !== null && typeof k.markLayoutEffectsStarted == "function" && k.markLayoutEffectsStarted(a), Fd = a, Id = e, d0(
              e,
              t.alternate,
              t
            ), Id = Fd = null, k !== null && typeof k.markLayoutEffectsStopped == "function" && k.markLayoutEffectsStopped();
          } finally {
            we = f, oe.p = o, H.T = c;
          }
        }
        ql = Kg;
      }
    }
    function Zm() {
      if (ql === Eb || ql === Kg) {
        ql = Hs, bv();
        var e = Zo, t = lh, a = Lo, c = kg, o = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
        o ? ql = n1 : (ql = Hs, lh = Zo = null, Dn(e, e.pendingLanes), Cs = 0, wy = null);
        var f = e.pendingLanes;
        if (f === 0 && (Qo = null), o || so(e), o = sh(a), t = t.stateNode, fl && typeof fl.onCommitFiberRoot == "function")
          try {
            var d = (t.current.flags & 128) === 128;
            switch (o) {
              case sl:
                var h = bd;
                break;
              case en:
                h = fs;
                break;
              case Tu:
                h = Oo;
                break;
              case Ad:
                h = ss;
                break;
              default:
                h = Oo;
            }
            fl.onCommitFiberRoot(
              dc,
              t,
              h,
              d
            );
          } catch (B) {
            Wl || (Wl = !0, console.error(
              "React instrumentation encountered an error: %s",
              B
            ));
          }
        if (zt && e.memoizedUpdaters.clear(), v0(), c !== null) {
          d = H.T, h = oe.p, oe.p = sl, H.T = null;
          try {
            var p = e.onRecoverableError;
            for (t = 0; t < c.length; t++) {
              var v = c[t], U = Lm(v.stack);
              W(
                v.source,
                p,
                v.value,
                U
              );
            }
          } finally {
            H.T = d, oe.p = h;
          }
        }
        (Lo & 3) !== 0 && oo(), Ua(e), f = e.pendingLanes, (a & 4194090) !== 0 && (f & 42) !== 0 ? (Tp = !0, e === i1 ? Ly++ : (Ly = 0, i1 = e)) : Ly = 0, ii(0), vt();
      }
    }
    function Lm(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Dn(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, sn(t)));
    }
    function oo(e) {
      return zn(), Wr(), Zm(), Kf();
    }
    function Kf() {
      if (ql !== n1) return !1;
      var e = Zo, t = u1;
      u1 = 0;
      var a = sh(Lo), c = Tu > a ? Tu : a;
      a = H.T;
      var o = oe.p;
      try {
        oe.p = c, H.T = null, c = c1, c1 = null;
        var f = Zo, d = Lo;
        if (ql = Hs, lh = Zo = null, Lo = 0, (we & (ma | Mu)) !== tn)
          throw Error("Cannot flush passive effects while already rendering.");
        o1 = !0, Np = !1, k !== null && typeof k.markPassiveEffectsStarted == "function" && k.markPassiveEffectsStarted(d);
        var h = we;
        if (we |= Mu, m0(f.current), jf(
          f,
          f.current,
          d,
          c
        ), k !== null && typeof k.markPassiveEffectsStopped == "function" && k.markPassiveEffectsStopped(), so(f), we = h, ii(0, !1), Np ? f === wy ? Cs++ : (Cs = 0, wy = f) : Cs = 0, Np = o1 = !1, fl && typeof fl.onPostCommitFiberRoot == "function")
          try {
            fl.onPostCommitFiberRoot(dc, f);
          } catch (v) {
            Wl || (Wl = !0, console.error(
              "React instrumentation encountered an error: %s",
              v
            ));
          }
        var p = f.current.stateNode;
        return p.effectDuration = 0, p.passiveEffectDuration = 0, !0;
      } finally {
        oe.p = o, H.T = a, Dn(e, t);
      }
    }
    function fo(e, t, a) {
      t = aa(a, t), t = pl(e.stateNode, t, 2), e = wa(e, t, 2), e !== null && (Hi(e, 2), Ua(e));
    }
    function ce(e, t, a) {
      if (ah = !1, e.tag === 3)
        fo(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            fo(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var c = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Qo === null || !Qo.has(c))) {
              e = aa(a, e), a = bt(2), c = wa(t, a, 2), c !== null && (Hf(
                a,
                c,
                t,
                e
              ), Hi(c, 2), Ua(c));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function A0(e, t, a) {
      var c = e.pingCache;
      if (c === null) {
        c = e.pingCache = new gb();
        var o = /* @__PURE__ */ new Set();
        c.set(t, o);
      } else
        o = c.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), c.set(t, o));
      o.has(a) || (t1 = !0, o.add(a), c = dv.bind(null, e, t, a), zt && ro(e, a), t.then(c, c));
    }
    function dv(e, t, a) {
      var c = e.pingCache;
      c !== null && c.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, g0() && H.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), at === e && (Me & a) === a && (Ct === Os || Ct === Iv && (Me & 62914560) === Me && qn() - a1 < Zg ? (we & ma) === tn && ci(e, 0) : l1 |= a, xs === Me && (xs = 0)), Ua(e);
    }
    function R0(e, t) {
      t === 0 && (t = Wo()), e = Vl(e, t), e !== null && (Hi(e, t), Ua(e));
    }
    function kf(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), R0(e, a);
    }
    function ac(e, t) {
      var a = 0;
      switch (e.tag) {
        case 13:
          var c = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          c = e.stateNode;
          break;
        case 22:
          c = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      c !== null && c.delete(t), R0(e, a);
    }
    function Fr(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var c = e, o = t, f = o.type === Eo;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && W(
            o,
            z0,
            c,
            o,
            (o.mode & V1) === ft
          ) : Fr(
            c,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? W(
            o,
            z0,
            c,
            o
          ) : o.subtreeFlags & 67108864 && W(
            o,
            Fr,
            c,
            o,
            f
          )), t = t.sibling;
        }
    }
    function z0(e, t) {
      var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : !0;
      Ue(!0);
      try {
        ia(t), a && Lf(t), ru(e, t.alternate, t, !1), a && Xr(e, t, 0, null, !1, 0);
      } finally {
        Ue(!1);
      }
    }
    function so(e) {
      var t = !0;
      e.current.mode & (Pl | Ru) || (t = !1), Fr(
        e,
        e.current,
        t
      );
    }
    function Ia(e) {
      if ((we & ma) === tn) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = te(e) || "ReactComponent", Bp !== null) {
            if (Bp.has(t)) return;
            Bp.add(t);
          } else Bp = /* @__PURE__ */ new Set([t]);
          W(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function ro(e, t) {
      zt && e.memoizedUpdaters.forEach(function(a) {
        $n(e, a, t);
      });
    }
    function D0(e, t) {
      var a = H.actQueue;
      return a !== null ? (a.push(t), zb) : gd(e, t);
    }
    function wm(e) {
      g0() && H.actQueue === null && W(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          te(e)
        );
      });
    }
    function Ua(e) {
      e !== nh && e.next === null && (nh === null ? qp = nh = e : nh = nh.next = e), Yp = !0, H.actQueue !== null ? s1 || (s1 = !0, Xt()) : f1 || (f1 = !0, Xt());
    }
    function ii(e, t) {
      if (!r1 && Yp) {
        r1 = !0;
        do
          for (var a = !1, c = qp; c !== null; ) {
            if (e !== 0) {
              var o = c.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = c.suspendedLanes, h = c.pingedLanes;
                f = (1 << 31 - bl(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ed(c, f));
            } else
              f = Me, f = ea(
                c,
                c === at ? f : 0,
                c.cancelPendingCommit !== null || c.timeoutHandle !== qs
              ), (f & 3) === 0 || $o(c, f) || (a = !0, ed(c, f));
            c = c.next;
          }
        while (a);
        r1 = !1;
      }
    }
    function Ir() {
      Pr();
    }
    function Pr() {
      Yp = s1 = f1 = !1;
      var e = 0;
      Ns !== 0 && (ho() && (e = Ns), Ns = 0);
      for (var t = qn(), a = null, c = qp; c !== null; ) {
        var o = c.next, f = On(c, t);
        f === 0 ? (c.next = null, a === null ? qp = o : a.next = o, o === null && (nh = a)) : (a = c, (e !== 0 || (f & 3) !== 0) && (Yp = !0)), c = o;
      }
      ii(e);
    }
    function On(e, t) {
      for (var a = e.suspendedLanes, c = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - bl(f), h = 1 << d, p = o[d];
        p === -1 ? ((h & a) === 0 || (h & c) !== 0) && (o[d] = am(h, t)) : p <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = at, a = Me, a = ea(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== qs
      ), c = e.callbackNode, a === 0 || e === t && (ke === Ms || ke === Us) || e.cancelPendingCommit !== null)
        return c !== null && td(c), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || $o(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || H.actQueue !== null && c !== d1)
          td(c);
        else return t;
        switch (sh(a)) {
          case sl:
          case en:
            a = fs;
            break;
          case Tu:
            a = Oo;
            break;
          case Ad:
            a = ss;
            break;
          default:
            a = Oo;
        }
        return c = Tt.bind(null, e), H.actQueue !== null ? (H.actQueue.push(c), a = d1) : a = gd(a, c), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return c !== null && td(c), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Tt(e, t) {
      if (Tp = Sp = !1, ql !== Hs && ql !== n1)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (oo() && e.callbackNode !== a)
        return null;
      var c = Me;
      return c = ea(
        e,
        e === at ? c : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== qs
      ), c === 0 ? null : (Vt(
        e,
        c,
        t
      ), On(e, qn()), e.callbackNode != null && e.callbackNode === a ? Tt.bind(null, e) : null);
    }
    function ed(e, t) {
      if (oo()) return null;
      Sp = Tp, Tp = !1, Vt(e, t, !0);
    }
    function td(e) {
      e !== d1 && e !== null && gv(e);
    }
    function Xt() {
      H.actQueue !== null && H.actQueue.push(function() {
        return Pr(), null;
      }), qb(function() {
        (we & (ma | Mu)) !== tn ? gd(
          bd,
          Ir
        ) : Pr();
      });
    }
    function O0() {
      return Ns === 0 && (Ns = oh()), Ns;
    }
    function M0(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (J(e, "action"), Vi("" + e));
    }
    function U0(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function it(e, t, a, c, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = M0(
          (o[Fl] || null).action
        ), d = c.submitter;
        d && (t = (t = d[Fl] || null) ? M0(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new ae(
          "action",
          "action",
          null,
          c,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (c.defaultPrevented) {
                  if (Ns !== 0) {
                    var p = d ? U0(
                      o,
                      d
                    ) : new FormData(o), v = {
                      pending: !0,
                      data: p,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(v), kc(
                      a,
                      v,
                      null,
                      p
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), p = d ? U0(
                    o,
                    d
                  ) : new FormData(o), v = {
                    pending: !0,
                    data: p,
                    method: o.method,
                    action: f
                  }, Object.freeze(v), kc(
                    a,
                    v,
                    f,
                    p
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function ul(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (c) {
        Kv(c);
      }
      e.currentTarget = null;
    }
    function Mn(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var c = e[a];
        e: {
          var o = void 0, f = c.event;
          if (c = c.listeners, t)
            for (var d = c.length - 1; 0 <= d; d--) {
              var h = c[d], p = h.instance, v = h.currentTarget;
              if (h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? W(
                p,
                ul,
                f,
                h,
                v
              ) : ul(f, h, v), o = p;
            }
          else
            for (d = 0; d < c.length; d++) {
              if (h = c[d], p = h.instance, v = h.currentTarget, h = h.listener, p !== o && f.isPropagationStopped())
                break e;
              p !== null ? W(
                p,
                ul,
                f,
                h,
                v
              ) : ul(f, h, v), o = p;
            }
        }
      }
    }
    function Re(e, t) {
      h1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[ly];
      a === void 0 && (a = t[ly] = /* @__PURE__ */ new Set());
      var c = e + "__bubble";
      a.has(c) || (ad(t, e, 2, !1), a.add(c));
    }
    function ld(e, t, a) {
      h1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var c = 0;
      t && (c |= 4), ad(
        a,
        e,
        c,
        t
      );
    }
    function x0(e) {
      if (!e[_p]) {
        e[_p] = !0, ip.forEach(function(a) {
          a !== "selectionchange" && (h1.has(a) || ld(a, !1, e), ld(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_p] || (t[_p] = !0, ld("selectionchange", !1, t));
      }
    }
    function ad(e, t, a, c) {
      switch (yd(t)) {
        case sl:
          var o = mv;
          break;
        case en:
          o = hd;
          break;
        default:
          o = ic;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !D || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), c ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function Ul(e, t, a, c, o) {
      var f = c;
      if ((t & 1) === 0 && (t & 2) === 0 && c !== null)
        e: for (; ; ) {
          if (c === null) return;
          var d = c.tag;
          if (d === 3 || d === 4) {
            var h = c.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = c.return; d !== null; ) {
                var p = d.tag;
                if ((p === 3 || p === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = Wn(h), d === null) return;
              if (p = d.tag, p === 5 || p === 6 || p === 26 || p === 27) {
                c = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          c = c.return;
        }
      ks(function() {
        var v = f, U = Bc(a), B = [];
        e: {
          var O = G1.get(e);
          if (O !== void 0) {
            var Y = ae, F = e;
            switch (e) {
              case "keypress":
                if (Xi(a) === 0) break e;
              case "keydown":
              case "keyup":
                Y = Q2;
                break;
              case "focusin":
                F = "focus", Y = Ce;
                break;
              case "focusout":
                F = "blur", Y = Ce;
                break;
              case "beforeblur":
              case "afterblur":
                Y = Ce;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                Y = Te;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                Y = ie;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                Y = w2;
                break;
              case B1:
              case q1:
              case Y1:
                Y = Av;
                break;
              case _1:
                Y = K2;
                break;
              case "scroll":
              case "scrollend":
                Y = R;
                break;
              case "wheel":
                Y = $2;
                break;
              case "copy":
              case "cut":
              case "paste":
                Y = q2;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                Y = D1;
                break;
              case "toggle":
              case "beforetoggle":
                Y = F2;
            }
            var fe = (t & 4) !== 0, nt = !fe && (e === "scroll" || e === "scrollend"), He = fe ? O !== null ? O + "Capture" : null : O;
            fe = [];
            for (var b = v, S; b !== null; ) {
              var T = b;
              if (S = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || S === null || He === null || (T = Pn(b, He), T != null && fe.push(
                xl(
                  b,
                  T,
                  S
                )
              )), nt) break;
              b = b.return;
            }
            0 < fe.length && (O = new Y(
              O,
              F,
              null,
              a,
              U
            ), B.push({
              event: O,
              listeners: fe
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (O = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", O && a !== s && (F = a.relatedTarget || a.fromElement) && (Wn(F) || F[yc]))
              break e;
            if ((Y || O) && (O = U.window === U ? U : (O = U.ownerDocument) ? O.defaultView || O.parentWindow : window, Y ? (F = a.relatedTarget || a.toElement, Y = v, F = F ? Wn(F) : null, F !== null && (nt = $e(F), fe = F.tag, F !== nt || fe !== 5 && fe !== 27 && fe !== 6) && (F = null)) : (Y = null, F = v), Y !== F)) {
              if (fe = Te, T = "onMouseLeave", He = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (fe = D1, T = "onPointerLeave", He = "onPointerEnter", b = "pointer"), nt = Y == null ? O : xu(Y), S = F == null ? O : xu(F), O = new fe(
                T,
                b + "leave",
                Y,
                a,
                U
              ), O.target = nt, O.relatedTarget = S, T = null, Wn(U) === v && (fe = new fe(
                He,
                b + "enter",
                F,
                a,
                U
              ), fe.target = S, fe.relatedTarget = nt, T = fe), nt = T, Y && F)
                t: {
                  for (fe = Y, He = F, b = 0, S = fe; S; S = Wt(S))
                    b++;
                  for (S = 0, T = He; T; T = Wt(T))
                    S++;
                  for (; 0 < b - S; )
                    fe = Wt(fe), b--;
                  for (; 0 < S - b; )
                    He = Wt(He), S--;
                  for (; b--; ) {
                    if (fe === He || He !== null && fe === He.alternate)
                      break t;
                    fe = Wt(fe), He = Wt(He);
                  }
                  fe = null;
                }
              else fe = null;
              Y !== null && H0(
                B,
                O,
                Y,
                fe,
                !1
              ), F !== null && nt !== null && H0(
                B,
                nt,
                F,
                fe,
                !0
              );
            }
          }
          e: {
            if (O = v ? xu(v) : window, Y = O.nodeName && O.nodeName.toLowerCase(), Y === "select" || Y === "input" && O.type === "file")
              var _ = Sh;
            else if (mm(O))
              if (C1)
                _ = ov;
              else {
                _ = Th;
                var w = cv;
              }
            else
              Y = O.nodeName, !Y || Y.toLowerCase() !== "input" || O.type !== "checkbox" && O.type !== "radio" ? v && Nc(v.elementType) && (_ = Sh) : _ = iv;
            if (_ && (_ = _(e, v))) {
              Is(
                B,
                _,
                a,
                U
              );
              break e;
            }
            w && w(e, O, v), e === "focusout" && v && O.type === "number" && v.memoizedProps.value != null && Qs(O, "number", O.value);
          }
          switch (w = v ? xu(v) : window, e) {
            case "focusin":
              (mm(w) || w.contentEditable === "true") && (Nd = w, zv = v, Ey = null);
              break;
            case "focusout":
              Ey = zv = Nd = null;
              break;
            case "mousedown":
              Dv = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Dv = !1, Tm(
                B,
                a,
                U
              );
              break;
            case "selectionchange":
              if (tb) break;
            case "keydown":
            case "keyup":
              Tm(
                B,
                a,
                U
              );
          }
          var me;
          if (Rv)
            e: {
              switch (e) {
                case "compositionstart":
                  var I = "onCompositionStart";
                  break e;
                case "compositionend":
                  I = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  I = "onCompositionUpdate";
                  break e;
              }
              I = void 0;
            }
          else
            Cd ? Ml(e, a) && (I = "onCompositionEnd") : e === "keydown" && a.keyCode === O1 && (I = "onCompositionStart");
          I && (M1 && a.locale !== "ko" && (Cd || I !== "onCompositionStart" ? I === "onCompositionEnd" && Cd && (me = eu()) : (X = U, M = "value" in X ? X.value : X.textContent, Cd = !0)), w = $f(
            v,
            I
          ), 0 < w.length && (I = new z1(
            I,
            e,
            null,
            a,
            U
          ), B.push({
            event: I,
            listeners: w
          }), me ? I.data = me : (me = _u(a), me !== null && (I.data = me)))), (me = P2 ? Fs(e, a) : of(e, a)) && (I = $f(
            v,
            "onBeforeInput"
          ), 0 < I.length && (w = new _2(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            U
          ), B.push({
            event: w,
            listeners: I
          }), w.data = me)), it(
            B,
            e,
            v,
            a,
            U
          );
        }
        Mn(B, t);
      });
    }
    function xl(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function $f(e, t) {
      for (var a = t + "Capture", c = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Pn(e, a), o != null && c.unshift(
          xl(e, o, f)
        ), o = Pn(e, t), o != null && c.push(
          xl(e, o, f)
        )), e.tag === 3) return c;
        e = e.return;
      }
      return [];
    }
    function Wt(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function H0(e, t, a, c, o) {
      for (var f = t._reactName, d = []; a !== null && a !== c; ) {
        var h = a, p = h.alternate, v = h.stateNode;
        if (h = h.tag, p !== null && p === c) break;
        h !== 5 && h !== 26 && h !== 27 || v === null || (p = v, o ? (v = Pn(a, f), v != null && d.unshift(
          xl(a, v, p)
        )) : o || (v = Pn(a, f), v != null && d.push(
          xl(a, v, p)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Un(e, t) {
      Gi(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || gy || (gy = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Ba,
        possibleRegistrationNames: pi
      };
      Nc(e) || typeof t.is == "string" || vh(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function ot(e, t, a, c) {
      t !== a && (a = cl(a), cl(t) !== a && (c[e] = t));
    }
    function nc(e, t, a) {
      t.forEach(function(c) {
        a[N0(c)] = c === "style" ? fi(e) : e.getAttribute(c);
      });
    }
    function xa(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function nd(e, t) {
      return e = e.namespaceURI === vs || e.namespaceURI === Bo ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function cl(e) {
      return C(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        ne(e)
      ), P(e)), (typeof e == "string" ? e : "" + e).replace(Db, `
`).replace(Ob, "");
    }
    function C0(e, t) {
      return t = cl(t), cl(e) === t;
    }
    function hu() {
    }
    function _e(e, t, a, c, o, f) {
      switch (a) {
        case "children":
          typeof c == "string" ? (uf(c, t, !1), t === "body" || t === "textarea" && c === "" || Cc(e, c)) : (typeof c == "number" || typeof c == "bigint") && (uf("" + c, t, !1), t !== "body" && Cc(e, "" + c));
          break;
        case "className":
          Io(e, "class", c);
          break;
        case "tabIndex":
          Io(e, "tabindex", c);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Io(e, a, c);
          break;
        case "style":
          cf(e, c, f);
          break;
        case "data":
          if (t !== "object") {
            Io(e, "data", c);
            break;
          }
        case "src":
        case "href":
          if (c === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
            e.removeAttribute(a);
            break;
          }
          J(c, a), c = Vi("" + c), e.setAttribute(a, c);
          break;
        case "action":
        case "formAction":
          if (c != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof c == "function" && (o.encType == null && o.method == null || Xp || (Xp = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Vp || (Vp = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Gp ? t !== "button" || o.type == null || o.type === "submit" || Gp ? typeof c == "function" && (o.name == null || Pg || (Pg = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Xp || (Xp = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Vp || (Vp = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Gp = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Gp = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof c == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && _e(e, t, "name", o.name, o, null), _e(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), _e(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), _e(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (_e(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), _e(e, t, "method", o.method, o, null), _e(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (c == null || typeof c == "symbol" || typeof c == "boolean") {
            e.removeAttribute(a);
            break;
          }
          J(c, a), c = Vi("" + c), e.setAttribute(a, c);
          break;
        case "onClick":
          c != null && (typeof c != "function" && xa(a, c), e.onclick = hu);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && xa(a, c), Re("scroll", e));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && xa(a, c), Re("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = c && typeof c != "function" && typeof c != "symbol";
          break;
        case "muted":
          e.muted = c && typeof c != "function" && typeof c != "symbol";
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
          if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          J(c, a), a = Vi("" + c), e.setAttributeNS(Bs, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          c != null && typeof c != "function" && typeof c != "symbol" ? (J(c, a), e.setAttribute(a, "" + c)) : e.removeAttribute(a);
          break;
        case "inert":
          c !== "" || jp[a] || (jp[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
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
          c && typeof c != "function" && typeof c != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          c === !0 ? e.setAttribute(a, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? (J(c, a), e.setAttribute(a, c)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? (J(c, a), e.setAttribute(a, c)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? e.removeAttribute(a) : (J(c, a), e.setAttribute(a, c));
          break;
        case "popover":
          Re("beforetoggle", e), Re("toggle", e), Fo(e, "popover", c);
          break;
        case "xlinkActuate":
          Va(
            e,
            Bs,
            "xlink:actuate",
            c
          );
          break;
        case "xlinkArcrole":
          Va(
            e,
            Bs,
            "xlink:arcrole",
            c
          );
          break;
        case "xlinkRole":
          Va(
            e,
            Bs,
            "xlink:role",
            c
          );
          break;
        case "xlinkShow":
          Va(
            e,
            Bs,
            "xlink:show",
            c
          );
          break;
        case "xlinkTitle":
          Va(
            e,
            Bs,
            "xlink:title",
            c
          );
          break;
        case "xlinkType":
          Va(
            e,
            Bs,
            "xlink:type",
            c
          );
          break;
        case "xmlBase":
          Va(
            e,
            y1,
            "xml:base",
            c
          );
          break;
        case "xmlLang":
          Va(
            e,
            y1,
            "xml:lang",
            c
          );
          break;
        case "xmlSpace":
          Va(
            e,
            y1,
            "xml:space",
            c
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Fo(e, "is", c);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          e2 || c == null || typeof c != "object" || (e2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            c
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Ks(a), Fo(e, a, c)) : Ba.hasOwnProperty(a) && c != null && typeof c != "function" && xa(a, c);
      }
    }
    function oi(e, t, a, c, o, f) {
      switch (a) {
        case "style":
          cf(e, c, f);
          break;
        case "dangerouslySetInnerHTML":
          if (c != null) {
            if (typeof c != "object" || !("__html" in c))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = c.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof c == "string" ? Cc(e, c) : (typeof c == "number" || typeof c == "bigint") && Cc(e, "" + c);
          break;
        case "onScroll":
          c != null && (typeof c != "function" && xa(a, c), Re("scroll", e));
          break;
        case "onScrollEnd":
          c != null && (typeof c != "function" && xa(a, c), Re("scrollend", e));
          break;
        case "onClick":
          c != null && (typeof c != "function" && xa(a, c), e.onclick = hu);
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
          if (Ba.hasOwnProperty(a))
            c != null && typeof c != "function" && xa(a, c);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Fl] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof c == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, c, o);
                break e;
              }
              a in e ? e[a] = c : c === !0 ? e.setAttribute(a, "") : Fo(e, a, c);
            }
      }
    }
    function Et(e, t, a) {
      switch (Un(t, a), t) {
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
          Re("error", e), Re("load", e);
          var c = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    c = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    _e(e, t, f, d, a, null);
                }
            }
          o && _e(e, t, "srcSet", a.srcSet, a, null), c && _e(e, t, "src", a.src, a, null);
          return;
        case "input":
          Cu("input", a), Re("invalid", e);
          var h = f = d = o = null, p = null, v = null;
          for (c in a)
            if (a.hasOwnProperty(c)) {
              var U = a[c];
              if (U != null)
                switch (c) {
                  case "name":
                    o = U;
                    break;
                  case "type":
                    d = U;
                    break;
                  case "checked":
                    p = U;
                    break;
                  case "defaultChecked":
                    v = U;
                    break;
                  case "value":
                    f = U;
                    break;
                  case "defaultValue":
                    h = U;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (U != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    _e(e, t, c, U, a, null);
                }
            }
          Nu(e, a), sm(
            e,
            f,
            h,
            p,
            v,
            d,
            o,
            !1
          ), Fn(e);
          return;
        case "select":
          Cu("select", a), Re("invalid", e), c = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  c = h;
                default:
                  _e(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          lf(e, a), t = f, a = d, e.multiple = !!c, t != null ? In(e, !!c, t, !1) : a != null && In(e, !!c, a, !0);
          return;
        case "textarea":
          Cu("textarea", a), Re("invalid", e), f = o = c = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  c = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  _e(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          un(e, a), dh(e, c, o, f), Fn(e);
          return;
        case "option":
          rh(e, a);
          for (p in a)
            if (a.hasOwnProperty(p) && (c = a[p], c != null))
              switch (p) {
                case "selected":
                  e.selected = c && typeof c != "function" && typeof c != "symbol";
                  break;
                default:
                  _e(e, t, p, c, a, null);
              }
          return;
        case "dialog":
          Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
          break;
        case "iframe":
        case "object":
          Re("load", e);
          break;
        case "video":
        case "audio":
          for (c = 0; c < Jy.length; c++)
            Re(Jy[c], e);
          break;
        case "image":
          Re("error", e), Re("load", e);
          break;
        case "details":
          Re("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Re("error", e), Re("load", e);
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
          for (v in a)
            if (a.hasOwnProperty(v) && (c = a[v], c != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  _e(e, t, v, c, a, null);
              }
          return;
        default:
          if (Nc(t)) {
            for (U in a)
              a.hasOwnProperty(U) && (c = a[U], c !== void 0 && oi(
                e,
                t,
                U,
                c,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (c = a[h], c != null && _e(e, t, h, c, a, null));
    }
    function Jm(e, t, a, c) {
      switch (Un(t, c), t) {
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
          var o = null, f = null, d = null, h = null, p = null, v = null, U = null;
          for (Y in a) {
            var B = a[Y];
            if (a.hasOwnProperty(Y) && B != null)
              switch (Y) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  p = B;
                default:
                  c.hasOwnProperty(Y) || _e(
                    e,
                    t,
                    Y,
                    null,
                    c,
                    B
                  );
              }
          }
          for (var O in c) {
            var Y = c[O];
            if (B = a[O], c.hasOwnProperty(O) && (Y != null || B != null))
              switch (O) {
                case "type":
                  f = Y;
                  break;
                case "name":
                  o = Y;
                  break;
                case "checked":
                  v = Y;
                  break;
                case "defaultChecked":
                  U = Y;
                  break;
                case "value":
                  d = Y;
                  break;
                case "defaultValue":
                  h = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Y !== B && _e(
                    e,
                    t,
                    O,
                    Y,
                    c,
                    B
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, c = c.type === "checkbox" || c.type === "radio" ? c.checked != null : c.value != null, t || !c || Ig || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Ig = !0), !t || c || Fg || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), Fg = !0), Bu(
            e,
            d,
            h,
            p,
            v,
            U,
            f,
            o
          );
          return;
        case "select":
          Y = d = h = O = null;
          for (f in a)
            if (p = a[f], a.hasOwnProperty(f) && p != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  Y = p;
                default:
                  c.hasOwnProperty(f) || _e(
                    e,
                    t,
                    f,
                    null,
                    c,
                    p
                  );
              }
          for (o in c)
            if (f = c[o], p = a[o], c.hasOwnProperty(o) && (f != null || p != null))
              switch (o) {
                case "value":
                  O = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== p && _e(
                    e,
                    t,
                    o,
                    f,
                    c,
                    p
                  );
              }
          c = h, t = d, a = Y, O != null ? In(e, !!t, O, !1) : !!a != !!t && (c != null ? In(e, !!t, c, !0) : In(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          Y = O = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !c.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  _e(e, t, h, null, c, o);
              }
          for (d in c)
            if (o = c[d], f = a[d], c.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  O = o;
                  break;
                case "defaultValue":
                  Y = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && _e(e, t, d, o, c, f);
              }
          Zs(e, O, Y);
          return;
        case "option":
          for (var F in a)
            if (O = a[F], a.hasOwnProperty(F) && O != null && !c.hasOwnProperty(F))
              switch (F) {
                case "selected":
                  e.selected = !1;
                  break;
                default:
                  _e(
                    e,
                    t,
                    F,
                    null,
                    c,
                    O
                  );
              }
          for (p in c)
            if (O = c[p], Y = a[p], c.hasOwnProperty(p) && O !== Y && (O != null || Y != null))
              switch (p) {
                case "selected":
                  e.selected = O && typeof O != "function" && typeof O != "symbol";
                  break;
                default:
                  _e(
                    e,
                    t,
                    p,
                    O,
                    c,
                    Y
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
          for (var fe in a)
            O = a[fe], a.hasOwnProperty(fe) && O != null && !c.hasOwnProperty(fe) && _e(
              e,
              t,
              fe,
              null,
              c,
              O
            );
          for (v in c)
            if (O = c[v], Y = a[v], c.hasOwnProperty(v) && O !== Y && (O != null || Y != null))
              switch (v) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  _e(
                    e,
                    t,
                    v,
                    O,
                    c,
                    Y
                  );
              }
          return;
        default:
          if (Nc(t)) {
            for (var nt in a)
              O = a[nt], a.hasOwnProperty(nt) && O !== void 0 && !c.hasOwnProperty(nt) && oi(
                e,
                t,
                nt,
                void 0,
                c,
                O
              );
            for (U in c)
              O = c[U], Y = a[U], !c.hasOwnProperty(U) || O === Y || O === void 0 && Y === void 0 || oi(
                e,
                t,
                U,
                O,
                c,
                Y
              );
            return;
          }
      }
      for (var He in a)
        O = a[He], a.hasOwnProperty(He) && O != null && !c.hasOwnProperty(He) && _e(e, t, He, null, c, O);
      for (B in c)
        O = c[B], Y = a[B], !c.hasOwnProperty(B) || O === Y || O == null && Y == null || _e(e, t, B, O, c, Y);
    }
    function N0(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function fi(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var c = e[a];
        t[c] = e.getPropertyValue(c);
      }
      return t;
    }
    function B0(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var c, o = c = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (ue(d, f), c += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || ps.has(f) ? (ue(d, f), c += o + f.replace(Eu, "-$1").toLowerCase().replace(Au, "-ms-") + ":" + ("" + d).trim()) : c += o + f.replace(Eu, "-$1").toLowerCase().replace(Au, "-ms-") + ":" + d + "px", o = ";");
          }
        c = c || null, t = e.getAttribute("style"), t !== c && (c = cl(c), cl(t) !== c && (a.style = fi(e)));
      }
    }
    function Hl(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (J(c, t), e === "" + c)
              return;
        }
      ot(t, e, c, f);
    }
    function q0(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof c) {
          case "function":
          case "symbol":
            return;
        }
        if (!c) return;
      } else
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (c) return;
        }
      ot(t, e, c, f);
    }
    function Y0(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
            break;
          default:
            if (J(c, a), e === "" + c)
              return;
        }
      ot(t, e, c, f);
    }
    function Km(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(c)) return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(c) && (J(c, t), e === "" + c))
              return;
        }
      ot(t, e, c, f);
    }
    function Qe(e, t, a, c, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof c) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (c != null)
        switch (typeof c) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (J(c, t), a = Vi("" + c), e === a)
              return;
        }
      ot(t, e, c, f);
    }
    function We(e, t, a, c) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Nc(t)) {
        for (var p in a)
          if (a.hasOwnProperty(p)) {
            var v = a[p];
            if (v != null) {
              if (Ba.hasOwnProperty(p))
                typeof v != "function" && xa(p, v);
              else if (a.suppressHydrationWarning !== !0)
                switch (p) {
                  case "children":
                    typeof v != "string" && typeof v != "number" || ot(
                      "children",
                      e.textContent,
                      v,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, v = v ? v.__html : void 0, v != null && (v = nd(e, v), ot(
                      p,
                      d,
                      v,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(p), B0(e, v, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(p.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      p
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = cm(
                      e,
                      "class",
                      v
                    ), ot(
                      "className",
                      d,
                      v,
                      o
                    );
                    continue;
                  default:
                    c.context === Mi && t !== "svg" && t !== "math" ? f.delete(p.toLowerCase()) : f.delete(p), d = cm(
                      e,
                      p,
                      v
                    ), ot(
                      p,
                      d,
                      v,
                      o
                    );
                }
            }
          }
      } else
        for (v in a)
          if (a.hasOwnProperty(v) && (p = a[v], p != null)) {
            if (Ba.hasOwnProperty(v))
              typeof p != "function" && xa(v, p);
            else if (a.suppressHydrationWarning !== !0)
              switch (v) {
                case "children":
                  typeof p != "string" && typeof p != "number" || ot(
                    "children",
                    e.textContent,
                    p,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = nd(e, p), d !== p && (o[v] = { __html: d }));
                  continue;
                case "className":
                  Hl(
                    e,
                    v,
                    "class",
                    p,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Hl(
                    e,
                    v,
                    "tabindex",
                    p,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(v), B0(e, p, o);
                  continue;
                case "multiple":
                  f.delete(v), ot(
                    v,
                    e.multiple,
                    p,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(v), ot(
                    v,
                    e.muted,
                    p,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), ot(
                    v,
                    e.autofocus,
                    p,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(v), d = e.getAttribute("data"), ot(
                      v,
                      d,
                      p,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(p !== "" || t === "a" && v === "href" || t === "object" && v === "data")) {
                    console.error(
                      v === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      v,
                      v
                    );
                    continue;
                  }
                  Qe(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(v), typeof p == "function") {
                    f.delete(v.toLowerCase()), v === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === Mb) {
                    f.delete(v.toLowerCase()), ot(
                      v,
                      "function",
                      p,
                      o
                    );
                    continue;
                  }
                  Qe(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  Qe(
                    e,
                    v,
                    "xlink:href",
                    p,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  Y0(
                    e,
                    v,
                    "contenteditable",
                    p,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  Y0(
                    e,
                    v,
                    "spellcheck",
                    p,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  Y0(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
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
                  q0(
                    e,
                    v,
                    v.toLowerCase(),
                    p,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var U = d = v, B = o;
                    if (f.delete(U), h = h.getAttribute(U), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (p === !1) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (p === !0 && h === "") break e;
                          break;
                        default:
                          if (J(p, d), h === "" + p)
                            break e;
                      }
                    ot(
                      d,
                      h,
                      p,
                      B
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, U = d = v, B = o, f.delete(U), h = h.getAttribute(U), h === null)
                      switch (typeof p) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(p) || 1 > p) break e;
                      }
                    else if (p != null)
                      switch (typeof p) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(p) || 1 > p) && (J(p, d), h === "" + p))
                            break e;
                      }
                    ot(
                      d,
                      h,
                      p,
                      B
                    );
                  }
                  continue;
                case "rowSpan":
                  Km(
                    e,
                    v,
                    "rowspan",
                    p,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Km(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Hl(
                    e,
                    v,
                    "x-height",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Hl(
                    e,
                    v,
                    "xlink:actuate",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Hl(
                    e,
                    v,
                    "xlink:arcrole",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Hl(
                    e,
                    v,
                    "xlink:role",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Hl(
                    e,
                    v,
                    "xlink:show",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Hl(
                    e,
                    v,
                    "xlink:title",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Hl(
                    e,
                    v,
                    "xlink:type",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Hl(
                    e,
                    v,
                    "xml:base",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Hl(
                    e,
                    v,
                    "xml:lang",
                    p,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Hl(
                    e,
                    v,
                    "xml:space",
                    p,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  p !== "" || jp[v] || (jp[v] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    v
                  )), q0(
                    e,
                    v,
                    v,
                    p,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < v.length) || v[0] !== "o" && v[0] !== "O" || v[1] !== "n" && v[1] !== "N") {
                    h = Ks(v), d = !1, c.context === Mi && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (U = v.toLowerCase(), U = bi.hasOwnProperty(
                      U
                    ) && bi[U] || null, U !== null && U !== v && (d = !0, f.delete(U)), f.delete(h));
                    e: if (U = e, B = h, h = p, Dc(B))
                      if (U.hasAttribute(B))
                        U = U.getAttribute(
                          B
                        ), J(
                          h,
                          B
                        ), h = U === "" + h ? h : U;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (U = B.toLowerCase().slice(0, 5), U !== "data-" && U !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || ot(
                      v,
                      h,
                      p,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && nc(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function ze(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function De(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Ze(e) {
      switch (e) {
        case Bo:
          return uh;
        case vs:
          return Lp;
        default:
          return Mi;
      }
    }
    function Kl(e, t) {
      if (e === Mi)
        switch (t) {
          case "svg":
            return uh;
          case "math":
            return Lp;
          default:
            return Mi;
        }
      return e === uh && t === "foreignObject" ? Mi : e;
    }
    function xn(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ho() {
      var e = window.event;
      return e && e.type === "popstate" ? e === g1 ? !1 : (g1 = e, !0) : (g1 = null, !1);
    }
    function _0(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function yu(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function At(e, t, a, c) {
      Jm(e, t, a, c), e[Fl] = c;
    }
    function mu(e) {
      Cc(e, "");
    }
    function si(e, t, a) {
      e.nodeValue = a;
    }
    function Hn(e) {
      return e === "head";
    }
    function Ha(e, t) {
      e.removeChild(t);
    }
    function yo(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function mo(e, t) {
      var a = t, c = 0, o = 0;
      do {
        var f = a.nextSibling;
        if (e.removeChild(a), f && f.nodeType === 8)
          if (a = f.data, a === Zp) {
            if (0 < c && 8 > c) {
              a = c;
              var d = e.ownerDocument;
              if (a & xb && bo(d.documentElement), a & Hb && bo(d.body), a & Cb)
                for (a = d.head, bo(a), d = a.firstChild; d; ) {
                  var h = d.nextSibling, p = d.nodeName;
                  d[xo] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && d.rel.toLowerCase() === "stylesheet" || a.removeChild(d), d = h;
                }
            }
            if (o === 0) {
              e.removeChild(f), yi(t);
              return;
            }
            o--;
          } else
            a === Qp || a === Oi || a === Ky ? o++ : c = a.charCodeAt(0) - 48;
        else c = 0;
        a = f;
      } while (a);
      yi(t);
    }
    function kl(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function G0(e) {
      e.nodeValue = "";
    }
    function V0(e, t) {
      t = t[Nb], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function ud(e, t) {
      e.nodeValue = t;
    }
    function po(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            po(a), Ni(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function uc(e, t, a, c) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!c && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (c) {
          if (!e[xo])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          J(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = ol(e.nextSibling), e === null) break;
      }
      return null;
    }
    function il(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = ol(e.nextSibling), e === null)) return null;
      return e;
    }
    function Cn(e) {
      return e.data === Ky || e.data === Oi && e.ownerDocument.readyState === l2;
    }
    function vo(e, t) {
      var a = e.ownerDocument;
      if (e.data !== Oi || a.readyState === l2)
        t();
      else {
        var c = function() {
          t(), a.removeEventListener("DOMContentLoaded", c);
        };
        a.addEventListener("DOMContentLoaded", c), e._reactRetry = c;
      }
    }
    function ol(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === Qp || t === Ky || t === Oi || t === m1 || t === t2)
            break;
          if (t === Zp) return null;
        }
      }
      return e;
    }
    function cd(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, c = e.attributes, o = 0; o < c.length; o++) {
          var f = c[o];
          a[N0(f.name)] = f.name.toLowerCase() === "style" ? fi(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? { type: "Suspense", props: {} } : e.nodeValue;
    }
    function id(e, t, a) {
      return a === null || a[Ub] !== !0 ? (e.nodeValue === t ? e = null : (t = cl(t), e = cl(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function X0(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Zp) {
            if (t === 0)
              return ol(e.nextSibling);
            t--;
          } else
            a !== Qp && a !== Ky && a !== Oi || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function go(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Qp || a === Ky || a === Oi) {
            if (t === 0) return e;
            t--;
          } else a === Zp && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function j0(e) {
      yi(e);
    }
    function oa(e) {
      yi(e);
    }
    function Q0(e, t, a, c, o) {
      switch (o && Js(e, c.ancestorInfo), t = De(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function fa(e, t, a, c) {
      if (!a[yc] && ta(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      Et(a, e, t), a[Sl] = c, a[Fl] = t;
    }
    function bo(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      Ni(e);
    }
    function Wf(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function km(e, t, a) {
      var c = ch;
      if (c && typeof t == "string" && t) {
        var o = la(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), o2.has(o) || (o2.add(o), e = { rel: e, crossOrigin: a, href: t }, c.querySelector(o) === null && (t = c.createElement("link"), Et(t, "link", e), wt(t), c.head.appendChild(t)));
      }
    }
    function pu(e, t, a, c) {
      var o = (o = Bn.current) ? Wf(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = cc(a.href), t = nn(o).hoistableStyles, c = t.get(a), c || (c = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = cc(a.href);
            var f = nn(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Ys, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              Nn(e)
            )) && !f._p && (d.instance = f, d.state.loading = ky | Kn), !kn.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              kn.set(e, h), f || $m(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && c === null)
              throw a = `

  - ` + ri(t) + `
  + ` + ri(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && c !== null)
            throw a = `

  - ` + ri(t) + `
  + ` + ri(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = di(a), t = nn(o).hoistableScripts, c = t.get(a), c || (c = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, c)), c) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function ri(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : bu.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : bu.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : bu.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function cc(e) {
      return 'href="' + la(e) + '"';
    }
    function Nn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Z0(e) {
      return be({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function $m(e, t, a, c) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? c.loading = ky : (t = e.createElement("link"), c.preload = t, t.addEventListener("load", function() {
        return c.loading |= ky;
      }), t.addEventListener("error", function() {
        return c.loading |= c2;
      }), Et(t, "link", a), wt(t), e.head.appendChild(t));
    }
    function di(e) {
      return '[src="' + la(e) + '"]';
    }
    function hi(e) {
      return "script[async]" + e;
    }
    function od(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var c = e.querySelector(
              'style[data-href~="' + la(a.href) + '"]'
            );
            if (c)
              return t.instance = c, wt(c), c;
            var o = be({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return c = (e.ownerDocument || e).createElement("style"), wt(c), Et(c, "style", o), fd(c, a.precedence, e), t.instance = c;
          case "stylesheet":
            o = cc(a.href);
            var f = e.querySelector(
              Nn(o)
            );
            if (f)
              return t.state.loading |= Kn, t.instance = f, wt(f), f;
            c = Z0(a), (o = kn.get(o)) && L0(c, o), f = (e.ownerDocument || e).createElement("link"), wt(f);
            var d = f;
            return d._p = new Promise(function(h, p) {
              d.onload = h, d.onerror = p;
            }), Et(f, "link", c), t.state.loading |= Kn, fd(f, a.precedence, e), t.instance = f;
          case "script":
            return f = di(a.src), (o = e.querySelector(
              hi(f)
            )) ? (t.instance = o, wt(o), o) : (c = a, (o = kn.get(f)) && (c = be({}, a), w0(c, o)), e = e.ownerDocument || e, o = e.createElement("script"), wt(o), Et(o, "link", c), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & Kn) === Ys && (c = t.instance, t.state.loading |= Kn, fd(c, a.precedence, e));
      return t.instance;
    }
    function fd(e, t, a) {
      for (var c = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = c.length ? c[c.length - 1] : null, f = o, d = 0; d < c.length; d++) {
        var h = c[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function L0(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function w0(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function J0(e, t, a) {
      if (wp === null) {
        var c = /* @__PURE__ */ new Map(), o = wp = /* @__PURE__ */ new Map();
        o.set(a, c);
      } else
        o = wp, c = o.get(a), c || (c = /* @__PURE__ */ new Map(), o.set(a, c));
      if (c.has(e)) return c;
      for (c.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[xo] || f[Sl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Bo) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = c.get(d);
          h ? h.push(f) : c.set(d, [f]);
        }
      }
      return c;
    }
    function K0(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function So(e, t, a) {
      var c = !a.ancestorInfo.containerTagInScope;
      if (a.context === uh || t.itemProp != null)
        return !c || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            c && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = ze(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            c && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          switch (t.rel) {
            case "stylesheet":
              return e = t.precedence, t = t.disabled, typeof e != "string" && c && console.error(
                'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
              ), typeof e == "string" && t == null;
            default:
              return !0;
          }
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            c && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          c && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function Ff(e) {
      return !(e.type === "stylesheet" && (e.state.loading & i2) === Ys);
    }
    function Wm() {
    }
    function Fm(e, t, a) {
      if ($y === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var c = $y;
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & Kn) === Ys) {
        if (t.instance === null) {
          var o = cc(a.href), f = e.querySelector(
            Nn(o)
          );
          if (f) {
            e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (c.count++, c = If.bind(c), e.then(c, c)), t.state.loading |= Kn, t.instance = f, wt(f);
            return;
          }
          f = e.ownerDocument || e, a = Z0(a), (o = kn.get(o)) && L0(a, o), f = f.createElement("link"), wt(f);
          var d = f;
          d._p = new Promise(function(h, p) {
            d.onload = h, d.onerror = p;
          }), Et(f, "link", a), t.instance = f;
        }
        c.stylesheets === null && (c.stylesheets = /* @__PURE__ */ new Map()), c.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & i2) === Ys && (c.count++, t = If.bind(c), e.addEventListener("load", t), e.addEventListener("error", t));
      }
    }
    function Im() {
      if ($y === null)
        throw Error(
          "Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug."
        );
      var e = $y;
      return e.stylesheets && e.count === 0 && sd(e, e.stylesheets), 0 < e.count ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && sd(e, e.stylesheets), e.unsuspend) {
            var c = e.unsuspend;
            e.unsuspend = null, c();
          }
        }, 6e4);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a);
        };
      } : null;
    }
    function If() {
      if (this.count--, this.count === 0) {
        if (this.stylesheets)
          sd(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function sd(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Jp = /* @__PURE__ */ new Map(), t.forEach(Pm, e), Jp = null, If.call(e));
    }
    function Pm(e, t) {
      if (!(t.state.loading & Kn)) {
        var a = Jp.get(e);
        if (a) var c = a.get(S1);
        else {
          a = /* @__PURE__ */ new Map(), Jp.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), c = d);
          }
          c && a.set(S1, c);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || c, f === c && a.set(S1, o), a.set(d, o), this.count++, c = If.bind(this), o.addEventListener("load", c), o.addEventListener("error", c), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= Kn;
      }
    }
    function rd(e, t, a, c, o, f, d, h) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = qs, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = fh(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fh(0), this.hiddenUpdates = fh(null), this.identifierPrefix = c, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function k0(e, t, a, c, o, f, d, h, p, v, U, B) {
      return e = new rd(
        e,
        t,
        a,
        d,
        h,
        p,
        v,
        B
      ), t = ub, f === !0 && (t |= Pl | Ru), zt && (t |= Nl), f = ge(3, null, null, t), e.current = f, f.stateNode = e, t = pf(), Qc(t), e.pooledCache = t, Qc(t), f.memoizedState = {
        element: c,
        isDehydrated: a,
        cache: t
      }, Xl(f), e;
    }
    function $0(e) {
      return e ? (e = qo, e) : qo;
    }
    function Le(e, t, a, c, o, f) {
      if (fl && typeof fl.onScheduleFiberRoot == "function")
        try {
          fl.onScheduleFiberRoot(dc, c, a);
        } catch (d) {
          Wl || (Wl = !0, console.error(
            "React instrumentation encountered an error: %s",
            d
          ));
        }
      k !== null && typeof k.markRenderScheduled == "function" && k.markRenderScheduled(t), o = $0(o), c.context === null ? c.context = o : c.pendingContext = o, Il && ra !== null && !d2 && (d2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        te(ra) || "Unknown"
      )), c = dn(t), c.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), c.callback = f), a = wa(e, c, t), a !== null && (St(a, e, t), wu(a, e, t));
    }
    function dd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function W0(e, t) {
      dd(e, t), (e = e.alternate) && dd(e, t);
    }
    function F0(e) {
      if (e.tag === 13) {
        var t = Vl(e, 67108864);
        t !== null && St(t, e, 67108864), W0(e, 67108864);
      }
    }
    function hv() {
      return ra;
    }
    function yv() {
      for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; 31 > a; a++) {
        var c = ev(t);
        e.set(t, c), t *= 2;
      }
      return e;
    }
    function mv(e, t, a, c) {
      var o = H.T;
      H.T = null;
      var f = oe.p;
      try {
        oe.p = sl, ic(e, t, a, c);
      } finally {
        oe.p = f, H.T = o;
      }
    }
    function hd(e, t, a, c) {
      var o = H.T;
      H.T = null;
      var f = oe.p;
      try {
        oe.p = en, ic(e, t, a, c);
      } finally {
        oe.p = f, H.T = o;
      }
    }
    function ic(e, t, a, c) {
      if (kp) {
        var o = Pf(c);
        if (o === null)
          Ul(
            e,
            t,
            c,
            $p,
            a
          ), oc(e, c);
        else if (es(
          o,
          e,
          t,
          a,
          c
        ))
          c.stopPropagation();
        else if (oc(e, c), t & 4 && -1 < _b.indexOf(e)) {
          for (; o !== null; ) {
            var f = ta(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Rc(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var p = 1 << 31 - bl(d);
                        h.entanglements[1] |= p, d &= ~p;
                      }
                      Ua(f), (we & (ma | Mu)) === tn && (Cp = qn() + Lg, ii(0));
                    }
                  }
                  break;
                case 13:
                  h = Vl(f, 2), h !== null && St(h, f, 2), ui(), W0(f, 2);
              }
            if (f = Pf(c), f === null && Ul(
              e,
              t,
              c,
              $p,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && c.stopPropagation();
        } else
          Ul(
            e,
            t,
            c,
            null,
            a
          );
      }
    }
    function Pf(e) {
      return e = Bc(e), To(e);
    }
    function To(e) {
      if ($p = null, e = Wn(e), e !== null) {
        var t = $e(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = va(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return $p = e, null;
    }
    function yd(e) {
      switch (e) {
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
          return sl;
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
          return en;
        case "message":
          switch (rc()) {
            case bd:
              return sl;
            case fs:
              return en;
            case Oo:
            case Sv:
              return Tu;
            case ss:
              return Ad;
            default:
              return Tu;
          }
        default:
          return Tu;
      }
    }
    function oc(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          wo = null;
          break;
        case "dragenter":
        case "dragleave":
          Jo = null;
          break;
        case "mouseover":
        case "mouseout":
          Ko = null;
          break;
        case "pointerover":
        case "pointerout":
          Fy.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Iy.delete(t.pointerId);
      }
    }
    function $l(e, t, a, c, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ta(t), t !== null && F0(t)), e) : (e.eventSystemFlags |= c, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function es(e, t, a, c, o) {
      switch (t) {
        case "focusin":
          return wo = $l(
            wo,
            e,
            t,
            a,
            c,
            o
          ), !0;
        case "dragenter":
          return Jo = $l(
            Jo,
            e,
            t,
            a,
            c,
            o
          ), !0;
        case "mouseover":
          return Ko = $l(
            Ko,
            e,
            t,
            a,
            c,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return Fy.set(
            f,
            $l(
              Fy.get(f) || null,
              e,
              t,
              a,
              c,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, Iy.set(
            f,
            $l(
              Iy.get(f) || null,
              e,
              t,
              a,
              c,
              o
            )
          ), !0;
      }
      return !1;
    }
    function ep(e) {
      var t = Wn(e.target);
      if (t !== null) {
        var a = $e(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = va(a), t !== null) {
              e.blockedOn = t, lv(e.priority, function() {
                if (a.tag === 13) {
                  var c = Jl(a);
                  c = zl(c);
                  var o = Vl(
                    a,
                    c
                  );
                  o !== null && St(o, a, c), W0(a, c);
                }
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ts(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Pf(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var c = new a.constructor(
            a.type,
            a
          ), o = c;
          s !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = o, a.target.dispatchEvent(c), s === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), s = null;
        } else
          return t = ta(a), t !== null && F0(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function I0(e, t, a) {
      ts(e) && a.delete(t);
    }
    function tp() {
      T1 = !1, wo !== null && ts(wo) && (wo = null), Jo !== null && ts(Jo) && (Jo = null), Ko !== null && ts(Ko) && (Ko = null), Fy.forEach(I0), Iy.forEach(I0);
    }
    function ls(e, t) {
      e.blockedOn === t && (e.blockedOn = null, T1 || (T1 = !0, Rt.unstable_scheduleCallback(
        Rt.unstable_NormalPriority,
        tp
      )));
    }
    function lp(e) {
      Wp !== e && (Wp = e, Rt.unstable_scheduleCallback(
        Rt.unstable_NormalPriority,
        function() {
          Wp === e && (Wp = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], c = e[t + 1], o = e[t + 2];
            if (typeof c != "function") {
              if (To(c || a) === null)
                continue;
              break;
            }
            var f = ta(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: c
            }, Object.freeze(a), kc(
              f,
              a,
              c,
              o
            ));
          }
        }
      ));
    }
    function yi(e) {
      function t(p) {
        return ls(p, e);
      }
      wo !== null && ls(wo, e), Jo !== null && ls(Jo, e), Ko !== null && ls(Ko, e), Fy.forEach(t), Iy.forEach(t);
      for (var a = 0; a < ko.length; a++) {
        var c = ko[a];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; 0 < ko.length && (a = ko[0], a.blockedOn === null); )
        ep(a), a.blockedOn === null && ko.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (c = 0; c < a.length; c += 3) {
          var o = a[c], f = a[c + 1], d = o[Fl] || null;
          if (typeof f == "function")
            d || lp(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Fl] || null)
                h = d.formAction;
              else if (To(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[c + 1] = h : (a.splice(c, 3), c -= 3), lp(a);
          }
        }
    }
    function md(e) {
      this._internalRoot = e;
    }
    function as(e) {
      this._internalRoot = e;
    }
    function ap(e) {
      e[yc] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Rt = N2(), ns = R1, pv = C2, be = Object.assign, us = Symbol.for("react.element"), fc = Symbol.for("react.transitional.element"), mi = Symbol.for("react.portal"), ye = Symbol.for("react.fragment"), Eo = Symbol.for("react.strict_mode"), Ao = Symbol.for("react.profiler"), P0 = Symbol.for("react.provider"), pd = Symbol.for("react.consumer"), Ca = Symbol.for("react.context"), vu = Symbol.for("react.forward_ref"), Ro = Symbol.for("react.suspense"), sc = Symbol.for("react.suspense_list"), cs = Symbol.for("react.memo"), sa = Symbol.for("react.lazy"), ey = Symbol.for("react.activity"), np = Symbol.for("react.memo_cache_sentinel"), ty = Symbol.iterator, vd = Symbol.for("react.client.reference"), se = Array.isArray, H = ns.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = pv.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, vv = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), is = [], os = [], Na = -1, gu = pt(null), zo = pt(null), Bn = pt(null), Do = pt(null), bu = Object.prototype.hasOwnProperty, gd = Rt.unstable_scheduleCallback, gv = Rt.unstable_cancelCallback, up = Rt.unstable_shouldYield, bv = Rt.unstable_requestPaint, qn = Rt.unstable_now, rc = Rt.unstable_getCurrentPriorityLevel, bd = Rt.unstable_ImmediatePriority, fs = Rt.unstable_UserBlockingPriority, Oo = Rt.unstable_NormalPriority, Sv = Rt.unstable_LowPriority, ss = Rt.unstable_IdlePriority, Tv = Rt.log, Pa = Rt.unstable_setDisableYieldValue, dc = null, fl = null, k = null, Wl = !1, zt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", bl = Math.clz32 ? Math.clz32 : ih, Sd = Math.log, Su = Math.LN2, Td = 256, Ed = 4194304, sl = 2, en = 8, Tu = 32, Ad = 268435456, hc = Math.random().toString(36).slice(2), Sl = "__reactFiber$" + hc, Fl = "__reactProps$" + hc, yc = "__reactContainer$" + hc, ly = "__reactEvents$" + hc, cp = "__reactListeners$" + hc, Mo = "__reactHandles$" + hc, Uo = "__reactResources$" + hc, xo = "__reactMarker$" + hc, ip = /* @__PURE__ */ new Set(), Ba = {}, pi = {}, op = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Rd = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), zd = {}, Dd = {}, mc = 0, ay, ny, fp, uy, Ho, sp, rp;
    Vs.__reactDisabledLog = !0;
    var cy, rs, Co = !1, ds = new (typeof WeakMap == "function" ? WeakMap : Map)(), ra = null, Il = !1, Ev = /[\n"\\]/g, iy = !1, oy = !1, fy = !1, sy = !1, Od = !1, ry = !1, hs = ["value", "defaultValue"], dp = !1, hp = /["'&<>\n\t]|^\s|\s$/, dy = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), Md = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), Ud = Md.concat(["button"]), hy = "dd dt li option optgroup p rp rt".split(" "), yy = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, No = {}, Yn = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, Eu = /([A-Z])/g, Au = /^ms-/, ys = /^(?:webkit|moz|o)[A-Z]/, ms = /^-ms-/, pc = /-(.)/g, yp = /;\s*$/, vi = {}, gi = {}, mp = !1, my = !1, ps = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), vs = "http://www.w3.org/1998/Math/MathML", Bo = "http://www.w3.org/2000/svg", xd = /* @__PURE__ */ new Map([
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
    ]), bi = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, py = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, _n = {}, vy = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Hd = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), gy = !1, Cl = {}, gs = /^on./, l = /^on[^A-Z]/, n = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), u = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), i = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, s = null, r = null, y = null, m = !1, g = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), D = !1;
    if (g)
      try {
        var G = {};
        Object.defineProperty(G, "passive", {
          get: function() {
            D = !0;
          }
        }), window.addEventListener("test", G, G), window.removeEventListener("test", G, G);
      } catch {
        D = !1;
      }
    var X = null, M = null, x = null, le = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ae = al(le), Ge = be({}, le, { view: 0, detail: 0 }), R = al(Ge), E, z, V, $ = be({}, Ge, {
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
      getModifierState: Ws,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== V && (V && e.type === "mousemove" ? (E = e.screenX - V.screenX, z = e.screenY - V.screenY) : z = E = 0, V = e), E);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : z;
      }
    }), Te = al($), ee = be({}, $, { dataTransfer: 0 }), ie = al(ee), Ft = be({}, Ge, { relatedTarget: 0 }), Ce = al(Ft), vc = be({}, le, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Av = al(vc), B2 = be({}, le, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), q2 = al(B2), Y2 = be({}, le, { data: 0 }), z1 = al(
      Y2
    ), _2 = z1, G2 = {
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
    }, V2 = {
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
    }, X2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, j2 = be({}, Ge, {
      key: function(e) {
        if (e.key) {
          var t = G2[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Xi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? V2[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ws,
      charCode: function(e) {
        return e.type === "keypress" ? Xi(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Q2 = al(j2), Z2 = be({}, $, {
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
    }), D1 = al(Z2), L2 = be({}, Ge, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ws
    }), w2 = al(L2), J2 = be({}, le, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), K2 = al(J2), k2 = be({}, $, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), $2 = al(k2), W2 = be({}, le, {
      newState: 0,
      oldState: 0
    }), F2 = al(W2), I2 = [9, 13, 27, 32], O1 = 229, Rv = g && "CompositionEvent" in window, by = null;
    g && "documentMode" in document && (by = document.documentMode);
    var P2 = g && "TextEvent" in window && !by, M1 = g && (!Rv || by && 8 < by && 11 >= by), U1 = 32, x1 = String.fromCharCode(U1), H1 = !1, Cd = !1, eb = {
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
    }, Sy = null, Ty = null, C1 = !1;
    g && (C1 = bh("input") && (!document.documentMode || 9 < document.documentMode));
    var da = typeof Object.is == "function" ? Object.is : fv, tb = g && "documentMode" in document && 11 >= document.documentMode, Nd = null, zv = null, Ey = null, Dv = !1, Bd = {
      animationend: tu("Animation", "AnimationEnd"),
      animationiteration: tu("Animation", "AnimationIteration"),
      animationstart: tu("Animation", "AnimationStart"),
      transitionrun: tu("Transition", "TransitionRun"),
      transitionstart: tu("Transition", "TransitionStart"),
      transitioncancel: tu("Transition", "TransitionCancel"),
      transitionend: tu("Transition", "TransitionEnd")
    }, Ov = {}, N1 = {};
    g && (N1 = document.createElement("div").style, "AnimationEvent" in window || (delete Bd.animationend.animation, delete Bd.animationiteration.animation, delete Bd.animationstart.animation), "TransitionEvent" in window || delete Bd.transitionend.transition);
    var B1 = _c("animationend"), q1 = _c("animationiteration"), Y1 = _c("animationstart"), lb = _c("transitionrun"), ab = _c("transitionstart"), nb = _c("transitioncancel"), _1 = _c("transitionend"), G1 = /* @__PURE__ */ new Map(), Mv = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    Mv.push("scrollEnd");
    var Uv = /* @__PURE__ */ new WeakMap(), xv = 1, bs = 2, Gn = [], qd = 0, Hv = 0, qo = {};
    Object.freeze(qo);
    var Vn = null, Yd = null, ft = 0, ub = 1, Nl = 2, Pl = 8, Ru = 16, V1 = 64, X1 = !1;
    try {
      var j1 = Object.preventExtensions({});
    } catch {
      X1 = !0;
    }
    var _d = [], Gd = 0, pp = null, vp = 0, Xn = [], jn = 0, Ss = null, Si = 1, Ti = "", ha = null, Ht = null, Ve = !1, Ei = !1, Qn = null, Ts = null, gc = !1, Cv = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Q1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var cb = performance, Z1 = function() {
        return cb.now();
      };
    else {
      var ib = Date;
      Z1 = function() {
        return ib.now();
      };
    }
    var Nv = pt(null), Bv = pt(null), L1 = {}, gp = null, Vd = null, Xd = !1, ob = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, c) {
          e.push(c);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, fb = Rt.unstable_scheduleCallback, sb = Rt.unstable_NormalPriority, rl = {
      $$typeof: Ca,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, jd = Rt.unstable_now, w1 = -0, bp = -0, qa = -1.1, Es = -0, Sp = !1, Tp = !1, Ay = null, qv = 0, As = 0, Qd = null, J1 = H.S;
    H.S = function(e, t) {
      typeof t == "object" && t !== null && typeof t.then == "function" && Dm(e, t), J1 !== null && J1(e, t);
    };
    var Rs = pt(null), zu = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, Ry = [], zy = [], Dy = [], Oy = [], My = [], Uy = [], zs = /* @__PURE__ */ new Set();
    zu.recordUnsafeLifecycleWarnings = function(e, t) {
      zs.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Ry.push(e), e.mode & Pl && typeof t.UNSAFE_componentWillMount == "function" && zy.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Dy.push(e), e.mode & Pl && typeof t.UNSAFE_componentWillReceiveProps == "function" && Oy.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && My.push(e), e.mode & Pl && typeof t.UNSAFE_componentWillUpdate == "function" && Uy.push(e));
    }, zu.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Ry.length && (Ry.forEach(function(h) {
        e.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), Ry = []);
      var t = /* @__PURE__ */ new Set();
      0 < zy.length && (zy.forEach(function(h) {
        t.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), zy = []);
      var a = /* @__PURE__ */ new Set();
      0 < Dy.length && (Dy.forEach(function(h) {
        a.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), Dy = []);
      var c = /* @__PURE__ */ new Set();
      0 < Oy.length && (Oy.forEach(
        function(h) {
          c.add(
            te(h) || "Component"
          ), zs.add(h.type);
        }
      ), Oy = []);
      var o = /* @__PURE__ */ new Set();
      0 < My.length && (My.forEach(function(h) {
        o.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), My = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < Uy.length && (Uy.forEach(function(h) {
        f.add(
          te(h) || "Component"
        ), zs.add(h.type);
      }), Uy = []), 0 < t.size) {
        var d = Ie(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < c.size && (d = Ie(
        c
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = Ie(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = Ie(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = Ie(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = Ie(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var Ep = /* @__PURE__ */ new Map(), K1 = /* @__PURE__ */ new Set();
    zu.recordLegacyContextWarning = function(e, t) {
      for (var a = null, c = e; c !== null; )
        c.mode & Pl && (a = c), c = c.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !K1.has(e.type) && (c = Ep.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (c === void 0 && (c = [], Ep.set(a, c)), c.push(e));
    }, zu.flushLegacyContextWarning = function() {
      Ep.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(te(o) || "Component"), K1.add(o.type);
          });
          var c = Ie(a);
          W(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              c
            );
          });
        }
      });
    }, zu.discardPendingWarnings = function() {
      Ry = [], zy = [], Dy = [], Oy = [], My = [], Uy = [], Ep = /* @__PURE__ */ new Map();
    };
    var xy = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), k1 = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), Ap = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), Yv = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Hy = null, Rp = !1, Zn = 0, Ln = 1, ya = 2, Bl = 4, dl = 8, $1 = 0, W1 = 1, F1 = 2, _v = 3, Yo = !1, I1 = !1, Gv = null, Vv = !1, Zd = pt(null), zp = pt(0), Ld, P1 = /* @__PURE__ */ new Set(), eg = /* @__PURE__ */ new Set(), Xv = /* @__PURE__ */ new Set(), tg = /* @__PURE__ */ new Set(), _o = 0, re = null, et = null, It = null, Dp = !1, wd = !1, Ds = !1, Op = 0, Cy = 0, Ai = null, rb = 0, db = 25, N = null, wn = null, Ri = -1, Ny = !1, Mp = {
      readContext: lt,
      use: yn,
      useCallback: dt,
      useContext: dt,
      useEffect: dt,
      useImperativeHandle: dt,
      useLayoutEffect: dt,
      useInsertionEffect: dt,
      useMemo: dt,
      useReducer: dt,
      useRef: dt,
      useState: dt,
      useDebugValue: dt,
      useDeferredValue: dt,
      useTransition: dt,
      useSyncExternalStore: dt,
      useId: dt,
      useHostTransitionStatus: dt,
      useFormState: dt,
      useActionState: dt,
      useOptimistic: dt,
      useMemoCache: dt,
      useCacheRefresh: dt
    }, jv = null, lg = null, Qv = null, ag = null, bc = null, Du = null, Up = null;
    jv = {
      readContext: function(e) {
        return lt(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return N = "useCallback", Se(), Ea(t), zf(e, t);
      },
      useContext: function(e) {
        return N = "useContext", Se(), lt(e);
      },
      useEffect: function(e, t) {
        return N = "useEffect", Se(), Ea(t), sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", Se(), Ea(a), dr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        N = "useInsertionEffect", Se(), Ea(t), Da(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", Se(), Ea(t), rr(e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", Se(), Ea(t);
        var a = H.H;
        H.H = bc;
        try {
          return hr(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", Se();
        var c = H.H;
        H.H = bc;
        try {
          return Ne(e, t, a);
        } finally {
          H.H = c;
        }
      },
      useRef: function(e) {
        return N = "useRef", Se(), Rf(e);
      },
      useState: function(e) {
        N = "useState", Se();
        var t = H.H;
        H.H = bc;
        try {
          return cu(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", Se();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", Se(), yr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", Se(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", Se(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", Se(), bn();
      },
      useFormState: function(e, t) {
        return N = "useFormState", Se(), Ji(), Ii(e, t);
      },
      useActionState: function(e, t) {
        return N = "useActionState", Se(), Ii(e, t);
      },
      useOptimistic: function(e) {
        return N = "useOptimistic", Se(), ka(e);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Ut,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Se(), $c();
      }
    }, lg = {
      readContext: function(e) {
        return lt(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return N = "useCallback", Q(), zf(e, t);
      },
      useContext: function(e) {
        return N = "useContext", Q(), lt(e);
      },
      useEffect: function(e, t) {
        return N = "useEffect", Q(), sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", Q(), dr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        N = "useInsertionEffect", Q(), Da(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", Q(), rr(e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", Q();
        var a = H.H;
        H.H = bc;
        try {
          return hr(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", Q();
        var c = H.H;
        H.H = bc;
        try {
          return Ne(e, t, a);
        } finally {
          H.H = c;
        }
      },
      useRef: function(e) {
        return N = "useRef", Q(), Rf(e);
      },
      useState: function(e) {
        N = "useState", Q();
        var t = H.H;
        H.H = bc;
        try {
          return cu(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", Q(), yr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", Q(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", Q(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", Q(), bn();
      },
      useActionState: function(e, t) {
        return N = "useActionState", Q(), Ii(e, t);
      },
      useFormState: function(e, t) {
        return N = "useFormState", Q(), Ji(), Ii(e, t);
      },
      useOptimistic: function(e) {
        return N = "useOptimistic", Q(), ka(e);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Ut,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), $c();
      }
    }, Qv = {
      readContext: function(e) {
        return lt(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return N = "useCallback", Q(), Kc(e, t);
      },
      useContext: function(e) {
        return N = "useContext", Q(), lt(e);
      },
      useEffect: function(e, t) {
        N = "useEffect", Q(), Gt(2048, dl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", Q(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return N = "useInsertionEffect", Q(), Gt(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", Q(), Gt(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", Q();
        var a = H.H;
        H.H = Du;
        try {
          return Wu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", Q();
        var c = H.H;
        H.H = Du;
        try {
          return Ra(e, t, a);
        } finally {
          H.H = c;
        }
      },
      useRef: function() {
        return N = "useRef", Q(), xe().memoizedState;
      },
      useState: function() {
        N = "useState", Q();
        var e = H.H;
        H.H = Du;
        try {
          return Ra(Ye);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", Q(), Df(e, t);
      },
      useTransition: function() {
        return N = "useTransition", Q(), vr();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", Q(), Sf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", Q(), xe().memoizedState;
      },
      useFormState: function(e) {
        return N = "useFormState", Q(), Ji(), fr(e);
      },
      useActionState: function(e) {
        return N = "useActionState", Q(), fr(e);
      },
      useOptimistic: function(e, t) {
        return N = "useOptimistic", Q(), iu(e, t);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Ut,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), xe().memoizedState;
      }
    }, ag = {
      readContext: function(e) {
        return lt(e);
      },
      use: yn,
      useCallback: function(e, t) {
        return N = "useCallback", Q(), Kc(e, t);
      },
      useContext: function(e) {
        return N = "useContext", Q(), lt(e);
      },
      useEffect: function(e, t) {
        N = "useEffect", Q(), Gt(2048, dl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", Q(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return N = "useInsertionEffect", Q(), Gt(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", Q(), Gt(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", Q();
        var a = H.H;
        H.H = Up;
        try {
          return Wu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", Q();
        var c = H.H;
        H.H = Up;
        try {
          return Jc(e, t, a);
        } finally {
          H.H = c;
        }
      },
      useRef: function() {
        return N = "useRef", Q(), xe().memoizedState;
      },
      useState: function() {
        N = "useState", Q();
        var e = H.H;
        H.H = Up;
        try {
          return Jc(Ye);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", Q(), mr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", Q(), gr();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", Q(), Sf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", Q(), xe().memoizedState;
      },
      useFormState: function(e) {
        return N = "useFormState", Q(), Ji(), Pi(e);
      },
      useActionState: function(e) {
        return N = "useActionState", Q(), Pi(e);
      },
      useOptimistic: function(e, t) {
        return N = "useOptimistic", Q(), or(e, t);
      },
      useHostTransitionStatus: Zl,
      useMemoCache: Ut,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), xe().memoizedState;
      }
    }, bc = {
      readContext: function(e) {
        return Nt(), lt(e);
      },
      use: function(e) {
        return K(), yn(e);
      },
      useCallback: function(e, t) {
        return N = "useCallback", K(), Se(), zf(e, t);
      },
      useContext: function(e) {
        return N = "useContext", K(), Se(), lt(e);
      },
      useEffect: function(e, t) {
        return N = "useEffect", K(), Se(), sr(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", K(), Se(), dr(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        N = "useInsertionEffect", K(), Se(), Da(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", K(), Se(), rr(e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", K(), Se();
        var a = H.H;
        H.H = bc;
        try {
          return hr(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", K(), Se();
        var c = H.H;
        H.H = bc;
        try {
          return Ne(e, t, a);
        } finally {
          H.H = c;
        }
      },
      useRef: function(e) {
        return N = "useRef", K(), Se(), Rf(e);
      },
      useState: function(e) {
        N = "useState", K(), Se();
        var t = H.H;
        H.H = bc;
        try {
          return cu(e);
        } finally {
          H.H = t;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", K(), Se();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", K(), Se(), yr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", K(), Se(), gn();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", K(), Se(), uu(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", K(), Se(), bn();
      },
      useFormState: function(e, t) {
        return N = "useFormState", K(), Se(), Ii(e, t);
      },
      useActionState: function(e, t) {
        return N = "useActionState", K(), Se(), Ii(e, t);
      },
      useOptimistic: function(e) {
        return N = "useOptimistic", K(), Se(), ka(e);
      },
      useMemoCache: function(e) {
        return K(), Ut(e);
      },
      useHostTransitionStatus: Zl,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Se(), $c();
      }
    }, Du = {
      readContext: function(e) {
        return Nt(), lt(e);
      },
      use: function(e) {
        return K(), yn(e);
      },
      useCallback: function(e, t) {
        return N = "useCallback", K(), Q(), Kc(e, t);
      },
      useContext: function(e) {
        return N = "useContext", K(), Q(), lt(e);
      },
      useEffect: function(e, t) {
        N = "useEffect", K(), Q(), Gt(2048, dl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", K(), Q(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return N = "useInsertionEffect", K(), Q(), Gt(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", K(), Q(), Gt(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", K(), Q();
        var a = H.H;
        H.H = Du;
        try {
          return Wu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", K(), Q();
        var c = H.H;
        H.H = Du;
        try {
          return Ra(e, t, a);
        } finally {
          H.H = c;
        }
      },
      useRef: function() {
        return N = "useRef", K(), Q(), xe().memoizedState;
      },
      useState: function() {
        N = "useState", K(), Q();
        var e = H.H;
        H.H = Du;
        try {
          return Ra(Ye);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", K(), Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", K(), Q(), Df(e, t);
      },
      useTransition: function() {
        return N = "useTransition", K(), Q(), vr();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", K(), Q(), Sf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", K(), Q(), xe().memoizedState;
      },
      useFormState: function(e) {
        return N = "useFormState", K(), Q(), fr(e);
      },
      useActionState: function(e) {
        return N = "useActionState", K(), Q(), fr(e);
      },
      useOptimistic: function(e, t) {
        return N = "useOptimistic", K(), Q(), iu(e, t);
      },
      useMemoCache: function(e) {
        return K(), Ut(e);
      },
      useHostTransitionStatus: Zl,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), xe().memoizedState;
      }
    }, Up = {
      readContext: function(e) {
        return Nt(), lt(e);
      },
      use: function(e) {
        return K(), yn(e);
      },
      useCallback: function(e, t) {
        return N = "useCallback", K(), Q(), Kc(e, t);
      },
      useContext: function(e) {
        return N = "useContext", K(), Q(), lt(e);
      },
      useEffect: function(e, t) {
        N = "useEffect", K(), Q(), Gt(2048, dl, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return N = "useImperativeHandle", K(), Q(), vn(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return N = "useInsertionEffect", K(), Q(), Gt(4, ya, e, t);
      },
      useLayoutEffect: function(e, t) {
        return N = "useLayoutEffect", K(), Q(), Gt(4, Bl, e, t);
      },
      useMemo: function(e, t) {
        N = "useMemo", K(), Q();
        var a = H.H;
        H.H = Du;
        try {
          return Wu(e, t);
        } finally {
          H.H = a;
        }
      },
      useReducer: function(e, t, a) {
        N = "useReducer", K(), Q();
        var c = H.H;
        H.H = Du;
        try {
          return Jc(e, t, a);
        } finally {
          H.H = c;
        }
      },
      useRef: function() {
        return N = "useRef", K(), Q(), xe().memoizedState;
      },
      useState: function() {
        N = "useState", K(), Q();
        var e = H.H;
        H.H = Du;
        try {
          return Jc(Ye);
        } finally {
          H.H = e;
        }
      },
      useDebugValue: function() {
        N = "useDebugValue", K(), Q();
      },
      useDeferredValue: function(e, t) {
        return N = "useDeferredValue", K(), Q(), mr(e, t);
      },
      useTransition: function() {
        return N = "useTransition", K(), Q(), gr();
      },
      useSyncExternalStore: function(e, t, a) {
        return N = "useSyncExternalStore", K(), Q(), Sf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return N = "useId", K(), Q(), xe().memoizedState;
      },
      useFormState: function(e) {
        return N = "useFormState", K(), Q(), Pi(e);
      },
      useActionState: function(e) {
        return N = "useActionState", K(), Q(), Pi(e);
      },
      useOptimistic: function(e, t) {
        return N = "useOptimistic", K(), Q(), or(e, t);
      },
      useMemoCache: function(e) {
        return K(), Ut(e);
      },
      useHostTransitionStatus: Zl,
      useCacheRefresh: function() {
        return N = "useCacheRefresh", Q(), xe().memoizedState;
      }
    };
    var ng = {
      "react-stack-bottom-frame": function(e, t, a) {
        var c = Il;
        Il = !0;
        try {
          return e(t, a);
        } finally {
          Il = c;
        }
      }
    }, Zv = ng["react-stack-bottom-frame"].bind(ng), ug = {
      "react-stack-bottom-frame": function(e) {
        var t = Il;
        Il = !0;
        try {
          return e.render();
        } finally {
          Il = t;
        }
      }
    }, cg = ug["react-stack-bottom-frame"].bind(ug), ig = {
      "react-stack-bottom-frame": function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          ce(e, e.return, a);
        }
      }
    }, Lv = ig["react-stack-bottom-frame"].bind(ig), og = {
      "react-stack-bottom-frame": function(e, t, a, c, o) {
        try {
          t.componentDidUpdate(a, c, o);
        } catch (f) {
          ce(e, e.return, f);
        }
      }
    }, fg = og["react-stack-bottom-frame"].bind(og), sg = {
      "react-stack-bottom-frame": function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, hb = sg["react-stack-bottom-frame"].bind(sg), rg = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (c) {
          ce(e, t, c);
        }
      }
    }, dg = rg["react-stack-bottom-frame"].bind(rg), hg = {
      "react-stack-bottom-frame": function(e) {
        e.resourceKind != null && console.error(
          "Expected only SimpleEffects when enableUseEffectCRUDOverload is disabled, got %s",
          e.resourceKind
        );
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, yb = hg["react-stack-bottom-frame"].bind(hg), yg = {
      "react-stack-bottom-frame": function(e, t, a) {
        try {
          a();
        } catch (c) {
          ce(e, t, c);
        }
      }
    }, mb = yg["react-stack-bottom-frame"].bind(yg), mg = {
      "react-stack-bottom-frame": function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, Go = mg["react-stack-bottom-frame"].bind(mg), Jd = null, By = 0, Ee = null, wv, pg = wv = !1, vg = {}, gg = {}, bg = {};
    Al = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var c = te(e), o = c || "null";
        if (!vg[o]) {
          vg[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = te(e)) && (f = `

Check the render method of \`` + o + "`."), f || c && (f = `

Check the top-level render call using <` + c + ">.");
          var d = "";
          a != null && e !== a && (c = null, typeof a.tag == "number" ? c = te(a) : typeof a.name == "string" && (c = a.name), c && (d = " It was passed a child from " + c + ".")), W(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Kd = xf(!0), Sg = xf(!1), Jn = pt(null), Sc = null, kd = 1, qy = 2, hl = pt(0), Tg = {}, Eg = /* @__PURE__ */ new Set(), Ag = /* @__PURE__ */ new Set(), Rg = /* @__PURE__ */ new Set(), zg = /* @__PURE__ */ new Set(), Dg = /* @__PURE__ */ new Set(), Og = /* @__PURE__ */ new Set(), Mg = /* @__PURE__ */ new Set(), Ug = /* @__PURE__ */ new Set(), xg = /* @__PURE__ */ new Set(), Hg = /* @__PURE__ */ new Set();
    Object.freeze(Tg);
    var Jv = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var c = Jl(e), o = dn(c);
        o.payload = t, a != null && (Fh(a), o.callback = a), t = wa(e, o, c), t !== null && (St(t, e, c), wu(t, e, c)), Ac(e, c);
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var c = Jl(e), o = dn(c);
        o.tag = W1, o.payload = t, a != null && (Fh(a), o.callback = a), t = wa(e, o, c), t !== null && (St(t, e, c), wu(t, e, c)), Ac(e, c);
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = Jl(e), c = dn(a);
        c.tag = F1, t != null && (Fh(t), c.callback = t), t = wa(e, c, a), t !== null && (St(t, e, a), wu(t, e, a)), k !== null && typeof k.markForceUpdateScheduled == "function" && k.markForceUpdateScheduled(e, a);
      }
    }, Kv = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, $d = null, kv = null, Cg = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Tl = !1, Ng = {}, Bg = {}, qg = {}, Yg = {}, Wd = !1, _g = {}, $v = {}, Wv = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Gg = !1, Vg = null;
    Vg = /* @__PURE__ */ new Set();
    var zi = !1, jt = !1, Fv = !1, Xg = typeof WeakSet == "function" ? WeakSet : Set, El = null, Fd = null, Id = null, Pt = null, Ya = !1, Ou = null, Yy = 8192, pb = {
      getCacheForType: function(e) {
        var t = lt(rl), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      getOwner: function() {
        return ra;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var _y = Symbol.for;
      _y("selector.component"), _y("selector.has_pseudo_class"), _y("selector.role"), _y("selector.test_id"), _y("selector.text");
    }
    var vb = [], gb = typeof WeakMap == "function" ? WeakMap : Map, tn = 0, ma = 2, Mu = 4, Di = 0, Gy = 1, Pd = 2, Iv = 3, Os = 4, xp = 6, jg = 5, we = tn, at = null, Oe = null, Me = 0, _a = 0, Vy = 1, Ms = 2, Xy = 3, Qg = 4, Pv = 5, eh = 6, jy = 7, e1 = 8, Us = 9, ke = _a, ln = null, Vo = !1, th = !1, t1 = !1, Tc = 0, Ct = Di, Xo = 0, jo = 0, l1 = 0, an = 0, xs = 0, Qy = null, pa = null, Hp = !1, a1 = 0, Zg = 300, Cp = 1 / 0, Lg = 500, Zy = null, Qo = null, bb = 0, Sb = 1, Tb = 2, Hs = 0, wg = 1, Jg = 2, Kg = 3, Eb = 4, n1 = 5, ql = 0, Zo = null, lh = null, Lo = 0, u1 = 0, c1 = null, kg = null, Ab = 50, Ly = 0, i1 = null, o1 = !1, Np = !1, Rb = 50, Cs = 0, wy = null, ah = !1, Bp = null, $g = !1, Wg = /* @__PURE__ */ new Set(), zb = {}, qp = null, nh = null, f1 = !1, s1 = !1, Yp = !1, r1 = !1, Ns = 0, d1 = {};
    (function() {
      for (var e = 0; e < Mv.length; e++) {
        var t = Mv[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Xa(a, "on" + t);
      }
      Xa(B1, "onAnimationEnd"), Xa(q1, "onAnimationIteration"), Xa(Y1, "onAnimationStart"), Xa("dblclick", "onDoubleClick"), Xa("focusin", "onFocus"), Xa("focusout", "onBlur"), Xa(lb, "onTransitionRun"), Xa(ab, "onTransitionStart"), Xa(nb, "onTransitionCancel"), Xa(_1, "onTransitionEnd");
    })(), zc("onMouseEnter", ["mouseout", "mouseover"]), zc("onMouseLeave", ["mouseout", "mouseover"]), zc("onPointerEnter", ["pointerout", "pointerover"]), zc("onPointerLeave", ["pointerout", "pointerover"]), Hu(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), Hu(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), Hu("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Hu(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), Hu(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), Hu(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var Jy = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), h1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jy)
    ), _p = "_reactListening" + Math.random().toString(36).slice(2), Fg = !1, Ig = !1, Gp = !1, Pg = !1, Vp = !1, Xp = !1, e2 = !1, jp = {}, Db = /\r\n?/g, Ob = /\u0000|\uFFFD/g, Bs = "http://www.w3.org/1999/xlink", y1 = "http://www.w3.org/XML/1998/namespace", Mb = "javascript:throw new Error('React form unexpectedly submitted.')", Ub = "suppressHydrationWarning", Qp = "$", Zp = "/$", Oi = "$?", Ky = "$!", xb = 1, Hb = 2, Cb = 4, m1 = "F!", t2 = "F", l2 = "complete", Nb = "style", Mi = 0, uh = 1, Lp = 2, p1 = null, v1 = null, a2 = { dialog: !0, webview: !0 }, g1 = null, n2 = typeof setTimeout == "function" ? setTimeout : void 0, Bb = typeof clearTimeout == "function" ? clearTimeout : void 0, qs = -1, u2 = typeof Promise == "function" ? Promise : void 0, qb = typeof queueMicrotask == "function" ? queueMicrotask : typeof u2 < "u" ? function(e) {
      return u2.resolve(null).then(e).catch(_0);
    } : n2, b1 = null, Ys = 0, ky = 1, c2 = 2, i2 = 3, Kn = 4, kn = /* @__PURE__ */ new Map(), o2 = /* @__PURE__ */ new Set(), Ui = oe.d;
    oe.d = {
      f: function() {
        var e = Ui.f(), t = ui();
        return e || t;
      },
      r: function(e) {
        var t = ta(e);
        t !== null && t.tag === 5 && t.type === "form" ? kh(t) : Ui.r(e);
      },
      D: function(e) {
        Ui.D(e), km("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Ui.C(e, t), km("preconnect", e, t);
      },
      L: function(e, t, a) {
        Ui.L(e, t, a);
        var c = ch;
        if (c && e && t) {
          var o = 'link[rel="preload"][as="' + la(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + la(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + la(
            a.imageSizes
          ) + '"]')) : o += '[href="' + la(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = cc(e);
              break;
            case "script":
              f = di(e);
          }
          kn.has(f) || (e = be(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), kn.set(f, e), c.querySelector(o) !== null || t === "style" && c.querySelector(
            Nn(f)
          ) || t === "script" && c.querySelector(hi(f)) || (t = c.createElement("link"), Et(t, "link", e), wt(t), c.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Ui.m(e, t);
        var a = ch;
        if (a && e) {
          var c = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + la(c) + '"][href="' + la(e) + '"]', f = o;
          switch (c) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = di(e);
          }
          if (!kn.has(f) && (e = be({ rel: "modulepreload", href: e }, t), kn.set(f, e), a.querySelector(o) === null)) {
            switch (c) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(hi(f)))
                  return;
            }
            c = a.createElement("link"), Et(c, "link", e), wt(c), a.head.appendChild(c);
          }
        }
      },
      X: function(e, t) {
        Ui.X(e, t);
        var a = ch;
        if (a && e) {
          var c = nn(a).hoistableScripts, o = di(e), f = c.get(o);
          f || (f = a.querySelector(
            hi(o)
          ), f || (e = be({ src: e, async: !0 }, t), (t = kn.get(o)) && w0(e, t), f = a.createElement("script"), wt(f), Et(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      },
      S: function(e, t, a) {
        Ui.S(e, t, a);
        var c = ch;
        if (c && e) {
          var o = nn(c).hoistableStyles, f = cc(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Ys, preload: null };
            if (d = c.querySelector(
              Nn(f)
            ))
              h.loading = ky | Kn;
            else {
              e = be(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = kn.get(f)) && L0(e, a);
              var p = d = c.createElement("link");
              wt(p), Et(p, "link", e), p._p = new Promise(function(v, U) {
                p.onload = v, p.onerror = U;
              }), p.addEventListener("load", function() {
                h.loading |= ky;
              }), p.addEventListener("error", function() {
                h.loading |= c2;
              }), h.loading |= Kn, fd(d, t, c);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Ui.M(e, t);
        var a = ch;
        if (a && e) {
          var c = nn(a).hoistableScripts, o = di(e), f = c.get(o);
          f || (f = a.querySelector(
            hi(o)
          ), f || (e = be({ src: e, async: !0, type: "module" }, t), (t = kn.get(o)) && w0(e, t), f = a.createElement("script"), wt(f), Et(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, c.set(o, f));
        }
      }
    };
    var ch = typeof document > "u" ? null : document, wp = null, $y = null, S1 = null, Jp = null, _s = vv, Wy = {
      $$typeof: Ca,
      Provider: null,
      Consumer: null,
      _currentValue: _s,
      _currentValue2: _s,
      _threadCount: 0
    }, f2 = "%c%s%c ", s2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", r2 = "", Kp = " ", Yb = Function.prototype.bind, d2 = !1, h2 = null, y2 = null, m2 = null, p2 = null, v2 = null, g2 = null, b2 = null, S2 = null, T2 = null;
    h2 = function(e, t, a, c) {
      t = L(e, t), t !== null && (a = Dt(t.memoizedState, a, 0, c), t.memoizedState = a, t.baseState = a, e.memoizedProps = be({}, e.memoizedProps), a = Vl(e, 2), a !== null && St(a, e, 2));
    }, y2 = function(e, t, a) {
      t = L(e, t), t !== null && (a = Fe(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = be({}, e.memoizedProps), a = Vl(e, 2), a !== null && St(a, e, 2));
    }, m2 = function(e, t, a, c) {
      t = L(e, t), t !== null && (a = tt(t.memoizedState, a, c), t.memoizedState = a, t.baseState = a, e.memoizedProps = be({}, e.memoizedProps), a = Vl(e, 2), a !== null && St(a, e, 2));
    }, p2 = function(e, t, a) {
      e.pendingProps = Dt(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Vl(e, 2), t !== null && St(t, e, 2);
    }, v2 = function(e, t) {
      e.pendingProps = Fe(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Vl(e, 2), t !== null && St(t, e, 2);
    }, g2 = function(e, t, a) {
      e.pendingProps = tt(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Vl(e, 2), t !== null && St(t, e, 2);
    }, b2 = function(e) {
      var t = Vl(e, 2);
      t !== null && St(t, e, 2);
    }, S2 = function(e) {
      el = e;
    }, T2 = function(e) {
      ut = e;
    };
    var kp = !0, $p = null, T1 = !1, wo = null, Jo = null, Ko = null, Fy = /* @__PURE__ */ new Map(), Iy = /* @__PURE__ */ new Map(), ko = [], _b = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Wp = null;
    if (as.prototype.render = md.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ct(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var c = t.current, o = Jl(c);
      Le(c, o, a, t, null, null);
    }, as.prototype.unmount = md.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (we & (ma | Mu)) !== tn && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Le(e.current, 2, null, e, null, null), ui(), t[yc] = null;
      }
    }, as.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = um();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < ko.length && t !== 0 && t < ko[a].priority; a++) ;
        ko.splice(a, 0, e), a === 0 && ep(e);
      }
    }, function() {
      var e = ns.version;
      if (e !== "19.1.0")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.1.0
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    }(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), oe.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = yl(t), e = e !== null ? _l(e) : null, e = e === null ? null : e.stateNode, e;
    }, !function() {
      var e = {
        bundleType: 1,
        version: "19.1.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: H,
        reconcilerVersion: "19.1.0"
      };
      return e.overrideHookState = h2, e.overrideHookStateDeletePath = y2, e.overrideHookStateRenamePath = m2, e.overrideProps = p2, e.overridePropsDeletePath = v2, e.overridePropsRenamePath = g2, e.scheduleUpdate = b2, e.setErrorHandler = S2, e.setSuspenseHandler = T2, e.scheduleRefresh = rt, e.scheduleRoot = mt, e.setRefreshHandler = Yl, e.getCurrentFiber = hv, e.getLaneLabelMap = yv, e.injectProfilingHooks = Uu, Pe(e);
    }() && g && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var E2 = window.location.protocol;
      /^(https?|file):$/.test(E2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (E2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    lm.createRoot = function(e, t) {
      if (!ct(e))
        throw Error("Target container is not a DOM element.");
      ap(e);
      var a = !1, c = "", o = Ih, f = Cm, d = Er, h = null;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === fc && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (c = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (h = t.unstable_transitionCallbacks)), t = k0(
        e,
        1,
        !1,
        null,
        null,
        a,
        c,
        o,
        f,
        d,
        h,
        null
      ), e[yc] = t.current, x0(e), new md(t);
    }, lm.hydrateRoot = function(e, t, a) {
      if (!ct(e))
        throw Error("Target container is not a DOM element.");
      ap(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var c = !1, o = "", f = Ih, d = Cm, h = Er, p = null, v = null;
      return a != null && (a.unstable_strictMode === !0 && (c = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (p = a.unstable_transitionCallbacks), a.formState !== void 0 && (v = a.formState)), t = k0(
        e,
        1,
        !0,
        t,
        a ?? null,
        c,
        o,
        f,
        d,
        h,
        p,
        v
      ), t.context = $0(null), a = t.current, c = Jl(a), c = zl(c), o = dn(c), o.callback = null, wa(a, o, c), a = c, t.current.lanes = a, Hi(t, a), Ua(t), e[yc] = t.current, x0(e), new as(t);
    }, lm.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), lm;
}
var H2;
function Kb() {
  if (H2) return Ip.exports;
  H2 = 1;
  function L() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L);
      } catch (Dt) {
        console.error(Dt);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (L(), Ip.exports = wb()) : Ip.exports = Jb(), Ip.exports;
}
var kb = Kb();
const $b = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='35.93'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20228'%3e%3cpath%20fill='%2300D8FF'%20d='M210.483%2073.824a171.49%20171.49%200%200%200-8.24-2.597c.465-1.9.893-3.777%201.273-5.621c6.238-30.281%202.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254%2019.526a171.23%20171.23%200%200%200-6.375%205.848a155.866%20155.866%200%200%200-4.241-3.917C100.759%203.829%2077.587-4.822%2063.673%203.233C50.33%2010.957%2046.379%2033.89%2051.995%2062.588a170.974%20170.974%200%200%200%201.892%208.48c-3.28.932-6.445%201.924-9.474%202.98C17.309%2083.498%200%2098.307%200%20113.668c0%2015.865%2018.582%2031.778%2046.812%2041.427a145.52%20145.52%200%200%200%206.921%202.165a167.467%20167.467%200%200%200-2.01%209.138c-5.354%2028.2-1.173%2050.591%2012.134%2058.266c13.744%207.926%2036.812-.22%2059.273-19.855a145.567%20145.567%200%200%200%205.342-4.923a168.064%20168.064%200%200%200%206.92%206.314c21.758%2018.722%2043.246%2026.282%2056.54%2018.586c13.731-7.949%2018.194-32.003%2012.4-61.268a145.016%20145.016%200%200%200-1.535-6.842c1.62-.48%203.21-.974%204.76-1.488c29.348-9.723%2048.443-25.443%2048.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365%2070.984c-1.4.463-2.836.91-4.3%201.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11%209.31-21.767%2012.459-31.957c2.619.758%205.16%201.557%207.61%202.4c23.69%208.156%2038.14%2020.213%2038.14%2029.504c0%209.896-15.606%2022.743-40.946%2031.14Zm-10.514%2020.834c2.562%2012.94%202.927%2024.64%201.23%2033.787c-1.524%208.219-4.59%2013.698-8.382%2015.893c-8.067%204.67-25.32-1.4-43.927-17.412a156.726%20156.726%200%200%201-6.437-5.87c7.214-7.889%2014.423-17.06%2021.459-27.246c12.376-1.098%2024.068-2.894%2034.671-5.345a134.17%20134.17%200%200%201%201.386%206.193ZM87.276%20214.515c-7.882%202.783-14.16%202.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923%20156.923%200%200%201%201.869-8.499c10.486%202.32%2022.093%203.988%2034.498%204.994c7.084%209.967%2014.501%2019.128%2021.976%2027.15a134.668%20134.668%200%200%201-4.877%204.492c-9.933%208.682-19.886%2014.842-28.658%2017.94ZM50.35%20144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322%2013.897-21.212%2037.076-29.293c2.813-.98%205.757-1.905%208.812-2.773c3.204%2010.42%207.406%2021.315%2012.477%2032.332c-5.137%2011.18-9.399%2022.249-12.634%2032.792a134.718%20134.718%200%200%201-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134%206.425-47.789c8.564-4.958%2027.502%202.111%2047.463%2019.835a144.318%20144.318%200%200%201%203.841%203.545c-7.438%207.987-14.787%2017.08-21.808%2026.988c-12.04%201.116-23.565%202.908-34.161%205.309a160.342%20160.342%200%200%201-1.76-7.887Zm110.427%2027.268a347.8%20347.8%200%200%200-7.785-12.803c8.168%201.033%2015.994%202.404%2023.343%204.08c-2.206%207.072-4.956%2014.465-8.193%2022.045a381.151%20381.151%200%200%200-7.365-13.322Zm-45.032-43.861c5.044%205.465%2010.096%2011.566%2015.065%2018.186a322.04%20322.04%200%200%200-30.257-.006c4.974-6.559%2010.069-12.652%2015.192-18.18ZM82.802%2087.83a323.167%20323.167%200%200%200-7.227%2013.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634%2015.093-2.97%2023.209-3.984a321.524%20321.524%200%200%200-7.848%2012.897Zm8.081%2065.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3%205.045-14.885%208.298-22.6a321.187%20321.187%200%200%200%207.257%2013.246c2.594%204.48%205.28%208.868%208.038%2013.147Zm37.542%2031.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192%209.899.29%2014.978.29c5.218%200%2010.376-.117%2015.453-.343c-4.985%206.774-10.018%2012.97-15.028%2018.486Zm52.198-57.817c3.422%207.8%206.306%2015.345%208.596%2022.52c-7.422%201.694-15.436%203.058-23.88%204.071a382.417%20382.417%200%200%200%207.859-13.026a347.403%20347.403%200%200%200%207.425-13.565Zm-16.898%208.101a358.557%20358.557%200%200%201-12.281%2019.815a329.4%20329.4%200%200%201-23.444.823c-7.967%200-15.716-.248-23.178-.732a310.202%20310.202%200%200%201-12.513-19.846h.001a307.41%20307.41%200%200%201-10.923-20.627a310.278%20310.278%200%200%201%2010.89-20.637l-.001.001a307.318%20307.318%200%200%201%2012.413-19.761c7.613-.576%2015.42-.876%2023.31-.876H128c7.926%200%2015.743.303%2023.354.883a329.357%20329.357%200%200%201%2012.335%2019.695a358.489%20358.489%200%200%201%2011.036%2020.54a329.472%20329.472%200%200%201-11%2020.722Zm22.56-122.124c8.572%204.944%2011.906%2024.881%206.52%2051.026c-.344%201.668-.73%203.367-1.15%205.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789%20160.789%200%200%201%205.888-5.4c18.9-16.447%2036.564-22.941%2044.612-18.3ZM128%2090.808c12.625%200%2022.86%2010.235%2022.86%2022.86s-10.235%2022.86-22.86%2022.86s-22.86-10.235-22.86-22.86s10.235-22.86%2022.86-22.86Z'%3e%3c/path%3e%3c/svg%3e", Wb = "/vite.svg";
function Fb() {
  const [L, Dt] = Vb(0);
  return /* @__PURE__ */ Ga.jsxs(Ga.Fragment, { children: [
    /* @__PURE__ */ Ga.jsxs("div", { children: [
      /* @__PURE__ */ Ga.jsx("a", { href: "https://vite.dev", target: "_blank", children: /* @__PURE__ */ Ga.jsx("img", { src: Wb, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ Ga.jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ Ga.jsx("img", { src: $b, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ Ga.jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ Ga.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ Ga.jsxs("button", { onClick: () => Dt((tt) => tt + 1), children: [
        "count is ",
        L
      ] }),
      /* @__PURE__ */ Ga.jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ Ga.jsx("code", { children: "src/App.jsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ Ga.jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })
  ] });
}
window.mount = (L) => {
  kb.createRoot(L).render(/* @__PURE__ */ Ga.jsx(Fb, {}));
};
