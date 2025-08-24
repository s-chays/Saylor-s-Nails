import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"

export default function ServicesPage() {
  const services = [
    {
      name: "Custom Design",
      price: "$35+",
      duration: "60+ min",
      popular: false,
    },
    {
      name: "Builder Gel",
      price: "$30",
      duration: "60 min",
      popular: false,
    },
    {
      name: "Gel X",
      price: "$30",
      duration: "75 min",
      popular: true,
    },
    {
      name: "Full Design",
      price: "$25-30",
      duration: "45 min",
      popular: true,
    },
    {
      name: "Manicure",
      price: "$25",
      duration: "45 min",
      popular: false,
    },
    {
      name: "Soak Off",
      price: "$20",
      duration: "30 min",
      popular: false,
    },
    {
      name: "Minimalistic Design",
      price: "$15-20",
      duration: "30 min",
      popular: false,
    },
    {
      name: "Solid Color Add-On",
      price: "$10",
      duration: "15 min",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-sage-100">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-sage-600">Services & Pricing</span>
            </h1>
          </div>

          {/* Services List */}
          <div className="space-y-4 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="relative border-sage-200 hover:shadow-lg transition-shadow">
                {service.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-sage-600 text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                      <span className="text-2xl font-bold text-sage-600">{service.price}</span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-sage-600 mb-4">Ready to Book?</h2>
            <p className="text-gray-600 mb-6">
              Choose your preferred time slot and let's create beautiful nails together!
            </p>
            <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white">
              <a
                href="https://book.squareup.com/appointments/dqrq6hdgmw3pvn/location/LFR0P3VSGJNB8/services"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Appointment
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Instagram Footer */}
      <footer className="py-8 px-4 bg-sage-50">
        <div className="max-w-6xl mx-auto text-center">
          <a
            href="https://www.instagram.com/saylors.nails/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-600 text-white hover:bg-sage-700 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  )
}
