import { isRequired } from 'functions/error-handling/required-props';

export default function TextInput({
  type = 'text',
  value,
  onChange = isRequired('TextInput', 'onChange'),
  className = 'input',
  leftIcon,
  rightIcon,
  ...rest
}) {
  return (
    <div className="relative">
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {leftIcon}
        </div>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value, e)}
        className={`${leftIcon && 'pl-10'} ${rightIcon && 'pr-10'} ${className}`}
        {...rest}
      />
      {rightIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {rightIcon}
        </div>
      )}
    </div>
  );
}
