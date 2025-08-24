import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, Star, Instagram } from "lucide-react"
import Navigation from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-sage-100">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-4 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-sage-600">Saylor's Nails</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Professional nail artistry with a personal touch. Creating stunning, long-lasting nail designs that
              express your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage-600 hover:bg-sage-700 text-white">
                <a
                  href="https://book.squareup.com/appointments/dqrq6hdgmw3pvn/location/LFR0P3VSGJNB8/services"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Appointment
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
              >
                <a href="/services">View Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
                <p className="text-gray-600">Schedule your appointment online with real-time availability</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Star className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">IUP Based</h3>
                <p className="text-gray-600">Conveniently located at Indiana University of Pennsylvania</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-sage-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Clock className="w-12 h-12 text-sage-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-gray-600">Evening and weekend appointments available to fit your schedule</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-sage-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Beautiful Nails?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment today and let's create something amazing together!
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-sage-600 hover:bg-sage-50">
            <a
              href="https://book.squareup.com/appointments/dqrq6hdgmw3pvn/location/LFR0P3VSGJNB8/services"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Now
            </a>
          </Button>
        </div>
      </section>

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
