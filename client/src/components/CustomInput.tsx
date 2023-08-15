interface Props {
  label?: string;
  type: string;
  value: string;
  handleInput: any;
  placeholder?: any;
}

function CustomInput({ label, type, value, handleInput, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-medium text-sm" htmlFor="">
        {label}
      </label>
      <input
        className="w-full border-[1px] px-3 py-2 text-sm bg-gray-100 rounded-md outline-none"
        type={type}
        value={value}
        onChange={handleInput}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
