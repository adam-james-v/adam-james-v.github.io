goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30550 = arguments.length;
switch (G__30550) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30581 = (function (f,blockable,meta30582){
this.f = f;
this.blockable = blockable;
this.meta30582 = meta30582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30583,meta30582__$1){
var self__ = this;
var _30583__$1 = this;
return (new cljs.core.async.t_cljs$core$async30581(self__.f,self__.blockable,meta30582__$1));
}));

(cljs.core.async.t_cljs$core$async30581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30583){
var self__ = this;
var _30583__$1 = this;
return self__.meta30582;
}));

(cljs.core.async.t_cljs$core$async30581.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30582","meta30582",1711356034,null)], null);
}));

(cljs.core.async.t_cljs$core$async30581.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30581");

(cljs.core.async.t_cljs$core$async30581.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30581");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30581.
 */
cljs.core.async.__GT_t_cljs$core$async30581 = (function cljs$core$async$__GT_t_cljs$core$async30581(f__$1,blockable__$1,meta30582){
return (new cljs.core.async.t_cljs$core$async30581(f__$1,blockable__$1,meta30582));
});

}

return (new cljs.core.async.t_cljs$core$async30581(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30596 = arguments.length;
switch (G__30596) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30603 = arguments.length;
switch (G__30603) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30605 = arguments.length;
switch (G__30605) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32358 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32358) : fn1.call(null,val_32358));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32358) : fn1.call(null,val_32358));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30612 = arguments.length;
switch (G__30612) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___32362 = n;
var x_32363 = (0);
while(true){
if((x_32363 < n__4695__auto___32362)){
(a[x_32363] = x_32363);

var G__32364 = (x_32363 + (1));
x_32363 = G__32364;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30647 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30647 = (function (flag,meta30648){
this.flag = flag;
this.meta30648 = meta30648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30649,meta30648__$1){
var self__ = this;
var _30649__$1 = this;
return (new cljs.core.async.t_cljs$core$async30647(self__.flag,meta30648__$1));
}));

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30649){
var self__ = this;
var _30649__$1 = this;
return self__.meta30648;
}));

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30648","meta30648",-1425907540,null)], null);
}));

(cljs.core.async.t_cljs$core$async30647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30647");

(cljs.core.async.t_cljs$core$async30647.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30647.
 */
cljs.core.async.__GT_t_cljs$core$async30647 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30647(flag__$1,meta30648){
return (new cljs.core.async.t_cljs$core$async30647(flag__$1,meta30648));
});

}

return (new cljs.core.async.t_cljs$core$async30647(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30650 = (function (flag,cb,meta30651){
this.flag = flag;
this.cb = cb;
this.meta30651 = meta30651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30652,meta30651__$1){
var self__ = this;
var _30652__$1 = this;
return (new cljs.core.async.t_cljs$core$async30650(self__.flag,self__.cb,meta30651__$1));
}));

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30652){
var self__ = this;
var _30652__$1 = this;
return self__.meta30651;
}));

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30651","meta30651",493600023,null)], null);
}));

(cljs.core.async.t_cljs$core$async30650.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30650");

(cljs.core.async.t_cljs$core$async30650.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async30650");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30650.
 */
cljs.core.async.__GT_t_cljs$core$async30650 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30650(flag__$1,cb__$1,meta30651){
return (new cljs.core.async.t_cljs$core$async30650(flag__$1,cb__$1,meta30651));
});

}

return (new cljs.core.async.t_cljs$core$async30650(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30658_SHARP_){
var G__30663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30658_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30663) : fret.call(null,G__30663));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30659_SHARP_){
var G__30666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30659_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30666) : fret.call(null,G__30666));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32403 = (i + (1));
i = G__32403;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32408 = arguments.length;
var i__4819__auto___32409 = (0);
while(true){
if((i__4819__auto___32409 < len__4818__auto___32408)){
args__4824__auto__.push((arguments[i__4819__auto___32409]));

var G__32411 = (i__4819__auto___32409 + (1));
i__4819__auto___32409 = G__32411;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30672){
var map__30673 = p__30672;
var map__30673__$1 = cljs.core.__destructure_map(map__30673);
var opts = map__30673__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30670){
var G__30671 = cljs.core.first(seq30670);
var seq30670__$1 = cljs.core.next(seq30670);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30671,seq30670__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30683 = arguments.length;
switch (G__30683) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30478__auto___32417 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_30707){
var state_val_30708 = (state_30707[(1)]);
if((state_val_30708 === (7))){
var inst_30703 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30709_32419 = state_30707__$1;
(statearr_30709_32419[(2)] = inst_30703);

(statearr_30709_32419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (1))){
var state_30707__$1 = state_30707;
var statearr_30714_32420 = state_30707__$1;
(statearr_30714_32420[(2)] = null);

(statearr_30714_32420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (4))){
var inst_30686 = (state_30707[(7)]);
var inst_30686__$1 = (state_30707[(2)]);
var inst_30687 = (inst_30686__$1 == null);
var state_30707__$1 = (function (){var statearr_30720 = state_30707;
(statearr_30720[(7)] = inst_30686__$1);

return statearr_30720;
})();
if(cljs.core.truth_(inst_30687)){
var statearr_30721_32421 = state_30707__$1;
(statearr_30721_32421[(1)] = (5));

} else {
var statearr_30722_32422 = state_30707__$1;
(statearr_30722_32422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (13))){
var state_30707__$1 = state_30707;
var statearr_30723_32423 = state_30707__$1;
(statearr_30723_32423[(2)] = null);

(statearr_30723_32423[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (6))){
var inst_30686 = (state_30707[(7)]);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30707__$1,(11),to,inst_30686);
} else {
if((state_val_30708 === (3))){
var inst_30705 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30707__$1,inst_30705);
} else {
if((state_val_30708 === (12))){
var state_30707__$1 = state_30707;
var statearr_30728_32424 = state_30707__$1;
(statearr_30728_32424[(2)] = null);

(statearr_30728_32424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (2))){
var state_30707__$1 = state_30707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30707__$1,(4),from);
} else {
if((state_val_30708 === (11))){
var inst_30696 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
if(cljs.core.truth_(inst_30696)){
var statearr_30729_32425 = state_30707__$1;
(statearr_30729_32425[(1)] = (12));

} else {
var statearr_30730_32426 = state_30707__$1;
(statearr_30730_32426[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (9))){
var state_30707__$1 = state_30707;
var statearr_30731_32427 = state_30707__$1;
(statearr_30731_32427[(2)] = null);

(statearr_30731_32427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (5))){
var state_30707__$1 = state_30707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30732_32428 = state_30707__$1;
(statearr_30732_32428[(1)] = (8));

} else {
var statearr_30733_32429 = state_30707__$1;
(statearr_30733_32429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (14))){
var inst_30701 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30734_32438 = state_30707__$1;
(statearr_30734_32438[(2)] = inst_30701);

(statearr_30734_32438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (10))){
var inst_30693 = (state_30707[(2)]);
var state_30707__$1 = state_30707;
var statearr_30735_32440 = state_30707__$1;
(statearr_30735_32440[(2)] = inst_30693);

(statearr_30735_32440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30708 === (8))){
var inst_30690 = cljs.core.async.close_BANG_(to);
var state_30707__$1 = state_30707;
var statearr_30736_32441 = state_30707__$1;
(statearr_30736_32441[(2)] = inst_30690);

(statearr_30736_32441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_30737 = [null,null,null,null,null,null,null,null];
(statearr_30737[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_30737[(1)] = (1));

return statearr_30737;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_30707){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_30707);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e30738){var ex__30250__auto__ = e30738;
var statearr_30739_32442 = state_30707;
(statearr_30739_32442[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_30707[(4)]))){
var statearr_30740_32443 = state_30707;
(statearr_30740_32443[(1)] = cljs.core.first((state_30707[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32444 = state_30707;
state_30707 = G__32444;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_30707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_30707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_30741 = f__30479__auto__();
(statearr_30741[(6)] = c__30478__auto___32417);

return statearr_30741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__30742){
var vec__30743 = p__30742;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30743,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30743,(1),null);
var job = vec__30743;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30478__auto___32445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_30750){
var state_val_30751 = (state_30750[(1)]);
if((state_val_30751 === (1))){
var state_30750__$1 = state_30750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30750__$1,(2),res,v);
} else {
if((state_val_30751 === (2))){
var inst_30747 = (state_30750[(2)]);
var inst_30748 = cljs.core.async.close_BANG_(res);
var state_30750__$1 = (function (){var statearr_30752 = state_30750;
(statearr_30752[(7)] = inst_30747);

return statearr_30752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30750__$1,inst_30748);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0 = (function (){
var statearr_30753 = [null,null,null,null,null,null,null,null];
(statearr_30753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__);

(statearr_30753[(1)] = (1));

return statearr_30753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1 = (function (state_30750){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_30750);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e30754){var ex__30250__auto__ = e30754;
var statearr_30755_32453 = state_30750;
(statearr_30755_32453[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_30750[(4)]))){
var statearr_30756_32458 = state_30750;
(statearr_30756_32458[(1)] = cljs.core.first((state_30750[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32460 = state_30750;
state_30750 = G__32460;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = function(state_30750){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1.call(this,state_30750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_30760 = f__30479__auto__();
(statearr_30760[(6)] = c__30478__auto___32445);

return statearr_30760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__30766){
var vec__30769 = p__30766;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30769,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30769,(1),null);
var job = vec__30769;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___32462 = n;
var __32463 = (0);
while(true){
if((__32463 < n__4695__auto___32462)){
var G__30772_32464 = type;
var G__30772_32465__$1 = (((G__30772_32464 instanceof cljs.core.Keyword))?G__30772_32464.fqn:null);
switch (G__30772_32465__$1) {
case "compute":
var c__30478__auto___32467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32463,c__30478__auto___32467,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async){
return (function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = ((function (__32463,c__30478__auto___32467,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async){
return (function (state_30785){
var state_val_30786 = (state_30785[(1)]);
if((state_val_30786 === (1))){
var state_30785__$1 = state_30785;
var statearr_30787_32468 = state_30785__$1;
(statearr_30787_32468[(2)] = null);

(statearr_30787_32468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (2))){
var state_30785__$1 = state_30785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30785__$1,(4),jobs);
} else {
if((state_val_30786 === (3))){
var inst_30783 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30785__$1,inst_30783);
} else {
if((state_val_30786 === (4))){
var inst_30775 = (state_30785[(2)]);
var inst_30776 = process(inst_30775);
var state_30785__$1 = state_30785;
if(cljs.core.truth_(inst_30776)){
var statearr_30788_32469 = state_30785__$1;
(statearr_30788_32469[(1)] = (5));

} else {
var statearr_30789_32470 = state_30785__$1;
(statearr_30789_32470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (5))){
var state_30785__$1 = state_30785;
var statearr_30790_32471 = state_30785__$1;
(statearr_30790_32471[(2)] = null);

(statearr_30790_32471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (6))){
var state_30785__$1 = state_30785;
var statearr_30791_32472 = state_30785__$1;
(statearr_30791_32472[(2)] = null);

(statearr_30791_32472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30786 === (7))){
var inst_30781 = (state_30785[(2)]);
var state_30785__$1 = state_30785;
var statearr_30792_32473 = state_30785__$1;
(statearr_30792_32473[(2)] = inst_30781);

(statearr_30792_32473[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32463,c__30478__auto___32467,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async))
;
return ((function (__32463,switch__30246__auto__,c__30478__auto___32467,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0 = (function (){
var statearr_30793 = [null,null,null,null,null,null,null];
(statearr_30793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__);

(statearr_30793[(1)] = (1));

return statearr_30793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1 = (function (state_30785){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_30785);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e30794){var ex__30250__auto__ = e30794;
var statearr_30795_32474 = state_30785;
(statearr_30795_32474[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_30785[(4)]))){
var statearr_30796_32475 = state_30785;
(statearr_30796_32475[(1)] = cljs.core.first((state_30785[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32476 = state_30785;
state_30785 = G__32476;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = function(state_30785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1.call(this,state_30785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__;
})()
;})(__32463,switch__30246__auto__,c__30478__auto___32467,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async))
})();
var state__30480__auto__ = (function (){var statearr_30797 = f__30479__auto__();
(statearr_30797[(6)] = c__30478__auto___32467);

return statearr_30797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
});})(__32463,c__30478__auto___32467,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async))
);


break;
case "async":
var c__30478__auto___32477 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32463,c__30478__auto___32477,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async){
return (function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = ((function (__32463,c__30478__auto___32477,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async){
return (function (state_30810){
var state_val_30811 = (state_30810[(1)]);
if((state_val_30811 === (1))){
var state_30810__$1 = state_30810;
var statearr_30812_32479 = state_30810__$1;
(statearr_30812_32479[(2)] = null);

(statearr_30812_32479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (2))){
var state_30810__$1 = state_30810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30810__$1,(4),jobs);
} else {
if((state_val_30811 === (3))){
var inst_30808 = (state_30810[(2)]);
var state_30810__$1 = state_30810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30810__$1,inst_30808);
} else {
if((state_val_30811 === (4))){
var inst_30800 = (state_30810[(2)]);
var inst_30801 = async(inst_30800);
var state_30810__$1 = state_30810;
if(cljs.core.truth_(inst_30801)){
var statearr_30813_32481 = state_30810__$1;
(statearr_30813_32481[(1)] = (5));

} else {
var statearr_30814_32482 = state_30810__$1;
(statearr_30814_32482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (5))){
var state_30810__$1 = state_30810;
var statearr_30815_32483 = state_30810__$1;
(statearr_30815_32483[(2)] = null);

(statearr_30815_32483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (6))){
var state_30810__$1 = state_30810;
var statearr_30816_32484 = state_30810__$1;
(statearr_30816_32484[(2)] = null);

(statearr_30816_32484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30811 === (7))){
var inst_30806 = (state_30810[(2)]);
var state_30810__$1 = state_30810;
var statearr_30817_32485 = state_30810__$1;
(statearr_30817_32485[(2)] = inst_30806);

(statearr_30817_32485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32463,c__30478__auto___32477,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async))
;
return ((function (__32463,switch__30246__auto__,c__30478__auto___32477,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0 = (function (){
var statearr_30818 = [null,null,null,null,null,null,null];
(statearr_30818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__);

(statearr_30818[(1)] = (1));

return statearr_30818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1 = (function (state_30810){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_30810);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e30819){var ex__30250__auto__ = e30819;
var statearr_30820_32486 = state_30810;
(statearr_30820_32486[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_30810[(4)]))){
var statearr_30821_32487 = state_30810;
(statearr_30821_32487[(1)] = cljs.core.first((state_30810[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32488 = state_30810;
state_30810 = G__32488;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = function(state_30810){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1.call(this,state_30810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__;
})()
;})(__32463,switch__30246__auto__,c__30478__auto___32477,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async))
})();
var state__30480__auto__ = (function (){var statearr_30822 = f__30479__auto__();
(statearr_30822[(6)] = c__30478__auto___32477);

return statearr_30822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
});})(__32463,c__30478__auto___32477,G__30772_32464,G__30772_32465__$1,n__4695__auto___32462,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30772_32465__$1)].join('')));

}

var G__32501 = (__32463 + (1));
__32463 = G__32501;
continue;
} else {
}
break;
}

var c__30478__auto___32502 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_30844){
var state_val_30845 = (state_30844[(1)]);
if((state_val_30845 === (7))){
var inst_30840 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
var statearr_30847_32506 = state_30844__$1;
(statearr_30847_32506[(2)] = inst_30840);

(statearr_30847_32506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (1))){
var state_30844__$1 = state_30844;
var statearr_30848_32510 = state_30844__$1;
(statearr_30848_32510[(2)] = null);

(statearr_30848_32510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (4))){
var inst_30825 = (state_30844[(7)]);
var inst_30825__$1 = (state_30844[(2)]);
var inst_30826 = (inst_30825__$1 == null);
var state_30844__$1 = (function (){var statearr_30849 = state_30844;
(statearr_30849[(7)] = inst_30825__$1);

return statearr_30849;
})();
if(cljs.core.truth_(inst_30826)){
var statearr_30850_32511 = state_30844__$1;
(statearr_30850_32511[(1)] = (5));

} else {
var statearr_30851_32512 = state_30844__$1;
(statearr_30851_32512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (6))){
var inst_30830 = (state_30844[(8)]);
var inst_30825 = (state_30844[(7)]);
var inst_30830__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30831 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30832 = [inst_30825,inst_30830__$1];
var inst_30833 = (new cljs.core.PersistentVector(null,2,(5),inst_30831,inst_30832,null));
var state_30844__$1 = (function (){var statearr_30852 = state_30844;
(statearr_30852[(8)] = inst_30830__$1);

return statearr_30852;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30844__$1,(8),jobs,inst_30833);
} else {
if((state_val_30845 === (3))){
var inst_30842 = (state_30844[(2)]);
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30844__$1,inst_30842);
} else {
if((state_val_30845 === (2))){
var state_30844__$1 = state_30844;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30844__$1,(4),from);
} else {
if((state_val_30845 === (9))){
var inst_30837 = (state_30844[(2)]);
var state_30844__$1 = (function (){var statearr_30853 = state_30844;
(statearr_30853[(9)] = inst_30837);

return statearr_30853;
})();
var statearr_30854_32516 = state_30844__$1;
(statearr_30854_32516[(2)] = null);

(statearr_30854_32516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (5))){
var inst_30828 = cljs.core.async.close_BANG_(jobs);
var state_30844__$1 = state_30844;
var statearr_30855_32521 = state_30844__$1;
(statearr_30855_32521[(2)] = inst_30828);

(statearr_30855_32521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30845 === (8))){
var inst_30830 = (state_30844[(8)]);
var inst_30835 = (state_30844[(2)]);
var state_30844__$1 = (function (){var statearr_30856 = state_30844;
(statearr_30856[(10)] = inst_30835);

return statearr_30856;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30844__$1,(9),results,inst_30830);
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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0 = (function (){
var statearr_30857 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__);

(statearr_30857[(1)] = (1));

return statearr_30857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1 = (function (state_30844){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_30844);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e30858){var ex__30250__auto__ = e30858;
var statearr_30859_32525 = state_30844;
(statearr_30859_32525[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_30844[(4)]))){
var statearr_30860_32526 = state_30844;
(statearr_30860_32526[(1)] = cljs.core.first((state_30844[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32530 = state_30844;
state_30844 = G__32530;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = function(state_30844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1.call(this,state_30844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_30861 = f__30479__auto__();
(statearr_30861[(6)] = c__30478__auto___32502);

return statearr_30861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


var c__30478__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_30899){
var state_val_30901 = (state_30899[(1)]);
if((state_val_30901 === (7))){
var inst_30895 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30903_32531 = state_30899__$1;
(statearr_30903_32531[(2)] = inst_30895);

(statearr_30903_32531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (20))){
var state_30899__$1 = state_30899;
var statearr_30904_32535 = state_30899__$1;
(statearr_30904_32535[(2)] = null);

(statearr_30904_32535[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (1))){
var state_30899__$1 = state_30899;
var statearr_30905_32536 = state_30899__$1;
(statearr_30905_32536[(2)] = null);

(statearr_30905_32536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (4))){
var inst_30864 = (state_30899[(7)]);
var inst_30864__$1 = (state_30899[(2)]);
var inst_30865 = (inst_30864__$1 == null);
var state_30899__$1 = (function (){var statearr_30906 = state_30899;
(statearr_30906[(7)] = inst_30864__$1);

return statearr_30906;
})();
if(cljs.core.truth_(inst_30865)){
var statearr_30907_32537 = state_30899__$1;
(statearr_30907_32537[(1)] = (5));

} else {
var statearr_30908_32538 = state_30899__$1;
(statearr_30908_32538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (15))){
var inst_30877 = (state_30899[(8)]);
var state_30899__$1 = state_30899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30899__$1,(18),to,inst_30877);
} else {
if((state_val_30901 === (21))){
var inst_30890 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30909_32542 = state_30899__$1;
(statearr_30909_32542[(2)] = inst_30890);

(statearr_30909_32542[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (13))){
var inst_30892 = (state_30899[(2)]);
var state_30899__$1 = (function (){var statearr_30910 = state_30899;
(statearr_30910[(9)] = inst_30892);

return statearr_30910;
})();
var statearr_30911_32543 = state_30899__$1;
(statearr_30911_32543[(2)] = null);

(statearr_30911_32543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (6))){
var inst_30864 = (state_30899[(7)]);
var state_30899__$1 = state_30899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30899__$1,(11),inst_30864);
} else {
if((state_val_30901 === (17))){
var inst_30885 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
if(cljs.core.truth_(inst_30885)){
var statearr_30912_32544 = state_30899__$1;
(statearr_30912_32544[(1)] = (19));

} else {
var statearr_30913_32545 = state_30899__$1;
(statearr_30913_32545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (3))){
var inst_30897 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30899__$1,inst_30897);
} else {
if((state_val_30901 === (12))){
var inst_30874 = (state_30899[(10)]);
var state_30899__$1 = state_30899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30899__$1,(14),inst_30874);
} else {
if((state_val_30901 === (2))){
var state_30899__$1 = state_30899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30899__$1,(4),results);
} else {
if((state_val_30901 === (19))){
var state_30899__$1 = state_30899;
var statearr_30922_32546 = state_30899__$1;
(statearr_30922_32546[(2)] = null);

(statearr_30922_32546[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (11))){
var inst_30874 = (state_30899[(2)]);
var state_30899__$1 = (function (){var statearr_30929 = state_30899;
(statearr_30929[(10)] = inst_30874);

return statearr_30929;
})();
var statearr_30930_32548 = state_30899__$1;
(statearr_30930_32548[(2)] = null);

(statearr_30930_32548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (9))){
var state_30899__$1 = state_30899;
var statearr_30933_32549 = state_30899__$1;
(statearr_30933_32549[(2)] = null);

(statearr_30933_32549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (5))){
var state_30899__$1 = state_30899;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30937_32550 = state_30899__$1;
(statearr_30937_32550[(1)] = (8));

} else {
var statearr_30938_32551 = state_30899__$1;
(statearr_30938_32551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (14))){
var inst_30879 = (state_30899[(11)]);
var inst_30877 = (state_30899[(8)]);
var inst_30877__$1 = (state_30899[(2)]);
var inst_30878 = (inst_30877__$1 == null);
var inst_30879__$1 = cljs.core.not(inst_30878);
var state_30899__$1 = (function (){var statearr_30939 = state_30899;
(statearr_30939[(11)] = inst_30879__$1);

(statearr_30939[(8)] = inst_30877__$1);

return statearr_30939;
})();
if(inst_30879__$1){
var statearr_30944_32552 = state_30899__$1;
(statearr_30944_32552[(1)] = (15));

} else {
var statearr_30945_32553 = state_30899__$1;
(statearr_30945_32553[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (16))){
var inst_30879 = (state_30899[(11)]);
var state_30899__$1 = state_30899;
var statearr_30952_32554 = state_30899__$1;
(statearr_30952_32554[(2)] = inst_30879);

(statearr_30952_32554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (10))){
var inst_30871 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30953_32555 = state_30899__$1;
(statearr_30953_32555[(2)] = inst_30871);

(statearr_30953_32555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (18))){
var inst_30882 = (state_30899[(2)]);
var state_30899__$1 = state_30899;
var statearr_30956_32556 = state_30899__$1;
(statearr_30956_32556[(2)] = inst_30882);

(statearr_30956_32556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30901 === (8))){
var inst_30868 = cljs.core.async.close_BANG_(to);
var state_30899__$1 = state_30899;
var statearr_30960_32557 = state_30899__$1;
(statearr_30960_32557[(2)] = inst_30868);

(statearr_30960_32557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0 = (function (){
var statearr_30961 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__);

(statearr_30961[(1)] = (1));

return statearr_30961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1 = (function (state_30899){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_30899);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e30966){var ex__30250__auto__ = e30966;
var statearr_30967_32558 = state_30899;
(statearr_30967_32558[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_30899[(4)]))){
var statearr_30968_32559 = state_30899;
(statearr_30968_32559[(1)] = cljs.core.first((state_30899[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32560 = state_30899;
state_30899 = G__32560;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__ = function(state_30899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1.call(this,state_30899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30247__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_30969 = f__30479__auto__();
(statearr_30969[(6)] = c__30478__auto__);

return statearr_30969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));

return c__30478__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__30974 = arguments.length;
switch (G__30974) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__30984 = arguments.length;
switch (G__30984) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31007 = arguments.length;
switch (G__31007) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30478__auto___32569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31043){
var state_val_31044 = (state_31043[(1)]);
if((state_val_31044 === (7))){
var inst_31039 = (state_31043[(2)]);
var state_31043__$1 = state_31043;
var statearr_31052_32571 = state_31043__$1;
(statearr_31052_32571[(2)] = inst_31039);

(statearr_31052_32571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (1))){
var state_31043__$1 = state_31043;
var statearr_31054_32572 = state_31043__$1;
(statearr_31054_32572[(2)] = null);

(statearr_31054_32572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (4))){
var inst_31020 = (state_31043[(7)]);
var inst_31020__$1 = (state_31043[(2)]);
var inst_31021 = (inst_31020__$1 == null);
var state_31043__$1 = (function (){var statearr_31058 = state_31043;
(statearr_31058[(7)] = inst_31020__$1);

return statearr_31058;
})();
if(cljs.core.truth_(inst_31021)){
var statearr_31061_32573 = state_31043__$1;
(statearr_31061_32573[(1)] = (5));

} else {
var statearr_31063_32575 = state_31043__$1;
(statearr_31063_32575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (13))){
var state_31043__$1 = state_31043;
var statearr_31067_32576 = state_31043__$1;
(statearr_31067_32576[(2)] = null);

(statearr_31067_32576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (6))){
var inst_31020 = (state_31043[(7)]);
var inst_31026 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31020) : p.call(null,inst_31020));
var state_31043__$1 = state_31043;
if(cljs.core.truth_(inst_31026)){
var statearr_31071_32578 = state_31043__$1;
(statearr_31071_32578[(1)] = (9));

} else {
var statearr_31072_32579 = state_31043__$1;
(statearr_31072_32579[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (3))){
var inst_31041 = (state_31043[(2)]);
var state_31043__$1 = state_31043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31043__$1,inst_31041);
} else {
if((state_val_31044 === (12))){
var state_31043__$1 = state_31043;
var statearr_31078_32580 = state_31043__$1;
(statearr_31078_32580[(2)] = null);

(statearr_31078_32580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (2))){
var state_31043__$1 = state_31043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31043__$1,(4),ch);
} else {
if((state_val_31044 === (11))){
var inst_31020 = (state_31043[(7)]);
var inst_31030 = (state_31043[(2)]);
var state_31043__$1 = state_31043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31043__$1,(8),inst_31030,inst_31020);
} else {
if((state_val_31044 === (9))){
var state_31043__$1 = state_31043;
var statearr_31086_32581 = state_31043__$1;
(statearr_31086_32581[(2)] = tc);

(statearr_31086_32581[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (5))){
var inst_31023 = cljs.core.async.close_BANG_(tc);
var inst_31024 = cljs.core.async.close_BANG_(fc);
var state_31043__$1 = (function (){var statearr_31087 = state_31043;
(statearr_31087[(8)] = inst_31023);

return statearr_31087;
})();
var statearr_31088_32582 = state_31043__$1;
(statearr_31088_32582[(2)] = inst_31024);

(statearr_31088_32582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (14))){
var inst_31037 = (state_31043[(2)]);
var state_31043__$1 = state_31043;
var statearr_31093_32583 = state_31043__$1;
(statearr_31093_32583[(2)] = inst_31037);

(statearr_31093_32583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (10))){
var state_31043__$1 = state_31043;
var statearr_31095_32611 = state_31043__$1;
(statearr_31095_32611[(2)] = fc);

(statearr_31095_32611[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31044 === (8))){
var inst_31032 = (state_31043[(2)]);
var state_31043__$1 = state_31043;
if(cljs.core.truth_(inst_31032)){
var statearr_31099_32612 = state_31043__$1;
(statearr_31099_32612[(1)] = (12));

} else {
var statearr_31102_32613 = state_31043__$1;
(statearr_31102_32613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_31106 = [null,null,null,null,null,null,null,null,null];
(statearr_31106[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_31106[(1)] = (1));

return statearr_31106;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_31043){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31043);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31111){var ex__30250__auto__ = e31111;
var statearr_31112_32614 = state_31043;
(statearr_31112_32614[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31043[(4)]))){
var statearr_31115_32615 = state_31043;
(statearr_31115_32615[(1)] = cljs.core.first((state_31043[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32616 = state_31043;
state_31043 = G__32616;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_31043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_31043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31120 = f__30479__auto__();
(statearr_31120[(6)] = c__30478__auto___32569);

return statearr_31120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30478__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31156){
var state_val_31157 = (state_31156[(1)]);
if((state_val_31157 === (7))){
var inst_31150 = (state_31156[(2)]);
var state_31156__$1 = state_31156;
var statearr_31169_32617 = state_31156__$1;
(statearr_31169_32617[(2)] = inst_31150);

(statearr_31169_32617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (1))){
var inst_31130 = init;
var inst_31131 = inst_31130;
var state_31156__$1 = (function (){var statearr_31170 = state_31156;
(statearr_31170[(7)] = inst_31131);

return statearr_31170;
})();
var statearr_31171_32618 = state_31156__$1;
(statearr_31171_32618[(2)] = null);

(statearr_31171_32618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (4))){
var inst_31135 = (state_31156[(8)]);
var inst_31135__$1 = (state_31156[(2)]);
var inst_31137 = (inst_31135__$1 == null);
var state_31156__$1 = (function (){var statearr_31174 = state_31156;
(statearr_31174[(8)] = inst_31135__$1);

return statearr_31174;
})();
if(cljs.core.truth_(inst_31137)){
var statearr_31179_32625 = state_31156__$1;
(statearr_31179_32625[(1)] = (5));

} else {
var statearr_31180_32626 = state_31156__$1;
(statearr_31180_32626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (6))){
var inst_31135 = (state_31156[(8)]);
var inst_31131 = (state_31156[(7)]);
var inst_31141 = (state_31156[(9)]);
var inst_31141__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31131,inst_31135) : f.call(null,inst_31131,inst_31135));
var inst_31142 = cljs.core.reduced_QMARK_(inst_31141__$1);
var state_31156__$1 = (function (){var statearr_31186 = state_31156;
(statearr_31186[(9)] = inst_31141__$1);

return statearr_31186;
})();
if(inst_31142){
var statearr_31187_32627 = state_31156__$1;
(statearr_31187_32627[(1)] = (8));

} else {
var statearr_31192_32628 = state_31156__$1;
(statearr_31192_32628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (3))){
var inst_31153 = (state_31156[(2)]);
var state_31156__$1 = state_31156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31156__$1,inst_31153);
} else {
if((state_val_31157 === (2))){
var state_31156__$1 = state_31156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31156__$1,(4),ch);
} else {
if((state_val_31157 === (9))){
var inst_31141 = (state_31156[(9)]);
var inst_31131 = inst_31141;
var state_31156__$1 = (function (){var statearr_31195 = state_31156;
(statearr_31195[(7)] = inst_31131);

return statearr_31195;
})();
var statearr_31196_32629 = state_31156__$1;
(statearr_31196_32629[(2)] = null);

(statearr_31196_32629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (5))){
var inst_31131 = (state_31156[(7)]);
var state_31156__$1 = state_31156;
var statearr_31197_32630 = state_31156__$1;
(statearr_31197_32630[(2)] = inst_31131);

(statearr_31197_32630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (10))){
var inst_31148 = (state_31156[(2)]);
var state_31156__$1 = state_31156;
var statearr_31201_32631 = state_31156__$1;
(statearr_31201_32631[(2)] = inst_31148);

(statearr_31201_32631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31157 === (8))){
var inst_31141 = (state_31156[(9)]);
var inst_31144 = cljs.core.deref(inst_31141);
var state_31156__$1 = state_31156;
var statearr_31206_32632 = state_31156__$1;
(statearr_31206_32632[(2)] = inst_31144);

(statearr_31206_32632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30247__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30247__auto____0 = (function (){
var statearr_31211 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31211[(0)] = cljs$core$async$reduce_$_state_machine__30247__auto__);

(statearr_31211[(1)] = (1));

return statearr_31211;
});
var cljs$core$async$reduce_$_state_machine__30247__auto____1 = (function (state_31156){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31156);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31212){var ex__30250__auto__ = e31212;
var statearr_31213_32633 = state_31156;
(statearr_31213_32633[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31156[(4)]))){
var statearr_31214_32634 = state_31156;
(statearr_31214_32634[(1)] = cljs.core.first((state_31156[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32635 = state_31156;
state_31156 = G__32635;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30247__auto__ = function(state_31156){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30247__auto____1.call(this,state_31156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30247__auto____0;
cljs$core$async$reduce_$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30247__auto____1;
return cljs$core$async$reduce_$_state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31216 = f__30479__auto__();
(statearr_31216[(6)] = c__30478__auto__);

return statearr_31216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));

return c__30478__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30478__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31222){
var state_val_31223 = (state_31222[(1)]);
if((state_val_31223 === (1))){
var inst_31217 = cljs.core.async.reduce(f__$1,init,ch);
var state_31222__$1 = state_31222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31222__$1,(2),inst_31217);
} else {
if((state_val_31223 === (2))){
var inst_31219 = (state_31222[(2)]);
var inst_31220 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31219) : f__$1.call(null,inst_31219));
var state_31222__$1 = state_31222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31222__$1,inst_31220);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30247__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30247__auto____0 = (function (){
var statearr_31224 = [null,null,null,null,null,null,null];
(statearr_31224[(0)] = cljs$core$async$transduce_$_state_machine__30247__auto__);

(statearr_31224[(1)] = (1));

return statearr_31224;
});
var cljs$core$async$transduce_$_state_machine__30247__auto____1 = (function (state_31222){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31222);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31225){var ex__30250__auto__ = e31225;
var statearr_31226_32642 = state_31222;
(statearr_31226_32642[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31222[(4)]))){
var statearr_31228_32643 = state_31222;
(statearr_31228_32643[(1)] = cljs.core.first((state_31222[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32644 = state_31222;
state_31222 = G__32644;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30247__auto__ = function(state_31222){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30247__auto____1.call(this,state_31222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30247__auto____0;
cljs$core$async$transduce_$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30247__auto____1;
return cljs$core$async$transduce_$_state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31229 = f__30479__auto__();
(statearr_31229[(6)] = c__30478__auto__);

return statearr_31229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));

return c__30478__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31232 = arguments.length;
switch (G__31232) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30478__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31269){
var state_val_31270 = (state_31269[(1)]);
if((state_val_31270 === (7))){
var inst_31251 = (state_31269[(2)]);
var state_31269__$1 = state_31269;
var statearr_31271_32646 = state_31269__$1;
(statearr_31271_32646[(2)] = inst_31251);

(statearr_31271_32646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (1))){
var inst_31245 = cljs.core.seq(coll);
var inst_31246 = inst_31245;
var state_31269__$1 = (function (){var statearr_31272 = state_31269;
(statearr_31272[(7)] = inst_31246);

return statearr_31272;
})();
var statearr_31273_32647 = state_31269__$1;
(statearr_31273_32647[(2)] = null);

(statearr_31273_32647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (4))){
var inst_31246 = (state_31269[(7)]);
var inst_31249 = cljs.core.first(inst_31246);
var state_31269__$1 = state_31269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31269__$1,(7),ch,inst_31249);
} else {
if((state_val_31270 === (13))){
var inst_31263 = (state_31269[(2)]);
var state_31269__$1 = state_31269;
var statearr_31274_32648 = state_31269__$1;
(statearr_31274_32648[(2)] = inst_31263);

(statearr_31274_32648[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (6))){
var inst_31254 = (state_31269[(2)]);
var state_31269__$1 = state_31269;
if(cljs.core.truth_(inst_31254)){
var statearr_31275_32649 = state_31269__$1;
(statearr_31275_32649[(1)] = (8));

} else {
var statearr_31276_32650 = state_31269__$1;
(statearr_31276_32650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (3))){
var inst_31267 = (state_31269[(2)]);
var state_31269__$1 = state_31269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31269__$1,inst_31267);
} else {
if((state_val_31270 === (12))){
var state_31269__$1 = state_31269;
var statearr_31277_32651 = state_31269__$1;
(statearr_31277_32651[(2)] = null);

(statearr_31277_32651[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (2))){
var inst_31246 = (state_31269[(7)]);
var state_31269__$1 = state_31269;
if(cljs.core.truth_(inst_31246)){
var statearr_31278_32652 = state_31269__$1;
(statearr_31278_32652[(1)] = (4));

} else {
var statearr_31279_32653 = state_31269__$1;
(statearr_31279_32653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (11))){
var inst_31260 = cljs.core.async.close_BANG_(ch);
var state_31269__$1 = state_31269;
var statearr_31280_32654 = state_31269__$1;
(statearr_31280_32654[(2)] = inst_31260);

(statearr_31280_32654[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (9))){
var state_31269__$1 = state_31269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31281_32655 = state_31269__$1;
(statearr_31281_32655[(1)] = (11));

} else {
var statearr_31282_32656 = state_31269__$1;
(statearr_31282_32656[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (5))){
var inst_31246 = (state_31269[(7)]);
var state_31269__$1 = state_31269;
var statearr_31283_32657 = state_31269__$1;
(statearr_31283_32657[(2)] = inst_31246);

(statearr_31283_32657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (10))){
var inst_31265 = (state_31269[(2)]);
var state_31269__$1 = state_31269;
var statearr_31284_32658 = state_31269__$1;
(statearr_31284_32658[(2)] = inst_31265);

(statearr_31284_32658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31270 === (8))){
var inst_31246 = (state_31269[(7)]);
var inst_31256 = cljs.core.next(inst_31246);
var inst_31246__$1 = inst_31256;
var state_31269__$1 = (function (){var statearr_31285 = state_31269;
(statearr_31285[(7)] = inst_31246__$1);

return statearr_31285;
})();
var statearr_31286_32659 = state_31269__$1;
(statearr_31286_32659[(2)] = null);

(statearr_31286_32659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_31287 = [null,null,null,null,null,null,null,null];
(statearr_31287[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_31287[(1)] = (1));

return statearr_31287;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_31269){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31269);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31288){var ex__30250__auto__ = e31288;
var statearr_31289_32660 = state_31269;
(statearr_31289_32660[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31269[(4)]))){
var statearr_31290_32661 = state_31269;
(statearr_31290_32661[(1)] = cljs.core.first((state_31269[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32662 = state_31269;
state_31269 = G__32662;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_31269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_31269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31291 = f__30479__auto__();
(statearr_31291[(6)] = c__30478__auto__);

return statearr_31291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));

return c__30478__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31293 = arguments.length;
switch (G__31293) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_32665 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_32665(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_32670 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_32670(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_32671 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_32671(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_32672 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_32672(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31294 = (function (ch,cs,meta31295){
this.ch = ch;
this.cs = cs;
this.meta31295 = meta31295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31296,meta31295__$1){
var self__ = this;
var _31296__$1 = this;
return (new cljs.core.async.t_cljs$core$async31294(self__.ch,self__.cs,meta31295__$1));
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31296){
var self__ = this;
var _31296__$1 = this;
return self__.meta31295;
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31294.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31295","meta31295",1986873495,null)], null);
}));

(cljs.core.async.t_cljs$core$async31294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31294");

(cljs.core.async.t_cljs$core$async31294.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31294.
 */
cljs.core.async.__GT_t_cljs$core$async31294 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31294(ch__$1,cs__$1,meta31295){
return (new cljs.core.async.t_cljs$core$async31294(ch__$1,cs__$1,meta31295));
});

}

return (new cljs.core.async.t_cljs$core$async31294(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30478__auto___32675 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31429){
var state_val_31430 = (state_31429[(1)]);
if((state_val_31430 === (7))){
var inst_31425 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31431_32678 = state_31429__$1;
(statearr_31431_32678[(2)] = inst_31425);

(statearr_31431_32678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (20))){
var inst_31330 = (state_31429[(7)]);
var inst_31342 = cljs.core.first(inst_31330);
var inst_31343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31342,(0),null);
var inst_31344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31342,(1),null);
var state_31429__$1 = (function (){var statearr_31432 = state_31429;
(statearr_31432[(8)] = inst_31343);

return statearr_31432;
})();
if(cljs.core.truth_(inst_31344)){
var statearr_31433_32679 = state_31429__$1;
(statearr_31433_32679[(1)] = (22));

} else {
var statearr_31434_32680 = state_31429__$1;
(statearr_31434_32680[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (27))){
var inst_31372 = (state_31429[(9)]);
var inst_31299 = (state_31429[(10)]);
var inst_31379 = (state_31429[(11)]);
var inst_31374 = (state_31429[(12)]);
var inst_31379__$1 = cljs.core._nth(inst_31372,inst_31374);
var inst_31380 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31379__$1,inst_31299,done);
var state_31429__$1 = (function (){var statearr_31435 = state_31429;
(statearr_31435[(11)] = inst_31379__$1);

return statearr_31435;
})();
if(cljs.core.truth_(inst_31380)){
var statearr_31436_32681 = state_31429__$1;
(statearr_31436_32681[(1)] = (30));

} else {
var statearr_31437_32682 = state_31429__$1;
(statearr_31437_32682[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (1))){
var state_31429__$1 = state_31429;
var statearr_31438_32683 = state_31429__$1;
(statearr_31438_32683[(2)] = null);

(statearr_31438_32683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (24))){
var inst_31330 = (state_31429[(7)]);
var inst_31349 = (state_31429[(2)]);
var inst_31350 = cljs.core.next(inst_31330);
var inst_31308 = inst_31350;
var inst_31309 = null;
var inst_31310 = (0);
var inst_31311 = (0);
var state_31429__$1 = (function (){var statearr_31439 = state_31429;
(statearr_31439[(13)] = inst_31308);

(statearr_31439[(14)] = inst_31309);

(statearr_31439[(15)] = inst_31310);

(statearr_31439[(16)] = inst_31349);

(statearr_31439[(17)] = inst_31311);

return statearr_31439;
})();
var statearr_31440_32684 = state_31429__$1;
(statearr_31440_32684[(2)] = null);

(statearr_31440_32684[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (39))){
var state_31429__$1 = state_31429;
var statearr_31444_32685 = state_31429__$1;
(statearr_31444_32685[(2)] = null);

(statearr_31444_32685[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (4))){
var inst_31299 = (state_31429[(10)]);
var inst_31299__$1 = (state_31429[(2)]);
var inst_31300 = (inst_31299__$1 == null);
var state_31429__$1 = (function (){var statearr_31445 = state_31429;
(statearr_31445[(10)] = inst_31299__$1);

return statearr_31445;
})();
if(cljs.core.truth_(inst_31300)){
var statearr_31446_32688 = state_31429__$1;
(statearr_31446_32688[(1)] = (5));

} else {
var statearr_31447_32689 = state_31429__$1;
(statearr_31447_32689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (15))){
var inst_31308 = (state_31429[(13)]);
var inst_31309 = (state_31429[(14)]);
var inst_31310 = (state_31429[(15)]);
var inst_31311 = (state_31429[(17)]);
var inst_31326 = (state_31429[(2)]);
var inst_31327 = (inst_31311 + (1));
var tmp31441 = inst_31308;
var tmp31442 = inst_31309;
var tmp31443 = inst_31310;
var inst_31308__$1 = tmp31441;
var inst_31309__$1 = tmp31442;
var inst_31310__$1 = tmp31443;
var inst_31311__$1 = inst_31327;
var state_31429__$1 = (function (){var statearr_31448 = state_31429;
(statearr_31448[(13)] = inst_31308__$1);

(statearr_31448[(14)] = inst_31309__$1);

(statearr_31448[(18)] = inst_31326);

(statearr_31448[(15)] = inst_31310__$1);

(statearr_31448[(17)] = inst_31311__$1);

return statearr_31448;
})();
var statearr_31449_32690 = state_31429__$1;
(statearr_31449_32690[(2)] = null);

(statearr_31449_32690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (21))){
var inst_31353 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31453_32691 = state_31429__$1;
(statearr_31453_32691[(2)] = inst_31353);

(statearr_31453_32691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (31))){
var inst_31379 = (state_31429[(11)]);
var inst_31383 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31379);
var state_31429__$1 = state_31429;
var statearr_31454_32692 = state_31429__$1;
(statearr_31454_32692[(2)] = inst_31383);

(statearr_31454_32692[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (32))){
var inst_31373 = (state_31429[(19)]);
var inst_31371 = (state_31429[(20)]);
var inst_31372 = (state_31429[(9)]);
var inst_31374 = (state_31429[(12)]);
var inst_31385 = (state_31429[(2)]);
var inst_31386 = (inst_31374 + (1));
var tmp31450 = inst_31373;
var tmp31451 = inst_31371;
var tmp31452 = inst_31372;
var inst_31371__$1 = tmp31451;
var inst_31372__$1 = tmp31452;
var inst_31373__$1 = tmp31450;
var inst_31374__$1 = inst_31386;
var state_31429__$1 = (function (){var statearr_31455 = state_31429;
(statearr_31455[(19)] = inst_31373__$1);

(statearr_31455[(20)] = inst_31371__$1);

(statearr_31455[(9)] = inst_31372__$1);

(statearr_31455[(21)] = inst_31385);

(statearr_31455[(12)] = inst_31374__$1);

return statearr_31455;
})();
var statearr_31456_32693 = state_31429__$1;
(statearr_31456_32693[(2)] = null);

(statearr_31456_32693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (40))){
var inst_31398 = (state_31429[(22)]);
var inst_31402 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31398);
var state_31429__$1 = state_31429;
var statearr_31457_32695 = state_31429__$1;
(statearr_31457_32695[(2)] = inst_31402);

(statearr_31457_32695[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (33))){
var inst_31389 = (state_31429[(23)]);
var inst_31391 = cljs.core.chunked_seq_QMARK_(inst_31389);
var state_31429__$1 = state_31429;
if(inst_31391){
var statearr_31458_32696 = state_31429__$1;
(statearr_31458_32696[(1)] = (36));

} else {
var statearr_31459_32697 = state_31429__$1;
(statearr_31459_32697[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (13))){
var inst_31320 = (state_31429[(24)]);
var inst_31323 = cljs.core.async.close_BANG_(inst_31320);
var state_31429__$1 = state_31429;
var statearr_31460_32698 = state_31429__$1;
(statearr_31460_32698[(2)] = inst_31323);

(statearr_31460_32698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (22))){
var inst_31343 = (state_31429[(8)]);
var inst_31346 = cljs.core.async.close_BANG_(inst_31343);
var state_31429__$1 = state_31429;
var statearr_31461_32703 = state_31429__$1;
(statearr_31461_32703[(2)] = inst_31346);

(statearr_31461_32703[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (36))){
var inst_31389 = (state_31429[(23)]);
var inst_31393 = cljs.core.chunk_first(inst_31389);
var inst_31394 = cljs.core.chunk_rest(inst_31389);
var inst_31395 = cljs.core.count(inst_31393);
var inst_31371 = inst_31394;
var inst_31372 = inst_31393;
var inst_31373 = inst_31395;
var inst_31374 = (0);
var state_31429__$1 = (function (){var statearr_31462 = state_31429;
(statearr_31462[(19)] = inst_31373);

(statearr_31462[(20)] = inst_31371);

(statearr_31462[(9)] = inst_31372);

(statearr_31462[(12)] = inst_31374);

return statearr_31462;
})();
var statearr_31463_32704 = state_31429__$1;
(statearr_31463_32704[(2)] = null);

(statearr_31463_32704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (41))){
var inst_31389 = (state_31429[(23)]);
var inst_31404 = (state_31429[(2)]);
var inst_31405 = cljs.core.next(inst_31389);
var inst_31371 = inst_31405;
var inst_31372 = null;
var inst_31373 = (0);
var inst_31374 = (0);
var state_31429__$1 = (function (){var statearr_31464 = state_31429;
(statearr_31464[(19)] = inst_31373);

(statearr_31464[(20)] = inst_31371);

(statearr_31464[(9)] = inst_31372);

(statearr_31464[(25)] = inst_31404);

(statearr_31464[(12)] = inst_31374);

return statearr_31464;
})();
var statearr_31465_32705 = state_31429__$1;
(statearr_31465_32705[(2)] = null);

(statearr_31465_32705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (43))){
var state_31429__$1 = state_31429;
var statearr_31466_32706 = state_31429__$1;
(statearr_31466_32706[(2)] = null);

(statearr_31466_32706[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (29))){
var inst_31413 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31467_32707 = state_31429__$1;
(statearr_31467_32707[(2)] = inst_31413);

(statearr_31467_32707[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (44))){
var inst_31422 = (state_31429[(2)]);
var state_31429__$1 = (function (){var statearr_31468 = state_31429;
(statearr_31468[(26)] = inst_31422);

return statearr_31468;
})();
var statearr_31469_32708 = state_31429__$1;
(statearr_31469_32708[(2)] = null);

(statearr_31469_32708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (6))){
var inst_31363 = (state_31429[(27)]);
var inst_31362 = cljs.core.deref(cs);
var inst_31363__$1 = cljs.core.keys(inst_31362);
var inst_31364 = cljs.core.count(inst_31363__$1);
var inst_31365 = cljs.core.reset_BANG_(dctr,inst_31364);
var inst_31370 = cljs.core.seq(inst_31363__$1);
var inst_31371 = inst_31370;
var inst_31372 = null;
var inst_31373 = (0);
var inst_31374 = (0);
var state_31429__$1 = (function (){var statearr_31470 = state_31429;
(statearr_31470[(19)] = inst_31373);

(statearr_31470[(20)] = inst_31371);

(statearr_31470[(28)] = inst_31365);

(statearr_31470[(9)] = inst_31372);

(statearr_31470[(12)] = inst_31374);

(statearr_31470[(27)] = inst_31363__$1);

return statearr_31470;
})();
var statearr_31471_32709 = state_31429__$1;
(statearr_31471_32709[(2)] = null);

(statearr_31471_32709[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (28))){
var inst_31371 = (state_31429[(20)]);
var inst_31389 = (state_31429[(23)]);
var inst_31389__$1 = cljs.core.seq(inst_31371);
var state_31429__$1 = (function (){var statearr_31472 = state_31429;
(statearr_31472[(23)] = inst_31389__$1);

return statearr_31472;
})();
if(inst_31389__$1){
var statearr_31473_32710 = state_31429__$1;
(statearr_31473_32710[(1)] = (33));

} else {
var statearr_31474_32711 = state_31429__$1;
(statearr_31474_32711[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (25))){
var inst_31373 = (state_31429[(19)]);
var inst_31374 = (state_31429[(12)]);
var inst_31376 = (inst_31374 < inst_31373);
var inst_31377 = inst_31376;
var state_31429__$1 = state_31429;
if(cljs.core.truth_(inst_31377)){
var statearr_31475_32712 = state_31429__$1;
(statearr_31475_32712[(1)] = (27));

} else {
var statearr_31476_32713 = state_31429__$1;
(statearr_31476_32713[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (34))){
var state_31429__$1 = state_31429;
var statearr_31477_32718 = state_31429__$1;
(statearr_31477_32718[(2)] = null);

(statearr_31477_32718[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (17))){
var state_31429__$1 = state_31429;
var statearr_31478_32719 = state_31429__$1;
(statearr_31478_32719[(2)] = null);

(statearr_31478_32719[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (3))){
var inst_31427 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31429__$1,inst_31427);
} else {
if((state_val_31430 === (12))){
var inst_31358 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31479_32723 = state_31429__$1;
(statearr_31479_32723[(2)] = inst_31358);

(statearr_31479_32723[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (2))){
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31429__$1,(4),ch);
} else {
if((state_val_31430 === (23))){
var state_31429__$1 = state_31429;
var statearr_31480_32724 = state_31429__$1;
(statearr_31480_32724[(2)] = null);

(statearr_31480_32724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (35))){
var inst_31411 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31481_32725 = state_31429__$1;
(statearr_31481_32725[(2)] = inst_31411);

(statearr_31481_32725[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (19))){
var inst_31330 = (state_31429[(7)]);
var inst_31334 = cljs.core.chunk_first(inst_31330);
var inst_31335 = cljs.core.chunk_rest(inst_31330);
var inst_31336 = cljs.core.count(inst_31334);
var inst_31308 = inst_31335;
var inst_31309 = inst_31334;
var inst_31310 = inst_31336;
var inst_31311 = (0);
var state_31429__$1 = (function (){var statearr_31482 = state_31429;
(statearr_31482[(13)] = inst_31308);

(statearr_31482[(14)] = inst_31309);

(statearr_31482[(15)] = inst_31310);

(statearr_31482[(17)] = inst_31311);

return statearr_31482;
})();
var statearr_31483_32729 = state_31429__$1;
(statearr_31483_32729[(2)] = null);

(statearr_31483_32729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (11))){
var inst_31308 = (state_31429[(13)]);
var inst_31330 = (state_31429[(7)]);
var inst_31330__$1 = cljs.core.seq(inst_31308);
var state_31429__$1 = (function (){var statearr_31484 = state_31429;
(statearr_31484[(7)] = inst_31330__$1);

return statearr_31484;
})();
if(inst_31330__$1){
var statearr_31485_32733 = state_31429__$1;
(statearr_31485_32733[(1)] = (16));

} else {
var statearr_31486_32734 = state_31429__$1;
(statearr_31486_32734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (9))){
var inst_31360 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31487_32735 = state_31429__$1;
(statearr_31487_32735[(2)] = inst_31360);

(statearr_31487_32735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (5))){
var inst_31306 = cljs.core.deref(cs);
var inst_31307 = cljs.core.seq(inst_31306);
var inst_31308 = inst_31307;
var inst_31309 = null;
var inst_31310 = (0);
var inst_31311 = (0);
var state_31429__$1 = (function (){var statearr_31488 = state_31429;
(statearr_31488[(13)] = inst_31308);

(statearr_31488[(14)] = inst_31309);

(statearr_31488[(15)] = inst_31310);

(statearr_31488[(17)] = inst_31311);

return statearr_31488;
})();
var statearr_31489_32736 = state_31429__$1;
(statearr_31489_32736[(2)] = null);

(statearr_31489_32736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (14))){
var state_31429__$1 = state_31429;
var statearr_31490_32740 = state_31429__$1;
(statearr_31490_32740[(2)] = null);

(statearr_31490_32740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (45))){
var inst_31419 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31491_32741 = state_31429__$1;
(statearr_31491_32741[(2)] = inst_31419);

(statearr_31491_32741[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (26))){
var inst_31363 = (state_31429[(27)]);
var inst_31415 = (state_31429[(2)]);
var inst_31416 = cljs.core.seq(inst_31363);
var state_31429__$1 = (function (){var statearr_31492 = state_31429;
(statearr_31492[(29)] = inst_31415);

return statearr_31492;
})();
if(inst_31416){
var statearr_31493_32743 = state_31429__$1;
(statearr_31493_32743[(1)] = (42));

} else {
var statearr_31494_32744 = state_31429__$1;
(statearr_31494_32744[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (16))){
var inst_31330 = (state_31429[(7)]);
var inst_31332 = cljs.core.chunked_seq_QMARK_(inst_31330);
var state_31429__$1 = state_31429;
if(inst_31332){
var statearr_31495_32748 = state_31429__$1;
(statearr_31495_32748[(1)] = (19));

} else {
var statearr_31496_32749 = state_31429__$1;
(statearr_31496_32749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (38))){
var inst_31408 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31497_32750 = state_31429__$1;
(statearr_31497_32750[(2)] = inst_31408);

(statearr_31497_32750[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (30))){
var state_31429__$1 = state_31429;
var statearr_31498_32751 = state_31429__$1;
(statearr_31498_32751[(2)] = null);

(statearr_31498_32751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (10))){
var inst_31309 = (state_31429[(14)]);
var inst_31311 = (state_31429[(17)]);
var inst_31319 = cljs.core._nth(inst_31309,inst_31311);
var inst_31320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31319,(0),null);
var inst_31321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31319,(1),null);
var state_31429__$1 = (function (){var statearr_31499 = state_31429;
(statearr_31499[(24)] = inst_31320);

return statearr_31499;
})();
if(cljs.core.truth_(inst_31321)){
var statearr_31500_32752 = state_31429__$1;
(statearr_31500_32752[(1)] = (13));

} else {
var statearr_31501_32753 = state_31429__$1;
(statearr_31501_32753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (18))){
var inst_31356 = (state_31429[(2)]);
var state_31429__$1 = state_31429;
var statearr_31502_32754 = state_31429__$1;
(statearr_31502_32754[(2)] = inst_31356);

(statearr_31502_32754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (42))){
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31429__$1,(45),dchan);
} else {
if((state_val_31430 === (37))){
var inst_31398 = (state_31429[(22)]);
var inst_31299 = (state_31429[(10)]);
var inst_31389 = (state_31429[(23)]);
var inst_31398__$1 = cljs.core.first(inst_31389);
var inst_31399 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31398__$1,inst_31299,done);
var state_31429__$1 = (function (){var statearr_31503 = state_31429;
(statearr_31503[(22)] = inst_31398__$1);

return statearr_31503;
})();
if(cljs.core.truth_(inst_31399)){
var statearr_31504_32755 = state_31429__$1;
(statearr_31504_32755[(1)] = (39));

} else {
var statearr_31505_32756 = state_31429__$1;
(statearr_31505_32756[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31430 === (8))){
var inst_31310 = (state_31429[(15)]);
var inst_31311 = (state_31429[(17)]);
var inst_31313 = (inst_31311 < inst_31310);
var inst_31314 = inst_31313;
var state_31429__$1 = state_31429;
if(cljs.core.truth_(inst_31314)){
var statearr_31506_32757 = state_31429__$1;
(statearr_31506_32757[(1)] = (10));

} else {
var statearr_31507_32758 = state_31429__$1;
(statearr_31507_32758[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30247__auto__ = null;
var cljs$core$async$mult_$_state_machine__30247__auto____0 = (function (){
var statearr_31508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31508[(0)] = cljs$core$async$mult_$_state_machine__30247__auto__);

(statearr_31508[(1)] = (1));

return statearr_31508;
});
var cljs$core$async$mult_$_state_machine__30247__auto____1 = (function (state_31429){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31429);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31509){var ex__30250__auto__ = e31509;
var statearr_31510_32761 = state_31429;
(statearr_31510_32761[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31429[(4)]))){
var statearr_31511_32762 = state_31429;
(statearr_31511_32762[(1)] = cljs.core.first((state_31429[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32763 = state_31429;
state_31429 = G__32763;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30247__auto__ = function(state_31429){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30247__auto____1.call(this,state_31429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30247__auto____0;
cljs$core$async$mult_$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30247__auto____1;
return cljs$core$async$mult_$_state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31512 = f__30479__auto__();
(statearr_31512[(6)] = c__30478__auto___32675);

return statearr_31512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31514 = arguments.length;
switch (G__31514) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_32765 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_32765(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_32766 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_32766(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_32767 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_32767(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_32768 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_32768(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_32769 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_32769(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___32770 = arguments.length;
var i__4819__auto___32771 = (0);
while(true){
if((i__4819__auto___32771 < len__4818__auto___32770)){
args__4824__auto__.push((arguments[i__4819__auto___32771]));

var G__32772 = (i__4819__auto___32771 + (1));
i__4819__auto___32771 = G__32772;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31519){
var map__31520 = p__31519;
var map__31520__$1 = cljs.core.__destructure_map(map__31520);
var opts = map__31520__$1;
var statearr_31521_32777 = state;
(statearr_31521_32777[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_31522_32778 = state;
(statearr_31522_32778[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_31523_32779 = state;
(statearr_31523_32779[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31515){
var G__31516 = cljs.core.first(seq31515);
var seq31515__$1 = cljs.core.next(seq31515);
var G__31517 = cljs.core.first(seq31515__$1);
var seq31515__$2 = cljs.core.next(seq31515__$1);
var G__31518 = cljs.core.first(seq31515__$2);
var seq31515__$3 = cljs.core.next(seq31515__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31516,G__31517,G__31518,seq31515__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31524 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31525){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31525 = meta31525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31526,meta31525__$1){
var self__ = this;
var _31526__$1 = this;
return (new cljs.core.async.t_cljs$core$async31524(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31525__$1));
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31526){
var self__ = this;
var _31526__$1 = this;
return self__.meta31525;
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31524.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async31524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31525","meta31525",2098903993,null)], null);
}));

(cljs.core.async.t_cljs$core$async31524.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31524");

(cljs.core.async.t_cljs$core$async31524.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31524");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31524.
 */
cljs.core.async.__GT_t_cljs$core$async31524 = (function cljs$core$async$mix_$___GT_t_cljs$core$async31524(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31525){
return (new cljs.core.async.t_cljs$core$async31524(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31525));
});

}

return (new cljs.core.async.t_cljs$core$async31524(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30478__auto___32786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31594){
var state_val_31595 = (state_31594[(1)]);
if((state_val_31595 === (7))){
var inst_31554 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
if(cljs.core.truth_(inst_31554)){
var statearr_31596_32791 = state_31594__$1;
(statearr_31596_32791[(1)] = (8));

} else {
var statearr_31597_32792 = state_31594__$1;
(statearr_31597_32792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (20))){
var inst_31547 = (state_31594[(7)]);
var state_31594__$1 = state_31594;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31594__$1,(23),out,inst_31547);
} else {
if((state_val_31595 === (1))){
var inst_31530 = calc_state();
var inst_31531 = cljs.core.__destructure_map(inst_31530);
var inst_31532 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31531,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31531,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31531,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31535 = inst_31530;
var state_31594__$1 = (function (){var statearr_31598 = state_31594;
(statearr_31598[(8)] = inst_31533);

(statearr_31598[(9)] = inst_31535);

(statearr_31598[(10)] = inst_31532);

(statearr_31598[(11)] = inst_31534);

return statearr_31598;
})();
var statearr_31599_32793 = state_31594__$1;
(statearr_31599_32793[(2)] = null);

(statearr_31599_32793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (24))){
var inst_31538 = (state_31594[(12)]);
var inst_31535 = inst_31538;
var state_31594__$1 = (function (){var statearr_31600 = state_31594;
(statearr_31600[(9)] = inst_31535);

return statearr_31600;
})();
var statearr_31601_32794 = state_31594__$1;
(statearr_31601_32794[(2)] = null);

(statearr_31601_32794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (4))){
var inst_31549 = (state_31594[(13)]);
var inst_31547 = (state_31594[(7)]);
var inst_31546 = (state_31594[(2)]);
var inst_31547__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31546,(0),null);
var inst_31548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31546,(1),null);
var inst_31549__$1 = (inst_31547__$1 == null);
var state_31594__$1 = (function (){var statearr_31602 = state_31594;
(statearr_31602[(13)] = inst_31549__$1);

(statearr_31602[(7)] = inst_31547__$1);

(statearr_31602[(14)] = inst_31548);

return statearr_31602;
})();
if(cljs.core.truth_(inst_31549__$1)){
var statearr_31603_32795 = state_31594__$1;
(statearr_31603_32795[(1)] = (5));

} else {
var statearr_31604_32796 = state_31594__$1;
(statearr_31604_32796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (15))){
var inst_31568 = (state_31594[(15)]);
var inst_31539 = (state_31594[(16)]);
var inst_31568__$1 = cljs.core.empty_QMARK_(inst_31539);
var state_31594__$1 = (function (){var statearr_31605 = state_31594;
(statearr_31605[(15)] = inst_31568__$1);

return statearr_31605;
})();
if(inst_31568__$1){
var statearr_31606_32797 = state_31594__$1;
(statearr_31606_32797[(1)] = (17));

} else {
var statearr_31607_32798 = state_31594__$1;
(statearr_31607_32798[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (21))){
var inst_31538 = (state_31594[(12)]);
var inst_31535 = inst_31538;
var state_31594__$1 = (function (){var statearr_31608 = state_31594;
(statearr_31608[(9)] = inst_31535);

return statearr_31608;
})();
var statearr_31609_32799 = state_31594__$1;
(statearr_31609_32799[(2)] = null);

(statearr_31609_32799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (13))){
var inst_31561 = (state_31594[(2)]);
var inst_31562 = calc_state();
var inst_31535 = inst_31562;
var state_31594__$1 = (function (){var statearr_31610 = state_31594;
(statearr_31610[(17)] = inst_31561);

(statearr_31610[(9)] = inst_31535);

return statearr_31610;
})();
var statearr_31611_32800 = state_31594__$1;
(statearr_31611_32800[(2)] = null);

(statearr_31611_32800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (22))){
var inst_31588 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
var statearr_31612_32801 = state_31594__$1;
(statearr_31612_32801[(2)] = inst_31588);

(statearr_31612_32801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (6))){
var inst_31548 = (state_31594[(14)]);
var inst_31552 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31548,change);
var state_31594__$1 = state_31594;
var statearr_31613_32802 = state_31594__$1;
(statearr_31613_32802[(2)] = inst_31552);

(statearr_31613_32802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (25))){
var state_31594__$1 = state_31594;
var statearr_31614_32803 = state_31594__$1;
(statearr_31614_32803[(2)] = null);

(statearr_31614_32803[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (17))){
var inst_31540 = (state_31594[(18)]);
var inst_31548 = (state_31594[(14)]);
var inst_31570 = (inst_31540.cljs$core$IFn$_invoke$arity$1 ? inst_31540.cljs$core$IFn$_invoke$arity$1(inst_31548) : inst_31540.call(null,inst_31548));
var inst_31571 = cljs.core.not(inst_31570);
var state_31594__$1 = state_31594;
var statearr_31615_32804 = state_31594__$1;
(statearr_31615_32804[(2)] = inst_31571);

(statearr_31615_32804[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (3))){
var inst_31592 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31594__$1,inst_31592);
} else {
if((state_val_31595 === (12))){
var state_31594__$1 = state_31594;
var statearr_31616_32805 = state_31594__$1;
(statearr_31616_32805[(2)] = null);

(statearr_31616_32805[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (2))){
var inst_31535 = (state_31594[(9)]);
var inst_31538 = (state_31594[(12)]);
var inst_31538__$1 = cljs.core.__destructure_map(inst_31535);
var inst_31539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31538__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31538__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31541 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31538__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31594__$1 = (function (){var statearr_31617 = state_31594;
(statearr_31617[(18)] = inst_31540);

(statearr_31617[(16)] = inst_31539);

(statearr_31617[(12)] = inst_31538__$1);

return statearr_31617;
})();
return cljs.core.async.ioc_alts_BANG_(state_31594__$1,(4),inst_31541);
} else {
if((state_val_31595 === (23))){
var inst_31579 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
if(cljs.core.truth_(inst_31579)){
var statearr_31618_32806 = state_31594__$1;
(statearr_31618_32806[(1)] = (24));

} else {
var statearr_31619_32807 = state_31594__$1;
(statearr_31619_32807[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (19))){
var inst_31574 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
var statearr_31620_32808 = state_31594__$1;
(statearr_31620_32808[(2)] = inst_31574);

(statearr_31620_32808[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (11))){
var inst_31548 = (state_31594[(14)]);
var inst_31558 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31548);
var state_31594__$1 = state_31594;
var statearr_31621_32809 = state_31594__$1;
(statearr_31621_32809[(2)] = inst_31558);

(statearr_31621_32809[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (9))){
var inst_31565 = (state_31594[(19)]);
var inst_31548 = (state_31594[(14)]);
var inst_31539 = (state_31594[(16)]);
var inst_31565__$1 = (inst_31539.cljs$core$IFn$_invoke$arity$1 ? inst_31539.cljs$core$IFn$_invoke$arity$1(inst_31548) : inst_31539.call(null,inst_31548));
var state_31594__$1 = (function (){var statearr_31622 = state_31594;
(statearr_31622[(19)] = inst_31565__$1);

return statearr_31622;
})();
if(cljs.core.truth_(inst_31565__$1)){
var statearr_31623_32810 = state_31594__$1;
(statearr_31623_32810[(1)] = (14));

} else {
var statearr_31624_32811 = state_31594__$1;
(statearr_31624_32811[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (5))){
var inst_31549 = (state_31594[(13)]);
var state_31594__$1 = state_31594;
var statearr_31625_32812 = state_31594__$1;
(statearr_31625_32812[(2)] = inst_31549);

(statearr_31625_32812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (14))){
var inst_31565 = (state_31594[(19)]);
var state_31594__$1 = state_31594;
var statearr_31626_32814 = state_31594__$1;
(statearr_31626_32814[(2)] = inst_31565);

(statearr_31626_32814[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (26))){
var inst_31584 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
var statearr_31627_32815 = state_31594__$1;
(statearr_31627_32815[(2)] = inst_31584);

(statearr_31627_32815[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (16))){
var inst_31576 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
if(cljs.core.truth_(inst_31576)){
var statearr_31628_32816 = state_31594__$1;
(statearr_31628_32816[(1)] = (20));

} else {
var statearr_31629_32817 = state_31594__$1;
(statearr_31629_32817[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (10))){
var inst_31590 = (state_31594[(2)]);
var state_31594__$1 = state_31594;
var statearr_31630_32818 = state_31594__$1;
(statearr_31630_32818[(2)] = inst_31590);

(statearr_31630_32818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (18))){
var inst_31568 = (state_31594[(15)]);
var state_31594__$1 = state_31594;
var statearr_31631_32822 = state_31594__$1;
(statearr_31631_32822[(2)] = inst_31568);

(statearr_31631_32822[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31595 === (8))){
var inst_31547 = (state_31594[(7)]);
var inst_31556 = (inst_31547 == null);
var state_31594__$1 = state_31594;
if(cljs.core.truth_(inst_31556)){
var statearr_31632_32823 = state_31594__$1;
(statearr_31632_32823[(1)] = (11));

} else {
var statearr_31633_32824 = state_31594__$1;
(statearr_31633_32824[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$mix_$_state_machine__30247__auto__ = null;
var cljs$core$async$mix_$_state_machine__30247__auto____0 = (function (){
var statearr_31634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31634[(0)] = cljs$core$async$mix_$_state_machine__30247__auto__);

(statearr_31634[(1)] = (1));

return statearr_31634;
});
var cljs$core$async$mix_$_state_machine__30247__auto____1 = (function (state_31594){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31594);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31635){var ex__30250__auto__ = e31635;
var statearr_31636_32825 = state_31594;
(statearr_31636_32825[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31594[(4)]))){
var statearr_31637_32826 = state_31594;
(statearr_31637_32826[(1)] = cljs.core.first((state_31594[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32827 = state_31594;
state_31594 = G__32827;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30247__auto__ = function(state_31594){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30247__auto____1.call(this,state_31594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30247__auto____0;
cljs$core$async$mix_$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30247__auto____1;
return cljs$core$async$mix_$_state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31638 = f__30479__auto__();
(statearr_31638[(6)] = c__30478__auto___32786);

return statearr_31638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_32828 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_32828(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_32829 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_32829(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_32831 = (function() {
var G__32832 = null;
var G__32832__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__32832__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__32832 = function(p,v){
switch(arguments.length){
case 1:
return G__32832__1.call(this,p);
case 2:
return G__32832__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32832.cljs$core$IFn$_invoke$arity$1 = G__32832__1;
G__32832.cljs$core$IFn$_invoke$arity$2 = G__32832__2;
return G__32832;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31640 = arguments.length;
switch (G__31640) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32831(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_32831(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__31643 = arguments.length;
switch (G__31643) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__31641_SHARP_){
if(cljs.core.truth_((p1__31641_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31641_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31641_SHARP_.call(null,topic)))){
return p1__31641_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31641_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31644 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31644 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31645){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31645 = meta31645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31646,meta31645__$1){
var self__ = this;
var _31646__$1 = this;
return (new cljs.core.async.t_cljs$core$async31644(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31645__$1));
}));

(cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31646){
var self__ = this;
var _31646__$1 = this;
return self__.meta31645;
}));

(cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async31644.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async31644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31645","meta31645",1279660761,null)], null);
}));

(cljs.core.async.t_cljs$core$async31644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31644");

(cljs.core.async.t_cljs$core$async31644.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31644.
 */
cljs.core.async.__GT_t_cljs$core$async31644 = (function cljs$core$async$__GT_t_cljs$core$async31644(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31645){
return (new cljs.core.async.t_cljs$core$async31644(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31645));
});

}

return (new cljs.core.async.t_cljs$core$async31644(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30478__auto___32841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31718){
var state_val_31719 = (state_31718[(1)]);
if((state_val_31719 === (7))){
var inst_31714 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31720_32842 = state_31718__$1;
(statearr_31720_32842[(2)] = inst_31714);

(statearr_31720_32842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (20))){
var state_31718__$1 = state_31718;
var statearr_31721_32843 = state_31718__$1;
(statearr_31721_32843[(2)] = null);

(statearr_31721_32843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (1))){
var state_31718__$1 = state_31718;
var statearr_31722_32844 = state_31718__$1;
(statearr_31722_32844[(2)] = null);

(statearr_31722_32844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (24))){
var inst_31697 = (state_31718[(7)]);
var inst_31706 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31697);
var state_31718__$1 = state_31718;
var statearr_31723_32845 = state_31718__$1;
(statearr_31723_32845[(2)] = inst_31706);

(statearr_31723_32845[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (4))){
var inst_31649 = (state_31718[(8)]);
var inst_31649__$1 = (state_31718[(2)]);
var inst_31650 = (inst_31649__$1 == null);
var state_31718__$1 = (function (){var statearr_31724 = state_31718;
(statearr_31724[(8)] = inst_31649__$1);

return statearr_31724;
})();
if(cljs.core.truth_(inst_31650)){
var statearr_31725_32850 = state_31718__$1;
(statearr_31725_32850[(1)] = (5));

} else {
var statearr_31726_32851 = state_31718__$1;
(statearr_31726_32851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (15))){
var inst_31691 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31727_32852 = state_31718__$1;
(statearr_31727_32852[(2)] = inst_31691);

(statearr_31727_32852[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (21))){
var inst_31711 = (state_31718[(2)]);
var state_31718__$1 = (function (){var statearr_31728 = state_31718;
(statearr_31728[(9)] = inst_31711);

return statearr_31728;
})();
var statearr_31729_32853 = state_31718__$1;
(statearr_31729_32853[(2)] = null);

(statearr_31729_32853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (13))){
var inst_31673 = (state_31718[(10)]);
var inst_31675 = cljs.core.chunked_seq_QMARK_(inst_31673);
var state_31718__$1 = state_31718;
if(inst_31675){
var statearr_31730_32854 = state_31718__$1;
(statearr_31730_32854[(1)] = (16));

} else {
var statearr_31731_32855 = state_31718__$1;
(statearr_31731_32855[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (22))){
var inst_31703 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31703)){
var statearr_31732_32856 = state_31718__$1;
(statearr_31732_32856[(1)] = (23));

} else {
var statearr_31733_32857 = state_31718__$1;
(statearr_31733_32857[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (6))){
var inst_31699 = (state_31718[(11)]);
var inst_31649 = (state_31718[(8)]);
var inst_31697 = (state_31718[(7)]);
var inst_31697__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31649) : topic_fn.call(null,inst_31649));
var inst_31698 = cljs.core.deref(mults);
var inst_31699__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31698,inst_31697__$1);
var state_31718__$1 = (function (){var statearr_31734 = state_31718;
(statearr_31734[(11)] = inst_31699__$1);

(statearr_31734[(7)] = inst_31697__$1);

return statearr_31734;
})();
if(cljs.core.truth_(inst_31699__$1)){
var statearr_31735_32858 = state_31718__$1;
(statearr_31735_32858[(1)] = (19));

} else {
var statearr_31736_32859 = state_31718__$1;
(statearr_31736_32859[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (25))){
var inst_31708 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31737_32860 = state_31718__$1;
(statearr_31737_32860[(2)] = inst_31708);

(statearr_31737_32860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (17))){
var inst_31673 = (state_31718[(10)]);
var inst_31682 = cljs.core.first(inst_31673);
var inst_31683 = cljs.core.async.muxch_STAR_(inst_31682);
var inst_31684 = cljs.core.async.close_BANG_(inst_31683);
var inst_31685 = cljs.core.next(inst_31673);
var inst_31659 = inst_31685;
var inst_31660 = null;
var inst_31661 = (0);
var inst_31662 = (0);
var state_31718__$1 = (function (){var statearr_31738 = state_31718;
(statearr_31738[(12)] = inst_31659);

(statearr_31738[(13)] = inst_31661);

(statearr_31738[(14)] = inst_31662);

(statearr_31738[(15)] = inst_31660);

(statearr_31738[(16)] = inst_31684);

return statearr_31738;
})();
var statearr_31739_32861 = state_31718__$1;
(statearr_31739_32861[(2)] = null);

(statearr_31739_32861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (3))){
var inst_31716 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31718__$1,inst_31716);
} else {
if((state_val_31719 === (12))){
var inst_31693 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31740_32862 = state_31718__$1;
(statearr_31740_32862[(2)] = inst_31693);

(statearr_31740_32862[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (2))){
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31718__$1,(4),ch);
} else {
if((state_val_31719 === (23))){
var state_31718__$1 = state_31718;
var statearr_31741_32863 = state_31718__$1;
(statearr_31741_32863[(2)] = null);

(statearr_31741_32863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (19))){
var inst_31699 = (state_31718[(11)]);
var inst_31649 = (state_31718[(8)]);
var inst_31701 = cljs.core.async.muxch_STAR_(inst_31699);
var state_31718__$1 = state_31718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31718__$1,(22),inst_31701,inst_31649);
} else {
if((state_val_31719 === (11))){
var inst_31659 = (state_31718[(12)]);
var inst_31673 = (state_31718[(10)]);
var inst_31673__$1 = cljs.core.seq(inst_31659);
var state_31718__$1 = (function (){var statearr_31742 = state_31718;
(statearr_31742[(10)] = inst_31673__$1);

return statearr_31742;
})();
if(inst_31673__$1){
var statearr_31743_32864 = state_31718__$1;
(statearr_31743_32864[(1)] = (13));

} else {
var statearr_31744_32865 = state_31718__$1;
(statearr_31744_32865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (9))){
var inst_31695 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31745_32866 = state_31718__$1;
(statearr_31745_32866[(2)] = inst_31695);

(statearr_31745_32866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (5))){
var inst_31656 = cljs.core.deref(mults);
var inst_31657 = cljs.core.vals(inst_31656);
var inst_31658 = cljs.core.seq(inst_31657);
var inst_31659 = inst_31658;
var inst_31660 = null;
var inst_31661 = (0);
var inst_31662 = (0);
var state_31718__$1 = (function (){var statearr_31746 = state_31718;
(statearr_31746[(12)] = inst_31659);

(statearr_31746[(13)] = inst_31661);

(statearr_31746[(14)] = inst_31662);

(statearr_31746[(15)] = inst_31660);

return statearr_31746;
})();
var statearr_31747_32867 = state_31718__$1;
(statearr_31747_32867[(2)] = null);

(statearr_31747_32867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (14))){
var state_31718__$1 = state_31718;
var statearr_31751_32868 = state_31718__$1;
(statearr_31751_32868[(2)] = null);

(statearr_31751_32868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (16))){
var inst_31673 = (state_31718[(10)]);
var inst_31677 = cljs.core.chunk_first(inst_31673);
var inst_31678 = cljs.core.chunk_rest(inst_31673);
var inst_31679 = cljs.core.count(inst_31677);
var inst_31659 = inst_31678;
var inst_31660 = inst_31677;
var inst_31661 = inst_31679;
var inst_31662 = (0);
var state_31718__$1 = (function (){var statearr_31752 = state_31718;
(statearr_31752[(12)] = inst_31659);

(statearr_31752[(13)] = inst_31661);

(statearr_31752[(14)] = inst_31662);

(statearr_31752[(15)] = inst_31660);

return statearr_31752;
})();
var statearr_31753_32869 = state_31718__$1;
(statearr_31753_32869[(2)] = null);

(statearr_31753_32869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (10))){
var inst_31659 = (state_31718[(12)]);
var inst_31661 = (state_31718[(13)]);
var inst_31662 = (state_31718[(14)]);
var inst_31660 = (state_31718[(15)]);
var inst_31667 = cljs.core._nth(inst_31660,inst_31662);
var inst_31668 = cljs.core.async.muxch_STAR_(inst_31667);
var inst_31669 = cljs.core.async.close_BANG_(inst_31668);
var inst_31670 = (inst_31662 + (1));
var tmp31748 = inst_31659;
var tmp31749 = inst_31661;
var tmp31750 = inst_31660;
var inst_31659__$1 = tmp31748;
var inst_31660__$1 = tmp31750;
var inst_31661__$1 = tmp31749;
var inst_31662__$1 = inst_31670;
var state_31718__$1 = (function (){var statearr_31754 = state_31718;
(statearr_31754[(17)] = inst_31669);

(statearr_31754[(12)] = inst_31659__$1);

(statearr_31754[(13)] = inst_31661__$1);

(statearr_31754[(14)] = inst_31662__$1);

(statearr_31754[(15)] = inst_31660__$1);

return statearr_31754;
})();
var statearr_31755_32870 = state_31718__$1;
(statearr_31755_32870[(2)] = null);

(statearr_31755_32870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (18))){
var inst_31688 = (state_31718[(2)]);
var state_31718__$1 = state_31718;
var statearr_31756_32872 = state_31718__$1;
(statearr_31756_32872[(2)] = inst_31688);

(statearr_31756_32872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31719 === (8))){
var inst_31661 = (state_31718[(13)]);
var inst_31662 = (state_31718[(14)]);
var inst_31664 = (inst_31662 < inst_31661);
var inst_31665 = inst_31664;
var state_31718__$1 = state_31718;
if(cljs.core.truth_(inst_31665)){
var statearr_31757_32873 = state_31718__$1;
(statearr_31757_32873[(1)] = (10));

} else {
var statearr_31758_32874 = state_31718__$1;
(statearr_31758_32874[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_31759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31759[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_31759[(1)] = (1));

return statearr_31759;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_31718){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31718);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31760){var ex__30250__auto__ = e31760;
var statearr_31761_32878 = state_31718;
(statearr_31761_32878[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31718[(4)]))){
var statearr_31762_32879 = state_31718;
(statearr_31762_32879[(1)] = cljs.core.first((state_31718[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32880 = state_31718;
state_31718 = G__32880;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_31718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_31718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31763 = f__30479__auto__();
(statearr_31763[(6)] = c__30478__auto___32841);

return statearr_31763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31765 = arguments.length;
switch (G__31765) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31767 = arguments.length;
switch (G__31767) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31769 = arguments.length;
switch (G__31769) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30478__auto___32884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31812){
var state_val_31813 = (state_31812[(1)]);
if((state_val_31813 === (7))){
var state_31812__$1 = state_31812;
var statearr_31814_32885 = state_31812__$1;
(statearr_31814_32885[(2)] = null);

(statearr_31814_32885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (1))){
var state_31812__$1 = state_31812;
var statearr_31815_32887 = state_31812__$1;
(statearr_31815_32887[(2)] = null);

(statearr_31815_32887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (4))){
var inst_31773 = (state_31812[(7)]);
var inst_31772 = (state_31812[(8)]);
var inst_31775 = (inst_31773 < inst_31772);
var state_31812__$1 = state_31812;
if(cljs.core.truth_(inst_31775)){
var statearr_31816_32888 = state_31812__$1;
(statearr_31816_32888[(1)] = (6));

} else {
var statearr_31817_32889 = state_31812__$1;
(statearr_31817_32889[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (15))){
var inst_31798 = (state_31812[(9)]);
var inst_31803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31798);
var state_31812__$1 = state_31812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31812__$1,(17),out,inst_31803);
} else {
if((state_val_31813 === (13))){
var inst_31798 = (state_31812[(9)]);
var inst_31798__$1 = (state_31812[(2)]);
var inst_31799 = cljs.core.some(cljs.core.nil_QMARK_,inst_31798__$1);
var state_31812__$1 = (function (){var statearr_31818 = state_31812;
(statearr_31818[(9)] = inst_31798__$1);

return statearr_31818;
})();
if(cljs.core.truth_(inst_31799)){
var statearr_31819_32890 = state_31812__$1;
(statearr_31819_32890[(1)] = (14));

} else {
var statearr_31820_32891 = state_31812__$1;
(statearr_31820_32891[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (6))){
var state_31812__$1 = state_31812;
var statearr_31821_32892 = state_31812__$1;
(statearr_31821_32892[(2)] = null);

(statearr_31821_32892[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (17))){
var inst_31805 = (state_31812[(2)]);
var state_31812__$1 = (function (){var statearr_31823 = state_31812;
(statearr_31823[(10)] = inst_31805);

return statearr_31823;
})();
var statearr_31824_32893 = state_31812__$1;
(statearr_31824_32893[(2)] = null);

(statearr_31824_32893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (3))){
var inst_31810 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31812__$1,inst_31810);
} else {
if((state_val_31813 === (12))){
var _ = (function (){var statearr_31825 = state_31812;
(statearr_31825[(4)] = cljs.core.rest((state_31812[(4)])));

return statearr_31825;
})();
var state_31812__$1 = state_31812;
var ex31822 = (state_31812__$1[(2)]);
var statearr_31826_32894 = state_31812__$1;
(statearr_31826_32894[(5)] = ex31822);


if((ex31822 instanceof Object)){
var statearr_31827_32895 = state_31812__$1;
(statearr_31827_32895[(1)] = (11));

(statearr_31827_32895[(5)] = null);

} else {
throw ex31822;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (2))){
var inst_31771 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31772 = cnt;
var inst_31773 = (0);
var state_31812__$1 = (function (){var statearr_31828 = state_31812;
(statearr_31828[(7)] = inst_31773);

(statearr_31828[(11)] = inst_31771);

(statearr_31828[(8)] = inst_31772);

return statearr_31828;
})();
var statearr_31829_32896 = state_31812__$1;
(statearr_31829_32896[(2)] = null);

(statearr_31829_32896[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (11))){
var inst_31777 = (state_31812[(2)]);
var inst_31778 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31812__$1 = (function (){var statearr_31830 = state_31812;
(statearr_31830[(12)] = inst_31777);

return statearr_31830;
})();
var statearr_31831_32897 = state_31812__$1;
(statearr_31831_32897[(2)] = inst_31778);

(statearr_31831_32897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (9))){
var inst_31773 = (state_31812[(7)]);
var _ = (function (){var statearr_31832 = state_31812;
(statearr_31832[(4)] = cljs.core.cons((12),(state_31812[(4)])));

return statearr_31832;
})();
var inst_31784 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31773) : chs__$1.call(null,inst_31773));
var inst_31785 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31773) : done.call(null,inst_31773));
var inst_31786 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31784,inst_31785);
var ___$1 = (function (){var statearr_31833 = state_31812;
(statearr_31833[(4)] = cljs.core.rest((state_31812[(4)])));

return statearr_31833;
})();
var state_31812__$1 = state_31812;
var statearr_31834_32898 = state_31812__$1;
(statearr_31834_32898[(2)] = inst_31786);

(statearr_31834_32898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (5))){
var inst_31796 = (state_31812[(2)]);
var state_31812__$1 = (function (){var statearr_31835 = state_31812;
(statearr_31835[(13)] = inst_31796);

return statearr_31835;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31812__$1,(13),dchan);
} else {
if((state_val_31813 === (14))){
var inst_31801 = cljs.core.async.close_BANG_(out);
var state_31812__$1 = state_31812;
var statearr_31836_32899 = state_31812__$1;
(statearr_31836_32899[(2)] = inst_31801);

(statearr_31836_32899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (16))){
var inst_31808 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
var statearr_31837_32900 = state_31812__$1;
(statearr_31837_32900[(2)] = inst_31808);

(statearr_31837_32900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (10))){
var inst_31773 = (state_31812[(7)]);
var inst_31789 = (state_31812[(2)]);
var inst_31790 = (inst_31773 + (1));
var inst_31773__$1 = inst_31790;
var state_31812__$1 = (function (){var statearr_31838 = state_31812;
(statearr_31838[(14)] = inst_31789);

(statearr_31838[(7)] = inst_31773__$1);

return statearr_31838;
})();
var statearr_31839_32901 = state_31812__$1;
(statearr_31839_32901[(2)] = null);

(statearr_31839_32901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31813 === (8))){
var inst_31794 = (state_31812[(2)]);
var state_31812__$1 = state_31812;
var statearr_31840_32902 = state_31812__$1;
(statearr_31840_32902[(2)] = inst_31794);

(statearr_31840_32902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_31841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31841[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_31841[(1)] = (1));

return statearr_31841;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_31812){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31812);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31842){var ex__30250__auto__ = e31842;
var statearr_31843_32903 = state_31812;
(statearr_31843_32903[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31812[(4)]))){
var statearr_31844_32904 = state_31812;
(statearr_31844_32904[(1)] = cljs.core.first((state_31812[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32906 = state_31812;
state_31812 = G__32906;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_31812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_31812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31845 = f__30479__auto__();
(statearr_31845[(6)] = c__30478__auto___32884);

return statearr_31845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31848 = arguments.length;
switch (G__31848) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30478__auto___32911 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31880){
var state_val_31881 = (state_31880[(1)]);
if((state_val_31881 === (7))){
var inst_31859 = (state_31880[(7)]);
var inst_31860 = (state_31880[(8)]);
var inst_31859__$1 = (state_31880[(2)]);
var inst_31860__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31859__$1,(0),null);
var inst_31861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31859__$1,(1),null);
var inst_31862 = (inst_31860__$1 == null);
var state_31880__$1 = (function (){var statearr_31882 = state_31880;
(statearr_31882[(7)] = inst_31859__$1);

(statearr_31882[(8)] = inst_31860__$1);

(statearr_31882[(9)] = inst_31861);

return statearr_31882;
})();
if(cljs.core.truth_(inst_31862)){
var statearr_31883_32916 = state_31880__$1;
(statearr_31883_32916[(1)] = (8));

} else {
var statearr_31884_32917 = state_31880__$1;
(statearr_31884_32917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (1))){
var inst_31849 = cljs.core.vec(chs);
var inst_31850 = inst_31849;
var state_31880__$1 = (function (){var statearr_31885 = state_31880;
(statearr_31885[(10)] = inst_31850);

return statearr_31885;
})();
var statearr_31886_32918 = state_31880__$1;
(statearr_31886_32918[(2)] = null);

(statearr_31886_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (4))){
var inst_31850 = (state_31880[(10)]);
var state_31880__$1 = state_31880;
return cljs.core.async.ioc_alts_BANG_(state_31880__$1,(7),inst_31850);
} else {
if((state_val_31881 === (6))){
var inst_31876 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31887_32920 = state_31880__$1;
(statearr_31887_32920[(2)] = inst_31876);

(statearr_31887_32920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (3))){
var inst_31878 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31880__$1,inst_31878);
} else {
if((state_val_31881 === (2))){
var inst_31850 = (state_31880[(10)]);
var inst_31852 = cljs.core.count(inst_31850);
var inst_31853 = (inst_31852 > (0));
var state_31880__$1 = state_31880;
if(cljs.core.truth_(inst_31853)){
var statearr_31889_32922 = state_31880__$1;
(statearr_31889_32922[(1)] = (4));

} else {
var statearr_31890_32923 = state_31880__$1;
(statearr_31890_32923[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (11))){
var inst_31850 = (state_31880[(10)]);
var inst_31869 = (state_31880[(2)]);
var tmp31888 = inst_31850;
var inst_31850__$1 = tmp31888;
var state_31880__$1 = (function (){var statearr_31891 = state_31880;
(statearr_31891[(10)] = inst_31850__$1);

(statearr_31891[(11)] = inst_31869);

return statearr_31891;
})();
var statearr_31892_32924 = state_31880__$1;
(statearr_31892_32924[(2)] = null);

(statearr_31892_32924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (9))){
var inst_31860 = (state_31880[(8)]);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31880__$1,(11),out,inst_31860);
} else {
if((state_val_31881 === (5))){
var inst_31874 = cljs.core.async.close_BANG_(out);
var state_31880__$1 = state_31880;
var statearr_31893_32925 = state_31880__$1;
(statearr_31893_32925[(2)] = inst_31874);

(statearr_31893_32925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (10))){
var inst_31872 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31894_32926 = state_31880__$1;
(statearr_31894_32926[(2)] = inst_31872);

(statearr_31894_32926[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (8))){
var inst_31850 = (state_31880[(10)]);
var inst_31859 = (state_31880[(7)]);
var inst_31860 = (state_31880[(8)]);
var inst_31861 = (state_31880[(9)]);
var inst_31864 = (function (){var cs = inst_31850;
var vec__31855 = inst_31859;
var v = inst_31860;
var c = inst_31861;
return (function (p1__31846_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31846_SHARP_);
});
})();
var inst_31865 = cljs.core.filterv(inst_31864,inst_31850);
var inst_31850__$1 = inst_31865;
var state_31880__$1 = (function (){var statearr_31895 = state_31880;
(statearr_31895[(10)] = inst_31850__$1);

return statearr_31895;
})();
var statearr_31896_32927 = state_31880__$1;
(statearr_31896_32927[(2)] = null);

(statearr_31896_32927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_31897 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31897[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_31897[(1)] = (1));

return statearr_31897;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_31880){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31880);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31898){var ex__30250__auto__ = e31898;
var statearr_31899_32928 = state_31880;
(statearr_31899_32928[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31880[(4)]))){
var statearr_31900_32929 = state_31880;
(statearr_31900_32929[(1)] = cljs.core.first((state_31880[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32930 = state_31880;
state_31880 = G__32930;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_31880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_31880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31901 = f__30479__auto__();
(statearr_31901[(6)] = c__30478__auto___32911);

return statearr_31901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31903 = arguments.length;
switch (G__31903) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30478__auto___32932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31927){
var state_val_31928 = (state_31927[(1)]);
if((state_val_31928 === (7))){
var inst_31909 = (state_31927[(7)]);
var inst_31909__$1 = (state_31927[(2)]);
var inst_31910 = (inst_31909__$1 == null);
var inst_31911 = cljs.core.not(inst_31910);
var state_31927__$1 = (function (){var statearr_31929 = state_31927;
(statearr_31929[(7)] = inst_31909__$1);

return statearr_31929;
})();
if(inst_31911){
var statearr_31930_32933 = state_31927__$1;
(statearr_31930_32933[(1)] = (8));

} else {
var statearr_31931_32934 = state_31927__$1;
(statearr_31931_32934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (1))){
var inst_31904 = (0);
var state_31927__$1 = (function (){var statearr_31932 = state_31927;
(statearr_31932[(8)] = inst_31904);

return statearr_31932;
})();
var statearr_31933_32935 = state_31927__$1;
(statearr_31933_32935[(2)] = null);

(statearr_31933_32935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (4))){
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31927__$1,(7),ch);
} else {
if((state_val_31928 === (6))){
var inst_31922 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31934_32936 = state_31927__$1;
(statearr_31934_32936[(2)] = inst_31922);

(statearr_31934_32936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (3))){
var inst_31924 = (state_31927[(2)]);
var inst_31925 = cljs.core.async.close_BANG_(out);
var state_31927__$1 = (function (){var statearr_31935 = state_31927;
(statearr_31935[(9)] = inst_31924);

return statearr_31935;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31927__$1,inst_31925);
} else {
if((state_val_31928 === (2))){
var inst_31904 = (state_31927[(8)]);
var inst_31906 = (inst_31904 < n);
var state_31927__$1 = state_31927;
if(cljs.core.truth_(inst_31906)){
var statearr_31936_32937 = state_31927__$1;
(statearr_31936_32937[(1)] = (4));

} else {
var statearr_31937_32938 = state_31927__$1;
(statearr_31937_32938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (11))){
var inst_31904 = (state_31927[(8)]);
var inst_31914 = (state_31927[(2)]);
var inst_31915 = (inst_31904 + (1));
var inst_31904__$1 = inst_31915;
var state_31927__$1 = (function (){var statearr_31938 = state_31927;
(statearr_31938[(10)] = inst_31914);

(statearr_31938[(8)] = inst_31904__$1);

return statearr_31938;
})();
var statearr_31939_32939 = state_31927__$1;
(statearr_31939_32939[(2)] = null);

(statearr_31939_32939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (9))){
var state_31927__$1 = state_31927;
var statearr_31940_32940 = state_31927__$1;
(statearr_31940_32940[(2)] = null);

(statearr_31940_32940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (5))){
var state_31927__$1 = state_31927;
var statearr_31941_32941 = state_31927__$1;
(statearr_31941_32941[(2)] = null);

(statearr_31941_32941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (10))){
var inst_31919 = (state_31927[(2)]);
var state_31927__$1 = state_31927;
var statearr_31942_32942 = state_31927__$1;
(statearr_31942_32942[(2)] = inst_31919);

(statearr_31942_32942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31928 === (8))){
var inst_31909 = (state_31927[(7)]);
var state_31927__$1 = state_31927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31927__$1,(11),out,inst_31909);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_31943 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31943[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_31943[(1)] = (1));

return statearr_31943;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_31927){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31927);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e31944){var ex__30250__auto__ = e31944;
var statearr_31945_32943 = state_31927;
(statearr_31945_32943[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31927[(4)]))){
var statearr_31946_32944 = state_31927;
(statearr_31946_32944[(1)] = cljs.core.first((state_31927[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32945 = state_31927;
state_31927 = G__32945;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_31927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_31927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_31947 = f__30479__auto__();
(statearr_31947[(6)] = c__30478__auto___32932);

return statearr_31947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31949 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31949 = (function (f,ch,meta31950){
this.f = f;
this.ch = ch;
this.meta31950 = meta31950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31951,meta31950__$1){
var self__ = this;
var _31951__$1 = this;
return (new cljs.core.async.t_cljs$core$async31949(self__.f,self__.ch,meta31950__$1));
}));

(cljs.core.async.t_cljs$core$async31949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31951){
var self__ = this;
var _31951__$1 = this;
return self__.meta31950;
}));

(cljs.core.async.t_cljs$core$async31949.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31949.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31949.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31949.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31949.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31952 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31952 = (function (f,ch,meta31950,_,fn1,meta31953){
this.f = f;
this.ch = ch;
this.meta31950 = meta31950;
this._ = _;
this.fn1 = fn1;
this.meta31953 = meta31953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31954,meta31953__$1){
var self__ = this;
var _31954__$1 = this;
return (new cljs.core.async.t_cljs$core$async31952(self__.f,self__.ch,self__.meta31950,self__._,self__.fn1,meta31953__$1));
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31954){
var self__ = this;
var _31954__$1 = this;
return self__.meta31953;
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31948_SHARP_){
var G__31955 = (((p1__31948_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31948_SHARP_) : self__.f.call(null,p1__31948_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31955) : f1.call(null,G__31955));
});
}));

(cljs.core.async.t_cljs$core$async31952.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31950","meta31950",-999513025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31949","cljs.core.async/t_cljs$core$async31949",305470693,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31953","meta31953",1151916088,null)], null);
}));

(cljs.core.async.t_cljs$core$async31952.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31952");

(cljs.core.async.t_cljs$core$async31952.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31952");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31952.
 */
cljs.core.async.__GT_t_cljs$core$async31952 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31952(f__$1,ch__$1,meta31950__$1,___$2,fn1__$1,meta31953){
return (new cljs.core.async.t_cljs$core$async31952(f__$1,ch__$1,meta31950__$1,___$2,fn1__$1,meta31953));
});

}

return (new cljs.core.async.t_cljs$core$async31952(self__.f,self__.ch,self__.meta31950,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31956 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31956) : self__.f.call(null,G__31956));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31949.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31949.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31950","meta31950",-999513025,null)], null);
}));

(cljs.core.async.t_cljs$core$async31949.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31949");

(cljs.core.async.t_cljs$core$async31949.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31949");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31949.
 */
cljs.core.async.__GT_t_cljs$core$async31949 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31949(f__$1,ch__$1,meta31950){
return (new cljs.core.async.t_cljs$core$async31949(f__$1,ch__$1,meta31950));
});

}

return (new cljs.core.async.t_cljs$core$async31949(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31957 = (function (f,ch,meta31958){
this.f = f;
this.ch = ch;
this.meta31958 = meta31958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31959,meta31958__$1){
var self__ = this;
var _31959__$1 = this;
return (new cljs.core.async.t_cljs$core$async31957(self__.f,self__.ch,meta31958__$1));
}));

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31959){
var self__ = this;
var _31959__$1 = this;
return self__.meta31958;
}));

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31958","meta31958",219323704,null)], null);
}));

(cljs.core.async.t_cljs$core$async31957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31957");

(cljs.core.async.t_cljs$core$async31957.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31957.
 */
cljs.core.async.__GT_t_cljs$core$async31957 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31957(f__$1,ch__$1,meta31958){
return (new cljs.core.async.t_cljs$core$async31957(f__$1,ch__$1,meta31958));
});

}

return (new cljs.core.async.t_cljs$core$async31957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31960 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31960 = (function (p,ch,meta31961){
this.p = p;
this.ch = ch;
this.meta31961 = meta31961;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31962,meta31961__$1){
var self__ = this;
var _31962__$1 = this;
return (new cljs.core.async.t_cljs$core$async31960(self__.p,self__.ch,meta31961__$1));
}));

(cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31962){
var self__ = this;
var _31962__$1 = this;
return self__.meta31961;
}));

(cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31960.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31961","meta31961",72935162,null)], null);
}));

(cljs.core.async.t_cljs$core$async31960.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31960.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31960");

(cljs.core.async.t_cljs$core$async31960.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31960");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31960.
 */
cljs.core.async.__GT_t_cljs$core$async31960 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31960(p__$1,ch__$1,meta31961){
return (new cljs.core.async.t_cljs$core$async31960(p__$1,ch__$1,meta31961));
});

}

return (new cljs.core.async.t_cljs$core$async31960(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31964 = arguments.length;
switch (G__31964) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30478__auto___32966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_31985){
var state_val_31986 = (state_31985[(1)]);
if((state_val_31986 === (7))){
var inst_31981 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
var statearr_31987_32968 = state_31985__$1;
(statearr_31987_32968[(2)] = inst_31981);

(statearr_31987_32968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (1))){
var state_31985__$1 = state_31985;
var statearr_31988_32990 = state_31985__$1;
(statearr_31988_32990[(2)] = null);

(statearr_31988_32990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (4))){
var inst_31967 = (state_31985[(7)]);
var inst_31967__$1 = (state_31985[(2)]);
var inst_31968 = (inst_31967__$1 == null);
var state_31985__$1 = (function (){var statearr_31989 = state_31985;
(statearr_31989[(7)] = inst_31967__$1);

return statearr_31989;
})();
if(cljs.core.truth_(inst_31968)){
var statearr_31990_32991 = state_31985__$1;
(statearr_31990_32991[(1)] = (5));

} else {
var statearr_31991_32992 = state_31985__$1;
(statearr_31991_32992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (6))){
var inst_31967 = (state_31985[(7)]);
var inst_31972 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31967) : p.call(null,inst_31967));
var state_31985__$1 = state_31985;
if(cljs.core.truth_(inst_31972)){
var statearr_31992_32993 = state_31985__$1;
(statearr_31992_32993[(1)] = (8));

} else {
var statearr_31993_32994 = state_31985__$1;
(statearr_31993_32994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (3))){
var inst_31983 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31985__$1,inst_31983);
} else {
if((state_val_31986 === (2))){
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31985__$1,(4),ch);
} else {
if((state_val_31986 === (11))){
var inst_31975 = (state_31985[(2)]);
var state_31985__$1 = state_31985;
var statearr_31994_32995 = state_31985__$1;
(statearr_31994_32995[(2)] = inst_31975);

(statearr_31994_32995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (9))){
var state_31985__$1 = state_31985;
var statearr_31995_32996 = state_31985__$1;
(statearr_31995_32996[(2)] = null);

(statearr_31995_32996[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (5))){
var inst_31970 = cljs.core.async.close_BANG_(out);
var state_31985__$1 = state_31985;
var statearr_31996_32997 = state_31985__$1;
(statearr_31996_32997[(2)] = inst_31970);

(statearr_31996_32997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (10))){
var inst_31978 = (state_31985[(2)]);
var state_31985__$1 = (function (){var statearr_31997 = state_31985;
(statearr_31997[(8)] = inst_31978);

return statearr_31997;
})();
var statearr_31998_32998 = state_31985__$1;
(statearr_31998_32998[(2)] = null);

(statearr_31998_32998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31986 === (8))){
var inst_31967 = (state_31985[(7)]);
var state_31985__$1 = state_31985;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31985__$1,(11),out,inst_31967);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_31999 = [null,null,null,null,null,null,null,null,null];
(statearr_31999[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_31999[(1)] = (1));

return statearr_31999;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_31985){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_31985);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e32000){var ex__30250__auto__ = e32000;
var statearr_32001_32999 = state_31985;
(statearr_32001_32999[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_31985[(4)]))){
var statearr_32002_33000 = state_31985;
(statearr_32002_33000[(1)] = cljs.core.first((state_31985[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33007 = state_31985;
state_31985 = G__33007;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_31985){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_31985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_32003 = f__30479__auto__();
(statearr_32003[(6)] = c__30478__auto___32966);

return statearr_32003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32005 = arguments.length;
switch (G__32005) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30478__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_32067){
var state_val_32068 = (state_32067[(1)]);
if((state_val_32068 === (7))){
var inst_32063 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
var statearr_32069_33009 = state_32067__$1;
(statearr_32069_33009[(2)] = inst_32063);

(statearr_32069_33009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (20))){
var inst_32033 = (state_32067[(7)]);
var inst_32044 = (state_32067[(2)]);
var inst_32045 = cljs.core.next(inst_32033);
var inst_32019 = inst_32045;
var inst_32020 = null;
var inst_32021 = (0);
var inst_32022 = (0);
var state_32067__$1 = (function (){var statearr_32070 = state_32067;
(statearr_32070[(8)] = inst_32020);

(statearr_32070[(9)] = inst_32021);

(statearr_32070[(10)] = inst_32022);

(statearr_32070[(11)] = inst_32044);

(statearr_32070[(12)] = inst_32019);

return statearr_32070;
})();
var statearr_32071_33010 = state_32067__$1;
(statearr_32071_33010[(2)] = null);

(statearr_32071_33010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (1))){
var state_32067__$1 = state_32067;
var statearr_32072_33011 = state_32067__$1;
(statearr_32072_33011[(2)] = null);

(statearr_32072_33011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (4))){
var inst_32008 = (state_32067[(13)]);
var inst_32008__$1 = (state_32067[(2)]);
var inst_32009 = (inst_32008__$1 == null);
var state_32067__$1 = (function (){var statearr_32073 = state_32067;
(statearr_32073[(13)] = inst_32008__$1);

return statearr_32073;
})();
if(cljs.core.truth_(inst_32009)){
var statearr_32074_33012 = state_32067__$1;
(statearr_32074_33012[(1)] = (5));

} else {
var statearr_32075_33013 = state_32067__$1;
(statearr_32075_33013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (15))){
var state_32067__$1 = state_32067;
var statearr_32079_33014 = state_32067__$1;
(statearr_32079_33014[(2)] = null);

(statearr_32079_33014[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (21))){
var state_32067__$1 = state_32067;
var statearr_32080_33015 = state_32067__$1;
(statearr_32080_33015[(2)] = null);

(statearr_32080_33015[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (13))){
var inst_32020 = (state_32067[(8)]);
var inst_32021 = (state_32067[(9)]);
var inst_32022 = (state_32067[(10)]);
var inst_32019 = (state_32067[(12)]);
var inst_32029 = (state_32067[(2)]);
var inst_32030 = (inst_32022 + (1));
var tmp32076 = inst_32020;
var tmp32077 = inst_32021;
var tmp32078 = inst_32019;
var inst_32019__$1 = tmp32078;
var inst_32020__$1 = tmp32076;
var inst_32021__$1 = tmp32077;
var inst_32022__$1 = inst_32030;
var state_32067__$1 = (function (){var statearr_32081 = state_32067;
(statearr_32081[(8)] = inst_32020__$1);

(statearr_32081[(9)] = inst_32021__$1);

(statearr_32081[(10)] = inst_32022__$1);

(statearr_32081[(12)] = inst_32019__$1);

(statearr_32081[(14)] = inst_32029);

return statearr_32081;
})();
var statearr_32082_33016 = state_32067__$1;
(statearr_32082_33016[(2)] = null);

(statearr_32082_33016[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (22))){
var state_32067__$1 = state_32067;
var statearr_32083_33017 = state_32067__$1;
(statearr_32083_33017[(2)] = null);

(statearr_32083_33017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (6))){
var inst_32008 = (state_32067[(13)]);
var inst_32017 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32008) : f.call(null,inst_32008));
var inst_32018 = cljs.core.seq(inst_32017);
var inst_32019 = inst_32018;
var inst_32020 = null;
var inst_32021 = (0);
var inst_32022 = (0);
var state_32067__$1 = (function (){var statearr_32084 = state_32067;
(statearr_32084[(8)] = inst_32020);

(statearr_32084[(9)] = inst_32021);

(statearr_32084[(10)] = inst_32022);

(statearr_32084[(12)] = inst_32019);

return statearr_32084;
})();
var statearr_32085_33024 = state_32067__$1;
(statearr_32085_33024[(2)] = null);

(statearr_32085_33024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (17))){
var inst_32033 = (state_32067[(7)]);
var inst_32037 = cljs.core.chunk_first(inst_32033);
var inst_32038 = cljs.core.chunk_rest(inst_32033);
var inst_32039 = cljs.core.count(inst_32037);
var inst_32019 = inst_32038;
var inst_32020 = inst_32037;
var inst_32021 = inst_32039;
var inst_32022 = (0);
var state_32067__$1 = (function (){var statearr_32086 = state_32067;
(statearr_32086[(8)] = inst_32020);

(statearr_32086[(9)] = inst_32021);

(statearr_32086[(10)] = inst_32022);

(statearr_32086[(12)] = inst_32019);

return statearr_32086;
})();
var statearr_32087_33025 = state_32067__$1;
(statearr_32087_33025[(2)] = null);

(statearr_32087_33025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (3))){
var inst_32065 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32067__$1,inst_32065);
} else {
if((state_val_32068 === (12))){
var inst_32053 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
var statearr_32088_33026 = state_32067__$1;
(statearr_32088_33026[(2)] = inst_32053);

(statearr_32088_33026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (2))){
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32067__$1,(4),in$);
} else {
if((state_val_32068 === (23))){
var inst_32061 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
var statearr_32089_33027 = state_32067__$1;
(statearr_32089_33027[(2)] = inst_32061);

(statearr_32089_33027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (19))){
var inst_32048 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
var statearr_32090_33028 = state_32067__$1;
(statearr_32090_33028[(2)] = inst_32048);

(statearr_32090_33028[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (11))){
var inst_32033 = (state_32067[(7)]);
var inst_32019 = (state_32067[(12)]);
var inst_32033__$1 = cljs.core.seq(inst_32019);
var state_32067__$1 = (function (){var statearr_32091 = state_32067;
(statearr_32091[(7)] = inst_32033__$1);

return statearr_32091;
})();
if(inst_32033__$1){
var statearr_32092_33029 = state_32067__$1;
(statearr_32092_33029[(1)] = (14));

} else {
var statearr_32093_33030 = state_32067__$1;
(statearr_32093_33030[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (9))){
var inst_32055 = (state_32067[(2)]);
var inst_32056 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32067__$1 = (function (){var statearr_32094 = state_32067;
(statearr_32094[(15)] = inst_32055);

return statearr_32094;
})();
if(cljs.core.truth_(inst_32056)){
var statearr_32095_33031 = state_32067__$1;
(statearr_32095_33031[(1)] = (21));

} else {
var statearr_32096_33032 = state_32067__$1;
(statearr_32096_33032[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (5))){
var inst_32011 = cljs.core.async.close_BANG_(out);
var state_32067__$1 = state_32067;
var statearr_32097_33033 = state_32067__$1;
(statearr_32097_33033[(2)] = inst_32011);

(statearr_32097_33033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (14))){
var inst_32033 = (state_32067[(7)]);
var inst_32035 = cljs.core.chunked_seq_QMARK_(inst_32033);
var state_32067__$1 = state_32067;
if(inst_32035){
var statearr_32098_33034 = state_32067__$1;
(statearr_32098_33034[(1)] = (17));

} else {
var statearr_32099_33035 = state_32067__$1;
(statearr_32099_33035[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (16))){
var inst_32051 = (state_32067[(2)]);
var state_32067__$1 = state_32067;
var statearr_32100_33036 = state_32067__$1;
(statearr_32100_33036[(2)] = inst_32051);

(statearr_32100_33036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32068 === (10))){
var inst_32020 = (state_32067[(8)]);
var inst_32022 = (state_32067[(10)]);
var inst_32027 = cljs.core._nth(inst_32020,inst_32022);
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32067__$1,(13),out,inst_32027);
} else {
if((state_val_32068 === (18))){
var inst_32033 = (state_32067[(7)]);
var inst_32042 = cljs.core.first(inst_32033);
var state_32067__$1 = state_32067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32067__$1,(20),out,inst_32042);
} else {
if((state_val_32068 === (8))){
var inst_32021 = (state_32067[(9)]);
var inst_32022 = (state_32067[(10)]);
var inst_32024 = (inst_32022 < inst_32021);
var inst_32025 = inst_32024;
var state_32067__$1 = state_32067;
if(cljs.core.truth_(inst_32025)){
var statearr_32101_33037 = state_32067__$1;
(statearr_32101_33037[(1)] = (10));

} else {
var statearr_32102_33038 = state_32067__$1;
(statearr_32102_33038[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30247__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30247__auto____0 = (function (){
var statearr_32103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32103[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30247__auto__);

(statearr_32103[(1)] = (1));

return statearr_32103;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30247__auto____1 = (function (state_32067){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_32067);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e32104){var ex__30250__auto__ = e32104;
var statearr_32105_33039 = state_32067;
(statearr_32105_33039[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_32067[(4)]))){
var statearr_32106_33040 = state_32067;
(statearr_32106_33040[(1)] = cljs.core.first((state_32067[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33041 = state_32067;
state_32067 = G__33041;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30247__auto__ = function(state_32067){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30247__auto____1.call(this,state_32067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30247__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30247__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_32107 = f__30479__auto__();
(statearr_32107[(6)] = c__30478__auto__);

return statearr_32107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));

return c__30478__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32109 = arguments.length;
switch (G__32109) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32111 = arguments.length;
switch (G__32111) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32113 = arguments.length;
switch (G__32113) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30478__auto___33048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_32137){
var state_val_32138 = (state_32137[(1)]);
if((state_val_32138 === (7))){
var inst_32132 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32139_33050 = state_32137__$1;
(statearr_32139_33050[(2)] = inst_32132);

(statearr_32139_33050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (1))){
var inst_32114 = null;
var state_32137__$1 = (function (){var statearr_32140 = state_32137;
(statearr_32140[(7)] = inst_32114);

return statearr_32140;
})();
var statearr_32141_33051 = state_32137__$1;
(statearr_32141_33051[(2)] = null);

(statearr_32141_33051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (4))){
var inst_32117 = (state_32137[(8)]);
var inst_32117__$1 = (state_32137[(2)]);
var inst_32118 = (inst_32117__$1 == null);
var inst_32119 = cljs.core.not(inst_32118);
var state_32137__$1 = (function (){var statearr_32142 = state_32137;
(statearr_32142[(8)] = inst_32117__$1);

return statearr_32142;
})();
if(inst_32119){
var statearr_32143_33052 = state_32137__$1;
(statearr_32143_33052[(1)] = (5));

} else {
var statearr_32144_33053 = state_32137__$1;
(statearr_32144_33053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (6))){
var state_32137__$1 = state_32137;
var statearr_32145_33054 = state_32137__$1;
(statearr_32145_33054[(2)] = null);

(statearr_32145_33054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (3))){
var inst_32134 = (state_32137[(2)]);
var inst_32135 = cljs.core.async.close_BANG_(out);
var state_32137__$1 = (function (){var statearr_32146 = state_32137;
(statearr_32146[(9)] = inst_32134);

return statearr_32146;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32137__$1,inst_32135);
} else {
if((state_val_32138 === (2))){
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32137__$1,(4),ch);
} else {
if((state_val_32138 === (11))){
var inst_32117 = (state_32137[(8)]);
var inst_32126 = (state_32137[(2)]);
var inst_32114 = inst_32117;
var state_32137__$1 = (function (){var statearr_32147 = state_32137;
(statearr_32147[(7)] = inst_32114);

(statearr_32147[(10)] = inst_32126);

return statearr_32147;
})();
var statearr_32152_33055 = state_32137__$1;
(statearr_32152_33055[(2)] = null);

(statearr_32152_33055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (9))){
var inst_32117 = (state_32137[(8)]);
var state_32137__$1 = state_32137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32137__$1,(11),out,inst_32117);
} else {
if((state_val_32138 === (5))){
var inst_32114 = (state_32137[(7)]);
var inst_32117 = (state_32137[(8)]);
var inst_32121 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32117,inst_32114);
var state_32137__$1 = state_32137;
if(inst_32121){
var statearr_32154_33056 = state_32137__$1;
(statearr_32154_33056[(1)] = (8));

} else {
var statearr_32158_33057 = state_32137__$1;
(statearr_32158_33057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (10))){
var inst_32129 = (state_32137[(2)]);
var state_32137__$1 = state_32137;
var statearr_32159_33058 = state_32137__$1;
(statearr_32159_33058[(2)] = inst_32129);

(statearr_32159_33058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32138 === (8))){
var inst_32114 = (state_32137[(7)]);
var tmp32153 = inst_32114;
var inst_32114__$1 = tmp32153;
var state_32137__$1 = (function (){var statearr_32160 = state_32137;
(statearr_32160[(7)] = inst_32114__$1);

return statearr_32160;
})();
var statearr_32161_33059 = state_32137__$1;
(statearr_32161_33059[(2)] = null);

(statearr_32161_33059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_32162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32162[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_32162[(1)] = (1));

return statearr_32162;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_32137){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_32137);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e32163){var ex__30250__auto__ = e32163;
var statearr_32164_33066 = state_32137;
(statearr_32164_33066[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_32137[(4)]))){
var statearr_32165_33067 = state_32137;
(statearr_32165_33067[(1)] = cljs.core.first((state_32137[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33068 = state_32137;
state_32137 = G__33068;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_32137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_32137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_32167 = f__30479__auto__();
(statearr_32167[(6)] = c__30478__auto___33048);

return statearr_32167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32170 = arguments.length;
switch (G__32170) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30478__auto___33072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_32208){
var state_val_32209 = (state_32208[(1)]);
if((state_val_32209 === (7))){
var inst_32204 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32210_33075 = state_32208__$1;
(statearr_32210_33075[(2)] = inst_32204);

(statearr_32210_33075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (1))){
var inst_32171 = (new Array(n));
var inst_32172 = inst_32171;
var inst_32173 = (0);
var state_32208__$1 = (function (){var statearr_32211 = state_32208;
(statearr_32211[(7)] = inst_32173);

(statearr_32211[(8)] = inst_32172);

return statearr_32211;
})();
var statearr_32212_33077 = state_32208__$1;
(statearr_32212_33077[(2)] = null);

(statearr_32212_33077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (4))){
var inst_32176 = (state_32208[(9)]);
var inst_32176__$1 = (state_32208[(2)]);
var inst_32177 = (inst_32176__$1 == null);
var inst_32178 = cljs.core.not(inst_32177);
var state_32208__$1 = (function (){var statearr_32213 = state_32208;
(statearr_32213[(9)] = inst_32176__$1);

return statearr_32213;
})();
if(inst_32178){
var statearr_32214_33078 = state_32208__$1;
(statearr_32214_33078[(1)] = (5));

} else {
var statearr_32215_33079 = state_32208__$1;
(statearr_32215_33079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (15))){
var inst_32198 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32216_33081 = state_32208__$1;
(statearr_32216_33081[(2)] = inst_32198);

(statearr_32216_33081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (13))){
var state_32208__$1 = state_32208;
var statearr_32217_33082 = state_32208__$1;
(statearr_32217_33082[(2)] = null);

(statearr_32217_33082[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (6))){
var inst_32173 = (state_32208[(7)]);
var inst_32194 = (inst_32173 > (0));
var state_32208__$1 = state_32208;
if(cljs.core.truth_(inst_32194)){
var statearr_32218_33083 = state_32208__$1;
(statearr_32218_33083[(1)] = (12));

} else {
var statearr_32219_33084 = state_32208__$1;
(statearr_32219_33084[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (3))){
var inst_32206 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32208__$1,inst_32206);
} else {
if((state_val_32209 === (12))){
var inst_32172 = (state_32208[(8)]);
var inst_32196 = cljs.core.vec(inst_32172);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32208__$1,(15),out,inst_32196);
} else {
if((state_val_32209 === (2))){
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32208__$1,(4),ch);
} else {
if((state_val_32209 === (11))){
var inst_32188 = (state_32208[(2)]);
var inst_32189 = (new Array(n));
var inst_32172 = inst_32189;
var inst_32173 = (0);
var state_32208__$1 = (function (){var statearr_32220 = state_32208;
(statearr_32220[(7)] = inst_32173);

(statearr_32220[(10)] = inst_32188);

(statearr_32220[(8)] = inst_32172);

return statearr_32220;
})();
var statearr_32221_33085 = state_32208__$1;
(statearr_32221_33085[(2)] = null);

(statearr_32221_33085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (9))){
var inst_32172 = (state_32208[(8)]);
var inst_32186 = cljs.core.vec(inst_32172);
var state_32208__$1 = state_32208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32208__$1,(11),out,inst_32186);
} else {
if((state_val_32209 === (5))){
var inst_32176 = (state_32208[(9)]);
var inst_32173 = (state_32208[(7)]);
var inst_32181 = (state_32208[(11)]);
var inst_32172 = (state_32208[(8)]);
var inst_32180 = (inst_32172[inst_32173] = inst_32176);
var inst_32181__$1 = (inst_32173 + (1));
var inst_32182 = (inst_32181__$1 < n);
var state_32208__$1 = (function (){var statearr_32223 = state_32208;
(statearr_32223[(11)] = inst_32181__$1);

(statearr_32223[(12)] = inst_32180);

return statearr_32223;
})();
if(cljs.core.truth_(inst_32182)){
var statearr_32225_33086 = state_32208__$1;
(statearr_32225_33086[(1)] = (8));

} else {
var statearr_32226_33087 = state_32208__$1;
(statearr_32226_33087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (14))){
var inst_32201 = (state_32208[(2)]);
var inst_32202 = cljs.core.async.close_BANG_(out);
var state_32208__$1 = (function (){var statearr_32229 = state_32208;
(statearr_32229[(13)] = inst_32201);

return statearr_32229;
})();
var statearr_32230_33088 = state_32208__$1;
(statearr_32230_33088[(2)] = inst_32202);

(statearr_32230_33088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (10))){
var inst_32192 = (state_32208[(2)]);
var state_32208__$1 = state_32208;
var statearr_32231_33089 = state_32208__$1;
(statearr_32231_33089[(2)] = inst_32192);

(statearr_32231_33089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32209 === (8))){
var inst_32181 = (state_32208[(11)]);
var inst_32172 = (state_32208[(8)]);
var tmp32227 = inst_32172;
var inst_32172__$1 = tmp32227;
var inst_32173 = inst_32181;
var state_32208__$1 = (function (){var statearr_32232 = state_32208;
(statearr_32232[(7)] = inst_32173);

(statearr_32232[(8)] = inst_32172__$1);

return statearr_32232;
})();
var statearr_32233_33091 = state_32208__$1;
(statearr_32233_33091[(2)] = null);

(statearr_32233_33091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_32234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32234[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_32234[(1)] = (1));

return statearr_32234;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_32208){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_32208);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e32235){var ex__30250__auto__ = e32235;
var statearr_32236_33093 = state_32208;
(statearr_32236_33093[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_32208[(4)]))){
var statearr_32237_33094 = state_32208;
(statearr_32237_33094[(1)] = cljs.core.first((state_32208[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33095 = state_32208;
state_32208 = G__33095;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_32208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_32208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_32238 = f__30479__auto__();
(statearr_32238[(6)] = c__30478__auto___33072);

return statearr_32238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32241 = arguments.length;
switch (G__32241) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30478__auto___33097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_32288){
var state_val_32289 = (state_32288[(1)]);
if((state_val_32289 === (7))){
var inst_32284 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32290_33098 = state_32288__$1;
(statearr_32290_33098[(2)] = inst_32284);

(statearr_32290_33098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (1))){
var inst_32244 = [];
var inst_32245 = inst_32244;
var inst_32246 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32288__$1 = (function (){var statearr_32292 = state_32288;
(statearr_32292[(7)] = inst_32246);

(statearr_32292[(8)] = inst_32245);

return statearr_32292;
})();
var statearr_32293_33099 = state_32288__$1;
(statearr_32293_33099[(2)] = null);

(statearr_32293_33099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (4))){
var inst_32249 = (state_32288[(9)]);
var inst_32249__$1 = (state_32288[(2)]);
var inst_32250 = (inst_32249__$1 == null);
var inst_32251 = cljs.core.not(inst_32250);
var state_32288__$1 = (function (){var statearr_32294 = state_32288;
(statearr_32294[(9)] = inst_32249__$1);

return statearr_32294;
})();
if(inst_32251){
var statearr_32295_33101 = state_32288__$1;
(statearr_32295_33101[(1)] = (5));

} else {
var statearr_32296_33102 = state_32288__$1;
(statearr_32296_33102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (15))){
var inst_32245 = (state_32288[(8)]);
var inst_32276 = cljs.core.vec(inst_32245);
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32288__$1,(18),out,inst_32276);
} else {
if((state_val_32289 === (13))){
var inst_32271 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32298_33104 = state_32288__$1;
(statearr_32298_33104[(2)] = inst_32271);

(statearr_32298_33104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (6))){
var inst_32245 = (state_32288[(8)]);
var inst_32273 = inst_32245.length;
var inst_32274 = (inst_32273 > (0));
var state_32288__$1 = state_32288;
if(cljs.core.truth_(inst_32274)){
var statearr_32299_33105 = state_32288__$1;
(statearr_32299_33105[(1)] = (15));

} else {
var statearr_32301_33107 = state_32288__$1;
(statearr_32301_33107[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (17))){
var inst_32281 = (state_32288[(2)]);
var inst_32282 = cljs.core.async.close_BANG_(out);
var state_32288__$1 = (function (){var statearr_32302 = state_32288;
(statearr_32302[(10)] = inst_32281);

return statearr_32302;
})();
var statearr_32303_33108 = state_32288__$1;
(statearr_32303_33108[(2)] = inst_32282);

(statearr_32303_33108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (3))){
var inst_32286 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32288__$1,inst_32286);
} else {
if((state_val_32289 === (12))){
var inst_32245 = (state_32288[(8)]);
var inst_32264 = cljs.core.vec(inst_32245);
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32288__$1,(14),out,inst_32264);
} else {
if((state_val_32289 === (2))){
var state_32288__$1 = state_32288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32288__$1,(4),ch);
} else {
if((state_val_32289 === (11))){
var inst_32253 = (state_32288[(11)]);
var inst_32249 = (state_32288[(9)]);
var inst_32245 = (state_32288[(8)]);
var inst_32261 = inst_32245.push(inst_32249);
var tmp32304 = inst_32245;
var inst_32245__$1 = tmp32304;
var inst_32246 = inst_32253;
var state_32288__$1 = (function (){var statearr_32305 = state_32288;
(statearr_32305[(7)] = inst_32246);

(statearr_32305[(8)] = inst_32245__$1);

(statearr_32305[(12)] = inst_32261);

return statearr_32305;
})();
var statearr_32306_33111 = state_32288__$1;
(statearr_32306_33111[(2)] = null);

(statearr_32306_33111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (9))){
var inst_32246 = (state_32288[(7)]);
var inst_32257 = cljs.core.keyword_identical_QMARK_(inst_32246,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_32288__$1 = state_32288;
var statearr_32307_33112 = state_32288__$1;
(statearr_32307_33112[(2)] = inst_32257);

(statearr_32307_33112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (5))){
var inst_32253 = (state_32288[(11)]);
var inst_32246 = (state_32288[(7)]);
var inst_32249 = (state_32288[(9)]);
var inst_32254 = (state_32288[(13)]);
var inst_32253__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32249) : f.call(null,inst_32249));
var inst_32254__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32253__$1,inst_32246);
var state_32288__$1 = (function (){var statearr_32308 = state_32288;
(statearr_32308[(11)] = inst_32253__$1);

(statearr_32308[(13)] = inst_32254__$1);

return statearr_32308;
})();
if(inst_32254__$1){
var statearr_32310_33114 = state_32288__$1;
(statearr_32310_33114[(1)] = (8));

} else {
var statearr_32311_33115 = state_32288__$1;
(statearr_32311_33115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (14))){
var inst_32253 = (state_32288[(11)]);
var inst_32249 = (state_32288[(9)]);
var inst_32266 = (state_32288[(2)]);
var inst_32267 = [];
var inst_32268 = inst_32267.push(inst_32249);
var inst_32245 = inst_32267;
var inst_32246 = inst_32253;
var state_32288__$1 = (function (){var statearr_32312 = state_32288;
(statearr_32312[(14)] = inst_32266);

(statearr_32312[(7)] = inst_32246);

(statearr_32312[(15)] = inst_32268);

(statearr_32312[(8)] = inst_32245);

return statearr_32312;
})();
var statearr_32313_33116 = state_32288__$1;
(statearr_32313_33116[(2)] = null);

(statearr_32313_33116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (16))){
var state_32288__$1 = state_32288;
var statearr_32314_33117 = state_32288__$1;
(statearr_32314_33117[(2)] = null);

(statearr_32314_33117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (10))){
var inst_32259 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
if(cljs.core.truth_(inst_32259)){
var statearr_32315_33118 = state_32288__$1;
(statearr_32315_33118[(1)] = (11));

} else {
var statearr_32316_33119 = state_32288__$1;
(statearr_32316_33119[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (18))){
var inst_32278 = (state_32288[(2)]);
var state_32288__$1 = state_32288;
var statearr_32317_33120 = state_32288__$1;
(statearr_32317_33120[(2)] = inst_32278);

(statearr_32317_33120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32289 === (8))){
var inst_32254 = (state_32288[(13)]);
var state_32288__$1 = state_32288;
var statearr_32318_33121 = state_32288__$1;
(statearr_32318_33121[(2)] = inst_32254);

(statearr_32318_33121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
return (function() {
var cljs$core$async$state_machine__30247__auto__ = null;
var cljs$core$async$state_machine__30247__auto____0 = (function (){
var statearr_32319 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32319[(0)] = cljs$core$async$state_machine__30247__auto__);

(statearr_32319[(1)] = (1));

return statearr_32319;
});
var cljs$core$async$state_machine__30247__auto____1 = (function (state_32288){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_32288);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e32320){var ex__30250__auto__ = e32320;
var statearr_32321_33127 = state_32288;
(statearr_32321_33127[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_32288[(4)]))){
var statearr_32322_33128 = state_32288;
(statearr_32322_33128[(1)] = cljs.core.first((state_32288[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33134 = state_32288;
state_32288 = G__33134;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
cljs$core$async$state_machine__30247__auto__ = function(state_32288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30247__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30247__auto____1.call(this,state_32288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30247__auto____0;
cljs$core$async$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30247__auto____1;
return cljs$core$async$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_32323 = f__30479__auto__();
(statearr_32323[(6)] = c__30478__auto___33097);

return statearr_32323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
