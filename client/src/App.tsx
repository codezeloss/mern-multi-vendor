import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { getUser } from "./features/user/userSlice.ts";
import { getSeller } from "./features/seller/sellerSlice.ts";

import UserProtectedRoute from "./routes/UserProtectedRoute.tsx";
import SellerProtectedRoutes from "./routes/SellerProtectedRoutes.tsx";

import LoginPage from "./pages/user/LoginPage.tsx";
import SignUpPage from "./pages/user/SignUpPage.tsx";
import UserActivationPage from "./pages/user/UserActivationPage.tsx";
import HomePage from "./pages/user/HomePage.tsx";
import Layout from "./components/Layout/Layout.tsx";
import ProductDetailsPage from "./pages/user/ProductDetailsPage.tsx";
import ProductsPage from "./pages/user/ProductsPage.tsx";
import BestSellingPage from "./pages/user/BestSellingPage.tsx";
import EventsPage from "./pages/user/EventsPage.tsx";
import FAQPage from "./pages/user/FAQPage.tsx";
import CheckoutPage from "./pages/user/CheckoutPage.tsx";
import ProfilePage from "./pages/user/ProfilePage.tsx";
import SellerRegisterPage from "./pages/seller/SellerRegisterPage.tsx";
import SellerLoginPage from "./pages/seller/SellerLoginPage.tsx";
import SellerActivationPage from "./pages/seller/SellerActivationPage.tsx";
import ShopHomePage from "./pages/seller/ShopHomePage.tsx";
import DashboardPage from "./pages/seller/dashboard/DashboardPage.tsx";

import DashboardLayout from "./components/seller/Dashboard/DashboardLayout.tsx";
import AllOrdersPage from "./pages/seller/dashboard/AllOrdersPage.tsx";
import AllEventsPage from "./pages/seller/dashboard/AllEventsPage.tsx";
import AllProductsPage from "./pages/seller/dashboard/AllProductsPage.tsx";
import NewEventPage from "./pages/seller/dashboard/NewEventPage.tsx";
import ShopInboxPage from "./pages/seller/dashboard/ShopInboxPage.tsx";
import WithdrawPage from "./pages/seller/dashboard/WithdrawPage.tsx";
import CouponsPage from "./pages/seller/dashboard/CouponsPage.tsx";
import RefundsPage from "./pages/seller/dashboard/RefundsPage.tsx";
import SettingsPage from "./pages/seller/dashboard/SettingsPage.tsx";
import NewProductPage from "./pages/seller/dashboard/NewProductPage.tsx";

function App() {
  const dispatch = useDispatch();

  // ** Get the User
  useEffect(() => {
    // @ts-ignore
    dispatch(getUser());
    // @ts-ignore
    dispatch(getSeller());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* !! ----  USER ROUTES ----  */}
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/sign-up"} element={<SignUpPage />} />
          <Route path={"/product/:id"} element={<ProductDetailsPage />} />
          <Route path={"/products"} element={<ProductsPage />} />
          <Route path={"/best-selling"} element={<BestSellingPage />} />
          <Route path={"/events"} element={<EventsPage />} />
          <Route path={"/faq"} element={<FAQPage />} />
          <Route path={"/checkout/shipping"} element={<CheckoutPage />} />
          <Route path={"/checkout/payment"} element={<CheckoutPage />} />
          <Route path={"/checkout/success"} element={<CheckoutPage />} />
          <Route
            path={"/profile"}
            element={
              <UserProtectedRoute>
                <ProfilePage />
              </UserProtectedRoute>
            }
          />
          <Route path={"/profile/orders"} element={<ProfilePage />} />
          <Route path={"/profile/refunds"} element={<ProfilePage />} />
          <Route path={"/profile/inbox"} element={<ProfilePage />} />
          <Route path={"/profile/track-orders"} element={<ProfilePage />} />
          <Route path={"/profile/payment"} element={<ProfilePage />} />
          <Route path={"/profile/address"} element={<ProfilePage />} />
          <Route path={"/profile/logout"} element={<ProfilePage />} />
        </Route>
        <Route path={"/activation/:url"} element={<UserActivationPage />} />

        {/* !! ---- SELLER ROUTES ----  */}
        <Route
          path={"/seller/activation/:url"}
          element={<SellerActivationPage />}
        />
        <Route path={"/seller/register"} element={<SellerRegisterPage />} />
        <Route path={"/seller/login"} element={<SellerLoginPage />} />
        <Route
          path={"/seller/shop/:id"}
          element={
            <SellerProtectedRoutes>
              <ShopHomePage />
            </SellerProtectedRoutes>
          }
        />

        <Route
          element={
            <SellerProtectedRoutes>
              <DashboardLayout />
            </SellerProtectedRoutes>
          }
        >
          <Route path={"/seller/dashboard"} element={<DashboardPage />} />
          <Route
            path={"/seller/dashboard/orders"}
            element={<AllOrdersPage />}
          />
          <Route
            path={"/seller/dashboard/products"}
            element={<AllProductsPage />}
          />
          <Route
            path={"/seller/dashboard/new-product"}
            element={<NewProductPage />}
          />
          <Route
            path={"/seller/dashboard/events"}
            element={<AllEventsPage />}
          />
          <Route
            path={"/seller/dashboard/new-event"}
            element={<NewEventPage />}
          />
          <Route path={"/seller/dashboard/inbox"} element={<ShopInboxPage />} />
          <Route
            path={"/seller/dashboard/withdraw"}
            element={<WithdrawPage />}
          />
          <Route path={"/seller/dashboard/coupons"} element={<CouponsPage />} />
          <Route path={"/seller/dashboard/refunds"} element={<RefundsPage />} />
          <Route
            path={"/seller/dashboard/settings"}
            element={<SettingsPage />}
          />
        </Route>
      </Routes>

      {/* !! Toast Notification */}
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
}

export default App;
