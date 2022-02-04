goog.provide('svg_clj.utils');
svg_clj.utils._STAR_rounding_STAR_ = null;
svg_clj.utils.abs = Math.abs;
svg_clj.utils.pow = Math.pow;
/**
 * Rounds a non-integer number `num` to `places` decimal places.
 */
svg_clj.utils.round = (function svg_clj$utils$round(var_args){
var G__37211 = arguments.length;
switch (G__37211) {
case 1:
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.utils.round.cljs$core$IFn$_invoke$arity$1 = (function (num){
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$2(num,svg_clj.utils._STAR_rounding_STAR_);
}));

(svg_clj.utils.round.cljs$core$IFn$_invoke$arity$2 = (function (num,places){
if(cljs.core.truth_(places)){
var d = Math.pow((10),places);
return (Math.round((num * d)) / d);
} else {
return num;
}
}));

(svg_clj.utils.round.cljs$lang$maxFixedArity = 2);

svg_clj.utils.v_PLUS_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core._PLUS_);
svg_clj.utils.v_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core._);
svg_clj.utils.v_STAR_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core._STAR_);
svg_clj.utils.to_deg = (function svg_clj$utils$to_deg(rad){
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$1((rad * ((180) / Math.PI)));
});
svg_clj.utils.to_rad = (function svg_clj$utils$to_rad(deg){
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$1((deg * (Math.PI / (180))));
});
svg_clj.utils.average = (function svg_clj$utils$average(var_args){
var args__4824__auto__ = [];
var len__4818__auto___37346 = arguments.length;
var i__4819__auto___37347 = (0);
while(true){
if((i__4819__auto___37347 < len__4818__auto___37346)){
args__4824__auto__.push((arguments[i__4819__auto___37347]));

var G__37348 = (i__4819__auto___37347 + (1));
i__4819__auto___37347 = G__37348;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return svg_clj.utils.average.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(svg_clj.utils.average.cljs$core$IFn$_invoke$arity$variadic = (function (numbers){
var n = cljs.core.count(numbers);
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$1((cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,numbers) / n));
}));

(svg_clj.utils.average.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(svg_clj.utils.average.cljs$lang$applyTo = (function (seq37214){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37214));
}));

/**
 * Turns the vector `v` into a string with commas separating the values.
 */
svg_clj.utils.v__GT_s = (function svg_clj$utils$v__GT_s(v){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",v);
});
/**
 * Turns a string of comma or space separated numbers into a vector.
 */
svg_clj.utils.s__GT_v = (function svg_clj$utils$s__GT_v(s){
return (function (p1__37216_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.reader.read_string,p1__37216_SHARP_);
})((function (p1__37215_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.empty_QMARK_),p1__37215_SHARP_);
})(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(s),/[, ]/)));
});
svg_clj.utils.xf_kv__GT_str = (function svg_clj$utils$xf_kv__GT_str(p__37217){
var vec__37218 = p__37217;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37218,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37218,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(k)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,v))].join('');
});
svg_clj.utils.str__GT_xf_kv = (function svg_clj$utils$str__GT_xf_kv(s){
var split = clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\(/);
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(split));
var val = cljs.core.vec(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(split))].join('')));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,val], null);
});
/**
 * Turn transform maps from an element's properties into a string properly formatted for use inline in an svg element tag.
 * 
 *   Consider this an internal tool.
 */
svg_clj.utils.xf_map__GT_str = (function svg_clj$utils$xf_map__GT_str(m){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.xf_kv__GT_str,m));
});
svg_clj.utils.str__GT_xf_map = (function svg_clj$utils$str__GT_xf_map(s){
var temp__5751__auto__ = s;
if(cljs.core.truth_(temp__5751__auto__)){
var s__$1 = temp__5751__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.str__GT_xf_kv,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split_lines((function (p1__37221_SHARP_){
return clojure.string.replace(p1__37221_SHARP_,/\)/,")\n");
})(s__$1)))));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Rotates 2d point `pt` around the origin by `deg` in the counter-clockwise direction.
 */
svg_clj.utils.rotate_pt = (function svg_clj$utils$rotate_pt(pt,deg){
var vec__37222 = pt;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37222,(1),null);
var c = Math.cos(svg_clj.utils.to_rad(deg));
var s = Math.sin(svg_clj.utils.to_rad(deg));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_clj.utils.round.cljs$core$IFn$_invoke$arity$1(((x * c) - (y * s))),svg_clj.utils.round.cljs$core$IFn$_invoke$arity$1(((x * s) + (y * c)))], null);
});
/**
 * Rotates point `pt` around `center` by `deg` in the counter-clockwise direction.
 */
svg_clj.utils.rotate_pt_around_center = (function svg_clj$utils$rotate_pt_around_center(pt,deg,center){
return svg_clj.utils.v_PLUS_(svg_clj.utils.rotate_pt(svg_clj.utils.v_PLUS_(pt,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core._,center)),deg),center);
});
/**
 * Computes the distance between two points `a` and `b`.
 */
svg_clj.utils.distance = (function svg_clj$utils$distance(a,b){
var v = svg_clj.utils.v_(b,a);
var v2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,svg_clj.utils.v_STAR_(v,v));
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$1(Math.sqrt(v2));
});
svg_clj.utils.distance_squared = (function svg_clj$utils$distance_squared(a,b){
var v = svg_clj.utils.v_(b,a);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,svg_clj.utils.v_STAR_(v,v));
});
svg_clj.utils.determinant = (function svg_clj$utils$determinant(a,b){
return ((cljs.core.first(a) * cljs.core.second(b)) - (cljs.core.second(a) * cljs.core.first(b)));
});
svg_clj.utils.perpendicular = (function svg_clj$utils$perpendicular(p__37225){
var vec__37226 = p__37225;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37226,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37226,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- y),x], null);
});
/**
 * Calculates the dot product of two vectors.
 */
svg_clj.utils.dot_STAR_ = (function svg_clj$utils$dot_STAR_(a,b){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,a,b));
});
/**
 * Calculates cross product of two 3d-vectors. If `a` and `b` are 2D, z is assumed to be 0.
 */
svg_clj.utils.cross_STAR_ = (function svg_clj$utils$cross_STAR_(a,b){
var vec__37229 = a;
var a1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37229,(0),null);
var a2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37229,(1),null);
var a3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37229,(2),null);
var vec__37232 = b;
var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37232,(0),null);
var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37232,(1),null);
var b3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37232,(2),null);
var a3__$1 = (cljs.core.truth_(a3)?a3:(0));
var b3__$1 = (cljs.core.truth_(b3)?b3:(0));
var i = ((a2 * b3__$1) - (a3__$1 * b2));
var j = ((a3__$1 * b1) - (a1 * b3__$1));
var k = ((a1 * b2) - (a2 * b1));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,k], null);
});
/**
 * Calculates the k component of the cross product of two 2D vectors, assuming Z=0 as the 3rd component.
 */
svg_clj.utils.cross_STAR__k = (function svg_clj$utils$cross_STAR__k(p__37235,p__37236){
var vec__37237 = p__37235;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37237,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37237,(1),null);
var vec__37240 = p__37236;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37240,(1),null);
return ((ax * by) - (ay * bx));
});
/**
 * Calculates the unit vector of a given vector.
 */
svg_clj.utils.normalize = (function svg_clj$utils$normalize(v){
var m = Math.sqrt(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,svg_clj.utils.v_STAR_(v,v)));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,v,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(m));
});
/**
 * Calculates the normal vector of plane given 3 points or calculates the normal vector of a line given two (2D) points.
 */
svg_clj.utils.normal = (function svg_clj$utils$normal(var_args){
var G__37244 = arguments.length;
switch (G__37244) {
case 2:
return svg_clj.utils.normal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return svg_clj.utils.normal.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.utils.normal.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var vec__37245 = a;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37245,(1),null);
var vec__37248 = b;
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37248,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37248,(1),null);
var dx = (x2 - x1);
var dy = (y2 - y1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- dy),dx], null);
}));

(svg_clj.utils.normal.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var ab = svg_clj.utils.v_(a,b);
var ac = svg_clj.utils.v_(a,c);
return svg_clj.utils.cross_STAR_(ab,ac);
}));

(svg_clj.utils.normal.cljs$lang$maxFixedArity = 3);

/**
 * Using `p2` as the 'origin', return a string indicating positive, negative, or axis-aligned for p1 p2.
 */
svg_clj.utils.check_quadrants = (function svg_clj$utils$check_quadrants(p1,p2,p3){
var v1 = svg_clj.utils.v_(p1,p2);
var v2 = svg_clj.utils.v_(p3,p2);
var qf = (function (p__37251){
var vec__37252 = p__37251;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37252,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37252,(1),null);
if((((x > (0))) && ((y > (0))))){
return "pp";
} else {
if((((x > (0))) && ((y < (0))))){
return "pn";
} else {
if((((x < (0))) && ((y < (0))))){
return "nn";
} else {
if((((x < (0))) && ((y > (0))))){
return "np";
} else {
if((x > (0))){
return "p_";
} else {
if((x < (0))){
return "n_";
} else {
if((y > (0))){
return "_p";
} else {
if((y < (0))){
return "_n";
} else {
return null;
}
}
}
}
}
}
}
}
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(qf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,v2], null)));
});
/**
 * Calculates the angle starting at line p3p2 going to line p1p2.
 * Put another way, the angle is measured following the 'right hand rule' around p2.
 */
svg_clj.utils.angle_from_pts = (function svg_clj$utils$angle_from_pts(p1,p2,p3){
var v1 = svg_clj.utils.v_(p1,p2);
var v2 = svg_clj.utils.v_(p3,p2);
var vec__37255 = svg_clj.utils.normalize(v1);
var v1nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37255,(0),null);
var v1ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37255,(1),null);
var vec__37258 = svg_clj.utils.normalize(v2);
var v2nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37258,(0),null);
var v2ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37258,(1),null);
var l1 = svg_clj.utils.distance(p1,p2);
var l2 = svg_clj.utils.distance(p3,p2);
var n = svg_clj.utils.dot_STAR_(v1,v2);
var d = (l1 * l2);
if(same.zeroish_QMARK_(d)){
return null;
} else {
var a = svg_clj.utils.to_deg(Math.acos((n / d)));
var quadrants = svg_clj.utils.check_quadrants(p1,p2,p3);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pppp",quadrants)) && ((v2nx > v1nx)))){
return a;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("npnp",quadrants)) && ((v2nx > v1nx)))){
return a;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nnnn",quadrants)) && ((v2nx < v1nx)))){
return a;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pnpn",quadrants)) && ((v2nx < v1nx)))){
return a;
} else {
if(cljs.core.truth_((function (){var fexpr__37261 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["p_pn",null,"_ppp",null,"ppp_",null,"p_p_",null], null), null);
return (fexpr__37261.cljs$core$IFn$_invoke$arity$1 ? fexpr__37261.cljs$core$IFn$_invoke$arity$1(quadrants) : fexpr__37261.call(null,quadrants));
})())){
return a;
} else {
if(cljs.core.truth_((function (){var fexpr__37262 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["_p_p",null,"np_p",null,"n_np",null], null), null);
return (fexpr__37262.cljs$core$IFn$_invoke$arity$1 ? fexpr__37262.cljs$core$IFn$_invoke$arity$1(quadrants) : fexpr__37262.call(null,quadrants));
})())){
return a;
} else {
if(cljs.core.truth_((function (){var fexpr__37263 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["_nnn",null,"n_n_",null,"nnn_",null], null), null);
return (fexpr__37263.cljs$core$IFn$_invoke$arity$1 ? fexpr__37263.cljs$core$IFn$_invoke$arity$1(quadrants) : fexpr__37263.call(null,quadrants));
})())){
return a;
} else {
if(cljs.core.truth_((function (){var fexpr__37264 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["pn_n",null,"pnp_",null,"_n_n",null], null), null);
return (fexpr__37264.cljs$core$IFn$_invoke$arity$1 ? fexpr__37264.cljs$core$IFn$_invoke$arity$1(quadrants) : fexpr__37264.call(null,quadrants));
})())){
return a;
} else {
if(cljs.core.truth_((function (){var fexpr__37265 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["pp_n",null,"pnn_",null,"npp_",null,"nn_p",null], null), null);
return (fexpr__37265.cljs$core$IFn$_invoke$arity$1 ? fexpr__37265.cljs$core$IFn$_invoke$arity$1(quadrants) : fexpr__37265.call(null,quadrants));
})())){
return a;
} else {
if(cljs.core.truth_((function (){var fexpr__37266 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["_nnp",null,"n_pp",null,"_ppn",null,"p_nn",null], null), null);
return (fexpr__37266.cljs$core$IFn$_invoke$arity$1 ? fexpr__37266.cljs$core$IFn$_invoke$arity$1(quadrants) : fexpr__37266.call(null,quadrants));
})())){
return a;
} else {
if(cljs.core.truth_((function (){var fexpr__37267 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["nppp",null,"pppn",null,"pnnn",null,"nnnp",null], null), null);
return (fexpr__37267.cljs$core$IFn$_invoke$arity$1 ? fexpr__37267.cljs$core$IFn$_invoke$arity$1(quadrants) : fexpr__37267.call(null,quadrants));
})())){
return a;
} else {
if(cljs.core.truth_((function (){var fexpr__37268 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["_nn_",null,"_pp_",null,"p__n",null,"n__p",null], null), null);
return (fexpr__37268.cljs$core$IFn$_invoke$arity$1 ? fexpr__37268.cljs$core$IFn$_invoke$arity$1(quadrants) : fexpr__37268.call(null,quadrants));
})())){
return a;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ppnn",quadrants)) && ((Math.abs(v1nx) > Math.abs(v2nx))))){
return a;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nnpp",quadrants)) && ((Math.abs(v1nx) > Math.abs(v2nx))))){
return a;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("pnnp",quadrants)) && ((Math.abs(v1nx) < Math.abs(v2nx))))){
return a;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("nppn",quadrants)) && ((Math.abs(v1nx) < Math.abs(v2nx))))){
return a;
} else {
if(cljs.core.truth_((function (){var fexpr__37269 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["_n_p",null,"_p_n",null,"p_n_",null,"n_p_",null], null), null);
return (fexpr__37269.cljs$core$IFn$_invoke$arity$1 ? fexpr__37269.cljs$core$IFn$_invoke$arity$1(quadrants) : fexpr__37269.call(null,quadrants));
})())){
return a;
} else {
return ((360) - a);

}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
svg_clj.utils.line_intersection = (function svg_clj$utils$line_intersection(p__37270,p__37271){
var vec__37272 = p__37270;
var pt_a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37272,(0),null);
var pt_b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37272,(1),null);
var vec__37275 = p__37271;
var pt_c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37275,(0),null);
var pt_d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37275,(1),null);
var vec__37278 = pt_a;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37278,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37278,(1),null);
var vec__37281 = pt_b;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37281,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37281,(1),null);
var vec__37284 = pt_c;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37284,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37284,(1),null);
var vec__37287 = pt_d;
var dx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37287,(0),null);
var dy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37287,(1),null);
var xdiff = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax - bx),(cx - dx)], null);
var ydiff = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ay - by),(cy - dy)], null);
var div = svg_clj.utils.determinant(xdiff,ydiff);
if(same.zeroish_QMARK_((svg_clj.utils.abs.cljs$core$IFn$_invoke$arity$1 ? svg_clj.utils.abs.cljs$core$IFn$_invoke$arity$1(div) : svg_clj.utils.abs.call(null,div)))){
return null;
} else {
var dets = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_clj.utils.determinant(pt_a,pt_b),svg_clj.utils.determinant(pt_c,pt_d)], null);
var x = (svg_clj.utils.determinant(dets,xdiff) / div);
var y = (svg_clj.utils.determinant(dets,ydiff) / div);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});
svg_clj.utils.colinear_QMARK_ = (function svg_clj$utils$colinear_QMARK_(a,b,c){
var ba = svg_clj.utils.v_(a,b);
var bc = svg_clj.utils.v_(c,b);
var eps = 1.0E-6;
return (eps > (function (){var G__37290 = svg_clj.utils.cross_STAR__k(ba,bc);
return (svg_clj.utils.abs.cljs$core$IFn$_invoke$arity$1 ? svg_clj.utils.abs.cljs$core$IFn$_invoke$arity$1(G__37290) : svg_clj.utils.abs.call(null,G__37290));
})());
});
svg_clj.utils.corner_condition = (function svg_clj$utils$corner_condition(a,b,c){
var ba = svg_clj.utils.v_(a,b);
var bc = svg_clj.utils.v_(c,b);
var eps = 1.0E-6;
var k = svg_clj.utils.cross_STAR__k(ba,bc);
if((eps > (svg_clj.utils.abs.cljs$core$IFn$_invoke$arity$1 ? svg_clj.utils.abs.cljs$core$IFn$_invoke$arity$1(k) : svg_clj.utils.abs.call(null,k)))){
return new cljs.core.Keyword(null,"colinear","colinear",-407382007);
} else {
if((eps < k)){
return new cljs.core.Keyword(null,"reflex","reflex",-1739666234);
} else {
if(((- eps) > k)){
return new cljs.core.Keyword(null,"convex","convex",-2042722541);
} else {
return null;
}
}
}
});
svg_clj.utils.pt_inside_QMARK_ = (function svg_clj$utils$pt_inside_QMARK_(p__37291,pt){
var vec__37292 = p__37291;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37292,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37292,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37292,(2),null);
var ab = svg_clj.utils.v_(b,a);
var bc = svg_clj.utils.v_(c,b);
var ca = svg_clj.utils.v_(a,c);
var apt = svg_clj.utils.v_(pt,a);
var bpt = svg_clj.utils.v_(pt,b);
var cpt = svg_clj.utils.v_(pt,c);
return (!((((svg_clj.utils.cross_STAR__k(ab,apt) <= (0))) || ((((svg_clj.utils.cross_STAR__k(bc,bpt) <= (0))) || ((svg_clj.utils.cross_STAR__k(ca,cpt) <= (0))))))));
});
svg_clj.utils.style = (function svg_clj$utils$style(p__37295,style_map){
var vec__37296 = p__37295;
var seq__37297 = cljs.core.seq(vec__37296);
var first__37298 = cljs.core.first(seq__37297);
var seq__37297__$1 = cljs.core.next(seq__37297);
var k = first__37298;
var first__37298__$1 = cljs.core.first(seq__37297__$1);
var seq__37297__$2 = cljs.core.next(seq__37297__$1);
var props = first__37298__$1;
var content = seq__37297__$2;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,style_map], 0))], null),content);
});
/**
 * Calculates the arithmetic mean position of the given `pts`.
 */
svg_clj.utils.centroid_of_pts = (function svg_clj$utils$centroid_of_pts(pts){
var ndim = cljs.core.count(cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.count,pts)));
var splits = (function (){var iter__4611__auto__ = (function svg_clj$utils$centroid_of_pts_$_iter__37301(s__37302){
return (new cljs.core.LazySeq(null,(function (){
var s__37302__$1 = s__37302;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37302__$1);
if(temp__5753__auto__){
var s__37302__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37302__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37302__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37304 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37303 = (0);
while(true){
if((i__37303 < size__4610__auto__)){
var axis = cljs.core._nth(c__4609__auto__,i__37303);
cljs.core.chunk_append(b__37304,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__37303,axis,c__4609__auto__,size__4610__auto__,b__37304,s__37302__$2,temp__5753__auto__,ndim){
return (function (p1__37299_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__37299_SHARP_,axis);
});})(i__37303,axis,c__4609__auto__,size__4610__auto__,b__37304,s__37302__$2,temp__5753__auto__,ndim))
,pts));

var G__37403 = (i__37303 + (1));
i__37303 = G__37403;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37304),svg_clj$utils$centroid_of_pts_$_iter__37301(cljs.core.chunk_rest(s__37302__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37304),null);
}
} else {
var axis = cljs.core.first(s__37302__$2);
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (axis,s__37302__$2,temp__5753__auto__,ndim){
return (function (p1__37299_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__37299_SHARP_,axis);
});})(axis,s__37302__$2,temp__5753__auto__,ndim))
,pts),svg_clj$utils$centroid_of_pts_$_iter__37301(cljs.core.rest(s__37302__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),ndim));
})();
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37300_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.average,p1__37300_SHARP_);
}),splits);
});
/**
 * Calculates the axis-aligned-bounding-box of `pts`.
 */
svg_clj.utils.bounds_of_pts = (function svg_clj$utils$bounds_of_pts(pts){
var xmax = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pts));
var ymax = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pts));
var xmin = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pts));
var ymin = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pts));
return (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmin,ymin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmax,ymin], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmax,ymax], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xmin,ymax], null)],null));
});
svg_clj.utils.bb_dims = (function svg_clj$utils$bb_dims(pts){
var vec__37305 = svg_clj.utils.bounds_of_pts(pts);
var vec__37308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(0),null);
var xmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37308,(0),null);
var ymin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37308,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(1),null);
var vec__37311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(2),null);
var xmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37311,(0),null);
var ymax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37311,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37305,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xmax - xmin),(ymax - ymin)], null);
});
svg_clj.utils.offset_edge = (function svg_clj$utils$offset_edge(p__37314,d){
var vec__37315 = p__37314;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37315,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37315,(1),null);
var p = svg_clj.utils.perpendicular(svg_clj.utils.v_(b,a));
var pd = svg_clj.utils.v_STAR_(svg_clj.utils.normalize(p),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((- d)));
var xa = svg_clj.utils.v_PLUS_(a,pd);
var xb = svg_clj.utils.v_PLUS_(b,pd);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xa,xb], null);
});
svg_clj.utils.cycle_pairs = (function svg_clj$utils$cycle_pairs(pts){
var n = cljs.core.count(pts);
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.cycle(pts))));
});
svg_clj.utils.wrap_list_once = (function svg_clj$utils$wrap_list_once(s){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(s),cljs.core.last(s));
});
svg_clj.utils.every_other = (function svg_clj$utils$every_other(v){
var n = cljs.core.count(v);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37318_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,p1__37318_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.even_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n)));
});
svg_clj.utils.offset_pts = (function svg_clj$utils$offset_pts(pts,d){
var edges = svg_clj.utils.cycle_pairs(pts);
var opts = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37319_SHARP_){
return svg_clj.utils.offset_edge(p1__37319_SHARP_,d);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([edges], 0));
var oedges = svg_clj.utils.every_other(svg_clj.utils.cycle_pairs(opts));
var edge_pairs = svg_clj.utils.cycle_pairs(oedges);
return svg_clj.utils.wrap_list_once(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37320_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.line_intersection,p1__37320_SHARP_);
}),edge_pairs));
});
svg_clj.utils.scale_pt_from_center = (function svg_clj$utils$scale_pt_from_center(p__37321,p__37322,p__37323){
var vec__37324 = p__37321;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37324,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37324,(1),null);
var vec__37327 = p__37322;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37327,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37327,(1),null);
var vec__37330 = p__37323;
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37330,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37330,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((x - cx) * sx) + cx),(((y - cy) * sy) + cy)], null);
});
svg_clj.utils.ease_in_sin = (function svg_clj$utils$ease_in_sin(t){
return ((1) - Math.cos(((Math.PI * t) / (2))));
});
svg_clj.utils.ease_out_sin = (function svg_clj$utils$ease_out_sin(t){
return Math.sin(((Math.PI * t) / (2)));
});
svg_clj.utils.ease_in_out_sin = (function svg_clj$utils$ease_in_out_sin(t){
return ((Math.cos((Math.PI * t)) - (1)) / (-2));
});
svg_clj.utils.str__GT_number = (function svg_clj$utils$str__GT_number(s){
var n = (function (){try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}catch (e37333){if((e37333 instanceof Object)){
var e = e37333;
return s;
} else {
throw e37333;

}
}})();
if(typeof n === 'number'){
return n;
} else {
return s;
}
});
svg_clj.utils.numerical_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"rx","rx",1627208482),null,new cljs.core.Keyword(null,"r","r",-471384190),null,new cljs.core.Keyword(null,"y1","y1",589123466),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"cx","cx",1272694324),null,new cljs.core.Keyword(null,"cy","cy",755331060),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"x1","x1",-1863922247),null,new cljs.core.Keyword(null,"y2","y2",-718691301),null,new cljs.core.Keyword(null,"x2","x2",-1362513475),null,new cljs.core.Keyword(null,"ry","ry",-334598563),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null);
/**
 * Casts certain attribute values to numbers if they are strings.
 * Attributes to be cast are defined in `numerical-attrs` and include `:cx`, `:cy`, `:width`, etc.
 */
svg_clj.utils.cast_numerical_attrs = (function svg_clj$utils$cast_numerical_attrs(attrs){
if(cljs.core.empty_QMARK_(attrs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37334){
var vec__37335 = p__37334;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37335,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37335,(1),null);
if(cljs.core.truth_((svg_clj.utils.numerical_attrs.cljs$core$IFn$_invoke$arity$1 ? svg_clj.utils.numerical_attrs.cljs$core$IFn$_invoke$arity$1(k) : svg_clj.utils.numerical_attrs.call(null,k)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,svg_clj.utils.str__GT_number(v)]);
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]);
}
}),attrs));
}
});
svg_clj.utils.fix_ns_tag = (function svg_clj$utils$fix_ns_tag(t){
var namespace = cljs.core.namespace(t);
var name = cljs.core.name(t);
if(cljs.core.truth_(namespace)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(namespace,/\./))),":",name].join(''));
} else {
return t;
}
});
svg_clj.utils.xml__GT_hiccup = (function svg_clj$utils$xml__GT_hiccup(xml){
var temp__5751__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(xml);
if(cljs.core.truth_(temp__5751__auto__)){
var t = temp__5751__auto__;
var elem = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_clj.utils.fix_ns_tag(t)], null);
var elem__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(elem,svg_clj.utils.cast_numerical_attrs(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(xml)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(elem__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.xml__GT_hiccup,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(xml))));
} else {
return xml;
}
});
/**
 * Parses an SVG string into a Hiccup data structure, keeping all nodes.
 */
svg_clj.utils.svg_str__GT_hiccup = (function svg_clj$utils$svg_str__GT_hiccup(svg_str){
return svg_clj.utils.xml__GT_hiccup(clojure.data.xml.parse_str.cljs$core$IFn$_invoke$arity$variadic(svg_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"namespace-aware","namespace-aware",-1940564101),false], 0)));
});
/**
 * Returns a list of nodes from `zipper` that return `true` from the `matcher` predicate fn.
 *   The `matcher` fn expects a zipper location, `loc`, and returns `true` (or some value) or `false` (or nil).
 */
svg_clj.utils.get_nodes = (function svg_clj$utils$get_nodes(zipper,matcher){
var loc = zipper;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(clojure.zip.end_QMARK_(loc)){
return acc;
} else {
if(cljs.core.truth_((matcher.cljs$core$IFn$_invoke$arity$1 ? matcher.cljs$core$IFn$_invoke$arity$1(loc) : matcher.call(null,loc)))){
var G__37418 = clojure.zip.next(loc);
var G__37419 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,clojure.zip.node(loc));
loc = G__37418;
acc = G__37419;
continue;
} else {
var G__37420 = clojure.zip.next(loc);
var G__37421 = acc;
loc = G__37420;
acc = G__37421;
continue;
}
}
break;
}
});
svg_clj.utils.elem_node_QMARK_ = (function svg_clj$utils$elem_node_QMARK_(loc,key_set){
var node = clojure.zip.node(loc);
if((cljs.core.first(node) instanceof cljs.core.Keyword)){
return (!(((function (){var G__37338 = cljs.core.first(node);
return (key_set.cljs$core$IFn$_invoke$arity$1 ? key_set.cljs$core$IFn$_invoke$arity$1(G__37338) : key_set.call(null,G__37338));
})() == null)));
} else {
return null;
}
});
svg_clj.utils.hiccup_zip = (function svg_clj$utils$hiccup_zip(tree){
var branch_QMARK_ = (function (p1__37339_SHARP_){
return ((cljs.core.seqable_QMARK_(p1__37339_SHARP_)) && ((((!(cljs.core.map_QMARK_(p1__37339_SHARP_)))) && ((!(typeof p1__37339_SHARP_ === 'string'))))));
});
var children = (function (x){
var c = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.map_QMARK_,cljs.core.rest(x));
if(cljs.core.empty_QMARK_(c)){
return null;
} else {
return c;
}
});
var make_node = (function (_,c){
if(cljs.core.empty_QMARK_(c)){
return null;
} else {
return cljs.core.vec(c);
}
});
return clojure.zip.zipper(branch_QMARK_,children,make_node,tree);
});
svg_clj.utils.svg_element_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"circle","circle",1903212362),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),null,new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
/**
 * Get SVG elements from `tree`, a Hiccup data structure.
 * Optionally, pass in a set of keys  as `key-set` to use when matching nodes from the tree.
 */
svg_clj.utils.get_elems = (function svg_clj$utils$get_elems(var_args){
var G__37342 = arguments.length;
switch (G__37342) {
case 1:
return svg_clj.utils.get_elems.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return svg_clj.utils.get_elems.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.utils.get_elems.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return svg_clj.utils.get_elems.cljs$core$IFn$_invoke$arity$2(tree,svg_clj.utils.svg_element_keys);
}));

(svg_clj.utils.get_elems.cljs$core$IFn$_invoke$arity$2 = (function (tree,key_set){
var zipper = svg_clj.utils.hiccup_zip(tree);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,svg_clj.utils.get_nodes(zipper,(function (p1__37340_SHARP_){
return svg_clj.utils.elem_node_QMARK_(p1__37340_SHARP_,key_set);
})));
}));

(svg_clj.utils.get_elems.cljs$lang$maxFixedArity = 2);

/**
 * Parses an SVG string into a sequence of SVG elements compatible with this library.
 * Elements are 
 */
svg_clj.utils.svg_str__GT_elems = (function svg_clj$utils$svg_str__GT_elems(var_args){
var G__37344 = arguments.length;
switch (G__37344) {
case 1:
return svg_clj.utils.svg_str__GT_elems.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return svg_clj.utils.svg_str__GT_elems.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.utils.svg_str__GT_elems.cljs$core$IFn$_invoke$arity$1 = (function (svg_str){
return svg_clj.utils.svg_str__GT_elems.cljs$core$IFn$_invoke$arity$2(svg_str,svg_clj.utils.svg_element_keys);
}));

(svg_clj.utils.svg_str__GT_elems.cljs$core$IFn$_invoke$arity$2 = (function (svg_str,key_set){
return svg_clj.utils.get_elems.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.xml__GT_hiccup(clojure.data.xml.parse_str.cljs$core$IFn$_invoke$arity$variadic(svg_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"namespace-aware","namespace-aware",-1940564101),false], 0))),key_set);
}));

(svg_clj.utils.svg_str__GT_elems.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=svg_clj.utils.js.map
