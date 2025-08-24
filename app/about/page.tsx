import { Instagram } from "lucide-react"
import Navigation from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-sage-100">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-sage-600">About Saylor</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate nail artist dedicated to creating beautiful, healthy nails that make you feel confident and
              radiant.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <img
                src="/saylor-llama-nails.jpg"
                alt="Saylor showing off beautiful pink nails with a friendly llama"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-sage-600 mb-6">My Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>Work in Progress</p>
              </div>
            </div>
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
