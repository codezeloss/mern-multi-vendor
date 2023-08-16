interface Props {
  label: string;
  type: string;
  name: string;
  id: string;
  onBlurHandler: any;
  onChangeHandler: any;
  value: string;
  error: boolean;
}

function FormCustomInput({
  label,
  type,
  name,
  id,
  onBlurHandler,
  onChangeHandler,
  value,
  error,
}: Props) {
  return (
    <>
      <label className="form-label" htmlFor="register-fullName">
        {label}
      </label>
      <input
        className={`w-full px-4 py-2 border-[1px] rounded bg-gray-100 outline-none mb-1 ${
          error ? "border-2 border-red-400" : ""
        }`}
        type={type}
        name={name}
        id={id}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        value={value}
      />
    </>
  );
}

export default FormCustomInput;
