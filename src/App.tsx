import { ArrowRight, Sparkles, Star } from "lucide-react";

const highlights = [
  {
    title: "Palette harmonieuse",
    description:
      "Des contrastes élevés et des teintes cohérentes pour un confort visuel optimal, même sur mobile.",
  },
  {
    title: "Typographie lisible",
    description:
      "Une hiérarchie claire et un espacement généreux facilitent la lecture de chaque section.",
  },
  {
    title: "Expérience inclusive",
    description:
      "Chaque élément respecte les recommandations d'accessibilité pour un site agréable pour tou·te·s.",
  },
];

const services = [
  {
    name: "Audit visuel",
    detail: "Analyse complète des contrastes, de l'ergonomie et de la structure de vos pages web.",
  },
  {
    name: "Charte graphique",
    detail: "Création d'une identité moderne avec des palettes testées pour tous les environnements lumineux.",
  },
  {
    name: "Design system",
    detail: "Bibliothèque de composants cohérente pour accélérer la conception et garder une interface uniforme.",
  },
];

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%)]" />
      <header className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-16 sm:pt-24">
        <div className="flex items-center gap-3 text-sm font-medium text-sky-200">
          <Sparkles className="h-4 w-4" />
          <span>Conception d'expériences lumineuses</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Donnez à votre site la lumière qu'il mérite
            </h1>
            <p className="max-w-xl text-lg text-slate-200">
              Nous corrigeons les problèmes de couleur, renforçons les contrastes et repensons vos
              interfaces pour une lisibilité impeccable. Vos visiteurs profitent d'un design élégant,
              durable et parfaitement accessible.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-amber-400/30 transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                Explorer nos services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/40 px-6 py-3 text-base font-semibold text-white transition hover:border-amber-300 hover:text-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200"
              >
                Discuter de votre projet
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200/20 bg-slate-900/60 p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-sky-500/10 to-transparent" />
            <div className="relative space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-sky-200">Notre promesse</p>
              <p className="text-xl font-semibold text-white">
                Une interface lisible, contrastée et mémorable qui s'adapte à toutes les lumières.
              </p>
              <div className="flex items-center gap-3 rounded-2xl bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
                <Star className="h-5 w-5 text-amber-300" />
                <span>95 % de satisfaction sur nos projets de refonte visuelle en 2024.</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24">
        <section className="grid gap-8 rounded-3xl border border-slate-200/10 bg-slate-900/60 p-8 shadow-xl sm:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="space-y-3">
              <h2 className="text-lg font-semibold text-white">{item.title}</h2>
              <p className="text-sm leading-relaxed text-slate-200">{item.description}</p>
            </article>
          ))}
        </section>

        <section id="services" className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Ce que nous faisons pour vous</h2>
            <p className="text-base text-slate-200">
              Nous nous assurons que votre identité visuelle reste claire et cohérente, de la page
              d'accueil aux formulaires les plus précis. Nos services couvrent l'intégralité du
              parcours utilisateur.
            </p>
          </div>
          <div className="grid gap-4">
            {services.map((service) => (
              <article
                key={service.name}
                className="rounded-2xl border border-slate-200/10 bg-slate-900/70 p-6 shadow-lg transition hover:border-amber-300/60"
              >
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <p className="mt-2 text-sm text-slate-200">{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col gap-6 rounded-3xl border border-amber-200/30 bg-amber-400/10 p-8 text-slate-100 shadow-xl sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-white">Prêt·e à illuminer votre projet&nbsp;?</h2>
            <p className="text-sm text-slate-100">
              Nous créons un plan d'amélioration sur mesure avec des solutions concrètes et faciles à mettre
              en place pour votre équipe.
            </p>
          </div>
          <a
            href="mailto:contact@alexentiel.com"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-white/40 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Prendre rendez-vous
          </a>
        </section>
      </main>

      <footer className="relative border-t border-slate-200/10 bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Alexentiel. Tous droits réservés.</p>
          <nav className="flex flex-wrap items-center gap-4">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
            <a className="transition hover:text-white" href="mailto:accessibilite@alexentiel.com">
              Accessibilité
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
