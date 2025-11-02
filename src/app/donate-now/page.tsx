import  Header  from "@/components/Navbar"
import  Footer  from "@/components/SiteFooter"
import { Heart, Target, Users, BookOpen } from "lucide-react"

export const metadata = {
  title: "Donate Now - Open Eyes Foundation",
  description: "Make a financial contribution to support our educational mission",
}

export default function DonateNow() {
  const donationOptions = [
    {
      amount: "₹500",
      description: "Provides books for 5 students",
      icon: BookOpen,
    },
    {
      amount: "₹2,000",
      description: "Educates an orphan for a year",
      icon: Heart,
    },
    {
      amount: "₹5,000",
      description: "Supports a mobile library visit",
      icon: Target,
    },
    {
      amount: "Custom",
      description: "Choose your own amount",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate Now</h1>
          <p className="text-lg opacity-90">Your contribution makes a real difference in a child's life</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Your Donation Matters</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Every rupee you donate directly supports our mission to provide education to underprivileged children.
              Your contribution helps us:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Distribute books and educational materials</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Support mobile and community libraries</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Provide educational kits and stationery</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Cover educational expenses for orphans</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">✓</span>
                <span>Reach more students in underserved communities</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Tax Benefits</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">Open Eyes Foundation is registered under:</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Section 12AA of Income Tax Act, 1961</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Section 80G of Income Tax Act, 1961</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>NITI Aayog CSR-1 Registered</span>
              </li>
            </ul>
            <p className="text-sm text-gray-600">
              Your donations are eligible for tax deduction. We provide receipts for all donations.
            </p>
          </div>
        </div>

        {/* Donation Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Choose Your Impact</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {donationOptions.map((option, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{option.amount}</div>
                <p className="text-gray-700 mb-6">{option.description}</p>
                <button className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 transition-colors font-semibold">
                  Donate
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Methods</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Bank Transfer</h3>
              <p className="text-gray-700 text-sm mb-3">
                Transfer directly to our bank account. Contact us for bank details.
              </p>
              <a href="mailto:openeyesfoundationhr@gmail.com" className="text-blue-600 hover:underline font-semibold">
                Get Bank Details
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Online Payment</h3>
              <p className="text-gray-700 text-sm mb-3">Secure online payment through our partner platforms.</p>
              <button className="text-blue-600 hover:underline font-semibold">Pay Online</button>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Cheque/DD</h3>
              <p className="text-gray-700 text-sm mb-3">Send cheque or demand draft to our office address.</p>
              <a href="/contact-us" className="text-blue-600 hover:underline font-semibold">
                Get Address
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Corporate CSR</h3>
              <p className="text-gray-700 text-sm mb-3">Partner with us through your corporate CSR initiatives.</p>
              <a href="mailto:openeyesfoundation1@gmail.com" className="text-blue-600 hover:underline font-semibold">
                CSR Enquiry
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Every Donation Counts</h2>
          <p className="text-lg mb-8 opacity-90">
            No amount is too small. Your contribution, combined with others, creates lasting change.
          </p>
          <a
            href="tel:+917508408205"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us for More Information
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
