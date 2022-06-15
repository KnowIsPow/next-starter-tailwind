import { siteName, socialProfiles } from 'site_configuration';
import Head from 'next/head';

export default function Page({
  children,
  title = '',
  description = '',
  canonical = '',
  previewImage = '',
  noIndex = false,
  isArticle = false,
}) {
  return (
    <>
      <Head>
        {title && (
          <title>
            {title} | {siteName}
          </title>
        )}
        {description && <meta name="description" content={description} />}
        {canonical && <link rel="canonical" href={`${process.env.NEXT_PUBLIC_HOST}${canonical}`} />}
        {noIndex && <meta name="robots" content="noindex" />}

        {/* Twitter */}
        {socialProfiles.twitter && <meta name="twitter:card" content="summary" key="twcard" />}
        {socialProfiles.twitter && (
          <meta name="twitter:site" content={socialProfiles.twitter} key="twhandle" />
        )}

        {/* Open Graph */}
        {title && <meta property="og:title" content={title} key="ogtitle" />}
        {canonical && (
          <meta
            property="og:url"
            content={`${process.env.NEXT_PUBLIC_HOST}${canonical}`}
            key="ogurl"
          />
        )}
        {previewImage && <meta property="og:image" content={previewImage} key="ogimage" />}
        {siteName && <meta property="og:site_name" content={siteName} key="ogsitename" />}
        {description && <meta property="og:description" content={description} key="ogdesc" />}
        <meta property="og:type" content={isArticle ? 'article' : 'website'} key="ogtype" />
      </Head>
      {children}
    </>
  );
}
