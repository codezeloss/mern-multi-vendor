import CustomInput from "../../CustomInput.tsx";
import { SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewEvent } from "../../../../features/seller/event/eventSlice.ts";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CreateEventForm() {
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
  const [startDate, setStartDate] = useState<string | any>("");
  const [finishDate, setFinishDate] = useState("");
  const [status, setStatus] = useState("");

  // ** RTK - Seller state
  const sellerState = useSelector((state: any) => state.seller);
  const { seller } = sellerState;

  // ** RTK - Event state
  const eventState = useSelector((state: any) => state.event);
  const { isSuccess, isError, event } = eventState;

  // ** Handle images uploading
  const handleImageChange = (e: any) => {
    e.preventDefault();
    let files: any = Array.from(e.target.files);
    // @ts-ignore
    setImages((prevImages: any) => [...prevImages, ...files]);
  };

  // !! Handle Start / End Date
  const handleStartDateChange = (e: {
    preventDefault: () => void;
    target: { value: string | number | Date };
  }) => {
    e.preventDefault();
    const startDate = new Date(e.target.value).toISOString().slice(0, 10);
    setStartDate(startDate);
  };

  const handleFinishDateChange = (e: {
    preventDefault: () => void;
    target: { value: string | number | Date };
  }) => {
    e.preventDefault();
    const endDate = new Date(e.target.value).toISOString().slice(0, 10);
    setFinishDate(endDate);
  };

  // !! Disable selecting old date
  const today = new Date().toISOString().slice(0, 10);
  const minEndDate = startDate
    ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10)
    : today;

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
    // @ts-ignore
    newForm.append("start_date", startDate);
    // @ts-ignore
    newForm.append("finish_date", finishDate);
    newForm.append("status", status);
    images.forEach((image) => {
      newForm.set("images", image);
    });

    // @ts-ignore
    dispatch(createNewEvent(newForm));

    // ** Toast Notification
    if (isSuccess && event) {
      toast.success("Event created successfully!", {});
      navigate("/seller/dashboard/events");
      setName("");
      setDescription("");
      setCategory("");
      setTags("");
      setOriginalPrice(0);
      setDiscountPrice(0);
      setStock(0);
      setImages([]);
      setStartDate("");
      setFinishDate("");
      setStatus("");
    }
    if (isError) {
      toast.error("Something went wrong!! Please, try again.", {});
    }
  };

  return (
    <form
      className="bg-white px-4 pb-4 pt-6 mb-28 w-[700px] mx-auto shadow-md rounded-md flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <h1 className="font-bold text-center text-2xl">Create New Event</h1>

      <div className="flex flex-col gap-6">
        <div>
          <CustomInput
            required={true}
            type={"text"}
            label={"Name"}
            placeholder={"event name..."}
            onBlur={() => {}}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setName(e.target.value)
            }
            value={name}
          />
        </div>

        <div>
          <div className="flex flex-col gap-2">
            <label className="w-full font-semibold text-sm">
              Description <span className="text-red-600">*</span>
            </label>
            <textarea
              className="w-full min-h-[80px] px-2.5 py-2 border-[1px] border-slate-200 rounded-md text-sm outline-none"
              placeholder={"Enter your event description..."}
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
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <CustomInput
            inputId={"start-date"}
            required={false}
            type={"date"}
            label={"Start Date"}
            placeholder={"event start date..."}
            onBlur={() => {}}
            onChange={handleStartDateChange}
            min={today}
            value={startDate ? startDate : today}
          />
        </div>
        <div>
          <CustomInput
            inputId={"finish-date"}
            required={false}
            type={"date"}
            label={"Finish Date"}
            placeholder={"event finish date... (ex: tag01,tag02,tag03)"}
            onBlur={() => {}}
            onChange={handleFinishDateChange}
            min={minEndDate}
            value={finishDate ? finishDate : minEndDate}
          />
        </div>
        <div>
          <CustomInput
            required={false}
            type={"text"}
            label={"Event Status"}
            placeholder={"event status... (ex: tag 1, tag 2, tag 3)"}
            onBlur={() => {}}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setStatus(e.target.value)
            }
            value={status}
          />
        </div>

        <div>
          <CustomInput
            required={false}
            type={"text"}
            label={"Event tags"}
            placeholder={"event tags... (ex: tag 1, tag 2, tag 3)"}
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
            placeholder={"event price..."}
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
            placeholder={"event price with discount..."}
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
            label={"Event Stock"}
            placeholder={"event stock..."}
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
              placeholder={`Upload your event images...`}
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
                  alt="Event"
                />
              ))}
          </div>
        </div>
      </div>

      <button type="submit" className="form-btn text-sm">
        Create event
      </button>
    </form>
  );
}
