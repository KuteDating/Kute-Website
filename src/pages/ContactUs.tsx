import "../pages/legalPages.css";
import { FaEnvelope, FaMapMarkerAlt, FaPhone , FaHeadset} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="legal-page">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair text-[#5de383] mb-6 text-center">
          Contact Us
        </h1>

        <p className="text-[#bbbbbb] mb-6 text-lg text-center max-w-3xl mx-auto">
          We're here to help. Feel free to reach out to us for support,
          feedback, or inquiries.
        </p>

        <div className="mt-10 space-y-8 text-[#dddddd] text-base">
          <div>
            <h2 className="text-2xl font-semibold text-[#ff6f61] mb-4 flex items-center gap-2">
              <FaHeadset className="text-[#5de383]" /> Support
            </h2>
            <div className="pl-1 space-y-2">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-[#5de383]" />
                <span className="text-[#5de383]">kutedating@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-[#5de383]" />
                <span className="text-[#dddddd]">+91 8910857746</span>
              </p>
              <p className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-[#5de383] mt-1" />
                <span className="text-[#dddddd] leading-relaxed">
                  KP -7F
                  <br />
                  KIIT CAMPUS
                  <br />
                  Near Kafe Delizioso
                  <br />
                  Bhubaneswar, Odisha
                  <br />
                  751024
                </span>
              </p>
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-[#888] text-sm">
          Thank you for being a part of the Kute community!
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
