import Head from 'next/head';

export default function Page({
  children,
  title = '',
  description = '',
  canonical = '',
  noIndex = false,
}) {
  return (
    <>
      <Head>
        {title && <title>{title}</title>}
        {description && <meta name="description" content={description} />}
        {canonical && (
          <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOST}/${canonical}`} />
        )}
        {noIndex && <meta name="robots" content="noindex" />}
      </Head>
      {children}
    </>
  );
}
