import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import PropTypes from "prop-types";
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

const Table = (props) => {
  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <Pagination
        color="primary"
        variant="outlined"
        shape="rounded"
        page={page + 1}
        count={pageCount}
        renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

  return (
    <>
      {typeof props.setselectedRow === "function" && (
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          autoHeight
          selectionModel={props.selectedRow}
          onSelectionModelChange={(newSelectionModel) => {
            props.setselectedRow(newSelectionModel);
            props.onSelectionChange(newSelectionModel[0]);
          }}
          components={{
            LoadingOverlay: LinearProgress,
            Pagination: CustomPagination,
          }}
          loading={props.isLoading}
          {...props}
        />
      )}
      {typeof props.setselectedRow !== "function" && (
        <DataGrid
          rows={props.rows}
          columns={props.columns}
          autoHeight
          components={{
            LoadingOverlay: LinearProgress,
            Pagination: CustomPagination,
          }}
          loading={props.isLoading}
          {...props}
        />
      )}
    </>
  );
};
export default Table;

Table.propTypes = {
  isLoading: PropTypes.bool,
  columns: PropTypes.array,
  rows: PropTypes.array,
  selectedRow: PropTypes.array,
  setselectedRow: PropTypes.func,
  onSelectionChange: PropTypes.func,
};
