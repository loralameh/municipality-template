import React from "react";
import Modal from "@mui/material/Modal";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <Modal open={true} sx={{ display: "grid", placeItems: "center" }}>
      <CircularProgress sx={{ "&:focus-visible": { outline: "none" } }} color="secondary" />
    </Modal>
  );
}

export default Loader;
