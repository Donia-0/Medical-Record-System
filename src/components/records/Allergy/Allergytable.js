// import React, { useMemo } from "react";

// import DataTable from "react-data-table-component";
// import dateFormat from "../../../utils/dateFormat";
// import FilterComponent from "../FilterComponent";

// const Allergytable = (props) => {
//   const columns = [
//     {
//       name: "Allergy Name",
//       selector: (row) => row.name,
//       sortable: true,
//     },
//   ];

//   const [filterText, setFilterText] = React.useState("");
//   const [resetPaginationToggle, setResetPaginationToggle] =
//     React.useState(false);
//   // const filteredItems = data.filter(
//   //   item => item.name && item.name.includes(filterText)
//   // );
//   const filteredItems = props.data.filter(
//     (item) =>
//       JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
//       -1
//   );

//   const subHeaderComponent = useMemo(() => {
//     const handleClear = () => {
//       if (filterText) {
//         setResetPaginationToggle(!resetPaginationToggle);
//         setFilterText("");
//       }
//     };

//     return;
//     // <FilterComponent
//     //   onFilter={(e) => setFilterText(e.target.value)}
//     //   onClear={handleClear}
//     //   filterText={filterText}
//     // />
//   }, [filterText, resetPaginationToggle]);

//   return (
//     <DataTable
//       columns={columns}
//       data={filteredItems}
//       defaultSortField="name"
//       striped
//       pagination
//       paginationRowsPerPageOptions={[3, 5]}
//       paginationPerPage={5}
//       subHeader
//       subHeaderComponent={subHeaderComponent}
//     />
//   );
// };

// export default Allergytable;
