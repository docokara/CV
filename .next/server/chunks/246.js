exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 3851:
/***/ ((module) => {

// Exports
module.exports = {
	"boardContainer": "parcours_boardContainer__y8MHs",
	"board0": "parcours_board0__h1PWM",
	"board1": "parcours_board1__bEBKw",
	"selectiveBoard": "parcours_selectiveBoard__KJ96E",
	"informations": "parcours_informations__t0RIh",
	"visible": "parcours_visible__LRSkd"
};


/***/ }),

/***/ 2246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Parcours)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./pages/components/parcours/parcours.module.scss
var parcours_module = __webpack_require__(3851);
var parcours_module_default = /*#__PURE__*/__webpack_require__.n(parcours_module);
;// CONCATENATED MODULE: ./pages/components/parcours/boardInfo.json
const boardInfo_namespaceObject = JSON.parse('{"I":{"Parcours scolaire":[["2022","2018"],["L3 informatiques Faculté Sciences et Techniques GrandMont","Baccalauréat STI2D mention Assez Bien"]],"Experience professionel":[["Juin 2022 - juillet 2022","Juillet 2021 - Août 2021","Juin 2020 - Juillet 2020","Juillet 2019 - août 2019"],["Saisonnier CAPROGA","Equipier BurgerKing","Préparateur de commande à DARTY","Techniciens informatiques ECONOCOM"]]}}');
// EXTERNAL MODULE: ./pages/utils/BoardCreator.jsx
var BoardCreator = __webpack_require__(3320);
;// CONCATENATED MODULE: ./pages/components/parcours/index.jsx
/* eslint-disable @next/next/no-img-element */ 




const BoardNames = Object.keys(boardInfo_namespaceObject.I);
function Parcours({}) {
    const { 0: board , 1: setBoard  } = (0,external_react_.useState)([]);
    const { 0: currentBoard , 1: setCurrentBoard  } = (0,external_react_.useState)("Parcours scolaire");
    const { 0: fade , 1: setFade  } = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(function() {
        console.log("current board : ", currentBoard);
        let board = [];
        boardInfo_namespaceObject.I[currentBoard].forEach((info, i)=>{
            const s = `board${i}`;
            board.push(/*#__PURE__*/ jsx_runtime_.jsx(BoardCreator["default"], {
                boardType: "basic",
                style: (parcours_module_default())[s],
                info: info,
                cssname: currentBoard + i
            }, `basicBoard${i}`));
        });
        board.push(/*#__PURE__*/ jsx_runtime_.jsx(BoardCreator["default"], {
            boardType: "selective",
            style: (parcours_module_default()).selectiveBoard,
            fhandler: selectiveHandle,
            info: BoardNames,
            cssname: `${currentBoard} selectiveBoard`,
            currentboard: currentBoard
        }, "selectiveBoard"));
        setBoard(board);
    }, [
        currentBoard
    ]);
    (0,external_react_.useEffect)(function() {
        window.addEventListener("scroll", fadeInCss);
        return ()=>{
            window.removeEventListener("scoll", fadeInCss);
        };
    }, []);
    const fadeInCss = (e)=>{
        var element = document.getElementById("boardToFade");
        var pageTop = window.pageYOffset;
        var pageBottom = pageTop + window.outerHeight;
        var elementTop = element.offsetTop;
        if (elementTop < pageBottom) {
            setFade("visible");
        } else {
            console.log("no");
            setFade("");
        }
    };
    function selectiveHandle(name) {
        setCurrentBoard(name);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: `boardToFade`,
        className: [
            (parcours_module_default()).boardContainer,
            (parcours_module_default())[fade]
        ].join(" "),
        children: board
    }, currentBoard);
};


/***/ })

};
;