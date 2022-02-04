goog.provide('svg_clj.composites');
/**
 * Wraps `content` in an SVG container element whose width, height, and viewBox properties are automatically calculated when `w`, `h`, and `sc` are omitted.
 * The SVG container is optionally parameterized by width `w`, height `h`, and scale `sc`.
 */
svg_clj.composites.svg = (function svg_clj$composites$svg(var_args){
var G__38348 = arguments.length;
switch (G__38348) {
case 1:
return svg_clj.composites.svg.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return svg_clj.composites.svg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return svg_clj.composites.svg.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.composites.svg.cljs$core$IFn$_invoke$arity$1 = (function (content){
var vec__38353 = svg_clj.transforms.bb_dims(content);
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38353,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38353,(1),null);
var vec__38356 = svg_clj.transforms.bounds.cljs$core$IFn$_invoke$arity$1(content);
var vec__38359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38356,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38359,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38359,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38356,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38356,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38356,(3),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,w,h], null)),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),content], null);
}));

(svg_clj.composites.svg.cljs$core$IFn$_invoke$arity$3 = (function (content,w,h){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(w)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(h)].join(''),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),content], null);
}));

(svg_clj.composites.svg.cljs$core$IFn$_invoke$arity$4 = (function (content,w,h,sc){
return svg_clj.composites.svg.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["scale(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sc),")"].join('')], null),content], null),w,h);
}));

(svg_clj.composites.svg.cljs$lang$maxFixedArity = 4);

svg_clj.composites.arrow = (function svg_clj$composites$arrow(var_args){
var G__38370 = arguments.length;
switch (G__38370) {
case 2:
return svg_clj.composites.arrow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return svg_clj.composites.arrow.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.composites.arrow.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var tip_pts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(5)], null)], null);
var tip_shape = svg_clj.elements.polygon(tip_pts);
return svg_clj.composites.arrow.cljs$core$IFn$_invoke$arity$3(a,b,tip_shape);
}));

(svg_clj.composites.arrow.cljs$core$IFn$_invoke$arity$3 = (function (a,b,tip_shape){
var vec__38372 = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(tip_shape);
var mx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38372,(0),null);
var my = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38372,(1),null);
var r = svg_clj.utils.to_deg(cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (p1__38365_SHARP_,p2__38366_SHARP_){
return Math.atan2(p1__38365_SHARP_,p2__38366_SHARP_);
}),svg_clj.utils.v_(b,a)));
return svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([svg_clj.elements.line(a,b),svg_clj.transforms.style(svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.rotate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(tip_shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- mx),(- my)], null)),((315) - r)),a),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none"], null)),svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.rotate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(tip_shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- mx),(- my)], null)),((135) - r)),b)], 0));
}));

(svg_clj.composites.arrow.cljs$lang$maxFixedArity = 3);

svg_clj.composites.label = (function svg_clj$composites$label(font_size,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Verdana",new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),font_size], null)], null),text], null);
});

//# sourceMappingURL=svg_clj.composites.js.map
