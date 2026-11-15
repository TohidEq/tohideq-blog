/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/TohidEq/tohideq-blog-posts-mdx/master/images/**'
      }
    ]
  }
}

module.exports = nextConfig
