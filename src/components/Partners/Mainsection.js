export default function MainSection() {
  return (
    <>
      <br />
      <br />
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <img
          src="/backgroundImage.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black z-10" />

        {/* Ecell Logo */}
        <div className="absolute top-[0.5vh] left-0 right-0 text-center p-4 z-20">
          <img
            src="/EcellLogo.png"
            alt="Ecell Logo"
            className="w-[12vw] h-[12vh] object-contain"
          />
        </div>

        <div className="relative w-full h-screen">
          {/* Main Heading - Always show "COLLABORATIONS" */}
          <div className="absolute top-[40%] left-0 right-0 text-center p-4 pt-2 z-20 animate-slide-up">
            <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl animated-gradient-text">
              COLLABORATIONS
            </h1>
          </div>

          {/* Subheading - "2024-2025" with gradient */}
          <div className="absolute top-[60%] left-0 right-0 text-center p-4 pt-2 z-20 animate-slide-up">
            <h2 className="font-bold text-4xl sm:text-4xl md:text-5xl lg:text-7xl animated-gradient-text">
              2024-2025
            </h2>
            <div className="flex flex-row justify-center mt-[10vh] flex-wrap gap-x-4">
              <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl">
                THINK
              </span>
              <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl">
                | BUILD
              </span>
              <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl">
                | INSPIRE
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
