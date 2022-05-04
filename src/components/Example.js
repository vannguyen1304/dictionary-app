import React from "react";

const Example = ({ mean }) => {
  //   console.log(mean);
  return (
    <div>
      {mean.map((value) =>
        value.meanings.map((means) =>
          means.definitions.map((defi) =>
            defi.example ? (
              <div key={defi.example}>
                <li>{defi.example}</li>
              </div>
            ) : (
              ""
            )
          )
        )
      )}
    </div>
  );
};

export default Example;
