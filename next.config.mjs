/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"], // add the domain from which you are getting the image as url
    // and now only this domain image will be shown on the browser ui
  },
  redirects: async () => {
    return [
      // this is for the static routes
      {
        source: "/redirection",
        destination: "/home",
        permanent: false,
      },

      // this is for the dynamic routes
      {
        source: "/redirection/:id",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
