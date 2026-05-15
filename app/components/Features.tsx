import Image from "next/image";

type Feature = {
  title: string;
  desc: string;
  icon: string;
};

const FEATURES: Feature[] = [
  {
    title: "Contenu officiel",
    desc: "2500+ questions issues des sources officielles.",
    icon: "/official_content.png",
  },
  {
    title: "Simulations réelles",
    desc: "Entraînez-vous avec des examens chronométrés.",
    icon: "/reel_simulation.png",
  },
  {
    title: "Suivi personnalisé",
    desc: "Analyse de vos progrès et recommandations.",
    icon: "/personal_tracking.png",
  },
  {
    title: "Révisions thématiques",
    desc: "Apprenez par thèmes selon votre objectif.",
    icon: "/theramic_review.png",
  },
  {
    title: "Rappels intelligents",
    desc: "Révisez chaque jour avec des rappels adaptés.",
    icon: "/reminders.png",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white border border-gray-100 shadow-xl shadow-blue-900/5 rounded-3xl p-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col items-center lg:items-start text-center lg:text-left p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-24 h-24 rounded-2xl bg-linear-to-br from-blue-50 to-red-50 flex items-center justify-center mb-4 p-3 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold mb-1 text-base">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
