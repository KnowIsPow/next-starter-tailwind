export default function Article({ children, ...rest }) {
  return <article {...rest}>{children}</article>;
}
