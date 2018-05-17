var pageComponent =
webpackJsonppageComponent([12],{

/***/ 278:
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

var _repeatingSoy = __webpack_require__(279);

var _repeatingSoy2 = _interopRequireDefault(_repeatingSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JDheR = function (_Component) {
  _inherits(JDheR, _Component);

  function JDheR() {
    _classCallCheck(this, JDheR);

    return _possibleConstructorReturn(this, (JDheR.__proto__ || Object.getPrototypeOf(JDheR)).apply(this, arguments));
  }

  return JDheR;
}(_metalComponent2.default);

;

_metalSoy2.default.register(JDheR, _repeatingSoy2.default);

exports.default = JDheR;

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.JDheR = undefined;

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

  // This file was automatically generated from repeating.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace JDheR.
   * @public
   */

  goog.module('JDheR.incrementaldom');

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
    var param585 = function param585() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('startAt');
      ie_close('h2');
      ie_open('p');
      itext('Start the repeating job at the datetime.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startAt(Datetime.now()).afterMinutes(30).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 30 mins', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('startNow');
      ie_close('h2');
      ie_open('p');
      itext('Start the repeating job now.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterMinutes(30).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 30 mins', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('afterSeconds');
      ie_close('h2');
      ie_open('p');
      itext('Repeating after N seconds.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterSeconds(30).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 30 seconds', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('afterMinutes');
      ie_close('h2');
      ie_open('p');
      itext('Repeating after N minutes.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterMinutes(30).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 30 minutes', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('afterHours');
      ie_close('h2');
      ie_open('p');
      itext('Repeating after N hours.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterHours(10).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 10 hours', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('afterDays');
      ie_close('h2');
      ie_open('p');
      itext('Repeating after N days.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterDays(10).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 10 days', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('afterMonths');
      ie_close('h2');
      ie_open('p');
      itext('Repeating after N months.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterMonths(10).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 10 months.', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('afterYears');
      ie_close('h2');
      ie_open('p');
      itext('Repeating after N years.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterYears(10).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 10 years', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('afterTime');
      ie_close('h2');
      ie_open('p');
      itext('Repeating after N milliseconds.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterTime(10000).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 10000 milliseconds', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('after');
      ie_close('h2');
      ie_open('p');
      itext('Repeating after the time returned by the afterFunc.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().after(R.multiply.apply(1000)).repeatOnce().schedule();\n// Schedule a run-once job that starts now, triggered after 0s, 1s, 2s ...', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('repeat');
      ie_close('h2');
      ie_open('p');
      itext('Repeat max count.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterMinutes(30).repeat(3).schedule();\n// Schedule a job that starts now, triggered after 30 minutes, for 3 times', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('repeatOnce');
      ie_close('h2');
      ie_open('p');
      itext('Repeat only once.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterMinutes(30).repeatOnce().schedule();\n// Schedule a job that starts now, triggered after 30 minutes, for only 1 time', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '13');
      ie_open('h2');
      itext('repeatForever');
      ie_close('h2');
      ie_open('p');
      itext('Repeat forever.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterMinutes(30).repeatForever().schedule();\n// Schedule a job that starts now, triggered after 30 minutes, running forever', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '14');
      ie_open('h2');
      itext('repeatUntil');
      ie_close('h2');
      ie_open('p');
      itext('Repeat until func is satisfied. The func takes the current repeating number, and returns a Boolean. Returning true indicates that the repeating is finished.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterMinutes(30).repeatUntil(R.equals.apply(2)).schedule();\n// Schedule a job that starts now, triggered after 30 minutes until repeating count reaches 2', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '15');
      ie_open('h2');
      itext('repeatUntil');
      ie_close('h2');
      ie_open('p');
      itext('Repeat until the end datetime.');
      ie_close('p');
      $templateAlias2({ code: 'new Job(\'test\', R.debug).startNow().afterMinutes(30).repeatUntil(Datetime.newInstance(2018, 10, 1)).schedule();\n// Schedule a job that starts now, triggered after 30 minutes, repeating until 2018/10/01', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '16');
      ie_open('h2');
      itext('usingRepeat');
      ie_close('h2');
      ie_open('p');
      itext('Check if the job is using repeating pattern.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '17');
      ie_open('h2');
      itext('isRepeatSet');
      ie_close('h2');
      ie_open('p');
      itext('Check if the job has set repeating.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '18');
      ie_open('h2');
      itext('getNextDatetime');
      ie_close('h2');
      ie_open('p');
      itext('Get the next triggered datetime of the job. Only available for repeating pattern job.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param585 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'JDheR.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var JDheR = function (_Component) {
  _inherits(JDheR, _Component);

  function JDheR() {
    _classCallCheck(this, JDheR);

    return _possibleConstructorReturn(this, (JDheR.__proto__ || Object.getPrototypeOf(JDheR)).apply(this, arguments));
  }

  return JDheR;
}(_metalComponent2.default);

_metalSoy2.default.register(JDheR, templates);
exports.JDheR = JDheR;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[278]);