const noop = () => {};

export default function Input({ value, onChange = noop, children, ...rest }) {
  return (
    <input value={value} onChange={({ target: { value } }) => onChange(value)} {...rest}>
      {children}
    </input>
  );
}
