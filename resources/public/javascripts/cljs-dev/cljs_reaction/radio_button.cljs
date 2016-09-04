(ns cljs-reaction.radio-button
    (:require-macros [cljs.core.async.macros :refer (go)])
    (:require [reagent.core :as reagent]
              [cljs.core.async :refer (chan put! <!)]))

(defn radio-button [*html* *value*]
    [:div {:class "r-radio-button"}
          [:input {:class "r-radio-input"
                   :type :radio
                   :value *value*}]
          [:label {:class "r-radio-label"}
                  *html*]])
