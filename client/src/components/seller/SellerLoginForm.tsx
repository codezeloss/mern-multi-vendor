// !! Interface
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { FiEyeOff } from "react-icons/fi";
import Spinner from "../Spinner.tsx";
import { object, string } from "yup";
import FormCustomInput from "../FormCustomInput.tsx";
import { loginSellerShop } from "../../features/seller/sellerSlice.ts";
import { toast } from "react-toastify";

interface ValuesProps {
  email: string;
  password: string;
}

// !! yup Validation
let loginSchema = object({
  email: string().email("Email should be valid").required("Email is required"),
  password: string().required("Password is required"),
});

function SellerLoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // ** RTK - seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { isSuccess, isError, isLoading, isAuthenticated, seller } =
    sellerState;

  // ** Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values: ValuesProps) => {
      // @ts-ignore
      dispatch(loginSellerShop(values));
    },
  });

  // ** Toast Notification && Redirect the user
  useEffect(() => {
    if (isSuccess && isAuthenticated && seller !== null) {
      toast.success("Login successfully!", {});
      navigate(`/seller/shop/${seller._id}`);
      formik.resetForm();
    } else if (isError) {
      toast.error("Please enter your correct information", {});
    }
  }, [isAuthenticated]);

  return (
    <>
      <div className="h-screen flex items-center justify-center font-poppins bg-gray-100">
        <div className="flex flex-col items-center justify-center">
          <h1 className="form-title">Login to your account</h1>

          {!isLoading && (
            <form
              className="bg-white px-8 pt-8 pb-11 shadow-md w-[500px] h-auto rounded-md"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col mb-4">
                <FormCustomInput
                  label={"Email address"}
                  type={"email"}
                  name={"login-email"}
                  id={"login-email"}
                  onBlurHandler={formik.handleBlur("email")}
                  onChangeHandler={formik.handleChange("email")}
                  value={formik.values.email}
                  error={!!formik.touched.email && !!formik.errors.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">
                    <p>{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>

              <div className="relative">
                <div>
                  <FormCustomInput
                    label={"Password"}
                    type={`${!showPassword ? "password" : "text"}`}
                    name={"register-password"}
                    id={"register-password"}
                    onBlurHandler={formik.handleBlur("password")}
                    onChangeHandler={formik.handleChange("password")}
                    value={formik.values.password}
                    error={
                      !!formik.touched.password && !!formik.errors.password
                    }
                  />
                  <button
                    type={"button"}
                    className={
                      "absolute right-3 top-9 text-lg cursor-pointer hover:text-gray-500"
                    }
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <FiEyeOff />
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">
                    <p>{formik.errors.password}</p>
                  </div>
                ) : null}
              </div>

              <div className={"flex items-center justify-between my-6"}>
                <div className={"flex items-center gap-2"}>
                  <input
                    className="w-fit h-fit"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <p className="text-gray-500 text-sm font-medium">
                    Remember me
                  </p>
                </div>
                <Link className={"form-link"} to={"/"}>
                  Forgot your password?
                </Link>
              </div>

              <button type={"submit"} className={"form-btn"}>
                Submit
              </button>

              <div className={"flex items-center justify-center gap-2 mt-8"}>
                <p className={"text-sm font-medium text-gray-500"}>
                  Not have any account yet?
                </p>
                <Link className={"form-link"} to={"/seller/register"}>
                  Sign Up
                </Link>
              </div>
            </form>
          )}

          {isLoading && <Spinner />}
        </div>
      </div>
    </>
  );
}

export default SellerLoginForm;
