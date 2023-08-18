import FormCustomInput from "../FormCustomInput.tsx";
import { number, object, string } from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import FormAvatarInput from "../FormAvatarInput.tsx";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../Spinner.tsx";
import { createNewShop } from "../../features/seller/sellerSlice.ts";
import { toast } from "react-toastify";
import { useEffect } from "react";

// !! Interface
interface ValuesProps {
  avatar: string;
  shopName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  password: string;
}

// !! yup Validation
let registerSchema = object({
  avatar: string(),
  shopName: string().required("Shop Name is required"),
  email: string().email("Email should be valid").required("Email is required"),
  phoneNumber: number().required("Phone Number is required"),
  address: string().required("Address is required"),
  zipCode: number().required("Zip Code is required"),
  password: string().required("Password is required"),
});

function SellerRegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ** RTK - Seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { isSuccess, isError, isLoading } = sellerState;

  // ** Formik
  const formik = useFormik({
    initialValues: {
      avatar: "",
      shopName: "",
      email: "",
      phoneNumber: "",
      address: "",
      zipCode: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values: ValuesProps) => {
      // @ts-ignore
      dispatch(createNewShop(values));
    },
  });

  useEffect(() => {
    // ** Toast Notification && Redirect the user
    if (isSuccess) {
      toast.success("Shop created successfully!", {});
      navigate("/seller/login");
      formik.resetForm();
    } else if (isError) {
      toast.error("Shop already exists", {});
    }
  }, [isSuccess]);

  return (
    <>
      <div className="h-full flex items-center justify-center font-poppins bg-gray-100 pt-16 pb-11">
        <div className="flex flex-col items-center justify-center">
          <h1 className="form-title">Register as a seller</h1>

          <form
            className="bg-white px-8 pt-4 pb-11 shadow-md w-[530px] h-auto rounded-md"
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col items-center gap-2 mb-1 justify-center">
              <FormAvatarInput
                name={"seller-avatar"}
                id={"seller-file-input"}
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
                label={"Shop Name"}
                type={"text"}
                name={"seller-shop-name"}
                id={"seller-shop-name"}
                onBlurHandler={formik.handleBlur("shopName")}
                onChangeHandler={formik.handleChange("shopName")}
                value={formik.values.shopName}
                error={!!formik.errors.shopName && !!formik.touched.shopName}
              />
              {formik.touched.shopName && formik.errors.shopName ? (
                <div className="error">
                  <p>{formik.errors.shopName}</p>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col mb-4">
              <FormCustomInput
                label={"Email"}
                type={"email"}
                name={"seller-email"}
                id={"seller-email"}
                onBlurHandler={formik.handleBlur("email")}
                onChangeHandler={formik.handleChange("email")}
                value={formik.values.email}
                error={!!formik.errors.email && !!formik.touched.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">
                  <p>{formik.errors.email}</p>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col mb-4">
              <FormCustomInput
                label={"Phone Number"}
                type={"tel"}
                name={"seller-phone-number"}
                id={"seller-phone-number"}
                onBlurHandler={formik.handleBlur("phoneNumber")}
                onChangeHandler={formik.handleChange("phoneNumber")}
                value={formik.values.phoneNumber}
                error={
                  !!formik.errors.phoneNumber && !!formik.touched.phoneNumber
                }
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="error">
                  <p>{formik.errors.phoneNumber}</p>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col mb-4">
              <FormCustomInput
                label={"Address"}
                type={"text"}
                name={"seller-address"}
                id={"seller-address"}
                onBlurHandler={formik.handleBlur("address")}
                onChangeHandler={formik.handleChange("address")}
                value={formik.values.address}
                error={!!formik.errors.address && !!formik.touched.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="error">
                  <p>{formik.errors.address}</p>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col mb-4">
              <FormCustomInput
                label={"Zip Code"}
                type={"number"}
                name={"seller-zipCode"}
                id={"seller-zipCode"}
                onBlurHandler={formik.handleBlur("zipCode")}
                onChangeHandler={formik.handleChange("zipCode")}
                value={formik.values.zipCode}
                error={!!formik.errors.zipCode && !!formik.touched.zipCode}
              />
              {formik.touched.zipCode && formik.errors.zipCode ? (
                <div className="error">
                  <p>{formik.errors.zipCode}</p>
                </div>
              ) : null}
            </div>

            <div className="flex flex-col mb-4">
              <FormCustomInput
                label={"Password"}
                type={"password"}
                name={"seller-password"}
                id={"seller-password"}
                onBlurHandler={formik.handleBlur("password")}
                onChangeHandler={formik.handleChange("password")}
                value={formik.values.password}
                error={!!formik.errors.password && !!formik.touched.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
            </div>

            <button type="submit" className={"form-btn"}>
              Submit
            </button>

            <div className="flex items-center justify-center gap-2 mt-8">
              <p className="text-sm font-medium text-gray-500">
                Already have an account?
              </p>
              <Link className="form-link" to={"/seller/login"}>
                Sign In
              </Link>
            </div>
          </form>

          {false && (
            <p className="font-medium text-lg">
              Check your inbox to activate your account
            </p>
          )}

          {isLoading && <Spinner />}
        </div>
      </div>
    </>
  );
}

export default SellerRegisterForm;
