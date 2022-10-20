"use strict";
exports.id = 320;
exports.ids = [320];
exports.modules = {

/***/ 3320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BoardCreator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


//import styles from "./parcours.module.scss";
function BoardCreator({ boardType , style , fhandler , cssname , info , currentboard  }) {
    const type = boardType;
    const styles = style;
    const handler = fhandler;
    const name = cssname;
    const informations = info;
    const currentBoard = currentboard;
    switch(type){
        case "selective":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                    value: currentBoard,
                    onChange: ({ target: { value  }  })=>handler(value),
                    className: styles,
                    children: [
                        " ",
                        informations.map((element, i)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: element,
                                children: element
                            }, `${name}${i}`);
                        })
                    ]
                }, `${name}`)
            }, `${name}`);
        case "basic":
            const data = [];
            informations.forEach((infos, i)=>{
                data.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                    id: `informations ${i} ${name}`,
                    style: {
                        "margin": ".7em"
                    },
                    children: infos
                }, `informations ${i} ${name}`));
            });
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                        className: styles,
                        children: data
                    }, `board ${name} colomn`)
                }, `board ${name} body`)
            }, `board ${name} table`);
        default:
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "Failed !"
            });
    }
};


/***/ })

};
;