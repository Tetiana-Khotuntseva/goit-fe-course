/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\");\nvar _menu_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./menu.json */ \"./src/menu.json\", 1);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './menu-items-template.hbs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nconst Theme = {\n  LIGHT: 'light-theme',\n  DARK: 'dark-theme',\n};\n\nconst refs = {\n  menuList: document.querySelector('.js-menu'),\n  themeCheckBox: document.querySelector('#theme-switch-control'),\n  body: document.querySelector('body'),\n};\n\nconst markup = !(function webpackMissingModule() { var e = new Error(\"Cannot find module './menu-items-template.hbs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_menu_json__WEBPACK_IMPORTED_MODULE_0__);\nrefs.menuList.insertAdjacentHTML('beforeend', markup);\n\nconst userTheme = localStorage.getItem('userTheme');\n\nif (userTheme) {\n  if (userTheme === Theme.DARK) {\n    refs.themeCheckBox.checked = true;\n  } else {\n    refs.themeCheckBox.checked = false;\n  }\n  refs.body.classList.add(userTheme);\n}\n\nrefs.themeCheckBox.addEventListener('change', e => {\n  if (e.target.checked) {\n    refs.body.classList.remove(Theme.LIGHT);\n    refs.body.classList.add(Theme.DARK);\n    localStorage.setItem('userTheme', Theme.DARK);\n  } else {\n    refs.body.classList.remove(Theme.DARK);\n    refs.body.classList.add(Theme.LIGHT);\n    localStorage.setItem('userTheme', Theme.LIGHT);\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"id\\\":\\\"XWaQXcbk0\\\",\\\"name\\\":\\\"Картофель, запеченный в мундире\\\",\\\"description\\\":\\\"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.\\\",\\\"image\\\":\\\"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg\\\",\\\"price\\\":100,\\\"ingredients\\\":[\\\"Картофель\\\",\\\"Чеснок\\\",\\\"Сметана\\\",\\\"Бекон\\\",\\\"Твердый сыр\\\",\\\"Зеленый лук\\\"]},{\\\"id\\\":\\\"pkXzyRp1P\\\",\\\"name\\\":\\\"Томатный магрибский суп\\\",\\\"description\\\":\\\"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.\\\",\\\"image\\\":\\\"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg\\\",\\\"price\\\":150,\\\"ingredients\\\":[\\\"Помидоры\\\",\\\"Куриный бульон\\\",\\\"Мед\\\",\\\"Петрушка\\\",\\\"Кинза\\\",\\\"Паприка\\\"]},{\\\"id\\\":\\\"QMom9q4Ku\\\",\\\"name\\\":\\\"Крем-суп из тыквы\\\",\\\"description\\\":\\\"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.\\\",\\\"image\\\":\\\"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png\\\",\\\"price\\\":100,\\\"ingredients\\\":[\\\"Тыква\\\",\\\"Петрушка\\\",\\\"Сливки\\\",\\\"Бренди\\\",\\\"Куриный бульон\\\"]},{\\\"id\\\":\\\"k2k0UrjZG\\\",\\\"name\\\":\\\"Салат из красной фасоли с творожным сыром\\\",\\\"description\\\":\\\"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.\\\",\\\"image\\\":\\\"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg\\\",\\\"price\\\":150,\\\"ingredients\\\":[\\\"Фасоль\\\",\\\"Соль\\\",\\\"Чеснок\\\",\\\"Оливковое масло\\\",\\\"Творожный сыр\\\",\\\"Красный лук\\\"]},{\\\"id\\\":\\\"j2k8U1jZd\\\",\\\"name\\\":\\\"Классический греческий салат \\\",\\\"description\\\":\\\"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.\\\",\\\"image\\\":\\\"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg\\\",\\\"price\\\":350,\\\"ingredients\\\":[\\\"Оливковое масло\\\",\\\"Лимонный сок\\\",\\\"Чеснок\\\",\\\"Помидоры\\\",\\\"Красный лук\\\",\\\"Сыр фета\\\",\\\"Маслины\\\"]},{\\\"id\\\":\\\"X2aQ7cvkd\\\",\\\"name\\\":\\\"Маффины с голубикой и мускатным орехом\\\",\\\"description\\\":\\\"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.\\\",\\\"image\\\":\\\"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg\\\",\\\"price\\\":170,\\\"ingredients\\\":[\\\"Сливочное масло\\\",\\\"Пшеничная мука\\\",\\\"Голубика\\\",\\\"Ванильный экстракт\\\",\\\"Мускатный орех\\\"]},{\\\"id\\\":\\\"nk3zy1pf8\\\",\\\"name\\\":\\\"Азу по‑татарски\\\",\\\"description\\\":\\\"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.\\\",\\\"image\\\":\\\"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg\\\",\\\"price\\\":270,\\\"ingredients\\\":[\\\"Говядина\\\",\\\"Соленые огурцы\\\",\\\"Картофель\\\",\\\"Мясной бульон\\\",\\\"Чеснок\\\"]},{\\\"id\\\":\\\"b7k2U13fd\\\",\\\"name\\\":\\\"Жареный рис с яйцом по‑китайски\\\",\\\"description\\\":\\\"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.\\\",\\\"image\\\":\\\"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg\\\",\\\"price\\\":240,\\\"ingredients\\\":[\\\"Круглый рис\\\",\\\"Мини цукини\\\",\\\"Тертый имбирь\\\",\\\"Грибы шиитаке\\\",\\\"Соевый соус\\\",\\\"Кунжутное масло\\\"]}]\");\n\n//# sourceURL=webpack:///./src/menu.json?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> html {\\n|   box-sizing: border-box;\\n|   width: 100vw;\");\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });