export default function ProfileCard({
  name,
  photoSrc,
  gmailAddress,
  linkedinURL,
  large = false
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <img
        src={photoSrc}
        alt={name}
        className={`rounded-full object-cover ${
          large ? "w-40 h-40" : "w-32 h-32"
        }`}
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-400">{gmailAddress}</p>
      <a
        href={linkedinURL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 text-sm hover:underline"
      >
        LinkedIn
      </a>
    </div>
  );
}
