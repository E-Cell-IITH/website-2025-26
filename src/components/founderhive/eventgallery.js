// export default function EventGallery() {
//   const galleryImages = [
//     { src: null, alt: "Image 1" },
//     { src: null, alt: "Image 2" },
//     { src: null, alt: "Image 3" },
//     { src: null, alt: "Image 4" },
//     { src: null, alt: "Image 5" },
//     { src: null, alt: "Image 6" },
//     { src: null, alt: "Image 7" },
//     { src: null, alt: "Image 8" },
//   ];

//   return (
//     <section className=" text-white px-4 py-20 space-y-16">
//       {/* Title */}
//       <div className="text-center space-y-4">
//         <h2 className="text-4xl md:text-5xl font-bold">Event Gallery</h2>
//         <p className="text-lg md:text-xl text-purple-200">
//           Capturing moments of innovation, collaboration, and entrepreneurial spirit from our Founders Hive sessions
//         </p>
//       </div>

//       {/* Gallery Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//         {galleryImages.map((image, idx) => (
//           <div
//             key={idx}
//             className="overflow-hidden rounded-xl border border-purple-700 bg-purple-900/10 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:border-purple-400"
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-60 object-cover rounded-xl transition duration-300 hover:scale-110"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Combined Stats Section */}
//       {/* Clean Stats Section - NOT like image cards */}
// <div className="max-w-4xl mx-auto text-center mt-12">
//   <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-purple-300 text-sm md:text-base font-medium">
//     <div className="flex flex-col items-center">
//       <span className="text-2xl md:text-3xl font-bold text-purple-100">2</span>
//       <span>Cities Covered</span>
//     </div>
//     <div className="w-px h-6 bg-purple-700 hidden md:block"></div>
//     <div className="flex flex-col items-center">
//       <span className="text-2xl md:text-3xl font-bold text-purple-100">24</span>
//       <span>Participants</span>
//     </div>
//     <div className="w-px h-6 bg-purple-700 hidden md:block"></div>
//     <div className="flex flex-col items-center">
//       <span className="text-2xl md:text-3xl font-bold text-purple-100">100%</span>
//       <span>Success Rate</span>
//     </div>
//   </div>
// </div>

//     </section>
//   );
// }
import AnimatedSection from "../homeComponents/animatedSection";

export default function EventGallery() {
  const galleryImages = [
    { src: null, alt: "Image 1" },
    { src: null, alt: "Image 2" },
    { src: null, alt: "Image 3" },
    { src: null, alt: "Image 4" },
    { src: null, alt: "Image 5" },
    { src: null, alt: "Image 6" },
    { src: null, alt: "Image 7" },
    { src: null, alt: "Image 8" },
  ];

  return (
    <AnimatedSection className="text-white px-4 py-20 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Event Gallery</h2>
        <p className="text-lg md:text-xl text-purple-200">
          Capturing moments of innovation, collaboration, and entrepreneurial spirit from our Founders Hive sessions
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {galleryImages.map((image, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl border border-purple-700 bg-purple-900/10 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:border-purple-400"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-60 object-cover rounded-xl transition duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-purple-300 text-sm md:text-base font-medium">
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-purple-100">2</span>
            <span>Cities Covered</span>
          </div>
          <div className="w-px h-6 bg-purple-700 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-purple-100">24</span>
            <span>Participants</span>
          </div>
          <div className="w-px h-6 bg-purple-700 hidden md:block"></div>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-purple-100">100%</span>
            <span>Success Rate</span>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
