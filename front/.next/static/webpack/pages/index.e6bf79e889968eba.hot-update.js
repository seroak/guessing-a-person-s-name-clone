"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   reportWebVitals: function() { return /* binding */ reportWebVitals; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const { me } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.user);\n    // useEffect(() => {\n    //   dispatch(loadUser());\n    // }, []);\n    const handleLinkClick = (e)=>{\n        if (me === null) {\n            e.preventDefault();\n            alert(\"로그인이 필요합니다\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"도전\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().comment),\n                            children: \"made by 이규열\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().choice),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().games),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/guessPerson\",\n                                style: {\n                                    textDecoration: \"none\",\n                                    color: \"black\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().gameList),\n                                    children: [\n                                        \"인물\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \"퀴즈\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/createProblem\",\n                                style: {\n                                    textDecoration: \"none\",\n                                    color: \"black\"\n                                },\n                                onClick: handleLinkClick,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().gameList),\n                                    children: [\n                                        \"문제\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \"생성\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/customProblem\",\n                                style: {\n                                    textDecoration: \"none\",\n                                    color: \"black\"\n                                },\n                                onClick: handleLinkClick,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().gameList),\n                                    children: [\n                                        \"커스텀\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \"문제\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\guessing-a-person-s-name-clone\\\\front\\\\pages\\\\index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"VNvH4Vw2sOYkJZsQQOV/jgcTpnU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Home;\nvar __N_SSP = true;\nfunction reportWebVitals(metric) {\n    console.log(metric);\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNIO0FBQ1I7QUFDWDtBQUMwQjtBQUl2RCxNQUFNUSxPQUFPOztJQUNYLE1BQU1DLFdBQVdILHdEQUFXQTtJQUM1QixNQUFNLEVBQUVJLEVBQUUsRUFBRSxHQUFHSCx3REFBV0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxJQUFJO0lBQ2hELG9CQUFvQjtJQUNwQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QixJQUFJSixPQUFPLE1BQU07WUFDZkksRUFBRUMsY0FBYztZQUNoQkMsTUFBTTtRQUNSO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ2IsNkRBQVNBO2tCQUNSLDRFQUFDYztZQUFLQyxXQUFXZCwrREFBVzs7OEJBQzFCLDhEQUFDZTtvQkFBUUQsV0FBV2QsZ0VBQVk7O3NDQUM5Qiw4REFBQ2lCO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOzRCQUFFSixXQUFXZCxrRUFBYztzQ0FBRTs7Ozs7Ozs7Ozs7OzhCQUVoQyw4REFBQ2U7b0JBQVFELFdBQVdkLGlFQUFhOzhCQUMvQiw0RUFBQ3FCO3dCQUFHUCxXQUFXZCxnRUFBWTs7MENBQ3pCLDhEQUFDQyxrREFBSUE7Z0NBQ0hzQixNQUFLO2dDQUNMQyxPQUFPO29DQUFFQyxnQkFBZ0I7b0NBQVFDLE9BQU87Z0NBQVE7MENBRWhELDRFQUFDQztvQ0FBR2IsV0FBV2QsbUVBQWU7O3dDQUFFO3NEQUU5Qiw4REFBQzZCOzs7Ozt3Q0FBSzs7Ozs7Ozs7Ozs7OzBDQUlWLDhEQUFDNUIsa0RBQUlBO2dDQUNIc0IsTUFBSztnQ0FDTEMsT0FBTztvQ0FBRUMsZ0JBQWdCO29DQUFRQyxPQUFPO2dDQUFRO2dDQUNoREksU0FBU3JCOzBDQUVULDRFQUFDa0I7b0NBQUdiLFdBQVdkLG1FQUFlOzt3Q0FBRTtzREFFOUIsOERBQUM2Qjs7Ozs7d0NBQUs7Ozs7Ozs7Ozs7OzswQ0FJViw4REFBQzVCLGtEQUFJQTtnQ0FDSHNCLE1BQUs7Z0NBQ0xDLE9BQU87b0NBQUVDLGdCQUFnQjtvQ0FBUUMsT0FBTztnQ0FBUTtnQ0FDaERJLFNBQVNyQjswQ0FFVCw0RUFBQ2tCO29DQUFHYixXQUFXZCxtRUFBZTs7d0NBQUU7c0RBRTlCLDhEQUFDNkI7Ozs7O3dDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3RCO0dBMURNekI7O1FBQ2FGLG9EQUFXQTtRQUNiQyxvREFBV0E7OztLQUZ0QkM7O0FBeUVDLFNBQVMyQixnQkFBZ0JDLE1BQU07SUFDcENDLFFBQVFDLEdBQUcsQ0FBQ0Y7QUFDZDtBQUVBLCtEQUFlNUIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBsb2FkVXNlciB9IGZyb20gXCIuLi9yZWR1Y2Vycy91c2VyXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKGxvYWRVc2VyKCkpO1xyXG4gIC8vIH0sIFtdKTtcclxuICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgaWYgKG1lID09PSBudWxsKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIDxoMT7rj4TsoIQ8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudH0+bWFkZSBieSDsnbTqt5zsl7Q8L3A+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNob2ljZX0+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZXN9PlxyXG4gICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgIGhyZWY9XCIvZ3Vlc3NQZXJzb25cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmdhbWVMaXN0fT5cclxuICAgICAgICAgICAgICAgIOyduOusvFxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICDtgLTspohcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9jcmVhdGVQcm9ibGVtXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaW5rQ2xpY2t9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZUxpc3R9PlxyXG4gICAgICAgICAgICAgICAg66y47KCcXHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIOyDneyEsVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICBocmVmPVwiL2N1c3RvbVByb2JsZW1cIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpbmtDbGlja31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5nYW1lTGlzdH0+XHJcbiAgICAgICAgICAgICAgICDsu6TsiqTthYBcclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAg66y47KCcXHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoXHJcbiAgKHN0b3JlKSA9PlxyXG4gICAgYXN5bmMgKHsgcmVxIH0pID0+IHtcclxuICAgICAgY29uc3QgY29va2llID0gcmVxID8gcmVxLmhlYWRlcnMuY29va2llIDogXCJcIjtcclxuICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBcIlwiO1xyXG4gICAgICAvLyDsv6DtgqTqsIAg67iM65287Jqw7KCA7JeQIOyeiOuKlOqyveyasOunjCDrhKPslrTshJwg7Iuk7ZaJXHJcbiAgICAgIC8vICjso7zsnZgsIOyVhOuemCDsobDqsbTsnbQg7JeG64uk66m0IOuLpOuluCDsgqzrnozsnLzroZwg66Gc6re47J24IOuQoCDsiJjrj4Qg7J6I7J2MKVxyXG4gICAgICBpZiAocmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGxvYWRVc2VyKCkpO1xyXG4gICAgfVxyXG4pO1xyXG5leHBvcnQgZnVuY3Rpb24gcmVwb3J0V2ViVml0YWxzKG1ldHJpYykge1xyXG4gIGNvbnNvbGUubG9nKG1ldHJpYyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQXBwTGF5b3V0Iiwic3R5bGVzIiwiTGluayIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJIb21lIiwiZGlzcGF0Y2giLCJtZSIsInN0YXRlIiwidXNlciIsImhhbmRsZUxpbmtDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJ0aXRsZSIsImgxIiwicCIsImNvbW1lbnQiLCJjaG9pY2UiLCJ1bCIsImdhbWVzIiwiaHJlZiIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJjb2xvciIsImxpIiwiZ2FtZUxpc3QiLCJiciIsIm9uQ2xpY2siLCJyZXBvcnRXZWJWaXRhbHMiLCJtZXRyaWMiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});