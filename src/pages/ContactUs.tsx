import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <div className="bg-gray-900 py-5 lg:pt-10">
        <div className="max-w-5xl mx-auto text-center px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight bg-gradient-to-r from-[#de822c] to-[#ff172e] bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed bg-gradient-to-r from-[#de822c] to-[#ff172e] bg-clip-text text-transparent">
            Have questions or need support? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center px-6 lg:px-8 py-20 lg:py-24">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            
            {/* Contact Form */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-gray-700/50 shadow-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 lg:mb-10">Send us a Message</h2>
              
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-300 mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-5 py-4 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder-gray-400 hover:border-gray-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-300 mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-5 py-4 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder-gray-400 hover:border-gray-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-5 py-4 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder-gray-400 hover:border-gray-500"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-5 py-4 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all placeholder-gray-400 hover:border-gray-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-3">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-5 py-4 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all hover:border-gray-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="account">Account Issues</option>
                    <option value="safety">Safety Concerns</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="business">Business Inquiries</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-5 py-4 bg-gray-800 border border-gray-600 text-white rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none placeholder-gray-400 hover:border-gray-500"
                    placeholder="Please describe your inquiry or concern in detail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#de822c] to-[#ff172e] text-white font-bold py-5 px-8 rounded-xl hover:from-[#c4731f] hover:to-[#e6142a] transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-gray-700/30">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10">Get in Touch</h2>
              
              <div className="space-y-10">
                {/* Email */}
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#de822c] to-[#ff172e] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <p className="text-gray-400 mb-3 leading-relaxed">Send us an email anytime</p>
                    <a 
                      href="mailto:kutedating@gmail.com"
                      className="text-orange-400 hover:text-orange-300 font-semibold text-lg transition-colors"
                    >
                      kutedating@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#de822c] to-[#ff172e] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <p className="text-gray-400 mb-3 leading-relaxed">Call us during business hours</p>
                    <a 
                      href="tel:+918910857746"
                      className="text-orange-400 hover:text-orange-300 font-semibold text-lg transition-colors"
                    >
                      +91 8910857746
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#de822c] to-[#ff172e] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-400 mb-3 leading-relaxed">Visit our office</p>
                    <address className="text-gray-300 not-italic leading-relaxed">
                      KP -7F<br />
                      KIIT CAMPUS<br />
                      Near Kafe Delizioso<br />
                      Bhubaneswar, Odisha 751024<br />
                      India
                    </address>
                  </div>
                </div>
              </div>

              {/* Response Time Info */}
              <div className="mt-12 p-8 bg-gradient-to-r from-gray-800/80 to-gray-700/80 rounded-xl border border-gray-600/50 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-sm">⏱️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Response Time</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="mt-24 lg:mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Need Quick Help?</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Choose from our quick help options below for faster assistance with common issues
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              <div className="group text-center p-10 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 hover:shadow-2xl hover:transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Safety & Security</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Report safety concerns or inappropriate behavior immediately</p>
                <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Report Issue
                </button>
              </div>

              <div className="group text-center p-10 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 hover:shadow-2xl hover:transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-3xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Feature Requests</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Suggest new features or improvements to enhance your experience</p>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Share Ideas
                </button>
              </div>

              <div className="group text-center p-10 bg-gray-800/50 backdrop-blur-sm rounded-2xl hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 hover:shadow-2xl hover:transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-all duration-300">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Technical Support</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">Get help with app issues, bugs, or technical difficulties</p>
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get Help
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Teaser */}
          <div className="mt-24 text-center p-12 bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm rounded-2xl border border-gray-600/30">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Looking for Quick Answers?</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Check out our FAQ section for instant answers to common questions about Kute Dating.
            </p>
            <button className="bg-gradient-to-r from-[#de822c] to-[#ff172e] hover:from-[#c4731f] hover:to-[#e6142a] text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
              View FAQ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
