"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/notFollowedBack/page",{

/***/ "(app-pages-browser)/./src/components/ui/floating-dock.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/floating-dock.tsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FloatingDock: () => (/* binding */ FloatingDock)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-motion-value.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-transform.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/value/use-spring.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst FloatingDock = (param)=>{\n    let { items, desktopClassName, mobileClassName } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FloatingDockDesktop, {\n            items: items,\n            className: desktopClassName\n        }, void 0, false, {\n            fileName: \"/Users/anu/Desktop/Projects/seeWho/src/components/ui/floating-dock.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = FloatingDock;\nconst FloatingDockDesktop = (param)=>{\n    let { items, className } = param;\n    _s();\n    let mouseX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue)(Infinity);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        onMouseMove: (e)=>mouseX.set(e.pageX),\n        onMouseLeave: ()=>mouseX.set(Infinity),\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_1__.cn)(\"mx-auto  md:flex h-16 gap-4 items-end  rounded-2xl bg-transparent glass dark:bg-neutral-900 px-4 pb-3\", className),\n        children: items.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconContainer, {\n                mouseX: mouseX,\n                ...item\n            }, item.title, false, {\n                fileName: \"/Users/anu/Desktop/Projects/seeWho/src/components/ui/floating-dock.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/anu/Desktop/Projects/seeWho/src/components/ui/floating-dock.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FloatingDockDesktop, \"Srbxi5whgdQe76YJROaLRJds4Bo=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useMotionValue\n    ];\n});\n_c1 = FloatingDockDesktop;\nfunction IconContainer(param) {\n    let { mouseX, title, icon, href } = param;\n    _s1();\n    let ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    let distance = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(mouseX, {\n        \"IconContainer.useTransform[distance]\": (val)=>{\n            var _ref_current;\n            var _ref_current_getBoundingClientRect;\n            let bounds = (_ref_current_getBoundingClientRect = (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.getBoundingClientRect()) !== null && _ref_current_getBoundingClientRect !== void 0 ? _ref_current_getBoundingClientRect : {\n                x: 0,\n                width: 0\n            };\n            return val - bounds.x - bounds.width / 2;\n        }\n    }[\"IconContainer.useTransform[distance]\"]);\n    let widthTransform = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(distance, [\n        -150,\n        0,\n        150\n    ], [\n        40,\n        70,\n        40\n    ]);\n    let heightTransform = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(distance, [\n        -150,\n        0,\n        150\n    ], [\n        40,\n        70,\n        40\n    ]);\n    let widthTransformIcon = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(distance, [\n        -150,\n        0,\n        150\n    ], [\n        20,\n        40,\n        20\n    ]);\n    let heightTransformIcon = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform)(distance, [\n        -150,\n        0,\n        150\n    ], [\n        20,\n        40,\n        20\n    ]);\n    let width = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(widthTransform, {\n        mass: 0.1,\n        stiffness: 150,\n        damping: 12\n    });\n    let height = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(heightTransform, {\n        mass: 0.1,\n        stiffness: 150,\n        damping: 12\n    });\n    let widthIcon = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(widthTransformIcon, {\n        mass: 0.1,\n        stiffness: 150,\n        damping: 12\n    });\n    let heightIcon = (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring)(heightTransformIcon, {\n        mass: 0.1,\n        stiffness: 150,\n        damping: 12\n    });\n    const [hovered, setHovered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            ref: ref,\n            style: {\n                width,\n                height\n            },\n            onMouseEnter: ()=>setHovered(true),\n            onMouseLeave: ()=>setHovered(false),\n            className: \"aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                    children: hovered && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                        initial: {\n                            opacity: 0,\n                            y: 10,\n                            x: \"-50%\"\n                        },\n                        animate: {\n                            opacity: 1,\n                            y: 0,\n                            x: \"-50%\"\n                        },\n                        exit: {\n                            opacity: 0,\n                            y: 2,\n                            x: \"-50%\"\n                        },\n                        className: \"px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/Users/anu/Desktop/Projects/seeWho/src/components/ui/floating-dock.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/anu/Desktop/Projects/seeWho/src/components/ui/floating-dock.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    style: {\n                        width: widthIcon,\n                        height: heightIcon\n                    },\n                    className: \"flex items-center justify-center\",\n                    children: icon\n                }, void 0, false, {\n                    fileName: \"/Users/anu/Desktop/Projects/seeWho/src/components/ui/floating-dock.tsx\",\n                    lineNumber: 128,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/anu/Desktop/Projects/seeWho/src/components/ui/floating-dock.tsx\",\n            lineNumber: 109,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/anu/Desktop/Projects/seeWho/src/components/ui/floating-dock.tsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, this);\n}\n_s1(IconContainer, \"Pfynze8Bbg3fgsXz64qKc5rSXco=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_6__.useTransform,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring,\n        framer_motion__WEBPACK_IMPORTED_MODULE_7__.useSpring\n    ];\n});\n_c2 = IconContainer;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FloatingDock\");\n$RefreshReg$(_c1, \"FloatingDockDesktop\");\n$RefreshReg$(_c2, \"IconContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2Zsb2F0aW5nLWRvY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFTVjtBQUNNO0FBQ1k7QUFFbEMsTUFBTVMsZUFBZTtRQUFDLEVBQzNCQyxLQUFLLEVBQ0xDLGdCQUFnQixFQUNoQkMsZUFBZSxFQUtoQjtJQUNDLHFCQUNFO2tCQUNFLDRFQUFDQztZQUFvQkgsT0FBT0E7WUFBT0ksV0FBV0g7Ozs7Ozs7QUFHcEQsRUFBRTtLQWRXRjtBQWdCYixNQUFNSSxzQkFBc0I7UUFBQyxFQUMzQkgsS0FBSyxFQUNMSSxTQUFTLEVBSVY7O0lBQ0MsSUFBSUMsU0FBU1osNkRBQWNBLENBQUNhO0lBQzVCLHFCQUNFLDhEQUFDZCxpREFBTUEsQ0FBQ2UsR0FBRztRQUNUQyxhQUFhLENBQUNDLElBQU1KLE9BQU9LLEdBQUcsQ0FBQ0QsRUFBRUUsS0FBSztRQUN0Q0MsY0FBYyxJQUFNUCxPQUFPSyxHQUFHLENBQUNKO1FBQy9CRixXQUFXZCw4Q0FBRUEsQ0FDWCx5R0FDQWM7a0JBR0RKLE1BQU1hLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7Z0JBQWNWLFFBQVFBO2dCQUEwQixHQUFHUyxJQUFJO2VBQXBCQSxLQUFLRSxLQUFLOzs7Ozs7Ozs7O0FBSXREO0dBdEJNYjs7UUFPU1YseURBQWNBOzs7TUFQdkJVO0FBd0JOLFNBQVNZLGNBQWMsS0FVdEI7UUFWc0IsRUFDckJWLE1BQU0sRUFDTlcsS0FBSyxFQUNMQyxJQUFJLEVBQ0pDLElBQUksRUFNTCxHQVZzQjs7SUFXckIsSUFBSUMsTUFBTXRCLDZDQUFNQSxDQUFpQjtJQUVqQyxJQUFJdUIsV0FBV3pCLDJEQUFZQSxDQUFDVTtnREFBUSxDQUFDZ0I7Z0JBQ3RCRjtnQkFBQUE7WUFBYixJQUFJRyxTQUFTSCxDQUFBQSxzQ0FBQUEsZUFBQUEsSUFBSUksT0FBTyxjQUFYSixtQ0FBQUEsYUFBYUsscUJBQXFCLGdCQUFsQ0wsZ0RBQUFBLHFDQUF3QztnQkFBRU0sR0FBRztnQkFBR0MsT0FBTztZQUFFO1lBRXRFLE9BQU9MLE1BQU1DLE9BQU9HLENBQUMsR0FBR0gsT0FBT0ksS0FBSyxHQUFHO1FBQ3pDOztJQUVBLElBQUlDLGlCQUFpQmhDLDJEQUFZQSxDQUFDeUIsVUFBVTtRQUFDLENBQUM7UUFBSztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUk7UUFBSTtLQUFHO0lBQ3hFLElBQUlRLGtCQUFrQmpDLDJEQUFZQSxDQUFDeUIsVUFBVTtRQUFDLENBQUM7UUFBSztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUk7UUFBSTtLQUFHO0lBRXpFLElBQUlTLHFCQUFxQmxDLDJEQUFZQSxDQUFDeUIsVUFBVTtRQUFDLENBQUM7UUFBSztRQUFHO0tBQUksRUFBRTtRQUFDO1FBQUk7UUFBSTtLQUFHO0lBQzVFLElBQUlVLHNCQUFzQm5DLDJEQUFZQSxDQUNwQ3lCLFVBQ0E7UUFBQyxDQUFDO1FBQUs7UUFBRztLQUFJLEVBQ2Q7UUFBQztRQUFJO1FBQUk7S0FBRztJQUdkLElBQUlNLFFBQVFoQyx3REFBU0EsQ0FBQ2lDLGdCQUFnQjtRQUNwQ0ksTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLFNBQVM7SUFDWDtJQUNBLElBQUlDLFNBQVN4Qyx3REFBU0EsQ0FBQ2tDLGlCQUFpQjtRQUN0Q0csTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLFNBQVM7SUFDWDtJQUVBLElBQUlFLFlBQVl6Qyx3REFBU0EsQ0FBQ21DLG9CQUFvQjtRQUM1Q0UsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLFNBQVM7SUFDWDtJQUNBLElBQUlHLGFBQWExQyx3REFBU0EsQ0FBQ29DLHFCQUFxQjtRQUM5Q0MsTUFBTTtRQUNOQyxXQUFXO1FBQ1hDLFNBQVM7SUFDWDtJQUVBLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHeEMsK0NBQVFBLENBQUM7SUFFdkMscUJBQ0UsOERBQUNGLGlEQUFJQTtRQUFDc0IsTUFBTUE7a0JBQ1YsNEVBQUMxQixpREFBTUEsQ0FBQ2UsR0FBRztZQUNUWSxLQUFLQTtZQUNMb0IsT0FBTztnQkFBRWI7Z0JBQU9RO1lBQU87WUFDdkJNLGNBQWMsSUFBTUYsV0FBVztZQUMvQjFCLGNBQWMsSUFBTTBCLFdBQVc7WUFDL0JsQyxXQUFVOzs4QkFFViw4REFBQ2IsMERBQWVBOzhCQUNiOEMseUJBQ0MsOERBQUM3QyxpREFBTUEsQ0FBQ2UsR0FBRzt3QkFDVGtDLFNBQVM7NEJBQUVDLFNBQVM7NEJBQUdDLEdBQUc7NEJBQUlsQixHQUFHO3dCQUFPO3dCQUN4Q21CLFNBQVM7NEJBQUVGLFNBQVM7NEJBQUdDLEdBQUc7NEJBQUdsQixHQUFHO3dCQUFPO3dCQUN2Q29CLE1BQU07NEJBQUVILFNBQVM7NEJBQUdDLEdBQUc7NEJBQUdsQixHQUFHO3dCQUFPO3dCQUNwQ3JCLFdBQVU7a0NBRVRZOzs7Ozs7Ozs7Ozs4QkFJUCw4REFBQ3hCLGlEQUFNQSxDQUFDZSxHQUFHO29CQUNUZ0MsT0FBTzt3QkFBRWIsT0FBT1M7d0JBQVdELFFBQVFFO29CQUFXO29CQUM5Q2hDLFdBQVU7OEJBRVRhOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtYO0lBbkZTRjs7UUFhUXBCLHVEQUFZQTtRQU1OQSx1REFBWUE7UUFDWEEsdURBQVlBO1FBRVRBLHVEQUFZQTtRQUNYQSx1REFBWUE7UUFNMUJELG9EQUFTQTtRQUtSQSxvREFBU0E7UUFNTkEsb0RBQVNBO1FBS1JBLG9EQUFTQTs7O01BN0NuQnFCIiwic291cmNlcyI6WyIvVXNlcnMvYW51L0Rlc2t0b3AvUHJvamVjdHMvc2VlV2hvL3NyYy9jb21wb25lbnRzL3VpL2Zsb2F0aW5nLWRvY2sudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5pbXBvcnQgeyBJY29uTGF5b3V0TmF2YmFyQ29sbGFwc2UgfSBmcm9tIFwiQHRhYmxlci9pY29ucy1yZWFjdFwiO1xuaW1wb3J0IHtcbiAgQW5pbWF0ZVByZXNlbmNlLFxuICBNb3Rpb25WYWx1ZSxcbiAgbW90aW9uLFxuICB1c2VNb3Rpb25WYWx1ZSxcbiAgdXNlU3ByaW5nLFxuICB1c2VUcmFuc2Zvcm0sXG59IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBjb25zdCBGbG9hdGluZ0RvY2sgPSAoe1xuICBpdGVtcyxcbiAgZGVza3RvcENsYXNzTmFtZSxcbiAgbW9iaWxlQ2xhc3NOYW1lLFxufToge1xuICBpdGVtczogeyB0aXRsZTogc3RyaW5nOyBpY29uOiBSZWFjdC5SZWFjdE5vZGU7IGhyZWY6IHN0cmluZyB9W107XG4gIGRlc2t0b3BDbGFzc05hbWU/OiBzdHJpbmc7XG4gIG1vYmlsZUNsYXNzTmFtZT86IHN0cmluZztcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZsb2F0aW5nRG9ja0Rlc2t0b3AgaXRlbXM9e2l0ZW1zfSBjbGFzc05hbWU9e2Rlc2t0b3BDbGFzc05hbWV9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBGbG9hdGluZ0RvY2tEZXNrdG9wID0gKHtcbiAgaXRlbXMsXG4gIGNsYXNzTmFtZSxcbn06IHtcbiAgaXRlbXM6IHsgdGl0bGU6IHN0cmluZzsgaWNvbjogUmVhY3QuUmVhY3ROb2RlOyBocmVmOiBzdHJpbmcgfVtdO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59KSA9PiB7XG4gIGxldCBtb3VzZVggPSB1c2VNb3Rpb25WYWx1ZShJbmZpbml0eSk7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4gbW91c2VYLnNldChlLnBhZ2VYKX1cbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gbW91c2VYLnNldChJbmZpbml0eSl9XG4gICAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgICBcIm14LWF1dG8gIG1kOmZsZXggaC0xNiBnYXAtNCBpdGVtcy1lbmQgIHJvdW5kZWQtMnhsIGJnLXRyYW5zcGFyZW50IGdsYXNzIGRhcms6YmctbmV1dHJhbC05MDAgcHgtNCBwYi0zXCIsXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICA+XG4gICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgIDxJY29uQ29udGFpbmVyIG1vdXNlWD17bW91c2VYfSBrZXk9e2l0ZW0udGl0bGV9IHsuLi5pdGVtfSAvPlxuICAgICAgKSl9XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZnVuY3Rpb24gSWNvbkNvbnRhaW5lcih7XG4gIG1vdXNlWCxcbiAgdGl0bGUsXG4gIGljb24sXG4gIGhyZWYsXG59OiB7XG4gIG1vdXNlWDogTW90aW9uVmFsdWU7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGljb246IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaHJlZjogc3RyaW5nO1xufSkge1xuICBsZXQgcmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICBsZXQgZGlzdGFuY2UgPSB1c2VUcmFuc2Zvcm0obW91c2VYLCAodmFsKSA9PiB7XG4gICAgbGV0IGJvdW5kcyA9IHJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA/PyB7IHg6IDAsIHdpZHRoOiAwIH07XG5cbiAgICByZXR1cm4gdmFsIC0gYm91bmRzLnggLSBib3VuZHMud2lkdGggLyAyO1xuICB9KTtcblxuICBsZXQgd2lkdGhUcmFuc2Zvcm0gPSB1c2VUcmFuc2Zvcm0oZGlzdGFuY2UsIFstMTUwLCAwLCAxNTBdLCBbNDAsIDcwLCA0MF0pO1xuICBsZXQgaGVpZ2h0VHJhbnNmb3JtID0gdXNlVHJhbnNmb3JtKGRpc3RhbmNlLCBbLTE1MCwgMCwgMTUwXSwgWzQwLCA3MCwgNDBdKTtcblxuICBsZXQgd2lkdGhUcmFuc2Zvcm1JY29uID0gdXNlVHJhbnNmb3JtKGRpc3RhbmNlLCBbLTE1MCwgMCwgMTUwXSwgWzIwLCA0MCwgMjBdKTtcbiAgbGV0IGhlaWdodFRyYW5zZm9ybUljb24gPSB1c2VUcmFuc2Zvcm0oXG4gICAgZGlzdGFuY2UsXG4gICAgWy0xNTAsIDAsIDE1MF0sXG4gICAgWzIwLCA0MCwgMjBdXG4gICk7XG5cbiAgbGV0IHdpZHRoID0gdXNlU3ByaW5nKHdpZHRoVHJhbnNmb3JtLCB7XG4gICAgbWFzczogMC4xLFxuICAgIHN0aWZmbmVzczogMTUwLFxuICAgIGRhbXBpbmc6IDEyLFxuICB9KTtcbiAgbGV0IGhlaWdodCA9IHVzZVNwcmluZyhoZWlnaHRUcmFuc2Zvcm0sIHtcbiAgICBtYXNzOiAwLjEsXG4gICAgc3RpZmZuZXNzOiAxNTAsXG4gICAgZGFtcGluZzogMTIsXG4gIH0pO1xuXG4gIGxldCB3aWR0aEljb24gPSB1c2VTcHJpbmcod2lkdGhUcmFuc2Zvcm1JY29uLCB7XG4gICAgbWFzczogMC4xLFxuICAgIHN0aWZmbmVzczogMTUwLFxuICAgIGRhbXBpbmc6IDEyLFxuICB9KTtcbiAgbGV0IGhlaWdodEljb24gPSB1c2VTcHJpbmcoaGVpZ2h0VHJhbnNmb3JtSWNvbiwge1xuICAgIG1hc3M6IDAuMSxcbiAgICBzdGlmZm5lc3M6IDE1MCxcbiAgICBkYW1waW5nOiAxMixcbiAgfSk7XG5cbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmsgaHJlZj17aHJlZn0+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHNldEhvdmVyZWQodHJ1ZSl9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0SG92ZXJlZChmYWxzZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1zcXVhcmUgcm91bmRlZC1mdWxsIGJnLWdyYXktMjAwIGRhcms6YmctbmV1dHJhbC04MDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmVsYXRpdmVcIlxuICAgICAgPlxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgIHtob3ZlcmVkICYmIChcbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogMTAsIHg6IFwiLTUwJVwiIH19XG4gICAgICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCwgeDogXCItNTAlXCIgfX1cbiAgICAgICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB5OiAyLCB4OiBcIi01MCVcIiB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTAuNSB3aGl0ZXNwYWNlLXByZSByb3VuZGVkLW1kIGJnLWdyYXktMTAwIGJvcmRlciBkYXJrOmJnLW5ldXRyYWwtODAwIGRhcms6Ym9yZGVyLW5ldXRyYWwtOTAwIGRhcms6dGV4dC13aGl0ZSBib3JkZXItZ3JheS0yMDAgdGV4dC1uZXV0cmFsLTcwMCBhYnNvbHV0ZSBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIC10b3AtOCB3LWZpdCB0ZXh0LXhzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiB3aWR0aEljb24sIGhlaWdodDogaGVpZ2h0SWNvbiB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIHtpY29ufVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNuIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwidXNlTW90aW9uVmFsdWUiLCJ1c2VTcHJpbmciLCJ1c2VUcmFuc2Zvcm0iLCJMaW5rIiwidXNlUmVmIiwidXNlU3RhdGUiLCJGbG9hdGluZ0RvY2siLCJpdGVtcyIsImRlc2t0b3BDbGFzc05hbWUiLCJtb2JpbGVDbGFzc05hbWUiLCJGbG9hdGluZ0RvY2tEZXNrdG9wIiwiY2xhc3NOYW1lIiwibW91c2VYIiwiSW5maW5pdHkiLCJkaXYiLCJvbk1vdXNlTW92ZSIsImUiLCJzZXQiLCJwYWdlWCIsIm9uTW91c2VMZWF2ZSIsIm1hcCIsIml0ZW0iLCJJY29uQ29udGFpbmVyIiwidGl0bGUiLCJpY29uIiwiaHJlZiIsInJlZiIsImRpc3RhbmNlIiwidmFsIiwiYm91bmRzIiwiY3VycmVudCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJ3aWR0aCIsIndpZHRoVHJhbnNmb3JtIiwiaGVpZ2h0VHJhbnNmb3JtIiwid2lkdGhUcmFuc2Zvcm1JY29uIiwiaGVpZ2h0VHJhbnNmb3JtSWNvbiIsIm1hc3MiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiaGVpZ2h0Iiwid2lkdGhJY29uIiwiaGVpZ2h0SWNvbiIsImhvdmVyZWQiLCJzZXRIb3ZlcmVkIiwic3R5bGUiLCJvbk1vdXNlRW50ZXIiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiZXhpdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/floating-dock.tsx\n"));

/***/ })

});