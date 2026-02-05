"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Server,
  CheckCircle,
  TrendingUp,
  Building,
  Headphones,
  Zap,
  Users,
  Smartphone,
  CreditCard,
  BarChart3,
  Calendar,
  ClipboardCheck,
  DollarSign,
  Globe,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"pms" | "hms" | "rot">("pms")

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
              alt="Luxury Hotel"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative container mx-auto px-4 py-24 md:py-32 max-w-7xl">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 rounded-full">
                Modern Hotel Management
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Elevate Your
                <br />
                <span className="text-teal-400">Hotel Experience</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Powerful property management systems designed to streamline operations and delight your guests.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full">
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full bg-transparent"
                >
                  View Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Transform Your Operations Section */}
        <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop"
                  alt="Hotel Management"
                  fill
                  className="object-cover"
                  loading="eager"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-300 rounded-full">
                  Our Solutions
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                  Transform Your
                  <br />
                  <span className="text-teal-600">Hotel Operations</span>
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Cutting-edge technology solutions designed to revolutionize the hospitality industry
                </p>
                <div className="flex gap-3 mb-8">
                  <Button
                    onClick={() => setActiveTab("pms")}
                    className={`rounded-full px-6 ${
                      activeTab === "pms"
                        ? "bg-teal-500 hover:bg-teal-600 text-white"
                        : "bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    PMS
                  </Button>
                  <Button
                    onClick={() => setActiveTab("hms")}
                    className={`rounded-full px-6 ${
                      activeTab === "hms"
                        ? "bg-teal-500 hover:bg-teal-600 text-white"
                        : "bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    HMS
                  </Button>
                  <Button
                    onClick={() => setActiveTab("rot")}
                    className={`rounded-full px-6 ${
                      activeTab === "rot"
                        ? "bg-teal-500 hover:bg-teal-600 text-white"
                        : "bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    ROT
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {activeTab === "pms" && (
          <>
            {/* Property Management System Features */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Property Management System</h2>
                  <p className="text-lg text-gray-600">Powerful features that drive results</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Calendar,
                      title: "Reservation Management",
                      description: "Handle bookings, cancellations, and modifications with ease",
                    },
                    {
                      icon: Users,
                      title: "Front Desk Operations",
                      description: "Streamline check-in, check-out, and guest services",
                    },
                    {
                      icon: ClipboardCheck,
                      title: "Housekeeping Management",
                      description: "Track room status and cleaning schedules in real-time",
                    },
                    {
                      icon: BarChart3,
                      title: "Reporting and Analytics",
                      description: "Comprehensive insights into occupancy, revenue, and performance",
                    },
                    {
                      icon: Users,
                      title: "Guest Relationship Management",
                      description: "Build lasting relationships with personalized guest profiles",
                    },
                    {
                      icon: Zap,
                      title: "Integrations",
                      description: "Connect with booking channels, payment gateways, and more",
                    },
                    {
                      icon: Smartphone,
                      title: "Mobile Accessibility",
                      description: "Manage your property on-the-go from any device",
                    },
                    {
                      icon: Headphones,
                      title: "Support and Training",
                      description: "24/7 dedicated support and comprehensive training programs",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
                    >
                      <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Section for PMS */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Pricing</h2>
                  <p className="text-lg text-gray-600">Flexible plans that scale with you</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-teal-500 transition">
                    <h3 className="font-bold text-xl mb-2">Setup Fee</h3>
                    <p className="text-sm text-gray-600 mb-4">One-time fee depending on complexity and customization</p>
                    <p className="text-3xl font-bold text-teal-600">$500 - $2,500</p>
                  </div>

                  <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-teal-500 transition">
                    <h3 className="font-bold text-xl mb-2">Monthly Subscription</h3>
                    <p className="text-sm text-gray-600 mb-2">Small to Medium</p>
                    <p className="text-2xl font-bold text-teal-600 mb-3">$50 - $500</p>
                    <p className="text-sm text-gray-600 mb-2">Large Properties</p>
                    <p className="text-2xl font-bold text-teal-600">$500 - $2,000+</p>
                  </div>

                  <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-teal-500 transition">
                    <h3 className="font-bold text-xl mb-2">Transaction Fees</h3>
                    <p className="text-sm text-gray-600 mb-4">Per booking for payment processing (if applicable)</p>
                    <p className="text-3xl font-bold text-teal-600">1% - 3%</p>
                  </div>

                  <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-teal-500 transition">
                    <h3 className="font-bold text-xl mb-4">Optional Add-Ons</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>Third-party integrations: $100 - $500 per integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>Advanced reporting tools: $50 - $300/month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>Guest Wi-Fi management: $20 - $100/month</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                  >
                    Get Started with PMS
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === "hms" && (
          <>
            {/* Hotel Management System Features */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Hotel Management System</h2>
                  <p className="text-lg text-gray-600">Powerful features that drive results</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Users,
                      title: "Front Desk Management",
                      description: "Comprehensive front desk operations and guest services",
                    },
                    {
                      icon: CreditCard,
                      title: "Billing and Invoicing",
                      description: "Automated billing with multiple payment options",
                    },
                    {
                      icon: Calendar,
                      title: "Reservation Management",
                      description: "Advanced booking engine with real-time availability",
                    },
                    {
                      icon: ClipboardCheck,
                      title: "Housekeeping Management",
                      description: "Efficient room assignment and maintenance tracking",
                    },
                    {
                      icon: BarChart3,
                      title: "Reporting and Analytics",
                      description: "In-depth business intelligence and performance metrics",
                    },
                    {
                      icon: Users,
                      title: "Customer Relationship Management",
                      description: "CRM tools to enhance guest loyalty and retention",
                    },
                    {
                      icon: Globe,
                      title: "Online Integration",
                      description: "Seamless connection with OTAs and booking platforms",
                    },
                    {
                      icon: Smartphone,
                      title: "Mobile Access",
                      description: "Full system access via mobile applications",
                    },
                    {
                      icon: Headphones,
                      title: "Support and Training",
                      description: "Round-the-clock support with extensive training resources",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition"
                    >
                      <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Pricing Section for HMS */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Pricing</h2>
                  <p className="text-lg text-gray-600">Flexible plans that scale with you</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-500 transition">
                    <h3 className="font-bold text-xl mb-2">Setup Fee</h3>
                    <p className="text-sm text-gray-600 mb-4">One-time fee based on customization and complexity</p>
                    <p className="text-3xl font-bold text-blue-600">$500 - $5,000</p>
                  </div>

                  <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-500 transition">
                    <h3 className="font-bold text-xl mb-2">Monthly Subscription</h3>
                    <p className="text-sm text-gray-600 mb-2">Small to Medium</p>
                    <p className="text-2xl font-bold text-blue-600 mb-3">$100 - $600</p>
                    <p className="text-sm text-gray-600 mb-2">Large Properties</p>
                    <p className="text-2xl font-bold text-blue-600">$600 - $2,500+</p>
                  </div>

                  <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-500 transition">
                    <h3 className="font-bold text-xl mb-2">Transaction Fees</h3>
                    <p className="text-sm text-gray-600 mb-4">Per booking processed through payment gateways</p>
                    <p className="text-3xl font-bold text-blue-600">1% - 3%</p>
                  </div>

                  <div className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-blue-500 transition">
                    <h3 className="font-bold text-xl mb-4">Optional Add-Ons</h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>Advanced reporting tools: $50 - $300/month</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>Third-party integrations (POS, channel managers): $100 - $500 per integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>Customer feedback tools: $20 - $100/month</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                  >
                    Get Started with HMS
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === "rot" && (
          <>
            {/* Revenue Optimization Tools */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Revenue Optimization Tools</h2>
                  <p className="text-lg text-gray-600">Maximize your revenue potential</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: DollarSign,
                      title: "Dynamic Pricing",
                      description:
                        "Automatically adjust room rates based on demand, seasonality, and market conditions to maximize revenue",
                    },
                    {
                      icon: BarChart3,
                      title: "Revenue Analytics",
                      description:
                        "Comprehensive dashboards and reports to track key performance indicators and identify revenue opportunities",
                    },
                    {
                      icon: TrendingUp,
                      title: "Demand Forecasting",
                      description:
                        "Predict future booking patterns and occupancy rates using historical data and market trends",
                    },
                    {
                      icon: Globe,
                      title: "Channel Management",
                      description:
                        "Optimize distribution across multiple booking channels and OTAs to reach more customers",
                    },
                    {
                      icon: CheckCircle,
                      title: "Competitive Analysis",
                      description:
                        "Monitor competitor pricing and market positioning to stay competitive and capture market share",
                    },
                    {
                      icon: Server,
                      title: "Automated Recommendations",
                      description:
                        "AI-powered suggestions for pricing strategies and inventory management to boost profitability",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition"
                    >
                      <div className="w-14 h-14 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ROT Benefits */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Why Use Revenue Optimization?</h2>
                  <p className="text-lg text-gray-600">Transform your pricing strategy and boost profitability</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Increase Revenue</h3>
                    <p className="text-gray-600">
                      Optimize pricing to capture maximum value from every booking and improve your bottom line
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Data-Driven Decisions</h3>
                    <p className="text-gray-600">
                      Make informed pricing decisions based on real-time market data and predictive analytics
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">Save Time</h3>
                    <p className="text-gray-600">
                      Automate pricing strategies and free up your team to focus on guest experience
                    </p>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                  >
                    Learn More About ROT
                  </Button>
                </div>
              </div>
            </section>
          </>
        )}

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scalability</h3>
                <p className="text-gray-600 text-sm">From boutique hotels to large chains</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Built for Hotels</h3>
                <p className="text-gray-600 text-sm">Designed specifically for hospitality</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Dedicated assistance whenever you need</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HMCTS */}
        <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-4">
              <Badge className="bg-teal-100 text-teal-700 border-teal-300 rounded-full">✨ The HMCTS Advantage</Badge>
            </div>
            <h2 className="text-4xl font-bold text-center mb-6">
              Why Choose
              <br />
              <span className="text-teal-600">HMCTS?</span>
            </h2>
            <p className="text-center text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
              Innovative solutions tailored to meet the needs of the hospitality industry. Our comprehensive offerings
              empower your business to thrive.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Consultation Services</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Partnered with leading platforms like Cloudbeds to deliver the best solutions.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Building className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Tailored for Hospitality</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Designed specifically for the unique needs of hotels, resorts, and short-term rental properties.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scalable Solutions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Perfect for small boutique hotels to large multi-property chains.
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition">
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <Headphones className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Offering dedicated assistance and training to ensure seamless integration and success.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-full shadow-lg"
              >
                Start Your Journey with HMCTS
              </Button>
              <p className="text-gray-600 text-sm mt-4">
                Join satisfied who have transformed their hospitality operations with HMCTS
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
