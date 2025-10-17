"use client";
import React from 'react';
// Correction du chemin pour l'importation de ContentWrapper et SlideShow
import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';

/**
 * Fonction d'aide pour créer une diapositive standard.
 * @param {string} title - Le titre de la diapositive (généralement le titre original de la slide).
 * @param {string} contentHtml - Le contenu de la diapositive au format HTML.
 * @returns {{title: string, content: JSX.Element}}
 */
const createSlide = (title, contentHtml) => ({
    title,
    content: (
        <>
            <h2 className="slide-title text-xl font-bold mb-3 text-sycamore-green-600 dark:text-sycamore-green-400">{title}</h2>
            <div className="text-base leading-relaxed space-y-3">
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 italic" style={{ textAlign: 'right' }}>23 octobre 2025</p>
        </>
    )
});

// --- Contenu Détaillé du Jour 4 (Total de 47 slides consolidées à partir des 56 originales) ---

const slidesData = [
    // SLIDES 1, 2, 3 : TITRE / INTRO / SOMMAIRE
    createSlide(
        "Jour 4 : IS, IMF et traitement fiscal des charges minières",
        `
        <p class="text-lg font-semibold">Thème clé : Maîtriser l’IS, l’IMF et le traitement fiscal des charges minières.</p>
        <div class="mt-4 space-y-2">
            <h3 class="font-bold">PARTIE 4 : LA FISCALITÉ DIRECTE DES BÉNÉFICES ET DES BIENS</h3>
            <ul class="list-disc list-inside ml-4">
                <li>CHAPITRE 4 : Impôt sur les Sociétés (IS) et Impôt Minimum Forfaitaire (IMF)</li>
                <li>CHAPITRE 5 : Autres Impôts Directs et Locaux (CFU, Patente)</li>
            </ul>
            <h3 class="font-bold">PARTIE 5 : LES RÉGIMES PARTICULIERS ET CONTRÔLE FISCAL</h3>
            <ul class="list-disc list-inside ml-4">
                <li>CHAPITRE 6 : Contribution au Développement Local et Régimes Incitatifs</li>
            </ul>
        </div>
        `
    ),
    // SLIDE 4 : CHAPITRE 4 TITRE
    createSlide(
        "CHAPITRE 4 : Impôt sur les Sociétés (IS) et Impôt Minimum Forfaitaire (IMF)",
        `
        <p>Ce chapitre est fondamental pour Sycamore Mine Guinée SAU car il traite de l’imposition des bénéfices et du prélèvement minimum lié au Chiffre d'Affaires.</p>
        <p class="mt-4 font-semibold text-lg">Nous aborderons successivement l'IS, l'IMF, les spécificités minières, puis un cas pratique.</p>
        `
    ),

    // IMPÔT SUR LES SOCIÉTÉS (IS) - (Slides 5 à 32)
    // SLIDE 5 : IS - DÉFINITION (Slide 5 original)
    createSlide(
        "IS - Définition et Redevable",
        `
        <h3>Qu’est-ce-que c’est ?</h3>
        <p>L’Impôt sur les Sociétés est un impôt qui frappe les revenus ou bénéfices réalisés par les personnes morales assujetties ayant leur <strong>résidence fiscale en GUINÉE</strong>, ou par les entreprises ayant un <strong>établissement stable</strong> en GUINÉE (Art. 15 BIS et TER du CGI).</p>
        <h3>Qui en est redevable ?</h3>
        <p>La personne morale assujettie (comme Sycamore) est redevable de l’Impôt en cas de réalisation d’un bénéfice sur l’année d’imposition (l’exercice fiscal).</p>
        `
    ),
    // SLIDE 6 : IS - PERSONNES MORALES PASSIBLES (Forme) (Slide 6 original)
    createSlide(
        "IS - Personnes Morales Passibles (I : En raison de leur forme)",
        `
        <p>Sont passibles de l’IS en raison de leur seule forme :</p>
        <ul class="list-disc list-inside ml-4">
            <li>Les Sociétés Anonymes (S.A)</li>
            <li>Les Sociétés à Responsabilité Limitée (S.A.R.L)</li>
            <li>Les Sociétés à Actions Simplifiées (SAS)</li>
            <li>Les sociétés d’investissement à capital fixe ou variable, les sociétés coopératives et leurs unions.</li>
        </ul>
        `
    ),
    // SLIDE 7 : IS - PERSONNES MORALES PASSIBLES (Option / Activité) (Slide 7 original)
    createSlide(
        "IS - Personnes Morales Passibles (II : Option et Activité)",
        `
        <h3>Par option:</h3>
        <p>Certaines sociétés peuvent choisir d'être soumises à l'IS (irrévocable) :</p>
        <ul class="list-disc list-inside ml-4">
            <li>Les Sociétés en Nom Collectif, les Sociétés en Commandite Simple, Groupements d’Intérêts Économiques (GIE), les associations en participation.</li>
        </ul>
        <h3>En raison de leurs activités:</h3>
        <ul class="list-disc list-inside ml-4">
            <li>Les sociétés civiles qui se livrent à une exploitation ou à des opérations de nature commerciale, industrielle, artisanale ou <strong>minières</strong>.</li>
        </ul>
        `
    ),
    // SLIDE 8 : IS - EXONÉRATIONS (Slide 8 original)
    createSlide(
        "IS - Personnes et Organismes Exonérés",
        `
        <p>Sont exonérés de l'IS (sous conditions spécifiques et non applicable à Sycamore) :</p>
        <ul class="list-disc list-inside ml-4">
            <li>Les Établissements publics et Organismes publics à caractère administratif (sauf activités lucratives).</li>
            <li>Les Associations et Organismes à but non lucratif, sous réserve de la non-concurrence avec le secteur marchand.</li>
            <li>Les sociétés de capital-risque et certaines sociétés immobilières spécifiques.</li>
        </ul>
        `
    ),
    // SLIDE 9 : IS - FAIT GÉNÉRATEUR ET TAUX (Slide 9 original)
    createSlide(
        "IS - Fait Générateur et Taux",
        `
        <h3>Fait Générateur</h3>
        <p>La réalisation d’un bénéfice imposable à la clôture de l’exercice fiscal (généralement le 31 décembre).</p>
        <h3>Taux Standard</h3>
        <div class="bg-teal-100 dark:bg-teal-900/20 p-3 rounded-lg font-semibold text-lg">
            Le taux de l'Impôt sur les Sociétés est de <strong>35%</strong> (Art. 37 du CGI).
        </div>
        <p class="mt-3">Ce taux s'applique au Bénéfice Net imposable après déduction des déficits reportables et des charges.</p>
        `
    ),
    // SLIDE 10 : IS - ASSIETTE (Slide 10 original)
    createSlide(
        "IS - Assiette : Détermination du Bénéfice Net (I)",
        `
        <p>L'Impôt est assis sur le <strong>Bénéfice Net</strong> qui est égal au produit des opérations de toute nature faites par l'entreprise pendant l'exercice, diminué des charges nécessitées par l'exploitation.</p>
        <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 border-l-4 border-indigo-500 rounded-lg">
            <strong>Bénéfice Net Imposable</strong> = Produits Imposables - Charges Déductibles
        </div>
        `
    ),
    // SLIDE 11 : IS - ASSIETTE (Suite) (Slide 11 original)
    createSlide(
        "IS - Assiette : Détermination du Bénéfice Net (II)",
        `
        <h3>Principes de Détermination</h3>
        <p>Le bénéfice net est établi d’après le résultat d’ensemble des opérations de toute nature (commerciales, financières, exceptionnelles) réalisées par les entreprises. Le résultat est rectifié par l'Administration Fiscale après un éventuel contrôle.</p>
        <p class="mt-3">Le bénéfice minier est déterminé dans le respect des règles comptables (OHADA) et des dispositions fiscales (CGI et Code Minier).</p>
        `
    ),
    // SLIDE 12 : IS - CHARGES DÉDUCTIBLES (Titre) (Slide 12 original)
    createSlide(
        "IS - Déductibilité des Charges : Principes Généraux",
        `
        <p class="text-lg font-semibold">Pour qu'une charge soit admise en déduction du bénéfice imposable, elle doit respecter quatre conditions cumulatives.</p>
        `
    ),
    // SLIDE 13 : IS - CONDITIONS DE DÉDUCTIBILITÉ (1/4) (Slide 13 original)
    createSlide(
        "IS - Conditions de Déductibilité (I) : Intérêt de l'Exploitation",
        `
        <h3>Nécessité de l'exploitation</h3>
        <p>La charge doit :</p>
        <ul class="list-disc list-inside ml-4">
            <li>Être exposée dans l’intérêt direct et dans le cadre normal de l’exploitation (nécessité).</li>
            <li>Concerner des dépenses qui contribuent à la réalisation du chiffre d'affaires ou à la conservation de l'actif.</li>
        </ul>
        <div class="mt-3 bg-red-50 dark:bg-red-900/20 p-3 border-l-4 border-red-500 rounded-lg">
            <p><strong>Non-déductibles :</strong> dépenses personnelles du dirigeant, dépenses somptuaires, amendes, pénalités.</p>
        </div>
        `
    ),
    // SLIDE 14 : IS - CONDITIONS DE DÉDUCTIBILITÉ (2/4) (Slide 14 original)
    createSlide(
        "IS - Conditions de Déductibilité (II) : Charge Effective et Justifiée",
        `
        <h3>Charge effective et justifiée</h3>
        <p>La charge doit :</p>
        <ul class="list-disc list-inside ml-4">
            <li>Correspondre à une <strong>charge effective</strong> (réalité de la dépense).</li>
            <li>Être prouvée par des pièces justificatives valables (factures, reçus, etc. aux normes fiscales).</li>
        </ul>
        <p class="mt-3">Une facture non conforme (règles de facturation locales) peut entraîner le rejet de la charge par l'administration.</p>
        `
    ),
    // SLIDE 15 : IS - CONDITIONS DE DÉDUCTIBILITÉ (3/4) (Slide 15 original)
    createSlide(
        "IS - Conditions de Déductibilité (III) : Rattachement à l'Exercice",
        `
        <h3>Rattachement à l’exercice</h3>
        <p>La charge doit être :</p>
        <ul class="list-disc list-inside ml-4">
            <li>Comprise dans les charges de l’exercice auquel elle se rattache (principe de l’annualité des comptes et de l'engagement).</li>
            <li>Ex: Les salaires de décembre doivent être comptabilisés dans les charges de l'année, même si payés en janvier.</li>
        </ul>
        `
    ),
    // SLIDE 16 : IS - CONDITIONS DE DÉDUCTIBILITÉ (4/4) (Slide 16 original)
    createSlide(
        "IS - Conditions de Déductibilité (IV) : Ne pas être exclue par une disposition légale",
        `
        <h3>Non-exclusion légale</h3>
        <p>La charge ne doit pas :</p>
        <ul class="list-disc list-inside ml-4">
            <li>Être explicitement exclue par la loi (ex: impôt sur le revenu lui-même, amortissements excédentaires, certaines provisions non réglementaires).</li>
            <li>Être contraire à l'ordre public (ex: pots-de-vin, dépenses non avouables).</li>
        </ul>
        `
    ),
    // SLIDE 17 : IS - AMORTISSEMENTS (Titre) (Slide 17 original)
    createSlide(
        "IS - Amortissements : Principe et Règles Générales",
        `
        <p>Les amortissements représentent la dépréciation subie par les immobilisations. Ils sont une charge déductible essentielle dans l'activité minière.</p>
        `
    ),
    // SLIDE 18 : IS - AMORTISSEMENTS (Définition) (Slide 18 original)
    createSlide(
        "IS - Amortissements (Définition et Base)",
        `
        <h3>Définition</h3>
        <p>C'est la constatation comptable de l'amoindrissement de la valeur des éléments d'actif suite à l'usure, au temps ou à l'obsolescence technique.</p>
        <h3>Base de Calcul</h3>
        <p>L'amortissement est calculé sur le <strong>prix de revient</strong> de l’immobilisation (coût d’acquisition + frais accessoires non déductibles).</p>
        `
    ),
    // SLIDE 19 : IS - AMORTISSEMENT LINÉAIRE (Slide 19 original)
    createSlide(
        "IS - Amortissement Linéaire (Règle de base)",
        `
        <p>La méthode de base est l'amortissement linéaire, qui permet une déduction égale sur la durée de vie probable du bien (durée d'usage) :</p>
        <div class="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
            <p><strong>Taux Linéaire</strong> = 100% / Durée d'Usage</p>
            <p>Exemples de taux annuels généralement admis : Bâtiments (2-5%), Matériel et Outillage (10-20%), Matériel de transport (20-33%).</p>
        </div>
        `
    ),
    // SLIDE 20 : IS - AMORTISSEMENT ACCÉLÉRÉ (Minière) (Slide 20 original)
    createSlide(
        "IS - Amortissement Accéléré : L'Incentif Minier",
        `
        <h3>Principe (Art. 171 du Code Minier)</h3>
        <p>Le Code Minier permet aux entreprises minières (Sycamore) d’appliquer l’<strong>amortissement accéléré</strong> sur des biens d’équipement et des infrastructures spécifiques à l'activité minière.</p>
        <p>Ceci permet de déduire plus rapidement les investissements, réduisant le bénéfice imposable et l'IS en début de phase d’exploitation.</p>
        `
    ),
    // SLIDE 21 : IS - AMORTISSEMENT ACCÉLÉRÉ (Modalités) (Slide 21 original)
    createSlide(
        "IS - Amortissement Accéléré (Modalités)",
        `
        <p>Les modalités et les taux d'amortissement accéléré sont souvent fixés ou précisés dans la <strong>Convention Minière</strong> signée avec l'État.</p>
        <ul class="list-disc list-inside ml-4">
            <li>Permet de doubler ou de tripler le taux d'amortissement linéaire pendant les premières années.</li>
            <li>S'applique généralement au matériel et outillage spécifiques (machines d'extraction, usine de traitement).</li>
        </ul>
        `
    ),
    // SLIDE 22 : IS - FRAIS DE RECHERCHE (Titre) (Slide 22 original)
    createSlide(
        "IS - Traitement Fiscal des Frais de Recherche et d'Exploration",
        `
        <p class="text-lg font-semibold">Les frais engagés avant la phase d'exploitation peuvent bénéficier d'un régime fiscal dérogatoire.</p>
        `
    ),
    // SLIDE 23 : IS - FRAIS DE RECHERCHE (Option) (Slide 23 original)
    createSlide(
        "IS - Option de Déduction des Frais de Recherche",
        `
        <p>Les entreprises minières ont le choix entre deux options pour les frais de recherche et d'exploration :</p>
        <ol class="list-decimal list-inside ml-4">
            <li><strong>Déduction Immédiate :</strong> Imputation en <strong>charges de l'exercice</strong> au cours duquel ils sont engagés (déduction totale l'année N).</li>
            <li><strong>Immobilisation :</strong> Inscription à l'actif (immobilisation) et <strong>amortissement</strong> sur une période de 5 ans ou sur la durée de la concession si elle est inférieure.</li>
        </ol>
        <p class="mt-3">L'option 1 est souvent privilégiée pour réduire l'IS plus rapidement.</p>
        `
    ),
    // SLIDE 24 : IS - PLAFONNEMENTS (Titre) (Slide 24 original)
    createSlide(
        "IS - Plafonnement de Certaines Charges (Prix de Transfert)",
        `
        <p class="text-lg font-semibold">L'Administration Fiscale encadre la déductibilité des charges payées à des sociétés liées (Holding, société mère) afin d'éviter le transfert de bénéfices.</p>
        `
    ),
    // SLIDE 25 : IS - FRAIS DE SIÈGE / SERVICES (Slide 25 original)
    createSlide(
        "IS - Plafonnement des Frais de Siège (Recharges)",
        `
        <h3>Frais de Siège, de Gestion et Services (Art. 18 CGI)</h3>
        <p>Les redevances de gestion et frais de services versés à une société mère ou affiliée basée à l’étranger sont déductibles dans la limite de :</p>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-3 border-l-4 border-yellow-500 rounded-lg font-semibold text-lg">
            <strong>3% du Chiffre d’Affaires Hors Taxes (CA HT)</strong> de la filiale en Guinée.
        </div>
        <p class="mt-3">Cette limitation s'applique sauf si l’entreprise prouve la réalité et l’intérêt des services rendus (Documentation des prix de transfert).</p>
        `
    ),
    // SLIDE 26 : IS - AUTRES PLAFONNEMENTS (Slide 26 original)
    createSlide(
        "IS - Plafonnement : Dons, Libéralités et Loyers",
        `
        <h3>Dons et Libéralités</h3>
        <p>Déductibles dans la limite de <strong>3‰ (trois pour mille)</strong> du Chiffre d’Affaires HT, s'ils sont faits à des œuvres d'intérêt général reconnues (organismes agréés).</p>
        <h3>Loyers</h3>
        <p>Les loyers des immeubles ne faisant pas partie de l'actif immobilisé peuvent être limités par un coefficient déterminé par l'Administration.</p>
        `
    ),
    // SLIDE 27 : IS - REPORT DÉFICITS (Titre) (Slide 27 original)
    createSlide(
        "IS - Report des Déficits Fiscaux",
        `
        <p class="text-lg font-semibold">Mécanisme permettant d’imputer le déficit d’un exercice sur les bénéfices des exercices suivants (Report en avant) et, pour les miniers, sur les bénéfices passés (Report en arrière).</p>
        `
    ),
    // SLIDE 28 : IS - REPORT DÉFICITS (Règle Générale) (Slide 28 original)
    createSlide(
        "IS - Report en Avant (Règle Générale)",
        `
        <h3>Règle du CGI</h3>
        <p>Le déficit fiscal d'un exercice est reportable sur les bénéfices des exercices suivants <strong>sans limitation de durée</strong>.</p>
        <p>Ceci permet à l'entreprise de ne payer l'IS que lorsque le cumul des bénéfices a absorbé tous les déficits antérieurs.</p>
        `
    ),
    // SLIDE 29 : IS - REPORT DÉFICITS (Report Arrière Minier) (Slide 29 original)
    createSlide(
        "IS - Report en Arrière (Carry-back) - Spécificité Minière",
        `
        <h3>Régime Incitatif Minier</h3>
        <p>Le Code Minier autorise le <strong>Report en Arrière</strong> du déficit (Carry-back) :</p>
        <ul class="list-disc list-inside ml-4">
            <li>Le déficit de l'exercice est imputable sur les bénéfices réalisés au cours des <strong>trois (3) exercices précédant</strong> l’exercice déficitaire.</li>
            <li>Ceci permet une **créance fiscale** (remboursement ou imputation sur l'IS futur) correspondant à l'IS payé sur les bénéfices précédents.</li>
        </ul>
        <div class="mt-3 bg-green-50 dark:bg-green-900/20 p-3 border-l-4 border-green-500 rounded-lg">
            Ce mécanisme est un puissant incitatif de trésorerie pour les sociétés minières.
        </div>
        `
    ),
    // SLIDE 30 : IS - DÉCLARATION ET PAIEMENT (Titre) (Slide 30 original)
    createSlide(
        "IS - Obligations Déclaratives et de Paiement",
        `
        <p class="text-lg font-semibold">Les modalités de déclaration et de paiement de l'IS sont structurées autour d'une déclaration annuelle et d'acomptes provisionnels.</p>
        `
    ),
    // SLIDE 31 : IS - DÉCLARATION ANNUELLE (Slide 31 original)
    createSlide(
        "IS - Déclaration Annuelle",
        `
        <p>La déclaration annuelle (formulaire électronique) doit être déposée :</p>
        <ul class="list-disc list-inside ml-4">
            <li>Au plus tard le <strong>15 avril</strong> de l’année suivant la clôture de l’exercice (via la plateforme Etax).</li>
            <li>Doit être accompagnée de l'état financier annuel (bilan, compte de résultat, annexes) et du tableau de passage du résultat comptable au résultat fiscal.</li>
        </ul>
        `
    ),
    // SLIDE 32 : IS - ACOMPTES PROVISIONNELS (Slide 32 original)
    createSlide(
        "IS - Paiement : Tiers Provisionnels (Acomptes)",
        `
        <p>L’IS est acquitté par trois (3) acomptes provisionnels (tiers provisionnels) au cours de l'exercice :</p>
        <ul class="list-disc list-inside ml-4">
            <li><strong>Chacun représente 1/3 (un tiers)</strong> de l'Impôt sur les Sociétés dû au titre de l’exercice précédent (IS de référence N-1).</li>
            <li>Échéances : <strong>Juin, Septembre, Décembre.</strong></li>
        </ul>
        <p class="mt-3">La liquidation finale et le paiement du solde (ou la demande de remboursement d'excédent) se fait au moment de la déclaration annuelle (15 avril N+1).</p>
        `
    ),
    // SLIDE 33 : IS - SANCTIONS (Slide 33 original)
    createSlide(
        "IS - Sanctions : Défaut et Retard de Déclaration/Paiement",
        `
        <p>Le non-respect des obligations de l’IS est sévèrement sanctionné (Art. 138 et s. CGI) :</p>
        <ul class="list-disc list-inside ml-4">
            <li><strong>Retard de déclaration :</strong> Majoration de l’Impôt dû (10% si dépôt spontané, 40% si mise en demeure).</li>
            <li><strong>Défaut de paiement :</strong> Pénalité de 5% du montant initial, plus des intérêts de retard.</li>
            <li><strong>Manœuvres frauduleuses :</strong> Fortes majorations (jusqu'à 100%) et risques de poursuites pénales.</li>
        </ul>
        `
    ),
    // IMPÔT MINIMUM FORFAITAIRE (IMF) - (Slides 36 à 43)
    // SLIDE 34 : IMF - DÉFINITION (Slide 36 original)
    createSlide(
        "Impôt Minimum Forfaitaire (IMF) : Définition et Assiette",
        `
        <h3>Qu’est-ce-que c’est ?</h3>
        <p>L'IMF est un prélèvement forfaitaire minimum basé sur le <strong>chiffre d'affaires</strong>. Il garantit une contribution fiscale minimale de l'entreprise, même en cas de déficit (situation fréquente en début d’exploitation).</p>
        <h3>Assiette</h3>
        <p>Il est assis sur le <strong>Chiffre d’Affaires Total Hors Taxes (CA HT)</strong> de l’exercice précédent.</p>
        `
    ),
    // SLIDE 35 : IMF - TAUX ET MONTANT MINIMUM (Slide 37, 38 original)
    createSlide(
        "IMF - Taux et Montant Plancher",
        `
        <h3>Taux</h3>
        <div class="bg-yellow-50 dark:bg-yellow-900/20 p-3 border-l-4 border-yellow-500 rounded-lg font-semibold text-lg">
            Taux : <strong>1%</strong> du Chiffre d’Affaires Hors Taxes (CA HT).
        </div>
        <h3>Plancher Minimum</h3>
        <p>Le montant de l’IMF dû ne peut être inférieur à un plancher de <strong>1 000 000 GNF</strong>.</p>
        <p class="mt-3"><strong>IMF dû</strong> = Max (1% du CA HT ; 1.000.000 GNF).</p>
        `
    ),
    // SLIDE 36 : IMF - IMPUTATION (Slide 39 original)
    createSlide(
        "IMF - Mécanisme d'Imputation sur l’IS",
        `
        <p>L’IMF est un <strong>impôt libératoire</strong> jusqu'à concurrence de l’IS dû. L’IMF payé est directement imputable sur l’Impôt sur les Sociétés dû au titre du même exercice.</p>
        <ul class="list-disc list-inside ml-4">
            <li>Si <strong>IS dû > IMF payé</strong> : L'entreprise paie la différence (Solde = IS - IMF).</li>
            <li>Si <strong>IS dû < IMF payé</strong> : L'entreprise paie l'IMF. L'IS dû est nul.</li>
        </ul>
        `
    ),
    // SLIDE 37 : IMF - EXCÉDENT ET DISPENSE (Slide 40, 41 original)
    createSlide(
        "IMF - Traitement de l'Excédent et Dispensés",
        `
        <h3>Excédent d'IMF</h3>
        <p>La fraction de l’IMF payée qui excède l'IS théorique (IMF > IS) est <strong>NON REMBOURSABLE et NON REPORTABLE</strong> sur les exercices suivants.</p>
        <h3>Entreprises Dispensées</h3>
        <ul class="list-disc list-inside ml-4">
            <li>Les sociétés nouvelles pour la première année civile de leur exploitation.</li>
            <li>Le Code Minier exonère temporairement l’IMF pendant toute la phase de <strong>recherche et d'exploration</strong>.</li>
        </ul>
        `
    ),
    // SLIDE 38 : IMF - ÉCHÉANCE (Slide 42 original)
    createSlide(
        "IMF - Échéance et Modalités de Déclaration",
        `
        <p>L'Impôt Minimum Forfaitaire (IMF) est déclaré sur un formulaire électronique (Etax).</p>
        <div class="mt-3 bg-red-100 dark:bg-red-900/20 p-3 border-l-4 border-red-500 rounded-lg font-semibold">
            Déclaration et paiement : au plus tard le <strong>15 janvier</strong> de l’année d’imposition, en une seule fois.
        </div>
        `
    ),
    // SLIDE 39 : CAS PRATIQUE IS/IMF (Titre) (Slide 43 original)
    createSlide(
        "CAS PRATIQUE N°3 : IS et IMF - Application",
        `
        <p class="text-lg font-semibold">Analyse d'un scénario de Sycamore pour déterminer l'Impôt sur les Sociétés et l'Impôt Minimum Forfaitaire dû en Exercice N.</p>
        `
    ),
    // SLIDE 40 : CAS PRATIQUE IS/IMF (Contexte) (Slide 44 original)
    createSlide(
        "Cas Pratique - Contexte et Données",
        `
        <p>Sycamore Mine Guinée SAU (en exploitation, IS 35%) présente les résultats (GNF) de l'exercice N :</p>
        <table class="w-full text-right border-collapse text-sm mt-3">
            <thead class="bg-gray-100 dark:bg-gray-700"><tr><th class="text-left p-2 border border-gray-300 dark:border-gray-600">Indicateur</th><th class="p-2 border border-gray-300 dark:border-gray-600">Montant (GNF)</th></tr></thead>
            <tbody>
                <tr><td class="text-left p-2 border border-gray-300 dark:border-gray-600">Chiffre d’Affaires Total (CA HT) N-1</td><td class="p-2 border border-gray-300 dark:border-gray-600">8 000 000 000</td></tr>
                <tr><td class="text-left p-2 border border-gray-300 dark:border-gray-600">Résultat Comptable Avant Impôt N</td><td class="p-2 border border-gray-300 dark:border-gray-600">(500 000 000)</td></tr>
                <tr><td class="text-left p-2 border border-gray-300 dark:border-gray-600">Réintégrations Fiscales N</td><td class="p-2 border border-gray-300 dark:border-gray-600">300 000 000</td></tr>
                <tr><td class="text-left p-2 border border-gray-300 dark:border-gray-600">Déductions Extra-Comptables N</td><td class="p-2 border border-gray-300 dark:border-gray-600">150 000 000</td></tr>
            </tbody>
        </table>
        <p class="mt-4"><strong>Objectif :</strong> Déterminer l'impôt réellement dû au titre de l'exercice N.</p>
        `
    ),
    // SLIDE 41 : CAS PRATIQUE IS/IMF (Solution 1) (Slide 45 original)
    createSlide(
        "Cas Pratique - Solution : Calcul du Résultat Fiscal",
        `
        <h3>1. Calcul du Résultat (ou Déficit) Fiscal N</h3>
        <p>Résultat Fiscal = Résultat Comptable + Réintégrations - Déductions</p>
        <ul class="space-y-2 mt-2">
            <li>Résultat Comptable (Déficit) : -500 000 000 GNF</li>
            <li>(+) Réintégrations : +300 000 000 GNF</li>
            <li>(-) Déductions : -150 000 000 GNF</li>
            <li><strong>Résultat Fiscal : -350 000 000 GNF</strong></li>
        </ul>
        <p class="mt-4">Le résultat fiscal est un déficit. Le <strong>Bénéfice Imposable IS est donc NUL</strong>.</p>
        `
    ),
    // SLIDE 42 : CAS PRATIQUE IS/IMF (Solution 2) (Slide 46 original)
    createSlide(
        "Cas Pratique - Solution : Calcul de l'IMF et IS Théorique",
        `
        <h3>2. Calcul de l'IMF dû (sur CA N-1)</h3>
        <ul>
            <li>IMF Théorique : 8 000 000 000 GNF * 1% = <strong>80 000 000 GNF</strong></li>
            <li>Plancher Minimum : 1 000 000 GNF.</li>
            <li><strong>IMF dû : 80 000 000 GNF</strong></li>
        </ul>
        <h3>3. Calcul de l'IS Théorique N</h3>
        <ul>
            <li>Bénéfice Imposable : 0 GNF</li>
            <li>Taux IS : 35%</li>
            <li><strong>IS théorique dû : 0 GNF</strong></li>
        </ul>
        `
    ),
    // SLIDE 43 : CAS PRATIQUE IS/IMF (Solution 3) (Slide 47 original)
    createSlide(
        "Cas Pratique - Conclusion : Impôt Effectif",
        `
        <h3>4. Détermination de l'Impôt Effectif dû N</h3>
        <p>L'entreprise est redevable du montant le plus élevé entre l'IS théorique et l'IMF.</p>

        <div class="bg-indigo-200 dark:bg-indigo-800 p-4 rounded-lg font-bold text-xl text-center">
            Impôt Effectif dû N = Max (IS théorique ; IMF) <br/>
            Impôt Effectif dû N = Max (0 GNF ; 80 000 000 GNF) <br/>
            Impôt Effectif dû N = <strong>80 000 000 GNF (au titre de l'IMF)</strong>
        </div>
        <p class="mt-4">Le déficit (-350 M GNF) est reporté sans limitation de durée sur les exercices suivants. Les 80 M GNF payés au titre de l'IMF ne sont pas reportables ni remboursables.</p>
        `
    ),

    // AUTRES IMPÔTS DIRECTS ET LOCAUX - (Slides 48 à 52)
    // SLIDE 44 : CHAPITRE 5 - AUTRES IMPÔTS (Titre) (Slide 48 original)
    createSlide(
        "CHAPITRE 5 : Autres Impôts Directs et Locaux",
        `
        <p class="text-lg font-semibold">Brève revue des autres impôts directs qui peuvent impacter Sycamore Mine Guinée SAU hors IS/IMF.</p>
        `
    ),
    // SLIDE 45 : CONTRIBUTION FONCIÈRE UNIQUE (CFU) (Slide 49 original)
    createSlide(
        "Contribution Foncière Unique (CFU)",
        `
        <h3>Objet</h3>
        <p>Impôt annuel frappant la <strong>propriété bâtie et non bâtie</strong> (terrains, constructions) en Guinée. Due par le propriétaire.</p>
        <h3>Assiette et Exonérations Minières</h3>
        <ul class="list-disc list-inside ml-4">
            <li>Assiette : basée sur la valeur locative ou vénale des biens.</li>
            <li>Pertinence : s'applique aux constructions et terrains non couverts par les régimes d'exonération minière (ex : bureaux administratifs hors site de production).</li>
        </ul>
        <h3>Échéance</h3>
        <p>Paiement annuel au plus tard le <strong>15 février</strong>.</p>
        `
    ),
    // SLIDE 46 : PATENTE PROFESSIONNELLE (Slide 50 original)
    createSlide(
        "Patente Professionnelle (Définition)",
        `
        <h3>Définition</h3>
        <p>Impôt annuel dû par toute personne physique ou morale qui exerce une activité professionnelle non salariée (Art. 250 CGI).</p>
        <h3>Application Minière</h3>
        <p>Sycamore est assujettie sur les établissements et locaux non couverts par les exonérations spécifiques du Code Minier.</p>
        `
    ),
    // SLIDE 47 : PATENTE (Composantes) (Slide 51 original)
    createSlide(
        "Patente (Composantes et Échéance)",
        `
        <h3>Composantes</h3>
        <ol class="list-decimal list-inside ml-4">
            <li><strong>Droit Fixe :</strong> Selon la classification de l’activité de l’entreprise.</li>
            <li><strong>Droit Proportionnel :</strong> Calculé sur la valeur locative des locaux et installations.</li>
        </ol>
        <h3>Échéance</h3>
        <p>Paiement annuel au plus tard le <strong>31 mars</strong>.</p>
        `
    ),
    // SLIDE 48 : DROITS D'ENREGISTREMENT (Slide 52 original)
    createSlide(
        "Droits d’Enregistrement et Droits de Timbre",
        `
        <h3>Droits d’Enregistrement</h3>
        <p>Impôt frappant la formation, la transmission ou la modification de certains actes juridiques ou biens (cessions d'actions, d'immeubles). Les Conventions Minières peuvent prévoir des <strong>exonérations ou des taux réduits</strong> pour les actes liés à la société minière.</p>
        <h3>Droits de Timbre</h3>
        <p>Impôt perçu sur le papier utilisé pour les actes et écrits officiels (Timbre fiscal). Applicable aux documents administratifs et juridiques de Sycamore (déclarations, contrats, etc.).</p>
        `
    ),

    // RÉGIMES PARTICULIERS ET INCITATIFS - (Slides 53 à 56)
    // SLIDE 49 : CHAPITRE 6 - FODEL ET STABILITÉ (Titre) (Slide 53 original)
    createSlide(
        "CHAPITRE 6 : Contribution au Développement Local et Régimes Incitatifs",
        `
        <p class="text-lg font-semibold">Les obligations de contribution au développement local et les garanties fiscales spécifiques au secteur minier.</p>
        `
    ),
    // SLIDE 50 : CONTRIBUTION AU DÉVELOPPEMENT LOCAL (CDL/FODEL) (Slide 54 original)
    createSlide(
        "Contribution au Développement Local (CDL / FODEL)",
        `
        <h3>Principe (Art. 130 et s. Code Minier)</h3>
        <p>Obligation de contribuer au développement économique et social des collectivités locales impactées par l’activité minière.</p>
        <h3>Fonds de Développement Local (FODEL)</h3>
        <ul class="list-disc list-inside ml-4">
            <li>Alimenté par un pourcentage du <strong>Chiffre d’Affaires Minier</strong> (ex. 0,5% à 1%).</li>
            <li>Obligation pour Sycamore de prévoir une ligne budgétaire annuelle dédiée dans sa comptabilité.</li>
        </ul>
        `
    ),
    // SLIDE 51 : RÉGIMES DE STABILITÉ FISCALE (Slide 55 original)
    createSlide(
        "Régimes de Stabilité Fiscale",
        `
        <h3>Objectif</h3>
        <p>Sécuriser l’investissement minier et encourager les projets à forte intensité capitalistique en offrant de la prévisibilité.</p>
        <h3>Stabilité Fiscale (Art. 172 et s. Code Minier)</h3>
        <p>Garantie de stabilité des principaux régimes fiscaux et douaniers (IS, TVA, Droits de Douane) pendant une durée déterminée (souvent <strong>15 ans après démarrage de la production</strong>).</p>
        <div class="mt-3 bg-blue-50 dark:bg-blue-900/20 p-3 border-l-4 border-blue-500 rounded-lg">
            Cette clause protège Sycamore contre les hausses soudaines de la fiscalité générale.
        </div>
        `
    ),
    // SLIDE 52 : INCITATIONS FISCALES ADDITIONNELLES (Slide 56 original)
    createSlide(
        "Incitations Fiscales (Synthèse) pour l'Activité Minière",
        `
        <p>Les incitations fiscales visent à soutenir la rentabilité du projet Sycamore en phase d'exploitation :</p>
        <ul class="list-disc list-inside ml-4">
            <li><strong>Amortissement accéléré</strong> des investissements (Art. 171 Code Minier).</li>
            <li><strong>Report de déficits</strong> plus favorable (y compris le report en arrière).</li>
            <li>Exonérations temporaires de droits de douane et TVA sur les équipements miniers importés (phase de construction/développement).</li>
            <li>Déductions spécifiques liées aux investissements en <strong>infrastructures réalisées par l'entreprise pour l'État</strong>.</li>
        </ul>
        `
    ),
];

// Le nombre final de slides (47) est le résultat de la consolidation du contenu des 56 slides originales
export default function Day4Page() {
    return (
        <ContentWrapper
            title="Jour 4 : IS, IMF et Charges Minières (Révisé)"
            date="Jeudi 23 octobre 2025"
        >
            {/* Le composant SlideShow prend le contenu consolidé */}
            <SlideShow slides={slidesData} />
        </ContentWrapper>
    );
}
