import React, { useMemo } from "react";

import DataTable from "react-data-table-component";

const Glucosetable = (props) => {
  const columns = [
    {
      name: "Type",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Result",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row.address.city,
      sortable: true,
    },
    {
      name: "Note",
      selector: (row) => row.company.name,
      sortable: true,
      grow: 1,
      wrap: true,
    },
  ];

  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  // const filteredItems = data.filter(
  //   item => item.name && item.name.includes(filterText)
  // );
  const filteredItems = props.data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return;
    //   <FilterComponent
    //     onFilter={(e) => setFilterText(e.target.value)}
    //     onClear={handleClear}
    //     filterText={filterText}
    //   />
    // );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};

export default Glucosetable;
