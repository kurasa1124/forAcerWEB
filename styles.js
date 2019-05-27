(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n.dp-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.75); }\n.dp {\n  position: relative;\n  background: #fff;\n  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.25);\n  line-height: 1.4;\n  border-radius: 4px;\n  max-height: 400px;\n  z-index: 1000;\n  padding-top: 6px;\n  overflow: hidden;\n  -webkit-tap-highlight-color: transparent; }\n.dp:before {\n  content: \" \";\n  height: 6px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #3b99fc;\n  background: linear-gradient(-90deg, #3b99fc 0%, #8aefc8 100%); }\n.dp-permanent .dp {\n  padding-top: 0;\n  box-shadow: none; }\n.dp-permanent .dp:before {\n  display: none; }\n.dp-below {\n  position: absolute;\n  font-size: 0.8em;\n  width: 400px;\n  max-width: 100vw; }\n.dp-permanent {\n  position: relative;\n  font-size: 0.8em;\n  max-width: 100vw;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.dp-permanent .dp {\n  z-index: 0; }\n.dp-modal .dp {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  max-width: 600px;\n  width: calc(100% - 4em);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: slide-up 0.3s forwards;\n          animation: slide-up 0.3s forwards; }\n.dp-months {\n  padding: 24px; }\n.dp-years {\n  box-sizing: border-box;\n  max-height: 400px;\n  padding: 8px 0;\n  overflow: auto !important;\n  /* HACK for Chrome on Android */ }\n.dp-cal-month,\n.dp-cal-year,\n.dp-day,\n.dp-month,\n.dp-year {\n  box-sizing: border-box;\n  text-align: center;\n  text-decoration: none;\n  position: relative;\n  color: #3b404d;\n  border-radius: 2px;\n  border: 0;\n  background: transparent; }\n.dp-cal-header {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  background: #45a5bf;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px; }\n.dp-next,\n.dp-prev {\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  top: 10px;\n  color: #fff;\n  border-radius: 2px;\n  border: 0;\n  background: transparent; }\n.dp-next:focus,\n.dp-prev:focus,\n.dp-next:hover,\n.dp-prev:hover {\n  outline: none;\n  color: inherit; }\n.dp-prev {\n  left: 24px; }\n.dp-next {\n  right: 24px; }\n.dp-prev:before,\n.dp-next:before {\n  content: \"\";\n  border: 2px solid;\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  transition: border-color 0.2s;\n  margin: 9px 0 40px 4px;\n  z-index: 1; }\n.dp-prev:before {\n  border-right: 0;\n  border-bottom: 0; }\n.dp-next:before {\n  border-left: 0;\n  border-top: 0;\n  margin-left: 0;\n  margin-right: 4px; }\n.dp-cal-month,\n.dp-cal-year {\n  display: inline-block;\n  outline: none;\n  color: #fff;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0 5px;\n  position: relative; }\n.dp-cal-month {\n  left: 15px; }\n.dp-cal-year {\n  right: 15px; }\n.dp-cal-footer {\n  display: none;\n  text-align: center;\n  background: #f5f5f5; }\n.dp-day-today:after {\n  content: \"\";\n  height: 0;\n  width: 0;\n  border: 7px solid #223e5e;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  position: absolute;\n  top: 0;\n  right: 0; }\n.dp-close,\n.dp-clear,\n.dp-today {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 33%;\n  padding: 8px;\n  text-decoration: none;\n  color: inherit;\n  border: 0;\n  background: transparent; }\n.dp-permanent .dp-close,\n.dp-permanent .dp-clear {\n  display: none; }\n.dp-close:active,\n.dp-clear:active,\n.dp-today:active,\n.dp-next:active,\n.dp-prev:active,\n.dp-cal-month:active,\n.dp-cal-year:active {\n  background: #45a5bf;\n  color: white; }\n@media screen and (min-device-width: 1200px) {\n  .dp-close:hover,\n  .dp-close:focus,\n  .dp-clear:hover,\n  .dp-clear:focus,\n  .dp-today:hover,\n  .dp-today:focus,\n  .dp-next:hover,\n  .dp-next:focus,\n  .dp-prev:hover,\n  .dp-prev:focus,\n  .dp-cal-month:focus,\n  .dp-cal-month:hover,\n  .dp-cal-year:hover,\n  .dp-cal-year:focus {\n    background: #45a5bf;\n    color: white; } }\n.dp-col-header,\n.dp-day {\n  width: 14.28571429%;\n  display: inline-block;\n  padding: 8px;\n  text-align: center; }\n.dp-col-header {\n  color: #000;\n  background: #ddd;\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 0.8em;\n  padding: 8px 0; }\n.dp-month {\n  width: 33%;\n  display: inline-block;\n  padding: 8px; }\n.dp-year {\n  display: block;\n  padding: 8px 40px;\n  width: 100%; }\n.dp-edge-day {\n  color: #aaa; }\n.dp-day:hover,\n.dp-month:hover,\n.dp-year:hover,\n.dp-current:focus,\n.dp-current,\n.dp-day:focus,\n.dp-month:focus,\n.dp-year:focus {\n  outline: none;\n  background: #45a5bf;\n  color: white; }\n.dp-selected:hover,\n.dp-selected:focus,\n.dp-selected {\n  background: #45a5bf;\n  color: #fff; }\n.dp-day-disabled {\n  background: transparent;\n  color: #ddd; }\n.dp-day-disabled:focus,\n.dp-day-disabled:hover {\n  background: #ddd; }\n.dp-focuser {\n  position: absolute;\n  z-index: 0;\n  top: 50%;\n  left: 50%; }\n/* Responsive overrides */\n@media (max-width: 480px), (max-height: 480px) {\n  .dp-modal .dp {\n    font-size: 0.9em;\n    width: auto;\n    width: 100%; }\n  .dp-day-of-week,\n  .dp-day {\n    padding: 8px; } }\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translate(-50%, 100%);\n            transform: translate(-50%, 100%); }\n  100% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); } }\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translate(-50%, 100%);\n            transform: translate(-50%, 100%); }\n  100% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); } }\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, Arial, \"Noto Sans CJK TC\", \"文泉驛正黑\", \"WenQuanYi Zen Hei\", \"儷黑 Pro\", \"LiHei Pro\", \"微軟正黑體\", \"Microsoft JhengHei\", \"標楷體\", DFKai-SB, sans-serif;\n  font-size: 1rem; }\n@media screen and (max-width: 480px) {\n    html,\n    body {\n      font-size: 0.8rem; } }\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch; }\nol,\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\ninput,\nbutton,\nimage {\n  outline: 0; }\n.full {\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  position: relative; }\n.mi {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  font-size: 2rem;\n  font-family: \"Material Icons\"; }\n.mo {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  font-size: 2rem;\n  font-family: \"Material Icons Outlined\"; }\n[class*=\" ai-\"],\n[class^=\"ai-\"] {\n  font-size: 2rem;\n  cursor: pointer; }\n.container {\n  width: 100%;\n  min-height: 100%;\n  overflow: auto;\n  background: linear-gradient(#ffffff, #bee7fc) fixed top; }\n.limit {\n  width: 80%;\n  max-width: 1040px;\n  margin: 0 auto; }\n.limit.padding {\n    padding: 2vmin 4vmin; }\n@media screen and (max-width: 640px) {\n    .limit {\n      width: 100%; } }\n.f0 {\n  flex: 0 0 auto; }\n.f1 {\n  flex: 1 1 auto; }\n.f2 {\n  flex: 2 2 auto; }\n.f3 {\n  flex: 3 3 auto; }\n.f4 {\n  flex: 4 4 auto; }\n.f5 {\n  flex: 5 5 auto; }\n@media screen and (min-width: 1440px) {\n  .lg-hide {\n    display: none !important; } }\n@media screen and (min-width: 1440px) {\n  .lg-show {\n    display: block !important; } }\n@media screen and (max-width: 960px) {\n  .md-hide {\n    display: none !important; } }\n@media screen and (max-width: 960px) {\n  .md-show {\n    display: block !important; } }\n@media screen and (max-width: 640px) {\n  .ss-hide {\n    display: none !important; } }\n@media screen and (max-width: 640px) {\n  .ss-show {\n    display: block !important; } }\n@media screen and (max-width: 480px) {\n  .xs-hide {\n    display: none !important; } }\n@media screen and (max-width: 480px) {\n  .xs-show {\n    display: block !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy95dWNoaW5nL0Rlc2t0b3AvQUNFUi9mb3JBY2VyV0VCL3NyYy9hcHAvY29tcG9uZW50L2NhbGVuZGFyL3RpbnktZGF0ZXBpY2tlci5zY3NzIiwiL1VzZXJzL3l1Y2hpbmcvRGVza3RvcC9BQ0VSL2ZvckFjZXJXRUIvc3JjL3RoZW1lLnNjc3MiLCIvVXNlcnMveXVjaGluZy9EZXNrdG9wL0FDRVIvZm9yQWNlcldFQi9zcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxxQ0FBcUMsRUFBQTtBQUd2QztFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdDQUF3QyxFQUFBO0FBRzFDO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLDZEQUE2RCxFQUFBO0FBRy9EO0VBQ0UsY0FBYztFQUVkLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFFaEIsZ0JBQWdCO0VBQ2hCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsVUFBVSxFQUFBO0FBR1o7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHdDQUFnQztV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QUE7QUFEbEI7RUFDRSxjQUFnQixFQUFBO0FBRGxCO0VBQ0UsY0FBZ0IsRUFBQTtBQURsQjtFQUNFLGNBQWdCLEVBQUE7QUFLbEI7RUFERjtJQUVJLHdCQUF3QixFQUFBLEVBRTNCO0FBR0M7RUFERjtJQUVJLHlCQUF5QixFQUFBLEVBRTVCO0FBR0M7RUFERjtJQUVJLHdCQUF3QixFQUFBLEVBRTNCO0FBR0M7RUFERjtJQUVJLHlCQUF5QixFQUFBLEVBRTVCO0FBR0M7RUFERjtJQUVJLHdCQUF3QixFQUFBLEVBRTNCO0FBR0M7RUFERjtJQUVJLHlCQUF5QixFQUFBLEVBRTVCO0FBR0M7RUFERjtJQUVJLHdCQUF3QixFQUFBLEVBRTNCO0FBR0M7RUFERjtJQUVJLHlCQUF5QixFQUFBLEVBRTVCIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5kcC1tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpOyB9XG5cbi5kcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLmRwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjM2I5OWZjO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjM2I5OWZjIDAlLCAjOGFlZmM4IDEwMCUpOyB9XG5cbi5kcC1wZXJtYW5lbnQgLmRwIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLmRwLXBlcm1hbmVudCAuZHA6YmVmb3JlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4uZHAtYmVsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDB2dzsgfVxuXG4uZHAtcGVybWFuZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxuXG4uZHAtcGVybWFuZW50IC5kcCB7XG4gIHotaW5kZXg6IDA7IH1cblxuLmRwLW1vZGFsIC5kcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRlbSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuM3MgZm9yd2FyZHM7IH1cblxuLmRwLW1vbnRocyB7XG4gIHBhZGRpbmc6IDI0cHg7IH1cblxuLmRwLXllYXJzIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAvKiBIQUNLIGZvciBDaHJvbWUgb24gQW5kcm9pZCAqLyB9XG5cbi5kcC1jYWwtbW9udGgsXG4uZHAtY2FsLXllYXIsXG4uZHAtZGF5LFxuLmRwLW1vbnRoLFxuLmRwLXllYXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzNiNDA0ZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5kcC1jYWwtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNDVhNWJmO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4OyB9XG5cbi5kcC1uZXh0LFxuLmRwLXByZXYge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuLmRwLW5leHQ6Zm9jdXMsXG4uZHAtcHJldjpmb2N1cyxcbi5kcC1uZXh0OmhvdmVyLFxuLmRwLXByZXY6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDsgfVxuXG4uZHAtcHJldiB7XG4gIGxlZnQ6IDI0cHg7IH1cblxuLmRwLW5leHQge1xuICByaWdodDogMjRweDsgfVxuXG4uZHAtcHJldjpiZWZvcmUsXG4uZHAtbmV4dDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbiAgbWFyZ2luOiA5cHggMCA0MHB4IDRweDtcbiAgei1pbmRleDogMTsgfVxuXG4uZHAtcHJldjpiZWZvcmUge1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7IH1cblxuLmRwLW5leHQ6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxuXG4uZHAtY2FsLW1vbnRoLFxuLmRwLWNhbC15ZWFyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogMCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uZHAtY2FsLW1vbnRoIHtcbiAgbGVmdDogMTVweDsgfVxuXG4uZHAtY2FsLXllYXIge1xuICByaWdodDogMTVweDsgfVxuXG4uZHAtY2FsLWZvb3RlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTsgfVxuXG4uZHAtZGF5LXRvZGF5OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyOiA3cHggc29saWQgIzIyM2U1ZTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwOyB9XG5cbi5kcC1jbG9zZSxcbi5kcC1jbGVhcixcbi5kcC10b2RheSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5kcC1wZXJtYW5lbnQgLmRwLWNsb3NlLFxuLmRwLXBlcm1hbmVudCAuZHAtY2xlYXIge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5kcC1jbG9zZTphY3RpdmUsXG4uZHAtY2xlYXI6YWN0aXZlLFxuLmRwLXRvZGF5OmFjdGl2ZSxcbi5kcC1uZXh0OmFjdGl2ZSxcbi5kcC1wcmV2OmFjdGl2ZSxcbi5kcC1jYWwtbW9udGg6YWN0aXZlLFxuLmRwLWNhbC15ZWFyOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM0NWE1YmY7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMTIwMHB4KSB7XG4gIC5kcC1jbG9zZTpob3ZlcixcbiAgLmRwLWNsb3NlOmZvY3VzLFxuICAuZHAtY2xlYXI6aG92ZXIsXG4gIC5kcC1jbGVhcjpmb2N1cyxcbiAgLmRwLXRvZGF5OmhvdmVyLFxuICAuZHAtdG9kYXk6Zm9jdXMsXG4gIC5kcC1uZXh0OmhvdmVyLFxuICAuZHAtbmV4dDpmb2N1cyxcbiAgLmRwLXByZXY6aG92ZXIsXG4gIC5kcC1wcmV2OmZvY3VzLFxuICAuZHAtY2FsLW1vbnRoOmZvY3VzLFxuICAuZHAtY2FsLW1vbnRoOmhvdmVyLFxuICAuZHAtY2FsLXllYXI6aG92ZXIsXG4gIC5kcC1jYWwteWVhcjpmb2N1cyB7XG4gICAgYmFja2dyb3VuZDogIzQ1YTViZjtcbiAgICBjb2xvcjogd2hpdGU7IH0gfVxuXG4uZHAtY29sLWhlYWRlcixcbi5kcC1kYXkge1xuICB3aWR0aDogMTQuMjg1NzE0MjklO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5kcC1jb2wtaGVhZGVyIHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDhweCAwOyB9XG5cbi5kcC1tb250aCB7XG4gIHdpZHRoOiAzMyU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogOHB4OyB9XG5cbi5kcC15ZWFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCA0MHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZHAtZWRnZS1kYXkge1xuICBjb2xvcjogI2FhYTsgfVxuXG4uZHAtZGF5OmhvdmVyLFxuLmRwLW1vbnRoOmhvdmVyLFxuLmRwLXllYXI6aG92ZXIsXG4uZHAtY3VycmVudDpmb2N1cyxcbi5kcC1jdXJyZW50LFxuLmRwLWRheTpmb2N1cyxcbi5kcC1tb250aDpmb2N1cyxcbi5kcC15ZWFyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogIzQ1YTViZjtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5kcC1zZWxlY3RlZDpob3Zlcixcbi5kcC1zZWxlY3RlZDpmb2N1cyxcbi5kcC1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICM0NWE1YmY7XG4gIGNvbG9yOiAjZmZmOyB9XG5cbi5kcC1kYXktZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkZGQ7IH1cblxuLmRwLWRheS1kaXNhYmxlZDpmb2N1cyxcbi5kcC1kYXktZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkOyB9XG5cbi5kcC1mb2N1c2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlOyB9XG5cbi8qIFJlc3BvbnNpdmUgb3ZlcnJpZGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpLCAobWF4LWhlaWdodDogNDgwcHgpIHtcbiAgLmRwLW1vZGFsIC5kcCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aWR0aDogMTAwJTsgfVxuICAuZHAtZGF5LW9mLXdlZWssXG4gIC5kcC1kYXkge1xuICAgIHBhZGRpbmc6IDhweDsgfSB9XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7IH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH0gfVxuXG5odG1sLFxuYm9keSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgQXJpYWwsIFwiTm90byBTYW5zIENKSyBUQ1wiLCBcIuaWh+aziempm+ato+m7kVwiLCBcIldlblF1YW5ZaSBaZW4gSGVpXCIsIFwi5YS36buRIFByb1wiLCBcIkxpSGVpIFByb1wiLCBcIuW+rui7n+ato+m7kemrlFwiLCBcIk1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBcIuaomealt+mrlFwiLCBERkthaS1TQiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgaHRtbCxcbiAgICBib2R5IHtcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtOyB9IH1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG5cbm9sLFxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDsgfVxuXG5pbnB1dCxcbmJ1dHRvbixcbmltYWdlIHtcbiAgb3V0bGluZTogMDsgfVxuXG4uZnVsbCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4ubWkge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7IH1cblxuLm1vIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29ucyBPdXRsaW5lZFwiOyB9XG5cbltjbGFzcyo9XCIgYWktXCJdLFxuW2NsYXNzXj1cImFpLVwiXSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjZmZmZmZmLCAjYmVlN2ZjKSBmaXhlZCB0b3A7IH1cblxuLmxpbWl0IHtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG4gIC5saW1pdC5wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAydm1pbiA0dm1pbjsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIC5saW1pdCB7XG4gICAgICB3aWR0aDogMTAwJTsgfSB9XG5cbi5mMCB7XG4gIGZsZXg6IDAgMCBhdXRvOyB9XG5cbi5mMSB7XG4gIGZsZXg6IDEgMSBhdXRvOyB9XG5cbi5mMiB7XG4gIGZsZXg6IDIgMiBhdXRvOyB9XG5cbi5mMyB7XG4gIGZsZXg6IDMgMyBhdXRvOyB9XG5cbi5mNCB7XG4gIGZsZXg6IDQgNCBhdXRvOyB9XG5cbi5mNSB7XG4gIGZsZXg6IDUgNSBhdXRvOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAubGctaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gIC5sZy1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLm1kLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5tZC1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgLnNzLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gIC5zcy1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnhzLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC54cy1zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9IH1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS5zY3NzXCI7XG4uZHAtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbn1cblxuLmRwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAycHggMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmRwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBoZWlnaHQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjM2I5OWZjO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjM2I5OWZjIDAlLCAjOGFlZmM4IDEwMCUpO1xufVxuXG4uZHAtcGVybWFuZW50IC5kcCB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICAvL2JvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5kcC1wZXJtYW5lbnQgLmRwOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcC1iZWxvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xufVxuXG4uZHAtcGVybWFuZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDAuOGVtO1xuICAvL3dpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kcC1wZXJtYW5lbnQgLmRwIHtcbiAgei1pbmRleDogMDtcbn1cblxuLmRwLW1vZGFsIC5kcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRlbSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBhbmltYXRpb246IHNsaWRlLXVwIDAuM3MgZm9yd2FyZHM7XG59XG5cbi5kcC1tb250aHMge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uZHAteWVhcnMge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7IC8qIEhBQ0sgZm9yIENocm9tZSBvbiBBbmRyb2lkICovXG59XG5cbi5kcC1jYWwtbW9udGgsXG4uZHAtY2FsLXllYXIsXG4uZHAtZGF5LFxuLmRwLW1vbnRoLFxuLmRwLXllYXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogIzNiNDA0ZDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZHAtY2FsLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogJG1haW47XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kcC1uZXh0LFxuLmRwLXByZXYge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3A6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5kcC1uZXh0OmZvY3VzLFxuLmRwLXByZXY6Zm9jdXMsXG4uZHAtbmV4dDpob3Zlcixcbi5kcC1wcmV2OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5kcC1wcmV2IHtcbiAgbGVmdDogMjRweDtcbn1cblxuLmRwLW5leHQge1xuICByaWdodDogMjRweDtcbn1cblxuLmRwLXByZXY6YmVmb3JlLFxuLmRwLW5leHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIG1hcmdpbjogOXB4IDAgNDBweCA0cHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcC1wcmV2OmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmRwLW5leHQ6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmRwLWNhbC1tb250aCxcbi5kcC1jYWwteWVhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kcC1jYWwtbW9udGgge1xuICBsZWZ0OiAxNXB4O1xufVxuXG4uZHAtY2FsLXllYXIge1xuICByaWdodDogMTVweDtcbn1cblxuLmRwLWNhbC1mb290ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbi5kcC1kYXktdG9kYXk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBib3JkZXI6IDdweCBzb2xpZCAkc2Vjb25kO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5kcC1jbG9zZSxcbi5kcC1jbGVhcixcbi5kcC10b2RheSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMzJTtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZHAtcGVybWFuZW50IC5kcC1jbG9zZSxcbi5kcC1wZXJtYW5lbnQgLmRwLWNsZWFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRwLWNsb3NlOmFjdGl2ZSxcbi5kcC1jbGVhcjphY3RpdmUsXG4uZHAtdG9kYXk6YWN0aXZlLFxuLmRwLW5leHQ6YWN0aXZlLFxuLmRwLXByZXY6YWN0aXZlLFxuLmRwLWNhbC1tb250aDphY3RpdmUsXG4uZHAtY2FsLXllYXI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogJG1haW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDEyMDBweCkge1xuICAuZHAtY2xvc2U6aG92ZXIsXG4gIC5kcC1jbG9zZTpmb2N1cyxcbiAgLmRwLWNsZWFyOmhvdmVyLFxuICAuZHAtY2xlYXI6Zm9jdXMsXG4gIC5kcC10b2RheTpob3ZlcixcbiAgLmRwLXRvZGF5OmZvY3VzLFxuICAuZHAtbmV4dDpob3ZlcixcbiAgLmRwLW5leHQ6Zm9jdXMsXG4gIC5kcC1wcmV2OmhvdmVyLFxuICAuZHAtcHJldjpmb2N1cyxcbiAgLmRwLWNhbC1tb250aDpmb2N1cyxcbiAgLmRwLWNhbC1tb250aDpob3ZlcixcbiAgLmRwLWNhbC15ZWFyOmhvdmVyLFxuICAuZHAtY2FsLXllYXI6Zm9jdXMge1xuICAgIGJhY2tncm91bmQ6ICRtYWluO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uZHAtY29sLWhlYWRlcixcbi5kcC1kYXkge1xuICB3aWR0aDogMTQuMjg1NzE0MjklO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZHAtY29sLWhlYWRlciB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiAkbGlnaHRHcmV5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBwYWRkaW5nOiA4cHggMDtcbn1cblxuLmRwLW1vbnRoIHtcbiAgd2lkdGg6IDMzJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5kcC15ZWFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweCA0MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRwLWVkZ2UtZGF5IHtcbiAgY29sb3I6ICNhYWE7XG59XG5cbi5kcC1kYXk6aG92ZXIsXG4uZHAtbW9udGg6aG92ZXIsXG4uZHAteWVhcjpob3Zlcixcbi5kcC1jdXJyZW50OmZvY3VzLFxuLmRwLWN1cnJlbnQsXG4uZHAtZGF5OmZvY3VzLFxuLmRwLW1vbnRoOmZvY3VzLFxuLmRwLXllYXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAkbWFpbjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZHAtc2VsZWN0ZWQ6aG92ZXIsXG4uZHAtc2VsZWN0ZWQ6Zm9jdXMsXG4uZHAtc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAkbWFpbjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kcC1kYXktZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNkZGQ7XG59XG5cbi5kcC1kYXktZGlzYWJsZWQ6Zm9jdXMsXG4uZHAtZGF5LWRpc2FibGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuLmRwLWZvY3VzZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi8qIFJlc3BvbnNpdmUgb3ZlcnJpZGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpLCAobWF4LWhlaWdodDogNDgwcHgpIHtcbiAgLmRwLW1vZGFsIC5kcCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB3aWR0aDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5kcC1kYXktb2Ytd2VlayxcbiAgLmRwLWRheSB7XG4gICAgcGFkZGluZzogOHB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtdXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbn1cbiIsIiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoI2ZmZmZmZiwgI2JlZTdmYyk7XG4kbWFpbjogIzQ1YTViZjtcbiRzZWNvbmQ6ICMyMjNlNWU7XG4kbGlnaHRlcjogcmdiYSh3aGl0ZSwgMC4zKTtcbiRkYXJrZXI6IHJnYmEoYmxhY2ssIDAuMyk7XG4kb3BhY2l0eUJvcmRlcjogcmdiYShibGFjaywgMC4xKTtcbiRvcGFjaXR5V2hpdGU6IHJnYmEod2hpdGUsIDAuNik7XG4kdG9vbHM6IHJnYmEod2hpdGUsIDAuNzUpO1xuJGFjdGl2ZTogcmdiYShibGFjaywgMC4zKTtcblxuJGxpZ2h0R3JleTogI2RkZDtcbiRncmV5OiAjOTk5O1xuJGRhcmtHcmV5OiAjMzMzO1xuXG4kZ3JlZW46ICM4M2I4MWE7XG4keWVsbG93OiAjZTViODIyO1xuJHJlZDogI2VkNjE2MTtcblxuJGZhY2Vib29rOiAjM2I1OTk4O1xuJGdvb2dsZTogI2RkNGIzOTtcbiRsaW5lOiAjMDBjMzAwO1xuJHR3aXR0ZXI6ICMwMGFjZWQ7XG4kaW5zdGFncmFtOiByYWRpYWwtZ3JhZGllbnQoXG4gIGNpcmNsZSBhdCAzMCUgMTA3JSxcbiAgI2ZkZjQ5NyAwJSxcbiAgI2ZkZjQ5NyA1JSxcbiAgI2ZkNTk0OSA0NSUsXG4gICNkNjI0OWYgNjAlLFxuICAjMjg1YWViIDkwJVxuKTtcblxuJHNxdWFyZTogM3JlbTtcbiIsIkBpbXBvcnQgXCIuL3RoZW1lLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2FwcC9jb21wb25lbnQvY2FsZW5kYXIvdGlueS1kYXRlcGlja2VyLnNjc3NcIjtcbmh0bWwsXG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgXCJOb3RvIFNhbnMgQ0pLIFRDXCIsIFwi5paH5rOJ6amb5q2j6buRXCIsXG4gICAgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIuWEt+m7kSBQcm9cIiwgXCJMaUhlaSBQcm9cIiwgXCLlvq7ou5/mraPpu5Hpq5RcIixcbiAgICBcIk1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBcIuaomealt+mrlFwiLCBERkthaS1TQiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxub2wsXG51bCxcbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbmltYWdlIHtcbiAgb3V0bGluZTogMDtcbn1cblxuLmZ1bGwge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWkge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG59XG4ubW8ge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zIE91dGxpbmVkXCI7XG59XG5cbltjbGFzcyo9XCIgYWktXCJdLFxuW2NsYXNzXj1cImFpLVwiXSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZCBmaXhlZCB0b3A7XG59XG5cbi5saW1pdCB7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogMTA0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgJi5wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAydm1pbiA0dm1pbjtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBmb3IgJGkgZnJvbSAwIHRocm91Z2ggNSB7XG4gIC5mI3skaX0ge1xuICAgIGZsZXg6ICRpICRpIGF1dG87XG4gIH1cbn1cblxuLmxnLWhpZGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmxnLXNob3cge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5tZC1oaWRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm1kLXNob3cge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnNzLWhpZGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc3Mtc2hvdyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ueHMtaGlkZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi54cy1zaG93IHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG4iXX0= */", '', '']]

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

/***/ 3:
/*!************************************************!*\
  !*** multi ./src/theme.scss ./src/styles.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/yuching/Desktop/ACER/forAcerWEB/src/theme.scss */"./src/theme.scss");
module.exports = __webpack_require__(/*! /Users/yuching/Desktop/ACER/forAcerWEB/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map