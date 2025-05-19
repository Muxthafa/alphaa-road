import React from "react";
import Image from "next/image";
import ContactUs from "@/components/contact/ContactUs";
import InfraImage1 from "@/public/images/infra-services-1.jpg";
import InfraImage3 from "@/public/images/infra-services-3.jpg";

function MainComponent() {
  return (
    <>
      <></>
      <div className="min-h-screen font-roboto">
        <div className="relative h-[60vh]">
          <div className="absolute inset-0">
            <Image
              src={InfraImage1}
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
                Infrastructure & Utility Works
              </h1>
              <p className="text-xl md:text-2xl">
                Comprehensive utility solutions for modern infrastructure
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647]">
                Our Utility Services
              </h2>
              <div className="h-1 w-20 bg-[#FFB800] mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-water text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Wet Utilities
                </h3>
                <p className="text-gray-600">
                  Expert installation and maintenance of water supply, sewerage
                  systems, and drainage networks ensuring efficient water
                  management.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-bolt text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Dry Utilities
                </h3>
                <p className="text-gray-600">
                  Professional installation of electrical conduits,
                  telecommunications, and gas lines for reliable utility service
                  delivery.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-lightbulb text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Street Lighting
                </h3>
                <p className="text-gray-600">
                  Modern street lighting solutions including installation,
                  maintenance, and energy-efficient LED upgrades.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-tint text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  TSE Networks
                </h3>
                <p className="text-gray-600">
                  Implementation of treated sewage effluent networks for
                  sustainable water management and irrigation systems.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-stream text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Surface Water Drainage
                </h3>
                <p className="text-gray-600">
                  Design and installation of effective surface water drainage
                  systems to prevent flooding and water accumulation.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
                <i className="fas fa-toilet text-4xl text-[#FFB800] mb-4"></i>
                <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                  Foul Sewer Systems
                </h3>
                <p className="text-gray-600">
                  Complete foul sewer installation and maintenance services
                  ensuring proper waste management and disposal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="relative w-full md:w-1/2 h-90">
                <Image
                  src={InfraImage3}
                  alt="Utility installation process"
                  fill
                  objectFit="cover"
                  objectPosition="bottom"
                  placeholder="blur"
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-6">
                  Our Installation Process
                </h2>
                <div className="h-1 w-20 bg-[#FFB800] mb-6"></div>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-4">
                    <i className="fas fa-check-circle text-[#FFB800] mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0A2647]">Site Survey</h4>
                      <p className="text-gray-600">
                        Comprehensive site assessment and utility mapping
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <i className="fas fa-check-circle text-[#FFB800] mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0A2647]">
                        Design Planning
                      </h4>
                      <p className="text-gray-600">
                        Detailed planning for optimal utility placement
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <i className="fas fa-check-circle text-[#FFB800] mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0A2647]">Installation</h4>
                      <p className="text-gray-600">
                        Professional installation using advanced techniques
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <i className="fas fa-check-circle text-[#FFB800] mt-1"></i>
                    <div>
                      <h4 className="font-bold text-[#0A2647]">Testing</h4>
                      <p className="text-gray-600">
                        Rigorous testing and quality assurance procedures
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
