export default function MUNHeroSection() {
    return (
       <>
            <br />
            <br />
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Image container */}
                <img
                    src="/backgroundImage.jpg"
                    alt="Background Image"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black opacity-100 z-10"></div>

                {/* Ecell Logo */}
                {/* <div className="absolute top-[0.5vh] left-0 right-0 text-center p-4 z-20">
                    <img src="/EcellLogo.png" alt="Ecell Logo" className="w-[12vw] h-[12vh] object-contain" />
                </div> */}
                <div className="absolute top-[0.5vh] left-0 right-0 text-center p-4 z-20">
                <img
                    src="/EcellLogo.png"
                    alt="Ecell Logo"
                    style={{
                    width: 'clamp(110px, 12vw, 160px)',
                    height: 'clamp(60px, 12vh, 100px)',
                    objectFit: 'contain',
                    }}
                />
                </div>

                <div className="relative w-full h-screen">
                    {/* Ecell Text */}
                    <div className="absolute top-[40%] left-0 right-0 text-center p-4 pt-2 z-20 animate-slide-up">
                        {/* Only visible on large and above */}
                        <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-8xl hidden lg:block animated-gradient-text">
                            COMING SOON
                        </h1>

                        {/* Shown below lg, fits in one line */}
                        <h1 className="text-white font-bold text-[15vw] sm:text-[30px] md:text-[5vw] lg:hidden whitespace-nowrap animated-gradient-text">
                            COMING <br/>
                            SOON 
                        </h1>
                    </div>

                </div>
            </section>
        </>

    );
}
