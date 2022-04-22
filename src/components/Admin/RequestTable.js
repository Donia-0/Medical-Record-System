import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../records/FilterComponent";
// import PrescriptionView from "../records/PrescriptionView";

const RequestTable = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      grow: 1,
      wrap: true,
    },
    {
      name: "Specialization",
      selector: (row) => row.name,
      sortable: true,
      grow: 1,
      wrap: true,
    },
    {
      name: "Email",
      selector: (row) => row.name,
      sortable: true,
      grow: 1,
      wrap: true,
    },
    {
      name: "Phone",
      selector: (row) => row.name,
      sortable: true,
      grow: 1,
      wrap: true,
    },
    {
      name: " ",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,

      cell: (row) => {
        return (
          <div className="show-request-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                row.showModal = true;
                setModalShow(true);
              }}
            >
              Show
            </button>
          </div>
        );
      },
    },
    {
      name: " ",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,

      cell: (row) => {
        return (
          <div className="accept-request-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                row.showModal = true;
                setModalShow(true);
              }}
            >
              Accept
            </button>
          </div>
        );
      },
    },
    {
      name: " ",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,

      cell: (row) => {
        return (
          <div className="decline-request-btn">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                row.showModal = true;
                setModalShow(true);
              }}
            >
              Decline
            </button>
          </div>
        );
      },
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

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
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

export default RequestTable;
