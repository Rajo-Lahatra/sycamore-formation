// src/app/day4/page.js

import Day4Client from './Day4Client';

// Définition de createSlide
function createSlide(title, content, subtitle = null) {
  return {
    content: (
      <div className="slide-content">
        {subtitle && <h3>{subtitle}</h3>}
        <h2 className="slide-title">{title}</h2>
        <div 
          className="slide-body"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    )
  };
}

// --- Contenu Détaillé du Jour 4 : Imposition du Revenu et Fiscalité Spécifique ---

const slides = [
    // SLIDE 1: INTRODUCTION JOUR 4
    createSlide(
        "Jour 4 : Imposition du Revenu & Fiscalité Spécifique au Secteur Minier",
        `
        <div style="font-size: 1.1em;">
            <p><strong>CHAPITRE 4 – IMPOSITION DU REVENU</strong></p>
            <p style="font-size: 1.2em; color: var(--fuel-yellow);"><strong>Objectif :</strong> Maîtriser l'imposition des bénéfices des sociétés minières et les régimes fiscaux spécifiques au secteur minier.</p>
            <p><strong>Programme :</strong></p>
            <ul>
                <li><strong>CHAPITRE 4 : Imposition du Revenu</strong></li>
                <ul>
                    <li>1. Impôt sur les Sociétés (IS)</li>
                    <li>2. Impôt Minimum Forfaitaire (IMF)</li>
                </ul>
                <li><strong>CHAPITRE 5 : Imposition des Revenus de Capitaux Mobiliers</strong></li>
                <li><strong>CHAPITRE 6 : Impôts et Taxes Locaux</strong></li>
                <li><strong>3ème PARTIE : Fiscalité Spécifique au Secteur Minier</strong></li>
                <li>Cas Pratiques et Études de Cas</li>
            </ul>
        </div>
        `,
        "Jeudi 23 octobre 2025"
    ),
    
    // SLIDE 2: IMPÔT SUR LES SOCIÉTÉS - DÉFINITION
    createSlide(
        "IMPÔT SUR LES SOCIÉTÉS (IS)",
        `
        <h3>DÉFINITION</h3>
        <p><strong>Qu'est-ce que c'est?</strong></p>
        <p>L'impôt sur les Sociétés est un impôt qui frappe les revenus ou bénéfices réalisés par les personnes morales assujetties ayant leur résidence fiscale en GUINÉE, ou par les entreprises ayant un établissement stable en GUINÉE conformément aux articles 15 BIS et TER du CGI.</p>
        
        <p><strong>Qui en est redevable?</strong></p>
        <p>La personne morale assujettie est redevable de l'impôt en cas de réalisation d'un bénéfice sur l'année d'imposition (l'exercice fiscal).</p>

        <h3>PERSONNES MORALES PASSIBLES</h3>
        <p><strong>En raison de leur forme:</strong></p>
        <ul>
            <li>Les Sociétés Anonymes (S.A)</li>
            <li>Les Sociétés à Responsabilité Limitée (S.A.R.L)</li>
            <li>Les Sociétés à Actions Simplifiées</li>
            <li>Les Sociétés d'investissement à capital fixe ou variable</li>
            <li>Les sociétés coopératives et leurs unions</li>
        </ul>
        `,
        "CHAPITRE 4 – IMPOSITION DU REVENU"
    ),

    // SLIDE 3: PERSONNES MORALES PASSIBLES (SUITE)
    createSlide(
        "IS - PERSONNES MORALES PASSIBLES [Suite]",
        `
        <h3>Par option:</h3>
        <ul>
            <li>Les Sociétés en Non Collectif</li>
            <li>Les Sociétés en Commandite Simple</li>
            <li>Groupements d'Intérêts Économiques</li>
            <li>Les associations en participation</li>
        </ul>

        <h3>En raison de leurs activités:</h3>
        <ul>
            <li>Les sociétés civiles qui se livrent à une exploitation ou à des opérations de nature commerciale, industrielle, artisanale ou agricole</li>
            <li>Les établissements publics, les organismes de l'État ou des collectivités locales, qui jouissent de l'autonomie financière et se livrent à une activité à caractère lucratif</li>
            <li>Toutes autres personnes morales se livrant à une exploitation ou à des opérations à caractère lucratif</li>
            <li>Les <strong>sociétés minières</strong> titulaires de titres miniers sont assujetties à l'IS, sauf exonérations spécifiques prévues par le Code minier pendant la phase de recherche/développement</li>
        </ul>
        `
    ),

    // SLIDE 4: DÉTERMINATION DE LA BASE D'IMPOSITION
    createSlide(
        "IS - DÉTERMINATION DE LA BASE D'IMPOSITION",
        `
        <h3>LE BÉNÉFICE IMPOSABLE [LE RÉSULTAT FISCAL]</h3>
        <p>La base imposable est le résultat fiscal de l'exercice déterminé au titre de l'exercice comptable clos au 31 Décembre.</p>
        
        <p>Ce bénéfice est obtenu par correction du résultat comptable de l'exercice, appelé "le retraitement extra-comptable", qui consiste à:</p>
        <ul>
            <li>Réintégrer au résultat comptable les charges non admises en déduction du point de vue fiscal et produits dont l'imposition a été différée précédemment</li>
            <li>Déduire du résultat comptable les produits comptabilisés mais non imposables</li>
        </ul>

        <div style="background: var(--french-gray); padding: 15px; border-radius: 5px; margin: 15px 0;">
            <p style="text-align: center; font-weight: bold; font-size: 1.2em;">
                Résultat Fiscal = Résultat comptable + Réintégrations - Déductions
            </p>
        </div>
        `
    ),

    // SLIDE 5: CHARGES DÉDUCTIBLES - CONDITIONS GÉNÉRALES
    createSlide(
        "IS - CHARGES DÉDUCTIBLES",
        `
        <h3>CONDITIONS GÉNÉRALES DE DÉDUCTIBILITÉ</h3>
        <p>Les charges déductibles sont celles qui satisfont aux conditions ci-après:</p>
        <ol>
            <li>Être exposés dans l'intérêt direct de l'exploitation</li>
            <li>Ne pas présenter de caractère exagéré par rapport à la gestion normale de l'exploitation</li>
            <li>Correspondre à une charge effective et être appuyés de justifications suffisantes</li>
            <li>Être régulièrement comptabilisés dans les charges de l'exercice au cours duquel ils ont été engagés</li>
            <li>Se traduire par une diminution de l'actif net de l'entreprise</li>
        </ol>

        <h3>EXEMPLES DE CHARGES DÉDUCTIBLES</h3>
        <ul>
            <li><strong>Dépenses de personnel:</strong> Rémunérations correspondant à un travail effectif et non excessives</li>
            <li><strong>Charges locatives:</strong> Subordonnées à la preuve du paiement des retenues afférentes</li>
            <li><strong>Dépenses environnementales:</strong> Protection de l'environnement, sécurité, santé et développement communautaire (conformément au Code minier)</li>
        </ul>
        `
    ),

    // SLIDE 6: CHARGES DÉDUCTIBLES (SUITE)
    createSlide(
        "IS - CHARGES DÉDUCTIBLES [Suite]",
        `
        <h3>IMPÔTS ET TAXES DÉDUCTIBLES</h3>
        <p><strong>Déductibles:</strong></p>
        <ul>
            <li>Impôts, taxes et droits à la charge de l'entreprise</li>
            <li>Contributions au développement local, redevances superficiaires, taxes à l'extraction/exportation (secteur minier)</li>
        </ul>

        <p><strong>Non déductibles:</strong></p>
        <ul>
            <li>Impôt sur le bénéfice</li>
            <li>Impôt sur les revenus de capitaux mobiliers</li>
            <li>Impôt minimum forfaitaire</li>
            <li>Impôts et taxes retenus à la source à la charge des employés ou des tiers</li>
            <li>Amendes et pénalités</li>
        </ul>

        <h3>INTÉRÊTS SUR COMPTE COURANT D'ASSOCIÉS</h3>
        <p>Déductibles dans la limite du taux directeur de la banque centrale, et à condition d'avoir été soumis à la retenue à la source applicable.</p>
        `
    ),

    // SLIDE 7: CHARGES DÉDUCTIBLES (SUITE 2)
    createSlide(
        "IS - CHARGES DÉDUCTIBLES [Suite]",
        `
        <h3>PROVISIONS</h3>
        <p>Déductibles si elles:</p>
        <ul>
            <li>Font face à des pertes ou charges nettement précisées</li>
            <li>Que les événements en cours rendent probables</li>
            <li>Ont été effectivement constatées dans les écritures comptables</li>
            <li>Figurent au relevé des provisions</li>
            <li>Couvrent des charges déductibles</li>
        </ul>

        <h3>DONS, POURBOIRES ET LIBÉRALITÉS</h3>
        <p>Déductibles dans la limite de 1,5‰ du chiffre d'affaires pour les œuvres d'intérêt général.</p>
        <p>Les dépenses de développement économique et social des collectivités locales sont intégralement déductibles.</p>

        <h3>HONORAIRES ET REDEVANCES NON-RÉSIDENTS</h3>
        <p>Déductibles à condition d'avoir fait l'objet de retenue à la source.</p>
        `
    ),

    // SLIDE 8: LIMITES SUR HONORAIRES NON-RÉSIDENTS
    createSlide(
        "IS - LIMITES SUR PAIEMENTS NON-RÉSIDENTS",
        `
        <h3>LIMITES DE DÉDUCTIBILITÉ (ENTITÉS LIÉES)</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <thead>
                <tr style="background-color: var(--fuel-yellow);">
                    <th style="padding: 10px; border: 1px solid #ddd;">Nature</th>
                    <th style="padding: 10px; border: 1px solid #ddd;">Limite de déductibilité</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Redevances de marques</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">2% du CA HT</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Honoraires et frais de services</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">10% des autres charges d'exploitation</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Commission aux intermédiaires</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">5% des achats HT</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Paiement aux centrales d'achats</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Coût d'achat HT + 5%</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Frais généraux de siège</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">10% du CA attribué à l'établissement stable</td>
                </tr>
            </tbody>
        </table>
        `
    ),

    // SLIDE 9: AMORTISSEMENTS ET ASSURANCES
    createSlide(
        "IS - AMORTISSEMENTS ET ASSURANCES",
        `
        <h3>PRIMES D'ASSURANCES</h3>
        <p><strong>Déductibles:</strong> Primes couvrant les risques professionnels ou constituant une charge d'exploitation</p>
        <p><strong>Non déductibles:</strong> Primes d'assurances sur la vie contractées au profit des dirigeants et du personnel</p>

        <h3>AMORTISSEMENTS</h3>
        <ul>
            <li>Déductibles dans la limite des taux et durée d'amortissement linéaire (Art. 101 CGI)</li>
            <li>Matériels ≤ 5 000 000 GNF: directement passés en charges</li>
            <li>Véhicules particuliers: amortissement exclu pour la fraction > 100 000 000 GNF</li>
            <li>Matériel domestique mis à disposition du personnel: non déductible</li>
        </ul>
        `
    ),

    // SLIDE 10: SPÉCIFICITÉ SECTEUR MINIER - AMORTISSEMENTS
    createSlide(
        "IS - SPÉCIFICITÉ SECTEUR MINIER",
        `
        <h3>AMORTISSEMENT ACCÉLÉRÉ (Art. 171 Code Minier)</h3>
        <p>Les sociétés minières comme <strong>Sycamore</strong> bénéficient d'un régime d'amortissement accéléré sur:</p>
        <ul>
            <li>Équipements lourds</li>
            <li>Installations minières</li>
            <li>Infrastructures de traitement</li>
        </ul>

        <p><strong>Objectif:</strong> Permettre une déduction fiscale plus rapide et réduire l'IS en phase de démarrage.</p>

        <p><strong>Condition:</strong> Soumis à autorisation par arrêté conjoint (Ministère des Mines + Budget).</p>

        <h3>DÉFICITS FISCAUX</h3>
        <p>Les déficits liés aux phases d'investissement lourds sont fréquents dans le secteur minier.</p>
        <p><strong>Report:</strong> Déductible à hauteur de 70% du bénéfice imposable de l'exercice suivant.</p>
        <p><strong>Recommandation:</strong> Suivi rigoureux pour maximiser l'utilisation du report.</p>
        `
    ),

    // SLIDE 11: IMPUTATION ET DÉCLARATION IS
    createSlide(
        "IS - IMPUTATION ET MODALITÉS",
        `
        <h3>IMPUTATION D'IMPÔTS ACQUITTÉS</h3>
        <ul>
            <li><strong>Retenues à la source:</strong> Imputables en crédit d'impôt (non reportable en cas de déficit)</li>
            <li><strong>IMF:</strong> Imputable de l'IS (non imputé = acquis définitivement au trésor)</li>
            <li><strong>Acomptes IS:</strong> Imputables de l'impôt final</li>
        </ul>

        <h3>ÉCHÉANCES ET DÉCLARATION</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <thead>
                <tr style="background-color: var(--french-gray);">
                    <th style="padding: 8px; border: 1px solid #ddd;">Échéance</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Opération</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">30 avril</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Déclaration et paiement IS annuel</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">15 juin</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">1er acompte (1/3 IS N-1)</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">15 septembre</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">2ème acompte (1/3 IS N-1)</td>
                </tr>
            </tbody>
        </table>

        <p><strong>Taux IS secteur minier:</strong> 30% (taux de droit commun)</p>
        `
    ),

    // SLIDE 12: IMPÔT MINIMUM FORFAITAIRE (IMF)
    createSlide(
        "IMPÔT MINIMUM FORFAITAIRE (IMF)",
        `
        <h3>DÉFINITION</h3>
        <p><strong>Qu'est-ce que c'est?</strong></p>
        <p>L'Impôt Minimum Forfaitaire (IMF) en Guinée est une imposition annuelle à laquelle sont soumises certaines entreprises, qu'elles réalisent ou non des bénéfices.</p>
        
        <p><strong>Objectif:</strong> Assurer que toutes les entreprises contribuent aux recettes fiscales même en cas de pertes.</p>

        <p><strong>NB:</strong> Même en l'absence de bénéfice (situation fréquente en début d'exploitation), l'entreprise minière reste redevable de l'IMF.</p>

        <h3>ENTREPRISES DISPENSÉES</h3>
        <ul>
            <li>Établissements publics à activité administrative</li>
            <li>Associations et collectivités non soumises à l'IS</li>
            <li>Sociétés nouvelles (1ère année civile d'exploitation)</li>
            <li>Sociétés ayant cessé toute activité</li>
            <li>Exonération temporaire en phase de recherche/exploration (Code minier)</li>
        </ul>
        `,
        "CHAPITRE 4 – IMPOSITION DU REVENU"
    ),

    // SLIDE 13: IMF - MODALITÉS
    createSlide(
        "IMF - MODALITÉS ET SANCTIONS",
        `
        <h3>ÉCHÉANCE ET DÉCLARATION</h3>
        <ul>
            <li><strong>Déclaration:</strong> Formulaire électronique sur ETAX</li>
            <li><strong>Échéance:</strong> 15 janvier de l'année d'imposition</li>
            <li><strong>Imputation:</strong> Sur l'IS et les acomptes (non reportable)</li>
        </ul>

        <h3>POINTS D'ATTENTION POUR SYCAMORE</h3>
        <ul>
            <li>L'IMF reste dû même en phase d'investissement lourd</li>
            <li>Vérifier les exonérations prévues par la convention minière</li>
            <li>Anticiper le paiement pour éviter les pénalités</li>
        </ul>

        <h3>SANCTIONS</h3>
        <p>Les sanctions relatives au défaut de déclaration et de paiement sont précisées dans le tableau des sanctions en annexe.</p>
        `
    ),

    // SLIDE 14: REVENUS DE CAPITAUX MOBILIERS
    createSlide(
        "IMPOSITION DES REVENUS DE CAPITAUX MOBILIERS",
        `
        <h3>RETENUES SUR LES PRODUITS DE PLACEMENT À REVENU VARIABLE</h3>
        
        <p><strong>Qu'est-ce que c'est?</strong></p>
        <ul>
            <li>Revenus d'actions ou d'obligations</li>
            <li>Plus-values de cession d'actions</li>
            <li>Revenus de parts sociales et revenus assimilés</li>
        </ul>

        <p><strong>Redevable réel:</strong> Bénéficiaire du revenu</p>
        <p><strong>Redevable légal:</strong> Établissement payeur ou cessionnaire</p>

        <h3>REVENUS CONCERNÉS POUR SYCAMORE</h3>
        <ul>
            <li><strong>Dividendes</strong> versés à la société mère ou aux actionnaires étrangers</li>
            <li><strong>Plus-values</strong> en cas de cession de titres de participation</li>
            <li><strong>Intérêts</strong> sur comptes courants d'actionnaires ou prêts intragroupe</li>
        </ul>
        `,
        "CHAPITRE 5 – IMPOSITION DES REVENUS DE CAPITAUX MOBILIERS"
    ),

    // SLIDE 15: REVENUS RÉPUTÉS DISTRIBUÉS
    createSlide(
        "REVENUS RÉPUTÉS DISTRIBUÉS",
        `
        <h3>LISTE DES REVENUS RÉPUTÉS DISTRIBUÉS</h3>
        <ul>
            <li>Bénéfice mis en report à nouveau non utilisé dans les 4 ans</li>
            <li>Avances, prêts ou acomptes aux associés/actionnaires</li>
            <li>Rémunérations et avantages occultes</li>
            <li>Rémunérations excessives des dirigeants</li>
            <li>Pourboires, dons et libéralités non déductibles</li>
            <li>Intérêts excédentaires aux associés</li>
            <li>Dépenses et charges non déductibles à l'IS</li>
            <li>Rémunérations des membres du conseil d'administration</li>
            <li>Redressements fiscaux (sauf réintégrations d'amortissements/provisions)</li>
        </ul>

        <h3>POINTS SENSIBLES POUR SYCAMORE</h3>
        <ul>
            <li>Management fees facturés par la société mère</li>
            <li>Avantages en nature excessifs aux dirigeants et salariés expatriés</li>
        </ul>
        `
    ),

    // SLIDE 16: MODALITÉS RETENUES CAPITAUX MOBILIERS
    createSlide(
        "MODALITÉS DES RETENUES",
        `
        <h3>ASSIETTE ET TAUX</h3>
        <p><strong>Assiette:</strong> Montant brut des produits distribués effectivement perçus</p>
        <p><strong>Taux normal:</strong> 15% du montant brut</p>
        <p><strong>Réduction possible:</strong> Par conventions fiscales internationales</p>

        <h3>ÉCHÉANCE ET DÉCLARATION</h3>
        <ul>
            <li><strong>Délai:</strong> Dans le mois suivant la distribution ou le paiement</li>
            <li><strong>Modalité:</strong> Formulaire électronique sur ETAX</li>
        </ul>

        <h3>IMPACT DES CONVENTIONS FISCALES</h3>
        <p>Lorsque les revenus sont distribués à des résidents d'États signataires d'une convention de non-double imposition, les règles et taux prévus par la convention s'appliquent.</p>

        <p><strong>Recommandation:</strong> Consulter le tableau des taux conventionnels en annexe 2.</p>
        `
    ),

    // SLIDE 17: CONTRIBUTION FONCIÈRE UNIQUE (CFU)
    createSlide(
        "CONTRIBUTION FONCIÈRE UNIQUE (CFU)",
        `
        <h3>DÉFINITION</h3>
        <p>Impôt direct perçu par l'État sur les revenus fonciers générés par les personnes possédant des propriétés imposables.</p>

        <h3>PROPRIÉTÉS IMPOSABLES</h3>
        <p><strong>Propriétés foncières non bâties:</strong></p>
        <ul>
            <li>Terrains nus à usage commercial ou industriel</li>
            <li>Carrières, étangs, salines et marais salants</li>
            <li>Propriétés temporairement impropres à leur usage</li>
        </ul>

        <p><strong>Propriétés foncières bâties:</strong></p>
        <ul>
            <li>Constructions fixées au sol à perpétuelle demeure</li>
            <li>Éléments attachés à demeure dans les constructions</li>
            <li>Panneaux-réclames fixés au sol ou sur bâtiments</li>
        </ul>
        `,
        "CHAPITRE 6 - IMPÔTS ET TAXES LOCAUX"
    ),

    // SLIDE 18: CFU - SECTEUR MINIER ET EXONÉRATIONS
    createSlide(
        "CFU - SPÉCIFICITÉS SECTEUR MINIER",
        `
        <h3>POINT D'ATTENTION POUR LE SECTEUR MINIER</h3>
        <ul>
            <li>Sites miniers incluent terrains, usines de traitement, logements de campements, dépôts, ateliers</li>
            <li>Valeur locative des bâtiments industriels doit être bien évaluée</li>
            <li>Exonérations possibles par convention minière ou Code minier (art. 168 et suivants)</li>
        </ul>

        <h3>EXONÉRATIONS</h3>
        <ul>
            <li>Immeubles de l'État et collectivités locales affectés à un service public</li>
            <li>Édifices servant à l'exercice de culte</li>
            <li>Immeubles destinés à l'enseignement public</li>
            <li>Immeubles d'enseignement privé édifiés par leurs fondateurs</li>
            <li>Immeubles servant aux exploitations agricoles</li>
            <li>Propriétés des missions diplomatiques et consulaires (sous réserve de réciprocité)</li>
        </ul>
        `
    ),

    // SLIDE 19: CFU - ASSIETTE ET TAUX
    createSlide(
        "CFU - ASSIETTE, TAUX ET MODALITÉS",
        `
        <h3>ASSIETTE DE LA CFU</h3>
        <p>Valeur locative réelle des propriétés imposables au 1er janvier.</p>

        <p><strong>Usage d'habitation:</strong> Montant annuel des recettes de location d'une propriété similaire</p>
        <p><strong>Usage commercial:</strong> 10% de la valeur vénale (70% du prix de revient)</p>

        <h3>TAUX DE LA CFU</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
            <thead>
                <tr style="background-color: var(--french-gray);">
                    <th style="padding: 8px; border: 1px solid #ddd;">Usage</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Taux</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Habitation</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">5%</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Professionnel (occupé par propriétaire)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">10%</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Professionnel (loué)</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">15%</td>
                </tr>
            </tbody>
        </table>

        <h3>ÉCHÉANCE</h3>
        <p>Déclaration et paiement au plus tard le 30 juin de chaque année.</p>
        `
    ),

    // SLIDE 20: PATENTE PROFESSIONNELLE
    createSlide(
        "PATENTE PROFESSIONNELLE",
        `
        <h3>DÉFINITION</h3>
        <p>Impôt annuel dû par toute personne physique ou morale exerçant une activité professionnelle non salariée.</p>

        <p><strong>Champ d'application:</strong> Activités commerciales, industrielles, ou des professions</p>
        <p><strong>Secteur minier:</strong> La patente s'applique à l'activité industrielle minière et aux marchés publics liés.</p>

        <h3>COMPOSITION</h3>
        <p>La patente se compose de:</p>
        <ul>
            <li><strong>Droit fixe:</strong> Basé sur le chiffre d'affaires de l'année précédente</li>
            <li><strong>Droit proportionnel:</strong> Sur la valeur locative des locaux professionnels</li>
        </ul>

        <h3>PERSONNES IMPOSABLES</h3>
        <p>Toute personne exerçant de manière habituelle en Guinée un commerce, une industrie ou profession soumise au régime de bénéfice réel normal.</p>
        `
    ),

    // SLIDE 21: PATENTE - TARIFS ET MODALITÉS
    createSlide(
        "PATENTE - TARIFS ET ÉCHÉANCES",
        `
        <h3>TARIFS DES PATENTES</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0; font-size: 0.9em;">
            <thead>
                <tr style="background-color: var(--fuel-yellow);">
                    <th style="padding: 8px; border: 1px solid #ddd;">Classe</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Chiffre d'affaires (GNF)</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Droit fixe</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Droit proportionnel</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">1ère</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">≥ 10 000 000 000</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">10 000 000</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">15%</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">2ème</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">5 à 10 milliards</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">5 000 000</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">15%</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">3ème</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">3 à 5 milliards</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">3 000 000</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">15%</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">4ème</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">800M à 3 milliards</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">2 000 000</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">15%</td>
                </tr>
            </tbody>
        </table>

        <p><strong>NB:</strong> Le droit proportionnel ne peut être inférieur au tiers du droit fixe.</p>

        <h3>ÉCHÉANCE</h3>
        <p>Paiement par anticipation au plus tard le 15 février de chaque année.</p>
        `
    ),

    // SLIDE 22: DROITS D'ENREGISTREMENT
    createSlide(
        "DROITS D'ENREGISTREMENT",
        `
        <h3>DÉFINITION</h3>
        <p>Impôt perçu par l'État lors de l'enregistrement des actes juridiques quelconques, qu'ils soient civils, judiciaires ou extra-judiciaires.</p>

        <h3>ACTES SOUMIS OBLIGATOIREMENT</h3>
        <ul>
            <li>Certificats de propriété, actes de cession, transmissions</li>
            <li>Baux d'immeubles urbains ou ruraux</li>
            <li>Actes portant création, fusion, transformation de sociétés</li>
            <li>Augmentation, réduction ou amortissement de capital social</li>
            <li>Cession d'actions ou parts sociales</li>
            <li>Contrats de marchés publics</li>
            <li>Actes d'ouverture de crédit</li>
        </ul>

        <h3>POINT D'ATTENTION SECTEUR MINIER</h3>
        <p>Application notamment aux conventions minières, augmentations de capital, contrats de bail, marchés publics d'infrastructures.</p>
        `
    ),

    // SLIDE 23: FISCALITÉ SPÉCIFIQUE - REDEVANCES MINIÈRES
    createSlide(
        "FISCALITÉ SPÉCIFIQUE AU SECTEUR MINIER",
        `
        <h3>REDEVANCES MINIÈRES</h3>
        
        <p><strong>Définition:</strong> Impôt spécifique assis sur la production et/ou l'exportation des substances minières.</p>
        <p><strong>Objectif:</strong> Assurer une juste rémunération de l'État pour l'exploitation des ressources naturelles.</p>

        <h3>TYPOLOGIE</h3>
        <ul>
            <li><strong>Redevance sur la production:</strong> Calculée sur la valeur marchande des minerais extraits</li>
            <li><strong>Redevance sur l'exportation:</strong> Perçue lors de la sortie du territoire</li>
            <li><strong>Redevance superficiaire annuelle:</strong> Due en fonction de la superficie des titres miniers</li>
        </ul>

        <h3>DROITS FIXES ET ANNUELS</h3>
        <ul>
            <li><strong>Droits fixes:</strong> Dûs à la délivrance des titres miniers</li>
            <li><strong>Droits annuels:</strong> Redevances de maintien pour conserver la validité du titre</li>
        </ul>
        `,
        "3ème PARTIE - FISCALITÉ SPÉCIFIQUE AU SECTEUR MINIER"
    ),

    // SLIDE 24: CONTRIBUTIONS DÉVELOPPEMENT LOCAL
    createSlide(
        "CONTRIBUTIONS AU DÉVELOPPEMENT LOCAL",
        `
        <h3>PRINCIPE</h3>
        <p>Les sociétés minières doivent contribuer au développement économique et social des collectivités locales impactées (articles 130 et suivants du code minier).</p>

        <h3>FONDS DE DÉVELOPPEMENT LOCAL (FODEL)</h3>
        <ul>
            <li><strong>Financement:</strong> Pourcentage du chiffre d'affaires minier (0,5% à 1%)</li>
            <li><strong>Objectif:</strong> Financer des projets communautaires (écoles, santé, infrastructures)</li>
            <li><strong>Gestion:</strong> Conjointe par les collectivités, l'État et les sociétés minières</li>
        </ul>

        <h3>OBLIGATION POUR SYCAMORE</h3>
        <p>Prévoir une ligne budgétaire annuelle dédiée au FODEL dans sa comptabilité.</p>

        <h3>RÉGIMES DE STABILITÉ FISCALE</h3>
        <ul>
            <li><strong>Stabilité fiscale (art. 172 code minier):</strong> Garantie de stabilité des régimes fiscaux pendant 15 ans après démarrage</li>
            <li><strong>Incitations:</strong> Amortissement accéléré, exonérations douanières, déductions spécifiques</li>
        </ul>
        `
    ),
// SLIDE 25: CAS N°1 - MC LENON FOSTER
createSlide(
    "CAS PRATIQUE - DÉTERMINATION DU RÉSULTAT FISCAL",
    `
    <h3>CAS N°1: MC LENON FOSTER</h3>
    
    <div class="case-header">
        <p><strong>Exercice clos le:</strong> 31 Décembre 2021</p>
        <p><strong>Résultat comptable:</strong> <span class="deficit">Déficitaire de GNF 11 322 755 384</span></p>
    </div>

    <h3>TRAVAIL DEMANDÉ</h3>
    <ul>
        <li>Analyser la balance des comptes fournie</li>
        <li>Déterminer le résultat fiscal après réintégrations et déductions</li>
        <li>Calculer l'impôt sur les sociétés applicable</li>
        <li>Préparer la déclaration de résultat fiscale</li>
    </ul>

    <h3>ÉTAPES CLÉS</h3>
    <ul>
        <li>Identification des charges non déductibles</li>
        <li>Vérification des produits imposables</li>
        <li>Application du barème de l'IS</li>
        <li>Rédaction de la liasse fiscale</li>
    </ul>
    `,
    "4ème PARTIE - ÉTUDES DE CAS PRATIQUES"
),

// SLIDE 26: CAS N°2 - SOCIÉTÉ LOGISTIC DE BOFFA
createSlide(
    "CAS PRATIQUE - DÉTERMINATION DU RÉSULTAT FISCAL",
    `
    <h3>CAS N°2: SOCIÉTÉ LOGISTIC DE BOFFA</h3>
    
    <div class="case-header">
        <p><strong>Exercice clos le:</strong> 31 Décembre 2023</p>
        <p><strong>Résultat comptable:</strong> <span class="deficit">Déficitaire de GNF 9 155 466 297</span></p>
    </div>

    <h3>TRAVAIL DEMANDÉ</h3>
    <ul>
        <li>Examiner la balance des comptes jointe</li>
        <li>Calculer le résultat fiscal corrigé</li>
        <li>Déterminer l'impôt sur les sociétés dû</li>
        <li>Établir la déclaration fiscale</li>
    </ul>

    <h3>POINTS D'ATTENTION</h3>
    <ul>
        <li>Réintégration des charges non déductibles</li>
        <li>Déduction des produits non imposables</li>
        <li>Respect des délais de déclaration</li>
        <li>Vérification des reports déficitaires</li>
    </ul>

    <h3>APPROCHE MÉTHODOLOGIQUE</h3>
    <p>Utiliser le plan de traitement fiscal standard :</p>
    <ol>
        <li>Analyse de la balance comptable</li>
        <li>Identification des différences temporaires et permanentes</li>
        <li>Calcul des réintégrations et déductions</li>
        <li>Détermination de la base imposable</li>
        <li>Calcul de l'impôt</li>
    </ol>
    `,
    "4ème PARTIE - ÉTUDES DE CAS PRATIQUES"
),
    // SLIDE 25: SYNTHÈSE ET RECOMMANDATIONS
    createSlide(
        "SYNTHÈSE ET RECOMMANDATIONS POUR SYCAMORE",
        `
        <h3>POINTS CLÉS À RETENIR</h3>
        <ul>
            <li><strong>IS:</strong> Taux de 30%, détermination rigoureuse du résultat fiscal, suivi des déficits</li>
            <li><strong>IMF:</strong> Maintien de l'obligation même sans bénéfice, vérification des exonérations</li>
            <li><strong>CFU et Patente:</strong> Évaluation correcte des valeurs locatives, respect des échéances</li>
            <li><strong>Spécificités minières:</strong> Profit des régimes dérogatoires (amortissement accéléré, stabilité fiscale)</li>
        </ul>

        <h3>RECOMMANDATIONS OPÉRATIONNELLES</h3>
        <ul>
            <li>Mettre en place un tableau de suivi des retraitements fiscaux</li>
            <li>Anticiper les déclarations d'IS et IMF selon le calendrier fiscal</li>
            <li>Documenter les spécificités du régime minier dans la comptabilité</li>
            <li>Maintenir une traçabilité des contributions au développement local</li>
        </ul>

        <h3>PROCHAINES ÉTAPES</h3>
        <ul>
            <li>Révision des procédures de détermination du résultat fiscal</li>
            <li>Mise en place du suivi des régimes dérogatoires</li>
            <li>Préparation des dossiers pour les avantages fiscaux et les demandes de remboursement de crédit de TVA</li>
        </ul>
        `,
        null
    )
];

export default function Day4Page() {
  return <Day4Client slides={slides} />;
}