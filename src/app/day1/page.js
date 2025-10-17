// Fichier : src/app/day1/page.js

import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';

// Le contenu est structuré en un tableau de diapositives (SLIDES)
const SLIDES = [
    {
        title: 'Diapositive 1 : Introduction',
        content: (
            <>
                [cite_start]<h2 className="slide-title">SYCAMORE – Fiscalité minière – Introduction. [cite: 5]</h2>
                [cite_start]<p>La formation demandée vise à améliorer les compétences et à renforcer les capacités de l’équipe comptable, financière et juridique de Sycamore Mine Guinée SAU, en matière de fiscalité applicable au secteur minier en République de Guinée. [cite: 6]</p>
                [cite_start]<p>Elle permettra notamment de : [cite: 7]</p>
                <ul>
                    [cite_start]<li>Approfondir la connaissance des participants sur les impôts, taxes et redevances spécifiques aux activités minières en Guinée, ainsi que le régime préférentiel prévu par le Code Minier[cite: 8];</li>
                    [cite_start]<li>Développer l’expertise pratique sur la gestion des obligations fiscales et le montage d’un dossier de remboursement de crédit de TVA[cite: 9];</li>
                    [cite_start]<li>Renforcer la capacité de préparation et de gestion des contrôles fiscaux, ainsi que la maîtrise des voies de recours en cas de contentieux[cite: 10];</li>
                    [cite_start]<li>Outiller les participants pour une gestion fiscale proactive et conforme, garantissant la sécurisation fiscale des opérations minières de la société[cite: 11].</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 2 : Objectif Général',
        content: (
            <>
                [cite_start]<h2 className="slide-title">SYCAMORE – Fiscalité minière – Objectifs de la formation. [cite: 15]</h2>
                [cite_start]<h3>OBJECTIF GENERAL [cite: 16]</h3>
                [cite_start]<p>En général, l’objectif de cette formation est de fournir aux participants les connaissances et compétences nécessaires pour assurer une gestion fiscale optimale des activités minières de Sycamore Mine Guinée SAU, en vue de : [cite: 17]</p>
                <ul>
                    [cite_start]<li>Limiter les coûts liés aux défauts de conformité[cite: 18];</li>
                    [cite_start]<li>Garantir le respect des droits et obligations de la société en matière fiscale[cite: 19];</li>
                    [cite_start]<li>Sécuriser les relations avec l’Administration fiscale guinéenne dans le cadre des procédures de contrôle et de suivi[cite: 20].</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 3 : Objectifs Spécifiques',
        content: (
            <>
                [cite_start]<h2 className="slide-title">Objectifs Spécifiques [cite: 21]</h2>
                [cite_start]<p>Les objectifs spécifiques de cette formation sont : [cite: 22]</p>
                <ul>
                    [cite_start]<li>Comprendre le régime fiscal applicable aux entreprises minières en Guinée, tel que prévu par le Code minier et le Code général des impôts[cite: 23];</li>
                    [cite_start]<li>Identifier et gérer les obligations fiscales liées aux redevances minières, à la TVA, à l’impôt sur les sociétés et aux retenues à la source[cite: 24];</li>
                    [cite_start]<li>Savoir constituer et présenter un dossier de remboursement de crédit de TVA dans le secteur minier[cite: 25];</li>
                    [cite_start]<li>Maîtriser les avantages fiscaux et régimes dérogatoires offerts par le Code minier[cite: 26];</li>
                    [cite_start]<li>Renforcer la préparation face aux contrôles fiscaux et maîtriser les voies de recours disponibles en cas de contentieux[cite: 27].</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 4 : Objectifs Opérationnels',
        content: (
            <>
                [cite_start]<h2 className="slide-title">OBJECTIFS OPERATIONNELS [cite: 29]</h2>
                [cite_start]<p>Les objectifs opérationnels sont les suivants : [cite: 30]</p>
                <ul>
                    [cite_start]<li>Évaluer et calculer correctement les impôts, taxes et redevances spécifiques aux activités minières (redevance de production, redevance superficiaire, etc.)[cite: 31];</li>
                    [cite_start]<li>Effectuer les déclarations fiscales dans les délais prescrits par la législation guinéenne[cite: 32];</li>
                    [cite_start]<li>Monter un dossier complet de remboursement de crédit TVA et en assurer le suivi[cite: 33];</li>
                    [cite_start]<li>Préparer et sécuriser la liasse fiscale annuelle de l’entreprise minière[cite: 34];</li>
                    [cite_start]<li>Répondre efficacement aux demandes et notifications de l’Administration fiscale, et prendre les actions nécessaires lors des vérifications fiscales, en collaboration avec le conseil fiscal de la société[cite: 35].</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 5 : Compétences Visées',
        content: (
            <>
                [cite_start]<h2 className="slide-title">COMPETENCES VISEES [cite: 36]</h2>
                [cite_start]<p>À l’issue de cette formation, les participants : [cite: 37]</p>
                <ul>
                    [cite_start]<li>Connaîtront le régime fiscal applicable aux entreprises minières opérant en Guinée[cite: 38];</li>
                    [cite_start]<li>Seront capables de calculer et de déclarer correctement les impôts, taxes et redevances minières[cite: 39];</li>
                    [cite_start]<li>Sauront constituer et défendre un dossier de remboursement de crédit de TVA[cite: 40];</li>
                    [cite_start]<li>Seront en mesure de préparer la liasse fiscale et de procéder à des revues fiscales des comptes[cite: 41];</li>
                    [cite_start]<li>Auront acquis les réflexes nécessaires pour interagir efficacement avec l’Administration fiscale lors des procédures de contrôle, afin d’éviter toute erreur préjudiciable à l’entreprise[cite: 42].</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 6 : Contenu de la formation (Parties 1 & 2)',
        content: (
            <>
                [cite_start]<h2 className="slide-title">SYCAMORE – Fiscalité minière – Contenu de la formation. [cite: 43]</h2>
                
                [cite_start]<h3>1ère Partie : Introduction à la Fiscalité Guinéenne et le régime spécifique du Secteur Minier [cite: 45]</h3>
                <ul>
                    [cite_start]<li>Principes et concepts fondamentaux de la fiscalité guinéenne [cite: 46]</li>
                    [cite_start]<li>Aperçu sur le système fiscal guinéen [cite: 47]</li>
                    [cite_start]<li>Régime fiscal applicable aux sociétés minières (Code minier, CGI) [cite: 48]</li>
                    [cite_start]<li>Typologie des impôts : impôts généraux vs impôts spécifiques au secteur minier [cite: 49]</li>
                </ul>
                
                [cite_start]<h3>2ème Partie : Obligations fiscales de Sycamore Mine Guinée SAU [cite: 50]</h3>
                
                <h4>Chap. [cite_start]1 : Fiscalité du personnel [cite: 51]</h4>
                <ul>
                    [cite_start]<li>Retenue sur Traitements et Salaires (RTS) : personnes imposables, base, taux, échéances, sanctions [cite: 52]</li>
                    [cite_start]<li>Versement Forfaitaire (VF) : règles d’application et calculs [cite: 53]</li>
                    [cite_start]<li>Taxe d’Apprentissage / Contribution à la Formation Professionnelle : assiette, taux et échéances [cite: 54]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 7 : Contenu de la formation (Parties 2, 3 & 4)',
        content: (
            <>
                [cite_start]<h2 className="slide-title">Contenu de la formation (Suite) [cite: 67]</h2>
                
                <h4>Chap. [cite_start]2 : Fiscalité des transactions avec les tiers [cite: 55]</h4>
                <ul>
                    [cite_start]<li>Retenues sur les revenus non salariaux (honoraires, redevances, prestations techniques) – impact des conventions fiscales de non-double imposition [cite: 56]</li>
                    [cite_start]<li>Prélèvement forfaitaire sur les achats locaux : assiette, taux, échéances, sanctions [cite: 57, 58]</li>
                </ul>
                
                <h4>Chap. [cite_start]3 : Imposition du chiffre d’affaires [cite: 59]</h4>
                <ul>
                    [cite_start]<li>TVA : champ d’application, taux, modalités de déclaration et de paiement [cite: 60]</li>
                    [cite_start]<li>Déduction et remboursement du crédit de TVA minier : conditions d’éligibilité, dossier à constituer, délais et risques de rejet [cite: 61]</li>
                </ul>

                <h4>Chap. [cite_start]4 : Imposition du revenu [cite: 62]</h4>
                <ul>
                    [cite_start]<li>Impôt sur les sociétés (IS) : détermination du résultat fiscal, retraitements extra-comptables, taux et modalités déclaratives [cite: 63]</li>
                    [cite_start]<li>Impôt Minimum Forfaitaire (IMF) : base, taux, obligations [cite: 64]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 8 : Contenu de la formation (Parties 5 & 6)',
        content: (
            <>
                [cite_start]<h2 className="slide-title">Contenu de la formation (Suite) [cite: 68]</h2>
                
                <h4>Chap. [cite_start]5 : Imposition des revenus de capitaux mobiliers [cite: 69]</h4>
                <ul>
                    [cite_start]<li>Dividendes et distributions : régime fiscal applicable [cite: 70]</li>
                    [cite_start]<li>Plus-values de cessions d’actions minières [cite: 71]</li>
                    [cite_start]<li>Intérêts sur prêts et comptes courants d’actionnaires [cite: 72]</li>
                </ul>
                
                <h4>Chap. [cite_start]6 : Impôts et taxes locaux [cite: 73]</h4>
                <ul>
                    [cite_start]<li>Contribution Foncière Unique (CFU) [cite: 74]</li>
                    [cite_start]<li>Patente proportionnelle [cite: 75]</li>
                    [cite_start]<li>Droits d’enregistrement applicables aux actes (contrats, conventions minières, etc.) [cite: 76]</li>
                </ul>

                [cite_start]<h3>3ème Partie : Fiscalité spécifique au secteur minier [cite: 77]</h3>
                <ul>
                    [cite_start]<li>Redevances minières (production, exportation, redevance superficiaire annuelle) [cite: 78]</li>
                    [cite_start]<li>Droits fixes et annuels relatifs aux titres miniers (permis d’exploration, concession d’exploitation) [cite: 79]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 9 : Contenu de la formation (Parties 3, 4 & 5)',
        content: (
            <>
                [cite_start]<h2 className="slide-title">Contenu de la formation (Suite) [cite: 68]</h2>
                
                [cite_start]<h3>3ème Partie : Fiscalité spécifique au secteur minier (Suite) [cite: 77]</h3>
                <ul>
                    [cite_start]<li>Contributions au développement local [cite: 80]</li>
                    [cite_start]<li>Régimes de stabilité fiscale et incitations prévues par le Code minier [cite: 81]</li>
                </ul>

                [cite_start]<h3>4ème Partie : Procédures fiscales et contrôle [cite: 82]</h3>
                <ul>
                    [cite_start]<li>Droits de contrôle et de vérification de l’Administration fiscale [cite: 83]</li>
                    [cite_start]<li>Types de contrôles (sur pièces, sur place) et modalités pratiques [cite: 84]</li>
                    [cite_start]<li>Droits, obligations et recours du contribuable [cite: 85]</li>
                    [cite_start]<li>Tableau pratique des interactions entre l’Administration et l’entreprise dans le cadre des vérifications fiscales [cite: 86]</li>
                </ul>
                
                [cite_start]<h3>5ème Partie : Exercices pratiques et études de cas [cite: 87]</h3>
                <ul>
                    [cite_start]<li>Simulation de calcul d’une redevance minière sur la production aurifère [cite: 88]</li>
                    [cite_start]<li>Exemple de montage d’un dossier de remboursement de crédit de TVA [cite: 89]</li>
                    [cite_start]<li>Simulation d’une déclaration d’IS et d’IMF pour une société minière [cite: 90]</li>
                    [cite_start]<li>Cas pratique : notification de redressement fiscal et rédaction d’une réponse argumentée [cite: 91]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 10 : Définition de la Fiscalité',
        content: (
            <>
                [cite_start]<h2 className="slide-title">DÉFINITION DE LA FISCALITE [cite: 96]</h2>
                [cite_start]<p>Étymologiquement le mot « fisc » vient du latin, « fiscus » qui désigne un panier ou osier destiné à recueillir l’argent[cite: 97].</p>
                <ul>
                    [cite_start]<li>La fiscalité désigne l'ensemble des règles et des lois qui concernent les impôts[cite: 98].</li>
                    [cite_start]<li>C'est un système mis en place par l’État pour collecter des sommes d'argent auprès des citoyens et des entreprises[cite: 99].</li>
                    [cite_start]<li>Elle est une matière juridique, car reposant sur le droit fiscal, qui tire sa source du droit public, administratif et constitutionnel[cite: 100].</li>
                </ul>
                [cite_start]<h3>Droit fiscal [cite: 101]</h3>
                [cite_start]<p>Il est l’ensemble des règles applicables dans les rapports entre l’État et les redevables de l’impôt[cite: 101]. [cite_start]Il constitue une manifestation de prérogatives de la puissance publique de l’État[cite: 102].</p>
            </>
        )
    },
    {
        title: 'Diapositive 11 : Principes de la Fiscalité',
        content: (
            <>
                [cite_start]<h2 className="slide-title">PRINCIPES DE LA FISCALITE [cite: 107]</h2>
                
                [cite_start]<h3>LA LEGALITE DE L’IMPÔT [cite: 108]</h3>
                [cite_start]<p>Consiste au fait que l’institution d’un impôt, ainsi que les règles relatives à l'assiette, au taux et aux modalités de recouvrement des impôts doivent être fixées par des lois votées par le Parlement[cite: 108].</p>
                
                [cite_start]<h3>LA NECESSITE DE L’IMPÔT [cite: 109]</h3>
                [cite_start]<p>Signifie que l’impôt doit être justifié par le besoin de financer les services publics[cite: 109]. [cite_start]La légitimité de la fiscalité dépend donc de son utilisation pour satisfaire les besoins collectifs de la société[cite: 109].</p>
                
                [cite_start]<h3>L’ANNUALITE DE L’IMPÔT [cite: 110]</h3>
                [cite_start]<p>Illustre la dimension temporelle de la fiscalité et se traduit par la prévision annuelle des recettes fiscales et le contrôle annuel de l’assemblée sur les levées fiscales[cite: 110].</p>
                
                [cite_start]<h3>EGALITE [cite: 111]</h3>
                [cite_start]<p>Requiert que la contribution fiscale soit équitablement répartie selon les revenus des citoyens, afin d'éviter des charges disproportionnées (Art. 13 de la Déclaration des droits de l'homme et du citoyen)[cite: 111].</p>
            </>
        )
    },
    {
        title: 'Diapositive 12 : Définition de l’Impôt',
        content: (
            <>
                [cite_start]<h2 className="slide-title">DEFINITION DE L’IMPÔT [cite: 115]</h2>
                
                [cite_start]<h3>Selon Gaston ZESE [cite: 116]</h3>
                [cite_start]<p>« L'impôt est une prestation pécuniaire requise des particuliers par voie d'autorité à titre définitif et sans contrepartie, en vue de la couverture des charges publiques »[cite: 116].</p>
                
                [cite_start]<h3>Définition générale [cite: 117]</h3>
                [cite_start]<p>L’impôt est une prestation pécuniaire mise à la charge des personnes physiques et morales en fonction de leurs capacités contributives et sans contrepartie déterminée, en vue de la couverture des dépenses publiques et de la réalisation d’objectifs économiques et sociaux[cite: 117]. [cite_start]L’impôt constitue un des principaux moyens de financement des dépenses publiques[cite: 118].</p>
            </>
        )
    },
    {
        title: 'Diapositive 13 : Caractéristiques de l’Impôt',
        content: (
            <>
                [cite_start]<h2 className="slide-title">CARACTERISTIQUE DE L’IMPÔT [cite: 122]</h2>
                
                <h3>1. [cite_start]PÉCUNIAIRE [cite: 124]</h3>
                [cite_start]<p>L'impôt est un prélèvement sous forme pécuniaire (en argent) [cite: 124][cite_start], ce qui exclut les règlements en nature ayant existé par le passé[cite: 125].</p>
                
                <h3>2. [cite_start]PERÇU A TITRE DEFINITIF ET SANS CONTREPARTIE [cite: 126]</h3>
                <p>Il s’agit d’une ressource définitive qui alimente les budgets de l'État. [cite_start]Il ne constitue pas le prix d’un service rendu, n’est pas restitué et ne donne pas lieu à paiement d’intérêt[cite: 127].</p>
                
                <h3>3. [cite_start]OBLIGATOIRE [cite: 128]</h3>
                <p>Institué par disposition légale, il est prélevé par voie d’autorité par l’administration. [cite_start]Tout contribuable est tenu obligé de déclarer et de payer l’impôt à temps et en toute sincérité[cite: 129].</p>
            </>
        )
    },
    {
        title: 'Diapositive 14 : Distinction Impôt, Taxe, Redevance',
        content: (
            <>
                [cite_start]<h2 className="slide-title">DISTINCTION DE L’IMPÔT, DES AUTRES PRELEVEMENTS [cite: 133]</h2>
                
                <h3>I. [cite_start]IMPÔT [cite: 134]</h3>
                <p>Sert à financer les dépenses budgétaires de l’État sans contrepartie directe pour le contribuable. [cite_start]La contribution est obligatoire et vise le financement global des charges publiques[cite: 137].</p>
                
                <h3>II. [cite_start]TAXE [cite: 138]</h3>
                <p>Donne lieu à une contrepartie (utilisation d’un ouvrage ou d’un service public) mais la contrepartie n’est pas toujours effective. [cite_start]Le contribuable peut être tenu de la payer sans bénéficier directement du service[cite: 139, 140].</p>
                
                <h3>III. [cite_start]REDEVANCE [cite: 141]</h3>
                <p>Perçue en contrepartie de l’utilisation réelle d’un ouvrage ou d’un service public. Il existe une équivalence financière entre le service rendu et la somme acquittée. [cite_start]Le contribuable ne paie que s’il a réellement utilisé le service[cite: 143, 144].</p>
            </>
        )
    },
    {
        title: 'Diapositive 15 : Le Système Déclaratif',
        content: (
            <>
                [cite_start]<h2 className="slide-title">SYSTEM DECLARATIF: Qu’est - ce que c’est? [cite: 147]</h2>
                [cite_start]<p>C'est un mécanisme fiscal où il est laissé au contribuable le soin de déclarer lui-même le montant de ses revenus, bénéfices ou la valeur des biens, en vue du calcul de son impôt[cite: 148].</p>
                [cite_start]<p>L'administration fiscale ne détermine pas directement ce que le contribuable doit payer ; c'est le contribuable qui, par l'intermédiaire d'une déclaration fiscale, présente la base de calcul de chaque obligation fiscale[cite: 149, 150].</p>
                
                [cite_start]<h3>Caractéristiques du Principe Déclaratif [cite: 158]</h3>
                <ul>
                    [cite_start]<li>**Auto-déclaration** : Le contribuable déclare librement les revenus ou transactions servant de base à la détermination et au paiement des impôts, via un formulaire mensuel ou annuel[cite: 155].</li>
                    [cite_start]<li>**Obligations** : Le contribuable a l’obligation d’effectuer une déclaration correcte et complète, ainsi que l’obligation de paiement des impôts calculés sur cette base[cite: 157].</li>
                    [cite_start]<li>**Contrôle de l'administration** : Après la déclaration, l'administration fiscale dispose d’un droit de contrôle pour s'assurer de la véracité et de l’exhaustivité des éléments déclarés[cite: 160]. [cite_start]En cas de doute, l'administration peut demander des éclaircissements et justifications[cite: 161].</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 16 : Fiscalité Directe et Indirecte',
        content: (
            <>
                [cite_start]<h2 className="slide-title">FISCALITE DIRECTE et FISCALITE INDIRECTE [cite: 171]</h2>
                
                [cite_start]<h3>FISCALITE DIRECTE [cite: 165]</h3>
                [cite_start]<p>Le redevable est le contribuable[cite: 166]. [cite_start]La personne physique ou morale qui supporte l’impôt est celle qui en effectue le versement à l’administration fiscale[cite: 167]. [cite_start]Elle touche les revenus et le patrimoine d’un contribuable[cite: 169].</p>
                <ul>
                    [cite_start]<li>**Exemples** : Impôt sur les sociétés (IS), Impôt Minimum Forfaitaire (IMF), Contribution Foncière Unique (CFU), Patente[cite: 170].</li>
                </ul>

                [cite_start]<h3>FISCALITE INDIRECTE [cite: 172]</h3>
                [cite_start]<p>Il y a un redevable et un contribuable[cite: 173]. [cite_start]L'impôt est supporté par le contribuable, mais versé par une personne différente (le redevable)[cite: 174]. [cite_start]Ces impôts sont répercutés sur le prix de vente [cite: 175] [cite_start]et sont perçus sur les transactions[cite: 176].</p>
                <ul>
                    [cite_start]<li>**Exemples** : Taxe sur la Valeur Ajoutée (TVA), Taxe sur les Assurances, Taxe sur les Activités Financières[cite: 177].</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 17 : Régime Fiscal Minier (Encadrement)',
        content: (
            <>
                [cite_start]<h2 className="slide-title">RÉGIME FISCAL APPLICABLE AUX SOCIÉTÉS MINIÈRES [cite: 196]</h2>
                
                [cite_start]<p>Précision importante : Dans le secteur minier, tous ces principes trouvent une application particulière, car la fiscalité minière contribue de manière significative aux recettes de l’État guinéen[cite: 181, 182].</p>
                
                [cite_start]<h3>Double encadrement légal [cite: 185]</h3>
                <ul>
                    [cite_start]<li>**Code minier** : Définit les obligations fiscales spécifiques aux titulaires de titres miniers (exploration, construction, exploitation, transformation)[cite: 186].</li>
                    [cite_start]<li>**Code général des impôts (CGI)** : Fixe les règles fiscales de droit commun applicables à toutes les entreprises opérant en Guinée[cite: 187].</li>
                </ul>
                
                [cite_start]<h3>Principes du régime fiscal minier [cite: 188]</h3>
                <ul>
                    [cite_start]<li>Application simultanée du CGI et des dispositions particulières du Code minier[cite: 189].</li>
                    [cite_start]<li>Les conventions minières peuvent prévoir des clauses de stabilité fiscale ainsi que des avantages douaniers et fiscaux spécifiques[cite: 190].</li>
                    [cite_start]<li>Les sociétés minières sont soumises à un régime déclaratif renforcé (comptabilité distincte, audits spécifiques)[cite: 191].</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 18 : Impôts Spécifiques au Secteur Minier',
        content: (
            <>
                [cite_start]<h2 className="slide-title">Impôts et taxes spécifiques au secteur minier [cite: 201]</h2>
                <ul>
                    [cite_start]<li>**Redevance minière sur la production** : Calculée sur la valeur brute extraite (ex. : minerai or : 5–6 %)[cite: 202].</li>
                    [cite_start]<li>**Redevance superficiaire annuelle** : Montant forfaitaire par km² de permis minier[cite: 203].</li>
                    [cite_start]<li>**Redevance d’exportation** (selon produits et régime applicable)[cite: 204].</li>
                    [cite_start]<li>**Contributions au développement local** : Participation obligatoire des sociétés minières (FNDL, FODEL, soutien pour les infrastructures communautaires)[cite: 205].</li>
                    [cite_start]<li>**Droits fixes sur titres miniers** : Paiement lors de l’octroi et du renouvellement des permis[cite: 206].</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 19 : Typologie des Impôts (Résumé)',
        content: (
            <>
                [cite_start]<h2 className="slide-title">Typologie des impôts : impôts généraux vs impôts spécifiques [cite: 209]</h2>
                <p style={{marginTop: '20px', fontSize: '0.9em', color: 'var(--saddle)'}}>Tableau récapitulatif des catégories d'impôts et des régimes applicables :</p>
                
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', fontSize: '0.9em' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--saddle)', color: 'white' }}>
                            [cite_start]<th style={{ padding: '10px', border: '1px solid var(--french-gray)' }}>Catégories [cite: 210]</th>
                            [cite_start]<th style={{ backgroundColor: 'var(--sun)', color: 'var(--saddle)', padding: '10px', border: '1px solid var(--french-gray)' }}>Impôts généraux (CGI) [cite: 211]</th>
                            [cite_start]<th style={{ backgroundColor: 'var(--fuel-yellow)', color: 'var(--saddle)', padding: '10px', border: '1px solid var(--french-gray)' }}>Impôts spécifiques au secteur minier (Code minier) [cite: 212]</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            [cite_start]<td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid var(--french-gray)' }}>Impôts directs [cite: 213]</td>
                            [cite_start]<td style={{ padding: '10px', border: '1px solid var(--french-gray)' }}>IS [cite: 214][cite_start], IMF [cite: 215][cite_start], RTS [cite: 216][cite_start], RNS [cite: 217][cite_start], Patente proportionnelle [cite: 228][cite_start], Contribution foncière unique [cite: 229]</td>
                            [cite_start]<td style={{ padding: '10px', border: '1px solid var(--french-gray)' }}>Redevance minière sur la production et l’exportation [cite: 218][cite_start], Contribution au développement local [cite: 219][cite_start], Redevance sur la superficie - annuelle [cite: 220][cite_start], Contribution foncière spécifique aux concessions minières [cite: 230]</td>
                        </tr>
                        <tr>
                            [cite_start]<td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid var(--french-gray)' }}>Impôts indirects [cite: 221]</td>
                            [cite_start]<td style={{ padding: '10px', border: '1px solid var(--french-gray)' }}>Taxe sur la Valeur Ajoutée (TVA) [cite: 222][cite_start], Droits d’enregistrement [cite: 223][cite_start], Droits de douane et accises [cite: 224]</td>
                            [cite_start]<td style={{ padding: '10px', border: '1px solid var(--french-gray)' }}>Exonérations douanières [cite: 225] [cite_start]et de TVA [cite: 226] sur les phases de recherche et d’investissement</td>
                        </tr>
                        <tr>
                            [cite_start]<td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid var(--french-gray)' }}>Particularités [cite: 231]</td>
                            [cite_start]<td style={{ padding: '10px', border: '1px solid var(--french-gray)' }}>Régime de droit commun [cite: 232] [cite_start](Application du CGI [cite: 233])</td>
                            [cite_start]<td style={{ padding: '10px', border: '1px solid var(--french-gray)' }}>Régime dérogatoire [cite: 234][cite_start], Stabilité fiscale [cite: 235][cite_start], Amortissement accéléré [cite: 236]</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
];

export default function Day1Page() {
  return (
    <ContentWrapper 
        title="Jour 1 : Support de formation – Introduction & Cadre Fiscal Minier" 
        date="20 octobre 2025"
    >
        {/* Le composant SlideShow prend le tableau de slides et gère l'affichage des boutons */}
        <SlideShow slides={SLIDES} />
    </ContentWrapper>
  );
}