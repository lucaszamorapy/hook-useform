

const Input = ({
  id,
  label,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
        className="border mt-2 py-2 rounded-lg"
      />
      {error && <p className="text-red-600">{error}</p>}
    </>
  );
};

export default Input;
