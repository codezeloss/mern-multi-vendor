import CustomInput from "../../CustomInput.tsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";
import { createNewProduct } from "../../../../features/seller/product/productSlice.ts";
import { toast } from "react-toastify";
import { useFormik } from "formik";

// !! Yup Product schema
let productSchema = object({
  name: string().required("Product name is required"),
  title: string().required("Title is required"),
});

export default function CreateProductForm() {
  const [images, setImages] = useState([]);
  // const dispatch = useDispatch();

  // ** RTK - Product state
  const productState = useSelector((state: any) => state.product);
  const { isSuccess, isError, isLoading, product } = productState;

  // Product id
  // const productId = location.pathname.split("/")[4];

  // ** Handle images uploading
  const handleImageChange = (e: {
    preventDefault: () => void;
    target: { files: Iterable<unknown> | ArrayLike<unknown> };
  }) => {
    e.preventDefault();
    let files: any = Array.from(e.target.files);
    // @ts-ignore
    setImages((prevImages: any) => [...prevImages, ...files]);
  };

  // ** Formik
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      console.log(values);

      // @ts-ignore
      // dispatch(createNewProduct());
    },
  });

  // ** Toast Notification
  useEffect(() => {
    if (isSuccess && product) {
      toast.success("Product created successfully!", {});
    }
    if (isError) {
      toast.error("Something went wrong!! Please, try again.", {});
    }
  }, [isSuccess, isError, isLoading, product]);

  return (
    <form
      className="bg-white px-4 pb-4 pt-6 w-[700px] mx-auto shadow-md roundedmd flex flex-col gap-8"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="font-bold text-center text-2xl">Create New Product</h1>

      <div className="flex flex-col gap-6">
        <div></div>
        <CustomInput
          required={true}
          type={"text"}
          label={"Name"}
          placeholder={"product name..."}
          onBlur={formik.handleBlur("name")}
          onChange={formik.handleChange("name")}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error">
            <p>{formik.errors.name}</p>
          </div>
        ) : null}

        <div></div>
        <CustomInput
          required={true}
          type={"text"}
          label={"Description"}
          placeholder={"product description..."}
          onBlur={formik.handleBlur("title")}
          onChange={formik.handleChange("title")}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="error">
            <p>{formik.errors.title}</p>
          </div>
        ) : null}

        <div className="flex flex-col gap-2">
          <label className="w-full font-semibold text-sm">
            Category <span className="text-red-600">*</span>
          </label>
          <select
            className="px-2.5 py-2 border-[1px] bg-gray-50 border-slate-200 rounded-md text-sm outline-none"
            value={""}
            onChange={() => {}}
            onBlur={() => {}}
          >
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <CustomInput
            required={false}
            type={"number"}
            label={"Product tags"}
            placeholder={"product tags..."}
            onBlur={formik.handleBlur("title")}
            onChange={formik.handleChange("title")}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">
              <p>{formik.errors.title}</p>
            </div>
          ) : null}
        </div>

        <div>
          <CustomInput
            required={false}
            type={"number"}
            label={"Original price"}
            placeholder={"product price..."}
            onBlur={formik.handleBlur("title")}
            onChange={formik.handleChange("title")}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">
              <p>{formik.errors.title}</p>
            </div>
          ) : null}
        </div>

        <div>
          <CustomInput
            required={true}
            type={"number"}
            label={"Price (With Discount)"}
            placeholder={"product price with discount..."}
            onBlur={formik.handleBlur("title")}
            onChange={formik.handleChange("title")}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">
              <p>{formik.errors.title}</p>
            </div>
          ) : null}
        </div>

        <div>
          <CustomInput
            required={true}
            type={"number"}
            label={"Product Stock"}
            placeholder={"product stock..."}
            onBlur={formik.handleBlur("title")}
            onChange={formik.handleChange("title")}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="error">
              <p>{formik.errors.title}</p>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <CustomInput
              required={true}
              type={"file"}
              label={"Upload Images"}
              placeholder={"product images..."}
              onBlur={() => {}}
              onChange={handleImageChange}
              value={formik.values.title}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="error">
                <p>{formik.errors.title}</p>
              </div>
            ) : null}
          </div>
          <div className="flex items-center gap-3">
            {images &&
              images.map((img) => (
                <img
                  className="w-24 h-24"
                  src={URL.createObjectURL(img)}
                  key={img}
                  alt="Product"
                />
              ))}
          </div>
        </div>
      </div>

      <button className="form-btn text-sm">Create product</button>
    </form>
  );
}
