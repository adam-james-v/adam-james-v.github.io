goog.provide('clojure.data.xml.js.name');
clojure.data.xml.js.name.parse_qname = cljs.core.memoize(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,/(?:\{([^}]+)\})?([^{]*)/));
clojure.data.xml.js.name.decode_uri = (function clojure$data$xml$js$name$decode_uri(ns){
return decodeURIComponent(ns);
});
clojure.data.xml.js.name.encode_uri = (function clojure$data$xml$js$name$encode_uri(uri){
return encodeURIComponent(uri);
});
goog.object.set(clojure.data.xml.protocols.AsQName,"string",true);

goog.object.set(clojure.data.xml.protocols.qname_local,"string",(function (s){
var vec__36505 = clojure.data.xml.js.name.parse_qname(s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36505,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36505,(1),null);
var local = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36505,(2),null);
return local;
}));

goog.object.set(clojure.data.xml.protocols.qname_uri,"string",(function (s){
var vec__36508 = clojure.data.xml.js.name.parse_qname(s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36508,(0),null);
var uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36508,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36508,(2),null);
return uri;
}));

//# sourceMappingURL=clojure.data.xml.js.name.js.map
