import Caution from "./Caution"

export default function HeroSection(props){
    return (
        <>
        <Caution />
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image container */}
            <img 
                src="/backgroundImage.jpg"
                alt="Background Image"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Enhanced Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-purple-900/20 to-black/90 z-10"></div>
            
            {/* Ecell Logo - more refined positioning */}
            <div className="absolute top-8 left-0 right-0 text-center z-20">
                <img src="/EcellLogo.png" alt="Ecell Logo" className="w-24 h-24 lg:w-32 lg:h-32 mx-auto object-contain opacity-90"/>
            </div>
            
            <div className="relative w-full h-screen flex flex-col items-center justify-center z-20"> 
                {/* Main Title - more elegant spacing */}
                <div className="text-center mb-8 animate-slide-up">
                    <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl animated-gradient-text mb-4">
                        TEAM E-CELL
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
                </div>

                {/* Subtitle - cleaner design */}
                <div className="text-center animate-slide-up">
                    <h2 className="text-white font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 tracking-wide">
                        IIT HYDERABAD
                    </h2>
                    
                    {/* Motto - more sophisticated layout */}
                    <div className="flex items-center justify-center space-x-8 text-white/80">
                        <span className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest hover:text-purple-400 transition-colors duration-300">THINK</span>
                        <div className="w-px h-8 bg-white/30"></div>
                        <span className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest hover:text-purple-400 transition-colors duration-300">BUILD</span>
                        <div className="w-px h-8 bg-white/30"></div>
                        <span className="text-xl md:text-2xl lg:text-3xl font-light tracking-widest hover:text-purple-400 transition-colors duration-300">INSPIRE</span>
                    </div>
                </div>
            </div>

            {/* Subtle animated particles effect */}
            <div className="absolute inset-0 z-15">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            </div>
        </section>
        </>
    )
}