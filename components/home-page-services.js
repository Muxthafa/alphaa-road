import React from "react";
import Image from "next/image";
import Link from "next/link";

const HomePageServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0A2647] mb-12 text-center">
          Engineering Excellence in Construction
        </h2>

        {/* First Category - Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-[#0A2647] mb-3">
              Road Construction Excellence
            </h3>
            <div className="h-2 w-20 bg-[#FFB800] mb-8"></div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our road construction expertise encompasses the complete pavement
              structure. Starting with precise backfilling and engineered
              subgrade preparation, we ensure a solid foundation. This is
              followed by methodical installation of granular subbase layers and
              cement-bound material (CBM), culminating in expertly laid asphalt
              layers. Each phase adheres to stringent pavement design
              specifications, ensuring optimal load distribution and longevity.
            </p>
            <Link
              href="/services/road-works"
              className="bg-[#FFB800] text-[#0A2647] px-6 py-3 rounded-lg font-bold hover:bg-[#ffc93c] transition duration-300"
            >
              Learn more
            </Link>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src="/images/road-3.jpg"
                alt="Advanced road construction techniques"
                width={800}
                height={400}
                className="w-full rounded-lg shadow-xl object-cover h-[400px]"
                priority
              />
            </div>
          </div>
        </div>

        {/* Second Category - Image Left */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src="/images/sewage.jpg"
                alt="Underground utility systems installation"
                width={800}
                height={400}
                className="w-full rounded-lg shadow-xl object-cover h-[400px]"
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-[#0A2647] mb-3">
              Underground Infrastructure Systems
            </h3>
            <div className="h-2 w-20 bg-[#FFB800] mb-8"></div>
            <p className="text-gray-700 leading-relaxed mb-6">
              We specialize in comprehensive underground utility networks,
              integrating both dry and wet utility systems. Our expertise covers
              deep excavation for main foul sewer networks and strategic surface
              water drainage systems. We also install complex water distribution
              networks and treated sewage effluent (TSE) systems, ensuring
              efficient water management and environmental compliance. Each
              installation follows precise gradient requirements and
              system-specific specifications.
            </p>
            <Link
              href="/services/infrastructure-works"
              className="bg-[#FFB800] text-[#0A2647] px-6 py-3 rounded-lg font-bold hover:bg-[#ffc93c] transition duration-300"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Third Category - Image Right */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-bold text-[#0A2647] mb-3">
              Surface Infrastructure & Safety
            </h3>
            <div className="h-2 w-20 bg-[#FFB800] mb-8"></div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our finishing works encompass critical safety and functionality
              elements. We install interlocking pavement systems engineered for
              specific load requirements, and implement comprehensive street
              lighting networks designed to IES standards. Our road safety
              infrastructure includes precision-installed signage systems,
              protective safety barriers, and professional road marking
              applications using both thermoplastic (for high-wear areas) and
              cold paint techniques, all conforming to international traffic
              safety standards.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src="/images/pavement-2.jpg"
                alt="Surface infrastructure and safety systems"
                width={1200} // Adjust width & height based on your actual image
                height={400}
                className="w-full rounded-lg shadow-xl object-cover h-[400px]"
                priority // Optional: Load this image with higher priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageServices;
