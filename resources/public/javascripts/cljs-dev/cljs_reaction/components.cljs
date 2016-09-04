(ns cljs-reaction.components
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]))

(defn title [*title* *subtitle*]
    [:div {:class "r-title"}
          [:h1 {:class "r-title-header"}
               *title*]
          [:h2 {:class "r-title-subheader"}
               *subtitle*]])
