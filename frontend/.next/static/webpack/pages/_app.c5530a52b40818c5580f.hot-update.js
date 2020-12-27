webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/header/Header.jsx":
/*!**************************************!*\
  !*** ./components/header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons */ \"./node_modules/@material-ui/icons/esm/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n\n\nvar _jsxFileName = \"/home/rynn/Documents/projects/docker-flask-react/frontend/components/header/Header.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nconst navLinks = [{\n  title: `Login`,\n  path: `/login`\n}, {\n  title: `Signup`,\n  path: `/signup`\n}];\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__[\"makeStyles\"])({\n  navDisplayFlex: {\n    display: `flex`,\n    justifyContent: `space-between`\n  },\n  linkText: {\n    textDecoration: `None`,\n    textTransform: `uppercase`,\n    color: `white`\n  }\n});\nconst history = createMemoryHistory();\n\nconst Header = () => {\n  _s();\n\n  const classes = useStyles();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"AppBar\"], {\n    position: \"static\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"Toolbar\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"IconButton\"], {\n        edge: \"start\",\n        color: \"inherit\",\n        \"aria-label\": \"home\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_3__[\"Home\"], {\n          fontSize: \"large\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__[\"BrowserRouter\"], {\n        history: history,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n          component: \"nav\",\n          \"aria-labelledby\": \"main navigation\",\n          className: classes.navDisplayFlex,\n          children: navLinks.map(({\n            title,\n            path\n          }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Link, {\n            to: path,\n            className: classes.linkText,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItem\"], {\n              button: true,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[\"ListItemText\"], {\n                primary: title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 8\n              }, undefined)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 7\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 6\n          }, undefined))\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 3\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 3\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 12\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, undefined);\n};\n\n_s(Header, \"8g5FPXexvSEOsxdmU7HicukHGqY=\", false, function () {\n  return [useStyles];\n});\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzeD8wMTI5Il0sIm5hbWVzIjpbIm5hdkxpbmtzIiwidGl0bGUiLCJwYXRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsIm5hdkRpc3BsYXlGbGV4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibGlua1RleHQiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRUcmFuc2Zvcm0iLCJjb2xvciIsImhpc3RvcnkiLCJjcmVhdGVNZW1vcnlIaXN0b3J5IiwiSGVhZGVyIiwiY2xhc3NlcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsTUFBTUEsUUFBUSxHQUFHLENBQ2I7QUFBRUMsT0FBSyxFQUFHLE9BQVY7QUFBa0JDLE1BQUksRUFBRztBQUF6QixDQURhLEVBRWI7QUFBRUQsT0FBSyxFQUFHLFFBQVY7QUFBbUJDLE1BQUksRUFBRztBQUExQixDQUZhLENBQWpCO0FBS0EsTUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxnQkFBYyxFQUFFO0FBQ2ZDLFdBQU8sRUFBRyxNQURLO0FBRWZDLGtCQUFjLEVBQUc7QUFGRixHQURZO0FBSzVCQyxVQUFRLEVBQUU7QUFDVEMsa0JBQWMsRUFBRyxNQURSO0FBRVRDLGlCQUFhLEVBQUcsV0FGUDtBQUdUQyxTQUFLLEVBQUc7QUFIQztBQUxrQixDQUFELENBQTVCO0FBWUEsTUFBTUMsT0FBTyxHQUFHQyxtQkFBbUIsRUFBbkM7O0FBRUEsTUFBTUMsTUFBTSxHQUFHLE1BQU07QUFBQTs7QUFDakIsUUFBTUMsT0FBTyxHQUFHWixTQUFTLEVBQXpCO0FBRUEsc0JBQ0kscUVBQUMsd0RBQUQ7QUFBUSxZQUFRLEVBQUMsUUFBakI7QUFBQSwyQkFDRyxxRUFBQyx5REFBRDtBQUFBLDhCQUNLLHFFQUFDLDREQUFEO0FBQVksWUFBSSxFQUFDLE9BQWpCO0FBQXlCLGFBQUssRUFBQyxTQUEvQjtBQUF5QyxzQkFBVyxNQUFwRDtBQUFBLCtCQUNJLHFFQUFDLHVEQUFEO0FBQU0sa0JBQVEsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURMLGVBSVQscUVBQUMsOERBQUQ7QUFBUSxlQUFPLEVBQUVTLE9BQWpCO0FBQUEsK0JBQ0EscUVBQUMsc0RBQUQ7QUFBTSxtQkFBUyxFQUFDLEtBQWhCO0FBQXNCLDZCQUFnQixpQkFBdEM7QUFBd0QsbUJBQVMsRUFBRUcsT0FBTyxDQUFDVixjQUEzRTtBQUFBLG9CQUVFTCxRQUFRLENBQUNnQixHQUFULENBQWMsQ0FBQztBQUFDZixpQkFBRDtBQUFRQztBQUFSLFdBQUQsa0JBQ2IscUVBQUMsSUFBRDtBQUFNLGNBQUUsRUFBRUEsSUFBVjtBQUFnQixxQkFBUyxFQUFFYSxPQUFPLENBQUNQLFFBQW5DO0FBQUEsbUNBQ0MscUVBQUMsMERBQUQ7QUFBVSxvQkFBTSxNQUFoQjtBQUFBLHFDQUNDLHFFQUFDLDhEQUFEO0FBQWMsdUJBQU8sRUFBRVA7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUREO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBc0JILENBekJEOztHQUFNYSxNO1VBQ2NYLFM7OztLQURkVyxNO0FBMkJTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwQmFyLCBUb29sYmFyLCBJY29uQnV0dG9uLCBMaXN0LCBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBIb21lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zJ1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuXG5jb25zdCBuYXZMaW5rcyA9IFtcbiAgICB7IHRpdGxlOiBgTG9naW5gLCBwYXRoOiBgL2xvZ2luYCB9LFxuICAgIHsgdGl0bGU6IGBTaWdudXBgLCBwYXRoOiBgL3NpZ251cGAgfSxcbl07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuXHRuYXZEaXNwbGF5RmxleDoge1xuXHRcdGRpc3BsYXk6IGBmbGV4YCxcblx0XHRqdXN0aWZ5Q29udGVudDogYHNwYWNlLWJldHdlZW5gXG5cdH0sXG5cdGxpbmtUZXh0OiB7XG5cdFx0dGV4dERlY29yYXRpb246IGBOb25lYCxcblx0XHR0ZXh0VHJhbnNmb3JtOiBgdXBwZXJjYXNlYCxcblx0XHRjb2xvcjogYHdoaXRlYFxuXHR9XG59KTtcblxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkoKTtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249J3N0YXRpYyc+XG4gICAgICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNvbG9yPVwiaW5oZXJpdFwiIGFyaWEtbGFiZWw9XCJob21lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxIb21lIGZvbnRTaXplPVwibGFyZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cblx0XHQ8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxuXHRcdDxMaXN0IGNvbXBvbmVudD1cIm5hdlwiIGFyaWEtbGFiZWxsZWRieT1cIm1haW4gbmF2aWdhdGlvblwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZEaXNwbGF5RmxleH0+XG5cdFx0XHR7XG5cdFx0XHRcdG5hdkxpbmtzLm1hcCggKHt0aXRsZSwgcGF0aH0pID0+IChcblx0XHRcdFx0XHQ8TGluayB0bz17cGF0aH0gY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtUZXh0fT5cblx0XHRcdFx0XHRcdDxMaXN0SXRlbSBidXR0b24+XG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT17dGl0bGV9Lz5cblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQpKVxuXHRcdFx0fVxuXHRcdDwvTGlzdD5cblx0XHQ8L1JvdXRlcj5cbiAgICAgICAgICAgPC9Ub29sYmFyPlxuICAgICAgICA8L0FwcEJhcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/header/Header.jsx\n");

/***/ })

})