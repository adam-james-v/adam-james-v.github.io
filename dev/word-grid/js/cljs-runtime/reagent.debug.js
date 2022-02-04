goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__36126__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36126 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36127__i = 0, G__36127__a = new Array(arguments.length -  0);
while (G__36127__i < G__36127__a.length) {G__36127__a[G__36127__i] = arguments[G__36127__i + 0]; ++G__36127__i;}
  args = new cljs.core.IndexedSeq(G__36127__a,0,null);
} 
return G__36126__delegate.call(this,args);};
G__36126.cljs$lang$maxFixedArity = 0;
G__36126.cljs$lang$applyTo = (function (arglist__36128){
var args = cljs.core.seq(arglist__36128);
return G__36126__delegate(args);
});
G__36126.cljs$core$IFn$_invoke$arity$variadic = G__36126__delegate;
return G__36126;
})()
);

(o.error = (function() { 
var G__36129__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__36129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36131__i = 0, G__36131__a = new Array(arguments.length -  0);
while (G__36131__i < G__36131__a.length) {G__36131__a[G__36131__i] = arguments[G__36131__i + 0]; ++G__36131__i;}
  args = new cljs.core.IndexedSeq(G__36131__a,0,null);
} 
return G__36129__delegate.call(this,args);};
G__36129.cljs$lang$maxFixedArity = 0;
G__36129.cljs$lang$applyTo = (function (arglist__36132){
var args = cljs.core.seq(arglist__36132);
return G__36129__delegate(args);
});
G__36129.cljs$core$IFn$_invoke$arity$variadic = G__36129__delegate;
return G__36129;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
