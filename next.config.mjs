/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Rota antiga /franquias → /franquia (301, preserva SEO/anúncios/links antigos).
      { source: "/franquias", destination: "/franquia", permanent: true },
    ];
  },
};

export default nextConfig;
