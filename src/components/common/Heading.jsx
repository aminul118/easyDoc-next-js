const Heading = ({ heading, description }) => {
  return (
    <div className="text-center space-y-2 py-8 max-w-3xl mx-auto ">
      <h1 className="text-4xl lg:text-5xl font-bold">{heading}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Heading;
