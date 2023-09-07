function Spinner() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-white z-20">
      <div
        className={
          "w-24 h-24 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent my-6"
        }
      />
    </div>
  );
}

export default Spinner;
