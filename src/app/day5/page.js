// Fichier : src/app/day5/page.js

import ContentWrapper from '../ContentWrapper';
import SlideShow from '../SlideShow';
import React from 'react';

// Le contenu est structuré en un tableau de diapositives (SLIDES)
const SLIDES = [
    {
        title: 'Diapositive 1 : Introduction du Jour 5',
        content: (
            <>
                <h2 className="slide-title">Montage et suivi d'un dossier de remboursement de crédit de TVA (secteur minier)</h2>
                <p>25 octobre 2025</p>
            </>
        )
    },
    {
        title: 'Diapositive 2 : REMBOURSEMENT DE CRÉDIT DE TVA - Textes & Éligibilité',
        content: (
            <>
                <h2 className="slide-title">REMBOURSEMENT DE CRÉDIT DE TVA</h2>
                
                <h3>A- Textes applicables</h3>
                <ul>
                    [cite_start]<li>Code général des impôts guinéen prévoit les dispositions relatives au remboursement du crédit de TVA (section « Remboursement de crédit de TVA »): articles 387, 388, 388 Ter, etc. [cite: 1]</li>
                    [cite_start]<li>Instruction ministérielle conjointe n°1976 du 31 janvier 2014, modifiée et complétée par une instruction de mars 2019. Cette instruction encadre le mécanisme spécifique pour les sociétés minières et autres institutions.. [cite: 1]</li>
                </ul>
                
                <h3>B- Assujettis éligibles</h3>
                <ul>
                    [cite_start]<li><strong>Principe:</strong> le crédit de TVA (excédent de TVA déductible sur TVA collectée) est imputable sur les périodes suivantes mais non remboursable. [cite: 2]</li>
                    [cite_start]<li><strong>Exception:</strong> peuvent déposer une demande de remboursement les assujettis dans certaines hypothèses: [cite: 3]
                        <ul>
                            [cite_start]<li>Les opérations imposables au taux zéro (généralement les exportations). [cite: 3]</li>
                            [cite_start]<li>Les achats de biens immobilisés éligibles à déduction, indépendamment de leur date d'acquisition. [cite: 4]</li>
                            [cite_start]<li>Les assujettis titulaires d'un titre minier ou opérant dans le secteur minier ou pétrolier (recherche ou exploitation) (i.e. les sociétés minières): ce sont les principaux bénéficiaires dans le contexte guinéen. [cite: 5]</li>
                        </ul>
                    </li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 3 : Conditions de Remboursement',
        content: (
            <>
                <h2 className="slide-title">REMBOURSEMENT DE CRÉDIT DE TVA (Suite)</h2>
                
                <h3>C- Conditions de remboursement :</h3>
                <ul>
                    [cite_start]<li><strong>Crédit de TVA pendant 3 mois consécutifs :</strong> La demande ne peut être faite que si l'entreprise présente un crédit de TVA (TVA déductible &gt; TVA collectée) pendant au moins trois mois d'affilée. [cite: 7]</li>
                    [cite_start]<li><strong>Montant minimal de la demande :</strong> Le montant du crédit réclamé doit être au moins 100 000 000 GNF (cent millions). [cite: 8]</li>
                    [cite_start]<li><strong>Délai de prescription / péremption :</strong> La demande doit être faite dans un délai de <strong>12 mois</strong> à compter de la constatation du crédit de TVA [cite: 9] [cite_start]; au-delà, le crédit expire et ne peut plus être remboursé ou imputé. [cite: 10]</li>
                    [cite_start]<li><strong>Quitus fiscal et obligations fiscales à jour :</strong> L'entreprise doit être à jour dans ses obligations fiscales (impôts, taxes, contributions): aucune dette fiscale en cours qui pourrait bloquer le remboursement. [cite: 11]</li>
                    [cite_start]<li><strong>Non-imputation sur les périodes suivantes :</strong> Lorsque la demande de remboursement est déposée, le crédit concerné ne peut plus être utilisé pour imputer sur les déclarations TVA des mois suivants : il sort du circuit d'imputation. [cite: 12]</li>
                    [cite_start]<li><strong>Cautionnement (le cas échéant) :</strong> L'Administration fiscale peut exiger une caution solvable, si elle estime que la demande présente un risque pour les finances publiques (par exemple un montant trop élevé ou des présomptions de fraude). [cite: 13]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 4 : Documents Justificatifs (Partie 1)',
        content: (
            <>
                <h2 className="slide-title">REMBOURSEMENT DE CRÉDIT DE TVA (Suite)</h2>
                
                <h3>D- Documents justificatifs à fournir :</h3>
                [cite_start]<p>La demande doit être accompagnée de nombreuses pièces de support. [cite: 14]</p>
                
                [cite_start]<p>Parmi les pièces exigées : [cite: 15]</p>
                <ul>
                    [cite_start]<li>Un descriptif de l'activité de l'assujetti (secteur, implantation, projet minier) [cite: 15]</li>
                    [cite_start]<li>Un relevé des factures d'achat (biens, services, importations) sur trois colonnes: nom et NIF des fournisseurs, dates et montants des factures, montant de la TVA correspondante [cite: 15]</li>
                    [cite_start]<li>Quitus fiscal de l'assujetti à jour [cite: 15]</li>
                    [cite_start]<li>Les trois dernières déclarations de TVA (DMU) [cite: 15]</li>
                    [cite_start]<li>La déclaration de mise en consommation des biens importés (quand la déduction de TVA porte sur des biens importés) [cite: 15]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 5 : Documents Justificatifs (Partie 2) & Dépôt',
        content: (
            <>
                <h2 className="slide-title">REMBOURSEMENT DE CRÉDIT DE TVA (Suite)</h2>
                
                <h3>D- Documents justificatifs (Suite) :</h3>
                <ul>
                    [cite_start]<li>Copie des factures d'achats locaux (biens et services) et justificatifs de paiement de ces achats [cite: 15]</li>
                    [cite_start]<li>Selon le cas, des informations complémentaires comme chiffre d'affaires global, chiffre d'affaires exporté ou exonéré, justificatifs d'exportation (douanes, certificat de transport, ect.) [cite: 16]</li>
                    [cite_start]<li>Il est à noter que l'Administration fiscale peut demander des pièces ou informations additionnelles dans le cadre de l'examen du dossier. [cite: 16]</li>
                </ul>
                
                <h3>Forme du dépôt :</h3>
                [cite_start]<p>La demande doit être formulée par <strong>lettre recommandée ou remise contre décharge</strong> [cite: 17] [cite_start]; les pièces justificatives peuvent être transmises au format électronique. [cite: 18]</p>
            </>
        )
    },
    {
        title: 'Diapositive 6 : Instruction et Paiement',
        content: (
            <>
                <h2 className="slide-title">REMBOURSEMENT DE CRÉDIT DE TVA (Suite)</h2>
                
                <h3>E- Instruction de la demande :</h3>
                <ul>
                    [cite_start]<li>L'Administration fiscale (Direction nationale des impôts, DGI ou DNI) instruit la demande dans un délai de <strong>30 jours francs</strong> à compter de sa réception. [cite: 19]</li>
                    [cite_start]<li>Si l'administration demande des renseignements complémentaires, l'assujetti dispose de 15 jours francs pour répondre, ce qui prolonge le délai d'instruction à <strong>60 jours</strong> au total. [cite: 19]</li>
                    [cite_start]<li>La décision de l'administration doit être motivée (acceptation ou rejet) et notifiée par lettre recommandée ou remise contre décharge. [cite: 20]</li>
                </ul>
                
                <h3>F- Validation par le comité de gestion et transfert au Trésor :</h3>
                <ul>
                    [cite_start]<li>Le dossier validé par la DGI est transmis au Comité de gestion du remboursement des crédits de TVA pour validation finale. [cite: 21]</li>
                    [cite_start]<li>Le paiement est assuré par la Paierie Générale du Trésor (PGT), via un compte spécial « Remboursement des crédits de TVA aux entreprises minières ». [cite: 22]</li>
                    [cite_start]<li>Le délai complet (réception à mise en paiement) ne doit pas excéder <strong>45 jours</strong>. [cite: 23]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 7 : Enjeux et Risques (Partie 1)',
        content: (
            <>
                <h2 className="slide-title">REMBOURSEMENT DE CRÉDIT DE TVA (Suite)</h2>
                
                <h3>G- Pratiques observées, enjeux et risques :</h3>
                
                <h4>1) Retards et arriérés</h4>
                <ul>
                    [cite_start]<li>De nombreuses demandes de remboursement restent en souffrance, avec des arriérés importants (ex: 240 milliards GNF en 2021). [cite: 25]</li>
                    [cite_start]<li>Le montant budgétaire alloué annuellement par l'Etat est souvent insuffisant par rapport aux demandes réelles des sociétés minières. [cite: 26]</li>
                    [cite_start]<li>L'IGF a relevé qu'une importante part des demandes est rejetée pour non-conformité aux conditions légales ou aux documents justificatifs. [cite: 27]</li>
                </ul>
                
                <h4>2) Difficultés pratiques en raison de la retenue à la source (précompte de TVA)</h4>
                <ul>
                    [cite_start]<li>La pratique de retenue à la source de la TVA sur les factures entre les fournisseurs et les sociétés minières complique la récupération du crédit. [cite: 28]</li>
                    [cite_start]<li>L'administration exige que les fournisseurs aient déclaré la TVA collectée; il y a des risques si ces fournisseurs sont en infraction ou non immatriculés. [cite: 28]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 8 : Enjeux et Risques (Partie 2) & Recommandations (Partie 1)',
        content: (
            <>
                <h2 className="slide-title">REMBOURSEMENT DE CRÉDIT DE TVA (Suite)</h2>
                
                <h3>G- Pratiques observées, enjeux et risques (Suite) :</h3>
                
                <h4>3) Risque de rejet pour non-conformité</h4>
                <ul>
                    [cite_start]<li>Les dossiers peuvent être rejetés pour erreurs de présentation, omissions des pièces justificatives, incohérences ou non-respect des délais. [cite: 29]</li>
                    [cite_start]<li>Des prescriptions ou critères restrictifs (ex. montant minimal, délai de 12 mois, exigence de caution) peuvent être utilisés par l'administration pour écarter les demandes. [cite: 30]</li>
                </ul>
                
                <h4>4) Risques budgétaires de l'État</h4>
                <ul>
                    [cite_start]<li>Le mécanisme impose une charge budgétaire à l'État, pouvant conduire à des retards ou refus partiels. [cite: 31]</li>
                    [cite_start]<li>L'absence de clé objective de priorité entre les sociétés minières peut créer des inégalités. [cite: 32]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 9 : Recommandations pour SYCAMORE (Partie 1)',
        content: (
            <>
                <h2 className="slide-title">REMBOURSEMENT DE CRÉDIT DE TVA (Suite)</h2>
                
                <h3>H- Nos recommandations pour SYCAMORE: bonnes pratiques</h3>
                
                <h4>1. Planification anticipée du dossier</h4>
                <ul>
                    [cite_start]<li>Engager une revue interne permanente des dépenses payant de la TVA et suivre la constitution du crédit de TVA. [cite: 34]</li>
                    [cite_start]<li>Maintenir un tableau de suivi mensuel crédible de toutes les factures, paiements et TVA grevée. [cite: 35]</li>
                </ul>
                
                <h4>2. Contrôles de cohérence préalables</h4>
                <ul>
                    [cite_start]<li>Vérifier que les factures produites sont correctement émises (nom, numéro NIF, montant, TVA légale). [cite: 36]</li>
                    [cite_start]<li>Vérifier que les fournisseurs ont bien déclaré la TVA correspondante. [cite: 37]</li>
                    [cite_start]<li>Contrôler que les montants dans la demande correspondent aux sommes déclarées dans les DMU. [cite: 37]</li>
                </ul>
                
                <h4>3. Constitution du dossier rigoureusement conforme</h4>
                <ul>
                    [cite_start]<li>Joindre toutes les pièces exigées (quitus, déclarations, factures d'importation, justificatifs d'exportation, etc.). [cite: 38]</li>
                    [cite_start]<li>Si exigé, constituer une caution solvable dès le dépôt. [cite: 38]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 10 : Recommandations pour SYCAMORE (Partie 2)',
        content: (
            <>
                <h2 className="slide-title">REMBOURSEMENT DE CRÉDIT DE TVA (Suite)</h2>
                
                <h3>H- Nos recommandations pour SYCAMORE: bonnes pratiques (Suite)</h3>
                
                <h4>4. Suivi diligent du dossier auprès de l'administration / du Trésor</h4>
                <ul>
                    [cite_start]<li>Demander un accusé de réception officiel de la demande. [cite: 39]</li>
                    [cite_start]<li>Répondre rapidement à toute demande de renseignements complémentaires (dans le délai de 15 jours). [cite: 40]</li>
                    [cite_start]<li>Suivre auprès du PGT la phase de mise en paiement, vérifier les retours éventuels de dossiers pour irrégularités. [cite: 41]</li>
                </ul>
                
                <h4>5. Anticipation des risques de retard / de rejet</h4>
                <ul>
                    [cite_start]<li>Préparer une stratégie de recours contentieux (préparer argumentaire, notices légales). [cite: 42]</li>
                    [cite_start]<li>Intégrer dans la trésorerie un budget tampon en cas d'attente prolongée. [cite: 42]</li>
                </ul>
                
                <h4>6. Capitaliser les retours d'expérience</h4>
                <ul>
                    [cite_start]<li>Analyser les éventuelles irrégularités, les motifs de rejet pour améliorer les dossiers suivants. [cite: 42]</li>
                    [cite_start]<li>Constituer un manuel interne de montage de dossier de remboursement pour standardiser les démarches futures. [cite: 42]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 11 : CAS PRATIQUE N°1 – SYCAMORE SA',
        content: (
            <>
                <h2 className="slide-title">CAS PRATIQUE N°1 – ETABLISSEMENT DE LA DECLARATION DE TVA DE LA SYCAMORE</h2>
                
                <h3>Contexte:</h3>
                [cite_start]<p>Sycamore SA exploite une mine d'or à Siguiri. L'entreprise est immatriculée à la TVA et exporte la quasi-totalité de sa production (taux 0%). [cite: 43] [cite_start]Elle supporte régulièrement un crédit de TVA sur ses achats et importations d'équipements. [cite: 44]</p>
                <p>Données - Octobre 2025:</p>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', fontSize: '0.9em' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
                            <th style={{ padding: '10px', border: '1px solid #bcbdc0', textAlign: 'left' }}>Opérations</th>
                            <th style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Montant HT (GNF)</th>
                            <th style={{ padding: '10px', border: '1px solid #bcbdc0' }}>TVA (18%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Vente d'or exporté (taux 0%)</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>40 000 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>0</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Vente locale de sous-produits (boues aurifères)</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>1 200 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>216 000 000</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Achat d'équipements miniers importés</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>12 000 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>2 160 000 000</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Achat de carburant local</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>4 000 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>720 000 000</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Honoraires de société d'ingénierie étrangère (auto-liquidation)</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>1 500 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>270 000 000</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Achat de fournitures et maintenance (locaux)</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>800 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>144 000 000</td></tr>
                    </tbody>
                </table>
                <p style={{marginTop: '15px'}}><strong>Travail à faire :</strong> Calculer la TVA collectée et la TVA déductible. Déterminer le solde de TVA (crédit ou TVA à payer). [cite_start]Indiquer les conditions de remboursement du crédit de TVA pour Sycamore SA. [cite: 54, 55, 56]</p>
            </>
        )
    },
    {
        title: 'Diapositive 12 : CAS PRATIQUE N°2 – AURITRANS LOGISTICS SARL',
        content: (
            <>
                <h2 className="slide-title">CAS PRATIQUE N°2 – Déclaration de TVA AURITRANS LOGISTICS SARL</h2>
                
                <h3>Contexte:</h3>
                [cite_start]<p>Auritrans Logistics est un sous-traitant logistique de Sycamore SA. Elle assure le transport du minerai, la location de camions et le transit des pièces importées. [cite: 58] [cite_start]Elle est immatriculée à la TVA et soumise au précompte TVA. [cite: 58]</p>
                <p>Données - Octobre 2025:</p>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px', fontSize: '0.9em' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#2c3e50', color: 'white' }}>
                            <th style={{ padding: '10px', border: '1px solid #bcbdc0', textAlign: 'left' }}>Opérations</th>
                            <th style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Montant HT (GNF)</th>
                            <th style={{ padding: '10px', border: '1px solid #bcbdc0' }}>TVA (18%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Transport de minerai pour Sycamore</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>8 000 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>1 440 000 000</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Location de camions (autres clients)</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>1 200 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>216 000 000</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Transit international (hors champ TVA)</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>2 000 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}></td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Honoraires de maintenance payés à un prestataire français (auto-liquidation)</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>500 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>90 000 000</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Achats de carburant</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>1 800 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>324 000 000</td></tr>
                        <tr><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>Achat de pièces détachées</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>600 000 000</td><td style={{ padding: '10px', border: '1px solid #bcbdc0' }}>108 000 000</td></tr>
                    </tbody>
                </table>
                <p style={{marginTop: '10px'}}><strong>Informations complémentaires :</strong> 50% de la TVA facturée (soit 720 000 000 GNF) a été retenue à la source par Sycamore et reversée à la DGI via le mécanisme de précompte. [cite_start]La TVA sur les achats est intégralement déductible. [cite: 60, 61]</p>
                <p><strong>Travail à faire :</strong> 1. Déterminer la TVA collectée nette à reverser après précompte. 2. Calculer la TVA déductible. 3. [cite_start]Déterminer la situation de TVA. [cite: 61, 62]</p>
            </>
        )
    },
    {
        title: 'Diapositive 13 : PROCÉDURES FISCALES',
        content: (
            <>
                <h2 className="slide-title">PROCÉDURES FISCALES</h2>
                
                <p style={{fontSize: '1.2em', marginTop: '20px'}}>CHAPITRE 1 – DROIT DE CONTRÔLE ET DE VÉRIFICATION DE L'ADMINISTRATION</p>
            </>
        )
    },
    {
        title: 'Diapositive 14 : MOYENS GÉNÉRAUX – Demande d’Éclaircissements et de Justifications',
        content: (
            <>
                <h2 className="slide-title">MOYENS GÉNÉRAUX DE CONTRÔLES : DEMANDE D’ECLAIRCISSEMENS ET DE JUSTIFICATIONS</h2>
                
                <h3>DÉFINITION: Qu’est ce que c’est?</h3>
                [cite_start]<p>Il s’agit du droit détenu par l’administration fiscale de demander au contribuable: [cite: 64]</p>
                <ul>
                    [cite_start]<li>des éclaircissements ou des justifications sur les éléments mentionnés dans toute déclaration d’impôts, de droits et taxes. [cite: 64]</li>
                    [cite_start]<li>des justifications et la production de documents au sujet de ses charges déductibles, de ses avoirs ou revenus d’avoir à l’étranger, et de ses bases d’imposition. [cite: 65]</li>
                </ul>
                
                <h3>Mentions Essentielles / Délais</h3>
                <ul>
                    [cite_start]<li>La demande doit indiquer explicitement les points sur lesquels elles portent et préciser le délai de réponses du contribuable. [cite: 67]</li>
                    [cite_start]<li>Le délai de réponses est de <strong>30 jours</strong>. [cite: 68]</li>
                    [cite_start]<li>En cas de réponse insuffisante, un délai de <strong>15 jours</strong> supplémentaire peut être accordé par mise en demeure. [cite: 69]</li>
                </ul>
                
                <h3>Absence de réponse ou réponse tardive</h3>
                [cite_start]<p>Le contribuable est <strong>taxé d’office</strong> lorsqu’il ne répond pas dans le délai imparti à la demande d’éclaircissements ou à la mise en demeure. [cite: 70]</p>
            </>
        )
    },
    {
        title: 'Diapositive 15 : MOYENS GÉNÉRAUX – Droit de Communication (Portée)',
        content: (
            <>
                <h2 className="slide-title">MOYENS GÉNÉRAUX DE CONTRÔLES [Suite] : DROIT DE COMMUNICATION</h2>
                
                <h3>DÉFINITION: Qu’est ce que c’est?</h3>
                [cite_start]<p>Droit conféré aux agents de l'Administration ayant au moins le grade de contrôleur, d’obtenir communication de documents et de renseignements détenus par un redevable ou par un tiers, pour l'établissement de l'assiette, le contrôle et le recouvrement des impôts, droits et taxes. [cite: 72]</p>
                
                <h3>Sur quoi porte le droit de communication?</h3>
                <ul>
                    [cite_start]<li>Il porte sur les documents comptables, les pièces justificatives de recettes et de dépenses et plus généralement sur tous les documents relatifs à l'activité. [cite: 76]</li>
                    [cite_start]<li>Il peut s’étendre aux renseignements relatifs aux <strong>comptes bancaires et aux transferts de fonds</strong>, sans que ne puisse être opposé à l'Administration fiscale, le <strong>secret bancaire</strong>. [cite: 77]</li>
                    [cite_start]<li>Pour les professions règlementées soumises au secret professionnel, le droit porte uniquement sur l'identité du client, la date, le montant et la forme du versement effectué en contrepartie de la prestation fournie. [cite: 78]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 16 : MOYENS GÉNÉRAUX – Droit de Communication (Sanctions)',
        content: (
            <>
                <h2 className="slide-title">MOYENS GÉNÉRAUX DE CONTRÔLES [Suite] : DROIT DE COMMUNICATION (SUITE)</h2>
                
                <h3>Opposabilité du droit de communication</h3>
                [cite_start]<p>Les documents, pièces ou informations obtenus par l’Administration Fiscale dans le cadre du droit de communication, peuvent être utilisés dans le cadre de l'ensemble des procédures de contrôle et de rectification sans que ces éléments puissent être écartés au seul motif de leur origine. [cite: 79]</p>
                [cite_start]<p>Toutefois, l'Administration ne peut se prévaloir de documents, pièces ou informations obtenus dans des conditions déclarées illégales par les tribunaux. [cite: 80]</p>
                
                <h3>Sanctions du défaut de communication</h3>
                [cite_start]<p>Le refus de communication, l'absence de tenue, la destruction des documents ou tout comportement faisant obstacle à la communication entraîne l'application d’une amende de **dix millions (10 000 000) de Francs guinéens**[cite: 81].</p>
                [cite_start]<p>L'amende s'applique pour chaque demande pour laquelle tout ou partie des documents ou renseignements sollicités n'ont pas été communiqués. [cite: 82]</p>
            </>
        )
    },
    {
        title: 'Diapositive 17 : MOYENS SPÉCIFIQUES – Droit d’Enquête',
        content: (
            <>
                <h2 className="slide-title">MOYENS SPÉCIFIQUES DE CONTRÔLES [Suite] : DROIT D’ENQUÊTE</h2>
                
                <h3>DÉFINITION: Qu’est ce que c’est?</h3>
                [cite_start]<p>Procédure administrative dont dispose les agents de l'Administration ayant au moins le grade de contrôleur, pour rechercher les <strong>manquements aux règles de facturation</strong> auxquelles sont soumis les assujettis à la TVA. [cite: 84]</p>
                [cite_start]<p>Cette procédure permet d’intervenir de manière inopinée dans les locaux professionnels d'un assujetti, ou d'auditionner sur convocation. [cite: 85]</p>
                
                <h3>MODALITÉS D’EXERCICE DU DROIT</h3>
                <ul>
                    [cite_start]<li>Les agents des impôts peuvent se faire présenter les factures, la comptabilité matière ainsi que les livres, les registres et les documents professionnels se rapportant à des opérations ayant donné ou devant donner lieu à facturation. [cite: 86]</li>
                    [cite_start]<li>L’entreprise doit, pendant les heures d’activités, donner accès aux agents des impôts, aux locaux à usage professionnel, aux terrains et entrepôts, aux moyens de transport à usage professionnel et à leur chargement. [cite: 87]</li>
                    [cite_start]<li>Les locaux affectés au domicile privé <strong>ne sont pas concernés</strong>. [cite: 88]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 18 : MOYENS SPÉCIFIQUES – Droit d’Enquête (Procédure)',
        content: (
            <>
                <h2 className="slide-title">MOYENS SPÉCIFIQUES DE CONTRÔLES [Suite] : DROIT D’ENQUÊTE [Suite]</h2>
                
                <h3>PROCÉDURE</h3>
                <ul>
                    [cite_start]<li><strong>Avis d’enquête :</strong> L’Administration Fiscale doit remettre un avis d’enquête au contribuable lors de la première intervention ou convocation. [cite: 89]</li>
                    [cite_start]<li><strong>Procès-Verbal :</strong> A l'issue de l'enquête, les agents établissent un procès-verbal consignant les manquements constatés. [cite: 90]</li>
                    [cite_start]<li>Le procès-verbal est établi dans un délai de <strong>30 jours</strong> suivant la dernière intervention ou convocation. [cite: 91]</li>
                    [cite_start]<li>En cas de refus de signer par l'assujetti, mention en est faite au procès-verbal. [cite: 92]</li>
                </ul>
                
                <h3>Droit de contestation du contribuable</h3>
                <ul>
                    [cite_start]<li>Le contribuable peut faire valoir ses observations dans un délai de <strong>30 jours</strong>. [cite: 93]</li>
                    [cite_start]<li>Les constatations opérées au cours de l'enquête ne peuvent être opposées à l'assujetti que dans le cadre : [cite: 94]
                        <ul>
                            [cite_start]<li>de la procédure de flagrance fiscale ; [cite: 94]</li>
                            [cite_start]<li>d'une vérification de comptabilité ; [cite: 94]</li>
                            [cite_start]<li>d'un examen de comptabilité. [cite: 94]</li>
                        </ul>
                    </li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 19 : MOYENS SPÉCIFIQUES – Droit de Visite et de Saisie',
        content: (
            <>
                <h2 className="slide-title">MOYENS SPÉCIFIQUES DE CONTRÔLES [Suite] : DROIT DE VISITE ET DE SAISIE</h2>
                
                <h3>DÉFINITION: Qu’est ce que c’est?</h3>
                [cite_start]<p>Droit détenu par les agents ayant au moins le grade d’inspecteur, pour la recherche des infractions en matière d'impôts directs ou de TVA, à travers la <strong>saisie des pièces et documents</strong>, quel qu'en soit le support. [cite: 95]</p>
                [cite_start]<p>Cette mesure permet à l'Administration fiscale de rechercher en tous lieux, <strong>même privés</strong>, la preuve d'agissements frauduleux lorsqu'il existe des présomptions qu'un contribuable se soustrait à l'établissement ou au paiement d'impôts. [cite: 96]</p>
                
                <h4>Cas visés (fraude fiscale) :</h4>
                <ul>
                    [cite_start]<li>en se livrant à des achats ou à des ventes sans facture ; [cite: 97]</li>
                    [cite_start]<li>en utilisant ou en délivrant des factures ou des documents ne se rapportant pas à des opérations réelles ; [cite: 98]</li>
                    [cite_start]<li>en omettant sciemment de passer ou de faire passer des écritures comptables. [cite: 99]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 20 : MOYENS SPÉCIFIQUES – Droit de Visite et de Saisie (Procédure)',
        content: (
            <>
                <h2 className="slide-title">MOYENS SPÉCIFIQUES DE CONTRÔLES [Suite] : DROIT DE VISITE ET DE SAISIE [Suite]</h2>
                
                <h3>PROCÉDURE: Autorisation préalable « Ordonnance »</h3>
                <ul>
                    [cite_start]<li>L'agent des impôts qui souhaite exercer son droit de visite et de saisie doit saisir d'une demande d'autorisation le <strong>Président du Tribunal de Première Instance ou le Juge de Paix</strong>. [cite: 101]</li>
                    [cite_start]<li>La demande d'autorisation doit comporter tous les éléments d'information de nature à justifier la visite. [cite: 102]</li>
                    [cite_start]<li>Chaque visite doit être autorisée par une <strong>ordonnance d'autorisation de visite et de saisie</strong>. [cite: 104]</li>
                </ul>
                
                <h3>Contenu de l’ordonnance (Mentions obligatoires)</h3>
                [cite_start]<p>L'ordonnance doit comporter : [cite: 106]</p>
                <ul>
                    [cite_start]<li>l'adresse des lieux à visiter ; [cite: 106]</li>
                    [cite_start]<li>le nom et la qualité du fonctionnaire habilité (agents de catégorie A). [cite: 106]</li>
                    [cite_start]<li>l'autorisation de recueillir sur place des renseignements et justifications auprès de l'occupant des lieux. [cite: 106]</li>
                    [cite_start]<li>la mention de la faculté pour le contribuable de faire appel à un conseil de son choix (sans suspension des opérations). [cite: 106]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 21 : MOYENS SPÉCIFIQUES – Droit de Visite et de Saisie (Modalités)',
        content: (
            <>
                <h2 className="slide-title">MOYENS SPÉCIFIQUES DE CONTRÔLES [Suite] : DROIT DE VISITE ET DE SAISIE [Suite]</h2>
                
                <h3>Modalités et Horaires</h3>
                <ul>
                    [cite_start]<li>La visite s'effectue sous l'autorité et le contrôle du juge qui les a autorisées. [cite: 107]</li>
                    [cite_start]<li>L’ordonnance est notifiée sur place contre récépissé ou décharge sur le procès-verbal. [cite: 107]</li>
                    [cite_start]<li>Le temps d’intervalle autorisé pour la visite est de **6 heures à 20 heures**. [cite: 107]</li>
                    <li>La visite est effectuée en présence de l’occupant ou de son représentant. [cite_start]A défaut, l’officier de police judiciaire désigne 2 témoins. [cite: 107, 108, 109]</li>
                </ul>
                
                <h3>Procès – verbal après la visite</h3>
                [cite_start]<p>Un procès-verbal relatant les modalités et le déroulement de l'opération et consignant les constatations effectuées, doit être dressé après les opérations, avec en annexe la liste des documents saisis. [cite: 111]</p>
            </>
        )
    },
    {
        title: 'Diapositive 22 : TYPES DE CONTRÔLES – Contrôle sur Pièce',
        content: (
            <>
                <h2 className="slide-title">TYPES DE CONTRÔLES : CONTRÔLE SUR PIÈCE</h2>
                
                <h3>Définition [Qu’est-ce que c’est ?]</h3>
                <ul>
                    [cite_start]<li>Le contrôle sur pièce que l’administration envisage depuis ses locaux <strong>sans envoie d’un avis préalable</strong>. [cite: 114]</li>
                    [cite_start]<li>Il n’implique aucune recherche extérieure aux déclarations et est systématique. [cite: 115]</li>
                </ul>
                
                <h3>Sur quoi porte le contrôle sur pièce?</h3>
                [cite_start]<p>Il peut porter sur tous les documents joints à toute déclaration d’impôts, que ce soit les documents comptables ou autres documents obtenus par le droit de communication. [cite: 116]</p>
                
                <h3>Quelle est la finalité de ce contrôle?</h3>
                <ul>
                    [cite_start]<li>S’assurer que le contribuable a fait sa déclaration [cite: 117]</li>
                    [cite_start]<li>qu’il n’y a pas d’erreurs, insuffisances, inexactitude, omissions ou dissimulations [cite: 117]</li>
                    [cite_start]<li>Que les données fournies sont cohérentes avec celles détenues par l’administration. [cite: 117]</li>
                </ul>
                
                <h3>A quoi s’attendre après ce contrôle ?</h3>
                [cite_start]<p>Si l’administration constate d’irrégularité, elle peut décider de l’envoi d’un avis de <strong>vérification de comptabilité</strong> ou d’un <strong>examen de comptabilité</strong>. [cite: 118, 119]</p>
            </>
        )
    },
    {
        title: 'Diapositive 23 : TYPES DE CONTRÔLES – Examen Contradictoire de la Situation Fiscale Personnelle (ESP)',
        content: (
            <>
                <h2 className="slide-title">TYPES DE CONTRÔLES [Suite] : EXAMEN CONTRADICTOIRE DE LA SITUATION FISCALE PERSONNELLE (ESP)</h2>
                
                <h3>Définition [Qu’est-ce que c’est ?]</h3>
                [cite_start]<p>C’est un contrôle engagé par l’administration à l’encontre des <strong>personnes physiques</strong> ayant une obligation au titre d’imposition sur les revenus. [cite: 121]</p>
                
                <h3>A quoi consiste l’ESP?</h3>
                [cite_start]<p>Il s’agit d’établir la cohérence entre, d'une part, les revenus déclarés ou ayant fait l’objet d’une retenue à la source et, d'autre part, la <strong>situation patrimoniale</strong>, la <strong>situation de trésorerie</strong> et les éléments du <strong>train de vie</strong> des contribuables. [cite: 123]</p>
                [cite_start]<p>C’est pour apprécier la situation de l’exploitant ou des principaux dirigeants ou associés de l’entreprise. [cite: 124]</p>
                
                <h3>Où se déroule ce contrôle?</h3>
                [cite_start]<p>L’ESP se déroule dans les bureaux de l’administration fiscale. [cite: 125]</p>
            </>
        )
    },
    {
        title: 'Diapositive 24 : TYPES DE CONTRÔLES – Vérification de Comptabilité (Définition)',
        content: (
            <>
                <h2 className="slide-title">TYPES DE CONTRÔLES [Suite] : VÉRIFICATION DE COMPTABILITÉ</h2>
                
                <h3>DÉFINITION [Qu’est-ce que c’est ?]</h3>
                [cite_start]<p>C’est un contrôle qui porte sur les impôts dont les bases d’imposition sont établies à partir de <strong>documents comptables</strong>. [cite: 126]</p>
                [cite_start]<p>Elle permet à l’Administration fiscale de : [cite: 127]</p>
                <ul>
                    [cite_start]<li>s’assurer de la régularité, de la sincérité et du caractère probant des écritures comptables ; [cite: 127]</li>
                    [cite_start]<li>confronter ces écritures comptables aux déclarations du contribuable afin d’établir, le cas échéant, les rehaussements nécessaires. [cite: 127]</li>
                </ul>
                
                <h3>Quels sont les impôts concernés?</h3>
                [cite_start]<p>Elle est utilisée pour tous les impôts dont les bases sont établies par les éléments comptables, notamment : [cite: 128, 129]</p>
                <ul>
                    <li>Impôt sur les Bénéfices Non Commerciaux ; Impôt sur les Sociétés ; [cite_start]Impôt Minimum Forfaitaire [cite: 128]</li>
                    <li>Taxe sur la Valeur Ajoutée ; Taxe sur les Activités Financières ; Taxe sur les Assurances ; [cite_start]Droits d’Accises. [cite: 129]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 25 : TYPES DE CONTRÔLES – Vérification de Comptabilité (Procédure/Avis)',
        content: (
            <>
                <h2 className="slide-title">TYPES DE CONTRÔLES [Suite] : VÉRIFICATION DE COMPTABILITÉ [Suite]</h2>
                
                <h3>Procédure de la vérification : Avis de vérification</h3>
                <ul>
                    [cite_start]<li>L’administration fiscale ne procède aux vérifications qu’après avoir informé le contribuable par <strong>lettre recommandé avec accusé de réception</strong>. [cite: 130]</li>
                    [cite_start]<li>Cette vérification ne commence pas moins de <strong>07 jours francs</strong> après la réception de l'avis. [cite: 131]</li>
                    [cite_start]<li>La vérification peut être <strong>générale</strong> et porter sur l’ensemble des impôts et taxes. [cite: 132]</li>
                </ul>
                
                <h3>Contenu de l’avis de vérification (Sous peine de nullité)</h3>
                <ul>
                    [cite_start]<li>les années soumises à vérification, à la limite du droit de reprise ; [cite: 133]</li>
                    [cite_start]<li>les impôts et les taxes concernées ; [cite: 133]</li>
                    [cite_start]<li>indication que la charte des droits et obligations du contribuable peut être consulté et est opposable à l’administration. [cite: 134, 135]</li>
                    [cite_start]<li>indication que le contribuable peut se faire assister par un conseil de son choix. [cite: 136]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 26 : TYPES DE CONTRÔLES – Vérification de Comptabilité (Cas Spéciaux)',
        content: (
            <>
                <h2 className="slide-title">TYPES DE CONTRÔLES [Suite] : VÉRIFICATION DE COMPTABILITÉ [Suite]</h2>
                
                <h3>Cas de dépassement du délai de reprise</h3>
                [cite_start]<p>L’Administration fiscale peut vérifier les trois derniers (3) exercices prescrits dont les opérations ont une incidence sur les résultats de la période non prescrite. [cite: 137]</p>
                [cite_start]<p>Le redressement sur la période prescrite ne peut excéder le montant : [cite: 138]</p>
                <ul>
                    [cite_start]<li>du déficit imputé sur les résultats du premier exercice non prescrit ; [cite: 139]</li>
                    [cite_start]<li>du crédit de TVA reporté sur la première déclaration de TVA de la période non prescrite. [cite: 140]</li>
                </ul>
                
                <h3>Cas de vérification inopinée</h3>
                [cite_start]<p>L’administration peut procéder à une vérification inopinée c’est-à-dire, <strong>sans envoi d’un avis préalable</strong>. [cite: 141]</p>
                [cite_start]<p>La vérification se limite à des constatations matérielles (inventaire physique, stock, caisse, etc.). [cite: 142]</p>
                [cite_start]<p>Elle ne dispense pas de l’obligation de la remise obligatoire de l’avis de vérification après la constatation matérielle. [cite: 141]</p>
            </>
        )
    },
    {
        title: 'Diapositive 27 : TYPES DE CONTRÔLES – Vérification de Comptabilité (Débat/Devoirs/Pouvoirs)',
        content: (
            <>
                <h2 className="slide-title">TYPES DE CONTRÔLES [Suite] : VÉRIFICATION DE COMPTABILITÉ [Suite]</h2>
                
                <h3>Lieu et heures de vérification</h3>
                <ul>
                    [cite_start]<li>La vérification a lieu au siège de l’entreprise ou au lieu de son principal établissement. [cite: 151]</li>
                    [cite_start]<li>Elle a lieu aux heures normales d’ouverture des locaux professionnels. [cite: 152]</li>
                </ul>
                
                <h3>Débat oral et contradictoire</h3>
                [cite_start]<p>Le contribuable doit avoir la possibilité d’avoir un **débat oral et contradictoire** avec le vérificateur. [cite: 153]</p>
                
                <h3>Devoirs et Pouvoirs des vérificateurs</h3>
                <ul>
                    [cite_start]<li>Le contribuable doit présenter tous les documents comptables, papiers physiques et ou électroniques (en français et en GNF). [cite: 154]</li>
                    [cite_start]<li>Le vérificateur peut visiter les locaux et installations professionnelles. [cite: 155]</li>
                    [cite_start]<li>Il ne peut emporter les documents comptables sans demande écrite et préalable et la remise d'un reçu détaillé. [cite: 156]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 28 : TYPES DE CONTRÔLES – Vérification de Comptabilité (Durée et Garanties)',
        content: (
            <>
                <h2 className="slide-title">TYPES DE CONTRÔLES [Suite] : VÉRIFICATION DE COMPTABILITÉ [Suite]</h2>
                
                <h3>Durée de la vérification</h3>
                [cite_start]<p>La vérification ou examen ne peut dépasser : [cite: 159]</p>
                <ul>
                    [cite_start]<li><strong>Six (6) mois</strong> pour les petites et moyennes entreprises [cite: 159]</li>
                    [cite_start]<li><strong>Neuf (9) mois</strong> pour les grandes entreprises [cite: 159]</li>
                </ul>
                
                <h3>Garanties du contribuable</h3>
                <ul>
                    [cite_start]<li>Droit au débat contradictoire sous peine de nullité. [cite: 167]</li>
                    [cite_start]<li>Droit d'opposer l’interprétation des textes fiscaux (rescrit fiscal). [cite: 168]</li>
                    [cite_start]<li>L’administration ne peut plus procéder à un nouvel examen sur la même période et sur les mêmes impôts. [cite: 169]</li>
                    [cite_start]<li>En cas de proposition de rectification, le contribuable a droit à des observations et l’administration doit répondre dans un délai de 90 jours. [cite: 170]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 29 : PROCÉDURES DE REDRESSEMENT – Rectification Contradictoire',
        content: (
            <>
                <h2 className="slide-title">PROCÉDURES DE REDRESSEMENT : PROCÉDURE DE RECTIFICATION CONTRADICTOIRE</h2>
                
                <h3>DÉFINITION [Qu’est-ce que c’est ?]</h3>
                [cite_start]<p>Procédure de <strong>droit commun</strong> permettant à l’administration de corriger les erreurs, insuffisances, inexactitudes, omissions ou dissimulations commises par le contribuable dans ses déclarations fiscales. [cite: 175] [cite_start]Elle fait suite à un contrôle fiscal. [cite: 175]</p>
                
                <h3>Les principes gouvernant cette procédure:</h3>
                <ul>
                    [cite_start]<li>Elle est **contradictoire** : le contribuable peut faire valoir ses droits à travers ses observations. [cite: 177]</li>
                    [cite_start]<li>La charge de la preuve incombe à l’administration fiscale. [cite: 178]</li>
                    [cite_start]<li>Elle est interruptive de prescription. [cite: 180]</li>
                </ul>
                
                <h3>Déroulement de la procédure:</h3>
                [cite_start]<p>L’administration notifie une **proposition de rectification** à la fin du contrôle par lettre recommandée avec accusé de réception ou par lettre remise en main propre contre décharge. [cite: 181]</p>
            </>
        )
    },
    {
        title: 'Diapositive 30 : PROCÉDURES DE REDRESSEMENT – Rectification Contradictoire (Mentions et Réponse)',
        content: (
            <>
                <h2 className="slide-title">PROCÉDURES DE REDRESSEMENT [Suite] : PROCÉDURE DE RECTIFICATION CONTRADICTOIRE [Suite]</h2>
                
                <h3>Mentions obligatoires (à peine de nullité)</h3>
                <ul>
                    [cite_start]<li>La nature et les motifs de la rectification envisagée. [cite: 184]</li>
                    [cite_start]<li>Le montant de la rectification (bases d’imposition, droits, taxes et pénalités). [cite: 185]</li>
                    [cite_start]<li>L’origine et la teneur des renseignements obtenus de tiers dans l’exercice du droit de communication. [cite: 187]</li>
                    [cite_start]<li>Le délai de <strong>trente (30) jours</strong> ouverts au contribuable pour y répondre, ainsi que la possibilité de solliciter une prorogation de quinze (15) jours additionnels. [cite: 190]</li>
                </ul>
                
                <h3>Réponse du contribuable et de l'administration</h3>
                <ul>
                    <li>Le contribuable a 30 jours pour répondre. [cite_start]À défaut, il est réputé accepter les redressements. [cite: 191, 192]</li>
                    [cite_start]<li>En cas d’observations du contribuable, l’administration doit répondre dans un délai de **90 jours**. [cite: 195]</li>
                    [cite_start]<li>Le défaut de réponse de l’Administration fiscale dans le délai de 90 jours vaut **acceptation des observations du contribuable**. [cite: 196]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 31 : PROCÉDURES DE REDRESSEMENT – Taxation d’Office (Définition et Cas)',
        content: (
            <>
                <h2 className="slide-title">PROCÉDURES DE REDRESSEMENT : PROCÉDURE DE TAXATION D’OFFICE</h2>
                
                <h3>DÉFINITION [Qu’est-ce que c’est ?]</h3>
                [cite_start]<p>Procédure **exceptionnelle** permettant à l’administration d’imposer le contribuable sur la base des seuls éléments à sa disposition sans que ce dernier n’ait pu présenter ses observations. [cite: 199]</p>
                [cite_start]<p>Elle est <strong>non contradictoire</strong>. [cite: 200]</p>
                
                <h3>Dans quels cas l’administration recourt à la taxation d’office?</h3>
                <ul>
                    [cite_start]<li>Défaut ou retard de production des déclarations non régularisé dans les 30 jours suivant mise en demeure. [cite: 202, 203]</li>
                    [cite_start]<li>Défaut de réponse aux demandes d'éclaircissements ou de justifications. [cite: 204]</li>
                    [cite_start]<li>Absence de présentation ou présentation incomplète de la documentation de prix de transfert. [cite: 205]</li>
                    [cite_start]<li>Rejet de comptabilité (irrégulière, frauduleuse, etc.). [cite: 207, 208, 209]</li>
                    [cite_start]<li>Opposition à contrôle fiscal. [cite: 213, 214]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 32 : PROCÉDURES DE REDRESSEMENT – Taxation d’Office (Conséquences)',
        content: (
            <>
                <h2 className="slide-title">PROCÉDURES DE REDRESSEMENT [Suite] : PROCÉDURE DE TAXATION D’OFFICE [Suite]</h2>
                
                <h3>Conséquences de la taxation d’office</h3>
                <ul>
                    [cite_start]<li>La taxation d’office exclut la procédure normale de rectification à caractère contradictoire. [cite: 220]</li>
                    [cite_start]<li>Le montant d’imposition exigible donne lieu à un <strong>avis de mise à recouvrement (AMR)</strong> qui peut être émit le même jour que la notification. [cite: 221]</li>
                    [cite_start]<li>Sous peine de nullité, l’imposition d’office doit être <strong>motivée</strong> et indiquer le montant de rectification et les bases d’imposition retenues. [cite: 223]</li>
                    [cite_start]<li>La taxation d’office interrompt la prescription du droit de reprise. [cite: 224]</li>
                </ul>
                
                [cite_start]<p style={{marginTop: '15px'}}>**Note :** En cas d’opposition à contrôle fiscal, en plus de la taxation d’office, les droits sont majorés de **100%** et une amende de 25 000 000 GNF par participant peut être appliquée en cas d'opposition collective. [cite: 215, 216, 219]</p>
            </>
        )
    },
    {
        title: 'Diapositive 33 : PROCÉDURES DE RÉGULARISATION – Régularisation Spontanée',
        content: (
            <>
                <h2 className="slide-title">PROCÉDURES DE RÉGULARISATION : Régularisation spontanée</h2>
                
                <h3>Principe</h3>
                [cite_start]<p>Le contribuable, qui fait l’objet d'une vérification ou d’un examen de comptabilité, a la possibilité de régulariser les erreurs, inexactitudes, omissions ou insuffisances commises dans les déclarations, moyennant le paiement de l’**intérêt de retard** à l’exclusion des pénalités fiscales. [cite: 225]</p>
                
                <h3>Conditions de fond de la régularisation:</h3>
                <ul>
                    [cite_start]<li>la régularisation ne concerne pas une infraction **exclusive de bonne foi**. [cite: 226]</li>
                    [cite_start]<li>la régularisation doit viser l’**ensemble des impôts** sur lesquels porte la vérification ou l’examen de comptabilité. [cite: 227]</li>
                </ul>
                
                <h3>Conditions de forme:</h3>
                <ul>
                    [cite_start]<li>Le contribuable en fait la demande par lettre recommandée (ou remise en main propre) **avant toute proposition de rectification**. [cite: 228]</li>
                    [cite_start]<li>Souscrire à une déclaration dans les 30 jours de l’acceptation. [cite: 229]</li>
                    [cite_start]<li>Le contribuable est tenu d’acquitter l’**intégralité des suppléments de droits simples et l’intérêt de retard** au moment du dépôt de cette déclaration. [cite: 230]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 34 : VOIES DE RECOURS – Contentieux de l’Assiette (Définition et Champ)',
        content: (
            <>
                <h2 className="slide-title">VOIES DE RECOURS DU CONTRIBUABLE : CONTENTIEUX DE L’ASSIETTE</h2>
                
                <h3>Définition</h3>
                [cite_start]<p>Le contribuable qui conteste tout ou partie d'un impôt, d’une taxe ou d’une redevance le concernant doit déposer une **réclamation préalable** par lettre remise en main propre ou par lettre recommandée avec accusé de réception au service des impôts à l’origine de l’imposition. [cite: 235]</p>
                
                <h3>Champ d’application</h3>
                <ul>
                    [cite_start]<li>Réparation d’erreurs dans l’assiette ou la liquidation de l’impôt. [cite: 238]</li>
                    [cite_start]<li>Contestation d’impôts et taxes émis par l’administration fiscale. [cite: 239]</li>
                    [cite_start]<li>Restitution d’impôts ayant fait l’objet d’un versement indu. [cite: 239]</li>
                    [cite_start]<li>Le contribuable peut également présenter une réclamation pour obtenir la réparation d’erreurs dans la détermination d’un résultat déficitaire ou d’un **crédit de TVA déductible** au titre d’une période donnée. [cite: 237]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 35 : VOIES DE RECOURS – Contentieux de l’Assiette (Conditions et Délais)',
        content: (
            <>
                <h2 className="slide-title">VOIES DE RECOURS DU CONTRIBUABLE [Suite] : CONTENTIEUX DE L’ASSIETTE</h2>
                
                <h3>Conditions de fond de recevabilité:</h3>
                <ul>
                    [cite_start]<li>**Identification de l’impôt contesté :** Mentionner la nature et le montant des impôts, droits ou taxes objet du litige. [cite: 242]</li>
                    [cite_start]<li>**Exposé des moyens et des faits :** Indiquer les moyens, de fait, comme de droit, fondant la demande (irrecevable si l'on se limite à demander la décharge sans motifs). [cite: 244]</li>
                    [cite_start]<li>**Pièces justificatives :** Joindre les justificatifs de paiement de la <strong>partie non contestée</strong>. [cite: 246]</li>
                </ul>
                
                <h3>Délai de recours :</h3>
                [cite_start]<p>Les réclamations doivent être présentées au plus tard le **31 décembre de la deuxième année** suivant celle : [cite: 249]</p>
                <ul>
                    [cite_start]<li>de la notification d'un Avis de Mise en Recouvrement (AMR) ; [cite: 251]</li>
                    [cite_start]<li>du versement de l'impôt ; [cite: 252]</li>
                    [cite_start]<li>de la notification de la proposition de rectification ou de la notification d’imposition d’office. [cite: 253]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 36 : PÉNALITÉS – Retard Déclaratif et Paiement',
        content: (
            <>
                <h2 className="slide-title">SYNTHÈSE DES SANCTIONS ET PÉNALITÉS</h2>
                
                <h3>Pénalités pour Retard ou Manquement Déclaratif</h3>
                [cite_start]<p style={{fontStyle: 'italic'}}>Il s’agit des droits redressés. [cite: 261]</p>
                <ul>
                    [cite_start]<li><strong>15%</strong> : Pour retard ou insuffisance de déclaration. [cite: 262]</li>
                    [cite_start]<li><strong>40%</strong> : En cas de manquement délibéré. [cite: 263]</li>
                    [cite_start]<li><strong>80%</strong> : En cas d’abus de droit fiscal ou de manœuvres frauduleuses. [cite: 264]</li>
                    [cite_start]<li><strong>80%</strong> : En cas de dissimulation d’une partie du prix stipulé dans un contrat. [cite: 265]</li>
                </ul>
                
                <h3>Pénalités pour Défaut ou Retard de Paiement</h3>
                [cite_start]<p style={{fontStyle: 'italic'}}>S’applique au montant des sommes dont le paiement a été différé. [cite: 266]</p>
                <ul>
                    [cite_start]<li><strong>5%</strong> du montant des sommes dont le paiement a été différé (Majoration). [cite: 267]</li>
                </ul>
            </>
        )
    },
    {
        title: 'Diapositive 37 : PÉNALITÉS – Violation des règles de facturation (TVA)',
        content: (
            <>
                <h2 className="slide-title">SYNTHÈSE DES SANCTIONS ET PÉNALITÉS [Suite]</h2>
                
                <h3>Pénalités en cas de Violation des règles de facturation (TVA)</h3>
                [cite_start]<p style={{fontStyle: 'italic'}}>Il s’agit des autres pénalités applicables qu’en matière de TVA. [cite: 269]</p>
                <ul>
                    [cite_start]<li>Pénalité de <strong>80%</strong> en cas de facture non conforme. [cite: 270]</li>
                    [cite_start]<li>En cas de défaut de facturation : <strong>30%</strong> du montant hors taxes de la transaction. [cite: 271]</li>
                    [cite_start]<li>Émission d’une facture de complaisance : <strong>50%</strong> du montant hors taxes de la transaction. [cite: 272]</li>
                    [cite_start]<li>Émission d’une facture fictive : <strong>70%</strong> du montant hors taxes de la facture. [cite: 273]</li>
                    [cite_start]<li>Émission d’une <strong>fausse facture</strong> : **100%** du montant hors taxes de la facture. [cite: 274]</li>
                    [cite_start]<li>Omission ou inexactitude : <strong>10 000 GNF</strong> par omission ou inexactitude. [cite: 275]</li>
                </ul>
            </>
        )
    }
];

export default function Day5Page() {
  return (
    <ContentWrapper 
        title="Jour 5 : Renforcer les compétences pratiques et la gestion du risque fiscal" 
        date="25 octobre 2025" 
    >
        {/* Le composant SlideShow utilise le tableau de slides généré */}
        <SlideShow slides={SLIDES} />
    </ContentWrapper>
  );
}