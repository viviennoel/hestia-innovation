const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/articles",
        destination: "/",
        
      }
    ];
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    })

    return config
  },
};

module.exports = nextConfig;
