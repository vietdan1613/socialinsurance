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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"(app-pages-browser)/./src/services/api.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [submitT, setSubmitT] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [submitTime, setSubmitTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [returnT, setReturnT] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [returnTime, setReturnTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [currentTime, setCurrentTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        setInputValue(event.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const data = await (0,_services_api__WEBPACK_IMPORTED_MODULE_2__.getSample)();\n                setSubmitT(data.submit);\n                setSubmitTime(data.submitTime);\n                setReturnT(data.return);\n                setReturnTime(data.returnTime);\n            } catch (error) {\n                console.error(\"Error fetching data\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const onClickSearch = (e)=>{\n        if (inputValue.startsWith(\"1\")) {\n            let num = parseInt(inputValue) - parseInt(submitT);\n            if (num > 0) {\n                let newTime = submitTime + num * 60000;\n                let a = handleConvert(newTime.toString());\n                debugger;\n                setCurrentTime(submitTime + num * 60000);\n            }\n        }\n        if (inputValue.startsWith(\"2\")) {\n            let num = parseInt(inputValue) - parseInt(returnT);\n            if (num > 0) {\n                setCurrentTime(returnTime + num * 60000);\n            }\n        }\n    };\n    const handleConvert = (intValue)=>{\n        if (intValue.length === 14) {\n            const year = parseInt(intValue.slice(0, 4), 10);\n            const month = parseInt(intValue.slice(4, 6), 10) - 1; // Months are zero-indexed\n            const day = parseInt(intValue.slice(6, 8), 10);\n            const hours = parseInt(intValue.slice(8, 10), 10);\n            const minutes = parseInt(intValue.slice(10, 12), 10);\n            const seconds = parseInt(intValue.slice(12, 14), 10);\n            debugger;\n            const date = new Date(year, month, day, hours, minutes, seconds);\n            return hours + \":\" + minutes;\n        } else {\n            alert(\"Please enter a valid 14-digit date and time integer in the format YYYYMMDDHHMMSS\");\n            return \"\";\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center bg-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"z-10 w-full items-center bg-hero-pattern bg-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"max-w-5xl mx-auto items-center justify-between py-3\",\n                    \"aria-label\": \"Global\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-2 flex lg:flex-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"h-12 w-auto\",\n                                src: \"/logo_text.svg\",\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 w-full items-center bg-gray-100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-5xl mx-auto items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"px-2 text-gray-400 text-xs py-1\",\n                        children: \" Tra cứu \"\n                    }, void 0, false, {\n                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full items-center justify-between mt-4 px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"shadow-md mx-auto bg-gray-50 max-w-md rounded\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-2  divide-x text-white bg-gray-500 rounded-t\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-3 text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Nợp hồ sơ: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold \",\n                                            children: submitT\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 90,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-3 text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Trả kết quả: \"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"font-bold \",\n                                            children: returnT\n                                        }, void 0, false, {\n                                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                            lineNumber: 96,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"success\",\n                                    className: \"bg-gray-50 border-b text-green-900 block w-full py-2.5\",\n                                    placeholder: \"Nhập STT của bạn\",\n                                    value: inputValue,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full mt-2 text-white bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-3\",\n                                    onClick: onClickSearch,\n                                    children: \"Tra cứu\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex divide-x border-t border-gray-150\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"m-auto p-6\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-500 font-bold\",\n                                        children: \"Thời gian ước t\\xednh\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-8xl font-bold text-sky-700\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-xs text-gray-400\",\n                                        children: \"Thứ 6, 20 Th\\xe1ng 4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white w-full items-center justify-between mt-4 px-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex mx-auto max-w-md rounded text-xs italic text-gray-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mr-1\",\n                            children: \"* Lưu \\xfd: \"\n                        }, void 0, false, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Thời gian l\\xe0m việc từ thứ 2 - thứ 6.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"(s\\xe1ng: 7:30-12:00, chiều: 13:00-16:30)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                                    lineNumber: 122,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                            lineNumber: 120,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nguyenviet/Documents/Projects/socialinsurance/frontend/src/app/page.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"10eDTkb8LGLsxJKP+sWgkuYDgvM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTs7Ozs7OzhDQUNILDhEQUFDQTs4Q0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQXpId0I3RDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTYW1wbGUgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbc3VibWl0VCwgc2V0U3VibWl0VF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzdWJtaXRUaW1lLCBzZXRTdWJtaXRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcmV0dXJuVCwgc2V0UmV0dXJuVF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXR1cm5UaW1lLCBzZXRSZXR1cm5UaW1lXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY3VycmVudFRpbWUsIHNldEN1cnJlbnRUaW1lXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFNhbXBsZSgpO1xuICAgICAgICBzZXRTdWJtaXRUKGRhdGEuc3VibWl0KTtcbiAgICAgICAgc2V0U3VibWl0VGltZShkYXRhLnN1Ym1pdFRpbWUpO1xuICAgICAgICBzZXRSZXR1cm5UKGRhdGEucmV0dXJuKTtcbiAgICAgICAgc2V0UmV0dXJuVGltZShkYXRhLnJldHVyblRpbWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YScsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBvbkNsaWNrU2VhcmNoID0gKGU6IGFueSkgPT4ge1xuICAgIGlmKGlucHV0VmFsdWUuc3RhcnRzV2l0aChcIjFcIikpe1xuICAgICAgbGV0IG51bSA9IHBhcnNlSW50KGlucHV0VmFsdWUpIC0gcGFyc2VJbnQoc3VibWl0VClcbiAgICAgIGlmKG51bSA+IDApe1xuICAgICAgICBsZXQgbmV3VGltZSA9IHN1Ym1pdFRpbWUgKyBudW0gKiA2MDAwMFxuICAgICAgICBsZXQgYSA9IGhhbmRsZUNvbnZlcnQobmV3VGltZS50b1N0cmluZygpKVxuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBzZXRDdXJyZW50VGltZShzdWJtaXRUaW1lICsgbnVtICogNjAwMDApXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYoaW5wdXRWYWx1ZS5zdGFydHNXaXRoKFwiMlwiKSl7XG4gICAgICBsZXQgbnVtID0gcGFyc2VJbnQoaW5wdXRWYWx1ZSkgLSBwYXJzZUludChyZXR1cm5UKVxuICAgICAgaWYobnVtID4gMCl7XG4gICAgICAgIHNldEN1cnJlbnRUaW1lKHJldHVyblRpbWUgKyBudW0gKiA2MDAwMClcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ29udmVydCA9IChpbnRWYWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKGludFZhbHVlLmxlbmd0aCA9PT0gMTQpIHtcbiAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChpbnRWYWx1ZS5zbGljZSgwLCA0KSwgMTApO1xuICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChpbnRWYWx1ZS5zbGljZSg0LCA2KSwgMTApIC0gMTsgLy8gTW9udGhzIGFyZSB6ZXJvLWluZGV4ZWRcbiAgICAgIGNvbnN0IGRheSA9IHBhcnNlSW50KGludFZhbHVlLnNsaWNlKDYsIDgpLCAxMCk7XG4gICAgICBjb25zdCBob3VycyA9IHBhcnNlSW50KGludFZhbHVlLnNsaWNlKDgsIDEwKSwgMTApO1xuICAgICAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KGludFZhbHVlLnNsaWNlKDEwLCAxMiksIDEwKTtcbiAgICAgIGNvbnN0IHNlY29uZHMgPSBwYXJzZUludChpbnRWYWx1ZS5zbGljZSgxMiwgMTQpLCAxMCk7XG4gICAgICBkZWJ1Z2dlclxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXksIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKTtcbiAgICAgIHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXMgICBcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIDE0LWRpZ2l0IGRhdGUgYW5kIHRpbWUgaW50ZWdlciBpbiB0aGUgZm9ybWF0IFlZWVlNTURESEhNTVNTJyk7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBiZy13aGl0ZVwiPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ6LTEwIHctZnVsbCBpdGVtcy1jZW50ZXIgYmctaGVyby1wYXR0ZXJuIGJnLWNlbnRlclwiPlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktM1wiIGFyaWEtbGFiZWw9XCJHbG9iYWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgZmxleCBsZzpmbGV4LTFcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaC0xMiB3LWF1dG9cIiBzcmM9XCIvbG9nb190ZXh0LnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInotMTAgdy1mdWxsIGl0ZW1zLWNlbnRlciBiZy1ncmF5LTEwMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTV4bCBteC1hdXRvIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicHgtMiB0ZXh0LWdyYXktNDAwIHRleHQteHMgcHktMVwiPiBUcmEgY+G7qXUgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIG10LTQgcHgtNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYWRvdy1tZCBteC1hdXRvIGJnLWdyYXktNTAgbWF4LXctbWQgcm91bmRlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiAgZGl2aWRlLXggdGV4dC13aGl0ZSBiZy1ncmF5LTUwMCByb3VuZGVkLXRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuPk7hu6NwIGjhu5Mgc8ahOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBcIj57c3VibWl0VH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuPlRy4bqjIGvhur90IHF14bqjOiA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZCBcIj57cmV0dXJuVH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInN1Y2Nlc3NcIiBjbGFzc05hbWU9XCJiZy1ncmF5LTUwIGJvcmRlci1iIHRleHQtZ3JlZW4tOTAwIGJsb2NrIHctZnVsbCBweS0yLjVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5o4bqtcCBTVFQgY+G7p2EgYuG6oW5cIlxuICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRWYWx1ZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfSAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy1mdWxsIG10LTIgdGV4dC13aGl0ZSBiZy1za3ktNzAwIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBmb250LW1lZGl1bSByb3VuZGVkIHRleHQtc20gcHgtNCBweS0zXCJcbiAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja1NlYXJjaH0+VHJhIGPhu6l1PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGRpdmlkZS14IGJvcmRlci10IGJvcmRlci1ncmF5LTE1MFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gcC02XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgZm9udC1ib2xkXCI+VGjhu51pIGdpYW4gxrDhu5tjIHTDrW5oPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTh4bCBmb250LWJvbGQgdGV4dC1za3ktNzAwXCI+PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDBcIj5UaOG7qSA2LCAyMCBUaMOhbmcgNDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBtdC00IHB4LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LWF1dG8gbWF4LXctbWQgcm91bmRlZCB0ZXh0LXhzIGl0YWxpYyB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci0xXCI+KiBMxrB1IMO9OiA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+VGjhu51pIGdpYW4gbMOgbSB2aeG7h2MgdOG7qyB0aOG7qSAyIC0gdGjhu6kgNi48L3A+XG4gICAgICAgICAgICA8cD4oc8Ohbmc6IDc6MzAtMTI6MDAsIGNoaeG7gXU6IDEzOjAwLTE2OjMwKTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0U2FtcGxlIiwiSG9tZSIsInN1Ym1pdFQiLCJzZXRTdWJtaXRUIiwic3VibWl0VGltZSIsInNldFN1Ym1pdFRpbWUiLCJyZXR1cm5UIiwic2V0UmV0dXJuVCIsInJldHVyblRpbWUiLCJzZXRSZXR1cm5UaW1lIiwiY3VycmVudFRpbWUiLCJzZXRDdXJyZW50VGltZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiZmV0Y2hEYXRhIiwiZGF0YSIsInN1Ym1pdCIsInJldHVybiIsImVycm9yIiwiY29uc29sZSIsIm9uQ2xpY2tTZWFyY2giLCJlIiwic3RhcnRzV2l0aCIsIm51bSIsInBhcnNlSW50IiwibmV3VGltZSIsImEiLCJoYW5kbGVDb252ZXJ0IiwidG9TdHJpbmciLCJpbnRWYWx1ZSIsImxlbmd0aCIsInllYXIiLCJzbGljZSIsIm1vbnRoIiwiZGF5IiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImRhdGUiLCJEYXRlIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJoZWFkZXIiLCJuYXYiLCJhcmlhLWxhYmVsIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsInNwYW4iLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});