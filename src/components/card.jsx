// components/Card.jsx
import Image from "next/image";

export default function Card(props) {
  return (
    <div className="flex flex-col items-center text-center h-full max-w-7xl mx-auto px-4">
      {/* Circle Image */}
      <div className="w-20 h-20 md:w-24 md:h-24 mb-4 relative">
        <Image
          src={props.src}
          alt={props.alt}
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* Outer border */}
      <div className="flex flex-col flex-1 w-full p-[2px] bg-gradient-to-br from-black/2 via-purple-500 to-purple-500 rounded-2xl">
        {/* Inner box */}
        <div className="flex flex-col flex-1 bg-black rounded-2xl p-6 text-white">
          <h3 className="text-lg font-bold mb-2">{props.title}</h3>
          <p className="text-justify leading-relaxed flex-1">{props.text}</p>
        </div>
      </div>
    </div>
  );
}
