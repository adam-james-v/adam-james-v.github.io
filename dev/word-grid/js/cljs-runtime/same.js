goog.provide('same');
/**
 * Compare one or more values to an expected value, returning true if they are the same-ish.
 *   The values can be numbers:
 *   ```klipse
 *   (let [two (Math/pow (Math/sqrt 2) 2)]
 *  [(== 2 two) (ish? 2 two)])
 *   ```
 *   or data structures:
 *   ```klipse
 *   (ish? {:a 1 :b [1.99999999999999 3]}
 *      {:a 1.00000000000001 :b [2 3.0]})
 *   ```
 *   you can also compare more than one value to the expected value:
 *   ```klipse
 *   (ish? 1 1.0 0.99999999999999 1.00000000000001 1)
 *   ```
 */
same.ish_QMARK_ = (function same$ish_QMARK_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37035 = arguments.length;
var i__4819__auto___37036 = (0);
while(true){
if((i__4819__auto___37036 < len__4818__auto___37035)){
args__4824__auto__.push((arguments[i__4819__auto___37036]));

var G__37037 = (i__4819__auto___37036 + (1));
i__4819__auto___37036 = G__37037;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return same.ish_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(same.ish_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (expected,actuals){
if(cljs.core.truth_(cljs.core.not_empty(actuals))){
} else {
throw (new Error("Assert failed: (not-empty actuals)"));
}

return cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(same.ish.ish,expected),actuals);
}));

(same.ish_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(same.ish_QMARK_.cljs$lang$applyTo = (function (seq36985){
var G__36986 = cljs.core.first(seq36985);
var seq36985__$1 = cljs.core.next(seq36985);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36986,seq36985__$1);
}));

/**
 * Compare a numeric value to zero, returning true if close.
 *   ```klipse
 *   (zeroish? 0.0000000001
 *          :scale 1e6)
 *   ```
 */
same.zeroish_QMARK_ = (function same$zeroish_QMARK_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37038 = arguments.length;
var i__4819__auto___37039 = (0);
while(true){
if((i__4819__auto___37039 < len__4818__auto___37038)){
args__4824__auto__.push((arguments[i__4819__auto___37039]));

var G__37040 = (i__4819__auto___37039 + (1));
i__4819__auto___37039 = G__37040;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return same.zeroish_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(same.zeroish_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (val,p__37009){
var map__37010 = p__37009;
var map__37010__$1 = cljs.core.__destructure_map(map__37010);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37010__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1000.0);
return same.compare.near_zero(val,scale);
}));

(same.zeroish_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(same.zeroish_QMARK_.cljs$lang$applyTo = (function (seq36995){
var G__36996 = cljs.core.first(seq36995);
var seq36995__$1 = cljs.core.next(seq36995);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36996,seq36995__$1);
}));

/**
 * Compare a numeric value to zero, returning true if not close. Equivalent to `(not (zeroish? ...))`.
 *   ```klipse
 *   (not-zeroish? 3 :scale 1e6)
 *   ```
 */
same.not_zeroish_QMARK_ = (function same$not_zeroish_QMARK_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37057 = arguments.length;
var i__4819__auto___37058 = (0);
while(true){
if((i__4819__auto___37058 < len__4818__auto___37057)){
args__4824__auto__.push((arguments[i__4819__auto___37058]));

var G__37059 = (i__4819__auto___37058 + (1));
i__4819__auto___37058 = G__37059;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return same.not_zeroish_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(same.not_zeroish_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (val,p__37016){
var map__37020 = p__37016;
var map__37020__$1 = cljs.core.__destructure_map(map__37020);
var scale = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37020__$1,new cljs.core.Keyword(null,"scale","scale",-230427353),1000.0);
return (!(same.compare.near_zero(val,scale)));
}));

(same.not_zeroish_QMARK_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(same.not_zeroish_QMARK_.cljs$lang$applyTo = (function (seq37014){
var G__37015 = cljs.core.first(seq37014);
var seq37014__$1 = cljs.core.next(seq37014);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37015,seq37014__$1);
}));

/**
 * Set the default comparator.
 *   ```klipse
 *   (set-comparator! (compare-ulp 2.0 100))
 *   (ish? 0.1 (-> 2 Math/sqrt (Math/pow 2) (- 1.9)))
 *   ```
 */
same.set_comparator_BANG_ = (function same$set_comparator_BANG_(comparator){
(same.ish._STAR_comparator_STAR_ = comparator);

return null;
});

//# sourceMappingURL=same.js.map
