goog.provide('word_games.app');
word_games.app.tile_w = (40);
word_games.app.tile_pad = (4);
word_games.app.gu = (word_games.app.tile_w + word_games.app.tile_pad);
word_games.app.window = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
word_games.app.ww = (function word_games$app$ww(){
return cljs.core.first(cljs.core.deref(word_games.app.window));
});
word_games.app.wh = (function word_games$app$wh(){
return cljs.core.second(cljs.core.deref(word_games.app.window));
});
word_games.app.rect_grid = (function word_games$app$rect_grid(nx,ny,x_spacing,y_spacing){
var iter__4611__auto__ = (function word_games$app$rect_grid_$_iter__81565(s__81566){
return (new cljs.core.LazySeq(null,(function (){
var s__81566__$1 = s__81566;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__81566__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var b = cljs.core.first(xs__6308__auto__);
var iterys__4607__auto__ = ((function (s__81566__$1,b,xs__6308__auto__,temp__5753__auto__){
return (function word_games$app$rect_grid_$_iter__81565_$_iter__81567(s__81568){
return (new cljs.core.LazySeq(null,((function (s__81566__$1,b,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__81568__$1 = s__81568;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__81568__$1);
if(temp__5753__auto____$1){
var s__81568__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__81568__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__81568__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__81570 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__81569 = (0);
while(true){
if((i__81569 < size__4610__auto__)){
var a = cljs.core._nth(c__4609__auto__,i__81569);
cljs.core.chunk_append(b__81570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a * x_spacing),(b * y_spacing)], null));

var G__81691 = (i__81569 + (1));
i__81569 = G__81691;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__81570),word_games$app$rect_grid_$_iter__81565_$_iter__81567(cljs.core.chunk_rest(s__81568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__81570),null);
}
} else {
var a = cljs.core.first(s__81568__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(a * x_spacing),(b * y_spacing)], null),word_games$app$rect_grid_$_iter__81565_$_iter__81567(cljs.core.rest(s__81568__$2)));
}
} else {
return null;
}
break;
}
});})(s__81566__$1,b,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__81566__$1,b,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(nx)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,word_games$app$rect_grid_$_iter__81565(cljs.core.rest(s__81566__$1)));
} else {
var G__81692 = cljs.core.rest(s__81566__$1);
s__81566__$1 = G__81692;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(ny));
});
word_games.app.tiles = (function (){var letters = cljs.core.shuffle(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((13),"A"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),"B"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),"C"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((6),"D"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((18),"E"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),"F"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((4),"G"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),"H"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((12),"I"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),"J"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),"K"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((5),"L"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),"M"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((8),"N"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((11),"O"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),"P"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),"Q"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),"R"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((6),"S"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),"T"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((6),"U"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),"V"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),"W"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),"X"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),"Y"),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((2),"Z")], 0)));
var f = (function (pos,letter){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"letter","letter",-125811450),letter,new cljs.core.Keyword(null,"visible?","visible?",2129863715),false], null);
});
var wwh = Math.floor((word_games.app.ww() / (2)));
var whh = Math.floor((word_games.app.wh() / (2)));
var grid = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81573_SHARP_){
return svg_clj.utils.v_PLUS_(p1__81573_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(wwh - cljs.core.mod(wwh,word_games.app.gu)),(whh - cljs.core.mod(whh,word_games.app.gu))], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81572_SHARP_){
return svg_clj.utils.v_PLUS_(p1__81572_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(word_games.app.gu * (-3)),(word_games.app.gu * (-1))], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__81571_SHARP_){
return svg_clj.utils.v_PLUS_(p1__81571_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(word_games.app.gu / (2)),(word_games.app.gu / (2))], null));
}),word_games.app.rect_grid((7),Math.ceil((cljs.core.count(letters) / (7))),word_games.app.gu,word_games.app.gu))));
var tiles = cljs.core.map.cljs$core$IFn$_invoke$arity$3(f,grid,letters);
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),tiles));
})();
word_games.app.board_pos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(word_games.app.gu / (2)),(word_games.app.gu / (2))], null));
word_games.app.split_when = (function word_games$app$split_when(f,s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__81574){
var vec__81575 = p__81574;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81575,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81575,(1),null);
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(b,a) : f.call(null,b,a)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(acc) - (1))], null),cljs.core.conj,b);
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(s)], null)], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),s));
});
word_games.app.overlaps_QMARK_ = (function word_games$app$overlaps_QMARK_(tiles){
return cljs.core.some((function (p1__81578_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),p1__81578_SHARP_);
}),cljs.core.vals(cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"visible?","visible?",2129863715),cljs.core.vals(tiles))))));
});
word_games.app.get_ids_by_pos = (function word_games$app$get_ids_by_pos(pos,tiles){
var ts = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81580){
var vec__81581 = p__81580;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81581,(0),null);
var tile = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81581,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tile,new cljs.core.Keyword(null,"id","id",-1388402092),id);
}),tiles);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__81579_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(p1__81579_SHARP_));
}),ts));
});
word_games.app.move_tile_down = (function word_games$app$move_tile_down(id,tiles){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(tiles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(function (p1__81584_SHARP_){
return svg_clj.utils.v_PLUS_(p1__81584_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),word_games.app.gu], null));
}));
});
word_games.app.fix_overlaps = (function word_games$app$fix_overlaps(tiles){
while(true){
if(cljs.core.not(word_games.app.overlaps_QMARK_(tiles))){
return tiles;
} else {
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tiles){
return (function (p__81587){
var vec__81588 = p__81587;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81588,(0),null);
var map__81591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81588,(1),null);
var map__81591__$1 = cljs.core.__destructure_map(map__81591);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81591__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return pos;
});})(tiles))
,tiles);
var overlap_ids = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (tiles,positions){
return (function (p1__81585_SHARP_){
return (cljs.core.count(p1__81585_SHARP_) > (1));
});})(tiles,positions))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tiles,positions){
return (function (p1__81586_SHARP_){
return word_games.app.get_ids_by_pos(p1__81586_SHARP_,tiles);
});})(tiles,positions))
,positions));
var G__81693 = word_games.app.move_tile_down(cljs.core.first(cljs.core.first(overlap_ids)),tiles);
tiles = G__81693;
continue;
}
break;
}
});
word_games.app.fix_overlaps_BANG_ = (function word_games$app$fix_overlaps_BANG_(){
var fixed = word_games.app.fix_overlaps(cljs.core.deref(word_games.app.tiles));
return cljs.core.reset_BANG_(word_games.app.tiles,fixed);
});
word_games.app.visible_QMARK_ = (function word_games$app$visible_QMARK_(id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(word_games.app.tiles),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null));
});
word_games.app.snap_tiles_BANG_ = (function word_games$app$snap_tiles_BANG_(){
var snap_tile = (function (p__81592){
var vec__81593 = p__81592;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81593,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81593,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.floor(((x + (word_games.app.gu / 2.0)) - cljs.core.mod(x,word_games.app.gu))),Math.floor(((y + (word_games.app.gu / 2.0)) - cljs.core.mod(y,word_games.app.gu)))], null);
});
var seq__81596 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(word_games.app.visible_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$1((145))));
var chunk__81597 = null;
var count__81598 = (0);
var i__81599 = (0);
while(true){
if((i__81599 < count__81598)){
var id = chunk__81597.cljs$core$IIndexed$_nth$arity$2(null,i__81599);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pos","pos",-864607220)], null),snap_tile);


var G__81694 = seq__81596;
var G__81695 = chunk__81597;
var G__81696 = count__81598;
var G__81697 = (i__81599 + (1));
seq__81596 = G__81694;
chunk__81597 = G__81695;
count__81598 = G__81696;
i__81599 = G__81697;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__81596);
if(temp__5753__auto__){
var seq__81596__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81596__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__81596__$1);
var G__81698 = cljs.core.chunk_rest(seq__81596__$1);
var G__81699 = c__4638__auto__;
var G__81700 = cljs.core.count(c__4638__auto__);
var G__81701 = (0);
seq__81596 = G__81698;
chunk__81597 = G__81699;
count__81598 = G__81700;
i__81599 = G__81701;
continue;
} else {
var id = cljs.core.first(seq__81596__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pos","pos",-864607220)], null),snap_tile);


var G__81702 = cljs.core.next(seq__81596__$1);
var G__81703 = null;
var G__81704 = (0);
var G__81705 = (0);
seq__81596 = G__81702;
chunk__81597 = G__81703;
count__81598 = G__81704;
i__81599 = G__81705;
continue;
}
} else {
return null;
}
}
break;
}
});
word_games.app.update_state_BANG_ = (function word_games$app$update_state_BANG_(){
word_games.app.snap_tiles_BANG_();

return word_games.app.fix_overlaps_BANG_();
});
word_games.app.get_words = (function word_games$app$get_words(){
var f = (function (p__81606){
var vec__81607 = p__81606;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81607,(0),null);
var map__81610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81607,(1),null);
var map__81610__$1 = cljs.core.__destructure_map(map__81610);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81610__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81610__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81610__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
if(cljs.core.truth_(visible_QMARK_)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((cljs.core.first(pos) / word_games.app.gu) | (0)),new cljs.core.Keyword(null,"y","y",-1757859776),((cljs.core.second(pos) / word_games.app.gu) | (0)),new cljs.core.Keyword(null,"letter","letter",-125811450),letter], null);
} else {
return null;
}
});
var rows = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__81602_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(p1__81602_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"letter","letter",-125811450),s));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__81601_SHARP_){
return word_games.app.split_when((function (a,b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b) + (1)));
}),p1__81601_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),s);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__81600_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__81600_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.deref(word_games.app.tiles))))))], 0))));
var cols = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__81605_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(p1__81605_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"letter","letter",-125811450),s));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__81604_SHARP_){
return word_games.app.split_when((function (a,b){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b) + (1)));
}),p1__81604_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),s);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__81603_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__81603_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,cljs.core.deref(word_games.app.tiles))))))], 0))));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),rows,new cljs.core.Keyword(null,"vertical","vertical",718696748),cols], null);
});
word_games.app.get_client_mid = (function word_games$app$get_client_mid(evt){
var r = evt.target.getBoundingClientRect();
var left = r.left;
var top = r.top;
var bottom = r.bottom;
var right = r.right;
var w = (right - left);
var h = (bottom - top);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(right - (w / 2.0)),new cljs.core.Keyword(null,"y","y",-1757859776),(bottom - (h / 2.0))], null);
});
word_games.app.prevent_motion = (function word_games$app$prevent_motion(e){
window.scrollTo((0),(0));

(e.preventDefault.cljs$core$IFn$_invoke$arity$0 ? e.preventDefault.cljs$core$IFn$_invoke$arity$0() : e.preventDefault.call(null));

return (e.stopPropagation.cljs$core$IFn$_invoke$arity$0 ? e.stopPropagation.cljs$core$IFn$_invoke$arity$0() : e.stopPropagation.call(null));
});
goog.events.listen(window,goog.events.EventType.SCROLL,word_games.app.prevent_motion);
goog.events.listen(window,goog.events.EventType.TOUCHMOVE,word_games.app.prevent_motion);
word_games.app.mouse_move_handler = (function word_games$app$mouse_move_handler(id,offset){
return (function (evt){
var cx = evt.clientX;
var cy = evt.clientY;
var ox = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset);
var oy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"board","board",-1907017633))){
return cljs.core.reset_BANG_(word_games.app.board_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.floor((cx - ox)),Math.floor((cy - oy))], null));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pos","pos",-864607220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.floor((cx - ox)),Math.floor((cy - oy))], null));
}
});
});
word_games.app.mouse_up_handler = (function word_games$app$mouse_up_handler(on_move){
return (function word_games$app$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
word_games.app.mouse_down_handler = (function word_games$app$mouse_down_handler(id){
return (function (e){
var map__81611 = word_games.app.get_client_mid(e);
var map__81611__$1 = cljs.core.__destructure_map(map__81611);
var mid = map__81611__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81611__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81611__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__81612 = svg_clj.utils.v_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),cljs.core.deref(word_games.app.board_pos));
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81612,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81612,(1),null);
var cx = e.clientX;
var cy = e.clientY;
var offset = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"board","board",-1907017633)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cx + bx),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + by)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((cx - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"board","board",-1907017633)))?null:x)) - bx),new cljs.core.Keyword(null,"y","y",-1757859776),((cy - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"board","board",-1907017633)))?null:y)) - by)], null));
var on_move = word_games.app.mouse_move_handler(id,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,word_games.app.mouse_up_handler(on_move));
});
});
word_games.app.touch_move_handler = (function word_games$app$touch_move_handler(id,offset){
return (function (evt){
var cx = evt.clientX;
var cy = evt.clientY;
var ox = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset);
var oy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"board","board",-1907017633))){
return cljs.core.reset_BANG_(word_games.app.board_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.floor((cx - ox)),Math.floor((cy - oy))], null));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pos","pos",-864607220)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.floor((cx - ox)),Math.floor((cy - oy))], null));
}
});
});
word_games.app.touch_end_handler = (function word_games$app$touch_end_handler(on_move){
return (function word_games$app$touch_end_handler_$_te(evt){
return goog.events.unlisten(window,goog.events.EventType.TOUCHMOVE,on_move);
});
});
word_games.app.touch_start_handler = (function word_games$app$touch_start_handler(id){
return (function (e){
var map__81615 = word_games.app.get_client_mid(e);
var map__81615__$1 = cljs.core.__destructure_map(map__81615);
var mid = map__81615__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81615__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81615__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__81616 = svg_clj.utils.v_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),cljs.core.deref(word_games.app.board_pos));
var bx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81616,(0),null);
var by = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81616,(1),null);
var cx = cljs.core.first(e.changedTouches).pageX;
var cy = cljs.core.first(e.changedTouches).pageY;
var offset = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"board","board",-1907017633)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(cx + bx),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + by)], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((cx - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"board","board",-1907017633)))?null:x)) - bx),new cljs.core.Keyword(null,"y","y",-1757859776),((cy - ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"board","board",-1907017633)))?null:y)) - by)], null));
var on_move = word_games.app.touch_move_handler(id,offset);
(e.preventDefault.cljs$core$IFn$_invoke$arity$0 ? e.preventDefault.cljs$core$IFn$_invoke$arity$0() : e.preventDefault.call(null));

goog.events.listen(window,goog.events.EventType.TOUCHMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.TOUCHEND,word_games.app.touch_end_handler(on_move));
});
});
word_games.app.tile = (function word_games$app$tile(p__81619){
var vec__81620 = p__81619;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81620,(0),null);
var map__81623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81620,(1),null);
var map__81623__$1 = cljs.core.__destructure_map(map__81623);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81623__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var letter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81623__$1,new cljs.core.Keyword(null,"letter","letter",-125811450));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81623__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
if(cljs.core.truth_(visible_QMARK_)){
return svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([svg_clj.transforms.style(svg_clj.elements.rect(word_games.app.tile_w,word_games.app.tile_w),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"fill","fill",883462889),"#EBE89A",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#9E9C59",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1)], null)),svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.text(letter),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(4)], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"#9E6067",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.625 * word_games.app.gu)),"px"].join(''),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Palatino",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none"], null)], null))], 0)),svg_clj.utils.v_PLUS_(pos,cljs.core.deref(word_games.app.board_pos))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),word_games.app.mouse_down_handler(id),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),word_games.app.touch_start_handler(id)], null));
} else {
return null;
}
});
word_games.app.wordlist = (function word_games$app$wordlist(){
var scrabble_finder_url = "https://scrabble.merriam.com/finder/";
var map__81624 = word_games.app.get_words();
var map__81624__$1 = cljs.core.__destructure_map(map__81624);
var horizontal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81624__$1,new cljs.core.Keyword(null,"horizontal","horizontal",2062109475));
var vertical = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81624__$1,new cljs.core.Keyword(null,"vertical","vertical",718696748));
var lh = (20);
var vlist_offset = (((3) + cljs.core.count(horizontal)) * lh);
var f = (function (pos){
return (function (idx,t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"xlinkHref","xlinkHref",-1814059639),[scrabble_finder_url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''),new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.text(t),pos),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(idx * lh)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),"#9E6067",new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null))], null);
});
});
return svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.text("HORIZONTAL:"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),lh], null)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),((2) * lh)], null)),horizontal),svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.text("VERTICAL:"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),vlist_offset], null)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(50),(lh + vlist_offset)], null)),vertical)], 0));
});
word_games.app.center_button_pos = (function word_games$app$center_button_pos(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((1) * word_games.app.gu),(word_games.app.wh() - (0.625 * word_games.app.gu))], null);
});
word_games.app.center_BANG_ = (function word_games$app$center_BANG_(e){
return cljs.core.reset_BANG_(word_games.app.board_pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
word_games.app.center_button = (function word_games$app$center_button(){
return svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([svg_clj.transforms.style(svg_clj.elements.rect(((2) * word_games.app.tile_w),word_games.app.tile_w),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#596B4C",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"fill","fill",883462889),"#C3EBA7",new cljs.core.Keyword(null,"filter","filter",-948537934),"drop-shadow(1px 1px 4px rgb(0 0 0 / 0.2))"], null)),svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.text("CENTER"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"#596B4C",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 * word_games.app.gu)),"px"].join(''),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Palatino",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none"], null)], null))], 0)),word_games.app.center_button_pos()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),word_games.app.center_BANG_], null));
});
word_games.app.dump_target_line = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
word_games.app.dump_button_pos = (function word_games$app$dump_button_pos(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(word_games.app.ww() - ((1) * word_games.app.gu)),(word_games.app.wh() - (0.625 * word_games.app.gu))], null);
});
word_games.app.show_dump_target = (function word_games$app$show_dump_target(e){
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81626){
var vec__81627 = p__81626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81627,(0),null);
var map__81630 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81627,(1),null);
var map__81630__$1 = cljs.core.__destructure_map(map__81630);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81630__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return pos;
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__81631){
var vec__81632 = p__81631;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81632,(0),null);
var map__81635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81632,(1),null);
var map__81635__$1 = cljs.core.__destructure_map(map__81635);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81635__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
return visible_QMARK_;
}),cljs.core.deref(word_games.app.tiles)));
var pta = svg_clj.utils.v_PLUS_(cljs.core.deref(word_games.app.board_pos),cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__81625_SHARP_){
return svg_clj.utils.distance(svg_clj.utils.v_PLUS_(p1__81625_SHARP_,cljs.core.deref(word_games.app.board_pos)),word_games.app.dump_button_pos());
}),positions)));
var ptc = word_games.app.dump_button_pos();
var ptb = svg_clj.utils.v_PLUS_(svg_clj.parametric.line(pta,ptc)(0.5),svg_clj.parametric.circle.cljs$core$IFn$_invoke$arity$1(((4) * word_games.app.gu))(cljs.core.rand.cljs$core$IFn$_invoke$arity$0()));
cljs.core.reset_BANG_(word_games.app.dump_target_line,svg_clj.transforms.style(svg_clj.path.bezier.cljs$core$IFn$_invoke$arity$3(pta,ptb,ptc),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(7),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#EB838E",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.3], null)));

return setTimeout((function (){
return cljs.core.reset_BANG_(word_games.app.dump_target_line,null);
}),(700));
});
word_games.app.dump_BANG_ = (function word_games$app$dump_BANG_(e){
var ts = cljs.core.deref(word_games.app.tiles);
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81637){
var vec__81638 = p__81637;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81638,(0),null);
var map__81641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81638,(1),null);
var map__81641__$1 = cljs.core.__destructure_map(map__81641);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81641__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,pos], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__81642){
var vec__81643 = p__81642;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81643,(0),null);
var map__81646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81643,(1),null);
var map__81646__$1 = cljs.core.__destructure_map(map__81646);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81646__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
return visible_QMARK_;
}),ts));
var to_dump = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__81636_SHARP_){
return svg_clj.utils.distance(svg_clj.utils.v_PLUS_(cljs.core.second(p1__81636_SHARP_),cljs.core.deref(word_games.app.board_pos)),word_games.app.dump_button_pos());
}),positions));
var to_show = cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81647){
var vec__81648 = p__81647;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81648,(0),null);
var map__81651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81648,(1),null);
var map__81651__$1 = cljs.core.__destructure_map(map__81651);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81651__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return id;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__81652){
var vec__81653 = p__81652;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81653,(0),null);
var map__81656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81653,(1),null);
var map__81656__$1 = cljs.core.__destructure_map(map__81656);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81656__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
return visible_QMARK_;
}),ts)));
var seq__81657_81706 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(to_show)));
var chunk__81658_81707 = null;
var count__81659_81708 = (0);
var i__81660_81709 = (0);
while(true){
if((i__81660_81709 < count__81659_81708)){
var to_show_81710__$1 = chunk__81658_81707.cljs$core$IIndexed$_nth$arity$2(null,i__81660_81709);
var position_81711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((word_games.app.ww() / (2)) - cljs.core.mod((word_games.app.ww() / (2)),word_games.app.gu)) - (- word_games.app.gu)) - (cljs.core.first(to_show_81710__$1) * word_games.app.gu)),((word_games.app.wh() - cljs.core.mod(word_games.app.wh(),word_games.app.gu)) - ((2) * word_games.app.gu))], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(to_show_81710__$1),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),svg_clj.utils.v_(position_81711,cljs.core.deref(word_games.app.board_pos)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(to_show_81710__$1),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),true);


var G__81712 = seq__81657_81706;
var G__81713 = chunk__81658_81707;
var G__81714 = count__81659_81708;
var G__81715 = (i__81660_81709 + (1));
seq__81657_81706 = G__81712;
chunk__81658_81707 = G__81713;
count__81659_81708 = G__81714;
i__81660_81709 = G__81715;
continue;
} else {
var temp__5753__auto___81716 = cljs.core.seq(seq__81657_81706);
if(temp__5753__auto___81716){
var seq__81657_81717__$1 = temp__5753__auto___81716;
if(cljs.core.chunked_seq_QMARK_(seq__81657_81717__$1)){
var c__4638__auto___81718 = cljs.core.chunk_first(seq__81657_81717__$1);
var G__81719 = cljs.core.chunk_rest(seq__81657_81717__$1);
var G__81720 = c__4638__auto___81718;
var G__81721 = cljs.core.count(c__4638__auto___81718);
var G__81722 = (0);
seq__81657_81706 = G__81719;
chunk__81658_81707 = G__81720;
count__81659_81708 = G__81721;
i__81660_81709 = G__81722;
continue;
} else {
var to_show_81723__$1 = cljs.core.first(seq__81657_81717__$1);
var position_81724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((word_games.app.ww() / (2)) - cljs.core.mod((word_games.app.ww() / (2)),word_games.app.gu)) - (- word_games.app.gu)) - (cljs.core.first(to_show_81723__$1) * word_games.app.gu)),((word_games.app.wh() - cljs.core.mod(word_games.app.wh(),word_games.app.gu)) - ((2) * word_games.app.gu))], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(to_show_81723__$1),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),svg_clj.utils.v_(position_81724,cljs.core.deref(word_games.app.board_pos)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(to_show_81723__$1),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),true);


var G__81725 = cljs.core.next(seq__81657_81717__$1);
var G__81726 = null;
var G__81727 = (0);
var G__81728 = (0);
seq__81657_81706 = G__81725;
chunk__81658_81707 = G__81726;
count__81659_81708 = G__81727;
i__81660_81709 = G__81728;
continue;
}
} else {
}
}
break;
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(to_dump),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),false);
});
word_games.app.dump_button = (function word_games$app$dump_button(){
return svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([svg_clj.transforms.style(svg_clj.elements.rect(((2) * word_games.app.tile_w),word_games.app.tile_w),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#9E6067",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"fill","fill",883462889),"#EB838E",new cljs.core.Keyword(null,"filter","filter",-948537934),"drop-shadow(1px 1px 4px rgb(0 0 0 / 0.2))"], null)),svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.text("DUMP"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"#9E6067",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 * word_games.app.gu)),"px"].join(''),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Palatino",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none"], null)], null))], 0)),word_games.app.dump_button_pos()),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),word_games.app.dump_BANG_,new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),word_games.app.dump_BANG_,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),word_games.app.show_dump_target,new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),word_games.app.show_dump_target], null));
});
word_games.app.add_button_pos = (function word_games$app$add_button_pos(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(word_games.app.ww() / (2)),(word_games.app.wh() - (0.625 * word_games.app.gu))], null);
});
word_games.app.add_BANG_ = (function word_games$app$add_BANG_(){
var ts = cljs.core.deref(word_games.app.tiles);
var positions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81661){
var vec__81662 = p__81661;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81662,(0),null);
var map__81665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81662,(1),null);
var map__81665__$1 = cljs.core.__destructure_map(map__81665);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81665__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,pos], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__81666){
var vec__81667 = p__81666;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81667,(0),null);
var map__81670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81667,(1),null);
var map__81670__$1 = cljs.core.__destructure_map(map__81670);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81670__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
return visible_QMARK_;
}),ts));
var to_show = cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__81671){
var vec__81672 = p__81671;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81672,(0),null);
var map__81675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81672,(1),null);
var map__81675__$1 = cljs.core.__destructure_map(map__81675);
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81675__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
return id;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__81676){
var vec__81677 = p__81676;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81677,(0),null);
var map__81680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__81677,(1),null);
var map__81680__$1 = cljs.core.__destructure_map(map__81680);
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__81680__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
return visible_QMARK_;
}),ts)));
var seq__81681 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(to_show)));
var chunk__81682 = null;
var count__81683 = (0);
var i__81684 = (0);
while(true){
if((i__81684 < count__81683)){
var to_show__$1 = chunk__81682.cljs$core$IIndexed$_nth$arity$2(null,i__81684);
var position_81729 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((word_games.app.ww() / (2)) - cljs.core.mod((word_games.app.ww() / (2)),word_games.app.gu)) - (- word_games.app.gu)) - (cljs.core.first(to_show__$1) * word_games.app.gu)),((word_games.app.wh() - cljs.core.mod(word_games.app.wh(),word_games.app.gu)) - ((2) * word_games.app.gu))], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(to_show__$1),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),svg_clj.utils.v_(position_81729,cljs.core.deref(word_games.app.board_pos)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(to_show__$1),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),true);


var G__81730 = seq__81681;
var G__81731 = chunk__81682;
var G__81732 = count__81683;
var G__81733 = (i__81684 + (1));
seq__81681 = G__81730;
chunk__81682 = G__81731;
count__81683 = G__81732;
i__81684 = G__81733;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__81681);
if(temp__5753__auto__){
var seq__81681__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__81681__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__81681__$1);
var G__81734 = cljs.core.chunk_rest(seq__81681__$1);
var G__81735 = c__4638__auto__;
var G__81736 = cljs.core.count(c__4638__auto__);
var G__81737 = (0);
seq__81681 = G__81734;
chunk__81682 = G__81735;
count__81683 = G__81736;
i__81684 = G__81737;
continue;
} else {
var to_show__$1 = cljs.core.first(seq__81681__$1);
var position_81738 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((word_games.app.ww() / (2)) - cljs.core.mod((word_games.app.ww() / (2)),word_games.app.gu)) - (- word_games.app.gu)) - (cljs.core.first(to_show__$1) * word_games.app.gu)),((word_games.app.wh() - cljs.core.mod(word_games.app.wh(),word_games.app.gu)) - ((2) * word_games.app.gu))], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(to_show__$1),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),svg_clj.utils.v_(position_81738,cljs.core.deref(word_games.app.board_pos)));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(to_show__$1),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),true);


var G__81739 = cljs.core.next(seq__81681__$1);
var G__81740 = null;
var G__81741 = (0);
var G__81742 = (0);
seq__81681 = G__81739;
chunk__81682 = G__81740;
count__81683 = G__81741;
i__81684 = G__81742;
continue;
}
} else {
return null;
}
}
break;
}
});
word_games.app.add_button = (function word_games$app$add_button(){
return svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([svg_clj.transforms.style(svg_clj.elements.rect(((2) * word_games.app.tile_w),word_games.app.tile_w),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#596B4C",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"fill","fill",883462889),"#C3EBA7",new cljs.core.Keyword(null,"filter","filter",-948537934),"drop-shadow(1px 1px 4px rgb(0 0 0 / 0.2))"], null)),svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.text("ADD"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"#596B4C",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 * word_games.app.gu)),"px"].join(''),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Palatino",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none"], null)], null))], 0)),word_games.app.add_button_pos()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),word_games.app.add_BANG_], null));
});
word_games.app.share_button_pos = (function word_games$app$share_button_pos(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(word_games.app.ww() - ((1) * word_games.app.gu)),(0.625 * word_games.app.gu)], null);
});
word_games.app.share_BANG_ = (function word_games$app$share_BANG_(){
var text = "ON CLIPBOARD";
return navigator.clipboard.writeText(text);
});
word_games.app.share_button = (function word_games$app$share_button(){
return svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([svg_clj.transforms.style(svg_clj.elements.rect(((2) * word_games.app.tile_w),word_games.app.tile_w),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"rx","rx",1627208482),(5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#596B4C",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(1),new cljs.core.Keyword(null,"fill","fill",883462889),"#C3EBA7",new cljs.core.Keyword(null,"filter","filter",-948537934),"drop-shadow(1px 1px 4px rgb(0 0 0 / 0.2))"], null)),svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.text("SHARE"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(3)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"#596B4C",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((0.375 * word_games.app.gu)),"px"].join(''),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Palatino",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none"], null)], null))], 0)),word_games.app.share_button_pos()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),word_games.app.share_BANG_], null));
});
word_games.app.titles = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Wow, it's words!","Oops, all letters!","You've seen a crossword before, right?","WWWWWWOOOOORRRDDDDS!","I like word games, ok?","Naming things is hard. This is a game with letters.","grid + letters = words + fun","Clean up these tiles, please.","Grams. Grams. Grams.","Letters make words. Words are fun.","Do not tolerate intolerance.","My name is Adam and I've made this game for you (and me).","Please be kind to other people."], null);
word_games.app.rand_title = cljs.core.first(cljs.core.shuffle(word_games.app.titles));
word_games.app.title = (function word_games$app$title(){
return svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.text(word_games.app.rand_title),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(word_games.app.ww() / (2)),(word_games.app.wh() * 0.4)], null)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill","fill",883462889),"#9E6067",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"40px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"Palatino",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none",new cljs.core.Keyword(null,"-moz-user-select","-moz-user-select",-342302744),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none"], null)], null));
});
word_games.app.board = (function word_games$app$board(){
var table = svg_clj.transforms.style(svg_clj.transforms.translate.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.rect(((4) * word_games.app.ww()),((4) * word_games.app.wh())),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((2) * word_games.app.ww()),((2) * word_games.app.wh())], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fill","fill",883462889),"#B2D8EB",new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),word_games.app.mouse_down_handler(new cljs.core.Keyword(null,"board","board",-1907017633)),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),word_games.app.touch_start_handler(new cljs.core.Keyword(null,"board","board",-1907017633))], null));
return svg_clj.transforms.style(svg_clj.composites.svg.cljs$core$IFn$_invoke$arity$3(svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([table,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_games.app.title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_games.app.wordlist], null),svg_clj.elements.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(word_games.app.tile,cljs.core.deref(word_games.app.tiles))], 0)),cljs.core.deref(word_games.app.dump_target_line),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_games.app.center_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_games.app.add_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_games.app.dump_button], null)], 0)),word_games.app.ww(),word_games.app.wh()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null)], null));
});
word_games.app.app = (function word_games$app$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [word_games.app.board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(word_games.app.board_pos))], null)], null);
});
word_games.app.mount = (function word_games$app$mount(app){
var seq__81685_81743 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$1((21)));
var chunk__81686_81744 = null;
var count__81687_81745 = (0);
var i__81688_81746 = (0);
while(true){
if((i__81688_81746 < count__81687_81745)){
var id_81747 = chunk__81686_81744.cljs$core$IIndexed$_nth$arity$2(null,i__81688_81746);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_81747,new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),true);


var G__81748 = seq__81685_81743;
var G__81749 = chunk__81686_81744;
var G__81750 = count__81687_81745;
var G__81751 = (i__81688_81746 + (1));
seq__81685_81743 = G__81748;
chunk__81686_81744 = G__81749;
count__81687_81745 = G__81750;
i__81688_81746 = G__81751;
continue;
} else {
var temp__5753__auto___81752 = cljs.core.seq(seq__81685_81743);
if(temp__5753__auto___81752){
var seq__81685_81753__$1 = temp__5753__auto___81752;
if(cljs.core.chunked_seq_QMARK_(seq__81685_81753__$1)){
var c__4638__auto___81754 = cljs.core.chunk_first(seq__81685_81753__$1);
var G__81755 = cljs.core.chunk_rest(seq__81685_81753__$1);
var G__81756 = c__4638__auto___81754;
var G__81757 = cljs.core.count(c__4638__auto___81754);
var G__81758 = (0);
seq__81685_81743 = G__81755;
chunk__81686_81744 = G__81756;
count__81687_81745 = G__81757;
i__81688_81746 = G__81758;
continue;
} else {
var id_81759 = cljs.core.first(seq__81685_81753__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(word_games.app.tiles,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_81759,new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),true);


var G__81760 = cljs.core.next(seq__81685_81753__$1);
var G__81761 = null;
var G__81762 = (0);
var G__81763 = (0);
seq__81685_81743 = G__81760;
chunk__81686_81744 = G__81761;
count__81687_81745 = G__81762;
i__81688_81746 = G__81763;
continue;
}
} else {
}
}
break;
}

goog.events.listen(window,goog.events.EventType.MOUSEUP,word_games.app.update_state_BANG_);

goog.events.listen(window,goog.events.EventType.TOUCHEND,word_games.app.update_state_BANG_);

goog.events.listen(window,goog.events.EventType.RESIZE,(function (){
return cljs.core.reset_BANG_(word_games.app.window,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [window.innerWidth,window.innerHeight], null));
}));

var G__81689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app], null);
var G__81690 = document.getElementById("root");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__81689,G__81690) : reagent.core.render_component.call(null,G__81689,G__81690));
});
word_games.app.init = (function word_games$app$init(){
return word_games.app.mount(word_games.app.app);
});
word_games.app.re_render = (function word_games$app$re_render(){
return word_games.app.mount(word_games.app.app);
});

//# sourceMappingURL=word_games.app.js.map
