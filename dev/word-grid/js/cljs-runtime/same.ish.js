goog.provide('same.ish');
/**
 * The default comparator. Stored in a separate var to make it easier to reset after
 *   modifying with [[set-comparator!]]
 */
same.ish.default_comparator = same.compare.compare_ulp(100.0,(2));
/**
 * The function for comparing individual floats/doubles.
 *   Can be overridden using [[with-comparator]] or [[set-comparator!]].
 */
same.ish._STAR_comparator_STAR_ = same.ish.default_comparator;
/**
 * Split a collection into a vector of floating point values (of type Float or Double),
 *   and a set of all other values.
 */
same.ish.split_floats = (function same$ish$split_floats(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__36872,v){
var vec__36873 = p__36872;
var floats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36873,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36873,(1),null);
if(cljs.core.float_QMARK_(v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(floats,v),rest], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [floats,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rest,v)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY], null),coll);
});

/**
 * Protocol for approximately comparing any types (using [[*comparator*]] for floating point parts).
 * @interface
 */
same.ish.Approximate = function(){};

var same$ish$Approximate$ish$dyn_36899 = (function (this$,that){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (same.ish.ish[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4510__auto__.call(null,this$,that));
} else {
var m__4508__auto__ = (same.ish.ish["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__4508__auto__.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("Approximate.ish",this$);
}
}
});
/**
 * Return true if the two arguments are approximately equal.
 */
same.ish.ish = (function same$ish$ish(this$,that){
if((((!((this$ == null)))) && ((!((this$.same$ish$Approximate$ish$arity$2 == null)))))){
return this$.same$ish$Approximate$ish$arity$2(this$,that);
} else {
return same$ish$Approximate$ish$dyn_36899(this$,that);
}
});

goog.object.set(same.ish.Approximate,"null",true);

goog.object.set(same.ish.ish,"null",(function (this$,that){
return (that == null);
}));

goog.object.set(same.ish.Approximate,"number",true);

goog.object.set(same.ish.ish,"number",(function (this$,that){
if(typeof that === 'number'){
return same.ish._STAR_comparator_STAR_.call(null,this$,that);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,that);
}
}));

goog.object.set(same.ish.Approximate,"boolean",true);

goog.object.set(same.ish.ish,"boolean",(function (this$,that){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,that);
}));

goog.object.set(same.ish.Approximate,"array",true);

goog.object.set(same.ish.ish,"array",(function (this$,that){
return ((same.platform.is_array_QMARK_(that)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$),cljs.core.count(that))) && (cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(same.ish.ish,this$,that))))));
}));

goog.object.set(same.ish.Approximate,"string",true);

goog.object.set(same.ish.ish,"string",(function (this$,that){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,that);
}));

goog.object.set(same.ish.Approximate,"object",true);

goog.object.set(same.ish.ish,"object",(function (this$,that){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$,that)){
return true;
} else {
if(((cljs.core.sequential_QMARK_(this$)) && (cljs.core.sequential_QMARK_(that)))){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$),cljs.core.count(that))) && (cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,same.ish.ish),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,this$,that))));
} else {
if(((cljs.core.map_QMARK_(this$)) && (cljs.core.map_QMARK_(that)))){
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$),cljs.core.count(that));
if(and__4210__auto__){
var vec__36885 = same.ish.split_floats(cljs.core.keys(this$));
var this_floats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36885,(0),null);
var this_rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36885,(1),null);
var vec__36888 = same.ish.split_floats(cljs.core.keys(that));
var that_floats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36888,(0),null);
var that_rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36888,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_rest,that_rest)) && (((cljs.core.every_QMARK_((function (p1__36880_SHARP_){
return same.ish.ish(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,p1__36880_SHARP_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(that,p1__36880_SHARP_));
}),this_rest)) && (cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__36881_SHARP_,p2__36882_SHARP_){
var and__4210__auto____$3 = same.ish.ish(p1__36881_SHARP_,p2__36882_SHARP_);
if(cljs.core.truth_(and__4210__auto____$3)){
return same.ish.ish(cljs.core.get.cljs$core$IFn$_invoke$arity$2(this$,p1__36881_SHARP_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(that,p2__36882_SHARP_));
} else {
return and__4210__auto____$3;
}
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(this_floats),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(that_floats)))))));
} else {
return and__4210__auto__;
}
} else {
if(((cljs.core.set_QMARK_(this$)) && (cljs.core.set_QMARK_(that)))){
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(this$),cljs.core.count(that));
if(and__4210__auto__){
var vec__36893 = same.ish.split_floats(this$);
var this_floats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893,(0),null);
var this_rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893,(1),null);
var vec__36896 = same.ish.split_floats(that);
var that_floats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896,(0),null);
var that_rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896,(1),null);
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_rest,that_rest);
if(and__4210__auto____$1){
return same.ish.ish(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(this_floats),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(that_floats));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
} else {
return false;

}
}
}
}
}));

//# sourceMappingURL=same.ish.js.map
