import xLogo from '/XLogo.svg';
import discordLogo from '/discordLogo.svg';
import bluxLogo from '/blux.svg';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Docs', href: 'https://docs.blux.cc' },
      { label: 'Demo', href: 'https://demo.blux.cc' },
      { label: 'Dashboard', href: 'https://dashboard.blux.cc' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'GitHub', href: 'https://github.com/bluxcc' },
      { label: 'NPM Package', href: 'https://www.npmjs.com/package/@bluxcc' },
      { label: 'API Reference', href: '/api' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'X', href: 'https://x.com/bluxofficial' },
      { label: 'Discord', href: 'https://discord.gg/PyDjPnWUYC' },
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
              src={bluxLogo}
              alt="Blux logo"
              className="max-h-[41px] md:max-h-[67px] w-auto h-auto object-contain"
            />
            <p className="text-xs md:text-lg leading-relaxed">
              Open-source Wallet infrastructure for Stellar applications
            </p>
            <div className="flex gap-2.5">
              <a
                className="size-12 tablet:size-8 mobile:size-10 border border-[#CDCEEE] center hover:bg-[#E5E5E5] transition-colors duration-300"
                href="https://x.com/bluxofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blux on X"
              >
                <img src={xLogo} alt="X logo" height={24} width={24} />
              </a>
              <a
                className="size-12 tablet:size-8 mobile:size-10 border border-[#CDCEEE] center hover:bg-[#E5E5E5] transition-colors duration-300"
                href="https://discord.gg/PyDjPnWUYC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Blux on Discord"
              >
                <img
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
                  <h3 className="font-semibold mb-2">{title}</h3>
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

      <div className="max-w-[1280px] short:max-w-[1210px] mx-auto h-[70px] flex justify-between items-center w-full text-gray tablet:text-xs text-base mobile:justify-end px-6 md:px-0">
        <p className="mobile:hidden">
          The Future of Stellar Applications Starts Here.
        </p>
        <p>© 2025 Blux</p>
      </div>
    </>
  );
};

export default Footer;
