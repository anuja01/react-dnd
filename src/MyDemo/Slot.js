import { Chip } from "@mui/material";
import React from "react";

function Slot({ value = "demo" }) {
  return <Chip label={value} color="primary" />;
}

export default Slot;
