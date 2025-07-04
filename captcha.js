! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.mcaptchaGlue = t() : e.mcaptchaGlue = t()
}(self, (() => {
    return e = {
        260: function(e) {
            var t;
            t = () => (() => {
                "use strict";
                var e = {};
                return {
                    166: function(e, t) {
                        var n, i = this && this.__extends || (n = function(e, t) {
                            return n = Object.setPrototypeOf || {
                                    __proto__: []
                                }
                                instanceof Array && function(e, t) {
                                    e.__proto__ = t
                                } || function(e, t) {
                                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                                }, n(e, t)
                        }, function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                            function i() {
                                this.constructor = e
                            }
                            n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
                        });
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.ConfigurationError = void 0;
                        var r = function(e) {
                            function t() {
                                var t = null !== e && e.apply(this, arguments) || this;
                                return t.message = "Provide either widget link or site key to display mCaptcha widget", t
                            }
                            return i(t, e), t
                        }(Error);
                        t.ConfigurationError = r;
                        var o = function() {
                            function e(e, t) {
                                var n = this;
                                if (this.handle = function(e) {
                                    console.log("test");
                                    //console.log("message received from ".concat(e.origin, " with data: ").concat(e.data.token)), new URL(e.origin).host == n.widgetLink.host ? n.updateState(e.data.token) : console.error("expected message from ".concat(n.widgetLink.host, " but received message from ").concat(e.origin, ". Aborting."))
                                }, this.updateState = t, e.widgetLink && e.siteKey) throw new r;
                                if (e.widgetLink) this.widgetLink = e.widgetLink;
                                else {
                                    if (!e.siteKey) throw new r;
                                    e.siteKey.instanceUrl ? (this.widgetLink = e.siteKey.instanceUrl, this.widgetLink.pathname = "/widget/", this.widgetLink.search = "?sitekey=".concat(e.siteKey.key)) : this.widgetLink = new URL("https://demo.mcaptcha.org/widget/?sitekey=".concat(e.siteKey.key))
                                }
                            }
                            return e.prototype.listen = function() {
                                window.addEventListener("message", this.handle)
                            }, e.prototype.destroy = function() {
                                window.removeEventListener("message", this.handle)
                            }, e
                        }();
                        t.default = o
                    }
                } [166](0, e), e
            })(), e.exports = t()
        },
        942: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ID = t.INPUT_LABEL_ID = t.INPUT_NAME = void 0, t.INPUT_NAME = "mcaptcha__token", t.INPUT_LABEL_ID = "mcaptcha__token-label", t.ID = "mcaptcha__widget-container"
        },
        166: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConfigurationError = void 0;
            var r = n(260);
            Object.defineProperty(t, "ConfigurationError", {
                enumerable: !0,
                get: function() {
                    return r.ConfigurationError
                }
            });
            var o = i(n(695));
            (0, n(695).run)(), t.default = o.default
        },
        695: function(e, t, n) {
            "use strict";
            var i = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.run = void 0;
            var r = i(n(260)),
                o = n(942),
                a = function(e) {
                    var t = this;
                    this.setToken = function(e) {
                        return t.inputElement.value = e
                    }, this.receiver = new r.default(e, this.setToken), this.receiver.listen();
                    var n = document.getElementById(o.ID);
                    if (null == n) throw new Error("Element ".concat(o.ID, "'s parent element is undefined"));
                    var i = document.getElementById(o.INPUT_LABEL_ID);
                    null !== i && (i.style.display = "none"), this.inputElement = document.getElementById(o.INPUT_NAME), this.inputElement.id = o.INPUT_NAME, this.inputElement.name = o.INPUT_NAME, this.inputElement.hidden = !0, this.inputElement.required = !0, this.inputElement.style.display = "none", n.appendChild(this.inputElement);
                    var a = "mcaptcha-widget__iframe",
                        s = document.createElement("iframe");
                    s.title = "mCaptcha", s.src = this.receiver.widgetLink.toString(), s.ariaRoleDescription = "presentation", s.name = a, s.id = a, s.scrolling = "no";
                    try {
                        s.sandbox = "allow-same-origin allow-scripts allow-popups"
                    } catch (e) {
                        try {
                            s.sandbox.add("allow-same-origin"), s.sandbox.add("allow-scripts"), s.sandbox.add("allow-popups")
                        } catch (e) {
                            s.setAttribute("sandbox", "allow-same-origin allow-scripts allow-popups")
                        }
                    }
                    s.width = "100%", s.height = "100%", s.frameBorder = "0", n.appendChild(s)
                };
            t.run = function() {
                var e = document.getElementById(o.INPUT_LABEL_ID);
                if (null === e || !e.dataset.mcaptcha_url) throw new Error('Couldn\'t find "mcaptcha_url" dataset in elmement (ID='.concat(o.INPUT_LABEL_ID, ")"));
                var t = {
                    widgetLink: new URL(e.dataset.mcaptcha_url)
                };
                new a(t)
            }, t.default = a
        }
    }, t = {},
        function n(i) {
            var r = t[i];
            if (void 0 !== r) return r.exports;
            var o = t[i] = {
                exports: {}
            };
            return e[i].call(o.exports, o, o.exports, n), o.exports
        }(166);
    var e, t
}));
