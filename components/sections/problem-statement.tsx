export function ProblemStatement() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
          Addressing Critical Challenges in Women&apos;s Agriculture
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Financial Exclusion',
              description: '70% of women farmers lack access to formal credit systems and microloans due to insufficient collateral and credit history.',
              icon: '💰',
              stats: '70% Exclusion Rate'
            },
            {
              title: 'Technology Gap',
              description: 'Limited access to modern farming technologies and real-time data for informed agricultural decision-making.',
              icon: '📊',
              stats: '85% No Tech Access'
            },
            {
              title: 'Market Barriers',
              description: 'Women face significant challenges in accessing fair markets and obtaining competitive prices for their produce.',
              icon: '🌾',
              stats: '40% Price Disparity'
            },
          ].map((item, i) => (
            <div
              key={i}
              className="glass dark:glass-dark p-8 rounded-2xl hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300 group"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <div className="text-sm font-semibold text-green-600 mb-2">{item.stats}</div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-foreground/70 text-lg leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 glass dark:glass-dark p-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-center mb-8">The Economic Impact</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: '₹15,000 Cr', label: 'Annual Income Gap' },
              { value: '2.5x', label: 'Productivity Difference' },
              { value: '60%', label: 'Untapped Potential' },
              { value: '8-10%', label: 'GDP Growth Opportunity' },
            ].map((item, i) => (
              <div key={i} className="p-4">
                <div className="text-2xl font-bold text-green-600">{item.value}</div>
                <div className="text-sm text-foreground/70 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}