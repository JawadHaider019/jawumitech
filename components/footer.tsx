import Link from "next/link"
import Image from "next/image"
import {  ArrowRight } from "lucide-react"
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaTiktok,
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt 
} from "react-icons/fa"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialPlatforms = [
    
    // { 
    //   key: 'instagram', 
    //   icon: FaInstagram, 
    //   color: "hover:bg-pink-600",
    //   label: "Instagram",
    //   url: "#"
    // },
    // { 
    //   key: 'tiktok', 
    //   icon: FaTiktok, 
    //   color: "hover:bg-black",
    //   label: "TikTok",
    //   url: "#"
    // },
    { 
      key: 'whatsapp', 
      icon: FaWhatsapp, 
      color: "hover:bg-green-600",
      label: "WhatsApp",
      url: "https://wa.me/923291927168"
    }
  ]

  return (
    <footer className="bg-black border-t-1  text-white  mt-20 shadow-2xl">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2 group">
                <Image 
                  src="/logojt.png" 
                  alt="JawumiTech Logo" 
                  width={150} 
                  height={70}  
                  className="w-auto h-12 object-contain"  
                  priority
                />
              </Link>
            </div>
          
            <p className="text-gray-300 text-sm leading-relaxed">
              Turning ideas into digital reality. We build fast, scalable web and mobile solutions 
              with stunning design and ongoing support, tailored to your vision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white border-b border-[#ADF802] pb-2 inline-block">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Software Development'].map((item) => (
                <li key={item}>
                  <Link 
                    href="/services" 
                    className="text-gray-300 hover:text-[#ADF802] transition-all duration-300 hover:translate-x-2 block py-1"
                  >
                    {item.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white border-b border-[#ADF802] pb-2 inline-block">
              CONTACT US
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-[#ADF802] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaPhone className="text-black w-3" />
                </div>
                <span className="group-hover:text-[#ADF802] transition-colors">
                  +92 329 1927168
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-[#ADF802] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaEnvelope className="text-black w-3" />
                </div>
                <span className="group-hover:text-[#ADF802] transition-colors">
                  support@jawumitech.com
                </span>
              </div>
             
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white border-b border-[#ADF802] pb-2 inline-block">
              FOLLOW US
            </h3>
            {/* <div className="flex space-x-3">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.key}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-[#ADF802] ${platform.color} text-black hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg border border-[#ADF802]`}
                  aria-label={platform.label}
                  title={`Follow us on ${platform.label}`}
                >
                  <platform.icon size={18} />
                </a>
              ))}
            </div> */}
            <div>
                  <a
              href="https://wa.me/923291927168"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-35 px-4 py-3 bg-[#ADF802] group-hover:translate-x-1 transition-transform  text-black font-semibold rounded-full text-center mt-4"
            >
              Lets Talk
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Stay connected for tech updates and project insights
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} JawumiTech. All rights reserved.
            </p>
            <div className="text-gray-400 text-sm">
              Developed by{" "}
              <span className="text-[#ADF802] font-medium">
                Jawad Haider
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}