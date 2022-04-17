import React from "react";
import HashLoader from "react-spinners/HashLoader";
export default function Loading(props) {
  return (
    <div className="loadingPage">
      <HashLoader color={"#3ea9ad"} loading={props.loading} size={100} />
    </div>
  );
}
