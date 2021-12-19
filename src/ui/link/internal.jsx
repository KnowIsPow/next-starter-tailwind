import NextLink from 'next/link';

export default function InternalLink({
  href,
  as,
  prefetch,
  shallow = false,
  replace = false,
  scroll = true,
  openNewTab,
  children,
  ...rest
}) {
  return (
    <NextLink
      href={href}
      as={as}
      prefetch={prefetch}
      shallow={shallow}
      replace={replace}
      scroll={scroll}
    >
      <a target={openNewTab && '_blank'} {...rest}>
        {children}
      </a>
    </NextLink>
  );
}
