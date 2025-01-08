import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex-1">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Bun venit la Darom Consulting
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Ne specializăm în oferirea de soluții inovatoare de consultanță pentru nevoile afacerii tale.
            Echipa noastră de experți este aici pentru a te ajuta să reușești.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/programare">
                Programează o Consultație
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Serviciile Noastre
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <h3 className="text-xl font-bold">Consultanță</h3>
              <p className="text-muted-foreground">
                Îndrumare expertă pentru creșterea și dezvoltarea afacerii tale.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <h3 className="text-xl font-bold">Soluții</h3>
              <p className="text-muted-foreground">
                Soluții personalizate adaptate nevoilor tale specifice.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <h3 className="text-xl font-bold">Suport</h3>
              <p className="text-muted-foreground">
                Suport 24/7 pentru a-ți asigura succesul.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

