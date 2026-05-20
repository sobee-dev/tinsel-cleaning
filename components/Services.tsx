const services = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10473/10473299.png",
    title: "Residential Deep Clean",
    description:
      "A thorough top-to-bottom clean of your home — kitchens, bathrooms, bedrooms, and living areas — leaving every corner spotless and fresh.",
    accent: "bg-brand-50",
    border: "hover:border-brand-300",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/63/63720.png",
    title: "Office & Commercial Cleaning",
    description:
      "Keep your workspace hygienic and professional. We handle open-plan offices, meeting rooms, restrooms, and reception areas on your schedule.",
    accent: "bg-blue-50",
    border: "hover:border-blue-300",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/10473/10473595.png",
    title: "Post-Construction Cleanup",
    description:
      "Removing dust, debris, paint splatters, and construction residue so your newly built or renovated space is move-in ready from day one.",
    accent: "bg-orange-50",
    border: "hover:border-orange-300",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/15550/15550664.png",
    title: "Carpet & Upholstery Cleaning",
    description:
      "Deep extraction cleaning for carpets, rugs, sofas, and chairs — eliminating stains, odours, allergens, and embedded dirt for a refreshed feel.",
    accent: "bg-purple-50",
    border: "hover:border-purple-300",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4265/4265045.png",
    title: "Disinfection Service",
    description:
      "Hospital-grade disinfection using EPA-approved products to sanitise high-touch surfaces and eliminate bacteria, viruses, and allergens.",
    accent: "bg-red-50",
    border: "hover:border-red-300",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1890/1890795.png",
    title: "Customised Service",
    description:
      "Have a unique cleaning need? We'll design a bespoke cleaning plan around your space, budget, and timeline. Just ask — we'll make it work.",
    accent: "bg-yellow-50",
    border: "hover:border-yellow-300",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex justify-center">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-4">
              What We Do
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Cleaning services built for{" "}
            <span className="text-brand-600">Lagos living</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">
            From a quick spruce-up to a full post-construction overhaul, Tinsel
            has the expertise and equipment to get any space spotless.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col bg-white rounded-2xl border border-gray-200 ${service.border} p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.accent} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
              >
                <img src={service.icon} alt={service.title} className="w-9 h-9 object-contain" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Learn more */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors group/link"
              >
                Learn More
                <svg
                  className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-gray-500 mb-4">
            Not sure which service you need?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-brand-600 text-white font-semibold text-sm hover:bg-brand-700 active:scale-95 transition-all shadow-md shadow-brand-200"
          >
            Talk to Us — It's Free
          </a>
        </div>
      </div>
    </section>
  );
}
