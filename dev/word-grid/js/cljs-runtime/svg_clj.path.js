goog.provide('svg_clj.path');
/**
 * Wraps a path string `d` in a hiccup-style data structure.
 * 
 *   The path string is assumed to already be a valid path string. Users should use path generating functions provided in this namespace for constructing paths in the same manor as the other renderable SVG elements.
 * 
 *   More complex paths can be built by combining paths with the function `merge-paths`
 */
svg_clj.path.path = (function svg_clj$path$path(d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"d","d",1972142424),d,new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd"], null)], null);
});
svg_clj.path.any_vh_QMARK_ = (function svg_clj$path$any_vh_QMARK_(cmds){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["H",null,"V",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724),cmds)));
});
svg_clj.path.convert_vh = (function svg_clj$path$convert_vh(p__37586){
var vec__37587 = p__37586;
var pcmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37587,(0),null);
var ccmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37587,(1),null);
if(((cljs.core.not(svg_clj.path.any_vh_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcmd], null)))) && (svg_clj.path.any_vh_QMARK_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ccmd], null))))){
var vec__37591 = cljs.core.take_last((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(pcmd));
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37591,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37591,(1),null);
var map__37594 = ccmd;
var map__37594__$1 = cljs.core.__destructure_map(map__37594);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword(null,"input","input",556931961));
var coordsys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37594__$1,new cljs.core.Keyword(null,"coordsys","coordsys",328150001));
var xinput = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(command,"H")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coordsys,new cljs.core.Keyword(null,"abs","abs",-246026477)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(input),py], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(command,"V")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coordsys,new cljs.core.Keyword(null,"abs","abs",-246026477)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [px,cljs.core.first(input)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(command,"H")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coordsys,new cljs.core.Keyword(null,"rel","rel",1378823488)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(input),(0)], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(command,"V")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coordsys,new cljs.core.Keyword(null,"rel","rel",1378823488)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.first(input)], null):null))));
var ncmd = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ccmd,new cljs.core.Keyword(null,"command","command",-894540724),"L"),new cljs.core.Keyword(null,"input","input",556931961),xinput);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcmd,ncmd], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcmd,ccmd], null);
}
});
svg_clj.path.convert_first_vh_cmd = (function svg_clj$path$convert_first_vh_cmd(cmds){
var icmd = cljs.core.first(cmds);
return cljs.core.cons(icmd,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.convert_vh,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cmds))));
});
/**
 * Converts any v (vertical) or h (horizontal) commands into l (line) commands.
 *   This is necessary to allow rotation of a path element, because rotating an axis-aligned line will move it off the axis, making it unrepresentable with v or h commands, as they do not encode the x or y position values respectively.
 */
svg_clj.path.vh__GT_l = (function svg_clj$path$vh__GT_l(cmds){
var iters = cljs.core.iterate(svg_clj.path.convert_first_vh_cmd,cmds);
if(svg_clj.path.any_vh_QMARK_(cmds)){
return cljs.core.last(cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p__37599){
var vec__37600 = p__37599;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37600,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37600,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),iters))));
} else {
return cmds;
}
});
svg_clj.path.any_rel_QMARK_ = (function svg_clj$path$any_rel_QMARK_(cmds){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"coordsys","coordsys",328150001),cmds)));
});
svg_clj.path.convert_rel = (function svg_clj$path$convert_rel(p__37605){
var vec__37606 = p__37605;
var pcmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37606,(0),null);
var ccmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37606,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"coordsys","coordsys",328150001).cljs$core$IFn$_invoke$arity$1(pcmd))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rel","rel",1378823488),new cljs.core.Keyword(null,"coordsys","coordsys",328150001).cljs$core$IFn$_invoke$arity$1(ccmd))))){
var map__37609 = ccmd;
var map__37609__$1 = cljs.core.__destructure_map(map__37609);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37609__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37609__$1,new cljs.core.Keyword(null,"input","input",556931961));
var abs_cursor = cljs.core.vec(cljs.core.take_last((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(pcmd)));
var xinput = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(command,"A"))?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),input),svg_clj.utils.v_PLUS_(cljs.core.take_last((2),input),abs_cursor))):cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37604_SHARP_){
return svg_clj.utils.v_PLUS_(p1__37604_SHARP_,abs_cursor);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input)], 0))));
var ncmd = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ccmd,new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477)),new cljs.core.Keyword(null,"input","input",556931961),xinput),new cljs.core.Keyword(null,"cursor","cursor",1011937484),abs_cursor);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcmd,ncmd], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcmd,ccmd], null);
}
});
svg_clj.path.convert_first_rel = (function svg_clj$path$convert_first_rel(cmds){
var icmd = cljs.core.first(cmds);
return cljs.core.cons(icmd,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.convert_rel,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cmds))));
});
/**
 * Converts any relative coordinate commands into absoulte coordinate commands.
 */
svg_clj.path.rel__GT_abs = (function svg_clj$path$rel__GT_abs(cmds){
var iters = cljs.core.iterate(svg_clj.path.convert_first_rel,cmds);
if(svg_clj.path.any_rel_QMARK_(cmds)){
return cljs.core.last(cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p__37613){
var vec__37614 = p__37613;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37614,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37614,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),iters))));
} else {
return cmds;
}
});
svg_clj.path.any_t_QMARK_ = (function svg_clj$path$any_t_QMARK_(cmds){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["T",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724),cmds)));
});
svg_clj.path.convert_t = (function svg_clj$path$convert_t(p__37618){
var vec__37619 = p__37618;
var pcmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37619,(0),null);
var ccmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37619,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Q",new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(pcmd))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("T",new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(ccmd))))){
var vec__37622 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(pcmd));
var cpt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37622,(0),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37622,(1),null);
var ncpt = svg_clj.utils.rotate_pt_around_center(cpt,180.0,pt);
var map__37625 = ccmd;
var map__37625__$1 = cljs.core.__destructure_map(map__37625);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"input","input",556931961));
var coordsys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,new cljs.core.Keyword(null,"coordsys","coordsys",328150001));
var xinput = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ncpt,input));
var ncmd = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ccmd,new cljs.core.Keyword(null,"command","command",-894540724),"Q"),new cljs.core.Keyword(null,"input","input",556931961),xinput);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcmd,ncmd], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcmd,ccmd], null);
}
});
svg_clj.path.convert_first_t_cmd = (function svg_clj$path$convert_first_t_cmd(cmds){
var icmd = cljs.core.first(cmds);
return cljs.core.cons(icmd,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.convert_t,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cmds))));
});
/**
 * Converts any T curve commands into Q curve commands.
 */
svg_clj.path.t__GT_q = (function svg_clj$path$t__GT_q(cmds){
var iters = cljs.core.iterate(svg_clj.path.convert_first_t_cmd,cmds);
if(svg_clj.path.any_t_QMARK_(cmds)){
return cljs.core.last(cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p__37628){
var vec__37629 = p__37628;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37629,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37629,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),iters))));
} else {
return cmds;
}
});
svg_clj.path.any_s_QMARK_ = (function svg_clj$path$any_s_QMARK_(cmds){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["S",null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724),cmds)));
});
svg_clj.path.convert_s = (function svg_clj$path$convert_s(p__37634){
var vec__37635 = p__37634;
var pcmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37635,(0),null);
var ccmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37635,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("C",new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(pcmd))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("S",new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(ccmd))))){
var vec__37638 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(pcmd));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37638,(0),null);
var cpt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37638,(1),null);
var pt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37638,(2),null);
var ncpt = svg_clj.utils.rotate_pt_around_center(cpt,180.0,pt);
var map__37641 = ccmd;
var map__37641__$1 = cljs.core.__destructure_map(map__37641);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"input","input",556931961));
var coordsys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"coordsys","coordsys",328150001));
var xinput = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ncpt,input));
var ncmd = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ccmd,new cljs.core.Keyword(null,"command","command",-894540724),"C"),new cljs.core.Keyword(null,"input","input",556931961),xinput);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcmd,ncmd], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pcmd,ccmd], null);
}
});
svg_clj.path.convert_first_s_cmd = (function svg_clj$path$convert_first_s_cmd(cmds){
var icmd = cljs.core.first(cmds);
return cljs.core.cons(icmd,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.convert_s,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cmds))));
});
/**
 * Converts any S curve commands into C curve commands.
 */
svg_clj.path.s__GT_c = (function svg_clj$path$s__GT_c(cmds){
var iters = cljs.core.iterate(svg_clj.path.convert_first_s_cmd,cmds);
if(svg_clj.path.any_s_QMARK_(cmds)){
return cljs.core.last(cljs.core.last(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p__37646){
var vec__37647 = p__37646;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37647,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37647,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),iters))));
} else {
return cmds;
}
});
/**
 * Split the path string `ps` into a vector of path command strings.
 */
svg_clj.path.path_cmd_strs = (function svg_clj$path$path_cmd_strs(ps){
return (function (p1__37654_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.empty_QMARK_),p1__37654_SHARP_);
})((function (p1__37653_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,p1__37653_SHARP_);
})(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(ps,/\n/," "),/(?=[A-DF-Za-df-z])/)));
});
/**
 * Returns true if the path command string `cs` has a relative coordinate command.
 *   Relative coordinate commands are lowercase in the `d` property string.
 *   Absolute coordinate commands are uppercase in the `d` property string.
 */
svg_clj.path.relative_QMARK_ = (function svg_clj$path$relative_QMARK_(cs){
var csx = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(cs,/[a-df-z]/));
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cs,csx)));
});
/**
 * Returns the command string `cs`'s coord. system key.
 *   Key is either :rel or :abs.
 */
svg_clj.path.coord_sys_key = (function svg_clj$path$coord_sys_key(cs){
if(svg_clj.path.relative_QMARK_(cs)){
return new cljs.core.Keyword(null,"rel","rel",1378823488);
} else {
return new cljs.core.Keyword(null,"abs","abs",-246026477);
}
});
svg_clj.path.cmd_input = (function svg_clj$path$cmd_input(cs){
var i = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cs,/[A-DF-Za-df-z]/);
if(cljs.core.seq(cljs.core.rest(i))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.utils.s__GT_v,cljs.core.rest(i));
} else {
return null;
}
});
/**
 * Transforms a command string `cs` into a map.
 */
svg_clj.path.cmd_str__GT_cmd = (function svg_clj$path$cmd_str__GT_cmd(cs){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),clojure.string.upper_case(cljs.core.re_find(/[A-DF-Za-df-z]/,cs)),new cljs.core.Keyword(null,"coordsys","coordsys",328150001),svg_clj.path.coord_sys_key(cs),new cljs.core.Keyword(null,"input","input",556931961),svg_clj.path.cmd_input(cs)], null);
});
svg_clj.path.merge_cursor = (function svg_clj$path$merge_cursor(p__37658){
var vec__37659 = p__37658;
var pcmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37659,(0),null);
var ccmd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37659,(1),null);
var cursor = cljs.core.vec(cljs.core.take_last((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(pcmd)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ccmd,new cljs.core.Keyword(null,"cursor","cursor",1011937484),cursor);
});
/**
 * Turns path string `ps` into a list of its command maps.
 */
svg_clj.path.path_str__GT_cmds = (function svg_clj$path$path_str__GT_cmds(ps){
return svg_clj.path.s__GT_c(svg_clj.path.t__GT_q(svg_clj.path.rel__GT_abs(svg_clj.path.vh__GT_l(cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.merge_cursor,cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"M",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.cmd_str__GT_cmd,svg_clj.path.path_cmd_strs(ps)))))))));
});
svg_clj.path.cmd__GT_path_string = (function svg_clj$path$cmd__GT_path_string(p__37663){
var map__37664 = p__37663;
var map__37664__$1 = cljs.core.__destructure_map(map__37664);
var command = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37664__$1,new cljs.core.Keyword(null,"command","command",-894540724));
var coordsys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37664__$1,new cljs.core.Keyword(null,"coordsys","coordsys",328150001));
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37664__$1,new cljs.core.Keyword(null,"input","input",556931961));
var c = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(coordsys,new cljs.core.Keyword(null,"abs","abs",-246026477)))?command:clojure.string.lower_case(command));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",input)].join('');
});
/**
 * Generates a valid string for the path element `:d` property from a list of command maps `cmds`.
 */
svg_clj.path.cmds__GT_path_string = (function svg_clj$path$cmds__GT_path_string(cmds){
var start = cljs.core.first(cmds);
var cmds__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("M",new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(start)))?cmds:(function (){var new_start = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),"M",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_start], null),cmds);
})());
if((cljs.core.count(cmds__$1) > (1))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.cmd__GT_path_string,cmds__$1));
} else {
return null;
}
});
svg_clj.path.pt__GT_l = (function svg_clj$path$pt__GT_l(pt){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"L",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.vec(pt)], null);
});
svg_clj.path.pt__GT_m = (function svg_clj$path$pt__GT_m(pt){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"M",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.vec(pt)], null);
});
/**
 * Emits a path element with a bezier curve defined by the control points `a`, `b`, `c`, and sometimes `d`.
 * Quadratic curves use 3 control points, and cubic curves use 4 control points.
 */
svg_clj.path.bezier = (function svg_clj$path$bezier(var_args){
var G__37668 = arguments.length;
switch (G__37668) {
case 3:
return svg_clj.path.bezier.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return svg_clj.path.bezier.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(svg_clj.path.bezier.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var open = svg_clj.path.pt__GT_m(a);
return svg_clj.path.path(svg_clj.path.cmds__GT_path_string(cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"Q",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(b,c)], null),null,(1),null)),open))));
}));

(svg_clj.path.bezier.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var open = svg_clj.path.pt__GT_m(a);
return svg_clj.path.path(svg_clj.path.cmds__GT_path_string(cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"C",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(b,c,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d], 0))], null),null,(1),null)),open))));
}));

(svg_clj.path.bezier.cljs$lang$maxFixedArity = 4);

svg_clj.path.build_arc = (function svg_clj$path$build_arc(rx,ry,rot,laf,sw,a,b){
var open = svg_clj.path.pt__GT_m(a);
return svg_clj.path.path(svg_clj.path.cmds__GT_path_string(cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"A",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,ry,rot,laf,sw], null),b)], null),null,(1),null)),open))));
});
/**
 * Emits a path element with an arc starting at `pt-a` and ending at a point rotated by degrees, `deg`, around `ctr` in the counter-clockwise direction.
 */
svg_clj.path.arc = (function svg_clj$path$arc(pt_a,ctr,deg){
var r = svg_clj.utils.distance(pt_a,ctr);
var angle = (0);
var b = svg_clj.utils.rotate_pt_around_center(pt_a,deg,ctr);
var laf = (((deg <= (180)))?(0):(1));
return svg_clj.path.build_arc(r,r,angle,laf,(1),pt_a,b);
});
/**
 * Emits a circle using two arcs in a path element with radius `r` centered at the origin.
 */
svg_clj.path.circle = (function svg_clj$path$circle(r){
var open = svg_clj.path.pt__GT_m(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,(0)], null));
var close = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"Z",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),null], null);
return svg_clj.path.path(svg_clj.path.cmds__GT_path_string(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [open,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"A",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,r,(0),(1),(0),(0),r], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"A",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,r,(0),(1),(0),(- r),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"A",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,r,(0),(1),(0),(0),(- r)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"A",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,r,(0),(1),(0),r,(0)], null)], null),close], null)));
});
/**
 * Emits an ellipse element with x-axis radius `rx` and y-axis radius `ry` centered at the origin.
 */
svg_clj.path.ellipse = (function svg_clj$path$ellipse(rx,ry){
var open = svg_clj.path.pt__GT_m(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,(0)], null));
var close = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"Z",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),null], null);
return svg_clj.path.path(svg_clj.path.cmds__GT_path_string(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [open,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"A",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,ry,(0),(1),(0),(0),ry], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"A",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,ry,(0),(1),(0),(- rx),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"A",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,ry,(0),(1),(0),(0),(- ry)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"A",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,ry,(0),(1),(0),rx,(0)], null)], null),close], null)));
});
/**
 * Emits a line using a path element starting at 2d point `pt-a` and ending at 2d point `pt-b`.
 */
svg_clj.path.line = (function svg_clj$path$line(pt_a,pt_b){
return svg_clj.path.path(svg_clj.path.cmds__GT_path_string(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [svg_clj.path.pt__GT_m(pt_a),svg_clj.path.pt__GT_l(pt_b)], null)));
});
/**
 * Emits a polygon using a path element with 2d points from vector or list `pts`.
 *   Polygons use a closed path.
 */
svg_clj.path.polygon = (function svg_clj$path$polygon(pts){
var open = svg_clj.path.pt__GT_m(cljs.core.first(pts));
var close = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",-894540724),"Z",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),null], null);
return svg_clj.path.path(svg_clj.path.cmds__GT_path_string(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.pt__GT_l,cljs.core.rest(pts)),open)),close)));
});
/**
 * Emits a polyline using a path element with 2d points from vector or list `pts`.
 *   Polylines use an open path.
 */
svg_clj.path.polyline = (function svg_clj$path$polyline(pts){
var open = svg_clj.path.pt__GT_m(cljs.core.first(pts));
return svg_clj.path.path(svg_clj.path.cmds__GT_path_string(cljs.core.vec(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.pt__GT_l,cljs.core.rest(pts)),open))));
});
/**
 * Emits a rectangle using a path element of width `w` and height `h` centered at the origin.
 */
svg_clj.path.rect = (function svg_clj$path$rect(w,h){
var w2 = (w / 2.0);
var h2 = (h / 2.0);
return svg_clj.path.polygon(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- w2),(- h2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w2,(- h2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w2,h2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- w2),h2], null)], null));
});
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.path !== 'undefined') && (typeof svg_clj.path.cmd__GT_pts !== 'undefined')){
} else {
svg_clj.path.cmd__GT_pts = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37670 = cljs.core.get_global_hierarchy;
return (fexpr__37670.cljs$core$IFn$_invoke$arity$0 ? fexpr__37670.cljs$core$IFn$_invoke$arity$0() : fexpr__37670.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.path","cmd->pts"),new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.path.cmd__GT_pts.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37671){
var map__37672 = p__37671;
var map__37672__$1 = cljs.core.__destructure_map(map__37672);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37672__$1,new cljs.core.Keyword(null,"input","input",556931961));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input));
}));
svg_clj.path.cmd__GT_pts.cljs$core$IMultiFn$_add_method$arity$3(null,"A",(function (p__37674){
var map__37675 = p__37674;
var map__37675__$1 = cljs.core.__destructure_map(map__37675);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37675__$1,new cljs.core.Keyword(null,"input","input",556931961));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37675__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var vec__37676 = input;
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37676,(0),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37676,(1),null);
var deg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37676,(2),null);
var laf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37676,(3),null);
var sw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37676,(4),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37676,(5),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37676,(6),null);
var b = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
var ctr = svg_clj.utils.v_PLUS_(cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,(0)], null));
var sa = svg_clj.utils.angle_from_pts(cursor,ctr,b);
var angle = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),laf))?((360) - sa):sa);
var mids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37673_SHARP_){
return svg_clj.utils.rotate_pt_around_center(cursor,p1__37673_SHARP_,ctr);
}),cljs.core.rest(cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),angle,(90))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cursor,b], null);
}));
svg_clj.path.centroid = (function svg_clj$path$centroid(p__37679){
var vec__37680 = p__37679;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37680,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37680,(1),null);
var cmds = svg_clj.path.path_str__GT_cmds(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(props));
var pts = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.path.cmd__GT_pts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cmds], 0));
return svg_clj.utils.centroid_of_pts(cljs.core.vec(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,pts)));
});
svg_clj.path.bounds = (function svg_clj$path$bounds(p__37683){
var vec__37684 = p__37683;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37684,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37684,(1),null);
var cmds = svg_clj.path.path_str__GT_cmds(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(props));
var pts = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.path.cmd__GT_pts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cmds], 0));
return svg_clj.utils.bounds_of_pts(pts);
});
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.path !== 'undefined') && (typeof svg_clj.path.translate_path_command !== 'undefined')){
} else {
svg_clj.path.translate_path_command = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37687 = cljs.core.get_global_hierarchy;
return (fexpr__37687.cljs$core$IFn$_invoke$arity$0 ? fexpr__37687.cljs$core$IFn$_invoke$arity$0() : fexpr__37687.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.path","translate-path-command"),(function (cmd,_){
return new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cmd);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"M",(function (p__37688,p__37689){
var map__37690 = p__37688;
var map__37690__$1 = cljs.core.__destructure_map(map__37690);
var m = map__37690__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37690__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37691 = p__37689;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37691,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37691,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),input));
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"L",(function (p__37694,p__37695){
var map__37696 = p__37694;
var map__37696__$1 = cljs.core.__destructure_map(map__37696);
var m = map__37696__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37696__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37697 = p__37695;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37697,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37697,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),input));
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"H",(function (p__37700,p__37701){
var map__37702 = p__37700;
var map__37702__$1 = cljs.core.__destructure_map(map__37702);
var m = map__37702__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37702__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37703 = p__37701;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37703,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),input));
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"V",(function (p__37706,p__37707){
var map__37708 = p__37706;
var map__37708__$1 = cljs.core.__destructure_map(map__37708);
var m = map__37708__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37708__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37709 = p__37707;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37709,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [y], null),input));
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"C",(function (p__37712,p__37713){
var map__37714 = p__37712;
var map__37714__$1 = cljs.core.__destructure_map(map__37714);
var m = map__37714__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37714__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37715 = p__37713;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37715,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37715,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,x,y,x,y], null),input));
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"S",(function (p__37718,p__37719){
var map__37720 = p__37718;
var map__37720__$1 = cljs.core.__destructure_map(map__37720);
var m = map__37720__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37720__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37721 = p__37719;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37721,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37721,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,x,y], null),input));
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"Q",(function (p__37724,p__37725){
var map__37726 = p__37724;
var map__37726__$1 = cljs.core.__destructure_map(map__37726);
var m = map__37726__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37726__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37727 = p__37725;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37727,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37727,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,x,y], null),input));
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"T",(function (p__37730,p__37731){
var map__37732 = p__37730;
var map__37732__$1 = cljs.core.__destructure_map(map__37732);
var m = map__37732__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37732__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37733 = p__37731;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37733,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37733,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),input));
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"A",(function (p__37736,p__37737){
var map__37738 = p__37736;
var map__37738__$1 = cljs.core.__destructure_map(map__37738);
var m = map__37738__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37738__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37739 = p__37737;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37739,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37739,(1),null);
var vec__37742 = input;
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(0),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(1),null);
var xrot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(2),null);
var laf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(3),null);
var swf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(4),null);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(5),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37742,(6),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,ry,xrot,laf,swf,(x + ox),(y + oy)], null));
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"Z",(function (cmd,_){
return cmd;
}));
svg_clj.path.translate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (cmd,a){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmd,a], null);
}));
svg_clj.path.translate = (function svg_clj$path$translate(p__37746,p__37747){
var vec__37748 = p__37746;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37748,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37748,(1),null);
var vec__37751 = p__37747;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37751,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37751,(1),null);
var cmds = svg_clj.path.path_str__GT_cmds(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(props));
var xcmds = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37745_SHARP_){
return svg_clj.path.translate_path_command.cljs$core$IFn$_invoke$arity$2(p1__37745_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}),cmds);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"d","d",1972142424),svg_clj.path.cmds__GT_path_string(xcmds))], null);
});
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.path !== 'undefined') && (typeof svg_clj.path.rotate_path_command !== 'undefined')){
} else {
svg_clj.path.rotate_path_command = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37754 = cljs.core.get_global_hierarchy;
return (fexpr__37754.cljs$core$IFn$_invoke$arity$0 ? fexpr__37754.cljs$core$IFn$_invoke$arity$0() : fexpr__37754.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.path","rotate-path-command"),(function (cmd,_,___$1){
return new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cmd);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.path.rotate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"M",(function (p__37755,ctr,deg){
var map__37756 = p__37755;
var map__37756__$1 = cljs.core.__destructure_map(map__37756);
var m = map__37756__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37756__$1,new cljs.core.Keyword(null,"input","input",556931961));
var xpt = svg_clj.utils.v_PLUS_(svg_clj.utils.rotate_pt(svg_clj.utils.v_(input,ctr),deg),ctr);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),xpt);
}));
svg_clj.path.rotate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"L",(function (p__37757,ctr,deg){
var map__37758 = p__37757;
var map__37758__$1 = cljs.core.__destructure_map(map__37758);
var m = map__37758__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37758__$1,new cljs.core.Keyword(null,"input","input",556931961));
var xpt = svg_clj.utils.v_PLUS_(svg_clj.utils.rotate_pt(svg_clj.utils.v_(input,ctr),deg),ctr);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),xpt);
}));
svg_clj.path.rotate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"C",(function (p__37762,ctr,deg){
var map__37763 = p__37762;
var map__37763__$1 = cljs.core.__destructure_map(map__37763);
var m = map__37763__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37763__$1,new cljs.core.Keyword(null,"input","input",556931961));
var xinput = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37761_SHARP_){
return svg_clj.utils.v_PLUS_(p1__37761_SHARP_,ctr);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37760_SHARP_){
return svg_clj.utils.rotate_pt(p1__37760_SHARP_,deg);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37759_SHARP_){
return svg_clj.utils.v_(p1__37759_SHARP_,ctr);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input))))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),xinput);
}));
svg_clj.path.rotate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"S",(function (p__37767,ctr,deg){
var map__37768 = p__37767;
var map__37768__$1 = cljs.core.__destructure_map(map__37768);
var m = map__37768__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37768__$1,new cljs.core.Keyword(null,"input","input",556931961));
var xinput = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37766_SHARP_){
return svg_clj.utils.v_PLUS_(p1__37766_SHARP_,ctr);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37765_SHARP_){
return svg_clj.utils.rotate_pt(p1__37765_SHARP_,deg);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37764_SHARP_){
return svg_clj.utils.v_(p1__37764_SHARP_,ctr);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input))))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),xinput);
}));
svg_clj.path.rotate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"Q",(function (p__37772,ctr,deg){
var map__37773 = p__37772;
var map__37773__$1 = cljs.core.__destructure_map(map__37773);
var m = map__37773__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37773__$1,new cljs.core.Keyword(null,"input","input",556931961));
var xinput = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37771_SHARP_){
return svg_clj.utils.v_PLUS_(p1__37771_SHARP_,ctr);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37770_SHARP_){
return svg_clj.utils.rotate_pt(p1__37770_SHARP_,deg);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37769_SHARP_){
return svg_clj.utils.v_(p1__37769_SHARP_,ctr);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input))))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),xinput);
}));
svg_clj.path.rotate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"T",(function (p__37774,ctr,deg){
var map__37775 = p__37774;
var map__37775__$1 = cljs.core.__destructure_map(map__37775);
var m = map__37775__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37775__$1,new cljs.core.Keyword(null,"input","input",556931961));
var xpt = svg_clj.utils.v_PLUS_(svg_clj.utils.rotate_pt(svg_clj.utils.v_(input,ctr),deg),ctr);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),xpt);
}));
svg_clj.path.rotate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"A",(function (p__37776,ctr,deg){
var map__37777 = p__37776;
var map__37777__$1 = cljs.core.__destructure_map(map__37777);
var m = map__37777__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37777__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37778 = input;
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37778,(0),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37778,(1),null);
var xrot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37778,(2),null);
var laf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37778,(3),null);
var swf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37778,(4),null);
var ox = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37778,(5),null);
var oy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37778,(6),null);
var vec__37781 = svg_clj.utils.v_PLUS_(svg_clj.utils.rotate_pt(svg_clj.utils.v_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ox,oy], null),ctr),deg),ctr);
var nx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37781,(0),null);
var ny = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37781,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [rx,ry,(xrot + deg),laf,swf,nx,ny], null));
}));
svg_clj.path.rotate_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"Z",(function (cmd,_,___$1){
return cmd;
}));
svg_clj.path.rotate = (function svg_clj$path$rotate(p__37785,deg){
var vec__37786 = p__37785;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37786,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37786,(1),null);
var ctr = svg_clj.path.centroid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null));
var cmds = svg_clj.path.path_str__GT_cmds(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(props));
var xcmds = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37784_SHARP_){
return svg_clj.path.rotate_path_command.cljs$core$IFn$_invoke$arity$3(p1__37784_SHARP_,ctr,deg);
}),cmds);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"d","d",1972142424),svg_clj.path.cmds__GT_path_string(xcmds))], null);
});
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.path !== 'undefined') && (typeof svg_clj.path.scale_path_command !== 'undefined')){
} else {
svg_clj.path.scale_path_command = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37789 = cljs.core.get_global_hierarchy;
return (fexpr__37789.cljs$core$IFn$_invoke$arity$0 ? fexpr__37789.cljs$core$IFn$_invoke$arity$0() : fexpr__37789.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.path","scale-path-command"),(function (cmd,_,___$1){
return new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cmd);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.path.scale_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__37791,p__37792,ctr){
var map__37793 = p__37791;
var map__37793__$1 = cljs.core.__destructure_map(map__37793);
var m = map__37793__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37793__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37794 = p__37792;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37794,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37794,(1),null);
var pts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input));
var xpts = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37790_SHARP_){
return svg_clj.utils.scale_pt_from_center(p1__37790_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),ctr);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pts], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.vec(xpts));
}));
svg_clj.path.scale_path_command.cljs$core$IMultiFn$_add_method$arity$3(null,"A",(function (p__37798,p__37799,ctr){
var map__37800 = p__37798;
var map__37800__$1 = cljs.core.__destructure_map(map__37800);
var m = map__37800__$1;
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37800__$1,new cljs.core.Keyword(null,"input","input",556931961));
var vec__37801 = p__37799;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(1),null);
var pts = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.take_last((2),input)], null);
var xpts = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37797_SHARP_){
return svg_clj.utils.scale_pt_from_center(p1__37797_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),ctr);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pts], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.vec(xpts));
}));
svg_clj.path.scale = (function svg_clj$path$scale(p__37805,p__37806){
var vec__37807 = p__37805;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37807,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37807,(1),null);
var vec__37810 = p__37806;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37810,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37810,(1),null);
var ctr = svg_clj.path.centroid(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null));
var cmds = svg_clj.path.path_str__GT_cmds(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(props));
var xcmds = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37804_SHARP_){
return svg_clj.path.scale_path_command.cljs$core$IFn$_invoke$arity$3(p1__37804_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sx,sy], null),ctr);
}),cmds);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"d","d",1972142424),svg_clj.path.cmds__GT_path_string(xcmds))], null);
});
/**
 * Splits a single path element containing multiple disjoint paths into a group of paths containing only one path.
 */
svg_clj.path.split_path = (function svg_clj$path$split_path(p__37814){
var vec__37815 = p__37814;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37815,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37815,(1),null);
var ps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(props),/(?=M)/));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37813_SHARP_){
return cljs.core.assoc_in(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,props], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"d","d",1972142424)], null),p1__37813_SHARP_);
}),ps);
});
/**
 * Breaks a path element into its constituent curves.
 *   Optional arg `break-polys?` is `false` by default, which treats sequences of line segments as polylines.
 *   Setting `break-polys?` to `true` treats sequences of line segments as individual elements.
 */
svg_clj.path.explode_path = (function svg_clj$path$explode_path(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38018 = arguments.length;
var i__4819__auto___38019 = (0);
while(true){
if((i__4819__auto___38019 < len__4818__auto___38018)){
args__4824__auto__.push((arguments[i__4819__auto___38019]));

var G__38022 = (i__4819__auto___38019 + (1));
i__4819__auto___38019 = G__38022;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return svg_clj.path.explode_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(svg_clj.path.explode_path.cljs$core$IFn$_invoke$arity$variadic = (function (p__37820,p__37821){
var vec__37822 = p__37820;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37822,(0),null);
var map__37825 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37822,(1),null);
var map__37825__$1 = cljs.core.__destructure_map(map__37825);
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37825__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var map__37826 = p__37821;
var map__37826__$1 = cljs.core.__destructure_map(map__37826);
var break_polys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37826__$1,new cljs.core.Keyword(null,"break-polys?","break-polys?",28766604));
var break_fn = (cljs.core.truth_(break_polys_QMARK_)?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.partition,(1)):cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.partition_by,new cljs.core.Keyword(null,"command","command",-894540724)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.path,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.cmds__GT_path_string,break_fn(svg_clj.path.vh__GT_l(svg_clj.path.path_str__GT_cmds(d))))));
}));

(svg_clj.path.explode_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(svg_clj.path.explode_path.cljs$lang$applyTo = (function (seq37818){
var G__37819 = cljs.core.first(seq37818);
var seq37818__$1 = cljs.core.next(seq37818);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37819,seq37818__$1);
}));

svg_clj.path.bezier_cmd_pts = (function svg_clj$path$bezier_cmd_pts(p__37827){
var map__37828 = p__37827;
var map__37828__$1 = cljs.core.__destructure_map(map__37828);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37828__$1,new cljs.core.Keyword(null,"input","input",556931961));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37828__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var control_pts = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cursor,input));
var c = svg_clj.parametric.bezier(control_pts);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(c,cljs.core.range.cljs$core$IFn$_invoke$arity$3((0),1.05,0.05));
});
svg_clj.path.cmds__GT_elements = (function svg_clj$path$cmds__GT_elements(cmds){
var start = cljs.core.first(cmds);
var cmds__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("M",new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(start)))?cmds:(function (){var new_start = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"command","command",-894540724),"M",new cljs.core.Keyword(null,"coordsys","coordsys",328150001),new cljs.core.Keyword(null,"abs","abs",-246026477),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"cursor","cursor",1011937484).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)], null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_start], null),cmds);
})());
if((cljs.core.count(cmds__$1) > (1))){
var cs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.rest(cmds__$1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cmds__$1),(2))) && (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Z",null], null), null),cs))))){
return null;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cmds__$1),(6))) && (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Z",null,"A",null], null), null),cs))))){
var eps = 1.0E-5;
var vec__37829 = cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.second(cmds__$1)));
var rx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37829,(0),null);
var ry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37829,(1),null);
var vec__37832 = cljs.core.take_last((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.second(cmds__$1)));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37832,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37832,(1),null);
var vec__37835 = svg_clj.utils.v_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,1.0], null),svg_clj.utils.centroid_of_pts(cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.path.cmd__GT_pts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cmds__$1], 0)))));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37835,(1),null);
if((Math.abs((rx - ry)) < eps)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"r","r",-471384190),rx], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),cx,new cljs.core.Keyword(null,"cy","cy",755331060),cy,new cljs.core.Keyword(null,"rx","rx",1627208482),rx,new cljs.core.Keyword(null,"ry","ry",-334598563),ry], null)], null);
}
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cmds__$1),(2))) && (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["L",null], null), null),cs))))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.line,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),cmds__$1));
} else {
if((((cljs.core.count(cmds__$1) > (2))) && (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["L",null], null), null),cs))))){
return svg_clj.elements.polyline(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),cmds__$1));
} else {
if((((cljs.core.count(cmds__$1) > (2))) && (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["L",null,"Z",null], null), null),cs))))){
return svg_clj.elements.polygon(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"input","input",556931961),cmds__$1));
} else {
if(((cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["Q",null], null), null),cs))) || (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["C",null], null), null),cs))))){
var pts = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.path.bezier_cmd_pts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(cmds__$1)], 0));
return svg_clj.elements.polyline(pts);
} else {
if(((cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Q",null,"Z",null], null), null),cs))) || (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["Z",null,"C",null], null), null),cs))))){
var pts = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.path.bezier_cmd_pts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.rest(cmds__$1))], 0));
return svg_clj.elements.polygon(pts);
} else {
return svg_clj.path.path(svg_clj.path.cmds__GT_path_string(cmds__$1));

}
}
}
}
}
}
}
} else {
return null;
}
});
/**
 * Remove cmdb if it is an M command with the same position as the last input of cmda.
 */
svg_clj.path.clean_m_cmds_threshold = (function svg_clj$path$clean_m_cmds_threshold(p__37838){
var vec__37839 = p__37838;
var cmda = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(0),null);
var cmdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37839,(1),null);
var merge_dist = 1.0;
var vec__37842 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take_last,(2)),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmda,cmdb], null));
var pa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37842,(0),null);
var pb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37842,(1),null);
var vec__37845 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmda,cmdb], null));
var ca = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37845,(0),null);
var cb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37845,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("M",ca)){
return cljs.core.PersistentVector.EMPTY;
} else {
if((((svg_clj.utils.distance(pa,pb) < merge_dist)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("M",cb)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmda], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmda,cmdb], null);

}
}
});
/**
 * Remove cmdb if it is an M command with the same position as the last input of cmda.
 */
svg_clj.path.clean_m_cmds = (function svg_clj$path$clean_m_cmds(p__37848){
var vec__37849 = p__37848;
var cmda = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37849,(0),null);
var cmdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37849,(1),null);
var vec__37852 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take_last,(2)),new cljs.core.Keyword(null,"input","input",556931961)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmda,cmdb], null));
var pa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(0),null);
var pb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37852,(1),null);
var vec__37855 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmda,cmdb], null));
var ca = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37855,(0),null);
var cb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37855,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("M",ca)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pa,pb)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("M",cb)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmda], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cmda,cmdb], null);

}
}
});
/**
 * Merges a list of path elements together, keeping props from last path in the list.
 */
svg_clj.path.merge_paths = (function svg_clj$path$merge_paths(var_args){
var args__4824__auto__ = [];
var len__4818__auto___38061 = arguments.length;
var i__4819__auto___38062 = (0);
while(true){
if((i__4819__auto___38062 < len__4818__auto___38061)){
args__4824__auto__.push((arguments[i__4819__auto___38062]));

var G__38063 = (i__4819__auto___38062 + (1));
i__4819__auto___38062 = G__38063;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return svg_clj.path.merge_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(svg_clj.path.merge_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var vec__37860 = cljs.core.last(paths);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37860,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37860,(1),null);
var cmds = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37858_SHARP_){
return svg_clj.path.path_str__GT_cmds(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__37858_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"d","d",1972142424)], null)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([paths], 0));
var xf_cmds = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(svg_clj.path.clean_m_cmds_threshold,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.rest(cmds))], 0))),cljs.core.first(cmds));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"d","d",1972142424),svg_clj.path.cmds__GT_path_string(xf_cmds))], null);
}));

(svg_clj.path.merge_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(svg_clj.path.merge_paths.cljs$lang$applyTo = (function (seq37859){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37859));
}));

svg_clj.path.get_subpaths = (function svg_clj$path$get_subpaths(cmds){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37864_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__37864_SHARP_);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2((function (p1__37863_SHARP_){
return cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["M",null], null), null))(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__37863_SHARP_));
}),cmds)));
});
svg_clj.path.subpath__GT_elements = (function svg_clj$path$subpath__GT_elements(cmds){
var split_path = cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724),cmds);
var cmd_check = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37865_SHARP_){
return new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__37865_SHARP_));
}),split_path));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd_check,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["L",null,"M",null,"Z",null], null), null))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd_check,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["M",null,"Z",null,"A",null], null), null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cmd_check,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["L",null,"M",null], null), null))))))){
return svg_clj.path.cmds__GT_elements(cmds);
} else {
var subpath = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.cmds__GT_elements,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37866_SHARP_){
var G__37869 = new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__37866_SHARP_);
var fexpr__37868 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["M",null,"Z",null], null), null);
return (fexpr__37868.cljs$core$IFn$_invoke$arity$1 ? fexpr__37868.cljs$core$IFn$_invoke$arity$1(G__37869) : fexpr__37868.call(null,G__37869));
}),cmds))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.elements.g,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(subpath),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Z",new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(cljs.core.last(cmds))))?(function (){var vec__37870 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37867_SHARP_){
return cljs.core.take_last((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(p1__37867_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cmds),cljs.core.last(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cmds))], null));
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37870,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37870,(1),null);
return svg_clj.elements.line(s,e);
})():null)));
}
});
svg_clj.path.path__GT_elements = (function svg_clj$path$path__GT_elements(p__37873){
var vec__37874 = p__37873;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(0),null);
var map__37877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37874,(1),null);
var map__37877__$1 = cljs.core.__destructure_map(map__37877);
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37877__$1,new cljs.core.Keyword(null,"d","d",1972142424));
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.subpath__GT_elements,svg_clj.path.get_subpaths(svg_clj.path.path_str__GT_cmds(d))));
});
if((typeof svg_clj !== 'undefined') && (typeof svg_clj.path !== 'undefined') && (typeof svg_clj.path.element__GT_path !== 'undefined')){
} else {
svg_clj.path.element__GT_path = (function (){var method_table__4701__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4702__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4703__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4704__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4705__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__37878 = cljs.core.get_global_hierarchy;
return (fexpr__37878.cljs$core$IFn$_invoke$arity$0 ? fexpr__37878.cljs$core$IFn$_invoke$arity$0() : fexpr__37878.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("svg-clj.path","element->path"),(function (element){
if((cljs.core.first(element) instanceof cljs.core.Keyword)){
return cljs.core.first(element);
} else {
return new cljs.core.Keyword(null,"list","list",765357683);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4705__auto__,method_table__4701__auto__,prefer_table__4702__auto__,method_cache__4703__auto__,cached_hierarchy__4704__auto__));
})();
}
svg_clj.path.element__GT_path.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (elems){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.element__GT_path,elems);
}));
svg_clj.path.element__GT_path.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"circle","circle",1903212362),(function (p__37879){
var vec__37880 = p__37879;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37880,(0),null);
var map__37883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37880,(1),null);
var map__37883__$1 = cljs.core.__destructure_map(map__37883);
var props = map__37883__$1;
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37883__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37883__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37883__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return svg_clj.utils.style(svg_clj.path.translate(svg_clj.path.circle(r),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"r","r",-471384190)], 0)));
}));
svg_clj.path.element__GT_path.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (p__37884){
var vec__37885 = p__37884;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37885,(0),null);
var map__37888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37885,(1),null);
var map__37888__$1 = cljs.core.__destructure_map(map__37888);
var props = map__37888__$1;
var cx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37888__$1,new cljs.core.Keyword(null,"cx","cx",1272694324));
var cy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37888__$1,new cljs.core.Keyword(null,"cy","cy",755331060));
var rx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37888__$1,new cljs.core.Keyword(null,"rx","rx",1627208482));
var ry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37888__$1,new cljs.core.Keyword(null,"ry","ry",-334598563));
return svg_clj.utils.style(svg_clj.path.translate(svg_clj.path.ellipse(rx,ry),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"cx","cx",1272694324),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563)], 0)));
}));
svg_clj.path.element__GT_path.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (p__37889){
var vec__37890 = p__37889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37890,(0),null);
var map__37893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37890,(1),null);
var map__37893__$1 = cljs.core.__destructure_map(map__37893);
var props = map__37893__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var ctr = svg_clj.utils.v_PLUS_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(width / 2.0),(height / 2.0)], null));
return svg_clj.utils.style(svg_clj.path.translate(svg_clj.path.rect(width,height),ctr),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], 0)));
}));
svg_clj.path.element__GT_path.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"line","line",212345235),(function (p__37894){
var vec__37895 = p__37894;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37895,(0),null);
var map__37898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37895,(1),null);
var map__37898__$1 = cljs.core.__destructure_map(map__37898);
var props = map__37898__$1;
var x1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37898__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
return svg_clj.utils.style(svg_clj.path.line(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y1","y1",589123466),new cljs.core.Keyword(null,"x2","x2",-1362513475),new cljs.core.Keyword(null,"y2","y2",-718691301)], 0)));
}));
svg_clj.path.element__GT_path.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),(function (p__37899){
var vec__37900 = p__37899;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37900,(0),null);
var map__37903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37900,(1),null);
var map__37903__$1 = cljs.core.__destructure_map(map__37903);
var props = map__37903__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var pts = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),svg_clj.utils.s__GT_v(points));
return svg_clj.utils.style(svg_clj.path.polyline(pts),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));
svg_clj.path.element__GT_path.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"polygon","polygon",837053759),(function (p__37904){
var vec__37905 = p__37904;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37905,(0),null);
var map__37908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37905,(1),null);
var map__37908__$1 = cljs.core.__destructure_map(map__37908);
var props = map__37908__$1;
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37908__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var pts = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),svg_clj.utils.s__GT_v(points));
return svg_clj.utils.style(svg_clj.path.polygon(pts),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"points","points",-1486596883)));
}));
svg_clj.path.element__GT_path.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"path","path",-188191168),(function (elem){
return elem;
}));
svg_clj.path.needs_closing_QMARK_ = (function svg_clj$path$needs_closing_QMARK_(path){
var cmds = svg_clj.path.path_str__GT_cmds(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"d","d",1972142424)], null)));
var start = cljs.core.take_last((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cmds)));
var end = cljs.core.take_last((2),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(cljs.core.last(cmds)));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,end);
});
svg_clj.path.element__GT_path.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"g","g",1738089905),(function (p__37910){
var vec__37911 = p__37910;
var seq__37912 = cljs.core.seq(vec__37911);
var first__37913 = cljs.core.first(seq__37912);
var seq__37912__$1 = cljs.core.next(seq__37912);
var _ = first__37913;
var first__37913__$1 = cljs.core.first(seq__37912__$1);
var seq__37912__$2 = cljs.core.next(seq__37912__$1);
var props = first__37913__$1;
var elems = seq__37912__$2;
var p = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.path.merge_paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.element__GT_path,elems));
if(svg_clj.path.needs_closing_QMARK_(p)){
return (function (p1__37909_SHARP_){
return svg_clj.utils.style(p1__37909_SHARP_,props);
})(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.path.merge_paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.element__GT_path,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(elems))));
} else {
return svg_clj.utils.style(p,props);
}
}));
svg_clj.path.elements__GT_path = (function svg_clj$path$elements__GT_path(elems){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.path.merge_paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.element__GT_path,elems));
});
svg_clj.path.decurve = (function svg_clj$path$decurve(path){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(svg_clj.path.merge_paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2(svg_clj.path.element__GT_path,svg_clj.path.path__GT_elements(path)));
});

//# sourceMappingURL=svg_clj.path.js.map
