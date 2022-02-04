goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__35493,p__35494){
var map__35495 = p__35493;
var map__35495__$1 = cljs.core.__destructure_map(map__35495);
var svc = map__35495__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35495__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35495__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35495__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35496 = p__35494;
var map__35496__$1 = cljs.core.__destructure_map(map__35496);
var msg = map__35496__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35496__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35496__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35496__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35496__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__35503,p__35504){
var map__35506 = p__35503;
var map__35506__$1 = cljs.core.__destructure_map(map__35506);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35506__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__35507 = p__35504;
var map__35507__$1 = cljs.core.__destructure_map(map__35507);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35507__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__35510,p__35511){
var map__35512 = p__35510;
var map__35512__$1 = cljs.core.__destructure_map(map__35512);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35512__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35512__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__35513 = p__35511;
var map__35513__$1 = cljs.core.__destructure_map(map__35513);
var msg = map__35513__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35513__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__35517,tid){
var map__35518 = p__35517;
var map__35518__$1 = cljs.core.__destructure_map(map__35518);
var svc = map__35518__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35518__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__35527 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__35528 = null;
var count__35529 = (0);
var i__35530 = (0);
while(true){
if((i__35530 < count__35529)){
var vec__35540 = chunk__35528.cljs$core$IIndexed$_nth$arity$2(null,i__35530);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35540,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35540,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35556 = seq__35527;
var G__35557 = chunk__35528;
var G__35558 = count__35529;
var G__35559 = (i__35530 + (1));
seq__35527 = G__35556;
chunk__35528 = G__35557;
count__35529 = G__35558;
i__35530 = G__35559;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35527);
if(temp__5753__auto__){
var seq__35527__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35527__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35527__$1);
var G__35560 = cljs.core.chunk_rest(seq__35527__$1);
var G__35561 = c__4638__auto__;
var G__35562 = cljs.core.count(c__4638__auto__);
var G__35563 = (0);
seq__35527 = G__35560;
chunk__35528 = G__35561;
count__35529 = G__35562;
i__35530 = G__35563;
continue;
} else {
var vec__35545 = cljs.core.first(seq__35527__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35545,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35545,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__35564 = cljs.core.next(seq__35527__$1);
var G__35565 = null;
var G__35566 = (0);
var G__35567 = (0);
seq__35527 = G__35564;
chunk__35528 = G__35565;
count__35529 = G__35566;
i__35530 = G__35567;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__35519_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__35519_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__35520_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__35520_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__35521_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__35521_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__35522_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__35522_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__35549){
var map__35550 = p__35549;
var map__35550__$1 = cljs.core.__destructure_map(map__35550);
var svc = map__35550__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35550__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
