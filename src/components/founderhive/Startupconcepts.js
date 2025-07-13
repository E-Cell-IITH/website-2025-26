import AnimatedSection from "../homeComponents/animatedSection";

export default function StartupConcepts() {
  const concepts = [
    {
      description: "A platform that connects new startup founders directly with industry experts",
    },
    {
      description:
        "A healthcare platform offering access to high-cost medical equipment at reduced rates",
    },
  ];

  return (
    <AnimatedSection className="w-full flex flex-col items-center mt-9">
    <section className="px-4 py-16 md:py-24 ">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Innovative Startup Concepts
        </h2>

        <div className="grid gap-8 sm:grid-cols-2">
          {concepts.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 p-6 md:p-8 rounded-2xl border border-purple-700/40 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-600 p-3 rounded-xl">
                  <span role="img" aria-label="idea">💡</span>
                </div>
                <p className="text-left text-purple-200 text-lg md:text-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
}
