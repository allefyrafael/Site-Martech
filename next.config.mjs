/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    const remoteVideoUrl = process.env.VIDEO_TECH_UNION_SOLUTIONS_URL
    // If an external URL is provided, proxy the local route to it. Otherwise, serve from /public as usual.
    return remoteVideoUrl
      ? [
          {
            source: "/videos/tech-union-solutions.mp4",
            destination: remoteVideoUrl,
          },
        ]
      : []
  },
}

export default nextConfig
