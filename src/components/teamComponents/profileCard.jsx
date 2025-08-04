export default function ProfileCard({
  name,
  photoSrc,
  gmailAddress,
  linkedinURL,
  large = false
}) {
  return (
    <div className="group relative flex flex-col items-center text-center p-6 rounded-xl ">
      {/* Subtle glow effect */}
      <div className="absolute inset-0" />

      {/* Photo with contact icons */}
      <div className="relative mb-4 z-10">
        <div className={`rounded-xl overflow-hidden bg-gray-800/50 mx-auto ring-2 ring-gray-800/50 group-hover:ring-purple-500/30 transition-all duration-300 ${large ? "w-32 h-32 lg:w-44 lg:h-44" : "w-28 h-28 lg:w-36 lg:h-36"
          }`}>
          <img
            src={photoSrc}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Enhanced contact icons */}
        <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex flex-col space-y-2">
            <a
              href={`mailto:${gmailAddress}`}
              className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-400 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-red-500/25"
              title={gmailAddress}
              aria-label={`Email ${name}`}
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a
              href={linkedinURL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 hover:scale-110 transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              title="LinkedIn Profile"
              aria-label={`View ${name}'s LinkedIn profile`}
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced name with better typography */}
      <div className="z-10">
        <h3 className={`font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 whitespace-nowrap ${large ? "text-lg lg:text-xl" : "text-base lg:text-lg"
          }`}>
          {name}
        </h3>

        {/* Subtle accent line */}
        <div className="mt-2 w-8 h-0.5 bg-gray-700 rounded-full mx-auto group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:w-12 transition-all duration-300" />
      </div>
    </div>
  );
}

// Demo component to showcase the ProfileCard
function ProfileCardDemo() {
  const profiles = [
    {
      name: "Alex Johnson",
      photoSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      gmailAddress: "alex.johnson@gmail.com",
      linkedinURL: "https://linkedin.com/in/alexjohnson",
      large: false
    },
    {
      name: "Sarah Chen",
      photoSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=400&h=400&fit=crop&crop=face",
      gmailAddress: "sarah.chen@gmail.com",
      linkedinURL: "https://linkedin.com/in/sarahchen",
      large: true
    },
    {
      name: "Michael Rodriguez",
      photoSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      gmailAddress: "michael.rodriguez@gmail.com",
      linkedinURL: "https://linkedin.com/in/michaelrodriguez",
      large: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-12">
          Enhanced Profile Cards
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
    </div>
  );
}