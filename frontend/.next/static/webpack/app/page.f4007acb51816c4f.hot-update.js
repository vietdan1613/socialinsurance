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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"(app-pages-browser)/./src/services/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [submitT, setSubmitT] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submitTime, setSubmitTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [returnT, setReturnT] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [returnTime, setReturnTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await (0,_services_api__WEBPACK_IMPORTED_MODULE_2__.getSample)();\n                setSubmitT(data.submit);\n                setSubmitT(data.submitTime);\n                setReturnT(data.return);\n                setReturnT(data.returnTime);\n            } catch (error) {\n                console.error(\"Error fetching data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    function onClickSearch(e) {\n        console.log(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"z-10 w-full items-center bg-hero-pattern bg-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"max-w-5xl mx-auto items-center justify-between py-3\",\n                    \"aria-label\": \"Global\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-2 flex lg:flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-12 w-auto\",\n                                src: \"/logo_text.svg\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 w-full items-center bg-gray-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-5xl mx-auto items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"px-2 text-gray-400 text-xs py-1\",\n                        onClick: onClickSearch,\n                        children: \" Tra cứu \"\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full items-center justify-between mt-4 px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"shadow-md mx-auto bg-gray-50 max-w-md rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2  divide-x text-white bg-gray-500 rounded-t\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-3 text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Nợp hồ sơ: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold \",\n                                            children: submitT\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-3 text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Trả kết quả: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold \",\n                                            children: returnT\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"success\",\n                                    className: \"bg-gray-50 border-b text-green-900 block w-full py-2.5\",\n                                    placeholder: \"Nhập STT của bạn\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full mt-2 text-white bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3\",\n                                    children: \"Tra cứu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex divide-x border-t border-gray-150\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-auto p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 font-bold\",\n                                        children: \"Thời gian ước t\\xednh\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-8xl font-bold text-sky-700\",\n                                        children: \"13:55\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs text-gray-400\",\n                                        children: \"Thứ 6, 20 Th\\xe1ng 4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full items-center justify-between mt-4 px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mx-auto max-w-md rounded text-xs italic text-gray-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-1\",\n                            children: \"* Lưu \\xfd: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Thời gian l\\xe0m việc từ thứ 2 - thứ 6.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"(s\\xe1ng: 7:30-12:00, chiều: 13:00-16:30)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"q0ttKX1jRtd+aACZXeIrDknMRGQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFNhbXBsZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdWJtaXRULCBzZXRTdWJtaXRUXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N1Ym1pdFRpbWUsIHNldFN1Ym1pdFRpbWVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtyZXR1cm5ULCBzZXRSZXR1cm5UXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JldHVyblRpbWUsIHNldFJldHVyblRpbWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0U2FtcGxlKCk7XG4gICAgICAgIHNldFN1Ym1pdFQoZGF0YS5zdWJtaXQpO1xuICAgICAgICBzZXRTdWJtaXRUKGRhdGEuc3VibWl0VGltZSk7XG4gICAgICAgIHNldFJldHVyblQoZGF0YS5yZXR1cm4pO1xuICAgICAgICBzZXRSZXR1cm5UKGRhdGEucmV0dXJuVGltZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIG9uQ2xpY2tTZWFyY2goZTogYW55KXtcbiAgICBjb25zb2xlLmxvZyhlKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy13aGl0ZVwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ6LTEwIHctZnVsbCBpdGVtcy1jZW50ZXIgYmctaGVyby1wYXR0ZXJuIGJnLWNlbnRlclwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktM1wiIGFyaWEtbGFiZWw9XCJHbG9iYWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgZmxleCBsZzpmbGV4LTFcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMiB3LWF1dG9cIiBzcmM9XCIvbG9nb190ZXh0LnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB4LTIgdGV4dC1ncmF5LTQwMCB0ZXh0LXhzIHB5LTFcIiBvbkNsaWNrPXtvbkNsaWNrU2VhcmNofT4gVHJhIGPhu6l1IDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtNCBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhZG93LW1kIG14LWF1dG8gYmctZ3JheS01MCBtYXgtdy1tZCByb3VuZGVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yICBkaXZpZGUteCB0ZXh0LXdoaXRlIGJnLWdyYXktNTAwIHJvdW5kZWQtdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+TuG7o3AgaOG7kyBzxqE6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIFwiPntzdWJtaXRUfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+VHLhuqMga+G6v3QgcXXhuqM6IDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkIFwiPntyZXR1cm5UfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTZcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic3VjY2Vzc1wiIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyLWIgdGV4dC1ncmVlbi05MDAgYmxvY2sgdy1mdWxsIHB5LTIuNVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmjhuq1wIFNUVCBj4bunYSBi4bqhblwiIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXQtMiB0ZXh0LXdoaXRlIGJnLXNreS03MDAgaG92ZXI6YmctYmx1ZS04MDAgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLWJsdWUtMzAwIGZvbnQtbWVkaXVtIHJvdW5kZWQgdGV4dC1zbSBweC00IHB5LTNcIj5UcmEgY+G7qXU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZGl2aWRlLXggYm9yZGVyLXQgYm9yZGVyLWdyYXktMTUwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tYXV0byBwLTZcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmb250LWJvbGRcIj5UaOG7nWkgZ2lhbiDGsOG7m2MgdMOtbmg8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtOHhsIGZvbnQtYm9sZCB0ZXh0LXNreS03MDBcIj4xMzo1NTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwXCI+VGjhu6kgNiwgMjAgVGjDoW5nIDQ8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXQtNCBweC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBteC1hdXRvIG1heC13LW1kIHJvdW5kZWQgdGV4dC14cyBpdGFsaWMgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMVwiPiogTMawdSDDvTogPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlRo4budaSBnaWFuIGzDoG0gdmnhu4djIHThu6sgdGjhu6kgMiAtIHRo4bupIDYuPC9wPlxuICAgICAgICAgICAgPHA+KHPDoW5nOiA3OjMwLTEyOjAwLCBjaGnhu4F1OiAxMzowMC0xNjozMCk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFNhbXBsZSIsIkhvbWUiLCJzdWJtaXRUIiwic2V0U3VibWl0VCIsInN1Ym1pdFRpbWUiLCJzZXRTdWJtaXRUaW1lIiwicmV0dXJuVCIsInNldFJldHVyblQiLCJyZXR1cm5UaW1lIiwic2V0UmV0dXJuVGltZSIsImZldGNoRGF0YSIsImRhdGEiLCJzdWJtaXQiLCJyZXR1cm4iLCJlcnJvciIsImNvbnNvbGUiLCJvbkNsaWNrU2VhcmNoIiwiZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm5hdiIsImFyaWEtbGFiZWwiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsInAiLCJvbkNsaWNrIiwic3BhbiIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});