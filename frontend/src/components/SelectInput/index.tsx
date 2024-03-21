import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { StatesContext } from "../../contexts/StateContext";

export default function SelectInput() {
  const { store, setStore, data } = React.useContext(StatesContext);

  const handleChange = (event: any) => {
    setStore(event.target.value);
  };

  const uniqueStores = new Set();

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
          {data.map((elem: any, index: any) => {
            if (!uniqueStores.has(elem.store)) {
              uniqueStores.add(elem.store);
              return (
                <MenuItem key={index} value={elem.store.toLowerCase().replace(/ /g, '+')}>
                  {elem.store}
                </MenuItem>
              );
            }
            return null;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
