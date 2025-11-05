import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#1A1A1A] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mt-[-4] mb-2">
              <Link href="/" className="flex items-center gap-2 group">
                <Image 
                  src="/logojt.png" 
                  alt="JG Logo" 
                  width={180} 
                  height={90}  
                  className="w-auto h-14 object-contain"  
                  priority
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm">
  Turning ideas into digital reality. We build fast, scalable web and mobile solutions with stunning design and ongoing support, tailored to your vision.
</p>

          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-[#ADF802]">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-[#ADF802] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ADF802] transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ADF802] transition-colors">
                  UI/UX Design
                </Link>
              </li>
                <li>
                <Link href="/services" className="hover:text-[#ADF802] transition-colors">
                  POS Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-[#ADF802]">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-[#ADF802] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ADF802] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ADF802] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-[#ADF802]">Contact</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
             <p>jawadhaider@jawumitech.com</p>
             <p>+923291927168</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1A1A1A] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 JawumiTech. All rights reserved.</p>
          <p>Developed by Jawad Haider</p>
        </div>
      </div>
    </footer>
  )
}