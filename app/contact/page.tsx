import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center">Contactează-ne</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Informații de Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <p>Strada Afacerilor 123, Oraș, Țară</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <p>+1 234 567 890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <p>contact@daromconsulting.com</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Program de Lucru</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>Luni - Vineri: 9:00 - 18:00</p>
              <p>Sâmbătă: 10:00 - 16:00</p>
              <p>Duminică: Închis</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

