export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-900/55 to-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Quick Links */}
        <div className="ml-[5vw]">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Collaborations</a></li>
            <li><a href="#" className="hover:underline">Team</a></li>
            <li><a href="#" className="hover:underline">CA Programme</a></li>
            <li><a href="#" className="hover:underline">E-Summit</a></li>
          </ul>
        </div>

        {/* Logo & Socials */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {/* Replace with your logo image if needed */}
            <div className="text-4xl font-bold">E</div>
            <div className="text-sm">E-Cell IIT Hyderabad</div>
          </div>
          <p className="mb-4 tracking-widest">THINK | BUILD | INSPIRE</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-youtube text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact us</h3>
          <p className="mb-2">E-Cell Office C-714, Academic block C, IIT Hyderabad</p>
          <p className="mb-2">ecell@campus.iith.ac.in<br />web.ecell@campus.iith.ac.in</p>
          <ul className="space-y-1">
            <li>(+91)95884 78947</li>
            <li>(+91)90283 18842</li>
            <li>(+91)62030 42129</li>
            <li>(+91)90050 58666</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
