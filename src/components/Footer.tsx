import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import logo from 'figma:asset/918b477c0df526c77d56e64af98643e2308b399a.png';

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact Us', href: '#contact' },
  ],
  social: [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <img src={logo} alt="Value Kare Group" className="h-14 w-auto mb-4 brightness-0 invert" />
            <p className="text-background/80 mb-4">
              Value Kare Group is an Outsourcing and Consulting services organization specializing in Medical treatment and education, Asset Inventory automation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <div>
                <p className="mb-1">Phone</p>
                <p>+91 9314420245</p>
              </div>
              <div>
                <p className="mb-1">Email</p>
                <p>vikash@valuekare.in</p>
              </div>
              <div>
                <p className="mb-1">Address</p>
                <p>ValueKare Technologies PVT LTD<br />
                Malviya National Institute Of Technology (MNIT) Incubation Center MIIC Start Up Room No 107 Jawahar lal Nehru Marg Malviya nagar Jaipur 302017</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-4 mb-8 pt-8 border-t border-background/10">
          {footerLinks.social.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-background/80">
            ©2025 Value Kare Group. Developed by UWS Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
