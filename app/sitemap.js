import { PRODUCTS } from '@/consts/products';
import { INDUSTRIES } from '@/consts/industries';
import toLowerCaseNonAccentVietnamese from '@/utils/nonAccentVietnamese'


function getProductsRoutes() {
  return PRODUCTS.map((product) => ({
    url: `https://hunterlab-vietanh.vercel.app/products/${toLowerCaseNonAccentVietnamese(product.name).replace(/\s+/g, '-')}-p.${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  }));
}

function getIndustriesRoutes() {
  return INDUSTRIES.map((industry) => ({
    url: `https://hunterlab-vietanh.vercel.app/industries/${toLowerCaseNonAccentVietnamese(industry.name).replace(/\s+/g, '-')}-i.${industry.id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.5,
  }));
}

const staticRoutes = [
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
  {
    url: 'https://hunterlab-vietanh.vercel.app/industries',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: 'https://hunterlab-vietanh.vercel.app/about',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
  {
    url: 'https://hunterlab-vietanh.vercel.app/contact',
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.6,
  },
];

export default async function sitemap() {
  const dynamicRoutes = [...getProductsRoutes(), ...getIndustriesRoutes()];

  return [...staticRoutes, ...dynamicRoutes];
}