var pageComponent =
webpackJsonppageComponent([17],{

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

var _indexSoy = __webpack_require__(269);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NyJUS = function (_Component) {
  _inherits(NyJUS, _Component);

  function NyJUS() {
    _classCallCheck(this, NyJUS);

    return _possibleConstructorReturn(this, (NyJUS.__proto__ || Object.getPrototypeOf(NyJUS)).apply(this, arguments));
  }

  return NyJUS;
}(_metalComponent2.default);

;

_metalSoy2.default.register(NyJUS, _indexSoy2.default);

exports.default = NyJUS;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.NyJUS = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace NyJUS.
   * @public
   */

  goog.module('NyJUS.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Jobs');
      ie_close('h2');
      ie_open('p');
      itext('We have two types of Jobs here.');
      ie_close('p');
      ie_open('p');
      itext('The first type is cron expression jobs, which builds cron expressions internally and delegate everything to cron expression scheduling.');
      ie_close('p');
      ie_open('p');
      itext('The other type is repeating jobs, which repeat themselves at a given interval, and are more flexible in use.');
      ie_close('p');
      ie_open('p');
      itext('Repeating jobs are defined by using methods like \'startAt(Xxx)\' or \'startNow()\', followed by \'afterXxx\' and \'repeatXxx\'.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Dependencies');
      ie_close('h2');
      ie_open('p');
      itext('Job.apex has a dependency over ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex');
      itext('R.apex');
      ie_close('a');
      itext('. We utilize R.apex to grant the power of functions to Job.apex.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Job Executor');
      ie_close('h2');
      ie_open('p');
      itext('We separate the job execution from job scheduling. So users only need to pass in job executors, and Job.apex will take care of the job scheduling.');
      ie_close('p');
      $templateAlias2({ code: 'public class CustomJob extends Func {\n    public CustomJob() {\n        super(1);\n    }\n\n    public override Object exec(Object context) {\n        System.debug(\'Custom job executed\');\n        return null;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we defined a CustomJob executor with our custom logic inside it. Then we can schedule our job like this:');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', new CustomJob()).everyDay().atHour(8).schedule();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'NyJUS.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var NyJUS = function (_Component) {
  _inherits(NyJUS, _Component);

  function NyJUS() {
    _classCallCheck(this, NyJUS);

    return _possibleConstructorReturn(this, (NyJUS.__proto__ || Object.getPrototypeOf(NyJUS)).apply(this, arguments));
  }

  return NyJUS;
}(_metalComponent2.default);

_metalSoy2.default.register(NyJUS, templates);
exports.NyJUS = NyJUS;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);