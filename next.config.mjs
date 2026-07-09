import nextra from 'nextra'

const withNextra = nextra({
  latex: false,
  search: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    // Required for `output: 'export'` — Cloudflare Pages serves static files,
    // so Next's on-demand image optimizer isn't available.
    unoptimized: true
  }
})
