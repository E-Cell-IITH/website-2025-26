import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-[#2c003e] text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/partners" className="hover:underline">Collaborations</Link>
            </li>
            <li>
              <Link href="/team" className="hover:underline">Team</Link>
            </li>
            <li>
              <Link href="/esummit" className="hover:underline">E-Summit</Link>
            </li>
          </ul>
        </div>

        {/* Center: Logo, Tagline, Socials */}
        <div className="flex flex-col items-center text-center">
          {/* LOGO */}
          <div className="mb-4">
            <Image
              src="/EcellLogo.png" // <-- Replace with your logo path
              alt="E-Cell IIT Hyderabad"
              width={150}
              height={150}
            />
          </div>

          <p className="text-lg font-semibold mb-4">THINK | BUILD | INSPIRE</p>

          <div className="flex gap-4">
            <Link href="https://www.instagram.com/ecell_iith/?hl=en" aria-label="Instagram">
              <Image
                src="/instagram.webp" // <-- Replace with your icon path
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.linkedin.com/company/ecell-iith/posts/?feedView=all" aria-label="LinkedIn">
              <Image
                src="/linkedinLogo.webp"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://x.com/ecell_iith?lang=en" aria-label="Twitter">
              <Image
                src="/twitterLogo.webp"
                alt="Twitter"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.facebook.com/ecell.iithyd/" aria-label="Facebook">
              <Image
                src="/facebookLogo.webp"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.youtube.com/user/ecelliithyderabad" aria-label="YouTube">
              <Image
                src="/youtubeLogo.webp"
                alt="YouTube"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact us</h2>
          <p className="mb-2">
            E-Cell Office C-714, Academic block C, IIT Hyderabad
          </p>
          <p className="mb-2">ecell@campus.iith.ac.in</p>
          <p className="mb-4">web.ecell@campus.iith.ac.in</p>
          <ul className="space-y-1">
          <li>(+91) 62030 42129</li>
          <p>For sponsorship inquiries, please reach out to Shikar Kansal at [your contact details / sponsorship email].</p>
          </ul>
        </div>

      </div>
    </footer>
  );
}
