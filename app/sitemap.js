export default function sitemap() {
    return [
      {
        url: 'https://hunterlab-vietanh.vercel.app',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://hunterlab-vietanh.vercel.app/products',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
    ]
  }