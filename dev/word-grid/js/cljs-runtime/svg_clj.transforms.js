goog.provide('svg_clj.transforms');
svg_clj.transforms.style = (function svg_clj$transforms$style(elem,style_map){
return svg_clj.utils.style(elem,style_map);
});
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.transforms !== 'undefined') && (typeof svg_clj.transforms.centroid !== 'undefined')){
} else {
svg_clj.transforms.centroid = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37914 = cljs.core.get_global_hierarchy;
return (fexpr__37914.cljs$core$IFn$_invoke$arity$0 ? fexpr__37914.cljs$core$IFn$_invoke$arity$0() : fexpr__37914.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.transforms","centroid"),(function (element){
if((cljs.core.first(element) instanceof cljs.core.Keyword)){
return cljs.core.first(element);
} else {
return new cljs.core.Keyword(null,"list","list",765357683);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (elems){
return svg_clj.utils.centroid_of_pts(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.centroid,elems)));
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__37915){
var vec__37916 = p__37915;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37916,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37916,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(props)], null);
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (p__37919){
var vec__37920 = p__37919;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37920,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37920,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(props)], null);
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__37925){
var vec__37926 = p__37925;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37926,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37926,(1),null);
var a = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37923_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,p1__37923_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y1","y1",589123466)], null));
var b = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37924_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,p1__37924_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"y2","y2",-718691301)], null));
return svg_clj.utils.centroid_of_pts(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (p__37929){
var vec__37930 = p__37929;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37930,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37930,(1),null);
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.s__GT_v,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props),/ /));
return svg_clj.utils.centroid_of_pts(pts);
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),(function (p__37933){
var vec__37934 = p__37933;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37934,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37934,(1),null);
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.s__GT_v,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props),/ /));
return svg_clj.utils.centroid_of_pts(pts);
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (p__37937){
var vec__37938 = p__37937;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37938,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37938,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(props) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props) / 2.0)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(props) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props) / 2.0))], null);
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__37941){
var vec__37942 = p__37941;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37942,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37942,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(props) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props) / 2.0)),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(props) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props) / 2.0))], null);
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__37945){
var vec__37946 = p__37945;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37946,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37946,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37946,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(props)], null);
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"path","path",-188191168),(function (elem){
return svg_clj.path.centroid(elem);
}));
svg_clj.transforms.centroid.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"g","g",1738089905),(function (p__37949){
var vec__37950 = p__37949;
var seq__37951 = cljs.core.seq(vec__37950);
var first__37952 = cljs.core.first(seq__37951);
var seq__37951__$1 = cljs.core.next(seq__37951);
var _ = first__37952;
var first__37952__$1 = cljs.core.first(seq__37951__$1);
var seq__37951__$2 = cljs.core.next(seq__37951__$1);
var ___$1 = first__37952__$1;
var content = seq__37951__$2;
return svg_clj.utils.centroid_of_pts(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.centroid,content)));
}));
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.transforms !== 'undefined') && (typeof svg_clj.transforms.bounds !== 'undefined')){
} else {
/**
 * Calculates the axis-aligned-bounding-box of `element` or list of elements.
 */
svg_clj.transforms.bounds = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37954 = cljs.core.get_global_hierarchy;
return (fexpr__37954.cljs$core$IFn$_invoke$arity$0 ? fexpr__37954.cljs$core$IFn$_invoke$arity$0() : fexpr__37954.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.transforms","bounds"),(function (element){
if((cljs.core.first(element) instanceof cljs.core.Keyword)){
return cljs.core.first(element);
} else {
return new cljs.core.Keyword(null,"list","list",765357683);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null)], null);
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (elems){
return svg_clj.utils.bounds_of_pts(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.transforms.bounds,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([elems], 0)));
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__37956){
var vec__37957 = p__37956;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37957,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37957,(1),null);
var c = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(props)], null);
var r = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(props);
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37955_SHARP_){
return svg_clj.utils.v_PLUS_(c,p1__37955_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),r], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- r),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- r)], null)], null));
return svg_clj.utils.bounds_of_pts(pts);
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (p__37965){
var vec__37966 = p__37965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37966,(1),null);
var xf = svg_clj.utils.str__GT_xf_map(cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(0 0 0)"));
var deg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null));
var mx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null));
var my = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null));
var c = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(props)], null);
var rx = new cljs.core.Keyword(null,"rx","rx",1627208482).cljs$core$IFn$_invoke$arity$1(props);
var ry = new cljs.core.Keyword(null,"ry","ry",-334598563).cljs$core$IFn$_invoke$arity$1(props);
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37960_SHARP_){
return svg_clj.utils.v_PLUS_(c,p1__37960_SHARP_);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- rx),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- ry)], null)], null));
var bb = svg_clj.utils.bounds_of_pts(pts);
var obb = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37961_SHARP_){
return svg_clj.utils.rotate_pt_around_center(p1__37961_SHARP_,deg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null));
}),bb);
var xpts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37962_SHARP_){
return svg_clj.utils.rotate_pt_around_center(p1__37962_SHARP_,deg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null));
}),pts);
var small_bb = svg_clj.utils.bounds_of_pts(xpts);
var large_bb = svg_clj.utils.bounds_of_pts(obb);
return svg_clj.utils.bounds_of_pts(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__37963_SHARP_,p2__37964_SHARP_){
return svg_clj.utils.centroid_of_pts(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37963_SHARP_,p2__37964_SHARP_], null));
}),small_bb,large_bb));
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__37971){
var vec__37972 = p__37971;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37972,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37972,(1),null);
var a = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37969_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,p1__37969_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x1","x1",-1863922247),new cljs.core.Keyword(null,"y1","y1",589123466)], null));
var b = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37970_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,p1__37970_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"y2","y2",-718691301)], null));
return svg_clj.utils.bounds_of_pts(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null));
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (p__37975){
var vec__37976 = p__37975;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37976,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37976,(1),null);
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.s__GT_v,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props),/ /));
return svg_clj.utils.bounds_of_pts(pts);
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),(function (p__37979){
var vec__37980 = p__37979;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37980,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37980,(1),null);
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.s__GT_v,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props),/ /));
return svg_clj.utils.bounds_of_pts(pts);
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (p__37984){
var vec__37985 = p__37984;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37985,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37985,(1),null);
var xf = svg_clj.utils.str__GT_xf_map(cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(0 0 0)"));
var deg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null));
var mx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null));
var my = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(props);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(props);
var w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props);
var h = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props);
var pts = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null)], null);
var xpts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37983_SHARP_){
return svg_clj.utils.rotate_pt_around_center(p1__37983_SHARP_,deg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null));
}),pts);
return svg_clj.utils.bounds_of_pts(xpts);
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__37989){
var vec__37990 = p__37989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37990,(1),null);
var xf = svg_clj.utils.str__GT_xf_map(cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(0 0 0)"));
var deg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null));
var mx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null));
var my = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(props);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(props);
var w = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props);
var h = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props);
var pts = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + w),(y + h)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + h)], null)], null);
var xpts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37988_SHARP_){
return svg_clj.utils.rotate_pt_around_center(p1__37988_SHARP_,deg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mx,my], null));
}),pts);
return svg_clj.utils.bounds_of_pts(xpts);
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__37994){
var vec__37995 = p__37994;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37995,(0),null);
var map__37998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37995,(1),null);
var map__37998__$1 = cljs.core.__destructure_map(map__37998);
var props = map__37998__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37995,(2),null);
var xf = svg_clj.utils.str__GT_xf_map(cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(0 0 0)"));
var deg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null));
var ar = 0.6;
var h = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(font_size));
var hh = (h / 2.0);
var hw = (((ar * h) * cljs.core.count(text)) / 2.0);
var pts = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - hw),(y - hh)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + hw),(y - hh)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + hw),(y + hh)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - hw),(y + hh)], null)], null);
var xpts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37993_SHARP_){
return svg_clj.utils.rotate_pt_around_center(p1__37993_SHARP_,deg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),pts);
return svg_clj.utils.bounds_of_pts(xpts);
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"path","path",-188191168),(function (elem){
return svg_clj.path.bounds(elem);
}));
svg_clj.transforms.bounds.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"g","g",1738089905),(function (p__37999){
var vec__38000 = p__37999;
var seq__38001 = cljs.core.seq(vec__38000);
var first__38002 = cljs.core.first(seq__38001);
var seq__38001__$1 = cljs.core.next(seq__38001);
var _ = first__38002;
var first__38002__$1 = cljs.core.first(seq__38001__$1);
var seq__38001__$2 = cljs.core.next(seq__38001__$1);
var ___$1 = first__38002__$1;
var content = seq__38001__$2;
return svg_clj.utils.bounds_of_pts(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.transforms.bounds,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([content], 0)));
}));
svg_clj.transforms.bb_dims = (function svg_clj$transforms$bb_dims(element){
var vec__38003 = svg_clj.transforms.bounds.cljs$core$IFn$_invoke$arity$1(element);
var vec__38006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38003,(0),null);
var xmin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006,(0),null);
var ymin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38003,(1),null);
var vec__38009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38003,(2),null);
var xmax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38009,(0),null);
var ymax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38009,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38003,(3),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(xmax - xmin),(ymax - ymin)], null);
});
svg_clj.transforms.get_props = (function svg_clj$transforms$get_props(props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotate","rotate",152705015),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),svg_clj.utils.str__GT_xf_map(cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"transform","transform",1381301764)))], 0));
});
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.transforms !== 'undefined') && (typeof svg_clj.transforms.translate !== 'undefined')){
} else {
svg_clj.transforms.translate = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38012 = cljs.core.get_global_hierarchy;
return (fexpr__38012.cljs$core$IFn$_invoke$arity$0 ? fexpr__38012.cljs$core$IFn$_invoke$arity$0() : fexpr__38012.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.transforms","translate"),(function (element,_){
if((cljs.core.first(element) instanceof cljs.core.Keyword)){
return cljs.core.first(element);
} else {
return new cljs.core.Keyword(null,"list","list",765357683);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (elems,p__38014){
var vec__38015 = p__38014;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38015,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38013_SHARP_){
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(p1__38013_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),elems);
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__38020,p__38021){
var vec__38023 = p__38020;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38023,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38023,(1),null);
var vec__38026 = p__38021;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38026,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38026,(1),null);
var xf = svg_clj.transforms.get_props(props);
var cx = new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(props);
var cy = new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(props);
var new_xf = cljs.core.assoc_in(cljs.core.assoc_in(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null),(x + cx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null),(y + cy));
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf)),new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core._PLUS_,x),new cljs.core.Keyword(null,"cy","cy",755331060),cljs.core._PLUS_,y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (p__38029,p__38030){
var vec__38031 = p__38029;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38031,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38031,(1),null);
var vec__38034 = p__38030;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38034,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38034,(1),null);
var xf = svg_clj.transforms.get_props(props);
var cx = new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(props);
var cy = new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(props);
var new_xf = cljs.core.assoc_in(cljs.core.assoc_in(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null),(x + cx)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null),(y + cy));
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf)),new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core._PLUS_,x),new cljs.core.Keyword(null,"cy","cy",755331060),cljs.core._PLUS_,y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38037,p__38038){
var vec__38039 = p__38037;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38039,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38039,(1),null);
var vec__38042 = p__38038;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38042,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38042,(1),null);
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,x),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,y),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,x),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (p__38045,p__38046){
var vec__38047 = p__38045;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(1),null);
var vec__38050 = p__38046;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38050,(1),null);
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.s__GT_v,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props),/ /));
var xpts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),pts));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xpts))], null);
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),(function (p__38053,p__38054){
var vec__38055 = p__38053;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38055,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38055,(1),null);
var vec__38058 = p__38054;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058,(1),null);
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.s__GT_v,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props),/ /));
var xpts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v_PLUS_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),pts));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xpts))], null);
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (p__38064,p__38065){
var vec__38066 = p__38064;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38066,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38066,(1),null);
var vec__38069 = p__38065;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38069,(1),null);
var vec__38072 = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38072,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38072,(1),null);
var xf = svg_clj.transforms.get_props(props);
var new_xf = cljs.core.assoc_in(cljs.core.assoc_in(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null),(cx + x)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null),(cy + y));
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf)),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,x),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__38075,p__38076){
var vec__38077 = p__38075;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38077,(1),null);
var vec__38080 = p__38076;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38080,(1),null);
var vec__38083 = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(1),null);
var xf = svg_clj.transforms.get_props(props);
var new_xf = cljs.core.assoc_in(cljs.core.assoc_in(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null),(cx + x)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null),(cy + y));
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf)),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,x),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,y);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__38086,p__38087){
var vec__38088 = p__38086;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38088,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38088,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38088,(2),null);
var vec__38091 = p__38087;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38091,(1),null);
var xf = svg_clj.transforms.get_props(props);
var new_xf = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null),cljs.core._PLUS_,x),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null),cljs.core._PLUS_,y);
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf)),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,x),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,y);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props,text], null);
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"path","path",-188191168),(function (elem,p__38094){
var vec__38095 = p__38094;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38095,(1),null);
return svg_clj.path.translate(elem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}));
svg_clj.transforms.translate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"g","g",1738089905),(function (p__38099,p__38100){
var vec__38101 = p__38099;
var seq__38102 = cljs.core.seq(vec__38101);
var first__38103 = cljs.core.first(seq__38102);
var seq__38102__$1 = cljs.core.next(seq__38102);
var k = first__38103;
var first__38103__$1 = cljs.core.first(seq__38102__$1);
var seq__38102__$2 = cljs.core.next(seq__38102__$1);
var props = first__38103__$1;
var content = seq__38102__$2;
var vec__38104 = p__38100;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38104,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38104,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38098_SHARP_){
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(p1__38098_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),content)));
}));
/**
 * Rotate an element by using the SVG transform property.
 *   This function is used to transform elements that cannot 'bake' the transform into their other geometric properties. For example, the ellipse and circle elements have only center and radius properties which cannot affect orientation.
 */
svg_clj.transforms.rotate_element_by_transform = (function svg_clj$transforms$rotate_element_by_transform(p__38107,deg){
var vec__38108 = p__38107;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38108,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38108,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38108,(2),null);
var xf = svg_clj.transforms.get_props(props);
var new_xf = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null),cljs.core._PLUS_,deg);
var new_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf));
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props,(cljs.core.truth_(content)?content:null)], null)));
});
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.transforms !== 'undefined') && (typeof svg_clj.transforms.rotate !== 'undefined')){
} else {
svg_clj.transforms.rotate = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38111 = cljs.core.get_global_hierarchy;
return (fexpr__38111.cljs$core$IFn$_invoke$arity$0 ? fexpr__38111.cljs$core$IFn$_invoke$arity$0() : fexpr__38111.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.transforms","rotate"),(function (element,_){
if((cljs.core.first(element) instanceof cljs.core.Keyword)){
return cljs.core.first(element);
} else {
return new cljs.core.Keyword(null,"list","list",765357683);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (elems,deg){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38112_SHARP_){
return svg_clj.transforms.rotate.cljs$core$IFn$_invoke$arity$2(p1__38112_SHARP_,deg);
}),elems);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__38113,deg){
var vec__38114 = p__38113;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38114,(1),null);
return svg_clj.transforms.rotate_element_by_transform(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null),deg);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (p__38117,deg){
var vec__38118 = p__38117;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38118,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38118,(1),null);
return svg_clj.transforms.rotate_element_by_transform(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null),deg);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38124,deg){
var vec__38125 = p__38124;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38125,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38125,(1),null);
var pts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(props)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(props)], null)], null);
var vec__38128 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38123_SHARP_){
return svg_clj.utils.v_PLUS_(p1__38123_SHARP_,svg_clj.utils.centroid_of_pts(pts));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38122_SHARP_){
return svg_clj.utils.rotate_pt(p1__38122_SHARP_,deg);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38121_SHARP_){
return svg_clj.utils.v_(p1__38121_SHARP_,svg_clj.utils.centroid_of_pts(pts));
}),pts)));
var vec__38131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(0),null);
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38131,(0),null);
var y1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38131,(1),null);
var vec__38134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38128,(1),null);
var x2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38134,(0),null);
var y2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38134,(1),null);
var new_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"x1","x1",-1863922247),x1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y1","y1",589123466),y1,new cljs.core.Keyword(null,"x2","x2",-1362513475),x2,new cljs.core.Keyword(null,"y2","y2",-718691301),y2], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (p__38140,deg){
var vec__38141 = p__38140;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38141,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38141,(1),null);
var ctr = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null));
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.s__GT_v,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props),/ /));
var xpts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38139_SHARP_){
return svg_clj.utils.v_PLUS_(p1__38139_SHARP_,ctr);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38138_SHARP_){
return svg_clj.utils.rotate_pt(p1__38138_SHARP_,deg);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38137_SHARP_){
return svg_clj.utils.v_(p1__38137_SHARP_,ctr);
}),pts))));
var xprops = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xpts));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,xprops], null);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),(function (p__38147,deg){
var vec__38148 = p__38147;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38148,(1),null);
var ctr = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null));
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.s__GT_v,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props),/ /));
var xpts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38146_SHARP_){
return svg_clj.utils.v_PLUS_(p1__38146_SHARP_,ctr);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38145_SHARP_){
return svg_clj.utils.rotate_pt(p1__38145_SHARP_,deg);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38144_SHARP_){
return svg_clj.utils.v_(p1__38144_SHARP_,ctr);
}),pts))));
var xprops = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xpts));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,xprops], null);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (p__38151,deg){
var vec__38152 = p__38151;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38152,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38152,(1),null);
var vec__38155 = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38155,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38155,(1),null);
var xf = svg_clj.transforms.get_props(props);
var new_xf = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null),cljs.core._PLUS_,deg),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null),cx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null),cy);
var new_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__38158,deg){
var vec__38159 = p__38158;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38159,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38159,(1),null);
var vec__38162 = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38162,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38162,(1),null);
var xf = svg_clj.transforms.get_props(props);
var new_xf = cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(0)], null),cljs.core._PLUS_,deg),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null),cx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null),cy);
var new_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__38165,deg){
var vec__38166 = p__38165;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38166,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38166,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38166,(2),null);
return svg_clj.transforms.rotate_element_by_transform(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props,text], null),deg);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"path","path",-188191168),(function (elem,deg){
return svg_clj.path.rotate(elem,deg);
}));
svg_clj.transforms.rotate.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"g","g",1738089905),(function (p__38169,deg){
var vec__38170 = p__38169;
var seq__38171 = cljs.core.seq(vec__38170);
var first__38172 = cljs.core.first(seq__38171);
var seq__38171__$1 = cljs.core.next(seq__38171);
var k = first__38172;
var first__38172__$1 = cljs.core.first(seq__38171__$1);
var seq__38171__$2 = cljs.core.next(seq__38171__$1);
var props = first__38172__$1;
var content = seq__38171__$2;
var elem = vec__38170;
var vec__38173 = svg_clj.utils.centroid_of_pts(svg_clj.transforms.bounds.cljs$core$IFn$_invoke$arity$1(elem));
var gcx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38173,(0),null);
var gcy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38173,(1),null);
var xfcontent = (function (){var iter__4611__auto__ = (function svg_clj$transforms$iter__38176(s__38177){
return (new cljs.core.LazySeq(null,(function (){
var s__38177__$1 = s__38177;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38177__$1);
if(temp__5753__auto__){
var s__38177__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38177__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__38177__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__38179 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__38178 = (0);
while(true){
if((i__38178 < size__4610__auto__)){
var child = cljs.core._nth(c__4609__auto__,i__38178);
cljs.core.chunk_append(b__38179,(function (){var ch = svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- gcx),(- gcy)], null));
var ctr = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.first(ch)))?svg_clj.utils.centroid_of_pts(svg_clj.transforms.bounds.cljs$core$IFn$_invoke$arity$1(ch)):svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(ch));
var xfm = svg_clj.utils.v_PLUS_(svg_clj.utils.rotate_pt(ctr,deg),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcx,gcy], null));
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.rotate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(ch,svg_clj.utils.v_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),ctr)),deg),xfm);
})());

var G__38378 = (i__38178 + (1));
i__38178 = G__38378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38179),svg_clj$transforms$iter__38176(cljs.core.chunk_rest(s__38177__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38179),null);
}
} else {
var child = cljs.core.first(s__38177__$2);
return cljs.core.cons((function (){var ch = svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(child,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- gcx),(- gcy)], null));
var ctr = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.first(ch)))?svg_clj.utils.centroid_of_pts(svg_clj.transforms.bounds.cljs$core$IFn$_invoke$arity$1(ch)):svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(ch));
var xfm = svg_clj.utils.v_PLUS_(svg_clj.utils.rotate_pt(ctr,deg),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcx,gcy], null));
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.rotate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(ch,svg_clj.utils.v_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),ctr)),deg),xfm);
})(),svg_clj$transforms$iter__38176(cljs.core.rest(s__38177__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(content);
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),xfcontent));
}));
svg_clj.transforms.scale_by_transform = (function svg_clj$transforms$scale_by_transform(p__38181,p__38182){
var vec__38183 = p__38181;
var seq__38184 = cljs.core.seq(vec__38183);
var first__38185 = cljs.core.first(seq__38184);
var seq__38184__$1 = cljs.core.next(seq__38184);
var k = first__38185;
var first__38185__$1 = cljs.core.first(seq__38184__$1);
var seq__38184__$2 = cljs.core.next(seq__38184__$1);
var props = first__38185__$1;
var content = seq__38184__$2;
var vec__38186 = p__38182;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38186,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38186,(1),null);
var xf = svg_clj.utils.str__GT_xf_map(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(props));
var new_xf = cljs.core.update.cljs$core$IFn$_invoke$arity$3(xf,new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__38180_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),p1__38180_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)));
var new_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);

return content;
});
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.transforms !== 'undefined') && (typeof svg_clj.transforms.scale !== 'undefined')){
} else {
svg_clj.transforms.scale = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38189 = cljs.core.get_global_hierarchy;
return (fexpr__38189.cljs$core$IFn$_invoke$arity$0 ? fexpr__38189.cljs$core$IFn$_invoke$arity$0() : fexpr__38189.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.transforms","scale"),(function (element,_){
if((cljs.core.first(element) instanceof cljs.core.Keyword)){
return cljs.core.first(element);
} else {
return new cljs.core.Keyword(null,"list","list",765357683);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (elems,p__38191){
var vec__38192 = p__38191;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38192,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38192,(1),null);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38190_SHARP_){
return svg_clj.transforms.scale.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),p1__38190_SHARP_);
}),elems);
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__38196,p__38197){
var vec__38198 = p__38196;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38198,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38198,(1),null);
var vec__38201 = p__38197;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(1),null);
var vec__38204 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38195_SHARP_){
return Math.abs(p1__38195_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null));
var sx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(0),null);
var sy__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(1),null);
var circle_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sx__$1,sy__$1);
var r = new cljs.core.Keyword(null,"r","r",-471384190).cljs$core$IFn$_invoke$arity$1(props);
var new_props = ((circle_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"r","r",-471384190),(r * sx__$1)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"r","r",-471384190)),new cljs.core.Keyword(null,"rx","rx",1627208482),(sx__$1 * r)),new cljs.core.Keyword(null,"ry","ry",-334598563),(sy__$1 * r)));
var k = ((circle_QMARK_)?new cljs.core.Keyword(null,"circle","circle",1903212362):new cljs.core.Keyword(null,"ellipse","ellipse",1135891702));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (p__38210,p__38211){
var vec__38212 = p__38210;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38212,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38212,(1),null);
var vec__38215 = p__38211;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38215,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38215,(1),null);
var vec__38218 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38207_SHARP_){
return Math.abs(p1__38207_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null));
var sx__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218,(0),null);
var sy__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38218,(1),null);
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"rx","rx",1627208482),(function (p1__38208_SHARP_){
return (sx__$1 * p1__38208_SHARP_);
})),new cljs.core.Keyword(null,"ry","ry",-334598563),(function (p1__38209_SHARP_){
return (sy__$1 * p1__38209_SHARP_);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38225,p__38226){
var vec__38227 = p__38225;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38227,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38227,(1),null);
var elem = vec__38227;
var vec__38230 = p__38226;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38230,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38230,(1),null);
var vec__38233 = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(elem);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38233,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38233,(1),null);
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"x1","x1",-1863922247),(function (p1__38221_SHARP_){
return (((p1__38221_SHARP_ - cx) * sx) + cx);
})),new cljs.core.Keyword(null,"y1","y1",589123466),(function (p1__38222_SHARP_){
return (((p1__38222_SHARP_ - cy) * sy) + cy);
})),new cljs.core.Keyword(null,"x2","x2",-1362513475),(function (p1__38223_SHARP_){
return (((p1__38223_SHARP_ - cx) * sx) + cx);
})),new cljs.core.Keyword(null,"y2","y2",-718691301),(function (p1__38224_SHARP_){
return (((p1__38224_SHARP_ - cy) * sy) + cy);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (p__38237,p__38238){
var vec__38239 = p__38237;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38239,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38239,(1),null);
var elem = vec__38239;
var vec__38242 = p__38238;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38242,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38242,(1),null);
var pts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),svg_clj.utils.s__GT_v(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props))));
var ctr = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(elem);
var xpts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38236_SHARP_){
return svg_clj.utils.scale_pt_from_center(p1__38236_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),ctr);
}),pts));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xpts))], null);
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),(function (p__38246,p__38247){
var vec__38248 = p__38246;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38248,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38248,(1),null);
var elem = vec__38248;
var vec__38251 = p__38247;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38251,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38251,(1),null);
var pts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),svg_clj.utils.s__GT_v(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(props))));
var ctr = svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(elem);
var xpts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38245_SHARP_){
return svg_clj.utils.scale_pt_from_center(p1__38245_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),ctr);
}),pts));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"points","points",-1486596883),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",xpts))], null);
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (p__38256,p__38257){
var vec__38258 = p__38256;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38258,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38258,(1),null);
var vec__38261 = p__38257;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38261,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38261,(1),null);
var cx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(props) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props) / 2.0));
var cy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(props) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props) / 2.0));
var w = (sx * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props));
var h = (sy * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props));
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"width","width",-384071477),w),new cljs.core.Keyword(null,"height","height",1025178622),h),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__38254_SHARP_){
return (((p1__38254_SHARP_ - cx) * sx) + cx);
})),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__38255_SHARP_){
return (((p1__38255_SHARP_ - cy) * sy) + cy);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"image","image",-58725096),(function (p__38266,p__38267){
var vec__38268 = p__38266;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38268,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38268,(1),null);
var vec__38271 = p__38267;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38271,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38271,(1),null);
var cx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(props) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props) / 2.0));
var cy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(props) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props) / 2.0));
var w = (sx * new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(props));
var h = (sy * new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(props));
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"width","width",-384071477),w),new cljs.core.Keyword(null,"height","height",1025178622),h),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__38264_SHARP_){
return (((p1__38264_SHARP_ - cx) * sx) + cx);
})),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__38265_SHARP_){
return (((p1__38265_SHARP_ - cy) * sy) + cy);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function (p__38275,p__38276){
var vec__38277 = p__38275;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38277,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38277,(1),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38277,(2),null);
var vec__38280 = p__38276;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38280,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38280,(1),null);
var xf = svg_clj.transforms.get_props(props);
var cx = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null));
var cy = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null));
var x = (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(props) - cx) * sx) + cx);
var y = (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(props) - cy) * sy) + cy);
var new_xf = cljs.core.assoc_in(cljs.core.assoc_in(xf,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(1)], null),(- x)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rotate","rotate",152705015),(2)], null),(- y));
var new_props = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"transform","transform",1381301764),svg_clj.utils.xf_map__GT_str(new_xf)),new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null),(function (p1__38274_SHARP_){
return (p1__38274_SHARP_ * sx);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props,text], null);
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"path","path",-188191168),(function (elem,p__38283){
var vec__38284 = p__38283;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38284,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38284,(1),null);
return svg_clj.path.scale(elem,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null));
}));
svg_clj.transforms.scale.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"g","g",1738089905),(function (p__38288,p__38289){
var vec__38290 = p__38288;
var seq__38291 = cljs.core.seq(vec__38290);
var first__38292 = cljs.core.first(seq__38291);
var seq__38291__$1 = cljs.core.next(seq__38291);
var k = first__38292;
var first__38292__$1 = cljs.core.first(seq__38291__$1);
var seq__38291__$2 = cljs.core.next(seq__38291__$1);
var props = first__38292__$1;
var content = seq__38291__$2;
var elem = vec__38290;
var vec__38293 = p__38289;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38293,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38293,(1),null);
var g_ctr = svg_clj.utils.centroid_of_pts(svg_clj.transforms.bounds.cljs$core$IFn$_invoke$arity$1(elem));
var xfcontent = (function (){var iter__4611__auto__ = (function svg_clj$transforms$iter__38296(s__38297){
return (new cljs.core.LazySeq(null,(function (){
var s__38297__$1 = s__38297;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__38297__$1);
if(temp__5753__auto__){
var s__38297__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38297__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__38297__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__38299 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__38298 = (0);
while(true){
if((i__38298 < size__4610__auto__)){
var child = cljs.core._nth(c__4609__auto__,i__38298);
cljs.core.chunk_append(b__38299,(function (){var elem_ctr = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.first(child)))?svg_clj.utils.centroid_of_pts(svg_clj.transforms.bounds.cljs$core$IFn$_invoke$arity$1(child)):svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(child));
var ch = svg_clj.transforms.scale.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(child,svg_clj.utils.v_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),elem_ctr)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null));
var elem_v = svg_clj.utils.v_(elem_ctr,g_ctr);
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(ch,svg_clj.utils.v_PLUS_(svg_clj.utils.v_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),elem_v),g_ctr));
})());

var G__38379 = (i__38298 + (1));
i__38298 = G__38379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38299),svg_clj$transforms$iter__38296(cljs.core.chunk_rest(s__38297__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38299),null);
}
} else {
var child = cljs.core.first(s__38297__$2);
return cljs.core.cons((function (){var elem_ctr = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"g","g",1738089905),cljs.core.first(child)))?svg_clj.utils.centroid_of_pts(svg_clj.transforms.bounds.cljs$core$IFn$_invoke$arity$1(child)):svg_clj.transforms.centroid.cljs$core$IFn$_invoke$arity$1(child));
var ch = svg_clj.transforms.scale.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(child,svg_clj.utils.v_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),elem_ctr)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null));
var elem_v = svg_clj.utils.v_(elem_ctr,g_ctr);
return svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(ch,svg_clj.utils.v_PLUS_(svg_clj.utils.v_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),elem_v),g_ctr));
})(),svg_clj$transforms$iter__38296(cljs.core.rest(s__38297__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(content);
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),xfcontent));
}));
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.transforms !== 'undefined') && (typeof svg_clj.transforms.offset !== 'undefined')){
} else {
svg_clj.transforms.offset = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__38300 = cljs.core.get_global_hierarchy;
return (fexpr__38300.cljs$core$IFn$_invoke$arity$0 ? fexpr__38300.cljs$core$IFn$_invoke$arity$0() : fexpr__38300.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.transforms","offset"),(function (element,_){
if((cljs.core.first(element) instanceof cljs.core.Keyword)){
return cljs.core.first(element);
} else {
return new cljs.core.Keyword(null,"list","list",765357683);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.transforms.offset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__38301){
var vec__38302 = p__38301;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38302,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38302,(1),null);
var elem = vec__38302;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Offset not implemented for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"."].join('')], 0));

return elem;
}));
svg_clj.transforms.offset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (elems,d){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38305_SHARP_){
return svg_clj.transforms.offset.cljs$core$IFn$_invoke$arity$2(p1__38305_SHARP_,d);
}),elems);
}));
svg_clj.transforms.offset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__38306,d){
var vec__38307 = p__38306;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38307,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38307,(1),null);
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,new cljs.core.Keyword(null,"r","r",-471384190),cljs.core._PLUS_,d);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.offset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (p__38310,d){
var vec__38311 = p__38310;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38311,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38311,(1),null);
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,new cljs.core.Keyword(null,"rx","rx",1627208482),cljs.core._PLUS_,d),new cljs.core.Keyword(null,"ry","ry",-334598563),cljs.core._PLUS_,d);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.offset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (p__38314,d){
var vec__38315 = p__38314;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38315,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38315,(1),null);
var new_props = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(props,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,d),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,d),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core._PLUS_,(d * (2))),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core._PLUS_,(d * (2)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.offset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__38318,d){
var vec__38319 = p__38318;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38319,(0),null);
var map__38322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38319,(1),null);
var map__38322__$1 = cljs.core.__destructure_map(map__38322);
var props = map__38322__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38322__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38322__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38322__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38322__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var vec__38323 = svg_clj.utils.offset_edge(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)], null),d);
var vec__38326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38323,(0),null);
var nx1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38326,(0),null);
var ny1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38326,(1),null);
var vec__38329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38323,(1),null);
var nx2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38329,(0),null);
var ny2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38329,(1),null);
var new_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"x1","x1",-1863922247),nx1),new cljs.core.Keyword(null,"y1","y1",589123466),ny1),new cljs.core.Keyword(null,"x2","x2",-1362513475),nx2),new cljs.core.Keyword(null,"y2","y2",-718691301),ny2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.offset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (p__38332,d){
var vec__38333 = p__38332;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38333,(0),null);
var map__38336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38333,(1),null);
var map__38336__$1 = cljs.core.__destructure_map(map__38336);
var props = map__38336__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38336__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var pts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),svg_clj.utils.s__GT_v(points)));
var opts = svg_clj.utils.offset_pts(pts,d);
var npoints = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,opts));
var new_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"points","points",-1486596883),npoints);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));
svg_clj.transforms.offset.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),(function (p__38337,d){
var vec__38338 = p__38337;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38338,(0),null);
var map__38341 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38338,(1),null);
var map__38341__$1 = cljs.core.__destructure_map(map__38341);
var props = map__38341__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38341__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var pts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),svg_clj.utils.s__GT_v(points)));
var opts = svg_clj.utils.offset_pts(pts,d);
var npoints = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.v__GT_s,opts));
var new_props = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"points","points",-1486596883),npoints);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new_props], null);
}));

//# sourceMappingURL=svg_clj.transforms.js.map
