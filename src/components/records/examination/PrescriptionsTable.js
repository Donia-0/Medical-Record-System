import { faEdit, faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "../FilterComponent";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getExaminations } from "../../../actions/records/examinationAction";
import style from "../../../Css/records/ViewRecord.module.css";
import { Link } from "react-router-dom";

const PrescriptionsTable = (props) => {
  const prescriptionTest = [
    {
      drug: "panadol",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 3,
    },
    {
      drug: "panadol",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 3,
    },
    {
      drug: "panadol",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 3,
    },
    {
      drug: "brufin",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 1,
    },
    {
      drug: "brufin",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 1,
    },
    {
      drug: "brufin",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Ahmed",
      id: 1,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
    {
      drug: "ay nela",
      dose: "No",
      date: "sadasd",
      note: "yaraaab",
      DrName: "Hussein",
      id: 2,
    },
  ];

  const columns = [
    {
      name: "Drug",
      selector: (row) => row.drug,
      sortable: true,
      grow: 1,
      wrap: true,
    },
    {
      name: "Dose",
      selector: (row) => row.dose,
      sortable: true,
      wrap: true,
    },
    {
      name: "Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Dr Name",
      selector: (row) => row.DrName,
      sortable: true,
    },
    {
      name: "Note",
      selector: (row) => row.note,
      sortable: true,
      grow: 1,
      wrap: true,
    },

    {
      name: "Action",
      button: true,
      ignoreRowClick: true,
      allowOverflow: true,
      cell: (row) => {
        return (
<<<<<<< HEAD
          <div className={style.edit_delete_btns}>
            <div className={style.edit_btn}>
              <Link to={`./edit/${row._id}`} type="button" className="btn">
=======
          <div className="edit-delete-btns">
            <div className="edit-btn">
              <Link
                to={`./${row.id}`}
                type="button"
                className="btn btn-primary"
              >
>>>>>>> 990d7ec1a09069ee99c8233685b695ffa5520bc2
                <FontAwesomeIcon icon={faEdit} />
              </Link>
            </div>
            <div className={style.delete_btn}>
              <button type="button" className="btn">
                <FontAwesomeIcon icon={faXmark} />
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
      data={prescriptionTest}
      defaultSortField="name"
      striped
      pagination
      subHeader
      subHeaderComponent={subHeaderComponent}
    />
  );
};
PrescriptionsTable.propTypes = {
  auth: PropTypes.object.isRequired,
  getExaminations: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  examination: state.examination,
});
export default connect(mapStateToProps, { getExaminations })(
  PrescriptionsTable
);
