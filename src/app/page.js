import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Background Image */}
      <Image
        src="/images/background.jpg" // Add this image to your `public` folder
        alt="Road Construction Background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 brightness-50 grayscale"
        priority
      />

      {/* Overlay Content */}
      <main className="z-10 text-center space-y-4 max-w-xl">
        <h1 className="text-3xl sm:text-5xl font-bold">🚧 AlphaaRoad Site is under Construction</h1>
        <p className="text-lg sm:text-xl">
          We're building something great for your roads. Our website is currently under development. Stay tuned!
        </p>
      </main>
    </div>
  );
}
