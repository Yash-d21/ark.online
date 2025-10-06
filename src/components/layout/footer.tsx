import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="#" className="flex items-center gap-2 mb-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-sm group-hover:bg-blue-500/30 transition-all duration-300"></div>
                <span className="relative font-headline text-2xl font-bold tracking-tighter text-white group-hover:text-blue-400 transition-colors duration-300">
                  ARK
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <p className="text-gray-400 text-sm">
                Incubated with
              </p>
              <Image 
                src="/images/t-hub-logo-1-1.png" 
                alt="T-Hub Logo" 
                width={60} 
                height={20}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Revolutionizing India's hardware supply chain by connecting retailers, suppliers, and customers through innovative technology solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Home</Link></li>
              <li><Link href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">How it Works</Link></li>
              <li><Link href="#why-ark" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Why ARK</Link></li>
              <li><Link href="#mission" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Mission</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span className="text-sm">ark.hardware.online@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 86880 45970</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} ARK Hardware Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-blue-400 transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-400 transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="hover:text-blue-400 transition-colors duration-300">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
