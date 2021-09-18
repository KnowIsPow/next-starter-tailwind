const defaultSize = 'h1';

export default function Heading({ size = defaultSize, className, text = '' }) {
  const validSizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const Title = validSizes.includes(size.toLowerCase()) ? size : defaultSize;

  return <Title className={className}>{text}</Title>;
}
