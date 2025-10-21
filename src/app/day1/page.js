// Fichier : src/app/day1/page.js
import Day1Client from './Day1Client';
// Le contenu est structuré en un tableau de diapositives (SLIDES)
const slides = [
    {
        title: 'Diapositive 1 : Introduction',
        content: (
            <>
                <h2 className="slide-title">SYCAMORE – Fiscalité minière – Introduction.</h2>
                <p>La formation demandée vise à améliorer les compétences et à renforcer les capacités de l’équipe comptable, financière et juridique de Sycamore Mine Guinée SAU, en matière de fiscalité applicable au secteur minier en République de Guinée.</p>
                <p>Elle permettra notamment de :</p>
                <ul>
                    <li>Approfondir la connaissance des participants sur les impôts, taxes et redevances spécifiques aux activités minières en Guinée, ainsi que le régime préférentiel prévu par le Code Minier;</li>
                    <li>Développer l’expertise pratique sur la gestion des obligations fiscales et le montage d’un dossier de remboursement de crédit de TVA;</li>
                    <li>Renforcer la capacité de préparation et de gestion des contrôles fiscaux, ainsi que la maîtrise des voies de recours en cas de contentieux;</li>
                    <li>Outiller les participants pour une gestion fiscale proactive et conforme, garantissant la sécurisation fiscale des opérations minières de la société.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 2 : Objectif Général',
        content: (
            <>
                <h2 className="slide-title">SYCAMORE – Fiscalité minière – Objectifs de la formation.</h2>
                <h3>OBJECTIF GENERAL</h3>
                <p>En général, l’objectif de cette formation est de fournir aux participants les connaissances et compétences nécessaires pour assurer une gestion fiscale optimale des activités minières de Sycamore Mine Guinée SAU, en vue de :</p>
                <ul>
                    <li>Limiter les coûts liés aux défauts de conformité;</li>
                    <li>Garantir le respect des droits et obligations de la société en matière fiscale;</li>
                    <li>Sécuriser les relations avec l’Administration fiscale guinéenne dans le cadre des procédures de contrôle et de suivi.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 3 : Objectifs Spécifiques',
        content: (
            <>
                <h2 className="slide-title">Objectifs Spécifiques</h2>
                <p>Les objectifs spécifiques de cette formation sont :</p>
                <ul>
                    <li>Comprendre le régime fiscal applicable aux entreprises minières en Guinée, tel que prévu par le Code minier et le Code général des impôts;</li>
                    <li>Identifier et gérer les obligations fiscales liées aux redevances minières, à la TVA, à l’impôt sur les sociétés et aux retenues à la source;</li>
                    <li>Savoir constituer et présenter un dossier de remboursement de crédit de TVA dans le secteur minier;</li>
                    <li>Maîtriser les avantages fiscaux et régimes dérogatoires offerts par le Code minier;</li>
                    <li>Renforcer la préparation face aux contrôles fiscaux et maîtriser les voies de recours disponibles en cas de contentieux.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 4 : Objectifs Opérationnels',
        content: (
            <>
                <h2 className="slide-title">OBJECTIFS OPERATIONNELS</h2>
                <p>Les objectifs opérationnels sont les suivants :</p>
                <ul>
                    <li>Évaluer et calculer correctement les impôts, taxes et redevances spécifiques aux activités minières (redevance de production, redevance superficiaire, etc.);</li>
                    <li>Effectuer les déclarations fiscales dans les délais prescrits par la législation guinéenne;</li>
                    <li>Monter un dossier complet de remboursement de crédit TVA et en assurer le suivi;</li>
                    <li>Préparer et sécuriser la liasse fiscale annuelle de l’entreprise minière;</li>
                    <li>Répondre efficacement aux demandes et notifications de l’Administration fiscale, et prendre les actions nécessaires lors des vérifications fiscales, en collaboration avec le conseil fiscal de la société.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 5 : Compétences Visées',
        content: (
            <>
                <h2 className="slide-title">COMPETENCES VISEES</h2>
                <p>À l’issue de cette formation, les participants :</p>
                <ul>
                    <li>Connaîtront le régime fiscal applicable aux entreprises minières opérant en Guinée;</li>
                    <li>Seront capables de calculer et de déclarer correctement les impôts, taxes et redevances minières;</li>
                    <li>Sauront constituer et défendre un dossier de remboursement de crédit de TVA;</li>
                    <li>Seront en mesure de préparer la liasse fiscale et de procéder à des revues fiscales des comptes;</li>
                    <li>Auront acquis les réflexes nécessaires pour interagir efficacement avec l’Administration fiscale lors des procédures de contrôle, afin d’éviter toute erreur préjudiciable à l’entreprise.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 6 : Contenu de la formation (Parties 1 & 2)',
        content: (
            <>
                <h2 className="slide-title">SYCAMORE – Fiscalité minière – Contenu de la formation.</h2>
                
                <h3>1ère Partie : Introduction à la Fiscalité Guinéenne et le régime spécifique du Secteur Minier</h3>
                <ul>
                    <li>Principes et concepts fondamentaux de la fiscalité guinéenne</li>
                    <li>Aperçu sur le système fiscal guinéen</li>
                    <li>Régime fiscal applicable aux sociétés minières (Code minier, CGI)</li>
                    <li>Typologie des impôts : impôts généraux vs impôts spécifiques au secteur minier</li>
                </ul>
                
                <h3>2ème Partie : Obligations fiscales de Sycamore Mine Guinée SAU</h3>
                
                <h4>Chap. 1 : Fiscalité du personnel</h4>
                <ul>
                    <li><p><strong>Retenue sur Traitements et Salaires (RTS)</strong> : personnes imposables, base, taux, échéances, sanctions</p></li>
                    <li><p><strong>Versement Forfaitaire (VF)</strong> : règles d’application et calculs</p></li>
                    <li><p>Taxe d’Apprentissage / Contribution à la Formation Professionnelle : assiette, taux et échéances</p></li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 7 : Contenu de la formation (Parties 2, 3 & 4)',
        content: (
            <>
                <h2 className="slide-title">Contenu de la formation (Suite)</h2>
                
                <h4>Chap. 2 : Fiscalité des transactions avec les tiers</h4>
                <ul>
                    <li><p><strong>Retenues sur les revenus non salariaux (RNS)</strong> (honoraires, redevances, prestations techniques) – impact des conventions fiscales de non-double imposition</p></li>
                    <li><p><strong>Prélèvement forfaitaire (PF)</strong> sur les achats locaux : assiette, taux, échéances, sanctions</p></li>
                </ul>
                
                <h4>Chap. 3 : Imposition du chiffre d’affaires</h4>
                <ul>
                    <li><p><strong>TVA</strong> : champ d’application, taux, modalités de déclaration et de paiement</p></li>
                    <li><p>Déduction et remboursement du crédit de TVA minier : conditions d’éligibilité, dossier à constituer, délais et risques de rejet</p></li>
                </ul>

                <h4>Chap. 4 : Imposition du revenu</h4>
                <ul>
                    <li><p><strong>Impôt sur les sociétés (IS)</strong> : détermination du résultat fiscal, retraitements extra-comptables, taux et modalités déclaratives</p></li>
                    <li><p><strong>Impôt Minimum Forfaitaire (IMF)</strong> : base, taux, obligations</p></li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 8 : Contenu de la formation (Parties 5 & 6)',
        content: (
            <>
                <h2 className="slide-title">Contenu de la formation (Suite)</h2>
                
                <h4>Chap. 5 : Imposition des revenus de capitaux mobiliers</h4>
                <ul>
                    <li><p>Dividendes et distributions : régime fiscal applicable</p></li>
                    <li><p>Plus-values de cessions d’actions minières</p></li>
                    <li><p>Intérêts sur prêts et comptes courants d’actionnaires</p></li>
                </ul>
                
                <h4>Chap. 6 : Impôts et taxes locaux</h4>
                <ul>
                    <li><p>Contribution Foncière Unique (CFU)</p></li>
                    <li><p>Patente proportionnelle</p></li>
                    <li><p>Droits d’enregistrement applicables aux actes (contrats, conventions minières, etc.)</p></li>
                </ul>

                <h3>3ème Partie : Fiscalité spécifique au secteur minier</h3>
                <ul>
                    <li><p>Redevances minières (production, exportation, redevance superficiaire annuelle)</p></li>
                    <li><p>Droits fixes et annuels relatifs aux titres miniers (permis d’exploration, concession d’exploitation)</p></li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 9 : Contenu de la formation (Parties 3, 4 & 5)',
        content: (
            <>
                <h2 className="slide-title">Contenu de la formation (Suite)</h2>
                
                <h3>3ème Partie : Fiscalité spécifique au secteur minier (Suite)</h3>
                <ul>
                    <li><p>Contributions au développement local</p></li>
                    <li><p>Régimes de stabilité fiscale et incitations prévues par le Code minier</p></li>
                </ul>

                <h3>4ème Partie : Procédures fiscales et contrôle</h3>
                <ul>
                    <li><p>Droits de contrôle et de vérification de l’Administration fiscale</p></li>
                    <li><p>Types de contrôles (sur pièces, sur place) et modalités pratiques</p></li>
                    <li><p>Droits, obligations et recours du contribuable</p></li>
                    <li><p>Tableau pratique des interactions entre l’Administration et l’entreprise dans le cadre des vérifications fiscales</p></li>
                </ul>
                
                <h3>5ème Partie : Exercices pratiques et études de cas</h3>
                <ul>
                    <li><p>Simulation de calcul d’une redevance minière sur la production aurifère</p></li>
                    <li><p>Exemple de montage d’un dossier de remboursement de crédit de TVA</p></li>
                    <li><p>Simulation d’une déclaration d’IS et d’IMF pour une société minière</p></li>
                    <li><p>Cas pratique : notification de redressement fiscal et rédaction d’une réponse argumentée</p></li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 10 : Définition de la Fiscalité',
        content: (
            <>
                <h2 className="slide-title">DÉFINITION DE LA FISCALITE</h2>
                <p>Étymologiquement le mot « fisc » vient du latin, « fiscus » qui désigne un panier ou osier destiné à recueillir l’argent.</p>
                <ul>
                    <li>La fiscalité désigne l'ensemble des règles et des lois qui concernent les impôts.</li>
                    <li>C'est un système mis en place par l’État pour collecter des sommes d'argent auprès des citoyens et des entreprises.</li>
                    <li>Elle est une matière juridique, car reposant sur le droit fiscal, qui tire sa source du droit public, administratif et constitutionnel.</li>
                </ul>
                <h3>Droit fiscal</h3>
                <p>Il est l’ensemble des règles applicables dans les rapports entre l’État et les redevables de l’impôt. Il constitue une manifestation de prérogatives de la puissance publique de l’État.</p>
            </>
        )
    },
    {
        title: 'Diapositive 11 : Principes de la Fiscalité',
        content: (
            <>
                <h2 className="slide-title">PRINCIPES DE LA FISCALITE</h2>
                
                <h3>LA LEGALITE DE L’IMPÔT</h3>
                <p>Consiste au fait que l’institution d’un impôt, ainsi que les règles relatives à l'assiette, au taux et aux modalités de recouvrement des impôts doivent être fixées par des lois votées par le Parlement.</p>
                
                <h3>LA NECESSITE DE L’IMPÔT</h3>
                <p>Signifie que l’impôt doit être justifié par le besoin de financer les services publics. La légitimité de la fiscalité dépend donc de son utilisation pour satisfaire les besoins collectifs de la société.</p>
                
                <h3>L’ANNUALITE DE L’IMPÔT</h3>
                <p>Illustre la dimension temporelle de la fiscalité et se traduit par la prévision annuelle des recettes fiscales et le contrôle annuel de l’assemblée sur les levées fiscales.</p>
                
                <h3>EGALITE</h3>
                <p>Requiert que la contribution fiscale soit équitablement répartie selon les revenus des citoyens, afin d'éviter des charges disproportionnées (Art. 13 de la Déclaration des droits de l'homme et du citoyen).</p>
            </>
        )
    },
    {
        title: 'Diapositive 12 : Définition de l’Impôt',
        content: (
            <>
                <h2 className="slide-title">DEFINITION DE L’IMPÔT</h2>
                
                <h3>Selon Gaston ZESE</h3>
                <p>« L'impôt est une prestation pécuniaire requise des particuliers par voie d'autorité à titre définitif et sans contrepartie, en vue de la couverture des charges publiques ».</p>
                
                <h3>Définition générale</h3>
                <p>L’impôt est une prestation pécuniaire mise à la charge des personnes physiques et morales en fonction de leurs capacités contributives et sans contrepartie déterminée, en vue de la couverture des dépenses publiques et de la réalisation d’objectifs économiques et sociaux. L’impôt constitue un des principaux moyens de financement des dépenses publiques.</p>
            </>
        )
    },
    {
        title: 'Diapositive 13 : Caractéristiques de l’Impôt',
        content: (
            <>
                <h2 className="slide-title">CARACTERISTIQUE DE L’IMPÔT</h2>
                
                <h3>1. PÉCUNIAIRE</h3>
                <p>L'impôt est un prélèvement sous forme pécuniaire (en argent), ce qui exclut les règlements en nature ayant existé par le passé.</p>
                
                <h3>2. PERÇU A TITRE DEFINITIF ET SANS CONTREPARTIE</h3>
                <p>Il s’agit d’une ressource définitive qui alimente les budgets de l'État. Il ne constitue pas le prix d’un service rendu, n’est pas restitué et ne donne pas lieu à paiement d’intérêt.</p>
                
                <h3>3. OBLIGATOIRE</h3>
                <p>Institué par disposition légale, il est prélevé par voie d’autorité par l’administration. Tout contribuable est tenu obligé de déclarer et de payer l’impôt à temps et en toute sincérité.</p>
            </>
        )
    },
    {
        title: 'Diapositive 14 : Distinction Impôt, Taxe, Redevance',
        content: (
            <>
                <h2 className="slide-title">DISTINCTION DE L’IMPÔT, DES AUTRES PRELEVEMENTS</h2>
                
                <h3>I. IMPÔT</h3>
                <p>Sert à financer les dépenses budgétaires de l’État sans contrepartie directe pour le contribuable. La contribution est obligatoire et vise le financement global des charges publiques.</p>
                
                <h3>II. TAXE</h3>
                <p>Donne lieu à une contrepartie (utilisation d’un ouvrage ou d’un service public) mais la contrepartie n’est pas toujours effective. Le contribuable peut être tenu de la payer sans bénéficier directement du service.</p>
                
                <h3>III. REDEVANCE</h3>
                <p>Perçue en contrepartie de l’utilisation réelle d’un ouvrage ou d’un service public. Il existe une équivalence financière entre le service rendu et la somme acquittée. Le contribuable ne paie que s’il a réellement utilisé le service.</p>
            </>
        )
    },
    {
        title: 'Diapositive 15 : Le Système Déclaratif',
        content: (
            <>
                <h2 className="slide-title">SYSTÈME DÉCLARATIF: Qu’est - ce que c’est?</h2>
                <p>C'est un mécanisme fiscal où il est laissé au contribuable le soin de déclarer lui-même le montant de ses revenus, bénéfices ou la valeur des biens, en vue du calcul de son impôt.</p>
                <p>L'administration fiscale ne détermine pas directement ce que le contribuable doit payer ; c'est le contribuable qui, par l'intermédiaire d'une déclaration fiscale, présente la base de calcul de chaque obligation fiscale.</p>
                
                <h3>Caractéristiques du Principe Déclaratif</h3>
                <ul>
                    <li><strong>Auto-déclaration</strong> : Le contribuable déclare librement les revenus ou transactions servant de base à la détermination et au paiement des impôts, via un formulaire mensuel ou annuel.</li>
                    <li><strong>Obligations</strong> : Le contribuable a l’obligation d’effectuer une déclaration correcte et complète, ainsi que l’obligation de paiement des impôts calculés sur cette base.</li>
                    <li><strong>Contrôle de l'administration</strong> : Après la déclaration, l'administration fiscale dispose d’un droit de contrôle pour s'assurer de la véracité et de l’exhaustivité des éléments déclarés. En cas de doute, l'administration peut demander des éclaircissements et justifications.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 16 : Fiscalité Directe et Indirecte',
        content: (
            <>
                <h2 className="slide-title">FISCALITE DIRECTE et FISCALITE INDIRECTE</h2>
                
                <h3>FISCALITE DIRECTE</h3>
                <p>Le redevable est le contribuable. La personne physique ou morale qui supporte l’impôt est celle qui en effectue le versement à l’administration fiscale. Elle touche les revenus et le patrimoine d’un contribuable.</p>
                <ul>
                    <li><strong>Exemples</strong> : Impôt sur les sociétés (IS), Impôt Minimum Forfaitaire (IMF), Contribution Foncière Unique (CFU), Patente.</li>
                </ul>

                <h3>FISCALITE INDIRECTE</h3>
                <p>Il y a un redevable et un contribuable. L'impôt est supporté par le contribuable, mais versé par une personne différente (le redevable). Ces impôts sont répercutés sur le prix de vente et sont perçus sur les transactions.</p>
                <ul>
                    <li><strong>Exemples</strong> : Taxe sur la Valeur Ajoutée (TVA), Taxe sur les Assurances, Taxe sur les Activités Financières.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 17 : Régime Fiscal Minier (Encadrement)',
        content: (
            <>
                <h2 className="slide-title">RÉGIME FISCAL APPLICABLE AUX SOCIÉTÉS MINIÈRES</h2>
                
                <p>Précision importante : Dans le secteur minier, tous ces principes trouvent une application particulière, car la fiscalité minière contribue de manière significative aux recettes de l’État guinéen.</p>
                
                <h3>Double encadrement légal</h3>
                <ul>
                    <li><strong>Code minier</strong> : Définit les obligations fiscales spécifiques aux titulaires de titres miniers (exploration, construction, exploitation, transformation).</li>
                    <li><strong>Code général des impôts (CGI)</strong> : Fixe les règles fiscales de droit commun applicables à toutes les entreprises opérant en Guinée.</li>
                </ul>
                
                <h3>Principes du régime fiscal minier</h3>
                <ul>
                    <li>Application simultanée du CGI et des dispositions particulières du Code minier.</li>
                    <li>Les conventions minières peuvent prévoir des clauses de stabilité fiscale ainsi que des avantages douaniers et fiscaux spécifiques.</li>
                    <li>Les sociétés minières sont soumises à un régime déclaratif renforcé (comptabilité distincte, audits spécifiques).</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 18 : Impôts Spécifiques au Secteur Minier',
        content: (
            <>
                <h2 className="slide-title">Impôts et taxes spécifiques au secteur minier</h2>
                <ul>
                    <li><strong>Redevance minière sur la production</strong> : Calculée sur la valeur brute extraite (ex. : minerai or : 5–6 %).</li>
                    <li><strong>Redevance superficiaire annuelle</strong> : Montant forfaitaire par km² de permis minier.</li>
                    <li><strong>Redevance d’exportation</strong> (selon produits et régime applicable).</li>
                    <li><strong>Contributions au développement local</strong> : Participation obligatoire des sociétés minières (FNDL, FODEL, soutien pour les infrastructures communautaires).</li>
                    <li><strong>Droits fixes sur titres miniers</strong> : Paiement lors de l’octroi et du renouvellement des permis.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 19 : Typologie des Impôts (Résumé)',
        content: (
            <>
                <h2 className="slide-title">Typologie des impôts : impôts généraux vs impôts spécifiques au secteur minier</h2>
                <p style={{marginTop: '20px', fontSize: '0.9em', color: 'var(--saddle)'}}>Tableau récapitulatif des catégories d'impôts et des régimes applicables :</p>
                
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', fontSize: '0.9em' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'var(--saddle)', color: 'white' }}>
                            <th style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Catégories</th>
                            <th style={{ backgroundColor: 'var(--sun)', color: 'var(--saddle)', padding: '10px', border: '1px solid #bcbdc0' }}>Impôts généraux (CGI)</th>
                            <th style={{ backgroundColor: 'var(--fuel-yellow)', color: 'var(--saddle)', padding: '10px', border: '1px solid #bcbdc0' }}>Impôts spécifiques au secteur minier (Code minier)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid #bcbdc0' }}>Impôts directs</td>
                            <td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>
                                Impôt sur les Sociétés (IS) <br/> 
                                Impôt Minimum Forfaitaire (IMF) <br/> 
                                Retenue à la Source sur salaires (RTS) <br/> 
                                Retenue sur les revenus non salariaux (RNS)
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>
                                Redevance minière sur la production et l’exportation (Art. 161 à 163 CM) <br/> 
                                Contribution au développement local (Art. 165 CM) <br/> 
                                Redevance sur la superficie - annuelle (Art. 171 CM)
                            </td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid #bcbdc0' }}>Impôts indirects</td>
                            <td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>
                                Taxe sur la Valeur Ajoutée (TVA) <br/> 
                                Droits d’enregistrement <br/> 
                                Droits de douane et accises
                            </td>
                            <td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>
                                Exonérations douanières sur les équipements et intrants miniers (Art. 169 CM) <br/> 
                                Exonération de TVA sur les phases de recherche et d’investissement
                            </td>
                        </tr>
                        <tr>
                            <td style={{ fontWeight: 'bold', padding: '10px', border: '1px solid #bcbdc0' }}>Particularités</td>
                            <td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Régime de droit commun (Application du CGI)</td>
                            <td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Régime dérogatoire, Stabilité fiscale, Amortissement accéléré</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
];

export default function Day1Page() {
  return <Day1Client slides={slides} />;
};