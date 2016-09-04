(ns cljs-reaction.checkbox
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]))

(defn checkbox [*html* *value*]
    [:div {:class "r-checkbox"}
          [:input {:class "r-checkbox-input"
                   :type :checkbox
                   :value *value*}]
          [:label {:class "r-checkbox-label"}
                  *html*]])
