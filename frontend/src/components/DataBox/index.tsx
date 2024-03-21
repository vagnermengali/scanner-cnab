import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 350 },
  {
    field: "transaction",
    headerName: "Transaction",
    width: 130,
  },
  {
    field: "value",
    headerName: "Value",
    width: 90,
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 110,
  },
  {
    field: "hour",
    headerName: "Hour",
    width: 110,
  },
  {
    field: "store",
    headerName: "Store",
    width: 190,
  },
];

const DataBox = ({ data }: any) => {
  return (
    <Box sx={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        rowsPerPageOptions={[1000]}
        disableSelectionOnClick
        hideFooterPagination={true}
      />
    </Box>
  );
};

export default DataBox;
