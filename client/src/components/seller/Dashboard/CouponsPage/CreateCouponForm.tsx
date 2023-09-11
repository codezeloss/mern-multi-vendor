import CustomInput from "../../CustomInput.tsx";
import { number, object, string } from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createNewCoupon } from "../../../../features/seller/coupon/couponSlice.ts";

// !! Yup Coupon Schema
let couponSchema = object({
  name: string().required("Name is required"),
  value: string().required("Value is required"),
  minAmount: number(),
  maxAmount: number(),
  selectedProduct: string(),
});

export default function CreateCouponForm({ setShowCouponForm, products }: any) {
  const dispatch = useDispatch();

  // ** RTK - Seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { seller } = sellerState;

  // ** Handle Form Submission
  const formik = useFormik({
    initialValues: {
      name: "",
      value: "",
      minAmount: 0,
      maxAmount: 0,
      selectedProduct: "",
      shopId: seller?._id,
      shop: seller,
    },
    validationSchema: couponSchema,
    onSubmit: (values: any) => {
      // @ts-ignore
      dispatch(createNewCoupon({ shopId: seller._id, ...values }));
      setShowCouponForm(false);
    },
  });

  return (
    <form
      className="bg-white px-4 pb-4 pt-6 mb-28 w-[700px] mx-auto shadow-md rounded-md flex flex-col gap-8"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="font-bold text-center text-2xl">Create New Coupon code</h1>

      <div className="flex flex-col gap-6">
        <div>
          <div>
            <CustomInput
              required={true}
              type={"text"}
              label={"Name"}
              placeholder={"coupon name..."}
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
        </div>

        <div>
          <div>
            <CustomInput
              required={true}
              type={"number"}
              label={"Discount Percentage %"}
              placeholder={"coupon discount percentage..."}
              onBlur={formik.handleBlur("value")}
              onChange={formik.handleChange("value")}
              value={formik.values.value}
            />
            {formik.touched.value && formik.errors.value ? (
              <div className="error">
                <p>{formik.errors.value}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <div>
            <CustomInput
              required={false}
              type={"number"}
              label={"Min Amount"}
              placeholder={"coupon minimum Amount..."}
              onBlur={formik.handleBlur("minAmount")}
              onChange={formik.handleChange("minAmount")}
              value={formik.values.minAmount}
            />
            {formik.touched.minAmount && formik.errors.minAmount ? (
              <div className="error">
                <p>{formik.errors.minAmount}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div>
          <div>
            <CustomInput
              required={false}
              type={"number"}
              label={"Max Amount"}
              placeholder={"coupon maximum Amount..."}
              onBlur={formik.handleBlur("maxAmount")}
              onChange={formik.handleChange("maxAmount")}
              value={formik.values.maxAmount}
            />
            {formik.touched.maxAmount && formik.errors.maxAmount ? (
              <div className="error">
                <p>{formik.errors.maxAmount}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="w-full font-semibold text-sm">
            Selected Product
          </label>
          <select
            className="px-2.5 py-2 border-[1px] bg-gray-50 border-slate-200 rounded-md text-sm outline-none"
            placeholder="Choose your selected products..."
            onBlur={formik.handleBlur("selectedProduct")}
            onChange={formik.handleChange("selectedProduct")}
            value={formik.values.selectedProduct}
          >
            <option value="Choose your selected product">
              Choose a selected product
            </option>
            {products &&
              products.map((i: Product) => (
                <option value={i.name} key={i.name}>
                  {i.name}
                </option>
              ))}
          </select>
          {formik.touched.selectedProduct && formik.errors.selectedProduct ? (
            <div className="error">
              <p>{formik.errors.selectedProduct}</p>
            </div>
          ) : null}
        </div>
      </div>

      <button type="submit" className="form-btn text-sm">
        Create event
      </button>
    </form>
  );
}
