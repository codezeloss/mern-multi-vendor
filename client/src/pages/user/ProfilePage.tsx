import Navigation from "../../components/ProfilePage/Navigation.tsx";
import { useLocation } from "react-router-dom";
import Profile from "../../components/ProfilePage/Profile.tsx";
import Orders from "../../components/ProfilePage/Orders.tsx";
import Refunds from "../../components/ProfilePage/Refunds.tsx";
import Inbox from "../../components/ProfilePage/Inbox.tsx";
import TrackOrders from "../../components/ProfilePage/TrackOrders.tsx";
import PaymentMethods from "../../components/ProfilePage/PaymentMethods.tsx";
import Address from "../../components/ProfilePage/Address.tsx";

function ProfilePage() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <>
      <main className="flex gap-6 items-start my-11 px-6 py-8 max-w-[1500px] mx-auto">
        <Navigation />

        <div className="bg-white w-full p-6 rounded-md">
          {path === undefined && <Profile />}
          {path === "orders" && <Orders />}
          {path === "refunds" && <Refunds />}
          {path === "inbox" && <Inbox />}
          {path === "track-orders" && <TrackOrders />}
          {path === "payment" && <PaymentMethods />}
          {path === "address" && <Address />}
          {path === "logout" && <div>logout</div>}
        </div>
      </main>
    </>
  );
}

export default ProfilePage;
