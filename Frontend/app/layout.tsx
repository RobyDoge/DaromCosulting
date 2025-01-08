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
    <html lang="ro" className="antialiased">
      <body className={inter.className}>
        <div className="relative min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="container h-16 flex items-center justify-between">
              <Link 
                href="/" 
                className="text-xl font-bold tracking-tight hover:text-primary transition-colors"
              >
                Darom Consulting
              </Link>
              <div className="flex gap-6">
                <Link 
                  href="/" 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Acasă
                </Link>
                <Link 
                  href="/programare" 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Programare
                </Link>
                <Link 
                  href="/recenzii" 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Recenzii
                </Link>
                <Link 
                  href="/contact" 
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t py-6 md:py-0">
            <div className="container h-16 flex items-center justify-center">
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

