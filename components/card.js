const Card = ({ icon, title, description }) => (
  <div className={`text-center p-6 shadow-lg bg-gray-50 rounded-lg`}>
    <div className={`text-[#FFB800]  mb-6`}>
      <i className={`fas ${icon} text-5xl`}></i>
    </div>
    <h3 className="text-xl font-bold text-[#0A2647] mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;
