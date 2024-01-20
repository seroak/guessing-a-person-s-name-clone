"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createProblem",{

/***/ "./pages/createProblem.js":
/*!********************************!*\
  !*** ./pages/createProblem.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var _createProblem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createProblem.module.css */ \"./pages/createProblem.module.css\");\n/* harmony import */ var _createProblem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_createProblem_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst createProblem = ()=>{\n    _s();\n    const [inputData, setInputData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            image: null,\n            text1: \"\",\n            text2: \"\",\n            text3: \"\",\n            text4: \"\",\n            previewURL: \"\"\n        }\n    ]);\n    const inputRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const handleImageChange = (index, event)=>{\n        const newInputData = [\n            ...inputData\n        ];\n        const file = event.target.files[0];\n        const reader = new FileReader();\n        if (file) {\n            reader.readAsDataURL(file);\n        }\n        reader.onloadend = ()=>{\n            newInputData[index].image = file;\n            newInputData[index].previewURL = reader.result;\n            setInputData(newInputData);\n        };\n    };\n    const handleTextChange = (index, fieldName, value)=>{\n        const newInputData = [\n            ...inputData\n        ];\n        newInputData[index][fieldName] = value;\n        setInputData(newInputData);\n    };\n    const addInput = ()=>{\n        setInputData([\n            ...inputData,\n            {\n                image: null,\n                text1: \"\",\n                text2: \"\",\n                text3: \"\",\n                text4: \"\",\n                previewURL: \"\"\n            }\n        ]);\n    };\n    const removeInput = (index)=>{\n        const newInputData = [\n            ...inputData\n        ];\n        newInputData.splice(index, 1);\n        setInputData(newInputData);\n    };\n    const handleSubmit = ()=>{\n        // 여기에서 모든 입력 값을 처리하는 로직을 수행할 수 있습니다.\n        console.log(inputData);\n    };\n    const handleDragEnter = (e)=>{\n        e.preventDefault();\n    };\n    const handleDragOver = (e)=>{\n        e.preventDefault();\n    };\n    const handleDrop = (index, e)=>{\n        e.preventDefault();\n        const files = e.dataTransfer.files;\n        if (files.length > 0) {\n            handleImageChange(index, {\n                target: {\n                    files: [\n                        files[0]\n                    ]\n                }\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"이미지 및 텍스트 입력 폼\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, undefined),\n                    inputData.map((input, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            onDragEnter: handleDragEnter,\n                            onDragOver: handleDragOver,\n                            onDrop: (e)=>handleDrop(index, e),\n                            style: {\n                                display: \"flex\",\n                                flexWrap: \"nowrap\",\n                                justifyContent: \"center\",\n                                margin: \"60px 50px\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    className: (_createProblem_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                                    style: {\n                                        display: \"inline-block\",\n                                        padding: \"10px 15px\",\n                                        backgroundColor: \"#E8E7E7\",\n                                        color: \"black\",\n                                        borderRadius: \"5px\",\n                                        border: \"none\",\n                                        cursor: \"pointer\",\n                                        boxShadow: \"0px 3px 6px rgba(0, 0, 0, 0.1)\",\n                                        transition: \"background-color 0.3s\"\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: \"이미지 업로드\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                            lineNumber: 107,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"file\",\n                                            onChange: (e)=>handleImageChange(index, e),\n                                            ref: (el)=>inputRefs.current[index] = el,\n                                            style: {\n                                                display: \"none\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            style: {\n                                                width: \"100px\",\n                                                height: \"100px\"\n                                            },\n                                            children: input.previewURL && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: input.previewURL,\n                                                alt: \"Preview \".concat(index),\n                                                style: {\n                                                    maxWidth: \"100px\",\n                                                    maxHeight: \"100px\"\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                                lineNumber: 125,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"이름 후보 1\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_createProblem_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                            type: \"text\",\n                                            value: input.text1,\n                                            onChange: (e)=>handleTextChange(index, \"text1\", e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                            lineNumber: 138,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"이름 후보 2\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_createProblem_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                            type: \"text\",\n                                            value: input.text2,\n                                            onChange: (e)=>handleTextChange(index, \"text2\", e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                            lineNumber: 150,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"이름 후보 3\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_createProblem_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                            type: \"text\",\n                                            value: input.text3,\n                                            onChange: (e)=>handleTextChange(index, \"text3\", e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                            lineNumber: 161,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                    lineNumber: 159,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"이름 후보 4\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            className: (_createProblem_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                                            type: \"text\",\n                                            value: input.text4,\n                                            onChange: (e)=>handleTextChange(index, \"text4\", e.target.value)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                            lineNumber: 173,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                    lineNumber: 171,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>removeInput(index),\n                                    style: {\n                                        display: \"inline-block\",\n                                        padding: \"10px 15px\",\n                                        backgroundColor: \"#E8E7E7\",\n                                        color: \"black\",\n                                        borderRadius: \"5px\",\n                                        border: \"none\",\n                                        cursor: \"pointer\",\n                                        boxShadow: \"0px 3px 6px rgba(0, 0, 0, 0.1)\",\n                                        transition: \"background-color 0.3s\"\n                                    },\n                                    children: \"폼 삭제\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                                    lineNumber: 183,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: addInput,\n                        children: \"Add Input\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                        lineNumber: 201,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSubmit,\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                        lineNumber: 202,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lee\\\\lee_Drive\\\\바탕 화면\\\\Guessing a person's name clone\\\\front\\\\pages\\\\createProblem.js\",\n            lineNumber: 77,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(createProblem, \"bQ+Slf3W84Yh6LJYIV9uQ+5cHsI=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (createProblem);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxXQUFXckQsd0VBQVk7NENBQ3ZCOEQsTUFBSzs0Q0FDTHBDLE9BQU9pQixNQUFNbEMsS0FBSzs0Q0FDbEJzRCxVQUFVLENBQUM3QixJQUNUVixpQkFBaUJYLE9BQU8sU0FBU3FCLEVBQUVqQixNQUFNLENBQUNTLEtBQUs7Ozs7Ozs7Ozs7Ozs4Q0FLckQsOERBQUNnRDtvQ0FDQ0MsU0FBUyxJQUFNL0MsWUFBWWY7b0NBQzNCa0MsT0FBTzt3Q0FDTEMsU0FBUzt3Q0FDVE0sU0FBUzt3Q0FDVEMsaUJBQWlCO3dDQUNqQkMsT0FBTzt3Q0FDUEMsY0FBYzt3Q0FDZEMsUUFBUTt3Q0FDUkMsUUFBUTt3Q0FDUkMsV0FBVzt3Q0FDWEMsWUFBWTtvQ0FDZDs4Q0FDRDs7Ozs7OzsyQkFsSEloRDs7Ozs7a0NBdUhULDhEQUFDNkQ7d0JBQU9DLFNBQVNoRDtrQ0FBVTs7Ozs7O2tDQUMzQiw4REFBQytDO3dCQUFPQyxTQUFTN0M7a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QztHQXhNTTVCO0FBeU1OLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NyZWF0ZVByb2JsZW0uanM/MzFmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jcmVhdGVQcm9ibGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvYmxlbSA9ICgpID0+IHtcclxuICBjb25zdCBbaW5wdXREYXRhLCBzZXRJbnB1dERhdGFdID0gdXNlU3RhdGUoW1xyXG4gICAgeyBpbWFnZTogbnVsbCwgdGV4dDE6IFwiXCIsIHRleHQyOiBcIlwiLCB0ZXh0MzogXCJcIiwgdGV4dDQ6IFwiXCIsIHByZXZpZXdVUkw6IFwiXCIgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgaW5wdXRSZWZzID0gdXNlUmVmKFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoaW5kZXgsIGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBuZXdJbnB1dERhdGEgPSBbLi4uaW5wdXREYXRhXTtcclxuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGlmIChmaWxlKSB7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgfVxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgbmV3SW5wdXREYXRhW2luZGV4XS5pbWFnZSA9IGZpbGU7XHJcbiAgICAgIG5ld0lucHV0RGF0YVtpbmRleF0ucHJldmlld1VSTCA9IHJlYWRlci5yZXN1bHQ7XHJcbiAgICAgIHNldElucHV0RGF0YShuZXdJbnB1dERhdGEpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGluZGV4LCBmaWVsZE5hbWUsIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdJbnB1dERhdGEgPSBbLi4uaW5wdXREYXRhXTtcclxuICAgIG5ld0lucHV0RGF0YVtpbmRleF1bZmllbGROYW1lXSA9IHZhbHVlO1xyXG4gICAgc2V0SW5wdXREYXRhKG5ld0lucHV0RGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkSW5wdXQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbnB1dERhdGEoW1xyXG4gICAgICAuLi5pbnB1dERhdGEsXHJcbiAgICAgIHtcclxuICAgICAgICBpbWFnZTogbnVsbCxcclxuICAgICAgICB0ZXh0MTogXCJcIixcclxuICAgICAgICB0ZXh0MjogXCJcIixcclxuICAgICAgICB0ZXh0MzogXCJcIixcclxuICAgICAgICB0ZXh0NDogXCJcIixcclxuICAgICAgICBwcmV2aWV3VVJMOiBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlSW5wdXQgPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG5ld0lucHV0RGF0YSA9IFsuLi5pbnB1dERhdGFdO1xyXG4gICAgbmV3SW5wdXREYXRhLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRJbnB1dERhdGEobmV3SW5wdXREYXRhKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAvLyDsl6zquLDsl5DshJwg66qo65OgIOyeheugpSDqsJLsnYQg7LKY66as7ZWY64qUIOuhnOyngeydhCDsiJjtlontlaAg7IiYIOyeiOyKteuLiOuLpC5cclxuICAgIGNvbnNvbGUubG9nKGlucHV0RGF0YSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVEcmFnRW50ZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZURyYWdPdmVyID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVEcm9wID0gKGluZGV4LCBlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcclxuICAgIGlmIChmaWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGhhbmRsZUltYWdlQ2hhbmdlKGluZGV4LCB7IHRhcmdldDogeyBmaWxlczogW2ZpbGVzWzBdXSB9IH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxoMT7snbTrr7jsp4Ag67CPIO2FjeyKpO2KuCDsnoXroKUg7Y+8PC9oMT5cclxuICAgICAgICAgIHtpbnB1dERhdGEubWFwKChpbnB1dCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgb25EcmFnRW50ZXI9e2hhbmRsZURyYWdFbnRlcn1cclxuICAgICAgICAgICAgICBvbkRyYWdPdmVyPXtoYW5kbGVEcmFnT3Zlcn1cclxuICAgICAgICAgICAgICBvbkRyb3A9eyhlKSA9PiBoYW5kbGVEcm9wKGluZGV4LCBlKX1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICBmbGV4V3JhcDogXCJub3dyYXBcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjYwcHggNTBweFwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFOEU3RTdcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAwLjNzXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+7J2066+47KeAIOyXheuhnOuTnDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlSW1hZ2VDaGFuZ2UoaW5kZXgsIGUpfVxyXG4gICAgICAgICAgICAgICAgICByZWY9eyhlbCkgPT4gKGlucHV0UmVmcy5jdXJyZW50W2luZGV4XSA9IGVsKX1cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHtpbnB1dC5wcmV2aWV3VVJMICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2lucHV0LnByZXZpZXdVUkx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BQcmV2aWV3ICR7aW5kZXh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBcIjEwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogXCIxMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICDsnbTrpoQg7ZuE67O0IDFcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQudGV4dDF9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXh0Q2hhbmdlKGluZGV4LCBcInRleHQxXCIsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIOydtOumhCDtm4Trs7QgMlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dC50ZXh0Mn1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVRleHRDaGFuZ2UoaW5kZXgsIFwidGV4dDJcIiwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICDsnbTrpoQg7ZuE67O0IDNcclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXQudGV4dDN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVUZXh0Q2hhbmdlKGluZGV4LCBcInRleHQzXCIsIGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgIOydtOumhCDtm4Trs7QgNFxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dC50ZXh0NH1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZVRleHRDaGFuZ2UoaW5kZXgsIFwidGV4dDRcIiwgZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcmVtb3ZlSW5wdXQoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4IDE1cHhcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFOEU3RTdcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAwLjNzXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIO2PvCDsgq3soJxcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWRkSW5wdXR9PkFkZCBJbnB1dDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2JsZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiQXBwTGF5b3V0Iiwic3R5bGVzIiwiTGluayIsImNyZWF0ZVByb2JsZW0iLCJpbnB1dERhdGEiLCJzZXRJbnB1dERhdGEiLCJpbWFnZSIsInRleHQxIiwidGV4dDIiLCJ0ZXh0MyIsInRleHQ0IiwicHJldmlld1VSTCIsImlucHV0UmVmcyIsImhhbmRsZUltYWdlQ2hhbmdlIiwiaW5kZXgiLCJldmVudCIsIm5ld0lucHV0RGF0YSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJyZWFkQXNEYXRhVVJMIiwib25sb2FkZW5kIiwicmVzdWx0IiwiaGFuZGxlVGV4dENoYW5nZSIsImZpZWxkTmFtZSIsInZhbHVlIiwiYWRkSW5wdXQiLCJyZW1vdmVJbnB1dCIsInNwbGljZSIsImhhbmRsZVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVEcmFnRW50ZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyb3AiLCJkYXRhVHJhbnNmZXIiLCJsZW5ndGgiLCJkaXYiLCJoMSIsIm1hcCIsImlucHV0Iiwib25EcmFnRW50ZXIiLCJvbkRyYWdPdmVyIiwib25Ecm9wIiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsIm1hcmdpbiIsImxhYmVsIiwiY2xhc3NOYW1lIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiY3Vyc29yIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsInR5cGUiLCJvbkNoYW5nZSIsInJlZiIsImVsIiwiY3VycmVudCIsIndpZHRoIiwiaGVpZ2h0IiwiaW1nIiwic3JjIiwiYWx0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/createProblem.js\n"));

/***/ })

});