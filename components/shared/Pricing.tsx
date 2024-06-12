import React from 'react'

export default function Pricing() {
    const plans=[
        {
            title: 'Free',
            subtitle: 'Best Plan for normal Usage',
            prices: [
              { duration: '1 month', amount: '$0' },
             
            ],
            features: [
              '100 Swipes',
              'Max Swipes',
              'Left swipe percentage',
              'Age Range Filter',
              'Distance Filter',
              'Skip empty Distance',
              'Ignore Distance'
            ]
        },
        {
            title: 'Basic',
            subtitle: 'Best Plan for normal Usage',
            prices: [
              { duration: '1 month', amount: '$3.99' },
             
            ],
            features: [
              '1000 Swipes per Run and 5000 per Day',
              'Max Swipes',
              'Left swipe percentage',
              'Age Range Filter',
              'Pictures Count Filter',
              'Distance Filter',
              'Skip empty Distance',
              'Ignore Distance'
            ]
        },
        
    ]
  return (
    <div className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center align-items space-x-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 w-1/4">
              <h2 className="text-2xl font-bold text-center">{plan.title}</h2>
              <p className="text-center text-gray-600 mb-4">{plan.subtitle}</p>
              {plan.prices.map((price, index) => (
                <div key={index} className="text-center mb-2">
                  <p className="text-3xl font-bold">{price.amount}</p>
                  <p className="text-gray-600">{price.duration}</p>
                  <button className="mt-2 w-full bg-[#FC3E8A] text-white py-2 rounded">Subscribe</button>
                </div>
              ))}
              <ul className="mt-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>{feature}</span>
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
