import Image from "next/image";
import HomePageServices from "@/components/home-page-services";
import Card from "@/components/card";
import Link from "next/link";

function HomePage() {
  return (
    <div className="min-h-screen font-roboto">
      <section id="home" className="relative h-screen">
        {/* <div className="absolute inset-0">
          <Image
            src="/images/road-2.jpg"
            alt="Heavy construction equipment working on a road project at sunset"
            fill
            objectFit="cover"
            className="max-md:object-left"
          />

          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div> */}
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/road-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center overflow-x-hidden w-full">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Building Better Roads
              <br />
              For A Better Future
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Excellence in road construction since 2015
            </p>
             <Link
              href="/contact"
              className="bg-[#FFB800] text-[#0A2647] px-6 py-3 rounded-lg font-bold hover:bg-[#ffc93c] transition duration-300 text-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0A2647] mb-16">
            Our Promise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              icon="fa-road"
              title="Quality Infrastructure"
              description="Building roads that stand the test of time with superior materials and craftsmanship"
            />
            <Card
              icon="fa-clock"
              title="On-Time Delivery"
              description="Meeting deadlines with precision while maintaining the highest quality standards"
            />
            <Card
              icon="fa-leaf"
              title="Eco-Friendly Approach"
              description="Sustainable construction practices that protect our environment"
            />
          </div>
        </div>
      </section>

      <HomePageServices />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2647] mb-6">
              Building Maintenance
            </h2>
            <div className="h-2 w-20 bg-[#FFB800] mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Comprehensive maintenance solutions to keep your buildings
              operating at peak efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              icon="fa-building"
              title="Preventive Maintenance"
              description="Regular inspections and maintenance to prevent issues before they occur"
            />
            <Card
              icon="fa-wrench"
              title="Repair Services"
              description="Quick response repairs and emergency maintenance services"
            />
            <Card
              icon="fa-cogs"
              title="Facility Management"
              description="Complete facility management and maintenance solutions"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2647] mb-6">
              Infrastructure Solutions
            </h2>
            <div className="h-2 w-20 bg-[#FFB800] mx-auto mb-8"></div>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Building the foundation for tomorrow with innovative
              infrastructure solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-full h-48 relative rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/images/road-1.jpg"
                  alt="Infrastructure project showcase"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                Civil Infrastructure
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Roads and Highways
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Bridges and Tunnels
                </li>
                <li className="flex items-center text-gray-700
                ">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Water and Sewage Systems
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-full h-48 relative rounded-lg mb-6 overflow-hidden">
                <Image
                  src="/images/paint.jpg"
                  alt="Infrastructure project showcase"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#0A2647] mb-4">
                Industrial Infrastructure
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Industrial Plants
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Power Distribution
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Telecommunications
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="bg-[#FFB800] text-[#0A2647] px-6 py-3 rounded-lg font-bold hover:bg-[#ffc93c] transition duration-300"
            >
              View Our Infrastructure Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A2647] mb-6 leading-tight">
                Professional Road
                <br />
                Paving Services
              </h2>
              <div className="h-2 w-20 bg-[#FFB800] mb-8"></div>
              <p className="text-gray-700 text-lg mb-6">
                With over 10 years of experience in the industry, we specialize
                in delivering high-quality road paving solutions that stand the
                test of time. Our team of experts uses cutting-edge technology
                and premium materials to ensure superior results for every
                project.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Advanced paving technology and equipment
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Expert team with decades of experience
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Comprehensive quality control measures
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-[#FFB800] mr-3"></i>
                  Environmentally conscious practices
                </li>
              </ul>

              <Link
                href="/services/road-works"
                className="bg-[#FFB800] text-[#0A2647] px-6 py-3 rounded-lg font-bold hover:bg-[#ffc93c] transition duration-300"
              >
                Learn More About Our Services
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="relative">
                <Image
                  src="/images/pavement-1.jpg"
                  alt="Professional road paving equipment in action"
                  className="w-full h-[600px] object-cover rounded-lg shadow-xl"
                  layout="responsive"
                  width={300} // Adjust width as needed
                  height={600} // Adjust height as needed
                  priority
                />

                <div className="absolute -bottom-6 -left-6 bg-[#0A2647] text-white p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-[#FFB800] mb-2">
                    10+
                  </div>
                  <div className="text-sm">
                    Years of Excellence in Road Construction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;