import React from 'react';
// --- STRUCTURES DE COMPOSANTS SIMPLIFIÉES POUR L'AUTONOMIE ---

// ContentWrapper Component (simplifié)
const ContentWrapper = ({ title, date, children }) => (
    <div className="p-4 md:p-8 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <header className="mb-8 border-b border-gray-300 dark:border-gray-700 pb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-sycamore-green">{title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{date}</p>
        </header>
        <main>{children}</main>
    </div>
);

// SlideShow Component (simplifié, assume Tailwind CSS)
const SlideShow = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const totalSlides = slides.length;
    const currentSlide = slides[currentSlideIndex];

    const goToNext = () => {
        setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
    };

    const goToPrevious = () => {
        setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">
            <div className="p-6">
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <p>Diapositive {currentSlideIndex + 1} / {totalSlides}</p>
                    <p className="font-semibold">{currentSlide.title}</p>
                </div>

                {/* Contenu de la diapositive */}
                <div className="slide-content text-gray-700 dark:text-gray-200" style={{ minHeight: '400px' }}>
                    {currentSlide.content}
                </div>
            </div>

            {/* Contrôles de navigation */}
            <div className="flex justify-between p-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
                <button
                    onClick={goToPrevious}
                    disabled={currentSlideIndex === 0}
                    className="px-4 py-2 bg-sycamore-green text-white font-medium rounded-md shadow-md hover:bg-opacity-90 disabled:opacity-50 transition duration-150"
                >
                    &larr; Précédent
                </button>
                <button
                    onClick={goToNext}
                    disabled={currentSlideIndex === totalSlides - 1}
                    className="px-4 py-2 bg-sycamore-green text-white font-medium rounded-md shadow-md hover:bg-opacity-90 disabled:opacity-50 transition duration-150"
                >
                    Suivant &rarr;
                </button>
            </div>
        </div>
    );
};

// --- FIN STRUCTURES DE COMPOSANTS SIMPLIFIÉES ---


// Fonction d'aide pour générer une structure de slide uniforme
const createSlide = (title, content, citation) => ({
    title,
    content: (
        <>
            <h2 className="slide-title text-xl font-bold mb-3 text-sycamore-green">{title}</h2>
            <div className="text-base leading-relaxed">
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            {citation && <p className="mt-4 text-xs text-gray-500" style={{ textAlign: 'left', fontStyle: 'italic' }}>{citation}</p>}
        </>
    )
});

// --- Contenu Détaillé du Jour 4 : IS, IMF et Charges Minières ---

const slidesData = [
    // SLIDE 1: INTRODUCTION JOUR 4
    createSlide(
        "Jour 4 : Impôt sur les Sociétés (IS), IMF, CFU, patente, droits d'enregistrement et Régime spécifique des charges minières",
        `
        <div style="font-size: 1.1em;">
            <p><strong>4ème Partie : LA FISCALITÉ DIRECTE DES BÉNÉFICES ET DES BIENS</strong></p>
            <p style="font-size: 1.2em; color: var(--fuel-yellow);"><strong>Objectif :</strong> Comprendre le calcul de l'IS et de l'IMF, et maîtriser la déductibilité des charges spécifiques au secteur minier.</p>
            <p><strong>Programme :</strong></p>
            <ul>
                <li><strong>CHAPITRE 4 : Impôt sur les Sociétés (IS) et Impôt Minimum Forfaitaire (IMF)</strong></li>
                <ul>
                    <li>Base imposable, charges déductibles, amortissements miniers, Taux.</li>
                </ul>
                <li><strong>CHAPITRE 5 : Autres Impôts Directs et Locaux</strong></li>
                <ul>
                    <li>Contribution Foncière Unique (CFU), Patente Professionnelle.</li>
                    <li>Droits d’Enregistrement et de Timbre.</li>
                </ul>
                <li><strong>CHAPITRE 6 : Contribution au Développement Local et Régimes Incitatifs</strong></li>
            </ul>
        </div>
        `,
        "Jeudi 23 octobre 2025"
    ),

    // -------------------------------------------------------------------------
    // CHAPITRE 4 : IS et IMF
    // -------------------------------------------------------------------------

    // SLIDE 2: IS - DÉFINITION
    createSlide(
        "Impôt sur les Sociétés (IS) : Définition et Champ d'Application",
        `
        <h3>Qu'est-ce-que c'est?</h3>
        <p>L’Impôt sur les Sociétés est un impôt qui frappe les revenus ou bénéfices réalisés par les personnes morales assujetties ayant leur <strong>résidence fiscale en GUINÉE</strong>, ou par les entreprises ayant un <strong>établissement stable</strong> en GUINÉE (conformément aux articles 15 BIS et TER du CGI).</p>
        <h3>Redevable</h3>
        <p>La personne morale assujettie (comme Sycamore) est redevable de l’Impôt en cas de réalisation d’un bénéfice sur l’année d’imposition (l’exercice fiscal).</p>
        <h3>Taux Standard</h3>
        <p>Le taux standard de l'Impôt sur les Sociétés en Guinée est de <strong>35%</strong>.</p>
        `
    ),

    // SLIDE 3: IS - PERSONNES MORALES PASSIBLES
    createSlide(
        "IS - Personnes Morales Passibles",
        `
        <h3>En raison de leur forme (systématiquement assujetties)</h3>
        <ul>
            <li>Les Sociétés Anonymes (S.A)</li>
            <li>Les Sociétés à Responsabilité Limitée (S.A.R.L)</li>
            <li>Les Sociétés par Actions Simplifiées (SAS)</li>
            <li>Les sociétés d’investissement à capital fixe ou variable, les sociétés coopératives et leurs unions.</li>
        </ul>
        <h3>Par option</h3>
        <p>Peut choisir d'être soumises à l'IS (au lieu de l'Impôt sur le Revenu des Personnes Physiques):</p>
        <ul>
            <li>Les Sociétés en Nom Collectif</li>
            <li>Les Sociétés en Commandite Simple</li>
            <li>Groupements d’Intérêts Économiques</li>
            <li>Les associations en participation.</li>
        </ul>
        <h3>En raison de leurs activités</h3>
        <p>Les sociétés civiles qui se livrent à une exploitation ou à des opérations de nature commerciale, industrielle, artisanale ou minière.</p>
        `
    ),

    // SLIDE 4: IS - ASSIETTE ET CHARGES DÉDUCTIBLES (PRINCIPES)
    createSlide(
        "IS - Assiette, Bénéfice Net et Charges Déductibles",
        `
        <h3>Détermination du Bénéfice Net (Assiette)</h3>
        <p>L’IS est calculé sur le Bénéfice Net obtenu après déduction de toutes les charges et amortissements nécessaires à l’activité.</p>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-3 border-l-4 border-sycamore-green mt-3">
            <strong>Bénéfice Net Imposable</strong> = Produits Imposables - Charges Déductibles
        </div>
        <h3>Conditions Générales de Déductibilité des Charges</h3>
        <p>Pour être déductible, une charge doit :</p>
        <ul>
            <li>Être exposée dans l’intérêt direct de l’exploitation (nécessité).</li>
            <li>Être justifiée par une pièce probante (facture, contrat).</li>
            <li>Être comptabilisée dans l’exercice concerné.</li>
            <li>Ne pas être une charge somptuaire ou personnelle.</li>
            <li>Ne pas être frappée d’une limitation légale (ex: certains dons, loyers).</li>
        </ul>
        `
    ),

    // SLIDE 5: IS - SPÉCIFICITÉS DES CHARGES MINIÈRES
    createSlide(
        "IS - Spécificités des Charges dans le Secteur Minier",
        `
        <h3>Charges de Recherche et d'Exploration</h3>
        <ul>
            <li>Les dépenses de recherche et d’exploration (forages, études géologiques) peuvent être :
                <ul>
                    <li>Soit déduites immédiatement dans l'exercice de leur engagement.</li>
                    <li>Soit immobilisées et amorties sur une durée spécifique (régime d’amortissement accéléré autorisé par le Code Minier).</li>
                </ul>
            </li>
        </ul>
        <h3>Amortissement Accéléré (Incentive)</h3>
        <p>Le Code Minier permet aux entreprises d'appliquer l'<strong>amortissement accéléré</strong> sur certains équipements, permettant une déduction fiscale plus rapide en début de projet (raccourcissant la période de récupération de l’investissement).</p>
        <h3>Déductibilité des Redevances</h3>
        <ul>
            <li>Les <strong>Redevances Minières</strong> sur la production sont des charges déductibles du résultat fiscal pour le calcul de l'IS.</li>
            <li>Les <strong>Redevances pour services</strong> (RNS) supportées par la société et non récupérables (si applicable) sont également déductibles.</li>
        </ul>
        `
    ),

    // SLIDE 6: IMPÔT MINIMUM FORFAITAIRE (IMF)
    createSlide(
        "Impôt Minimum Forfaitaire (IMF)",
        `
        <h3>Définition et Taux</h3>
        <p>L’IMF est un impôt forfaitaire calculé sur le chiffre d’affaires (CA). Il représente un impôt minimum que l’entreprise doit payer, même en l’absence de bénéfice.</p>
        <ul>
            <li><strong>Taux :</strong> <strong>1%</strong> du Chiffre d’Affaires Total (CA HT).</li>
            <li><strong>Plafond :</strong> L'IMF payé est déductible de l'IS dû.</li>
            <li><strong>Neutralité :</strong> Si l’IS est supérieur à l’IMF, seul l’IS est payé. Si l’entreprise est déficitaire (ou si l'IS est inférieur à l'IMF), l’entreprise paye l’IMF (situation fréquente en début d’exploitation).</li>
        </ul>
        <h3>Entreprises Dispensées</h3>
        <p>Le Code Minier exonère temporairement l’IMF pour les sociétés minières dans certains cas :</p>
        <ul>
            <li>La première année civile de leur exploitation (sociétés nouvelles).</li>
            <li>Pendant la phase de recherche/exploration (selon les termes de la Convention minière).</li>
        </ul>
        `
    ),

    // SLIDE 7: IMF - ÉCHÉANCES ET MODALITÉS
    createSlide(
        "IMF - Échéances et Modalités de Déclaration",
        `
        <h3>Déclaration et Paiement</h3>
        <ul>
            <li>L'Impôt Minimum Forfaitaire (IMF) est déclaré sur un formulaire électronique disponible sur la plateforme <strong>Etax</strong>.</li>
            <li>La déclaration et le paiement doivent intervenir au plus tard le <strong>15 janvier</strong> de l’année d’imposition.</li>
        </ul>
        <h3>Imputation et Report</h3>
        <ul>
            <li>Les sommes payées au titre de l’IMF sont directement <strong>imputables</strong> sur le montant de l’IS et des acomptes.</li>
            <li>La fraction de l’IMF qui n’a pas pu être imputée sur l’IS de l'exercice <strong>n'est pas reportable</strong> sur les exercices suivants.</li>
        </ul>
        `
    ),

    // -------------------------------------------------------------------------
    // CHAPITRE 5 : AUTRES IMPÔTS ET TAXES
    // -------------------------------------------------------------------------

    // SLIDE 8: CONTRIBUTION FONCIÈRE UNIQUE (CFU)
    createSlide(
        "Contribution Foncière Unique (CFU)",
        `
        <h3>Définition</h3>
        <p>La CFU est un impôt local annuel qui frappe la <strong>propriété bâtie et non bâtie</strong> (terrains et constructions) en Guinée. Elle est due par le propriétaire.</p>
        <h3>CFU vs. Secteur Minier</h3>
        <ul>
            <li>La CFU s'applique aux constructions et terrains possédés par Sycamore qui ne sont <strong>pas directement intégrés</strong> dans le périmètre des activités minières bénéficiant d'un régime spécifique (ex : bureaux en ville, logements hors site minier, entrepôts non couverts par les exonérations du Code Minier).</li>
            <li>Les entreprises minières paient également une <strong>Redevance sur la Superficie</strong> (annuelle par km²), qui est spécifique à l'occupation du titre minier lui-même (Art. 171 Code Minier).</li>
        </ul>
        <h3>Modalités</h3>
        <p>L’assiette est déterminée sur la base de la valeur locative ou vénale des biens. La CFU est généralement déclarée et payée au plus tard le <strong>15 février</strong> de l’année d’imposition.</p>
        `
    ),

    // SLIDE 9: PATENTE PROFESSIONNELLE
    createSlide(
        "Patente Professionnelle",
        `
        <h3>Définition</h3>
        <p>La Patente est un impôt annuel dû par toute personne physique ou morale qui exerce une activité professionnelle non salariée, y compris les sociétés commerciales (Art. 250 CGI).</p>
        <h3>Composantes</h3>
        <ol>
            <li><strong>Droit Fixe :</strong> Varie selon la nature de l’activité et le classement dans la nomenclature (généralement peu élevé pour les grandes entreprises).</li>
            <li><strong>Droit Proportionnel :</strong> Calculé sur la valeur locative des locaux et installations affectés à l’activité (souvent plafonné).</li>
        </ol>
        <h3>Régime Minier</h3>
        <p>Sycamore est assujettie à la Patente sur les établissements et locaux non couverts par les exonérations prévues dans sa convention minière ou le Code Minier.</p>
        <h3>Paiement</h3>
        <p>La Patente est due au <strong>1er janvier</strong> et payable au plus tard le <strong>31 mars</strong> de l'année d'imposition.</p>
        `
    ),

    // SLIDE 10: DROITS D’ENREGISTREMENT ET DE TIMBRE
    createSlide(
        "Droits d’Enregistrement et de Timbre",
        `
        <h3>Droits d'Enregistrement</h3>
        <p>Les Droits d’Enregistrement frappent la formation, la transmission ou la modification de certains actes juridiques et biens.</p>
        <ul>
            <li><strong>Actes concernés :</strong> Cessions d'actions (taux de 1%), cessions d'immeubles (taux de 5% à 10%), constitution/augmentation de capital (souvent un droit fixe).</li>
            <li><strong>Secteur Minier :</strong> Les conventions minières peuvent prévoir des <strong>exonérations ou des taux réduits</strong> pour certains actes liés à la constitution ou à la transmission des titres miniers.</li>
        </ul>
        <h3>Droits de Timbre</h3>
        <p>Le Droit de Timbre est un impôt perçu sur le papier utilisé pour les actes et écrits officiels (ex: passeports, cartes grises, actes notariés).</p>
        <ul>
            <li><strong>Timbre fiscal :</strong> Montant forfaitaire apposé sur les documents selon leur nature (ex: 10 000 GNF pour certains documents juridiques).</li>
        </ul>
        `
    ),

    // -------------------------------------------------------------------------
    // CHAPITRE 6 : REDEVANCES ET INCITATIONS
    // -------------------------------------------------------------------------

    // SLIDE 11: CONTRIBUTION AU DÉVELOPPEMENT LOCAL (CDL)
    createSlide(
        "Contribution au Développement Local (CDL / FODEL)",
        `
        <h3>Principe et Fondement Légal</h3>
        <p>Les sociétés minières doivent <strong>contribuer au développement économique et social</strong> des collectivités locales impactées (articles 130 et suivants du Code Minier).</p>
        <h3>Fonds de Développement Local (FODEL)</h3>
        <ul>
            <li><strong>Source :</strong> Le FODEL est alimenté par un pourcentage du <strong>chiffre d’affaires minier</strong> (le taux peut être entre 0,5% à 1% selon le type de mine).</li>
            <li><strong>Objectif :</strong> Financer des projets communautaires (écoles, santé, infrastructures locales) dans les zones d'opérations.</li>
            <li><strong>Obligation :</strong> Pour Sycamore, il y a une obligation de prévoir une ligne budgétaire annuelle dédiée au FODEL dans sa comptabilité, en plus du versement à l'entité de gestion.</li>
        </ul>
        `
    ),

    // SLIDE 12: RÉGIMES DE STABILITÉ ET INCITATIONS
    createSlide(
        "Régimes de Stabilité Fiscale et Incitations",
        `
        <h3>Objectif</h3>
        <p>Sécuriser l’investissement minier et encourager les projets à forte intensité capitalistique en offrant une meilleure prévisibilité.</p>
        <h3>Stabilité Fiscale (Art. 172 et s. Code Minier)</h3>
        <ul>
            <li><strong>Garantie :</strong> Stabilité des principaux régimes fiscaux et douaniers (IS, TVA, Droits de Douane) pendant une durée déterminée (souvent <strong>15 ans après démarrage de la production</strong> commerciale).</li>
            <li><strong>Protection :</strong> Protège l'entreprise contre les hausses soudaines de fiscalité générale (sauf si ces hausses visent spécifiquement le secteur minier ou sont des taxes générales non couvertes).</li>
        </ul>
        <h3>Incitations Fiscales</h3>
        <ul>
            <li><strong>Amortissement accéléré :</strong> Déduction fiscale plus rapide des investissements (Art. 171 Code Minier).</li>
            <li><strong>Exonérations :</strong> Temporaires de droits de douane et TVA sur les équipements miniers importés (phase de construction).</li>
            <li><strong>Déductions :</strong> Spécifiques liées aux investissements en infrastructures (routes, ports) réalisés par l'entreprise pour l'État.</li>
        </ul>
        `
    ),

    // SLIDE 13: CAS PRATIQUE N°3 - IS et IMF
    createSlide(
        "CAS PRATIQUE N°3 : IS et IMF - Amortissements et Déficits",
        `
        <h3>Contexte</h3>
        <p>Sycamore Mine Guinée SAU (phase d'exploitation) présente les résultats (en GNF) de l'exercice N :</p>
        <table className="w-full text-right border-collapse text-sm mt-3">
            <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="text-left p-2 border border-gray-300 dark:border-gray-600">Indicateur</th>
                    <th className="p-2 border border-gray-300 dark:border-gray-600">Montant (GNF)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td className="text-left p-2 border border-gray-300 dark:border-gray-600">Chiffre d’Affaires Total (CA HT)</td><td className="p-2 border border-gray-300 dark:border-gray-600">8 000 000 000</td></tr>
                <tr><td className="text-left p-2 border border-gray-300 dark:border-gray-600">Résultat Comptable Avant Impôt</td><td className="p-2 border border-gray-300 dark:border-gray-600">(500 000 000)</td></tr>
                <tr><td className="text-left p-2 border border-gray-300 dark:border-gray-600">Réintégrations Fiscales (Dépenses non déductibles)</td><td className="p-2 border border-gray-300 dark:border-gray-600">300 000 000</td></tr>
                <tr><td className="text-left p-2 border border-gray-300 dark:border-gray-600">Déductions Extra-Comptables (Amortissements reportés)</td><td className="p-2 border border-gray-300 dark:border-gray-600">150 000 000</td></tr>
            </tbody>
        </table>
        <p className="mt-4"><strong>Questions :</strong></p>
        <ol className="list-decimal list-inside ml-2">
            <li>Calculer le Bénéfice (ou Déficit) Fiscal de l'exercice N.</li>
            <li>Calculer l'Impôt Minimum Forfaitaire (IMF) dû.</li>
            <li>Calculer l'Impôt sur les Sociétés (IS) théorique.</li>
            <li>Déterminer le montant d'impôt effectivement dû par Sycamore au titre de l'exercice N et justifier le choix (IS vs IMF).</li>
        </ol>
        `
    ),
];


export default function Day4Page() {
    // Composant principal du Jour 4 utilisant le SlideShow et le ContentWrapper
    return (
        <ContentWrapper
            title="IS, IMF et Charges Minières"
            date="Jeudi 23 octobre 2025"
        >
            <SlideShow slides={slidesData} />
        </ContentWrapper>
    );
}
