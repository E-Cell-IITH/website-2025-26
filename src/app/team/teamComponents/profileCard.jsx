"use client";

import { useState } from "react";
import Image from "next/image";


export default function ProfileCard({
    name,  
    photoSrc, 
    gmailAddress,
    linkedinURL,
}){

    const [showOverlay, setShowOverlay] = useState(false);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay)
    }
    
    return (
        <div className="flex flex-col items-center text-center">
            
            <div 
                className="relative w-48 h-64 overflow-hidden rounded-md"
                onMouseEnter={()=>setShowOverlay(true)}
                onMouseLeave={()=>setShowOverlay(false)}
                onClick={toggleOverlay} // tap for mobile
            >
                {/* Photo */}
                <Image
                    src={photoSrc}
                    alt={name}
                    fill
                    className={`object-cover transition-opacity duration-300 ${
                        showOverlay ? "opacity-0" : "backdrop-opacity-100"
                    }`}
                
                />
                {/* Overlay (The back of the card) */}
                <div className={`absolute inset-0 bg-blue-500 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    showOverlay ? "opacity-100" : "opacity-0"
                }`}>
                    <a href={`mailto:${gmailAddress}`} target="_blank" rel="noopener noreferrer">
                        <Image src="/gmailLogo.webp" alt="Gmail" width={40} height={40} />
                    </a>
                    <a  href={linkedinURL} target="_blank" rel="noopener noreferrer">
                        <Image src="/linkedinLogo.webp" alt="LinkedIn" width={40} height={40}/>
                    </a>
                </div>
            </div> 
            <h3 className="mt-4 text-lg font-bold" >{name}</h3> 
        </div>
    )
}