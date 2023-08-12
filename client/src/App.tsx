import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import ActivationPage from "./pages/ActivationPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import { useDispatch } from "react-redux";
import { getUser } from "./features/user/userSlice.ts";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout.tsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import BestSellingPage from "./pages/BestSellingPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import FAQPage from "./pages/FAQPage.tsx";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
    dispatch(getUser());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/sign-up"} element={<SignUpPage />} />
          <Route path={"/activation/:url"} element={<ActivationPage />} />
          <Route path={"/product/:id"} element={<ProductDetailsPage />} />
          <Route path={"/products"} element={<ProductsPage />} />
          <Route path={"/best-selling"} element={<BestSellingPage />} />
          <Route path={"/events"} element={<EventsPage />} />
          <Route path={"/faq"} element={<FAQPage />} />
        </Route>
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
