"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"(app-pages-browser)/./src/services/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await (0,_services_api__WEBPACK_IMPORTED_MODULE_2__.getSample)();\n                console.log(data);\n                setMessage(data.message);\n            } catch (error) {\n                console.error(\"Error fetching data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    message,\n                    \"sdfds\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"z-10 w-full items-center bg-hero-pattern bg-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"max-w-5xl mx-auto items-center justify-between py-3\",\n                    \"aria-label\": \"Global\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-2 flex lg:flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-12 w-auto\",\n                                src: \"/logo_text.svg\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 w-full items-center bg-gray-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-5xl mx-auto items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"px-2 text-gray-400 text-xs py-1\",\n                        children: \" Tra cứu \"\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full items-center justify-between mt-4 px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"shadow-md mx-auto bg-gray-50 max-w-md rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2  divide-x text-white bg-gray-500 rounded-t\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-3 text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Nợp hồ sơ: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold \",\n                                            children: \"1043 \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-3 text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Trả kết quả: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold \",\n                                            children: \"2077 \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"success\",\n                                    className: \"bg-gray-50 border-b text-green-900 block w-full py-2.5\",\n                                    placeholder: \"Nhập STT của bạn\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full mt-2 text-white bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3\",\n                                    children: \"Tra cứu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex divide-x border-t border-gray-150\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-auto p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 font-bold\",\n                                        children: \"Thời gian ước t\\xednh\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-8xl font-bold text-sky-700\",\n                                        children: \"13:55\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs text-gray-400\",\n                                        children: \"Thứ 6, 20 Th\\xe1ng 4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full items-center justify-between mt-4 px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mx-auto max-w-md rounded text-xs italic text-gray-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-1\",\n                            children: \"* Lưu \\xfd: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Thời gian l\\xe0m việc từ thứ 2 - thứ 6.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"(s\\xe1ng: 7:30-12:00, chiều: 13:00-16:30)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"3v4ozrfWvlmZ97O5zgyhgDZKC+M=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdtRDtBQUNQO0FBRTdCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0osK0NBQVFBLENBQUM7SUFFdkNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLE9BQU8sTUFBTUwsd0RBQVNBO2dCQUM1Qk0sUUFBUUMsR0FBRyxDQUFDRjtnQkFDWkYsV0FBV0UsS0FBS0gsT0FBTztZQUN6QixFQUFFLE9BQU9NLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyx1QkFBdUJBO1lBQ3ZDO1FBQ0Y7UUFFQUo7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOztvQkFBR1Q7b0JBQVE7Ozs7Ozs7MEJBQ1osOERBQUNVO2dCQUFPRixXQUFVOzBCQUNoQiw0RUFBQ0c7b0JBQUlILFdBQVU7b0JBQXNESSxjQUFXOzhCQUM5RSw0RUFBQ0w7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNLOzRCQUFFQyxNQUFLOzRCQUFJTixXQUFVO3NDQUNwQiw0RUFBQ087Z0NBQUlQLFdBQVU7Z0NBQWNRLEtBQUk7Z0NBQWlCQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLOUQsOERBQUNWO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0M7d0JBQUVELFdBQVU7a0NBQWtDOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUduRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNVO3NEQUFLOzs7Ozs7c0RBQ04sOERBQUNBOzRDQUFLVixXQUFVO3NEQUFhOzs7Ozs7Ozs7Ozs7OENBRS9CLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNVO3NEQUFLOzs7Ozs7c0RBQ04sOERBQUNBOzRDQUFLVixXQUFVO3NEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSWpDLDhEQUFDRDs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNXO29DQUFNQyxNQUFLO29DQUFPQyxJQUFHO29DQUFVYixXQUFVO29DQUN4Q2MsYUFBWTs7Ozs7OzhDQUNkLDhEQUFDQztvQ0FBT0gsTUFBSztvQ0FBU1osV0FBVTs4Q0FBZ0o7Ozs7Ozs7Ozs7OztzQ0FFbEwsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNDO3dDQUFFRCxXQUFVO2tEQUEwQjs7Ozs7O2tEQUN2Qyw4REFBQ0M7d0NBQUVELFdBQVU7a0RBQWtDOzs7Ozs7a0RBQy9DLDhEQUFDQzt3Q0FBRUQsV0FBVTtrREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzdDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FBTzs7Ozs7O3NDQUN0Qiw4REFBQ0Q7OzhDQUNDLDhEQUFDRTs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQTs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQXhFd0JWO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcGFnZS50c3g/ZjY4YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFNhbXBsZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRTYW1wbGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgc2V0TWVzc2FnZShkYXRhLm1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGJnLXdoaXRlXCI+XG4gICAgICA8cD57bWVzc2FnZX1zZGZkczwvcD5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgaXRlbXMtY2VudGVyIGJnLWhlcm8tcGF0dGVybiBiZy1jZW50ZXJcIj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0byBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTNcIiBhcmlhLWxhYmVsPVwiR2xvYmFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC0yIGZsZXggbGc6ZmxleC0xXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImgtMTIgdy1hdXRvXCIgc3JjPVwiL2xvZ29fdGV4dC5zdmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ6LTEwIHctZnVsbCBpdGVtcy1jZW50ZXIgYmctZ3JheS0xMDBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy01eGwgbXgtYXV0byBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweC0yIHRleHQtZ3JheS00MDAgdGV4dC14cyBweS0xXCI+IFRyYSBj4bupdSA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTQgcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1tZCBteC1hdXRvIGJnLWdyYXktNTAgbWF4LXctbWQgcm91bmRlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiAgZGl2aWRlLXggdGV4dC13aGl0ZSBiZy1ncmF5LTUwMCByb3VuZGVkLXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuPk7hu6NwIGjhu5Mgc8ahOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBcIj4xMDQzIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+VHLhuqMga+G6v3QgcXXhuqM6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIFwiPjIwNzcgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNlwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzdWNjZXNzXCIgY2xhc3NOYW1lPVwiYmctZ3JheS01MCBib3JkZXItYiB0ZXh0LWdyZWVuLTkwMCBibG9jayB3LWZ1bGwgcHktMi41XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOaOG6rXAgU1RUIGPhu6dhIGLhuqFuXCIgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInctZnVsbCBtdC0yIHRleHQtd2hpdGUgYmctc2t5LTcwMCBob3ZlcjpiZy1ibHVlLTgwMCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctYmx1ZS0zMDAgZm9udC1tZWRpdW0gcm91bmRlZCB0ZXh0LXNtIHB4LTQgcHktM1wiPlRyYSBj4bupdTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBkaXZpZGUteCBib3JkZXItdCBib3JkZXItZ3JheS0xNTBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS1hdXRvIHAtNlwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZvbnQtYm9sZFwiPlRo4budaSBnaWFuIMaw4bubYyB0w61uaDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC04eGwgZm9udC1ib2xkIHRleHQtc2t5LTcwMFwiPjEzOjU1PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj5UaOG7qSA2LCAyMCBUaMOhbmcgNDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC00IHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LWF1dG8gbWF4LXctbWQgcm91bmRlZCB0ZXh0LXhzIGl0YWxpYyB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xXCI+KiBMxrB1IMO9OiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+VGjhu51pIGdpYW4gbMOgbSB2aeG7h2MgdOG7qyB0aOG7qSAyIC0gdGjhu6kgNi48L3A+XG4gICAgICAgICAgICA8cD4oc8Ohbmc6IDc6MzAtMTI6MDAsIGNoaeG7gXU6IDEzOjAwLTE2OjMwKTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0U2FtcGxlIiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJoZWFkZXIiLCJuYXYiLCJhcmlhLWxhYmVsIiwiYSIsImhyZWYiLCJpbWciLCJzcmMiLCJhbHQiLCJzcGFuIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});