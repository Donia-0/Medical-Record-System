import React from "react";
import FilterModal from "./../FilterModal";

const Examination = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className="btn-primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </button>

      <FilterModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Examination;
