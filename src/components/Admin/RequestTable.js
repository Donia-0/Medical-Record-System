import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../records/FilterComponent";
import RequestsView from "./RequestsView";
// import PrescriptionView from "../records/PrescriptionView";
import style from "../../Css/Admin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
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
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Email",
      selector: (row) => row.name,
      sortable: true,
      wrap: true,
    },
    {
      name: "Phone",
      selector: (row) => row.name,
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
            <div className={style.btns_req}>
              <button
                type="button"
                className={`btn ${style.accept}`}
                onClick={() => {
                  row.showModal = true;
                  setModalShow(true);
                }}
              >
                Accpet
              </button>
              {row.showModal ? (
                <RequestsView
                  show={modalShow}
                  onHide={() => {
                    row.showModal = false;

                    setModalShow(false);
                  }}
                />
              ) : null}
            </div>
            <div className={style.btns_req}>
              <button
                type="button"
                className={`btn ${style.decline}`}
                onClick={() => {
                  row.showModal = true;
                  setModalShow(true);
                }}
              >
                Decline
              </button>
            </div>
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
