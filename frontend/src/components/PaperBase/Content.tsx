import * as React from "react";
import { StatesContext } from "../../contexts/StateContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Button } from "@mui/material";
import FileInput from "../FileInput";
import DataBox from "../DataBox";
import TabPanel from "../TabsPanel";
import SelectInput from "../SelectInput";
import DeleteIcon from '@mui/icons-material/Delete';

export default function Content() {
  const {
    tab,
    data,
    dataByStore,
    uploadFile,
    store,
    getByStoreRquest,
    getAllRequest,
    deleteByStoreRquest,
    totalValue
  } = React.useContext(StatesContext);
  return (
    <Paper sx={{ maxWidth: 1800, margin: "auto", overflow: "hidden", color: "#FFFFFF" }}>
      <TabPanel value={tab} index={0}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: "1px solid #DADADA", bgcolor: "#ffffff"}}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SearchIcon color="inherit" sx={{ display: "block",color: "#757575" }} />
              </Grid>
              <Grid item xs>
                <TextField
                  fullWidth
                  placeholder="Search by store, date, or transaction"
                  InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: "default" },
                  }}
                  variant="standard"
                />
              </Grid>
              <Grid item>
                <FileInput
                  uploadFile={uploadFile}
                  variant="contained"
                  sx={{ mr: 1 }}
                >
                  Upload File
                </FileInput>
                <Tooltip title="Reload">
                  <IconButton onClick={() => getAllRequest()}>
                    <RefreshIcon color="inherit" sx={{ display: "block" }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                  <IconButton onClick={() => deleteByStoreRquest()}>
                    <DeleteIcon color="inherit" sx={{ display: "block" }} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {data.length === 0 ? (
          <Typography
            sx={{ my: 5, mx: 2 }}
            color="text.secondary"
            align="center"
          >
            No data uploaded in database
          </Typography>
        ) : (
          <DataBox data={data} />
        )}
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <AppBar
          position="static"
          color="default"
          elevation={0}
          sx={{ borderBottom: "1px solid #DADADA", bgcolor: "#ffffff" }}
        >
          <Toolbar>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <SelectInput />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ color: "#FFFFFF"}}
                  onClick={() => getByStoreRquest(store)}
                >
                  Select Store
                </Button>
              </Grid>
              <Grid item xs>
                {dataByStore.length === 0 ? null : (
                  <Typography align="right" color="text.primay">
                    {`Total Balance ${dataByStore.total_value}`}
                  </Typography>
                )}
              </Grid>
              <Grid item>
                {dataByStore.length === 0 ? null : (
                  <Tooltip title="Reload">
                    <IconButton onClick={() => getByStoreRquest(store)}>
                      <RefreshIcon color="inherit" sx={{ display: "block" }} />
                    </IconButton>
                  </Tooltip>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {dataByStore.length === 0 ? (
          <Typography
            sx={{ my: 5, mx: 2 }}
            color="text.secondary"
            align="center"
          >
            No Store selected or no data uploaded in database
          </Typography>
        ) : (
          <DataBox data={dataByStore.results} />
        )}
      </TabPanel>
    </Paper>
  );
}
