import { object, string } from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/user/userSlice.ts";
import { toast } from "react-toastify";
import Spinner from "../Spinner.tsx";
import FormCustomInput from "../FormCustomInput.tsx";
import FormAvatarInput from "../FormAvatarInput.tsx";

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
      <div className="h-full flex items-center justify-center font-poppins bg-gray-100 py-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className="form-title">Register as a new user</h1>

          {!isLoading && (
            <form
              className="bg-white px-8 pt-8 pb-11 shadow-md w-[500px] h-auto rounded-md"
              onSubmit={formik.handleSubmit}
            >
              <div className="flex flex-col items-center gap-2 mb-6 justify-center">
                <FormAvatarInput
                  name={"avatar"}
                  id={"file-input"}
                  onBlurHandler={formik.handleBlur("avatar")}
                  onChangeHandler={formik.handleChange("avatar")}
                  value={formik.values.avatar}
                />
                {formik.touched.avatar && formik.errors.avatar ? (
                  <div className="error">
                    <p>{formik.errors.avatar}</p>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col mb-4">
                <FormCustomInput
                  label={"Full Name"}
                  type={"text"}
                  name={"register-fullName"}
                  id={"register-fullName"}
                  onBlurHandler={formik.handleBlur("name")}
                  onChangeHandler={formik.handleChange("name")}
                  value={formik.values.name}
                  error={!!formik.errors.name && !!formik.touched.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">
                    <p>{formik.errors.name}</p>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col mb-4">
                <FormCustomInput
                  label={"Email address"}
                  type={"email"}
                  name={"register-email"}
                  id={"register-email"}
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

              <button type="submit" className={"form-btn mt-4"}>
                Submit
              </button>

              <div className="flex items-center justify-center gap-2 mt-8">
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
