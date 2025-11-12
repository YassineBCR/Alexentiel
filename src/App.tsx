import { useState } from "react";
import {
  ArrowRight,
  Check,
  Heart,
  Palette,
  PartyPopper,
  Sparkles,
  Star,
  Stars,
} from "lucide-react";

const heroHighlights = [
  {
    title: "Organisation sur mesure",
    description: "Une planification maîtrisée pour profiter pleinement de chaque instant.",
  },
  {
    title: "Décoration poétique",
    description: "Ambiances florales et scénographies élégantes pensées dans les moindres détails.",
  },
  {
    title: "Accompagnement humain",
    description: "Disponibilité, écoute et conseils pour vous guider avec douceur.",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1520854221057-9f2bf0e89f47?auto=format&fit=crop&w=900&q=80",
    alt: "Centre de table romantique avec bougies et fleurs blush.",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221051-047b8adf2526?auto=format&fit=crop&w=900&q=80",
    alt: "Mariés dansant sous une arche fleurie.",
  },
  {
    src: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=900&q=80",
    alt: "Buffet de desserts pastel avec fleurs fraîches.",
  },
];

const organizationPackages = [
  {
    name: "Formule Sérénité",
    price: "À partir de 2 800 €",
    description:
      "Nous orchestrons l'ensemble de votre mariage, du rétroplanning aux RDV prestataires pour que votre jour J soit une bulle de bonheur.",
    includes: [
      "Construction du concept et du storytelling",
      "Sélection, négociation et suivi des prestataires",
      "Gestion logistique complète et budget détaillé",
      "Présence de l'équipe Alexentiel le jour J",
    ],
  },
  {
    name: "Coordination du jour J",
    price: "1 100 €",
    description:
      "Vous avez tout organisé ? Nous prenons le relais un mois avant pour orchestrer votre journée et coordonner chaque intervenant.",
    includes: [
      "Prise en main du dossier et repérage des lieux",
      "Rédaction du conducteur précis du jour J",
      "Brief des prestataires et gestion des imprévus",
      "Présence discrète mais efficace de l'équipe",
    ],
  },
];

const weddingDecoration = {
  name: "Formule Essentielle Déco",
  price: "1 500 €",
  tagline:
    "Vous organisez votre mariage, mais vous ne souhaitez pas avoir à gérer la décoration ? Cette formule est faite pour vous !",
  includes: [
    "Un univers unique créé selon votre histoire",
    "Recherche, achat ou location des éléments déco",
    "Logistique optimisée pour chaque zone du lieu",
    "Installation complète et présence le jour J",
    "Désinstallation et rangement en fin de réception",
  ],
};

const weddingOptions = [
  {
    title: "Escapade civile",
    price: "250 €",
    description: "Habillage floral et scénographie douce pour votre cérémonie civile ou la veille du mariage.",
  },
  {
    title: "Cérémonie laïque",
    price: "Sur devis",
    description: "Écriture du rituel, décor immersif et coordination avec vos intervenants.",
  },
  {
    title: "Brunch du lendemain",
    price: "390 €",
    description: "Ambiance décontractée, décoration réutilisable et gestion de la remise en ordre.",
  },
];

const otherEvents = [
  {
    title: "Fêtes privées",
    description:
      "Baptême, gender reveal, anniversaires précieux… nous créons des moments tendres et joyeux pour toute la famille.",
    points: ["Personnalisation du thème", "Gestion complète ou partielle", "Décoration florale et scénographie"],
  },
  {
    title: "Fêtes à thèmes",
    description:
      "Noël féérique, Halloween audacieux ou Saint-Valentin intimiste : nous imaginons l'ambiance rêvée.",
    points: ["Création du concept et moodboard", "Scénographie immersive", "Installation et rangement inclus"],
  },
  {
    title: "Évènements d'entreprise",
    description:
      "Soirée clients, lancement de produit ou team building : faites vivre une expérience mémorable à vos équipes.",
    points: ["Coordination logistique", "Signalétique et décoration personnalisées", "Animation des temps forts"],
  },
];

const coachingPrograms = [
  {
    title: "Coaching organisation",
    description:
      "Des sessions personnalisées pour vous guider dans chaque étape, clarifier vos priorités et sécuriser votre budget.",
    points: ["Audit de votre avancée", "Plan d'action détaillé", "Outils de suivi envoyés après chaque séance"],
  },
  {
    title: "Coaching décoration",
    description:
      "Nous vous aidons à imaginer et concrétiser votre ambiance, avec des conseils couleur, matériaux et achats malins.",
    points: ["Moodboard et palette harmonisée", "Liste shopping optimisée", "Astuces DIY & mise en scène"],
  },
];

function App() {
  const [activePackage, setActivePackage] = useState<string | null>(null);

  const togglePackage = (name: string) => {
    setActivePackage((current) => (current === name ? null : name));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-100 via-rose-50 to-white text-rose-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.2),_transparent_55%)]" />
      <div className="relative">
        <header className="mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-16">
          <nav className="flex flex-wrap items-center justify-between gap-4 text-sm text-rose-700">
            <span className="font-script text-3xl text-rose-600">Alexentiel</span>
            <div className="flex flex-wrap items-center gap-5">
              <a className="transition hover:text-rose-900" href="#presentation">
                Présentation
              </a>
              <a className="transition hover:text-rose-900" href="#mariage">
                Mariage
              </a>
              <a className="transition hover:text-rose-900" href="#autres-evenements">
                Autres évènements
              </a>
              <a className="transition hover:text-rose-900" href="#coachings">
                Coachings
              </a>
              <a className="transition hover:text-rose-900" href="#contact">
                Contact
              </a>
            </div>
          </nav>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
            <div className="space-y-8">
              <p className="font-script text-3xl text-rose-500">Créatrice de moments inoubliables</p>
              <h1 className="text-4xl font-semibold leading-tight text-rose-950 sm:text-5xl">
                Organisation & décoration d'évènements doux, modernes et lumineux
              </h1>
              <p className="max-w-xl text-base text-rose-700">
                Basée en Bretagne, Alexentiel imagine, coordonne et décore vos mariages et évènements privés ou professionnels avec passion.
                Nous révélons votre histoire à travers des scénographies élégantes, des prestataires de confiance et un accompagnement
                bienveillant.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#mariage"
                  className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-rose-300/40 transition hover:bg-rose-500"
                >
                  Découvrir nos formules
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#autres-evenements"
                  className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-6 py-3 text-base font-semibold text-rose-700 transition hover:border-rose-400 hover:text-rose-900"
                >
                  Autres prestations
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -skew-y-3 rounded-[2.5rem] bg-gradient-to-br from-rose-200 via-white to-rose-100 blur-xl" />
              <img
                className="relative h-full w-full rounded-[2.5rem] border border-white/60 object-cover shadow-2xl"
                src="https://images.unsplash.com/photo-1520854221057-9f2bf0e89f47?auto=format&fit=crop&w=900&q=80"
                alt="Décoration florale rose et blanche d'une table de réception."
              />
            </div>
          </div>
        </header>

        <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24">
          <section className="grid gap-6 rounded-3xl border border-rose-100 bg-white/80 p-8 shadow-xl backdrop-blur">
            <div className="grid gap-6 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <article key={item.title} className="space-y-3 rounded-2xl bg-rose-50/80 p-6">
                  <h2 className="text-lg font-semibold text-rose-900">{item.title}</h2>
                  <p className="text-sm leading-relaxed text-rose-700">{item.description}</p>
                </article>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {galleryImages.map((image) => (
                <img
                  key={image.src}
                  className="h-48 w-full rounded-2xl object-cover shadow-md"
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                />
              ))}
            </div>
          </section>

          <section id="presentation" className="grid gap-10 rounded-3xl border border-rose-100 bg-white/90 p-10 shadow-xl backdrop-blur">
            <div className="space-y-4">
              <p className="font-script text-2xl text-rose-500">Présentation</p>
              <h2 className="text-3xl font-semibold text-rose-950">Alexentiel, votre alliée pour des évènements lumineux</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <p className="text-base leading-relaxed text-rose-700">
                Chaque évènement est une page blanche que nous remplissons de douceur, de poésie et d'organisation millimétrée. Nous prenons le
                temps de comprendre votre histoire, votre rythme et vos envies pour imaginer des atmosphères qui vous ressemblent vraiment.
              </p>
              <p className="text-base leading-relaxed text-rose-700">
                De la sélection des prestataires au dernier bouquet rangé, nous sommes présents à vos côtés. Nos outils de suivi, notre réseau de
                professionnels et notre sens du détail vous permettent de savourer chaque étape en toute confiance.
              </p>
            </div>
          </section>

          <section id="mariage" className="space-y-12 rounded-3xl border border-rose-100 bg-white/90 p-10 shadow-xl backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-script text-2xl text-rose-500">Mariage</p>
                <h2 className="text-3xl font-semibold text-rose-950">Nos formules organisation & décoration</h2>
              </div>
              <p className="max-w-xl text-sm text-rose-700">
                Choisissez l'accompagnement qui vous correspond. Cliquez sur chaque carte pour découvrir le tarif associé et les détails inclus.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-rose-400">
                  <Heart className="h-4 w-4" />
                  Organisation
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                  {organizationPackages.map((pkg) => (
                    <button
                      key={pkg.name}
                      type="button"
                      onClick={() => togglePackage(pkg.name)}
                      className="group relative h-full rounded-3xl border border-rose-100 bg-rose-50/70 p-8 text-left shadow-lg transition hover:border-rose-300 hover:shadow-rose-200"
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-white/10 opacity-0 transition group-hover:opacity-100" />
                      <div className="relative space-y-5">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="text-2xl font-semibold text-rose-900">{pkg.name}</h3>
                          <Sparkles className="h-5 w-5 text-rose-400" />
                        </div>
                        <p className="text-sm leading-relaxed text-rose-700">{pkg.description}</p>
                        <ul className="space-y-2 text-sm text-rose-700">
                          {pkg.includes.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-rose-600 shadow-inner">
                          <span>{activePackage === pkg.name ? pkg.price : "Cliquer pour afficher le tarif"}</span>
                          <Star className={`h-4 w-4 transition ${activePackage === pkg.name ? "text-rose-500" : "text-rose-300"}`} />
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <button
                  type="button"
                  onClick={() => togglePackage(weddingDecoration.name)}
                  className="group relative h-full rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-rose-100 p-8 text-left shadow-lg transition hover:border-rose-300 hover:shadow-rose-200"
                >
                  <div className="absolute inset-0 rounded-3xl bg-white/40 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative space-y-5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-rose-900">{weddingDecoration.name}</h3>
                      <Palette className="h-5 w-5 text-rose-400" />
                    </div>
                    <p className="text-sm leading-relaxed text-rose-700">{weddingDecoration.tagline}</p>
                    <ul className="space-y-2 text-sm text-rose-700">
                      {weddingDecoration.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between rounded-2xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600 shadow-inner">
                      <span>
                        {activePackage === weddingDecoration.name
                          ? `Tarif : ${weddingDecoration.price}`
                          : "Cliquer pour afficher le tarif"}
                      </span>
                      <Stars className={`h-5 w-5 transition ${activePackage === weddingDecoration.name ? "text-rose-500" : "text-rose-300"}`} />
                    </div>
                  </div>
                </button>

                <div className="space-y-4 rounded-3xl border border-rose-100 bg-white/80 p-8 shadow-lg">
                  <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-rose-400">
                    <PartyPopper className="h-4 w-4" />
                    Options mariage
                  </div>
                  <p className="text-sm text-rose-700">
                    Renforcez votre expérience avec nos options à la carte. Elles se combinent avec toutes les formules et sont adaptées sur mesure.
                  </p>
                  <div className="space-y-4">
                    {weddingOptions.map((option) => (
                      <article key={option.title} className="rounded-2xl border border-rose-100 bg-rose-50/80 p-5 shadow-sm">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-semibold text-rose-900">{option.title}</h4>
                          <span className="text-sm font-medium text-rose-500">{option.price}</span>
                        </div>
                        <p className="mt-2 text-sm text-rose-700">{option.description}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="autres-evenements"
            className="space-y-10 rounded-3xl border border-rose-100 bg-white/90 p-10 shadow-xl backdrop-blur"
          >
            <div className="space-y-4">
              <p className="font-script text-2xl text-rose-500">Autres évènements</p>
              <h2 className="text-3xl font-semibold text-rose-950">Organisation & décoration sur devis</h2>
              <p className="max-w-2xl text-base text-rose-700">
                Chaque évènement est unique. Nous imaginons pour vous une expérience sensorielle complète, de la conception à la mise en scène. Les
                prestations sont établies sur devis afin de s'adapter à vos besoins et à votre budget.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {otherEvents.map((event) => (
                <article key={event.title} className="flex h-full flex-col gap-4 rounded-3xl border border-rose-100 bg-rose-50/70 p-6 shadow-lg">
                  <div className="flex items-center gap-2 text-rose-500">
                    <Stars className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-rose-900">{event.title}</h3>
                  </div>
                  <p className="text-sm text-rose-700">{event.description}</p>
                  <ul className="mt-auto space-y-2 text-sm text-rose-700">
                    {event.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section id="coachings" className="space-y-10 rounded-3xl border border-rose-100 bg-white/90 p-10 shadow-xl backdrop-blur">
            <div className="space-y-4">
              <p className="font-script text-2xl text-rose-500">Coachings</p>
              <h2 className="text-3xl font-semibold text-rose-950">Un accompagnement personnalisé pour avancer sereinement</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {coachingPrograms.map((coaching) => (
                <article key={coaching.title} className="flex h-full flex-col gap-4 rounded-3xl border border-rose-100 bg-rose-50/70 p-6 shadow-lg">
                  <div className="flex items-center gap-2 text-rose-500">
                    <Sparkles className="h-5 w-5" />
                    <h3 className="text-xl font-semibold text-rose-900">{coaching.title}</h3>
                  </div>
                  <p className="text-sm text-rose-700">{coaching.description}</p>
                  <ul className="mt-auto space-y-2 text-sm text-rose-700">
                    {coaching.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="flex flex-col gap-6 rounded-3xl border border-rose-200 bg-rose-600/10 p-10 text-rose-900 shadow-xl backdrop-blur sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="space-y-3">
              <p className="font-script text-2xl text-rose-500">Contact</p>
              <h2 className="text-2xl font-semibold text-rose-950">Prêts à imaginer ensemble votre prochain évènement ?</h2>
              <p className="text-sm text-rose-800">
                Nous reviendrons vers vous sous 48h avec les premières pistes et disponibilités pour un rendez-vous découverte.
              </p>
            </div>
            <a
              href="mailto:contact@alexentiel.com"
              className="inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-rose-300/40 transition hover:bg-rose-500"
            >
              Écrire à Alexentiel
            </a>
          </section>
        </main>

        <footer className="border-t border-rose-100 bg-white/80">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-rose-600 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Alexentiel. Tous droits réservés.</p>
            <nav className="flex flex-wrap items-center gap-4">
              <a className="transition hover:text-rose-900" href="#mariage">
                Mariage
              </a>
              <a className="transition hover:text-rose-900" href="#autres-evenements">
                Autres évènements
              </a>
              <a className="transition hover:text-rose-900" href="mailto:contact@alexentiel.com">
                contact@alexentiel.com
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
