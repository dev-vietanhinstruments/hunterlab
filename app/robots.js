export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://hunterlab-vietanh.vercel.app/sitemap.xml',
    }
  }