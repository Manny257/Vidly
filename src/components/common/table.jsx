import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
const Table = ({ data, columns, onSort, sortCol }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortCol={sortCol} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
