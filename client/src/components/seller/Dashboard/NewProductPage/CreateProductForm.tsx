import CustomInput from "../../CustomInput.tsx";
import { SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProduct } from "../../../../features/seller/product/productSlice.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../../../static/data.tsx";

export default function CreateProductForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [images, setImages] = useState([]);

  // ** RTK - Seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { seller } = sellerState;

  // ** RTK - Product state
  const productState = useSelector((state: any) => state.product);
  const { isSuccess, isError, product } = productState;

  // ** Handle images uploading
  const handleImageChange = (e: any) => {
    e.preventDefault();
    let files: any = Array.from(e.target.files);
    // @ts-ignore
    setImages((prevImages: any) => [...prevImages, ...files]);
  };

  // ** Handle Form Submission
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newForm = new FormData();
    newForm.append("name", name);
    newForm.append("description", description);
    newForm.append("category", category);
    newForm.append("tags", tags);
    // @ts-ignore
    newForm.append("originalPrice", originalPrice);
    // @ts-ignore
    newForm.append("discountPrice", discountPrice);
    // @ts-ignore
    newForm.append("stock", stock);
    newForm.append("shopId", seller?._id);
    images.forEach((image) => {
      newForm.set("images", image);
    });

    // @ts-ignore
    dispatch(createNewProduct(newForm));

    // ** Toast Notification
    if (isSuccess && product) {
      toast.success("Product created successfully!", {});
      navigate("/seller/dashboard/products");
      setName("");
      setDescription("");
      setCategory("");
      setTags("");
      setOriginalPrice(0);
      setDiscountPrice(0);
      setStock(0);
      setImages([]);
    }
    if (isError) {
      toast.error("Something went wrong!! Please, try again.", {});
    }
  };

  return (
    <form
      className="bg-white px-4 pb-4 pt-6 w-[700px] mx-auto shadow-md rounded-md flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-center text-2xl">Create New Product</h1>

      <div className="flex flex-col gap-6">
        <div>
          <CustomInput
            required={true}
            type={"text"}
            label={"Name"}
            placeholder={"product name..."}
            onBlur={() => {}}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setName(e.target.value)
            }
            value={name}
          />

          {/*<div className="error">
            <p>required</p>
          </div>*/}
        </div>

        <div>
          <div className="flex flex-col gap-2">
            <label className="w-full font-semibold text-sm">
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              className="w-full min-h-[80px] px-2.5 py-2 border-[1px] border-slate-200 rounded-md text-sm outline-none"
              placeholder={"Enter your product description..."}
              onBlur={() => {}}
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setDescription(e.target.value)
              }
              value={description}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="w-full font-semibold text-sm">
            Category <span className="text-red-600">*</span>
          </label>
          <select
            className="px-2.5 py-2 border-[1px] bg-gray-50 border-slate-200 rounded-md text-sm outline-none"
            onBlur={() => {}}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setCategory(e.target.value)
            }
            value={category}
          >
            <option value="Choose you product category">
              Choose you product category
            </option>
            {categoriesData &&
              categoriesData.map((i) => (
                <option value={i.title} key={i.title}>
                  {i.title}
                </option>
              ))}
          </select>
        </div>

        <div>
          <CustomInput
            required={false}
            type={"text"}
            label={"Product tags"}
            placeholder={"product tags... (ex: tag 1, tag 2, tag 3)"}
            onBlur={() => {}}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setTags(e.target.value)
            }
            value={tags}
          />
        </div>

        <div>
          <CustomInput
            required={false}
            type={"number"}
            label={"Original price"}
            placeholder={"product price..."}
            onBlur={() => {}}
            onChange={(e: { target: { value: SetStateAction<number> } }) =>
              setOriginalPrice(Number(e.target.value))
            }
            value={originalPrice}
          />
        </div>

        <div>
          <CustomInput
            required={true}
            type={"number"}
            label={"Price (With Discount)"}
            placeholder={"product price with discount..."}
            onBlur={() => {}}
            onChange={(e: { target: { value: SetStateAction<number> } }) =>
              setDiscountPrice(e.target.value)
            }
            value={discountPrice}
          />
        </div>

        <div>
          <CustomInput
            required={true}
            type={"number"}
            label={"Product Stock"}
            placeholder={"product stock..."}
            onBlur={() => {}}
            onChange={(e: { target: { value: SetStateAction<number> } }) =>
              setStock(e.target.value)
            }
            value={stock}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="w-full font-semibold text-sm" htmlFor="">
              Images <span className="text-red-600">*</span>
            </label>
            <input
              className="px-2.5 py-2 border-[1px] border-slate-200 rounded-md text-sm outline-none"
              type="file"
              id="upload"
              placeholder={`Upload your product images...`}
              onChange={handleImageChange}
              multiple={true}
            />
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

      <button type="submit" className="form-btn text-sm">
        Create product
      </button>
    </form>
  );
}
