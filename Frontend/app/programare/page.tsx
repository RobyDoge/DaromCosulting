'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

interface BookingData {
  name: string;
  email: string;
  reason: string;
}

let server_adress:string = "http://localhost:5000/booking?"

export default function Appointment() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const data: BookingData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      reason: formData.get('reason') as string,
    }

    try {
      // Convert the data object to URL parameters
      const params = new URLSearchParams({
        name: data.name,
        email: data.email,
        reason: data.reason
      });

      const response = await fetch(`${server_adress}${params.toString()}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
      })

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Eroare la trimiterea programării');
      }

      const result = await response.json();
      
      toast({
        title: "Programare trimisă cu succes!",
        description: result.success,
      })

      // Reset the form
      event.currentTarget.reset()
    } catch (error) {
      toast({
        title: "Eroare!",
        description: error instanceof Error ? error.message : "Nu am putut trimite programarea. Te rugăm să încerci din nou.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Programează o Întâlnire</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nume Complet</Label>
                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Ioan Popescu"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="ioan.popescu@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Motivul Întâlnirii</Label>
                <Textarea
                  id="reason"
                  name="reason"
                  required
                  placeholder="Vă rugăm să descrieți motivul pentru care doriți să programați o întâlnire..."
                  className="min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Se trimite..." : "Trimite Programarea"}
              </Button>
            </form>
          </CardContent>
        </Card>
        <Toaster />
      </div>
    </div>
  )
}
