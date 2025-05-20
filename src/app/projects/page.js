import React from "react";
import Image from "next/image";
import ContactUs from "@/components/contact/ContactUs";
import GalleryHeader from "@/public/images/gallery-header.jpg";
import InfraImage1 from "@/public/images/gallery/gallery1.jpg";
import InfraImage2 from "@/public/images/gallery/gallery2.png";
import InfraImage3 from "@/public/images/gallery/gallery3.jpeg";
import InfraImage4 from "@/public/images/gallery/gallery4.jpg";
import InfraImage5 from "@/public/images/gallery/gallery5.jpg";
import InfraImage6 from "@/public/images/gallery/gallery6.jpg";
import InfraImage7 from "@/public/images/gallery/gallery7.png";
import InfraImage8 from "@/public/images/gallery/gallery8.png";
import InfraImage9 from "@/public/images/gallery/gallery9.jpg";
import InfraImage10 from "@/public/images/gallery/gallery10.jpeg";
import InfraImage11 from "@/public/images/gallery/gallery11.jpeg";
import InfraImage12 from "@/public/images/gallery/gallery12.jpeg";
import InfraImage13 from "@/public/images/gallery/gallery13.jpeg";

function ProjectsPage() {
  const images = [
    { id: 11, src: InfraImage11 },

    { id: 1, src: InfraImage1 },
    { id: 2, src: InfraImage2 },
    { id: 3, src: InfraImage3 },
    { id: 4, src: InfraImage4 },
    { id: 12, src: InfraImage12 },
    { id: 13, src: InfraImage13 },
    { id: 5, src: InfraImage5 },
    { id: 6, src: InfraImage6 },
    { id: 10, src: InfraImage10 },
    { id: 7, src: InfraImage7 },
    { id: 8, src: InfraImage8 },
    { id: 9, src: InfraImage9 },
  ];

  return (
    <>
      <div className="min-h-screen font-roboto">
        <div className="relative h-[60vh]">
          <div className="absolute inset-0">
            <Image
              src={GalleryHeader}
              alt="Road construction site"
              fill
              objectFit="cover"
              placeholder="blur"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Project Gallery
              </h1>
              <p className="text-xl md:text-2xl font-bold">
                Showcasing Our Construction Excellence
              </p>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-[1960px] p-4">
          <div className="text-center m-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647]">
              Explore AlphaaRoad
            </h2>
            <div className="h-1 w-20 bg-[#FFB800] mx-auto mt-4"></div>
          </div>
          <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
            {images.map(({ id, src }) => (
              <div
                key={id}
                className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
              >
                <Image
                  alt={`Gallery image ${id}`}
                  className="transform rounded-lg brightness-90 transition will-change-auto hover:brightness-110"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  placeholder="blur"
                  src={src}
                  width={720}
                  height={480}
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                />
              </div>
            ))}
          </div>
        </main>
        <ContactUs />
      </div>
    </>
  );
}

export default ProjectsPage;
