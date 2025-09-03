const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="max-w-4xl mx-auto px-5 py-8 text-gray-200 bg-gray-900 rounded-xl mt-0 mb-0 leading-relaxed font-sans">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-red-500 bg-clip-text text-transparent mb-6 text-center">
            Refund Policy
          </h1>

          <p className="text-gray-300 mb-6 text-lg text-center max-w-3xl mx-auto">
            Our refund policy is transparent and customer-friendly. Here's how it works:
          </p>

        <div className="mt-10 space-y-10 text-gray-300 text-base">
          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">1. No Refunds After Match</h2>
            <p>
              Once you've been successfully matched through our app, we do not offer refunds for any purchases made.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">2. Technical Issues</h2>
            <p>
              If you face a technical issue with our service, please contact support within 7 days. We’ll try to resolve it, or offer a refund if unresolved.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">3. Ineligible Refunds</h2>
            <p>
              Refunds will not be given for dissatisfaction based on subjective preferences once a match is completed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-3">4. Cancellation Policy</h2>
            <p>
              You may cancel any subscription before the renewal date. No refunds will be issued for mid-cycle cancellations.
            </p>
          </div>
        </div>

        <p className="mt-14 text-center text-gray-500 text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
    </div>
  );
};

export default RefundPolicy;

