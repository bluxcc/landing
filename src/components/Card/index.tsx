const Card = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="border border-[#CDCEEE] w-full h-full overflow-hidden">
      {children}
    </div>
  );
};

export default Card;
