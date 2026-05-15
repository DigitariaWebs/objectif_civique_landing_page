import StoreBadges from "./StoreBadges";

const AVATARS = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCmCL_muw1FEl44b8ILkHCm-NJ-skFKmzGW8CKhsKdKSZ3yyqT3q2EIe9_FuS_y8dtutKoXPvF3-03IvCa60DbkAwhG_42R5_00QYHk6XJrODh7s0Ij3GszJoXog2b0TR1eD6Fith2NINZO7hPizSXhQ1nU775_hqQSF1FcUGVBntjsLjJkcp89ozXI24Jeoxl4ZsEUI36zr2K_LKZXboMYhax_dhg-22m-JuZe3CzHJ3Je4G-VFaCEAW35jhElEuc9gG8tUDSQJN9R",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMZoL2aQG8vOMnTBAD0rK53kxH3K4C6OHFKMbDRPeNh1kjvJwWGo4WyRr_5QRzMGfSUf7KHtImWmcLhKNSVREkshyU6AJG0nRT2sdqIciuD1p_Pyk7EK64Q3BHAS9d9X9BPOa9_MObN6wYVX3UlVf3RpFco4FzhEe5Kxmv0BIbZBjAILJkolyK17-vGjhPHiFhgH1f5Xej_2dfH1E3MTBe4U_qqgcaqQwJK6Ap57py9OzQ86EJiCgPL5Cw6PZlCerpqkDW4sJlqLPQ",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA30kZ68lalGbWGb33TcI0DsV_ftCKPzBW_eq1DNBErchIb7Xxde_XbWWvp3scvNV5BAqRxLPE48cvO9k0adoGFz7xCqAy05Ws_8TskPylQ0SYKeX2yho2CPztPNScgGhj-itkFWHXkV_tNSl5shIzXRj_Lc8hfqDpONgRbVKjBQlGzBaFjy0SiKjmEqESFFmmC6OFQES-s7S5R3_0xI7U7cXWTBE4O3TjYro6Aoz5Xdeu8yXGTICOQl88qaQz9khEH1pIbQyBVehh2",
];

const PHONE_IMAGES = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5rSz4RQM4ZzxiYkKqy-aUn1XsG8URrqoLTohdVhesbdFRy0E_tE6gH-WVO7hTDq8k_8uaYMWF9AUGX1Iau-7acu59hSI-Sljl_NCZTh9mg9g3nmfPdtZIIDFEi1B1p81TYJLz02QHz9b0Mp4_Hdt-RWGCxgIRa6USPbIl0Mq8pk-ojynayq3iI6PqYZ2-kVRLJvTbO-Ax_zwhJ0XyigRd-4OLb-5Ytru87x5UL1YCE2yTTn5YQf6Cvrlods0UnyOAnWM8gmCbLLfx",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDUxJ6bejQY2MHDb33-h2bgq-CKcLqnDmxTIgQI_F39neeBEO1Q8pQ5DszKrKXE9YLzCMz14nVL5BB3PweNclxvjIT23LDU4Py3C_nnAQG_avjxlHP4-FgDpHwvTe0aLVwLWVlQcdj-kmqMM-uDJ6BKuPmQTin7O8Ovlmp9wD-ly9_LPzTcNt3WH4wpBdVizUyhWa2bV72iaFLHN2r20aWEVDGsfEB8TNpDZ2DLV_YKIui2oww8JwlG_TNRb1sRyFjo0BENkjbJp7uK",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAqQSnCYJWDyCY6kSotOEddagwVhBegMf2AqrT-vhnjWlhQR4G9jRsmdfj6q0u0ZHJ6wPZcrSTiaUHlYIRdbUaGg6sTA_R0Kd51h1T1ZbdiOPaTzoNwuAPIZAJOBqB5RF7iQ5JItIsejX-Hu_xGEuGm_eDSr4x0MY1_UaaAhYCoOAF1ovEvaBUXd-x-5hLUOv45lqoRzMfbYQVR5bu1vWaDe4i17jWKr8pYhpF6zABn-IY8DFHR7lK5VqmV3hXUvBG3wSNmm-LLhW3E",
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-10 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots bg-pattern-fade opacity-60 pointer-events-none -z-10" />
      <div className="hero-gradient-overlay" />
      <div className="hero-red-glow" />
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left">
        <div className="z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-3 py-1 mb-6">
            <span className="text-base"></span>
            <span className="text-xs font-medium text-gray-600">
              L&apos;application n°1 pour réussir votre examen civique
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5">
            Réussissez votre <br />
            <span className="text-brand-blue italic">examen civique</span> et{" "}
            <br />
            votre{" "}
            <span className="relative inline-block">
              <span className="relative z-10">intégration</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-brand-red/40 rounded-full -skew-x-3" />
            </span>
            .
          </h1>

          <p className="text-base text-gray-500 mb-8 max-w-md leading-relaxed">
            Préparez votre avenir en France avec Objectif Civique. Des milliers
            de questions officielles, des simulations intelligentes et un suivi
            personnalisé.
          </p>

          <StoreBadges size="md" className="mb-8 justify-center lg:justify-start" />

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <div className="flex -space-x-3">
              {AVATARS.map((src, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={i}
                  src={src}
                  alt="Utilisateur"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-xs font-bold">
                +50 000 candidats nous font confiance
              </p>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-gray-800">4,8/5</span>
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center h-[460px] animate-fade-in">
          <div className="absolute w-[180px] h-[360px] -translate-x-24 rotate-[-12deg] z-0 rounded-[32px] border-[6px] border-slate-900 overflow-hidden shadow-2xl opacity-60 animate-float-slow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHONE_IMAGES[0]}
              alt="App interface 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute w-[200px] h-[400px] -translate-x-8 rotate-[-4deg] z-10 rounded-[32px] border-[8px] border-slate-900 overflow-hidden shadow-2xl animate-float-delayed">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHONE_IMAGES[1]}
              alt="App interface 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative w-[220px] h-[440px] translate-x-16 rotate-[6deg] z-20 rounded-[32px] border-[10px] border-slate-900 overflow-hidden shadow-2xl animate-float">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHONE_IMAGES[2]}
              alt="App interface 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
