(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "@charset \"UTF-8\";\n.dp-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.75); }\n.dp {\n  position: relative;\n  background: #fff;\n  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.25);\n  line-height: 1.4;\n  border-radius: 4px;\n  max-height: 400px;\n  z-index: 1000;\n  padding-top: 6px;\n  overflow: hidden;\n  -webkit-tap-highlight-color: transparent; }\n.dp:before {\n  content: \" \";\n  height: 6px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  background: #3b99fc;\n  background: linear-gradient(-90deg, #3b99fc 0%, #8aefc8 100%); }\n.dp-permanent .dp {\n  padding-top: 0;\n  box-shadow: none; }\n.dp-permanent .dp:before {\n  display: none; }\n.dp-below {\n  position: absolute;\n  font-size: 0.8em;\n  width: 400px;\n  max-width: 100vw; }\n.dp-permanent {\n  position: relative;\n  font-size: 0.8em;\n  max-width: 100vw;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.dp-permanent .dp {\n  z-index: 0; }\n.dp-modal .dp {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  max-width: 600px;\n  width: calc(100% - 4em);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-animation: slide-up 0.3s forwards;\n          animation: slide-up 0.3s forwards; }\n.dp-months {\n  padding: 24px; }\n.dp-years {\n  box-sizing: border-box;\n  max-height: 400px;\n  padding: 8px 0;\n  overflow: auto !important;\n  /* HACK for Chrome on Android */ }\n.dp-cal-month,\n.dp-cal-year,\n.dp-day,\n.dp-month,\n.dp-year {\n  box-sizing: border-box;\n  text-align: center;\n  text-decoration: none;\n  position: relative;\n  color: #3b404d;\n  border-radius: 2px;\n  border: 0;\n  background: transparent; }\n.dp-cal-header {\n  position: relative;\n  text-align: center;\n  color: #fff;\n  background: #45a5bf;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px; }\n.dp-next,\n.dp-prev {\n  width: 30px;\n  height: 30px;\n  overflow: hidden;\n  top: 10px;\n  color: #fff;\n  border-radius: 2px;\n  border: 0;\n  background: transparent; }\n.dp-next:focus,\n.dp-prev:focus,\n.dp-next:hover,\n.dp-prev:hover {\n  outline: none;\n  color: inherit; }\n.dp-prev {\n  left: 24px; }\n.dp-next {\n  right: 24px; }\n.dp-prev:before,\n.dp-next:before {\n  content: \"\";\n  border: 2px solid;\n  width: 10px;\n  height: 10px;\n  display: inline-block;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  transition: border-color 0.2s;\n  margin: 9px 0 40px 4px;\n  z-index: 1; }\n.dp-prev:before {\n  border-right: 0;\n  border-bottom: 0; }\n.dp-next:before {\n  border-left: 0;\n  border-top: 0;\n  margin-left: 0;\n  margin-right: 4px; }\n.dp-cal-month,\n.dp-cal-year {\n  display: inline-block;\n  outline: none;\n  color: #fff;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 0 5px;\n  position: relative; }\n.dp-cal-month::before {\n  vertical-align: middle;\n  content: \"expand_more\";\n  font-family: \"Material Icons\";\n  font-size: 1.2rem; }\n.dp-cal-year:after {\n  vertical-align: middle;\n  content: \"expand_more\";\n  font-family: \"Material Icons\";\n  font-size: 1.2rem; }\n.dp-cal-footer {\n  display: none;\n  text-align: center;\n  background: #f5f5f5; }\n.dp-day-today:after {\n  content: \"\";\n  height: 0;\n  width: 0;\n  border: 7px solid #223e5e;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  position: absolute;\n  top: 0;\n  right: 0; }\n.dp-close,\n.dp-clear,\n.dp-today {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 33%;\n  padding: 8px;\n  text-decoration: none;\n  color: inherit;\n  border: 0;\n  background: transparent; }\n.dp-permanent .dp-close,\n.dp-permanent .dp-clear {\n  display: none; }\n.dp-close:active,\n.dp-clear:active,\n.dp-today:active,\n.dp-next:active,\n.dp-prev:active,\n.dp-cal-month:active,\n.dp-cal-year:active {\n  background: #45a5bf;\n  color: white; }\n@media screen and (min-device-width: 1200px) {\n  .dp-close:hover,\n  .dp-close:focus,\n  .dp-clear:hover,\n  .dp-clear:focus,\n  .dp-today:hover,\n  .dp-today:focus,\n  .dp-next:hover,\n  .dp-next:focus,\n  .dp-prev:hover,\n  .dp-prev:focus,\n  .dp-cal-month:focus,\n  .dp-cal-month:hover,\n  .dp-cal-year:hover,\n  .dp-cal-year:focus {\n    background: #45a5bf;\n    color: white; } }\n.dp-col-header,\n.dp-day {\n  width: 14.28571429%;\n  display: inline-block;\n  padding: 8px;\n  text-align: center; }\n.dp-col-header {\n  color: #000;\n  background: #ddd;\n  text-transform: uppercase;\n  font-weight: 300;\n  font-size: 0.8em;\n  padding: 8px 0; }\n.dp-month {\n  width: 20%;\n  display: inline-block;\n  padding: 8px; }\n.dp-year {\n  display: block;\n  padding: 8px 40px;\n  width: 100%; }\n.dp-edge-day {\n  color: #aaa; }\n.dp-day:hover,\n.dp-month:hover,\n.dp-year:hover,\n.dp-current:focus,\n.dp-current,\n.dp-day:focus,\n.dp-month:focus,\n.dp-year:focus {\n  outline: none;\n  background: #45a5bf;\n  color: white; }\n.dp-selected:hover,\n.dp-selected:focus,\n.dp-selected {\n  background: #45a5bf;\n  color: #fff; }\n.dp-day-disabled {\n  background: transparent;\n  color: #ddd; }\n.dp-day-disabled:focus,\n.dp-day-disabled:hover {\n  background: #ddd; }\n.dp-focuser {\n  position: absolute;\n  z-index: 0;\n  top: 50%;\n  left: 50%; }\n/* Responsive overrides */\n@media (max-width: 480px), (max-height: 480px) {\n  .dp-modal .dp {\n    font-size: 0.9em;\n    width: auto;\n    width: 100%; }\n  .dp-day-of-week,\n  .dp-day {\n    padding: 8px; } }\n@-webkit-keyframes slide-up {\n  0% {\n    -webkit-transform: translate(-50%, 100%);\n            transform: translate(-50%, 100%); }\n  100% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); } }\n@keyframes slide-up {\n  0% {\n    -webkit-transform: translate(-50%, 100%);\n            transform: translate(-50%, 100%); }\n  100% {\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); } }\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica, Arial, \"Noto Sans CJK TC\", \"文泉驛正黑\", \"WenQuanYi Zen Hei\", \"儷黑 Pro\", \"LiHei Pro\", \"微軟正黑體\", \"Microsoft JhengHei\", \"標楷體\", DFKai-SB, sans-serif;\n  font-size: 1rem; }\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n  -webkit-overflow-scrolling: touch; }\nol,\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  display: none; }\n.full {\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  position: relative; }\n.mi {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  font-size: 2rem;\n  font-family: \"Material Icons\"; }\n.mo {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: inline-block;\n  font-size: 2rem;\n  font-family: \"Material Icons Outlined\"; }\n[class*=\" ai-\"],\n[class^=\"ai-\"] {\n  font-size: 2rem;\n  cursor: pointer; }\n.container {\n  width: 100%;\n  overflow: auto;\n  background: #eee fixed top; }\n.content-bg {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: #eee fixed top;\n  z-index: -1; }\n.limit {\n  width: 90%;\n  max-width: 1280px;\n  margin: 0 auto; }\n.limit.padding {\n    padding: 2vmin 4vmin;\n    padding-bottom: 3rem; }\n@media screen and (max-width: 640px) {\n    .limit {\n      width: 100%; } }\n.flex {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center; }\n.fc {\n  display: flex;\n  flex-direction: column; }\nbutton {\n  cursor: pointer; }\nbutton:not([class^=\"dp-\"]) {\n  position: relative; }\nbutton:not([class^=\"dp-\"])::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 5px;\n    background: inherit;\n    mix-blend-mode: screen;\n    transition: opacity 0.25s;\n    opacity: 0; }\nbutton:not([class^=\"dp-\"]):hover::before {\n    opacity: 0.5; }\ninput {\n  line-height: 1.8rem; }\ninput::-webkit-input-placeholder {\n    color: #999; }\ninput::-moz-placeholder {\n    color: #999; }\ninput::-ms-input-placeholder {\n    color: #999; }\ninput::placeholder {\n    color: #999; }\n.f0 {\n  flex: 0 0 auto; }\n.f1 {\n  flex: 1 1 auto; }\n.f2 {\n  flex: 2 2 auto; }\n.f3 {\n  flex: 3 3 auto; }\n.f4 {\n  flex: 4 4 auto; }\n.f5 {\n  flex: 5 5 auto; }\n@media screen and (min-width: 1440px) {\n  .lg-hide {\n    display: none !important; } }\n.lg-show {\n  display: none; }\n@media screen and (min-width: 1440px) {\n    .lg-show {\n      display: block !important; } }\n@media screen and (max-width: 960px) {\n  .md-hide {\n    display: none !important; } }\n.md-show {\n  display: none; }\n@media screen and (max-width: 960px) {\n    .md-show {\n      display: block !important; } }\n@media screen and (max-width: 640px) {\n  .ss-hide {\n    display: none !important; } }\n.ss-show {\n  display: none; }\n@media screen and (max-width: 640px) {\n    .ss-show {\n      display: block !important; } }\n@media screen and (max-width: 480px) {\n  .xs-hide {\n    display: none !important; } }\n.xs-show {\n  display: none; }\n@media screen and (max-width: 480px) {\n    .xs-show {\n      display: block !important; } }\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active {\n  transition: background-color 5000s ease-in-out 0s; }\n.cards {\n  display: flex;\n  justify-content: flex-start;\n  margin-right: -2vw;\n  flex-wrap: wrap; }\n.cards.nowrap {\n    margin: -2vw;\n    margin-left: 0;\n    padding: 2vw 0;\n    flex-wrap: nowrap;\n    overflow-x: auto; }\n.cards.nowrap::-webkit-scrollbar {\n      height: 0px !important;\n      width: 0px !important;\n      display: none !important; }\n.cards.nowrap > * {\n      flex: 0 0 auto; }\n#fb ._2p3a,\n#fb .uiScaledImageContainer,\n#fb ._2zfr {\n  width: 100% !important; }\n@media screen and (max-width: 480px) {\n  h1 {\n    font-size: 7vw; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3l1Y2hpbmcvRGVza3RvcC9BQ0VSL2ZvckFjZXJXRUIvc3JjL2FwcC9jb21wb25lbnQvY2FsZW5kYXIvdGlueS1kYXRlcGlja2VyLnNjc3MiLCIvVXNlcnMveXVjaGluZy9EZXNrdG9wL0FDRVIvZm9yQWNlcldFQi9zcmMvdGhlbWUuc2NzcyIsIi9Vc2Vycy95dWNoaW5nL0Rlc2t0b3AvQUNFUi9mb3JBY2VyV0VCL3NyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHFDQUFxQyxFQUFBO0FBR3ZDO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0NBQXdDLEVBQUE7QUFHMUM7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsNkRBQTZELEVBQUE7QUFHL0Q7RUFDRSxjQUFjO0VBRWQsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUVoQixnQkFBZ0I7RUFDaEIseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxVQUFVLEVBQUE7QUFHWjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIs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QixFQUFBLEVBRTNCO0FBRUQ7RUFDRSxhQUFhLEVBQUE7QUFDYjtJQUZGO01BR0kseUJBQXlCLEVBQUEsRUFFNUI7QUFFRDs7OztFQUlFLGlEQUFpRCxFQUFBO0FBR25EO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0FBSmpCO0lBTUksWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0FBVnBCO01BWU0sc0JBQXNCO01BQ3RCLHFCQUFxQjtNQUNyQix3QkFBd0IsRUFBQTtBQWQ5QjtNQWlCTSxjQUFjLEVBQUE7QUFLcEI7OztFQUlJLHNCQUFzQixFQUFBO0FBS3hCO0VBREY7SUFFSSxjQUFjLEVBQUEsRUFFakIiLCJmaWxlIjoiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uZHAtbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTsgfVxuXG4uZHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi5kcDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzNiOTlmYztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgIzNiOTlmYyAwJSwgIzhhZWZjOCAxMDAlKTsgfVxuXG4uZHAtcGVybWFuZW50IC5kcCB7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBib3gtc2hhZG93OiBub25lOyB9XG5cbi5kcC1wZXJtYW5lbnQgLmRwOmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmRwLWJlbG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDAuOGVtO1xuICB3aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwdnc7IH1cblxuLmRwLXBlcm1hbmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cblxuLmRwLXBlcm1hbmVudCAuZHAge1xuICB6LWluZGV4OiAwOyB9XG5cbi5kcC1tb2RhbCAuZHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0ZW0pO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjNzIGZvcndhcmRzOyB9XG5cbi5kcC1tb250aHMge1xuICBwYWRkaW5nOiAyNHB4OyB9XG5cbi5kcC15ZWFycyB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgLyogSEFDSyBmb3IgQ2hyb21lIG9uIEFuZHJvaWQgKi8gfVxuXG4uZHAtY2FsLW1vbnRoLFxuLmRwLWNhbC15ZWFyLFxuLmRwLWRheSxcbi5kcC1tb250aCxcbi5kcC15ZWFyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMzYjQwNGQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuXG4uZHAtY2FsLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzQ1YTViZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDsgfVxuXG4uZHAtbmV4dCxcbi5kcC1wcmV2IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbi5kcC1uZXh0OmZvY3VzLFxuLmRwLXByZXY6Zm9jdXMsXG4uZHAtbmV4dDpob3Zlcixcbi5kcC1wcmV2OmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7IH1cblxuLmRwLXByZXYge1xuICBsZWZ0OiAyNHB4OyB9XG5cbi5kcC1uZXh0IHtcbiAgcmlnaHQ6IDI0cHg7IH1cblxuLmRwLXByZXY6YmVmb3JlLFxuLmRwLW5leHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnM7XG4gIG1hcmdpbjogOXB4IDAgNDBweCA0cHg7XG4gIHotaW5kZXg6IDE7IH1cblxuLmRwLXByZXY6YmVmb3JlIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItYm90dG9tOiAwOyB9XG5cbi5kcC1uZXh0OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cblxuLmRwLWNhbC1tb250aCxcbi5kcC1jYWwteWVhciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmRwLWNhbC1tb250aDo6YmVmb3JlIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29udGVudDogXCJleHBhbmRfbW9yZVwiO1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBmb250LXNpemU6IDEuMnJlbTsgfVxuXG4uZHAtY2FsLXllYXI6YWZ0ZXIge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb250ZW50OiBcImV4cGFuZF9tb3JlXCI7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XG5cbi5kcC1jYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XG5cbi5kcC1kYXktdG9kYXk6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBib3JkZXI6IDdweCBzb2xpZCAjMjIzZTVlO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7IH1cblxuLmRwLWNsb3NlLFxuLmRwLWNsZWFyLFxuLmRwLXRvZGF5IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzMlO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cblxuLmRwLXBlcm1hbmVudCAuZHAtY2xvc2UsXG4uZHAtcGVybWFuZW50IC5kcC1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmRwLWNsb3NlOmFjdGl2ZSxcbi5kcC1jbGVhcjphY3RpdmUsXG4uZHAtdG9kYXk6YWN0aXZlLFxuLmRwLW5leHQ6YWN0aXZlLFxuLmRwLXByZXY6YWN0aXZlLFxuLmRwLWNhbC1tb250aDphY3RpdmUsXG4uZHAtY2FsLXllYXI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzQ1YTViZjtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmRwLWNsb3NlOmhvdmVyLFxuICAuZHAtY2xvc2U6Zm9jdXMsXG4gIC5kcC1jbGVhcjpob3ZlcixcbiAgLmRwLWNsZWFyOmZvY3VzLFxuICAuZHAtdG9kYXk6aG92ZXIsXG4gIC5kcC10b2RheTpmb2N1cyxcbiAgLmRwLW5leHQ6aG92ZXIsXG4gIC5kcC1uZXh0OmZvY3VzLFxuICAuZHAtcHJldjpob3ZlcixcbiAgLmRwLXByZXY6Zm9jdXMsXG4gIC5kcC1jYWwtbW9udGg6Zm9jdXMsXG4gIC5kcC1jYWwtbW9udGg6aG92ZXIsXG4gIC5kcC1jYWwteWVhcjpob3ZlcixcbiAgLmRwLWNhbC15ZWFyOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDVhNWJmO1xuICAgIGNvbG9yOiB3aGl0ZTsgfSB9XG5cbi5kcC1jb2wtaGVhZGVyLFxuLmRwLWRheSB7XG4gIHdpZHRoOiAxNC4yODU3MTQyOSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmRwLWNvbC1oZWFkZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogI2RkZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogOHB4IDA7IH1cblxuLmRwLW1vbnRoIHtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHg7IH1cblxuLmRwLXllYXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4IDQwcHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5kcC1lZGdlLWRheSB7XG4gIGNvbG9yOiAjYWFhOyB9XG5cbi5kcC1kYXk6aG92ZXIsXG4uZHAtbW9udGg6aG92ZXIsXG4uZHAteWVhcjpob3Zlcixcbi5kcC1jdXJyZW50OmZvY3VzLFxuLmRwLWN1cnJlbnQsXG4uZHAtZGF5OmZvY3VzLFxuLmRwLW1vbnRoOmZvY3VzLFxuLmRwLXllYXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNDVhNWJmO1xuICBjb2xvcjogd2hpdGU7IH1cblxuLmRwLXNlbGVjdGVkOmhvdmVyLFxuLmRwLXNlbGVjdGVkOmZvY3VzLFxuLmRwLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzQ1YTViZjtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmRwLWRheS1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI2RkZDsgfVxuXG4uZHAtZGF5LWRpc2FibGVkOmZvY3VzLFxuLmRwLWRheS1kaXNhYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7IH1cblxuLmRwLWZvY3VzZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7IH1cblxuLyogUmVzcG9uc2l2ZSBvdmVycmlkZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCksIChtYXgtaGVpZ2h0OiA0ODBweCkge1xuICAuZHAtbW9kYWwgLmRwIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gIC5kcC1kYXktb2Ytd2VlayxcbiAgLmRwLWRheSB7XG4gICAgcGFkZGluZzogOHB4OyB9IH1cblxuQGtleWZyYW1lcyBzbGlkZS11cCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMDAlKTsgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfSB9XG5cbmh0bWwsXG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgXCJOb3RvIFNhbnMgQ0pLIFRDXCIsIFwi5paH5rOJ6amb5q2j6buRXCIsIFwiV2VuUXVhbllpIFplbiBIZWlcIiwgXCLlhLfpu5EgUHJvXCIsIFwiTGlIZWkgUHJvXCIsIFwi5b6u6Luf5q2j6buR6auUXCIsIFwiTWljcm9zb2Z0IEpoZW5nSGVpXCIsIFwi5qiZ5qW36auUXCIsIERGS2FpLVNCLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07IH1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG5cbm9sLFxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDsgfVxuXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLmZ1bGwge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLm1pIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiOyB9XG5cbi5tbyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWRcIjsgfVxuXG5bY2xhc3MqPVwiIGFpLVwiXSxcbltjbGFzc149XCJhaS1cIl0ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjZWVlIGZpeGVkIHRvcDsgfVxuXG4uY29udGVudC1iZyB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6ICNlZWUgZml4ZWQgdG9wO1xuICB6LWluZGV4OiAtMTsgfVxuXG4ubGltaXQge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luOiAwIGF1dG87IH1cbiAgLmxpbWl0LnBhZGRpbmcge1xuICAgIHBhZGRpbmc6IDJ2bWluIDR2bWluO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgLmxpbWl0IHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cblxuLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLmZjIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuYnV0dG9uOm5vdChbY2xhc3NePVwiZHAtXCJdKSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICBidXR0b246bm90KFtjbGFzc149XCJkcC1cIl0pOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICBtaXgtYmxlbmQtbW9kZTogc2NyZWVuO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXM7XG4gICAgb3BhY2l0eTogMDsgfVxuICBidXR0b246bm90KFtjbGFzc149XCJkcC1cIl0pOmhvdmVyOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDAuNTsgfVxuXG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07IH1cbiAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzk5OTsgfVxuXG4uZjAge1xuICBmbGV4OiAwIDAgYXV0bzsgfVxuXG4uZjEge1xuICBmbGV4OiAxIDEgYXV0bzsgfVxuXG4uZjIge1xuICBmbGV4OiAyIDIgYXV0bzsgfVxuXG4uZjMge1xuICBmbGV4OiAzIDMgYXV0bzsgfVxuXG4uZjQge1xuICBmbGV4OiA0IDQgYXV0bzsgfVxuXG4uZjUge1xuICBmbGV4OiA1IDUgYXV0bzsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgLmxnLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XG5cbi5sZy1zaG93IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAubGctc2hvdyB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcbiAgLm1kLWhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfSB9XG5cbi5tZC1zaG93IHtcbiAgZGlzcGxheTogbm9uZTsgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIC5tZC1zaG93IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IH0gfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDBweCkge1xuICAuc3MtaGlkZSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9IH1cblxuLnNzLXNob3cge1xuICBkaXNwbGF5OiBub25lOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgLnNzLXNob3cge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfSB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC54cy1oaWRlIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH0gfVxuXG4ueHMtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAueHMtc2hvdyB7XG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50OyB9IH1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzOyB9XG5cbi5jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAtMnZ3O1xuICBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgLmNhcmRzLm5vd3JhcCB7XG4gICAgbWFyZ2luOiAtMnZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDJ2dyAwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87IH1cbiAgICAuY2FyZHMubm93cmFwOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBoZWlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gICAgLmNhcmRzLm5vd3JhcCA+ICoge1xuICAgICAgZmxleDogMCAwIGF1dG87IH1cblxuI2ZiIC5fMnAzYSxcbiNmYiAudWlTY2FsZWRJbWFnZUNvbnRhaW5lcixcbiNmYiAuXzJ6ZnIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIGgxIHtcbiAgICBmb250LXNpemU6IDd2dzsgfSB9XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUuc2Nzc1wiO1xuLmRwLW1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG59XG5cbi5kcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5kcDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogIzNiOTlmYztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC05MGRlZywgIzNiOTlmYyAwJSwgIzhhZWZjOCAxMDAlKTtcbn1cblxuLmRwLXBlcm1hbmVudCAuZHAge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgLy9ib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZHAtcGVybWFuZW50IC5kcDpiZWZvcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZHAtYmVsb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbn1cblxuLmRwLXBlcm1hbmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgLy93aWR0aDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZHAtcGVybWFuZW50IC5kcCB7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5kcC1tb2RhbCAuZHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0ZW0pO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjNzIGZvcndhcmRzO1xufVxuXG4uZHAtbW9udGhzIHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLmRwLXllYXJzIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50OyAvKiBIQUNLIGZvciBDaHJvbWUgb24gQW5kcm9pZCAqL1xufVxuXG4uZHAtY2FsLW1vbnRoLFxuLmRwLWNhbC15ZWFyLFxuLmRwLWRheSxcbi5kcC1tb250aCxcbi5kcC15ZWFyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMzYjQwNGQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRwLWNhbC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICRtYWluO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZHAtbmV4dCxcbi5kcC1wcmV2IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZHAtbmV4dDpmb2N1cyxcbi5kcC1wcmV2OmZvY3VzLFxuLmRwLW5leHQ6aG92ZXIsXG4uZHAtcHJldjpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4uZHAtcHJldiB7XG4gIGxlZnQ6IDI0cHg7XG59XG5cbi5kcC1uZXh0IHtcbiAgcmlnaHQ6IDI0cHg7XG59XG5cbi5kcC1wcmV2OmJlZm9yZSxcbi5kcC1uZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzO1xuICBtYXJnaW46IDlweCAwIDQwcHggNHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHAtcHJldjpiZWZvcmUge1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5kcC1uZXh0OmJlZm9yZSB7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5kcC1jYWwtbW9udGgsXG4uZHAtY2FsLXllYXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAwIDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHAtY2FsLW1vbnRoIHtcbiAgLy8gbGVmdDogMTVweDtcbiAgJjo6YmVmb3JlIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbnRlbnQ6IFwiZXhwYW5kX21vcmVcIjtcbiAgICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5cbi5kcC1jYWwteWVhciB7XG4gIC8vIHJpZ2h0OiAxNXB4O1xuICAmOmFmdGVyIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbnRlbnQ6IFwiZXhwYW5kX21vcmVcIjtcbiAgICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB9XG59XG5cbi5kcC1jYWwtZm9vdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xufVxuXG4uZHAtZGF5LXRvZGF5OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgYm9yZGVyOiA3cHggc29saWQgJHNlY29uZDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZHAtY2xvc2UsXG4uZHAtY2xlYXIsXG4uZHAtdG9kYXkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzMyU7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmRwLXBlcm1hbmVudCAuZHAtY2xvc2UsXG4uZHAtcGVybWFuZW50IC5kcC1jbGVhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kcC1jbG9zZTphY3RpdmUsXG4uZHAtY2xlYXI6YWN0aXZlLFxuLmRwLXRvZGF5OmFjdGl2ZSxcbi5kcC1uZXh0OmFjdGl2ZSxcbi5kcC1wcmV2OmFjdGl2ZSxcbi5kcC1jYWwtbW9udGg6YWN0aXZlLFxuLmRwLWNhbC15ZWFyOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICRtYWluO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmRwLWNsb3NlOmhvdmVyLFxuICAuZHAtY2xvc2U6Zm9jdXMsXG4gIC5kcC1jbGVhcjpob3ZlcixcbiAgLmRwLWNsZWFyOmZvY3VzLFxuICAuZHAtdG9kYXk6aG92ZXIsXG4gIC5kcC10b2RheTpmb2N1cyxcbiAgLmRwLW5leHQ6aG92ZXIsXG4gIC5kcC1uZXh0OmZvY3VzLFxuICAuZHAtcHJldjpob3ZlcixcbiAgLmRwLXByZXY6Zm9jdXMsXG4gIC5kcC1jYWwtbW9udGg6Zm9jdXMsXG4gIC5kcC1jYWwtbW9udGg6aG92ZXIsXG4gIC5kcC1jYWwteWVhcjpob3ZlcixcbiAgLmRwLWNhbC15ZWFyOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAkbWFpbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuLmRwLWNvbC1oZWFkZXIsXG4uZHAtZGF5IHtcbiAgd2lkdGg6IDE0LjI4NTcxNDI5JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRwLWNvbC1oZWFkZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogJGxpZ2h0R3JleTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogOHB4IDA7XG59XG5cbi5kcC1tb250aCB7XG4gIHdpZHRoOiAyMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuXG4uZHAteWVhciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggNDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kcC1lZGdlLWRheSB7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4uZHAtZGF5OmhvdmVyLFxuLmRwLW1vbnRoOmhvdmVyLFxuLmRwLXllYXI6aG92ZXIsXG4uZHAtY3VycmVudDpmb2N1cyxcbi5kcC1jdXJyZW50LFxuLmRwLWRheTpmb2N1cyxcbi5kcC1tb250aDpmb2N1cyxcbi5kcC15ZWFyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogJG1haW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRwLXNlbGVjdGVkOmhvdmVyLFxuLmRwLXNlbGVjdGVkOmZvY3VzLFxuLmRwLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogJG1haW47XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZHAtZGF5LWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZGRkO1xufVxuXG4uZHAtZGF5LWRpc2FibGVkOmZvY3VzLFxuLmRwLWRheS1kaXNhYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbi5kcC1mb2N1c2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xufVxuXG4vKiBSZXNwb25zaXZlIG92ZXJyaWRlcyAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSwgKG1heC1oZWlnaHQ6IDQ4MHB4KSB7XG4gIC5kcC1tb2RhbCAuZHAge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgd2lkdGg6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZHAtZGF5LW9mLXdlZWssXG4gIC5kcC1kYXkge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDEwMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG59XG4iLCIvLyAkYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCNmZmZmZmYsICNiZWU3ZmMpO1xuJGJhY2tncm91bmQ6ICNlZWU7XG4kbWFpbjogIzQ1YTViZjtcbiRzZWNvbmQ6ICMyMjNlNWU7XG4kbGlnaHRlcjogcmdiYSh3aGl0ZSwgMC4zKTtcbiRkYXJrZXI6IHJnYmEoYmxhY2ssIDAuMyk7XG4kb3BhY2l0eUJvcmRlcjogcmdiYShibGFjaywgMC4xKTtcbiRvcGFjaXR5V2hpdGU6IHJnYmEod2hpdGUsIDAuOCk7XG4kdG9vbHM6IHJnYmEod2hpdGUsIDAuNzUpO1xuJGFjdGl2ZTogcmdiYShibGFjaywgMC4zKTtcblxuJGxpZ2h0R3JleTogI2RkZDtcbiRncmV5OiAjOTk5O1xuJGRhcmtHcmV5OiAjMzMzO1xuXG4kZ3JlZW46ICM4M2I4MWE7XG4keWVsbG93OiAjZTViODIyO1xuJHJlZDogI2VkNjE2MTtcblxuJGZhY2Vib29rOiAjM2I1OTk4O1xuJGdvb2dsZTogI2RkNGIzOTtcbiRsaW5lOiAjMDBjMzAwO1xuJHR3aXR0ZXI6ICMwMGFjZWQ7XG4kaW5zdGFncmFtOiByYWRpYWwtZ3JhZGllbnQoXG4gIGNpcmNsZSBhdCAzMCUgMTA3JSxcbiAgI2ZkZjQ5NyAwJSxcbiAgI2ZkZjQ5NyA1JSxcbiAgI2ZkNTk0OSA0NSUsXG4gICNkNjI0OWYgNjAlLFxuICAjMjg1YWViIDkwJVxuKTtcblxuJHNxdWFyZTogM3JlbTtcbiIsIkBpbXBvcnQgXCIuL3RoZW1lLnNjc3NcIjtcbkBpbXBvcnQgXCIuL2FwcC9jb21wb25lbnQvY2FsZW5kYXIvdGlueS1kYXRlcGlja2VyLnNjc3NcIjtcbmh0bWwsXG5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgXCJOb3RvIFNhbnMgQ0pLIFRDXCIsIFwi5paH5rOJ6amb5q2j6buRXCIsXG4gICAgXCJXZW5RdWFuWWkgWmVuIEhlaVwiLCBcIuWEt+m7kSBQcm9cIiwgXCJMaUhlaSBQcm9cIiwgXCLlvq7ou5/mraPpu5Hpq5RcIixcbiAgICBcIk1pY3Jvc29mdCBKaGVuZ0hlaVwiLCBcIuaomealt+mrlFwiLCBERkthaS1TQiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAvLyAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAvLyB9XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxub2wsXG51bCxcbmxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZnVsbCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5taSB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbn1cbi5tbyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnMgT3V0bGluZWRcIjtcbn1cblxuW2NsYXNzKj1cIiBhaS1cIl0sXG5bY2xhc3NePVwiYWktXCJdIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kIGZpeGVkIHRvcDtcbn1cblxuLmNvbnRlbnQtYmcge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZCBmaXhlZCB0b3A7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4ubGltaXQge1xuICB3aWR0aDogOTAlO1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gICYucGFkZGluZyB7XG4gICAgcGFkZGluZzogMnZtaW4gNHZtaW47XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZjIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbjpub3QoW2NsYXNzXj1cImRwLVwiXSkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIG1peC1ibGVuZC1tb2RlOiBzY3JlZW47XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cztcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICY6aG92ZXIge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG59XG5pbnB1dCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogJGdyZXk7XG4gIH1cbn1cblxuQGZvciAkaSBmcm9tIDAgdGhyb3VnaCA1IHtcbiAgLmYjeyRpfSB7XG4gICAgZmxleDogJGkgJGkgYXV0bztcbiAgfVxufVxuXG4ubGctaGlkZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubGctc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0NDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm1kLWhpZGUge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubWQtc2hvdyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uc3MtaGlkZSB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5zcy1zaG93IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQwcHgpIHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG59XG5cbi54cy1oaWRlIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLnhzLXNob3cge1xuICBkaXNwbGF5OiBub25lO1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogLTJ2dztcbiAgZmxleC13cmFwOiB3cmFwO1xuICAmLm5vd3JhcCB7XG4gICAgbWFyZ2luOiAtMnZ3O1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIHBhZGRpbmc6IDJ2dyAwO1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgICAgIHdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgPiAqIHtcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIH1cbiAgfVxufVxuXG4jZmIge1xuICAuXzJwM2EsXG4gIC51aVNjYWxlZEltYWdlQ29udGFpbmVyLFxuICAuXzJ6ZnIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaDEge1xuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGZvbnQtc2l6ZTogN3Z3O1xuICB9XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi8uLi8uLi8uLi90aGVtZS5zY3NzIn0= */", '', '']]

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