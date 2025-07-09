export default function HeroSection(){
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
            <div className="absolute inset-0 bg-gradient-to-br from-black/90   to-black opacity-100 z-10"></div>
            
            {/* Ecell Logo */}
            <div className="absolute top-[0.5vh] left-0 right-0 text-center p-4 z-20">
                <img src="/EcellLogo.png" alt="Ecell Logo" className="w-[12vw] h-[12    vh] object-contain"/>
            </div>
            <div className="relative w-full h-screen"> 
            {/* Ecell Text */}
            <div className="absolute top-[40%] left-0 right-0 text-center p-4 pt-2 z-20 animate-slide-up">
                <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-8xl hidden lg:block animated-gradient-text">
                ENTREPRENEURSHIP CELL
                </h1>
                <h1 className="text-white font-bold text-7xl md:text-6xl lg:hidden animated-gradient-text">
                E-Cell
                </h1>
            </div>

            {/* IIT H Text */}
            <div className="absolute top-[60%] left-0 right-0 text-center p-4 pt-2 z-20 animate-slide-up">
                <h2 className="text-white font-bold text-4xl sm:text-4xl md:text-5xl lg:text-7xl">IIT HYDERABAD</h2>
                <div className="flex flex-row justify-center mt-[10vh]">
                <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl">THINK</span>
                <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl pl-4">| BUILD</span>
                <span className="text-white font-extralight text-2xl sm:text-xl md:text-3xl lg:text-4xl pl-4">| INSPIRE</span>
                </div>
            </div>


            </div>
        </section>
    </>
    )
}