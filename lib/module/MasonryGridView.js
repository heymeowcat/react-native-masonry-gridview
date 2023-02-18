import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
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
  const [grid, setGrid] = useState([]);
  const screenWidth = Dimensions.get('window').width;
  const columnCount = columns || 2;
  const columnWidth = (screenWidth - 20) / columnCount;
  useEffect(() => {
    const chunks = chunkArray(items, columnCount);
    setGrid(chunks);
  }, [items, columnCount]);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.grid
  }, grid.map((column, columnIndex) => /*#__PURE__*/React.createElement(View, {
    key: columnIndex,
    style: {
      width: columnWidth
    }
  }, column.map((item, itemIndex) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: itemIndex
  }, renderItem(item, itemIndex))))));
}
const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
export { MasonryGridView };
//# sourceMappingURL=MasonryGridView.js.map