(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n.dp-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.75); }\n.dp {\n  position: relative;\n  background: #fff;\n  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.25);\n  line-height: 1.4;\n  border-radius: 4px;\n  max-height: 400px;\n  z-index: 1000;\n  padding-top: 6px;\n  overflow: hidden;\n  -webkit-tap-highlight-color: transparent; }\n.dp:before {\n  content: \" \";\n  height: 6px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #3b99fc;\n  background: linear-gradient(-90deg, #3b99fc 0%, #8aefc8 100%); }\n.dp-permanent .dp {\n  padding-top: 0;\n  box-shadow: none; }\n.dp-permanent .dp:before {\n  display: none; }\n.dp-below {\n  position: absolute;\n  font-size: 0.8em;\n  width: 400px;\n  max-width: 100vw; }\n.dp-permanent {\n  position: relative;\n  font-size: 0.8em;\n  max-width: 100vw;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.dp-permanent .dp {\n  z-index: 0; }\n.dp-modal .dp {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  max-width: 600px;\n  width: calc(100% - 4em);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: slide-up 0.3s forwards;\n          animation: slide-up 0.3s forwards; }\n.dp-months {\n  padding: 24px; }\n.dp-years {\n  box-sizing: border-box;\n  max-height: 400px;\n  padding: 8px 0;\n  overflow: auto !important;\n  /* HACK for Chrome on Android */ }\n.dp-cal-month,\n.dp-cal-year,\n.dp-day,\n.dp-month,\n.dp-year {\n  box-sizing: border-box;\n  text-align: center;\n  text-decoration: none;\n  position: relative;\n  color: #3b404d;\n  border-radius: 2px;\n  border: 0;\n  background: transparent; }\n.dp-cal-header {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  background: #45a5bf;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px; }\n.dp-next,\n.dp-prev {\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  top: 10px;\n  color: #fff;\n  border-radius: 2px;\n  border: 0;\n  background: transparent; }\n.dp-next:focus,\n.dp-prev:focus,\n.dp-next:hover,\n.dp-prev:hover {\n  outline: none;\n  color: inherit; }\n.dp-prev {\n  left: 24px; }\n.dp-next {\n  right: 24px; }\n.dp-prev:before,\n.dp-next:before {\n  content: \"\";\n  border: 2px solid;\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  transition: border-color 0.2s;\n  margin: 9px 0 40px 4px;\n  z-index: 1; }\n.dp-prev:before {\n  border-right: 0;\n  border-bottom: 0; }\n.dp-next:before {\n  border-left: 0;\n  border-top: 0;\n  margin-left: 0;\n  margin-right: 4px; }\n.dp-cal-month,\n.dp-cal-year {\n  display: inline-block;\n  outline: none;\n  color: #fff;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0 5px;\n  position: relative; }\n.dp-cal-month::before {\n  vertical-align: middle;\n  content: \"expand_more\";\n  font-family: \"Material Icons\";\n  font-size: 1.2rem; }\n.dp-cal-year:after {\n  vertical-align: middle;\n  content: \"expand_more\";\n  font-family: \"Material Icons\";\n  font-size: 1.2rem; }\n.dp-cal-footer {\n  display: none;\n  text-align: center;\n  background: #f5f5f5; }\n.dp-day-today:after {\n  content: \"\";\n  height: 0;\n  width: 0;\n  border: 7px solid #223e5e;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  position: absolute;\n  top: 0;\n  right: 0; }\n.dp-close,\n.dp-clear,\n.dp-today {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 33%;\n  padding: 8px;\n  text-decoration: none;\n  color: inherit;\n  border: 0;\n  background: transparent; }\n.dp-permanent .dp-close,\n.dp-permanent .dp-clear {\n  display: none; }\n.dp-close:active,\n.dp-clear:active,\n.dp-today:active,\n.dp-next:active,\n.dp-prev:active,\n.dp-cal-month:active,\n.dp-cal-year:active {\n  background: #45a5bf;\n  color: white; }\n@media screen and (min-device-width: 1200px) {\n  .dp-close:hover,\n  .dp-close:focus,\n  .dp-clear:hover,\n  .dp-clear:focus,\n  .dp-today:hover,\n  .dp-today:focus,\n  .dp-next:hover,\n  .dp-next:focus,\n  .dp-prev:hover,\n  .dp-prev:focus,\n  .dp-cal-month:focus,\n  .dp-cal-month:hover,\n  .dp-cal-year:hover,\n  .dp-cal-year:focus {\n    background: #45a5bf;\n    color: white; } }\n.dp-col-header,\n.dp-day {\n  width: 14.28571429%;\n  display: inline-block;\n  padding: 8px;\n  text-align: center; }\n.dp-col-header {\n  color: #000;\n  background: #ddd;\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 0.8em;\n  padding: 8px 0; }\n.dp-month {\n  width: 20%;\n  display: inline-block;\n  padding: 8px; }\n.dp-year {\n  display: block;\n  padding: 8px 40px;\n  width: 100%; }\n.dp-edge-day {\n  color: #aaa; }\n.dp-day:hover,\n.dp-month:hover,\n.dp-year:hover,\n.dp-current:focus,\n.dp-current,\n.dp-day:focus,\n.dp-month:focus,\n.dp-year:focus {\n  outline: none;\n  background: #45a5bf;\n  color: white; }\n.dp-selected:hover,\n.dp-selected:focus,\n.dp-selected {\n  background: #45a5bf;\n  color: #fff; }\n.dp-day-disabled {\n  background: transparent;\n  color: #ddd; }\n.dp-day-disabled:focus,\n.dp-day-disabled:hover {\n  background: #ddd; }\n.dp-focuser {\n  position: absolute;\n  z-index: 0;\n  top: 50%;\n  left: 50%; }\n/* Responsive overrides */\n@media (max-width: 480px), (max-height: 480px) {\n  .dp-modal .dp {\n    font-size: 0.9em;\n    width: auto;\n    width: 100%; }\n  .dp-day-of-week,\n  .dp-day {\n    padding: 8px; } }\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translate(-50%, 100%);\n            transform: translate(-50%, 100%); }\n  100% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); } }\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translate(-50%, 100%);\n            transform: translate(-50%, 100%); }\n  100% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); } }\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, Arial, \"Noto Sans CJK TC\", \"文泉驛正黑\", \"WenQuanYi Zen Hei\", \"儷黑 Pro\", \"LiHei Pro\", \"微軟正黑體\", \"Microsoft JhengHei\", \"標楷體\", DFKai-SB, sans-serif;\n  font-size: 1rem; }\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch; }\nol,\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  display: none; }\n.full {\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  position: relative; }\n.mi {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  font-size: 2rem;\n  font-family: \"Material Icons\"; }\n.mo {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  font-size: 2rem;\n  font-family: \"Material Icons Outlined\"; }\n[class*=\" ai-\"],\n[class^=\"ai-\"] {\n  font-size: 2rem;\n  cursor: pointer; }\n.container {\n  width: 100%;\n  overflow: auto;\n  background: #eee fixed top; }\n.content-bg {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #eee fixed top;\n  z-index: -1; }\n.limit {\n  width: 90%;\n  max-width: 1280px;\n  margin: 0 auto; }\n.limit.padding {\n    padding: 2vmin 4vmin;\n    padding-bottom: 3rem; }\n@media screen and (max-width: 640px) {\n    .limit {\n      width: 100%; } }\n.flex {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n.fc {\n  display: flex;\n  flex-direction: column; }\nbutton {\n  cursor: pointer; }\nbutton:not([class^=\"dp-\"]) {\n  position: relative; }\nbutton:not([class^=\"dp-\"])::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n    background: inherit;\n    mix-blend-mode: screen;\n    transition: opacity 0.25s;\n    opacity: 0; }\nbutton:not([class^=\"dp-\"]):hover::before {\n    opacity: 0.5; }\ninput {\n  line-height: 1.8rem; }\ninput::-webkit-input-placeholder {\n    color: #999; }\ninput::-moz-placeholder {\n    color: #999; }\ninput::-ms-input-placeholder {\n    color: #999; }\ninput::placeholder {\n    color: #999; }\n.f0 {\n  flex: 0 0 auto; }\n.f1 {\n  flex: 1 1 auto; }\n.f2 {\n  flex: 2 2 auto; }\n.f3 {\n  flex: 3 3 auto; }\n.f4 {\n  flex: 4 4 auto; }\n.f5 {\n  flex: 5 5 auto; }\n@media screen and (min-width: 1440px) {\n  .lg-hide {\n    display: none !important; } }\n.lg-show {\n  display: none; }\n@media screen and (min-width: 1440px) {\n    .lg-show {\n      display: block !important; } }\n@media screen and (max-width: 960px) {\n  .md-hide {\n    display: none !important; } }\n.md-show {\n  display: none; }\n@media screen and (max-width: 960px) {\n    .md-show {\n      display: block !important; } }\n@media screen and (max-width: 640px) {\n  .ss-hide {\n    display: none !important; } }\n.ss-show {\n  display: none; }\n@media screen and (max-width: 640px) {\n    .ss-show {\n      display: block !important; } }\n@media screen and (max-width: 480px) {\n  .xs-hide {\n    display: none !important; } }\n.xs-show {\n  display: none; }\n@media screen and (max-width: 480px) {\n    .xs-show {\n      display: block !important; } }\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 5000s ease-in-out 0s; }\n.cards {\n  display: flex;\n  justify-content: flex-start;\n  margin-right: -2vw;\n  flex-wrap: wrap; }\n.cards.nowrap {\n    margin: -2vw;\n    margin-left: 0;\n    padding: 2vw 0;\n    flex-wrap: nowrap;\n    overflow-x: auto; }\n.cards.nowrap::-webkit-scrollbar {\n      height: 0px !important;\n      width: 0px !important;\n      display: none !important; }\n.cards.nowrap > * {\n      flex: 0 0 auto; }\n#fb ._2p3a,\n#fb .uiScaledImageContainer,\n#fb ._2zfr {\n  width: 100% !important; }\n@media screen and (max-width: 480px) {\n  h1 {\n    font-size: 7vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy95dWNoaW5nL0Rlc2t0b3AvQUNFUi9mb3JBY2VyV0VCL3NyYy9hcHAvY29tcG9uZW50L2NhbGVuZGFyL3RpbnktZGF0ZXBpY2tlci5zY3NzIiwiL1VzZXJzL3l1Y2hpbmcvRGVza3RvcC9BQ0VSL2ZvckFjZXJXRUIvc3JjL3RoZW1lLnNjc3MiLCIvVXNlcnMveXVjaGluZy9EZXNrdG9wL0FDRVIvZm9yQWNlcldFQi9zcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxxQ0FBcUMsRUFBQTtBQUd2QztFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdDQUF3QyxFQUFBO0FBRzFDO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLDZEQUE2RCxFQUFBO0FBRy9EO0VBQ0UsY0FBYztFQUVkLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFFaEIsZ0JBQWdCO0VBQ2hCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHdDQUFnQztV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QUUzQjtBQUVEO0VBQ0UsYUFBYSxFQUFBO0FBQ2I7SUFGRjtNQUdJLHlCQUF5QixFQUFBLEVBRTVCO0FBRUQ7Ozs7RUFJRSxpREFBaUQsRUFBQTtBQUduRDtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtBQUpqQjtJQU1JLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtBQVZwQjtNQVlNLHNCQUFzQjtNQUN0QixxQkFBcUI7TUFDckIsd0JBQXdCLEVBQUE7QUFkOUI7TUFpQk0sY0FBYyxFQUFBO0FBS3BCOzs7RUFJSSxzQkFBc0IsRUFBQTtBQUt4QjtFQURGO0lBRUksY0FBYyxFQUFBLEVBRWpCIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5kcC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpOyB9XG5cbi5kcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLmRwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjM2I5OWZjO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjM2I5OWZjIDAlLCAjOGFlZmM4IDEwMCUpOyB9XG5cbi5kcC1wZXJtYW5lbnQgLmRwIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmRwLXBlcm1hbmVudCAuZHA6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uZHAtYmVsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDB2dzsgfVxuXG4uZHAtcGVybWFuZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuXG4uZHAtcGVybWFuZW50IC5kcCB7XG4gIHotaW5kZXg6IDA7IH1cblxuLmRwLW1vZGFsIC5kcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRlbSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuM3MgZm9yd2FyZHM7IH1cblxuLmRwLW1vbnRocyB7XG4gIHBhZGRpbmc6IDI0cHg7IH1cblxuLmRwLXllYXJzIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAvKiBIQUNLIGZvciBDaHJvbWUgb24gQW5kcm9pZCAqLyB9XG5cbi5kcC1jYWwtbW9udGgsXG4uZHAtY2FsLXllYXIsXG4uZHAtZGF5LFxuLmRwLW1vbnRoLFxuLmRwLXllYXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzNiNDA0ZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5kcC1jYWwtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNDVhNWJmO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5kcC1uZXh0LFxuLmRwLXByZXYge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuLmRwLW5leHQ6Zm9jdXMsXG4uZHAtcHJldjpmb2N1cyxcbi5kcC1uZXh0OmhvdmVyLFxuLmRwLXByZXY6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDsgfVxuXG4uZHAtcHJldiB7XG4gIGxlZnQ6IDI0cHg7IH1cblxuLmRwLW5leHQge1xuICByaWdodDogMjRweDsgfVxuXG4uZHAtcHJldjpiZWZvcmUsXG4uZHAtbmV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgbWFyZ2luOiA5cHggMCA0MHB4IDRweDtcbiAgei1pbmRleDogMTsgfVxuXG4uZHAtcHJldjpiZWZvcmUge1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7IH1cblxuLmRwLW5leHQ6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxuXG4uZHAtY2FsLW1vbnRoLFxuLmRwLWNhbC15ZWFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uZHAtY2FsLW1vbnRoOjpiZWZvcmUge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb250ZW50OiBcImV4cGFuZF9tb3JlXCI7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XG5cbi5kcC1jYWwteWVhcjphZnRlciB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbnRlbnQ6IFwiZXhwYW5kX21vcmVcIjtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgZm9udC1zaXplOiAxLjJyZW07IH1cblxuLmRwLWNhbC1mb290ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7IH1cblxuLmRwLWRheS10b2RheTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIGJvcmRlcjogN3B4IHNvbGlkICMyMjNlNWU7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDsgfVxuXG4uZHAtY2xvc2UsXG4uZHAtY2xlYXIsXG4uZHAtdG9kYXkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMyU7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuXG4uZHAtcGVybWFuZW50IC5kcC1jbG9zZSxcbi5kcC1wZXJtYW5lbnQgLmRwLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uZHAtY2xvc2U6YWN0aXZlLFxuLmRwLWNsZWFyOmFjdGl2ZSxcbi5kcC10b2RheTphY3RpdmUsXG4uZHAtbmV4dDphY3RpdmUsXG4uZHAtcHJldjphY3RpdmUsXG4uZHAtY2FsLW1vbnRoOmFjdGl2ZSxcbi5kcC1jYWwteWVhcjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjNDVhNWJmO1xuICBjb2xvcjogd2hpdGU7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xuICAuZHAtY2xvc2U6aG92ZXIsXG4gIC5kcC1jbG9zZTpmb2N1cyxcbiAgLmRwLWNsZWFyOmhvdmVyLFxuICAuZHAtY2xlYXI6Zm9jdXMsXG4gIC5kcC10b2RheTpob3ZlcixcbiAgLmRwLXRvZGF5OmZvY3VzLFxuICAuZHAtbmV4dDpob3ZlcixcbiAgLmRwLW5leHQ6Zm9jdXMsXG4gIC5kcC1wcmV2OmhvdmVyLFxuICAuZHAtcHJldjpmb2N1cyxcbiAgLmRwLWNhbC1tb250aDpmb2N1cyxcbiAgLmRwLWNhbC1tb250aDpob3ZlcixcbiAgLmRwLWNhbC15ZWFyOmhvdmVyLFxuICAuZHAtY2FsLXllYXI6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICM0NWE1YmY7XG4gICAgY29sb3I6IHdoaXRlOyB9IH1cblxuLmRwLWNvbC1oZWFkZXIsXG4uZHAtZGF5IHtcbiAgd2lkdGg6IDE0LjI4NTcxNDI5JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uZHAtY29sLWhlYWRlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA4cHggMDsgfVxuXG4uZHAtbW9udGgge1xuICB3aWR0aDogMjAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweDsgfVxuXG4uZHAteWVhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggNDBweDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmRwLWVkZ2UtZGF5IHtcbiAgY29sb3I6ICNhYWE7IH1cblxuLmRwLWRheTpob3Zlcixcbi5kcC1tb250aDpob3Zlcixcbi5kcC15ZWFyOmhvdmVyLFxuLmRwLWN1cnJlbnQ6Zm9jdXMsXG4uZHAtY3VycmVudCxcbi5kcC1kYXk6Zm9jdXMsXG4uZHAtbW9udGg6Zm9jdXMsXG4uZHAteWVhcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICM0NWE1YmY7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4uZHAtc2VsZWN0ZWQ6aG92ZXIsXG4uZHAtc2VsZWN0ZWQ6Zm9jdXMsXG4uZHAtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjNDVhNWJmO1xuICBjb2xvcjogI2ZmZjsgfVxuXG4uZHAtZGF5LWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZGRkOyB9XG5cbi5kcC1kYXktZGlzYWJsZWQ6Zm9jdXMsXG4uZHAtZGF5LWRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RkZDsgfVxuXG4uZHAtZm9jdXNlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTsgfVxuXG4vKiBSZXNwb25zaXZlIG92ZXJyaWRlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSwgKG1heC1oZWlnaHQ6IDQ4MHB4KSB7XG4gIC5kcC1tb2RhbCAuZHAge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgd2lkdGg6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLmRwLWRheS1vZi13ZWVrLFxuICAuZHAtZGF5IHtcbiAgICBwYWRkaW5nOiA4cHg7IH0gfVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpOyB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9IH1cblxuaHRtbCxcbmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBcIk5vdG8gU2FucyBDSksgVENcIiwgXCLmlofms4npqZvmraPpu5FcIiwgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIuWEt+m7kSBQcm9cIiwgXCJMaUhlaSBQcm9cIiwgXCLlvq7ou5/mraPpu5Hpq5RcIiwgXCJNaWNyb3NvZnQgSmhlbmdIZWlcIiwgXCLmqJnmpbfpq5RcIiwgREZLYWktU0IsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTsgfVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cblxub2wsXG51bCxcbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uZnVsbCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4ubWkge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7IH1cblxuLm1vIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29ucyBPdXRsaW5lZFwiOyB9XG5cbltjbGFzcyo9XCIgYWktXCJdLFxuW2NsYXNzXj1cImFpLVwiXSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNlZWUgZml4ZWQgdG9wOyB9XG5cbi5jb250ZW50LWJnIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogI2VlZSBmaXhlZCB0b3A7XG4gIHotaW5kZXg6IC0xOyB9XG5cbi5saW1pdCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IDAgYXV0bzsgfVxuICAubGltaXQucGFkZGluZyB7XG4gICAgcGFkZGluZzogMnZtaW4gNHZtaW47XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAubGltaXQge1xuICAgICAgd2lkdGg6IDEwMCU7IH0gfVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uZmMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5idXR0b246bm90KFtjbGFzc149XCJkcC1cIl0pIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIGJ1dHRvbjpub3QoW2NsYXNzXj1cImRwLVwiXSk6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcbiAgICBvcGFjaXR5OiAwOyB9XG4gIGJ1dHRvbjpub3QoW2NsYXNzXj1cImRwLVwiXSk6aG92ZXI6OmJlZm9yZSB7XG4gICAgb3BhY2l0eTogMC41OyB9XG5cbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IDEuOHJlbTsgfVxuICBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTk5OyB9XG5cbi5mMCB7XG4gIGZsZXg6IDAgMCBhdXRvOyB9XG5cbi5mMSB7XG4gIGZsZXg6IDEgMSBhdXRvOyB9XG5cbi5mMiB7XG4gIGZsZXg6IDIgMiBhdXRvOyB9XG5cbi5mMyB7XG4gIGZsZXg6IDMgMyBhdXRvOyB9XG5cbi5mNCB7XG4gIGZsZXg6IDQgNCBhdXRvOyB9XG5cbi5mNSB7XG4gIGZsZXg6IDUgNSBhdXRvOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAubGctaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cblxuLmxnLXNob3cge1xuICBkaXNwbGF5OiBub25lOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIC5sZy1zaG93IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAubWQtaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cblxuLm1kLXNob3cge1xuICBkaXNwbGF5OiBub25lOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgLm1kLXNob3cge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5zcy1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0gfVxuXG4uc3Mtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICAuc3Mtc2hvdyB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnhzLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XG5cbi54cy1zaG93IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC54cy1zaG93IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH0gfVxuXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7IH1cblxuLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tcmlnaHQ6IC0ydnc7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuICAuY2FyZHMubm93cmFwIHtcbiAgICBtYXJnaW46IC0ydnc7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZzogMnZ3IDA7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0bzsgfVxuICAgIC5jYXJkcy5ub3dyYXA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgICAuY2FyZHMubm93cmFwID4gKiB7XG4gICAgICBmbGV4OiAwIDAgYXV0bzsgfVxuXG4jZmIgLl8ycDNhLFxuI2ZiIC51aVNjYWxlZEltYWdlQ29udGFpbmVyLFxuI2ZiIC5fMnpmciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogN3Z3OyB9IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS5zY3NzXCI7XG4uZHAtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbn1cblxuLmRwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmRwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjM2I5OWZjO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjM2I5OWZjIDAlLCAjOGFlZmM4IDEwMCUpO1xufVxuXG4uZHAtcGVybWFuZW50IC5kcCB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kcC1wZXJtYW5lbnQgLmRwOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcC1iZWxvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xufVxuXG4uZHAtcGVybWFuZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDAuOGVtO1xuICAvL3dpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kcC1wZXJtYW5lbnQgLmRwIHtcbiAgei1pbmRleDogMDtcbn1cblxuLmRwLW1vZGFsIC5kcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRlbSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuM3MgZm9yd2FyZHM7XG59XG5cbi5kcC1tb250aHMge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uZHAteWVhcnMge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IC8qIEhBQ0sgZm9yIENocm9tZSBvbiBBbmRyb2lkICovXG59XG5cbi5kcC1jYWwtbW9udGgsXG4uZHAtY2FsLXllYXIsXG4uZHAtZGF5LFxuLmRwLW1vbnRoLFxuLmRwLXllYXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzNiNDA0ZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZHAtY2FsLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJG1haW47XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kcC1uZXh0LFxuLmRwLXByZXYge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kcC1uZXh0OmZvY3VzLFxuLmRwLXByZXY6Zm9jdXMsXG4uZHAtbmV4dDpob3Zlcixcbi5kcC1wcmV2OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5kcC1wcmV2IHtcbiAgbGVmdDogMjRweDtcbn1cblxuLmRwLW5leHQge1xuICByaWdodDogMjRweDtcbn1cblxuLmRwLXByZXY6YmVmb3JlLFxuLmRwLW5leHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIG1hcmdpbjogOXB4IDAgNDBweCA0cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcC1wcmV2OmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmRwLW5leHQ6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmRwLWNhbC1tb250aCxcbi5kcC1jYWwteWVhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcC1jYWwtbW9udGgge1xuICAvLyBsZWZ0OiAxNXB4O1xuICAmOjpiZWZvcmUge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY29udGVudDogXCJleHBhbmRfbW9yZVwiO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cblxuLmRwLWNhbC15ZWFyIHtcbiAgLy8gcmlnaHQ6IDE1cHg7XG4gICY6YWZ0ZXIge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY29udGVudDogXCJleHBhbmRfbW9yZVwiO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gIH1cbn1cblxuLmRwLWNhbC1mb290ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5kcC1kYXktdG9kYXk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBib3JkZXI6IDdweCBzb2xpZCAkc2Vjb25kO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5kcC1jbG9zZSxcbi5kcC1jbGVhcixcbi5kcC10b2RheSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZHAtcGVybWFuZW50IC5kcC1jbG9zZSxcbi5kcC1wZXJtYW5lbnQgLmRwLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRwLWNsb3NlOmFjdGl2ZSxcbi5kcC1jbGVhcjphY3RpdmUsXG4uZHAtdG9kYXk6YWN0aXZlLFxuLmRwLW5leHQ6YWN0aXZlLFxuLmRwLXByZXY6YWN0aXZlLFxuLmRwLWNhbC1tb250aDphY3RpdmUsXG4uZHAtY2FsLXllYXI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogJG1haW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xuICAuZHAtY2xvc2U6aG92ZXIsXG4gIC5kcC1jbG9zZTpmb2N1cyxcbiAgLmRwLWNsZWFyOmhvdmVyLFxuICAuZHAtY2xlYXI6Zm9jdXMsXG4gIC5kcC10b2RheTpob3ZlcixcbiAgLmRwLXRvZGF5OmZvY3VzLFxuICAuZHAtbmV4dDpob3ZlcixcbiAgLmRwLW5leHQ6Zm9jdXMsXG4gIC5kcC1wcmV2OmhvdmVyLFxuICAuZHAtcHJldjpmb2N1cyxcbiAgLmRwLWNhbC1tb250aDpmb2N1cyxcbiAgLmRwLWNhbC1tb250aDpob3ZlcixcbiAgLmRwLWNhbC15ZWFyOmhvdmVyLFxuICAuZHAtY2FsLXllYXI6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICRtYWluO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uZHAtY29sLWhlYWRlcixcbi5kcC1kYXkge1xuICB3aWR0aDogMTQuMjg1NzE0MjklO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHAtY29sLWhlYWRlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAkbGlnaHRHcmV5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmRwLW1vbnRoIHtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5kcC15ZWFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRwLWVkZ2UtZGF5IHtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5kcC1kYXk6aG92ZXIsXG4uZHAtbW9udGg6aG92ZXIsXG4uZHAteWVhcjpob3Zlcixcbi5kcC1jdXJyZW50OmZvY3VzLFxuLmRwLWN1cnJlbnQsXG4uZHAtZGF5OmZvY3VzLFxuLmRwLW1vbnRoOmZvY3VzLFxuLmRwLXllYXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAkbWFpbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZHAtc2VsZWN0ZWQ6aG92ZXIsXG4uZHAtc2VsZWN0ZWQ6Zm9jdXMsXG4uZHAtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAkbWFpbjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kcC1kYXktZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkZGQ7XG59XG5cbi5kcC1kYXktZGlzYWJsZWQ6Zm9jdXMsXG4uZHAtZGF5LWRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuLmRwLWZvY3VzZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIFJlc3BvbnNpdmUgb3ZlcnJpZGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpLCAobWF4LWhlaWdodDogNDgwcHgpIHtcbiAgLmRwLW1vZGFsIC5kcCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kcC1kYXktb2Ytd2VlayxcbiAgLmRwLWRheSB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbn1cbiIsIi8vICRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgI2JlZTdmYyk7XG4kYmFja2dyb3VuZDogI2VlZTtcbiRtYWluOiAjNDVhNWJmO1xuJHNlY29uZDogIzIyM2U1ZTtcbiRsaWdodGVyOiByZ2JhKHdoaXRlLCAwLjMpO1xuJGRhcmtlcjogcmdiYShibGFjaywgMC4zKTtcbiRvcGFjaXR5Qm9yZGVyOiByZ2JhKGJsYWNrLCAwLjEpO1xuJG9wYWNpdHlXaGl0ZTogcmdiYSh3aGl0ZSwgMC44KTtcbiR0b29sczogcmdiYSh3aGl0ZSwgMC43NSk7XG4kYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjMpO1xuXG4kbGlnaHRHcmV5OiAjZGRkO1xuJGdyZXk6ICM5OTk7XG4kZGFya0dyZXk6ICMzMzM7XG5cbiRncmVlbjogIzgzYjgxYTtcbiR5ZWxsb3c6ICNlNWI4MjI7XG4kcmVkOiAjZWQ2MTYxO1xuXG4kZmFjZWJvb2s6ICMzYjU5OTg7XG4kZ29vZ2xlOiAjZGQ0YjM5O1xuJGxpbmU6ICMwMGMzMDA7XG4kdHdpdHRlcjogIzAwYWNlZDtcbiRpbnN0YWdyYW06IHJhZGlhbC1ncmFkaWVudChcbiAgY2lyY2xlIGF0IDMwJSAxMDclLFxuICAjZmRmNDk3IDAlLFxuICAjZmRmNDk3IDUlLFxuICAjZmQ1OTQ5IDQ1JSxcbiAgI2Q2MjQ5ZiA2MCUsXG4gICMyODVhZWIgOTAlXG4pO1xuXG4kc3F1YXJlOiAzcmVtO1xuIiwiQGltcG9ydCBcIi4vdGhlbWUuc2Nzc1wiO1xuQGltcG9ydCBcIi4vYXBwL2NvbXBvbmVudC9jYWxlbmRhci90aW55LWRhdGVwaWNrZXIuc2Nzc1wiO1xuaHRtbCxcbmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBcIk5vdG8gU2FucyBDSksgVENcIiwgXCLmlofms4npqZvmraPpu5FcIixcbiAgICBcIldlblF1YW5ZaSBaZW4gSGVpXCIsIFwi5YS36buRIFByb1wiLCBcIkxpSGVpIFByb1wiLCBcIuW+rui7n+ato+m7kemrlFwiLFxuICAgIFwiTWljcm9zb2Z0IEpoZW5nSGVpXCIsIFwi5qiZ5qW36auUXCIsIERGS2FpLVNCLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC8vICAgZm9udC1zaXplOiAwLjlyZW07XG4gIC8vIH1cbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG5vbCxcbnVsLFxubGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mdWxsIHtcbiAgZmxleDogMSAxIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1pIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xufVxuLm1vIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29ucyBPdXRsaW5lZFwiO1xufVxuXG5bY2xhc3MqPVwiIGFpLVwiXSxcbltjbGFzc149XCJhaS1cIl0ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQgZml4ZWQgdG9wO1xufVxuXG4uY29udGVudC1iZyB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kIGZpeGVkIHRvcDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5saW1pdCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMTI4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgJi5wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAydm1pbiA0dm1pbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uOm5vdChbY2xhc3NePVwiZHAtXCJdKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgbWl4LWJsZW5kLW1vZGU6IHNjcmVlbjtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cbn1cbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IDEuOHJlbTtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAkZ3JleTtcbiAgfVxufVxuXG5AZm9yICRpIGZyb20gMCB0aHJvdWdoIDUge1xuICAuZiN7JGl9IHtcbiAgICBmbGV4OiAkaSAkaSBhdXRvO1xuICB9XG59XG5cbi5sZy1oaWRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5sZy1zaG93IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubWQtaGlkZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5tZC1zaG93IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zcy1oaWRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnNzLXNob3cge1xuICBkaXNwbGF5OiBub25lO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnhzLWhpZGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ueHMtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmFjdGl2ZSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwMHMgZWFzZS1pbi1vdXQgMHM7XG59XG5cbi5jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAtMnZ3O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gICYubm93cmFwIHtcbiAgICBtYXJnaW46IC0ydnc7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgcGFkZGluZzogMnZ3IDA7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICA+ICoge1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgfVxuICB9XG59XG5cbiNmYiB7XG4gIC5fMnAzYSxcbiAgLnVpU2NhbGVkSW1hZ2VDb250YWluZXIsXG4gIC5fMnpmciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuXG5oMSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgZm9udC1zaXplOiA3dnc7XG4gIH1cbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdGhlbWUuc2NzcyJ9 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme.scss":
/*!************************!*\
  !*** ./src/theme.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./theme.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 4:
/*!************************************************!*\
  !*** multi ./src/theme.scss ./src/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yuching/Desktop/ACER/forAcerWEB/src/theme.scss */"./src/theme.scss");
module.exports = __webpack_require__(/*! /Users/yuching/Desktop/ACER/forAcerWEB/src/styles.scss */"./src/styles.scss");


/***/ })

},[[4,"runtime"]]]);
//# sourceMappingURL=styles.js.map