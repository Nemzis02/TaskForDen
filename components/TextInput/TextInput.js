const TextInput = ({ value, name, disabled, className }) => {
  return (
    <input
      type="text"
      value={value}
      name={name}
      disabled={disabled}
      className={className}
    />
  );
};

export default TextInput;
