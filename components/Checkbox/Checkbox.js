const Checkbox = ({ id, name, label, checked, onChange }) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        checked={checked}
        type="checkbox"
        id={id}
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;
