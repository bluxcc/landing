type Partner = {
  logo: string;
  name: string;
  url: string;
};

const partners: Partner[] = [
  { logo: 'blux.svg', name: 'Blux Partner 1', url: 'https://partner1.com' },
  { logo: 'blux.svg', name: 'Blux Partner 2', url: 'https://partner2.com' },
  { logo: 'blux.svg', name: 'Blux Partner 3', url: 'https://partner3.com' },
  { logo: 'blux.svg', name: 'Blux Partner 4', url: 'https://partner4.com' },
];

const Partners = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1146px] mx-auto sm:my-[143px] my-25 px-4">
      <div className="text-primary text-center flex flex-col justify-center items-center space-y-4 max-w-[681px]">
        <h2 className="text-2xl lg:text-[40px] font-medium text-center leading-[41px] max-w-[458px] uppercase">
          Connected Projects & Partners
        </h2>
        <p className="text-sm sm:text-base font-medium">
          Discover key projects integrated with Blux and meet the trusted
          partners
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-[72px] w-full">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <img
              src={partner.logo}
              alt={`${partner.name} logo`}
              className="max-h-[74px] max-w-[185px] w-auto h-auto object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;
