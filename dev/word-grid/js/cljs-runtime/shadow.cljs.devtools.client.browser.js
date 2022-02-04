goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___35864 = arguments.length;
var i__4819__auto___35865 = (0);
while(true){
if((i__4819__auto___35865 < len__4818__auto___35864)){
args__4824__auto__.push((arguments[i__4819__auto___35865]));

var G__35866 = (i__4819__auto___35865 + (1));
i__4819__auto___35865 = G__35866;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35735){
var G__35736 = cljs.core.first(seq35735);
var seq35735__$1 = cljs.core.next(seq35735);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35736,seq35735__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35737 = cljs.core.seq(sources);
var chunk__35738 = null;
var count__35739 = (0);
var i__35740 = (0);
while(true){
if((i__35740 < count__35739)){
var map__35748 = chunk__35738.cljs$core$IIndexed$_nth$arity$2(null,i__35740);
var map__35748__$1 = cljs.core.__destructure_map(map__35748);
var src = map__35748__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35748__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35749){var e_35867 = e35749;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35867);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35867.message)].join('')));
}

var G__35868 = seq__35737;
var G__35869 = chunk__35738;
var G__35870 = count__35739;
var G__35871 = (i__35740 + (1));
seq__35737 = G__35868;
chunk__35738 = G__35869;
count__35739 = G__35870;
i__35740 = G__35871;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35737);
if(temp__5753__auto__){
var seq__35737__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35737__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35737__$1);
var G__35872 = cljs.core.chunk_rest(seq__35737__$1);
var G__35873 = c__4638__auto__;
var G__35874 = cljs.core.count(c__4638__auto__);
var G__35875 = (0);
seq__35737 = G__35872;
chunk__35738 = G__35873;
count__35739 = G__35874;
i__35740 = G__35875;
continue;
} else {
var map__35752 = cljs.core.first(seq__35737__$1);
var map__35752__$1 = cljs.core.__destructure_map(map__35752);
var src = map__35752__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35752__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e35753){var e_35876 = e35753;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35876);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35876.message)].join('')));
}

var G__35877 = cljs.core.next(seq__35737__$1);
var G__35878 = null;
var G__35879 = (0);
var G__35880 = (0);
seq__35737 = G__35877;
chunk__35738 = G__35878;
count__35739 = G__35879;
i__35740 = G__35880;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35754 = cljs.core.seq(js_requires);
var chunk__35755 = null;
var count__35756 = (0);
var i__35757 = (0);
while(true){
if((i__35757 < count__35756)){
var js_ns = chunk__35755.cljs$core$IIndexed$_nth$arity$2(null,i__35757);
var require_str_35881 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35881);


var G__35882 = seq__35754;
var G__35883 = chunk__35755;
var G__35884 = count__35756;
var G__35885 = (i__35757 + (1));
seq__35754 = G__35882;
chunk__35755 = G__35883;
count__35756 = G__35884;
i__35757 = G__35885;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35754);
if(temp__5753__auto__){
var seq__35754__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35754__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35754__$1);
var G__35886 = cljs.core.chunk_rest(seq__35754__$1);
var G__35887 = c__4638__auto__;
var G__35888 = cljs.core.count(c__4638__auto__);
var G__35889 = (0);
seq__35754 = G__35886;
chunk__35755 = G__35887;
count__35756 = G__35888;
i__35757 = G__35889;
continue;
} else {
var js_ns = cljs.core.first(seq__35754__$1);
var require_str_35890 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35890);


var G__35891 = cljs.core.next(seq__35754__$1);
var G__35892 = null;
var G__35893 = (0);
var G__35894 = (0);
seq__35754 = G__35891;
chunk__35755 = G__35892;
count__35756 = G__35893;
i__35757 = G__35894;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__35759){
var map__35760 = p__35759;
var map__35760__$1 = cljs.core.__destructure_map(map__35760);
var msg = map__35760__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35760__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35761(s__35762){
return (new cljs.core.LazySeq(null,(function (){
var s__35762__$1 = s__35762;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35762__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__35769 = cljs.core.first(xs__6308__auto__);
var map__35769__$1 = cljs.core.__destructure_map(map__35769);
var src = map__35769__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35769__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__35762__$1,map__35769,map__35769__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35760,map__35760__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35761_$_iter__35763(s__35764){
return (new cljs.core.LazySeq(null,((function (s__35762__$1,map__35769,map__35769__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35760,map__35760__$1,msg,info,reload_info){
return (function (){
var s__35764__$1 = s__35764;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__35764__$1);
if(temp__5753__auto____$1){
var s__35764__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35764__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35764__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35766 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35765 = (0);
while(true){
if((i__35765 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__35765);
cljs.core.chunk_append(b__35766,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35895 = (i__35765 + (1));
i__35765 = G__35895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35766),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35761_$_iter__35763(cljs.core.chunk_rest(s__35764__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35766),null);
}
} else {
var warning = cljs.core.first(s__35764__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35761_$_iter__35763(cljs.core.rest(s__35764__$2)));
}
} else {
return null;
}
break;
}
});})(s__35762__$1,map__35769,map__35769__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35760,map__35760__$1,msg,info,reload_info))
,null,null));
});})(s__35762__$1,map__35769,map__35769__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__35760,map__35760__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35761(cljs.core.rest(s__35762__$1)));
} else {
var G__35896 = cljs.core.rest(s__35762__$1);
s__35762__$1 = G__35896;
continue;
}
} else {
var G__35897 = cljs.core.rest(s__35762__$1);
s__35762__$1 = G__35897;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__35770_35898 = cljs.core.seq(warnings);
var chunk__35771_35899 = null;
var count__35772_35900 = (0);
var i__35773_35901 = (0);
while(true){
if((i__35773_35901 < count__35772_35900)){
var map__35776_35902 = chunk__35771_35899.cljs$core$IIndexed$_nth$arity$2(null,i__35773_35901);
var map__35776_35903__$1 = cljs.core.__destructure_map(map__35776_35902);
var w_35904 = map__35776_35903__$1;
var msg_35905__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776_35903__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776_35903__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776_35903__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35776_35903__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35908)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35906),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35907),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35905__$1)].join(''));


var G__35909 = seq__35770_35898;
var G__35910 = chunk__35771_35899;
var G__35911 = count__35772_35900;
var G__35912 = (i__35773_35901 + (1));
seq__35770_35898 = G__35909;
chunk__35771_35899 = G__35910;
count__35772_35900 = G__35911;
i__35773_35901 = G__35912;
continue;
} else {
var temp__5753__auto___35913 = cljs.core.seq(seq__35770_35898);
if(temp__5753__auto___35913){
var seq__35770_35914__$1 = temp__5753__auto___35913;
if(cljs.core.chunked_seq_QMARK_(seq__35770_35914__$1)){
var c__4638__auto___35915 = cljs.core.chunk_first(seq__35770_35914__$1);
var G__35916 = cljs.core.chunk_rest(seq__35770_35914__$1);
var G__35917 = c__4638__auto___35915;
var G__35918 = cljs.core.count(c__4638__auto___35915);
var G__35919 = (0);
seq__35770_35898 = G__35916;
chunk__35771_35899 = G__35917;
count__35772_35900 = G__35918;
i__35773_35901 = G__35919;
continue;
} else {
var map__35777_35920 = cljs.core.first(seq__35770_35914__$1);
var map__35777_35921__$1 = cljs.core.__destructure_map(map__35777_35920);
var w_35922 = map__35777_35921__$1;
var msg_35923__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777_35921__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777_35921__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777_35921__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35926 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35777_35921__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35926)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35924),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35925),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35923__$1)].join(''));


var G__35927 = cljs.core.next(seq__35770_35914__$1);
var G__35928 = null;
var G__35929 = (0);
var G__35930 = (0);
seq__35770_35898 = G__35927;
chunk__35771_35899 = G__35928;
count__35772_35900 = G__35929;
i__35773_35901 = G__35930;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__35758_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35758_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__35778){
var map__35779 = p__35778;
var map__35779__$1 = cljs.core.__destructure_map(map__35779);
var msg = map__35779__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35779__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35780 = cljs.core.seq(updates);
var chunk__35782 = null;
var count__35783 = (0);
var i__35784 = (0);
while(true){
if((i__35784 < count__35783)){
var path = chunk__35782.cljs$core$IIndexed$_nth$arity$2(null,i__35784);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35814_35931 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35818_35932 = null;
var count__35819_35933 = (0);
var i__35820_35934 = (0);
while(true){
if((i__35820_35934 < count__35819_35933)){
var node_35935 = chunk__35818_35932.cljs$core$IIndexed$_nth$arity$2(null,i__35820_35934);
if(cljs.core.not(node_35935.shadow$old)){
var path_match_35938 = shadow.cljs.devtools.client.browser.match_paths(node_35935.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35938)){
var new_link_35939 = (function (){var G__35826 = node_35935.cloneNode(true);
G__35826.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35938),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35826;
})();
(node_35935.shadow$old = true);

(new_link_35939.onload = ((function (seq__35814_35931,chunk__35818_35932,count__35819_35933,i__35820_35934,seq__35780,chunk__35782,count__35783,i__35784,new_link_35939,path_match_35938,node_35935,path,map__35779,map__35779__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35935);
});})(seq__35814_35931,chunk__35818_35932,count__35819_35933,i__35820_35934,seq__35780,chunk__35782,count__35783,i__35784,new_link_35939,path_match_35938,node_35935,path,map__35779,map__35779__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35938], 0));

goog.dom.insertSiblingAfter(new_link_35939,node_35935);


var G__35942 = seq__35814_35931;
var G__35943 = chunk__35818_35932;
var G__35944 = count__35819_35933;
var G__35945 = (i__35820_35934 + (1));
seq__35814_35931 = G__35942;
chunk__35818_35932 = G__35943;
count__35819_35933 = G__35944;
i__35820_35934 = G__35945;
continue;
} else {
var G__35947 = seq__35814_35931;
var G__35948 = chunk__35818_35932;
var G__35949 = count__35819_35933;
var G__35950 = (i__35820_35934 + (1));
seq__35814_35931 = G__35947;
chunk__35818_35932 = G__35948;
count__35819_35933 = G__35949;
i__35820_35934 = G__35950;
continue;
}
} else {
var G__35951 = seq__35814_35931;
var G__35952 = chunk__35818_35932;
var G__35953 = count__35819_35933;
var G__35954 = (i__35820_35934 + (1));
seq__35814_35931 = G__35951;
chunk__35818_35932 = G__35952;
count__35819_35933 = G__35953;
i__35820_35934 = G__35954;
continue;
}
} else {
var temp__5753__auto___35955 = cljs.core.seq(seq__35814_35931);
if(temp__5753__auto___35955){
var seq__35814_35957__$1 = temp__5753__auto___35955;
if(cljs.core.chunked_seq_QMARK_(seq__35814_35957__$1)){
var c__4638__auto___35958 = cljs.core.chunk_first(seq__35814_35957__$1);
var G__35959 = cljs.core.chunk_rest(seq__35814_35957__$1);
var G__35960 = c__4638__auto___35958;
var G__35961 = cljs.core.count(c__4638__auto___35958);
var G__35962 = (0);
seq__35814_35931 = G__35959;
chunk__35818_35932 = G__35960;
count__35819_35933 = G__35961;
i__35820_35934 = G__35962;
continue;
} else {
var node_35963 = cljs.core.first(seq__35814_35957__$1);
if(cljs.core.not(node_35963.shadow$old)){
var path_match_35964 = shadow.cljs.devtools.client.browser.match_paths(node_35963.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35964)){
var new_link_35965 = (function (){var G__35827 = node_35963.cloneNode(true);
G__35827.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35964),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35827;
})();
(node_35963.shadow$old = true);

(new_link_35965.onload = ((function (seq__35814_35931,chunk__35818_35932,count__35819_35933,i__35820_35934,seq__35780,chunk__35782,count__35783,i__35784,new_link_35965,path_match_35964,node_35963,seq__35814_35957__$1,temp__5753__auto___35955,path,map__35779,map__35779__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35963);
});})(seq__35814_35931,chunk__35818_35932,count__35819_35933,i__35820_35934,seq__35780,chunk__35782,count__35783,i__35784,new_link_35965,path_match_35964,node_35963,seq__35814_35957__$1,temp__5753__auto___35955,path,map__35779,map__35779__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35964], 0));

goog.dom.insertSiblingAfter(new_link_35965,node_35963);


var G__35967 = cljs.core.next(seq__35814_35957__$1);
var G__35968 = null;
var G__35969 = (0);
var G__35970 = (0);
seq__35814_35931 = G__35967;
chunk__35818_35932 = G__35968;
count__35819_35933 = G__35969;
i__35820_35934 = G__35970;
continue;
} else {
var G__35973 = cljs.core.next(seq__35814_35957__$1);
var G__35974 = null;
var G__35975 = (0);
var G__35976 = (0);
seq__35814_35931 = G__35973;
chunk__35818_35932 = G__35974;
count__35819_35933 = G__35975;
i__35820_35934 = G__35976;
continue;
}
} else {
var G__35977 = cljs.core.next(seq__35814_35957__$1);
var G__35978 = null;
var G__35979 = (0);
var G__35980 = (0);
seq__35814_35931 = G__35977;
chunk__35818_35932 = G__35978;
count__35819_35933 = G__35979;
i__35820_35934 = G__35980;
continue;
}
}
} else {
}
}
break;
}


var G__35982 = seq__35780;
var G__35983 = chunk__35782;
var G__35984 = count__35783;
var G__35985 = (i__35784 + (1));
seq__35780 = G__35982;
chunk__35782 = G__35983;
count__35783 = G__35984;
i__35784 = G__35985;
continue;
} else {
var G__35986 = seq__35780;
var G__35987 = chunk__35782;
var G__35988 = count__35783;
var G__35989 = (i__35784 + (1));
seq__35780 = G__35986;
chunk__35782 = G__35987;
count__35783 = G__35988;
i__35784 = G__35989;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35780);
if(temp__5753__auto__){
var seq__35780__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35780__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__35780__$1);
var G__35990 = cljs.core.chunk_rest(seq__35780__$1);
var G__35991 = c__4638__auto__;
var G__35992 = cljs.core.count(c__4638__auto__);
var G__35993 = (0);
seq__35780 = G__35990;
chunk__35782 = G__35991;
count__35783 = G__35992;
i__35784 = G__35993;
continue;
} else {
var path = cljs.core.first(seq__35780__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35828_35994 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35832_35995 = null;
var count__35833_35996 = (0);
var i__35834_35997 = (0);
while(true){
if((i__35834_35997 < count__35833_35996)){
var node_35998 = chunk__35832_35995.cljs$core$IIndexed$_nth$arity$2(null,i__35834_35997);
if(cljs.core.not(node_35998.shadow$old)){
var path_match_36000 = shadow.cljs.devtools.client.browser.match_paths(node_35998.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36000)){
var new_link_36001 = (function (){var G__35840 = node_35998.cloneNode(true);
G__35840.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36000),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35840;
})();
(node_35998.shadow$old = true);

(new_link_36001.onload = ((function (seq__35828_35994,chunk__35832_35995,count__35833_35996,i__35834_35997,seq__35780,chunk__35782,count__35783,i__35784,new_link_36001,path_match_36000,node_35998,path,seq__35780__$1,temp__5753__auto__,map__35779,map__35779__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_35998);
});})(seq__35828_35994,chunk__35832_35995,count__35833_35996,i__35834_35997,seq__35780,chunk__35782,count__35783,i__35784,new_link_36001,path_match_36000,node_35998,path,seq__35780__$1,temp__5753__auto__,map__35779,map__35779__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36000], 0));

goog.dom.insertSiblingAfter(new_link_36001,node_35998);


var G__36006 = seq__35828_35994;
var G__36007 = chunk__35832_35995;
var G__36008 = count__35833_35996;
var G__36009 = (i__35834_35997 + (1));
seq__35828_35994 = G__36006;
chunk__35832_35995 = G__36007;
count__35833_35996 = G__36008;
i__35834_35997 = G__36009;
continue;
} else {
var G__36010 = seq__35828_35994;
var G__36011 = chunk__35832_35995;
var G__36012 = count__35833_35996;
var G__36013 = (i__35834_35997 + (1));
seq__35828_35994 = G__36010;
chunk__35832_35995 = G__36011;
count__35833_35996 = G__36012;
i__35834_35997 = G__36013;
continue;
}
} else {
var G__36014 = seq__35828_35994;
var G__36015 = chunk__35832_35995;
var G__36016 = count__35833_35996;
var G__36017 = (i__35834_35997 + (1));
seq__35828_35994 = G__36014;
chunk__35832_35995 = G__36015;
count__35833_35996 = G__36016;
i__35834_35997 = G__36017;
continue;
}
} else {
var temp__5753__auto___36018__$1 = cljs.core.seq(seq__35828_35994);
if(temp__5753__auto___36018__$1){
var seq__35828_36019__$1 = temp__5753__auto___36018__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35828_36019__$1)){
var c__4638__auto___36020 = cljs.core.chunk_first(seq__35828_36019__$1);
var G__36021 = cljs.core.chunk_rest(seq__35828_36019__$1);
var G__36022 = c__4638__auto___36020;
var G__36023 = cljs.core.count(c__4638__auto___36020);
var G__36024 = (0);
seq__35828_35994 = G__36021;
chunk__35832_35995 = G__36022;
count__35833_35996 = G__36023;
i__35834_35997 = G__36024;
continue;
} else {
var node_36025 = cljs.core.first(seq__35828_36019__$1);
if(cljs.core.not(node_36025.shadow$old)){
var path_match_36027 = shadow.cljs.devtools.client.browser.match_paths(node_36025.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36027)){
var new_link_36028 = (function (){var G__35841 = node_36025.cloneNode(true);
G__35841.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36027),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35841;
})();
(node_36025.shadow$old = true);

(new_link_36028.onload = ((function (seq__35828_35994,chunk__35832_35995,count__35833_35996,i__35834_35997,seq__35780,chunk__35782,count__35783,i__35784,new_link_36028,path_match_36027,node_36025,seq__35828_36019__$1,temp__5753__auto___36018__$1,path,seq__35780__$1,temp__5753__auto__,map__35779,map__35779__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_36025);
});})(seq__35828_35994,chunk__35832_35995,count__35833_35996,i__35834_35997,seq__35780,chunk__35782,count__35783,i__35784,new_link_36028,path_match_36027,node_36025,seq__35828_36019__$1,temp__5753__auto___36018__$1,path,seq__35780__$1,temp__5753__auto__,map__35779,map__35779__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36027], 0));

goog.dom.insertSiblingAfter(new_link_36028,node_36025);


var G__36031 = cljs.core.next(seq__35828_36019__$1);
var G__36032 = null;
var G__36033 = (0);
var G__36034 = (0);
seq__35828_35994 = G__36031;
chunk__35832_35995 = G__36032;
count__35833_35996 = G__36033;
i__35834_35997 = G__36034;
continue;
} else {
var G__36037 = cljs.core.next(seq__35828_36019__$1);
var G__36038 = null;
var G__36039 = (0);
var G__36040 = (0);
seq__35828_35994 = G__36037;
chunk__35832_35995 = G__36038;
count__35833_35996 = G__36039;
i__35834_35997 = G__36040;
continue;
}
} else {
var G__36041 = cljs.core.next(seq__35828_36019__$1);
var G__36042 = null;
var G__36043 = (0);
var G__36044 = (0);
seq__35828_35994 = G__36041;
chunk__35832_35995 = G__36042;
count__35833_35996 = G__36043;
i__35834_35997 = G__36044;
continue;
}
}
} else {
}
}
break;
}


var G__36045 = cljs.core.next(seq__35780__$1);
var G__36046 = null;
var G__36047 = (0);
var G__36048 = (0);
seq__35780 = G__36045;
chunk__35782 = G__36046;
count__35783 = G__36047;
i__35784 = G__36048;
continue;
} else {
var G__36049 = cljs.core.next(seq__35780__$1);
var G__36050 = null;
var G__36051 = (0);
var G__36052 = (0);
seq__35780 = G__36049;
chunk__35782 = G__36050;
count__35783 = G__36051;
i__35784 = G__36052;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__35842){
var map__35843 = p__35842;
var map__35843__$1 = cljs.core.__destructure_map(map__35843);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35843__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__35844){
var map__35845 = p__35844;
var map__35845__$1 = cljs.core.__destructure_map(map__35845);
var _ = map__35845__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35845__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__35846,done,error){
var map__35847 = p__35846;
var map__35847__$1 = cljs.core.__destructure_map(map__35847);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35847__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__35848,done,error){
var map__35849 = p__35848;
var map__35849__$1 = cljs.core.__destructure_map(map__35849);
var msg = map__35849__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35849__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35849__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35849__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35850){
var map__35851 = p__35850;
var map__35851__$1 = cljs.core.__destructure_map(map__35851);
var src = map__35851__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35851__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__35852 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__35852) : done.call(null,G__35852));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__35853){
var map__35854 = p__35853;
var map__35854__$1 = cljs.core.__destructure_map(map__35854);
var msg__$1 = map__35854__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35854__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e35855){var ex = e35855;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__35856){
var map__35857 = p__35856;
var map__35857__$1 = cljs.core.__destructure_map(map__35857);
var env = map__35857__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35857__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__35858){
var map__35859 = p__35858;
var map__35859__$1 = cljs.core.__destructure_map(map__35859);
var msg = map__35859__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35859__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__35860){
var map__35861 = p__35860;
var map__35861__$1 = cljs.core.__destructure_map(map__35861);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35861__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__35862){
var map__35863 = p__35862;
var map__35863__$1 = cljs.core.__destructure_map(map__35863);
var svc = map__35863__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35863__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
