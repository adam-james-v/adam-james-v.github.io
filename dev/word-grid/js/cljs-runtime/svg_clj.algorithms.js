goog.provide('svg_clj.algorithms');
svg_clj.algorithms.abs = Math.abs;
svg_clj.algorithms.pow = Math.pow;
svg_clj.algorithms.circumscribe_tri = (function svg_clj$algorithms$circumscribe_tri(p__37352){
var vec__37359 = p__37352;
var vec__37362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(0),null);
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37362,(1),null);
var vec__37365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(1),null);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37365,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37365,(1),null);
var vec__37368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37359,(2),null);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37368,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37368,(1),null);
var A = (bx - ax);
var B = (by - ay);
var C = (cx - ax);
var D = (cy - ay);
var E = ((A * (ax + bx)) + (B * (ay + by)));
var F = ((C * (ax + cx)) + (D * (ay + cy)));
var G = ((2) * ((A * (cy - by)) - (B * (cx - bx))));
if(((svg_clj.algorithms.abs.cljs$core$IFn$_invoke$arity$1 ? svg_clj.algorithms.abs.cljs$core$IFn$_invoke$arity$1(G) : svg_clj.algorithms.abs.call(null,G)) > 1.0E-6)){
var cx__$1 = (((D * E) - (B * F)) / G);
var cy__$1 = (((A * F) - (C * E)) / G);
var dx = (cx__$1 - ax);
var dy = (cy__$1 - ay);
var r = ((svg_clj.algorithms.pow.cljs$core$IFn$_invoke$arity$2 ? svg_clj.algorithms.pow.cljs$core$IFn$_invoke$arity$2(dx,(2)) : svg_clj.algorithms.pow.call(null,dx,(2))) + (svg_clj.algorithms.pow.cljs$core$IFn$_invoke$arity$2 ? svg_clj.algorithms.pow.cljs$core$IFn$_invoke$arity$2(dy,(2)) : svg_clj.algorithms.pow.call(null,dy,(2))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cx__$1,new cljs.core.Keyword(null,"y","y",-1757859776),cy__$1,new cljs.core.Keyword(null,"radius-squared","radius-squared",555261953),r], null);
} else {
return null;
}
});
svg_clj.algorithms.edges = (function svg_clj$algorithms$edges(pts){
return cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(pts),cljs.core.first(pts)));
});
svg_clj.algorithms.contains_pt_QMARK_ = (function svg_clj$algorithms$contains_pt_QMARK_(p__37372,p__37373){
var map__37374 = p__37372;
var map__37374__$1 = cljs.core.__destructure_map(map__37374);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37374__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37374__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var radius_squared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37374__$1,new cljs.core.Keyword(null,"radius-squared","radius-squared",555261953));
var vec__37375 = p__37373;
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37375,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37375,(1),null);
var distance_squared = ((function (){var G__37378 = (x - px);
var G__37379 = (2);
return (svg_clj.algorithms.pow.cljs$core$IFn$_invoke$arity$2 ? svg_clj.algorithms.pow.cljs$core$IFn$_invoke$arity$2(G__37378,G__37379) : svg_clj.algorithms.pow.call(null,G__37378,G__37379));
})() + (function (){var G__37380 = (y - py);
var G__37381 = (2);
return (svg_clj.algorithms.pow.cljs$core$IFn$_invoke$arity$2 ? svg_clj.algorithms.pow.cljs$core$IFn$_invoke$arity$2(G__37380,G__37381) : svg_clj.algorithms.pow.call(null,G__37380,G__37381));
})());
return (distance_squared < radius_squared);
});
svg_clj.algorithms.outer_edges = (function svg_clj$algorithms$outer_edges(tris){
var all_edges = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.algorithms.edges,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tris], 0));
var matches = (function (edge){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([edge,cljs.core.reverse(edge)]),all_edges);
});
var appears_once = (function (edge){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matches(edge)),(1));
});
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(appears_once,all_edges);
});
svg_clj.algorithms.make_new_tris = (function svg_clj$algorithms$make_new_tris(containers,pt){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37383){
var vec__37384 = p__37383;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37384,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37384,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,p2,pt], null);
}),svg_clj.algorithms.outer_edges(containers)));
});
svg_clj.algorithms.add_pt_to_tris = (function svg_clj$algorithms$add_pt_to_tris(tris,pt){
var containers = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37387_SHARP_){
return svg_clj.algorithms.contains_pt_QMARK_(svg_clj.algorithms.circumscribe_tri(p1__37387_SHARP_),pt);
}),tris);
var new_tris = svg_clj.algorithms.make_new_tris(containers,pt);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(tris,containers),new_tris);
});
svg_clj.algorithms.delaunay = (function svg_clj$algorithms$delaunay(pts){
var pts__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37394){
var vec__37395 = p__37394;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37395,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37395,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}),pts);
var pt_indices = cljs.core.zipmap(pts__$1,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(pts__$1)));
var vec__37391 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37388_SHARP_){
return svg_clj.utils.v_STAR_(p1__37388_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
}),svg_clj.utils.bounds_of_pts(pts__$1));
var bl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37391,(0),null);
var br = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37391,(1),null);
var tr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37391,(2),null);
var tl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37391,(3),null);
var initial = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tl,tr,bl], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bl,tr,br], null)]);
var with_bounds = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(svg_clj.algorithms.add_pt_to_tris,initial,pts__$1);
var tris = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37389_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([tl,tr,bl,br]),p1__37389_SHARP_);
}),with_bounds);
var tri_indices = (function (tri){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37390_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt_indices,p1__37390_SHARP_);
}),tri);
});
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pts","pts",-2072816694),pts__$1,new cljs.core.Keyword(null,"tris","tris",-1299590805),tris,new cljs.core.Keyword(null,"tri-indices","tri-indices",-1086222030),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tri_indices,tris),new cljs.core.Keyword(null,"edges","edges",-694791395),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.algorithms.edges,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tris], 0)))], null);
});
svg_clj.algorithms.remove_colinears = (function svg_clj$algorithms$remove_colinears(pts){
var indices = cljs.core.zipmap(pts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(pts)));
var tris = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((3),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pts,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),pts)));
var clpts = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37401_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.colinear_QMARK_,p1__37401_SHARP_);
}),tris)));
var xindices = cljs.core.vals(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,indices,clpts));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37402_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pts,p1__37402_SHARP_);
}),xindices);
});
svg_clj.algorithms.clip_one_ear = (function svg_clj$algorithms$clip_one_ear(pts){
var pts__$1 = cljs.core.vec(pts);
var indices = cljs.core.zipmap(pts__$1,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(pts__$1)));
var corners = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37405_SHARP_){
var G__37409 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.corner_condition,p1__37405_SHARP_);
var fexpr__37408 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"convex","convex",-2042722541),null], null), null);
return (fexpr__37408.cljs$core$IFn$_invoke$arity$1 ? fexpr__37408.cljs$core$IFn$_invoke$arity$1(G__37409) : fexpr__37408.call(null,G__37409));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((3),(1),(function (p1__37404_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__37404_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),p1__37404_SHARP_));
})(pts__$1)));
var clear_QMARK_ = (function (corner){
return cljs.core.not(cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__37406_SHARP_){
return svg_clj.utils.pt_inside_QMARK_(corner,p1__37406_SHARP_);
}),pts__$1)));
});
var tri = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(clear_QMARK_,corners));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pts","pts",-2072816694),pts__$1,new cljs.core.Keyword(null,"npts","npts",263261103),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37407_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pts__$1,p1__37407_SHARP_);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(indices,cljs.core.second(tri))))),new cljs.core.Keyword(null,"tri","tri",759380296),tri], null);
});
svg_clj.algorithms.clip_ears = (function svg_clj$algorithms$clip_ears(var_args){
var G__37412 = arguments.length;
switch (G__37412) {
case 1:
return svg_clj.algorithms.clip_ears.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return svg_clj.algorithms.clip_ears.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.algorithms.clip_ears.cljs$core$IFn$_invoke$arity$1 = (function (pts){
return svg_clj.algorithms.clip_ears.cljs$core$IFn$_invoke$arity$4(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indices","indices",-1218138343),cljs.core.zipmap(pts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(pts)))], null),pts,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
}));

(svg_clj.algorithms.clip_ears.cljs$core$IFn$_invoke$arity$4 = (function (data,pts,tris,indices){
while(true){
if((cljs.core.count(pts) < (3))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tris","tris",-1299590805),tris,new cljs.core.Keyword(null,"tri-indices","tri-indices",-1086222030),indices], null)], 0));
} else {
var map__37413 = svg_clj.algorithms.clip_one_ear(pts);
var map__37413__$1 = cljs.core.__destructure_map(map__37413);
var npts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37413__$1,new cljs.core.Keyword(null,"npts","npts",263261103));
var tri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37413__$1,new cljs.core.Keyword(null,"tri","tri",759380296));
var local_indices = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (data,pts,tris,indices,map__37413,map__37413__$1,npts,tri){
return (function (p1__37410_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indices","indices",-1218138343).cljs$core$IFn$_invoke$arity$1(data),p1__37410_SHARP_);
});})(data,pts,tris,indices,map__37413,map__37413__$1,npts,tri))
,tri);
var G__37434 = data;
var G__37435 = npts;
var G__37436 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tris,tri);
var G__37437 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indices,local_indices);
data = G__37434;
pts = G__37435;
tris = G__37436;
indices = G__37437;
continue;
}
break;
}
}));

(svg_clj.algorithms.clip_ears.cljs$lang$maxFixedArity = 4);

svg_clj.algorithms.hull = (function svg_clj$algorithms$hull(var_args){
var G__37417 = arguments.length;
switch (G__37417) {
case 1:
return svg_clj.algorithms.hull.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return svg_clj.algorithms.hull.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.algorithms.hull.cljs$core$IFn$_invoke$arity$1 = (function (pts){
return svg_clj.algorithms.hull.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pt","pt",556460867),cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pts))], null)], null),pts);
}));

(svg_clj.algorithms.hull.cljs$core$IFn$_invoke$arity$2 = (function (acc,pts){
while(true){
if((((cljs.core.count(acc) > cljs.core.count(pts))) || (((((1) < cljs.core.count(acc))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(cljs.core.first(acc)),new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc)))))))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pt","pt",556460867),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(acc));
} else {
var prev = new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc));
var dir = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(acc)))?svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),prev):new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(acc))));
var f = ((function (acc,pts,prev,dir){
return (function (pt){
var a = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [dir,prev,pt], null)))))?svg_clj.utils.angle_from_pts(dir,prev,pt):null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),pt,new cljs.core.Keyword(null,"angle","angle",1622094254),a], null);
});})(acc,pts,prev,dir))
;
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (acc,pts,prev,dir,f){
return (function (p1__37415_SHARP_){
var G__37424 = (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(p1__37415_SHARP_) - (180));
return (svg_clj.utils.abs.cljs$core$IFn$_invoke$arity$1 ? svg_clj.utils.abs.cljs$core$IFn$_invoke$arity$1(G__37424) : svg_clj.utils.abs.call(null,G__37424));
});})(acc,pts,prev,dir,f))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (acc,pts,prev,dir,f){
return (function (p1__37414_SHARP_){
return (new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(p1__37414_SHARP_) == null);
});})(acc,pts,prev,dir,f))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,pts)));
var G__37445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(sorted));
var G__37446 = pts;
acc = G__37445;
pts = G__37446;
continue;
}
break;
}
}));

(svg_clj.algorithms.hull.cljs$lang$maxFixedArity = 2);

svg_clj.algorithms.nested_hull = (function svg_clj$algorithms$nested_hull(var_args){
var G__37426 = arguments.length;
switch (G__37426) {
case 1:
return svg_clj.algorithms.nested_hull.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return svg_clj.algorithms.nested_hull.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.algorithms.nested_hull.cljs$core$IFn$_invoke$arity$1 = (function (pts){
return svg_clj.algorithms.nested_hull.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,pts);
}));

(svg_clj.algorithms.nested_hull.cljs$core$IFn$_invoke$arity$2 = (function (acc,pts){
while(true){
if(((3) > cljs.core.count(pts))){
return acc;
} else {
var hull = svg_clj.algorithms.hull.cljs$core$IFn$_invoke$arity$1(pts);
var npts = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(hull),pts);
var G__37450 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,hull);
var G__37451 = npts;
acc = G__37450;
pts = G__37451;
continue;
}
break;
}
}));

(svg_clj.algorithms.nested_hull.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=svg_clj.algorithms.js.map
