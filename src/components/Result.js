import axios from "axios";
import React, { useEffect, useState } from "react";
import Example from "./Example";
import Meaning from "./Meaning";

const Result = ({ inputValue }) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${param}`
      );
      setResponse(res.data);
      //   console.log(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return (
      <div className="row my-5 justify-content-center">
        <h3>Loadding</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="row my-5 justify-content-center">
        <h3>{`${inputValue} is not define`}</h3>
      </div>
    );
  }

  return (
    <div className="row my-5 justify-content-center">
      {response && (
        <div className="col-6">
          <h4>Meaning and Definisions</h4>
          <Meaning mean={response} />
          <h4>Example</h4>
          <Example mean={response} />
          {/* <div>Symonyn</div>
          <div>Antonym</div> */}
        </div>
      )}
      {/* <div className="col-6">
        <h3>Meaning and Definisions</h3>
        <div>Example: </div>
        
        <div>Symonyn</div>
        <div>Antonym</div>
        </div>
    </div> */}
    </div>
  );
};

export default Result;
