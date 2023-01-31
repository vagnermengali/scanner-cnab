import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { StatesContext } from "../../contexts/StateContext";

export default function SelectInput() {
  const { store, setStore } = React.useContext(StatesContext);

  const handleChange = (event) => {
    setStore(event.target.value);
  };
  const list = [
    {
      name: "BAR DO JOÃO",
      value: "bar+do+joao",
    },
    {
      name: "LOJA DO Ó - MATRIZ",
      value: "loja+do+o+matriz",
    },
    {
      name: "MERCADO DA AVENIDA",
      value: "mercado+da+avenida",
    },
    {
      name: "MERCEARIA 3 IRMÃOS",
      value: "mercearia+3+irmaos",
    },
    {
      name: "LOJA DO Ó - FILIAL",
      value: "loja+do+o+filial",
    },
  ];
  return (
    <Box sx={{ minWidth: 120, maxHeight: 100 }}>
      <FormControl fullWidth>
        <InputLabel id="simple">Store</InputLabel>
        <Select
          labelId="simple"
          id="storeInput"
          value={store}
          label="Store"
          onChange={handleChange}
          autoWidth
        >
          {list.map((elem, index) => (
            <MenuItem key={index} value={elem.value}>
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
