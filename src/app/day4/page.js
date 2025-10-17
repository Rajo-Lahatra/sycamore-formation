/**
 * Contenu détaillé du Jour 4: IS, IMF, CFU, Droit d'enregistrement, Patente et Charges Minières Spécifiques.
 * Les informations proviennent du support de formation "Sycamore - Fiscalité minière".
 */
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
          <li>Comprendre en détail le mécanisme de l'Impôt sur les Sociétés (IS) et de l'Impôt Minimum Forfaitaire (IMF).</li>
          <li>Analyser les spécificités de la détermination du résultat imposable en milieu minier (amortissements, déductibilité des charges).</li>
          <li>Identifier les obligations en matière d'impôts locaux (CFU, Patente) et de Droits d'Enregistrement.</li>
          <li>Maîtriser le cadre des charges minières spécifiques (Redevance minière, Contribution au Développement Local - FODEL).</li>
          <li>Passer en revue les régimes de stabilité fiscale et les incitations.</li>
        </ul>
      `
    },
    {
      title: "Impôt sur les Sociétés (IS) - Définition et Assujettissement",
      content: `
        <p class="text-lg font-bold text-teal-700">Définition :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>L’IS est un impôt qui frappe les revenus ou bénéfices réalisés par les personnes morales assujetties ayant leur résidence fiscale en Guinée.</li>
          <li>Il concerne également les entreprises ayant un Établissement Stable (ES) en Guinée (Art. 15 BIS et TER du CGI).</li>
          <li><span class="font-semibold">Redevable :</span> La personne morale assujettie est redevable de l’Impôt en cas de réalisation d’un bénéfice sur l’année d’imposition (l’exercice fiscal).</li>
        </ul>
        <p class="text-lg font-bold text-teal-700 mt-4">Personnes Morales Passibles (par Forme) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Sociétés Anonymes (S.A), Sociétés à Responsabilité Limitée (S.A.R.L), Sociétés à Actions Simplifiées (S.A.S).</li>
          <li>Sociétés d’investissement à capital fixe ou variable, Sociétés coopératives et leurs unions.</li>
        </ul>
        <p class="text-lg font-bold text-teal-700 mt-4">Personnes Morales Passibles (par Option) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Sociétés en Nom Collectif (SNC), Sociétés en Commandite Simple (SCS).</li>
          <li>Groupements d’Intérêts Économiques (GIE), Associations en participation.</li>
        </ul>
      `
    },
    {
      title: "IS - Détermination du Résultat Imposable",
      content: `
        <p class="text-lg font-bold text-teal-700">Principe Général :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Le résultat imposable est le résultat net (comptable) de l’exercice, déterminé selon les règles du Plan Comptable Guinéen (PCG), après déduction des charges et réintégration des produits non imposables.</li>
          <li><span class="font-semibold">Résultat Fiscal = Résultat Comptable ± Ajustements (Réintégrations et Déductions).</span></li>
        </ul>
        
        <p class="text-lg font-bold text-teal-700 mt-4">Charges Généralement Déductibles :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Achats de marchandises, matières premières et fournitures, frais généraux (loyers, entretien, publicité, etc.).</li>
          <li>Salaires et charges sociales afférentes au personnel.</li>
          <li>Impôts et taxes, à l'exception de l’IS et de la RTS.</li>
          <li>Amortissements régulièrement comptabilisés (dont amortissements miniers).</li>
          <li>Provisions constituées en vue de faire face à des pertes ou charges nettement précisées et probables.</li>
          <li>Intérêts des sommes laissées ou mises à disposition par les associés (dans la limite des taux applicables).</li>
          <li>Dons et subventions (avec limites et conditions spécifiques).</li>
        </ul>
      `
    },
    {
      title: "IS - Spécificités des Amortissements Miniers et Report Déficitaire",
      content: `
        <p class="text-lg font-bold text-teal-700">Amortissements Miniers (Code Minier) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Durée d’Amortissement :</span> Se fait généralement sur la durée du permis d’exploitation.</li>
          <li><span class="font-semibold">Méthode :</span> Le mode linéaire est la règle.</li>
          <li><span class="font-semibold">Amortissement Accéléré (Art. 171 CM) :</span> Il est prévu par le Code Minier. Pour les entreprises ayant obtenu un permis d'exploitation, les investissements sont amortissables la première année d'exploitation (démarrage de la production) jusqu'à <span class="font-bold">25%</span> de leur valeur.</li>
          <li><span class="font-semibold">Exonération :</span> Les sociétés minières sont exonérées d'IS et d’IMF pendant la période de recherche/exploration et la période de développement/construction (jusqu'à la date de démarrage de la production).</li>
        </ul>
        
        <p class="text-lg font-bold text-teal-700 mt-4">Report Déficitaire :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Durée :</span> Les déficits subis au cours d’un exercice sont reportables sans limitation de durée sur les exercices bénéficiaires suivants.</li>
          <li><span class="font-semibold">Imputation :</span> L'imputation est limitée à <span class="font-bold">50%</span> du bénéfice fiscal réalisé au cours de l'exercice concerné.</li>
          <li>*Note :* Cette règle des 50% ne s'applique pas si le déficit est causé par des Amortissements Techniques.</li>
        </ul>
      `
    },
    {
      title: "IS - Taux, Acomptes et Échéances",
      content: `
        <p class="text-lg font-bold text-teal-700">Taux de l’IS :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Taux Standard (CGI) :</span> <span class="font-bold text-red-600">30%</span> du résultat fiscal.</li>
          <li><span class="font-semibold">Taux Minier (Code Minier / Convention) :</span> Peut être majoré à <span class="font-bold text-red-600">35%</span> selon les dispositions spécifiques de la Convention Minière ou du Code Minier.</li>
        </ul>

        <p class="text-lg font-bold text-teal-700 mt-4">Déclaration et Échéance :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Déclaration :</span> La déclaration annuelle de l'IS doit être déposée au plus tard le <span class="font-bold">30 avril</span> de l'année suivant l'exercice clos (année N+1).</li>
          <li>Elle doit être accompagnée du bilan, du tableau de détermination du résultat fiscal et du calcul de l'impôt dû.</li>
        </ul>

        <p class="text-lg font-bold text-teal-700 mt-4">Acomptes Provisionnels :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li>Les sociétés sont tenues de verser trois acomptes provisionnels au titre de l’IS de l'exercice en cours, chacun égal à <span class="font-bold">25%</span> de l’impôt de référence (IS de l'année précédente).</li>
          <li><span class="font-semibold">Échéances des Acomptes :</span>
            <ul class="list-circle ml-6 mt-1">
              <li>Acompte 1 : 15 mai</li>
              <li>Acompte 2 : 15 août</li>
              <li>Acompte 3 : 15 novembre</li>
            </ul>
          </li>
          <li>L’excédent d'acomptes est imputable sur les années suivantes.</li>
        </ul>
      `
    },
    {
      title: "Impôt Minimum Forfaitaire (IMF)",
      content: `
        <p class="text-lg font-bold text-teal-700">Définition et Assiette :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Définition :</span> L'IMF est un impôt minimal annuel dû par les personnes morales passibles de l’IS, y compris celles qui réalisent un déficit fiscal. Il constitue un minimum de perception fiscale.</li>
          <li><span class="font-semibold">Assiette :</span> Le Chiffre d'Affaires Hors Taxes (CA HT) de l'exercice précédent.</li>
          <li><span class="font-semibold">Taux :</span> <span class="font-bold text-red-600">3%</span> du Chiffre d'Affaires Hors Taxes.</li>
          <li><span class="font-semibold">Imputation :</span> Les sommes versées au titre de l'IMF sont <span class="font-bold">imputables</span> sur l'Impôt sur les Sociétés dû. La fraction non imputable n'est <span class="font-bold">pas reportable</span> sur les exercices suivants.</li>
        </ul>

        <p class="text-lg font-bold text-teal-700 mt-4">Échéances et Entreprises Dispensées :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Échéance :</span> Déclaration et paiement au plus tard le <span class="font-bold">15 janvier</span> de l’année d’imposition (sur formulaire électronique Etax).</li>
          <li><span class="font-semibold">Dispenses :</span> Sont notamment dispensées :
            <ul class="list-circle ml-6 mt-1">
              <li>Les sociétés et personnes morales exonérées de l’IS (ex. : Sycamore pendant la phase de recherche/développement, selon les clauses du Code Minier).</li>
              <li>Les sociétés nouvelles pour la première année civile de leur exploitation.</li>
              <li>Les associations non soumises à l’IS.</li>
            </ul>
          </li>
        </ul>
        <p class="italic mt-4 text-sm text-gray-600">Même en cas de déficit (situation fréquente en début d'exploitation), l'entreprise minière reste généralement redevable de l'IMF, sauf si elle bénéficie d'une exonération temporaire due à sa phase d'activité.</p>
      `
    },
    {
      title: "Impôts et Taxes Locales (CFU, Patente)",
      content: `
        <p class="text-lg font-bold text-teal-700">1. Contribution Foncière Unique (CFU) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Nature :</span> Impôt local sur le foncier bâti et non bâti, ainsi que les concessions minières.</li>
          <li><span class="font-semibold">Application Minière :</span> Le Code Minier prévoit une <span class="font-bold">Contribution Foncière Spécifique</span> applicable aux concessions minières (Art. 165 CM).</li>
          <li><span class="font-semibold">Assiette et Taux :</span> Dépend de la valeur locative (bâti) ou de la superficie (non bâti), avec des taux et modalités fixés par la loi de finances et les textes spécifiques au Code Minier.</li>
          <li><span class="font-semibold">Redevance de Superficie :</span> Elle est distincte et annuelle, calculée par kilomètre carré de permis minier (Art. 171 CM).</li>
        </ul>

        <p class="text-lg font-bold text-teal-700 mt-4">2. Patente (Contribution des Patentes) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Nature :</span> Impôt annuel dû par toute personne physique ou morale qui exerce une activité professionnelle non salariée.</li>
          <li><span class="font-semibold">Composition :</span> Elle est composée d'un droit fixe (tarifaire, selon l'activité) et d'un droit proportionnel (basé sur la valeur locative des locaux professionnels).</li>
          <li><span class="font-semibold">Patente Proportionnelle :</span> Elle est classée parmi les impôts locaux.</li>
          <li><span class="font-semibold">Exonération Minière :</span> Le Code Minier prévoit souvent une exonération temporaire de la Patente pour les sociétés minières pendant les phases de recherche et de développement.</li>
        </ul>
      `
    },
    {
      title: "Droits d'Enregistrement (DE)",
      content: `
        <p class="text-lg font-bold text-teal-700">Principe des Droits d'Enregistrement :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Définition :</span> Impôts indirects perçus à l'occasion de l'accomplissement de certaines formalités (enregistrement, mutation, etc.) qui confèrent date certaine aux actes juridiques.</li>
          <li><span class="font-semibold">Actes les plus courants :</span>
            <ul class="list-circle ml-6 mt-1">
              <li>Constitution et augmentation de capital de sociétés.</li>
              <li>Cessions d'actions, de parts sociales ou de fonds de commerce.</li>
              <li>Mutations d'immeubles (acquisitions de terrains, etc.).</li>
              <li>Baux et certains contrats.</li>
            </ul>
          </li>
          <li><span class="font-semibold">Taux :</span> Varient selon la nature de l'acte. Par exemple, les cessions d'actions sont soumises à un taux spécifique.</li>
          <li><span class="font-semibold">Spécificité Minière :</span> Les Conventions Minières peuvent prévoir des exonérations ou des taux réduits pour certaines opérations de constitution ou de mutation de titres sociaux liées au projet minier.</li>
        </ul>
      `
    },
    {
      title: "Charges Minières Spécifiques - Redevance Minière",
      content: `
        <p class="text-lg font-bold text-teal-700">Redevance Minière sur la Production et l'Exportation (Art. 161 à 163 CM) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Nature :</span> C'est l'impôt spécifique le plus important du secteur. Il est calculé sur la valeur du produit minier extrait ou exporté.</li>
          <li><span class="font-semibold">Assiette :</span> Prix de vente ou valeur de référence du produit minier au point d'exportation (selon les termes du Code Minier et de la convention).</li>
          <li><span class="font-semibold">Taux :</span> Varie en fonction du type de substance minérale (ex. : Or, Bauxite, Fer) et des clauses de la Convention. Il s'agit d'un pourcentage du prix de vente.</li>
          <li><span class="font-semibold">Rôle pour Sycamore :</span> Pour Sycamore Mine Guinée SAU, la connaissance précise des taux et des modalités de détermination de la valeur du produit est cruciale pour la gestion de la trésorerie et le respect des obligations fiscales.</li>
        </ul>
      `
    },
    {
      title: "Charges Minières Spécifiques - Contribution au Développement Local (FODEL)",
      content: `
        <p class="text-lg font-bold text-teal-700">Contribution au Développement Local (FODEL) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Principe (Art. 130 et s. CM) :</span> Les sociétés minières ont l'obligation de contribuer au développement économique et social des collectivités locales impactées par leurs activités.</li>
          <li><span class="font-semibold">Alimentation du Fonds :</span> Le Fonds de Développement Local (FODEL) est alimenté par un pourcentage du Chiffre d’Affaires Minier. Ce pourcentage est généralement fixé entre <span class="font-bold">0,5% et 1%</span>.</li>
          <li><span class="font-semibold">Objectif :</span> Financer des projets communautaires locaux (écoles, santé, infrastructures) pour atténuer l'impact des opérations minières.</li>
          <li><span class="font-semibold">Gouvernance :</span> La gestion du FODEL est effectuée conjointement par les collectivités, l’État, avec une implication des sociétés minières.</li>
          <li><span class="font-semibold">Obligation de Sycamore :</span> L'entreprise doit prévoir et budgétiser une ligne annuelle dédiée à cette contribution.</li>
        </ul>
      `
    },
    {
      title: "Régimes de Stabilité Fiscale et Incitations",
      content: `
        <p class="text-lg font-bold text-teal-700">Stabilité Fiscale (Art. 172 et s. Code Minier) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Objectif :</span> Sécuriser les investissements miniers et garantir une prévisibilité pour les projets à forte intensité capitalistique.</li>
          <li><span class="font-semibold">Garantie :</span> Garantie de stabilité des principaux régimes fiscaux et douaniers applicables, souvent pendant une période déterminée (<span class="font-bold">ex. 15 ans</span> après le démarrage de la production commerciale).</li>
          <li><span class="font-semibold">Protection :</span> Protège l'entreprise contre les hausses soudaines de fiscalité générale ou spécifique.</li>
        </ul>
        
        <p class="text-lg font-bold text-teal-700 mt-4">Incitations Fiscales (Minières) :</p>
        <ul class="list-disc ml-6 space-y-2">
          <li><span class="font-semibold">Amortissement Accéléré :</span> Déjà mentionné (jusqu'à 25% la 1ère année d'exploitation).</li>
          <li><span class="font-semibold">Douane et TVA :</span> Exonérations temporaires de Droits de Douane et de TVA sur les équipements et intrants miniers importés pendant les phases de recherche/développement (Code Minier).</li>
          <li><span class="font-semibold">Déductions :</span> Possibilité de déductions spécifiques liées aux investissements en infrastructures (routes, ports, etc.) si ces dernières bénéficient également aux collectivités.</li>
        </ul>
        <p class="italic mt-4 text-sm text-gray-600">Ces mécanismes sont essentiels pour la rentabilité et la planification à long terme du projet Sycamore.</p>
      `
    }
  ]
};

// --- Rendu du composant (basé sur le format des jours précédents) ---
// Note: Le composant réel de rendu (par exemple, en React ou HTML/JS) devrait prendre ce JSON
// et l'afficher sous forme de slides avec le titre et le contenu appropriés.
// Pour ce fichier page.js, nous fournissons la structure de données demandée.

const renderSlide = (slide, index) => {
  return `
    <div class="slide bg-white p-8 rounded-lg shadow-xl mb-6 transition duration-300 ease-in-out hover:shadow-2xl">
      <h2 class="text-3xl font-extrabold text-gray-800 border-b-4 border-green-500 pb-3 mb-5">${index + 1}. ${slide.title}</h2>
      <div class="text-gray-700 leading-relaxed space-y-4">
        ${slide.content}
      </div>
    </div>
  `;
};

const renderContent = (data) => {
  const slidesHtml = data.slides.map(renderSlide).join('');
  return `
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      body {
        font-family: 'Inter', sans-serif;
        background-color: #f0f4f8;
        padding: 20px;
      }
      .container {
        max-width: 1000px;
        margin: auto;
      }
    </style>
    <div class="container rounded-xl">
      <header class="bg-blue-800 text-white p-6 rounded-t-xl shadow-lg mb-8">
        <h1 class="text-4xl font-black mb-1">${data.header.title}</h1>
        <p class="text-xl opacity-90">${data.header.subtitle}</p>
      </header>
      <main>
        ${slidesHtml}
      </main>
      <footer class="text-center text-gray-500 mt-8 pb-4">
        &copy; Formation Fiscalité Minière - Jour 4
      </footer>
    </div>
  `;
};

// Export du contenu JSON et du rendu pour l'environnement
const output = renderContent(content);

// Affichage du contenu
document.getElementById('app').innerHTML = output;

// Pour éviter les erreurs dans l'environnement d'exécution si ce fichier est traité comme un module
// La variable 'content' est la structure de données principale utilisée.
console.log("Contenu Jour 4 chargé et structuré.");
