import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../../../features/seller/product/productSlice.ts";

export default function ProductsTable({ data }: any) {
  const dispatch = useDispatch();

  // ** Handle Product delete
  const handleProductDelete = (id: string | number) => {
    console.log(id);
    // @ts-ignore
    dispatch(deleteProduct(id));
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", minWidth: 100, flex: 1.2 },
    { field: "name", headerName: "Name", minWidth: 100, flex: 1.2 },
    { field: "price", headerName: "Price", minWidth: 100, flex: 0.4 },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 100,
      flex: 0.4,
    },
    {
      field: "sold",
      headerName: "Sold",
      minWidth: 100,
      flex: 0.4,
    },
    {
      field: "preview",
      headerName: "Preview",
      minWidth: 100,
      flex: 0.4,
      align: "left",
      renderCell: (params) => {
        const d = params.row.name;
        const product_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/product/${product_name}`}>
              <button type={"button"} className="text-blue-800">
                <AiOutlineEye size={18} />
              </button>
            </Link>
          </>
        );
      },
    },
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
              onClick={() => handleProductDelete(params?.id)}
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
    data.forEach((product: Product) => {
      rows.push({
        id: product?._id,
        name: product?.name,
        price: `$${product?.discountPrice}`,
        stock: product?.stock,
        sold: 10,
      });
    });

  return (
    <>
      <h1 className="font-bold mb-4 text-2xl">All Products</h1>

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
