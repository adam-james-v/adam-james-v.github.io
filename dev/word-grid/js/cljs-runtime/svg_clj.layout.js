goog.provide('svg_clj.layout');
svg_clj.layout.distribute_linear = (function svg_clj$layout$distribute_linear(axis_key,gap,items){
var dir = (function (){var G__38346 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.first,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.second], null);
return (axis_key.cljs$core$IFn$_invoke$arity$1 ? axis_key.cljs$core$IFn$_invoke$arity$1(G__38346) : axis_key.call(null,G__38346));
})();
var distances = cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__38342_SHARP_,p2__38343_SHARP_){
return ((((function (){var G__38349 = svg_clj.transforms.bb_dims(p1__38342_SHARP_);
return (dir.cljs$core$IFn$_invoke$arity$1 ? dir.cljs$core$IFn$_invoke$arity$1(G__38349) : dir.call(null,G__38349));
})() / (2)) + ((function (){var G__38350 = svg_clj.transforms.bb_dims(p2__38343_SHARP_);
return (dir.cljs$core$IFn$_invoke$arity$1 ? dir.cljs$core$IFn$_invoke$arity$1(G__38350) : dir.call(null,G__38350));
})() / (2))) + gap);
}),items,cljs.core.rest(items)));
return svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__38344_SHARP_,p2__38345_SHARP_){
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(p1__38344_SHARP_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(axis_key,new cljs.core.Keyword(null,"x","x",2099068185)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p2__38345_SHARP_,(0)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),p2__38345_SHARP_], null)));
}),cljs.core.rest(items),distances),cljs.core.first(items))], 0));
});
svg_clj.layout.distribute_on_pts = (function svg_clj$layout$distribute_on_pts(items,pts){
return svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__38351_SHARP_,p2__38352_SHARP_){
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(p1__38351_SHARP_,p2__38352_SHARP_);
}),items,pts)], 0));
});
svg_clj.layout.distribute_on_curve = (function svg_clj$layout$distribute_on_curve(items,curve){
var eps = 1.0E-6;
var n = (((cljs.core.count(items) > (1)))?(cljs.core.count(items) - (1)):(1));
var xf = (function (item,t){
var t__$1 = (((((1) - eps) <= t))?((1) - eps):(((eps > t))?eps:t
));
var n__$1 = svg_clj.utils.normal.cljs$core$IFn$_invoke$arity$2((function (){var G__38367 = (t__$1 - eps);
return (curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1(G__38367) : curve.call(null,G__38367));
})(),(function (){var G__38369 = (t__$1 + eps);
return (curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1(G__38369) : curve.call(null,G__38369));
})());
var a = svg_clj.utils.angle_from_pts(n__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
var o = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38362_SHARP_){
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$2(p1__38362_SHARP_,(4));
}),svg_clj.utils.rotate_pt(svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(item),a));
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.rotate.cljs$core$IFn$_invoke$arity$2(item,a),svg_clj.utils.v_((curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1(t__$1) : curve.call(null,t__$1)),o,svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(item)));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__38363_SHARP_,p2__38364_SHARP_){
return xf(p1__38363_SHARP_,(p2__38364_SHARP_ / n));
}),items,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(n + (1))));
});
svg_clj.layout.pattern_on_pts = (function svg_clj$layout$pattern_on_pts(item,pts){
return svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38371_SHARP_){
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(item,p1__38371_SHARP_);
}),pts)], 0));
});
svg_clj.layout.pattern_on_curve = (function svg_clj$layout$pattern_on_curve(item,curve,n){
var step = (1.0 / n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38375_SHARP_){
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(item,(curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1(p1__38375_SHARP_) : curve.call(null,p1__38375_SHARP_)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),1.0,step));
});

//# sourceMappingURL=svg_clj.layout.js.map
