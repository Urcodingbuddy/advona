"use client";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white/5 h-full lg:h-[100vh] flex items-center text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6 col-span-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center space-x-4">
            <div>
              <Link href="/">
                <img
                  src="./advona-logo.png"
                  alt="cleven.studio"
                  className="h-12 object-cover cursor-pointer"
                />
              </Link>
            </div>
            <span className="text-xl font-bold">Advona.co</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed font-medium">
            Cleven.studio is the go-to platform for startups and businesses
            looking for affordable, high-quality web solutions. With seamless
            development, and powerful management tools, we help you build,
            optimize, and scale your online presence effortlessly.
          </p>
          {/*add Social media handles here*/}
          <div className="flex items-center space-x-6 pt-2"></div>
        </div>

        {/* Product Links */}
        <div className="space-y-6 mt-5">
          <h3 className="text-sm font-semibold tracking-wider">SERVICES</h3>
          <ul className="space-y-4">
            {[
              {
                name: "Web design",
                link: "/pricing/web-design",
              },
              {
                name: "Core-paid-marketing",
                link: "/pricing/core-paid-marketing",
              },
              {
                name: "Email Outreach",
                link: "/pricing/email-outreach",
              },
              {
                name: "Minimum Viable Product (MVP)",
                link: "/pricing/minimum-viable-product",
              },
              {
                name: "User generated Content",
                link: "/pricing/user-generated-content",
              },
              {
                name: "High‑End Strategic Services",
                link: "/pricing/high-end-strategic-services",
              },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div className="space-y-4 mt-5">
          <h3 className="text-sm font-semibold tracking-wider">SUPPORT</h3>
          <ul className="space-y-4">
            {[
              { name: "Help", link: "/help-center" },
              { name: "Live Chat", link: "/support#live-chat" },
              { name: "Open a Ticket", link: "/support#ticket" },
              { name: "Discord", link: "https://discord.gg/HTNRQje84w" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More From Cleven.Studio & Company Links */}
        <div className="space-y-8 sm:space-y-12 mt-5">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider">
              MORE FROM ADVONA.CO
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", link: "/about" },
                { name: "Website Design", link: "/services#website-design" },
                { name: "Website Templates", link: "/services#templates" },
                { name: "eCommerce Website", link: "/services#ecommerce" },
                {
                  name: "Appointment Scheduling",
                  link: "/services#scheduling",
                },
                { name: "Portfolio Website", link: "/services#portfolio" },
                { name: "Blog Website", link: "/services#blog" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.link}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wider">LEGAL</h3>
            <ul className="space-y-4">
              {[
                { name: "Terms & Conditions", link: "/legal#terms" },
                {
                  name: "Privacy Policy",
                  link: "https://drive.google.com/file/d/1guVWNChCtbX8kR9W2QZyLotlsCC8G9c7/view?usp=sharing",
                },
                {
                  name: "Refund Policy",
                  link: "https://drive.google.com/file/d/1mHTZbWokxAxX_hWdJh6cruuGgNow00El/view?usp=sharing",
                },
                {
                  name: "advona.co@gmail.com",
                  link: "mailto:advona.co@gmail.com",
                },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.link}
                    target="_blank"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
