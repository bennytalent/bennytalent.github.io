/*!
 * @license
 *
 * Scandit Barcode Scanner SDK for the Web
 *
 * Copyright © 2018 Scandit AG. All Rights Reserved.
 *
 * The use of this software is governed by the Scandit Terms and Conditions.
 * https://ssl.scandit.com/terms/test.pdf
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.ScanditSDK = {})
}(this, function (e) {
    "use strict";
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function n(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    function r(e, t) {
        return e(t = {exports: {}}, t.exports), t.exports
    }

    var i = Math.ceil, a = Math.floor, o = function (e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? a : i)(e)
    }, s = function (e) {
        if (void 0 == e) throw TypeError("Can't call method on  " + e);
        return e
    }, c = r(function (e) {
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
    }), d = r(function (e) {
        var t = e.exports = {version: "2.5.1"};
        "number" == typeof __e && (__e = t)
    }), u = (d.version, function (e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
    }), l = function (e, t, n) {
        if (u(e), void 0 === t) return e;
        switch (n) {
            case 1:
                return function (n) {
                    return e.call(t, n)
                };
            case 2:
                return function (n, r) {
                    return e.call(t, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return e.call(t, n, r, i)
                }
        }
        return function () {
            return e.apply(t, arguments)
        }
    }, f = function (e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
    }, p = function (e) {
        if (!f(e)) throw TypeError(e + " is not an object!");
        return e
    }, m = function (e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }, h = !m(function () {
        return 7 != Object.defineProperty({}, "a", {
            get: function () {
                return 7
            }
        }).a
    }), v = c.document, g = f(v) && f(v.createElement), y = function (e) {
        return g ? v.createElement(e) : {}
    }, S = !h && !m(function () {
        return 7 != Object.defineProperty(y("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }), _ = function (e, t) {
        if (!f(e)) return e;
        var n, r;
        if (t && "function" == typeof(n = e.toString) && !f(r = n.call(e))) return r;
        if ("function" == typeof(n = e.valueOf) && !f(r = n.call(e))) return r;
        if (!t && "function" == typeof(n = e.toString) && !f(r = n.call(e))) return r;
        throw TypeError("Can't convert object to primitive value")
    }, C = Object.defineProperty, w = {
        f: h ? Object.defineProperty : function (e, t, n) {
            if (p(e), t = _(t, !0), p(n), S) try {
                return C(e, t, n)
            } catch (e) {
            }
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    }, T = function (e, t) {
        return {enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t}
    }, b = h ? function (e, t, n) {
        return w.f(e, t, T(1, n))
    } : function (e, t, n) {
        return e[t] = n, e
    }, E = function (e, t, n) {
        var r, i, a, o = e & E.F, s = e & E.G, u = e & E.S, f = e & E.P, p = e & E.B, m = e & E.W,
            h = s ? d : d[t] || (d[t] = {}), v = h.prototype, g = s ? c : u ? c[t] : (c[t] || {}).prototype;
        for (r in s && (n = t), n) (i = !o && g && void 0 !== g[r]) && r in h || (a = i ? g[r] : n[r], h[r] = s && "function" != typeof g[r] ? n[r] : p && i ? l(a, c) : m && g[r] == a ? function (e) {
            var t = function (t, n, r) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t);
                        case 2:
                            return new e(t, n)
                    }
                    return new e(t, n, r)
                }
                return e.apply(this, arguments)
            };
            return t.prototype = e.prototype, t
        }(a) : f && "function" == typeof a ? l(Function.call, a) : a, f && ((h.virtual || (h.virtual = {}))[r] = a, e & E.R && v && !v[r] && b(v, r, a)))
    };
    E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128;
    var V = E, A = b, M = {}.hasOwnProperty, k = function (e, t) {
            return M.call(e, t)
        }, I = {}, P = {}.toString, L = function (e) {
            return P.call(e).slice(8, -1)
        }, O = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
            return "String" == L(e) ? e.split("") : Object(e)
        }, D = function (e) {
            return O(s(e))
        }, N = Math.min, R = function (e) {
            return e > 0 ? N(o(e), 9007199254740991) : 0
        }, x = Math.max, j = Math.min, U = c["__core-js_shared__"] || (c["__core-js_shared__"] = {}), F = function (e) {
            return U[e] || (U[e] = {})
        }, B = 0, z = Math.random(), G = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++B + z).toString(36))
        }, W = F("keys"), Y = function (e) {
            return W[e] || (W[e] = G(e))
        }, Q = function (e, t, n) {
            for (var r = D(e), i = R(r.length), a = function (e, t) {
                return (e = o(e)) < 0 ? x(e + t, 0) : j(e, t)
            }(n, i); i > a; a++) if (a in r && r[a] === t) return a || 0;
            return -1
        }, H = Y("IE_PROTO"), q = function (e, t) {
            var n, r = D(e), i = 0, a = [];
            for (n in r) n != H && k(r, n) && a.push(n);
            for (; t.length > i;) k(r, n = t[i++]) && (~Q(a, n) || a.push(n));
            return a
        }, J = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),
        K = Object.keys || function (e) {
            return q(e, J)
        }, Z = h ? Object.defineProperties : function (e, t) {
            p(e);
            for (var n, r = K(t), i = r.length, a = 0; i > a;) w.f(e, n = r[a++], t[n]);
            return e
        }, X = c.document, $ = X && X.documentElement, ee = Y("IE_PROTO"), te = function () {
        }, ne = function () {
            var e, t = y("iframe"), n = J.length;
            for (t.style.display = "none", $.appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), ne = e.F; n--;) delete ne.prototype[J[n]];
            return ne()
        }, re = Object.create || function (e, t) {
            var n;
            return null !== e ? (te.prototype = p(e), n = new te, te.prototype = null, n[ee] = e) : n = ne(), void 0 === t ? n : Z(n, t)
        }, ie = r(function (e) {
            var t = F("wks"), n = c.Symbol, r = "function" == typeof n;
            (e.exports = function (e) {
                return t[e] || (t[e] = r && n[e] || (r ? n : G)("Symbol." + e))
            }).store = t
        }), ae = w.f, oe = ie("toStringTag"), se = function (e, t, n) {
            e && !k(e = n ? e : e.prototype, oe) && ae(e, oe, {configurable: !0, value: t})
        }, ce = {};
    b(ce, ie("iterator"), function () {
        return this
    });
    var de = function (e, t, n) {
        e.prototype = re(ce, {next: T(1, n)}), se(e, t + " Iterator")
    }, ue = function (e) {
        return Object(s(e))
    }, le = Y("IE_PROTO"), fe = Object.prototype, pe = Object.getPrototypeOf || function (e) {
        return e = ue(e), k(e, le) ? e[le] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? fe : null
    }, me = ie("iterator"), he = !([].keys && "next" in [].keys()), ve = function () {
        return this
    }, ge = function (e, t, n, r, i, a, o) {
        de(n, t, r);
        var s, c, d, u = function (e) {
                if (!he && e in m) return m[e];
                switch (e) {
                    case"keys":
                    case"values":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this, e)
                }
            }, l = t + " Iterator", f = "values" == i, p = !1, m = e.prototype, h = m[me] || m["@@iterator"] || i && m[i],
            v = h || u(i), g = i ? f ? u("entries") : v : void 0, y = "Array" == t && m.entries || h;
        if (y && (d = pe(y.call(new e))) !== Object.prototype && d.next && se(d, l, !0), f && h && "values" !== h.name && (p = !0, v = function () {
                return h.call(this)
            }), o && (he || p || !m[me]) && b(m, me, v), I[t] = v, I[l] = ve, i) if (s = {
                values: f ? v : u("values"),
                keys: a ? v : u("keys"),
                entries: g
            }, o) for (c in s) c in m || A(m, c, s[c]); else V(V.P + V.F * (he || p), t, s);
        return s
    }, ye = function (e, t) {
        var n, r, i = String(s(e)), a = o(t), c = i.length;
        return a < 0 || a >= c ? "" : (n = i.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === c || (r = i.charCodeAt(a + 1)) < 56320 || r > 57343 ? i.charAt(a) : i.slice(a, a + 2)
    };
    ge(String, "String", function (e) {
        this._t = String(e), this._i = 0
    }, function () {
        var e, t = this._t, n = this._i;
        return n >= t.length ? {value: void 0, done: !0} : (e = ye(t, n), this._i += e.length, {value: e, done: !1})
    });
    var Se = function (e, t) {
        return {value: t, done: !!e}
    };
    ge(Array, "Array", function (e, t) {
        this._t = D(e), this._i = 0, this._k = t
    }, function () {
        var e = this._t, t = this._k, n = this._i++;
        return !e || n >= e.length ? (this._t = void 0, Se(1)) : Se(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), I.Arguments = I.Array;
    for (var _e = ie("toStringTag"), Ce = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), we = 0; we < Ce.length; we++) {
        var Te = Ce[we], be = c[Te], Ee = be && be.prototype;
        Ee && !Ee[_e] && b(Ee, _e, Te), I[Te] = I.Array
    }
    var Ve, Ae, Me, ke = ie("toStringTag"), Ie = "Arguments" == L(function () {
            return arguments
        }()), Pe = function (e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function (e, t) {
                try {
                    return e[t]
                } catch (e) {
                }
            }(t = Object(e), ke)) ? n : Ie ? L(t) : "Object" == (r = L(t)) && "function" == typeof t.callee ? "Arguments" : r
        }, Le = function (e, t, n, r) {
            if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
            return e
        }, Oe = function (e, t, n, r) {
            try {
                return r ? t(p(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && p(i.call(e)), t
            }
        }, De = ie("iterator"), Ne = Array.prototype, Re = function (e) {
            return void 0 !== e && (I.Array === e || Ne[De] === e)
        }, xe = ie("iterator"), je = d.getIteratorMethod = function (e) {
            if (void 0 != e) return e[xe] || e["@@iterator"] || I[Pe(e)]
        }, Ue = r(function (e) {
            var t = {}, n = {}, r = e.exports = function (e, r, i, a, o) {
                var s, c, d, u, f = o ? function () {
                    return e
                } : je(e), m = l(i, a, r ? 2 : 1), h = 0;
                if ("function" != typeof f) throw TypeError(e + " is not iterable!");
                if (Re(f)) {
                    for (s = R(e.length); s > h; h++) if ((u = r ? m(p(c = e[h])[0], c[1]) : m(e[h])) === t || u === n) return u
                } else for (d = f.call(e); !(c = d.next()).done;) if ((u = Oe(d, m, c.value, r)) === t || u === n) return u
            };
            r.BREAK = t, r.RETURN = n
        }), Fe = ie("species"), Be = function (e, t) {
            var n, r = p(e).constructor;
            return void 0 === r || void 0 == (n = p(r)[Fe]) ? t : u(n)
        }, ze = c.process, Ge = c.setImmediate, We = c.clearImmediate, Ye = c.MessageChannel, Qe = c.Dispatch, He = 0,
        qe = {}, Je = function () {
            var e = +this;
            if (qe.hasOwnProperty(e)) {
                var t = qe[e];
                delete qe[e], t()
            }
        }, Ke = function (e) {
            Je.call(e.data)
        };
    Ge && We || (Ge = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return qe[++He] = function () {
            !function (e, t, n) {
                switch (t.length) {
                    case 0:
                        return e();
                    case 1:
                        return e(t[0]);
                    case 2:
                        return e(t[0], t[1]);
                    case 3:
                        return e(t[0], t[1], t[2]);
                    case 4:
                        return e(t[0], t[1], t[2], t[3])
                }
                e.apply(void 0, t)
            }("function" == typeof e ? e : Function(e), t)
        }, Ve(He), He
    }, We = function (e) {
        delete qe[e]
    }, "process" == L(ze) ? Ve = function (e) {
        ze.nextTick(l(Je, e, 1))
    } : Qe && Qe.now ? Ve = function (e) {
        Qe.now(l(Je, e, 1))
    } : Ye ? (Me = (Ae = new Ye).port2, Ae.port1.onmessage = Ke, Ve = l(Me.postMessage, Me, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (Ve = function (e) {
        c.postMessage(e + "", "*")
    }, c.addEventListener("message", Ke, !1)) : Ve = "onreadystatechange" in y("script") ? function (e) {
        $.appendChild(y("script")).onreadystatechange = function () {
            $.removeChild(this), Je.call(e)
        }
    } : function (e) {
        setTimeout(l(Je, e, 1), 0)
    });
    var Ze = {set: Ge, clear: We}, Xe = Ze.set, $e = c.MutationObserver || c.WebKitMutationObserver, et = c.process,
        tt = c.Promise, nt = "process" == L(et), rt = {
            f: function (e) {
                return new function (e) {
                    var t, n;
                    this.promise = new e(function (e, r) {
                        if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                        t = e, n = r
                    }), this.resolve = u(t), this.reject = u(n)
                }(e)
            }
        }, it = function (e) {
            try {
                return {e: !1, v: e()}
            } catch (e) {
                return {e: !0, v: e}
            }
        }, at = function (e, t) {
            if (p(e), f(t) && t.constructor === e) return t;
            var n = rt.f(e);
            return (0, n.resolve)(t), n.promise
        }, ot = function (e, t, n) {
            for (var r in t) n && e[r] ? e[r] = t[r] : b(e, r, t[r]);
            return e
        }, st = ie("species"), ct = function (e) {
            var t = "function" == typeof d[e] ? d[e] : c[e];
            h && t && !t[st] && w.f(t, st, {
                configurable: !0, get: function () {
                    return this
                }
            })
        }, dt = ie("iterator"), ut = !1;
    try {
        [7][dt]().return = function () {
            ut = !0
        }
    } catch (e) {
    }
    var lt, ft, pt, mt, ht = function (e, t) {
        if (!t && !ut) return !1;
        var n = !1;
        try {
            var r = [7], i = r[dt]();
            i.next = function () {
                return {done: n = !0}
            }, r[dt] = function () {
                return i
            }, e(r)
        } catch (e) {
        }
        return n
    }, vt = Ze.set, gt = function () {
        var e, t, n, r = function () {
            var r, i;
            for (nt && (r = et.domain) && r.exit(); e;) {
                i = e.fn, e = e.next;
                try {
                    i()
                } catch (r) {
                    throw e ? n() : t = void 0, r
                }
            }
            t = void 0, r && r.enter()
        };
        if (nt) n = function () {
            et.nextTick(r)
        }; else if ($e) {
            var i = !0, a = document.createTextNode("");
            new $e(r).observe(a, {characterData: !0}), n = function () {
                a.data = i = !i
            }
        } else if (tt && tt.resolve) {
            var o = tt.resolve();
            n = function () {
                o.then(r)
            }
        } else n = function () {
            Xe.call(c, r)
        };
        return function (r) {
            var i = {fn: r, next: void 0};
            t && (t.next = i), e || (e = i, n()), t = i
        }
    }(), yt = c.TypeError, St = c.process, _t = c.Promise, Ct = "process" == Pe(St), wt = function () {
    }, Tt = ft = rt.f, bt = !!function () {
        try {
            var e = _t.resolve(1), t = (e.constructor = {})[ie("species")] = function (e) {
                e(wt, wt)
            };
            return (Ct || "function" == typeof PromiseRejectionEvent) && e.then(wt) instanceof t
        } catch (e) {
        }
    }(), Et = function (e) {
        var t;
        return !(!f(e) || "function" != typeof(t = e.then)) && t
    }, Vt = function (e, t) {
        if (!e._n) {
            e._n = !0;
            var n = e._c;
            gt(function () {
                for (var r = e._v, i = 1 == e._s, a = 0, o = function (t) {
                    var n, a, o = i ? t.ok : t.fail, s = t.resolve, c = t.reject, d = t.domain;
                    try {
                        o ? (i || (2 == e._h && kt(e), e._h = 1), !0 === o ? n = r : (d && d.enter(), n = o(r), d && d.exit()), n === t.promise ? c(yt("Promise-chain cycle")) : (a = Et(n)) ? a.call(n, s, c) : s(n)) : c(r)
                    } catch (e) {
                        c(e)
                    }
                }; n.length > a;) o(n[a++]);
                e._c = [], e._n = !1, t && !e._h && At(e)
            })
        }
    }, At = function (e) {
        vt.call(c, function () {
            var t, n, r, i = e._v, a = Mt(e);
            if (a && (t = it(function () {
                    Ct ? St.emit("unhandledRejection", i, e) : (n = c.onunhandledrejection) ? n({
                        promise: e,
                        reason: i
                    }) : (r = c.console) && r.error && r.error("Unhandled promise rejection", i)
                }), e._h = Ct || Mt(e) ? 2 : 1), e._a = void 0, a && t.e) throw t.v
        })
    }, Mt = function (e) {
        if (1 == e._h) return !1;
        for (var t, n = e._a || e._c, r = 0; n.length > r;) if ((t = n[r++]).fail || !Mt(t.promise)) return !1;
        return !0
    }, kt = function (e) {
        vt.call(c, function () {
            var t;
            Ct ? St.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({promise: e, reason: e._v})
        })
    }, It = function (e) {
        var t = this;
        t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), Vt(t, !0))
    }, Pt = function (e) {
        var t, n = this;
        if (!n._d) {
            n._d = !0, n = n._w || n;
            try {
                if (n === e) throw yt("Promise can't be resolved itself");
                (t = Et(e)) ? gt(function () {
                    var r = {_w: n, _d: !1};
                    try {
                        t.call(e, l(Pt, r, 1), l(It, r, 1))
                    } catch (e) {
                        It.call(r, e)
                    }
                }) : (n._v = e, n._s = 1, Vt(n, !1))
            } catch (e) {
                It.call({_w: n, _d: !1}, e)
            }
        }
    };
    bt || (_t = function (e) {
        Le(this, _t, "Promise", "_h"), u(e), lt.call(this);
        try {
            e(l(Pt, this, 1), l(It, this, 1))
        } catch (e) {
            It.call(this, e)
        }
    }, (lt = function (e) {
        this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = ot(_t.prototype, {
        then: function (e, t) {
            var n = Tt(Be(this, _t));
            return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = Ct ? St.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && Vt(this, !1), n.promise
        }, catch: function (e) {
            return this.then(void 0, e)
        }
    }), pt = function () {
        var e = new lt;
        this.promise = e, this.resolve = l(Pt, e, 1), this.reject = l(It, e, 1)
    }, rt.f = Tt = function (e) {
        return e === _t || e === mt ? new pt(e) : ft(e)
    }), V(V.G + V.W + V.F * !bt, {Promise: _t}), se(_t, "Promise"), ct("Promise"), mt = d.Promise, V(V.S + V.F * !bt, "Promise", {
        reject: function (e) {
            var t = Tt(this);
            return (0, t.reject)(e), t.promise
        }
    }), V(V.S + !0 * V.F, "Promise", {
        resolve: function (e) {
            return at(this === mt ? _t : this, e)
        }
    }), V(V.S + V.F * !(bt && ht(function (e) {
        _t.all(e).catch(wt)
    })), "Promise", {
        all: function (e) {
            var t = this, n = Tt(t), r = n.resolve, i = n.reject, a = it(function () {
                var n = [], a = 0, o = 1;
                Ue(e, !1, function (e) {
                    var s = a++, c = !1;
                    n.push(void 0), o++, t.resolve(e).then(function (e) {
                        c || (c = !0, n[s] = e, --o || r(n))
                    }, i)
                }), --o || r(n)
            });
            return a.e && i(a.v), n.promise
        }, race: function (e) {
            var t = this, n = Tt(t), r = n.reject, i = it(function () {
                Ue(e, !1, function (e) {
                    t.resolve(e).then(n.resolve, r)
                })
            });
            return i.e && r(i.v), n.promise
        }
    }), V(V.P + V.R, "Promise", {
        finally: function (e) {
            var t = Be(this, d.Promise || c.Promise), n = "function" == typeof e;
            return this.then(n ? function (n) {
                return at(t, e()).then(function () {
                    return n
                })
            } : e, n ? function (n) {
                return at(t, e()).then(function () {
                    throw n
                })
            } : e)
        }
    }), V(V.S, "Promise", {
        try: function (e) {
            var t = rt.f(this), n = it(e);
            return (n.e ? t.reject : t.resolve)(n.v), t.promise
        }
    });
    var Lt = d.Promise, Ot = n(r(function (e) {
        e.exports = {default: Lt, __esModule: !0}
    })), Dt = !0, Nt = !0;

    function Rt(e, t, n) {
        var r = e.match(t);
        return r && r.length >= n && parseInt(r[n], 10)
    }

    var xt = {
        extractVersion: Rt, wrapPeerConnectionEvent: function (e, t, n) {
            if (e.RTCPeerConnection) {
                var r = e.RTCPeerConnection.prototype, i = r.addEventListener;
                r.addEventListener = function (e, r) {
                    if (e !== t) return i.apply(this, arguments);
                    var a = function (e) {
                        r(n(e))
                    };
                    return this._eventMap = this._eventMap || {}, this._eventMap[r] = a, i.apply(this, [e, a])
                };
                var a = r.removeEventListener;
                r.removeEventListener = function (e, n) {
                    if (e !== t || !this._eventMap || !this._eventMap[n]) return a.apply(this, arguments);
                    var r = this._eventMap[n];
                    return delete this._eventMap[n], a.apply(this, [e, r])
                }, Object.defineProperty(r, "on" + t, {
                    get: function () {
                        return this["_on" + t]
                    }, set: function (e) {
                        this["_on" + t] && (this.removeEventListener(t, this["_on" + t]), delete this["_on" + t]), e && this.addEventListener(t, this["_on" + t] = e)
                    }
                })
            }
        }, disableLog: function (e) {
            return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (Dt = e, e ? "adapter.js logging disabled" : "adapter.js logging enabled")
        }, disableWarnings: function (e) {
            return "boolean" != typeof e ? new Error("Argument type: " + typeof e + ". Please use a boolean.") : (Nt = !e, "adapter.js deprecation warnings " + (e ? "disabled" : "enabled"))
        }, log: function () {
            if ("object" == typeof window) {
                if (Dt) return;
                "undefined" != typeof console && "function" == typeof console.log && console.log.apply(console, arguments)
            }
        }, deprecated: function (e, t) {
            Nt && console.warn(e + " is deprecated, please use " + t + " instead.")
        }, detectBrowser: function (e) {
            var t = e && e.navigator, n = {browser: null, version: null};
            if (void 0 === e || !e.navigator) return n.browser = "Not a browser.", n;
            if (t.mozGetUserMedia) n.browser = "firefox", n.version = Rt(t.userAgent, /Firefox\/(\d+)\./, 1); else if (t.webkitGetUserMedia) n.browser = "chrome", n.version = Rt(t.userAgent, /Chrom(e|ium)\/(\d+)\./, 2); else if (t.mediaDevices && t.userAgent.match(/Edge\/(\d+).(\d+)$/)) n.browser = "edge", n.version = Rt(t.userAgent, /Edge\/(\d+).(\d+)$/, 2); else {
                if (!t.mediaDevices || !t.userAgent.match(/AppleWebKit\/(\d+)\./)) return n.browser = "Not a supported browser.", n;
                n.browser = "safari", n.version = Rt(t.userAgent, /AppleWebKit\/(\d+)\./, 1)
            }
            return n
        }
    }, jt = xt.log, Ut = xt.log, Ft = {
        shimGetUserMedia: function (e) {
            var t = xt.detectBrowser(e), n = e && e.navigator, r = function (e) {
                if ("object" != typeof e || e.mandatory || e.optional) return e;
                var t = {};
                return Object.keys(e).forEach(function (n) {
                    if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                        var r = "object" == typeof e[n] ? e[n] : {ideal: e[n]};
                        void 0 !== r.exact && "number" == typeof r.exact && (r.min = r.max = r.exact);
                        var i = function (e, t) {
                            return e ? e + t.charAt(0).toUpperCase() + t.slice(1) : "deviceId" === t ? "sourceId" : t
                        };
                        if (void 0 !== r.ideal) {
                            t.optional = t.optional || [];
                            var a = {};
                            "number" == typeof r.ideal ? (a[i("min", n)] = r.ideal, t.optional.push(a), (a = {})[i("max", n)] = r.ideal, t.optional.push(a)) : (a[i("", n)] = r.ideal, t.optional.push(a))
                        }
                        void 0 !== r.exact && "number" != typeof r.exact ? (t.mandatory = t.mandatory || {}, t.mandatory[i("", n)] = r.exact) : ["min", "max"].forEach(function (e) {
                            void 0 !== r[e] && (t.mandatory = t.mandatory || {}, t.mandatory[i(e, n)] = r[e])
                        })
                    }
                }), e.advanced && (t.optional = (t.optional || []).concat(e.advanced)), t
            }, i = function (e, i) {
                if (t.version >= 61) return i(e);
                if ((e = JSON.parse(JSON.stringify(e))) && "object" == typeof e.audio) {
                    var a = function (e, t, n) {
                        t in e && !(n in e) && (e[n] = e[t], delete e[t])
                    };
                    a((e = JSON.parse(JSON.stringify(e))).audio, "autoGainControl", "googAutoGainControl"), a(e.audio, "noiseSuppression", "googNoiseSuppression"), e.audio = r(e.audio)
                }
                if (e && "object" == typeof e.video) {
                    var o = e.video.facingMode;
                    o = o && ("object" == typeof o ? o : {ideal: o});
                    var s, c = t.version < 66;
                    if (o && ("user" === o.exact || "environment" === o.exact || "user" === o.ideal || "environment" === o.ideal) && (!n.mediaDevices.getSupportedConstraints || !n.mediaDevices.getSupportedConstraints().facingMode || c) && (delete e.video.facingMode, "environment" === o.exact || "environment" === o.ideal ? s = ["back", "rear"] : "user" !== o.exact && "user" !== o.ideal || (s = ["front"]), s)) return n.mediaDevices.enumerateDevices().then(function (t) {
                        var n = (t = t.filter(function (e) {
                            return "videoinput" === e.kind
                        })).find(function (e) {
                            return s.some(function (t) {
                                return -1 !== e.label.toLowerCase().indexOf(t)
                            })
                        });
                        return !n && t.length && -1 !== s.indexOf("back") && (n = t[t.length - 1]), n && (e.video.deviceId = o.exact ? {exact: n.deviceId} : {ideal: n.deviceId}), e.video = r(e.video), jt("chrome: " + JSON.stringify(e)), i(e)
                    });
                    e.video = r(e.video)
                }
                return jt("chrome: " + JSON.stringify(e)), i(e)
            }, a = function (e) {
                return {
                    name: {
                        PermissionDeniedError: "NotAllowedError",
                        InvalidStateError: "NotReadableError",
                        DevicesNotFoundError: "NotFoundError",
                        ConstraintNotSatisfiedError: "OverconstrainedError",
                        TrackStartError: "NotReadableError",
                        MediaDeviceFailedDueToShutdown: "NotReadableError",
                        MediaDeviceKillSwitchOn: "NotReadableError"
                    }[e.name] || e.name, message: e.message, constraint: e.constraintName, toString: function () {
                        return this.name + (this.message && ": ") + this.message
                    }
                }
            };
            n.getUserMedia = function (e, t, r) {
                i(e, function (e) {
                    n.webkitGetUserMedia(e, t, function (e) {
                        r && r(a(e))
                    })
                })
            };
            var o = function (e) {
                return new Promise(function (t, r) {
                    n.getUserMedia(e, t, r)
                })
            };
            if (n.mediaDevices || (n.mediaDevices = {
                    getUserMedia: o, enumerateDevices: function () {
                        return new Promise(function (t) {
                            var n = {audio: "audioinput", video: "videoinput"};
                            return e.MediaStreamTrack.getSources(function (e) {
                                t(e.map(function (e) {
                                    return {label: e.label, kind: n[e.kind], deviceId: e.id, groupId: ""}
                                }))
                            })
                        })
                    }, getSupportedConstraints: function () {
                        return {
                            deviceId: !0,
                            echoCancellation: !0,
                            facingMode: !0,
                            frameRate: !0,
                            height: !0,
                            width: !0
                        }
                    }
                }), n.mediaDevices.getUserMedia) {
                var s = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                n.mediaDevices.getUserMedia = function (e) {
                    return i(e, function (e) {
                        return s(e).then(function (t) {
                            if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function (e) {
                                e.stop()
                            }), new DOMException("", "NotFoundError");
                            return t
                        }, function (e) {
                            return Promise.reject(a(e))
                        })
                    })
                }
            } else n.mediaDevices.getUserMedia = function (e) {
                return o(e)
            };
            void 0 === n.mediaDevices.addEventListener && (n.mediaDevices.addEventListener = function () {
                jt("Dummy mediaDevices.addEventListener called.")
            }), void 0 === n.mediaDevices.removeEventListener && (n.mediaDevices.removeEventListener = function () {
                jt("Dummy mediaDevices.removeEventListener called.")
            })
        }, shimMediaStream: function (e) {
            e.MediaStream = e.MediaStream || e.webkitMediaStream
        }, shimOnTrack: function (e) {
            if ("object" != typeof e || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype) "RTCRtpTransceiver" in e || xt.wrapPeerConnectionEvent(e, "track", function (e) {
                return e.transceiver || (e.transceiver = {receiver: e.receiver}), e
            }); else {
                Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                    get: function () {
                        return this._ontrack
                    }, set: function (e) {
                        this._ontrack && this.removeEventListener("track", this._ontrack), this.addEventListener("track", this._ontrack = e)
                    }
                });
                var t = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                    var n = this;
                    return n._ontrackpoly || (n._ontrackpoly = function (t) {
                        t.stream.addEventListener("addtrack", function (r) {
                            var i;
                            i = e.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find(function (e) {
                                return e.track && e.track.id === r.track.id
                            }) : {track: r.track};
                            var a = new Event("track");
                            a.track = r.track, a.receiver = i, a.transceiver = {receiver: i}, a.streams = [t.stream], n.dispatchEvent(a)
                        }), t.stream.getTracks().forEach(function (r) {
                            var i;
                            i = e.RTCPeerConnection.prototype.getReceivers ? n.getReceivers().find(function (e) {
                                return e.track && e.track.id === r.id
                            }) : {track: r};
                            var a = new Event("track");
                            a.track = r, a.receiver = i, a.transceiver = {receiver: i}, a.streams = [t.stream], n.dispatchEvent(a)
                        })
                    }, n.addEventListener("addstream", n._ontrackpoly)), t.apply(n, arguments)
                }
            }
        }, shimGetSendersWithDtmf: function (e) {
            if ("object" == typeof e && e.RTCPeerConnection && !("getSenders" in e.RTCPeerConnection.prototype) && "createDTMFSender" in e.RTCPeerConnection.prototype) {
                var t = function (e, t) {
                    return {
                        track: t, get dtmf() {
                            return void 0 === this._dtmf && ("audio" === t.kind ? this._dtmf = e.createDTMFSender(t) : this._dtmf = null), this._dtmf
                        }, _pc: e
                    }
                };
                if (!e.RTCPeerConnection.prototype.getSenders) {
                    e.RTCPeerConnection.prototype.getSenders = function () {
                        return this._senders = this._senders || [], this._senders.slice()
                    };
                    var n = e.RTCPeerConnection.prototype.addTrack;
                    e.RTCPeerConnection.prototype.addTrack = function (e, r) {
                        var i = n.apply(this, arguments);
                        return i || (i = t(this, e), this._senders.push(i)), i
                    };
                    var r = e.RTCPeerConnection.prototype.removeTrack;
                    e.RTCPeerConnection.prototype.removeTrack = function (e) {
                        r.apply(this, arguments);
                        var t = this._senders.indexOf(e);
                        -1 !== t && this._senders.splice(t, 1)
                    }
                }
                var i = e.RTCPeerConnection.prototype.addStream;
                e.RTCPeerConnection.prototype.addStream = function (e) {
                    var n = this;
                    n._senders = n._senders || [], i.apply(n, [e]), e.getTracks().forEach(function (e) {
                        n._senders.push(t(n, e))
                    })
                };
                var a = e.RTCPeerConnection.prototype.removeStream;
                e.RTCPeerConnection.prototype.removeStream = function (e) {
                    var t = this;
                    t._senders = t._senders || [], a.apply(t, [e]), e.getTracks().forEach(function (e) {
                        var n = t._senders.find(function (t) {
                            return t.track === e
                        });
                        n && t._senders.splice(t._senders.indexOf(n), 1)
                    })
                }
            } else if ("object" == typeof e && e.RTCPeerConnection && "getSenders" in e.RTCPeerConnection.prototype && "createDTMFSender" in e.RTCPeerConnection.prototype && e.RTCRtpSender && !("dtmf" in e.RTCRtpSender.prototype)) {
                var o = e.RTCPeerConnection.prototype.getSenders;
                e.RTCPeerConnection.prototype.getSenders = function () {
                    var e = this, t = o.apply(e, []);
                    return t.forEach(function (t) {
                        t._pc = e
                    }), t
                }, Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                    get: function () {
                        return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = this._pc.createDTMFSender(this.track) : this._dtmf = null), this._dtmf
                    }
                })
            }
        }, shimSourceObject: function (e) {
            var t = e && e.URL;
            "object" == typeof e && (!e.HTMLMediaElement || "srcObject" in e.HTMLMediaElement.prototype || Object.defineProperty(e.HTMLMediaElement.prototype, "srcObject", {
                get: function () {
                    return this._srcObject
                }, set: function (e) {
                    var n = this;
                    this._srcObject = e, this.src && t.revokeObjectURL(this.src), e ? (this.src = t.createObjectURL(e), e.addEventListener("addtrack", function () {
                        n.src && t.revokeObjectURL(n.src), n.src = t.createObjectURL(e)
                    }), e.addEventListener("removetrack", function () {
                        n.src && t.revokeObjectURL(n.src), n.src = t.createObjectURL(e)
                    })) : this.src = ""
                }
            }))
        }, shimAddTrackRemoveTrackWithNative: function (e) {
            e.RTCPeerConnection.prototype.getLocalStreams = function () {
                var e = this;
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, Object.keys(this._shimmedLocalStreams).map(function (t) {
                    return e._shimmedLocalStreams[t][0]
                })
            };
            var t = e.RTCPeerConnection.prototype.addTrack;
            e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                if (!n) return t.apply(this, arguments);
                this._shimmedLocalStreams = this._shimmedLocalStreams || {};
                var r = t.apply(this, arguments);
                return this._shimmedLocalStreams[n.id] ? -1 === this._shimmedLocalStreams[n.id].indexOf(r) && this._shimmedLocalStreams[n.id].push(r) : this._shimmedLocalStreams[n.id] = [n, r], r
            };
            var n = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function (e) {
                var t = this;
                this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e.getTracks().forEach(function (e) {
                    if (t.getSenders().find(function (t) {
                            return t.track === e
                        })) throw new DOMException("Track already exists.", "InvalidAccessError")
                });
                var r = t.getSenders();
                n.apply(this, arguments);
                var i = t.getSenders().filter(function (e) {
                    return -1 === r.indexOf(e)
                });
                this._shimmedLocalStreams[e.id] = [e].concat(i)
            };
            var r = e.RTCPeerConnection.prototype.removeStream;
            e.RTCPeerConnection.prototype.removeStream = function (e) {
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, delete this._shimmedLocalStreams[e.id], r.apply(this, arguments)
            };
            var i = e.RTCPeerConnection.prototype.removeTrack;
            e.RTCPeerConnection.prototype.removeTrack = function (e) {
                var t = this;
                return this._shimmedLocalStreams = this._shimmedLocalStreams || {}, e && Object.keys(this._shimmedLocalStreams).forEach(function (n) {
                    var r = t._shimmedLocalStreams[n].indexOf(e);
                    -1 !== r && t._shimmedLocalStreams[n].splice(r, 1), 1 === t._shimmedLocalStreams[n].length && delete t._shimmedLocalStreams[n]
                }), i.apply(this, arguments)
            }
        }, shimAddTrackRemoveTrack: function (e) {
            var t = xt.detectBrowser(e);
            if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return this.shimAddTrackRemoveTrackWithNative(e);
            var n = e.RTCPeerConnection.prototype.getLocalStreams;
            e.RTCPeerConnection.prototype.getLocalStreams = function () {
                var e = this, t = n.apply(this);
                return e._reverseStreams = e._reverseStreams || {}, t.map(function (t) {
                    return e._reverseStreams[t.id]
                })
            };
            var r = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function (t) {
                var n = this;
                if (n._streams = n._streams || {}, n._reverseStreams = n._reverseStreams || {}, t.getTracks().forEach(function (e) {
                        if (n.getSenders().find(function (t) {
                                return t.track === e
                            })) throw new DOMException("Track already exists.", "InvalidAccessError")
                    }), !n._reverseStreams[t.id]) {
                    var i = new e.MediaStream(t.getTracks());
                    n._streams[t.id] = i, n._reverseStreams[i.id] = t, t = i
                }
                r.apply(n, [t])
            };
            var i = e.RTCPeerConnection.prototype.removeStream;

            function a(e, t) {
                var n = t.sdp;
                return Object.keys(e._reverseStreams || []).forEach(function (t) {
                    var r = e._reverseStreams[t], i = e._streams[r.id];
                    n = n.replace(new RegExp(i.id, "g"), r.id)
                }), new RTCSessionDescription({type: t.type, sdp: n})
            }

            e.RTCPeerConnection.prototype.removeStream = function (e) {
                var t = this;
                t._streams = t._streams || {}, t._reverseStreams = t._reverseStreams || {}, i.apply(t, [t._streams[e.id] || e]), delete t._reverseStreams[t._streams[e.id] ? t._streams[e.id].id : e.id], delete t._streams[e.id]
            }, e.RTCPeerConnection.prototype.addTrack = function (t, n) {
                var r = this;
                if ("closed" === r.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                var i = [].slice.call(arguments, 1);
                if (1 !== i.length || !i[0].getTracks().find(function (e) {
                        return e === t
                    })) throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.", "NotSupportedError");
                if (r.getSenders().find(function (e) {
                        return e.track === t
                    })) throw new DOMException("Track already exists.", "InvalidAccessError");
                r._streams = r._streams || {}, r._reverseStreams = r._reverseStreams || {};
                var a = r._streams[n.id];
                if (a) a.addTrack(t), Promise.resolve().then(function () {
                    r.dispatchEvent(new Event("negotiationneeded"))
                }); else {
                    var o = new e.MediaStream([t]);
                    r._streams[n.id] = o, r._reverseStreams[o.id] = n, r.addStream(o)
                }
                return r.getSenders().find(function (e) {
                    return e.track === t
                })
            }, ["createOffer", "createAnswer"].forEach(function (t) {
                var n = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function () {
                    var e = this, t = arguments;
                    return arguments.length && "function" == typeof arguments[0] ? n.apply(e, [function (n) {
                        var r = a(e, n);
                        t[0].apply(null, [r])
                    }, function (e) {
                        t[1] && t[1].apply(null, e)
                    }, arguments[2]]) : n.apply(e, arguments).then(function (t) {
                        return a(e, t)
                    })
                }
            });
            var o = e.RTCPeerConnection.prototype.setLocalDescription;
            e.RTCPeerConnection.prototype.setLocalDescription = function () {
                return arguments.length && arguments[0].type ? (arguments[0] = function (e, t) {
                    var n = t.sdp;
                    return Object.keys(e._reverseStreams || []).forEach(function (t) {
                        var r = e._reverseStreams[t], i = e._streams[r.id];
                        n = n.replace(new RegExp(r.id, "g"), i.id)
                    }), new RTCSessionDescription({type: t.type, sdp: n})
                }(this, arguments[0]), o.apply(this, arguments)) : o.apply(this, arguments)
            };
            var s = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, "localDescription");
            Object.defineProperty(e.RTCPeerConnection.prototype, "localDescription", {
                get: function () {
                    var e = s.get.apply(this);
                    return "" === e.type ? e : a(this, e)
                }
            }), e.RTCPeerConnection.prototype.removeTrack = function (e) {
                var t, n = this;
                if ("closed" === n.signalingState) throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.", "InvalidStateError");
                if (!e._pc) throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.", "TypeError");
                if (e._pc !== n) throw new DOMException("Sender was not created by this connection.", "InvalidAccessError");
                n._streams = n._streams || {}, Object.keys(n._streams).forEach(function (r) {
                    n._streams[r].getTracks().find(function (t) {
                        return e.track === t
                    }) && (t = n._streams[r])
                }), t && (1 === t.getTracks().length ? n.removeStream(n._reverseStreams[t.id]) : t.removeTrack(e.track), n.dispatchEvent(new Event("negotiationneeded")))
            }
        }, shimPeerConnection: function (e) {
            var t = xt.detectBrowser(e);
            if (!e.RTCPeerConnection && e.webkitRTCPeerConnection) e.RTCPeerConnection = function (t, n) {
                return Ut("PeerConnection"), t && t.iceTransportPolicy && (t.iceTransports = t.iceTransportPolicy), new e.webkitRTCPeerConnection(t, n)
            }, e.RTCPeerConnection.prototype = e.webkitRTCPeerConnection.prototype, e.webkitRTCPeerConnection.generateCertificate && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                get: function () {
                    return e.webkitRTCPeerConnection.generateCertificate
                }
            }); else {
                var n = e.RTCPeerConnection;
                e.RTCPeerConnection = function (e, t) {
                    if (e && e.iceServers) {
                        for (var r = [], i = 0; i < e.iceServers.length; i++) {
                            var a = e.iceServers[i];
                            !a.hasOwnProperty("urls") && a.hasOwnProperty("url") ? (xt.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (a = JSON.parse(JSON.stringify(a))).urls = a.url, r.push(a)) : r.push(e.iceServers[i])
                        }
                        e.iceServers = r
                    }
                    return new n(e, t)
                }, e.RTCPeerConnection.prototype = n.prototype, Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                    get: function () {
                        return n.generateCertificate
                    }
                })
            }
            var r = e.RTCPeerConnection.prototype.getStats;
            e.RTCPeerConnection.prototype.getStats = function (e, t, n) {
                var i = this, a = arguments;
                if (arguments.length > 0 && "function" == typeof e) return r.apply(this, arguments);
                if (0 === r.length && (0 === arguments.length || "function" != typeof arguments[0])) return r.apply(this, []);
                var o = function (e) {
                    var t = {};
                    return e.result().forEach(function (e) {
                        var n = {
                            id: e.id,
                            timestamp: e.timestamp,
                            type: {
                                localcandidate: "local-candidate",
                                remotecandidate: "remote-candidate"
                            }[e.type] || e.type
                        };
                        e.names().forEach(function (t) {
                            n[t] = e.stat(t)
                        }), t[n.id] = n
                    }), t
                }, s = function (e) {
                    return new Map(Object.keys(e).map(function (t) {
                        return [t, e[t]]
                    }))
                };
                return arguments.length >= 2 ? r.apply(this, [function (e) {
                    a[1](s(o(e)))
                }, arguments[0]]) : new Promise(function (e, t) {
                    r.apply(i, [function (t) {
                        e(s(o(t)))
                    }, t])
                }).then(t, n)
            }, t.version < 51 && ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
                var n = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function () {
                    var e = arguments, t = this, r = new Promise(function (r, i) {
                        n.apply(t, [e[0], r, i])
                    });
                    return e.length < 2 ? r : r.then(function () {
                        e[1].apply(null, [])
                    }, function (t) {
                        e.length >= 3 && e[2].apply(null, [t])
                    })
                }
            }), t.version < 52 && ["createOffer", "createAnswer"].forEach(function (t) {
                var n = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function () {
                    var e = this;
                    if (arguments.length < 1 || 1 === arguments.length && "object" == typeof arguments[0]) {
                        var t = 1 === arguments.length ? arguments[0] : void 0;
                        return new Promise(function (r, i) {
                            n.apply(e, [r, i, t])
                        })
                    }
                    return n.apply(this, arguments)
                }
            }), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
                var n = e.RTCPeerConnection.prototype[t];
                e.RTCPeerConnection.prototype[t] = function () {
                    return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments)
                }
            });
            var i = e.RTCPeerConnection.prototype.addIceCandidate;
            e.RTCPeerConnection.prototype.addIceCandidate = function () {
                return arguments[0] ? i.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
            }
        }
    }, Bt = r(function (e) {
        var t = {
            generateIdentifier: function () {
                return Math.random().toString(36).substr(2, 10)
            }
        };
        t.localCName = t.generateIdentifier(), t.splitLines = function (e) {
            return e.trim().split("\n").map(function (e) {
                return e.trim()
            })
        }, t.splitSections = function (e) {
            return e.split("\nm=").map(function (e, t) {
                return (t > 0 ? "m=" + e : e).trim() + "\r\n"
            })
        }, t.matchPrefix = function (e, n) {
            return t.splitLines(e).filter(function (e) {
                return 0 === e.indexOf(n)
            })
        }, t.parseCandidate = function (e) {
            for (var t, n = {
                foundation: (t = 0 === e.indexOf("a=candidate:") ? e.substring(12).split(" ") : e.substring(10).split(" "))[0],
                component: parseInt(t[1], 10),
                protocol: t[2].toLowerCase(),
                priority: parseInt(t[3], 10),
                ip: t[4],
                port: parseInt(t[5], 10),
                type: t[7]
            }, r = 8; r < t.length; r += 2) switch (t[r]) {
                case"raddr":
                    n.relatedAddress = t[r + 1];
                    break;
                case"rport":
                    n.relatedPort = parseInt(t[r + 1], 10);
                    break;
                case"tcptype":
                    n.tcpType = t[r + 1];
                    break;
                case"ufrag":
                    n.ufrag = t[r + 1], n.usernameFragment = t[r + 1];
                    break;
                default:
                    n[t[r]] = t[r + 1]
            }
            return n
        }, t.writeCandidate = function (e) {
            var t = [];
            t.push(e.foundation), t.push(e.component), t.push(e.protocol.toUpperCase()), t.push(e.priority), t.push(e.ip), t.push(e.port);
            var n = e.type;
            return t.push("typ"), t.push(n), "host" !== n && e.relatedAddress && e.relatedPort && (t.push("raddr"), t.push(e.relatedAddress), t.push("rport"), t.push(e.relatedPort)), e.tcpType && "tcp" === e.protocol.toLowerCase() && (t.push("tcptype"), t.push(e.tcpType)), e.ufrag && (t.push("ufrag"), t.push(e.ufrag)), "candidate:" + t.join(" ")
        }, t.parseIceOptions = function (e) {
            return e.substr(14).split(" ")
        }, t.parseRtpMap = function (e) {
            var t = e.substr(9).split(" "), n = {payloadType: parseInt(t.shift(), 10)};
            return t = t[0].split("/"), n.name = t[0], n.clockRate = parseInt(t[1], 10), n.numChannels = 3 === t.length ? parseInt(t[2], 10) : 1, n
        }, t.writeRtpMap = function (e) {
            var t = e.payloadType;
            return void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType), "a=rtpmap:" + t + " " + e.name + "/" + e.clockRate + (1 !== e.numChannels ? "/" + e.numChannels : "") + "\r\n"
        }, t.parseExtmap = function (e) {
            var t = e.substr(9).split(" ");
            return {
                id: parseInt(t[0], 10),
                direction: t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
                uri: t[1]
            }
        }, t.writeExtmap = function (e) {
            return "a=extmap:" + (e.id || e.preferredId) + (e.direction && "sendrecv" !== e.direction ? "/" + e.direction : "") + " " + e.uri + "\r\n"
        }, t.parseFmtp = function (e) {
            for (var t, n = {}, r = e.substr(e.indexOf(" ") + 1).split(";"), i = 0; i < r.length; i++) n[(t = r[i].trim().split("="))[0].trim()] = t[1];
            return n
        }, t.writeFmtp = function (e) {
            var t = "", n = e.payloadType;
            if (void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.parameters && Object.keys(e.parameters).length) {
                var r = [];
                Object.keys(e.parameters).forEach(function (t) {
                    r.push(t + "=" + e.parameters[t])
                }), t += "a=fmtp:" + n + " " + r.join(";") + "\r\n"
            }
            return t
        }, t.parseRtcpFb = function (e) {
            var t = e.substr(e.indexOf(" ") + 1).split(" ");
            return {type: t.shift(), parameter: t.join(" ")}
        }, t.writeRtcpFb = function (e) {
            var t = "", n = e.payloadType;
            return void 0 !== e.preferredPayloadType && (n = e.preferredPayloadType), e.rtcpFeedback && e.rtcpFeedback.length && e.rtcpFeedback.forEach(function (e) {
                t += "a=rtcp-fb:" + n + " " + e.type + (e.parameter && e.parameter.length ? " " + e.parameter : "") + "\r\n"
            }), t
        }, t.parseSsrcMedia = function (e) {
            var t = e.indexOf(" "), n = {ssrc: parseInt(e.substr(7, t - 7), 10)}, r = e.indexOf(":", t);
            return r > -1 ? (n.attribute = e.substr(t + 1, r - t - 1), n.value = e.substr(r + 1)) : n.attribute = e.substr(t + 1), n
        }, t.getMid = function (e) {
            var n = t.matchPrefix(e, "a=mid:")[0];
            if (n) return n.substr(6)
        }, t.parseFingerprint = function (e) {
            var t = e.substr(14).split(" ");
            return {algorithm: t[0].toLowerCase(), value: t[1]}
        }, t.getDtlsParameters = function (e, n) {
            return {role: "auto", fingerprints: t.matchPrefix(e + n, "a=fingerprint:").map(t.parseFingerprint)}
        }, t.writeDtlsParameters = function (e, t) {
            var n = "a=setup:" + t + "\r\n";
            return e.fingerprints.forEach(function (e) {
                n += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n"
            }), n
        }, t.getIceParameters = function (e, n) {
            var r = t.splitLines(e);
            return {
                usernameFragment: (r = r.concat(t.splitLines(n))).filter(function (e) {
                    return 0 === e.indexOf("a=ice-ufrag:")
                })[0].substr(12), password: r.filter(function (e) {
                    return 0 === e.indexOf("a=ice-pwd:")
                })[0].substr(10)
            }
        }, t.writeIceParameters = function (e) {
            return "a=ice-ufrag:" + e.usernameFragment + "\r\na=ice-pwd:" + e.password + "\r\n"
        }, t.parseRtpParameters = function (e) {
            for (var n = {
                codecs: [],
                headerExtensions: [],
                fecMechanisms: [],
                rtcp: []
            }, r = t.splitLines(e)[0].split(" "), i = 3; i < r.length; i++) {
                var a = r[i], o = t.matchPrefix(e, "a=rtpmap:" + a + " ")[0];
                if (o) {
                    var s = t.parseRtpMap(o), c = t.matchPrefix(e, "a=fmtp:" + a + " ");
                    switch (s.parameters = c.length ? t.parseFmtp(c[0]) : {}, s.rtcpFeedback = t.matchPrefix(e, "a=rtcp-fb:" + a + " ").map(t.parseRtcpFb), n.codecs.push(s), s.name.toUpperCase()) {
                        case"RED":
                        case"ULPFEC":
                            n.fecMechanisms.push(s.name.toUpperCase())
                    }
                }
            }
            return t.matchPrefix(e, "a=extmap:").forEach(function (e) {
                n.headerExtensions.push(t.parseExtmap(e))
            }), n
        }, t.writeRtpDescription = function (e, n) {
            var r = "";
            r += "m=" + e + " ", r += n.codecs.length > 0 ? "9" : "0", r += " UDP/TLS/RTP/SAVPF ", r += n.codecs.map(function (e) {
                return void 0 !== e.preferredPayloadType ? e.preferredPayloadType : e.payloadType
            }).join(" ") + "\r\n", r += "c=IN IP4 0.0.0.0\r\n", r += "a=rtcp:9 IN IP4 0.0.0.0\r\n", n.codecs.forEach(function (e) {
                r += t.writeRtpMap(e), r += t.writeFmtp(e), r += t.writeRtcpFb(e)
            });
            var i = 0;
            return n.codecs.forEach(function (e) {
                e.maxptime > i && (i = e.maxptime)
            }), i > 0 && (r += "a=maxptime:" + i + "\r\n"), r += "a=rtcp-mux\r\n", n.headerExtensions.forEach(function (e) {
                r += t.writeExtmap(e)
            }), r
        }, t.parseRtpEncodingParameters = function (e) {
            var n, r = [], i = t.parseRtpParameters(e), a = -1 !== i.fecMechanisms.indexOf("RED"),
                o = -1 !== i.fecMechanisms.indexOf("ULPFEC"), s = t.matchPrefix(e, "a=ssrc:").map(function (e) {
                    return t.parseSsrcMedia(e)
                }).filter(function (e) {
                    return "cname" === e.attribute
                }), c = s.length > 0 && s[0].ssrc, d = t.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
                    var t = e.split(" ");
                    return t.shift(), t.map(function (e) {
                        return parseInt(e, 10)
                    })
                });
            d.length > 0 && d[0].length > 1 && d[0][0] === c && (n = d[0][1]), i.codecs.forEach(function (e) {
                if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                    var t = {ssrc: c, codecPayloadType: parseInt(e.parameters.apt, 10), rtx: {ssrc: n}};
                    r.push(t), a && ((t = JSON.parse(JSON.stringify(t))).fec = {
                        ssrc: n,
                        mechanism: o ? "red+ulpfec" : "red"
                    }, r.push(t))
                }
            }), 0 === r.length && c && r.push({ssrc: c});
            var u = t.matchPrefix(e, "b=");
            return u.length && (u = 0 === u[0].indexOf("b=TIAS:") ? parseInt(u[0].substr(7), 10) : 0 === u[0].indexOf("b=AS:") ? 1e3 * parseInt(u[0].substr(5), 10) * .95 - 16e3 : void 0, r.forEach(function (e) {
                e.maxBitrate = u
            })), r
        }, t.parseRtcpParameters = function (e) {
            var n = {}, r = t.matchPrefix(e, "a=ssrc:").map(function (e) {
                return t.parseSsrcMedia(e)
            }).filter(function (e) {
                return "cname" === e.attribute
            })[0];
            r && (n.cname = r.value, n.ssrc = r.ssrc);
            var i = t.matchPrefix(e, "a=rtcp-rsize");
            n.reducedSize = i.length > 0, n.compound = 0 === i.length;
            var a = t.matchPrefix(e, "a=rtcp-mux");
            return n.mux = a.length > 0, n
        }, t.parseMsid = function (e) {
            var n, r = t.matchPrefix(e, "a=msid:");
            if (1 === r.length) return {stream: (n = r[0].substr(7).split(" "))[0], track: n[1]};
            var i = t.matchPrefix(e, "a=ssrc:").map(function (e) {
                return t.parseSsrcMedia(e)
            }).filter(function (e) {
                return "msid" === e.attribute
            });
            return i.length > 0 ? {stream: (n = i[0].value.split(" "))[0], track: n[1]} : void 0
        }, t.generateSessionId = function () {
            return Math.random().toString().substr(2, 21)
        }, t.writeSessionBoilerplate = function (e, n) {
            var r = void 0 !== n ? n : 2;
            return "v=0\r\no=thisisadapterortc " + (e || t.generateSessionId()) + " " + r + " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
        }, t.writeMediaSection = function (e, n, r, i) {
            var a = t.writeRtpDescription(e.kind, n);
            if (a += t.writeIceParameters(e.iceGatherer.getLocalParameters()), a += t.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === r ? "actpass" : "active"), a += "a=mid:" + e.mid + "\r\n", e.direction ? a += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) {
                var o = "msid:" + i.id + " " + e.rtpSender.track.id + "\r\n";
                a += "a=" + o, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + o, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + o, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
            }
            return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + t.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + t.localCName + "\r\n"), a
        }, t.getDirection = function (e, n) {
            for (var r = t.splitLines(e), i = 0; i < r.length; i++) switch (r[i]) {
                case"a=sendrecv":
                case"a=sendonly":
                case"a=recvonly":
                case"a=inactive":
                    return r[i].substr(2)
            }
            return n ? t.getDirection(n) : "sendrecv"
        }, t.getKind = function (e) {
            return t.splitLines(e)[0].split(" ")[0].substr(2)
        }, t.isRejected = function (e) {
            return "0" === e.split(" ", 2)[1]
        }, t.parseMLine = function (e) {
            var n = t.splitLines(e)[0].split(" ");
            return {kind: n[0].substr(2), port: parseInt(n[1], 10), protocol: n[2], fmt: n.slice(3).join(" ")}
        }, e.exports = t
    });

    function zt(e, t, n, r, i) {
        var a = Bt.writeRtpDescription(e.kind, t);
        if (a += Bt.writeIceParameters(e.iceGatherer.getLocalParameters()), a += Bt.writeDtlsParameters(e.dtlsTransport.getLocalParameters(), "offer" === n ? "actpass" : i || "active"), a += "a=mid:" + e.mid + "\r\n", e.direction ? a += "a=" + e.direction + "\r\n" : e.rtpSender && e.rtpReceiver ? a += "a=sendrecv\r\n" : e.rtpSender ? a += "a=sendonly\r\n" : e.rtpReceiver ? a += "a=recvonly\r\n" : a += "a=inactive\r\n", e.rtpSender) {
            var o = "msid:" + r.id + " " + e.rtpSender.track.id + "\r\n";
            a += "a=" + o, a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + o, e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + o, a += "a=ssrc-group:FID " + e.sendEncodingParameters[0].ssrc + " " + e.sendEncodingParameters[0].rtx.ssrc + "\r\n")
        }
        return a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " cname:" + Bt.localCName + "\r\n", e.rtpSender && e.sendEncodingParameters[0].rtx && (a += "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " cname:" + Bt.localCName + "\r\n"), a
    }

    function Gt(e, t) {
        var n = {codecs: [], headerExtensions: [], fecMechanisms: []}, r = function (e, t) {
            e = parseInt(e, 10);
            for (var n = 0; n < t.length; n++) if (t[n].payloadType === e || t[n].preferredPayloadType === e) return t[n]
        }, i = function (e, t, n, i) {
            var a = r(e.parameters.apt, n), o = r(t.parameters.apt, i);
            return a && o && a.name.toLowerCase() === o.name.toLowerCase()
        };
        return e.codecs.forEach(function (r) {
            for (var a = 0; a < t.codecs.length; a++) {
                var o = t.codecs[a];
                if (r.name.toLowerCase() === o.name.toLowerCase() && r.clockRate === o.clockRate) {
                    if ("rtx" === r.name.toLowerCase() && r.parameters && o.parameters.apt && !i(r, o, e.codecs, t.codecs)) continue;
                    (o = JSON.parse(JSON.stringify(o))).numChannels = Math.min(r.numChannels, o.numChannels), n.codecs.push(o), o.rtcpFeedback = o.rtcpFeedback.filter(function (e) {
                        for (var t = 0; t < r.rtcpFeedback.length; t++) if (r.rtcpFeedback[t].type === e.type && r.rtcpFeedback[t].parameter === e.parameter) return !0;
                        return !1
                    });
                    break
                }
            }
        }), e.headerExtensions.forEach(function (e) {
            for (var r = 0; r < t.headerExtensions.length; r++) {
                var i = t.headerExtensions[r];
                if (e.uri === i.uri) {
                    n.headerExtensions.push(i);
                    break
                }
            }
        }), n
    }

    function Wt(e, t, n) {
        return -1 !== {
            offer: {
                setLocalDescription: ["stable", "have-local-offer"],
                setRemoteDescription: ["stable", "have-remote-offer"]
            },
            answer: {
                setLocalDescription: ["have-remote-offer", "have-local-pranswer"],
                setRemoteDescription: ["have-local-offer", "have-remote-pranswer"]
            }
        }[t][e].indexOf(n)
    }

    function Yt(e, t) {
        var n = e.getRemoteCandidates().find(function (e) {
            return t.foundation === e.foundation && t.ip === e.ip && t.port === e.port && t.priority === e.priority && t.protocol === e.protocol && t.type === e.type
        });
        return n || e.addRemoteCandidate(t), !n
    }

    var Qt = {
        shimGetUserMedia: function (e) {
            var t = e && e.navigator, n = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
            t.mediaDevices.getUserMedia = function (e) {
                return n(e).catch(function (e) {
                    return Promise.reject(function (e) {
                        return {
                            name: {PermissionDeniedError: "NotAllowedError"}[e.name] || e.name,
                            message: e.message,
                            constraint: e.constraint,
                            toString: function () {
                                return this.name
                            }
                        }
                    }(e))
                })
            }
        }, shimPeerConnection: function (e) {
            var t = xt.detectBrowser(e);
            if (e.RTCIceGatherer && (e.RTCIceCandidate || (e.RTCIceCandidate = function (e) {
                    return e
                }), e.RTCSessionDescription || (e.RTCSessionDescription = function (e) {
                    return e
                }), t.version < 15025)) {
                var n = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, "enabled");
                Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
                    set: function (e) {
                        n.set.call(this, e);
                        var t = new Event("enabled");
                        t.enabled = e, this.dispatchEvent(t)
                    }
                })
            }
            !e.RTCRtpSender || "dtmf" in e.RTCRtpSender.prototype || Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                get: function () {
                    return void 0 === this._dtmf && ("audio" === this.track.kind ? this._dtmf = new e.RTCDtmfSender(this) : "video" === this.track.kind && (this._dtmf = null)), this._dtmf
                }
            }), e.RTCPeerConnection = function (e, t) {
                var n = function (n) {
                    var r = this, i = document.createDocumentFragment();
                    if (["addEventListener", "removeEventListener", "dispatchEvent"].forEach(function (e) {
                            r[e] = i[e].bind(i)
                        }), this.onicecandidate = null, this.onaddstream = null, this.ontrack = null, this.onremovestream = null, this.onsignalingstatechange = null, this.oniceconnectionstatechange = null, this.onicegatheringstatechange = null, this.onnegotiationneeded = null, this.ondatachannel = null, this.canTrickleIceCandidates = null, this.needNegotiation = !1, this.localStreams = [], this.remoteStreams = [], this.localDescription = null, this.remoteDescription = null, this.signalingState = "stable", this.iceConnectionState = "new", this.iceGatheringState = "new", n = JSON.parse(JSON.stringify(n || {})), this.usingBundle = "max-bundle" === n.bundlePolicy, "negotiate" === n.rtcpMuxPolicy) {
                        var a = new Error("rtcpMuxPolicy 'negotiate' is not supported");
                        throw a.name = "NotSupportedError", a
                    }
                    switch (n.rtcpMuxPolicy || (n.rtcpMuxPolicy = "require"), n.iceTransportPolicy) {
                        case"all":
                        case"relay":
                            break;
                        default:
                            n.iceTransportPolicy = "all"
                    }
                    switch (n.bundlePolicy) {
                        case"balanced":
                        case"max-compat":
                        case"max-bundle":
                            break;
                        default:
                            n.bundlePolicy = "balanced"
                    }
                    if (n.iceServers = function (e, t) {
                            var n = !1;
                            return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
                                if (e && (e.urls || e.url)) {
                                    var r = e.urls || e.url;
                                    e.url && !e.urls && console.warn("RTCIceServer.url is deprecated! Use urls instead.");
                                    var i = "string" == typeof r;
                                    return i && (r = [r]), r = r.filter(function (e) {
                                        return 0 !== e.indexOf("turn:") || -1 === e.indexOf("transport=udp") || -1 !== e.indexOf("turn:[") || n ? 0 === e.indexOf("stun:") && t >= 14393 && -1 === e.indexOf("?transport=udp") : (n = !0, !0)
                                    }), delete e.url, e.urls = i ? r[0] : r, !!r.length
                                }
                                return !1
                            })
                        }(n.iceServers || [], t), this._iceGatherers = [], n.iceCandidatePoolSize) for (var o = n.iceCandidatePoolSize; o > 0; o--) this._iceGatherers = new e.RTCIceGatherer({
                        iceServers: n.iceServers,
                        gatherPolicy: n.iceTransportPolicy
                    }); else n.iceCandidatePoolSize = 0;
                    this._config = n, this.transceivers = [], this._sdpSessionId = Bt.generateSessionId(), this._sdpSessionVersion = 0, this._dtlsRole = void 0
                };
                return n.prototype._emitGatheringStateChange = function () {
                    var e = new Event("icegatheringstatechange");
                    this.dispatchEvent(e), "function" == typeof this.onicegatheringstatechange && this.onicegatheringstatechange(e)
                }, n.prototype.getConfiguration = function () {
                    return this._config
                }, n.prototype.getLocalStreams = function () {
                    return this.localStreams
                }, n.prototype.getRemoteStreams = function () {
                    return this.remoteStreams
                }, n.prototype._createTransceiver = function (e) {
                    var t = this.transceivers.length > 0, n = {
                        track: null,
                        iceGatherer: null,
                        iceTransport: null,
                        dtlsTransport: null,
                        localCapabilities: null,
                        remoteCapabilities: null,
                        rtpSender: null,
                        rtpReceiver: null,
                        kind: e,
                        mid: null,
                        sendEncodingParameters: null,
                        recvEncodingParameters: null,
                        stream: null,
                        wantReceive: !0
                    };
                    if (this.usingBundle && t) n.iceTransport = this.transceivers[0].iceTransport, n.dtlsTransport = this.transceivers[0].dtlsTransport; else {
                        var r = this._createIceAndDtlsTransports();
                        n.iceTransport = r.iceTransport, n.dtlsTransport = r.dtlsTransport
                    }
                    return this.transceivers.push(n), n
                }, n.prototype.addTrack = function (t, n) {
                    for (var r, i = 0; i < this.transceivers.length; i++) this.transceivers[i].track || this.transceivers[i].kind !== t.kind || (r = this.transceivers[i]);
                    return r || (r = this._createTransceiver(t.kind)), this._maybeFireNegotiationNeeded(), -1 === this.localStreams.indexOf(n) && this.localStreams.push(n), r.track = t, r.stream = n, r.rtpSender = new e.RTCRtpSender(t, r.dtlsTransport), r.rtpSender
                }, n.prototype.addStream = function (e) {
                    var n = this;
                    if (t >= 15025) e.getTracks().forEach(function (t) {
                        n.addTrack(t, e)
                    }); else {
                        var r = e.clone();
                        e.getTracks().forEach(function (e, t) {
                            var n = r.getTracks()[t];
                            e.addEventListener("enabled", function (e) {
                                n.enabled = e.enabled
                            })
                        }), r.getTracks().forEach(function (e) {
                            n.addTrack(e, r)
                        })
                    }
                }, n.prototype.removeStream = function (e) {
                    var t = this.localStreams.indexOf(e);
                    t > -1 && (this.localStreams.splice(t, 1), this._maybeFireNegotiationNeeded())
                }, n.prototype.getSenders = function () {
                    return this.transceivers.filter(function (e) {
                        return !!e.rtpSender
                    }).map(function (e) {
                        return e.rtpSender
                    })
                }, n.prototype.getReceivers = function () {
                    return this.transceivers.filter(function (e) {
                        return !!e.rtpReceiver
                    }).map(function (e) {
                        return e.rtpReceiver
                    })
                }, n.prototype._createIceGatherer = function (t, n) {
                    var r = this;
                    if (n && t > 0) return this.transceivers[0].iceGatherer;
                    if (this._iceGatherers.length) return this._iceGatherers.shift();
                    var i = new e.RTCIceGatherer({
                        iceServers: this._config.iceServers,
                        gatherPolicy: this._config.iceTransportPolicy
                    });
                    return Object.defineProperty(i, "state", {
                        value: "new",
                        writable: !0
                    }), this.transceivers[t].candidates = [], this.transceivers[t].bufferCandidates = function (e) {
                        var n = !e.candidate || 0 === Object.keys(e.candidate).length;
                        i.state = n ? "completed" : "gathering", null !== r.transceivers[t].candidates && r.transceivers[t].candidates.push(e.candidate)
                    }, i.addEventListener("localcandidate", this.transceivers[t].bufferCandidates), i
                }, n.prototype._gather = function (t, n) {
                    var r = this, i = this.transceivers[n].iceGatherer;
                    if (!i.onlocalcandidate) {
                        var a = this.transceivers[n].candidates;
                        this.transceivers[n].candidates = null, i.removeEventListener("localcandidate", this.transceivers[n].bufferCandidates), i.onlocalcandidate = function (e) {
                            if (!(r.usingBundle && n > 0)) {
                                var a = new Event("icecandidate");
                                a.candidate = {sdpMid: t, sdpMLineIndex: n};
                                var o = e.candidate, s = !o || 0 === Object.keys(o).length;
                                s ? "new" !== i.state && "gathering" !== i.state || (i.state = "completed") : ("new" === i.state && (i.state = "gathering"), o.component = 1, a.candidate.candidate = Bt.writeCandidate(o));
                                var c = Bt.splitSections(r.localDescription.sdp);
                                c[a.candidate.sdpMLineIndex + 1] += s ? "a=end-of-candidates\r\n" : "a=" + a.candidate.candidate + "\r\n", r.localDescription.sdp = c.join("");
                                var d = r.transceivers.every(function (e) {
                                    return e.iceGatherer && "completed" === e.iceGatherer.state
                                });
                                "gathering" !== r.iceGatheringState && (r.iceGatheringState = "gathering", r._emitGatheringStateChange()), s || (r.dispatchEvent(a), "function" == typeof r.onicecandidate && r.onicecandidate(a)), d && (r.dispatchEvent(new Event("icecandidate")), "function" == typeof r.onicecandidate && r.onicecandidate(new Event("icecandidate")), r.iceGatheringState = "complete", r._emitGatheringStateChange())
                            }
                        }, e.setTimeout(function () {
                            a.forEach(function (e) {
                                var t = new Event("RTCIceGatherEvent");
                                t.candidate = e, i.onlocalcandidate(t)
                            })
                        }, 0)
                    }
                }, n.prototype._createIceAndDtlsTransports = function () {
                    var t = this, n = new e.RTCIceTransport(null);
                    n.onicestatechange = function () {
                        t._updateConnectionState()
                    };
                    var r = new e.RTCDtlsTransport(n);
                    return r.ondtlsstatechange = function () {
                        t._updateConnectionState()
                    }, r.onerror = function () {
                        Object.defineProperty(r, "state", {value: "failed", writable: !0}), t._updateConnectionState()
                    }, {iceTransport: n, dtlsTransport: r}
                }, n.prototype._disposeIceAndDtlsTransports = function (e) {
                    var t = this.transceivers[e].iceGatherer;
                    t && (delete t.onlocalcandidate, delete this.transceivers[e].iceGatherer);
                    var n = this.transceivers[e].iceTransport;
                    n && (delete n.onicestatechange, delete this.transceivers[e].iceTransport);
                    var r = this.transceivers[e].dtlsTransport;
                    r && (delete r.ondtlsstatechange, delete r.onerror, delete this.transceivers[e].dtlsTransport)
                }, n.prototype._transceive = function (e, n, r) {
                    var i = Gt(e.localCapabilities, e.remoteCapabilities);
                    n && e.rtpSender && (i.encodings = e.sendEncodingParameters, i.rtcp = {
                        cname: Bt.localCName,
                        compound: e.rtcpParameters.compound
                    }, e.recvEncodingParameters.length && (i.rtcp.ssrc = e.recvEncodingParameters[0].ssrc), e.rtpSender.send(i)), r && e.rtpReceiver && i.codecs.length > 0 && ("video" === e.kind && e.recvEncodingParameters && t < 15019 && e.recvEncodingParameters.forEach(function (e) {
                        delete e.rtx
                    }), i.encodings = e.recvEncodingParameters, i.rtcp = {
                        cname: e.rtcpParameters.cname,
                        compound: e.rtcpParameters.compound
                    }, e.sendEncodingParameters.length && (i.rtcp.ssrc = e.sendEncodingParameters[0].ssrc), e.rtpReceiver.receive(i))
                }, n.prototype.setLocalDescription = function (e) {
                    var t, n, r = this, i = arguments;
                    if (!Wt("setLocalDescription", e.type, this.signalingState)) return new Promise(function (t, n) {
                        var a = new Error("Can not set local " + e.type + " in state " + r.signalingState);
                        a.name = "InvalidStateError", i.length > 2 && "function" == typeof i[2] && i[2].apply(null, [a]), n(a)
                    });
                    if ("offer" === e.type) t = Bt.splitSections(e.sdp), n = t.shift(), t.forEach(function (e, t) {
                        var n = Bt.parseRtpParameters(e);
                        r.transceivers[t].localCapabilities = n
                    }), this.transceivers.forEach(function (e, t) {
                        r._gather(e.mid, t)
                    }); else if ("answer" === e.type) {
                        t = Bt.splitSections(r.remoteDescription.sdp), n = t.shift();
                        var a = Bt.matchPrefix(n, "a=ice-lite").length > 0;
                        t.forEach(function (e, t) {
                            var i = r.transceivers[t], o = i.iceGatherer, s = i.iceTransport, c = i.dtlsTransport,
                                d = i.localCapabilities, u = i.remoteCapabilities;
                            if (!(Bt.isRejected(e) && 1 === !Bt.matchPrefix(e, "a=bundle-only").length || i.isDatachannel)) {
                                var l = Bt.getIceParameters(e, n), f = Bt.getDtlsParameters(e, n);
                                a && (f.role = "server"), r.usingBundle && 0 !== t || (r._gather(i.mid, t), "new" === s.state && s.start(o, l, a ? "controlling" : "controlled"), "new" === c.state && c.start(f));
                                var p = Gt(d, u);
                                r._transceive(i, p.codecs.length > 0, !1)
                            }
                        })
                    }
                    switch (this.localDescription = {type: e.type, sdp: e.sdp}, e.type) {
                        case"offer":
                            this._updateSignalingState("have-local-offer");
                            break;
                        case"answer":
                            this._updateSignalingState("stable");
                            break;
                        default:
                            throw new TypeError('unsupported type "' + e.type + '"')
                    }
                    var o = arguments.length > 1 && "function" == typeof arguments[1] && arguments[1];
                    return new Promise(function (e) {
                        o && o.apply(null), e()
                    })
                }, n.prototype.setRemoteDescription = function (n) {
                    var r = this, i = arguments;
                    if (!Wt("setRemoteDescription", n.type, this.signalingState)) return new Promise(function (e, t) {
                        var a = new Error("Can not set remote " + n.type + " in state " + r.signalingState);
                        a.name = "InvalidStateError", i.length > 2 && "function" == typeof i[2] && i[2].apply(null, [a]), t(a)
                    });
                    var a = {};
                    this.remoteStreams.forEach(function (e) {
                        a[e.id] = e
                    });
                    var o = [], s = Bt.splitSections(n.sdp), c = s.shift(),
                        d = Bt.matchPrefix(c, "a=ice-lite").length > 0,
                        u = Bt.matchPrefix(c, "a=group:BUNDLE ").length > 0;
                    this.usingBundle = u;
                    var l = Bt.matchPrefix(c, "a=ice-options:")[0];
                    switch (this.canTrickleIceCandidates = !!l && l.substr(14).split(" ").indexOf("trickle") >= 0, s.forEach(function (i, s) {
                        var l = Bt.splitLines(i), f = Bt.getKind(i),
                            p = Bt.isRejected(i) && 1 === !Bt.matchPrefix(i, "a=bundle-only").length,
                            m = l[0].substr(2).split(" ")[2], h = Bt.getDirection(i, c), v = Bt.parseMsid(i),
                            g = Bt.getMid(i) || Bt.generateIdentifier();
                        if ("application" !== f || "DTLS/SCTP" !== m) {
                            var y, S, _, C, w, T, b, E, V, A, M, k = Bt.parseRtpParameters(i);
                            p || (A = Bt.getIceParameters(i, c), (M = Bt.getDtlsParameters(i, c)).role = "client"), b = Bt.parseRtpEncodingParameters(i);
                            var I = Bt.parseRtcpParameters(i),
                                P = Bt.matchPrefix(i, "a=end-of-candidates", c).length > 0,
                                L = Bt.matchPrefix(i, "a=candidate:").map(function (e) {
                                    return Bt.parseCandidate(e)
                                }).filter(function (e) {
                                    return 1 === e.component
                                });
                            if (("offer" === n.type || "answer" === n.type) && !p && u && s > 0 && r.transceivers[s] && (r._disposeIceAndDtlsTransports(s), r.transceivers[s].iceGatherer = r.transceivers[0].iceGatherer, r.transceivers[s].iceTransport = r.transceivers[0].iceTransport, r.transceivers[s].dtlsTransport = r.transceivers[0].dtlsTransport, r.transceivers[s].rtpSender && r.transceivers[s].rtpSender.setTransport(r.transceivers[0].dtlsTransport), r.transceivers[s].rtpReceiver && r.transceivers[s].rtpReceiver.setTransport(r.transceivers[0].dtlsTransport)), "offer" !== n.type || p) "answer" !== n.type || p || (S = (y = r.transceivers[s]).iceGatherer, _ = y.iceTransport, C = y.dtlsTransport, w = y.rtpReceiver, T = y.sendEncodingParameters, E = y.localCapabilities, r.transceivers[s].recvEncodingParameters = b, r.transceivers[s].remoteCapabilities = k, r.transceivers[s].rtcpParameters = I, L.length && "new" === _.state && (!d && !P || u && 0 !== s ? L.forEach(function (e) {
                                Yt(y.iceTransport, e)
                            }) : _.setRemoteCandidates(L)), u && 0 !== s || ("new" === _.state && _.start(S, A, "controlling"), "new" === C.state && C.start(M)), r._transceive(y, "sendrecv" === h || "recvonly" === h, "sendrecv" === h || "sendonly" === h), !w || "sendrecv" !== h && "sendonly" !== h ? delete y.rtpReceiver : (V = w.track, v ? (a[v.stream] || (a[v.stream] = new e.MediaStream), a[v.stream].addTrack(V), o.push([V, w, a[v.stream]])) : (a.default || (a.default = new e.MediaStream), a.default.addTrack(V), o.push([V, w, a.default])))); else {
                                (y = r.transceivers[s] || r._createTransceiver(f)).mid = g, y.iceGatherer || (y.iceGatherer = r._createIceGatherer(s, u)), L.length && "new" === y.iceTransport.state && (!P || u && 0 !== s ? L.forEach(function (e) {
                                    Yt(y.iceTransport, e)
                                }) : y.iceTransport.setRemoteCandidates(L)), E = e.RTCRtpReceiver.getCapabilities(f), t < 15019 && (E.codecs = E.codecs.filter(function (e) {
                                    return "rtx" !== e.name
                                })), T = y.sendEncodingParameters || [{ssrc: 1001 * (2 * s + 2)}];
                                var O, D = !1;
                                "sendrecv" !== h && "sendonly" !== h || (D = !y.rtpReceiver, w = y.rtpReceiver || new e.RTCRtpReceiver(y.dtlsTransport, f), D && (V = w.track, v ? (a[v.stream] || (a[v.stream] = new e.MediaStream, Object.defineProperty(a[v.stream], "id", {
                                    get: function () {
                                        return v.stream
                                    }
                                })), Object.defineProperty(V, "id", {
                                    get: function () {
                                        return v.track
                                    }
                                }), O = a[v.stream]) : (a.default || (a.default = new e.MediaStream), O = a.default), O.addTrack(V), o.push([V, w, O]))), y.localCapabilities = E, y.remoteCapabilities = k, y.rtpReceiver = w, y.rtcpParameters = I, y.sendEncodingParameters = T, y.recvEncodingParameters = b, r._transceive(r.transceivers[s], !1, D)
                            }
                        } else r.transceivers[s] = {mid: g, isDatachannel: !0}
                    }), void 0 === this._dtlsRole && (this._dtlsRole = "offer" === n.type ? "active" : "passive"), this.remoteDescription = {
                        type: n.type,
                        sdp: n.sdp
                    }, n.type) {
                        case"offer":
                            this._updateSignalingState("have-remote-offer");
                            break;
                        case"answer":
                            this._updateSignalingState("stable");
                            break;
                        default:
                            throw new TypeError('unsupported type "' + n.type + '"')
                    }
                    return Object.keys(a).forEach(function (t) {
                        var n = a[t];
                        if (n.getTracks().length) {
                            if (-1 === r.remoteStreams.indexOf(n)) {
                                r.remoteStreams.push(n);
                                var i = new Event("addstream");
                                i.stream = n, e.setTimeout(function () {
                                    r.dispatchEvent(i), "function" == typeof r.onaddstream && r.onaddstream(i)
                                })
                            }
                            o.forEach(function (t) {
                                var i = t[0], a = t[1];
                                if (n.id === t[2].id) {
                                    var o = new Event("track");
                                    o.track = i, o.receiver = a, o.transceiver = {receiver: a}, o.streams = [n], e.setTimeout(function () {
                                        r.dispatchEvent(o), "function" == typeof r.ontrack && r.ontrack(o)
                                    })
                                }
                            })
                        }
                    }), e.setTimeout(function () {
                        r && r.transceivers && r.transceivers.forEach(function (e) {
                            e.iceTransport && "new" === e.iceTransport.state && e.iceTransport.getRemoteCandidates().length > 0 && (console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"), e.iceTransport.addRemoteCandidate({}))
                        })
                    }, 4e3), new Promise(function (e) {
                        i.length > 1 && "function" == typeof i[1] && i[1].apply(null), e()
                    })
                }, n.prototype.close = function () {
                    this.transceivers.forEach(function (e) {
                        e.iceTransport && e.iceTransport.stop(), e.dtlsTransport && e.dtlsTransport.stop(), e.rtpSender && e.rtpSender.stop(), e.rtpReceiver && e.rtpReceiver.stop()
                    }), this._updateSignalingState("closed")
                }, n.prototype._updateSignalingState = function (e) {
                    this.signalingState = e;
                    var t = new Event("signalingstatechange");
                    this.dispatchEvent(t), "function" == typeof this.onsignalingstatechange && this.onsignalingstatechange(t)
                }, n.prototype._maybeFireNegotiationNeeded = function () {
                    var t = this;
                    "stable" === this.signalingState && !0 !== this.needNegotiation && (this.needNegotiation = !0, e.setTimeout(function () {
                        if (!1 !== t.needNegotiation) {
                            t.needNegotiation = !1;
                            var e = new Event("negotiationneeded");
                            t.dispatchEvent(e), "function" == typeof t.onnegotiationneeded && t.onnegotiationneeded(e)
                        }
                    }, 0))
                }, n.prototype._updateConnectionState = function () {
                    var e, t = {
                        new: 0,
                        closed: 0,
                        connecting: 0,
                        checking: 0,
                        connected: 0,
                        completed: 0,
                        disconnected: 0,
                        failed: 0
                    };
                    if (this.transceivers.forEach(function (e) {
                            t[e.iceTransport.state]++, t[e.dtlsTransport.state]++
                        }), t.connected += t.completed, e = "new", t.failed > 0 ? e = "failed" : t.connecting > 0 || t.checking > 0 ? e = "connecting" : t.disconnected > 0 ? e = "disconnected" : t.new > 0 ? e = "new" : (t.connected > 0 || t.completed > 0) && (e = "connected"), e !== this.iceConnectionState) {
                        this.iceConnectionState = e;
                        var n = new Event("iceconnectionstatechange");
                        this.dispatchEvent(n), "function" == typeof this.oniceconnectionstatechange && this.oniceconnectionstatechange(n)
                    }
                }, n.prototype.createOffer = function () {
                    var n, r = this, i = arguments;
                    1 === arguments.length && "function" != typeof arguments[0] ? n = arguments[0] : 3 === arguments.length && (n = arguments[2]);
                    var a = this.transceivers.filter(function (e) {
                        return "audio" === e.kind
                    }).length, o = this.transceivers.filter(function (e) {
                        return "video" === e.kind
                    }).length;
                    if (n) {
                        if (n.mandatory || n.optional) throw new TypeError("Legacy mandatory/optional constraints not supported.");
                        void 0 !== n.offerToReceiveAudio && (a = !0 === n.offerToReceiveAudio ? 1 : !1 === n.offerToReceiveAudio ? 0 : n.offerToReceiveAudio), void 0 !== n.offerToReceiveVideo && (o = !0 === n.offerToReceiveVideo ? 1 : !1 === n.offerToReceiveVideo ? 0 : n.offerToReceiveVideo)
                    }
                    for (this.transceivers.forEach(function (e) {
                        "audio" === e.kind ? --a < 0 && (e.wantReceive = !1) : "video" === e.kind && --o < 0 && (e.wantReceive = !1)
                    }); a > 0 || o > 0;) a > 0 && (this._createTransceiver("audio"), a--), o > 0 && (this._createTransceiver("video"), o--);
                    var s = Bt.writeSessionBoilerplate(this._sdpSessionId, this._sdpSessionVersion++);
                    this.transceivers.forEach(function (n, i) {
                        var a = n.track, o = n.kind, s = Bt.generateIdentifier();
                        n.mid = s, n.iceGatherer || (n.iceGatherer = r._createIceGatherer(i, r.usingBundle));
                        var c = e.RTCRtpSender.getCapabilities(o);
                        t < 15019 && (c.codecs = c.codecs.filter(function (e) {
                            return "rtx" !== e.name
                        })), c.codecs.forEach(function (e) {
                            "H264" === e.name && void 0 === e.parameters["level-asymmetry-allowed"] && (e.parameters["level-asymmetry-allowed"] = "1")
                        });
                        var d = n.sendEncodingParameters || [{ssrc: 1001 * (2 * i + 1)}];
                        a && t >= 15019 && "video" === o && !d[0].rtx && (d[0].rtx = {ssrc: d[0].ssrc + 1}), n.wantReceive && (n.rtpReceiver = new e.RTCRtpReceiver(n.dtlsTransport, o)), n.localCapabilities = c, n.sendEncodingParameters = d
                    }), "max-compat" !== this._config.bundlePolicy && (s += "a=group:BUNDLE " + this.transceivers.map(function (e) {
                        return e.mid
                    }).join(" ") + "\r\n"), s += "a=ice-options:trickle\r\n", this.transceivers.forEach(function (e, t) {
                        s += zt(e, e.localCapabilities, "offer", e.stream, r._dtlsRole), s += "a=rtcp-rsize\r\n", !e.iceGatherer || "new" === r.iceGatheringState || 0 !== t && r.usingBundle || (e.iceGatherer.getLocalCandidates().forEach(function (e) {
                            e.component = 1, s += "a=" + Bt.writeCandidate(e) + "\r\n"
                        }), "completed" === e.iceGatherer.state && (s += "a=end-of-candidates\r\n"))
                    });
                    var c = new e.RTCSessionDescription({type: "offer", sdp: s});
                    return new Promise(function (e) {
                        if (i.length > 0 && "function" == typeof i[0]) return i[0].apply(null, [c]), void e();
                        e(c)
                    })
                }, n.prototype.createAnswer = function () {
                    var n = this, r = arguments,
                        i = Bt.writeSessionBoilerplate(this._sdpSessionId, this._sdpSessionVersion++);
                    this.usingBundle && (i += "a=group:BUNDLE " + this.transceivers.map(function (e) {
                        return e.mid
                    }).join(" ") + "\r\n");
                    var a = Bt.splitSections(this.remoteDescription.sdp).length - 1;
                    this.transceivers.forEach(function (e, r) {
                        if (!(r + 1 > a)) if (e.isDatachannel) i += "m=application 0 DTLS/SCTP 5000\r\nc=IN IP4 0.0.0.0\r\na=mid:" + e.mid + "\r\n"; else {
                            var o;
                            e.stream && ("audio" === e.kind ? o = e.stream.getAudioTracks()[0] : "video" === e.kind && (o = e.stream.getVideoTracks()[0]), o && t >= 15019 && "video" === e.kind && !e.sendEncodingParameters[0].rtx && (e.sendEncodingParameters[0].rtx = {ssrc: e.sendEncodingParameters[0].ssrc + 1}));
                            var s = Gt(e.localCapabilities, e.remoteCapabilities);
                            !s.codecs.filter(function (e) {
                                return "rtx" === e.name.toLowerCase()
                            }).length && e.sendEncodingParameters[0].rtx && delete e.sendEncodingParameters[0].rtx, i += zt(e, s, "answer", e.stream, n._dtlsRole), e.rtcpParameters && e.rtcpParameters.reducedSize && (i += "a=rtcp-rsize\r\n")
                        }
                    });
                    var o = new e.RTCSessionDescription({type: "answer", sdp: i});
                    return new Promise(function (e) {
                        if (r.length > 0 && "function" == typeof r[0]) return r[0].apply(null, [o]), void e();
                        e(o)
                    })
                }, n.prototype.addIceCandidate = function (e) {
                    var t, n;
                    if (e && "" !== e.candidate) {
                        if (void 0 === e.sdpMLineIndex && !e.sdpMid) throw new TypeError("sdpMLineIndex or sdpMid required");
                        if (this.remoteDescription) {
                            var r = e.sdpMLineIndex;
                            if (e.sdpMid) for (var i = 0; i < this.transceivers.length; i++) if (this.transceivers[i].mid === e.sdpMid) {
                                r = i;
                                break
                            }
                            var a = this.transceivers[r];
                            if (a) {
                                if (a.isDatachannel) return Promise.resolve();
                                var o = Object.keys(e.candidate).length > 0 ? Bt.parseCandidate(e.candidate) : {};
                                if ("tcp" === o.protocol && (0 === o.port || 9 === o.port)) return Promise.resolve();
                                if (o.component && 1 !== o.component) return Promise.resolve();
                                if ((0 === r || r > 0 && a.iceTransport !== this.transceivers[0].iceTransport) && (Yt(a.iceTransport, o) || ((t = new Error("Can not add ICE candidate")).name = "OperationError")), !t) {
                                    var s = e.candidate.trim();
                                    0 === s.indexOf("a=") && (s = s.substr(2)), (n = Bt.splitSections(this.remoteDescription.sdp))[r + 1] += "a=" + (o.type ? s : "end-of-candidates") + "\r\n", this.remoteDescription.sdp = n.join("")
                                }
                            } else (t = new Error("Can not add ICE candidate")).name = "OperationError"
                        } else (t = new Error("Can not add ICE candidate without a remote description")).name = "InvalidStateError"
                    } else for (var c = 0; c < this.transceivers.length && (this.transceivers[c].isDatachannel || (this.transceivers[c].iceTransport.addRemoteCandidate({}), (n = Bt.splitSections(this.remoteDescription.sdp))[c + 1] += "a=end-of-candidates\r\n", this.remoteDescription.sdp = n.join(""), !this.usingBundle)); c++) ;
                    var d = arguments;
                    return new Promise(function (e, n) {
                        t ? (d.length > 2 && "function" == typeof d[2] && d[2].apply(null, [t]), n(t)) : (d.length > 1 && "function" == typeof d[1] && d[1].apply(null), e())
                    })
                }, n.prototype.getStats = function () {
                    var e = [];
                    this.transceivers.forEach(function (t) {
                        ["rtpSender", "rtpReceiver", "iceGatherer", "iceTransport", "dtlsTransport"].forEach(function (n) {
                            t[n] && e.push(t[n].getStats())
                        })
                    });
                    var t = arguments.length > 1 && "function" == typeof arguments[1] && arguments[1];
                    return new Promise(function (n) {
                        var r = new Map;
                        Promise.all(e).then(function (e) {
                            e.forEach(function (e) {
                                Object.keys(e).forEach(function (t) {
                                    var n;
                                    e[t].type = {
                                        inboundrtp: "inbound-rtp",
                                        outboundrtp: "outbound-rtp",
                                        candidatepair: "candidate-pair",
                                        localcandidate: "local-candidate",
                                        remotecandidate: "remote-candidate"
                                    }[(n = e[t]).type] || n.type, r.set(t, e[t])
                                })
                            }), t && t.apply(null, r), n(r)
                        })
                    })
                }, n
            }(e, t.version)
        }, shimReplaceTrack: function (e) {
            !e.RTCRtpSender || "replaceTrack" in e.RTCRtpSender.prototype || (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack)
        }
    }, Ht = xt.log, qt = {
        shimGetUserMedia: function (e) {
            var t = xt.detectBrowser(e), n = e && e.navigator, r = e && e.MediaStreamTrack, i = function (e) {
                return {
                    name: {
                        InternalError: "NotReadableError",
                        NotSupportedError: "TypeError",
                        PermissionDeniedError: "NotAllowedError",
                        SecurityError: "NotAllowedError"
                    }[e.name] || e.name,
                    message: {"The operation is insecure.": "The request is not allowed by the user agent or the platform in the current context."}[e.message] || e.message,
                    constraint: e.constraint,
                    toString: function () {
                        return this.name + (this.message && ": ") + this.message
                    }
                }
            }, a = function (e, r, a) {
                var o = function (e) {
                    if ("object" != typeof e || e.require) return e;
                    var t = [];
                    return Object.keys(e).forEach(function (n) {
                        if ("require" !== n && "advanced" !== n && "mediaSource" !== n) {
                            var r = e[n] = "object" == typeof e[n] ? e[n] : {ideal: e[n]};
                            if (void 0 === r.min && void 0 === r.max && void 0 === r.exact || t.push(n), void 0 !== r.exact && ("number" == typeof r.exact ? r.min = r.max = r.exact : e[n] = r.exact, delete r.exact), void 0 !== r.ideal) {
                                e.advanced = e.advanced || [];
                                var i = {};
                                "number" == typeof r.ideal ? i[n] = {
                                    min: r.ideal,
                                    max: r.ideal
                                } : i[n] = r.ideal, e.advanced.push(i), delete r.ideal, Object.keys(r).length || delete e[n]
                            }
                        }
                    }), t.length && (e.require = t), e
                };
                return e = JSON.parse(JSON.stringify(e)), t.version < 38 && (Ht("spec: " + JSON.stringify(e)), e.audio && (e.audio = o(e.audio)), e.video && (e.video = o(e.video)), Ht("ff37: " + JSON.stringify(e))), n.mozGetUserMedia(e, r, function (e) {
                    a(i(e))
                })
            };
            if (n.mediaDevices || (n.mediaDevices = {
                    getUserMedia: function (e) {
                        return new Promise(function (t, n) {
                            a(e, t, n)
                        })
                    }, addEventListener: function () {
                    }, removeEventListener: function () {
                    }
                }), n.mediaDevices.enumerateDevices = n.mediaDevices.enumerateDevices || function () {
                    return new Promise(function (e) {
                        e([{kind: "audioinput", deviceId: "default", label: "", groupId: ""}, {
                            kind: "videoinput",
                            deviceId: "default",
                            label: "",
                            groupId: ""
                        }])
                    })
                }, t.version < 41) {
                var o = n.mediaDevices.enumerateDevices.bind(n.mediaDevices);
                n.mediaDevices.enumerateDevices = function () {
                    return o().then(void 0, function (e) {
                        if ("NotFoundError" === e.name) return [];
                        throw e
                    })
                }
            }
            if (t.version < 49) {
                var s = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                n.mediaDevices.getUserMedia = function (e) {
                    return s(e).then(function (t) {
                        if (e.audio && !t.getAudioTracks().length || e.video && !t.getVideoTracks().length) throw t.getTracks().forEach(function (e) {
                            e.stop()
                        }), new DOMException("The object can not be found here.", "NotFoundError");
                        return t
                    }, function (e) {
                        return Promise.reject(i(e))
                    })
                }
            }
            if (!(t.version > 55 && "autoGainControl" in n.mediaDevices.getSupportedConstraints())) {
                var c = function (e, t, n) {
                    t in e && !(n in e) && (e[n] = e[t], delete e[t])
                }, d = n.mediaDevices.getUserMedia.bind(n.mediaDevices);
                if (n.mediaDevices.getUserMedia = function (e) {
                        return "object" == typeof e && "object" == typeof e.audio && (e = JSON.parse(JSON.stringify(e)), c(e.audio, "autoGainControl", "mozAutoGainControl"), c(e.audio, "noiseSuppression", "mozNoiseSuppression")), d(e)
                    }, r && r.prototype.getSettings) {
                    var u = r.prototype.getSettings;
                    r.prototype.getSettings = function () {
                        var e = u.apply(this, arguments);
                        return c(e, "mozAutoGainControl", "autoGainControl"), c(e, "mozNoiseSuppression", "noiseSuppression"), e
                    }
                }
                if (r && r.prototype.applyConstraints) {
                    var l = r.prototype.applyConstraints;
                    r.prototype.applyConstraints = function (e) {
                        return "audio" === this.kind && "object" == typeof e && (e = JSON.parse(JSON.stringify(e)), c(e, "autoGainControl", "mozAutoGainControl"), c(e, "noiseSuppression", "mozNoiseSuppression")), l.apply(this, [e])
                    }
                }
            }
            n.getUserMedia = function (e, r, i) {
                if (t.version < 44) return a(e, r, i);
                xt.deprecated("navigator.getUserMedia", "navigator.mediaDevices.getUserMedia"), n.mediaDevices.getUserMedia(e).then(r, i)
            }
        }, shimOnTrack: function (e) {
            "object" != typeof e || !e.RTCPeerConnection || "ontrack" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
                get: function () {
                    return this._ontrack
                }, set: function (e) {
                    this._ontrack && (this.removeEventListener("track", this._ontrack), this.removeEventListener("addstream", this._ontrackpoly)), this.addEventListener("track", this._ontrack = e), this.addEventListener("addstream", this._ontrackpoly = function (e) {
                        e.stream.getTracks().forEach(function (t) {
                            var n = new Event("track");
                            n.track = t, n.receiver = {track: t}, n.transceiver = {receiver: n.receiver}, n.streams = [e.stream], this.dispatchEvent(n)
                        }.bind(this))
                    }.bind(this))
                }
            }), "object" == typeof e && e.RTCTrackEvent && "receiver" in e.RTCTrackEvent.prototype && !("transceiver" in e.RTCTrackEvent.prototype) && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                get: function () {
                    return {receiver: this.receiver}
                }
            })
        }, shimSourceObject: function (e) {
            "object" == typeof e && (!e.HTMLMediaElement || "srcObject" in e.HTMLMediaElement.prototype || Object.defineProperty(e.HTMLMediaElement.prototype, "srcObject", {
                get: function () {
                    return this.mozSrcObject
                }, set: function (e) {
                    this.mozSrcObject = e
                }
            }))
        }, shimPeerConnection: function (e) {
            var t = xt.detectBrowser(e);
            if ("object" == typeof e && (e.RTCPeerConnection || e.mozRTCPeerConnection)) {
                e.RTCPeerConnection || (e.RTCPeerConnection = function (n, r) {
                    if (t.version < 38 && n && n.iceServers) {
                        for (var i = [], a = 0; a < n.iceServers.length; a++) {
                            var o = n.iceServers[a];
                            if (o.hasOwnProperty("urls")) for (var s = 0; s < o.urls.length; s++) {
                                var c = {url: o.urls[s]};
                                0 === o.urls[s].indexOf("turn") && (c.username = o.username, c.credential = o.credential), i.push(c)
                            } else i.push(n.iceServers[a])
                        }
                        n.iceServers = i
                    }
                    return new e.mozRTCPeerConnection(n, r)
                }, e.RTCPeerConnection.prototype = e.mozRTCPeerConnection.prototype, e.mozRTCPeerConnection.generateCertificate && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                    get: function () {
                        return e.mozRTCPeerConnection.generateCertificate
                    }
                }), e.RTCSessionDescription = e.mozRTCSessionDescription, e.RTCIceCandidate = e.mozRTCIceCandidate), ["setLocalDescription", "setRemoteDescription", "addIceCandidate"].forEach(function (t) {
                    var n = e.RTCPeerConnection.prototype[t];
                    e.RTCPeerConnection.prototype[t] = function () {
                        return arguments[0] = new ("addIceCandidate" === t ? e.RTCIceCandidate : e.RTCSessionDescription)(arguments[0]), n.apply(this, arguments)
                    }
                });
                var n = e.RTCPeerConnection.prototype.addIceCandidate;
                e.RTCPeerConnection.prototype.addIceCandidate = function () {
                    return arguments[0] ? n.apply(this, arguments) : (arguments[1] && arguments[1].apply(null), Promise.resolve())
                };
                var r = {
                    inboundrtp: "inbound-rtp",
                    outboundrtp: "outbound-rtp",
                    candidatepair: "candidate-pair",
                    localcandidate: "local-candidate",
                    remotecandidate: "remote-candidate"
                }, i = e.RTCPeerConnection.prototype.getStats;
                e.RTCPeerConnection.prototype.getStats = function (e, n, a) {
                    return i.apply(this, [e || null]).then(function (e) {
                        if (t.version < 48 && (e = function (e) {
                                var t = new Map;
                                return Object.keys(e).forEach(function (n) {
                                    t.set(n, e[n]), t[n] = e[n]
                                }), t
                            }(e)), t.version < 53 && !n) try {
                            e.forEach(function (e) {
                                e.type = r[e.type] || e.type
                            })
                        } catch (t) {
                            if ("TypeError" !== t.name) throw t;
                            e.forEach(function (t, n) {
                                e.set(n, Object.assign({}, t, {type: r[t.type] || t.type}))
                            })
                        }
                        return e
                    }).then(n, a)
                }
            }
        }, shimRemoveStream: function (e) {
            !e.RTCPeerConnection || "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function (e) {
                var t = this;
                xt.deprecated("removeStream", "removeTrack"), this.getSenders().forEach(function (n) {
                    n.track && -1 !== e.getTracks().indexOf(n.track) && t.removeTrack(n)
                })
            })
        }
    }, Jt = {
        shimLocalStreamsAPI: function (e) {
            if ("object" == typeof e && e.RTCPeerConnection) {
                if ("getLocalStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                        return this._localStreams || (this._localStreams = []), this._localStreams
                    }), "getStreamById" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getStreamById = function (e) {
                        var t = null;
                        return this._localStreams && this._localStreams.forEach(function (n) {
                            n.id === e && (t = n)
                        }), this._remoteStreams && this._remoteStreams.forEach(function (n) {
                            n.id === e && (t = n)
                        }), t
                    }), !("addStream" in e.RTCPeerConnection.prototype)) {
                    var t = e.RTCPeerConnection.prototype.addTrack;
                    e.RTCPeerConnection.prototype.addStream = function (e) {
                        this._localStreams || (this._localStreams = []), -1 === this._localStreams.indexOf(e) && this._localStreams.push(e);
                        var n = this;
                        e.getTracks().forEach(function (r) {
                            t.call(n, r, e)
                        })
                    }, e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                        return n && (this._localStreams ? -1 === this._localStreams.indexOf(n) && this._localStreams.push(n) : this._localStreams = [n]), t.call(this, e, n)
                    }
                }
                "removeStream" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.removeStream = function (e) {
                    this._localStreams || (this._localStreams = []);
                    var t = this._localStreams.indexOf(e);
                    if (-1 !== t) {
                        this._localStreams.splice(t, 1);
                        var n = this, r = e.getTracks();
                        this.getSenders().forEach(function (e) {
                            -1 !== r.indexOf(e.track) && n.removeTrack(e)
                        })
                    }
                })
            }
        }, shimRemoteStreamsAPI: function (e) {
            "object" == typeof e && e.RTCPeerConnection && ("getRemoteStreams" in e.RTCPeerConnection.prototype || (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
                return this._remoteStreams ? this._remoteStreams : []
            }), "onaddstream" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "onaddstream", {
                get: function () {
                    return this._onaddstream
                }, set: function (e) {
                    var t = this;
                    this._onaddstream && (this.removeEventListener("addstream", this._onaddstream), this.removeEventListener("track", this._onaddstreampoly)), this.addEventListener("addstream", this._onaddstream = e), this.addEventListener("track", this._onaddstreampoly = function (e) {
                        e.streams.forEach(function (e) {
                            if (t._remoteStreams || (t._remoteStreams = []), !(t._remoteStreams.indexOf(e) >= 0)) {
                                t._remoteStreams.push(e);
                                var n = new Event("addstream");
                                n.stream = e, t.dispatchEvent(n)
                            }
                        })
                    })
                }
            }))
        }, shimCallbacksAPI: function (e) {
            if ("object" == typeof e && e.RTCPeerConnection) {
                var t = e.RTCPeerConnection.prototype, n = t.createOffer, r = t.createAnswer, i = t.setLocalDescription,
                    a = t.setRemoteDescription, o = t.addIceCandidate;
                t.createOffer = function (e, t) {
                    var r = arguments.length >= 2 ? arguments[2] : arguments[0], i = n.apply(this, [r]);
                    return t ? (i.then(e, t), Promise.resolve()) : i
                }, t.createAnswer = function (e, t) {
                    var n = arguments.length >= 2 ? arguments[2] : arguments[0], i = r.apply(this, [n]);
                    return t ? (i.then(e, t), Promise.resolve()) : i
                };
                var s = function (e, t, n) {
                    var r = i.apply(this, [e]);
                    return n ? (r.then(t, n), Promise.resolve()) : r
                };
                t.setLocalDescription = s, s = function (e, t, n) {
                    var r = a.apply(this, [e]);
                    return n ? (r.then(t, n), Promise.resolve()) : r
                }, t.setRemoteDescription = s, s = function (e, t, n) {
                    var r = o.apply(this, [e]);
                    return n ? (r.then(t, n), Promise.resolve()) : r
                }, t.addIceCandidate = s
            }
        }, shimGetUserMedia: function (e) {
            var t = e && e.navigator;
            t.getUserMedia || (t.webkitGetUserMedia ? t.getUserMedia = t.webkitGetUserMedia.bind(t) : t.mediaDevices && t.mediaDevices.getUserMedia && (t.getUserMedia = function (e, n, r) {
                t.mediaDevices.getUserMedia(e).then(n, r)
            }.bind(t)))
        }, shimRTCIceServerUrls: function (e) {
            var t = e.RTCPeerConnection;
            e.RTCPeerConnection = function (e, n) {
                if (e && e.iceServers) {
                    for (var r = [], i = 0; i < e.iceServers.length; i++) {
                        var a = e.iceServers[i];
                        !a.hasOwnProperty("urls") && a.hasOwnProperty("url") ? (xt.deprecated("RTCIceServer.url", "RTCIceServer.urls"), (a = JSON.parse(JSON.stringify(a))).urls = a.url, delete a.url, r.push(a)) : r.push(e.iceServers[i])
                    }
                    e.iceServers = r
                }
                return new t(e, n)
            }, e.RTCPeerConnection.prototype = t.prototype, "generateCertificate" in e.RTCPeerConnection && Object.defineProperty(e.RTCPeerConnection, "generateCertificate", {
                get: function () {
                    return t.generateCertificate
                }
            })
        }, shimTrackEventTransceiver: function (e) {
            "object" == typeof e && e.RTCPeerConnection && "receiver" in e.RTCTrackEvent.prototype && !e.RTCTransceiver && Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
                get: function () {
                    return {receiver: this.receiver}
                }
            })
        }, shimCreateOfferLegacy: function (e) {
            var t = e.RTCPeerConnection.prototype.createOffer;
            e.RTCPeerConnection.prototype.createOffer = function (e) {
                var n = this;
                if (e) {
                    var r = n.getTransceivers().find(function (e) {
                        return e.sender.track && "audio" === e.sender.track.kind
                    });
                    !1 === e.offerToReceiveAudio && r ? "sendrecv" === r.direction ? r.setDirection ? r.setDirection("sendonly") : r.direction = "sendonly" : "recvonly" === r.direction && (r.setDirection ? r.setDirection("inactive") : r.direction = "inactive") : !0 !== e.offerToReceiveAudio || r || n.addTransceiver("audio");
                    var i = n.getTransceivers().find(function (e) {
                        return e.sender.track && "video" === e.sender.track.kind
                    });
                    !1 === e.offerToReceiveVideo && i ? "sendrecv" === i.direction ? i.setDirection("sendonly") : "recvonly" === i.direction && i.setDirection("inactive") : !0 !== e.offerToReceiveVideo || i || n.addTransceiver("video")
                }
                return t.apply(n, arguments)
            }
        }
    }, Kt = {
        shimRTCIceCandidate: function (e) {
            if (!(e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)) {
                var t = e.RTCIceCandidate;
                e.RTCIceCandidate = function (e) {
                    "object" == typeof e && e.candidate && 0 === e.candidate.indexOf("a=") && ((e = JSON.parse(JSON.stringify(e))).candidate = e.candidate.substr(2));
                    var n = new t(e), r = Bt.parseCandidate(e.candidate), i = Object.assign(n, r);
                    return i.toJSON = function () {
                        return {
                            candidate: i.candidate,
                            sdpMid: i.sdpMid,
                            sdpMLineIndex: i.sdpMLineIndex,
                            usernameFragment: i.usernameFragment
                        }
                    }, i
                }, xt.wrapPeerConnectionEvent(e, "icecandidate", function (t) {
                    return t.candidate && Object.defineProperty(t, "candidate", {
                        value: new e.RTCIceCandidate(t.candidate),
                        writable: "false"
                    }), t
                })
            }
        }, shimCreateObjectURL: function (e) {
            var t = e && e.URL;
            if ("object" == typeof e && e.HTMLMediaElement && "srcObject" in e.HTMLMediaElement.prototype && t.createObjectURL && t.revokeObjectURL) {
                var n = t.createObjectURL.bind(t), r = t.revokeObjectURL.bind(t), i = new Map, a = 0;
                t.createObjectURL = function (e) {
                    if ("getTracks" in e) {
                        var t = "polyblob:" + ++a;
                        return i.set(t, e), xt.deprecated("URL.createObjectURL(stream)", "elem.srcObject = stream"), t
                    }
                    return n(e)
                }, t.revokeObjectURL = function (e) {
                    r(e), i.delete(e)
                };
                var o = Object.getOwnPropertyDescriptor(e.HTMLMediaElement.prototype, "src");
                Object.defineProperty(e.HTMLMediaElement.prototype, "src", {
                    get: function () {
                        return o.get.apply(this)
                    }, set: function (e) {
                        return this.srcObject = i.get(e) || null, o.set.apply(this, [e])
                    }
                });
                var s = e.HTMLMediaElement.prototype.setAttribute;
                e.HTMLMediaElement.prototype.setAttribute = function () {
                    return 2 === arguments.length && "src" === ("" + arguments[0]).toLowerCase() && (this.srcObject = i.get(arguments[1]) || null), s.apply(this, arguments)
                }
            }
        }, shimMaxMessageSize: function (e) {
            if (!e.RTCSctpTransport && e.RTCPeerConnection) {
                var t = xt.detectBrowser(e);
                "sctp" in e.RTCPeerConnection.prototype || Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                    get: function () {
                        return void 0 === this._sctp ? null : this._sctp
                    }
                });
                var n = e.RTCPeerConnection.prototype.setRemoteDescription;
                e.RTCPeerConnection.prototype.setRemoteDescription = function () {
                    var e, r, i, a;
                    if (this._sctp = null, i = arguments[0], (a = Bt.splitSections(i.sdp)).shift(), a.some(function (e) {
                            var t = Bt.parseMLine(e);
                            return t && "application" === t.kind && -1 !== t.protocol.indexOf("SCTP")
                        })) {
                        var o, s = function (e) {
                                var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                                if (null === t || t.length < 2) return -1;
                                var n = parseInt(t[1], 10);
                                return n != n ? -1 : n
                            }(arguments[0]),
                            c = (e = s, r = 65536, "firefox" === t.browser && (r = t.version < 57 ? -1 === e ? 16384 : 2147483637 : 57 === t.version ? 65535 : 65536), r),
                            d = function (e, n) {
                                var r = 65536;
                                "firefox" === t.browser && 57 === t.version && (r = 65535);
                                var i = Bt.matchPrefix(e.sdp, "a=max-message-size:");
                                return i.length > 0 ? r = parseInt(i[0].substr(19), 10) : "firefox" === t.browser && -1 !== n && (r = 2147483637), r
                            }(arguments[0], s);
                        o = 0 === c && 0 === d ? Number.POSITIVE_INFINITY : 0 === c || 0 === d ? Math.max(c, d) : Math.min(c, d);
                        var u = {};
                        Object.defineProperty(u, "maxMessageSize", {
                            get: function () {
                                return o
                            }
                        }), this._sctp = u
                    }
                    return n.apply(this, arguments)
                }
            }
        }, shimSendThrowTypeError: function (e) {
            var t = e.RTCPeerConnection.prototype.createDataChannel;
            e.RTCPeerConnection.prototype.createDataChannel = function () {
                var e = this, n = t.apply(e, arguments), r = n.send;
                return n.send = function () {
                    var t = arguments[0];
                    if ((t.length || t.size || t.byteLength) > e.sctp.maxMessageSize) throw new DOMException("Message too large (can send a maximum of " + e.sctp.maxMessageSize + " bytes)", "TypeError");
                    return r.apply(this, arguments)
                }, n
            }
        }
    }, Zt = (function (e, t) {
        var n = e && e.window, r = {shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0};
        for (var i in void 0) hasOwnProperty.call(void 0, i) && (r[i] = (void 0)[i]);
        var a = xt.log, o = xt.detectBrowser(n), s = Ft || null, c = Qt || null, d = qt || null, u = Jt || null,
            l = Kt || null, f = {
                browserDetails: o,
                commonShim: l,
                extractVersion: xt.extractVersion,
                disableLog: xt.disableLog,
                disableWarnings: xt.disableWarnings
            };
        switch (o.browser) {
            case"chrome":
                if (!s || !s.shimPeerConnection || !r.shimChrome) return a("Chrome shim is not included in this adapter release."), f;
                a("adapter.js shimming chrome."), f.browserShim = s, l.shimCreateObjectURL(n), s.shimGetUserMedia(n), s.shimMediaStream(n), s.shimSourceObject(n), s.shimPeerConnection(n), s.shimOnTrack(n), s.shimAddTrackRemoveTrack(n), s.shimGetSendersWithDtmf(n), l.shimRTCIceCandidate(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n);
                break;
            case"firefox":
                if (!d || !d.shimPeerConnection || !r.shimFirefox) return a("Firefox shim is not included in this adapter release."), f;
                a("adapter.js shimming firefox."), f.browserShim = d, l.shimCreateObjectURL(n), d.shimGetUserMedia(n), d.shimSourceObject(n), d.shimPeerConnection(n), d.shimOnTrack(n), d.shimRemoveStream(n), l.shimRTCIceCandidate(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n);
                break;
            case"edge":
                if (!c || !c.shimPeerConnection || !r.shimEdge) return a("MS edge shim is not included in this adapter release."), f;
                a("adapter.js shimming edge."), f.browserShim = c, l.shimCreateObjectURL(n), c.shimGetUserMedia(n), c.shimPeerConnection(n), c.shimReplaceTrack(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n);
                break;
            case"safari":
                if (!u || !r.shimSafari) return a("Safari shim is not included in this adapter release."), f;
                a("adapter.js shimming safari."), f.browserShim = u, l.shimCreateObjectURL(n), u.shimRTCIceServerUrls(n), u.shimCallbacksAPI(n), u.shimLocalStreamsAPI(n), u.shimRemoteStreamsAPI(n), u.shimTrackEventTransceiver(n), u.shimGetUserMedia(n), u.shimCreateOfferLegacy(n), l.shimRTCIceCandidate(n), l.shimMaxMessageSize(n), l.shimSendThrowTypeError(n);
                break;
            default:
                a("Unsupported browser!")
        }
    }({window: t.window}), {f: ie}), Xt = Zt.f("iterator"), $t = r(function (e) {
        e.exports = {default: Xt, __esModule: !0}
    });
    n($t);
    var en = r(function (e) {
            var t = G("meta"), n = w.f, r = 0, i = Object.isExtensible || function () {
                return !0
            }, a = !m(function () {
                return i(Object.preventExtensions({}))
            }), o = function (e) {
                n(e, t, {value: {i: "O" + ++r, w: {}}})
            }, s = e.exports = {
                KEY: t, NEED: !1, fastKey: function (e, n) {
                    if (!f(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!k(e, t)) {
                        if (!i(e)) return "F";
                        if (!n) return "E";
                        o(e)
                    }
                    return e[t].i
                }, getWeak: function (e, n) {
                    if (!k(e, t)) {
                        if (!i(e)) return !0;
                        if (!n) return !1;
                        o(e)
                    }
                    return e[t].w
                }, onFreeze: function (e) {
                    return a && s.NEED && i(e) && !k(e, t) && o(e), e
                }
            }
        }), tn = (en.KEY, en.NEED, en.fastKey, en.getWeak, en.onFreeze, w.f), nn = function (e) {
            var t = d.Symbol || (d.Symbol = {});
            "_" == e.charAt(0) || e in t || tn(t, e, {value: Zt.f(e)})
        }, rn = {f: Object.getOwnPropertySymbols}, an = {f: {}.propertyIsEnumerable}, on = Array.isArray || function (e) {
            return "Array" == L(e)
        }, sn = J.concat("length", "prototype"), cn = {
            f: Object.getOwnPropertyNames || function (e) {
                return q(e, sn)
            }
        }, dn = cn.f, un = {}.toString,
        ln = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        fn = {
            f: function (e) {
                return ln && "[object Window]" == un.call(e) ? function (e) {
                    try {
                        return dn(e)
                    } catch (e) {
                        return ln.slice()
                    }
                }(e) : dn(D(e))
            }
        }, pn = Object.getOwnPropertyDescriptor, mn = {
            f: h ? pn : function (e, t) {
                if (e = D(e), t = _(t, !0), S) try {
                    return pn(e, t)
                } catch (e) {
                }
                if (k(e, t)) return T(!an.f.call(e, t), e[t])
            }
        }, hn = en.KEY, vn = mn.f, gn = w.f, yn = fn.f, Sn = c.Symbol, _n = c.JSON, Cn = _n && _n.stringify,
        wn = ie("_hidden"), Tn = ie("toPrimitive"), bn = {}.propertyIsEnumerable, En = F("symbol-registry"),
        Vn = F("symbols"), An = F("op-symbols"), Mn = Object.prototype, kn = "function" == typeof Sn, In = c.QObject,
        Pn = !In || !In.prototype || !In.prototype.findChild, Ln = h && m(function () {
            return 7 != re(gn({}, "a", {
                get: function () {
                    return gn(this, "a", {value: 7}).a
                }
            })).a
        }) ? function (e, t, n) {
            var r = vn(Mn, t);
            r && delete Mn[t], gn(e, t, n), r && e !== Mn && gn(Mn, t, r)
        } : gn, On = function (e) {
            var t = Vn[e] = re(Sn.prototype);
            return t._k = e, t
        }, Dn = kn && "symbol" == typeof Sn.iterator ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return e instanceof Sn
        }, Nn = function (e, t, n) {
            return e === Mn && Nn(An, t, n), p(e), t = _(t, !0), p(n), k(Vn, t) ? (n.enumerable ? (k(e, wn) && e[wn][t] && (e[wn][t] = !1), n = re(n, {enumerable: T(0, !1)})) : (k(e, wn) || gn(e, wn, T(1, {})), e[wn][t] = !0), Ln(e, t, n)) : gn(e, t, n)
        }, Rn = function (e, t) {
            p(e);
            for (var n, r = function (e) {
                var t = K(e), n = rn.f;
                if (n) for (var r, i = n(e), a = an.f, o = 0; i.length > o;) a.call(e, r = i[o++]) && t.push(r);
                return t
            }(t = D(t)), i = 0, a = r.length; a > i;) Nn(e, n = r[i++], t[n]);
            return e
        }, xn = function (e, t) {
            if (e = D(e), t = _(t, !0), e !== Mn || !k(Vn, t) || k(An, t)) {
                var n = vn(e, t);
                return !n || !k(Vn, t) || k(e, wn) && e[wn][t] || (n.enumerable = !0), n
            }
        }, jn = function (e) {
            for (var t, n = yn(D(e)), r = [], i = 0; n.length > i;) k(Vn, t = n[i++]) || t == wn || t == hn || r.push(t);
            return r
        }, Un = function (e) {
            for (var t, n = e === Mn, r = yn(n ? An : D(e)), i = [], a = 0; r.length > a;) !k(Vn, t = r[a++]) || n && !k(Mn, t) || i.push(Vn[t]);
            return i
        };
    kn || (A((Sn = function () {
        if (this instanceof Sn) throw TypeError("Symbol is not a constructor!");
        var e = G(arguments.length > 0 ? arguments[0] : void 0), t = function (n) {
            this === Mn && t.call(An, n), k(this, wn) && k(this[wn], e) && (this[wn][e] = !1), Ln(this, e, T(1, n))
        };
        return h && Pn && Ln(Mn, e, {configurable: !0, set: t}), On(e)
    }).prototype, "toString", function () {
        return this._k
    }), mn.f = xn, w.f = Nn, cn.f = fn.f = jn, an.f = function (e) {
        var t = bn.call(this, e = _(e, !0));
        return !(this === Mn && k(Vn, e) && !k(An, e)) && (!(t || !k(this, e) || !k(Vn, e) || k(this, wn) && this[wn][e]) || t)
    }, rn.f = Un, Zt.f = function (e) {
        return On(ie(e))
    }), V(V.G + V.W + V.F * !kn, {Symbol: Sn});
    for (var Fn = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Bn = 0; Fn.length > Bn;) ie(Fn[Bn++]);
    for (var zn = K(ie.store), Gn = 0; zn.length > Gn;) nn(zn[Gn++]);
    V(V.S + V.F * !kn, "Symbol", {
        for: function (e) {
            return k(En, e += "") ? En[e] : En[e] = Sn(e)
        }, keyFor: function (e) {
            if (!Dn(e)) throw TypeError(e + " is not a symbol!");
            for (var t in En) if (En[t] === e) return t
        }, useSetter: function () {
            Pn = !0
        }, useSimple: function () {
            Pn = !1
        }
    }), V(V.S + V.F * !kn, "Object", {
        create: function (e, t) {
            return void 0 === t ? re(e) : Rn(re(e), t)
        },
        defineProperty: Nn,
        defineProperties: Rn,
        getOwnPropertyDescriptor: xn,
        getOwnPropertyNames: jn,
        getOwnPropertySymbols: Un
    }), _n && V(V.S + V.F * (!kn || m(function () {
        var e = Sn();
        return "[null]" != Cn([e]) || "{}" != Cn({a: e}) || "{}" != Cn(Object(e))
    })), "JSON", {
        stringify: function (e) {
            if (void 0 !== e && !Dn(e)) {
                for (var t, n, r = [e], i = 1; arguments.length > i;) r.push(arguments[i++]);
                return "function" == typeof(t = r[1]) && (n = t), !n && on(t) || (t = function (e, t) {
                    if (n && (t = n.call(this, e, t)), !Dn(t)) return t
                }), r[1] = t, Cn.apply(_n, r)
            }
        }
    }), Sn.prototype[Tn] || b(Sn.prototype, Tn, Sn.prototype.valueOf), se(Sn, "Symbol"), se(Math, "Math", !0), se(c.JSON, "JSON", !0), nn("asyncIterator"), nn("observable");
    var Wn = d.Symbol, Yn = r(function (e) {
        e.exports = {default: Wn, __esModule: !0}
    });
    n(Yn);
    var Qn = r(function (e, t) {
        t.__esModule = !0;
        var n = a($t), r = a(Yn), i = "function" == typeof r.default && "symbol" == typeof n.default ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : typeof e
        };

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.default = "function" == typeof r.default && "symbol" === i(n.default) ? function (e) {
            return void 0 === e ? "undefined" : i(e)
        } : function (e) {
            return e && "function" == typeof r.default && e.constructor === r.default && e !== r.default.prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
        }
    }), Hn = n(Qn), qn = function (e, t) {
        if (p(e), !f(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    }, Jn = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, n) {
            try {
                (n = l(Function.call, mn.f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
            } catch (e) {
                t = !0
            }
            return function (e, r) {
                return qn(e, r), t ? e.__proto__ = r : n(e, r), e
            }
        }({}, !1) : void 0), check: qn
    };
    V(V.S, "Object", {setPrototypeOf: Jn.set});
    var Kn = d.Object.setPrototypeOf, Zn = r(function (e) {
        e.exports = {default: Kn, __esModule: !0}
    }), Xn = n(Zn), $n = function (e, t) {
        var n = (d.Object || {})[e] || Object[e], r = {};
        r[e] = t(n), V(V.S + V.F * m(function () {
            n(1)
        }), "Object", r)
    };
    $n("getPrototypeOf", function () {
        return function (e) {
            return pe(ue(e))
        }
    });
    var er = d.Object.getPrototypeOf, tr = n(r(function (e) {
        e.exports = {default: er, __esModule: !0}
    })), nr = n(r(function (e, t) {
        t.__esModule = !0, t.default = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    })), rr = n(r(function (e, t) {
        t.__esModule = !0;
        var n, r = (n = Qn) && n.__esModule ? n : {default: n};
        t.default = function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t
        }
    }));
    V(V.S, "Object", {create: re});
    var ir = d.Object, ar = function (e, t) {
        return ir.create(e, t)
    }, or = r(function (e) {
        e.exports = {default: ar, __esModule: !0}
    });
    n(or);
    var sr, cr, dr, ur, lr, fr, pr, mr = n(r(function (e, t) {
        t.__esModule = !0;
        var n = a(Zn), r = a(or), i = a(Qn);

        function a(e) {
            return e && e.__esModule ? e : {default: e}
        }

        t.default = function (e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, i.default)(t)));
            e.prototype = (0, r.default)(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (n.default ? (0, n.default)(e, t) : e.__proto__ = t)
        }
    })), hr = function (e) {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.name,
                r = void 0 === n ? "" : n, i = e.message, a = void 0 === i ? "" : i;
            nr(this, t);
            var o = rr(this, (t.__proto__ || tr(t)).call(this, a));
            return Xn(o, t.prototype), o.name = r, o
        }

        return mr(t, e), t
    }(Error);
    (pr = e.BrowserHelper || (e.BrowserHelper = {})).checkBrowserCompatibility = function () {
        return null == window.navigator.mediaDevices || "function" != typeof window.navigator.mediaDevices.getUserMedia ? new hr({
            name: "UnsupportedBrowserError",
            message: "Media devices are not supported on this OS / Browser"
        }) : window.hasOwnProperty("Worker") && "function" == typeof window.Worker ? window.hasOwnProperty("WebAssembly") && "object" === Hn(window.WebAssembly) ? window.hasOwnProperty("Blob") && "function" == typeof window.Blob ? !window.hasOwnProperty("URL") || "function" != typeof window.URL && "object" !== Hn(window.URL) || "function" != typeof window.URL.createObjectURL ? new hr({
            name: "UnsupportedBrowserError",
            message: "URL object is not supported on this OS / Browser"
        }) : void 0 : new hr({
            name: "UnsupportedBrowserError",
            message: "Blob object is not supported on this OS / Browser"
        }) : new hr({
            name: "UnsupportedBrowserError",
            message: "WebAssembly is not supported on this OS / Browser"
        }) : new hr({name: "UnsupportedBrowserError", message: "Web Worker is not supported on this OS / Browser"})
    }, pr.getDeviceId = function () {
        var e = function (e) {
            var t = document.cookie.match("(^|;)\\s*scandit-device-id\\s*=\\s*([^;]+)");
            if (null == t) return "";
            var n = t.pop();
            return null == n ? "" : n
        }();
        if ("" !== e) return e;
        for (var t, n, r, i = "", a = 0; a < 40; ++a) i += "0123456789abcdef".charAt(Math.floor(16 * Math.random()));
        return t = "scandit-device-id", n = i, (r = new Date).setTime(r.getTime() + 31536e7), document.cookie = t + "=" + n + ";expires=" + r.toUTCString(), i
    }, (sr = (cr = e.Camera || (e.Camera = {})).Type || (cr.Type = {}))[sr.FRONT = 0] = "FRONT", sr[sr.BACK = 1] = "BACK", lr = e.CameraAccess || (e.CameraAccess = {}), fr = ["rear", "back", "rück", "arrière", "trasera", "trás", "traseira", "posteriore", "后面", "後面", "背面", "后置", "後置", "背置", "задней", "الخلفية", "후", "arka", "achterzijde", "หลัง", "baksidan", "bagside", "sau", "bak", "tylny", "takakamera", "belakang", "אחורית", "πίσω", "spate", "hátsó", "zadní", "darrere", "zadná", "задня", "stražnja", "belakang", "बैक"], lr.getCameras = function () {
        return new Ot(function (t, n) {
            var r = e.BrowserHelper.checkBrowserCompatibility();
            return null != r ? n(r) : null != lr.cameras ? t(lr.cameras) : void navigator.mediaDevices.getUserMedia({
                video: !0,
                audio: !1
            }).then(function (r) {
                return ("function" == typeof window.navigator.enumerateDevices ? window.navigator.enumerateDevices() : "object" === Hn(window.navigator.mediaDevices) && "function" == typeof window.navigator.mediaDevices.enumerateDevices ? window.navigator.mediaDevices.enumerateDevices() : new Ot(function (e, t) {
                    try {
                        window.MediaStreamTrack.getSources(function (t) {
                            e(t.filter(function (e) {
                                return "video" === e.kind.toLowerCase() || "videoinput" === e.kind.toLowerCase()
                            }).map(function (e) {
                                return {
                                    deviceId: null != e.deviceId ? e.deviceId : "",
                                    groupId: e.groupId,
                                    kind: "videoinput",
                                    label: e.label
                                }
                            }))
                        })
                    } catch (e) {
                        t(new hr({
                            name: "UnsupportedBrowserError",
                            message: "Media devices are not supported on this OS / Browser"
                        }))
                    }
                })).then(function (n) {
                    if (r.getVideoTracks().forEach(function (e) {
                            e.stop()
                        }), lr.cameras = n.filter(function (e) {
                            return "videoinput" === e.kind
                        }).map(function (t) {
                            var n = null != t.label ? t.label : "", r = n.toLowerCase();
                            return {
                                deviceId: t.deviceId, label: n, cameraType: fr.some(function (e) {
                                    return -1 !== r.indexOf(e)
                                }) ? e.Camera.Type.BACK : e.Camera.Type.FRONT
                            }
                        }), lr.cameras.length > 1 && !lr.cameras.some(function (t) {
                            return t.cameraType === e.Camera.Type.BACK
                        })) {
                        var i = lr.cameras.slice(-1)[0];
                        lr.cameras[lr.cameras.length - 1] = {
                            deviceId: i.deviceId,
                            label: i.label,
                            cameraType: e.Camera.Type.BACK
                        }
                    }
                    return t(lr.cameras)
                }).catch(function (e) {
                    return r.getVideoTracks().forEach(function (e) {
                        e.stop()
                    }), n(e)
                })
            }).catch(function (e) {
                n(e)
            })
        })
    }, lr.accessCameraStream = function (e, t) {
        var n = {audio: !1, video: {}};
        return 0 === e ? n.video = {
            width: {min: 1400, ideal: 1920, max: 1920},
            height: {min: 900, ideal: 1440, max: 1440}
        } : 1 === e ? n.video = {
            width: {min: 1200, ideal: 1920, max: 1920},
            height: {min: 900, ideal: 1200, max: 1200}
        } : 2 === e ? n.video = {
            width: {min: 1080, ideal: 1920, max: 1920},
            height: {min: 900, ideal: 1080, max: 1080}
        } : 3 === e ? n.video = {
            width: {min: 960, ideal: 1280, max: 1440},
            height: {min: 480, ideal: 960, max: 960}
        } : 4 === e ? n.video = {
            width: {min: 720, ideal: 1280, max: 1440},
            height: {min: 480, ideal: 720, max: 768}
        } : 5 === e && (n.video = {
            width: {min: 640, ideal: 960, max: 1440},
            height: {min: 480, ideal: 720, max: 720}
        }), void 0 === t ? n.video = !0 : n.video.deviceId = {exact: t.deviceId}, navigator.mediaDevices.getUserMedia(n)
    }, (dr = (ur = e.ImageSettings || (e.ImageSettings = {})).Format || (ur.Format = {}))[dr.GRAY_8U = 0] = "GRAY_8U", dr[dr.RGB_8U = 1] = "RGB_8U", dr[dr.RGBA_8U = 2] = "RGBA_8U";
    var vr = d.JSON || (d.JSON = {stringify: JSON.stringify}), gr = function (e) {
        return vr.stringify.apply(vr, arguments)
    }, yr = n(r(function (e) {
        e.exports = {default: gr, __esModule: !0}
    }));
    V(V.S + V.F * !h, "Object", {defineProperty: w.f});
    var Sr = d.Object, _r = function (e, t, n) {
        return Sr.defineProperty(e, t, n)
    }, Cr = r(function (e) {
        e.exports = {default: _r, __esModule: !0}
    });
    n(Cr);
    var wr, Tr, br, Er, Vr, Ar = n(r(function (e, t) {
        t.__esModule = !0;
        var n, r = (n = Cr) && n.__esModule ? n : {default: n};
        t.default = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(e, i.key, i)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
    })), Mr = r(function (e) {
        var t = Object.prototype.hasOwnProperty, n = "~";

        function r() {
        }

        function i(e, t, r, i, a) {
            if ("function" != typeof r) throw new TypeError("The listener must be a function");
            var o = new function (e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }(r, i || e, a), s = n ? n + t : t;
            return e._events[s] ? e._events[s].fn ? e._events[s] = [e._events[s], o] : e._events[s].push(o) : (e._events[s] = o, e._eventsCount++), e
        }

        function a(e, t) {
            0 == --e._eventsCount ? e._events = new r : delete e._events[t]
        }

        function o() {
            this._events = new r, this._eventsCount = 0
        }

        Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (n = !1)), o.prototype.eventNames = function () {
            var e, r, i = [];
            if (0 === this._eventsCount) return i;
            for (r in e = this._events) t.call(e, r) && i.push(n ? r.slice(1) : r);
            return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
        }, o.prototype.listeners = function (e) {
            var t = n ? n + e : e, r = this._events[t];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var i = 0, a = r.length, o = new Array(a); i < a; i++) o[i] = r[i].fn;
            return o
        }, o.prototype.listenerCount = function (e) {
            var t = n ? n + e : e, r = this._events[t];
            return r ? r.fn ? 1 : r.length : 0
        }, o.prototype.emit = function (e, t, r, i, a, o) {
            var s = n ? n + e : e;
            if (!this._events[s]) return !1;
            var c, d, u = this._events[s], l = arguments.length;
            if (u.fn) {
                switch (u.once && this.removeListener(e, u.fn, void 0, !0), l) {
                    case 1:
                        return u.fn.call(u.context), !0;
                    case 2:
                        return u.fn.call(u.context, t), !0;
                    case 3:
                        return u.fn.call(u.context, t, r), !0;
                    case 4:
                        return u.fn.call(u.context, t, r, i), !0;
                    case 5:
                        return u.fn.call(u.context, t, r, i, a), !0;
                    case 6:
                        return u.fn.call(u.context, t, r, i, a, o), !0
                }
                for (d = 1, c = new Array(l - 1); d < l; d++) c[d - 1] = arguments[d];
                u.fn.apply(u.context, c)
            } else {
                var f, p = u.length;
                for (d = 0; d < p; d++) switch (u[d].once && this.removeListener(e, u[d].fn, void 0, !0), l) {
                    case 1:
                        u[d].fn.call(u[d].context);
                        break;
                    case 2:
                        u[d].fn.call(u[d].context, t);
                        break;
                    case 3:
                        u[d].fn.call(u[d].context, t, r);
                        break;
                    case 4:
                        u[d].fn.call(u[d].context, t, r, i);
                        break;
                    default:
                        if (!c) for (f = 1, c = new Array(l - 1); f < l; f++) c[f - 1] = arguments[f];
                        u[d].fn.apply(u[d].context, c)
                }
            }
            return !0
        }, o.prototype.on = function (e, t, n) {
            return i(this, e, t, n, !1)
        }, o.prototype.once = function (e, t, n) {
            return i(this, e, t, n, !0)
        }, o.prototype.removeListener = function (e, t, r, i) {
            var o = n ? n + e : e;
            if (!this._events[o]) return this;
            if (!t) return a(this, o), this;
            var s = this._events[o];
            if (s.fn) s.fn !== t || i && !s.once || r && s.context !== r || a(this, o); else {
                for (var c = 0, d = [], u = s.length; c < u; c++) (s[c].fn !== t || i && !s[c].once || r && s[c].context !== r) && d.push(s[c]);
                d.length ? this._events[o] = 1 === d.length ? d[0] : d : a(this, o)
            }
            return this
        }, o.prototype.removeAllListeners = function (e) {
            var t;
            return e ? (t = n ? n + e : e, this._events[t] && a(this, t)) : (this._events = new r, this._eventsCount = 0), this
        }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = n, o.EventEmitter = o, e.exports = o
    }).EventEmitter, kr = new Blob(["(" + function () {
        var e = void 0, t = void 0, n = void 0, r = void 0, i = !1, a = !1, o = !1, s = [], c = [], d = !1, u = !1,
            l = !1, f = !1;

        function p() {
            if (!d && null != t && i) {
                var e = Module.lengthBytesUTF8(t) + 1, n = Module._malloc(e);
                Module.stringToUTF8(t, n, e), Module.asm._create_context(n), Module._free(n), d = !0
            }
        }

        function m() {
            if (null != n && d && i) if (a = !1, null != t) {
                var e = Module.lengthBytesUTF8(n) + 1, r = Module._malloc(e);
                Module.stringToUTF8(n, r, e);
                var o = Module.asm._scanner_settings_new_from_json(r, f ? 1 : 0);
                Module._free(r);
                var s = Module.UTF8ToString(o);
                "" !== s && (a = !0, console.debug(JSON.parse(s)))
            } else console.error("No license key found, the library must be set up before the scanning engine can be used")
        }

        function h() {
            if (null != r && i) {
                o = !1;
                var t = void 0;
                switch (r.format.valueOf()) {
                    case 0:
                        t = 1;
                        break;
                    case 1:
                        t = 3;
                        break;
                    case 2:
                        t = 4;
                        break;
                    default:
                        t = 1
                }
                Module.asm._scanner_image_settings_new(r.width, r.height, t), null != e && (Module._free(e), e = void 0), e = Module._malloc(r.width * r.height * t), o = !0
            }
        }

        function v(e, t, n) {
            var r = Module.lengthBytesUTF8(t) + 1, i = Module._malloc(r);
            Module.stringToUTF8(t, i, r);
            var a = Module.lengthBytesUTF8(n) + 1, o = Module._malloc(a);
            Module.stringToUTF8(n, o, a);
            var s = Module.asm._parser_parse_string(e.valueOf(), i, r - 1, o);
            return Module._free(i), Module._free(o), Module.UTF8ToString(s)
        }

        function g() {
            if (a && o || 0 === s.length || (p(), m(), h()), a && o) for (var t, n = void 0, r = void 0; 0 !== s.length;) {
                t = (n = s.shift()).data, Module.HEAPU8.set(new Uint8Array(t), e), r = Module.UTF8ToString(Module.asm._scanner_scan(e));
                var i = JSON.parse(r);
                null != i.error ? postMessage(["work-error", {
                    requestId: n.requestId,
                    error: i.error
                }], [n.data]) : null != i.result ? postMessage(["work-result", {
                    requestId: n.requestId,
                    result: i.result
                }], [n.data]) : (console.error("Unrecognized Scandit Engine result:", i), postMessage([""], [n.data]))
            }
        }

        function y() {
            if (d || 0 === c.length || p(), d && i) for (var e = void 0, t = void 0; 0 !== c.length;) {
                t = v((e = c.shift()).dataFormat, e.dataString, e.options);
                var n = JSON.parse(t);
                null != n.error ? postMessage(["parse-string-error", {
                    requestId: e.requestId,
                    error: n.error
                }]) : null != n.result ? postMessage(["parse-string-result", {
                    requestId: e.requestId,
                    result: n.result
                }]) : (console.error("Unrecognized Scandit Parser result:", n), postMessage(["parse-string-error", {
                    requestId: e.requestId,
                    error: {errorCode: -1, errorMessage: "Unknown Scandit Parser error"}
                }]))
            }
        }

        onmessage = function (e) {
            var a = e.data;
            switch (a.type) {
                case"enable-blurry-decoding":
                    f = !0, u && (m(), g());
                    break;
                case"load-library":
                    !function (e, t) {
                        var n = {
                            locateFile: function () {
                                return t + "scandit-engine-sdk.wasm"
                            }, arguments: [e], noInitialRun: !0, preRun: function () {
                                try {
                                    FS.mkdir("/scandit_sync_folder")
                                } catch (e) {
                                    if ("EEXIST" !== e.code) throw e
                                }
                                FS.mount(IDBFS, {}, "/scandit_sync_folder"), FS.syncfs(!0, function () {
                                    Module.callMain(), i = !0, postMessage(["status", "ready"]), g(), y()
                                })
                            }
                        };
                        if (self.Module = n, "function" == typeof importScripts) try {
                            importScripts(t + "scandit-engine-sdk.min.js")
                        } catch (e) {
                            console.error("Couldn't retrieve Scandit SDK Engine library at " + t + "scandit-engine-sdk.min.js, did you configure the path for it correctly?")
                        }
                    }(a.deviceId, a.libraryLocation);
                    break;
                case"license-key":
                    t = a.licenseKey, p(), l && y();
                    break;
                case"settings":
                    n = a.settings, u && (m(), g());
                    break;
                case"image-settings":
                    r = a.imageSettings, u && (h(), g());
                    break;
                case"work":
                    u = !0, s.push({requestId: a.requestId, data: a.data}), g();
                    break;
                case"parse-string":
                    l = !0, c.push({
                        requestId: a.requestId,
                        dataFormat: a.dataFormat,
                        dataString: a.dataString,
                        options: a.options
                    }), y()
            }
        }
    }.toString() + ")()"], {type: "text/javascript"});
    (Vr = e.Barcode || (e.Barcode = {})).createFromWASMResult = function (e) {
        var t = void 0;
        try {
            t = decodeURIComponent(escape(String.fromCharCode.apply(null, e.rawData)))
        } catch (e) {
            t = ""
        }
        return {
            symbology: e.symbology,
            data: t,
            rawData: new Uint8Array(e.rawData),
            location: {
                topLeft: {x: e.location[0][0], y: e.location[0][1]},
                topRight: {x: e.location[1][0], y: e.location[1][1]},
                bottomRight: {x: e.location[2][0], y: e.location[2][1]},
                bottomLeft: {x: e.location[3][0], y: e.location[3][1]}
            },
            compositeFlag: e.compositeFlag,
            isGs1DataCarrier: e.isGs1DataCarrier,
            encodingArray: e.encodingArray
        }
    }, (Er = Vr.Symbology || (Vr.Symbology = {})).EAN13 = "ean13", Er.EAN8 = "ean8", Er.UPCA = "upca", Er.UPCE = "upce", Er.CODE128 = "code128", Er.CODE39 = "code39", Er.CODE93 = "code93", Er.INTERLEAVED_2_OF_5 = "itf", Er.QR = "qr", Er.DATA_MATRIX = "data-matrix", Er.PDF417 = "pdf417", Er.MSI_PLESSEY = "msi-plessey", Er.GS1_DATABAR = "databar", Er.GS1_DATABAR_EXPANDED = "databar-expanded", Er.CODABAR = "codabar", Er.AZTEC = "aztec", Er.TWO_DIGIT_ADD_ON = "two-digit-add-on", Er.FIVE_DIGIT_ADD_ON = "five-digit-add-on", Er.MAXICODE = "maxicode", Er.CODE11 = "code11", Er.GS1_DATABAR_LIMITED = "databar-limited", Er.CODE25 = "code25", Er.MICRO_PDF417 = "micropdf417", Er.RM4SCC = "rm4scc", Er.KIX = "kix", Er.DOTCODE = "dotcode", (br = Vr.CompositeFlag || (Vr.CompositeFlag = {}))[br.NONE = 0] = "NONE", br[br.UNKNOWN = 1] = "UNKNOWN", br[br.LINKED = 2] = "LINKED", br[br.GS1_A = 4] = "GS1_A", br[br.GS1_B = 8] = "GS1_B", br[br.GS1_C = 16] = "GS1_C", function (e) {
        e.toHumanizedName = function (t) {
            switch (t.toLowerCase()) {
                case e.EAN13:
                    return "EAN-13";
                case e.EAN8:
                    return "EAN-8";
                case e.UPCA:
                    return "UPC-A";
                case e.UPCE:
                    return "UPC-E";
                case e.CODE128:
                    return "Code 128";
                case e.CODE39:
                    return "Code 39";
                case e.CODE93:
                    return "Code 93";
                case e.INTERLEAVED_2_OF_5:
                    return "Interleaved Two of Five";
                case e.QR:
                    return "QR";
                case e.DATA_MATRIX:
                    return "Data Matrix";
                case e.PDF417:
                    return "PDF417";
                case e.MSI_PLESSEY:
                    return "MSI-Plessey";
                case e.GS1_DATABAR:
                    return "GS1 DataBar 14";
                case e.GS1_DATABAR_EXPANDED:
                    return "GS1 DataBar Expanded";
                case e.CODABAR:
                    return "Codabar";
                case e.AZTEC:
                    return "Aztec";
                case e.TWO_DIGIT_ADD_ON:
                    return "Two-Digit Add-On";
                case e.FIVE_DIGIT_ADD_ON:
                    return "Five-Digit Add-On";
                case e.MAXICODE:
                    return "MaxiCode";
                case e.CODE11:
                    return "Code 11";
                case e.GS1_DATABAR_LIMITED:
                    return "GS1 DataBar Limited";
                case e.CODE25:
                    return "Code 25";
                case e.MICRO_PDF417:
                    return "MicroPDF417";
                case e.RM4SCC:
                    return "RM4SCC";
                case e.KIX:
                    return "KIX";
                case e.DOTCODE:
                    return "DotCode";
                default:
                    return "Unknown"
            }
        }, e.toJSONName = function (t) {
            switch (t.toLowerCase()) {
                case e.EAN13:
                    return "ean13";
                case e.EAN8:
                    return "ean8";
                case e.UPCA:
                    return "upca";
                case e.UPCE:
                    return "upce";
                case e.CODE128:
                    return "code128";
                case e.CODE39:
                    return "code39";
                case e.CODE93:
                    return "code93";
                case e.INTERLEAVED_2_OF_5:
                    return "itf";
                case e.QR:
                    return "qr";
                case e.DATA_MATRIX:
                    return "data-matrix";
                case e.PDF417:
                    return "pdf417";
                case e.MSI_PLESSEY:
                    return "msi-plessey";
                case e.GS1_DATABAR:
                    return "databar";
                case e.GS1_DATABAR_EXPANDED:
                    return "databar-expanded";
                case e.CODABAR:
                    return "codabar";
                case e.AZTEC:
                    return "aztec";
                case e.TWO_DIGIT_ADD_ON:
                    return "two-digit-add-on";
                case e.FIVE_DIGIT_ADD_ON:
                    return "five-digit-add-on";
                case e.MAXICODE:
                    return "maxicode";
                case e.CODE11:
                    return "code11";
                case e.GS1_DATABAR_LIMITED:
                    return "databar-limited";
                case e.CODE25:
                    return "code25";
                case e.MICRO_PDF417:
                    return "micropdf417";
                case e.RM4SCC:
                    return "rm4scc";
                case e.KIX:
                    return "kix";
                case e.DOTCODE:
                    return "dotcode";
                default:
                    return "unknown"
            }
        }
    }(Vr.Symbology || (Vr.Symbology = {})), e.Parser = function () {
        function e(t, n) {
            nr(this, e), this.scanner = t, this.dataFormat = n
        }

        return Ar(e, [{
            key: "setOptions", value: function (e) {
                this.options = e
            }
        }, {
            key: "parseRawData", value: function (e) {
                var t = void 0;
                try {
                    t = decodeURIComponent(escape(String.fromCharCode.apply(null, e)))
                } catch (e) {
                    t = ""
                }
                return this.scanner.parseString(this.dataFormat, t, this.options)
            }
        }, {
            key: "parseString", value: function (e) {
                return this.scanner.parseString(this.dataFormat, e, this.options)
            }
        }]), e
    }(), (wr = (Tr = e.Parser || (e.Parser = {})).DataFormat || (Tr.DataFormat = {}))[wr.GS1_AI = 1] = "GS1_AI", wr[wr.HIBC = 2] = "HIBC", wr[wr.DLID = 3] = "DLID", wr[wr.MRTD = 4] = "MRTD", wr[wr.SWISSQR = 5] = "SWISSQR";
    var Ir = an.f, Pr = function (e) {
        for (var t, n = D(e), r = K(n), i = r.length, a = 0, o = []; i > a;) Ir.call(n, t = r[a++]) && o.push(n[t]);
        return o
    };
    V(V.S, "Object", {
        values: function (e) {
            return Pr(e)
        }
    });
    var Lr = d.Object.values, Or = n(r(function (e) {
        e.exports = {default: Lr, __esModule: !0}
    })), Dr = d.getIterator = function (e) {
        var t = je(e);
        if ("function" != typeof t) throw TypeError(e + " is not iterable!");
        return p(t.call(e))
    }, Nr = n(r(function (e) {
        e.exports = {default: Dr, __esModule: !0}
    }));
    $n("keys", function () {
        return function (e) {
            return K(ue(e))
        }
    });
    var Rr = d.Object.keys, xr = n(r(function (e) {
        e.exports = {default: Rr, __esModule: !0}
    })), jr = function (e, t, n) {
        t in e ? w.f(e, t, T(0, n)) : e[t] = n
    };
    V(V.S + V.F * !ht(function (e) {
    }), "Array", {
        from: function (e) {
            var t, n, r, i, a = ue(e), o = "function" == typeof this ? this : Array, s = arguments.length,
                c = s > 1 ? arguments[1] : void 0, d = void 0 !== c, u = 0, f = je(a);
            if (d && (c = l(c, s > 2 ? arguments[2] : void 0, 2)), void 0 == f || o == Array && Re(f)) for (n = new o(t = R(a.length)); t > u; u++) jr(n, u, d ? c(a[u], u) : a[u]); else for (i = f.call(a), n = new o; !(r = i.next()).done; u++) jr(n, u, d ? Oe(i, c, [r.value, u], !0) : r.value);
            return n.length = u, n
        }
    });
    var Ur = d.Array.from, Fr = r(function (e) {
        e.exports = {default: Ur, __esModule: !0}
    }), Br = n(Fr), zr = n(r(function (e, t) {
        t.__esModule = !0;
        var n, r = (n = Fr) && n.__esModule ? n : {default: n};
        t.default = function (e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return (0, r.default)(e)
        }
    })), Gr = function (e, t) {
        if (!f(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
        return e
    }, Wr = w.f, Yr = en.fastKey, Qr = h ? "_s" : "size", Hr = function (e, t) {
        var n, r = Yr(t);
        if ("F" !== r) return e._i[r];
        for (n = e._f; n; n = n.n) if (n.k == t) return n
    }, qr = {
        getConstructor: function (e, t, n, r) {
            var i = e(function (e, a) {
                Le(e, i, t, "_i"), e._t = t, e._i = re(null), e._f = void 0, e._l = void 0, e[Qr] = 0, void 0 != a && Ue(a, n, e[r], e)
            });
            return ot(i.prototype, {
                clear: function () {
                    for (var e = Gr(this, t), n = e._i, r = e._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
                    e._f = e._l = void 0, e[Qr] = 0
                }, delete: function (e) {
                    var n = Gr(this, t), r = Hr(n, e);
                    if (r) {
                        var i = r.n, a = r.p;
                        delete n._i[r.i], r.r = !0, a && (a.n = i), i && (i.p = a), n._f == r && (n._f = i), n._l == r && (n._l = a), n[Qr]--
                    }
                    return !!r
                }, forEach: function (e) {
                    Gr(this, t);
                    for (var n, r = l(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;) for (r(n.v, n.k, this); n && n.r;) n = n.p
                }, has: function (e) {
                    return !!Hr(Gr(this, t), e)
                }
            }), h && Wr(i.prototype, "size", {
                get: function () {
                    return Gr(this, t)[Qr]
                }
            }), i
        }, def: function (e, t, n) {
            var r, i, a = Hr(e, t);
            return a ? a.v = n : (e._l = a = {
                i: i = Yr(t, !0),
                k: t,
                v: n,
                p: r = e._l,
                n: void 0,
                r: !1
            }, e._f || (e._f = a), r && (r.n = a), e[Qr]++, "F" !== i && (e._i[i] = a)), e
        }, getEntry: Hr, setStrong: function (e, t, n) {
            ge(e, t, function (e, n) {
                this._t = Gr(e, t), this._k = n, this._l = void 0
            }, function () {
                for (var e = this._k, t = this._l; t && t.r;) t = t.p;
                return this._t && (this._l = t = t ? t.n : this._t._f) ? Se(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, Se(1))
            }, n ? "entries" : "values", !n, !0), ct(t)
        }
    }, Jr = (ie("species"), w.f);
    !function (e, t, n, r, i, a) {
        var o = c.Set, s = o, d = s && s.prototype, u = {};
        h && "function" == typeof s && d.forEach && !m(function () {
            (new s).entries().next()
        }) ? (s = t(function (e, t) {
            Le(e, s, "Set", "_c"), e._c = new o, void 0 != t && Ue(t, void 0, e.add, e)
        }), function (e, t, n) {
            for (var r = ue(e), i = O(r), a = l(t, n, 3), o = R(i.length), s = 0; o > s; s++) s in i && a(i[s], s, r)
        }("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","), function (e) {
            var t = "add" == e || "set" == e;
            e in d && b(s.prototype, e, function (n, r) {
                Le(this, s, e);
                var i = this._c[e](0 === n ? 0 : n, r);
                return t ? this : i
            })
        }), Jr(s.prototype, "size", {
            get: function () {
                return this._c.size
            }
        })) : (s = r.getConstructor(t, "Set", void 0, "add"), ot(s.prototype, n), en.NEED = !0), se(s, "Set"), u.Set = s, V(V.G + V.W + V.F, u), r.setStrong(s, "Set", void 0)
    }(0, function (e) {
        return function () {
            return e(this, arguments.length > 0 ? arguments[0] : void 0)
        }
    }, {
        add: function (e) {
            return qr.def(Gr(this, "Set"), e = 0 === e ? 0 : e, e)
        }
    }, qr), V(V.P + V.R, "Set", {
        toJSON: function () {
            if ("Set" != Pe(this)) throw TypeError("Set#toJSON isn't generic");
            return Ue(this, !1, (e = []).push, e, void 0), e;
            var e
        }
    }), V(V.S, "Set", {
        of: function () {
            for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
            return new this(t)
        }
    }), V(V.S, "Set", {
        from: function (e) {
            var t, n, r, i, a = arguments[1];
            return u(this), (t = void 0 !== a) && u(a), void 0 == e ? new this : (n = [], t ? (r = 0, i = l(a, arguments[2], 2), Ue(e, !1, function (e) {
                n.push(i(e, r++))
            })) : Ue(e, !1, n.push, n), new this(n))
        }
    });
    var Kr, Zr, Xr, $r = d.Set, ei = n(r(function (e) {
        e.exports = {default: $r, __esModule: !0}
    }));
    e.SymbologySettings = function () {
        function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.enabled,
                r = void 0 !== n && n, i = t.colorInvertedEnabled, a = void 0 !== i && i, o = t.activeSymbolCounts,
                s = void 0 === o ? [] : o, c = t.extensions, d = void 0 === c ? null : c, u = t.checksums,
                l = void 0 === u ? null : u;
            nr(this, e), this.enabled = r, this.colorInvertedEnabled = a, this.activeSymbolCounts = s, this.customExtensions = null != d, this.customChecksums = null != l, null == d && (d = []), null == l && (l = []), this.extensions = new ei(Br(d).filter(function (t) {
                return t in e.Extension || -1 !== Or(e.Extension).indexOf(t.toLowerCase())
            })), this.checksums = new ei(Br(l).filter(function (t) {
                return t in e.Checksum || -1 !== Or(e.Checksum).indexOf(t.toLowerCase())
            }))
        }

        return Ar(e, [{
            key: "isEnabled", value: function () {
                return this.enabled
            }
        }, {
            key: "setEnabled", value: function (e) {
                return this.enabled = e, this
            }
        }, {
            key: "isColorInvertedEnabled", value: function () {
                return this.colorInvertedEnabled
            }
        }, {
            key: "setColorInvertedEnabled", value: function (e) {
                return this.colorInvertedEnabled = e, this
            }
        }, {
            key: "getActiveSymbolCounts", value: function () {
                return this.activeSymbolCounts
            }
        }, {
            key: "setActiveSymbolCounts", value: function (e) {
                return this.activeSymbolCounts = e, this
            }
        }, {
            key: "setActiveSymbolCountsRange", value: function (e, t) {
                return this.activeSymbolCounts = Br({length: t - e + 1}, function (t, n) {
                    return n + e
                }), this
            }
        }, {
            key: "getEnabledExtensions", value: function () {
                return this.extensions
            }
        }, {
            key: "enableExtensions", value: function (t) {
                return this.customExtensions = !0, "object" === (void 0 === t ? "undefined" : Hn(t)) ? this.extensions = new ei([].concat(zr(this.extensions), zr(Br(t).filter(function (t) {
                    return t in e.Extension || -1 !== Or(e.Extension).indexOf(t.toLowerCase())
                })))) : (t in e.Extension || -1 !== Or(e.Extension).indexOf(t.toLowerCase())) && this.extensions.add(t), this
            }
        }, {
            key: "disableExtensions", value: function (e) {
                return "object" === (void 0 === e ? "undefined" : Hn(e)) ? this.extensions = new ei([].concat(zr(this.extensions)).filter(function (t) {
                    return e instanceof Array ? -1 === e.indexOf(t) : !e.has(t)
                })) : this.extensions.delete(e), this
            }
        }, {
            key: "getEnabledChecksums", value: function () {
                return this.checksums
            }
        }, {
            key: "enableChecksums", value: function (t) {
                return this.customChecksums = !0, "object" === (void 0 === t ? "undefined" : Hn(t)) ? this.checksums = new ei([].concat(zr(this.checksums), zr(Br(t).filter(function (t) {
                    return t in e.Checksum || -1 !== Or(e.Checksum).indexOf(t.toLowerCase())
                })))) : (t in e.Checksum || -1 !== Or(e.Checksum).indexOf(t.toLowerCase())) && this.checksums.add(t), this
            }
        }, {
            key: "disableChecksums", value: function (e) {
                return "object" === (void 0 === e ? "undefined" : Hn(e)) ? this.checksums = new ei([].concat(zr(this.checksums)).filter(function (t) {
                    return e instanceof Array ? -1 === e.indexOf(t) : !e.has(t)
                })) : this.checksums.delete(e), this
            }
        }, {
            key: "toJSON", value: function () {
                return {
                    enabled: this.enabled,
                    colorInvertedEnabled: this.colorInvertedEnabled,
                    activeSymbolCounts: 0 === this.activeSymbolCounts.length ? void 0 : this.activeSymbolCounts,
                    extensions: this.customExtensions ? Br(this.extensions) : void 0,
                    checksums: this.customChecksums ? Br(this.checksums) : void 0
                }
            }
        }]), e
    }(), (Zr = (Xr = e.SymbologySettings || (e.SymbologySettings = {})).Extension || (Xr.Extension = {})).DIRECT_PART_MARKING_MODE = "direct_part_marking_mode", Zr.FULL_ASCII = "full_ascii", Zr.RELAXED_SHARP_QUIET_ZONE_CHECK = "relaxed_sharp_quiet_zone_check", Zr.REMOVE_LEADING_ZERO = "remove_leading_zero", Zr.REMOVE_LEADING_UPCA_ZERO = "remove_leading_upca_zero", Zr.RETURN_AS_UPCA = "return_as_upca", Zr.STRIP_LEADING_FNC1 = "strip_leading_fnc1", (Kr = Xr.Checksum || (Xr.Checksum = {})).MOD_10 = "mod10", Kr.MOD_11 = "mod11", Kr.MOD_16 = "mod16", Kr.MOD_43 = "mod43", Kr.MOD_47 = "mod47", Kr.MOD_103 = "mod103", Kr.MOD_1010 = "mod1010", Kr.MOD_1110 = "mod1110";
    var ti = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = e.enabledSymbologies,
                r = void 0 === n ? [] : n, i = e.codeDuplicateFilter, a = void 0 === i ? 0 : i,
                o = e.maxNumberOfCodesPerFrame, s = void 0 === o ? 1 : o, c = e.searchArea,
                d = void 0 === c ? {x: 0, y: 0, width: 1, height: 1} : c;
            nr(this, t), this.symbologySettings = {}, this.enableSymbologies(r), this.codeDuplicateFilter = a, this.maxNumberOfCodesPerFrame = s, this.searchArea = d
        }

        return Ar(t, [{
            key: "toJSONString", value: function () {
                var t = this, n = {};
                xr(this.symbologySettings).forEach(function (r) {
                    n[e.Barcode.Symbology.toJSONName(r)] = t.symbologySettings[r]
                });
                var r = 0 === Math.round(100 * this.searchArea.x) && 0 === Math.round(100 * this.searchArea.y) && 100 === Math.round(100 * this.searchArea.width) && 100 === Math.round(100 * this.searchArea.height);
                return yr({
                    symbologies: n,
                    codeDuplicateFilter: this.codeDuplicateFilter,
                    maxNumberOfCodesPerFrame: this.maxNumberOfCodesPerFrame,
                    searchArea: this.searchArea,
                    codeLocation1d: r ? void 0 : {area: this.searchArea},
                    codeLocation2d: r ? void 0 : {area: this.searchArea}
                })
            }
        }, {
            key: "getSymbologySettings", value: function (t) {
                var n = t.toLowerCase();
                return this.symbologySettings.hasOwnProperty(n) ? this.symbologySettings[n] : (this.symbologySettings[n] = new e.SymbologySettings, this.symbologySettings[n])
            }
        }, {
            key: "isSymbologyEnabled", value: function (e) {
                var t = e.toLowerCase();
                return this.symbologySettings.hasOwnProperty(t) && this.symbologySettings[t].isEnabled()
            }
        }, {
            key: "enableSymbologies", value: function (e) {
                return this.setSymbologiesEnabled(e, !0)
            }
        }, {
            key: "disableSymbologies", value: function (e) {
                return this.setSymbologiesEnabled(e, !1)
            }
        }, {
            key: "getCodeDuplicateFilter", value: function () {
                return this.codeDuplicateFilter
            }
        }, {
            key: "setCodeDuplicateFilter", value: function (e) {
                return this.codeDuplicateFilter = e, this
            }
        }, {
            key: "getMaxNumberOfCodesPerFrame", value: function () {
                return this.maxNumberOfCodesPerFrame
            }
        }, {
            key: "setMaxNumberOfCodesPerFrame", value: function (e) {
                return this.maxNumberOfCodesPerFrame = e, this
            }
        }, {
            key: "getSearchArea", value: function () {
                return this.searchArea
            }
        }, {
            key: "setSearchArea", value: function (e) {
                return this.searchArea = e, this
            }
        }, {
            key: "setSymbologiesEnabled", value: function (t, n) {
                if ("object" === (void 0 === t ? "undefined" : Hn(t))) {
                    var r = !0, i = !1, a = void 0;
                    try {
                        for (var o, s = Nr(t); !(r = (o = s.next()).done); r = !0) {
                            var c = o.value, d = c.toLowerCase();
                            (c in e.Barcode.Symbology || -1 !== Or(e.Barcode.Symbology).indexOf(d)) && (this.symbologySettings.hasOwnProperty(d) ? this.symbologySettings[d].setEnabled(n) : this.symbologySettings[d] = new e.SymbologySettings({enabled: n}))
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !r && s.return && s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                } else {
                    var u = t.toLowerCase();
                    (t in e.Barcode.Symbology || -1 !== Or(e.Barcode.Symbology).indexOf(u)) && (this.symbologySettings.hasOwnProperty(u) ? this.symbologySettings[u].setEnabled(n) : this.symbologySettings[u] = new e.SymbologySettings({enabled: n}))
                }
                return this
            }
        }]), t
    }(), ni = function () {
        function t() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r = n.scanSettings,
                i = void 0 === r ? new ti : r, a = n.imageSettings;
            nr(this, t);
            var o = e.BrowserHelper.checkBrowserCompatibility();
            if (null != o) throw o;
            if (null == e.userLicenseKey || "" === e.userLicenseKey.trim()) throw new hr({
                name: "LibraryNotConfiguredError",
                message: "The library has not correctly been configured yet, please call 'configure' with valid parameters"
            });
            this.isReadyToWork = !1, this.workerScanQueueLength = 0, this.engineSDKWorker = new Worker(URL.createObjectURL(kr)), this.engineSDKWorker.onmessage = this.engineWokerOnMessage.bind(this), this.engineSDKWorker.postMessage({
                type: "load-library",
                deviceId: fi,
                libraryLocation: e.scanditEngineLocation
            }), this.eventEmitter = new Mr, this.workerParseRequestId = 0, this.workerScanRequestId = 0, this.applyLicenseKey(e.userLicenseKey), this.applyScanSettings(i), null != a && this.applyImageSettings(a)
        }

        return Ar(t, [{
            key: "destroy", value: function () {
                null != this.engineSDKWorker && this.engineSDKWorker.terminate(), this.eventEmitter.removeAllListeners()
            }
        }, {
            key: "applyScanSettings", value: function (e) {
                return this.scanSettings = e, this.engineSDKWorker.postMessage({
                    type: "settings",
                    settings: this.scanSettings.toJSONString()
                }), this
            }
        }, {
            key: "applyImageSettings", value: function (e) {
                return this.imageSettings = e, this.engineSDKWorker.postMessage({
                    type: "image-settings",
                    imageSettings: this.imageSettings
                }), this
            }
        }, {
            key: "processImage", value: function (t) {
                var n = this;
                if (null == this.imageSettings) return Ot.reject(new hr({
                    name: "NoImageSettings",
                    message: "No image settings set up in the scanner"
                }));
                var r = void 0;
                switch (this.imageSettings.format.valueOf()) {
                    case e.ImageSettings.Format.GRAY_8U:
                        r = 1;
                        break;
                    case e.ImageSettings.Format.RGB_8U:
                        r = 3;
                        break;
                    case e.ImageSettings.Format.RGBA_8U:
                        r = 4;
                        break;
                    default:
                        r = 1
                }
                return this.imageSettings.width * this.imageSettings.height * r !== t.length ? Ot.reject(new hr({
                    name: "ImageSettingsDataMismatch",
                    message: "The provided image data doesn't match the previously set image settings"
                })) : (this.workerScanRequestId++, this.workerScanQueueLength++, new Ot(function (r, i) {
                    var a = "work-result-" + n.workerScanRequestId, o = "work-error-" + n.workerScanRequestId;
                    n.eventEmitter.once(a, function (t) {
                        n.eventEmitter.removeAllListeners(o), r({barcodes: t.map(e.Barcode.createFromWASMResult)})
                    }), n.eventEmitter.once(o, function (e) {
                        console.error("Scandit Engine error (" + e.errorCode + "):", e.errorMessage), n.eventEmitter.removeAllListeners(a);
                        var t = new hr({
                            name: "ScanditEngineError",
                            message: e.errorMessage + " (" + e.errorCode + ")"
                        });
                        i(t)
                    }), n.engineSDKWorker.postMessage({
                        type: "work",
                        requestId: n.workerScanRequestId,
                        data: t.buffer
                    }, [t.buffer])
                }))
            }
        }, {
            key: "isBusyProcessing", value: function () {
                return 0 !== this.workerScanQueueLength
            }
        }, {
            key: "isReady", value: function () {
                return this.isReadyToWork
            }
        }, {
            key: "onReady", value: function (e) {
                return this.isReadyToWork ? e() : this.eventEmitter.once("ready", e, this), this
            }
        }, {
            key: "createParserForFormat", value: function (t) {
                return new e.Parser(this, t)
            }
        }, {
            key: "parseString", value: function (e, t, n) {
                var r = this;
                return this.workerParseRequestId++, new Ot(function (i, a) {
                    var o = "parse-string-result-" + r.workerParseRequestId,
                        s = "parse-string-error-" + r.workerParseRequestId;
                    r.eventEmitter.once(o, function (e) {
                        r.eventEmitter.removeAllListeners(s);
                        var t = {jsonString: e, fields: [], fieldsByName: {}};
                        JSON.parse(e).forEach(function (e) {
                            t.fields.push(e), t.fieldsByName[e.name] = e
                        }), i(t)
                    }), r.eventEmitter.once(s, function (e) {
                        console.error("Scandit Engine error (" + e.errorCode + "):", e.errorMessage), r.eventEmitter.removeAllListeners(o);
                        var t = new hr({
                            name: "ScanditEngineError",
                            message: e.errorMessage + " (" + e.errorCode + ")"
                        });
                        a(t)
                    }), r.engineSDKWorker.postMessage({
                        type: "parse-string",
                        requestId: r.workerParseRequestId,
                        dataFormat: e,
                        dataString: t,
                        options: null == n ? "{}" : yr(n)
                    })
                })
            }
        }, {
            key: "applyLicenseKey", value: function (e) {
                return this.engineSDKWorker.postMessage({type: "license-key", licenseKey: e}), this
            }
        }, {
            key: "engineWokerOnMessage", value: function (e) {
                var t = e.data[0], n = e.data[1];
                "status" === t ? "ready" === n && (this.isReadyToWork = !0, this.eventEmitter.emit("ready")) : "work-result" === t && null != n ? (this.eventEmitter.emit("work-result-" + n.requestId, n.result), this.workerScanQueueLength--) : "work-error" === t && null != n ? (this.eventEmitter.emit("work-error-" + n.requestId, n.error), this.workerScanQueueLength--) : "parse-string-result" === t && null != n ? this.eventEmitter.emit("parse-string-result-" + n.requestId, n.result) : "parse-string-error" === t && null != n && this.eventEmitter.emit("parse-string-error-" + n.requestId, n.error)
            }
        }]), t
    }();
    !function (e) {
        if ("undefined" != typeof window) {
            var t = document.createElement("style");
            t.setAttribute("type", "text/css"), t.innerHTML = ".scandit.scandit-container{width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden}.scandit.scandit-barcode-picker{position:relative;width:100%;height:100%;background-color:#000}.scandit .scandit-video{-o-object-fit:contain;object-fit:contain;width:100%;height:100%;position:relative;display:block}.scandit .scandit-video.mirrored{-webkit-transform:scaleX(-1);transform:scaleX(-1)}.scandit .scandit-logo{position:absolute;bottom:5%;right:5%;max-width:35%;max-height:12.5%;pointer-events:none}.scandit .scandit-laser{max-width:75%;max-height:10%;pointer-events:none}.scandit .scandit-laser,.scandit .scandit-viewfinder{z-index:1;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0;-webkit-animation-duration:.25s;animation-duration:.25s;transition:opacity .25s ease}.scandit .scandit-viewfinder{box-sizing:border-box;width:90%;height:60%;border:2px solid #fff;border-radius:10px}.scandit .scandit-viewfinder.paused{opacity:.4}.scandit .scandit-camera-switcher{left:5%}.scandit .scandit-camera-switcher,.scandit .scandit-torch-toggle{position:absolute;top:5%;max-width:15%;max-height:15%;z-index:1;cursor:pointer;-webkit-filter:drop-shadow(0 2px 0 gray);filter:drop-shadow(0 2px 0 #808080)}.scandit .scandit-torch-toggle{right:5%}.scandit .scandit-flash-color{-webkit-animation-name:a;animation-name:a}.scandit .scandit-flash-white{-webkit-animation-name:b;animation-name:b}.scandit .scandit-hidden-opacity{opacity:0}.scandit-hidden{display:none!important}@-webkit-keyframes a{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2);filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2)}to{-webkit-filter:none;filter:none}}@keyframes a{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2);filter:drop-shadow(0 0 .75rem #fff) drop-shadow(0 0 2.5rem #7ed9e2)}to{-webkit-filter:none;filter:none}}@-webkit-keyframes b{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff);filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff)}to{-webkit-filter:none;filter:none}}@keyframes b{0%{-webkit-filter:none;filter:none}50%{-webkit-filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff);filter:drop-shadow(0 0 .5rem #fff) drop-shadow(0 0 1rem #fff) drop-shadow(0 0 2.5rem #fff)}to{-webkit-filter:none;filter:none}}", document.head.appendChild(t)
        }
    }();
    var ri, ii, ai = r(function (e, n) {
            /*! howler.js v2.0.9 | (c) 2013-2018, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
            !function () {
                var e = function () {
                    this.init()
                };
                e.prototype = {
                    init: function () {
                        var e = this || r;
                        return e._counter = 1e3, e._codecs = {}, e._howls = [], e._muted = !1, e._volume = 1, e._canPlayEvent = "canplaythrough", e._navigator = "undefined" != typeof window && window.navigator ? window.navigator : null, e.masterGain = null, e.noAudio = !1, e.usingWebAudio = !0, e.autoSuspend = !0, e.ctx = null, e.mobileAutoEnable = !0, e._setup(), e
                    }, volume: function (e) {
                        var t = this || r;
                        if (e = parseFloat(e), t.ctx || l(), void 0 !== e && e >= 0 && e <= 1) {
                            if (t._volume = e, t._muted) return t;
                            t.usingWebAudio && t.masterGain.gain.setValueAtTime(e, r.ctx.currentTime);
                            for (var n = 0; n < t._howls.length; n++) if (!t._howls[n]._webAudio) for (var i = t._howls[n]._getSoundIds(), a = 0; a < i.length; a++) {
                                var o = t._howls[n]._soundById(i[a]);
                                o && o._node && (o._node.volume = o._volume * e)
                            }
                            return t
                        }
                        return t._volume
                    }, mute: function (e) {
                        var t = this || r;
                        t.ctx || l(), t._muted = e, t.usingWebAudio && t.masterGain.gain.setValueAtTime(e ? 0 : t._volume, r.ctx.currentTime);
                        for (var n = 0; n < t._howls.length; n++) if (!t._howls[n]._webAudio) for (var i = t._howls[n]._getSoundIds(), a = 0; a < i.length; a++) {
                            var o = t._howls[n]._soundById(i[a]);
                            o && o._node && (o._node.muted = !!e || o._muted)
                        }
                        return t
                    }, unload: function () {
                        for (var e = this || r, t = e._howls.length - 1; t >= 0; t--) e._howls[t].unload();
                        return e.usingWebAudio && e.ctx && void 0 !== e.ctx.close && (e.ctx.close(), e.ctx = null, l()), e
                    }, codecs: function (e) {
                        return (this || r)._codecs[e.replace(/^x-/, "")]
                    }, _setup: function () {
                        var e = this || r;
                        if (e.state = e.ctx && e.ctx.state || "running", e._autoSuspend(), !e.usingWebAudio) if ("undefined" != typeof Audio) try {
                            void 0 === (new Audio).oncanplaythrough && (e._canPlayEvent = "canplay")
                        } catch (t) {
                            e.noAudio = !0
                        } else e.noAudio = !0;
                        try {
                            (new Audio).muted && (e.noAudio = !0)
                        } catch (e) {
                        }
                        return e.noAudio || e._setupCodecs(), e
                    }, _setupCodecs: function () {
                        var e = this || r, t = null;
                        try {
                            t = "undefined" != typeof Audio ? new Audio : null
                        } catch (t) {
                            return e
                        }
                        if (!t || "function" != typeof t.canPlayType) return e;
                        var n = t.canPlayType("audio/mpeg;").replace(/^no$/, ""),
                            i = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
                            a = i && parseInt(i[0].split("/")[1], 10) < 33;
                        return e._codecs = {
                            mp3: !(a || !n && !t.canPlayType("audio/mp3;").replace(/^no$/, "")),
                            mpeg: !!n,
                            opus: !!t.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""),
                            ogg: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            oga: !!t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                            wav: !!t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                            aac: !!t.canPlayType("audio/aac;").replace(/^no$/, ""),
                            caf: !!t.canPlayType("audio/x-caf;").replace(/^no$/, ""),
                            m4a: !!(t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            mp4: !!(t.canPlayType("audio/x-mp4;") || t.canPlayType("audio/mp4;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""),
                            weba: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            webm: !!t.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ""),
                            dolby: !!t.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""),
                            flac: !!(t.canPlayType("audio/x-flac;") || t.canPlayType("audio/flac;")).replace(/^no$/, "")
                        }, e
                    }, _enableMobileAudio: function () {
                        var e = this || r,
                            t = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(e._navigator && e._navigator.userAgent),
                            n = !!("ontouchend" in window || e._navigator && e._navigator.maxTouchPoints > 0 || e._navigator && e._navigator.msMaxTouchPoints > 0);
                        if (!e._mobileEnabled && e.ctx && (t || n)) {
                            e._mobileEnabled = !1, e._mobileUnloaded || 44100 === e.ctx.sampleRate || (e._mobileUnloaded = !0, e.unload()), e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050);
                            var i = function () {
                                r._autoResume();
                                var t = e.ctx.createBufferSource();
                                t.buffer = e._scratchBuffer, t.connect(e.ctx.destination), void 0 === t.start ? t.noteOn(0) : t.start(0), "function" == typeof e.ctx.resume && e.ctx.resume(), t.onended = function () {
                                    t.disconnect(0), e._mobileEnabled = !0, e.mobileAutoEnable = !1, document.removeEventListener("touchstart", i, !0), document.removeEventListener("touchend", i, !0)
                                }
                            };
                            return document.addEventListener("touchstart", i, !0), document.addEventListener("touchend", i, !0), e
                        }
                    }, _autoSuspend: function () {
                        var e = this;
                        if (e.autoSuspend && e.ctx && void 0 !== e.ctx.suspend && r.usingWebAudio) {
                            for (var t = 0; t < e._howls.length; t++) if (e._howls[t]._webAudio) for (var n = 0; n < e._howls[t]._sounds.length; n++) if (!e._howls[t]._sounds[n]._paused) return e;
                            return e._suspendTimer && clearTimeout(e._suspendTimer), e._suspendTimer = setTimeout(function () {
                                e.autoSuspend && (e._suspendTimer = null, e.state = "suspending", e.ctx.suspend().then(function () {
                                    e.state = "suspended", e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume())
                                }))
                            }, 3e4), e
                        }
                    }, _autoResume: function () {
                        var e = this;
                        if (e.ctx && void 0 !== e.ctx.resume && r.usingWebAudio) return "running" === e.state && e._suspendTimer ? (clearTimeout(e._suspendTimer), e._suspendTimer = null) : "suspended" === e.state ? (e.ctx.resume().then(function () {
                            e.state = "running";
                            for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit("resume")
                        }), e._suspendTimer && (clearTimeout(e._suspendTimer), e._suspendTimer = null)) : "suspending" === e.state && (e._resumeAfterSuspend = !0), e
                    }
                };
                var r = new e, i = function (e) {
                    e.src && 0 !== e.src.length ? this.init(e) : console.error("An array of source files must be passed with any new Howl.")
                };
                i.prototype = {
                    init: function (e) {
                        var t = this;
                        return r.ctx || l(), t._autoplay = e.autoplay || !1, t._format = "string" != typeof e.format ? e.format : [e.format], t._html5 = e.html5 || !1, t._muted = e.mute || !1, t._loop = e.loop || !1, t._pool = e.pool || 5, t._preload = "boolean" != typeof e.preload || e.preload, t._rate = e.rate || 1, t._sprite = e.sprite || {}, t._src = "string" != typeof e.src ? e.src : [e.src], t._volume = void 0 !== e.volume ? e.volume : 1, t._xhrWithCredentials = e.xhrWithCredentials || !1, t._duration = 0, t._state = "unloaded", t._sounds = [], t._endTimers = {}, t._queue = [], t._playLock = !1, t._onend = e.onend ? [{fn: e.onend}] : [], t._onfade = e.onfade ? [{fn: e.onfade}] : [], t._onload = e.onload ? [{fn: e.onload}] : [], t._onloaderror = e.onloaderror ? [{fn: e.onloaderror}] : [], t._onplayerror = e.onplayerror ? [{fn: e.onplayerror}] : [], t._onpause = e.onpause ? [{fn: e.onpause}] : [], t._onplay = e.onplay ? [{fn: e.onplay}] : [], t._onstop = e.onstop ? [{fn: e.onstop}] : [], t._onmute = e.onmute ? [{fn: e.onmute}] : [], t._onvolume = e.onvolume ? [{fn: e.onvolume}] : [], t._onrate = e.onrate ? [{fn: e.onrate}] : [], t._onseek = e.onseek ? [{fn: e.onseek}] : [], t._onresume = [], t._webAudio = r.usingWebAudio && !t._html5, void 0 !== r.ctx && r.ctx && r.mobileAutoEnable && r._enableMobileAudio(), r._howls.push(t), t._autoplay && t._queue.push({
                            event: "play",
                            action: function () {
                                t.play()
                            }
                        }), t._preload && t.load(), t
                    }, load: function () {
                        var e = this, t = null;
                        if (!r.noAudio) {
                            "string" == typeof e._src && (e._src = [e._src]);
                            for (var n = 0; n < e._src.length; n++) {
                                var i, o;
                                if (e._format && e._format[n]) i = e._format[n]; else {
                                    if ("string" != typeof(o = e._src[n])) {
                                        e._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                                        continue
                                    }
                                    (i = /^data:audio\/([^;,]+);/i.exec(o)) || (i = /\.([^.]+)$/.exec(o.split("?", 1)[0])), i && (i = i[1].toLowerCase())
                                }
                                if (i || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), i && r.codecs(i)) {
                                    t = e._src[n];
                                    break
                                }
                            }
                            return t ? (e._src = t, e._state = "loading", "https:" === window.location.protocol && "http:" === t.slice(0, 5) && (e._html5 = !0, e._webAudio = !1), new a(e), e._webAudio && s(e), e) : void e._emit("loaderror", null, "No codec support for selected audio sources.")
                        }
                        e._emit("loaderror", null, "No audio support.")
                    }, play: function (e, t) {
                        var n = this, i = null;
                        if ("number" == typeof e) i = e, e = null; else {
                            if ("string" == typeof e && "loaded" === n._state && !n._sprite[e]) return null;
                            if (void 0 === e) {
                                e = "__default";
                                for (var a = 0, o = 0; o < n._sounds.length; o++) n._sounds[o]._paused && !n._sounds[o]._ended && (a++, i = n._sounds[o]._id);
                                1 === a ? e = null : i = null
                            }
                        }
                        var s = i ? n._soundById(i) : n._inactiveSound();
                        if (!s) return null;
                        if (i && !e && (e = s._sprite || "__default"), "loaded" !== n._state) {
                            s._sprite = e, s._ended = !1;
                            var c = s._id;
                            return n._queue.push({
                                event: "play", action: function () {
                                    n.play(c)
                                }
                            }), c
                        }
                        if (i && !s._paused) return t || n._loadQueue("play"), s._id;
                        n._webAudio && r._autoResume();
                        var d = Math.max(0, s._seek > 0 ? s._seek : n._sprite[e][0] / 1e3),
                            u = Math.max(0, (n._sprite[e][0] + n._sprite[e][1]) / 1e3 - d), l = 1e3 * u / Math.abs(s._rate);
                        s._paused = !1, s._ended = !1, s._sprite = e, s._seek = d, s._start = n._sprite[e][0] / 1e3, s._stop = (n._sprite[e][0] + n._sprite[e][1]) / 1e3, s._loop = !(!s._loop && !n._sprite[e][2]);
                        var f = s._node;
                        if (n._webAudio) {
                            var p = function () {
                                n._refreshBuffer(s);
                                var e = s._muted || n._muted ? 0 : s._volume;
                                f.gain.setValueAtTime(e, r.ctx.currentTime), s._playStart = r.ctx.currentTime, void 0 === f.bufferSource.start ? s._loop ? f.bufferSource.noteGrainOn(0, d, 86400) : f.bufferSource.noteGrainOn(0, d, u) : s._loop ? f.bufferSource.start(0, d, 86400) : f.bufferSource.start(0, d, u), l !== 1 / 0 && (n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l)), t || setTimeout(function () {
                                    n._emit("play", s._id)
                                }, 0)
                            };
                            "running" === r.state ? p() : (n.once("resume", p), n._clearTimer(s._id))
                        } else {
                            var m = function () {
                                f.currentTime = d, f.muted = s._muted || n._muted || r._muted || f.muted, f.volume = s._volume * r.volume(), f.playbackRate = s._rate;
                                try {
                                    var i = f.play();
                                    if ("undefined" != typeof Promise && i instanceof Promise) {
                                        n._playLock = !0;
                                        var a = function () {
                                            n._playLock = !1, t || n._emit("play", s._id)
                                        };
                                        i.then(a, a)
                                    } else t || n._emit("play", s._id);
                                    if (f.paused) return void n._emit("playerror", s._id, "Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.");
                                    "__default" !== e ? n._endTimers[s._id] = setTimeout(n._ended.bind(n, s), l) : (n._endTimers[s._id] = function () {
                                        n._ended(s), f.removeEventListener("ended", n._endTimers[s._id], !1)
                                    }, f.addEventListener("ended", n._endTimers[s._id], !1))
                                } catch (e) {
                                    n._emit("playerror", s._id, e)
                                }
                            }, h = window && window.ejecta || !f.readyState && r._navigator.isCocoonJS;
                            if (f.readyState >= 3 || h) m(); else {
                                var v = function () {
                                    m(), f.removeEventListener(r._canPlayEvent, v, !1)
                                };
                                f.addEventListener(r._canPlayEvent, v, !1), n._clearTimer(s._id)
                            }
                        }
                        return s._id
                    }, pause: function (e) {
                        var t = this;
                        if ("loaded" !== t._state || t._playLock) return t._queue.push({
                            event: "pause",
                            action: function () {
                                t.pause(e)
                            }
                        }), t;
                        for (var n = t._getSoundIds(e), r = 0; r < n.length; r++) {
                            t._clearTimer(n[r]);
                            var i = t._soundById(n[r]);
                            if (i && !i._paused && (i._seek = t.seek(n[r]), i._rateSeek = 0, i._paused = !0, t._stopFade(n[r]), i._node)) if (t._webAudio) {
                                if (!i._node.bufferSource) continue;
                                void 0 === i._node.bufferSource.stop ? i._node.bufferSource.noteOff(0) : i._node.bufferSource.stop(0), t._cleanBuffer(i._node)
                            } else isNaN(i._node.duration) && i._node.duration !== 1 / 0 || i._node.pause();
                            arguments[1] || t._emit("pause", i ? i._id : null)
                        }
                        return t
                    }, stop: function (e, t) {
                        var n = this;
                        if ("loaded" !== n._state) return n._queue.push({
                            event: "stop", action: function () {
                                n.stop(e)
                            }
                        }), n;
                        for (var r = n._getSoundIds(e), i = 0; i < r.length; i++) {
                            n._clearTimer(r[i]);
                            var a = n._soundById(r[i]);
                            a && (a._seek = a._start || 0, a._rateSeek = 0, a._paused = !0, a._ended = !0, n._stopFade(r[i]), a._node && (n._webAudio ? a._node.bufferSource && (void 0 === a._node.bufferSource.stop ? a._node.bufferSource.noteOff(0) : a._node.bufferSource.stop(0), n._cleanBuffer(a._node)) : isNaN(a._node.duration) && a._node.duration !== 1 / 0 || (a._node.currentTime = a._start || 0, a._node.pause())), t || n._emit("stop", a._id))
                        }
                        return n
                    }, mute: function (e, t) {
                        var n = this;
                        if ("loaded" !== n._state) return n._queue.push({
                            event: "mute", action: function () {
                                n.mute(e, t)
                            }
                        }), n;
                        if (void 0 === t) {
                            if ("boolean" != typeof e) return n._muted;
                            n._muted = e
                        }
                        for (var i = n._getSoundIds(t), a = 0; a < i.length; a++) {
                            var o = n._soundById(i[a]);
                            o && (o._muted = e, o._interval && n._stopFade(o._id), n._webAudio && o._node ? o._node.gain.setValueAtTime(e ? 0 : o._volume, r.ctx.currentTime) : o._node && (o._node.muted = !!r._muted || e), n._emit("mute", o._id))
                        }
                        return n
                    }, volume: function () {
                        var e, t, n, i = this, a = arguments;
                        if (0 === a.length) return i._volume;
                        if (1 === a.length || 2 === a.length && void 0 === a[1] ? i._getSoundIds().indexOf(a[0]) >= 0 ? t = parseInt(a[0], 10) : e = parseFloat(a[0]) : a.length >= 2 && (e = parseFloat(a[0]), t = parseInt(a[1], 10)), !(void 0 !== e && e >= 0 && e <= 1)) return (n = t ? i._soundById(t) : i._sounds[0]) ? n._volume : 0;
                        if ("loaded" !== i._state) return i._queue.push({
                            event: "volume", action: function () {
                                i.volume.apply(i, a)
                            }
                        }), i;
                        void 0 === t && (i._volume = e), t = i._getSoundIds(t);
                        for (var o = 0; o < t.length; o++) (n = i._soundById(t[o])) && (n._volume = e, a[2] || i._stopFade(t[o]), i._webAudio && n._node && !n._muted ? n._node.gain.setValueAtTime(e, r.ctx.currentTime) : n._node && !n._muted && (n._node.volume = e * r.volume()), i._emit("volume", n._id));
                        return i
                    }, fade: function (e, t, n, i) {
                        var a = this;
                        if ("loaded" !== a._state) return a._queue.push({
                            event: "fade", action: function () {
                                a.fade(e, t, n, i)
                            }
                        }), a;
                        a.volume(e, i);
                        for (var o = a._getSoundIds(i), s = 0; s < o.length; s++) {
                            var c = a._soundById(o[s]);
                            if (c) {
                                if (i || a._stopFade(o[s]), a._webAudio && !c._muted) {
                                    var d = r.ctx.currentTime, u = d + n / 1e3;
                                    c._volume = e, c._node.gain.setValueAtTime(e, d), c._node.gain.linearRampToValueAtTime(t, u)
                                }
                                a._startFadeInterval(c, e, t, n, o[s], void 0 === i)
                            }
                        }
                        return a
                    }, _startFadeInterval: function (e, t, n, r, i, a) {
                        var o = this, s = t, c = n - t, d = Math.abs(c / .01), u = Math.max(4, d > 0 ? r / d : r),
                            l = Date.now();
                        e._fadeTo = n, e._interval = setInterval(function () {
                            var i = (Date.now() - l) / r;
                            l = Date.now(), s += c * i, s = Math.max(0, s), s = Math.min(1, s), s = Math.round(100 * s) / 100, o._webAudio ? e._volume = s : o.volume(s, e._id, !0), a && (o._volume = s), (n < t && s <= n || n > t && s >= n) && (clearInterval(e._interval), e._interval = null, e._fadeTo = null, o.volume(n, e._id), o._emit("fade", e._id))
                        }, u)
                    }, _stopFade: function (e) {
                        var t = this, n = t._soundById(e);
                        return n && n._interval && (t._webAudio && n._node.gain.cancelScheduledValues(r.ctx.currentTime), clearInterval(n._interval), n._interval = null, t.volume(n._fadeTo, e), n._fadeTo = null, t._emit("fade", e)), t
                    }, loop: function () {
                        var e, t, n, r = this, i = arguments;
                        if (0 === i.length) return r._loop;
                        if (1 === i.length) {
                            if ("boolean" != typeof i[0]) return !!(n = r._soundById(parseInt(i[0], 10))) && n._loop;
                            e = i[0], r._loop = e
                        } else 2 === i.length && (e = i[0], t = parseInt(i[1], 10));
                        for (var a = r._getSoundIds(t), o = 0; o < a.length; o++) (n = r._soundById(a[o])) && (n._loop = e, r._webAudio && n._node && n._node.bufferSource && (n._node.bufferSource.loop = e, e && (n._node.bufferSource.loopStart = n._start || 0, n._node.bufferSource.loopEnd = n._stop)));
                        return r
                    }, rate: function () {
                        var e, t, n, i = this, a = arguments;
                        if (0 === a.length ? t = i._sounds[0]._id : 1 === a.length ? i._getSoundIds().indexOf(a[0]) >= 0 ? t = parseInt(a[0], 10) : e = parseFloat(a[0]) : 2 === a.length && (e = parseFloat(a[0]), t = parseInt(a[1], 10)), "number" != typeof e) return (n = i._soundById(t)) ? n._rate : i._rate;
                        if ("loaded" !== i._state) return i._queue.push({
                            event: "rate", action: function () {
                                i.rate.apply(i, a)
                            }
                        }), i;
                        void 0 === t && (i._rate = e), t = i._getSoundIds(t);
                        for (var o = 0; o < t.length; o++) if (n = i._soundById(t[o])) {
                            n._rateSeek = i.seek(t[o]), n._playStart = i._webAudio ? r.ctx.currentTime : n._playStart, n._rate = e, i._webAudio && n._node && n._node.bufferSource ? n._node.bufferSource.playbackRate.setValueAtTime(e, r.ctx.currentTime) : n._node && (n._node.playbackRate = e);
                            var s = i.seek(t[o]),
                                c = 1e3 * ((i._sprite[n._sprite][0] + i._sprite[n._sprite][1]) / 1e3 - s) / Math.abs(n._rate);
                            !i._endTimers[t[o]] && n._paused || (i._clearTimer(t[o]), i._endTimers[t[o]] = setTimeout(i._ended.bind(i, n), c)), i._emit("rate", n._id)
                        }
                        return i
                    }, seek: function () {
                        var e, t, n = this, i = arguments;
                        if (0 === i.length ? t = n._sounds[0]._id : 1 === i.length ? n._getSoundIds().indexOf(i[0]) >= 0 ? t = parseInt(i[0], 10) : n._sounds.length && (t = n._sounds[0]._id, e = parseFloat(i[0])) : 2 === i.length && (e = parseFloat(i[0]), t = parseInt(i[1], 10)), void 0 === t) return n;
                        if ("loaded" !== n._state) return n._queue.push({
                            event: "seek", action: function () {
                                n.seek.apply(n, i)
                            }
                        }), n;
                        var a = n._soundById(t);
                        if (a) {
                            if (!("number" == typeof e && e >= 0)) {
                                if (n._webAudio) {
                                    var o = n.playing(t) ? r.ctx.currentTime - a._playStart : 0,
                                        s = a._rateSeek ? a._rateSeek - a._seek : 0;
                                    return a._seek + (s + o * Math.abs(a._rate))
                                }
                                return a._node.currentTime
                            }
                            var c = n.playing(t);
                            if (c && n.pause(t, !0), a._seek = e, a._ended = !1, n._clearTimer(t), c && n.play(t, !0), !n._webAudio && a._node && (a._node.currentTime = e), c && !n._webAudio) {
                                var d = function () {
                                    n._playLock ? setTimeout(d, 0) : n._emit("seek", t)
                                };
                                setTimeout(d, 0)
                            } else n._emit("seek", t)
                        }
                        return n
                    }, playing: function (e) {
                        var t = this;
                        if ("number" == typeof e) {
                            var n = t._soundById(e);
                            return !!n && !n._paused
                        }
                        for (var r = 0; r < t._sounds.length; r++) if (!t._sounds[r]._paused) return !0;
                        return !1
                    }, duration: function (e) {
                        var t = this, n = t._duration, r = t._soundById(e);
                        return r && (n = t._sprite[r._sprite][1] / 1e3), n
                    }, state: function () {
                        return this._state
                    }, unload: function () {
                        for (var e = this, t = e._sounds, n = 0; n < t.length; n++) {
                            t[n]._paused || e.stop(t[n]._id), e._webAudio || (/MSIE |Trident\//.test(r._navigator && r._navigator.userAgent) || (t[n]._node.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"), t[n]._node.removeEventListener("error", t[n]._errorFn, !1), t[n]._node.removeEventListener(r._canPlayEvent, t[n]._loadFn, !1)), delete t[n]._node, e._clearTimer(t[n]._id);
                            var i = r._howls.indexOf(e);
                            i >= 0 && r._howls.splice(i, 1)
                        }
                        var a = !0;
                        for (n = 0; n < r._howls.length; n++) if (r._howls[n]._src === e._src) {
                            a = !1;
                            break
                        }
                        return o && a && delete o[e._src], r.noAudio = !1, e._state = "unloaded", e._sounds = [], e = null, null
                    }, on: function (e, t, n, r) {
                        var i = this["_on" + e];
                        return "function" == typeof t && i.push(r ? {id: n, fn: t, once: r} : {id: n, fn: t}), this
                    }, off: function (e, t, n) {
                        var r = this, i = r["_on" + e], a = 0;
                        if ("number" == typeof t && (n = t, t = null), t || n) for (a = 0; a < i.length; a++) {
                            var o = n === i[a].id;
                            if (t === i[a].fn && o || !t && o) {
                                i.splice(a, 1);
                                break
                            }
                        } else if (e) r["_on" + e] = []; else {
                            var s = Object.keys(r);
                            for (a = 0; a < s.length; a++) 0 === s[a].indexOf("_on") && Array.isArray(r[s[a]]) && (r[s[a]] = [])
                        }
                        return r
                    }, once: function (e, t, n) {
                        return this.on(e, t, n, 1), this
                    }, _emit: function (e, t, n) {
                        for (var r = this, i = r["_on" + e], a = i.length - 1; a >= 0; a--) i[a].id && i[a].id !== t && "load" !== e || (setTimeout(function (e) {
                            e.call(this, t, n)
                        }.bind(r, i[a].fn), 0), i[a].once && r.off(e, i[a].fn, i[a].id));
                        return r._loadQueue(e), r
                    }, _loadQueue: function (e) {
                        var t = this;
                        if (t._queue.length > 0) {
                            var n = t._queue[0];
                            n.event === e && (t._queue.shift(), t._loadQueue()), e || n.action()
                        }
                        return t
                    }, _ended: function (e) {
                        var t = this, n = e._sprite;
                        if (!t._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop) return setTimeout(t._ended.bind(t, e), 100), t;
                        var i = !(!e._loop && !t._sprite[n][2]);
                        if (t._emit("end", e._id), !t._webAudio && i && t.stop(e._id, !0).play(e._id), t._webAudio && i) {
                            t._emit("play", e._id), e._seek = e._start || 0, e._rateSeek = 0, e._playStart = r.ctx.currentTime;
                            var a = 1e3 * (e._stop - e._start) / Math.abs(e._rate);
                            t._endTimers[e._id] = setTimeout(t._ended.bind(t, e), a)
                        }
                        return t._webAudio && !i && (e._paused = !0, e._ended = !0, e._seek = e._start || 0, e._rateSeek = 0, t._clearTimer(e._id), t._cleanBuffer(e._node), r._autoSuspend()), t._webAudio || i || t.stop(e._id), t
                    }, _clearTimer: function (e) {
                        var t = this;
                        if (t._endTimers[e]) {
                            if ("function" != typeof t._endTimers[e]) clearTimeout(t._endTimers[e]); else {
                                var n = t._soundById(e);
                                n && n._node && n._node.removeEventListener("ended", t._endTimers[e], !1)
                            }
                            delete t._endTimers[e]
                        }
                        return t
                    }, _soundById: function (e) {
                        for (var t = this, n = 0; n < t._sounds.length; n++) if (e === t._sounds[n]._id) return t._sounds[n];
                        return null
                    }, _inactiveSound: function () {
                        var e = this;
                        e._drain();
                        for (var t = 0; t < e._sounds.length; t++) if (e._sounds[t]._ended) return e._sounds[t].reset();
                        return new a(e)
                    }, _drain: function () {
                        var e = this, t = e._pool, n = 0, r = 0;
                        if (!(e._sounds.length < t)) {
                            for (r = 0; r < e._sounds.length; r++) e._sounds[r]._ended && n++;
                            for (r = e._sounds.length - 1; r >= 0; r--) {
                                if (n <= t) return;
                                e._sounds[r]._ended && (e._webAudio && e._sounds[r]._node && e._sounds[r]._node.disconnect(0), e._sounds.splice(r, 1), n--)
                            }
                        }
                    }, _getSoundIds: function (e) {
                        if (void 0 === e) {
                            for (var t = [], n = 0; n < this._sounds.length; n++) t.push(this._sounds[n]._id);
                            return t
                        }
                        return [e]
                    }, _refreshBuffer: function (e) {
                        return e._node.bufferSource = r.ctx.createBufferSource(), e._node.bufferSource.buffer = o[this._src], e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node), e._node.bufferSource.loop = e._loop, e._loop && (e._node.bufferSource.loopStart = e._start || 0, e._node.bufferSource.loopEnd = e._stop), e._node.bufferSource.playbackRate.setValueAtTime(e._rate, r.ctx.currentTime), this
                    }, _cleanBuffer: function (e) {
                        if (r._scratchBuffer) {
                            e.bufferSource.onended = null, e.bufferSource.disconnect(0);
                            try {
                                e.bufferSource.buffer = r._scratchBuffer
                            } catch (e) {
                            }
                        }
                        return e.bufferSource = null, this
                    }
                };
                var a = function (e) {
                    this._parent = e, this.init()
                };
                a.prototype = {
                    init: function () {
                        var e = this, t = e._parent;
                        return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++r._counter, t._sounds.push(e), e.create(), e
                    }, create: function () {
                        var e = this, t = e._parent, n = r._muted || e._muted || e._parent._muted ? 0 : e._volume;
                        return t._webAudio ? (e._node = void 0 === r.ctx.createGain ? r.ctx.createGainNode() : r.ctx.createGain(), e._node.gain.setValueAtTime(n, r.ctx.currentTime), e._node.paused = !0, e._node.connect(r.masterGain)) : (e._node = new Audio, e._errorFn = e._errorListener.bind(e), e._node.addEventListener("error", e._errorFn, !1), e._loadFn = e._loadListener.bind(e), e._node.addEventListener(r._canPlayEvent, e._loadFn, !1), e._node.src = t._src, e._node.preload = "auto", e._node.volume = n * r.volume(), e._node.load()), e
                    }, reset: function () {
                        var e = this, t = e._parent;
                        return e._muted = t._muted, e._loop = t._loop, e._volume = t._volume, e._rate = t._rate, e._seek = 0, e._rateSeek = 0, e._paused = !0, e._ended = !0, e._sprite = "__default", e._id = ++r._counter, e
                    }, _errorListener: function () {
                        var e = this;
                        e._parent._emit("loaderror", e._id, e._node.error ? e._node.error.code : 0), e._node.removeEventListener("error", e._errorFn, !1)
                    }, _loadListener: function () {
                        var e = this, t = e._parent;
                        t._duration = Math.ceil(10 * e._node.duration) / 10, 0 === Object.keys(t._sprite).length && (t._sprite = {__default: [0, 1e3 * t._duration]}), "loaded" !== t._state && (t._state = "loaded", t._emit("load"), t._loadQueue()), e._node.removeEventListener(r._canPlayEvent, e._loadFn, !1)
                    }
                };
                var o = {}, s = function (e) {
                    var t = e._src;
                    if (o[t]) return e._duration = o[t].duration, void u(e);
                    if (/^data:[^;]+;base64,/.test(t)) {
                        for (var n = atob(t.split(",")[1]), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
                        d(r.buffer, e)
                    } else {
                        var a = new XMLHttpRequest;
                        a.open("GET", t, !0), a.withCredentials = e._xhrWithCredentials, a.responseType = "arraybuffer", a.onload = function () {
                            var t = (a.status + "")[0];
                            "0" === t || "2" === t || "3" === t ? d(a.response, e) : e._emit("loaderror", null, "Failed loading audio file with status: " + a.status + ".")
                        }, a.onerror = function () {
                            e._webAudio && (e._html5 = !0, e._webAudio = !1, e._sounds = [], delete o[t], e.load())
                        }, c(a)
                    }
                }, c = function (e) {
                    try {
                        e.send()
                    } catch (t) {
                        e.onerror()
                    }
                }, d = function (e, t) {
                    r.ctx.decodeAudioData(e, function (e) {
                        e && t._sounds.length > 0 && (o[t._src] = e, u(t, e))
                    }, function () {
                        t._emit("loaderror", null, "Decoding audio data failed.")
                    })
                }, u = function (e, t) {
                    t && !e._duration && (e._duration = t.duration), 0 === Object.keys(e._sprite).length && (e._sprite = {__default: [0, 1e3 * e._duration]}), "loaded" !== e._state && (e._state = "loaded", e._emit("load"), e._loadQueue())
                }, l = function () {
                    try {
                        "undefined" != typeof AudioContext ? r.ctx = new AudioContext : "undefined" != typeof webkitAudioContext ? r.ctx = new webkitAudioContext : r.usingWebAudio = !1
                    } catch (e) {
                        r.usingWebAudio = !1
                    }
                    var e = /iP(hone|od|ad)/.test(r._navigator && r._navigator.platform),
                        t = r._navigator && r._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                        n = t ? parseInt(t[1], 10) : null;
                    if (e && n && n < 9) {
                        var i = /safari/.test(r._navigator && r._navigator.userAgent.toLowerCase());
                        (r._navigator && r._navigator.standalone && !i || r._navigator && !r._navigator.standalone && !i) && (r.usingWebAudio = !1)
                    }
                    r.usingWebAudio && (r.masterGain = void 0 === r.ctx.createGain ? r.ctx.createGainNode() : r.ctx.createGain(), r.masterGain.gain.setValueAtTime(r._muted ? 0 : 1, r.ctx.currentTime), r.masterGain.connect(r.ctx.destination)), r._setup()
                };
                n.Howler = r, n.Howl = i, "undefined" != typeof window ? (window.HowlerGlobal = e, window.Howler = r, window.Howl = i, window.Sound = a) : void 0 !== t && (t.HowlerGlobal = e, t.Howler = r, t.Howl = i, t.Sound = a)
            }()
        }), oi = ai.Howler, si = ai.Howl,
        ci = "data:audio/mp3;base64,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4LAkByw1k3LVZpl+pNlGNZem5stM2Wr6j1Z9AMMBYjily+nv/WqtU3SzFdqLW+g9ay+GvQb2oJMhV52tK+eZCvrd0BNqdIzFngHBYCQQIIaJ1PtUjVq//qP+ohdCZhgRJDlF/////zoi5C6lVAABQCoDYQD4ZCwVB9kTFKkiv9NQcExMLk3ipgtxrzPf8LZgdNYHsgYIPgbIgAEXEAwCgpAie4XVi5BaBlBUxSQfMO7yfQPFcsGReNjIgX0QvmASaIgQc3SJkgpqr+myNNNNJSSX/n1Hw/4CgwqkXN3qSMTVX//U2skkQuTq9JJEy/+ybvT6p1IjCCpfiL/+SuQupVQAAUAqA2EA+GQsFQfZExSpIr/TUHBMTC5N4qYLca8z3/C2YHTWB7IGCD4GyIABFxAMAoKQInuF1YuQWgZQVMUkHzDu8n0DxXLBkXjYyIF9EL5gEmiIEHN0iZIKaq/psjTTTSUkl/59R8P+AoMKpFzd6kjE1V//1NrJJELk6vSSRMv/sm70+qdSIwgqX4i//klMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+7IAAA/wAABpBwAACAAADSDgAAEAAAGkAAAAIAAANIAAAARMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
    (ri = (ii = e.CameraSettings || (e.CameraSettings = {})).ResolutionPreference || (ii.ResolutionPreference = {}))[ri.FULL_HD = 0] = "FULL_HD", ri[ri.HD = 1] = "HD";
    var di, ui, li = function () {
        function t(e) {
            nr(this, t), this.barcodePicker = e, this.postStreamInitializationListener = this.postStreamInitialization.bind(this), this.triggerManualFocusListener = this.triggerManualFocus.bind(this), this.setupCameraSwitcher(), this.setupTorchToggle()
        }

        return Ar(t, [{
            key: "setUIOptions", value: function (e, t, n) {
                this.enableCameraSwitcher = e, this.enableTorchToggle = t, this.enableTapToFocus = n
            }
        }, {
            key: "setSelectedCamera", value: function (e) {
                this.selectedCamera = e
            }
        }, {
            key: "setSelectedCameraSettings", value: function (e) {
                this.selectedCameraSettings = e
            }
        }, {
            key: "setupCameras", value: function () {
                var t = this;
                return e.CameraAccess.getCameras().then(function (n) {
                    if (t.enableCameraSwitcher && n.length > 1 && t.cameraSwitcherElement.classList.remove("scandit-hidden"), null == t.selectedCamera) {
                        var r = n.find(function (t) {
                            return t.cameraType === e.Camera.Type.BACK
                        });
                        return void 0 === r && (r = n[0]), void 0 === r ? Ot.reject(new hr({
                            name: "NoCameraAvailableError",
                            message: "No camera available"
                        })) : t.initializeCameraWithSettings(r, t.selectedCameraSettings)
                    }
                    return t.initializeCameraWithSettings(t.selectedCamera, t.selectedCameraSettings)
                })
            }
        }, {
            key: "stopStream", value: function () {
                null != this.activeCamera && (this.activeCamera.currentResolution = void 0), this.activeCamera = void 0, null != this.mediaStream && (window.clearTimeout(this.cameraAccessTimeout), window.clearInterval(this.cameraMetadataCheckInterval), window.clearTimeout(this.getCapabilitiesTimeout), window.clearTimeout(this.manualFocusRetryTimeout), window.clearTimeout(this.manualToAutofocusResumeTimeout), window.clearInterval(this.autofocusInterval), this.mediaStream.getVideoTracks().forEach(function (e) {
                    e.stop()
                }), this.mediaStream = void 0, this.mediaTrackCapabilities = void 0)
            }
        }, {
            key: "applyCameraSettings", value: function (e) {
                return null == this.activeCamera ? Ot.reject(new hr({
                    name: "NoCameraAvailableError",
                    message: "No camera available"
                })) : this.initializeCameraWithSettings(this.activeCamera, e)
            }
        }, {
            key: "reinitializeCamera", value: function () {
                return null == this.activeCamera ? Ot.reject(new hr({
                    name: "NoCameraAvailableError",
                    message: "No camera available"
                })) : this.initializeCameraWithSettings(this.activeCamera, this.activeCameraSettings)
            }
        }, {
            key: "initializeCameraWithSettings", value: function (t, n) {
                return this.activeCameraSettings = n, null != n && n.resolutionPreference === e.CameraSettings.ResolutionPreference.FULL_HD ? this.initializeCamera(t) : this.initializeCamera(t, 3)
            }
        }, {
            key: "setTorchEnabled", value: function (e) {
                if (null != this.mediaStream && null != this.mediaTrackCapabilities && this.mediaTrackCapabilities.torch) {
                    var t = this.mediaStream.getVideoTracks();
                    0 !== t.length && "function" == typeof t[0].applyConstraints && t[0].applyConstraints({advanced: [{torch: e}]})
                }
            }
        }, {
            key: "triggerManualFocus", value: function (e) {
                var n = this;
                if (null != e && e.preventDefault(), window.clearTimeout(this.manualFocusRetryTimeout), window.clearTimeout(this.manualToAutofocusResumeTimeout), null != this.mediaStream && null != this.mediaTrackCapabilities) {
                    var r = this.mediaTrackCapabilities.focusMode;
                    r instanceof Array && -1 !== r.indexOf("single-shot") && (-1 !== r.indexOf("continuous") && -1 !== r.indexOf("manual") ? (this.triggerFocusMode("manual").then(function () {
                        n.triggerFocusMode("single-shot"), n.manualFocusRetryTimeout = window.setTimeout(function () {
                            n.triggerFocusMode("single-shot")
                        }, t.manualFocusRetryTimeoutMs)
                    }).catch(function () {
                    }), this.manualToAutofocusResumeTimeout = window.setTimeout(function () {
                        n.triggerFocusMode("continuous")
                    }, t.manualToAutofocusResumeTimeoutMs)) : -1 === r.indexOf("continuous") && (window.clearInterval(this.autofocusInterval), this.triggerFocusMode("single-shot").catch(function () {
                    }), this.manualToAutofocusResumeTimeout = window.setTimeout(function () {
                        n.autofocusInterval = window.setInterval(n.triggerAutoFocus.bind(n), t.autofocusIntervalMs)
                    }, t.manualToAutofocusResumeTimeoutMs)))
                }
            }
        }, {
            key: "postStreamInitialization", value: function () {
                var e = this;
                window.clearTimeout(this.getCapabilitiesTimeout), this.getCapabilitiesTimeout = window.setTimeout(function () {
                    e.storeStreamCapabilities(), e.setupAutofocus(), e.enableTorchToggle && null != e.mediaStream && null != e.mediaTrackCapabilities && e.mediaTrackCapabilities.torch && e.torchToggleElement.classList.remove("scandit-hidden")
                }, t.getCapabilitiesTimeoutMs)
            }
        }, {
            key: "storeStreamCapabilities", value: function () {
                if (null != this.mediaStream) {
                    var e = this.mediaStream.getVideoTracks();
                    0 !== e.length && "function" == typeof e[0].getCapabilities && (this.mediaTrackCapabilities = e[0].getCapabilities())
                }
            }
        }, {
            key: "setupAutofocus", value: function () {
                if (window.clearTimeout(this.manualFocusRetryTimeout), window.clearTimeout(this.manualToAutofocusResumeTimeout), null != this.mediaStream && null != this.mediaTrackCapabilities) {
                    var e = this.mediaTrackCapabilities.focusMode;
                    e instanceof Array && -1 === e.indexOf("continuous") && -1 !== e.indexOf("single-shot") && (window.clearInterval(this.autofocusInterval), this.autofocusInterval = window.setInterval(this.triggerAutoFocus.bind(this), t.autofocusIntervalMs))
                }
            }
        }, {
            key: "triggerAutoFocus", value: function () {
                this.triggerFocusMode("single-shot").catch(function () {
                })
            }
        }, {
            key: "triggerFocusMode", value: function (e) {
                if (null != this.mediaStream) {
                    var t = this.mediaStream.getVideoTracks();
                    if (0 !== t.length && "function" == typeof t[0].applyConstraints) return t[0].applyConstraints({advanced: [{focusMode: e}]})
                }
                return Ot.reject(void 0)
            }
        }, {
            key: "initializeCamera", value: function (t) {
                var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return null == t ? Ot.reject(new hr({
                    name: "NoCameraAvailableError",
                    message: "No camera available"
                })) : (this.stopStream(), this.torchEnabled = !1, this.torchToggleElement.classList.add("scandit-hidden"), new Ot(function (i, a) {
                    e.CameraAccess.accessCameraStream(r, t).then(function (e) {
                        if ("function" == typeof e.getTracks()[0].getSettings) {
                            var o = e.getTracks()[0].getSettings();
                            if (null != o.width && null != o.height && (2 === o.width || 2 === o.height)) return 6 === r ? a(new hr({
                                name: "NotReadableError",
                                message: "Could not initialize camera correctly"
                            })) : n.initializeCamera(t, r + 1).then(function () {
                                return i()
                            }).catch(function (e) {
                                return a(e)
                            })
                        }
                        n.mediaStream = e, n.barcodePicker.videoElement.addEventListener("loadedmetadata", n.postStreamInitializationListener), n.enableTapToFocus && ["touchstart", "mousedown"].forEach(function (e) {
                            n.barcodePicker.videoElement.addEventListener(e, n.triggerManualFocusListener)
                        }), n.resolveInitializeCamera(t, i, a), n.barcodePicker.videoElement.srcObject = e, n.barcodePicker.videoElement.load();
                        var s = n.barcodePicker.videoElement.play();
                        null != s && s.catch(function () {
                        })
                    }).catch(function (e) {
                        return "PermissionDeniedError" === e.name || "PermissionDismissedError" === e.name || "NotAllowedError" === e.name || "NotFoundError" === e.name || "AbortError" === e.name ? a(e) : r < 6 ? n.initializeCamera(t, r + 1).then(function (e) {
                            return i(e)
                        }).catch(function (e) {
                            return a(e)
                        }) : a(e)
                    })
                }))
            }
        }, {
            key: "resolveInitializeCamera", value: function (n, r, i) {
                var a = this, o = new hr({name: "NotReadableError", message: "Could not initialize camera correctly"});
                this.cameraAccessTimeout = window.setTimeout(function () {
                    a.stopStream(), i(o)
                }, t.cameraAccessTimeoutMs), t.isIOSDevice ? this.barcodePicker.videoElement.onloadstart = function () {
                    a.barcodePicker.videoElement.onloadstart = null, window.clearTimeout(a.cameraAccessTimeout), a.activeCamera = n, a.barcodePicker.setMirrorImageEnabled(a.activeCamera.cameraType === e.Camera.Type.FRONT), r(a.barcodePicker)
                } : this.barcodePicker.videoElement.onloadeddata = function () {
                    if (a.barcodePicker.videoElement.onloadeddata = null, window.clearTimeout(a.cameraAccessTimeout), a.barcodePicker.videoElement.videoWidth > 2 && a.barcodePicker.videoElement.videoHeight > 2 && a.barcodePicker.videoElement.currentTime > 0) return a.activeCamera = n, a.barcodePicker.setMirrorImageEnabled(a.activeCamera.cameraType === e.Camera.Type.FRONT), r(a.barcodePicker);
                    var s = performance.now();
                    window.clearInterval(a.cameraMetadataCheckInterval), a.cameraMetadataCheckInterval = window.setInterval(function () {
                        return 2 === a.barcodePicker.videoElement.videoWidth || 2 === a.barcodePicker.videoElement.videoHeight || 0 === a.barcodePicker.videoElement.currentTime ? performance.now() - s > t.cameraMetadataCheckTimeoutMs ? (window.clearInterval(a.cameraMetadataCheckInterval), a.stopStream(), i(o)) : void 0 : (window.clearInterval(a.cameraMetadataCheckInterval), a.activeCamera = n, a.barcodePicker.setMirrorImageEnabled(a.activeCamera.cameraType === e.Camera.Type.FRONT), a.barcodePicker.videoElement.dispatchEvent(new Event("canplay")), r(a.barcodePicker))
                    }, t.cameraMetadataCheckIntervalMs)
                }
            }
        }, {
            key: "setupCameraSwitcher", value: function () {
                var t = this;
                this.cameraSwitcherElement = document.createElement("img"), this.cameraSwitcherElement.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTI2LjE0IDhjLTEuNjc1IDAtMy4yMy44MzItNC4xNiAyLjIyN2wtMi4yMTggMy4zMjhhMS4wMDMgMS4wMDMgMCAwIDEtLjgzMi40NDVIMTh2LTJjMC0xLjEwMi0uODk4LTItMi0yaC02Yy0xLjEwMiAwLTIgLjg5OC0yIDJ2Mkg1Yy0xLjY1MiAwLTMgMS4zNDgtMyAzdjM2YzAgMS42NTIgMS4zNDggMyAzIDNoNTRjMS42NTIgMCAzLTEuMzQ4IDMtM1YxN2MwLTEuNjUyLTEuMzQ4LTMtMy0zaC0zdi0xYzAtMS4xMDItLjg5OC0yLTItMmgtMmMtMS4xMDIgMC0yIC44OTgtMiAydjFoLTQuOTM4YS45OTcuOTk3IDAgMCAxLS44MjgtLjQ0MWwtMi4yNTQtMy4zNTJBNS4wMDEgNS4wMDEgMCAwIDAgMzcuODI4IDh6bTAgMmgxMS42ODhjMSAwIDEuOTM0LjQ5NiAyLjQ5MiAxLjMyNGwyLjI1NCAzLjM1MkEyLjk5OCAyLjk5OCAwIDAgMCA0NS4wNjMgMTZINTljLjU1IDAgMSAuNDUgMSAxdjM2YzAgLjU1LS40NSAxLTEgMUg1Yy0uNTUgMC0xLS40NS0xLTFWMTdjMC0uNTUuNDUtMSAxLTFoMTMuOTNjMS4wMDQgMCAxLjkzNy0uNSAyLjQ5Ni0xLjMzNmwyLjIxOS0zLjMyOEEyLjk5OCAyLjk5OCAwIDAgMSAyNi4xNCAxMHpNMTAgMTJoNnYyaC02em00MiAxaDJ2MWgtMnptLTIwIDVjLTUuMjkgMC0xMC4yNDYgMi44MzYtMTIuOTM0IDcuMzk4YS45OTYuOTk2IDAgMCAwIC4zNTYgMS4zNjguOTk3Ljk5NyAwIDAgMCAxLjM2Ny0uMzU2QTEzLjA2NSAxMy4wNjUgMCAwIDEgMzIgMjBjNy4xNjggMCAxMyA1LjgzMiAxMyAxMyAwIC4xODgtLjAxNi4zNzUtLjAyMy41NjNsLTIuMjctMi4yN2ExIDEgMCAxIDAtMS40MTQgMS40MTRsNCA0Yy4xOTUuMTk1LjQ1LjI5My43MDcuMjkzYS45OTMuOTkzIDAgMCAwIC43MDctLjI5M2w0LTRhMSAxIDAgMSAwLTEuNDE0LTEuNDE0bC0yLjMyIDIuMzE2Yy4wMTEtLjIwMy4wMjctLjQwNi4wMjctLjYwOSAwLTguMjctNi43My0xNS0xNS0xNXpNMTggMjlhMSAxIDAgMCAwLS43MDcuMjkzbC00IDRhMSAxIDAgMSAwIDEuNDE0IDEuNDE0bDIuMzEzLTIuMzE2Yy0uMDA4LjIwMy0uMDIuNDA2LS4wMi42MDkgMCA4LjI3IDYuNzMgMTUgMTUgMTUgNS4zNjcgMCAxMC4zNi0yLjg5OCAxMy4wMjctNy41NjNhLjk5OS45OTkgMCAxIDAtMS43MzQtLjk5MkExMy4wNDIgMTMuMDQyIDAgMCAxIDMyIDQ2Yy03LjE2OCAwLTEzLTUuODMyLTEzLTEzIDAtLjE4OC4wMTItLjM3OS4wMi0uNTY2bDIuMjczIDIuMjczYy4xOTUuMTk1LjQ1LjI5My43MDcuMjkzYTEgMSAwIDAgMCAuNzA3LTEuNzA3bC00LTRBMSAxIDAgMCAwIDE4IDI5em05IDJjLS41NTUgMC0xIC40NDUtMSAxdjJjMCAuNTU1LjQ0NSAxIDEgMSAuNTU1IDAgMS0uNDQ1IDEtMXYtMmMwLS41NTUtLjQ0NS0xLTEtMXptNSAwYy0uNTU1IDAtMSAuNDQ1LTEgMXYyYzAgLjU1NS40NDUgMSAxIDEgLjU1NSAwIDEtLjQ0NSAxLTF2LTJjMC0uNTU1LS40NDUtMS0xLTF6bTUgMGMtLjU1NSAwLTEgLjQ0NS0xIDF2MmMwIC41NTUuNDQ1IDEgMSAxIC41NTUgMCAxLS40NDUgMS0xdi0yYzAtLjU1NS0uNDQ1LTEtMS0xeiIvPjwvc3ZnPg==", this.cameraSwitcherElement.className = e.BarcodePicker.cameraSwitcherElementClassName, this.cameraSwitcherElement.classList.add("scandit-hidden"), this.barcodePicker.parentElement.appendChild(this.cameraSwitcherElement), ["touchstart", "mousedown"].forEach(function (n) {
                    t.cameraSwitcherElement.addEventListener(n, function (n) {
                        n.preventDefault(), e.CameraAccess.getCameras().then(function (e) {
                            var n = (e.findIndex(function (e) {
                                return e.deviceId === (null == t.activeCamera ? e.deviceId : t.activeCamera.deviceId)
                            }) + 1) % e.length;
                            t.initializeCameraWithSettings(e[n], t.activeCameraSettings).catch(function (e) {
                                console.error(e)
                            })
                        }).catch(function (e) {
                            console.error(e)
                        })
                    })
                })
            }
        }, {
            key: "setupTorchToggle", value: function () {
                var t = this;
                this.torchToggleElement = document.createElement("img"), this.torchToggleElement.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTMwLjkzOCAxYy0uNDQ2LjAyLTEgLjIzLTEuMzEzLjY1NmExLjMwMiAxLjMwMiAwIDAgMC0uMDYzLjA5NGwtNi43OCAxMi4wNjMtLjA2My4wOTNjLS41NTUuNzg1LS43MjcgMS43My0uNTk0IDIuNjU2bC0yMC41IDIyLjU2My0uMDMxLjAzMWMtMS4wNyAxLjIxOS0uNjY0IDMuMDEyLjQ2OCA0LjE1N2guMDMybDQuNTk0IDQuNTkzYy41Ny41NyAxLjI2NS45NSAyIDEuMDYzLjczNC4xMTMgMS41NDYtLjA1NSAyLjE1Ni0uNTk0aC4wMzFsMjIuNTYzLTIwLjVjLjkzLjEyOSAxLjg3LS4wNDMgMi42NTYtLjU5NC4wMi0uMDE1LjA0My0uMDE1LjA2Mi0uMDMxbC4wNjMtLjAzMSAxMi4wMzEtNi43ODJjLjAzMS0uMDE5LjA2My0uMDM5LjA5NC0uMDYyLjQyMi0uMzEzLjYzNi0uODY3LjY1Ni0xLjMxMy4wMi0uNDQ1LS4wOTgtLjg0LS4yNS0xLjI1LS4zMDUtLjgyLS44MjgtMS42OS0xLjUzMS0yLjY4Ny0xLjQwNy0xLjk5Mi0zLjUxNi00LjM5LTUuNzUtNi42MjUtMi4yMzUtMi4yMzQtNC42MDItNC4zMTMtNi41OTQtNS43MTktLjk5Ni0uNzAzLTEuODY3LTEuMjI2LTIuNjg4LTEuNTMxLS40MS0uMTUyLS44MDQtLjI3LTEuMjUtLjI1em0uMjE4IDIuMDMxYy4wNzguMDEyLjE1My4wMjQuMzQ0LjA5NC41Mi4xOTEgMS4zLjYzMyAyLjIxOSAxLjI4MSAxLjgzNiAxLjI5NyA0LjE2OCAzLjM1NiA2LjM0MyA1LjUzMiAyLjE3NiAyLjE3NSA0LjIzNSA0LjQ3NiA1LjUzMiA2LjMxMi42NDguOTE4IDEuMDkgMS43MyAxLjI4MSAyLjI1LjA3LjE5MS4wODIuMjY2LjA5NC4zNDRMMzUuMTI1IDI1LjUzYS45NDkuOTQ5IDAgMCAwLS4xMjUuMDk0Yy0uMzE2LjI0Mi0uODYuMzI4LTEuNDM4LjIxOWExLjA1NiAxLjA1NiAwIDAgMC0uMTg3LS4wNjMgMy4xMTMgMy4xMTMgMCAwIDEtMS40MzgtLjgxMmwtNi45MDYtNi45MDdjLS45NzYtLjk4NC0xLjEyOS0yLjQzNy0uNjU2LTMuMDYyYS41MzIuNTMyIDAgMCAwIC4wOTQtLjA5NHptLTguMjE4IDE1LjU5NGMuMTk5LjI5Ny40My41ODYuNjg3Ljg0NGw2LjkwNiA2LjkwNmMuMjYyLjI2Mi41NDMuNDg4Ljg0NC42ODhMOS41MzEgNDYuOTA2Yy0uMDg2LjA3OC0uMjU0LjEzNy0uNTMxLjA5NC0uMjc3LS4wNDMtLjYyOS0uMjIzLS45MDYtLjVMMy41IDQxLjkwNmMtLjU1OS0uNTY2LS41NjMtMS4yNjEtLjQwNi0xLjQzN3ptLTIuODc1IDguMzEzYy0uNzcgMC0xLjU0My4yOTItMi4xMjUuODc1bC0yLjEyNSAyLjEyNWEzLjAyMyAzLjAyMyAwIDAgMCAwIDQuMjUgMy4wMjMgMy4wMjMgMCAwIDAgNC4yNSAwbDIuMTI1LTIuMTI2YTMuMDIzIDMuMDIzIDAgMCAwIDAtNC4yNSAzLjAwMiAzLjAwMiAwIDAgMC0yLjEyNS0uODc1em0wIDJjLjI1MyAwIC41MTkuMDgyLjcxOC4yOC4zOTkuNC4zOTkgMS4wNCAwIDEuNDM4bC0yLjEyNSAyLjEyNWExLjAxNCAxLjAxNCAwIDAgMS0xLjQzNyAwIDEuMDE0IDEuMDE0IDAgMCAxIDAtMS40MzdjLjQyMi0uNDIyIDEuNjk5LTEuNjk2IDIuMTI1LTIuMTI1LjE5OS0uMi40NjUtLjI4Mi43MTgtLjI4MnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4K", this.torchToggleElement.className = e.BarcodePicker.torchToggleElementClassName, this.torchToggleElement.classList.add("scandit-hidden"), this.barcodePicker.parentElement.appendChild(this.torchToggleElement), ["touchstart", "mousedown"].forEach(function (e) {
                    t.torchToggleElement.addEventListener(e, function (e) {
                        e.preventDefault(), t.torchEnabled = !t.torchEnabled, t.setTorchEnabled(t.torchEnabled)
                    })
                })
            }
        }]), t
    }();
    li.isIOSDevice = null != navigator.platform && "" !== navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform), li.cameraAccessTimeoutMs = 4e3, li.cameraMetadataCheckTimeoutMs = 4e3, li.cameraMetadataCheckIntervalMs = 50, li.getCapabilitiesTimeoutMs = 500, li.autofocusIntervalMs = 1500, li.manualToAutofocusResumeTimeoutMs = 5e3, li.manualFocusRetryTimeoutMs = 100, e.BarcodePicker = function () {
        function t(e) {
            var n = this, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = r.visible,
                a = r.playSoundOnScan, o = r.vibrateOnScan, s = r.scanningPaused, c = r.guiStyle, d = r.scanSettings;
            nr(this, t), this.originElement = e, this.isReadyToWork = !1, this.destroyed = !1, this.scanningPaused = s, oi.autoSuspend = !1, this.beepSound = new si({src: ci}), this.vibrateFunction = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate, this.eventEmitter = new Mr, this.grandParentElement = document.createElement("div"), this.grandParentElement.className = t.grandParentElementClassName, this.originElement.appendChild(this.grandParentElement), this.parentElement = document.createElement("div"), this.parentElement.className = t.parentElementClassName, this.grandParentElement.appendChild(this.parentElement), this.videoElement = document.createElement("video"), this.setupVideoElement(this.videoElement), this.setupVideoImageCanvasElement(document.createElement("canvas")), this.setVisible(i), this.setPlaySoundOnScanEnabled(a), this.setVibrateOnScanEnabled(o), this.scanner = new ni({scanSettings: d}), this.scanner.onReady(function () {
                n.isReadyToWork = !0, n.eventEmitter.emit("ready")
            }), window.requestAnimationFrame(this.videoProcessing.bind(this)), this.resizeInterval = window.setInterval(function () {
                n.resizeIfNeeded()
            }, 250), this.laserActiveImageElement = document.createElement("img"), this.laserPausedImageElement = document.createElement("img"), this.viewfinderElement = document.createElement("div"), this.setupAssets(), this.setGuiStyle(c), this.setupGlobalListeners(), this.cameraManager = new li(this)
        }

        return Ar(t, [{
            key: "destroy", value: function () {
                this.pauseScanning(), this.destroyed = !0, this.scanner.destroy(), this.eventEmitter.removeAllListeners(), window.clearInterval(this.resizeInterval), this.removeGlobalListeners(), this.cameraManager.stopStream(), this.grandParentElement.remove(), this.originElement.classList.remove("scandit-hidden")
            }
        }, {
            key: "applyScanSettings", value: function (e) {
                return this.scanner.applyScanSettings(e), this
            }
        }, {
            key: "isScanningPaused", value: function () {
                return this.scanningPaused
            }
        }, {
            key: "pauseScanning", value: function () {
                return this.scanningPaused = !0, this.scanner.isReady() && (this.laserActiveImageElement.classList.add("scandit-hidden-opacity"), this.laserPausedImageElement.classList.remove("scandit-hidden-opacity"), this.viewfinderElement.classList.add("paused")), this
            }
        }, {
            key: "resumeScanning", value: function () {
                return this.scanningPaused = !1, null != this.cameraManager.activeCamera && this.scanner.isReady() && (this.laserPausedImageElement.classList.add("scandit-hidden-opacity"), this.laserActiveImageElement.classList.remove("scandit-hidden-opacity"), this.viewfinderElement.classList.remove("paused")), this
            }
        }, {
            key: "getActiveCamera", value: function () {
                return this.cameraManager.activeCamera
            }
        }, {
            key: "setActiveCamera", value: function (e, t) {
                return this.cameraAccess ? this.cameraManager.initializeCameraWithSettings(e, t) : (this.cameraManager.setSelectedCamera(e), this.cameraManager.setSelectedCameraSettings(t), Ot.resolve(this))
            }
        }, {
            key: "applyCameraSettings", value: function (e) {
                return this.cameraAccess ? this.cameraManager.applyCameraSettings(e) : (this.cameraManager.setSelectedCameraSettings(e), Ot.resolve(this))
            }
        }, {
            key: "isVisible", value: function () {
                return this.visible
            }
        }, {
            key: "setVisible", value: function (e) {
                return this.visible = e, e ? this.originElement.classList.remove("scandit-hidden") : this.originElement.classList.add("scandit-hidden"), this
            }
        }, {
            key: "isMirrorImageEnabled", value: function () {
                return this.mirrorImage
            }
        }, {
            key: "setMirrorImageEnabled", value: function (e) {
                return this.mirrorImage = e, e ? this.videoElement.classList.add("mirrored") : this.videoElement.classList.remove("mirrored"), this
            }
        }, {
            key: "isPlaySoundOnScanEnabled", value: function () {
                return this.playSoundOnScan
            }
        }, {
            key: "setPlaySoundOnScanEnabled", value: function (e) {
                return this.playSoundOnScan = e, this
            }
        }, {
            key: "isVibrateOnScanEnabled", value: function () {
                return this.vibrateOnScan
            }
        }, {
            key: "setVibrateOnScanEnabled", value: function (e) {
                return this.vibrateOnScan = e, this
            }
        }, {
            key: "setTorchEnabled", value: function (e) {
                return this.cameraManager.setTorchEnabled(e), this
            }
        }, {
            key: "isReady", value: function () {
                return this.isReadyToWork
            }
        }, {
            key: "onReady", value: function (e) {
                return this.isReadyToWork ? e() : this.eventEmitter.once("ready", e, this), this
            }
        }, {
            key: "onScan", value: function (e, t) {
                return !0 === t ? this.eventEmitter.once("scan", e, this) : this.eventEmitter.on("scan", e, this), this
            }
        }, {
            key: "removeScanListener", value: function (e) {
                return this.eventEmitter.removeListener("scan", e), this
            }
        }, {
            key: "removeScanListeners", value: function () {
                return this.eventEmitter.removeAllListeners("scan"), this
            }
        }, {
            key: "onScanError", value: function (e, t) {
                return !0 === t ? this.eventEmitter.once("scan-error", e, this) : this.eventEmitter.on("scan-error", e, this), this
            }
        }, {
            key: "removeScanErrorListener", value: function (e) {
                return this.eventEmitter.removeListener("scan-error", e), this
            }
        }, {
            key: "removeScanErrorListeners", value: function () {
                return this.eventEmitter.removeAllListeners("scan-error"), this
            }
        }, {
            key: "setGuiStyle", value: function (e) {
                switch (this.guiStyle = e, this.guiStyle) {
                    case t.GuiStyle.NONE:
                        this.laserActiveImageElement.classList.add("scandit-hidden"), this.laserPausedImageElement.classList.add("scandit-hidden"), this.viewfinderElement.classList.add("scandit-hidden");
                        break;
                    case t.GuiStyle.LASER:
                        this.laserActiveImageElement.classList.remove("scandit-hidden"), this.laserPausedImageElement.classList.remove("scandit-hidden"), this.viewfinderElement.classList.add("scandit-hidden");
                        break;
                    case t.GuiStyle.VIEWFINDER:
                        this.laserActiveImageElement.classList.add("scandit-hidden"), this.laserPausedImageElement.classList.add("scandit-hidden"), this.viewfinderElement.classList.remove("scandit-hidden")
                }
                return this
            }
        }, {
            key: "accessCamera", value: function () {
                return this.cameraAccess ? Ot.resolve(this) : (this.cameraAccess = !0, this.cameraManager.setupCameras())
            }
        }, {
            key: "createParserForFormat", value: function (e) {
                return this.scanner.createParserForFormat(e)
            }
        }, {
            key: "resizeIfNeeded", value: function () {
                if (!(this.videoElement.videoHeight < 1 || this.originElement.clientHeight < 1 || this.lastKnownOriginElementWidth === this.originElement.clientWidth && this.lastKnownOriginElementHeight === this.originElement.clientHeight)) {
                    this.parentElement.style.maxWidth = null, this.parentElement.style.maxHeight = null;
                    var e = this.videoElement.videoWidth / this.videoElement.videoHeight,
                        t = this.originElement.clientWidth, n = this.originElement.clientHeight;
                    e > this.originElement.clientWidth / this.originElement.clientHeight ? n = t / e : t = n * e, this.lastKnownOriginElementWidth = this.originElement.clientWidth, this.lastKnownOriginElementHeight = this.originElement.clientHeight, this.parentElement.style.maxWidth = Math.ceil(t) + "px", this.parentElement.style.maxHeight = Math.ceil(n) + "px"
                }
            }
        }, {
            key: "setupVideoElement", value: function (n) {
                var r = this;
                n.setAttribute("autoplay", "autoplay"), n.setAttribute("playsinline", "true"), n.setAttribute("muted", "muted"), n.className = t.videoElementClassName, n.addEventListener("canplay", function () {
                    null != r.cameraManager.activeCamera && (r.lastKnownOriginElementWidth = 0, r.lastKnownOriginElementHeight = 0, r.cameraManager.activeCamera.currentResolution = {
                        width: n.videoWidth,
                        height: n.videoHeight
                    }, r.videoImageCanvasContext.canvas.width = r.cameraManager.activeCamera.currentResolution.width, r.videoImageCanvasContext.canvas.height = r.cameraManager.activeCamera.currentResolution.height, r.scanner.applyImageSettings({
                        width: n.videoWidth,
                        height: n.videoHeight,
                        format: e.ImageSettings.Format.RGBA_8U
                    }))
                }), this.parentElement.appendChild(n)
            }
        }, {
            key: "setupVideoImageCanvasElement", value: function (e) {
                var t = e.getContext("2d");
                null != t && (this.videoImageCanvasContext = t)
            }
        }, {
            key: "flashLaser", value: function () {
                this.laserActiveImageElement.classList.remove("scandit-flash-color"), this.laserActiveImageElement.offsetHeight, this.laserActiveImageElement.classList.add("scandit-flash-color")
            }
        }, {
            key: "flashViewfinder", value: function () {
                this.viewfinderElement.classList.remove("scandit-flash-white"), this.viewfinderElement.offsetHeight, this.viewfinderElement.classList.add("scandit-flash-white")
            }
        }, {
            key: "setupAssets", value: function () {
                var e = document.createElement("img");
                e.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAAAhCAMAAAB9TZmqAAABgFBMVEVHcEyCgoL+/v6Kior///+FhYXW1tbn5+eAgIDp6en+/v6BgYH///////////+BgYH///////////+wsLCCgoL4+PiBgYH///+srKyAgID////s7OyCgoKBgYGDg4P///+BgYH6+vqBgYH////MzMz39/f///+BgYGbm5uDg4OMjIyBgYG+vr6QkJD///////+BgYGDg4P+/v7Hx8eOjo6BgYH09PT7+/v///////+MjIz9/f3////////Y2Nj6+vrPz8+BgYH9/f3///+3t7f///+Ghob///+AgICDg4P///+IiIj///////+CgoL6+vqmpqb////////t7e3////////////b29vj4+PNzc3y8vLl5eXv7+/U1NTDw8O8vLyRkZH////x8fGJiYmZmZnDw8Pf39/S0tLT09PCwsKfn5/4+PjV1dWlpaWwsLCjo6OsrKzj4+OZmZnCwsLq6uqurq7///+AgICfn5+Tk5OFhYXCwsLJycmYmJjU1NS/v79wPZvPAAAAdnRSTlMAcvoPxiTEAsby9L8p/eusNEoJBlEZ2Pb67nz25fVGOv1Eh+RW7oyC/ToXzkALzmqTe8BJHmf9Uu+n/B2Dnt7/+6MvEP2ZKrmzXHIx2dScYv6wkf3o3SL+/uDhqLbnuNrVV4u4ie7LNGlhweeUnrTsZOjkis/PjpWtfQAACfhJREFUaN7tmXlbGksWxtlMEwRUVjUgrSQqEAQccXdQQRUVVYxqoolqjGa9WW7uW25Xv/pUdxe9q2TM88zMM55/aE5V1/Lr03XeqrZYHuzBHuzB/vPmX+hzgdmcyh/sXrIx95LKPQ64/JoG5oaHHVztzya8Ssl0rV1PfO6A03YbR4xdzUBnblbgXphZm2hv+W0z9bW0+H7tjmL9d2w6VDPon7XX/CsuxR2fTcr1hervk+oWBM9KDa0bLqVys5pOn1vTrxfvG6SrCT3HpwNiS3O1Gzt/E8dN5RHVadNAsL6aXB9ch3/9zWyUdDF/Bqh8/ngm2Shpkp+QB49xEdJy3MbgW4UjaVQ42nola73ywDWt5XhKpIcWbP4h9F3CIOuOEOodiwNz4wvdDsDW/N/PMYPhb1GiGOMY82CiSeWWObYgXsI2SWo4tq7jusOco9xC7yAG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", e.className = t.scanditLogoImageElementClassName, this.parentElement.appendChild(e), this.laserActiveImageElement.src = "data:image/png;base64,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", this.laserActiveImageElement.className = t.laserImageElementClassName, this.parentElement.appendChild(this.laserActiveImageElement), this.laserPausedImageElement.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAAvCAMAAACPHW/9AAAAYFBMVEVHcExUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFUyNFTyNFUyNE9ws1UyNFUyNFUyNFTyNFCxM5UyNFHxc9RyNE5wcwd5ZO7AAAAH3RSTlMAZ35yAQgbBAwTI4lbRDmUoKtQLrc080osVZvhKMyyq5oARwAAB8JJREFUeNrtnYtS4koQhhUENRFRRBQRff+3PNP3nktCRHbPqTr9T5jErdrVrfr6t5PMdF9d/XndhEK/1H8T0dtQ6K/ol7FxAWIX+Veh0AVVoLaYEAojoP8C1btQ6O8KmBsPiSbwnvSfsHvPB4w7ucBhRyh0EQlROgw5/kKjwDNf4G6ke8yngrrkaYmDr+hIk35CoXPlOKJTAZxQSCHhiK9xV9aFdKN3BNNOJ5w7nTs60tR1PIdCZ2pp52VHXC3lBMh1SqEGBjHPvJe056gj6UsFt6HPdMAH5s9K73zQ9I6Tnlp6CYVqGSCf/hK4+pQTq6OJg4KQF+AVdzV2Yt2jjlDjP1ux2cLzFUZTj3A8hkLn6JXn1yEReRofSD0gT7wb7WLtjnVGHTkHpo3YbIxrBccKjlDoskKucLQiA+lPzAPw7O6OdoNdWGfUCXSBtxhyKnh+g5GEU0sbGqHQKb1tGJYBlFY854EgyL+8GO5CO8HOxm6sA+oIOsEsDBffqODYaZ+OfTpMD6HQWdrLKQ0T8JWFhqIJzAPviHuDdjV2ZZ1RB9ALjgXmzd7jDD/S/qFG+pqGnUKhn+iBJkUojToaLAwIe+Q94f5utJewo7Ej68nWkXTkfIov489AP5PTPA0+zfmY21eh0KgEE4GHh2DlwsFHAQAvuCvtYO0edjV29HVgnUh3/vxwPeLOAnGB8awcIrsKhXLNGY+5Xs95QqJ8PABzHn5kHnh3tDtrB9idsad7U2adSDeY9eCpsueZwV2r7+lInxme+15OoVCtmcwzZgYpqoOCsWP6EXjAHdw90Y53qWbtBjsbO7KebF1QL3Cm06yJdT9jlBXjNQ1/QvEpFCrUu6t+vc4B8rEAmOX0E6CKO3q7WbvBTlmMJOyJdUad4B6U0t0b3X2J8sdHOgo9PcGUBkyhEIphIELwYK1pAph8LHj6e3Z/wZ1p50SG8pgbn7KzsaccZg+oK+gDCcea4e6N7g+Hdv4feYYRCv1IT8/PRE4WExYEAr/aPvGutIu1Ux6T7lARdjV2TGI2zDom2y4d6UvTZr4rujOwv56/vvQj2tIIhTIxGIUSRIkeHwQV/Agj8Q7unmgvrL2GHZMY9nVCvfDrD8k8GGTgFnQUHY4H067SN4xv/IRCA9p9IyeAS6bDzthKpJG2RwqTFAxA/pp4v0bazdqHYSfWGfXCs51tM+nHLX5LZZ1x38kwzr9tootQqME5kQFnYl5QJ6CYdcOdgUfchfaUyoC1D8LedZTFJGNnX/eoU9b95HMTJn0rpAPqauye853EKYNunAfvoYx0vVJ3d/Z+8N5+VNq3Ge2QzaC1b+DxI+Qxbdg/4fZ0442dWLc7BYe6ZNyKumd9dyh8fWesh7OHTno7o54lM4ec92OWyhydtc+asN82nV1gtyTm+Snz9crYt01nrzj3pLfiOfQ/t/WdT9kbeXuGepbFHC1td87+yrDfD+bslsb0RcpON8HFvamzdkvZd2buyrsDPjtCoTx/cfeombET621nB9iJ9fWUnL28QeU71LU+hDHuFXez9/phzO7QeBKzC7xDU4DftY39MJTDoK9Lyi6wjz6NyZ6zu/dJ/Oq2krzcGnvOrnGhj9jtcvu1jSfuoS8/CIniYXv1tql6zN54zr5qP2fP36Bu9rJYYKbvlXgZV/0a1cVA/TRen+M82Q1uvEkNTXt7ys9F+Jax8Qb1w1bU9PIGdT72BvXU2pjB9bi6irGIgew3QGthDK16gGiIpTEhvzYGgfjQ1TFea8d2c21MP2VtzPCqx2LRY75GvV726NaEzZr+H2sdQ+csg2xxravF3YrfYtXjamDV4/B69odsb4Yuma83G7UX/orzZxexkj00bU27QqMI5dt/5oJ4vqB9bD37lJ1KugHK9gaWW/Aa2zlm/heBj4LYqRQa36k0L7ZoCNSzYqOS36pEG5XGdypN2YO69xtc29uqiyiY2xanYkfhtW0zDIXG9qEaN5JdtPZku53Y+/3pPagj1QVaVT2stMCD1hfgKgMaAdmmcPndEAqdridwnW13tu3PVYGBPeKt9QVcdYHHkeoCi2bdGKuB9DasRuWjfVYzBn4U/o3gym5w0YIoKRNqFYmRCyOmVF43hsopcbEkrJPUrhszXBFMC4LVFcHa4npKqywWaJKIeMvLPoVCw0XB+PxWFwdbYTmwt6o4nlQEex+oCCbWPlbr0RcqxWqTUgGyVebRRUUodPFqj4JYWfDxNav1WLBusOdVfJdVFd/091/k896q4Gs1VduFfF1J1KjoG5pUvZeReR2u4fviSvm6Mr6uii+zvrAqvpzHtOqzj8nXZu/qQu3D9dijPHvoRGn2F/XUkpbPrDC7VWdnyLVA+1B99qrzhnaPmdwehnsgVO0Lou9G6A904ei6svdG1XhDSF8M95nJeyqdbKR0r81tfI8buaBQuY+OSqFLNVVSsvyF76zkQB/oqZThzt3ysPHeYqRDnmtTZh3yrK0Zf+7sD0KhczvkOYQyohyM2jAvsbsY65ZX9UFd/KAP6p2c7vwVd6ksm1ZG787Q+V1P2X4BOYKNDfzOMETKF+N9UH/V4XpRNB1e6BdFM1b+hEKT+lkLLbd5P1+meZGBVzZX/0Fjdwf+dN3+pg98KPRDjbF49S/pJhT6tS5B4j8UFQCShr1YqAAAAABJRU5ErkJggg==", this.laserPausedImageElement.className = t.laserImageElementClassName, this.parentElement.appendChild(this.laserPausedImageElement), this.viewfinderElement.className = t.viewfinderElementClassName, this.parentElement.appendChild(this.viewfinderElement), this.laserActiveImageElement.classList.add("scandit-hidden-opacity"), this.laserPausedImageElement.classList.remove("scandit-hidden-opacity"), this.viewfinderElement.classList.add("paused")
            }
        }, {
            key: "checkAndRecoverPlayback", value: function () {
                var e = this;
                if (null != this.videoElement && null != this.videoElement.srcObject) if (this.videoElement.srcObject.active) {
                    var t = this.videoElement.play();
                    null != t && t.catch(function () {
                    })
                } else this.cameraManager.reinitializeCamera().catch(function (t) {
                    e.fatalError = t, console.error(t)
                })
            }
        }, {
            key: "setupGlobalListeners", value: function () {
                this.globalListener = this.checkAndRecoverPlayback.bind(this), document.addEventListener("visibilitychange", this.globalListener)
            }
        }, {
            key: "removeGlobalListeners", value: function () {
                document.removeEventListener("visibilitychange", this.globalListener)
            }
        }, {
            key: "videoProcessing", value: function () {
                var e = this;
                if (!this.destroyed) if (null == this.cameraManager.activeCamera || null == this.cameraManager.activeCamera.currentResolution || null != this.fatalError || this.scanningPaused || !this.scanner.isReady() || this.scanner.isBusyProcessing() || this.latestVideoTimeProcessed === this.videoElement.currentTime) window.requestAnimationFrame(this.videoProcessing.bind(this)); else {
                    null == this.latestVideoTimeProcessed && this.resumeScanning(), this.latestVideoTimeProcessed = this.videoElement.currentTime, this.videoImageCanvasContext.drawImage(this.videoElement, 0, 0);
                    try {
                        var n = this.videoImageCanvasContext.getImageData(0, 0, this.videoImageCanvasContext.canvas.width, this.videoImageCanvasContext.canvas.height).data;
                        this.scanner.processImage(n).then(function (n) {
                            e.scanningPaused || 0 !== n.barcodes.length && (e.guiStyle === t.GuiStyle.LASER ? e.flashLaser() : e.guiStyle === t.GuiStyle.VIEWFINDER && e.flashViewfinder(), e.playSoundOnScan && e.beepSound.play(), e.vibrateOnScan && null != e.vibrateFunction && e.vibrateFunction.call(navigator, 300), e.eventEmitter.emit("scan", n))
                        }).catch(function (t) {
                            e.scanningPaused || (e.pauseScanning(), e.eventEmitter.emit("scan-error", t))
                        })
                    } catch (e) {
                        this.fatalError = e, console.error(e)
                    }
                    window.requestAnimationFrame(this.videoProcessing.bind(this))
                }
            }
        }], [{
            key: "create", value: function (n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = r.visible,
                    a = void 0 === i || i, o = r.playSoundOnScan, s = void 0 !== o && o, c = r.vibrateOnScan,
                    d = void 0 !== c && c, u = r.scanningPaused, l = void 0 !== u && u, f = r.uiStyle, p = r.guiStyle,
                    m = void 0 === p ? null != f ? f : t.GuiStyle.LASER : p, h = r.scanSettings,
                    v = void 0 === h ? new ti : h, g = r.enableCameraSwitcher, y = void 0 === g || g,
                    S = r.enableTorchToggle, _ = void 0 === S || S, C = r.enableTapToFocus, w = void 0 === C || C,
                    T = r.accessCamera, b = void 0 === T || T, E = r.camera, V = r.cameraSettings,
                    A = e.BrowserHelper.checkBrowserCompatibility();
                if (null != A) return Ot.reject(A);
                if (null == e.userLicenseKey || "" === e.userLicenseKey.trim()) return Ot.reject(new hr({
                    name: "LibraryNotConfiguredError",
                    message: "The library has not correctly been configured yet, please call 'configure' with valid parameters"
                }));
                if (!(n instanceof HTMLElement)) return Ot.reject(new hr({
                    name: "NoOriginElementError",
                    message: "A valid origin HTML element must be given"
                }));
                var M = new t(n, {
                    visible: a,
                    playSoundOnScan: s,
                    vibrateOnScan: d,
                    scanningPaused: l,
                    guiStyle: m,
                    scanSettings: v
                });
                return M.cameraManager.setUIOptions(y, _, w), M.cameraManager.setSelectedCamera(E), M.cameraManager.setSelectedCameraSettings(V), M.cameraAccess = b, b ? M.cameraManager.setupCameras() : Ot.resolve(M)
            }
        }]), t
    }(), e.BarcodePicker.grandParentElementClassName = "scandit scandit-container", e.BarcodePicker.parentElementClassName = "scandit scandit-barcode-picker", e.BarcodePicker.videoElementClassName = "scandit-video", e.BarcodePicker.scanditLogoImageElementClassName = "scandit-logo", e.BarcodePicker.laserImageElementClassName = "scandit-laser", e.BarcodePicker.viewfinderElementClassName = "scandit-viewfinder", e.BarcodePicker.cameraSwitcherElementClassName = "scandit-camera-switcher", e.BarcodePicker.torchToggleElementClassName = "scandit-torch-toggle", function (e) {
        e[e.NONE = 0] = "NONE", e[e.SCANLINE = 1] = "SCANLINE", e[e.LASER = 1] = "LASER", e[e.VIEWFINDER = 2] = "VIEWFINDER"
    }(ui = (di = e.BarcodePicker || (e.BarcodePicker = {})).GuiStyle || (di.GuiStyle = {})), di.UIStyle = ui;
    var fi = e.BrowserHelper.getDeviceId();

    function pi() {
        try {
            var t = new ni;
            return t.applyImageSettings({
                width: 2,
                height: 2,
                format: e.ImageSettings.Format.GRAY_8U
            }), t.processImage(new Uint8ClampedArray(4)).then(function () {
            })
        } catch (e) {
            return Ot.reject(e)
        }
    }

    e.userLicenseKey = void 0, e.scanditEngineLocation = void 0, e.deviceId = fi, e.configure = function (t) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n.engineLocation,
            i = void 0 === r ? "/" : r, a = n.preloadEngineLibrary, o = void 0 !== a && a, s = n.preloadCameras,
            c = void 0 !== s && s, d = e.BrowserHelper.checkBrowserCompatibility();
        if (null != d) return Ot.reject(d);
        if (null == t || "" === t.trim()) return Ot.reject(new hr({
            name: "NoLicenseKeyError",
            message: "No license key provided"
        }));
        e.userLicenseKey = t, i += "/" === i.slice(-1) ? "" : "/", /^https?:\/\//.test(i) ? e.scanditEngineLocation = "" + i : (i = "" === (i = i.split("/").filter(function (e) {
            return e.length > 0
        }).join("/")) ? "/" : "/" + i + "/", e.scanditEngineLocation = "" + location.origin + i);
        var u = [];
        return o && u.push(pi()), c && u.push(e.CameraAccess.getCameras()), Ot.all(u).then(function () {
        }).catch(function (e) {
            return Ot.reject(e)
        })
    }, e.loadEngineLibrary = pi, e.CustomError = hr, e.Scanner = ni, e.ScanSettings = ti, Object.defineProperty(e, "__esModule", {value: !0})
});
//# sourceMappingURL=index.min.js.map