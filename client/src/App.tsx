import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/user/LoginPage.tsx";
import SignUpPage from "./pages/user/SignUpPage.tsx";
import UserActivationPage from "./pages/user/UserActivationPage.tsx";
import HomePage from "./pages/user/HomePage.tsx";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./features/user/userSlice.ts";
import { useEffect } from "react";
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
import UserProtectedRoute from "./routing/UserProtectedRoute.tsx";
import SellerActivationPage from "./pages/seller/SellerActivationPage.tsx";
import { getSeller } from "./features/seller/sellerSlice.ts";
import ShopHomePage from "./pages/seller/ShopHomePage.tsx";
import SellerProtectedRoutes from "./routing/SellerProtectedRoutes.tsx";

function App() {
  const dispatch = useDispatch();

  // ** RTK - User state
  const { isAuthenticated: isUser } = useSelector((state: any) => state.user);

  // ** RTK - Seller state
  const { isAuthenticated: isSeller } = useSelector(
    (state: any) => state.seller
  );

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
              <UserProtectedRoute isAuthenticated={isUser}>
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
            <SellerProtectedRoutes isSeller={isSeller}>
              <ShopHomePage />
            </SellerProtectedRoutes>
          }
        />
      </Routes>
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
