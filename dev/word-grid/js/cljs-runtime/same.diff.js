goog.provide('same.diff');
/**
 * If `a` is an array, convert to a vector so it prints nicely.
 */
same.diff.un_array = (function same$diff$un_array(a){
if(same.platform.is_array_QMARK_(a)){
return cljs.core.vec(a);
} else {
return a;
}
});
same.diff.result_vec = (function same$diff$result_vec(var_args){
var args__4824__auto__ = [];
var len__4818__auto___36981 = arguments.length;
var i__4819__auto___36982 = (0);
while(true){
if((i__4819__auto___36982 < len__4818__auto___36981)){
args__4824__auto__.push((arguments[i__4819__auto___36982]));

var G__36983 = (i__4819__auto___36982 + (1));
i__4819__auto___36982 = G__36983;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return same.diff.result_vec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(same.diff.result_vec.cljs$core$IFn$_invoke$arity$variadic = (function (n,res,next){
if(cljs.core.empty_QMARK_(next)){
return res;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4212__auto__ = res;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.take.cljs$core$IFn$_invoke$arity$2((n - cljs.core.count(res)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))),next);
}
}));

(same.diff.result_vec.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(same.diff.result_vec.cljs$lang$applyTo = (function (seq36900){
var G__36901 = cljs.core.first(seq36900);
var seq36900__$1 = cljs.core.next(seq36900);
var G__36902 = cljs.core.first(seq36900__$1);
var seq36900__$2 = cljs.core.next(seq36900__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36901,G__36902,seq36900__$2);
}));


/**
 * Protocol for generating diffs of any type.
 * @interface
 */
same.diff.Diff = function(){};

var same$diff$Diff$diff$dyn_36984 = (function (this$,that){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (same.diff.diff[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4510__auto__.call(null,this$,that));
} else {
var m__4508__auto__ = (same.diff.diff["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4508__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("Diff.diff",this$);
}
}
});
/**
 * Returns the diff of two values, in the same format as `clojure.data/diff`,
 *  i.e. a vector of 3 elements: `[parts-only-in-this parts-only-in-that parts-in-both]`
 */
same.diff.diff = (function same$diff$diff(this$,that){
if((((!((this$ == null)))) && ((!((this$.same$diff$Diff$diff$arity$2 == null)))))){
return this$.same$diff$Diff$diff$arity$2(this$,that);
} else {
return same$diff$Diff$diff$dyn_36984(this$,that);
}
});

/**
 * Diff of sequential types, by comparing element-wise.
 */
same.diff.diff_seq = (function same$diff$diff_seq(this$,that){
var l = null;
var r = null;
var c = null;
var n = (0);
var left = this$;
var right = that;
while(true){
if(((cljs.core.empty_QMARK_(left)) || (cljs.core.empty_QMARK_(right)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$4(same.diff.result_vec,n,l,left),cljs.core.apply.cljs$core$IFn$_invoke$arity$4(same.diff.result_vec,n,r,right),c], null);
} else {
var vec__36912 = left;
var seq__36913 = cljs.core.seq(vec__36912);
var first__36914 = cljs.core.first(seq__36913);
var seq__36913__$1 = cljs.core.next(seq__36913);
var l0 = first__36914;
var lm = seq__36913__$1;
var vec__36915 = right;
var seq__36916 = cljs.core.seq(vec__36915);
var first__36917 = cljs.core.first(seq__36916);
var seq__36916__$1 = cljs.core.next(seq__36916);
var r0 = first__36917;
var rm = seq__36916__$1;
if(cljs.core.truth_(same.ish.ish(l0,r0))){
var G__36997 = l;
var G__36998 = r;
var G__36999 = same.diff.result_vec.cljs$core$IFn$_invoke$arity$variadic(n,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r0], 0));
var G__37000 = (n + (1));
var G__37001 = lm;
var G__37002 = rm;
l = G__36997;
r = G__36998;
c = G__36999;
n = G__37000;
left = G__37001;
right = G__37002;
continue;
} else {
var vec__36918 = same.diff.diff(l0,r0);
var dl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36918,(0),null);
var dr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36918,(1),null);
var dc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36918,(2),null);
var G__37003 = same.diff.result_vec.cljs$core$IFn$_invoke$arity$variadic(n,l,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dl], 0));
var G__37004 = same.diff.result_vec.cljs$core$IFn$_invoke$arity$variadic(n,r,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dr], 0));
var G__37005 = (((dc == null))?c:same.diff.result_vec.cljs$core$IFn$_invoke$arity$variadic(n,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dc], 0)));
var G__37006 = (n + (1));
var G__37007 = lm;
var G__37008 = rm;
l = G__37003;
r = G__37004;
c = G__37005;
n = G__37006;
left = G__37007;
right = G__37008;
continue;
}
}
break;
}
});
same.diff.update_common_keys = (function same$diff$update_common_keys(acc,lmap,rmap,keys){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,k){
var vec__36921 = same.diff.diff(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lmap,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,k));
var dl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36921,(0),null);
var dr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36921,(1),null);
var dc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36921,(2),null);
var G__36924 = m;
var G__36924__$1 = (((((!((dl == null)))) || ((!((dr == null))))))?cljs.core.assoc_in(G__36924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423),k], null),dl):G__36924);
var G__36924__$2 = (((((!((dl == null)))) || ((!((dr == null))))))?cljs.core.assoc_in(G__36924__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),k], null),dr):G__36924__$1);
if((!((dc == null)))){
return cljs.core.assoc_in(G__36924__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),k], null),dc);
} else {
return G__36924__$2;
}
}),acc,keys);
});
same.diff.update_float_keys = (function same$diff$update_float_keys(acc,lmap,rmap,lkeys,rkeys){
var a = acc;
var lk = lkeys;
var rk = rkeys;
while(true){
if(((cljs.core.empty_QMARK_(lk)) && (cljs.core.empty_QMARK_(rk)))){
return a;
} else {
if(cljs.core.empty_QMARK_(lk)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (a,lk,rk){
return (function (p1__36925_SHARP_,p2__36926_SHARP_){
return cljs.core.assoc_in(p1__36925_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),p2__36926_SHARP_], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,p2__36926_SHARP_));
});})(a,lk,rk))
,a,rk);
} else {
if(cljs.core.empty_QMARK_(rk)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (a,lk,rk){
return (function (p1__36927_SHARP_,p2__36928_SHARP_){
return cljs.core.assoc_in(p1__36927_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423),p2__36928_SHARP_], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(lmap,p2__36928_SHARP_));
});})(a,lk,rk))
,a,lk);
} else {
var vec__36929 = lk;
var seq__36930 = cljs.core.seq(vec__36929);
var first__36931 = cljs.core.first(seq__36930);
var seq__36930__$1 = cljs.core.next(seq__36930);
var lk0 = first__36931;
var lkr = seq__36930__$1;
var vec__36932 = rk;
var seq__36933 = cljs.core.seq(vec__36932);
var first__36934 = cljs.core.first(seq__36933);
var seq__36933__$1 = cljs.core.next(seq__36933);
var rk0 = first__36934;
var rkr = seq__36933__$1;
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lmap,lk0);
var rv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,rk0);
if(cljs.core.truth_(same.ish.ish(lk0,rk0))){
var vec__36935 = same.diff.diff(lv,rv);
var dl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36935,(0),null);
var dr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36935,(1),null);
var dc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36935,(2),null);
var acc__$1 = (function (){var G__36938 = a;
var G__36938__$1 = (((((!((dl == null)))) || ((!((dr == null))))))?cljs.core.assoc_in(G__36938,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423),lk0], null),dl):G__36938);
var G__36938__$2 = (((((!((dl == null)))) || ((!((dr == null))))))?cljs.core.assoc_in(G__36938__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),rk0], null),dr):G__36938__$1);
if((!((dc == null)))){
return cljs.core.assoc_in(G__36938__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),rk0], null),dc);
} else {
return G__36938__$2;
}
})();
var G__37017 = acc__$1;
var G__37018 = lkr;
var G__37019 = rkr;
a = G__37017;
lk = G__37018;
rk = G__37019;
continue;
} else {
if((lk0 < rk0)){
var G__37021 = cljs.core.assoc_in(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"l","l",1395893423),lk0], null),lv);
var G__37022 = lkr;
var G__37023 = rk;
a = G__37021;
lk = G__37022;
rk = G__37023;
continue;
} else {
var G__37024 = cljs.core.assoc_in(a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),rk0], null),rv);
var G__37025 = lk;
var G__37026 = rkr;
a = G__37024;
lk = G__37025;
rk = G__37026;
continue;

}
}

}
}
}
break;
}
});
goog.object.set(same.diff.Diff,"null",true);

goog.object.set(same.diff.diff,"null",(function (this$,that){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,that,null], null);
}));

goog.object.set(same.diff.Diff,"number",true);

goog.object.set(same.diff.diff,"number",(function (this$,that){
if(cljs.core.truth_(same.ish.ish(this$,that))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,that], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,that,null], null);
}
}));

goog.object.set(same.diff.Diff,"boolean",true);

goog.object.set(same.diff.diff,"boolean",(function (this$,that){
if(cljs.core.truth_(same.ish.ish(this$,that))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,that], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,that,null], null);
}
}));

goog.object.set(same.diff.Diff,"string",true);

goog.object.set(same.diff.diff,"string",(function (this$,that){
if(cljs.core.truth_(same.ish.ish(this$,that))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,that], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,that,null], null);
}
}));

goog.object.set(same.diff.Diff,"array",true);

goog.object.set(same.diff.diff,"array",(function (this$,that){
if(same.platform.is_array_QMARK_(that)){
return same.diff.diff_seq(this$,that);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [same.diff.un_array(this$),that,null], null);
}
}));

goog.object.set(same.diff.Diff,"object",true);

goog.object.set(same.diff.diff,"object",(function (this$,that){
if(cljs.core.truth_(same.ish.ish(this$,that))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,same.diff.un_array(that)], null);
} else {
if(((cljs.core.sequential_QMARK_(this$)) && (cljs.core.sequential_QMARK_(that)))){
return same.diff.diff_seq(this$,that);
} else {
if(((cljs.core.map_QMARK_(this$)) && (cljs.core.map_QMARK_(that)))){
var vec__36955 = same.ish.split_floats(cljs.core.keys(this$));
var this_floats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955,(0),null);
var this_rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36955,(1),null);
var vec__36958 = same.ish.split_floats(cljs.core.keys(that));
var that_floats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958,(0),null);
var that_rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36958,(1),null);
var extract = cljs.core.juxt.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"l","l",1395893423),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"c","c",-1763192079));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,extract(same.diff.update_float_keys(same.diff.update_common_keys(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"l","l",1395893423),cljs.core.select_keys(this$,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(this_rest,that_rest)),new cljs.core.Keyword(null,"r","r",-471384190),cljs.core.select_keys(that,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(that_rest,this_rest)),new cljs.core.Keyword(null,"c","c",-1763192079),cljs.core.PersistentArrayMap.EMPTY], null),this$,that,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(this_rest,that_rest)),this$,that,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(this_floats),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(that_floats))));
} else {
if(((cljs.core.set_QMARK_(this$)) && (cljs.core.set_QMARK_(that)))){
var vec__36963 = same.ish.split_floats(this$);
var this_floats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36963,(0),null);
var this_rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36963,(1),null);
var vec__36966 = same.ish.split_floats(that);
var that_floats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966,(0),null);
var that_rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36966,(1),null);
var l = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(this_rest,that_rest);
var r = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(that_rest,this_rest);
var c = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(this_rest,that_rest);
var left = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(this_floats);
var right = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(that_floats);
while(true){
if(((cljs.core.empty_QMARK_(left)) || (cljs.core.empty_QMARK_(right)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(l,left),cljs.core.into.cljs$core$IFn$_invoke$arity$2(r,right),c], null));
} else {
var vec__36975 = left;
var seq__36976 = cljs.core.seq(vec__36975);
var first__36977 = cljs.core.first(seq__36976);
var seq__36976__$1 = cljs.core.next(seq__36976);
var vl = first__36977;
var rl = seq__36976__$1;
var vec__36978 = right;
var seq__36979 = cljs.core.seq(vec__36978);
var first__36980 = cljs.core.first(seq__36979);
var seq__36979__$1 = cljs.core.next(seq__36979);
var vr = first__36980;
var rr = seq__36979__$1;
if(cljs.core.truth_(same.ish.ish(vl,vr))){
var G__37041 = l;
var G__37042 = r;
var G__37043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(c,vr);
var G__37044 = rl;
var G__37045 = rr;
l = G__37041;
r = G__37042;
c = G__37043;
left = G__37044;
right = G__37045;
continue;
} else {
if((vl < vr)){
var G__37046 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,vl);
var G__37047 = r;
var G__37048 = c;
var G__37049 = rl;
var G__37050 = right;
l = G__37046;
r = G__37047;
c = G__37048;
left = G__37049;
right = G__37050;
continue;
} else {
var G__37051 = l;
var G__37052 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,vr);
var G__37053 = c;
var G__37054 = left;
var G__37055 = rr;
l = G__37051;
r = G__37052;
c = G__37053;
left = G__37054;
right = G__37055;
continue;

}
}
}
break;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,same.diff.un_array(that),null], null);

}
}
}
}
}));

//# sourceMappingURL=same.diff.js.map
