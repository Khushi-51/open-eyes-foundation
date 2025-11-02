import Header from "@/components/Navbar"
import Footer  from "@/components/SiteFooter"
import { Users, Heart, Lightbulb, BookOpen } from "lucide-react"

export const metadata = {
  title: "Volunteer - Open Eyes Foundation",
  description: "Join our volunteer program and make a difference",
}

export default function Volunteer() {
  const opportunities = [
    {
      icon: BookOpen,
      title: "Book Distribution",
      description: "Help us collect, sort, and distribute books to students in need",
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Mentor underprivileged students and guide them in their educational journey",
    },
    {
      icon: Heart,
      title: "Community Outreach",
      description: "Participate in community events and awareness campaigns",
    },
    {
      icon: Lightbulb,
      title: "Skill Development",
      description: "Conduct workshops and training sessions for students",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Volunteer With Us</h1>
          <p className="text-lg opacity-90">Be the change you want to see in the world</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Volunteer?</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Make a direct impact in a child's life</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Develop new skills and gain experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Be part of a passionate community</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Flexible volunteering opportunities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Get volunteer certificate and recognition</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Who Can Volunteer?</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Anyone with a passion for education and social service can volunteer with us. Whether you're a student,
              professional, or retiree, we have opportunities for everyone.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Students (school, college, university)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Working professionals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Retired individuals</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Corporate employees (CSR activities)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-green-600 font-bold">•</span>
                <span>Community members</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Opportunities */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => {
              const Icon = opp.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{opp.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{opp.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">How to Apply</h2>
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              To apply for volunteering with Open Eyes Foundation, please fill out our volunteer application form:
            </p>
            <a
              href="https://forms.gle/mw6nQEP1WgQHnfPA9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Apply Now
            </a>
            <p className="text-gray-600 text-sm mt-4">
              Or contact us directly at +91-7508408205 or openeyesfoundationhr@gmail.com
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 opacity-90">Join our volunteer community today</p>
          <a
            href="https://forms.gle/mw6nQEP1WgQHnfPA9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Become a Volunteer
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
