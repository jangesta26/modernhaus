'use client';

import { usePathname } from 'next/navigation';

const Head = () => {
  const pathname = usePathname() || '/';

  const titleFixedToShow = pathname === '/'
    ? ''
    : pathname
        .slice(1)
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

  const baseUrl = 'https://modernhaus.com';

  const meta = {
    title: `ModernHaus${titleFixedToShow ? ` · ${titleFixedToShow}` : ''}`,
    description:
      'Crafting stylish, functional furniture for modern living. At ModernHaus, we blend clean design with comfort and quality — helping you create a space that feels like home, since 2010.',
    keywords:
      'modern furniture, contemporary home décor, stylish living spaces, affordable designer furniture, interior design, minimalist furniture, quality home furnishings, ModernHaus furniture, functional home design, elegant living room & bedroom sets',
    type: 'website',
    url: `${baseUrl}${pathname}`,
    image: `${baseUrl}/og-image.jpg`,
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="ModernHaus" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.image} />
      <link rel="canonical" href={meta.url} />
      <link rel="me" href="mailto:janellgesta@gmail.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </>
  );
};

export default Head;
