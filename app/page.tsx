export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Shopify Store Audit
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Missing product photos are{" "}
          <span className="text-[#58a6ff]">killing your sales</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly scan your entire Shopify catalog. Get a prioritized list of products with missing or low-quality photos — ranked by conversion impact so you fix what matters first.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Auditing — $19/mo
        </a>
        <p className="text-sm text-[#8b949e] mt-4">Cancel anytime. Works with any Shopify store.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="text-3xl font-bold text-[#58a6ff]">34%</div>
            <div className="text-sm text-[#8b949e] mt-1">avg conversion lift after fixing photos</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="text-3xl font-bold text-[#58a6ff]">&lt;2min</div>
            <div className="text-sm text-[#8b949e] mt-1">to scan 1,000+ products</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
            <div className="text-3xl font-bold text-[#58a6ff]">100+</div>
            <div className="text-sm text-[#8b949e] mt-1">stores audited this month</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited product scans",
              "Photo quality scoring",
              "Conversion impact ranking",
              "Weekly automated re-scans",
              "CSV export of issues",
              "Email alerts for new gaps"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does it connect to my Shopify store?",
              a: "After subscribing, you install our Shopify app with one click. We request read-only access to your product catalog — we never modify anything."
            },
            {
              q: "What counts as a 'poor' photo?",
              a: "We flag products with no images, fewer than 2 photos, images below 800px, non-square aspect ratios, and low-contrast or blurry images detected via image analysis."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal in one click. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Shopify Photo Auditor. All rights reserved.
      </footer>
    </main>
  );
}
