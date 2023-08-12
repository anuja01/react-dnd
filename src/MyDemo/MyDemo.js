import React from "react";
import Slot from "./Slot";
import DataRow from "./DataRow";

const rows = [
  { id: 1, value: "test1" },
  { id: 2, value: "test2" },
  { id: 2, value: "test2" }
];

function MyDemo() {
  return (
    <>
      {rows.map((row, index) => (
        <DataRow key={index}>
          <Slot value={row.value} />
        </DataRow>
      ))}
    </>
  );
}

export default MyDemo;
