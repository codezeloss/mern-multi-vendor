import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import { BiSolidTrashAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../../../../features/seller/event/eventSlice.ts";

export default function EventsTable({ data }: any) {
  const dispatch = useDispatch();

  // ** Handle Event delete
  const handleEventDelete = (id: string | number) => {
    console.log(id);
    // @ts-ignore
    dispatch(deleteEvent(id));
  };

  // ** Table Columns & Rows
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", minWidth: 100, flex: 2.5 },
    { field: "name", headerName: "Name", minWidth: 100, flex: 2.5 },
    { field: "price", headerName: "Price", minWidth: 100, flex: 0.2 },
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
      flex: 1.2,
    },
    {
      field: "start_date",
      headerName: "Start Date",
      minWidth: 100,
      flex: 1.2,
    },
    {
      field: "finish_date",
      headerName: "Finish Date",
      minWidth: 100,
      flex: 0.2,
    },
    {
      field: "preview",
      headerName: "Preview",
      minWidth: 100,
      flex: 0.2,
      align: "left",
      renderCell: (params) => {
        const d = params.row.name;
        const event_name = d.replace(/\s+/g, "-");
        return (
          <>
            <Link to={`/event/${event_name}`}>
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
              onClick={() => handleEventDelete(params?.id)}
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
    data.forEach(
      (event: {
        _id: any;
        name: any;
        discountPrice: any;
        stock: any;
        start_date: string | number | Date;
        finish_date: string | number | Date;
      }) => {
        rows.push({
          id: event?._id,
          name: event?.name,
          price: `$${event?.discountPrice}`,
          stock: event?.stock,
          sold: 10,
          start_date: new Date(event?.start_date).toISOString().slice(0, 10),
          finish_date: new Date(event?.finish_date).toISOString().slice(0, 10),
        });
      }
    );

  return (
    <>
      <h1 className="font-bold mb-4 text-2xl">All Events</h1>

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
