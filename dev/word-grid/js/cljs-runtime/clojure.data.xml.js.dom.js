goog.provide('clojure.data.xml.js.dom');
clojure.data.xml.js.dom.doc = (new DOMParser()).parseFromString("<d />","text/xml");
/**
 * Create a Text node
 */
clojure.data.xml.js.dom.text_node = (function clojure$data$xml$js$dom$text_node(s){
return clojure.data.xml.js.dom.doc.createTextNode(s);
});
/**
 * Create an xml element from a content collection and optional metadata
 */
clojure.data.xml.js.dom.element_STAR_ = (function clojure$data$xml$js$dom$element_STAR_(var_args){
var G__36786 = arguments.length;
switch (G__36786) {
case 4:
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$4 = (function (tag,attrs,content,meta){
var el = clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,content);
var x36791_36846 = el;
(x36791_36846.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x36791_36846.cljs$core$IMeta$_meta$arity$1 = (function (_){
var ___$1 = this;
return meta;
}));

(x36791_36846.cljs$core$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x36791_36846.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,meta__$1){
var ___$1 = this;
var x36797 = cljs.core.clone(el);
(x36797.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x36797.cljs$core$IMeta$_meta$arity$1 = (function (___$2){
var ___$3 = this;
return meta__$1;
}));

(x36797.cljs$core$IWithMeta$ = cljs.core.PROTOCOL_SENTINEL);

(x36797.cljs$core$IWithMeta$_with_meta$arity$2 = (function (___$2,meta__$2){
var ___$3 = this;
return cljs.core._with_meta(el,meta__$2);
}));

return x36797;
}));


return el;
}));

(clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (tag,attrs,content){
var el = clojure.data.xml.js.dom.doc.createElementNS(clojure.data.xml.name.qname_uri(tag),clojure.data.xml.name.qname_local(tag));
cljs.core.reduce_kv((function (_,k,v){
var uri = clojure.data.xml.name.qname_uri(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uri,"http://www.w3.org/2000/xmlns/")){
return el.setAttribute(["xmlns:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.name.qname_local(k))].join(''),v);
} else {
return el.setAttributeNS(uri,clojure.data.xml.name.qname_local(k),v);
}
}),null,attrs);

cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,n){
return el.appendChild(((typeof n === 'string')?clojure.data.xml.js.dom.text_node(n):n));
}),null,content);

return el;
}));

(clojure.data.xml.js.dom.element_STAR_.cljs$lang$maxFixedArity = 4);

/**
 * Create an xml Element from content varargs
 */
clojure.data.xml.js.dom.element = (function clojure$data$xml$js$dom$element(var_args){
var G__36809 = arguments.length;
switch (G__36809) {
case 1:
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___36848 = arguments.length;
var i__4819__auto___36849 = (0);
while(true){
if((i__4819__auto___36849 < len__4818__auto___36848)){
args_arr__4839__auto__.push((arguments[i__4819__auto___36849]));

var G__36850 = (i__4819__auto___36849 + (1));
i__4819__auto___36849 = G__36850;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,null,null);
}));

(clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2 = (function (tag,attrs){
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,null);
}));

(clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$variadic = (function (tag,attrs,content){
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(tag,attrs,content);
}));

/** @this {Function} */
(clojure.data.xml.js.dom.element.cljs$lang$applyTo = (function (seq36806){
var G__36807 = cljs.core.first(seq36806);
var seq36806__$1 = cljs.core.next(seq36806);
var G__36808 = cljs.core.first(seq36806__$1);
var seq36806__$2 = cljs.core.next(seq36806__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36807,G__36808,seq36806__$2);
}));

(clojure.data.xml.js.dom.element.cljs$lang$maxFixedArity = (2));

/**
 * Create a CData node
 */
clojure.data.xml.js.dom.cdata = (function clojure$data$xml$js$dom$cdata(content){
return clojure.data.xml.js.dom.doc.createCDATASection(content);
});
/**
 * Create a Comment node
 */
clojure.data.xml.js.dom.xml_comment = (function clojure$data$xml$js$dom$xml_comment(content){
return clojure.data.xml.js.dom.doc.createComment(content);
});
/**
 * Create a NodeList
 */
clojure.data.xml.js.dom.node_list = (function clojure$data$xml$js$dom$node_list(elements){
var f = clojure.data.xml.js.dom.doc.createDocumentFragment();
var seq__36813_36851 = cljs.core.seq(elements);
var chunk__36814_36852 = null;
var count__36815_36853 = (0);
var i__36816_36854 = (0);
while(true){
if((i__36816_36854 < count__36815_36853)){
var el_36855 = chunk__36814_36852.cljs$core$IIndexed$_nth$arity$2(null,i__36816_36854);
f.appendChild((clojure.data.xml.js.dom.element_node.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.dom.element_node.cljs$core$IFn$_invoke$arity$1(el_36855) : clojure.data.xml.js.dom.element_node.call(null,el_36855)));


var G__36856 = seq__36813_36851;
var G__36857 = chunk__36814_36852;
var G__36858 = count__36815_36853;
var G__36859 = (i__36816_36854 + (1));
seq__36813_36851 = G__36856;
chunk__36814_36852 = G__36857;
count__36815_36853 = G__36858;
i__36816_36854 = G__36859;
continue;
} else {
var temp__5753__auto___36860 = cljs.core.seq(seq__36813_36851);
if(temp__5753__auto___36860){
var seq__36813_36861__$1 = temp__5753__auto___36860;
if(cljs.core.chunked_seq_QMARK_(seq__36813_36861__$1)){
var c__4638__auto___36862 = cljs.core.chunk_first(seq__36813_36861__$1);
var G__36863 = cljs.core.chunk_rest(seq__36813_36861__$1);
var G__36864 = c__4638__auto___36862;
var G__36865 = cljs.core.count(c__4638__auto___36862);
var G__36866 = (0);
seq__36813_36851 = G__36863;
chunk__36814_36852 = G__36864;
count__36815_36853 = G__36865;
i__36816_36854 = G__36866;
continue;
} else {
var el_36867 = cljs.core.first(seq__36813_36861__$1);
f.appendChild((clojure.data.xml.js.dom.element_node.cljs$core$IFn$_invoke$arity$1 ? clojure.data.xml.js.dom.element_node.cljs$core$IFn$_invoke$arity$1(el_36867) : clojure.data.xml.js.dom.element_node.call(null,el_36867)));


var G__36868 = cljs.core.next(seq__36813_36861__$1);
var G__36869 = null;
var G__36870 = (0);
var G__36871 = (0);
seq__36813_36851 = G__36868;
chunk__36814_36852 = G__36869;
count__36815_36853 = G__36870;
i__36816_36854 = G__36871;
continue;
}
} else {
}
}
break;
}

return f.childNodes;
});
clojure.data.xml.js.dom.Text = cljs.core.type(clojure.data.xml.js.dom.text_node(""));
clojure.data.xml.js.dom.Element = cljs.core.type(clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198)));
clojure.data.xml.js.dom.NamedNodeMap = cljs.core.type(clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"e","e",1381269198)).attributes);
clojure.data.xml.js.dom.NodeList = cljs.core.type(clojure.data.xml.js.dom.node_list(cljs.core.PersistentVector.EMPTY));
clojure.data.xml.js.dom.Attr = cljs.core.type((clojure.data.xml.js.dom.element.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),"1"], null)).attributes[(0)]));
clojure.data.xml.js.dom.CData = cljs.core.type(clojure.data.xml.js.dom.cdata(""));
clojure.data.xml.js.dom.Comment = cljs.core.type(clojure.data.xml.js.dom.xml_comment(""));
/**
 * Coerce xml elements to dom nodes
 */
clojure.data.xml.js.dom.element_node = (function clojure$data$xml$js$dom$element_node(el){
if(typeof el === 'string'){
return clojure.data.xml.js.dom.text_node(el);
} else {
if((el instanceof clojure.data.xml.node.CData)){
return clojure.data.xml.js.dom.cdata(el.content);
} else {
if((el instanceof clojure.data.xml.node.Comment)){
return clojure.data.xml.js.dom.xml_comment(el.content);
} else {
if((el instanceof clojure.data.xml.js.dom.Element)){
return el;
} else {
if((el instanceof clojure.data.xml.js.dom.CData)){
return el;
} else {
if((el instanceof clojure.data.xml.js.dom.Comment)){
return el;
} else {
if((!((el.item == null)))){
return el;
} else {
if((el instanceof clojure.data.xml.js.dom.Text)){
return el;
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ILookup$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,el):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,el))){
return clojure.data.xml.js.dom.element_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.js.dom.element_node,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el)));
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ISequential$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,el):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,el))){
return clojure.data.xml.js.dom.node_list(el);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Cannot coerce",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),el], null));

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
clojure.data.xml.js.dom.dom_element_tag = (function clojure$data$xml$js$dom$dom_element_tag(el){
return clojure.data.xml.name.qname.cljs$core$IFn$_invoke$arity$2(el.namespaceURI,el.localName);
});
clojure.data.xml.js.dom.xmlns_attr_QMARK_ = (function clojure$data$xml$js$dom$xmlns_attr_QMARK_(a){
return (clojure.data.xml.name.xmlns_uri === a.namespaceURI);
});
clojure.data.xml.js.dom.remove_xmlns_attrs_xf = cljs.core.remove.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.js.dom.xmlns_attr_QMARK_);
clojure.data.xml.js.dom.remove_xmlns_attrs = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,clojure.data.xml.js.dom.remove_xmlns_attrs_xf);
clojure.data.xml.js.dom.filter_xmlns_attrs_xf = cljs.core.filter.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.js.dom.xmlns_attr_QMARK_);
clojure.data.xml.js.dom.filter_xmlns_attrs = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentArrayMap.EMPTY,clojure.data.xml.js.dom.filter_xmlns_attrs_xf);
clojure.data.xml.js.dom.dom_element_attrs = (function clojure$data$xml$js$dom$dom_element_attrs(var_args){
var G__36834 = arguments.length;
switch (G__36834) {
case 1:
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1 = (function (el){
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.js.dom.remove_xmlns_attrs_xf,el);
}));

(clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2 = (function (xf,el){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xf,cljs.core.completing.cljs$core$IFn$_invoke$arity$2((function (ta,attr_node){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ta,clojure.data.xml.js.dom.dom_element_tag(attr_node),attr_node.value);
}),cljs.core.persistent_BANG_),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(el));
}));

(clojure.data.xml.js.dom.dom_element_attrs.cljs$lang$maxFixedArity = 2);

clojure.data.xml.js.dom.node_list_vec = (function clojure$data$xml$js$dom$node_list_vec(nl){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.data.xml.js.dom.element_data),cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(nl));
});
clojure.data.xml.js.dom.as_node = (function clojure$data$xml$js$dom$as_node(n){
if((n instanceof clojure.data.xml.js.dom.Text)){
return n.nodeValue;
} else {
return n;
}
});
/**
 * Coerce xml elements to element maps / content vectors
 */
clojure.data.xml.js.dom.element_data = (function clojure$data$xml$js$dom$element_data(el){
if((el instanceof clojure.data.xml.js.dom.Comment)){
return clojure.data.xml.node.xml_comment(el.data);
} else {
if((el instanceof clojure.data.xml.js.dom.CData)){
return clojure.data.xml.node.cdata(el.data);
} else {
if((el instanceof clojure.data.xml.js.dom.Text)){
return el.nodeValue;
} else {
if((el instanceof clojure.data.xml.js.dom.Element)){
return clojure.data.xml.node.element_STAR_.cljs$core$IFn$_invoke$arity$4(clojure.data.xml.js.dom.dom_element_tag(el),clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1(el.attributes),clojure.data.xml.js.dom.node_list_vec(el.childNodes),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.data.xml","nss","clojure.data.xml/nss",-1153428346),clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.js.dom.filter_xmlns_attrs_xf,el.attributes)], null));
} else {
if(cljs.core.truth_(el.getNamedItemNS)){
return clojure.data.xml.js.dom.dom_element_attrs.cljs$core$IFn$_invoke$arity$1(el);
} else {
if((el instanceof clojure.data.xml.js.dom.NodeList)){
return clojure.data.xml.js.dom.node_list_vec(el);
} else {
if(typeof el === 'string'){
return el;
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ILookup$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,el):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ILookup,el))){
return el;
} else {
if((((!((el == null))))?(((((el.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === el.cljs$core$ISequential$))))?true:(((!el.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,el):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,el))){
return el;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Element cannot be converted to data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"element","element",1974019749),el], null));

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
clojure.data.xml.js.dom.extend_dom_as_data_BANG_ = (function clojure$data$xml$js$dom$extend_dom_as_data_BANG_(){
(clojure.data.xml.js.dom.Element.prototype.cljs$core$IMap$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Element.prototype.cljs$core$IMeta$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Element.prototype.cljs$core$IMeta$_meta$arity$1 = (function (el){
var el__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.data.xml","nss","clojure.data.xml/nss",-1153428346),clojure.data.xml.js.dom.filter_xmlns_attrs(el__$1.attributes)], null);
}));

(clojure.data.xml.js.dom.Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (el,k){
var el__$1 = this;
var G__36838 = k;
var G__36838__$1 = (((G__36838 instanceof cljs.core.Keyword))?G__36838.fqn:null);
switch (G__36838__$1) {
case "tag":
return clojure.data.xml.js.dom.dom_element_tag(el__$1);

break;
case "attrs":
return el__$1.attributes;

break;
case "content":
return el__$1.childNodes;

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("XML tag has no key",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"el","el",-1618201118),el__$1], null));

}
}));

(clojure.data.xml.js.dom.Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (el,k,nf){
var el__$1 = this;
var G__36839 = k;
var G__36839__$1 = (((G__36839 instanceof cljs.core.Keyword))?G__36839.fqn:null);
switch (G__36839__$1) {
case "tag":
return clojure.data.xml.js.dom.dom_element_tag(el__$1);

break;
case "attrs":
return clojure.data.xml.js.dom.remove_xmlns_attrs(el__$1.attributes);

break;
case "content":
return el__$1.childNodes;

break;
default:
return nf;

}
}));

(clojure.data.xml.js.dom.Element.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Element.prototype.cljs$core$ICounted$_count$arity$1 = (function (nm){
var nm__$1 = this;
return (3);
}));

(clojure.data.xml.js.dom.Element.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Element.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (el0,el1){
var el0__$1 = this;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el0__$1),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(el1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el0__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(el1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el0__$1),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(el1))))));

}));

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IMap$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nm){
var nm__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(nm__$1);
}));

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (attrs,attr){
var attrs__$1 = this;
var temp__5751__auto__ = attrs__$1.getNamedItemNS(clojure.data.xml.name.qname_uri(attr),clojure.data.xml.name.qname_local(attr));
if(cljs.core.truth_(temp__5751__auto__)){
var i = temp__5751__auto__;
return i.value;
} else {
return null;
}
}));

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (attrs,attr,not_found){
var attrs__$1 = this;
var temp__5751__auto__ = attrs__$1.getNamedItemNS(clojure.data.xml.name.qname_uri(attr),clojure.data.xml.name.qname_local(attr));
if(cljs.core.truth_(temp__5751__auto__)){
var i = temp__5751__auto__;
return i.value;
} else {
return not_found;
}
}));

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (nm){
var nm__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,attr){
if(clojure.data.xml.js.dom.xmlns_attr_QMARK_(attr)){
return acc;
} else {
return (acc + (1));
}
}),(0),nm__$1);
}));

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IKVReduce$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (nm,f,init){
var nm__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,attr){
if(clojure.data.xml.js.dom.xmlns_attr_QMARK_(attr)){
return acc;
} else {
var G__36840 = acc;
var G__36841 = clojure.data.xml.js.dom.dom_element_tag(attr);
var G__36842 = attr.value;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__36840,G__36841,G__36842) : f.call(null,G__36840,G__36841,G__36842));
}
}),init,nm__$1);
}));

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NamedNodeMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (nm0,nm1){
var nm0__$1 = this;
var or__4212__auto__ = (nm0__$1 === nm1);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = (cljs.core.count(nm0__$1) === cljs.core.count(nm1));
if(and__4210__auto__){
return cljs.core.reduce_kv((function (_,qn,v){
var or__4212__auto____$1 = (v === cljs.core.get.cljs$core$IFn$_invoke$arity$3(nm1,qn,""));
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return cljs.core.reduced(false);
}
}),true,nm0__$1);
} else {
return and__4210__auto__;
}
}
}));

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nl){
var nl__$1 = this;
return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.xml.js.dom.as_node,cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(nl__$1)));
}));

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nl){
var nl__$1 = this;
return nl__$1.length;
}));

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nl,n){
var nl__$1 = this;
return clojure.data.xml.js.dom.as_node((nl__$1[n]));
}));

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nl,n,nf){
var nl__$1 = this;
if(((((0) <= n)) && ((n < nl__$1.length)))){
return clojure.data.xml.js.dom.as_node((nl__$1[n]));
} else {
return nf;
}
}));

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.NodeList.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (nl0,nl1){
var nl0__$1 = this;
var or__4212__auto__ = (nl0__$1 === nl1);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var and__4210__auto__ = (cljs.core.count(nl0__$1) === cljs.core.count(nl1));
if(and__4210__auto__){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,n){
var or__4212__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nl0__$1,n),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nl1,n));
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return cljs.core.reduced(false);
}
}),true,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(nl0__$1)));
} else {
return and__4210__auto__;
}
}
}));

(clojure.data.xml.js.dom.Text.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Text.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (t0,t1){
var t0__$1 = this;
return (t0__$1.nodeValue === (((t1 instanceof clojure.data.xml.js.dom.Text))?t1.nodeValue:t1));
}));

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (attr){
var attr__$1 = this;
return cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1([cljs.core.key(attr__$1),cljs.core.key(attr__$1)]);
}));

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (attr){
var attr__$1 = this;
return clojure.data.xml.js.dom.dom_element_tag(attr__$1);
}));

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (attr){
var attr__$1 = this;
return attr__$1.value;
}));

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$ISequential$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var ___$1 = this;
return (2);
}));

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (attr,n){
var attr__$1 = this;
var G__36843 = n;
switch (G__36843) {
case (0):
return cljs.core.key(attr__$1);

break;
case (1):
return cljs.core.val(attr__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36843)].join('')));

}
}));

(clojure.data.xml.js.dom.Attr.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (attr,n,nf){
var attr__$1 = this;
var G__36844 = n;
switch (G__36844) {
case (0):
return clojure.data.xml.js.dom.dom_element_tag(attr__$1);

break;
case (1):
return attr__$1.value;

break;
default:
return nf;

}
}));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"Text","Text",-2054460644,null),clojure.data.xml.js.dom.Text,new cljs.core.Symbol(null,"Element","Element",1498489072,null),clojure.data.xml.js.dom.Element,new cljs.core.Symbol(null,"NamedNodeMap","NamedNodeMap",1757390858,null),clojure.data.xml.js.dom.NamedNodeMap,new cljs.core.Symbol(null,"NodeList","NodeList",-2117955024,null),clojure.data.xml.js.dom.NodeList], null);
});

//# sourceMappingURL=clojure.data.xml.js.dom.js.map
