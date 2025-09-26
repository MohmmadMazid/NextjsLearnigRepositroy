/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // add the domain from which you are getting the image as url
    // and now only this domain image will be shown on the browser ui
  },
};

export default nextConfig;
