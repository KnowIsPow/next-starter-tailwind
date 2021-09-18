function isRequired() {
  throw new Error('Image src and alt props are both required!');
}

export default function Image({ src = isRequired(), alt = isRequired(), className, ...rest }) {
  return <img src={src} alt={alt} className={className} {...rest} />;
}
