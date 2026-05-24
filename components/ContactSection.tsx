const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@powerbuilder.com";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-brand-bg py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Contact</p>
          <h2 className="section-heading">
            Questions?
            <br />
            <span className="text-red-600">Get In Touch.</span>
          </h2>
          <p className="text-zinc-500 text-base mt-6 max-w-xl mx-auto">
            Have a question before purchasing, or need help with your order?
            Reach out directly — typical response time is under 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email card */}
          <div className="bg-brand-card border border-brand-border p-8 flex flex-col gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-red-600/10 border border-red-600/20">
              <svg
                className="w-5 h-5 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Email</h3>
              <p className="text-zinc-500 text-sm mb-3">
                Best for questions about the program or your order.
              </p>
              <a
                href={`mailto:${contactEmail}`}
                className="text-red-500 hover:text-red-400 text-sm font-medium transition-colors"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          {/* Response time card */}
          <div className="bg-brand-card border border-brand-border p-8 flex flex-col gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-red-600/10 border border-red-600/20">
              <svg
                className="w-5 h-5 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold mb-1">Response Time</h3>
              <p className="text-zinc-500 text-sm mb-3">
                All messages are answered personally by Artur.
              </p>
              <span className="text-white text-sm font-medium">
                Usually within 24 hours
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center border border-brand-border p-8 md:p-12">
          <p className="text-zinc-400 text-lg mb-2">
            Ready to start your transformation?
          </p>
          <p className="text-zinc-600 text-sm mb-8">
            Stop overthinking. 8 weeks is all it takes.
          </p>
          <a href="/program" className="btn-primary">
            Get the Program — €39
          </a>
        </div>
      </div>
    </section>
  );
}
