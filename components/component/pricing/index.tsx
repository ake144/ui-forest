import { Check, X } from 'lucide-react'

const features = [
  { name: "Unlimited Projects", basic: true, pro: true, enterprise: true },
  { name: "24/7 Support", basic: false, pro: true, enterprise: true },
  { name: "Custom Integrations", basic: false, pro: false, enterprise: true },
  { name: "Analytics Dashboard", basic: false, pro: true, enterprise: true },
  { name: "Team Collaboration", basic: false, pro: true, enterprise: true },
  { name: "API Access", basic: false, pro: false, enterprise: true },
]

export default function FeatureComparisonTable() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Compare Plans</h2>
        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          {["Basic", "Pro", "Enterprise"].map((plan) => (
            <div key={plan} className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{plan}</h3>
                {plan === "Pro" && (
                  <p className="absolute top-0 py-1.5 px-4 bg-blue-500 text-white rounded-full transform -translate-y-1/2">
                    Most Popular
                  </p>
                )}
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan === "Basic" ? "$19" : plan === "Pro" ? "$39" : "$99"}
                  </span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500">The perfect plan for getting started with our platform.</p>
              </div>

              <ul role="list" className="mt-6 space-y-6">
                {features.map((feature) => (
                  <li key={feature.name} className="flex">
                    {feature[plan.toLowerCase() as 'basic' | 'pro' | 'enterprise'] ? (
                      <Check className="flex-shrink-0 w-6 h-6 text-green-500" />
                    ) : (
                      <X className="flex-shrink-0 w-6 h-6 text-red-500" />
                    )}
                    <span className="ml-3 text-gray-500">{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

