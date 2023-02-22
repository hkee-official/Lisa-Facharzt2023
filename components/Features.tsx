
const incentives = [
    {
      name: 'Leitsymptome',
      description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
      name: 'Fallbeispiele',
      description: 'Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
      name: 'Medikamente',
      description: "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
    },
    {
      name: 'Prüfungsfälle',
      description: "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    },
  ]
export default function Features() {
        return (
            <div>
                <div className="relative">
      <div className="absolute background-gradient2"><div className="absolute bggr2"></div></div>
          <div className="text-3xl font-medium tracking-tight mx-auto mt-12 ">Notizen für Lisas Facharztprüfung</div></div>
      <div className="mx-auto py-12 sm:py-12">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
          {incentives.map((incentive) => (
            <div className="z-10 bg-white hover:shadow-md hover:shadow-lg hover:transition shadow-lg rounded-xl p-6 border border-gray-200" key={incentive.name}>
              <img src={incentive.imageSrc} alt="" className="z-10 h-24 w-auto" />
              <h3 className="z-10 mt-6 text-sm font-medium text-gray-900">{incentive.name}</h3>
              <p className="z-10 mt-2 text-sm text-gray-500">{incentive.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}