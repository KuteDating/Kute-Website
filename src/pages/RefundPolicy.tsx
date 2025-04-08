import '../pages/legalPages.css';

const RefundPolicy = () => {
  return (
    <section className="legal-page">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair text-[#5de383] mb-6 text-center">
          Refund Policy
        </h1>

        <p className="text-[#bbbbbb] mb-6 text-lg text-center max-w-3xl mx-auto">
          Our refund policy is transparent and customer-friendly. Here's how it works:
        </p>

        <div className="mt-10 space-y-10 text-[#dddddd] text-base">
          <div>
            <h2 className="text-2xl font-semibold text-[#ff6f61] mb-3">1. No Refunds After Match</h2>
            <p>
              Once you've been successfully matched through our app, we do not offer refunds for any purchases made.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#ff6f61] mb-3">2. Technical Issues</h2>
            <p>
              If you face a technical issue with our service, please contact support within 7 days. We’ll try to resolve it, or offer a refund if unresolved.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#ff6f61] mb-3">3. Ineligible Refunds</h2>
            <p>
              Refunds will not be given for dissatisfaction based on subjective preferences once a match is completed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#ff6f61] mb-3">4. Cancellation Policy</h2>
            <p>
              You may cancel any subscription before the renewal date. No refunds will be issued for mid-cycle cancellations.
            </p>
          </div>
        </div>

        <p className="mt-14 text-center text-[#888] text-sm">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </section>
  );
};

export default RefundPolicy;

