import React from "react";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { StatesContext } from "../../contexts/StateContext";

interface HeaderProps {
  onDrawerToggle: () => void;
}

function Header({ onDrawerToggle }: HeaderProps) {
  const { tab, setTab } = React.useContext(StatesContext);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <>
      <AppBar color="primary" position="sticky" elevation={0} />
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      />
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={tab} onChange={handleChange} textColor="inherit" sx={{ color: "#FFFFFF" }}>
          <Tab label="All Transactions" value={0} />
          <Tab label="Transactions by Store" value={1} />
        </Tabs>
      </AppBar>
    </>
  );
}

export default Header;
