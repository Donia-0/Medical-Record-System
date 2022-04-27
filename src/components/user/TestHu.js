import React from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function TestHu() {
  const [code, setCode] = React.useState("");
  const { nationalId } = useParams();
  const onClickButton = async () => {
    var form = {
      ver: code,
    };
    const response = await axios.post(
      `http://localhost:5000/send/${nationalId}`,
      form
    );
  };
  return (
    <div>
      <input
        name="ver"
        onChange={(e) => {
          setCode(e.target.value);
        }}
        value={code}
        type="text"
      />
      <button onClick={onClickButton}>sub</button>
    </div>
  );
}
