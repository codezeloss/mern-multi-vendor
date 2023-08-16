import { PiUserCircleLight } from "react-icons/pi";

interface Props {
  name: string;
  id: string;
  onBlurHandler: any;
  onChangeHandler: any;
  value: string;
}

function FormAvatarInput({
  name,
  id,
  onBlurHandler,
  onChangeHandler,
  value,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-2 mb-6 justify-center">
      <div className={"text-7xl"}>
        <PiUserCircleLight />
      </div>
      <div>
        <input
          className="text-gray-600 text-sm py-2 px-4 font-semibold border-[1px] rounded-md hover:bg-gray-100"
          type="file"
          name={name}
          id={id}
          accept=".jpg,.jpeg,.png"
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          value={value}
        />
      </div>
    </div>
  );
}

export default FormAvatarInput;
