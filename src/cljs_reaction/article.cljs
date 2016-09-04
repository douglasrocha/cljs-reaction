(ns cljs-reaction.article
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]))

(defn article [*header* *body*]
    [:article {:class "r-article"}
              [:header {:class "r-article-header"}
                       *header*]
              *body*])
