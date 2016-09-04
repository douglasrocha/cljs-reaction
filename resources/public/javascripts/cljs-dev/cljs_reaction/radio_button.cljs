(ns cljs-reaction.radio-button
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]))

(defn radio-button [*html* *value*]
    [:div {}
          [:input {:class "r-radio-button"
                   :type :radio
                   :value *value*}]
          [:label {:class "r-radio-label"}
                  *html*]])
