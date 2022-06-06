import React, { useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../records/FilterComponent";
import RequestsView from "./RequestsView";
import style from "../../Css/Admin.module.css";

const RequestTable = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Specialization",
      selector: (row) => row.specialization,
      sortable: true,
      wrap: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      wrap: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
      wrap: true,
    },
    {
      name: "",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,
      grow: 3,

      cell: (row) => {
        return (
          <div className={style.requests_btn}>
            <div className={style.btns_req}>
              <button
                type="button"
                className={`btn ${style.show}`}
                onClick={() => {
                  row.showModal = true;
                  setModalShow(true);
                }}
              >
                Show
              </button>
            </div>
            {row.showModal ? (
              <RequestsView
                req_id={row._id}
                show={modalShow}
                onHide={() => {
                  row.showModal = false;

                  setModalShow(false);
                }}
              />
            ) : null}
          </div>
        );
      },
    },
  ];
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

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
