import { isRequired } from 'functions/error-handling/required-props';

export default function TextArea({
  value,
  onChange = isRequired('TextArea', 'onChange'),
  className = 'input',
  rows = 2,
  allowVerticalResize = false,
  allowHorizontalResize = false,
  allowScroll = true,
  ...rest
}) {
  return (
    <div className="relative rounded-sm shadow-sm">
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
        ${allowScroll ? 'overflow-auto' : 'overflow-clip'}
        ${className}`}
        {...rest}
      ></textarea>
    </div>
  );
}
