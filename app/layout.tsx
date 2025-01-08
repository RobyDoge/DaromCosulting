import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Darom Consulting',
  description: 'Servicii de consultanță pentru afaceri',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
                Darom Consulting
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-primary transition-colors">
                  Acasă
                </Link>
                <Link href="/programare" className="hover:text-primary transition-colors">
                  Programare
                </Link>
                <Link href="/recenzii" className="hover:text-primary transition-colors">
                  Recenzii
                </Link>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
            </nav>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t">
            <div className="container mx-auto px-4 h-16 flex items-center justify-center">
              <p className="text-sm text-muted-foreground">
                © 2024 Darom Consulting. Toate drepturile rezervate.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

