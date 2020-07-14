# parallettes
We have a gym at the back of a metal shop that we affectionately call *the bunker*. Slowly we are adding equipment. This document covers the design for a pair of parallette bars which are extremely fun to use for calistenics work.

{ex}
(ns parallettes
  (:require [stylo.draw :refer :all]))
  
#_(load-file "chunk.clj")
#_(use 'stylo.chunk)

(def draw-file (slurp "src/stylo/draw.cljc"))
(def goog-format "(def format goog.string.format)")
(def chunk-file (slurp "chunk.clj"))
[:div.hidden [:code.clj.block (str draw-file goog-format chunk-file)]]
{ex}

## Design
Parallettes are simple bars that sit parallel to the ground, raised by a small amount. Very straight forward.

The bar should be about 1.5in thick and built with sturdy material to withstand a human's body weight swinging around.

The legs holding up the bar should be sturdy.

## Legs
The legs would look quite nice as triangles.

{kl-hidden}
(ns Math)
(defn toDegrees [rad] (* rad 57.29578))
(defn toRadians [deg] (* deg 0.01745329))
(ns stylo.draw
  (:require [clojure.string :as s]))

(defn key->str
  "Turns :key into \"key\"."
  [key]
  (apply str (rest (str key))))

(defn hiccup?
  [item]
  (and
   (vector? item)
   (keyword? (first item))))

(defn key->tags
  [key]
  (let [tag (key->str key)
        o (str "<" tag ">")
        c (str "<" "/" tag ">\n")]
    [o c]))

(defn insert-props
  [tag props]
  (if (> (count props) 0)
    (s/replace tag #">" (str " " props ">"))
    tag))

(defn attr->html
  [attr]
  (let [prop (str (key->str (first attr)) "='")
        val (if (vector? (second attr))
              (apply str (interpose " " (second attr)))
              (str (second attr)))]
    (str prop val "' ")))

(declare my-html)
(defn hiccup->html
  [[k m & content]]
  (let [[o c] (key->tags k)
        [m content] (if (map? m)
                      [m (if content content (list nil))]
                      [{} (conj content m)])
        props (apply str (map attr->html m))
        o (insert-props o props)]
    (cond
      ;; snippet is empty
      (not (first content))
      (str o c)
      ;; snippet contains a string
      (and (string? (first content)) (= (count content) 1))
      (str o (first content) c)
      ;; snippet contains nested snippets
      :else
      (str o (my-html content) c))))

(defn my-html
  [hiccup]
  (if (hiccup? hiccup)
    (hiccup->html hiccup)
    (apply str
           (concat (map my-html hiccup)))))
{kl-hidden}

{ex}
[:div#leg]
[:div#iso]
{ex}

{kl}
(def g-base-h 12)
(def g-base-w (* g-base-h (/ 2 (Math/sqrt 3))))
(def g-leg-t 0.125)
(def g-leg-w 2)
(def g-bar-d 2)
(def g-bar-r (/ g-bar-d 2))
(def g-bar-l 30)

(def leg-outer-pts
  [[(/ g-base-w 2) 0]
   [g-base-w g-base-h]
   [0 g-base-h]])

(def leg-inner-pts
  (offset leg-outer-pts (- g-leg-t)))

(def loa (-line (first leg-outer-pts) (last leg-outer-pts)))
(def lob (-line (first leg-outer-pts) (second leg-outer-pts)))

(def lia (-line (first leg-inner-pts) (last leg-inner-pts)))
(def lib (-line (first leg-inner-pts) (second leg-inner-pts)))

(def loapt (loa (d->t loa g-bar-r)))
(def lobpt (lob (d->t lob g-bar-r)))

(def liapt (lia (d->t lia g-bar-r)))
(def libpt (lib (d->t lib g-bar-r)))
 
(def leg-pts
  [lobpt
   libpt
   (second leg-inner-pts)
   (last leg-inner-pts)
   liapt
   loapt
   (last leg-outer-pts)
   (second leg-outer-pts)])

(def leg
  (extrude- (polygon-2d leg-pts) g-leg-w))
(def tube
  (extrude- (mv- (regular-polygon g-bar-r 24) (first leg-outer-pts)) g-bar-l))
(def leg2
  (mv- leg [0 0 (- g-bar-l g-leg-w)]))

(def leg-fig
  (figure [720 350 20]
          "leg view"
          (mv [5 5]
              (draw-edges-recursive leg)
              (draw-edges-recursive tube)
              (dimension [g-base-w g-base-h] [0 g-base-h])
              (dimension [(- g-base-w 0.00001) 0] [g-base-w g-base-h])
              (dimension (last leg-outer-pts) loapt))))

(def iso-fig
  (figure [720 350 10]
          "iso view"
          (mv [10 5]
              (draw-edges (rot-
                           (join leg
                                 (mv- leg [0 0 (- g-bar-l g-leg-w)])
                                 tube) [90 180 180])))))

(defn -main []
  (let [canvas1 (js/document.getElementById "leg")
        canvas2 (js/document.getElementById "iso")]
    (set! (.-innerHTML canvas1) (my-html leg-fig))
    (set! (.-innerHTML canvas2) (my-html iso-fig))))

(-main)
nil
{kl}

