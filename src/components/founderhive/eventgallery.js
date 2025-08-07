import AnimatedSection from "../homeComponents/animatedSection";

export default function EventGallery( {galleryImages}) {

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
            className="overflow-hidden rounded-xl border border-purple-200 bg-purple-900/10 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:border-purple-400"
          >
            <img
              src={image.founders_hive_image?.url}
              alt="founders hive image"
              className="w-full h-60 object-cover rounded-xl transition duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Stats Section */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-300 mb-2">2</div>
                  <div className="text-gray-400">Cities Covered</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-300 mb-2">24</div>
                  <div className="text-gray-400">Total Participants</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-300 mb-2">100%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
              </div>

    </AnimatedSection>
  );
}
