import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { BiSolidTrashAlt } from "react-icons/bi";

export default function CouponsTable({ data }: any) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", minWidth: 100, flex: 1.2 },
    { field: "name", headerName: "Name", minWidth: 100, flex: 1.2 },
    { field: "value", headerName: "Value", minWidth: 100, flex: 0.4 },
    { field: "minAmount", headerName: "Min Amount", minWidth: 100, flex: 0.4 },
    { field: "maxAmount", headerName: "Max Amount", minWidth: 100, flex: 0.4 },
    {
      field: "delete",
      headerName: "Delete",
      minWidth: 100,
      flex: 1,
      renderCell: () => {
        return (
          <>
            <button type={"button"} className="text-red-600" onClick={() => {}}>
              <BiSolidTrashAlt size={18} />
            </button>
          </>
        );
      },
    },
  ];
  const rows: any[] = [];

  console.log(data);

  return (
    <>
      <h1 className="font-bold mb-4 text-2xl">All Coupons</h1>

      <div className="bg-white" style={{ height: "auto", width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
