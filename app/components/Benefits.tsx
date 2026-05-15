import Image from "next/image";

const PHONE_IMG = "/why-choose-us.jpeg";

const BENEFITS = [
  {
    title: "Apprenez à votre rythme",
    desc: "Des sessions courtes adaptées à votre emploi du temps, où que vous soyez.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Conçu par des experts",
    desc: "Notre contenu est élaboré par des spécialistes du droit civique et de l'intégration.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },

];

export default function Benefits() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex items-center justify-center order-2 lg:order-1">
          <div className="absolute -inset-6 bg-linear-to-br from-blue-100 to-red-50 rounded-[40px] -z-10 blur-2xl opacity-70" />
          <div className="relative w-full max-w-[420px] aspect-square rounded-[36px] overflow-hidden shadow-2xl rotate-[-3deg] border-[6px] border-white animate-float-slow">
            <Image
              src={PHONE_IMG}
              alt="Pourquoi choisir Objectif Civique"
              fill
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-block bg-red-50 text-brand-red text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full mb-3">
            Pourquoi nous choisir
          </span>
          <h2 className="text-3xl font-extrabold mb-4">
            Une méthode <span className="text-brand-blue">pensée pour vous</span>{" "}
            faire réussir
          </h2>
          <p className="text-base text-gray-500 mb-8 leading-relaxed">
            Bien plus qu'une simple banque de questions : un véritable
            accompagnement pour transformer vos efforts en réussite.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="group flex gap-3 transition-transform hover:translate-x-1">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-brand-blue text-white flex items-center justify-center shadow-md shadow-blue-500/20 transition-all group-hover:scale-110 group-hover:bg-brand-red">
                  {b.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-0.5">{b.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
