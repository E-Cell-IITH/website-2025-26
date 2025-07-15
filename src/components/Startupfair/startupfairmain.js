export default function Startupfairmain() {
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
          <div className="absolute top-[40%] left-0 right-0 text-center p-4 pt-2 z-20 animate-slide-up">
            <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl animated-gradient-text">
             COMING SOON
            </h1>
          </div>

         
        </div>
      </section>
    </>
  );
}
