import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllEvents } from "../../../features/seller/event/eventSlice.ts";
import EventsTable from "../../../components/seller/Dashboard/AllEventsPage/EventsTable.tsx";

export default function AllEventsPage() {
  const dispatch = useDispatch();

  // ** RTK - Seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { seller } = sellerState;

  // ** RTK - Events state
  const eventState = useSelector((state: any) => state.event);
  const { isLoading: eventsLoading, events } = eventState;

  useEffect(() => {
    // @ts-ignore
    dispatch(getAllEvents(seller._id));
  }, []);

  return (
    <>
      {events && events.length > 0 && eventsLoading === false ? (
        <EventsTable data={events} />
      ) : (
        <div
          className={
            "w-24 h-24 rounded-full animate-spin mx-auto mt-8 border-2 border-solid border-blue-500 border-t-transparent my-6"
          }
        />
      )}
      {events && events.length === 0 && (
        <h1 className="font-bold text-xl text-center mt-11">
          No Events Found!
        </h1>
      )}
    </>
  );
}
