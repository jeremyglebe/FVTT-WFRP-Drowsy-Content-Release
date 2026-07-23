//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function e(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var t = {}, n = [], r = () => {}, i = () => !1, a = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), o = (e) => e.startsWith("onUpdate:"), s = Object.assign, c = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, l = Object.prototype.hasOwnProperty, u = (e, t) => l.call(e, t), d = Array.isArray, f = (e) => x(e) === "[object Map]", p = (e) => x(e) === "[object Set]", m = (e) => x(e) === "[object Date]", h = (e) => typeof e == "function", g = (e) => typeof e == "string", _ = (e) => typeof e == "symbol", v = (e) => typeof e == "object" && !!e, y = (e) => (v(e) || h(e)) && h(e.then) && h(e.catch), b = Object.prototype.toString, x = (e) => b.call(e), S = (e) => x(e).slice(8, -1), C = (e) => x(e) === "[object Object]", w = (e) => g(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ee = /* @__PURE__ */ e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), te = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, ne = /-\w/g, T = te((e) => e.replace(ne, (e) => e.slice(1).toUpperCase())), re = /\B([A-Z])/g, E = te((e) => e.replace(re, "-$1").toLowerCase()), ie = te((e) => e.charAt(0).toUpperCase() + e.slice(1)), ae = te((e) => e ? `on${ie(e)}` : ""), D = (e, t) => !Object.is(e, t), oe = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, O = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, se = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, ce, le = () => ce ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {};
function ue(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = g(r) ? me(r) : ue(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	} else if (g(e) || v(e)) return e;
}
var de = /;(?![^(]*\))/g, fe = /:([^]+)/, pe = /\/\*[^]*?\*\//g;
function me(e) {
	let t = {};
	return e.replace(pe, "").split(de).forEach((e) => {
		if (e) {
			let n = e.split(fe);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function k(e) {
	let t = "";
	if (g(e)) t = e;
	else if (d(e)) for (let n = 0; n < e.length; n++) {
		let r = k(e[n]);
		r && (t += r + " ");
	}
	else if (v(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
var he = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ge = /* @__PURE__ */ e(he);
he + "";
function _e(e) {
	return !!e || e === "";
}
function ve(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = ye(e[r], t[r]);
	return n;
}
function ye(e, t) {
	if (e === t) return !0;
	let n = m(e), r = m(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _(e), r = _(t), n || r) return e === t;
	if (n = d(e), r = d(t), n || r) return n && r ? ve(e, t) : !1;
	if (n = v(e), r = v(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !ye(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function be(e, t) {
	return e.findIndex((e) => ye(e, t));
}
var xe = (e) => !!(e && e.__v_isRef === !0), A = (e) => g(e) ? e : e == null ? "" : d(e) || v(e) && (e.toString === b || !h(e.toString)) ? xe(e) ? A(e.value) : JSON.stringify(e, Se, 2) : String(e), Se = (e, t) => xe(t) ? Se(e, t.value) : f(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Ce(t, r) + " =>"] = n, e), {}) } : p(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Ce(e)) } : _(t) ? Ce(t) : v(t) && !d(t) && !C(t) ? String(t) : t, Ce = (e, t = "") => _(e) ? `Symbol(${e.description ?? t})` : e, j, we = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && j && (j.active ? (this.parent = j, this.index = (j.scopes ||= []).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].pause();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) for (e = 0, t = this.scopes.length; e < t; e++) this.scopes[e].resume();
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = j;
			try {
				return j = this, e();
			} finally {
				j = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = j, j = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (j === this) j = this.prevScope;
			else {
				let e = j;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function Te(e) {
	return new we(e);
}
function Ee() {
	return j;
}
function De(e, t = !1) {
	j && j.cleanups.push(e);
}
var M, Oe = /* @__PURE__ */ new WeakSet(), ke = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, j && (j.active ? j.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, Oe.has(this) && (Oe.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ne(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ke(this), Ie(this);
		let e = M, t = He;
		M = this, He = !0;
		try {
			return this.fn();
		} finally {
			Le(this), M = e, He = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Be(e);
			this.deps = this.depsTail = void 0, Ke(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? Oe.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Re(this) && this.run();
	}
	get dirty() {
		return Re(this);
	}
}, Ae = 0, je, Me;
function Ne(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = Me, Me = e;
		return;
	}
	e.next = je, je = e;
}
function Pe() {
	Ae++;
}
function Fe() {
	if (--Ae > 0) return;
	if (Me) {
		let e = Me;
		for (Me = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; je;) {
		let t = je;
		for (je = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function Ie(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Le(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Be(r), Ve(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Re(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (ze(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function ze(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qe) || (e.globalVersion = qe, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Re(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = M, r = He;
	M = e, He = !0;
	try {
		Ie(e);
		let n = e.fn(e._value);
		(t.version === 0 || D(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		M = n, He = r, Le(e), e.flags &= -3;
	}
}
function Be(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Be(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ve(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
var He = !0, Ue = [];
function We() {
	Ue.push(He), He = !1;
}
function Ge() {
	let e = Ue.pop();
	He = e === void 0 ? !0 : e;
}
function Ke(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = M;
		M = void 0;
		try {
			t();
		} finally {
			M = e;
		}
	}
}
var qe = 0, Je = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ye = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!M || !He || M === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== M) t = this.activeLink = new Je(M, this), M.deps ? (t.prevDep = M.depsTail, M.depsTail.nextDep = t, M.depsTail = t) : M.deps = M.depsTail = t, Xe(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = M.depsTail, t.nextDep = void 0, M.depsTail.nextDep = t, M.depsTail = t, M.deps === t && (M.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, qe++, this.notify(e);
	}
	notify(e) {
		Pe();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			Fe();
		}
	}
};
function Xe(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Xe(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Ze = /* @__PURE__ */ new WeakMap(), Qe = /* @__PURE__ */ Symbol(""), $e = /* @__PURE__ */ Symbol(""), et = /* @__PURE__ */ Symbol("");
function N(e, t, n) {
	if (He && M) {
		let t = Ze.get(e);
		t || Ze.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ye()), r.map = t, r.key = n), r.track();
	}
}
function tt(e, t, n, r, i, a) {
	let o = Ze.get(e);
	if (!o) {
		qe++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (Pe(), t === "clear") o.forEach(s);
	else {
		let i = d(e), a = i && w(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === et || !_(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(et)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Qe)), f(e) && s(o.get($e)));
				break;
			case "delete":
				i || (s(o.get(Qe)), f(e) && s(o.get($e)));
				break;
			case "set":
				f(e) && s(o.get(Qe));
				break;
		}
	}
	Fe();
}
function nt(e, t) {
	let n = Ze.get(e);
	return n && n.get(t);
}
function rt(e) {
	let t = /* @__PURE__ */ F(e);
	return t === e ? t : (N(t, "iterate", et), /* @__PURE__ */ P(e) ? t : t.map(Wt));
}
function it(e) {
	return N(e = /* @__PURE__ */ F(e), "iterate", et), e;
}
function at(e, t) {
	return /* @__PURE__ */ Vt(e) ? Gt(/* @__PURE__ */ Bt(e) ? Wt(t) : t) : Wt(t);
}
var ot = {
	__proto__: null,
	[Symbol.iterator]() {
		return st(this, Symbol.iterator, (e) => at(this, e));
	},
	concat(...e) {
		return rt(this).concat(...e.map((e) => d(e) ? rt(e) : e));
	},
	entries() {
		return st(this, "entries", (e) => (e[1] = at(this, e[1]), e));
	},
	every(e, t) {
		return lt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return lt(this, "filter", e, t, (e) => e.map((e) => at(this, e)), arguments);
	},
	find(e, t) {
		return lt(this, "find", e, t, (e) => at(this, e), arguments);
	},
	findIndex(e, t) {
		return lt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return lt(this, "findLast", e, t, (e) => at(this, e), arguments);
	},
	findLastIndex(e, t) {
		return lt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return lt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return dt(this, "includes", e);
	},
	indexOf(...e) {
		return dt(this, "indexOf", e);
	},
	join(e) {
		return rt(this).join(e);
	},
	lastIndexOf(...e) {
		return dt(this, "lastIndexOf", e);
	},
	map(e, t) {
		return lt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ft(this, "pop");
	},
	push(...e) {
		return ft(this, "push", e);
	},
	reduce(e, ...t) {
		return ut(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return ut(this, "reduceRight", e, t);
	},
	shift() {
		return ft(this, "shift");
	},
	some(e, t) {
		return lt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ft(this, "splice", e);
	},
	toReversed() {
		return rt(this).toReversed();
	},
	toSorted(e) {
		return rt(this).toSorted(e);
	},
	toSpliced(...e) {
		return rt(this).toSpliced(...e);
	},
	unshift(...e) {
		return ft(this, "unshift", e);
	},
	values() {
		return st(this, "values", (e) => at(this, e));
	}
};
function st(e, t, n) {
	let r = it(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ P(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var ct = Array.prototype;
function lt(e, t, n, r, i, a) {
	let o = it(e), s = o !== e && !/* @__PURE__ */ P(e), c = o[t];
	if (c !== ct[t]) {
		let t = c.apply(e, a);
		return s ? Wt(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, at(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function ut(e, t, n, r) {
	let i = it(e), a = i !== e && !/* @__PURE__ */ P(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = at(e, t)), n.call(this, t, at(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? at(e, c) : c;
}
function dt(e, t, n) {
	let r = /* @__PURE__ */ F(e);
	N(r, "iterate", et);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Ht(n[0]) ? (n[0] = /* @__PURE__ */ F(n[0]), r[t](...n)) : i;
}
function ft(e, t, n = []) {
	We(), Pe();
	let r = (/* @__PURE__ */ F(e))[t].apply(e, n);
	return Fe(), Ge(), r;
}
var pt = /* @__PURE__ */ e("__proto__,__v_isRef,__isVue"), mt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_));
function ht(e) {
	_(e) || (e = String(e));
	let t = /* @__PURE__ */ F(this);
	return N(t, "has", e), t.hasOwnProperty(e);
}
var gt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? Pt : Nt : i ? Mt : jt).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = d(e);
		if (!r) {
			let e;
			if (a && (e = ot[t])) return e;
			if (t === "hasOwnProperty") return ht;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ I(e) ? e : n);
		if ((_(t) ? mt.has(t) : pt(t)) || (r || N(e, "get", t), i)) return o;
		if (/* @__PURE__ */ I(o)) {
			let e = a && w(t) ? o : o.value;
			return r && v(e) ? /* @__PURE__ */ Rt(e) : e;
		}
		return v(o) ? r ? /* @__PURE__ */ Rt(o) : /* @__PURE__ */ It(o) : o;
	}
}, _t = class extends gt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = d(e) && w(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Vt(i);
			if (!/* @__PURE__ */ P(n) && !/* @__PURE__ */ Vt(n) && (i = /* @__PURE__ */ F(i), n = /* @__PURE__ */ F(n)), !a && /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : u(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ I(e) ? e : r);
		return e === /* @__PURE__ */ F(r) && (o ? D(n, i) && tt(e, "set", t, n, i) : tt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = u(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && tt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_(t) || !mt.has(t)) && N(e, "has", t), n;
	}
	ownKeys(e) {
		return N(e, "iterate", d(e) ? "length" : Qe), Reflect.ownKeys(e);
	}
}, vt = class extends gt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, yt = /* @__PURE__ */ new _t(), bt = /* @__PURE__ */ new vt(), xt = /* @__PURE__ */ new _t(!0), St = (e) => e, Ct = (e) => Reflect.getPrototypeOf(e);
function wt(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ F(i), o = f(a), c = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? St : t ? Gt : Wt;
		return !t && N(a, "iterate", l ? $e : Qe), s(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: c ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function Tt(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function Et(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ F(r), a = /* @__PURE__ */ F(n);
			e || (D(n, a) && N(i, "get", n), N(i, "get", a));
			let { has: o } = Ct(i), s = t ? St : e ? Gt : Wt;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && N(/* @__PURE__ */ F(t), "iterate", Qe), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ F(n), i = /* @__PURE__ */ F(t);
			return e || (D(t, i) && N(r, "has", t), N(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ F(a), s = t ? St : e ? Gt : Wt;
			return !e && N(o, "iterate", Qe), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return s(n, e ? {
		add: Tt("add"),
		set: Tt("set"),
		delete: Tt("delete"),
		clear: Tt("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ F(this), r = Ct(n), i = /* @__PURE__ */ F(e), a = !t && !/* @__PURE__ */ P(e) && !/* @__PURE__ */ Vt(e) ? i : e;
			return r.has.call(n, a) || D(e, a) && r.has.call(n, e) || D(i, a) && r.has.call(n, i) || (n.add(a), tt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ P(n) && !/* @__PURE__ */ Vt(n) && (n = /* @__PURE__ */ F(n));
			let r = /* @__PURE__ */ F(this), { has: i, get: a } = Ct(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ F(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? D(n, s) && tt(r, "set", e, n, s) : tt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ F(this), { has: n, get: r } = Ct(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ F(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && tt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ F(this), t = e.size !== 0, n = e.clear();
			return t && tt(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = wt(r, e, t);
	}), n;
}
function Dt(e, t) {
	let n = Et(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(u(n, r) && r in t ? n : t, r, i);
}
var Ot = { get: /* @__PURE__ */ Dt(!1, !1) }, kt = { get: /* @__PURE__ */ Dt(!1, !0) }, At = { get: /* @__PURE__ */ Dt(!0, !1) }, jt = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Pt = /* @__PURE__ */ new WeakMap();
function Ft(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function It(e) {
	return /* @__PURE__ */ Vt(e) ? e : zt(e, !1, yt, Ot, jt);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
	return zt(e, !1, xt, kt, Mt);
}
// @__NO_SIDE_EFFECTS__
function Rt(e) {
	return zt(e, !0, bt, At, Nt);
}
function zt(e, t, n, r, i) {
	if (!v(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ft(S(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
	return /* @__PURE__ */ Vt(e) ? /* @__PURE__ */ Bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function F(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ F(t) : e;
}
function Ut(e) {
	return !u(e, "__v_skip") && Object.isExtensible(e) && O(e, "__v_skip", !0), e;
}
var Wt = (e) => v(e) ? /* @__PURE__ */ It(e) : e, Gt = (e) => v(e) ? /* @__PURE__ */ Rt(e) : e;
// @__NO_SIDE_EFFECTS__
function I(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Kt(e) {
	return qt(e, !1);
}
function qt(e, t) {
	return /* @__PURE__ */ I(e) ? e : new Jt(e, t);
}
var Jt = class {
	constructor(e, t) {
		this.dep = new Ye(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ F(e), this._value = t ? e : Wt(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ P(e) || /* @__PURE__ */ Vt(e);
		e = n ? e : /* @__PURE__ */ F(e), D(e, t) && (this._rawValue = e, this._value = n ? e : Wt(e), this.dep.trigger());
	}
};
function L(e) {
	return /* @__PURE__ */ I(e) ? e.value : e;
}
var Yt = {
	get: (e, t, n) => t === "__v_raw" ? e : L(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ I(i) && !/* @__PURE__ */ I(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Xt(e) {
	return /* @__PURE__ */ Bt(e) ? e : new Proxy(e, Yt);
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
	let t = d(e) ? Array(e.length) : {};
	for (let n in e) t[n] = $t(e, n);
	return t;
}
var Qt = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _(t) ? t : String(t), this._raw = /* @__PURE__ */ F(e);
		let r = !0, i = e;
		if (!d(e) || _(this._key) || !w(this._key)) do
			r = !/* @__PURE__ */ Ht(i) || /* @__PURE__ */ P(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = L(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ I(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ I(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return nt(this._raw, this._key);
	}
};
function $t(e, t, n) {
	return new Qt(e, t, n);
}
var en = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ye(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qe - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && M !== this) return Ne(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return ze(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function tn(e, t, n = !1) {
	let r, i;
	return h(e) ? r = e : (r = e.get, i = e.set), new en(r, i, n);
}
var nn = {}, rn = /* @__PURE__ */ new WeakMap(), an = void 0;
function on(e, t = !1, n = an) {
	if (n) {
		let t = rn.get(n);
		t || rn.set(n, t = []), t.push(e);
	}
}
function sn(e, n, i = t) {
	let { immediate: a, deep: o, once: s, scheduler: l, augmentJob: u, call: f } = i, p = (e) => o ? e : /* @__PURE__ */ P(e) || o === !1 || o === 0 ? cn(e, 1) : cn(e), m, g, _, v, y = !1, b = !1;
	if (/* @__PURE__ */ I(e) ? (g = () => e.value, y = /* @__PURE__ */ P(e)) : /* @__PURE__ */ Bt(e) ? (g = () => p(e), y = !0) : d(e) ? (b = !0, y = e.some((e) => /* @__PURE__ */ Bt(e) || /* @__PURE__ */ P(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ I(e)) return e.value;
		if (/* @__PURE__ */ Bt(e)) return p(e);
		if (h(e)) return f ? f(e, 2) : e();
	})) : g = h(e) ? n ? f ? () => f(e, 2) : e : () => {
		if (_) {
			We();
			try {
				_();
			} finally {
				Ge();
			}
		}
		let t = an;
		an = m;
		try {
			return f ? f(e, 3, [v]) : e(v);
		} finally {
			an = t;
		}
	} : r, n && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => cn(e(), t);
	}
	let x = Ee(), S = () => {
		m.stop(), x && x.active && c(x.effects, m);
	};
	if (s && n) {
		let e = n;
		n = (...t) => {
			let n = e(...t);
			return S(), n;
		};
	}
	let C = b ? Array(e.length).fill(nn) : nn, w = (e) => {
		if (!(!(m.flags & 1) || !m.dirty && !e)) if (n) {
			let t = m.run();
			if (e || o || y || (b ? t.some((e, t) => D(e, C[t])) : D(t, C))) {
				_ && _();
				let e = an;
				an = m;
				try {
					let e = [
						t,
						C === nn ? void 0 : b && C[0] === nn ? [] : C,
						v
					];
					C = t, f ? f(n, 3, e) : n(...e);
				} finally {
					an = e;
				}
			}
		} else m.run();
	};
	return u && u(w), m = new ke(g), m.scheduler = l ? () => l(w, !1) : w, v = (e) => on(e, !1, m), _ = m.onStop = () => {
		let e = rn.get(m);
		if (e) {
			if (f) f(e, 4);
			else for (let t of e) t();
			rn.delete(m);
		}
	}, n ? a ? w(!0) : C = m.run() : l ? l(w.bind(null, !0), !0) : m.run(), S.pause = m.pause.bind(m), S.resume = m.resume.bind(m), S.stop = S, S;
}
function cn(e, t = Infinity, n) {
	if (t <= 0 || !v(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ I(e)) cn(e.value, t, n);
	else if (d(e)) for (let r = 0; r < e.length; r++) cn(e[r], t, n);
	else if (p(e) || f(e)) e.forEach((e) => {
		cn(e, t, n);
	});
	else if (C(e)) {
		for (let r in e) cn(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && cn(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
function ln(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		un(e, t, n);
	}
}
function R(e, t, n, r) {
	if (h(e)) {
		let i = ln(e, t, n, r);
		return i && y(i) && i.catch((e) => {
			un(e, t, n);
		}), i;
	}
	if (d(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(R(e[a], t, n, r));
		return i;
	}
}
function un(e, n, r, i = !0) {
	let a = n ? n.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = n && n.appContext.config || t;
	if (n) {
		let t = n.parent, i = n.proxy, a = `https://vuejs.org/error-reference/#runtime-${r}`;
		for (; t;) {
			let n = t.ec;
			if (n) {
				for (let t = 0; t < n.length; t++) if (n[t](e, i, a) === !1) return;
			}
			t = t.parent;
		}
		if (o) {
			We(), ln(o, null, 10, [
				e,
				i,
				a
			]), Ge();
			return;
		}
	}
	dn(e, r, a, i, s);
}
function dn(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var z = [], fn = -1, pn = [], mn = null, hn = 0, gn = /* @__PURE__ */ Promise.resolve(), _n = null;
function vn(e) {
	let t = _n || gn;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function yn(e) {
	let t = fn + 1, n = z.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = z[r], a = Tn(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function bn(e) {
	if (!(e.flags & 1)) {
		let t = Tn(e), n = z[z.length - 1];
		!n || !(e.flags & 2) && t >= Tn(n) ? z.push(e) : z.splice(yn(t), 0, e), e.flags |= 1, xn();
	}
}
function xn() {
	_n ||= gn.then(En);
}
function Sn(e) {
	d(e) ? pn.push(...e) : mn && e.id === -1 ? mn.splice(hn + 1, 0, e) : e.flags & 1 || (pn.push(e), e.flags |= 1), xn();
}
function Cn(e, t, n = fn + 1) {
	for (; n < z.length; n++) {
		let t = z[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			z.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function wn(e) {
	if (pn.length) {
		let e = [...new Set(pn)].sort((e, t) => Tn(e) - Tn(t));
		if (pn.length = 0, mn) {
			mn.push(...e);
			return;
		}
		for (mn = e, hn = 0; hn < mn.length; hn++) {
			let e = mn[hn];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		mn = null, hn = 0;
	}
}
var Tn = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function En(e) {
	try {
		for (fn = 0; fn < z.length; fn++) {
			let e = z[fn];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), ln(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; fn < z.length; fn++) {
			let e = z[fn];
			e && (e.flags &= -2);
		}
		fn = -1, z.length = 0, wn(e), _n = null, (z.length || pn.length) && En(e);
	}
}
var B = null, Dn = null;
function On(e) {
	let t = B;
	return B = e, Dn = e && e.type.__scopeId || null, t;
}
function V(e, t = B, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Vi(-1);
		let i = On(t), a;
		try {
			a = e(...n);
		} finally {
			On(i), r._d && Vi(1);
		}
		return a;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function kn(e, n) {
	if (B === null) return e;
	let r = Sa(B), i = e.dirs ||= [];
	for (let e = 0; e < n.length; e++) {
		let [a, o, s, c = t] = n[e];
		a && (h(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && cn(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function An(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (We(), R(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Ge());
	}
}
function jn(e, t) {
	if (X) {
		let n = X.provides, r = X.parent && X.parent.provides;
		r === n && (n = X.provides = Object.create(r)), n[e] = t;
	}
}
function Mn(e, t, n = !1) {
	let r = sa();
	if (r || Gr) {
		let i = Gr ? Gr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && h(t) ? t.call(r && r.proxy) : t;
	}
}
function Nn() {
	return !!(sa() || Gr);
}
var Pn = /* @__PURE__ */ Symbol.for("v-scx"), Fn = () => Mn(Pn);
function In(e, t, n) {
	return Ln(e, t, n);
}
function Ln(e, n, i = t) {
	let { immediate: a, deep: o, flush: c, once: l } = i, u = s({}, i), d = n && a || !n && c !== "post", f;
	if (pa) {
		if (c === "sync") {
			let e = Fn();
			f = e.__watcherHandles ||= [];
		} else if (!d) {
			let e = () => {};
			return e.stop = r, e.resume = r, e.pause = r, e;
		}
	}
	let p = X;
	u.call = (e, t, n) => R(e, p, t, n);
	let m = !1;
	c === "post" ? u.scheduler = (e) => {
		U(e, p && p.suspense);
	} : c !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : bn(e);
	}), u.augmentJob = (e) => {
		n && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = sn(e, n, u);
	return pa && (f ? f.push(h) : d && h()), h;
}
function Rn(e, t, n) {
	let r = this.proxy, i = g(e) ? e.includes(".") ? zn(r, e) : () => r[e] : e.bind(r, r), a;
	h(t) ? a = t : (a = t.handler, n = t);
	let o = ua(this), s = Ln(i, a.bind(r), n);
	return o(), s;
}
function zn(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var Bn = /* @__PURE__ */ Symbol("_vte"), Vn = (e) => e.__isTeleport, Hn = /* @__PURE__ */ Symbol("_leaveCb");
function Un(e, t) {
	e.shapeFlag & 6 && e.component ? (e.transition = t, Un(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Wn(e, t) {
	return h(e) ? /* @__PURE__ */ s({ name: e.name }, t, { setup: e }) : e;
}
function Gn(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Kn(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var qn = /* @__PURE__ */ new WeakMap();
function Jn(e, n, r, a, o = !1) {
	if (d(e)) {
		e.forEach((e, t) => Jn(e, n && (d(n) ? n[t] : n), r, a, o));
		return;
	}
	if (Xn(a) && !o) {
		a.shapeFlag & 512 && a.type.__asyncResolved && a.component.subTree.component && Jn(e, n, r, a.component.subTree);
		return;
	}
	let s = a.shapeFlag & 4 ? Sa(a.component) : a.el, l = o ? null : s, { i: f, r: p } = e, m = n && n.r, _ = f.refs === t ? f.refs = {} : f.refs, v = f.setupState, y = /* @__PURE__ */ F(v), b = v === t ? i : (e) => Kn(_, e) ? !1 : u(y, e), x = (e, t) => !(t && Kn(_, t));
	if (m != null && m !== p) {
		if (Yn(n), g(m)) _[m] = null, b(m) && (v[m] = null);
		else if (/* @__PURE__ */ I(m)) {
			let e = n;
			x(m, e.k) && (m.value = null), e.k && (_[e.k] = null);
		}
	}
	if (h(p)) ln(p, f, 12, [l, _]);
	else {
		let t = g(p), n = /* @__PURE__ */ I(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? v[p] : _[p] : x(p) || !e.k ? p.value : _[e.k];
					if (o) d(n) && c(n, s);
					else if (d(n)) n.includes(s) || n.push(s);
					else if (t) _[p] = [s], b(p) && (v[p] = _[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (_[e.k] = t);
					}
				} else t ? (_[p] = l, b(p) && (v[p] = l)) : n && (x(p, e.k) && (p.value = l), e.k && (_[e.k] = l));
			};
			if (l) {
				let t = () => {
					i(), qn.delete(e);
				};
				t.id = -1, qn.set(e, t), U(t, r);
			} else Yn(e), i();
		}
	}
}
function Yn(e) {
	let t = qn.get(e);
	t && (t.flags |= 8, qn.delete(e));
}
le().requestIdleCallback, le().cancelIdleCallback;
var Xn = (e) => !!e.type.__asyncLoader, Zn = (e) => e.type.__isKeepAlive;
function Qn(e, t) {
	er(e, "a", t);
}
function $n(e, t) {
	er(e, "da", t);
}
function er(e, t, n = X) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (nr(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Zn(e.parent.vnode) && tr(r, t, n, e), e = e.parent;
	}
}
function tr(e, t, n, r) {
	let i = nr(t, e, r, !0);
	lr(() => {
		c(r[t], i);
	}, n);
}
function nr(e, t, n = X, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			We();
			let i = ua(n), a = R(t, n, e, r);
			return i(), Ge(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var rr = (e) => (t, n = X) => {
	(!pa || e === "sp") && nr(e, (...e) => t(...e), n);
}, ir = rr("bm"), ar = rr("m"), or = rr("bu"), sr = rr("u"), cr = rr("bum"), lr = rr("um"), ur = rr("sp"), dr = rr("rtg"), fr = rr("rtc");
function pr(e, t = X) {
	nr("ec", e, t);
}
var mr = "components", hr = /* @__PURE__ */ Symbol.for("v-ndc");
function gr(e) {
	return g(e) ? _r(mr, e, !1) || e : e || hr;
}
function _r(e, t, n = !0, r = !1) {
	let i = B || X;
	if (i) {
		let n = i.type;
		if (e === mr) {
			let e = Ca(n, !1);
			if (e && (e === t || e === T(t) || e === ie(T(t)))) return n;
		}
		let a = vr(i[e] || n[e], t) || vr(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function vr(e, t) {
	return e && (e[t] || e[T(t)] || e[ie(T(t))]);
}
function yr(e, t, n, r) {
	let i, a = n && n[r], o = d(e);
	if (o || g(e)) {
		let n = o && /* @__PURE__ */ Bt(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ P(e), s = /* @__PURE__ */ Vt(e), e = it(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? Gt(Wt(e[n])) : Wt(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (v(e)) if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
	else {
		let n = Object.keys(e);
		i = Array(n.length);
		for (let r = 0, o = n.length; r < o; r++) {
			let o = n[r];
			i[r] = t(e[o], o, r, a && a[r]);
		}
	}
	else i = [];
	return n && (n[r] = i), i;
}
function br(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (d(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function xr(e, t, n = {}, r, i) {
	if (B.ce || B.parent && Xn(B.parent) && B.parent.ce) {
		let e = Object.keys(n).length > 0;
		return t !== "default" && (n.name = t), K(), Ui(W, null, [Y("slot", n, r && r())], e ? -2 : 64);
	}
	let a = e[t];
	a && a._c && (a._d = !1), K();
	let o = a && Sr(a(n)), s = n.key || o && o.key, c = Ui(W, { key: (s && !_(s) ? s : `_${t}`) + (!o && r ? "_fb" : "") }, o || (r ? r() : []), o && e._ === 1 ? 64 : -2);
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), a && a._c && (a._d = !0), c;
}
function Sr(e) {
	return e.some((e) => Wi(e) ? !(e.type === Ii || e.type === W && !Sr(e.children)) : !0) ? e : null;
}
var Cr = (e) => e ? fa(e) ? Sa(e) : Cr(e.parent) : null, wr = /* @__PURE__ */ s(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => Cr(e.parent),
	$root: (e) => Cr(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => Nr(e),
	$forceUpdate: (e) => e.f ||= () => {
		bn(e.update);
	},
	$nextTick: (e) => e.n ||= vn.bind(e.proxy),
	$watch: (e) => Rn.bind(e)
}), Tr = (e, n) => e !== t && !e.__isScriptSetup && u(e, n), Er = {
	get({ _: e }, n) {
		if (n === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (n[0] !== "$") {
			let e = s[n];
			if (e !== void 0) switch (e) {
				case 1: return i[n];
				case 2: return a[n];
				case 4: return r[n];
				case 3: return o[n];
			}
			else if (Tr(i, n)) return s[n] = 1, i[n];
			else if (a !== t && u(a, n)) return s[n] = 2, a[n];
			else if (u(o, n)) return s[n] = 3, o[n];
			else if (r !== t && u(r, n)) return s[n] = 4, r[n];
			else Or && (s[n] = 0);
		}
		let d = wr[n], f, p;
		if (d) return n === "$attrs" && N(e.attrs, "get", ""), d(e);
		if ((f = c.__cssModules) && (f = f[n])) return f;
		if (r !== t && u(r, n)) return s[n] = 4, r[n];
		if (p = l.config.globalProperties, u(p, n)) return p[n];
	},
	set({ _: e }, n, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Tr(a, n) ? (a[n] = r, !0) : i !== t && u(i, n) ? (i[n] = r, !0) : u(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (o[n] = r, !0);
	},
	has({ _: { data: e, setupState: n, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== t && c[0] !== "$" && u(e, c) || Tr(n, c) || u(o, c) || u(i, c) || u(wr, c) || u(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? u(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
function Dr(e) {
	return d(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
var Or = !0;
function kr(e) {
	let t = Nr(e), n = e.proxy, i = e.ctx;
	Or = !1, t.beforeCreate && jr(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: f, beforeMount: p, mounted: m, beforeUpdate: g, updated: _, activated: y, deactivated: b, beforeDestroy: x, beforeUnmount: S, destroyed: C, unmounted: w, render: ee, renderTracked: te, renderTriggered: ne, errorCaptured: T, serverPrefetch: re, expose: E, inheritAttrs: ie, components: ae, directives: D, filters: oe } = t;
	if (u && Ar(u, i, null), s) for (let e in s) {
		let t = s[e];
		h(t) && (i[e] = t.bind(n));
	}
	if (a) {
		let t = a.call(n, n);
		v(t) && (e.data = /* @__PURE__ */ It(t));
	}
	if (Or = !0, o) for (let e in o) {
		let t = o[e], a = Ta({
			get: h(t) ? t.bind(n, n) : h(t.get) ? t.get.bind(n, n) : r,
			set: !h(t) && h(t.set) ? t.set.bind(n) : r
		});
		Object.defineProperty(i, e, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		});
	}
	if (c) for (let e in c) Mr(c[e], i, n, e);
	if (l) {
		let e = h(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			jn(t, e[t]);
		});
	}
	f && jr(f, e, "c");
	function O(e, t) {
		d(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (O(ir, p), O(ar, m), O(or, g), O(sr, _), O(Qn, y), O($n, b), O(pr, T), O(fr, te), O(dr, ne), O(cr, S), O(lr, w), O(ur, re), d(E)) if (E.length) {
		let t = e.exposed ||= {};
		E.forEach((e) => {
			Object.defineProperty(t, e, {
				get: () => n[e],
				set: (t) => n[e] = t,
				enumerable: !0
			});
		});
	} else e.exposed ||= {};
	ee && e.render === r && (e.render = ee), ie != null && (e.inheritAttrs = ie), ae && (e.components = ae), D && (e.directives = D), re && Gn(e);
}
function Ar(e, t, n = r) {
	d(e) && (e = Rr(e));
	for (let n in e) {
		let r = e[n], i;
		i = v(r) ? "default" in r ? Mn(r.from || n, r.default, !0) : Mn(r.from || n) : Mn(r), /* @__PURE__ */ I(i) ? Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => i.value,
			set: (e) => i.value = e
		}) : t[n] = i;
	}
}
function jr(e, t, n) {
	R(d(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Mr(e, t, n, r) {
	let i = r.includes(".") ? zn(n, r) : () => n[r];
	if (g(e)) {
		let n = t[e];
		h(n) && In(i, n);
	} else if (h(e)) In(i, e.bind(n));
	else if (v(e)) if (d(e)) e.forEach((e) => Mr(e, t, n, r));
	else {
		let r = h(e.handler) ? e.handler.bind(n) : t[e.handler];
		h(r) && In(i, r, e);
	}
}
function Nr(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => Pr(c, e, o, !0)), Pr(c, t, o)), v(t) && a.set(t, c), c;
}
function Pr(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && Pr(e, a, n, !0), i && i.forEach((t) => Pr(e, t, n, !0));
	for (let i in t) if (!(r && i === "expose")) {
		let r = Fr[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var Fr = {
	data: Ir,
	props: Br,
	emits: Br,
	methods: zr,
	computed: zr,
	beforeCreate: H,
	created: H,
	beforeMount: H,
	mounted: H,
	beforeUpdate: H,
	updated: H,
	beforeDestroy: H,
	beforeUnmount: H,
	destroyed: H,
	unmounted: H,
	activated: H,
	deactivated: H,
	errorCaptured: H,
	serverPrefetch: H,
	components: zr,
	directives: zr,
	watch: Vr,
	provide: Ir,
	inject: Lr
};
function Ir(e, t) {
	return t ? e ? function() {
		return s(h(e) ? e.call(this, this) : e, h(t) ? t.call(this, this) : t);
	} : t : e;
}
function Lr(e, t) {
	return zr(Rr(e), Rr(t));
}
function Rr(e) {
	if (d(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function H(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function zr(e, t) {
	return e ? s(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Br(e, t) {
	return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : s(/* @__PURE__ */ Object.create(null), Dr(e), Dr(t ?? {})) : t;
}
function Vr(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = s(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = H(e[r], t[r]);
	return n;
}
function Hr() {
	return {
		app: null,
		config: {
			isNativeTag: i,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Ur = 0;
function Wr(e, t) {
	return function(n, r = null) {
		h(n) || (n = s({}, n)), r != null && !v(r) && (r = null);
		let i = Hr(), a = /* @__PURE__ */ new WeakSet(), o = [], c = !1, l = i.app = {
			_uid: Ur++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Ea,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && h(e.install) ? (a.add(e), e.install(l, ...t)) : h(e) && (a.add(e), e(l, ...t))), l;
			},
			mixin(e) {
				return i.mixins.includes(e) || i.mixins.push(e), l;
			},
			component(e, t) {
				return t ? (i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, s) {
				if (!c) {
					let u = l._ceVNode || Y(n, r);
					return u.appContext = i, s === !0 ? s = "svg" : s === !1 && (s = void 0), o && t ? t(u, a) : e(u, a, s), c = !0, l._container = a, a.__vue_app__ = l, Sa(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				c && (R(o, l._instance, 16), e(null, l._container), delete l._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Gr;
				Gr = l;
				try {
					return e();
				} finally {
					Gr = t;
				}
			}
		};
		return l;
	};
}
var Gr = null, Kr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${T(t)}Modifiers`] || e[`${E(t)}Modifiers`];
function qr(e, n, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || t, a = r, o = n.startsWith("update:"), s = o && Kr(i, n.slice(7));
	s && (s.trim && (a = r.map((e) => g(e) ? e.trim() : e)), s.number && (a = r.map(se)));
	let c, l = i[c = ae(n)] || i[c = ae(T(n))];
	!l && o && (l = i[c = ae(E(n))]), l && R(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, R(u, e, 6, a);
	}
}
var Jr = /* @__PURE__ */ new WeakMap();
function Yr(e, t, n = !1) {
	let r = n ? Jr : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, c = !1;
	if (!h(e)) {
		let r = (e) => {
			let n = Yr(e, t, !0);
			n && (c = !0, s(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !c ? (v(e) && r.set(e, null), null) : (d(a) ? a.forEach((e) => o[e] = null) : s(o, a), v(e) && r.set(e, o), o);
}
function Xr(e, t) {
	return !e || !a(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), u(e, t[0].toLowerCase() + t.slice(1)) || u(e, E(t)) || u(e, t));
}
function Zr(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: s, attrs: c, emit: l, render: u, renderCache: d, props: f, data: p, setupState: m, ctx: h, inheritAttrs: g } = e, _ = On(e), v, y;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			v = $i(u.call(t, e, d, f, m, p, h)), y = c;
		} else {
			let e = t;
			v = $i(e.length > 1 ? e(f, {
				attrs: c,
				slots: s,
				emit: l
			}) : e(f, null)), y = t.props ? c : Qr(c);
		}
	} catch (t) {
		Ri.length = 0, un(t, e, 1), v = Y(Ii);
	}
	let b = v;
	if (y && g !== !1) {
		let e = Object.keys(y), { shapeFlag: t } = b;
		e.length && t & 7 && (a && e.some(o) && (y = $r(y, a)), b = Xi(b, y, !1, !0));
	}
	return n.dirs && (b = Xi(b, null, !1, !0), b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs), n.transition && Un(b, n.transition), v = b, On(_), v;
}
var Qr = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || a(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, $r = (e, t) => {
	let n = {};
	for (let r in e) (!o(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function ei(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? ti(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (ni(o, r, n) && !Xr(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? o ? ti(r, o, l) : !0 : !!o;
	return !1;
}
function ti(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (ni(t, e, a) && !Xr(n, a)) return !0;
	}
	return !1;
}
function ni(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && v(r) && v(i) ? !ye(r, i) : r !== i;
}
function ri({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var ii = {}, ai = () => Object.create(ii), oi = (e) => Object.getPrototypeOf(e) === ii;
function si(e, t, n, r = !1) {
	let i = {}, a = ai();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), li(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	n ? e.props = r ? i : /* @__PURE__ */ Lt(i) : e.type.props ? e.props = i : e.props = a, e.attrs = a;
}
function ci(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ F(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Xr(e.emitsOptions, o)) continue;
				let d = t[o];
				if (c) if (u(a, o)) d !== a[o] && (a[o] = d, l = !0);
				else {
					let t = T(o);
					i[t] = di(c, s, t, d, e, !1);
				}
				else d !== a[o] && (a[o] = d, l = !0);
			}
		}
	} else {
		li(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !u(t, a) && ((r = E(a)) === a || !u(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = di(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !u(t, e)) && (delete a[e], l = !0);
	}
	l && tt(e.attrs, "set", "");
}
function li(e, n, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (n) for (let t in n) {
		if (ee(t)) continue;
		let l = n[t], d;
		a && u(a, d = T(t)) ? !o || !o.includes(d) ? r[d] = l : (c ||= {})[d] = l : Xr(e.emitsOptions, t) || (!(t in i) || l !== i[t]) && (i[t] = l, s = !0);
	}
	if (o) {
		let n = /* @__PURE__ */ F(r), i = c || t;
		for (let t = 0; t < o.length; t++) {
			let s = o[t];
			r[s] = di(a, n, s, i[s], e, !u(i, s));
		}
	}
	return s;
}
function di(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = u(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && h(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = ua(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === E(n)) && (r = !0));
	}
	return r;
}
var fi = /* @__PURE__ */ new WeakMap();
function pi(e, r, i = !1) {
	let a = i ? fi : r.propsCache, o = a.get(e);
	if (o) return o;
	let c = e.props, l = {}, f = [], p = !1;
	if (!h(e)) {
		let t = (e) => {
			p = !0;
			let [t, n] = pi(e, r, !0);
			s(l, t), n && f.push(...n);
		};
		!i && r.mixins.length && r.mixins.forEach(t), e.extends && t(e.extends), e.mixins && e.mixins.forEach(t);
	}
	if (!c && !p) return v(e) && a.set(e, n), n;
	if (d(c)) for (let e = 0; e < c.length; e++) {
		let n = T(c[e]);
		mi(n) && (l[n] = t);
	}
	else if (c) for (let e in c) {
		let t = T(e);
		if (mi(t)) {
			let n = c[e], r = l[t] = d(n) || h(n) ? { type: n } : s({}, n), i = r.type, a = !1, o = !0;
			if (d(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = h(t) && t.name;
				if (n === "Boolean") {
					a = !0;
					break;
				} else n === "String" && (o = !1);
			}
			else a = h(i) && i.name === "Boolean";
			r[0] = a, r[1] = o, (a || u(r, "default")) && f.push(t);
		}
	}
	let m = [l, f];
	return v(e) && a.set(e, m), m;
}
function mi(e) {
	return e[0] !== "$" && !ee(e);
}
var hi = (e) => e === "_" || e === "_ctx" || e === "$stable", gi = (e) => d(e) ? e.map($i) : [$i(e)], _i = (e, t, n) => {
	if (t._n) return t;
	let r = V((...e) => gi(t(...e)), n);
	return r._c = !1, r;
}, vi = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (hi(n)) continue;
		let i = e[n];
		if (h(i)) t[n] = _i(n, i, r);
		else if (i != null) {
			let e = gi(i);
			t[n] = () => e;
		}
	}
}, yi = (e, t) => {
	let n = gi(t);
	e.slots.default = () => n;
}, bi = (e, t, n) => {
	for (let r in t) (n || !hi(r)) && (e[r] = t[r]);
}, xi = (e, t, n) => {
	let r = e.slots = ai();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (bi(r, t, n), n && O(r, "_", e, !0)) : vi(t, r);
	} else t && yi(e, t);
}, Si = (e, n, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = t;
	if (i.shapeFlag & 32) {
		let e = n._;
		e ? r && e === 1 ? o = !1 : bi(a, n, r) : (o = !n.$stable, vi(n, a)), s = n;
	} else n && (yi(e, n), s = { default: 1 });
	if (o) for (let e in a) !hi(e) && s[e] == null && delete a[e];
}, U = Pi;
function Ci(e) {
	return wi(e);
}
function wi(e, i) {
	let a = le();
	a.__VUE__ = !0;
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = r, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Gi(e, t) && (r = ye(e), k(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Fi:
				y(e, t, n, r);
				break;
			case Ii:
				b(e, t, n, r);
				break;
			case Li:
				e ?? x(t, n, r, o);
				break;
			case W:
				ae(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? w(e, t, n, r, i, a, o, s, c) : d & 6 ? D(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, A);
		}
		u != null && i ? Jn(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && Jn(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, C = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, w = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) te(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), re(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, te = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && T(e.children, d, null, r, i, Ti(e, a), s, u), _ && An(e, null, r, "created"), ne(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !ee(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && ra(f, r, e);
		}
		_ && An(e, null, r, "beforeMount");
		let v = Di(i, g);
		v && g.beforeEnter(d), o(d, t, n), ((f = m && m.onVnodeMounted) || v || _) && U(() => {
			try {
				f && ra(f, r, e), v && g.enter(d), _ && An(e, null, r, "mounted");
			} finally {}
		}, i);
	}, ne = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || Ni(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ne(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, T = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) v(null, e[l] = s ? ea(e[l]) : $i(e[l]), t, n, r, i, a, o, s);
	}, re = (e, n, r, i, a, o, s) => {
		let l = n.el = e.el, { patchFlag: u, dynamicChildren: d, dirs: f } = n;
		u |= e.patchFlag & 16;
		let m = e.props || t, h = n.props || t, g;
		if (r && Ei(r, !1), (g = h.onVnodeBeforeUpdate) && ra(g, r, n, e), f && An(n, e, r, "beforeUpdate"), r && Ei(r, !0), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? E(e.dynamicChildren, d, l, r, i, Ti(n, a), o) : s || de(e, n, l, null, r, i, Ti(n, a), o, !1), u > 0) {
			if (u & 16) ie(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = n.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== n.children && p(l, n.children);
		} else !s && d == null && ie(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && U(() => {
			g && ra(g, r, n, e), f && An(n, e, r, "updated");
		}, i);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s];
			v(c, l, c.el && (c.type === W || !Gi(c, l) || c.shapeFlag & 198) ? m(c.el) : n, null, r, i, a, o, !0);
		}
	}, ie = (e, n, r, i, a) => {
		if (n !== r) {
			if (n !== t) for (let t in n) !ee(t) && !(t in r) && c(e, t, n[t], null, a, i);
			for (let t in r) {
				if (ee(t)) continue;
				let o = r[t], s = n[t];
				o !== s && t !== "value" && c(e, t, s, o, a, i);
			}
			"value" in r && c(e, "value", n.value, r.value, a);
		}
	}, ae = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), T(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, i, a, s, c), (t.key != null || i && t === i.subTree) && Oi(e, t, !0)) : de(e, t, n, f, i, a, s, c, l);
	}, D = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : O(t, n, r, i, a, o, c) : se(e, t, c);
	}, O = (e, t, n, r, i, a, o) => {
		let s = e.component = oa(e, r, i);
		if (Zn(e) && (s.ctx.renderer = A), ma(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ce, o), !e.el) {
				let r = s.subTree = Y(Ii);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else ce(s, e, t, n, i, a, o);
	}, se = (e, t, n) => {
		let r = t.component = e.component;
		if (ei(e, t, n)) if (r.asyncDep && !r.asyncResolved) {
			ue(r, t, n);
			return;
		} else r.next = t, r.update();
		else t.el = e.el, r.vnode = t;
	}, ce = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = Ai(e);
					if (n) {
						t && (t.el = c.el, ue(e, t, o)), n.asyncDep.then(() => {
							U(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				Ei(e, !1), t ? (t.el = c.el, ue(e, t, o)) : t = c, n && oe(n), (d = t.props && t.props.onVnodeBeforeUpdate) && ra(d, s, t, c), Ei(e, !0);
				let f = Zr(e), p = e.subTree;
				e.subTree = f, v(p, f, m(p.el), ye(p), e, i, a), t.el = f.el, u === null && ri(e, f.el), r && U(r, i), (d = t.props && t.props.onVnodeUpdated) && U(() => ra(d, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Xn(t);
				if (Ei(e, !1), l && oe(l), !m && (o = c && c.onVnodeBeforeMount) && ra(o, d, t), Ei(e, !0), s && Ce) {
					let t = () => {
						e.subTree = Zr(e), Ce(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Zr(e);
					v(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && U(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					U(() => ra(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Xn(d.vnode) && d.vnode.shapeFlag & 256) && e.a && U(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new ke(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => bn(u), Ei(e, !0), l();
	}, ue = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, ci(e, t.props, r, n), Si(e, t.children, n), We(), Cn(e), Ge();
	}, de = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				pe(l, d, n, r, i, a, o, s, c);
				return;
			} else if (f & 256) {
				fe(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && ve(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? pe(l, d, n, r, i, a, o, s, c) : ve(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && T(d, n, r, i, a, o, s, c));
	}, fe = (e, t, r, i, a, o, s, c, l) => {
		e ||= n, t ||= n;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let n = t[p] = l ? ea(t[p]) : $i(t[p]);
			v(e[p], n, r, null, a, o, s, c, l);
		}
		u > d ? ve(e, a, o, !0, !1, f) : T(t, r, i, a, o, s, c, l, f);
	}, pe = (e, t, r, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let n = e[u], i = t[u] = l ? ea(t[u]) : $i(t[u]);
			if (Gi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let n = e[f], i = t[p] = l ? ea(t[p]) : $i(t[p]);
			if (Gi(n, i)) v(n, i, r, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, n = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? ea(t[u]) : $i(t[u]), r, n, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) k(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? ea(t[u]) : $i(t[u]);
				e.key != null && g.set(e.key, u);
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let n = e[u];
				if (y >= b) {
					k(n, a, o, !0);
					continue;
				}
				let i;
				if (n.key != null) i = g.get(n.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && Gi(n, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? k(n, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(n, t[i], r, null, a, o, s, c, l), y++);
			}
			let w = x ? ki(C) : n;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, n = t[e], f = t[e + 1], p = e + 1 < d ? f.el || Mi(f) : i;
				C[u] === 0 ? v(null, n, r, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? me(n, r, p, 2) : _--);
			}
		}
	}, me = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			me(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, A);
			return;
		}
		if (c === W) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) me(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === Li) {
			S(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) if (r === 0) l.persisted && !a[Hn] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), U(() => l.enter(a), i));
		else {
			let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
				e.ctx.isUnmounted ? s(a) : o(a, t, n);
			}, d = () => {
				let e = a._isLeaving || !!a[Hn];
				a._isLeaving && a[Hn](!0), l.persisted && !e ? u() : r(a, () => {
					u(), c && c();
				});
			};
			i ? i(a, u, d) : d();
		}
		else o(a, t, n);
	}, k = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (We(), Jn(s, null, n, e, !0), Ge()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Xn(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && ra(_, t, e), u & 6) _e(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && An(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, A, r) : l && !l.hasOnce && (a !== W || d > 0 && d & 64) ? ve(l, t, n, !1, !0) : (a === W && d & 384 || !i && u & 16) && ve(c, t, n), r && he(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && U(() => {
			_ && ra(_, t, e), h && An(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, he = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === W) {
			ge(n, r);
			return;
		}
		if (t === Li) {
			C(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, ge = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, _e = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		ji(c), ji(l), r && oe(r), i.stop(), a && (a.flags |= 8, k(o, e, t, n)), s && U(s, t), U(() => {
			e.isUnmounted = !0;
		}, t);
	}, ve = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) k(e[o], t, n, r, i);
	}, ye = (e) => {
		if (e.shapeFlag & 6) return ye(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Bn];
		return n ? h(n) : t;
	}, be = !1, xe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (k(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, be ||= (be = !0, Cn(r), wn(), !1);
	}, A = {
		p: v,
		um: k,
		m: me,
		r: he,
		mt: O,
		mc: T,
		pc: de,
		pbc: E,
		n: ye,
		o: e
	}, Se, Ce;
	return i && ([Se, Ce] = i(A)), {
		render: xe,
		hydrate: Se,
		createApp: Wr(xe, Se)
	};
}
function Ti({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ei({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Di(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Oi(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (d(r) && d(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = ea(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Oi(t, a)), a.type === Fi && (a.patchFlag === -1 && (a = i[e] = ea(a)), a.el = t.el), a.type === Ii && !a.el && (a.el = t.el);
	}
}
function ki(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function Ai(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : Ai(t);
}
function ji(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function Mi(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? Mi(t.subTree) : null;
}
var Ni = (e) => e.__isSuspense;
function Pi(e, t) {
	t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : Sn(e);
}
var W = /* @__PURE__ */ Symbol.for("v-fgt"), Fi = /* @__PURE__ */ Symbol.for("v-txt"), Ii = /* @__PURE__ */ Symbol.for("v-cmt"), Li = /* @__PURE__ */ Symbol.for("v-stc"), Ri = [], G = null;
function K(e = !1) {
	Ri.push(G = e ? null : []);
}
function zi() {
	Ri.pop(), G = Ri[Ri.length - 1] || null;
}
var Bi = 1;
function Vi(e, t = !1) {
	Bi += e, e < 0 && G && t && (G.hasOnce = !0);
}
function Hi(e) {
	return e.dynamicChildren = Bi > 0 ? G || n : null, zi(), Bi > 0 && G && G.push(e), e;
}
function q(e, t, n, r, i, a) {
	return Hi(J(e, t, n, r, i, a, !0));
}
function Ui(e, t, n, r, i) {
	return Hi(Y(e, t, n, r, i, !0));
}
function Wi(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Gi(e, t) {
	return e.type === t.type && e.key === t.key;
}
var Ki = ({ key: e }) => e ?? null, qi = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : g(e) || /* @__PURE__ */ I(e) || h(e) ? {
	i: B,
	r: e,
	k: t,
	f: !!n
} : e);
function J(e, t = null, n = null, r = 0, i = null, a = e === W ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && Ki(t),
		ref: t && qi(t),
		scopeId: Dn,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: B
	};
	return s ? (ta(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= g(n) ? 8 : 16), Bi > 0 && !o && G && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && G.push(c), c;
}
var Y = Ji;
function Ji(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === hr) && (e = Ii), Wi(e)) {
		let r = Xi(e, t, !0);
		return n && ta(r, n), Bi > 0 && !a && G && (r.shapeFlag & 6 ? G[G.indexOf(e)] = r : G.push(r)), r.patchFlag = -2, r;
	}
	if (wa(e) && (e = e.__vccOpts), t) {
		t = Yi(t);
		let { class: e, style: n } = t;
		e && !g(e) && (t.class = k(e)), v(n) && (/* @__PURE__ */ Ht(n) && !d(n) && (n = s({}, n)), t.style = ue(n));
	}
	let o = g(e) ? 1 : Ni(e) ? 128 : Vn(e) ? 64 : v(e) ? 4 : h(e) ? 2 : 0;
	return J(e, t, n, r, i, o, a, !0);
}
function Yi(e) {
	return e ? /* @__PURE__ */ Ht(e) || oi(e) ? s({}, e) : e : null;
}
function Xi(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? na(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && Ki(l),
		ref: t && t.ref ? n && a ? d(a) ? a.concat(qi(t)) : [a, qi(t)] : qi(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== W ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Xi(e.ssContent),
		ssFallback: e.ssFallback && Xi(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && Un(u, c.clone(u)), u;
}
function Zi(e = " ", t = 0) {
	return Y(Fi, null, e, t);
}
function Qi(e = "", t = !1) {
	return t ? (K(), Ui(Ii, null, e)) : Y(Ii, null, e);
}
function $i(e) {
	return e == null || typeof e == "boolean" ? Y(Ii) : d(e) ? Y(W, null, e.slice()) : Wi(e) ? ea(e) : Y(Fi, null, String(e));
}
function ea(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Xi(e);
}
function ta(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (d(t)) n = 16;
	else if (typeof t == "object") if (r & 65) {
		let n = t.default;
		n && (n._c && (n._d = !1), ta(e, n()), n._c && (n._d = !0));
		return;
	} else {
		n = 32;
		let r = t._;
		!r && !oi(t) ? t._ctx = B : r === 3 && B && (B.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
	}
	else h(t) ? (t = {
		default: t,
		_ctx: B
	}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Zi(t)]) : n = 8);
	e.children = t, e.shapeFlag |= n;
}
function na(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = k([t.class, r.class]));
		else if (e === "style") t.style = ue([t.style, r.style]);
		else if (a(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(d(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !o(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function ra(e, t, n, r = null) {
	R(e, t, 7, [n, r]);
}
var ia = Hr(), aa = 0;
function oa(e, n, r) {
	let i = e.type, a = (n ? n.appContext : e.appContext) || ia, o = {
		uid: aa++,
		vnode: e,
		type: i,
		parent: n,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new we(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: n ? n.provides : Object.create(a.provides),
		ids: n ? n.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: pi(i, a),
		emitsOptions: Yr(i, a),
		emit: null,
		emitted: null,
		propsDefaults: t,
		inheritAttrs: i.inheritAttrs,
		ctx: t,
		data: t,
		props: t,
		attrs: t,
		slots: t,
		refs: t,
		setupState: t,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = { _: o }, o.root = n ? n.root : o, o.emit = qr.bind(null, o), e.ce && e.ce(o), o;
}
var X = null, sa = () => X || B, ca, la;
{
	let e = le(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	ca = t("__VUE_INSTANCE_SETTERS__", (e) => X = e), la = t("__VUE_SSR_SETTERS__", (e) => pa = e);
}
var ua = (e) => {
	let t = X;
	return ca(e), e.scope.on(), () => {
		e.scope.off(), ca(t);
	};
}, da = () => {
	X && X.scope.off(), ca(null);
};
function fa(e) {
	return e.vnode.shapeFlag & 4;
}
var pa = !1;
function ma(e, t = !1, n = !1) {
	t && la(t);
	let { props: r, children: i } = e.vnode, a = fa(e);
	si(e, r, a, t), xi(e, i, n || t);
	let o = a ? ha(e, t) : void 0;
	return t && la(!1), o;
}
function ha(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Er);
	let { setup: r } = n;
	if (r) {
		We();
		let n = e.setupContext = r.length > 1 ? xa(e) : null, i = ua(e), a = ln(r, e, 0, [e.props, n]), o = y(a);
		if (Ge(), i(), (o || e.sp) && !Xn(e) && Gn(e), o) {
			if (a.then(da, da), t) return a.then((n) => {
				ga(e, n, t);
			}).catch((t) => {
				un(t, e, 0);
			});
			e.asyncDep = a;
		} else ga(e, a, t);
	} else ya(e, t);
}
function ga(e, t, n) {
	h(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : v(t) && (e.setupState = Xt(t)), ya(e, n);
}
var _a, va;
function ya(e, t, n) {
	let i = e.type;
	if (!e.render) {
		if (!t && _a && !i.render) {
			let t = i.template || Nr(e).template;
			if (t) {
				let { isCustomElement: n, compilerOptions: r } = e.appContext.config, { delimiters: a, compilerOptions: o } = i;
				i.render = _a(t, s(s({
					isCustomElement: n,
					delimiters: a
				}, r), o));
			}
		}
		e.render = i.render || r, va && va(e);
	}
	{
		let t = ua(e);
		We();
		try {
			kr(e);
		} finally {
			Ge(), t();
		}
	}
}
var ba = { get(e, t) {
	return N(e, "get", ""), e[t];
} };
function xa(e) {
	return {
		attrs: new Proxy(e.attrs, ba),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Sa(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Xt(Ut(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in wr) return wr[n](e);
		},
		has(e, t) {
			return t in e || t in wr;
		}
	}) : e.proxy;
}
function Ca(e, t = !0) {
	return h(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wa(e) {
	return h(e) && "__vccOpts" in e;
}
var Ta = (e, t) => /* @__PURE__ */ tn(e, t, pa), Ea = "3.5.38", Da = void 0, Oa = typeof window < "u" && window.trustedTypes;
if (Oa) try {
	Da = /* @__PURE__ */ Oa.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var ka = Da ? (e) => Da.createHTML(e) : (e) => e, Aa = "http://www.w3.org/2000/svg", ja = "http://www.w3.org/1998/Math/MathML", Ma = typeof document < "u" ? document : null, Na = Ma && /* @__PURE__ */ Ma.createElement("template"), Pa = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Ma.createElementNS(Aa, e) : t === "mathml" ? Ma.createElementNS(ja, e) : n ? Ma.createElement(e, { is: n }) : Ma.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Ma.createTextNode(e),
	createComment: (e) => Ma.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Ma.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Na.innerHTML = ka(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Na.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Fa = /* @__PURE__ */ Symbol("_vtc");
function Ia(e, t, n) {
	let r = e[Fa];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var La = /* @__PURE__ */ Symbol("_vod"), Ra = /* @__PURE__ */ Symbol("_vsh"), za = /* @__PURE__ */ Symbol(""), Ba = /(?:^|;)\s*display\s*:/;
function Va(e, t, n) {
	let r = e.style, i = g(n), a = !1;
	if (n && !i) {
		if (t) if (g(t)) for (let e of t.split(";")) {
			let t = e.slice(0, e.indexOf(":")).trim();
			n[t] ?? Ua(r, t, "");
		}
		else for (let e in t) n[e] ?? Ua(r, e, "");
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Ua(r, i, "") : qa(e, i, !g(t) && t ? t[i] : void 0, o) || Ua(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[za];
			e && (n += ";" + e), r.cssText = n, a = Ba.test(n);
		}
	} else t && e.removeAttribute("style");
	La in e && (e[La] = a ? r.display : "", e[Ra] && (r.display = "none"));
}
var Ha = /\s*!important$/;
function Ua(e, t, n) {
	if (d(n)) n.forEach((n) => Ua(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ka(e, t);
		Ha.test(n) ? e.setProperty(E(r), n.replace(Ha, ""), "important") : e[r] = n;
	}
}
var Wa = [
	"Webkit",
	"Moz",
	"ms"
], Ga = {};
function Ka(e, t) {
	let n = Ga[t];
	if (n) return n;
	let r = T(t);
	if (r !== "filter" && r in e) return Ga[t] = r;
	r = ie(r);
	for (let n = 0; n < Wa.length; n++) {
		let i = Wa[n] + r;
		if (i in e) return Ga[t] = i;
	}
	return t;
}
function qa(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && g(r) && n === r;
}
var Ja = "http://www.w3.org/1999/xlink";
function Ya(e, t, n, r, i, a = ge(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ja, t.slice(6, t.length)) : e.setAttributeNS(Ja, t, n) : n == null || a && !_e(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _(n) ? String(n) : n);
}
function Xa(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? ka(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = _e(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Za(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Qa(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var $a = /* @__PURE__ */ Symbol("_vei");
function eo(e, t, n, r, i = null) {
	let a = e[$a] || (e[$a] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = no(t);
		r ? Za(e, n, a[t] = oo(r, i), s) : o && (Qa(e, n, o, s), a[t] = void 0);
	}
}
var to = /(?:Once|Passive|Capture)$/;
function no(e) {
	let t;
	if (to.test(e)) {
		t = {};
		let n;
		for (; n = e.match(to);) e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
	}
	return [e[2] === ":" ? e.slice(3) : E(e.slice(2)), t];
}
var ro = 0, io = /* @__PURE__ */ Promise.resolve(), ao = () => ro ||= (io.then(() => ro = 0), Date.now());
function oo(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (d(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && R(e, t, 5, a);
			}
		} else R(r, t, 5, [e]);
	};
	return n.value = e, n.attached = ao(), n;
}
var so = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, co = (e, t, n, r, i, s) => {
	let c = i === "svg";
	t === "class" ? Ia(e, r, c) : t === "style" ? Va(e, n, r) : a(t) ? o(t) || eo(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : lo(e, t, r, c)) ? (Xa(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ya(e, t, r, c, s, t !== "value")) : e._isVueCE && (uo(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !g(r))) ? Xa(e, T(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ya(e, t, r, c));
};
function lo(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && so(t) && h(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return so(t) && g(n) ? !1 : t in e;
}
function uo(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = T(t);
	return Array.isArray(n) ? n.some((e) => T(e) === r) : Object.keys(n).some((e) => T(e) === r);
}
var fo = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return d(t) ? (e) => oe(t, e) : t;
};
function po(e) {
	e.target.composing = !0;
}
function mo(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var ho = /* @__PURE__ */ Symbol("_assign");
function go(e, t, n) {
	return t && (e = e.trim()), n && (e = se(e)), e;
}
var _o = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e[ho] = fo(i);
		let a = r || i.props && i.props.type === "number";
		Za(e, t ? "change" : "input", (t) => {
			t.target.composing || e[ho](go(e.value, n, a));
		}), (n || a) && Za(e, "change", () => {
			e.value = go(e.value, n, a);
		}), t || (Za(e, "compositionstart", po), Za(e, "compositionend", mo), Za(e, "change", mo));
	},
	mounted(e, { value: t }) {
		e.value = t ?? "";
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[ho] = fo(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? se(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, vo = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		let i = p(t);
		Za(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? se(bo(e)) : bo(e));
			e[ho](e.multiple ? i ? new Set(t) : t : t[0]), e._assigning = !0, vn(() => {
				e._assigning = !1;
			});
		}), e[ho] = fo(r);
	},
	mounted(e, { value: t }) {
		yo(e, t);
	},
	beforeUpdate(e, t, n) {
		e[ho] = fo(n);
	},
	updated(e, { value: t }) {
		e._assigning || yo(e, t);
	}
};
function yo(e, t) {
	let n = e.multiple, r = d(t);
	if (!(n && !r && !p(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = bo(a);
			if (n) if (r) {
				let e = typeof o;
				e === "string" || e === "number" ? a.selected = t.some((e) => String(e) === String(o)) : a.selected = be(t, o) > -1;
			} else a.selected = t.has(o);
			else if (ye(bo(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function bo(e) {
	return "_value" in e ? e._value : e.value;
}
var xo = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], So = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => xo.some((n) => e[`${n}Key`] && !t.includes(n))
}, Co = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = So[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, wo = /* @__PURE__ */ s({ patchProp: co }, Pa), To;
function Eo() {
	return To ||= Ci(wo);
}
var Do = ((...e) => {
	let t = Eo().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = ko(e);
		if (!r) return;
		let i = t._component;
		!h(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Oo(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
});
function Oo(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function ko(e) {
	return g(e) ? document.querySelector(e) : e;
}
//#endregion
//#region node_modules/pinia/dist/pinia.mjs
var Ao = typeof window < "u", jo, Mo = (e) => jo = e, No = Symbol();
function Po(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Fo;
(function(e) {
	e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Fo ||= {});
var Io = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function Lo(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Ro(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Uo(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function zo(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Bo(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var Vo = typeof navigator == "object" ? navigator : { userAgent: "" }, Ho = /Macintosh/.test(Vo.userAgent) && /AppleWebKit/.test(Vo.userAgent) && !/Safari/.test(Vo.userAgent), Uo = Ao ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Ho ? Wo : "msSaveOrOpenBlob" in Vo ? Go : Ko : () => {};
function Wo(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Bo(r) : zo(r.href) ? Ro(e, t, n) : (r.target = "_blank", Bo(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Bo(r);
	}, 0));
}
function Go(e, t = "download", n) {
	if (typeof e == "string") if (zo(e)) Ro(e, t, n);
	else {
		let t = document.createElement("a");
		t.href = e, t.target = "_blank", setTimeout(function() {
			Bo(t);
		});
	}
	else navigator.msSaveOrOpenBlob(Lo(e, n), t);
}
function Ko(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Ro(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(Io.HTMLElement)) || "safari" in Io, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || Ho) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: qo } = Object;
function Jo() {
	let e = Te(!0), t = e.run(() => /* @__PURE__ */ Kt({})), n = [], r = [], i = Ut({
		install(e) {
			Mo(i), i._a = e, e.provide(No, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var Yo = () => {};
function Xo(e, t, n, r = Yo) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && Ee() && De(i), i;
}
function Zo(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Qo = (e) => e(), $o = Symbol(), es = Symbol();
function ts(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!t.hasOwnProperty(n)) continue;
		let r = t[n], i = e[n];
		Po(i) && Po(r) && e.hasOwnProperty(n) && !/* @__PURE__ */ I(r) && !/* @__PURE__ */ Bt(r) ? e[n] = ts(i, r) : e[n] = r;
	}
	return e;
}
var ns = Symbol();
function rs(e) {
	return !Po(e) || !Object.prototype.hasOwnProperty.call(e, ns);
}
var { assign: is } = Object;
function as(e) {
	return !!(/* @__PURE__ */ I(e) && e.effect);
}
function os(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || (n.state.value[e] = i ? i() : {}), is(/* @__PURE__ */ Zt(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = Ut(Ta(() => {
			Mo(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = ss(e, l, t, n, r, !0), c;
}
function ss(e, t, n = {}, r, i, a) {
	let o, s = is({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p = r.state.value[e];
	!a && !p && (r.state.value[e] = {});
	let m;
	function h(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: Fo.patchFunction,
			storeId: e,
			events: void 0
		}) : (ts(r.state.value[e], t), n = {
			type: Fo.patchObject,
			payload: t,
			storeId: e,
			events: void 0
		});
		let i = m = Symbol();
		vn().then(() => {
			m === i && (l = !0);
		}), u = !0, Zo(d, n, r.state.value[e]);
	}
	let g = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			is(e, t);
		});
	} : Yo;
	function _() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let v = (t, n = "") => {
		if ($o in t) return t[es] = n, t;
		let i = function() {
			Mo(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Zo(f, {
				args: n,
				name: i[es],
				store: y,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : y, n);
			} catch (e) {
				throw Zo(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Zo(a, e), e)).catch((e) => (Zo(o, e), Promise.reject(e))) : (Zo(a, l), l);
		};
		return i[$o] = !0, i[es] = n, i;
	}, y = /* @__PURE__ */ It({
		_p: r,
		$id: e,
		$onAction: Xo.bind(null, f),
		$patch: h,
		$reset: g,
		$subscribe(t, n = {}) {
			let i = Xo(d, t, n.detached, () => a()), a = o.run(() => In(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: Fo.direct,
					events: void 0
				}, r);
			}, is({}, c, n)));
			return i;
		},
		$dispose: _
	});
	r._s.set(e, y);
	let b = (r._a && r._a.runWithContext || Qo)(() => r._e.run(() => (o = Te()).run(() => t({ action: v }))));
	for (let t in b) {
		let n = b[t];
		/* @__PURE__ */ I(n) && !as(n) || /* @__PURE__ */ Bt(n) ? a || (p && rs(n) && (/* @__PURE__ */ I(n) ? n.value = p[t] : ts(n, p[t])), r.state.value[e][t] = n) : typeof n == "function" && (b[t] = v(n, t), s.actions[t] = n);
	}
	return is(y, b), is(/* @__PURE__ */ F(y), b), Object.defineProperty(y, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			h((t) => {
				is(t, e);
			});
		}
	}), r._p.forEach((e) => {
		is(y, o.run(() => e({
			store: y,
			app: r._a,
			pinia: r,
			options: s
		})));
	}), p && a && n.hydrate && n.hydrate(y.$state, p), l = !0, u = !0, y;
}
function cs(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function a(n, a) {
		let o = Nn();
		return n ||= o ? Mn(No, null) : null, n && Mo(n), n = jo, n._s.has(e) || (i ? ss(e, t, r, n) : os(e, r, n)), n._s.get(e);
	}
	return a.$id = e, a;
}
//#endregion
//#region src/functions/factories/apps/demo-components/sample.card-demo-array.factory.ts
function ls() {
	return [
		{
			body: "No treatment or size props. This is the basic AppCard title and body.",
			props: { title: "Default card" },
			title: "Default card"
		},
		{
			body: "The border treatment adds a solid boundary around grouped content.",
			props: {
				title: "Bordered treatment",
				treatment: "border"
			},
			title: "Bordered treatment"
		},
		{
			body: "The dash treatment marks placeholder, optional, or setup-oriented content.",
			props: {
				title: "Dashed treatment",
				treatment: "dash"
			},
			title: "Dashed treatment"
		},
		{
			body: "The small size tightens card padding and type. Buttons are not part of size.",
			props: {
				size: "sm",
				title: "Small size",
				treatment: "border"
			},
			title: "Small size"
		},
		{
			actions: ["Primary action", "Secondary action"],
			body: "The actions slot adds a button row at the bottom of the card body.",
			props: {
				title: "Actions slot",
				treatment: "border"
			},
			title: "Actions slot"
		},
		{
			body: "The header slot replaces the generated title row so callers can add metadata beside the title.",
			headerBadge: "custom header",
			props: { treatment: "border" },
			title: "Header slot"
		}
	];
}
//#endregion
//#region src/state/apps/demo-components/demo-components-store.ts
var us = cs("demo-components", { state: () => ({ cardDemos: ls() }) }), ds = { key: 0 }, fs = { class: "tw:dui-card-body" }, ps = {
	key: 0,
	class: "tw:dui-card-title"
}, ms = {
	key: 2,
	class: "tw:dui-card-actions"
}, hs = /* @__PURE__ */ Wn({
	__name: "AppCard",
	props: {
		imageFull: {
			type: Boolean,
			default: !1
		},
		side: {
			type: Boolean,
			default: !1
		},
		size: { default: "default" },
		title: { default: "" },
		titleTag: { default: "h2" },
		treatment: { default: "default" }
	},
	setup(e) {
		let t = e, n = {
			default: "",
			xs: "tw:dui-card-xs",
			sm: "tw:dui-card-sm",
			md: "tw:dui-card-md",
			lg: "tw:dui-card-lg",
			xl: "tw:dui-card-xl"
		}, r = {
			default: "",
			border: "tw:dui-card-border",
			dash: "tw:dui-card-dash"
		}, i = Ta(() => [
			"tw:dui-card",
			n[t.size],
			r[t.treatment],
			t.imageFull ? "tw:dui-image-full" : "",
			t.side ? "tw:dui-card-side" : ""
		].filter(Boolean));
		return (t, n) => (K(), q("article", { class: k(i.value) }, [t.$slots.media ? (K(), q("figure", ds, [xr(t.$slots, "media")])) : Qi("", !0), J("div", fs, [
			t.$slots.header ? (K(), q("div", ps, [xr(t.$slots, "header")])) : t.$slots.title || e.title ? (K(), Ui(gr(e.titleTag), {
				key: 1,
				class: "tw:dui-card-title"
			}, {
				default: V(() => [xr(t.$slots, "title", {}, () => [Zi(A(e.title), 1)])]),
				_: 3
			})) : Qi("", !0),
			xr(t.$slots, "default"),
			t.$slots.actions ? (K(), q("div", ms, [xr(t.$slots, "actions")])) : Qi("", !0)
		])], 2));
	}
}), gs = /* @__PURE__ */ Wn({
	__name: "AppContent",
	props: {
		as: { default: "main" },
		gap: { default: "md" },
		padding: { default: "md" },
		width: { default: "standard" }
	},
	setup(e) {
		let t = e, n = {
			none: "",
			sm: "tw:gap-2",
			md: "tw:gap-4",
			lg: "tw:gap-6"
		}, r = {
			none: "",
			sm: "tw:p-3",
			md: "tw:p-6",
			lg: "tw:p-8"
		}, i = {
			narrow: "tw:max-w-2xl",
			standard: "tw:max-w-4xl",
			wide: "tw:max-w-6xl",
			full: "tw:max-w-none"
		}, a = Ta(() => [
			"tw:box-border",
			"tw:mx-auto",
			"tw:flex",
			"tw:w-full",
			"tw:flex-col",
			"tw:text-base-content",
			n[t.gap],
			r[t.padding],
			i[t.width]
		].filter(Boolean));
		return (t, n) => (K(), Ui(gr(e.as), { class: k(a.value) }, {
			default: V(() => [xr(t.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), _s = /* @__PURE__ */ Wn({
	__name: "AppGrid",
	props: {
		as: { default: "section" },
		columns: { default: "two" },
		gap: { default: "md" }
	},
	setup(e) {
		let t = e, n = {
			one: "tw:grid-cols-1",
			two: "tw:grid-cols-1 tw:md:grid-cols-2",
			three: "tw:grid-cols-1 tw:md:grid-cols-2 tw:xl:grid-cols-3"
		}, r = {
			none: "",
			sm: "tw:gap-2",
			md: "tw:gap-4",
			lg: "tw:gap-6"
		}, i = Ta(() => [
			"tw:grid",
			n[t.columns],
			r[t.gap]
		].filter(Boolean));
		return (t, n) => (K(), Ui(gr(e.as), { class: k(i.value) }, {
			default: V(() => [xr(t.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
}), vs = { class: "tw:dui-badge tw:dui-badge-soft tw:dui-badge-sm" }, ys = /* @__PURE__ */ Wn({
	__name: "DemoComponentsApp",
	setup(e) {
		let t = us();
		return (e, n) => (K(), Ui(gs, { width: "standard" }, {
			default: V(() => [Y(hs, {
				title: "AppCard",
				treatment: "border"
			}, {
				default: V(() => [...n[0] ||= [J("p", null, " A generic Vue wrapper for Daisy's card component. These examples show the supported props and slots without adding app-specific behavior. ", -1)]]),
				_: 1
			}), Y(_s, {
				columns: "two",
				"aria-label": "AppCard examples"
			}, {
				default: V(() => [(K(!0), q(W, null, yr(L(t).cardDemos, (e) => (K(), Ui(hs, na({ key: e.title }, { ref_for: !0 }, e.props), br({
					default: V(() => [J("p", null, A(e.body), 1)]),
					_: 2
				}, [e.headerBadge ? {
					name: "header",
					fn: V(() => [J("span", null, A(e.title), 1), J("span", vs, A(e.headerBadge), 1)]),
					key: "0"
				} : void 0, e.actions ? {
					name: "actions",
					fn: V(() => [(K(!0), q(W, null, yr(e.actions, (e) => (K(), q("button", {
						key: e,
						class: "tw:dui-btn tw:dui-btn-sm",
						type: "button"
					}, A(e), 1))), 128))]),
					key: "1"
				} : void 0]), 1040))), 128))]),
				_: 1
			})]),
			_: 1
		}));
	}
}), Z = "fvtt-wfrp-drowsy-content", bs = "WFRP4e Drowsy's Content", xs = class extends foundry.applications.api.ApplicationV2 {
	#e;
	getVueProps() {}
	async _renderHTML(e, t) {
		let n = document.createElement("div");
		return n.classList.add("fvtt-wfrp-drowsy-content-root"), n.dataset.theme = "fvtt-wfrp-drowsy-content", n;
	}
	_replaceHTML(e, t, n) {
		this.unmountVue(), t.classList.add("fvtt-wfrp-drowsy-content-app"), t.replaceChildren(e), this.#e = Do(this.getVueComponent(), this.getVueProps() ?? {}), this.#e.use(Jo()), this.#e.mount(e);
	}
	async _preClose(e) {
		this.unmountVue(), await super._preClose(e);
	}
	unmountVue() {
		this.#e?.unmount(), this.#e = void 0;
	}
}, Ss = class extends xs {
	static DEFAULT_OPTIONS = {
		id: `${Z}-demo-components`,
		tag: "section",
		window: {
			icon: "fa-solid fa-cubes",
			resizable: !0,
			title: `${bs} Component Demo`
		},
		position: {
			height: "auto",
			width: 780
		}
	};
	getVueComponent() {
		return ys;
	}
}, Cs = cs("multi-attack", () => {
	let e = /* @__PURE__ */ It({
		attackModifier: 0,
		attackOptionId: "",
		attacks: 1,
		defenseModifier: 0,
		defenseOptionId: ""
	}), t = /* @__PURE__ */ Kt(""), n = /* @__PURE__ */ Kt(!1), r = /* @__PURE__ */ Kt();
	function i(n) {
		Object.assign(e, n), t.value = "", r.value = void 0;
	}
	function a() {
		return { ...e };
	}
	return {
		configuration: e,
		error: t,
		getConfiguration: a,
		initialize: i,
		resolving: n,
		summary: r
	};
}), ws = { class: "tw:text-sm tw:opacity-75" }, Ts = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error",
	role: "alert"
}, Es = {
	key: 1,
	class: "tw:dui-alert tw:dui-alert-success",
	role: "status"
}, Ds = { class: "tw:dui-fieldset tw:md:col-span-2" }, Os = { class: "tw:dui-fieldset" }, ks = { class: "tw:dui-fieldset-legend" }, As = ["label"], js = ["value"], Ms = { class: "tw:dui-fieldset" }, Ns = { class: "tw:dui-fieldset-legend" }, Ps = ["label"], Fs = ["value"], Is = { class: "tw:dui-fieldset" }, Ls = { class: "tw:dui-fieldset" }, Rs = ["disabled"], zs = /* @__PURE__ */ Wn({
	__name: "MultiAttackApp",
	props: {
		attackerName: {},
		attackOptions: {},
		defenderName: {},
		defenseOptions: {},
		initialConfiguration: {},
		resolve: { type: Function }
	},
	setup(e) {
		let t = e, n = Cs();
		n.initialize(t.initialConfiguration);
		let r = Ta(() => o(t.attackOptions)), i = Ta(() => o(t.defenseOptions));
		async function a() {
			n.resolving = !0, n.error = "";
			try {
				n.summary = await t.resolve(n.getConfiguration());
			} catch (e) {
				n.error = e instanceof Error ? e.message : String(e);
			} finally {
				n.resolving = !1;
			}
		}
		function o(e) {
			return Object.entries(e.reduce((e, t) => ((e[t.group] ??= []).push(t), e), {}));
		}
		return (t, o) => (K(), Ui(gs, {
			as: "form",
			width: "full",
			onSubmit: Co(a, ["prevent"])
		}, {
			default: V(() => [
				J("header", null, [o[5] ||= J("h1", { class: "tw:text-2xl tw:font-semibold" }, "Resolve Multiple Attacks", -1), J("p", ws, " Roll one repeated Test from " + A(e.attackerName) + " against one repeated response from " + A(e.defenderName) + ", then post a single compact chat card. ", 1)]),
				L(n).error ? (K(), q("div", Ts, [J("span", null, A(L(n).error), 1)])) : Qi("", !0),
				L(n).summary ? (K(), q("div", Es, [J("span", null, " Posted " + A(L(n).summary.results.length) + " results: " + A(L(n).summary.attackWins) + " attack wins, " + A(L(n).summary.defenseWins) + " defense wins, and " + A(L(n).summary.totalDamage) + " potential damage. ", 1)])) : Qi("", !0),
				Y(hs, {
					size: "sm",
					title: `${e.attackerName} → ${e.defenderName}`,
					treatment: "border"
				}, {
					actions: V(() => [J("button", {
						class: "tw:dui-btn tw:dui-btn-primary tw:dui-btn-sm",
						disabled: L(n).resolving,
						type: "submit"
					}, A(L(n).resolving ? "Resolving…" : "Resolve and Post"), 9, Rs)]),
					default: V(() => [Y(_s, {
						columns: "two",
						gap: "sm"
					}, {
						default: V(() => [
							J("fieldset", Ds, [
								o[6] ||= J("legend", { class: "tw:dui-fieldset-legend" }, "Number of identical attacks", -1),
								o[7] ||= J("label", {
									class: "tw:dui-label",
									for: "multi-attack-count"
								}, "Attacks", -1),
								kn(J("input", {
									id: "multi-attack-count",
									"onUpdate:modelValue": o[0] ||= (e) => L(n).configuration.attacks = e,
									class: "tw:dui-input tw:dui-input-sm tw:w-full",
									max: "100",
									min: "1",
									required: "",
									step: "1",
									type: "number"
								}, null, 512), [[
									_o,
									L(n).configuration.attacks,
									void 0,
									{ number: !0 }
								]]),
								o[8] ||= J("p", { class: "tw:dui-label" }, "Up to 100 opposed Tests can be resolved in one batch.", -1)
							]),
							J("fieldset", Os, [
								J("legend", ks, A(e.attackerName) + " attacks with", 1),
								o[9] ||= J("label", {
									class: "tw:dui-label",
									for: "multi-attack-option"
								}, "Test option", -1),
								kn(J("select", {
									id: "multi-attack-option",
									"onUpdate:modelValue": o[1] ||= (e) => L(n).configuration.attackOptionId = e,
									class: "tw:dui-select tw:dui-select-sm tw:w-full"
								}, [(K(!0), q(W, null, yr(r.value, ([e, t]) => (K(), q("optgroup", {
									key: e,
									label: e
								}, [(K(!0), q(W, null, yr(t, (e) => (K(), q("option", {
									key: e.id,
									value: e.id
								}, A(e.label), 9, js))), 128))], 8, As))), 128))], 512), [[vo, L(n).configuration.attackOptionId]])
							]),
							J("fieldset", Ms, [
								J("legend", Ns, A(e.defenderName) + " responds with", 1),
								o[10] ||= J("label", {
									class: "tw:dui-label",
									for: "multi-defense-option"
								}, "Test option", -1),
								kn(J("select", {
									id: "multi-defense-option",
									"onUpdate:modelValue": o[2] ||= (e) => L(n).configuration.defenseOptionId = e,
									class: "tw:dui-select tw:dui-select-sm tw:w-full"
								}, [(K(!0), q(W, null, yr(i.value, ([e, t]) => (K(), q("optgroup", {
									key: e,
									label: e
								}, [(K(!0), q(W, null, yr(t, (e) => (K(), q("option", {
									key: e.id,
									value: e.id
								}, A(e.label), 9, Fs))), 128))], 8, Ps))), 128))], 512), [[vo, L(n).configuration.defenseOptionId]])
							]),
							J("fieldset", Is, [
								o[11] ||= J("legend", { class: "tw:dui-fieldset-legend" }, "Attacker modifier", -1),
								o[12] ||= J("label", {
									class: "tw:dui-label",
									for: "multi-attack-modifier"
								}, "Modifier", -1),
								kn(J("input", {
									id: "multi-attack-modifier",
									"onUpdate:modelValue": o[3] ||= (e) => L(n).configuration.attackModifier = e,
									class: "tw:dui-input tw:dui-input-sm tw:w-full",
									required: "",
									step: "1",
									type: "number"
								}, null, 512), [[
									_o,
									L(n).configuration.attackModifier,
									void 0,
									{ number: !0 }
								]])
							]),
							J("fieldset", Ls, [
								o[13] ||= J("legend", { class: "tw:dui-fieldset-legend" }, "Defender modifier", -1),
								o[14] ||= J("label", {
									class: "tw:dui-label",
									for: "multi-defense-modifier"
								}, "Modifier", -1),
								kn(J("input", {
									id: "multi-defense-modifier",
									"onUpdate:modelValue": o[4] ||= (e) => L(n).configuration.defenseModifier = e,
									class: "tw:dui-input tw:dui-input-sm tw:w-full",
									required: "",
									step: "1",
									type: "number"
								}, null, 512), [[
									_o,
									L(n).configuration.defenseModifier,
									void 0,
									{ number: !0 }
								]])
							])
						]),
						_: 1
					}), o[15] ||= J("div", {
						class: "tw:dui-alert tw:dui-alert-info",
						role: "note"
					}, [J("span", null, " This is for identical repetitions. WFRP still runs each Test and its normal effects, opposed modifiers, ammunition use, damage, hit location, criticals, and fumbles. ")], -1)]),
					_: 1
				}, 8, ["title"])
			]),
			_: 1
		}));
	}
}), Bs = .5, Vs = .25, Hs = 2.5, Us = .05, Ws = {
	tiny: 10,
	ltl: 5,
	sml: 5,
	avg: 5,
	lrg: 3,
	enor: 1,
	mnst: 1
}, Gs = {
	tiny: "Tiny",
	ltl: "Little",
	sml: "Small",
	avg: "Average",
	lrg: "Large",
	enor: "Enormous",
	mnst: "Monstrous"
}, Ks = {
	tiny: .3,
	ltl: .5,
	sml: .8,
	avg: 1,
	lrg: 2,
	enor: 3,
	mnst: 4
}, qs = {
	tiny: 1,
	ltl: 1,
	sml: 1,
	avg: 1,
	lrg: 2,
	enor: 3,
	mnst: 4
}, Js = {
	tiny: [
		[1, "tiny"],
		[20, "ltl"],
		[40, "sml"],
		[80, "avg"],
		[160, "lrg"],
		[480, "enor"],
		[1920, "mnst"]
	],
	ltl: [
		[1, "ltl"],
		[10, "sml"],
		[20, "avg"],
		[40, "lrg"],
		[120, "enor"],
		[480, "mnst"]
	],
	sml: [
		[1, "sml"],
		[10, "avg"],
		[20, "lrg"],
		[60, "enor"],
		[240, "mnst"]
	],
	avg: [
		[1, "avg"],
		[10, "lrg"],
		[30, "enor"],
		[120, "mnst"]
	],
	lrg: [
		[1, "lrg"],
		[9, "enor"],
		[36, "mnst"]
	],
	enor: [[1, "enor"], [4, "mnst"]],
	mnst: [[1, "mnst"]]
};
function Ys(e, t) {
	if (t === 0) return e;
	let n = e;
	for (let [r, i] of Js[e]) {
		if (t < r) break;
		n = i;
	}
	return n;
}
//#endregion
//#region src/functions/unit/derive/state.ts
function Xs(e, t) {
	let n = e.wounds * e.startingIndividuals, r = Math.min(Math.max(t, 0), n), i = Math.ceil(r / e.wounds), a = Ws[e.size], o = Math.ceil(i / a), s = Math.max(o - 1, 0), c = Ys(e.size, i);
	return {
		additionalRanks: s,
		attacks: i === 0 ? 0 : e.attacks + s,
		currentIndividuals: i,
		currentWounds: r,
		destroyed: i === 0,
		maximumWounds: n,
		rankBonusSL: s,
		rankIncrement: a,
		ranks: o,
		size: c,
		source: e,
		turningCost: Math.min(qs[c], e.movement)
	};
}
//#endregion
//#region src/functions/unit/is-unit-size.ts
var Zs = [
	"tiny",
	"ltl",
	"sml",
	"avg",
	"lrg",
	"enor",
	"mnst"
];
function Qs(e) {
	return typeof e == "string" && Zs.includes(e);
}
//#endregion
//#region src/functions/unit/parse-unit-count.ts
function $s(e) {
	let t = typeof e == "number" ? e : Number(String(e).trim());
	if (!(!Number.isInteger(t) || t < 1)) return t;
}
//#endregion
//#region src/module/unit/document-state.ts
var ec = `flags.${Z}.unit`, tc = 1;
function nc(e) {
	let t = e.flags[Z];
	if (!ac(t)) return;
	let n = t.unit;
	if (!ac(n) || n.schemaVersion !== 1) return;
	let r = n.source;
	if (!ac(r) || !Qs(r.size)) return;
	let i = Number(r.attacks), a = r.individualTokenScale === void 0 ? tc : Number(r.individualTokenScale), o = r.lockRotation, s = Number(r.movement), c = Number(r.wounds), l = r.tokenImage, u = oc(r.tokenGeometry);
	if (!(!Number.isInteger(i) || i < 1 || !Number.isFinite(a) || a < .25 || a > 2.5 || typeof o != "boolean" || !Number.isFinite(s) || s < 0 || !Number.isFinite(c) || c <= 0 || typeof l != "string" || r.tokenGeometry !== void 0 && !u)) return {
		schemaVersion: 1,
		source: {
			attacks: i,
			individualTokenScale: a,
			lockRotation: o,
			movement: s,
			size: r.size,
			...u ? { tokenGeometry: u } : {},
			tokenImage: l,
			wounds: c
		}
	};
}
function rc(e) {
	let t = e.flags[Z];
	return e.type === "trait" && ac(t) && ac(t.unit);
}
function ic(e) {
	return Array.from(e.items).find(rc);
}
function Q(e) {
	let t = ic(e);
	if (!t || t.system.enabled === !1) return;
	let n = nc(t), r = $s(t.system.specification.value);
	if (!(!n || !r)) return Xs({
		...n.source,
		startingIndividuals: r
	}, e.system.status.wounds.value);
}
function ac(e) {
	return typeof e == "object" && !!e;
}
function oc(e) {
	if (!ac(e)) return;
	let t = Number(e.height), n = Number(e.scaleX), r = Number(e.scaleY), i = Number(e.width);
	if (!(!Number.isFinite(t) || t <= 0 || !Number.isFinite(n) || !Number.isFinite(r) || !Number.isFinite(i) || i <= 0)) return {
		height: t,
		scaleX: n,
		scaleY: r,
		width: i
	};
}
//#endregion
//#region src/module/multi-attack/chat.ts
async function sc(e) {
	let t = await foundry.applications.handlebars.renderTemplate(`modules/${Z}/templates/multi-attack/chat-card.hbs`, e);
	await ChatMessage.create({
		content: t,
		flags: { [Z]: { multiAttack: e } },
		speaker: { alias: `${e.attackerName} → ${e.defenderName}` }
	});
}
//#endregion
//#region src/module/multi-attack/options.ts
var cc = {
	ag: "Agility",
	bs: "Ballistic Skill",
	dex: "Dexterity",
	fel: "Fellowship",
	i: "Initiative",
	int: "Intelligence",
	s: "Strength",
	t: "Toughness",
	wp: "Willpower",
	ws: "Weapon Skill"
}, lc = {
	skill: "Skills",
	trait: "Combat Traits",
	weapon: "Weapons"
};
function uc(e) {
	let t = Array.from(e.items).filter(hc).map((e) => ({
		group: lc[e.type] ?? "Other",
		id: `${e.type}:${e.id}`,
		kind: e.type,
		label: e.name
	})).sort(gc), n = Object.entries(mc()).map(([e, t]) => ({
		group: "Characteristics",
		id: `characteristic:${e}`,
		kind: "characteristic",
		label: t
	}));
	return [...t, ...n];
}
function dc(e, t) {
	let [n, r] = t.split(":");
	if (n === "characteristic" && r && r in mc()) return {
		id: t,
		key: r,
		kind: n,
		label: mc()[r] ?? r
	};
	if (!r || ![
		"skill",
		"trait",
		"weapon"
	].includes(n ?? "")) throw Error(`Unsupported Test option: ${t}.`);
	let i = Array.from(e.items).find((e) => e.id === r && e.type === n);
	if (!i || !hc(i)) throw Error(`${e.name} no longer has the selected Test option.`);
	return {
		id: t,
		item: i,
		kind: n,
		label: i.name
	};
}
function fc(e) {
	return (e.find((e) => e.kind === "weapon") ?? e.find((e) => e.kind === "trait") ?? e[0])?.id ?? "";
}
function pc(e) {
	let t = game?.i18n?.localize("NAME.Dodge") ?? "Dodge";
	return (e.find((e) => e.kind === "skill" && e.label === t) ?? e.find((e) => e.kind === "weapon") ?? e.find((e) => e.id === "characteristic:ws") ?? e[0])?.id ?? "";
}
function mc() {
	return game?.wfrp4e?.config.characteristics ?? cc;
}
function hc(e) {
	return e.type === "skill" || e.type === "weapon" || e.type === "trait" && !!e.system.rollable?.value;
}
function gc(e, t) {
	let n = [
		"Weapons",
		"Combat Traits",
		"Skills"
	];
	return n.indexOf(e.group) - n.indexOf(t.group) || e.label.localeCompare(t.label);
}
//#endregion
//#region src/functions/multi-attack/summarize.ts
function _c({ attackerName: e, attackOptionLabel: t, defenderName: n, defenseOptionLabel: r, results: i }) {
	return {
		attackCriticals: vc(i, "attack"),
		attackerName: e,
		attackOptionLabel: t,
		attackWins: i.filter((e) => e.winner === "attacker").length,
		defenseCriticals: vc(i, "defense"),
		defenderName: n,
		defenseOptionLabel: r,
		defenseWins: i.filter((e) => e.winner === "defender").length,
		results: i,
		totalDamage: i.reduce((e, t) => e + (t.damage ?? 0), 0)
	};
}
function vc(e, t) {
	return e.reduce((e, n) => e + n[t].tables.filter((e) => e.key.startsWith("crit")).length, 0);
}
//#endregion
//#region src/module/multi-attack/map-result.ts
function yc(e, t) {
	let n = t.result.winner;
	if (!n) throw Error(`Opposed Test ${e} has no winner.`);
	let r = bc(t.attackerTest), i = bc(t.defenderTest), a = Sc(t.result.damage?.value), o = t.result.hitloc?.value;
	return {
		attack: r,
		defense: i,
		index: e,
		netSL: r.sl - i.sl,
		winner: n,
		...a === void 0 ? {} : { damage: a },
		...o ? { hitLocation: o } : {}
	};
}
function bc(e) {
	let t = e.result;
	return {
		description: t.description ?? "",
		roll: Sc(t.roll) ?? 0,
		sl: Sc(t.SL) ?? 0,
		tables: Object.values(t.tables ?? {}).flatMap(xc),
		target: Sc(t.target) ?? 0
	};
}
function xc(e) {
	return !e.key || !e.label ? [] : [{
		key: e.key,
		label: e.label,
		...Number.isFinite(e.modifier) ? { modifier: e.modifier } : {}
	}];
}
function Sc(e) {
	let t = Number(e);
	return Number.isFinite(t) ? t : void 0;
}
//#endregion
//#region src/module/multi-attack/opposed-test.ts
var Cc = { modifiers: {
	attacker: {
		SL: 0,
		target: 0
	},
	defender: {
		SL: 0,
		target: 0
	},
	message: []
} };
async function wc(e, t) {
	let n = CONFIG.ChatMessage.dataModels.opposed;
	if (!n) throw Error("The WFRP4e opposed Test model is unavailable.");
	let r = new n({ opposedTestData: {
		attackerTestData: e.data,
		defenderTestData: t.data,
		opposeResult: foundry.utils.deepClone(Cc)
	} }).opposedTest;
	if (r.attackerTest.renderRollCard = async () => void 0, r.defenderTest.renderRollCard = async () => void 0, !await r.evaluate() || !r.result.winner) throw Error("WFRP4e could not evaluate an opposed Test.");
	return r;
}
//#endregion
//#region src/module/multi-attack/setup-test.ts
async function Tc({ actor: e, modifier: t, option: n, target: r, type: i }) {
	let a = {
		defending: i === "defense",
		fields: { modifier: t },
		skipDialog: !0,
		skipTargets: i === "defense" || !r
	};
	i === "attack" && r && (a.targets = [r]);
	let o;
	if (n.kind === "characteristic" && n.key ? o = await e.setupCharacteristic(n.key, a) : n.kind === "skill" && n.item ? o = await e.setupSkill(n.item, a) : n.kind === "trait" && n.item ? o = await e.setupTrait(n.item, a) : n.kind === "weapon" && n.item && (o = await e.setupWeapon(n.item, a)), !o) throw Error(`${e.name} could not prepare ${n.label}.`);
	return o.renderRollCard = async () => void 0, o.handleOpposed = async () => void 0, await o.roll(), o;
}
//#endregion
//#region src/module/multi-attack/resolve.ts
async function Ec(e) {
	Oc(e);
	let t = dc(e.attacker, e.attackOptionId), n = dc(e.defender, e.defenseOptionId), r = [];
	for (let i = 1; i <= e.attacks; i += 1) {
		let a = await wc(await Tc({
			actor: e.attacker,
			modifier: e.attackModifier,
			option: t,
			type: "attack",
			...e.target ? { target: e.target } : {}
		}), await Tc({
			actor: e.defender,
			modifier: e.defenseModifier,
			option: n,
			type: "defense"
		}));
		r.push(yc(i, a));
	}
	return _c({
		attackerName: e.attacker.name,
		attackOptionLabel: t.label,
		defenderName: e.defender.name,
		defenseOptionLabel: n.label,
		results: r
	});
}
async function Dc(e) {
	let t = Ac(e.target);
	return Ec({
		attackModifier: e.attackModifier,
		attacker: kc(e.attacker, "attacker"),
		attackOptionId: e.attackOptionId,
		attacks: e.attacks,
		defender: kc(e.defender, "defender"),
		defenseModifier: e.defenseModifier,
		defenseOptionId: e.defenseOptionId,
		...t ? { target: t } : {}
	});
}
function Oc(e) {
	if (!Number.isInteger(e.attacks) || e.attacks < 1 || e.attacks > 100) throw Error("Attacks must be a whole number between 1 and 100.");
	if (!Number.isFinite(e.attackModifier) || !Number.isFinite(e.defenseModifier)) throw Error("Test modifiers must be finite numbers.");
}
function kc(e, t) {
	if (!e || typeof e != "object" || !("items" in e) || !("setupCharacteristic" in e)) throw Error(`A WFRP4e ${t} Actor is required.`);
	return e;
}
function Ac(e) {
	if (!(!e || typeof e != "object" || !("actor" in e) || !("document" in e))) return e;
}
//#endregion
//#region src/module/apps/multi-attack/MultiAttackApplication.ts
var jc = class extends xs {
	static DEFAULT_OPTIONS = {
		id: "fvtt-wfrp-drowsy-content-multi-attack",
		position: {
			height: "auto",
			width: 680
		},
		window: {
			resizable: !0,
			title: "Resolve Multiple Attacks"
		}
	};
	#e;
	constructor(e) {
		super({ id: `fvtt-wfrp-drowsy-content-multi-attack-${e.attacker.id}` }), this.#e = e;
	}
	getVueComponent() {
		return zs;
	}
	getVueProps() {
		let { attacker: e, defender: t, target: n } = this.#e, r = uc(e), i = uc(t);
		if (r.length === 0 || i.length === 0) throw Error("Both Actors need at least one supported Test option.");
		return {
			attackerName: e.name,
			attackOptions: r,
			defenderName: t.name,
			defenseOptions: i,
			initialConfiguration: {
				attackModifier: 0,
				attackOptionId: fc(r),
				attacks: Math.max(1, Q(e)?.attacks ?? 1),
				defenseModifier: 0,
				defenseOptionId: pc(i)
			},
			resolve: async (r) => {
				let i = await Ec({
					...r,
					attacker: e,
					defender: t,
					...n ? { target: n } : {}
				});
				return await sc(i), i;
			}
		};
	}
};
//#endregion
//#region src/module/multi-attack/selection.ts
function Mc(e, t) {
	let n = canvas?.tokens.controlled ?? [], r = Array.from(game?.user?.targets ?? []), i = Nc(e) ?? (n.length === 1 ? Nc(n[0]?.actor) : void 0);
	if (!i) throw Error("Select one attacker token or pass an attacker Actor.");
	let a = Pc(t) ?? (r.length === 1 ? r[0] : void 0), o = Nc(t) ?? a?.actor;
	if (!o) throw Error("Target one defender token or pass a defender Actor.");
	if (i.id === o.id) throw Error("Attacker and defender must be different Actors.");
	return {
		attacker: i,
		defender: o,
		...a ? { target: a } : {}
	};
}
function Nc(e) {
	if (!(!e || typeof e != "object")) return "actor" in e ? Nc(e.actor) : "setupCharacteristic" in e && "items" in e ? e : void 0;
}
function Pc(e) {
	if (!(!e || typeof e != "object" || !("actor" in e) || !("document" in e))) return e;
}
//#endregion
//#region src/module/unit/effect-api.ts
function Fc(e, t) {
	let n = Q(e);
	n && (t.size = n.size);
}
function Ic(e, t) {
	let n = Q(e);
	n && (t.wounds = n.maximumWounds);
}
function Lc(e) {
	let t = e;
	return Uc(t) ? "hidden" : Wc(t) ? "automatic" : Gc(t) ? Kc(t) ? "automatic" : "optional" : "hidden";
}
function Rc(e, t) {
	return !!(Q(e)?.rankBonusSL && Lc(t) !== "hidden");
}
function zc(e, t) {
	return !!(Q(e)?.rankBonusSL && Lc(t) === "automatic");
}
function Bc(e, t) {
	let n = Q(e);
	if (!n || n.rankBonusSL < 1 || Lc(t) === "hidden") return;
	let r = t.fields, i = Number(r.successBonus);
	r.successBonus = (Number.isFinite(i) ? i : 0) + n.rankBonusSL;
}
var Vc = Bc;
function Hc(e) {
	return Q(e);
}
function Uc(e) {
	return !!(e.context?.defending || e.actor?.isOpposing || e.actor?.attacker);
}
function Wc(e) {
	return !!(e.weapon || e.type === "weapon" || e.trait?.system?.rollable?.damage);
}
function Gc(e) {
	return e.type !== "characteristic" && e.type !== "skill" ? !1 : (e.fields.characteristic ?? e.skill?.system?.characteristic?.value ?? e.skill?.system?.characteristic?.key ?? e.characteristic) === "fel";
}
function Kc(e) {
	if (e.type !== "skill") return !1;
	let t = (typeof game > "u" ? void 0 : game?.i18n?.localize("NAME.Leadership")) || "Leadership";
	return [e.skill?.name, e.skill?.baseName].some((e) => e?.localeCompare(t, void 0, { sensitivity: "base" }) === 0);
}
//#endregion
//#region src/module/api/create-module-api.ts
function qc() {
	return {
		multiAttack: {
			getOptions(e) {
				return uc(e);
			},
			async open(e, t) {
				await new jc(Mc(e, t)).render(!0);
			},
			postSummary: sc,
			resolve: Dc
		},
		async openDemoComponents() {
			await new Ss().render(!0);
		},
		openPreviewNotice() {
			console.log("WFRP4e Drowsy's Content API is available.");
		},
		unit: {
			applyAttackBonus: Vc,
			applyRankBonus: Bc,
			applySize: Fc,
			applyWounds: Ic,
			getState: Hc,
			shouldActivateRankBonus: zc,
			shouldShowRankBonus: Rc
		}
	};
}
//#endregion
//#region src/module/api/register-module-api.ts
function Jc() {
	if (!game) throw Error("Foundry game global is unavailable during module API registration.");
	let e = game.modules.get(Z);
	if (!e) throw Error(`Foundry module registry entry was not found for ${Z}.`);
	e.api = qc();
}
//#endregion
//#region src/functions/unit/validate-unit-configuration.ts
function Yc(e) {
	let t = [];
	return (!Number.isInteger(e.startingIndividuals) || e.startingIndividuals < 1) && t.push("Starting individuals must be a positive whole number."), (!Number.isFinite(e.sourceWounds) || e.sourceWounds <= 0) && t.push("Source Wounds must be greater than zero."), (!Number.isInteger(e.sourceAttacks) || e.sourceAttacks < 1) && t.push("Source Attacks must be a positive whole number."), (!Number.isFinite(e.sourceMovement) || e.sourceMovement < 0) && t.push("Source Movement cannot be negative."), Qs(e.sourceSize) || t.push("Source Size is invalid."), (!Number.isFinite(e.individualTokenScale) || e.individualTokenScale < .25 || e.individualTokenScale > 2.5) && t.push("Individual token scale must be between 25% and 250%."), t;
}
//#endregion
//#region src/functions/unit/derive/wounds-after-reconfiguration.ts
function Xc(e, t, n) {
	let r = Math.max(e - t, 0);
	return Math.max(n - r, 0);
}
//#endregion
//#region src/functions/unit/derive/token-geometry.ts
function Zc(e) {
	let t = Ks[e];
	return t < 1 ? {
		height: 1,
		scale: t,
		width: 1
	} : {
		height: t,
		scale: 1,
		width: t
	};
}
//#endregion
//#region src/functions/unit/derive/source-token-geometry.ts
function Qc(e) {
	let t = e.source.tokenGeometry, n = Zc(e.source.size);
	return {
		height: t?.height ?? n.height,
		lockRotation: e.source.lockRotation,
		scaleX: t?.scaleX ?? n.scale,
		scaleY: t?.scaleY ?? n.scale,
		width: t?.width ?? n.width
	};
}
//#endregion
//#region src/module/unit/token-geometry.ts
var $c = "fvtt-wfrp-drowsy-content.unitTokenSync";
async function el(e) {
	let t = Q(e);
	if (!t) return;
	let n = Zc(t.size);
	await nl(e, {
		height: n.height,
		lockRotation: !1,
		"texture.scaleX": n.scale,
		"texture.scaleY": n.scale,
		width: n.width
	});
}
async function tl(e, t) {
	let n = Qc(t);
	await nl(e, {
		height: n.height,
		lockRotation: n.lockRotation,
		"texture.scaleX": n.scaleX,
		"texture.scaleY": n.scaleY,
		width: n.width
	});
}
async function nl(e, t) {
	if (e.isToken && e.token) {
		await al(e.token, t);
		return;
	}
	await Promise.all(e.getActiveTokens().map((e) => al(e.document, t))), await e.update(Object.fromEntries(Object.entries(t).map(([e, t]) => [`prototypeToken.${e}`, t])), { [$c]: !0 });
}
function rl(e) {
	return !!e[$c];
}
async function il(e, t, n, r) {
	game?.user?.id !== r || rl(n) || !ol(t) || await el(e);
}
async function al(e, t) {
	let n = t["texture.scaleX"];
	e.width === t.width && e.height === t.height && e.lockRotation === t.lockRotation && e.texture.scaleX === n && e.texture.scaleY === t["texture.scaleY"] || await e.update(t);
}
function ol(e) {
	if ("system.status.wounds.value" in e) return !0;
	let t = e.system;
	if (typeof t != "object" || !t) return !1;
	let n = t.status;
	if (typeof n != "object" || !n) return !1;
	let r = n.wounds;
	return typeof r == "object" && !!r && "value" in r;
}
//#endregion
//#region src/module/unit/lifecycle.ts
var sl = `${Z}.unitUpdate`, cl = `${Z}.previousUnitConfiguration`, ll = `${Z}.managedUnitUpdate`;
function ul(e) {
	if (!rc(e) || !e.parent) return;
	let t = e.parent;
	if (t.type !== "creature" && t.type !== "npc") return bl("The Unit trait can only be added to Creature and NPC actors."), !1;
	if (ic(t)) return bl(`${t.name} already has a Unit trait.`), !1;
	let n = $s(e.system.specification.value);
	if (!n) return bl("A Unit must begin with a positive whole number of individuals."), !1;
	let r = t.system.details.size.value;
	if (!Qs(r)) return bl(`Cannot create a Unit from unsupported source Size “${r}”.`), !1;
	let i = t.isToken && t.token ? t.token : t.prototypeToken, a = Number(t.system.details.move.value), o = Number(t.system.status.wounds.max), s = Yc({
		individualTokenScale: Bs,
		sourceAttacks: 1,
		sourceMovement: a,
		sourceSize: r,
		sourceWounds: o,
		startingIndividuals: n
	});
	if (s.length > 0) return bl(`Cannot form this Unit. ${s.join(" ")}`), !1;
	let c = {
		schemaVersion: 1,
		source: {
			attacks: 1,
			individualTokenScale: Bs,
			lockRotation: i.lockRotation,
			movement: a,
			size: r,
			tokenGeometry: {
				height: i.height,
				scaleX: i.texture.scaleX,
				scaleY: i.texture.scaleY,
				width: i.width
			},
			tokenImage: i.texture.src,
			wounds: o
		}
	};
	e.updateSource({ [ec]: c });
}
async function dl(e, t) {
	if (!rc(e) || !e.parent || !yl(t)) return;
	let n = nc(e), r = $s(e.system.specification.value);
	if (!n || !r) return;
	let i = n.source.wounds * r;
	await e.parent.update({
		"system.status.wounds.max": i,
		"system.status.wounds.value": i,
		"prototypeToken.lockRotation": !1
	}, { [sl]: !0 }), await el(e.parent), xl(`${e.parent.name} formed a Unit of ${r} individuals.`);
}
function fl(e, t, n) {
	if (!rc(e)) return;
	if (vl(t)) return bl("A Unit cannot be disabled. Delete the trait to restore its source creature."), !1;
	let r = _l(t);
	if (!(r === void 0 && !ml(t))) {
		if (r !== void 0 && !$s(r)) return bl("A Unit must contain a positive whole number of starting individuals."), !1;
		n[cl] = {
			count: $s(e.system.specification.value),
			stored: nc(e)
		};
	}
}
async function pl(e, t, n, r) {
	if (!rc(e) || !e.parent || !yl(r) || n[ll] || _l(t) === void 0 && !ml(t)) return;
	let i = n[cl];
	if (!hl(i)) return;
	let a = i.count, o = $s(e.system.specification.value), s = nc(e);
	if (!o || !s) return;
	let c = i.stored.source.wounds * a, l = s.source.wounds * o;
	await e.parent.update({
		"system.status.wounds.max": l,
		"system.status.wounds.value": Xc(c, e.parent.system.status.wounds.value, l)
	}, { [sl]: !0 }), await el(e.parent);
}
function ml(e) {
	if (ec in e) return !0;
	let t = e.flags;
	if (typeof t != "object" || !t) return !1;
	let n = t[Z];
	return typeof n == "object" && !!n && "unit" in n;
}
function hl(e) {
	if (typeof e != "object" || !e) return !1;
	let t = e;
	return !!(t.count && t.stored);
}
async function gl(e, t) {
	if (!rc(e) || !e.parent || !yl(t)) return;
	let n = nc(e);
	n && (await e.parent.update({
		"system.status.wounds.max": n.source.wounds,
		"system.status.wounds.value": Math.min(e.parent.system.status.wounds.value, n.source.wounds)
	}, { [sl]: !0 }), await tl(e.parent, n));
}
function _l(e) {
	if ("system.specification.value" in e) return e["system.specification.value"];
	let t = e.system;
	if (typeof t != "object" || !t) return;
	let n = t.specification;
	if (!(typeof n != "object" || !n)) return n.value;
}
function vl(e) {
	if (e["system.disabled"] === !0 || e["system.enabled"] === !1) return !0;
	let t = e.system;
	if (typeof t != "object" || !t) return !1;
	let n = t;
	return n.disabled === !0 || n.enabled === !1;
}
function yl(e) {
	return game?.user?.id === e;
}
function bl(e) {
	ui.notifications.error(e);
}
function xl(e) {
	ui.notifications.info(e);
}
//#endregion
//#region src/functions/unit/derive/formation-layout.ts
function Sl({ height: e, individuals: t, startX: n, startY: r, width: i }) {
	if (t < 1) return [];
	let a = Math.ceil(Math.sqrt(t)), o = Math.ceil(t / a), s = i / a, c = e / o;
	return Array.from({ length: t }, (e, t) => {
		let i = t % a, o = Math.floor(t / a);
		return {
			column: i,
			row: o,
			x: n + (i + .5) * s,
			y: r + (o + .5) * c
		};
	});
}
//#endregion
//#region src/functions/unit/derive/individual-token-size.ts
function Cl({ availableHeight: e, availableWidth: t, currentSize: n, imageHeight: r, imageWidth: i, source: a }) {
	let o = Zc(a.size), s = (a.tokenGeometry?.width ?? o.width) * Math.abs(a.tokenGeometry?.scaleX ?? o.scale), c = (a.tokenGeometry?.height ?? o.height) * Math.abs(a.tokenGeometry?.scaleY ?? o.scale), l = Zc(n), u = l.width * l.scale, d = l.height * l.scale, f = s / u * t * a.individualTokenScale, p = c / d * e * a.individualTokenScale, m = i / r;
	return m > f / p ? {
		height: f / m,
		width: f
	} : {
		height: p,
		width: p * m
	};
}
//#endregion
//#region src/module/unit/token-mosaic.ts
var $ = 512, wl = 26, Tl = 22, El = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap();
async function Ol(e) {
	let t = e.actor ? Q(e.actor) : void 0;
	if (!t) {
		Al(e);
		return;
	}
	let n = Pl(t), r = El.get(e);
	if (r?.key === n) {
		e.mesh.texture = r.texture;
		return;
	}
	let i = (Dl.get(e) ?? 0) + 1;
	Dl.set(e, i);
	try {
		let a = await Ml(t);
		if (Dl.get(e) !== i) {
			a.destroy(!0);
			return;
		}
		let o = r?.originalMeshTexture ?? e.mesh.texture;
		jl(e), e.mesh.texture = a, El.set(e, {
			generation: i,
			key: n,
			originalMeshTexture: o,
			texture: a
		});
	} catch (n) {
		console.error(`Could not render Unit token mosaic from ${t.source.tokenImage}.`, n), Dl.get(e) === i && jl(e);
	}
}
async function kl(e) {
	await Promise.all(e.getActiveTokens().map(Ol));
}
function Al(e) {
	Dl.set(e, (Dl.get(e) ?? 0) + 1), jl(e);
}
function jl(e) {
	let t = El.get(e);
	t && (e.mesh.texture = t.originalMeshTexture, t.texture.destroy(!0), El.delete(e));
}
async function Ml(e) {
	let t = await zl(e.source.tokenImage), n = document.createElement("canvas");
	n.width = $, n.height = $;
	let r = n.getContext("2d");
	if (!r) throw Error("The browser did not provide a 2D canvas context.");
	return Fl(r), e.currentIndividuals > 0 ? Nl(r, t, e) : Ll(r), Il(r), Rl(r, e.currentIndividuals), PIXI.Texture.from(n);
}
function Nl(e, t, n) {
	let r = n.currentIndividuals, i = $ - Tl * 2, a = $ - Tl * 2 - wl, o = Sl({
		height: a,
		individuals: r,
		startX: Tl,
		startY: 48,
		width: i
	}), s = Cl({
		availableHeight: a,
		availableWidth: i,
		currentSize: n.size,
		imageHeight: t.naturalHeight,
		imageWidth: t.naturalWidth,
		source: n.source
	});
	for (let n of o) e.drawImage(t, n.x - s.width / 2, n.y - s.height / 2, Math.max(s.width, .5), Math.max(s.height, .5));
}
function Pl(e) {
	let t = e.source.tokenGeometry;
	return [
		e.source.tokenImage,
		e.currentIndividuals,
		e.size,
		e.source.size,
		e.source.individualTokenScale,
		t?.width,
		t?.height,
		t?.scaleX,
		t?.scaleY
	].join("|");
}
function Fl(e) {
	e.fillStyle = "rgba(33, 24, 19, 0.82)", e.fillRect(0, 0, $, $), e.strokeStyle = "rgba(217, 164, 79, 0.9)", e.lineWidth = 8, e.strokeRect(8, 8, $ - 16, $ - 16);
}
function Il(e) {
	e.fillStyle = "#d9a44f", e.beginPath(), e.moveTo($ / 2, 8), e.lineTo($ / 2 - 24, 38), e.lineTo(280, 38), e.closePath(), e.fill();
}
function Ll(e) {
	e.strokeStyle = "#782e22", e.lineCap = "round", e.lineWidth = 38, e.beginPath(), e.moveTo(130, 130), e.lineTo(382, 382), e.moveTo(382, 130), e.lineTo(130, 382), e.stroke();
}
function Rl(e, t) {
	e.fillStyle = "rgba(33, 24, 19, 0.9)", e.fillRect($ - 114, $ - 60, 94, 40), e.fillStyle = "#f1e1ce", e.font = "bold 28px sans-serif", e.textAlign = "right", e.textBaseline = "middle", e.fillText(String(t), $ - 30, $ - 40);
}
function zl(e) {
	return new Promise((t, n) => {
		let r = new Image();
		r.crossOrigin = "anonymous", r.addEventListener("load", () => t(r), { once: !0 }), r.addEventListener("error", () => n(/* @__PURE__ */ Error(`Unable to load ${e}.`)), { once: !0 }), r.src = e;
	});
}
//#endregion
//#region src/module/unit/register-hooks.ts
function Bl() {
	Hooks.on("preCreateItem", (...e) => ul(e[0])), Hooks.on("createItem", (...e) => dl(e[0], e[3])), Hooks.on("preUpdateItem", (...e) => fl(e[0], e[1], e[2])), Hooks.on("updateItem", (...e) => pl(e[0], e[1], e[2], e[3])), Hooks.on("deleteItem", (...e) => gl(e[0], e[2])), Hooks.on("updateActor", (...e) => il(e[0], e[1], e[2], e[3])), Hooks.on("refreshToken", (...e) => Ol(e[0])), Hooks.on("destroyToken", (...e) => Al(e[0]));
}
//#endregion
//#region src/functions/unit/derive/individual-adjustment.ts
function Vl(e, t, n, r) {
	return Math.min(Math.max(e + t * r, 0), n);
}
//#endregion
//#region src/functions/unit/map-unit-sheet-context.ts
function Hl(e) {
	return e ? {
		active: !0,
		attacks: e.attacks,
		canKillIndividual: e.currentIndividuals > 0,
		canReviveIndividual: e.currentIndividuals < e.source.startingIndividuals,
		currentIndividuals: e.currentIndividuals,
		currentWounds: e.currentWounds,
		destroyed: e.destroyed,
		maximumWounds: e.maximumWounds,
		rankBonusSL: e.rankBonusSL,
		ranks: e.ranks,
		size: Gs[e.size],
		sourceAttacks: e.source.attacks,
		sourceMovement: e.source.movement,
		sourceSize: Gs[e.source.size],
		sourceWounds: e.source.wounds,
		startingIndividuals: e.source.startingIndividuals,
		turningCost: e.turningCost
	} : { active: !1 };
}
//#endregion
//#region src/state/apps/unit-manager/unit-manager-store.ts
var Ul = cs("unit-manager", () => {
	let e = /* @__PURE__ */ Kt(), t = /* @__PURE__ */ Kt(""), n = /* @__PURE__ */ Kt(!1), r = /* @__PURE__ */ It({
		individualTokenScale: Bs,
		sourceAttacks: 1,
		sourceMovement: 4,
		sourceSize: "avg",
		sourceWounds: 1,
		startingIndividuals: 1
	}), i = Ta(() => e.value ? e.value.currentWounds / e.value.maximumWounds * 100 : 0);
	function a(n) {
		e.value = n, r.individualTokenScale = n.source.individualTokenScale, r.sourceAttacks = n.source.attacks, r.sourceMovement = n.source.movement, r.sourceSize = n.source.size, r.sourceWounds = n.source.wounds, r.startingIndividuals = n.source.startingIndividuals, t.value = "";
	}
	function o() {
		return { ...r };
	}
	return {
		configuration: r,
		error: t,
		getConfiguration: o,
		initialize: a,
		saving: n,
		unit: e,
		woundPercentage: i
	};
}), Wl = { class: "tw:text-2xl tw:font-semibold" }, Gl = {
	key: 0,
	class: "tw:dui-alert tw:dui-alert-error",
	role: "alert"
}, Kl = {
	key: 1,
	class: "tw:dui-alert tw:dui-alert-error",
	role: "alert"
}, ql = { class: "tw:dui-stats tw:dui-stats-horizontal tw:w-full" }, Jl = { class: "tw:dui-stat" }, Yl = { class: "tw:dui-stat-value" }, Xl = { class: "tw:dui-stat-desc" }, Zl = { class: "tw:dui-stat" }, Ql = { class: "tw:dui-stat-value" }, $l = { class: "tw:dui-stat-desc" }, eu = { class: "tw:dui-stat" }, tu = { class: "tw:dui-stat-value" }, nu = { class: "tw:dui-stat-desc" }, ru = { class: "tw:text-lg tw:font-semibold" }, iu = { class: "tw:text-lg tw:font-semibold" }, au = { class: "tw:text-lg tw:font-semibold" }, ou = ["value"], su = { class: "tw:dui-fieldset" }, cu = { class: "tw:dui-fieldset" }, lu = ["value"], uu = { class: "tw:dui-fieldset" }, du = { class: "tw:dui-fieldset" }, fu = { class: "tw:dui-fieldset" }, pu = { class: "tw:dui-fieldset tw:md:col-span-2" }, mu = { class: "tw:flex tw:items-center tw:gap-3" }, hu = [
	"max",
	"min",
	"step"
], gu = { class: "tw:w-14 tw:text-right tw:font-semibold tw:tabular-nums" }, _u = ["disabled"], vu = /* @__PURE__ */ Wn({
	__name: "UnitManagerApp",
	props: {
		actorName: {},
		initialState: {},
		save: { type: Function }
	},
	setup(e) {
		let t = e, n = Ul();
		n.initialize(t.initialState);
		let r = Object.entries(Gs), i = Ta(() => n.unit), a = Ta(() => Math.round(n.configuration.individualTokenScale * 100));
		async function o() {
			n.saving = !0, n.error = "";
			try {
				n.initialize(await t.save(n.getConfiguration()));
			} catch (e) {
				n.error = e instanceof Error ? e.message : String(e);
			} finally {
				n.saving = !1;
			}
		}
		return (t, s) => i.value ? (K(), Ui(gs, {
			key: 0,
			as: "form",
			width: "full",
			onSubmit: Co(o, ["prevent"])
		}, {
			default: V(() => [
				J("header", null, [J("h1", Wl, A(e.actorName) + " Unit", 1), s[6] ||= J("p", { class: "tw:text-sm tw:opacity-75" }, " Current values respond to Wounds. Source values remain fixed until you save changes here. ", -1)]),
				i.value.destroyed ? (K(), q("div", Gl, [...s[7] ||= [J("span", null, "This Unit has no remaining individuals and is destroyed.", -1)]])) : Qi("", !0),
				L(n).error ? (K(), q("div", Kl, [J("span", null, A(L(n).error), 1)])) : Qi("", !0),
				J("div", ql, [
					J("div", Jl, [
						s[8] ||= J("div", { class: "tw:dui-stat-title" }, "Individuals", -1),
						J("div", Yl, A(i.value.currentIndividuals), 1),
						J("div", Xl, "of " + A(i.value.source.startingIndividuals), 1)
					]),
					J("div", Zl, [
						s[9] ||= J("div", { class: "tw:dui-stat-title" }, "Ranks", -1),
						J("div", Ql, A(i.value.ranks), 1),
						J("div", $l, A(i.value.rankIncrement) + " individuals each", 1)
					]),
					J("div", eu, [
						s[10] ||= J("div", { class: "tw:dui-stat-title" }, "Attacks", -1),
						J("div", tu, A(i.value.attacks), 1),
						J("div", nu, " +" + A(i.value.rankBonusSL) + " SL after successful eligible Tests ", 1)
					])
				]),
				Y(hs, {
					size: "sm",
					title: "Current formation",
					treatment: "border"
				}, {
					default: V(() => [
						Y(_s, {
							columns: "three",
							gap: "sm"
						}, {
							default: V(() => [
								J("div", null, [s[11] ||= J("div", { class: "tw:text-xs tw:uppercase tw:opacity-60" }, "Wounds", -1), J("div", ru, A(i.value.currentWounds) + " / " + A(i.value.maximumWounds), 1)]),
								J("div", null, [s[12] ||= J("div", { class: "tw:text-xs tw:uppercase tw:opacity-60" }, "Unit Size", -1), J("div", iu, A(L(Gs)[i.value.size]), 1)]),
								J("div", null, [s[13] ||= J("div", { class: "tw:text-xs tw:uppercase tw:opacity-60" }, "Turning Cost", -1), J("div", au, A(i.value.turningCost) + " Movement", 1)])
							]),
							_: 1
						}),
						J("progress", {
							class: "tw:dui-progress tw:w-full",
							max: 100,
							value: L(n).woundPercentage
						}, null, 8, ou),
						s[14] ||= J("p", { class: "tw:text-xs tw:opacity-70" }, " Change current Wounds on the actor sheet. A normal 180° turn costs twice the displayed Turning Cost; Directed Manoeuvre can reduce it to one cost. Movement spending, manoeuvre Tests, Attacks used, and flank or rear bonuses remain manual. ", -1)
					]),
					_: 1
				}),
				Y(hs, {
					size: "sm",
					title: "Recorded source values",
					treatment: "border"
				}, {
					actions: V(() => [J("button", {
						class: "tw:dui-btn tw:dui-btn-primary tw:dui-btn-sm",
						disabled: L(n).saving
					}, A(L(n).saving ? "Saving…" : "Save Unit"), 9, _u)]),
					default: V(() => [Y(_s, {
						columns: "two",
						gap: "sm"
					}, {
						default: V(() => [
							J("fieldset", su, [s[15] ||= J("legend", { class: "tw:dui-fieldset-legend" }, "Starting individuals", -1), kn(J("input", {
								"onUpdate:modelValue": s[0] ||= (e) => L(n).configuration.startingIndividuals = e,
								class: "tw:dui-input tw:dui-input-sm tw:w-full",
								min: "1",
								required: "",
								step: "1",
								type: "number"
							}, null, 512), [[
								_o,
								L(n).configuration.startingIndividuals,
								void 0,
								{ number: !0 }
							]])]),
							J("fieldset", cu, [s[16] ||= J("legend", { class: "tw:dui-fieldset-legend" }, "Source Size", -1), kn(J("select", {
								"onUpdate:modelValue": s[1] ||= (e) => L(n).configuration.sourceSize = e,
								class: "tw:dui-select tw:dui-select-sm tw:w-full"
							}, [(K(!0), q(W, null, yr(L(r), ([e, t]) => (K(), q("option", {
								key: e,
								value: e
							}, A(t), 9, lu))), 128))], 512), [[vo, L(n).configuration.sourceSize]])]),
							J("fieldset", uu, [s[17] ||= J("legend", { class: "tw:dui-fieldset-legend" }, "Source Wounds", -1), kn(J("input", {
								"onUpdate:modelValue": s[2] ||= (e) => L(n).configuration.sourceWounds = e,
								class: "tw:dui-input tw:dui-input-sm tw:w-full",
								min: "0.01",
								required: "",
								step: "any",
								type: "number"
							}, null, 512), [[
								_o,
								L(n).configuration.sourceWounds,
								void 0,
								{ number: !0 }
							]])]),
							J("fieldset", du, [
								s[18] ||= J("legend", { class: "tw:dui-fieldset-legend" }, "Source Attacks", -1),
								kn(J("input", {
									"onUpdate:modelValue": s[3] ||= (e) => L(n).configuration.sourceAttacks = e,
									class: "tw:dui-input tw:dui-input-sm tw:w-full",
									min: "1",
									required: "",
									step: "1",
									type: "number"
								}, null, 512), [[
									_o,
									L(n).configuration.sourceAttacks,
									void 0,
									{ number: !0 }
								]]),
								s[19] ||= J("p", { class: "tw:dui-label" }, "WFRP has no native Attacks field, so Unit records it here.", -1)
							]),
							J("fieldset", fu, [s[20] ||= J("legend", { class: "tw:dui-fieldset-legend" }, "Source Movement", -1), kn(J("input", {
								"onUpdate:modelValue": s[4] ||= (e) => L(n).configuration.sourceMovement = e,
								class: "tw:dui-input tw:dui-input-sm tw:w-full",
								min: "0",
								required: "",
								step: "any",
								type: "number"
							}, null, 512), [[
								_o,
								L(n).configuration.sourceMovement,
								void 0,
								{ number: !0 }
							]])]),
							J("fieldset", pu, [
								s[21] ||= J("legend", { class: "tw:dui-fieldset-legend" }, "Individual token scale", -1),
								J("div", mu, [kn(J("input", {
									"onUpdate:modelValue": s[5] ||= (e) => L(n).configuration.individualTokenScale = e,
									"aria-label": "Individual token scale",
									class: "tw:dui-range tw:w-full",
									max: L(Hs),
									min: L(Vs),
									step: L(Us),
									type: "range"
								}, null, 8, hu), [[
									_o,
									L(n).configuration.individualTokenScale,
									void 0,
									{ number: !0 }
								]]), J("output", gu, A(a.value) + "% ", 1)]),
								s[22] ||= J("p", { class: "tw:dui-label" }, " 100% matches the source token’s recorded grid scale. Increase it for larger, overlapping individuals; decrease it for a clearer formation. ", -1)
							])
						]),
						_: 1
					})]),
					_: 1
				})
			]),
			_: 1
		})) : Qi("", !0);
	}
});
//#endregion
//#region src/module/unit/save-configuration.ts
async function yu(e, t) {
	let n = Yc(t);
	if (n.length > 0) throw Error(n.join(" "));
	let r = ic(e);
	if (!r) throw Error(`${e.name} does not have a Unit trait.`);
	let i = nc(r), a = Q(e);
	if (!i || !a) throw Error(`${e.name} has not initialized its Unit source values.`);
	let o = {
		schemaVersion: 1,
		source: {
			attacks: t.sourceAttacks,
			individualTokenScale: t.individualTokenScale,
			lockRotation: i.source.lockRotation,
			movement: t.sourceMovement,
			size: t.sourceSize,
			tokenImage: i.source.tokenImage,
			wounds: t.sourceWounds,
			...i.source.tokenGeometry ? { tokenGeometry: i.source.tokenGeometry } : {}
		}
	}, s = t.sourceWounds * t.startingIndividuals, c = Xc(a.maximumWounds, e.system.status.wounds.value, s);
	await r.update({
		[ec]: o,
		"system.specification.value": String(t.startingIndividuals)
	}, { [ll]: !0 }), await e.update({
		"system.status.wounds.max": s,
		"system.status.wounds.value": c
	});
	let l = Q(e);
	if (!l) throw Error(`Could not prepare ${e.name}'s updated Unit state.`);
	return await kl(e), l;
}
//#endregion
//#region src/module/apps/unit-manager/UnitManagementApplication.ts
var bu = class extends xs {
	static DEFAULT_OPTIONS = {
		id: "fvtt-wfrp-drowsy-content-unit-manager",
		position: {
			height: "auto",
			width: 620
		},
		window: {
			resizable: !0,
			title: "Unit Management"
		}
	};
	#e;
	constructor(e) {
		super({ id: `fvtt-wfrp-drowsy-content-unit-manager-${e.id}` }), this.#e = e;
	}
	getVueComponent() {
		return vu;
	}
	getVueProps() {
		let e = Q(this.#e);
		if (!e) throw Error(`${this.#e.name} does not have an initialized Unit trait.`);
		return {
			actorName: this.#e.name,
			initialState: e,
			save: (e) => yu(this.#e, e)
		};
	}
};
//#endregion
//#region src/module/unit/actor-sheet.ts
function xu(e, t) {
	let n = class extends e {
		static DEFAULT_OPTIONS = {
			actions: {
				killIndividual: this.killIndividual,
				manageUnit: this.manageUnit,
				multiAttack: this.multiAttack,
				reviveIndividual: this.reviveIndividual
			},
			classes: ["fvtt-wfrp-drowsy-content-unit-sheet"]
		};
		static PARTS = {
			...e.PARTS,
			unit: {
				scrollable: [""],
				template: "modules/fvtt-wfrp-drowsy-content/templates/unit/unit-sheet.hbs"
			}
		};
		static TABS = {
			...e.TABS,
			unit: {
				group: "primary",
				id: "unit",
				label: "Unit"
			}
		};
		async _prepareContext(e) {
			let t = await super._prepareContext(e);
			return t.unit = Hl(Q(this.actor)), t;
		}
		static async manageUnit() {
			await new bu(this.actor).render(!0);
		}
		static async multiAttack() {
			try {
				await new jc(Mc(this.actor)).render(!0);
			} catch (e) {
				ui.notifications.error(e instanceof Error ? e.message : String(e));
			}
		}
		static async killIndividual() {
			await Su(this.actor, -1);
		}
		static async reviveIndividual() {
			await Su(this.actor, 1);
		}
	};
	return Object.defineProperty(n, "name", {
		configurable: !0,
		value: t
	}), n;
}
async function Su(e, t) {
	let n = Q(e);
	if (!n) return;
	let r = Vl(n.currentWounds, n.source.wounds, n.maximumWounds, t);
	r !== n.currentWounds && (await e.update({ "system.status.wounds.value": r }), await kl(e));
}
//#endregion
//#region src/module/unit/register-sheets.ts
function Cu() {
	if (!game) throw Error("Cannot register Unit sheets before the game runtime is available.");
	let e = game, t = foundry.applications.apps.DocumentSheetConfig, n = CONFIG.Actor.documentClass;
	t.registerSheet(n, Z, xu(e.wfrp4e.apps.ActorSheetWFRP4eCreature, "DrowsyUnitCreatureSheet"), {
		label: "Unit Creature Sheet",
		makeDefault: !1,
		types: ["creature"]
	}), t.registerSheet(n, Z, xu(e.wfrp4e.apps.ActorSheetWFRP4eNPC, "DrowsyUnitNpcSheet"), {
		label: "Unit NPC Sheet",
		makeDefault: !1,
		types: ["npc"]
	});
}
//#endregion
//#region src/module/hooks/register-module-hooks.ts
function wu() {
	Bl(), Hooks.once("init", () => {
		Jc(), Cu();
	});
}
//#endregion
//#region src/main.ts
wu();
//#endregion

//# sourceMappingURL=fvtt-wfrp-drowsy-content.mjs.map