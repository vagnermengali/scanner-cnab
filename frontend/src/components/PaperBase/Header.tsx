import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { StatesContext } from "../../contexts/StateContext";

function Header(props: any) {
  const { tab, setTab } = React.useContext(StatesContext);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}></AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      ></AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={tab} onChange={handleChange} textColor="inherit" sx={{ color: "#FFFFFF"}}>
          <Tab label="All Transactions" value={0} />
          <Tab label="Transactions by Store" value={1} />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;