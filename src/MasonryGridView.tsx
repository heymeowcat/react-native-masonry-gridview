import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

interface Props<T> {
  items: T[];
  columns?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

function chunkArray<T>(arr: T[], chunkSize: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < chunkSize; i++) {
    chunks[i] = [];
  }
  let chunkIndex = 0;
  arr.forEach((item) => {
    chunks[chunkIndex]?.push(item);
    chunkIndex = (chunkIndex + 1) % chunkSize;
  });
  return chunks;
}

function MasonryGridView<T>({ items, renderItem, columns }: Props<T>) {
  const [grid, setGrid] = useState<T[][]>([]);
  const screenWidth = Dimensions.get('window').width;
  const columnCount = columns || 2;
  const columnWidth = screenWidth / columnCount;

  useEffect(() => {
    const chunks = chunkArray(items, columnCount);
    setGrid(chunks);
  }, [items, columnCount]);

  return (
    <View style={styles.grid}>
      {grid.map((column, columnIndex) => (
        <View key={columnIndex} style={{ width: columnWidth }}>
          {column.map((item, itemIndex) => (
            <React.Fragment key={itemIndex}>
              {renderItem(item, itemIndex)}
            </React.Fragment>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export { MasonryGridView };
