import React from "react";

const Service = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-2xl flex flex-col gap-8 animate-fadeIn">
        <div className="space-y-4">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            Our Services
            <span className="block font-sans text-3xl sm:text-4xl lg:text-5xl text-red-400 mt-2">
              What We Offer
            </span>
          </h1>

          <p className="font-light text-lg sm:text-xl text-white/90 max-w-xl">
            We provide comprehensive web solutions tailored to your business
            needs. From design to deployment, we've got you covered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {[
            {
              title: "Web Design",
              description: "Creative and responsive designs",
            },
            { title: "Development", description: "Custom web applications" },
            { title: "SEO", description: "Search engine optimization" },
            {
              title: "Maintenance",
              description: "Regular updates and support",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="p-6 border border-white/20 rounded-lg backdrop-blur-sm
                        hover:border-red-400/50 transition-all duration-300
                        group"
            >
              <h3 className="text-xl text-white font-medium mb-2 group-hover:text-red-400">
                {service.title}
              </h3>
              <p className="text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
