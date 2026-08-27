import xLogo from '/XLogo.svg';
import discordLogo from '/discordLogo.svg';
import bluxLogo from '/blux.svg';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Demo', href: 'https://demo.blux.cc' },
      { label: 'Dashboard', href: 'https://dashboard.blux.cc' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'GitHub', href: 'https://github.com/bluxcc' },
      {
        label: 'Core Package',
        href: 'https://www.npmjs.com/package/@bluxcc/core',
      },
      {
        label: 'React Package',
        href: 'https://www.npmjs.com/package/@bluxcc/react',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Docs', href: 'https://docs.blux.cc' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'X', href: 'https://x.com/bluxofficial' },
      { label: 'Discord', href: 'https://discord.gg/PyDjPnWUYC' },
      { label: 'Support', href: 'mailto:support@blux.cc' },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#F2F2F2] text-primary flex justify-center px-6 md:px-20 py-[63px]">
        <div className="max-w-[1280px] short:max-w-[1210px] w-full flex flex-wrap justify-between gap-12">
          <div className="max-w-[250px] md:max-w-[310px] space-y-6">
            <img
              draggable={false}
              src={bluxLogo}
              alt="Blux logo"
              className="max-h-[41px] md:max-h-[67px] w-auto h-auto object-contain"
            />
            <p className="text-xs md:text-lg leading-relaxed cursor-default">
              Open-source authentication and wallet infrastructure for Stellar
              applications
            </p>
            <div className="flex gap-2.5">
              <a
                className="size-12 tablet:size-8 mobile:size-10 border border-[#CDCEEE] center hover:bg-[#E5E5E5] transition-colors duration-300"
                href="https://x.com/bluxofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blux on X"
              >
                <img
                  draggable={false}
                  src={xLogo}
                  alt="X logo"
                  height={24}
                  width={24}
                />
              </a>
              <a
                className="size-12 tablet:size-8 mobile:size-10 border border-[#CDCEEE] center hover:bg-[#E5E5E5] transition-colors duration-300"
                href="https://discord.gg/PyDjPnWUYC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blux on Discord"
              >
                <img
                  draggable={false}
                  src={discordLogo}
                  alt="Discord logo"
                  height={24}
                  width={24}
                />
              </a>
            </div>
          </div>
          <div className="md:mr-25">
            <nav
              className="flex flex-1 justify-between flex-wrap space-y-10 md:space-y-0 md:gap-[40px] text-sm"
              aria-label="Footer Navigation"
            >
              {footerLinks.map(({ title, links }) => (
                <div key={title}>
                  <p className="!font-bold mb-2 cursor-default">{title}</p>
                  <ul>
                    {links.map(({ label, href }) => (
                      <li
                        key={label}
                        className="h-8 min-w-[130px] md:h-11 flex justify-start items-center"
                      >
                        <a
                          href={href}
                          target={
                            href.startsWith('http') ? '_blank' : undefined
                          }
                          rel={
                            href.startsWith('http')
                              ? 'noopener noreferrer'
                              : undefined
                          }
                          className="hover:underline"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      <div className="max-w-[1280px] tablet:px-10 short:max-w-[1210px] mobile:flex-col mobile:my-4 mobile:items-start mx-auto h-[70px] flex justify-between items-center w-full text-[#4D4D4D] tablet:text-xs text-base mobile:justify-end px-6 md:px-0">
        <p>The Future of Stellar Applications Starts Here.</p>
        <p>© 2026 Blux</p>
      </div>
    </>
  );
};

export default Footer;
