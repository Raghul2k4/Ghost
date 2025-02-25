import { RiSecurePaymentLine } from "react-icons/ri";
import { MdVpnKey } from "react-icons/md";

const ServiceCard = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 tracking-tight leading-tight">
          Our Premium Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-green-600">
            <div className="flex flex-col items-center">
              <RiSecurePaymentLine className="text-6xl mb-6 text-green-400" />
              <h3 className="text-xl font-semibold mb-4">Secure Payment Gateway</h3>
              <p className="text-center text-gray-300">
                End-to-end encryption with trusted providers (PayPal, Stripe, crypto, etc.) to prevent fraud.
              </p>
            </div>
          </div>
          <div className="group bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-green-600">
            <div className="flex flex-col items-center">
              <MdVpnKey className="text-6xl mb-6 text-green-400" />
              <h3 className="text-xl font-semibold mb-4">Authentic Game Keys</h3>
              <p className="text-center text-gray-300">
                Verified publishers and anti-scam measures to ensure every purchase is legit.
              </p>
            </div>
          </div>
          <div className="group bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-3xl shadow-2xl transition-transform transform hover:scale-105 hover:shadow-green-600">
            <div className="flex flex-col items-center">
              <RiSecurePaymentLine className="text-6xl mb-6 text-green-400" />
              <h3 className="text-xl font-semibold mb-4">Buyer Protection & Refund Policy</h3>
              <p className="text-center text-gray-300">
                Clear refund policies and customer support to handle disputes and ensure fair transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;