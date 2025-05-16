import React from "react";
import Image from "next/image";
import ContactUs from "@/components/contact/ContactUs";
import RoadImage1 from "@/public/images/road-services-1.jpg";
import RoadImage2 from "@/public/images/road-services-2.jpg";

function MainComponent() {
  return (
    <>
      <div className="min-h-screen font-roboto">
        <div className="relative h-[60vh]">
          <div className="absolute inset-0">
            <Image
              src={RoadImage1}
              alt="Road construction site"
              fill
              objectFit="cover"
              placeholder="blur"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Road Works Services
              </h1>
              <p className="text-xl md:text-2xl">
                Professional road construction and maintenance solutions
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647]">
                Our Road Works Services
              </h2>
              <div className="h-1 w-20 bg-[#FFB800] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-layer-group text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Backfilling Works
                </h3>
                <p className="text-gray-600">
                  Expert soil management and compaction services ensuring stable
                  foundation for road construction. We use quality materials and
                  advanced techniques for optimal results.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-road text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Pavement Layers
                </h3>
                <p className="text-gray-600">
                  Professional installation of multiple pavement layers
                  including base, binder, and wearing course. We ensure
                  durability and smooth surface finish.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-paint-roller text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Road Markings
                </h3>
                <p className="text-gray-600">
                  High-visibility road marking services using durable materials.
                  We provide clear lane divisions, pedestrian crossings, and
                  safety markings.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-traffic-light text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Signages
                </h3>
                <p className="text-gray-600">
                  Installation and maintenance of regulatory, warning, and
                  informative road signs. We ensure compliance with local
                  traffic regulations.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-shield-alt text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Safety Furniture
                </h3>
                <p className="text-gray-600">
                  Supply and installation of guardrails, barriers, and other
                  safety equipment to protect road users and prevent accidents.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-tools text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Maintenance Services
                </h3>
                <p className="text-gray-600">
                  Regular inspection and maintenance of road infrastructure to
                  ensure safety and longevity of all installations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 ">
                <Image
                  src={RoadImage2}
                  alt="Road construction process"
                  width={49992}
                  height={3333}
                  placeholder="blur"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-6">
                  Our Construction Process
                </h2>
                <div className="h-1 w-20 bg-[#FFB800] mb-6"></div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <i className="fas fa-check-circle text-[#FFB800] mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0A2647]">
                        Site Preparation
                      </h4>
                      <p className="text-gray-600">
                        Thorough assessment and preparation of construction site
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <i className="fas fa-check-circle text-[#FFB800] mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0A2647]">
                        Layer Construction
                      </h4>
                      <p className="text-gray-600">
                        Systematic building of each road layer to ensure
                        stability
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <i className="fas fa-check-circle text-[#FFB800] mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0A2647]">
                        Safety Implementation
                      </h4>
                      <p className="text-gray-600">
                        Installation of all necessary safety features and
                        signage
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <i className="fas fa-check-circle text-[#FFB800] mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0A2647]">
                        Quality Assurance
                      </h4>
                      <p className="text-gray-600">
                        Rigorous testing and quality control measures
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ContactUs />
      </div>
      <></>
    </>
  );
}

export default MainComponent;
