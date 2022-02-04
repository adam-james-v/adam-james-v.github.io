goog.provide('svg_clj.parametric');
svg_clj.parametric.check_parametric = (function svg_clj$parametric$check_parametric(f){
var fdata = (function (){try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e37431){var e = e37431;
return null;
}})();
var vec__37428 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),0.5,(1)], null));
var f0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37428,(0),null);
var f05 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37428,(1),null);
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37428,(2),null);
var t0 = ((cljs.core.seqable_QMARK_(f0))?f0:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f0], null));
var t05 = ((cljs.core.seqable_QMARK_(f05))?f05:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f05], null));
var t1 = ((cljs.core.seqable_QMARK_(f1))?f1:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f1], null));
var dim = cljs.core.count(t05);
var required = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"origin","origin",1037372088)], null);
var keys_pred = cljs.core.every_QMARK_((function (p1__37427_SHARP_){
return cljs.core.contains_QMARK_(fdata,p1__37427_SHARP_);
}),required);
var t0_pred = (function (){var and__4210__auto__ = t0;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(t0),dim)) && (cljs.core.every_QMARK_(cljs.core.number_QMARK_,t0)));
} else {
return and__4210__auto__;
}
})();
var t1_pred = (function (){var and__4210__auto__ = t1;
if(cljs.core.truth_(and__4210__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(t1),dim)) && (cljs.core.every_QMARK_(cljs.core.number_QMARK_,t1)));
} else {
return and__4210__auto__;
}
})();
var missing = ((keys_pred)?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(fdata)),cljs.core.set(required)));
var result = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"dimension","dimension",543254198),dim,new cljs.core.Keyword(null,"data","data",-232669377),fdata,new cljs.core.Keyword(null,"valid-data","valid-data",-1156260581),keys_pred,new cljs.core.Keyword(null,"valid-t0","valid-t0",-830253962),t0_pred,new cljs.core.Keyword(null,"valid-t1","valid-t1",-529027350),t1_pred], null);
var G__37432 = result;
var G__37432__$1 = (cljs.core.truth_(missing)?cljs.core.assoc_in(G__37432,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing","missing",362507769)], null),missing):G__37432);
var G__37432__$2 = ((cljs.core.not(fdata))?cljs.core.assoc_in(G__37432__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-0-arity","invalid-0-arity",-1033313562)], null),fdata):G__37432__$1);
var G__37432__$3 = ((cljs.core.not(t0_pred))?cljs.core.assoc_in(G__37432__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-t0","invalid-t0",-1363675478)], null),t0):G__37432__$2);
if(cljs.core.not(t1_pred)){
return cljs.core.assoc_in(G__37432__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-t1","invalid-t1",-1302641905)], null),t1);
} else {
return G__37432__$3;
}
});
svg_clj.parametric.valid_parametric_QMARK_ = (function svg_clj$parametric$valid_parametric_QMARK_(f){
return (new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(svg_clj.parametric.check_parametric(f)) == null);
});
svg_clj.parametric.remap_within = (function svg_clj$parametric$remap_within(f,p__37439,x){
var vec__37440 = p__37439;
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37440,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37440,(1),null);
if((((x >= start)) && ((x < end)))){
var step = (end - start);
var t = ((x - start) / step);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(t) : f.call(null,t));
} else {
return null;
}
});
svg_clj.parametric.arc_length = (function svg_clj$parametric$arc_length(var_args){
var G__37449 = arguments.length;
switch (G__37449) {
case 1:
return svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$1 = (function (curve){
return svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$3(curve,(0),(1));
}));

(svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$2 = (function (curve,t){
return svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$3(curve,(0),t);
}));

(svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$3 = (function (curve,ta,tb){
var seg = (13500);
var start = ((ta * seg) / seg);
var end = (((tb * seg) + (1)) / seg);
return (function (p1__37444_SHARP_){
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$2(p1__37444_SHARP_,(5));
})(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37443_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.distance,p1__37443_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(curve,cljs.core.range.cljs$core$IFn$_invoke$arity$3(start,end,((1) / seg)))))));
}));

(svg_clj.parametric.arc_length.cljs$lang$maxFixedArity = 3);

svg_clj.parametric.regular_polygon_pts = (function svg_clj$parametric$regular_polygon_pts(r,n){
var angle = (((2) * Math.PI) * ((1) / n));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37452_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[svg_clj.utils.round.cljs$core$IFn$_invoke$arity$2((r * Math.cos((p1__37452_SHARP_ * angle))),(5)),svg_clj.utils.round.cljs$core$IFn$_invoke$arity$2((r * Math.sin((p1__37452_SHARP_ * angle))),(5))],null));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
svg_clj.parametric.rect_grid = (function svg_clj$parametric$rect_grid(nx,ny,w,h){
var iter__4611__auto__ = (function svg_clj$parametric$rect_grid_$_iter__37453(s__37454){
return (new cljs.core.LazySeq(null,(function (){
var s__37454__$1 = s__37454;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37454__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var a = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__37454__$1,a,xs__6308__auto__,temp__5753__auto__){
return (function svg_clj$parametric$rect_grid_$_iter__37453_$_iter__37455(s__37456){
return (new cljs.core.LazySeq(null,((function (s__37454__$1,a,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__37456__$1 = s__37456;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37456__$1);
if(temp__5753__auto____$1){
var s__37456__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37456__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37456__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37458 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37457 = (0);
while(true){
if((i__37457 < size__4610__auto__)){
var b = cljs.core._nth(c__4609__auto__,i__37457);
cljs.core.chunk_append(b__37458,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w * a),(h * b)], null));

var G__37583 = (i__37457 + (1));
i__37457 = G__37583;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37458),svg_clj$parametric$rect_grid_$_iter__37453_$_iter__37455(cljs.core.chunk_rest(s__37456__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37458),null);
}
} else {
var b = cljs.core.first(s__37456__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w * a),(h * b)], null),svg_clj$parametric$rect_grid_$_iter__37453_$_iter__37455(cljs.core.rest(s__37456__$2)));
}
} else {
return null;
}
break;
}
});})(s__37454__$1,a,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__37454__$1,a,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(ny)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,svg_clj$parametric$rect_grid_$_iter__37453(cljs.core.rest(s__37454__$1)));
} else {
var G__37584 = cljs.core.rest(s__37454__$1);
s__37454__$1 = G__37584;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(nx));
});
svg_clj.parametric.hex_grid = (function svg_clj$parametric$hex_grid(nx,ny,w){
var a_offset = (w / (2));
var h = (w / 0.8660254);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4611__auto__ = (function svg_clj$parametric$hex_grid_$_iter__37459(s__37460){
return (new cljs.core.LazySeq(null,(function (){
var s__37460__$1 = s__37460;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37460__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__37460__$1,x,xs__6308__auto__,temp__5753__auto__,a_offset,h){
return (function svg_clj$parametric$hex_grid_$_iter__37459_$_iter__37461(s__37462){
return (new cljs.core.LazySeq(null,((function (s__37460__$1,x,xs__6308__auto__,temp__5753__auto__,a_offset,h){
return (function (){
var s__37462__$1 = s__37462;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37462__$1);
if(temp__5753__auto____$1){
var s__37462__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37462__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37462__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37464 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37463 = (0);
while(true){
if((i__37463 < size__4610__auto__)){
var y = cljs.core._nth(c__4609__auto__,i__37463);
cljs.core.chunk_append(b__37464,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a_offset + (w * x)),(((2) * h) * y)], null));

var G__37585 = (i__37463 + (1));
i__37463 = G__37585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37464),svg_clj$parametric$hex_grid_$_iter__37459_$_iter__37461(cljs.core.chunk_rest(s__37462__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37464),null);
}
} else {
var y = cljs.core.first(s__37462__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a_offset + (w * x)),(((2) * h) * y)], null),svg_clj$parametric$hex_grid_$_iter__37459_$_iter__37461(cljs.core.rest(s__37462__$2)));
}
} else {
return null;
}
break;
}
});})(s__37460__$1,x,xs__6308__auto__,temp__5753__auto__,a_offset,h))
,null,null));
});})(s__37460__$1,x,xs__6308__auto__,temp__5753__auto__,a_offset,h))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),Math.floor((ny / (2))))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,svg_clj$parametric$hex_grid_$_iter__37459(cljs.core.rest(s__37460__$1)));
} else {
var G__37590 = cljs.core.rest(s__37460__$1);
s__37460__$1 = G__37590;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),nx));
})(),(function (){var iter__4611__auto__ = (function svg_clj$parametric$hex_grid_$_iter__37465(s__37466){
return (new cljs.core.LazySeq(null,(function (){
var s__37466__$1 = s__37466;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37466__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var x = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__37466__$1,x,xs__6308__auto__,temp__5753__auto__,a_offset,h){
return (function svg_clj$parametric$hex_grid_$_iter__37465_$_iter__37467(s__37468){
return (new cljs.core.LazySeq(null,((function (s__37466__$1,x,xs__6308__auto__,temp__5753__auto__,a_offset,h){
return (function (){
var s__37468__$1 = s__37468;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37468__$1);
if(temp__5753__auto____$1){
var s__37468__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37468__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__37468__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__37470 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__37469 = (0);
while(true){
if((i__37469 < size__4610__auto__)){
var y = cljs.core._nth(c__4609__auto__,i__37469);
cljs.core.chunk_append(b__37470,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w * x),(h + (((2) * h) * y))], null));

var G__37595 = (i__37469 + (1));
i__37469 = G__37595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37470),svg_clj$parametric$hex_grid_$_iter__37465_$_iter__37467(cljs.core.chunk_rest(s__37468__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37470),null);
}
} else {
var y = cljs.core.first(s__37468__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(w * x),(h + (((2) * h) * y))], null),svg_clj$parametric$hex_grid_$_iter__37465_$_iter__37467(cljs.core.rest(s__37468__$2)));
}
} else {
return null;
}
break;
}
});})(s__37466__$1,x,xs__6308__auto__,temp__5753__auto__,a_offset,h))
,null,null));
});})(s__37466__$1,x,xs__6308__auto__,temp__5753__auto__,a_offset,h))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),Math.ceil((ny / (2))))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,svg_clj$parametric$hex_grid_$_iter__37465(cljs.core.rest(s__37466__$1)));
} else {
var G__37596 = cljs.core.rest(s__37466__$1);
s__37466__$1 = G__37596;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),nx));
})());
});
svg_clj.parametric.line = (function svg_clj$parametric$line(a,b){
return (function() {
var G__37597 = null;
var G__37597__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","line","svg-clj.parametric/line",-1722692912,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),new cljs.core.Keyword(null,"origin","origin",1037372088),svg_clj.utils.centroid_of_pts(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null)),new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"length","length",588987862),svg_clj.utils.distance(a,b)], null);
});
var G__37597__1 = (function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,0.0)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,1.0)){
return b;
} else {
return svg_clj.utils.v_PLUS_(a,svg_clj.utils.v_STAR_(svg_clj.utils.v_(b,a),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(t)));

}
}
});
G__37597 = function(t){
switch(arguments.length){
case 0:
return G__37597__0.call(this);
case 1:
return G__37597__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37597.cljs$core$IFn$_invoke$arity$0 = G__37597__0;
G__37597.cljs$core$IFn$_invoke$arity$1 = G__37597__1;
return G__37597;
})()
});
svg_clj.parametric.fastline = (function svg_clj$parametric$fastline(p__37471,p__37472){
var vec__37473 = p__37471;
var ax = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37473,(0),null);
var ay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37473,(1),null);
var a = vec__37473;
var vec__37476 = p__37472;
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37476,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37476,(1),null);
var b = vec__37476;
var vec__37479 = svg_clj.utils.v_(b,a);
var vx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37479,(0),null);
var vy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37479,(1),null);
return (function (t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax + (vx * t)),(ay + (vy * t))], null);
});
});
svg_clj.parametric.polyline = (function svg_clj$parametric$polyline(pts){
var step = (1.0 / (cljs.core.count(pts) - (1)));
var lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,svg_clj.parametric.line),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),pts));
var length = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37482_SHARP_){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1((p1__37482_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__37482_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__37482_SHARP_.call(null)));
}),lines));
var intervals = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37484_SHARP_){
return (p1__37484_SHARP_ / length);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37483_SHARP_){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1((p1__37483_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__37483_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__37483_SHARP_.call(null)));
}),lines)))));
return (function() {
var G__37598 = null;
var G__37598__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","polyline","svg-clj.parametric/polyline",-370098171,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pts], null),new cljs.core.Keyword(null,"origin","origin",1037372088),svg_clj.utils.centroid_of_pts(pts),new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,intervals)),new cljs.core.Keyword(null,"length","length",588987862),length], null);
});
var G__37598__1 = (function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,0.0)){
return cljs.core.first(pts);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,1.0)){
return cljs.core.last(pts);
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37485_SHARP_,p2__37486_SHARP_){
return svg_clj.parametric.remap_within(p1__37485_SHARP_,p2__37486_SHARP_,t);
}),lines,intervals)));

}
}
});
G__37598 = function(t){
switch(arguments.length){
case 0:
return G__37598__0.call(this);
case 1:
return G__37598__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37598.cljs$core$IFn$_invoke$arity$0 = G__37598__0;
G__37598.cljs$core$IFn$_invoke$arity$1 = G__37598__1;
return G__37598;
})()
});
svg_clj.parametric.polygon = (function svg_clj$parametric$polygon(pts){
var pts__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(pts),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(pts)], null));
var step = (1.0 / (cljs.core.count(pts__$1) - (1)));
var lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,svg_clj.parametric.line),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),pts__$1));
var length = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37487_SHARP_){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1((p1__37487_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__37487_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__37487_SHARP_.call(null)));
}),lines));
var intervals = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37489_SHARP_){
return (p1__37489_SHARP_ / length);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37488_SHARP_){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1((p1__37488_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__37488_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__37488_SHARP_.call(null)));
}),lines)))));
return (function() {
var G__37603 = null;
var G__37603__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","polygon","svg-clj.parametric/polygon",1724765324,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pts__$1], null),new cljs.core.Keyword(null,"origin","origin",1037372088),svg_clj.utils.centroid_of_pts(pts__$1),new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,intervals)),new cljs.core.Keyword(null,"length","length",588987862),cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37490_SHARP_){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1((p1__37490_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__37490_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__37490_SHARP_.call(null)));
}),lines))], null);
});
var G__37603__1 = (function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,0.0)){
return cljs.core.first(pts__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,1.0)){
return cljs.core.last(pts__$1);
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37491_SHARP_,p2__37492_SHARP_){
return svg_clj.parametric.remap_within(p1__37491_SHARP_,p2__37492_SHARP_,t);
}),lines,intervals)));

}
}
});
G__37603 = function(t){
switch(arguments.length){
case 0:
return G__37603__0.call(this);
case 1:
return G__37603__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37603.cljs$core$IFn$_invoke$arity$0 = G__37603__0;
G__37603.cljs$core$IFn$_invoke$arity$1 = G__37603__1;
return G__37603;
})()
});
/**
 * compute the radius of an arc defined by 3 points
 */
svg_clj.parametric.radius_from_pts = (function svg_clj$parametric$radius_from_pts(p1,p2,p3){
var a = svg_clj.utils.distance(p3,p2);
var b = svg_clj.utils.distance(p3,p1);
var c = svg_clj.utils.distance(p2,p1);
var s = (((a + b) + c) / (2));
var sa = (s - a);
var sb = (s - b);
var sc = (s - c);
var rt = Math.sqrt((((s * sa) * sb) * sc));
var radius = ((((a * b) * c) / (4)) / rt);
return radius;
});
/**
 * compute the center point of an arc through 3 points
 */
svg_clj.parametric.center_from_pts = (function svg_clj$parametric$center_from_pts(p1,p2,p3){
var u1 = svg_clj.utils.v_(p2,p1);
var u2 = svg_clj.utils.v_(p3,p1);
var w1 = svg_clj.utils.cross_STAR_(svg_clj.utils.v_(p3,p1),u1);
var u = svg_clj.utils.normalize(u1);
var w = svg_clj.utils.normalize(w1);
var v = svg_clj.utils.cross_STAR_(w,u);
var vec__37493 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_clj.utils.dot_STAR_(u1,u),(0)], null);
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37493,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37493,(1),null);
var vec__37496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_clj.utils.dot_STAR_(u2,u),svg_clj.utils.dot_STAR_(u2,v)], null);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37496,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37496,(1),null);
var h = (((Math.pow((cx - (bx / (2))),(2)) + Math.pow(cy,(2))) + (- Math.pow((bx / (2)),(2)))) / ((2) * cy));
return svg_clj.utils.v_PLUS_(p1,svg_clj.utils.v_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((bx / (2))),u),svg_clj.utils.v_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(h),v));
});
svg_clj.parametric.circle = (function svg_clj$parametric$circle(var_args){
var G__37502 = arguments.length;
switch (G__37502) {
case 1:
return svg_clj.parametric.circle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return svg_clj.parametric.circle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.parametric.circle.cljs$core$IFn$_invoke$arity$1 = (function (r){
return (function() {
var G__37611 = null;
var G__37611__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","circle","svg-clj.parametric/circle",-824700777,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"length","length",588987862),((Math.PI * (2)) * r)], null);
});
var G__37611__1 = (function (t){
var t__$1 = (((2) * Math.PI) * t);
var x = (r * Math.cos(t__$1));
var y = (r * Math.sin(t__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
G__37611 = function(t){
switch(arguments.length){
case 0:
return G__37611__0.call(this);
case 1:
return G__37611__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37611.cljs$core$IFn$_invoke$arity$0 = G__37611__0;
G__37611.cljs$core$IFn$_invoke$arity$1 = G__37611__1;
return G__37611;
})()
}));

(svg_clj.parametric.circle.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var vec__37503 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37499_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37499_SHARP_,(0));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37503,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37503,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37503,(2),null);
var n = svg_clj.utils.normalize(svg_clj.utils.normal.cljs$core$IFn$_invoke$arity$3(a__$1,b__$1,c__$1));
var r = svg_clj.parametric.radius_from_pts(a__$1,b__$1,c__$1);
var cp = svg_clj.parametric.center_from_pts(a__$1,b__$1,c__$1);
var u = svg_clj.utils.normalize(svg_clj.utils.v_(a__$1,cp));
var v = svg_clj.utils.cross_STAR_(n,u);
return (function() {
var G__37612 = null;
var G__37612__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","circle","svg-clj.parametric/circle",-824700777,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null),new cljs.core.Keyword(null,"origin","origin",1037372088),cp,new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"length","length",588987862),((Math.PI * (2)) * r),new cljs.core.Keyword(null,"radius","radius",-2073122258),r], null);
});
var G__37612__1 = (function (t){
if((((t < 0.0)) || ((t > 1.0)))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,0.0)){
return cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(a__$1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,1.0)){
return cljs.core.vec(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(a__$1));
} else {
var t__$1 = (((2) * Math.PI) * t);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37500_SHARP_){
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$2(p1__37500_SHARP_,(5));
}),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(svg_clj.utils.v_PLUS_(cp,svg_clj.utils.v_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((r * Math.cos(t__$1))),u),svg_clj.utils.v_STAR_(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((r * Math.sin(t__$1))),v))));

}
}
}
});
G__37612 = function(t){
switch(arguments.length){
case 0:
return G__37612__0.call(this);
case 1:
return G__37612__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37612.cljs$core$IFn$_invoke$arity$0 = G__37612__0;
G__37612.cljs$core$IFn$_invoke$arity$1 = G__37612__1;
return G__37612;
})()
}));

(svg_clj.parametric.circle.cljs$lang$maxFixedArity = 3);

svg_clj.parametric.arc = (function svg_clj$parametric$arc(a,b,c){
var vec__37507 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37506_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37506_SHARP_,(0));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,c], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37507,(2),null);
var f = svg_clj.parametric.circle.cljs$core$IFn$_invoke$arity$3(a__$1,b__$1,c__$1);
var cp = svg_clj.parametric.center_from_pts(a__$1,b__$1,c__$1);
var angle = svg_clj.utils.angle_from_pts(a__$1,cp,c__$1);
var r = svg_clj.parametric.radius_from_pts(a__$1,b__$1,c__$1);
return (function() {
var G__37617 = null;
var G__37617__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","arc","svg-clj.parametric/arc",2113073130,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$1,b__$1,c__$1], null),new cljs.core.Keyword(null,"origin","origin",1037372088),cp,new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"length","length",588987862),(((Math.PI * (2)) * r) * (angle / (360))),new cljs.core.Keyword(null,"radius","radius",-2073122258),r,new cljs.core.Keyword(null,"center","center",-748944368),cp], null);
});
var G__37617__1 = (function (t){
var t__$1 = (t * (angle / 360.0));
return f(t__$1);
});
G__37617 = function(t){
switch(arguments.length){
case 0:
return G__37617__0.call(this);
case 1:
return G__37617__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37617.cljs$core$IFn$_invoke$arity$0 = G__37617__0;
G__37617.cljs$core$IFn$_invoke$arity$1 = G__37617__1;
return G__37617;
})()
});
svg_clj.parametric.ellipse_perimeter = (function svg_clj$parametric$ellipse_perimeter(rx,ry){
var h = (Math.pow((rx - ry),(2)) / Math.pow((rx + ry),(2)));
return ((Math.PI * (rx + ry)) * ((((1) + (h * ((1) / (4)))) + ((h * h) * ((1) / (64)))) + (((h * h) * h) * ((1) / (256)))));
});
svg_clj.parametric.ellipse = (function svg_clj$parametric$ellipse(rx,ry){
return (function() {
var G__37626 = null;
var G__37626__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","ellipse","svg-clj.parametric/ellipse",-1168297913,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,ry], null),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),new cljs.core.Keyword(null,"length","length",588987862),svg_clj.parametric.ellipse_perimeter(rx,ry)], null);
});
var G__37626__1 = (function (t){
var t__$1 = (((2) * Math.PI) * t);
var x = (rx * Math.cos(t__$1));
var y = (ry * Math.sin(t__$1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
});
G__37626 = function(t){
switch(arguments.length){
case 0:
return G__37626__0.call(this);
case 1:
return G__37626__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37626.cljs$core$IFn$_invoke$arity$0 = G__37626__0;
G__37626.cljs$core$IFn$_invoke$arity$1 = G__37626__1;
return G__37626;
})()
});
svg_clj.parametric.quadratic_bezier = (function svg_clj$parametric$quadratic_bezier(a,b,c){
return (function (t){
var l1 = svg_clj.parametric.fastline(a,b);
var l2 = svg_clj.parametric.fastline(b,c);
var l3 = svg_clj.parametric.fastline(l1(t),l2(t));
return l3(t);
});
});
svg_clj.parametric.bezier_STAR_ = (function svg_clj$parametric$bezier_STAR_(pts){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(pts))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.parametric.quadratic_bezier,pts);
} else {
var lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37510_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.parametric.fastline,p1__37510_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),pts));
return (function (t){
var npts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37511_SHARP_){
return (p1__37511_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37511_SHARP_.cljs$core$IFn$_invoke$arity$1(t) : p1__37511_SHARP_.call(null,t));
}),lines);
var fexpr__37512 = (svg_clj.parametric.bezier_STAR_.cljs$core$IFn$_invoke$arity$1 ? svg_clj.parametric.bezier_STAR_.cljs$core$IFn$_invoke$arity$1(npts) : svg_clj.parametric.bezier_STAR_.call(null,npts));
return (fexpr__37512.cljs$core$IFn$_invoke$arity$1 ? fexpr__37512.cljs$core$IFn$_invoke$arity$1(t) : fexpr__37512.call(null,t));
});
}
});
svg_clj.parametric.bezier = (function svg_clj$parametric$bezier(pts){
var curve = svg_clj.parametric.bezier_STAR_(pts);
var length = svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$1(curve);
return (function() {
var G__37627 = null;
var G__37627__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","bezier","svg-clj.parametric/bezier",1279499590,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pts], null),new cljs.core.Keyword(null,"origin","origin",1037372088),svg_clj.utils.centroid_of_pts(pts),new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"length","length",588987862),length], null);
});
var G__37627__1 = (function (t){
return (curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1(t) : curve.call(null,t));
});
G__37627 = function(t){
switch(arguments.length){
case 0:
return G__37627__0.call(this);
case 1:
return G__37627__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37627.cljs$core$IFn$_invoke$arity$0 = G__37627__0;
G__37627.cljs$core$IFn$_invoke$arity$1 = G__37627__1;
return G__37627;
})()
});
svg_clj.parametric.next_pascal = (function svg_clj$parametric$next_pascal(row){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(row)], null),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37513_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,p1__37513_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),row)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(row)], null)], 0)));
});
svg_clj.parametric.binomial = (function svg_clj$parametric$binomial(n,i){
var pascal_tri_row = cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2((n + (1)),cljs.core.iterate(svg_clj.parametric.next_pascal,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null))));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(pascal_tri_row,i);
});
svg_clj.parametric.polynomial = (function svg_clj$parametric$polynomial(n,i,t){
return (Math.pow(((1) - t),(n - i)) * Math.pow(t,i));
});
svg_clj.parametric.half_bezier = (function svg_clj$parametric$half_bezier(ws,t){
var n = (cljs.core.count(ws) - (1));
var poly = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(svg_clj.parametric.polynomial,n);
var bi = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(svg_clj.parametric.binomial,n);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,w){
return ((bi(i) * poly(i,t)) * w);
}),ws));
});
svg_clj.parametric.rational_bezier_STAR_ = (function svg_clj$parametric$rational_bezier_STAR_(pts,wts){
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37514_SHARP_,p2__37515_SHARP_){
return (cljs.core.first(p1__37514_SHARP_) * p2__37515_SHARP_);
}),pts,wts);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37516_SHARP_,p2__37517_SHARP_){
return (cljs.core.second(p1__37516_SHARP_) * p2__37517_SHARP_);
}),pts,wts);
var dn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(svg_clj.parametric.half_bezier,wts);
return (function (t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(svg_clj.parametric.half_bezier(xs,t) / dn(t)),(svg_clj.parametric.half_bezier(ys,t) / dn(t))], null);
});
});
svg_clj.parametric.rational_bezier = (function svg_clj$parametric$rational_bezier(pts,wts){
var curve = svg_clj.parametric.rational_bezier_STAR_(pts,wts);
var length = svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$1(curve);
return (function() {
var G__37632 = null;
var G__37632__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","rational-bezier","svg-clj.parametric/rational-bezier",-1275385603,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pts,wts], null),new cljs.core.Keyword(null,"origin","origin",1037372088),svg_clj.utils.centroid_of_pts(pts),new cljs.core.Keyword(null,"vertex-params","vertex-params",-1120497285),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.Keyword(null,"length","length",588987862),length], null);
});
var G__37632__1 = (function (t){
return curve(t);
});
G__37632 = function(t){
switch(arguments.length){
case 0:
return G__37632__0.call(this);
case 1:
return G__37632__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37632.cljs$core$IFn$_invoke$arity$0 = G__37632__0;
G__37632.cljs$core$IFn$_invoke$arity$1 = G__37632__1;
return G__37632;
})()
});
/**
 * Returns the Control Point 'de Casteljau Skeleton', used to derive split Bezier Curve Control Points.
 */
svg_clj.parametric.split_bezier = (function svg_clj$parametric$split_bezier(var_args){
var G__37521 = arguments.length;
switch (G__37521) {
case 2:
return svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$2 = (function (curve,t){
var pts = cljs.core.first(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1((curve.cljs$core$IFn$_invoke$arity$0 ? curve.cljs$core$IFn$_invoke$arity$0() : curve.call(null))));
return svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(pts)], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(pts)], null)], null),pts,t);
}));

(svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$3 = (function (p__37522,pts,t){
while(true){
var map__37523 = p__37522;
var map__37523__$1 = cljs.core.__destructure_map(map__37523);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37523__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37523__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var cs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p__37522,pts,t,map__37523,map__37523__$1,a,b){
return (function (p1__37518_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.parametric.line,p1__37518_SHARP_);
});})(p__37522,pts,t,map__37523,map__37523__$1,a,b))
,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),pts));
var npts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p__37522,pts,t,cs,map__37523,map__37523__$1,a,b){
return (function (p1__37519_SHARP_){
return (p1__37519_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37519_SHARP_.cljs$core$IFn$_invoke$arity$1(t) : p1__37519_SHARP_.call(null,t));
});})(p__37522,pts,t,cs,map__37523,map__37523__$1,a,b))
,cs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(npts))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.first(npts)),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse(b),cljs.core.first(npts)))], null);
} else {
var G__37642 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(a,cljs.core.first(npts)),new cljs.core.Keyword(null,"b","b",1482224470),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(b,cljs.core.last(npts))], null);
var G__37643 = npts;
var G__37644 = t;
p__37522 = G__37642;
pts = G__37643;
t = G__37644;
continue;
}
break;
}
}));

(svg_clj.parametric.split_bezier.cljs$lang$maxFixedArity = 3);

svg_clj.parametric.t_from_curve_distance = (function svg_clj$parametric$t_from_curve_distance(curve,d){
var eps = 1.0E-6;
var l = svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$1(curve);
var guess = (d / l);
var itr = (function (p__37526){
var vec__37527 = p__37526;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37527,(0),null);
var t_guess = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37527,(1),null);
var d_guess = svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$2(curve,t_guess);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_guess,(t_guess + ((d - d_guess) / l))], null);
});
return (function (p1__37525_SHARP_){
return svg_clj.utils.round.cljs$core$IFn$_invoke$arity$2(p1__37525_SHARP_,(5));
})(cljs.core.last(cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__37524_SHARP_){
return (eps < Math.abs(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._,p1__37524_SHARP_)));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((25),cljs.core.iterate(itr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),guess], null)))))));
});
svg_clj.parametric.split_bezier_between = (function svg_clj$parametric$split_bezier_between(curve,ta,tb){
var da = svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$2(curve,ta);
var split1 = svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$2(curve,tb);
var curve1 = svg_clj.parametric.bezier(new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(split1));
var partial_result = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(split1)], null);
var ta1 = svg_clj.parametric.t_from_curve_distance(curve1,da);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$2(curve1,ta1),partial_result], 0));
});
svg_clj.parametric.multi_split_bezier = (function svg_clj$parametric$multi_split_bezier(var_args){
var G__37532 = arguments.length;
switch (G__37532) {
case 2:
return svg_clj.parametric.multi_split_bezier.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return svg_clj.parametric.multi_split_bezier.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.parametric.multi_split_bezier.cljs$core$IFn$_invoke$arity$2 = (function (curve,ts){
var ds = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37530_SHARP_){
return svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$2(curve,p1__37530_SHARP_);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(ts));
return svg_clj.parametric.multi_split_bezier.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,curve,cljs.core.reverse(ds));
}));

(svg_clj.parametric.multi_split_bezier.cljs$core$IFn$_invoke$arity$3 = (function (acc,curve,ds){
while(true){
if(((1) < cljs.core.count(ds))){
var remapped_t = svg_clj.parametric.t_from_curve_distance(curve,cljs.core.first(ds));
var map__37533 = svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$2(curve,remapped_t);
var map__37533__$1 = cljs.core.__destructure_map(map__37533);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var G__37650 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,b);
var G__37651 = svg_clj.parametric.bezier(a);
var G__37652 = cljs.core.rest(ds);
acc = G__37650;
curve = G__37651;
ds = G__37652;
continue;
} else {
var remapped_t = svg_clj.parametric.t_from_curve_distance(curve,cljs.core.first(ds));
var map__37534 = svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$2(curve,remapped_t);
var map__37534__$1 = cljs.core.__destructure_map(map__37534);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37534__$1,new cljs.core.Keyword(null,"b","b",1482224470));
return cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,b),a));
}
break;
}
}));

(svg_clj.parametric.multi_split_bezier.cljs$lang$maxFixedArity = 3);

svg_clj.parametric.uniform_split_bezier = (function svg_clj$parametric$uniform_split_bezier(curve,n_segments){
var l = svg_clj.parametric.arc_length.cljs$core$IFn$_invoke$arity$1(curve);
var step = (l / n_segments);
var ds = cljs.core.range.cljs$core$IFn$_invoke$arity$3(step,l,step);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n_segments)){
return svg_clj.parametric.split_bezier.cljs$core$IFn$_invoke$arity$2(curve,0.5);
} else {
return svg_clj.parametric.multi_split_bezier.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,curve,cljs.core.reverse(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(ds)));
}
});
svg_clj.parametric.sinwave = (function svg_clj$parametric$sinwave(amp,freq){
return (function (t){
return (amp * Math.sin(((t * freq) * Math.PI)));
});
});
svg_clj.parametric.blend = (function svg_clj$parametric$blend(var_args){
var G__37536 = arguments.length;
switch (G__37536) {
case 3:
return svg_clj.parametric.blend.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return svg_clj.parametric.blend.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.parametric.blend.cljs$core$IFn$_invoke$arity$3 = (function (fa,fb,alpha){
return (function (t){
var line = svg_clj.parametric.line((fa.cljs$core$IFn$_invoke$arity$1 ? fa.cljs$core$IFn$_invoke$arity$1(t) : fa.call(null,t)),(fb.cljs$core$IFn$_invoke$arity$1 ? fb.cljs$core$IFn$_invoke$arity$1(t) : fb.call(null,t)));
return line(alpha);
});
}));

(svg_clj.parametric.blend.cljs$core$IFn$_invoke$arity$4 = (function (fa,fb,easefn,alpha){
return (function (t){
var line = svg_clj.parametric.line((fa.cljs$core$IFn$_invoke$arity$1 ? fa.cljs$core$IFn$_invoke$arity$1(t) : fa.call(null,t)),(fb.cljs$core$IFn$_invoke$arity$1 ? fb.cljs$core$IFn$_invoke$arity$1(t) : fb.call(null,t)));
return line((easefn.cljs$core$IFn$_invoke$arity$1 ? easefn.cljs$core$IFn$_invoke$arity$1(alpha) : easefn.call(null,alpha)));
});
}));

(svg_clj.parametric.blend.cljs$lang$maxFixedArity = 4);

svg_clj.parametric.eased_polyline = (function svg_clj$parametric$eased_polyline(pts,easefn){
var step = (1.0 / (cljs.core.count(pts) - (1)));
var lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,svg_clj.parametric.line),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),pts));
var length = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37537_SHARP_){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1((p1__37537_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__37537_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__37537_SHARP_.call(null)));
}),lines));
var intervals = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37539_SHARP_){
return (p1__37539_SHARP_ / length);
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.reductions.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37538_SHARP_){
return new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1((p1__37538_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__37538_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__37538_SHARP_.call(null)));
}),lines)))));
var easedlines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37540_SHARP_){
return (function (t){
var G__37543 = (easefn.cljs$core$IFn$_invoke$arity$1 ? easefn.cljs$core$IFn$_invoke$arity$1(t) : easefn.call(null,t));
return (p1__37540_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37540_SHARP_.cljs$core$IFn$_invoke$arity$1(G__37543) : p1__37540_SHARP_.call(null,G__37543));
});
}),lines);
return (function() {
var G__37656 = null;
var G__37656__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","polyline","svg-clj.parametric/polyline",-370098171,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pts], null),new cljs.core.Keyword(null,"length","length",588987862),length], null);
});
var G__37656__1 = (function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,0.0)){
return cljs.core.first(pts);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,1.0)){
return cljs.core.last(pts);
} else {
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__37541_SHARP_,p2__37542_SHARP_){
return svg_clj.parametric.remap_within(p1__37541_SHARP_,p2__37542_SHARP_,t);
}),easedlines,intervals)));

}
}
});
G__37656 = function(t){
switch(arguments.length){
case 0:
return G__37656__0.call(this);
case 1:
return G__37656__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37656.cljs$core$IFn$_invoke$arity$0 = G__37656__0;
G__37656.cljs$core$IFn$_invoke$arity$1 = G__37656__1;
return G__37656;
})()
});
svg_clj.parametric.multiblend = (function svg_clj$parametric$multiblend(var_args){
var G__37547 = arguments.length;
switch (G__37547) {
case 2:
return svg_clj.parametric.multiblend.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return svg_clj.parametric.multiblend.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.parametric.multiblend.cljs$core$IFn$_invoke$arity$2 = (function (fs,alpha){
return (function (t){
var line = svg_clj.parametric.polyline(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37544_SHARP_){
return (p1__37544_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37544_SHARP_.cljs$core$IFn$_invoke$arity$1(t) : p1__37544_SHARP_.call(null,t));
}),fs));
return line(alpha);
});
}));

(svg_clj.parametric.multiblend.cljs$core$IFn$_invoke$arity$3 = (function (fs,easefn,alpha){
return (function (t){
var line = svg_clj.parametric.eased_polyline(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37545_SHARP_){
return (p1__37545_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37545_SHARP_.cljs$core$IFn$_invoke$arity$1(t) : p1__37545_SHARP_.call(null,t));
}),fs),easefn);
return line(alpha);
});
}));

(svg_clj.parametric.multiblend.cljs$lang$maxFixedArity = 3);

svg_clj.parametric.fn_offset = (function svg_clj$parametric$fn_offset(curve,f){
var eps = 1.0E-6;
return (function (t){
var t__$1 = (((((1) - eps) <= t))?((1) - eps):(((eps > t))?eps:t
));
var n = svg_clj.utils.normalize(svg_clj.utils.normal.cljs$core$IFn$_invoke$arity$2((function (){var G__37548 = (t__$1 - eps);
return (curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1(G__37548) : curve.call(null,G__37548));
})(),(function (){var G__37549 = (t__$1 + eps);
return (curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1(G__37549) : curve.call(null,G__37549));
})()));
var tpt = (curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1(t__$1) : curve.call(null,t__$1));
var l = svg_clj.parametric.line(tpt,svg_clj.utils.v_PLUS_(tpt,n));
return l((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(t__$1) : f.call(null,t__$1)));
});
});
/**
 * Shift a list of `pts` to begin at `start`, preserving order and cycling the list.
 * If no `start` is provided, pt with lowest x and y values is used.
 */
svg_clj.parametric.shift_pts = (function svg_clj$parametric$shift_pts(var_args){
var G__37551 = arguments.length;
switch (G__37551) {
case 1:
return svg_clj.parametric.shift_pts.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return svg_clj.parametric.shift_pts.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.parametric.shift_pts.cljs$core$IFn$_invoke$arity$1 = (function (pts){
var start = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),pts));
return svg_clj.parametric.shift_pts.cljs$core$IFn$_invoke$arity$2(pts,start);
}));

(svg_clj.parametric.shift_pts.cljs$core$IFn$_invoke$arity$2 = (function (pts,start){
var vec__37552 = cljs.core.split_with(cljs.core.complement(cljs.core.PersistentHashSet.createAsIfByAssoc([start])),pts);
var back = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37552,(0),null);
var front = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37552,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(front,back);
}));

(svg_clj.parametric.shift_pts.cljs$lang$maxFixedArity = 2);

/**
 * Simplifies the list of `pts` by evenly stepping `n` times along the parametric curve produced by the original list.
 * This does not guarantee that input pts are preserved in the output.
 */
svg_clj.parametric.simplify = (function svg_clj$parametric$simplify(pts,n){
var c = svg_clj.parametric.polygon(pts);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37555_SHARP_){
return c((p1__37555_SHARP_ / (n + (1))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
svg_clj.parametric.remove_colinears = (function svg_clj$parametric$remove_colinears(pts){
return svg_clj.algorithms.remove_colinears(pts);
});
svg_clj.parametric.pline = (function svg_clj$parametric$pline(line){
var vec__37556 = line;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37556,(0),null);
var map__37559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37556,(1),null);
var map__37559__$1 = cljs.core.__destructure_map(map__37559);
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37559__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37559__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37559__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37559__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var G__37560 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null);
var G__37561 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null);
return (line.cljs$core$IFn$_invoke$arity$2 ? line.cljs$core$IFn$_invoke$arity$2(G__37560,G__37561) : line.call(null,G__37560,G__37561));
});
svg_clj.parametric.stroke_pts = (function svg_clj$parametric$stroke_pts(curve,width,n_segments){
var of = (function (_){
return (0.5 * width);
});
var tcurve = svg_clj.parametric.fn_offset(curve,(function (){
return (0.5 * width);
}));
var bcurve = svg_clj.parametric.fn_offset(curve,(function (){
return (-0.5 * width);
}));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1((0)) : curve.call(null,(0)))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37562_SHARP_){
return tcurve((p1__37562_SHARP_ / n_segments));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((n_segments + (1)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(curve.cljs$core$IFn$_invoke$arity$1 ? curve.cljs$core$IFn$_invoke$arity$1((1)) : curve.call(null,(1)))], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37563_SHARP_){
return bcurve((p1__37563_SHARP_ / n_segments));
}),cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1((n_segments + (1)))))], 0));
});
svg_clj.parametric.fillet_pts = (function svg_clj$parametric$fillet_pts(pts,r){
var fillet = svg_clj.parametric.regular_polygon_pts(r,(50));
var ipts = svg_clj.utils.offset_pts(pts,(- r));
var f = (function (pt){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37571_SHARP_){
return svg_clj.utils.v_PLUS_(pt,p1__37571_SHARP_);
}),fillet);
});
var npts = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ipts], 0));
return svg_clj.algorithms.hull.cljs$core$IFn$_invoke$arity$1(npts);
});
svg_clj.parametric.chamfer_pts = (function svg_clj$parametric$chamfer_pts(pts,r){
var fillet = svg_clj.parametric.regular_polygon_pts(r,(50));
var ipts = svg_clj.utils.offset_pts(pts,(- r));
var f = (function (pt){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37572_SHARP_){
return svg_clj.utils.v_PLUS_(pt,p1__37572_SHARP_);
}),fillet);
});
var npts = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(f,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ipts], 0));
return svg_clj.algorithms.hull.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pts),cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__37573_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.distance,p1__37573_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),svg_clj.algorithms.hull.cljs$core$IFn$_invoke$arity$1(npts)))))));
});
svg_clj.parametric.translate = (function svg_clj$parametric$translate(f,p__37574){
var vec__37575 = p__37574;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37575,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37575,(1),null);
var data = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (function() {
var G__37665 = null;
var G__37665__0 = (function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","translate","svg-clj.parametric/translate",-1131650460,null),new cljs.core.Keyword(null,"origin","origin",1037372088),svg_clj.utils.v_PLUS_(new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], null)], 0));
});
var G__37665__1 = (function (t){
return svg_clj.utils.v_PLUS_((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(t) : f.call(null,t)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
G__37665 = function(t){
switch(arguments.length){
case 0:
return G__37665__0.call(this);
case 1:
return G__37665__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37665.cljs$core$IFn$_invoke$arity$0 = G__37665__0;
G__37665.cljs$core$IFn$_invoke$arity$1 = G__37665__1;
return G__37665;
})()
});
svg_clj.parametric.rotate = (function svg_clj$parametric$rotate(f,deg){
var data = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var ctr = new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(data);
return (function() {
var G__37666 = null;
var G__37666__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","rotate","svg-clj.parametric/rotate",1501805368,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,deg], null)], null);
});
var G__37666__1 = (function (t){
return svg_clj.utils.rotate_pt_around_center((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(t) : f.call(null,t)),deg,ctr);
});
G__37666 = function(t){
switch(arguments.length){
case 0:
return G__37666__0.call(this);
case 1:
return G__37666__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37666.cljs$core$IFn$_invoke$arity$0 = G__37666__0;
G__37666.cljs$core$IFn$_invoke$arity$1 = G__37666__1;
return G__37666;
})()
});
svg_clj.parametric.scale = (function svg_clj$parametric$scale(f,p__37578){
var vec__37579 = p__37578;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37579,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37579,(1),null);
var data = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
var ctr = new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(data);
return (function() {
var G__37669 = null;
var G__37669__0 = (function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Symbol("svg-clj.parametric","scale","svg-clj.parametric/scale",-1486005144,null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null)], null)], null)], 0));
});
var G__37669__1 = (function (t){
return svg_clj.utils.scale_pt_from_center((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(t) : f.call(null,t)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),ctr);
});
G__37669 = function(t){
switch(arguments.length){
case 0:
return G__37669__0.call(this);
case 1:
return G__37669__1.call(this,t);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37669.cljs$core$IFn$_invoke$arity$0 = G__37669__0;
G__37669.cljs$core$IFn$_invoke$arity$1 = G__37669__1;
return G__37669;
})()
});

//# sourceMappingURL=svg_clj.parametric.js.map
