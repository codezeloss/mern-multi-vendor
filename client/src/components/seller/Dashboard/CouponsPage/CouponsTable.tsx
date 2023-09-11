import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteCoupon } from "../../../../features/seller/coupon/couponSlice.ts";

export default function CouponsTable({ data }: any) {
  const dispatch = useDispatch();

  // ** Handle Coupon Delete
  const handleCouponDelete = (id: string | number) => {
    // @ts-ignore
    dispatch(deleteCoupon(id));
  };

  // ** Table Columns & rows
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", minWidth: 100, flex: 1.2 },
    { field: "name", headerName: "Name", minWidth: 100, flex: 1.2 },
    { field: "discount", headerName: "Discount", minWidth: 100, flex: 0.4 },
    { field: "minAmount", headerName: "Min Amount", minWidth: 100, flex: 0.4 },
    { field: "maxAmount", headerName: "Max Amount", minWidth: 100, flex: 0.4 },
    {
      field: "delete",
      headerName: "Delete",
      minWidth: 100,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <button
              type={"button"}
              className="text-red-600"
              onClick={() => handleCouponDelete(params?.id)}
            >
              <BiSolidTrashAlt size={18} />
            </button>
          </>
        );
      },
    },
  ];
  const rows: any[] = [];

  data &&
    data.forEach((coupon: any) => {
      rows.push({
        id: coupon?._id,
        name: coupon?.name,
        discount: `${coupon?.value}%`,
        minAmount: coupon?.minAmount,
        maxAmount: coupon?.maxAmount,
      });
    });

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
