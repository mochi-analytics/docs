import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Mochi Docs',
    template: '%s – Mochi'
  },
  description: 'Self-hosted analytics for Discord bots — command usage, server growth, and bot health in one dashboard.'
}

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontWeight: 700 }}>
        <span aria-hidden style={{ fontSize: '1.25rem' }}>🍡</span>
        Mochi
      </span>
    }
    projectLink="https://github.com/mochi-analytics/mochi"
  />
)

const footer = (
  <Footer>
    <span>
      AGPL-3.0 (server) · Apache-2.0 (SDKs) · © {new Date().getFullYear()} Mochi Analytics
    </span>
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head
        color={{
          hue: 330,
          saturation: 70
        }}
      />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/mochi-analytics/mochi/tree/main/docs"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
