import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '', // Deixe vazio para o padrão (sem porta específica)
        pathname: '/**', // Permite todos os caminhos
      },
    ],
  },
};

export default nextConfig;
