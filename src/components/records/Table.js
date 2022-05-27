import React, { useEffect, useMemo } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";
import style from "../../Css/records/ViewRecord.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Table = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
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
    <div
      className={style.view}
      data-aos="zoom-in-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className={style.view_header}>
            {props.haveImage ? <img src={props.img} /> : null}
            {props.PageName}
          </div>
        </div>
        {props.haveGraph ? (
          <div className={style.graph_link}>
            <Link to={props.graphLink}>
              <FontAwesomeIcon icon={faChartBar} /> Go to graph view
            </Link>
          </div>
        ) : null}
      </div>
      <div className={style.view_data}>
        <div className="row">
          <div className="col-lg-12">
            <div className={style.add_view_btn}>
              <Link to={props.link} type="button" className="btn">
                <FontAwesomeIcon icon={faPlus} /> Add
              </Link>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className={style.view_table}>
              <DataTable
                columns={props.columns}
                data={filteredItems}
                defaultSortField="name"
                striped
                pagination
                subHeader
                subHeaderComponent={subHeaderComponent}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
