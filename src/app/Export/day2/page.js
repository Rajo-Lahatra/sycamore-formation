import DayExport from '../DayExport';
// Importez les slides du jour 2 existant  
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
const slides = [
    // SLIDE 1: INTRODUCTION JOUR 2
    createSlide(
        "Jour 2 : Fiscalité du Personnel (RTS, VF, TA/ONFPP)",
        `
        <div style="font-size: 1.1em;">
            <p><strong>2ème Partie : OBLIGATIONS FISCALES DE LA SYCAMORE</strong></p>
            <p style="font-size: 1.2em; color: var(--fuel-yellow);"><strong>Objectif :</strong> Maîtriser les prélèvements fiscaux liés à l'emploi du personnel salarié dans le secteur minier.</p>
            <p><strong>Programme :</strong></p>
            <ul>
                <li><strong>CHAPITRE 1 : Fiscalité du Personnel</strong></li>
                <ul>
                    <li>1. Retenue sur Traitements et Salaires (RTS)</li>
                    <li>2. Versement Forfaitaire (VF)</li>
                    <li>3. Taxe d’Apprentissage (TA) / Contribution ONFPP</li>
                </ul>
                <li>Cas Pratiques de calcul et vérification</li>
            </ul>
        </div>
        `,
        null
    ),
    
    // SLIDE 2: RTS - DÉFINITION
    createSlide(
        "1. La Retenue sur Traitements et Salaires (RTS)",
        `
        <h3>Définition</h3>
        <ul>
            <li>La <strong>RTS</strong> est un impôt cédulaire perçu sur les salaires et rémunérations octroyés au travailleur dans le cadre de l’exécution du contrat de travail.</li>
        </ul>
        <h3>Qui supporte l'impôt ? Qui le déclare ?</h3>
        <ul>
            <li><strong>Redevable réel :</strong> Le travailleur (la RTS est une charge fiscale pour le salarié).</li>
            <li><strong>Redevable légal :</strong> L’employeur. Il prélève l'impôt du salaire brut payable au salarié et le déclare à l’Administration Fiscale.</li>
        </ul>
        `,
        "CHAPITRE 1 - FISCALITE DU PERSONNEL : De la Retenue sur les Traitements et Salaires"
    ),

    // SLIDE 3: RTS - PERSONNES & MATIÈRE IMPOSABLE
    createSlide(
        "RTS - Personnes & Matière Imposable",
        `
        <h3>Personnes Imposables</h3>
        <ul>
            <li>Toute personne percevant des revenus dans le cadre de l’exécution d’un contrat de travail (salariés, employés ou travailleurs).</li>
        </ul>
        <h3>Matière Imposable ("SALAIRES")</h3>
        <p>Sont soumis à la RTS les rémunérations perçues par le salarié en contrepartie de son travail.</p>
        <ul>
            <li><strong>En ESPÈCE :</strong> Salaires, traitements, primes, indemnités, allocations.</li>
            <li><strong>En NATURE :</strong> Concession gratuite d’un bien (véhicule, logement en camp) ou fourniture gratuite de produits/services (frais de scolarité, prime d’éloignement, etc.).</li>
        </ul>
        `
    ),

    // SLIDE 4: RTS - EXONÉRATIONS
    createSlide(
        "RTS - Exonérations Principales",
        `
        <p>Les rémunérations ci-après sont exemptées :</p>
        <ul>
            <li>Les <strong>allocations familiales</strong>.</li>
            <li>Le <strong>remboursement des frais professionnels</strong>.</li>
            <li>Les <strong>indemnités forfaitaires</strong> (logement, transport, panier et repas, cherté de vie, craie) dans une limite de <strong>25% du salaire brut</strong> versé à l’employé.</li>
            <li>Les indemnités de licenciement et de départ à la retraite.</li>
            <li>Les indemnités temporaires, prestations et rente viagères versées aux victimes d’accident de travail.</li>
            <li>Les indemnités de stage (durée n’excédant pas 12 mois et limite de <strong>1 200 000 GNF</strong>).</li>
        </ul>
        `
    ),

    // SLIDE 5: RTS - ASSIETTE
    createSlide(
        "RTS - Assiette : Le Revenu Net Imposable (RNI)",
        `
        <p>L’assiette ou base d’imposition est le <strong>Revenu Net Imposable (RNI)</strong>. Il est obtenu en déduisant du Revenu Brut Imposable (RBI) :</p>
        <ul>
            <li>Les <strong>cotisations sociales</strong> supportées par le salarié (CNSS part salariale).</li>
            <li>Les retenues faites par l’employeur en vue de la constitution de <strong>pensions de retraites</strong> en application d’un régime de prévoyance obligatoire prévu par la loi.</li>
        </ul>
        <br/>
        <h3>Taux de RTS</h3>
        <p>La RTS donne lieu à l’application de taux progressifs par tranche du revenu imposable (RNI).</p>
        `
    ),

    // SLIDE 6: RTS - BARÈME DES TAUX
    createSlide(
        "RTS - Barème des Taux Progressifs",
        `
        <table style="width: 100%; border-collapse: collapse; text-align: right;">
            <thead>
                <tr style="background-color: var(--fuel-yellow);">
                    <th style="width: 70%; text-align: left; padding: 8px; border: 1px solid #ddd;">Tranche du salaire imposable (GNF)</th>
                    <th style="width: 30%; padding: 8px; border: 1px solid #ddd;">Taux</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">0 à 1.000.000</td><td style="padding: 8px; border: 1px solid #ddd;">0%</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">1.000.001 à 3.000.000</td><td style="padding: 8px; border: 1px solid #ddd;">5%</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">3.000.001 à 5.000.000</td><td style="padding: 8px; border: 1px solid #ddd;">8%</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">5.000.001 à 10.000.000</td><td style="padding: 8px; border: 1px solid #ddd;">10%</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">10.000.001 à 20.000.000</td><td style="padding: 8px; border: 1px solid #ddd;">15%</td></tr>
                <tr style="background-color: #f0f0f0;"><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Au-delà de 20.000.000</td><td style="padding: 8px; border: 1px solid #ddd;">20%</td></tr>
            </tbody>
        </table>
        `,
        "La RTS est obtenue par application des taux aux tranches du revenu net imposable (RNI)." 
    ),

    // SLIDE 7: RTS - MODALITÉS
    createSlide(
        "RTS - Modalités de Déclaration et Échéance",
        `
        <h3>Déclaration Électronique</h3>
        <ul>
            <li>La RTS est déclarée via la plateforme <strong>"ETAX"</strong>.</li>
            <li>Le contribuable doit renseigner l'effectif, la base d’imposition globale et le montant global des retenues.</li>
        </ul>
        <h3>Échéance</h3>
        <ul>
            <li>Déclaration et paiement : Au plus tard le <strong>10ème jour du mois suivant</strong> celui du paiement des salaires.</li>
        </ul>
        <h3>Sanctions</h3>
        <ul>
            <li>Les sanctions applicables pour défaut de conformité ou paiement tardif sont présentées dans le tableau en annexe.</li>
        </ul>
        `
    ),

    // SLIDE 8: VERSEMENT FORFAITAIRE (VF)
    createSlide(
        "2. Le Versement Forfaitaire (VF)",
        `
        <h3>Définition</h3>
        <ul>
            <li>Le <strong>VF</strong> est une taxe due par les entreprises employant du personnel salarié en Guinée, perçue en raison des salaires payés par l’employeur.</li>
        </ul>
        <h3>Personne Imposable</h3>
        <ul>
            <li>Le VF est dû, déclaré et payé par l’<strong>employeur</strong> établi en Guinée.</li>
        </ul>
        <h3>Matière Imposable</h3>
        <ul>
            <li>Le VF est perçu sur les rémunérations en <strong>espèce et en nature</strong> (non exonérées) payées au salarié.</li>
        </ul>
        `
    ),

    // SLIDE 9: VF - EXONÉRATIONS, ASSIETTE & TAUX
    createSlide(
        "VF - Exonérations, Assiette et Taux",
        `
        <h3>Exonérations</h3>
        <ul>
            <li>Les indemnités de stage (max 12 mois, limite 1 200 000 GNF).</li>
            <li>Les salaires versés aux apprentis munis d’un contrat d’apprentissage.</li>
            <li>Les rémunérations versées aux handicapés.</li>
        </ul>
        <h3>Assiette (Base d’Imposition)</h3>
        <ul>
            <li>Ensemble des salaires (nature et espèce), <strong>déduction faite du montant des prestations familiales</strong> (évaluées à 6% de l'assiette des cotisations de sécurité sociale).</li>
        </ul>
        <h3>Taux d’Imposition</h3>
        <ul>
            <li>Le VF est perçu au taux unique de <strong>6%</strong> sur la base d’imposition déterminée.</li>
        </ul>
        `
    ),
    
    // SLIDE 10: VF - MODALITÉS
    createSlide(
        "VF - Modalités de Déclaration et Échéance",
        `
        <h3>Déclaration Électronique</h3>
        <ul>
            <li>Déclaration via la plateforme <strong>"ETAX"</strong> (renseigner effectif, base d’imposition globale et montant total du VF).</li>
        </ul>
        <h3>Échéance</h3>
        <ul>
            <li>Déclaration et paiement : Au plus tard le <strong>10ème jour du mois suivant</strong> celui du paiement des salaires.</li>
        </ul>
        <h3>Sanctions</h3>
        <ul>
            <li>Les sanctions applicables sont présentées dans le tableau en annexe.</li>
        </ul>
        `
    ),

    // SLIDE 11: TA/ONFPP - DÉFINITION
    createSlide(
        "3. Taxe d’Apprentissage (TA) et Contribution ONFPP",
        `
        <h3>Définition et Champ d'Application (TA)</h3>
        <ul>
            <li>La <strong>Taxe d’apprentissage (TA)</strong> est due par les entreprises employant du personnel salarié, dont l’effectif est <strong>inférieur à 30 employés</strong>.</li>
        </ul>
        <h3>Personnes Imposables (TA)</h3>
        <ul>
            <li>La TA est due, déclarée et payée par l’<strong>employeur</strong> établi en Guinée.</li>
        </ul>
        <h3>Matière Imposable (TA)</h3>
        <ul>
            <li>La TA est perçue sur les rémunérations en <strong>espèce et en nature</strong> (non exonérées) payées au salarié.</li>
        </ul>
        `
    ),

    // SLIDE 12: TA/ONFPP - Taux et Exonérations
    createSlide(
        "TA / ONFPP - Taux et Spécificités",
        `
        <h3>Exonérations (TA)</h3>
        <ul>
            <li>Les entreprises soumises à l’<strong>ONFPP</strong> (employant au moins 30 employés).</li>
            <li>Les indemnités de stage (max 12 mois, limite 1 200 000 GNF).</li>
            <li>Les salaires versés aux apprentis munis d’un contrat d’apprentissage.</li>
            <li>Les rémunérations versées aux handicapés.</li>
        </ul>
        <h3>Assiette et Taux (TA)</h3>
        <ul>
            <li>Assiette : Montant du <strong>salaire brut</strong>.</li>
            <li>Taux d’Imposition : <strong>2%</strong>.</li>
        </ul>
        <h3>Précision importante sur l'ONFPP</h3>
        <ul>
            <li>Les entreprises dont l'effectif est <strong>supérieur ou égal à 30 employés</strong> sont soumises à l’<strong>ONFPP</strong>.</li>
            <li><strong>Note :</strong> Sycamore, avec 250 employés, est soumise à la Contribution ONFPP et non à la Taxe d'Apprentissage (TA).</li>
            <li><strong>Taux ONFPP :</strong> <strong>1,5%</strong> de la masse salariale globale.</li>
            <li><strong>Échéance ONFPP :</strong> Au plus tard le <strong>20 de chaque mois</strong>.</li>
        </ul>
        `
    ),

    // SLIDE 13: TA - MODALITÉS
    createSlide(
        "TA/ONFPP - Modalités de Déclaration et Échéance",
        `
        <h3>Déclaration Électronique</h3>
        <ul>
            <li>Déclaration via la plateforme <strong>"ETAX"</strong>.</li>
        </ul>
        <h3>Échéance</h3>
        <ul>
            <li>Pour l'<strong>ONFPP</strong> : Au plus tard le <strong>20 de chaque mois</strong>.</li>
            <li>Pour la <strong>TA</strong> (entreprises < 30 employés) : Déclaration et paiement annuels au plus tard le <strong>15 février</strong> de chaque année.</li>
        </ul>
        <h3>Sanctions</h3>
        <ul>
            <li>Les sanctions applicables pour défaut de conformité ou paiement tardif sont présentées dans le tableau en annexe.</li>
        </ul>
        `
    ),

    // SLIDE 14: CAS PRATIQUE N°1 - ÉNONCÉ
    createSlide(
        "CAS PRATIQUE N°1 : Régularisation Taxes Salaires",
        `
        <h3>Contexte</h3>
        <p>L’entreprise <strong>SYCAMORE Guinée</strong> dispose d’un effectif de <strong>250 employés</strong>. Les salaires du mois de septembre, payés le 28 du mois, ont fait l’objet de déclaration au 10 octobre. Il a été omis 5 salariés dont les impôts et taxes sur les salaires perçus n’ont pas été calculés et payés.</p>
        <h3>Travail demandé</h3>
        <p>Procéder au calcul des impôts et taxes (RTS, VF, ONFPP) sur les salaires perçus par les 5 employés et déterminer le risque en termes de pénalisation.</p>
        <p><strong>Rémunérations perçues :</strong></p>
        <table style="width: 100%; text-align: right; border-collapse: collapse; margin-top: 15px;">
            <thead>
                <tr style="background-color: var(--french-gray);">
                    <th style="width: 15%; text-align: left; padding: 8px; border: 1px solid #ddd;">Employé</th>
                    <th style="width: 17%; padding: 8px; border: 1px solid #ddd;">Salaire de Base</th>
                    <th style="width: 17%; padding: 8px; border: 1px solid #ddd;">Prime transport</th>
                    <th style="width: 17%; padding: 8px; border: 1px solid #ddd;">Indemnité cherté de vie</th>
                    <th style="width: 17%; padding: 8px; border: 1px solid #ddd;">Loyer appartement</th>
                    <th style="width: 17%; padding: 8px; border: 1px solid #ddd;">Prime de Fonction</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Employé 1</td><td style="padding: 8px; border: 1px solid #ddd;">4 200 000</td><td style="padding: 8px; border: 1px solid #ddd;">2 000 000</td><td style="padding: 8px; border: 1px solid #ddd;">3 600 000</td><td style="padding: 8px; border: 1px solid #ddd;">3 000 000</td><td style="padding: 8px; border: 1px solid #ddd;">1 500 000</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Employé 2</td><td style="padding: 8px; border: 1px solid #ddd;">4 000 000</td><td style="padding: 8px; border: 1px solid #ddd;">1 000 000</td><td style="padding: 8px; border: 1px solid #ddd;">1 500 000</td><td style="padding: 8px; border: 1px solid #ddd;">2 000 000</td><td style="padding: 8px; border: 1px solid #ddd;">1 800 000</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Employé 3</td><td style="padding: 8px; border: 1px solid #ddd;">3 600 000</td><td style="padding: 8px; border: 1px solid #ddd;">1 100 000</td><td style="padding: 8px; border: 1px solid #ddd;">1 000 000</td><td style="padding: 8px; border: 1px solid #ddd;">-</td><td style="padding: 8px; border: 1px solid #ddd;">2 000 000</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Employé 4</td><td style="padding: 8px; border: 1px solid #ddd;">8 500 000</td><td style="padding: 8px; border: 1px solid #ddd;">2 100 000</td><td style="padding: 8px; border: 1px solid #ddd;">3 600 000</td><td style="padding: 8px; border: 1px solid #ddd;">4 000 000</td><td style="padding: 8px; border: 1px solid #ddd;">6 000 000</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Employé 5</td><td style="padding: 8px; border: 1px solid #ddd;">1 000 000</td><td style="padding: 8px; border: 1px solid #ddd;">200 000</td><td style="padding: 8px; border: 1px solid #ddd;">150 000</td><td style="padding: 8px; border: 1px solid #ddd;">-</td><td style="padding: 8px; border: 1px solid #ddd;">-</td></tr>
            </tbody>
        </table>
        `,
        null
    ),

    // SLIDE 15: CAS PRATIQUE N°2 - ÉNONCÉ
    createSlide(
        "CAS PRATIQUE N°2 : Vérification des États de Salaire",
        `
        <h3>Contexte</h3>
        <p><strong>WASSOLON Technology Sarl</strong> (Fintech, 4 salariés) effectue la paie pour la première fois. En tant que responsable financier, il vous est demandé de valider les calculs d’impôts et taxes sur salaires effectués par le RH.</p>
        <p><strong>Calculs du RH à valider :</strong></p>
        <table style="width: 100%; text-align: right; font-size: 0.8em; border-collapse: collapse; margin-top: 15px;">
            <thead>
                <tr style="background-color: var(--french-gray);">
                    <th style="width: 10%; text-align: center; padding: 4px; border: 1px solid #ddd;">Salarié</th>
                    <th style="width: 10%; text-align: center; padding: 4px; border: 1px solid #ddd;">Salaire de Base</th>
                    <th style="width: 10%; text-align: center; padding: 4px; border: 1px solid #ddd;">Prime transport</th>
                    <th style="width: 10%; text-align: center; padding: 4px; border: 1px solid #ddd;">Ind cherté de vie</th>
                    <th style="width: 10%; text-align: center; padding: 4px; border: 1px solid #ddd;">Loyer appartement</th>
                    <th style="width: 10%; text-align: center; padding: 4px; border: 1px solid #ddd;">Prime de Fonction</th>
                    <th style="width: 10%; text-align: center; padding: 4px; border: 1px solid #ddd;">Salaire Brut</th>
                    <th style="width: 8%; text-align: center; padding: 4px; border: 1px solid #ddd;">RTS</th>
                    <th style="width: 8%; text-align: center; padding: 4px; border: 1px solid #ddd;">VF</th>
                    <th style="width: 8%; text-align: center; padding: 4px; border: 1px solid #ddd;">TA/ONFPP</th>
                    <th style="width: 8%; text-align: center; padding: 4px; border: 1px solid #ddd;">Salaire Net</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="text-align: left; padding: 4px; border: 1px solid #ddd;">Salarié 1</td><td style="padding: 4px; border: 1px solid #ddd;">3.000.000</td><td style="padding: 4px; border: 1px solid #ddd;">2.000.000</td><td style="padding: 4px; border: 1px solid #ddd;">1.300.000</td><td style="padding: 4px; border: 1px solid #ddd;">2.000.000</td><td style="padding: 4px; border: 1px solid #ddd;">-</td><td style="padding: 4px; border: 1px solid #ddd;">8.300.000</td><td style="padding: 4px; border: 1px solid #ddd;">250.000</td><td style="padding: 4px; border: 1px solid #ddd;">489.000</td><td style="padding: 4px; border: 1px solid #ddd;">124.500</td><td style="padding: 4px; border: 1px solid #ddd;">7.925.000</td></tr>
                <tr><td style="text-align: left; padding: 4px; border: 1px solid #ddd;">Salarié 2</td><td style="padding: 4px; border: 1px solid #ddd;">8.200.000</td><td style="padding: 4px; border: 1px solid #ddd;">800.000</td><td style="padding: 4px; border: 1px solid #ddd;">900.000</td><td style="padding: 4px; border: 1px solid #ddd;">1.000.000</td><td style="padding: 4px; border: 1px solid #ddd;">-</td><td style="padding: 4px; border: 1px solid #ddd;">10.900.000</td><td style="padding: 4px; border: 1px solid #ddd;">567.500</td><td style="padding: 4px; border: 1px solid #ddd;">645.000</td><td style="padding: 4px; border: 1px solid #ddd;">163.500</td><td style="padding: 4px; border: 1px solid #ddd;">10.207.500</td></tr>
                <tr><td style="text-align: left; padding: 4px; border: 1px solid #ddd;">Salarié 3</td><td style="padding: 4px; border: 1px solid #ddd;">3.600.000</td><td style="padding: 4px; border: 1px solid #ddd;">1.100.000</td><td style="padding: 4px; border: 1px solid #ddd;">1.000.000</td><td style="padding: 4px; border: 1px solid #ddd;">-</td><td style="padding: 4px; border: 1px solid #ddd;">2.000.000</td><td style="padding: 4px; border: 1px solid #ddd;">7.700.000</td><td style="padding: 4px; border: 1px solid #ddd;">325.000</td><td style="padding: 4px; border: 1px solid #ddd;">453.000</td><td style="padding: 4px; border: 1px solid #ddd;">115.500</td><td style="padding: 4px; border: 1px solid #ddd;">7.250.000</td></tr>
                <tr><td style="text-align: left; padding: 4px; border: 1px solid #ddd;">Salarié 5</td><td style="padding: 4px; border: 1px solid #ddd;">1.000.000</td><td style="padding: 4px; border: 1px solid #ddd;">200.000</td><td style="padding: 4px; border: 1px solid #ddd;">150.000</td><td style="padding: 4px; border: 1px solid #ddd;">-</td><td style="padding: 4px; border: 1px solid #ddd;">-</td><td style="padding: 4px; border: 1px solid #ddd;">1.350.000</td><td style="padding: 4px; border: 1px solid #ddd;">14.125</td><td style="padding: 4px; border: 1px solid #ddd;">76.140</td><td style="padding: 4px; border: 1px solid #ddd;">20.250</td><td style="padding: 4px; border: 1px solid #ddd;">1.268.375</td></tr>
            </tbody>
        </table>
        `,
        null
    ),

    // SLIDE 16: CAS PRATIQUE N°3 - RECONSTITUTION DGI
    createSlide(
        "CAS PRATIQUE N°3 : Reconstitution de Salaire par la DGI",
        `
        <h3>Contexte</h3>
        <p>Contrôle sur pièces sur la société <strong>OURY TRANSPORT SARL</strong> (Exercice 2023). L’Administration Fiscale a reconstitué la base d’imposition à la RTS et au VF comme suit :</p>
        <table style="width: 100%; font-size: 0.9em; text-align: right; border-collapse: collapse; margin-top: 15px;">
            <thead>
                <tr style="background-color: var(--french-gray);">
                    <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">N° Compte</th>
                    <th style="text-align: left; padding: 8px; border: 1px solid #ddd;">Libellé</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Montant (GNF)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">661</td><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Charges de personnel</td><td style="padding: 8px; border: 1px solid #ddd;">2 594 716 535</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">662</td><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Charges sociales</td><td style="padding: 8px; border: 1px solid #ddd;">1 040 920 880</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">663</td><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Charges d'allocations diverses</td><td style="padding: 8px; border: 1px solid #ddd;">408 059 872</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">668400</td><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Médecine du travail et pharmacie</td><td style="padding: 8px; border: 1px solid #ddd;">192 162 838</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">638300</td><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Réception</td><td style="padding: 8px; border: 1px solid #ddd;">799 395 517</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">625800</td><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Assurance expatriés</td><td style="padding: 8px; border: 1px solid #ddd;">118 055 919</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">622200</td><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Location résidence personnel de direction</td><td style="padding: 8px; border: 1px solid #ddd;">674 055 779</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">618120</td><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Voyage et déplacement avions</td><td style="padding: 8px; border: 1px solid #ddd;">1 982 953 948</td></tr>
                <tr style="background-color: var(--tulip-tree); color: white;"><td colspan="2" style="text-align: right; padding: 8px; border: 1px solid #ddd;"><strong>TOTAL RECONSTITUÉ</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>7 810 321 288</strong></td></tr>
                <tr><td colspan="2" style="text-align: right; padding: 8px; border: 1px solid #ddd;">TOTAL DÉCLARÉ</td><td style="padding: 8px; border: 1px solid #ddd;">4 043 697 287</td></tr>
                <tr style="background-color: #ffe0b2;"><td colspan="2" style="text-align: right; padding: 8px; border: 1px solid #ddd; color: var(--saddle);"><strong>Écart non déclaré</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>3 766 624 001</strong></td></tr>
            </tbody>
        </table>
        `,
        null
    ),

    // SLIDE 17: CAS PRATIQUE N°3 - RAPPELS ET PÉNALITÉS
    createSlide(
        "CAS PRATIQUE N°3 (Suite) : Rappels DGI",
        `
        <p>L'administration a déterminé les rappels comme suit :</p>
        <table style="width: 100%; font-size: 0.9em; text-align: right; border-collapse: collapse; margin-top: 15px;">
            <tbody>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">RTS théorique sur écart</td><td style="padding: 8px; border: 1px solid #ddd;">376 662 400</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">VF théorique sur écart</td><td style="padding: 8px; border: 1px solid #ddd;">225 997 440</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Pénalité RTS (40%)</td><td style="padding: 8px; border: 1px solid #ddd;">150 664 960</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Pénalité VF (40%)</td><td style="padding: 8px; border: 1px solid #ddd;">90 398 976</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Intérêts de retard RTS (1,5%)</td><td style="padding: 8px; border: 1px solid #ddd;">62 149 296</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">Intérêts de retard VF (1,5%)</td><td style="padding: 8px; border: 1px solid #ddd;">37 289 578</td></tr>
                <tr style="background-color: var(--saddle); color: white;"><td style="text-align: left; padding: 8px; border: 1px solid #ddd;"><strong>TOTAL RAPPEL RTS</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>589 476 656</strong></td></tr>
                <tr style="background-color: var(--saddle); color: white;"><td style="text-align: left; padding: 8px; border: 1px solid #ddd;"><strong>TOTAL RAPPEL VF</strong></td><td style="padding: 8px; border: 1px solid #ddd;"><strong>353 685 994</strong></td></tr>
            </tbody>
        </table>
        <h3>Travail Demandé</h3>
        <ol>
            <li><strong>Analyse :</strong> Identifier les comptes de charges entrant effectivement dans l’assiette de la RTS et du VF (soumis, exonéré ou non concerné).</li>
            <li><strong>Calcul :</strong> Reconstituer la base taxable, vérifier la cohérence des montants du rappel (RTS, VF) et des pénalités/intérêts de retard.</li>
            <li><strong>Discussion :</strong> Identifier les erreurs de l’administration et proposer les arguments de défense (avec pièces justificatives).</li>
        </ol>
        `,
        null
    ),
];
export default function Day2ExportPage() {
  return <DayExport dayNumber={2} slides={day2Slides} />;
}