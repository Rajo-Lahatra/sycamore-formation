/**
 * Composant de page pour le Jour 4 de la formation Fiscalité Minière.
 * Ce composant est conçu comme un Next.js Server Component pour une compatibilité SSR totale.
 */

// 1. Structure de données (JSON) contenant le contenu de la formation
const content = {
  header: {
    title: "IS, IMF, CFU, droit d'enregistrement, patente et charges minières spécifiques",
    subtitle: "Maîtriser les Impôts Directs, Taxes Locales et Redevances Minières"
  },
  slides: [
    {
      title: "Introduction à la Fiscalité du Jour 4",
      content: `
        <p class="text-lg font-semibold text-green-700 mb-4">Objectifs de la session :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Comprendre en détail le mécanisme de l'Impôt sur les Sociétés (**IS**) et de l'Impôt Minimum Forfaitaire (**IMF**).</li>
          <li>Analyser les spécificités de la détermination du résultat imposable en milieu minier (amortissements, déductibilité des charges).</li>
          <li>Identifier les obligations en matière d'impôts locaux (**CFU**, Patente) et de **Droits d'Enregistrement**.</li>
          <li>Maîtriser le cadre des charges minières spécifiques (Redevance minière, Contribution au Développement Local - **FODEL**).</li>
          <li>Passer en revue les régimes de **stabilité fiscale** et les incitations.</li>
        </ul>
      `
    },
    {
      title: "Impôt sur les Sociétés (IS) - Définition et Assujettissement",
      content: `
        <p class="text-lg font-bold text-teal-700">Définition :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>L’IS frappe les revenus ou bénéfices réalisés par les personnes morales assujetties ayant leur résidence fiscale en Guinée (Art. 15 BIS et TER du CGI).</li>
          <li><span class="font-semibold">Redevable :</span> La personne morale assujettie, en cas de réalisation d’un bénéfice sur l’année d’imposition.</li>
        </ul>
        <p class="text-lg font-bold text-teal-700 mt-4">Personnes Morales Passibles (par Forme) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Sociétés Anonymes (S.A), Sociétés à Responsabilité Limitée (S.A.R.L), Sociétés à Actions Simplifiées (S.A.S), Sociétés d’investissement, Sociétés coopératives.</li>
        </ul>
        <p class="text-lg font-bold text-teal-700 mt-4">Personnes Morales Passibles (par Option) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Sociétés en Nom Collectif (SNC), Sociétés en Commandite Simple (SCS), Groupements d’Intérêts Économiques (GIE), Associations en participation.</li>
        </ul>
      `
    },
    {
      title: "IS - Détermination du Résultat Imposable",
      content: `
        <p class="text-lg font-bold text-teal-700">Principe Général :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Le résultat imposable est le résultat net (comptable) après déduction des charges et réintégration des produits non imposables.</li>
          <li><span class="font-semibold">Résultat Fiscal = Résultat Comptable &plusmn; Ajustements (Réintégrations et Déductions).</span></li>
        </ul>
        
        <p class="text-lg font-bold text-teal-700 mt-4">Charges Généralement Déductibles (liste non exhaustive) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Achats de marchandises, matières premières, frais généraux (loyers, entretien, publicité).</li>
          <li>Salaires et charges sociales afférentes au personnel.</li>
          <li>Impôts et taxes, à l'exception de l’IS et de la RTS.</li>
          <li>**Amortissements** régulièrement comptabilisés (dont amortissements miniers).</li>
          <li>**Provisions** constituées en vue de faire face à des pertes ou charges nettement précisées et probables.</li>
          <li>**Intérêts** des sommes laissées ou mises à disposition par les associés (dans la limite des taux applicables).</li>
        </ul>
      `
    },
    {
      title: "IS - Spécificités des Amortissements Miniers et Report Déficitaire",
      content: `
        <p class="text-lg font-bold text-teal-700">Amortissements Miniers (Code Minier - CM) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Durée :</span> Se fait généralement sur la durée du permis d’exploitation (mode linéaire).</li>
          <li><span class="font-semibold">Amortissement Accéléré (Art. 171 CM) :</span> Les investissements sont amortissables la première année d'exploitation (démarrage de la production) jusqu'à <span class="font-bold text-red-600">25%</span> de leur valeur.</li>
          <li><span class="font-semibold">Exonération :</span> Les sociétés minières sont exonérées d'IS et d’IMF pendant la période de recherche/exploration et la période de développement/construction (jusqu'à la date de démarrage de la production).</li>
        </ul>
        
        <p class="text-lg font-bold text-teal-700 mt-4">Report Déficitaire :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Durée :</span> Les déficits subis sont reportables **sans limitation de durée** sur les exercices bénéficiaires suivants.</li>
          <li><span class="font-semibold">Imputation :</span> L'imputation est limitée à **50%** du bénéfice fiscal réalisé au cours de l'exercice concerné.</li>
          <li>*Exception :* Cette règle des 50% ne s'applique pas si le déficit est causé par des **Amortissements Techniques**.</li>
        </ul>
      `
    },
    {
      title: "IS - Taux, Acomptes et Échéances",
      content: `
        <p class="text-lg font-bold text-teal-700">Taux de l’IS :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Taux Standard (CGI) :</span> <span class="font-bold text-red-600">30%</span> du résultat fiscal.</li>
          <li><span class="font-semibold">Taux Minier (Code Minier / Convention) :</span> Peut être majoré à <span class="font-bold text-red-600">35%</span> selon les dispositions spécifiques de la Convention Minière.</li>
        </ul>

        <p class="text-lg font-bold text-teal-700 mt-4">Déclaration et Échéance :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Déclaration Annuelle :</span> Au plus tard le <span class="font-bold">30 avril</span> de l'année suivant l'exercice clos (N+1).</li>
          <li>Elle doit inclure le bilan, le tableau de détermination du résultat fiscal et le calcul de l'impôt dû.</li>
        </ul>

        <p class="text-lg font-bold text-teal-700 mt-4">Acomptes Provisionnels :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>**Trois acomptes** sont dus, chacun égal à **25%** de l’IS de référence (IS de l'année précédente).</li>
          <li><span class="font-semibold">Échéances :</span> 15 mai (Acompte 1), 15 août (Acompte 2), 15 novembre (Acompte 3).</li>
        </ul>
      `
    },
    {
      title: "Impôt Minimum Forfaitaire (IMF)",
      content: `
        <p class="text-lg font-bold text-teal-700">Principe et Assiette :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Nature :</span> Impôt minimal annuel dû par les passibles de l’IS, même en cas de déficit.</li>
          <li><span class="font-semibold">Assiette :</span> Le **Chiffre d'Affaires Hors Taxes (CA HT)** de l'exercice précédent.</li>
          <li><span class="font-semibold">Taux :</span> <span class="font-bold text-red-600">3%</span> du Chiffre d'Affaires Hors Taxes.</li>
          <li><span class="font-semibold">Imputation :</span> L'IMF est **imputable** sur l'IS dû. La fraction non imputable **n'est pas reportable**.</li>
        </ul>

        <p class="text-lg font-bold text-teal-700 mt-4">Obligation et Dispenses :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Échéance :</span> Déclaration et paiement au plus tard le <span class="font-bold">15 janvier</span> de l’année d’imposition (via Etax).</li>
          <li><span class="font-semibold">Dispenses :</span> Sociétés exonérées d’IS (ex. : Sycamore pendant la phase de recherche/développement), sociétés nouvelles pour leur première année civile.</li>
        </ul>
      `
    },
    {
      title: "Impôts Locaux : CFU, Patente et Redevance de Superficie",
      content: `
        <p class="text-lg font-bold text-teal-700">1. Contribution Foncière Unique (CFU) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Nature :</span> Impôt local sur le foncier bâti et non bâti.</li>
          <li><span class="font-semibold">Application Minière :</span> Le Code Minier prévoit une **Contribution Foncière Spécifique** applicable aux concessions minières (Art. 165 CM), basée sur la valeur ou la superficie.</li>
        </ul>

        <p class="text-lg font-bold text-teal-700 mt-4">2. Patente (Contribution des Patentes) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Nature :</span> Impôt annuel sur l'exercice d'une activité professionnelle non salariée.</li>
          <li><span class="font-semibold">Composition :</span> Droit fixe (tarifaire) + Droit proportionnel (basé sur la valeur locative des locaux).</li>
          <li><span class="font-semibold">Exonération :</span> Souvent temporaire pour les sociétés minières pendant les phases de recherche et de développement.</li>
        </ul>

        <p class="text-lg font-bold text-teal-700 mt-4">3. Redevance de Superficie (Code Minier) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>C'est une redevance **annuelle** et **distincte** de la CFU, calculée par kilomètre carré de permis minier détenu (Art. 171 CM).</li>
        </ul>
      `
    },
    {
      title: "Droits d'Enregistrement (DE)",
      content: `
        <p class="text-lg font-bold text-teal-700">Principe des Droits d'Enregistrement :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Nature :</span> Impôts indirects perçus lors de l'enregistrement de certains actes juridiques, conférant date certaine.</li>
          <li><span class="font-semibold">Actes Minés :</span>
            <ul class="list-circle ml-6 mt-1">
              <li>Constitution et augmentation de capital.</li>
              <li>Cessions d'actions, de parts sociales (mutations de titres).</li>
              <li>Mutations d'immeubles et baux.</li>
            </ul>
          </li>
          <li><span class="font-semibold">Taux :</span> Varient selon la nature de l'acte.</li>
          <li><span class="font-semibold">Spécificité Minière :</span> Les Conventions Minières peuvent prévoir des exonérations ou des taux réduits pour certaines opérations.</li>
        </ul>
      `
    },
    {
      title: "Charges Minières Spécifiques - Redevance Minière",
      content: `
        <p class="text-lg font-bold text-teal-700">Redevance Minière sur la Production et l'Exportation (Art. 161 à 163 CM) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Nature :</span> Impôt spécifique sur la valeur du produit minier extrait ou exporté.</li>
          <li><span class="font-semibold">Assiette :</span> Prix de vente ou valeur de référence du produit minier au point d'exportation (selon les termes du Code Minier et de la convention).</li>
          <li><span class="font-semibold">Taux :</span> Varie en fonction de la substance minérale (Or, Bauxite, Fer) et des clauses de la Convention (pourcentage du prix de vente).</li>
          <li>**Importance :** Essentiel pour la gestion de la trésorerie et le respect des obligations fiscales de Sycamore.</li>
        </ul>
      `
    },
    {
      title: "Charges Minières Spécifiques - Contribution au Développement Local (FODEL)",
      content: `
        <p class="text-lg font-bold text-teal-700">Contribution au Développement Local (FODEL) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Principe (Art. 130 et s. CM) :</span> Obligation pour les sociétés minières de contribuer au développement des collectivités locales impactées.</li>
          <li><span class="font-semibold">Alimentation du Fonds :</span> Alimenté par un pourcentage du **Chiffre d’Affaires Minier**, généralement entre **0,5% et 1%**.</li>
          <li><span class="font-semibold">Objectif :</span> Financer des projets communautaires locaux (écoles, santé, infrastructures).</li>
          <li><span class="font-semibold">Obligation de Sycamore :</span> Prévoir une ligne budgétaire annuelle dédiée à cette contribution.</li>
        </ul>
      `
    },
    {
      title: "Régimes de Stabilité Fiscale et Incitations",
      content: `
        <p class="text-lg font-bold text-teal-700">Stabilité Fiscale (Art. 172 et s. Code Minier) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Objectif :</span> Sécuriser les investissements miniers et garantir la prévisibilité.</li>
          <li><span class="font-semibold">Garantie :</span> Stabilité des principaux régimes fiscaux et douaniers, souvent pendant une période déterminée (ex. **15 ans** après le démarrage de la production commerciale).</li>
        </ul>
        
        <p class="text-lg font-bold text-teal-700 mt-4">Incitations Fiscales (Minières) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>**Amortissement Accéléré** (jusqu'à 25% la 1ère année).</li>
          <li>**Exonérations temporaires** de Droits de Douane et de TVA sur les équipements miniers importés pendant les phases de recherche/développement.</li>
          <li>Déductions spécifiques liées aux investissements en infrastructures (si elles bénéficient aux collectivités).</li>
        </ul>
      `
    }
  ]
};

// 2. Composant de Slide pour le rendu d'une diapositive individuelle
const Slide = ({ slide, index }) => (
  <div className="slide bg-white p-6 md:p-8 rounded-xl shadow-lg mb-6 transition duration-300 ease-in-out hover:shadow-xl border-t-4 border-green-500">
    <h2 className="text-xl md:text-3xl font-extrabold text-gray-800 border-b-2 border-gray-200 pb-3 mb-5">
      {index + 1}. {slide.title}
    </h2>
    {/* ATTENTION: DangerouslySetInnerHTML est utilisé ici car le contenu est une chaîne HTML. 
      Dans un vrai projet, il faudrait convertir ce HTML en JSX sécurisé.
      Pour la démonstration, on utilise dangerouslySetInnerHTML. 
    */}
    <div 
      className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base"
      dangerouslySetInnerHTML={{ __html: slide.content }}
    />
  </div>
);

// 3. Composant principal de la page
export default function Page() {
  const { header, slides } = content;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto rounded-xl shadow-2xl overflow-hidden">
        
        {/* En-tête de la page */}
        <header className="bg-blue-800 text-white p-6 md:p-8 rounded-t-xl">
          <h1 className="text-2xl md:text-4xl font-black mb-1">{header.title}</h1>
          <p className="text-base md:text-xl opacity-90">{header.subtitle}</p>
        </header>

        {/* Contenu principal: Slides */}
        <main className="p-4 md:p-8 bg-gray-100">
          {/* Correction de l'erreur: s'assurer que 'slides' est bien un tableau et mappé dans un composant */}
          {slides && slides.map((slide, index) => (
            <Slide key={index} slide={slide} index={index} />
          ))}
        </main>
        
        {/* Pied de page */}
        <footer className="text-center text-gray-500 p-4 bg-white rounded-b-xl border-t">
          &copy; Formation Fiscalité Minière - Jour 4 (Component Next.js)
        </footer>
      </div>
    </div>
  );
}
