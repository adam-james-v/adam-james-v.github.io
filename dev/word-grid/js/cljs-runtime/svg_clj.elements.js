goog.provide('svg_clj.elements');
svg_clj.elements.svg_element_keys = svg_clj.utils.svg_element_keys;
/**
 * Emits a circle element with radius `r` centered at the origin.
 */
svg_clj.elements.circle = (function svg_clj$elements$circle(r){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(0),new cljs.core.Keyword(null,"cy","cy",755331060),(0),new cljs.core.Keyword(null,"r","r",-471384190),r], null)], null);
});
/**
 * Emits an ellipse element with x-axis radius `rx` and y-axis radius `ry` centered at the origin.
 */
svg_clj.elements.ellipse = (function svg_clj$elements$ellipse(rx,ry){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(0),new cljs.core.Keyword(null,"cy","cy",755331060),(0),new cljs.core.Keyword(null,"rx","rx",1627208482),rx,new cljs.core.Keyword(null,"ry","ry",-334598563),ry], null)], null);
});
/**
 * Emits a line element starting at 2d point `pt-a` and ending at 2d point `pt-b`.
 */
svg_clj.elements.line = (function svg_clj$elements$line(pt_a,pt_b){
var vec__37353 = pt_a;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37353,(1),null);
var vec__37356 = pt_b;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37356,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37356,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),ax,new cljs.core.Keyword(null,"y1","y1",589123466),ay,new cljs.core.Keyword(null,"x2","x2",-1362513475),bx,new cljs.core.Keyword(null,"y2","y2",-718691301),by], null)], null);
});
/**
 * Emits a polygon element with 2d points from vector or list `pts`.
 *   Polygon elements have a closed path.
 */
svg_clj.elements.polygon = (function svg_clj$elements$polygon(pts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,pts))], null)], null);
});
/**
 * Emits a polyline element with 2d points from vector or list `pts`.
 *   Polyline elements have an open path.
 */
svg_clj.elements.polyline = (function svg_clj$elements$polyline(pts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,pts))], null)], null);
});
/**
 * Emits a rect element of width `w` and height `h` centered at the origin.
 */
svg_clj.elements.rect = (function svg_clj$elements$rect(w,h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"x","x",2099068185),(w / -2.0),new cljs.core.Keyword(null,"y","y",-1757859776),(h / -2.0)], null)], null);
});
/**
 * Emits an image element of the image specified at `url`, of width `w`, and height `h` centered at the origin.
 */
svg_clj.elements.image = (function svg_clj$elements$image(url,w,h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"href","href",-793805698),url,new cljs.core.Keyword(null,"width","width",-384071477),w,new cljs.core.Keyword(null,"height","height",1025178622),h,new cljs.core.Keyword(null,"x","x",2099068185),(w / -2.0),new cljs.core.Keyword(null,"y","y",-1757859776),(h / -2.0)], null)], null);
});
/**
 * Emits a text element containing `text` of font-size 12pt.
 *   By default, text is centered at the origin by setting text-anchor='middle' and dominant-baseline='middle'. These defaults can be changed using [[svg-clj.transforms/style]] to override any preset properties.
 */
svg_clj.elements.text = (function svg_clj$elements$text(text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"text-anchor","text-anchor",585613696),"middle",new cljs.core.Keyword(null,"dominant-baseline","dominant-baseline",609259826),"middle"], null),text], null);
});
/**
 * Emits a g (group) element.
 */
svg_clj.elements.g = (function svg_clj$elements$g(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37398 = arguments.length;
var i__4819__auto___37399 = (0);
while(true){
if((i__4819__auto___37399 < len__4818__auto___37398)){
args__4824__auto__.push((arguments[i__4819__auto___37399]));

var G__37400 = (i__4819__auto___37399 + (1));
i__4819__auto___37399 = G__37400;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic = (function (content){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(content))) && ((!((cljs.core.first(cljs.core.first(content)) instanceof cljs.core.Keyword)))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.first(content));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),content));
}
}));

(svg_clj.elements.g.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(svg_clj.elements.g.cljs$lang$applyTo = (function (seq37382){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37382));
}));


//# sourceMappingURL=svg_clj.elements.js.map
