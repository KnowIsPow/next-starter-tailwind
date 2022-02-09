export default function ExternalLink({
  children,
  href,
  openNewTab = true,
  rel = 'noopener noreferrer nofollow',
  ...rest
}) {
  return (
    <a href={href} target={openNewTab ? '_blank' : '_self'} rel={rel} {...rest}>
      {children}
    </a>
  );
}
