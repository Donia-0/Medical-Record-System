import React from "react";
import axios from "axios";
export default function Test() {
  React.useEffect(() => {
    const options = {
      method: "GET",
      url: "https://endlessmedicalapi1.p.rapidapi.com/InitSession",
      headers: {
        "X-RapidAPI-Host": "endlessmedicalapi1.p.rapidapi.com",
        "X-RapidAPI-Key": "3dcb6b0fccmshb6c7d2cc50dc96bp1c828ejsne2c170656d7c",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("SessionID", response.data.SessionID);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  const onClick = () => {
    const options = {
      method: "POST",
      url: "https://endlessmedicalapi1.p.rapidapi.com/AcceptTermsOfUse",
      params: {
        SessionID: localStorage.SessionID,
        passphrase:
          "I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com",
      },
      headers: {
        "X-RapidAPI-Host": "endlessmedicalapi1.p.rapidapi.com",
        "X-RapidAPI-Key": "3dcb6b0fccmshb6c7d2cc50dc96bp1c828ejsne2c170656d7c",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    const options2 = {
      method: "GET",
      url: "https://endlessmedicalapi1.p.rapidapi.com/Analyze",
      params: { SessionID: localStorage.SessionID },
      headers: {
        "X-RapidAPI-Host": "endlessmedicalapi1.p.rapidapi.com",
        "X-RapidAPI-Key": "3dcb6b0fccmshb6c7d2cc50dc96bp1c828ejsne2c170656d7c",
      },
    };

    axios
      .request(options2)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div>
      <button onClick={onClick} className="btn btn-primary">
        Accpet Terms Of Use
      </button>
    </div>
  );
}
