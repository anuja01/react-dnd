import React from "react";
import { styled } from "@mui/system";

const Row = styled("div")({
  border: "1px solid gray",
  padding: '4px'
});

function DataRow({ children }) {
  return <Row>{children}</Row>;
}

export default DataRow;
