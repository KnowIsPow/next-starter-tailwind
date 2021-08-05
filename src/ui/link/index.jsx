import NextLink from 'next/link';

export default function Link({ children, href, openNewTab = false, ...rest }) {
  return (
    <NextLink href={href}>
      <a target={openNewTab ? '_blank' : '_self'} {...rest}>
        {children}
      </a>
    </NextLink>
  );
}
