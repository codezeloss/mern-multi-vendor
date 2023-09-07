interface Props {
  label: string;
  placeholder: string;
  value: string | number;
  onChange: any;
  onBlur: any;
  type: string;
  required: boolean;
}

export default function CustomInput({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  type,
  required,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="w-full font-semibold text-sm" htmlFor="">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        className="px-2.5 py-2 border-[1px] border-slate-200 rounded-md text-sm outline-none"
        type={type}
        placeholder={`Enter your ${placeholder}`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        multiple={type === "file" ? true : false}
      />
    </div>
  );
}
