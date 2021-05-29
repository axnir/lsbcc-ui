"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var prefixCls = 'lsbcc-pagination';

var Pagination = function Pagination(_ref) {
  var pageSize = _ref.pageSize,
      _ref$total = _ref.total,
      total = _ref$total === void 0 ? 0 : _ref$total,
      onChange = _ref.onChange,
      current = _ref.current;

  var _useState = (0, _react.useState)(current),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      activePage = _useState2[0],
      setActivePage = _useState2[1]; // 计算总页数


  var totalPagesCount = (0, _react.useMemo)(function () {
    return Math.ceil(total / pageSize);
  }, [pageSize, total]); // 前进后退按钮的classnames

  var preBtnClasses = (0, _classnames.default)('page', 'btn', {
    disabled: activePage < 2
  });
  var nextBtnClasses = (0, _classnames.default)('page', 'btn', {
    disabled: activePage > totalPagesCount - 1
  }); // 更新current

  (0, _react.useEffect)(function () {
    setActivePage(current);
  }, [current]); // 存放的页码数组

  var contentList = []; // 点击左箭头向前移动1页

  var handlePrePageChange = function handlePrePageChange() {
    activePage > 1 && onChange(activePage - 1);
    return false;
  }; // 点击右箭头向后移动1页


  var handleNextPageChange = function handleNextPageChange() {
    activePage < totalPagesCount && onChange(activePage + 1);
    return false;
  }; // 点击页码的事件


  var handlePageChange = function handlePageChange(page) {
    onChange(page);
  }; // 点击省略号向前5页的事件


  var handlePreOmitPageChange = function handlePreOmitPageChange() {
    onChange(activePage - 5);
  }; // 点击省略号向后5页的事件


  var handleNextOmitPageChange = function handleNextOmitPageChange() {
    onChange(activePage + 5);
  }; // 省略号组件


  var OmitPage = function OmitPage(_ref2) {
    var onClick = _ref2.onClick;
    return /*#__PURE__*/_react.default.createElement("li", {
      onClick: onClick,
      className: "page"
    }, /*#__PURE__*/_react.default.createElement("span", null, "..."));
  }; // 除去前进后退按钮的分页


  var renderPagination = function renderPagination() {
    // 页数小于等于9不用显示省略号的情况
    if (totalPagesCount <= 9) {
      contentList = Array.from({
        length: totalPagesCount
      }).map(function (_, index) {
        var classes = (0, _classnames.default)('page', {
          active: activePage === index + 1,
          disabled: activePage === index + 1
        });
        return /*#__PURE__*/_react.default.createElement("li", {
          className: classes,
          key: index + 1,
          onClick: function onClick() {
            activePage !== index + 1 && handlePageChange(index + 1);
          }
        }, /*#__PURE__*/_react.default.createElement("span", null, index + 1));
      }); // 只显示左侧省略号的情况
    } else if (current + 4 >= totalPagesCount) {
      var classes = (0, _classnames.default)('page', {
        active: activePage === 1,
        disabled: activePage === 1
      });
      contentList = [/*#__PURE__*/_react.default.createElement("li", {
        className: classes,
        key: 1,
        onClick: function onClick() {
          activePage !== 1 && handlePageChange(1);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, "1")), /*#__PURE__*/_react.default.createElement(OmitPage, {
        key: "omit ".concat(Math.random()),
        onClick: handlePreOmitPageChange
      })].concat(Array.from({
        length: 9 - 2
      }).map(function (_, index) {
        var pageClasses = (0, _classnames.default)('page', {
          // index + totalPagesCount - 9 + 3 实际应该是 index + 1 + totalPagesCount - 9 + 2
          // 一次只显示9个，此次遍历从第三个开始，遍历出的index需要+1，
          // totalPagesCount - 9就是省略掉的页码，再加上前面的两个，得实际页码
          active: activePage === index + totalPagesCount - 9 + 3,
          disabled: activePage === index + totalPagesCount - 9 + 3
        });
        return /*#__PURE__*/_react.default.createElement("li", {
          className: pageClasses,
          key: index + totalPagesCount - 9 + 3,
          onClick: function onClick() {
            activePage !== index + totalPagesCount - 9 + 3 && onChange(index + totalPagesCount - 9 + 3);
          }
        }, /*#__PURE__*/_react.default.createElement("span", null, index + totalPagesCount - 9 + 3));
      })); // 只显示右侧省略号的情况
    } else if (current - 4 <= 1) {
      var _classes = (0, _classnames.default)('page', {
        active: activePage === totalPagesCount,
        disabled: activePage === totalPagesCount
      });

      contentList = Array.from({
        length: 9 - 2
      }).map(function (_, index) {
        var pageClasses = (0, _classnames.default)('page', {
          active: activePage === index + 1,
          disabled: activePage === index + 1
        });
        return /*#__PURE__*/_react.default.createElement("li", {
          className: pageClasses,
          key: index + 1,
          onClick: function onClick() {
            activePage !== index + 1 && handlePageChange(index + 1);
          }
        }, /*#__PURE__*/_react.default.createElement("span", null, index + 1));
      }).concat( /*#__PURE__*/_react.default.createElement(OmitPage, {
        key: "omit ".concat(Math.random()),
        onClick: handleNextOmitPageChange
      }), /*#__PURE__*/_react.default.createElement("li", {
        className: _classes,
        key: totalPagesCount,
        onClick: function onClick() {
          activePage !== totalPagesCount && handlePageChange(totalPagesCount);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, totalPagesCount))); // 左右省略号都显示的情况
    } else {
      var _classes2 = (0, _classnames.default)('page', {
        active: activePage === 1,
        disabled: activePage === 1
      });

      contentList = [/*#__PURE__*/_react.default.createElement("li", {
        className: _classes2,
        key: 1,
        onClick: function onClick() {
          activePage !== 1 && handlePageChange(1);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, "1")), /*#__PURE__*/_react.default.createElement(OmitPage, {
        key: "omit ".concat(Math.random()),
        onClick: handlePreOmitPageChange
      })].concat(Array.from({
        length: 9 - 4
      }).map(function (_, index) {
        var pageClasses = (0, _classnames.default)('page', {
          active: activePage === index + current - 2,
          disabled: activePage === index + current - 2
        });
        return /*#__PURE__*/_react.default.createElement("li", {
          className: pageClasses,
          key: index + current - 1,
          onClick: function onClick() {
            activePage !== index + current - 2 && handlePageChange(index + current - 2);
          }
        }, /*#__PURE__*/_react.default.createElement("span", null, index + current - 2));
      }), /*#__PURE__*/_react.default.createElement(OmitPage, {
        key: "omit ".concat(Math.random()),
        onClick: handleNextOmitPageChange
      }), /*#__PURE__*/_react.default.createElement("li", {
        className: _classes2,
        key: totalPagesCount,
        onClick: function onClick() {
          activePage !== totalPagesCount && handlePageChange(totalPagesCount);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, totalPagesCount)));
    }

    return contentList;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: prefixCls
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "pages-inner"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: preBtnClasses,
    onClick: handlePrePageChange
  }, /*#__PURE__*/_react.default.createElement("span", null, '<')), renderPagination(), /*#__PURE__*/_react.default.createElement("li", {
    className: nextBtnClasses,
    onClick: handleNextPageChange
  }, /*#__PURE__*/_react.default.createElement("span", null, '>'))));
};

var _default = Pagination;
exports.default = _default;