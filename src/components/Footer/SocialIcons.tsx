import { Facebook, Instagram, Twitter } from 'lucide-react';

export function SocialIcons() {
  return (
    <div className="flex gap-4">
      <a
        href="#"
        className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
      >
        <Facebook className="h-5 w-5" />
      </a>
      <a
        href="#"
        className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
      >
        <Twitter className="h-5 w-5" />
      </a>
      <a
        href="#"
        className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-900"
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
}
