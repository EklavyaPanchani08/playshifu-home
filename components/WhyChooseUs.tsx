import { FaStar, FaSmile, FaShippingFast, FaCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <FaStar className="w-8 h-8 text-white" />,
      title: "Designed by toys experts",
    },
    {
      icon: <FaSmile className="w-8 h-8 text-white" />,
      title: "Age appropriate",
    },
    {
      icon: <FaShippingFast className="w-8 h-8 text-white" />,
      title: "Free shipping",
    },
    {
      icon: <FaCheckCircle className="w-8 h-8 text-white" />,
      title: "6 months",
    }
  ];

  return (
    <section className="py-16 bg-[#FFF9EA]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-[#FF8A3D] rounded-full p-6 mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-semibold mb-1">{benefit.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;