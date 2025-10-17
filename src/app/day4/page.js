import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';

// Contenu structuré en un tableau de diapositives pour le Jour 4
const SLIDES = [
    {
        title: 'Diapositive 1 : Introduction du Jour 4',
        content: (
            <>
                <h2 className="slide-title">Jour 4 : IS, IMF et traitement fiscal des charges minières.</h2>
                <p>Cette session est dédiée à la maîtrise des impôts sur le résultat et des spécificités du régime minier guinéen, essentielles pour la déclaration fiscale annuelle de Sycamore Mine Guinée SAU.</p>
                <h3>Objectifs clés de la journée :</h3>
                <ul>
                    <li>Comprendre l’assiette, le taux et les modalités de déclaration de l’Impôt sur les Sociétés (IS).</li>
                    <li>Maîtriser les critères de déductibilité des charges (y compris les charges minières spécifiques).</li>
                    <li>Analyser les avantages fiscaux offerts par le Code Minier (amortissement accéléré, report déficitaire, stabilité).</li>
                    <li>Assurer la bonne intégration de l'Impôt Minimum Forfaitaire (IMF) dans le calcul de l'IS.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 2 : Impôt sur les Sociétés (IS) - Définition',
        content: (
            <>
                <h2 className="slide-title">IMPÔT SUR LES SOCIETÉS (IS) : Cadre général</h2>
                
                <h3>Définition</h3>
                <p>L’IS est un impôt qui frappe les revenus ou bénéfices réalisés par les personnes morales assujetties ayant leur résidence fiscale en Guinée, ou par les entreprises ayant un Établissement Stable (ES) en Guinée (CGI, art. 15 BIS et TER).</p>
                
                <h3>Redevable</h3>
                <p>La personne morale assujettie est redevable de l’Impôt en cas de réalisation d’un bénéfice sur l’année d’imposition (l’exercice fiscal).</p>
                
                <h3>Personnes morales passibles de l'IS</h3>
                <ul>
                    <li><strong>En raison de leur forme:</strong> Sociétés Anonymes (S.A), S.A.R.L, S.A.S, sociétés d’investissement, coopératives.</li>
                    <li><strong>Par option:</strong> Sociétés en Nom Collectif, Sociétés en Commandite Simple, Groupements d’Intérêts Économiques, associations en participation.</li>
                    <li><strong>En raison de leurs activités:</strong> sociétés civiles se livrant à une exploitation commerciale, industrielle ou artisanale.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 3 : IS - Détermination du Résultat Fiscal',
        content: (
            <>
                <h2 className="slide-title">IMPÔT SUR LES SOCIETÉS (IS) : Base Imposable</h2>
                
                <h3>Principe général</h3>
                <p>La base imposable de l'IS est le <strong>Résultat Fiscal</strong>, qui est déterminé à partir du Résultat Comptable, après application des retraitements extra-comptables (réintégrations et déductions).</p>
                
                <div style={{ padding: '15px', border: '2px solid #004d40', borderRadius: '8px', backgroundColor: '#e8f5e9' }}>
                    <p style={{ fontWeight: 'bold' }}>FORMULE DE BASE :</p>
                    <p>Résultat Fiscal = Résultat Comptable + Réintégrations fiscales - Déductions fiscales</p>
                </div>
                
                <h3>Réintégrations / Déductions</h3>
                <ul>
                    <li><strong>Réintégrations :</strong> Charges non déductibles ou déductibles partiellement (ex. : amortissements excédentaires, provisions non justifiées, impôts non déductibles).</li>
                    <li><strong>Déductions :</strong> Produits non imposables (ex. : produits exonérés, report déficitaire).</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 4 : IS - Taux et Échéance',
        content: (
            <>
                <h2 className="slide-title">IMPÔT SUR LES SOCIETÉS (IS) : Taux et Modalités</h2>
                
                <h3>Taux d’Imposition</h3>
                <ul>
                    <li><strong>Taux standard :</strong> <strong style={{color: '#E94F64'}}>35 %</strong> du bénéfice imposable.</li>
                    <li><strong>Taux réduits (exceptions) :</strong> S'appliquent à des types de revenus spécifiques ou à certaines entités.</li>
                </ul>

                <h3>Déclaration et Paiement</h3>
                <ul>
                    <li><strong>Acomptes Provisionnels :</strong> L'IS est payé par trois acomptes provisionnels versés les 15 mars, 15 juillet et 15 novembre.</li>
                    <li><strong>Déclaration annuelle :</strong> La déclaration définitive du résultat fiscal doit être effectuée au plus tard le 15 avril de l'année suivant l'exercice clos.</li>
                    <li><strong>Liquidation :</strong> Le solde de l'IS dû (après déduction des acomptes et de l'IMF) est réglé lors de la déclaration du 15 avril.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 5 : Impôt Minimum Forfaitaire (IMF)',
        content: (
            <>
                <h2 className="slide-title">IMPÔT MINIMUM FORFAITAIRE (IMF) et son lien avec l'IS</h2>
                <p>L'IMF est un prélèvement annuel dû même en l'absence de bénéfice, assurant une contribution minimale à l'État.</p>

                <h3>Base de calcul</h3>
                <ul>
                    <li>L'assiette est généralement le <strong>Chiffre d’Affaires</strong> hors taxes de l'exercice précédent.</li>
                    <li>Le taux est de <strong style={{color: '#E94F64'}}>0,5 %</strong> du Chiffre d’Affaires HT.</li>
                </ul>

                <h3>Lien avec l'IS (Mécanisme d’imputation)</h3>
                <p>L'IMF est un <strong>acompte</strong> sur l’IS. Il est intégralement imputable sur l’Impôt sur les Sociétés (IS) dû au titre du même exercice.</p>
                
                <div style={{ padding: '15px', border: '2px solid #E94F64', borderRadius: '8px', backgroundColor: '#ffebe9' }}>
                    <p style={{ fontWeight: 'bold' }}>Règle cruciale :</p>
                    <p>La fraction de l’IMF non imputée sur l’IS (si IS < IMF) <strong>n’est pas reportable</strong> sur les exercices suivants et reste acquise à l'État.</p>
                </div>
                
                <p>Le Code minier prévoit des exonérations temporaires d'IMF durant les phases d'exploration/recherche.</p>
            </>
        )
    },
    {
        title: 'Diapositive 6 : Déductibilité des Charges (Principes)',
        content: (
            <>
                <h2 className="slide-title">TRAITEMENT FISCAL DES CHARGES MINIÈRES : Principes de déductibilité</h2>
                
                <p>Pour être déductible du Résultat Fiscal d'une société minière, une charge doit respecter quatre principes fondamentaux (droit commun et CGI) :</p>
                
                <ul>
                    <li><strong style={{color: '#004d40'}}>1. Effectivité :</strong> La dépense doit avoir été réellement engagée et se traduire par une sortie de trésorerie ou une obligation de paiement.</li>
                    <li><strong style={{color: '#004d40'}}>2. Rattachement à la gestion :</strong> La dépense doit être exposée dans l’intérêt direct de l’exploitation ou se rattacher à une gestion normale.</li>
                    <li><strong style={{color: '#004d40'}}>3. Justification :</strong> La dépense doit être appuyée par des pièces justificatives valables (factures, reçus, contrats).</li>
                    <li><strong style={{color: '#004d40'}}>4. Enregistrement :</strong> La charge doit être comprise dans les charges de l'exercice au cours duquel elle a été engagée.</li>
                </ul>
                
                <p>Les dépenses qui ne respectent pas ces critères (ex. : amendes, pénalités d'IS, libéralités sans lien direct avec l’activité) doivent être réintégrées au résultat fiscal.</p>
            </>
        )
    },
    {
        title: 'Diapositive 7 : Amortissements Miniers et Report Déficitaire',
        content: (
            <>
                <h2 className="slide-title">SPÉCIFICITÉS FISCALES MINIÈRES : Amortissements et Déficits</h2>
                
                <h3>Amortissement Accéléré (Art. 171 Code Minier)</h3>
                <p>Le Code Minier permet aux titulaires d'une concession minière (en phase de construction/exploitation) d’appliquer un <strong>amortissement accéléré</strong> sur les équipements et infrastructures minières. </p>
                <ul>
                    <li><strong>Mécanisme :</strong> Permet de déduire fiscalement une plus grande partie de l'investissement initial dans les premières années d'exploitation.</li>
                    <li><strong>Objectif :</strong> Soutenir l'investissement à forte intensité capitalistique et optimiser la trésorerie au démarrage.</li>
                </ul>

                <h3>Report Déficitaire</h3>
                <p>En cas de résultat fiscal déficitaire (fréquent en début de production ou en phase de développement), le Code Minier prévoit des modalités spécifiques :</p>
                <ul>
                    <li>Le déficit peut être reporté sur les bénéfices futurs <strong>sans limitation de durée</strong> jusqu'à absorption totale.</li>
                    <li>Le droit commun (CGI) applique souvent une limitation (durée et montant), mais le régime minier est plus avantageux pour Sycamore.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 8 : Redevance Minière et FODEL',
        content: (
            <>
                <h2 className="slide-title">SPÉCIFICITÉS FISCALES MINIÈRES : Redevances et Contribution</h2>
                
                <h3>Redevance Minière sur la Production (RMP)</h3>
                <ul>
                    <li><strong>Principe :</strong> Impôt spécifique sur la valeur brute de la substance minérale extraite.</li>
                    <li><strong>Taux :</strong> Varie selon la substance (par exemple, 5% pour l'or).</li>
                    <li><strong>Déductibilité :</strong> La RMP est considérée comme une charge d'exploitation et est donc <strong>déductible</strong> du résultat fiscal soumis à l'IS.</li>
                </ul>

                <h3>Contribution au Développement Local (FODEL)</h3>
                <p>Les sociétés minières sont tenues de contribuer au développement économique et social des collectivités locales impactées (Art. 130 CM).</p>
                <ul>
                    <li><strong>FODEL (Fonds de Développement Local) :</strong> Alimenté par un pourcentage du Chiffre d’Affaires minier (ex. : 0,5% à 1%).</li>
                    <li><strong>Déductibilité :</strong> Cette contribution est également une charge obligatoire et est <strong>déductible</strong> du résultat fiscal.</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 9 : Régime de Stabilité Fiscale et Incitations',
        content: (
            <>
                <h2 className="slide-title">SÉCURISATION FISCALE : Stabilité et Incitations</h2>
                
                <p>Ces mécanismes visent à sécuriser l'investissement minier à long terme et à encourager les projets à forte intensité capitalistique.</p>

                <h3>Stabilité Fiscale (Art. 172 et s. Code Minier)</h3>
                <ul>
                    <li><strong>Garantie :</strong> Le régime fiscal et douanier applicable au projet est garanti pour une période déterminée (souvent 15 ans après le démarrage de la production).</li>
                    <li><strong>Protection :</strong> Protège Sycamore contre les hausses soudaines d'impôts généraux qui pourraient survenir après la signature de la convention minière.</li>
                </ul>

                <h3>Autres Incitations</h3>
                <ul>
                    <li><strong>Exonérations temporaires :</strong> Exonérations de droits de douane et de TVA sur les équipements et intrants essentiels importés pour la phase de construction et parfois d'exploitation.</li>
                    <li><strong>Amortissements :</strong> Possibilité d'amortissement accéléré (vu précédemment).</li>
                </ul>
                <p style={{marginTop: '15px', fontWeight: 'bold'}}>Ces clauses sont cruciales pour la prévisibilité financière et la rentabilité du projet minier.</p>
            </>
        )
    },
    {
        title: 'Diapositive 10 : Synthèse et Exercices',
        content: (
            <>
                <h2 className="slide-title">SYNTHÈSE DU JOUR 4 ET PROCHAINES ÉTAPES</h2>
                
                <h3>Points à retenir</h3>
                <ol>
                    <li>L'IS est calculé sur le Résultat Fiscal (Comptable + Retraitements).</li>
                    <li>L'IMF est un acompte sur l'IS (0,5% du CA) non reportable s'il n'est pas imputé.</li>
                    <li>Toutes les charges doivent être effectives, justifiées et engagées dans l'intérêt de l'exploitation.</li>
                    <li>Les charges spécifiques au secteur (Redevance, FODEL) sont fiscalement déductibles.</li>
                    <li>Le Code Minier offre des avantages (Amortissement accéléré, Report déficitaire illimité) qui priment sur le droit commun.</li>
                </ol>
                
                <h3>Prochaine session (Jour 5)</h3>
                <p>La dernière journée sera consacrée à la <strong>Gestion du Risque Fiscal</strong> :</p>
                <ul>
                    <li>Montage d'un dossier de remboursement de <strong>crédit de TVA</strong>.</li>
                    <li>Maîtrise du <strong>Contrôle Fiscal</strong> et des voies de recours.</li>
                </ul>
            </>
        )
    }
];

export default function Day4Page() {
  return (
    <ContentWrapper 
        title="Jour 4 : Support de formation – Impôt sur les Sociétés (IS), IMF et Fiscalité Minière Spécifique" 
        date="Jeudi 23 octobre 2025"
    >
        {/* Le composant SlideShow utilise le tableau de slides */}
        <SlideShow slides={SLIDES} />
    </ContentWrapper>
  );
}
