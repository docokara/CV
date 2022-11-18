exports.id = 458;
exports.ids = [458];
exports.modules = {

/***/ 8364:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "projects_container__VGDj9",
	"header": "projects_header__3JJWc",
	"projet": "projects_projet__kIrS4",
	"infos": "projects_infos__tfq0u",
	"img": "projects_img__5p3pU",
	"githubLogo": "projects_githubLogo__P_Nm5",
	"description": "projects_description__6o2qU"
};


/***/ }),

/***/ 9458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./pages/components/projects/projects.module.scss
var projects_module = __webpack_require__(8364);
var projects_module_default = /*#__PURE__*/__webpack_require__.n(projects_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/components/projects/projets.json
const projets_namespaceObject = JSON.parse('{"CV":{"image":"/images/CV.png","name":"Curriculum Vitae","repo":"https://github.com/docokara/CV","description":"Un CV sobre pour montrer que je suis en mesure d\'utiliser le FrameWork next (pour une utilisations trés simple certes !)"},"granulometrie":{"image":"/images/granulometrie.png","name":"Granulometrie","repo":"https://github.com/docokara/granulometrie.png","description":"Ceci est le projet que nous avons dû faire en L2, il consiste à faire un test sur une image sur les grains de l\'image afin d\'en sortir des stats"},"adminPage":{"image":"/images/adminpage.png","name":"Admin Page","repo":"https://github.com/docokara/AdminPage","description":"Ceci est un projet personnel regroupant plein de test css et js (manipulations d\'objet) "},"twitch-manager":{"image":"/images/twitch-manager.jpg","name":"Twitch Library","repo":"https://github.com/docokara/twitch-manager","description":"Ceci est une library que je suis en train de concevoir afin de mettre en place simplement un manager d\'évenement sur twitch "},"foodsens":{"image":"/images/foodsens.jpg","name":"Food Sens","repo":"https://github.com/docokara/FoodSens","description":"Ceci est le projet de l3 , utilisant symfony. Le concept est simple , inscrivez-vous , remplissez votre frigo avec ce que vous avez chez vous et l\'applications se charge de vous proposer des recettes faisable avec ce que vous avez !"}}');
;// CONCATENATED MODULE: ./pages/components/projects/index.jsx
/* eslint-disable @next/next/no-img-element */ 



function projects({}) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (projects_module_default()).container,
        id: "projet-section",
        children: [
            " ",
            Object.values(projets_namespaceObject).map((element, i)=>{
                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (projects_module_default()).projet,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("header", {
                            className: (projects_module_default()).header,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: element.name
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                            className: (projects_module_default()).infos,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    href: element.repo,
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            className: (projects_module_default()).img,
                                            loader: ()=>element.image,
                                            src: element.image,
                                            alt: "Picture of the author",
                                            width: "450px",
                                            height: "300px",
                                            href: element.repo
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (projects_module_default()).description,
                                    children: element.description
                                })
                            ]
                        }, i)
                    ]
                }, i);
            })
        ]
    });
};


/***/ })

};
;