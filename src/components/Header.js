import React, { useState } from "react";

const Header = ({ setInputValue, inputValue }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="container-fruid header-container ">
      <div className="row py-5">
        <div className="col-12 text-center justify-content-center">
          <h2 className="mt-5">Simple Dictionary</h2>
          <span> Find Definisions for word</span>
          <div className="search-container mt-4 mb-3">
            <div className="search ">
              <input
                value={value}
                onChange={handleChange}
                className="search-input"
              />
              <button
                onClick={handleSubmit}
                className="search-btn btn btn-outline-primary "
              >
                Search
              </button>
            </div>
          </div>
          {inputValue && (
            <span className="result">
              Result for:
              <span className="bold"> {inputValue}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
