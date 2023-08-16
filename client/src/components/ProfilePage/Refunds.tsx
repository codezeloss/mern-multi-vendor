import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

interface Column {
  id: "orderID" | "status" | "itemsQty" | "total" | "action";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

interface Data {
  orderID: any;
  status: any;
  itemsQty: any;
  total: any;
  action: any;
}

// **
const columns: readonly Column[] = [
  { id: "orderID", label: "Order ID", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
  {
    id: "itemsQty",
    label: "Items Qty",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "total",
    label: "Total",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "right",
    format: (value: number) => value.toFixed(2),
  },
];

function createData(
  orderID: any,
  status: any,
  itemsQty: any,
  total: any,
  action: any
): Data {
  return { orderID, status, itemsQty, total, action };
}

// **
const btn = (
  <button
    className="items-right text-lg font-bold text-white p-1.5 rounded-full bg-black"
    type="button"
  >
    <BsArrowRight />
  </button>
);
const rows = [
  createData(1, "Processing", 150, 15000, btn),
  createData(1, "Processing", 150, 15000, btn),
  createData(1, "Processing", 150, 15000, btn),
  createData(1, "Processing", 150, 15000, btn),
];

function Refunds() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // ** Handle Page Changing
  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  // ** Handle Page Rows
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <h2 className="font-semibold text-lg mb-4">Refunds</h2>

      <div className="text-sm">
        <Paper
          sx={{
            width: "100%",
            overflow: "hidden",
            fontSize: 14,
          }}
        >
          {/* !! Table Container */}
          <TableContainer sx={{ maxHeight: 440, fontSize: 14 }}>
            <Table stickyHeader aria-label="sticky table">
              {/* !! Table Head */}
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              {/* !! Table Body */}
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>

          {/* !! Table Pagination */}
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}

export default Refunds;
