const gradientText = ({ children }: any) => {
  return <span className="bg-gradient-to-tr from-secondaryColor via-primaryColor to-secondaryColor bg-clip-text text-transparent">{children}</span>;
};

export default gradientText;
