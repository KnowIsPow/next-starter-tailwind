import { isRequired } from 'functions/error-handling/required-props';

export default function TextAreaInput({
  value,
  onChange = isRequired('TextArea', 'onChange'),
  className = 'input',
  rows = 3,
  allowVerticalResize = false,
  allowHorizontalResize = false,
  allowScroll = true,
  leftIcon,
  rightIcon,
  ...rest
}) {
  return (
    <div className="relative rounded-sm shadow-sm">
      {leftIcon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {leftIcon}
        </div>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value, e)}
        rows={rows}
        className={`${
          allowHorizontalResize && allowVerticalResize
            ? 'resize'
            : allowHorizontalResize
            ? 'resize-x'
            : allowVerticalResize
            ? 'resize-y'
            : 'resize-none'
        }
        ${leftIcon && 'pl-10'} ${rightIcon && 'pr-10'}
        ${allowScroll ? 'overflow-auto' : 'overflow-clip'}
        ${className}`}
        {...rest}
      ></textarea>
      {rightIcon && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          {rightIcon}
        </div>
      )}
    </div>
  );
}
