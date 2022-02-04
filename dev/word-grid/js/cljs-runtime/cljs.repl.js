goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35060){
var map__35061 = p__35060;
var map__35061__$1 = cljs.core.__destructure_map(map__35061);
var m = map__35061__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35061__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35061__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35064_35271 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35065_35272 = null;
var count__35066_35273 = (0);
var i__35067_35274 = (0);
while(true){
if((i__35067_35274 < count__35066_35273)){
var f_35275 = chunk__35065_35272.cljs$core$IIndexed$_nth$arity$2(null,i__35067_35274);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35275], 0));


var G__35276 = seq__35064_35271;
var G__35277 = chunk__35065_35272;
var G__35278 = count__35066_35273;
var G__35279 = (i__35067_35274 + (1));
seq__35064_35271 = G__35276;
chunk__35065_35272 = G__35277;
count__35066_35273 = G__35278;
i__35067_35274 = G__35279;
continue;
} else {
var temp__5753__auto___35280 = cljs.core.seq(seq__35064_35271);
if(temp__5753__auto___35280){
var seq__35064_35281__$1 = temp__5753__auto___35280;
if(cljs.core.chunked_seq_QMARK_(seq__35064_35281__$1)){
var c__4638__auto___35282 = cljs.core.chunk_first(seq__35064_35281__$1);
var G__35283 = cljs.core.chunk_rest(seq__35064_35281__$1);
var G__35284 = c__4638__auto___35282;
var G__35285 = cljs.core.count(c__4638__auto___35282);
var G__35286 = (0);
seq__35064_35271 = G__35283;
chunk__35065_35272 = G__35284;
count__35066_35273 = G__35285;
i__35067_35274 = G__35286;
continue;
} else {
var f_35287 = cljs.core.first(seq__35064_35281__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35287], 0));


var G__35288 = cljs.core.next(seq__35064_35281__$1);
var G__35289 = null;
var G__35290 = (0);
var G__35291 = (0);
seq__35064_35271 = G__35288;
chunk__35065_35272 = G__35289;
count__35066_35273 = G__35290;
i__35067_35274 = G__35291;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35292 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35292], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35292)))?cljs.core.second(arglists_35292):arglists_35292)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35071_35293 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35072_35294 = null;
var count__35073_35295 = (0);
var i__35074_35296 = (0);
while(true){
if((i__35074_35296 < count__35073_35295)){
var vec__35086_35297 = chunk__35072_35294.cljs$core$IIndexed$_nth$arity$2(null,i__35074_35296);
var name_35298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35297,(0),null);
var map__35089_35299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35086_35297,(1),null);
var map__35089_35300__$1 = cljs.core.__destructure_map(map__35089_35299);
var doc_35301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35089_35300__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35089_35300__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35298], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35302], 0));

if(cljs.core.truth_(doc_35301)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35301], 0));
} else {
}


var G__35304 = seq__35071_35293;
var G__35305 = chunk__35072_35294;
var G__35306 = count__35073_35295;
var G__35307 = (i__35074_35296 + (1));
seq__35071_35293 = G__35304;
chunk__35072_35294 = G__35305;
count__35073_35295 = G__35306;
i__35074_35296 = G__35307;
continue;
} else {
var temp__5753__auto___35308 = cljs.core.seq(seq__35071_35293);
if(temp__5753__auto___35308){
var seq__35071_35309__$1 = temp__5753__auto___35308;
if(cljs.core.chunked_seq_QMARK_(seq__35071_35309__$1)){
var c__4638__auto___35310 = cljs.core.chunk_first(seq__35071_35309__$1);
var G__35311 = cljs.core.chunk_rest(seq__35071_35309__$1);
var G__35312 = c__4638__auto___35310;
var G__35313 = cljs.core.count(c__4638__auto___35310);
var G__35314 = (0);
seq__35071_35293 = G__35311;
chunk__35072_35294 = G__35312;
count__35073_35295 = G__35313;
i__35074_35296 = G__35314;
continue;
} else {
var vec__35091_35315 = cljs.core.first(seq__35071_35309__$1);
var name_35316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091_35315,(0),null);
var map__35094_35317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35091_35315,(1),null);
var map__35094_35318__$1 = cljs.core.__destructure_map(map__35094_35317);
var doc_35319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35094_35318__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35320 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35094_35318__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35316], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35320], 0));

if(cljs.core.truth_(doc_35319)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35319], 0));
} else {
}


var G__35321 = cljs.core.next(seq__35071_35309__$1);
var G__35322 = null;
var G__35323 = (0);
var G__35324 = (0);
seq__35071_35293 = G__35321;
chunk__35072_35294 = G__35322;
count__35073_35295 = G__35323;
i__35074_35296 = G__35324;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35096 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35097 = null;
var count__35098 = (0);
var i__35099 = (0);
while(true){
if((i__35099 < count__35098)){
var role = chunk__35097.cljs$core$IIndexed$_nth$arity$2(null,i__35099);
var temp__5753__auto___35325__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35325__$1)){
var spec_35326 = temp__5753__auto___35325__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35326)], 0));
} else {
}


var G__35327 = seq__35096;
var G__35328 = chunk__35097;
var G__35329 = count__35098;
var G__35330 = (i__35099 + (1));
seq__35096 = G__35327;
chunk__35097 = G__35328;
count__35098 = G__35329;
i__35099 = G__35330;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35096);
if(temp__5753__auto____$1){
var seq__35096__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35096__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35096__$1);
var G__35331 = cljs.core.chunk_rest(seq__35096__$1);
var G__35332 = c__4638__auto__;
var G__35333 = cljs.core.count(c__4638__auto__);
var G__35334 = (0);
seq__35096 = G__35331;
chunk__35097 = G__35332;
count__35098 = G__35333;
i__35099 = G__35334;
continue;
} else {
var role = cljs.core.first(seq__35096__$1);
var temp__5753__auto___35335__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35335__$2)){
var spec_35336 = temp__5753__auto___35335__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35336)], 0));
} else {
}


var G__35337 = cljs.core.next(seq__35096__$1);
var G__35338 = null;
var G__35339 = (0);
var G__35340 = (0);
seq__35096 = G__35337;
chunk__35097 = G__35338;
count__35098 = G__35339;
i__35099 = G__35340;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35341 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35342 = cljs.core.ex_cause(t);
via = G__35341;
t = G__35342;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35189 = datafied_throwable;
var map__35189__$1 = cljs.core.__destructure_map(map__35189);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35189__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35189__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35189__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35190 = cljs.core.last(via);
var map__35190__$1 = cljs.core.__destructure_map(map__35190);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35190__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35195 = data;
var map__35195__$1 = cljs.core.__destructure_map(map__35195);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35195__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35195__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35195__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35196 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35196__$1 = cljs.core.__destructure_map(map__35196);
var top_data = map__35196__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35196__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35202 = phase;
var G__35202__$1 = (((G__35202 instanceof cljs.core.Keyword))?G__35202.fqn:null);
switch (G__35202__$1) {
case "read-source":
var map__35203 = data;
var map__35203__$1 = cljs.core.__destructure_map(map__35203);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35203__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35205 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35205__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35205,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35205);
var G__35205__$2 = (cljs.core.truth_((function (){var fexpr__35206 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35206.cljs$core$IFn$_invoke$arity$1 ? fexpr__35206.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35206.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35205__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35205__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35205__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35205__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35207 = top_data;
var G__35207__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35207,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35207);
var G__35207__$2 = (cljs.core.truth_((function (){var fexpr__35208 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35208.cljs$core$IFn$_invoke$arity$1 ? fexpr__35208.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35208.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35207__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35207__$1);
var G__35207__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35207__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35207__$2);
var G__35207__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35207__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35207__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35207__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35207__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35209 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35209,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35209,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35209,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35209,(3),null);
var G__35212 = top_data;
var G__35212__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35212,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35212);
var G__35212__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35212__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35212__$1);
var G__35212__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35212__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35212__$2);
var G__35212__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35212__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35212__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35212__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35212__$4;
}

break;
case "execution":
var vec__35213 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35213,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35213,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35213,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35213,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35181_SHARP_){
var or__4212__auto__ = (p1__35181_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__35217 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35217.cljs$core$IFn$_invoke$arity$1 ? fexpr__35217.cljs$core$IFn$_invoke$arity$1(p1__35181_SHARP_) : fexpr__35217.call(null,p1__35181_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__35218 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35218__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35218,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35218);
var G__35218__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35218__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35218__$1);
var G__35218__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35218__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35218__$2);
var G__35218__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35218__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35218__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35218__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35218__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35202__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35224){
var map__35225 = p__35224;
var map__35225__$1 = cljs.core.__destructure_map(map__35225);
var triage_data = map__35225__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35225__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35226 = phase;
var G__35226__$1 = (((G__35226 instanceof cljs.core.Keyword))?G__35226.fqn:null);
switch (G__35226__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35227 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35228 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35229 = loc;
var G__35230 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35231_35358 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35232_35359 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35233_35360 = true;
var _STAR_print_fn_STAR__temp_val__35234_35361 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35233_35360);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35234_35361);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35221_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35221_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35232_35359);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35231_35358);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35227,G__35228,G__35229,G__35230) : format.call(null,G__35227,G__35228,G__35229,G__35230));

break;
case "macroexpansion":
var G__35235 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35236 = cause_type;
var G__35237 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35238 = loc;
var G__35239 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35235,G__35236,G__35237,G__35238,G__35239) : format.call(null,G__35235,G__35236,G__35237,G__35238,G__35239));

break;
case "compile-syntax-check":
var G__35240 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35241 = cause_type;
var G__35242 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35243 = loc;
var G__35244 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35240,G__35241,G__35242,G__35243,G__35244) : format.call(null,G__35240,G__35241,G__35242,G__35243,G__35244));

break;
case "compilation":
var G__35249 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35250 = cause_type;
var G__35251 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35252 = loc;
var G__35253 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35249,G__35250,G__35251,G__35252,G__35253) : format.call(null,G__35249,G__35250,G__35251,G__35252,G__35253));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35254 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35255 = symbol;
var G__35256 = loc;
var G__35257 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35258_35370 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35259_35371 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35260_35372 = true;
var _STAR_print_fn_STAR__temp_val__35261_35373 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35260_35372);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35261_35373);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35222_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35222_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35259_35371);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35258_35370);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35254,G__35255,G__35256,G__35257) : format.call(null,G__35254,G__35255,G__35256,G__35257));
} else {
var G__35266 = "Execution error%s at %s(%s).\n%s\n";
var G__35267 = cause_type;
var G__35268 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35269 = loc;
var G__35270 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35266,G__35267,G__35268,G__35269,G__35270) : format.call(null,G__35266,G__35267,G__35268,G__35269,G__35270));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35226__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
