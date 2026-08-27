import Card from '../../../components/Card';

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

const features = [
  {
    icon: 'users.svg',
    title: 'All Your Stellar Users in One Place',
    description:
      'Track active, new, and total users with clear wallet insights, Blux makes user management effortless.',
    image: 'dashboard.svg',
    imageAlt: 'Dashboard preview',
  },
  {
    icon: 'wallet.svg',
    title: 'Clean & Smooth Wallet Management',
    description:
      'Send, receive, swap, and track your Stellar balances, everything you need in one clean interface.',
    image: 'profile.svg',
    imageAlt: 'Profile preview',
  },
];

const MovingGradient = () => (
  <div
    className="absolute inset-0 rounded-full animate-gradient"
    style={{
      background:
        'linear-gradient(114.6deg, rgba(238, 208, 235, 0.7) -1.17%, rgba(145, 159, 253, 0.7) 102.28%)',
      filter: 'blur(60px)',
    }}
  />
);

const FeatureCard = ({
  icon,
  title,
  description,
  image,
  imageAlt,
}: FeatureCardProps) => (
  <Card>
    <div className="h-full text-primary flex flex-col items-center space-y-4 px-6 sm:px-10 md:px-16 lg:px-20 py-8">
      {/* Header Section */}
      <div className="flex flex-col items-center space-y-3 max-w-[348px] text-center">
        <img
          src={icon}
          alt={`${title} icon`}
          className="size-8"
          draggable={false}
        />
        <h2 className="text-xl md:text-2xl font-semibold md:max-w-[229px] max-w-[171px]">
          {title}
        </h2>
        <p className="text-sm md:text-base">{description}</p>
      </div>

      <div className="relative mt-6 w-full flex justify-center">
        <MovingGradient />
        <div className="relative z-10">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto"
            draggable={false}
          />
        </div>
      </div>
    </div>
  </Card>
);

const Features = () => (
  <div className="grid w-full max-w-[1200px] mx-auto mb-6 gap-6 sm:grid-cols-1 md:grid-cols-2">
    {features.map((feature, index) => (
      <FeatureCard key={index} {...feature} />
    ))}
  </div>
);

export default Features;
