"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MasonryGridView = MasonryGridView;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function chunkArray(arr, chunkSize) {
  const chunks = [];
  for (let i = 0; i < chunkSize; i++) {
    chunks[i] = [];
  }
  let chunkIndex = 0;
  arr.forEach(item => {
    var _chunks$chunkIndex;
    (_chunks$chunkIndex = chunks[chunkIndex]) === null || _chunks$chunkIndex === void 0 ? void 0 : _chunks$chunkIndex.push(item);
    chunkIndex = (chunkIndex + 1) % chunkSize;
  });
  return chunks;
}
function MasonryGridView(_ref) {
  let {
    items,
    renderItem,
    columns
  } = _ref;
  const [grid, setGrid] = (0, _react.useState)([]);
  const screenWidth = _reactNative.Dimensions.get('window').width;
  const columnCount = columns || 2;
  const columnWidth = screenWidth / columnCount;
  (0, _react.useEffect)(() => {
    const chunks = chunkArray(items, columnCount);
    setGrid(chunks);
  }, [items, columnCount]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: styles.grid
  }, grid.map((column, columnIndex) => /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    key: columnIndex,
    style: {
      width: columnWidth
    }
  }, column.map((item, itemIndex) => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: itemIndex
  }, renderItem(item, itemIndex))))));
}
const styles = _reactNative.StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
//# sourceMappingURL=MasonryGridView.js.map