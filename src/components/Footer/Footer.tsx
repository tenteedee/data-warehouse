import { Mail, Phone } from 'lucide-react';
import { FooterLinks } from './FooterLinks';
import { SocialIcons } from './SocialIcons';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <img src="img/logo.svg" className="w-[49px] h-[35px]" />
              <span className="text-xl font-semibold">DataWarehouse</span>
            </div>
            <address className="mt-6 space-y-3 not-italic">
              <p className="text-sm text-gray-600">
                Warehouse Society, 234
                <br />
                Bahagia Ave Street PRBW 29281
              </p>
              <a
                href="mailto:info@warehouse.project"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-4 w-4" />
                info@warehouse.project
              </a>
              <a
                href="tel:1-232-3434"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <Phone className="h-4 w-4" />
                1-232-3434 (Main)
              </a>
            </address>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-16 lg:col-span-5">
            <FooterLinks
              title="About"
              links={[
                { label: 'Profile', href: '#' },
                { label: 'Features', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'DW News', href: '#' },
              ]}
            />
            <FooterLinks
              title="Help"
              links={[
                { label: 'Support', href: '#' },
                { label: 'Sign up', href: '#' },
                { label: 'Guide', href: '#' },
                { label: 'Reports', href: '#' },
                { label: 'Q&A', href: '#' },
              ]}
            />
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-sm font-semibold">Social Media</h3>
            <SocialIcons />
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 text-sm text-gray-500">
          <p>© Datawarehouse™, 2020. All rights reserved.</p>
          <p>Company Registration Number: 21479524.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
