import React from 'react';
interface Props<T> {
    items: T[];
    columns?: number;
    renderItem: (item: T, index: number) => React.ReactNode;
}
declare function MasonryGridView<T>({ items, renderItem, columns }: Props<T>): JSX.Element;
export { MasonryGridView };
//# sourceMappingURL=MasonryGridView.d.ts.map