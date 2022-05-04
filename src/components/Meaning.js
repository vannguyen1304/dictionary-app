import React from "react";

const Meaning = ({ mean }) => {
  //   console.log(mean);
  return (
    <div>
      {mean.map((value) =>
        value.meanings.map((means) =>
          means.definitions.map((defi) => (
            <div key={defi.definition}>
              <li>{defi.definition}</li>
            </div>
          ))
        )
      )}
    </div>
  );
};

export default Meaning;
