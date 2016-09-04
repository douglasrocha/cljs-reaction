(defproject cljs-reaction "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :main "cljs-reaction.core"

  :plugins [[lein-cljsbuild "1.1.4"]
            [lein-figwheel "0.5.6"]]

  :figwheel {:css-dirs ["resources/public/stylesheets/"]}

  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs_reaction"]
                        :figwheel true
                        :compiler {
                            :optimizations :none
                            :output-to "resources/public/javascripts/dev.js"
                            :output-dir "resources/public/javascripts/cljs-dev/"
                            :pretty-print true
                            :source-map true
                        }}
                        ;;{:id "production"
                        ;; :source-paths ["src/cljs_reaction"]
                        ;; :figwheel true
                        ;; :compiler {
                        ;;     :optimizations :advanced
                        ;;     :output-to "resources/public/javascripts/production.js"
                        ;;     :output-dir "resources/public/javascripts/cljs-production/"
                        ;;     :pretty-print false
                        ;;     :source-map true
                        ;;  }}
             ]}

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.227"]
                 [reagent "0.6.0-rc"]
                 [org.clojure/core.async "0.2.385"]])
