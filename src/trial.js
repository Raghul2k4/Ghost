import { RiSecurePaymentLine } from "react-icons/ri";

const ServiceCard = () => {
  return (
    <div className=" p-10 m-9 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
      <div className="flex flex-col md:flex-row gap-4 shadow-md">
        <div className="shadow-md shadow-slate-50 border border-white p-4 rounded-lg flex flex-col items-center">
          <RiSecurePaymentLine className="text-4xl mb-2" />
          <h3 className="text-lg font-semibold mb-2">Secure Payment Gateway</h3>
          <p className="text-center">
            End-to-end encryption with trusted providers (PayPal, Stripe, crypto, etc.) to prevent fraud.
          </p>
        </div>
        <div className="shadow-md shadow-slate-50 border border-white p-4 rounded-lg flex flex-col items-center">
          <RiSecurePaymentLine className="text-4xl mb-2" />
          <h3 className="text-lg font-semibold mb-2">Authentic Game Keys</h3>
          <p className="text-center">
            Verified publishers and anti-scam measures to ensure every purchase is legit.
          </p>
        </div>
        <div className="shadow-md shadow-white border border-white p-4 rounded-lg flex flex-col items-center">
          <RiSecurePaymentLine className="text-4xl mb-2" />
          <h3 className="text-lg font-semibold mb-2">Buyer Protection & Refund Policy</h3>
          <p className="text-center">
            Clear refund policies and customer support to handle disputes and ensure fair transactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;