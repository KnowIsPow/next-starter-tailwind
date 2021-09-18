export default function Select({
  className,
  options,
  selectedOption,
  onChange = () => {},
  renderOption = (option) => option,
  renderKey = (option) => option,
  ...rest
}) {
  return (
    <select
      className={className}
      value={selectedOption}
      onChange={({ target: { value } }) => onChange(value)}
      {...rest}
    >
      {options.map((option) => (
        <option key={renderKey(option)}>{renderOption(option)}</option>
      ))}
    </select>
  );
}
