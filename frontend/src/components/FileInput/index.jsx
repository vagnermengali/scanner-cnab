import React from "react";
import { Button } from "@mui/material";

const FileInput = ({ uploadFile }) => {
  return (
    <Button variant="contained" component="label">
      Upload File
      <input type="file" hidden onChange={(e) => uploadFile(e.target.files)} />
    </Button>
  );
};

export default FileInput;
