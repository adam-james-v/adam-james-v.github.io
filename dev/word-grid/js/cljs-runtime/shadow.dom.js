goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_33090 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_33090(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_33092 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_33092(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32343 = coll;
var G__32344 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32343,G__32344) : shadow.dom.lazy_native_coll_seq.call(null,G__32343,G__32344));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32357 = arguments.length;
switch (G__32357) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32361 = arguments.length;
switch (G__32361) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32366 = arguments.length;
switch (G__32366) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32377 = arguments.length;
switch (G__32377) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32396 = arguments.length;
switch (G__32396) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32447 = arguments.length;
switch (G__32447) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32448){if((e32448 instanceof Object)){
var e = e32448;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32448;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32454 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32455 = null;
var count__32456 = (0);
var i__32457 = (0);
while(true){
if((i__32457 < count__32456)){
var el = chunk__32455.cljs$core$IIndexed$_nth$arity$2(null,i__32457);
var handler_33122__$1 = ((function (seq__32454,chunk__32455,count__32456,i__32457,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32454,chunk__32455,count__32456,i__32457,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33122__$1);


var G__33123 = seq__32454;
var G__33124 = chunk__32455;
var G__33125 = count__32456;
var G__33126 = (i__32457 + (1));
seq__32454 = G__33123;
chunk__32455 = G__33124;
count__32456 = G__33125;
i__32457 = G__33126;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32454);
if(temp__5753__auto__){
var seq__32454__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32454__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32454__$1);
var G__33129 = cljs.core.chunk_rest(seq__32454__$1);
var G__33130 = c__4638__auto__;
var G__33131 = cljs.core.count(c__4638__auto__);
var G__33132 = (0);
seq__32454 = G__33129;
chunk__32455 = G__33130;
count__32456 = G__33131;
i__32457 = G__33132;
continue;
} else {
var el = cljs.core.first(seq__32454__$1);
var handler_33133__$1 = ((function (seq__32454,chunk__32455,count__32456,i__32457,el,seq__32454__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32454,chunk__32455,count__32456,i__32457,el,seq__32454__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_33133__$1);


var G__33135 = cljs.core.next(seq__32454__$1);
var G__33136 = null;
var G__33137 = (0);
var G__33138 = (0);
seq__32454 = G__33135;
chunk__32455 = G__33136;
count__32456 = G__33137;
i__32457 = G__33138;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32480 = arguments.length;
switch (G__32480) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32490 = cljs.core.seq(events);
var chunk__32491 = null;
var count__32492 = (0);
var i__32493 = (0);
while(true){
if((i__32493 < count__32492)){
var vec__32503 = chunk__32491.cljs$core$IIndexed$_nth$arity$2(null,i__32493);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32503,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33140 = seq__32490;
var G__33141 = chunk__32491;
var G__33142 = count__32492;
var G__33143 = (i__32493 + (1));
seq__32490 = G__33140;
chunk__32491 = G__33141;
count__32492 = G__33142;
i__32493 = G__33143;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32490);
if(temp__5753__auto__){
var seq__32490__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32490__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32490__$1);
var G__33144 = cljs.core.chunk_rest(seq__32490__$1);
var G__33145 = c__4638__auto__;
var G__33146 = cljs.core.count(c__4638__auto__);
var G__33147 = (0);
seq__32490 = G__33144;
chunk__32491 = G__33145;
count__32492 = G__33146;
i__32493 = G__33147;
continue;
} else {
var vec__32513 = cljs.core.first(seq__32490__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32513,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33148 = cljs.core.next(seq__32490__$1);
var G__33149 = null;
var G__33150 = (0);
var G__33151 = (0);
seq__32490 = G__33148;
chunk__32491 = G__33149;
count__32492 = G__33150;
i__32493 = G__33151;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32517 = cljs.core.seq(styles);
var chunk__32518 = null;
var count__32519 = (0);
var i__32520 = (0);
while(true){
if((i__32520 < count__32519)){
var vec__32532 = chunk__32518.cljs$core$IIndexed$_nth$arity$2(null,i__32520);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32532,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32532,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33152 = seq__32517;
var G__33153 = chunk__32518;
var G__33154 = count__32519;
var G__33155 = (i__32520 + (1));
seq__32517 = G__33152;
chunk__32518 = G__33153;
count__32519 = G__33154;
i__32520 = G__33155;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32517);
if(temp__5753__auto__){
var seq__32517__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32517__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32517__$1);
var G__33156 = cljs.core.chunk_rest(seq__32517__$1);
var G__33157 = c__4638__auto__;
var G__33158 = cljs.core.count(c__4638__auto__);
var G__33159 = (0);
seq__32517 = G__33156;
chunk__32518 = G__33157;
count__32519 = G__33158;
i__32520 = G__33159;
continue;
} else {
var vec__32539 = cljs.core.first(seq__32517__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32539,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__33160 = cljs.core.next(seq__32517__$1);
var G__33161 = null;
var G__33162 = (0);
var G__33163 = (0);
seq__32517 = G__33160;
chunk__32518 = G__33161;
count__32519 = G__33162;
i__32520 = G__33163;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32547_33164 = key;
var G__32547_33165__$1 = (((G__32547_33164 instanceof cljs.core.Keyword))?G__32547_33164.fqn:null);
switch (G__32547_33165__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33167 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_33167,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_33167,"aria-");
}
})())){
el.setAttribute(ks_33167,value);
} else {
(el[ks_33167] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32563){
var map__32564 = p__32563;
var map__32564__$1 = cljs.core.__destructure_map(map__32564);
var props = map__32564__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32564__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32566 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32566,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32566,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32566,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32570 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32570,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32570;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32577 = arguments.length;
switch (G__32577) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32584){
var vec__32585 = p__32584;
var seq__32586 = cljs.core.seq(vec__32585);
var first__32587 = cljs.core.first(seq__32586);
var seq__32586__$1 = cljs.core.next(seq__32586);
var nn = first__32587;
var first__32587__$1 = cljs.core.first(seq__32586__$1);
var seq__32586__$2 = cljs.core.next(seq__32586__$1);
var np = first__32587__$1;
var nc = seq__32586__$2;
var node = vec__32585;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32588 = nn;
var G__32589 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32588,G__32589) : create_fn.call(null,G__32588,G__32589));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32590 = nn;
var G__32591 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32590,G__32591) : create_fn.call(null,G__32590,G__32591));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32592 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32592,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32592,(1),null);
var seq__32595_33171 = cljs.core.seq(node_children);
var chunk__32596_33172 = null;
var count__32597_33173 = (0);
var i__32598_33174 = (0);
while(true){
if((i__32598_33174 < count__32597_33173)){
var child_struct_33175 = chunk__32596_33172.cljs$core$IIndexed$_nth$arity$2(null,i__32598_33174);
var children_33176 = shadow.dom.dom_node(child_struct_33175);
if(cljs.core.seq_QMARK_(children_33176)){
var seq__32619_33177 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33176));
var chunk__32621_33178 = null;
var count__32622_33179 = (0);
var i__32623_33180 = (0);
while(true){
if((i__32623_33180 < count__32622_33179)){
var child_33181 = chunk__32621_33178.cljs$core$IIndexed$_nth$arity$2(null,i__32623_33180);
if(cljs.core.truth_(child_33181)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33181);


var G__33182 = seq__32619_33177;
var G__33183 = chunk__32621_33178;
var G__33184 = count__32622_33179;
var G__33185 = (i__32623_33180 + (1));
seq__32619_33177 = G__33182;
chunk__32621_33178 = G__33183;
count__32622_33179 = G__33184;
i__32623_33180 = G__33185;
continue;
} else {
var G__33186 = seq__32619_33177;
var G__33187 = chunk__32621_33178;
var G__33188 = count__32622_33179;
var G__33189 = (i__32623_33180 + (1));
seq__32619_33177 = G__33186;
chunk__32621_33178 = G__33187;
count__32622_33179 = G__33188;
i__32623_33180 = G__33189;
continue;
}
} else {
var temp__5753__auto___33190 = cljs.core.seq(seq__32619_33177);
if(temp__5753__auto___33190){
var seq__32619_33192__$1 = temp__5753__auto___33190;
if(cljs.core.chunked_seq_QMARK_(seq__32619_33192__$1)){
var c__4638__auto___33193 = cljs.core.chunk_first(seq__32619_33192__$1);
var G__33194 = cljs.core.chunk_rest(seq__32619_33192__$1);
var G__33195 = c__4638__auto___33193;
var G__33196 = cljs.core.count(c__4638__auto___33193);
var G__33197 = (0);
seq__32619_33177 = G__33194;
chunk__32621_33178 = G__33195;
count__32622_33179 = G__33196;
i__32623_33180 = G__33197;
continue;
} else {
var child_33198 = cljs.core.first(seq__32619_33192__$1);
if(cljs.core.truth_(child_33198)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33198);


var G__33199 = cljs.core.next(seq__32619_33192__$1);
var G__33200 = null;
var G__33201 = (0);
var G__33202 = (0);
seq__32619_33177 = G__33199;
chunk__32621_33178 = G__33200;
count__32622_33179 = G__33201;
i__32623_33180 = G__33202;
continue;
} else {
var G__33203 = cljs.core.next(seq__32619_33192__$1);
var G__33204 = null;
var G__33205 = (0);
var G__33206 = (0);
seq__32619_33177 = G__33203;
chunk__32621_33178 = G__33204;
count__32622_33179 = G__33205;
i__32623_33180 = G__33206;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33176);
}


var G__33207 = seq__32595_33171;
var G__33208 = chunk__32596_33172;
var G__33209 = count__32597_33173;
var G__33210 = (i__32598_33174 + (1));
seq__32595_33171 = G__33207;
chunk__32596_33172 = G__33208;
count__32597_33173 = G__33209;
i__32598_33174 = G__33210;
continue;
} else {
var temp__5753__auto___33211 = cljs.core.seq(seq__32595_33171);
if(temp__5753__auto___33211){
var seq__32595_33212__$1 = temp__5753__auto___33211;
if(cljs.core.chunked_seq_QMARK_(seq__32595_33212__$1)){
var c__4638__auto___33213 = cljs.core.chunk_first(seq__32595_33212__$1);
var G__33214 = cljs.core.chunk_rest(seq__32595_33212__$1);
var G__33215 = c__4638__auto___33213;
var G__33216 = cljs.core.count(c__4638__auto___33213);
var G__33217 = (0);
seq__32595_33171 = G__33214;
chunk__32596_33172 = G__33215;
count__32597_33173 = G__33216;
i__32598_33174 = G__33217;
continue;
} else {
var child_struct_33218 = cljs.core.first(seq__32595_33212__$1);
var children_33219 = shadow.dom.dom_node(child_struct_33218);
if(cljs.core.seq_QMARK_(children_33219)){
var seq__32636_33220 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33219));
var chunk__32638_33221 = null;
var count__32639_33222 = (0);
var i__32640_33223 = (0);
while(true){
if((i__32640_33223 < count__32639_33222)){
var child_33227 = chunk__32638_33221.cljs$core$IIndexed$_nth$arity$2(null,i__32640_33223);
if(cljs.core.truth_(child_33227)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33227);


var G__33228 = seq__32636_33220;
var G__33229 = chunk__32638_33221;
var G__33230 = count__32639_33222;
var G__33231 = (i__32640_33223 + (1));
seq__32636_33220 = G__33228;
chunk__32638_33221 = G__33229;
count__32639_33222 = G__33230;
i__32640_33223 = G__33231;
continue;
} else {
var G__33232 = seq__32636_33220;
var G__33233 = chunk__32638_33221;
var G__33234 = count__32639_33222;
var G__33235 = (i__32640_33223 + (1));
seq__32636_33220 = G__33232;
chunk__32638_33221 = G__33233;
count__32639_33222 = G__33234;
i__32640_33223 = G__33235;
continue;
}
} else {
var temp__5753__auto___33236__$1 = cljs.core.seq(seq__32636_33220);
if(temp__5753__auto___33236__$1){
var seq__32636_33237__$1 = temp__5753__auto___33236__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32636_33237__$1)){
var c__4638__auto___33239 = cljs.core.chunk_first(seq__32636_33237__$1);
var G__33240 = cljs.core.chunk_rest(seq__32636_33237__$1);
var G__33241 = c__4638__auto___33239;
var G__33242 = cljs.core.count(c__4638__auto___33239);
var G__33243 = (0);
seq__32636_33220 = G__33240;
chunk__32638_33221 = G__33241;
count__32639_33222 = G__33242;
i__32640_33223 = G__33243;
continue;
} else {
var child_33244 = cljs.core.first(seq__32636_33237__$1);
if(cljs.core.truth_(child_33244)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33244);


var G__33246 = cljs.core.next(seq__32636_33237__$1);
var G__33247 = null;
var G__33248 = (0);
var G__33249 = (0);
seq__32636_33220 = G__33246;
chunk__32638_33221 = G__33247;
count__32639_33222 = G__33248;
i__32640_33223 = G__33249;
continue;
} else {
var G__33250 = cljs.core.next(seq__32636_33237__$1);
var G__33251 = null;
var G__33252 = (0);
var G__33253 = (0);
seq__32636_33220 = G__33250;
chunk__32638_33221 = G__33251;
count__32639_33222 = G__33252;
i__32640_33223 = G__33253;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33219);
}


var G__33254 = cljs.core.next(seq__32595_33212__$1);
var G__33255 = null;
var G__33256 = (0);
var G__33257 = (0);
seq__32595_33171 = G__33254;
chunk__32596_33172 = G__33255;
count__32597_33173 = G__33256;
i__32598_33174 = G__33257;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32666 = cljs.core.seq(node);
var chunk__32667 = null;
var count__32668 = (0);
var i__32669 = (0);
while(true){
if((i__32669 < count__32668)){
var n = chunk__32667.cljs$core$IIndexed$_nth$arity$2(null,i__32669);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33259 = seq__32666;
var G__33260 = chunk__32667;
var G__33261 = count__32668;
var G__33262 = (i__32669 + (1));
seq__32666 = G__33259;
chunk__32667 = G__33260;
count__32668 = G__33261;
i__32669 = G__33262;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32666);
if(temp__5753__auto__){
var seq__32666__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32666__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32666__$1);
var G__33263 = cljs.core.chunk_rest(seq__32666__$1);
var G__33264 = c__4638__auto__;
var G__33265 = cljs.core.count(c__4638__auto__);
var G__33266 = (0);
seq__32666 = G__33263;
chunk__32667 = G__33264;
count__32668 = G__33265;
i__32669 = G__33266;
continue;
} else {
var n = cljs.core.first(seq__32666__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33267 = cljs.core.next(seq__32666__$1);
var G__33268 = null;
var G__33269 = (0);
var G__33270 = (0);
seq__32666 = G__33267;
chunk__32667 = G__33268;
count__32668 = G__33269;
i__32669 = G__33270;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32674 = arguments.length;
switch (G__32674) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32677 = arguments.length;
switch (G__32677) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32687 = arguments.length;
switch (G__32687) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33279 = arguments.length;
var i__4819__auto___33280 = (0);
while(true){
if((i__4819__auto___33280 < len__4818__auto___33279)){
args__4824__auto__.push((arguments[i__4819__auto___33280]));

var G__33281 = (i__4819__auto___33280 + (1));
i__4819__auto___33280 = G__33281;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32699_33282 = cljs.core.seq(nodes);
var chunk__32700_33283 = null;
var count__32701_33284 = (0);
var i__32702_33285 = (0);
while(true){
if((i__32702_33285 < count__32701_33284)){
var node_33286 = chunk__32700_33283.cljs$core$IIndexed$_nth$arity$2(null,i__32702_33285);
fragment.appendChild(shadow.dom._to_dom(node_33286));


var G__33287 = seq__32699_33282;
var G__33288 = chunk__32700_33283;
var G__33289 = count__32701_33284;
var G__33290 = (i__32702_33285 + (1));
seq__32699_33282 = G__33287;
chunk__32700_33283 = G__33288;
count__32701_33284 = G__33289;
i__32702_33285 = G__33290;
continue;
} else {
var temp__5753__auto___33291 = cljs.core.seq(seq__32699_33282);
if(temp__5753__auto___33291){
var seq__32699_33292__$1 = temp__5753__auto___33291;
if(cljs.core.chunked_seq_QMARK_(seq__32699_33292__$1)){
var c__4638__auto___33293 = cljs.core.chunk_first(seq__32699_33292__$1);
var G__33294 = cljs.core.chunk_rest(seq__32699_33292__$1);
var G__33295 = c__4638__auto___33293;
var G__33296 = cljs.core.count(c__4638__auto___33293);
var G__33297 = (0);
seq__32699_33282 = G__33294;
chunk__32700_33283 = G__33295;
count__32701_33284 = G__33296;
i__32702_33285 = G__33297;
continue;
} else {
var node_33298 = cljs.core.first(seq__32699_33292__$1);
fragment.appendChild(shadow.dom._to_dom(node_33298));


var G__33299 = cljs.core.next(seq__32699_33292__$1);
var G__33300 = null;
var G__33301 = (0);
var G__33302 = (0);
seq__32699_33282 = G__33299;
chunk__32700_33283 = G__33300;
count__32701_33284 = G__33301;
i__32702_33285 = G__33302;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32694){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32694));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32714_33303 = cljs.core.seq(scripts);
var chunk__32715_33304 = null;
var count__32716_33305 = (0);
var i__32717_33306 = (0);
while(true){
if((i__32717_33306 < count__32716_33305)){
var vec__32730_33307 = chunk__32715_33304.cljs$core$IIndexed$_nth$arity$2(null,i__32717_33306);
var script_tag_33308 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730_33307,(0),null);
var script_body_33309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32730_33307,(1),null);
eval(script_body_33309);


var G__33310 = seq__32714_33303;
var G__33311 = chunk__32715_33304;
var G__33312 = count__32716_33305;
var G__33313 = (i__32717_33306 + (1));
seq__32714_33303 = G__33310;
chunk__32715_33304 = G__33311;
count__32716_33305 = G__33312;
i__32717_33306 = G__33313;
continue;
} else {
var temp__5753__auto___33314 = cljs.core.seq(seq__32714_33303);
if(temp__5753__auto___33314){
var seq__32714_33318__$1 = temp__5753__auto___33314;
if(cljs.core.chunked_seq_QMARK_(seq__32714_33318__$1)){
var c__4638__auto___33319 = cljs.core.chunk_first(seq__32714_33318__$1);
var G__33320 = cljs.core.chunk_rest(seq__32714_33318__$1);
var G__33321 = c__4638__auto___33319;
var G__33322 = cljs.core.count(c__4638__auto___33319);
var G__33323 = (0);
seq__32714_33303 = G__33320;
chunk__32715_33304 = G__33321;
count__32716_33305 = G__33322;
i__32717_33306 = G__33323;
continue;
} else {
var vec__32737_33324 = cljs.core.first(seq__32714_33318__$1);
var script_tag_33325 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737_33324,(0),null);
var script_body_33326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32737_33324,(1),null);
eval(script_body_33326);


var G__33327 = cljs.core.next(seq__32714_33318__$1);
var G__33328 = null;
var G__33329 = (0);
var G__33330 = (0);
seq__32714_33303 = G__33327;
chunk__32715_33304 = G__33328;
count__32716_33305 = G__33329;
i__32717_33306 = G__33330;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32742){
var vec__32745 = p__32742;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32760 = arguments.length;
switch (G__32760) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32773 = cljs.core.seq(style_keys);
var chunk__32774 = null;
var count__32775 = (0);
var i__32776 = (0);
while(true){
if((i__32776 < count__32775)){
var it = chunk__32774.cljs$core$IIndexed$_nth$arity$2(null,i__32776);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33336 = seq__32773;
var G__33337 = chunk__32774;
var G__33338 = count__32775;
var G__33339 = (i__32776 + (1));
seq__32773 = G__33336;
chunk__32774 = G__33337;
count__32775 = G__33338;
i__32776 = G__33339;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32773);
if(temp__5753__auto__){
var seq__32773__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32773__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__32773__$1);
var G__33340 = cljs.core.chunk_rest(seq__32773__$1);
var G__33341 = c__4638__auto__;
var G__33342 = cljs.core.count(c__4638__auto__);
var G__33343 = (0);
seq__32773 = G__33340;
chunk__32774 = G__33341;
count__32775 = G__33342;
i__32776 = G__33343;
continue;
} else {
var it = cljs.core.first(seq__32773__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33344 = cljs.core.next(seq__32773__$1);
var G__33345 = null;
var G__33346 = (0);
var G__33347 = (0);
seq__32773 = G__33344;
chunk__32774 = G__33345;
count__32775 = G__33346;
i__32776 = G__33347;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k32781,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__32785 = k32781;
var G__32785__$1 = (((G__32785 instanceof cljs.core.Keyword))?G__32785.fqn:null);
switch (G__32785__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32781,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__32787){
var vec__32788 = p__32787;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32788,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32788,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32780){
var self__ = this;
var G__32780__$1 = this;
return (new cljs.core.RecordIter((0),G__32780__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32782,other32783){
var self__ = this;
var this32782__$1 = this;
return (((!((other32783 == null)))) && ((((this32782__$1.constructor === other32783.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32782__$1.x,other32783.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32782__$1.y,other32783.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32782__$1.__extmap,other32783.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k32781){
var self__ = this;
var this__4468__auto____$1 = this;
var G__32813 = k32781;
var G__32813__$1 = (((G__32813 instanceof cljs.core.Keyword))?G__32813.fqn:null);
switch (G__32813__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32781);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__32780){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__32819 = cljs.core.keyword_identical_QMARK_;
var expr__32820 = k__4470__auto__;
if(cljs.core.truth_((pred__32819.cljs$core$IFn$_invoke$arity$2 ? pred__32819.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__32820) : pred__32819.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__32820)))){
return (new shadow.dom.Coordinate(G__32780,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32819.cljs$core$IFn$_invoke$arity$2 ? pred__32819.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__32820) : pred__32819.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__32820)))){
return (new shadow.dom.Coordinate(self__.x,G__32780,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__32780),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__32780){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32780,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32784){
var extmap__4501__auto__ = (function (){var G__32830 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32784,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32784)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32830);
} else {
return G__32830;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32784),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32784),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k32836,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__32840 = k32836;
var G__32840__$1 = (((G__32840 instanceof cljs.core.Keyword))?G__32840.fqn:null);
switch (G__32840__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32836,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__32846){
var vec__32847 = p__32846;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32847,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32847,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32835){
var self__ = this;
var G__32835__$1 = this;
return (new cljs.core.RecordIter((0),G__32835__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32837,other32838){
var self__ = this;
var this32837__$1 = this;
return (((!((other32838 == null)))) && ((((this32837__$1.constructor === other32838.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32837__$1.w,other32838.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32837__$1.h,other32838.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32837__$1.__extmap,other32838.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k32836){
var self__ = this;
var this__4468__auto____$1 = this;
var G__32871 = k32836;
var G__32871__$1 = (((G__32871 instanceof cljs.core.Keyword))?G__32871.fqn:null);
switch (G__32871__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k32836);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__32835){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__32875 = cljs.core.keyword_identical_QMARK_;
var expr__32876 = k__4470__auto__;
if(cljs.core.truth_((pred__32875.cljs$core$IFn$_invoke$arity$2 ? pred__32875.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__32876) : pred__32875.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__32876)))){
return (new shadow.dom.Size(G__32835,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__32875.cljs$core$IFn$_invoke$arity$2 ? pred__32875.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__32876) : pred__32875.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__32876)))){
return (new shadow.dom.Size(self__.w,G__32835,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__32835),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__32835){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32835,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32839){
var extmap__4501__auto__ = (function (){var G__32886 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32839,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32839)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32886);
} else {
return G__32886;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32839),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32839),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__33369 = (i + (1));
var G__33370 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__33369;
ret = G__33370;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32912){
var vec__32913 = p__32912;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32913,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32913,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32921 = arguments.length;
switch (G__32921) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__33376 = ps;
var G__33377 = (i + (1));
el__$1 = G__33376;
i = G__33377;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__32946 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32946,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32946,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32946,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__32949_33381 = cljs.core.seq(props);
var chunk__32950_33382 = null;
var count__32951_33383 = (0);
var i__32952_33384 = (0);
while(true){
if((i__32952_33384 < count__32951_33383)){
var vec__32959_33385 = chunk__32950_33382.cljs$core$IIndexed$_nth$arity$2(null,i__32952_33384);
var k_33386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32959_33385,(0),null);
var v_33387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32959_33385,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_33386);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33386),v_33387);


var G__33388 = seq__32949_33381;
var G__33389 = chunk__32950_33382;
var G__33390 = count__32951_33383;
var G__33391 = (i__32952_33384 + (1));
seq__32949_33381 = G__33388;
chunk__32950_33382 = G__33389;
count__32951_33383 = G__33390;
i__32952_33384 = G__33391;
continue;
} else {
var temp__5753__auto___33392 = cljs.core.seq(seq__32949_33381);
if(temp__5753__auto___33392){
var seq__32949_33393__$1 = temp__5753__auto___33392;
if(cljs.core.chunked_seq_QMARK_(seq__32949_33393__$1)){
var c__4638__auto___33395 = cljs.core.chunk_first(seq__32949_33393__$1);
var G__33398 = cljs.core.chunk_rest(seq__32949_33393__$1);
var G__33399 = c__4638__auto___33395;
var G__33400 = cljs.core.count(c__4638__auto___33395);
var G__33401 = (0);
seq__32949_33381 = G__33398;
chunk__32950_33382 = G__33399;
count__32951_33383 = G__33400;
i__32952_33384 = G__33401;
continue;
} else {
var vec__32962_33402 = cljs.core.first(seq__32949_33393__$1);
var k_33403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962_33402,(0),null);
var v_33404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32962_33402,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_33403);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_33403),v_33404);


var G__33405 = cljs.core.next(seq__32949_33393__$1);
var G__33406 = null;
var G__33407 = (0);
var G__33408 = (0);
seq__32949_33381 = G__33405;
chunk__32950_33382 = G__33406;
count__32951_33383 = G__33407;
i__32952_33384 = G__33408;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__32969 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32969,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32969,(1),null);
var seq__32972_33409 = cljs.core.seq(node_children);
var chunk__32974_33410 = null;
var count__32975_33411 = (0);
var i__32976_33412 = (0);
while(true){
if((i__32976_33412 < count__32975_33411)){
var child_struct_33413 = chunk__32974_33410.cljs$core$IIndexed$_nth$arity$2(null,i__32976_33412);
if((!((child_struct_33413 == null)))){
if(typeof child_struct_33413 === 'string'){
var text_33414 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33414),child_struct_33413].join(''));
} else {
var children_33415 = shadow.dom.svg_node(child_struct_33413);
if(cljs.core.seq_QMARK_(children_33415)){
var seq__33001_33416 = cljs.core.seq(children_33415);
var chunk__33003_33417 = null;
var count__33004_33418 = (0);
var i__33005_33419 = (0);
while(true){
if((i__33005_33419 < count__33004_33418)){
var child_33420 = chunk__33003_33417.cljs$core$IIndexed$_nth$arity$2(null,i__33005_33419);
if(cljs.core.truth_(child_33420)){
node.appendChild(child_33420);


var G__33421 = seq__33001_33416;
var G__33422 = chunk__33003_33417;
var G__33423 = count__33004_33418;
var G__33424 = (i__33005_33419 + (1));
seq__33001_33416 = G__33421;
chunk__33003_33417 = G__33422;
count__33004_33418 = G__33423;
i__33005_33419 = G__33424;
continue;
} else {
var G__33425 = seq__33001_33416;
var G__33426 = chunk__33003_33417;
var G__33427 = count__33004_33418;
var G__33428 = (i__33005_33419 + (1));
seq__33001_33416 = G__33425;
chunk__33003_33417 = G__33426;
count__33004_33418 = G__33427;
i__33005_33419 = G__33428;
continue;
}
} else {
var temp__5753__auto___33432 = cljs.core.seq(seq__33001_33416);
if(temp__5753__auto___33432){
var seq__33001_33433__$1 = temp__5753__auto___33432;
if(cljs.core.chunked_seq_QMARK_(seq__33001_33433__$1)){
var c__4638__auto___33434 = cljs.core.chunk_first(seq__33001_33433__$1);
var G__33435 = cljs.core.chunk_rest(seq__33001_33433__$1);
var G__33436 = c__4638__auto___33434;
var G__33437 = cljs.core.count(c__4638__auto___33434);
var G__33438 = (0);
seq__33001_33416 = G__33435;
chunk__33003_33417 = G__33436;
count__33004_33418 = G__33437;
i__33005_33419 = G__33438;
continue;
} else {
var child_33439 = cljs.core.first(seq__33001_33433__$1);
if(cljs.core.truth_(child_33439)){
node.appendChild(child_33439);


var G__33440 = cljs.core.next(seq__33001_33433__$1);
var G__33441 = null;
var G__33442 = (0);
var G__33443 = (0);
seq__33001_33416 = G__33440;
chunk__33003_33417 = G__33441;
count__33004_33418 = G__33442;
i__33005_33419 = G__33443;
continue;
} else {
var G__33444 = cljs.core.next(seq__33001_33433__$1);
var G__33445 = null;
var G__33446 = (0);
var G__33447 = (0);
seq__33001_33416 = G__33444;
chunk__33003_33417 = G__33445;
count__33004_33418 = G__33446;
i__33005_33419 = G__33447;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33415);
}
}


var G__33448 = seq__32972_33409;
var G__33449 = chunk__32974_33410;
var G__33450 = count__32975_33411;
var G__33451 = (i__32976_33412 + (1));
seq__32972_33409 = G__33448;
chunk__32974_33410 = G__33449;
count__32975_33411 = G__33450;
i__32976_33412 = G__33451;
continue;
} else {
var G__33452 = seq__32972_33409;
var G__33453 = chunk__32974_33410;
var G__33454 = count__32975_33411;
var G__33455 = (i__32976_33412 + (1));
seq__32972_33409 = G__33452;
chunk__32974_33410 = G__33453;
count__32975_33411 = G__33454;
i__32976_33412 = G__33455;
continue;
}
} else {
var temp__5753__auto___33456 = cljs.core.seq(seq__32972_33409);
if(temp__5753__auto___33456){
var seq__32972_33457__$1 = temp__5753__auto___33456;
if(cljs.core.chunked_seq_QMARK_(seq__32972_33457__$1)){
var c__4638__auto___33458 = cljs.core.chunk_first(seq__32972_33457__$1);
var G__33459 = cljs.core.chunk_rest(seq__32972_33457__$1);
var G__33460 = c__4638__auto___33458;
var G__33461 = cljs.core.count(c__4638__auto___33458);
var G__33462 = (0);
seq__32972_33409 = G__33459;
chunk__32974_33410 = G__33460;
count__32975_33411 = G__33461;
i__32976_33412 = G__33462;
continue;
} else {
var child_struct_33463 = cljs.core.first(seq__32972_33457__$1);
if((!((child_struct_33463 == null)))){
if(typeof child_struct_33463 === 'string'){
var text_33464 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_33464),child_struct_33463].join(''));
} else {
var children_33465 = shadow.dom.svg_node(child_struct_33463);
if(cljs.core.seq_QMARK_(children_33465)){
var seq__33018_33466 = cljs.core.seq(children_33465);
var chunk__33020_33467 = null;
var count__33021_33468 = (0);
var i__33022_33469 = (0);
while(true){
if((i__33022_33469 < count__33021_33468)){
var child_33470 = chunk__33020_33467.cljs$core$IIndexed$_nth$arity$2(null,i__33022_33469);
if(cljs.core.truth_(child_33470)){
node.appendChild(child_33470);


var G__33471 = seq__33018_33466;
var G__33472 = chunk__33020_33467;
var G__33473 = count__33021_33468;
var G__33474 = (i__33022_33469 + (1));
seq__33018_33466 = G__33471;
chunk__33020_33467 = G__33472;
count__33021_33468 = G__33473;
i__33022_33469 = G__33474;
continue;
} else {
var G__33475 = seq__33018_33466;
var G__33476 = chunk__33020_33467;
var G__33477 = count__33021_33468;
var G__33478 = (i__33022_33469 + (1));
seq__33018_33466 = G__33475;
chunk__33020_33467 = G__33476;
count__33021_33468 = G__33477;
i__33022_33469 = G__33478;
continue;
}
} else {
var temp__5753__auto___33479__$1 = cljs.core.seq(seq__33018_33466);
if(temp__5753__auto___33479__$1){
var seq__33018_33480__$1 = temp__5753__auto___33479__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33018_33480__$1)){
var c__4638__auto___33481 = cljs.core.chunk_first(seq__33018_33480__$1);
var G__33482 = cljs.core.chunk_rest(seq__33018_33480__$1);
var G__33483 = c__4638__auto___33481;
var G__33484 = cljs.core.count(c__4638__auto___33481);
var G__33485 = (0);
seq__33018_33466 = G__33482;
chunk__33020_33467 = G__33483;
count__33021_33468 = G__33484;
i__33022_33469 = G__33485;
continue;
} else {
var child_33486 = cljs.core.first(seq__33018_33480__$1);
if(cljs.core.truth_(child_33486)){
node.appendChild(child_33486);


var G__33490 = cljs.core.next(seq__33018_33480__$1);
var G__33491 = null;
var G__33492 = (0);
var G__33493 = (0);
seq__33018_33466 = G__33490;
chunk__33020_33467 = G__33491;
count__33021_33468 = G__33492;
i__33022_33469 = G__33493;
continue;
} else {
var G__33494 = cljs.core.next(seq__33018_33480__$1);
var G__33495 = null;
var G__33496 = (0);
var G__33497 = (0);
seq__33018_33466 = G__33494;
chunk__33020_33467 = G__33495;
count__33021_33468 = G__33496;
i__33022_33469 = G__33497;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_33465);
}
}


var G__33498 = cljs.core.next(seq__32972_33457__$1);
var G__33499 = null;
var G__33500 = (0);
var G__33501 = (0);
seq__32972_33409 = G__33498;
chunk__32974_33410 = G__33499;
count__32975_33411 = G__33500;
i__32976_33412 = G__33501;
continue;
} else {
var G__33502 = cljs.core.next(seq__32972_33457__$1);
var G__33503 = null;
var G__33504 = (0);
var G__33505 = (0);
seq__32972_33409 = G__33502;
chunk__32974_33410 = G__33503;
count__32975_33411 = G__33504;
i__32976_33412 = G__33505;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___33506 = arguments.length;
var i__4819__auto___33507 = (0);
while(true){
if((i__4819__auto___33507 < len__4818__auto___33506)){
args__4824__auto__.push((arguments[i__4819__auto___33507]));

var G__33508 = (i__4819__auto___33507 + (1));
i__4819__auto___33507 = G__33508;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33043){
var G__33044 = cljs.core.first(seq33043);
var seq33043__$1 = cljs.core.next(seq33043);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33044,seq33043__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33049 = arguments.length;
switch (G__33049) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__30478__auto___33514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30479__auto__ = (function (){var switch__30246__auto__ = (function (state_33064){
var state_val_33065 = (state_33064[(1)]);
if((state_val_33065 === (1))){
var state_33064__$1 = state_33064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33064__$1,(2),once_or_cleanup);
} else {
if((state_val_33065 === (2))){
var inst_33061 = (state_33064[(2)]);
var inst_33062 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33064__$1 = (function (){var statearr_33069 = state_33064;
(statearr_33069[(7)] = inst_33061);

return statearr_33069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33064__$1,inst_33062);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30247__auto__ = null;
var shadow$dom$state_machine__30247__auto____0 = (function (){
var statearr_33071 = [null,null,null,null,null,null,null,null];
(statearr_33071[(0)] = shadow$dom$state_machine__30247__auto__);

(statearr_33071[(1)] = (1));

return statearr_33071;
});
var shadow$dom$state_machine__30247__auto____1 = (function (state_33064){
while(true){
var ret_value__30248__auto__ = (function (){try{while(true){
var result__30249__auto__ = switch__30246__auto__(state_33064);
if(cljs.core.keyword_identical_QMARK_(result__30249__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30249__auto__;
}
break;
}
}catch (e33073){var ex__30250__auto__ = e33073;
var statearr_33074_33515 = state_33064;
(statearr_33074_33515[(2)] = ex__30250__auto__);


if(cljs.core.seq((state_33064[(4)]))){
var statearr_33076_33516 = state_33064;
(statearr_33076_33516[(1)] = cljs.core.first((state_33064[(4)])));

} else {
throw ex__30250__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30248__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33517 = state_33064;
state_33064 = G__33517;
continue;
} else {
return ret_value__30248__auto__;
}
break;
}
});
shadow$dom$state_machine__30247__auto__ = function(state_33064){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30247__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30247__auto____1.call(this,state_33064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30247__auto____0;
shadow$dom$state_machine__30247__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30247__auto____1;
return shadow$dom$state_machine__30247__auto__;
})()
})();
var state__30480__auto__ = (function (){var statearr_33080 = f__30479__auto__();
(statearr_33080[(6)] = c__30478__auto___33514);

return statearr_33080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30480__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
