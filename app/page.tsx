import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Bun venit la Darom Consulting</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Ne specializăm în oferirea de soluții inovatoare de consultanță pentru nevoile afacerii tale.
          Echipa noastră de experți este aici pentru a te ajuta să reușești.
        </p>
        <Button asChild size="lg">
          <Link href="/programare">Programează o Consultație</Link>
        </Button>
      </section>
      
      <section className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Serviciile Noastre</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Consultanță</h3>
            <p className="text-muted-foreground">Îndrumare expertă pentru creșterea și dezvoltarea afacerii tale.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Soluții</h3>
            <p className="text-muted-foreground">Soluții personalizate adaptate nevoilor tale specifice.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Suport</h3>
            <p className="text-muted-foreground">Suport 24/7 pentru a-ți asigura succesul.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

