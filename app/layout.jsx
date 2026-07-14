import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Mochi Docs',
    template: '%s – Mochi'
  },
  description: 'Self-hosted analytics for Discord bots — command usage, server growth, and bot health in one dashboard.',
  icons: {
    icon: '/logo.svg',
    apple: '/apple-touch-icon.png'
  }
}

const discordInvite = 'https://discord.gg/59z89Ke4bt'

const navbar = (
  <Navbar
    logo={
      <span style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontWeight: 700 }}>
        {/* Plain <img>, not next/image: the optimizer is off under `output: 'export'`
            anyway, and an <img> lets the SVG's own prefers-color-scheme rules run. */}
        <img src="/logo.svg" alt="" width="28" height="28" />
        Mochi
      </span>
    }
    projectLink="https://github.com/mochi-analytics/mochi"
    // Renders Nextra's built-in Discord icon in the navbar.
    chatLink={discordInvite}
  />
)

const footer = (
  <Footer>
    <span>
      <a href={discordInvite}>Discord</a> ·{' '}
      <a href="https://github.com/mochi-analytics/mochi">GitHub</a> · AGPL-3.0
      (server) · Apache-2.0 (SDKs) · © {new Date().getFullYear()} Mochi Analytics
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
        <script
          defer
          src="https://umami.bwmp.dev/script.js"
          data-website-id="46d16db1-996e-4fb2-95bd-cb922e5f1a83"
        />
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/mochi-analytics/docs/tree/main/content"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
