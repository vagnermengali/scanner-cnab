import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { StatesContext } from "../../contexts/StateContext";

export default function SimpleBackdrop() {
  const { loading } = React.useContext(StatesContext);

  return (
    <div>
      <Backdrop
        sx={{ color: "#FFFFFF", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
