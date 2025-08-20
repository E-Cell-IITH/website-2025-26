import AnimatedSection from "../homeComponents/animatedSection";
import { ImageOff, AlertCircle } from "lucide-react";

export default function EventGallery({ galleryImages }) {
  // Null check for galleryImages
  const hasImages = galleryImages && Array.isArray(galleryImages) && galleryImages.length > 0;

  return (
    <AnimatedSection className="text-white px-4 py-20 space-y-16">
      {/* Title */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Event Gallery</h2>
        <p className="text-lg md:text-xl text-purple-200">
          Capturing moments of innovation, collaboration, and entrepreneurial spirit from our Founders Hive sessions
        </p>
      </div>

      {/* Conditional Rendering: Gallery Grid or No Data Message */}
      {hasImages ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, idx) => (
            <div
              key={image?.id || idx}
              className="overflow-hidden rounded-xl border border-purple-200 bg-purple-900/10 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:border-purple-400"
            >
              {image?.founders_hive_image?.url ? (
                <img
                  src={image.founders_hive_image.url}
                  alt={image?.founders_hive_image?.alt || "Founders hive event image"}
                  className="w-full h-60 object-cover rounded-xl transition duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : (
                <div className="w-full h-60 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl flex items-center justify-center">
                  <ImageOff className="w-12 h-12 text-purple-400" />
                </div>
              )}
              {/* Fallback for broken images */}
              <div 
                className="w-full h-60 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl flex items-center justify-center hidden"
              >
                <ImageOff className="w-12 h-12 text-purple-400" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* No Data Available Message */
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/60 to-black/50 rounded-3xl border border-purple-500/20 p-8 md:p-12 text-center">
            <AlertCircle className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent mb-4">
              No Gallery Images Available
            </h3>
            <p className="text-lg text-purple-200 mb-6">
              We're building our gallery! Event photos will be available here after our upcoming sessions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-purple-500/10 h-40 flex items-center justify-center"
                >
                  <ImageOff className="w-12 h-12 text-purple-400/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Stats Section - Show conditional stats based on data availability */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20">
          <div className="text-3xl font-bold text-purple-300 mb-2">
            {hasImages ? "2" : "0"}
          </div>
          <div className="text-gray-400">Cities Covered</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20">
          <div className="text-3xl font-bold text-purple-300 mb-2">
            {hasImages ? "24" : "0"}
          </div>
          <div className="text-gray-400">Total Participants</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-black/20 rounded-2xl border border-purple-500/20">
          <div className="text-3xl font-bold text-purple-300 mb-2">
            {hasImages ? "100%" : "0%"}
          </div>
          <div className="text-gray-400">Success Rate</div>
        </div>
      </div>
    </AnimatedSection>
  );
}