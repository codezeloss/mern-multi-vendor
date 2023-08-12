import { object, string } from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { PiUserCircleLight } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/user/userSlice.ts";
import { toast } from "react-toastify";
import Spinner from "../Spinner.tsx";

interface ValuesProps {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

// ** yup Validation
let registerSchema = object({
  name: string().required("Full name is required"),
  email: string().email("Email should be valid").required("Email is required"),
  password: string().required("Password is required"),
  avatar: string(),
});

function SignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // ** RTK
  const userState = useSelector((state: any) => state.user);
  const { isSuccess, isError, isLoading } = userState;

  // ** Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatar: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values: ValuesProps) => {
      // @ts-ignore
      dispatch(registerUser(values));

      // ** Toast Notification && Redirect the user
      if (isSuccess) {
        toast.success("Account created successfully!", {});
        navigate("/login");
        formik.resetForm();
      } else if (isError) {
        toast.error("User already exists", {});
      }
    },
  });

  return (
    <>
      <div
        className={
          "h-screen flex items-center justify-center font-poppins bg-gray-100"
        }
      >
        <div className={"flex flex-col items-center justify-center"}>
          <h1 className="form-title">Register as a new user</h1>

          {!isLoading && (
            <form
              className={
                "bg-white px-8 pt-8 pb-14 shadow-md w-[500px] h-auto rounded-md"
              }
              onSubmit={formik.handleSubmit}
            >
              <div
                className={
                  "flex flex-col items-center gap-2 mb-6 justify-center"
                }
              >
                <div className={"text-7xl"}>
                  <PiUserCircleLight />
                </div>
                <div>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    className={
                      "text-gray-600 text-sm py-2 px-4 font-semibold border-[1px] rounded-md hover:bg-gray-100"
                    }
                    onBlur={formik.handleBlur("avatar")}
                    onChange={formik.handleChange("avatar")}
                    value={formik.values.avatar}
                  />
                  {formik.touched.avatar && formik.errors.avatar ? (
                    <div className="error">
                      <p>{formik.errors.avatar}</p>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label className="form-label" htmlFor="register-fullName">
                  Full Name
                </label>
                <input
                  className={`${
                    formik.errors.name ? "border-2 border-red-400" : ""
                  }`}
                  type="text"
                  name="register-fullName"
                  id="register-fullName"
                  onBlur={formik.handleBlur("name")}
                  onChange={formik.handleChange("name")}
                  value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">
                    <p>{formik.errors.name}</p>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col mb-4">
                <label className="form-label" htmlFor="register-email">
                  Email address
                </label>
                <input
                  className={`${
                    formik.errors.email ? "border-2 border-red-400" : ""
                  }`}
                  type="email"
                  name="register-email"
                  id="register-email"
                  onBlur={formik.handleBlur("email")}
                  onChange={formik.handleChange("email")}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="error">
                    <p>{formik.errors.email}</p>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col mb-4">
                <label className="form-label" htmlFor="register-password">
                  Password
                </label>
                <div className={"relative"}>
                  <div>
                    <input
                      className={`${
                        formik.errors.password ? "border-2 border-red-400" : ""
                      }`}
                      type={`${!showPassword ? "password" : "text"}`}
                      name="register-password"
                      id="register-password"
                      onBlur={formik.handleBlur("password")}
                      onChange={formik.handleChange("password")}
                      value={formik.values.password}
                    />
                    <button
                      type={"button"}
                      className={
                        "absolute right-3 top-3 text-lg cursor-pointer hover:text-gray-500"
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
              </div>

              <button type="submit" className={"form-btn"}>
                Submit
              </button>

              <div className={"flex items-center justify-center gap-2"}>
                <p className={"text-sm font-medium text-gray-500"}>
                  Already have an account?
                </p>
                <Link className={"form-link"} to={"/login"}>
                  Sign In
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

export default SignUpForm;
