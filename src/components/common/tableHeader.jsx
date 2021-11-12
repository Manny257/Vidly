const TableHeader = ({ columns, onSort, sortCol }) => {
  const sort = (path) => {
    const newSortCol = { ...sortCol };
    if (path === newSortCol.path)
      newSortCol.order = newSortCol.order === "asc" ? "desc" : "asc";
    else {
      newSortCol.path = path;
      newSortCol.order = "asc";
    }
    onSort(newSortCol);
  };
  const sortIcon = (col) => {
    if (col.path !== sortCol.path) return null;
    if (sortCol.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };
  return (
    <thead>
      <tr>
        {columns.map((col, i) => (
          <th key={i} onClick={() => sort(col.path)}>
            {col.label}
            {sortIcon(col)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
