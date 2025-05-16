import Image from "next/image";
import Card from "@/components/card";
import ContactUs from "@/components/contact/ContactUs";

const FeatureCard = ({ icon, title, description }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12">
      <Image
        src={icon}
        alt={`${title} icon`}
        width={100} // Adjust width & height to fit your layout needs
        height={100}
        className="w-full h-full"
      />
    </div>
    <div>
      <h3 className="text-xl font-bold text-black">{title}</h3>
      <p className="text-black/80">{description}</p>
    </div>
  </div>
);

const FeatureList = () => (
  <div className="space-y-8">
    <FeatureCard
      icon="/icons/engineering.svg"
      title="Expert Engineering"
      description="Industry-leading engineering solutions"
    />
    <FeatureCard
      icon="/icons/equipment.svg"
      title="Modern Equipment"
      description="State-of-the-art construction machinery"
    />
    <FeatureCard
      icon="/icons/quality.svg"
      title="Quality Assurance"
      description="Rigorous quality control standards"
    />
    <FeatureCard
      icon="/icons/innovation.svg"
      title="Innovation Focus"
      description="Cutting-edge construction techniques"
    />
  </div>
);

export default function MainComponent() {
  return (
    <div className="min-h-screen font-roboto">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-6">
                Our Story
              </h2>
              <div className="h-1 w-20 bg-[#FFB800] mb-6"></div>
              <p className="text-gray-600 mb-6">
                Since 2010, we have been at the forefront of infrastructure
                development, specializing in road construction and utility
                installations. Our journey began with a vision to transform the
                construction industry through innovation and excellence.
              </p>
              <p className="text-gray-600">
                Today, we stand as a leading construction company, having
                successfully completed over 500 projects across the region. Our
                commitment to quality, safety, and sustainability has earned us
                the trust of both public and private sector clients.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/images/qatar.jpg"
                alt="Timeline of company growth showing key milestones"
                width={1200} // Adjust based on actual image width or layout
                height={400}
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647]">
              Mission & Vision
            </h2>
            <div className="h-1 w-20 bg-[#FFB800] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              icon="fa-bullseye"
              title="Our Mission"
              description="To deliver exceptional infrastructure solutions that enhance communities while maintaining the highest standards of safety, quality, and environmental responsibility."
              isLarge
            />
            <Card
              icon="fa-eye"
              title="Our Vision"
              description="To be the most trusted and innovative infrastructure development company, setting new benchmarks in construction excellence and sustainable practices."
              isLarge
            />
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Section with Yellow Background */}
        <div className="bg-[#FFB800] p-12 h-[600px] md:h-[800px] overflow-y-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-14 text-black">
            We are the best in the business
          </h2>
          <p className="text-black mb-12">
            With decades of experience in infrastructure development, we deliver
            excellence through innovation and unwavering commitment to quality.
          </p>
          <FeatureList />
        </div>

        {/* right Section with Background Image */}
        <div className="relative h-[600px] md:h-[800px]">
          <div className="absolute inset-0 bg-black/50"></div>
          <Image
            src="/images/asphalt.jpg"
            alt="Construction machinery"
            fill
            className="object-cover"
          />
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-lg">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Committed to keep people healthy & safe
                </h1>
                <p className="text-lg mb-8 text-white">
                  We prioritize the well-being of our workforce and communities
                  through rigorous safety protocols and state-of-the-art
                  equipment implementation.
                </p>
                <a
                  href="/contact-us"
                  className="inline-block bg-[#FFB800] text-black px-8 py-3 rounded-md font-semibold hover:bg-[#ffc93c] transition duration-300"
                >
                  READ MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647]">
              Our Achievements
            </h2>
            <div className="h-1 w-20 bg-[#FFB800] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFB800] mb-2">500+</div>
              <p className="text-[#0A2647]">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFB800] mb-2">15+</div>
              <p className="text-[#0A2647]">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFB800] mb-2">250+</div>
              <p className="text-[#0A2647]">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#FFB800] mb-2">98%</div>
              <p className="text-[#0A2647]">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647]">
              Why Choose Us
            </h2>
            <div className="h-1 w-20 bg-[#FFB800] mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#0A2647"
                    strokeWidth="2"
                    strokeDasharray="85, 100"
                    strokeLinecap="round"
                  />
                  <text
                    x="18"
                    y="18"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#0A2647"
                    fontSize="8"
                    fontWeight="bold"
                    style={{
                      transform: "rotate(90deg)",
                      transformOrigin: "center",
                    }}
                  >
                    85%
                  </text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2647]">
                Trusted Expertise
              </h3>
              <p className="text-gray-600 mt-2">
                Industry-leading knowledge and experience
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#0A2647"
                    strokeWidth="2"
                    strokeDasharray="90, 100"
                    strokeLinecap="round"
                  />
                  <text
                    x="18"
                    y="18"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#0A2647"
                    fontSize="8"
                    fontWeight="bold"
                    style={{
                      transform: "rotate(90deg)",
                      transformOrigin: "center",
                    }}
                  >
                    90%
                  </text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2647]">
                Unmatched Precision
              </h3>
              <p className="text-gray-600 mt-2">Attention to every detail</p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#0A2647"
                    strokeWidth="2"
                    strokeDasharray="95, 100"
                    strokeLinecap="round"
                  />
                  <text
                    x="18"
                    y="18"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#0A2647"
                    fontSize="8"
                    fontWeight="bold"
                    style={{
                      transform: "rotate(90deg)",
                      transformOrigin: "center",
                    }}
                  >
                    95%
                  </text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2647]">
                Customer-Centric
              </h3>
              <p className="text-gray-600 mt-2">
                Your satisfaction is our priority
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9155"
                    fill="none"
                    stroke="#0A2647"
                    strokeWidth="2"
                    strokeDasharray="88, 100"
                    strokeLinecap="round"
                  />
                  <text
                    x="18"
                    y="18"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#0A2647"
                    fontSize="8"
                    fontWeight="bold"
                    style={{
                      transform: "rotate(90deg)",
                      transformOrigin: "center",
                    }}
                  >
                    88%
                  </text>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A2647]">
                Proven Reliability
              </h3>
              <p className="text-gray-600 mt-2">Consistent quality delivery</p>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
}
