goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__34191,res){
var map__34192 = p__34191;
var map__34192__$1 = cljs.core.__destructure_map(map__34192);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34192__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34192__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__34193 = res;
var G__34193__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34193,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__34193);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34193__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__34193__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__34195 = arguments.length;
switch (G__34195) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__34196,msg,handlers,timeout_after_ms){
var map__34197 = p__34196;
var map__34197__$1 = cljs.core.__destructure_map(map__34197);
var runtime = map__34197__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34197__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34275 = arguments.length;
var i__4819__auto___34276 = (0);
while(true){
if((i__4819__auto___34276 < len__4818__auto___34275)){
args__4824__auto__.push((arguments[i__4819__auto___34276]));

var G__34277 = (i__4819__auto___34276 + (1));
i__4819__auto___34276 = G__34277;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__34201,ev,args){
var map__34202 = p__34201;
var map__34202__$1 = cljs.core.__destructure_map(map__34202);
var runtime = map__34202__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34202__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__34203 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34206 = null;
var count__34207 = (0);
var i__34208 = (0);
while(true){
if((i__34208 < count__34207)){
var ext = chunk__34206.cljs$core$IIndexed$_nth$arity$2(null,i__34208);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34278 = seq__34203;
var G__34279 = chunk__34206;
var G__34280 = count__34207;
var G__34281 = (i__34208 + (1));
seq__34203 = G__34278;
chunk__34206 = G__34279;
count__34207 = G__34280;
i__34208 = G__34281;
continue;
} else {
var G__34282 = seq__34203;
var G__34283 = chunk__34206;
var G__34284 = count__34207;
var G__34285 = (i__34208 + (1));
seq__34203 = G__34282;
chunk__34206 = G__34283;
count__34207 = G__34284;
i__34208 = G__34285;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34203);
if(temp__5753__auto__){
var seq__34203__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34203__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34203__$1);
var G__34286 = cljs.core.chunk_rest(seq__34203__$1);
var G__34287 = c__4638__auto__;
var G__34288 = cljs.core.count(c__4638__auto__);
var G__34289 = (0);
seq__34203 = G__34286;
chunk__34206 = G__34287;
count__34207 = G__34288;
i__34208 = G__34289;
continue;
} else {
var ext = cljs.core.first(seq__34203__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__34290 = cljs.core.next(seq__34203__$1);
var G__34291 = null;
var G__34292 = (0);
var G__34293 = (0);
seq__34203 = G__34290;
chunk__34206 = G__34291;
count__34207 = G__34292;
i__34208 = G__34293;
continue;
} else {
var G__34294 = cljs.core.next(seq__34203__$1);
var G__34295 = null;
var G__34296 = (0);
var G__34297 = (0);
seq__34203 = G__34294;
chunk__34206 = G__34295;
count__34207 = G__34296;
i__34208 = G__34297;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq34198){
var G__34199 = cljs.core.first(seq34198);
var seq34198__$1 = cljs.core.next(seq34198);
var G__34200 = cljs.core.first(seq34198__$1);
var seq34198__$2 = cljs.core.next(seq34198__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34199,G__34200,seq34198__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__34219,p__34220){
var map__34223 = p__34219;
var map__34223__$1 = cljs.core.__destructure_map(map__34223);
var runtime = map__34223__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34223__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34226 = p__34220;
var map__34226__$1 = cljs.core.__destructure_map(map__34226);
var msg = map__34226__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34226__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__34227 = cljs.core.deref(state_ref);
var map__34227__$1 = cljs.core.__destructure_map(map__34227);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34227__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34227__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__34228){
var map__34229 = p__34228;
var map__34229__$1 = cljs.core.__destructure_map(map__34229);
var runtime = map__34229__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34229__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__34230,msg){
var map__34231 = p__34230;
var map__34231__$1 = cljs.core.__destructure_map(map__34231);
var runtime = map__34231__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34231__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__34232,key,p__34233){
var map__34234 = p__34232;
var map__34234__$1 = cljs.core.__destructure_map(map__34234);
var state = map__34234__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34234__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__34235 = p__34233;
var map__34235__$1 = cljs.core.__destructure_map(map__34235);
var spec = map__34235__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34235__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__34241,key,spec){
var map__34242 = p__34241;
var map__34242__$1 = cljs.core.__destructure_map(map__34242);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34242__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__34243_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__34243_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__34244_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__34244_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__34245_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__34245_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__34246_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__34246_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__34247_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__34247_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__34249,key){
var map__34250 = p__34249;
var map__34250__$1 = cljs.core.__destructure_map(map__34250);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34250__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__34251,msg){
var map__34252 = p__34251;
var map__34252__$1 = cljs.core.__destructure_map(map__34252);
var runtime = map__34252__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34252__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__34254,p__34255){
var map__34256 = p__34254;
var map__34256__$1 = cljs.core.__destructure_map(map__34256);
var runtime = map__34256__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34256__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__34257 = p__34255;
var map__34257__$1 = cljs.core.__destructure_map(map__34257);
var msg = map__34257__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34257__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34257__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__34261 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__34263 = null;
var count__34264 = (0);
var i__34265 = (0);
while(true){
if((i__34265 < count__34264)){
var map__34270 = chunk__34263.cljs$core$IIndexed$_nth$arity$2(null,i__34265);
var map__34270__$1 = cljs.core.__destructure_map(map__34270);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34270__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34301 = seq__34261;
var G__34302 = chunk__34263;
var G__34303 = count__34264;
var G__34304 = (i__34265 + (1));
seq__34261 = G__34301;
chunk__34263 = G__34302;
count__34264 = G__34303;
i__34265 = G__34304;
continue;
} else {
var G__34305 = seq__34261;
var G__34306 = chunk__34263;
var G__34307 = count__34264;
var G__34308 = (i__34265 + (1));
seq__34261 = G__34305;
chunk__34263 = G__34306;
count__34264 = G__34307;
i__34265 = G__34308;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34261);
if(temp__5753__auto__){
var seq__34261__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34261__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__34261__$1);
var G__34309 = cljs.core.chunk_rest(seq__34261__$1);
var G__34310 = c__4638__auto__;
var G__34311 = cljs.core.count(c__4638__auto__);
var G__34312 = (0);
seq__34261 = G__34309;
chunk__34263 = G__34310;
count__34264 = G__34311;
i__34265 = G__34312;
continue;
} else {
var map__34271 = cljs.core.first(seq__34261__$1);
var map__34271__$1 = cljs.core.__destructure_map(map__34271);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34271__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__34313 = cljs.core.next(seq__34261__$1);
var G__34314 = null;
var G__34315 = (0);
var G__34316 = (0);
seq__34261 = G__34313;
chunk__34263 = G__34314;
count__34264 = G__34315;
i__34265 = G__34316;
continue;
} else {
var G__34317 = cljs.core.next(seq__34261__$1);
var G__34318 = null;
var G__34319 = (0);
var G__34320 = (0);
seq__34261 = G__34317;
chunk__34263 = G__34318;
count__34264 = G__34319;
i__34265 = G__34320;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
