// Fichier : src/app/day2/page.js

import SlideShow from '@/components/SlideShow';
import ContentWrapper from '@/app/ContentWrapper';
import React from 'react';

// Utiliser une fonction d'aide pour générer une structure de slide uniforme
const createSlide = (title, content, citation) => ({
    title,
    content: (
        <>
            <h2 className="slide-title">{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {citation && <p className="contact-info" style={{ textAlign: 'left', fontStyle: 'italic', fontSize: '0.9em' }}>{citation}</p>}
        </>
    )
});

// --- Contenu Détaillé du Jour 2 ---

const slidesData = [
    // SLIDE 1: INTRODUCTION JOUR 2
    createSlide(
        "Jour 2 : Fiscalité du Personnel et Retenues Non Salariales (RNS)",
        `
        <div style="font-size: 1.1em;">
            <p><strong>2ème Partie : OBLIGATIONS FISCALES DE LA SYCAMORE</strong></p>
            <p style="font-size: 1.2em; color: var(--fuel-yellow);"><strong>Objectif :</strong> Maîtriser les prélèvements fiscaux liés à l'emploi du personnel salarié et aux services de prestataires non-résidents dans le secteur minier.</p>
            <p><strong>Programme :</strong></p>
            <ul>
                <li><strong>CHAPITRE 1 : Fiscalité du Personnel</strong> (RTS, VF, TA / ONFPP)</li>
                <li><strong>CHAPITRE 2 : Retenue sur les Revenus Non Salariaux (RNS)</strong></li>
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
            [cite_start]<li>La <strong>RTS</strong> est un impôt cédulaire perçu sur les salaires et rémunérations octroyés au travailleur dans le cadre de l’exécution du contrat de travail. [cite: 97]</li>
        </ul>
        <h3>Qui supporte l'impôt ? Qui le déclare ?</h3>
        <ul>
            [cite_start]<li><strong>Redevable réel :</strong> Le travailleur (la RTS est une charge fiscale pour le salarié). [cite: 99]</li>
            <li><strong>Redevable légal :</strong> L’employeur. [cite_start]Il prélève l'impôt du salaire brut payable au salarié et le déclare à l’Administration Fiscale. [cite: 100]</li>
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
            [cite_start]<li>Toute personne percevant des revenus dans le cadre de l’exécution d’un contrat de travail (salariés, employés ou travailleurs). [cite: 104, 105]</li>
        </ul>
        <h3>Matière Imposable ("SALAIRES")</h3>
        [cite_start]<p>Sont soumis à la RTS les rémunérations perçues par le salarié en contrepartie de son travail. [cite: 108]</p>
        <ul>
            [cite_start]<li><strong>En ESPÈCE :</strong> Salaires, traitements, primes, indemnités, allocations. [cite: 110]</li>
            [cite_start]<li><strong>En NATURE :</strong> Concession gratuite d’un bien (véhicule, logement en camp) ou fourniture gratuite de produits/services (frais de scolarité, prime d’éloignement, etc.). [cite: 111, 112]</li>
        </ul>
        `
    ),

    // SLIDE 4: RTS - EXONÉRATIONS
    createSlide(
        "RTS - Exonérations Principales",
        `
        <p>Les rémunérations ci-après sont exemptées (Art. __) :</p>
        <ul>
            [cite_start]<li>Les <strong>allocations familiales</strong>. [cite: 116]</li>
            [cite_start]<li>Le <strong>remboursement des frais professionnels</strong>. [cite: 117]</li>
            [cite_start]<li>Les <strong>indemnités forfaitaires</strong> (logement, transport, panier et repas, cherté de vie, craie) dans une limite de <strong>25% du salaire brut</strong> versé à l’employé. [cite: 118]</li>
            [cite_start]<li>Les indemnités de licenciement et de départ à la retraite. [cite: 119]</li>
            [cite_start]<li>Les indemnités temporaires, prestations et rente viagères versées aux victimes d’accident de travail. [cite: 120]</li>
            [cite_start]<li>Les indemnités de stage (durée n’excédant pas 12 mois et limite de <strong>1 200 000 GNF</strong>). [cite: 121]</li>
        </ul>
        `
    ),

    // SLIDE 5: RTS - ASSIETTE
    createSlide(
        "RTS - Assiette : Le Revenu Net Imposable (RNI)",
        `
        [cite_start]<p>L’assiette ou base d’imposition est le <strong>Revenu Net Imposable (RNI)</strong>. [cite: 125] Il est obtenu en déduisant du Revenu Brut Imposable (RBI) :</p>
        <ul>
            [cite_start]<li>Les <strong>cotisations sociales</strong> supportées par le salarié (CNSS part salariale). [cite: 127]</li>
            [cite_start]<li>Les retenues faites par l’employeur en vue de la constitution de <strong>pensions de retraites</strong> en application d’un régime de prévoyance obligatoire prévu par la loi. [cite: 128]</li>
        </ul>
        <br/>
        <h3>Taux de RTS</h3>
        [cite_start]<p>La RTS donne lieu à l’application de taux progressifs par tranche du revenu imposable (RNI). [cite: 130, 132]</p>
        `
    ),

    // SLIDE 6: RTS - BARÈME DES TAUX
    createSlide(
        "RTS - Barème des Taux Progressifs",
        `
        <table>
            <thead>
                <tr>
                    <th style="width: 70%;">Tranche du salaire imposable (GNF)</th>
                    <th style="width: 30%;">Taux</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>0 à 1.000.000</td><td>0%</td></tr>
                <tr><td>1.000.001 à 3.000.000</td><td>5%</td></tr>
                <tr><td>3.000.001 à 5.000.000</td><td>8%</td></tr>
                <tr><td>5.000.001 à 10.000.000</td><td>10%</td></tr>
                <tr><td>10.000.001 à 20.000.000</td><td>15%</td></tr>
                <tr><td>Au-delà de 20.000.000</td><td>20%</td></tr>
            </tbody>
        </table>
        `,
        [cite_start]"La RTS est obtenue par application des taux aux tranches du revenu net imposable (RNI). [cite: 132, 134-147]"
    ),

    // SLIDE 7: RTS - MODALITÉS
    createSlide(
        "RTS - Modalités de Déclaration et Échéance",
        `
        <h3>Déclaration Électronique</h3>
        <ul>
            [cite_start]<li>La RTS est déclarée via la plateforme <strong>"ETAX"</strong>. [cite: 151]</li>
            [cite_start]<li>Le contribuable doit renseigner l'effectif, la base d’imposition globale et le montant global des retenues. [cite: 152]</li>
        </ul>
        <h3>Échéance</h3>
        <ul>
            [cite_start]<li>Déclaration et paiement : Au plus tard le <strong>10ème jour du mois suivant</strong> celui du paiement des salaires. [cite: 153]</li>
        </ul>
        <h3>Sanctions</h3>
        <ul>
            [cite_start]<li>Les sanctions applicables pour défaut de conformité ou paiement tardif sont présentées dans le tableau en annexe. [cite: 154]</li>
        </ul>
        `
    ),

    // SLIDE 8: VERSEMENT FORFAITAIRE (VF)
    createSlide(
        "2. Le Versement Forfaitaire (VF)",
        `
        <h3>Définition</h3>
        <ul>
            [cite_start]<li>Le <strong>VF</strong> est une taxe due par les entreprises employant du personnel salarié en Guinée, perçue en raison des salaires payés par l’employeur. [cite: 159, 160]</li>
        </ul>
        <h3>Personne Imposable</h3>
        <ul>
            [cite_start]<li>Le VF est dû, déclaré et payé par l’<strong>employeur</strong> établi en Guinée. [cite: 162]</li>
        </ul>
        <h3>Matière Imposable</h3>
        <ul>
            [cite_start]<li>Le VF est perçu sur les rémunérations en <strong>espèce et en nature</strong> (non exonérées) payées au salarié. [cite: 164]</li>
        </ul>
        `
    ),

    // SLIDE 9: VF - EXONÉRATIONS, ASSIETTE & TAUX
    createSlide(
        "VF - Exonérations, Assiette et Taux",
        `
        <h3>Exonérations</h3>
        <ul>
            [cite_start]<li>Les indemnités de stage (max 12 mois, limite 1 200 000 GNF). [cite: 168]</li>
            [cite_start]<li>Les salaires versés aux apprentis munis d’un contrat d’apprentissage. [cite: 169]</li>
            [cite_start]<li>Les rémunérations versées aux handicapés. [cite: 170]</li>
        </ul>
        <h3>Assiette (Base d’Imposition)</h3>
        <ul>
            [cite_start]<li>Ensemble des salaires (nature et espèce), <strong>déduction faite du montant des prestations familiales</strong> (évaluées à 6% de l'assiette des cotisations de sécurité sociale). [cite: 172, 173]</li>
        </ul>
        <h3>Taux d’Imposition</h3>
        <ul>
            [cite_start]<li>Le VF est perçu au taux unique de <strong>6%</strong> sur la base d’imposition déterminée. [cite: 175]</li>
        </ul>
        `
    ),
    
    // SLIDE 10: VF - MODALITÉS
    createSlide(
        "VF - Modalités de Déclaration et Échéance",
        `
        <h3>Déclaration Électronique</h3>
        <ul>
            [cite_start]<li>Déclaration via la plateforme <strong>"ETAX"</strong> (renseigner effectif, base d’imposition globale et montant total du VF). [cite: 181, 182]</li>
        </ul>
        <h3>Échéance</h3>
        <ul>
            [cite_start]<li>Déclaration et paiement : Au plus tard le <strong>10ème jour du mois suivant</strong> celui du paiement des salaires. [cite: 183]</li>
        </ul>
        <h3>Sanctions</h3>
        <ul>
            [cite_start]<li>Les sanctions applicables sont présentées dans le tableau en annexe. [cite: 184]</li>
        </ul>
        `
    ),

    // SLIDE 11: TA/ONFPP - DÉFINITION
    createSlide(
        "3. Taxe d’Apprentissage (TA) et Contribution ONFPP",
        `
        <h3>Définition et Champ d'Application (TA)</h3>
        <ul>
            [cite_start]<li>La <strong>Taxe d’apprentissage (TA)</strong> est due par les entreprises employant du personnel salarié, dont l’effectif est <strong>inférieur à 30 employés</strong>. [cite: 189]</li>
        </ul>
        <h3>Personnes Imposables (TA)</h3>
        <ul>
            [cite_start]<li>La TA est due, déclarée et payée par l’<strong>employeur</strong> établi en Guinée. [cite: 191]</li>
        </ul>
        <h3>Matière Imposable (TA)</h3>
        <ul>
            [cite_start]<li>La TA est perçue sur les rémunérations en <strong>espèce et en nature</strong> (non exonérées) payées au salarié. [cite: 193]</li>
        </ul>
        `
    ),

    // SLIDE 12: TA/ONFPP - Taux et Exonérations
    createSlide(
        "TA / ONFPP - Taux et Spécificités",
        `
        <h3>Exonérations (TA)</h3>
        <ul>
            [cite_start]<li>Les entreprises soumises à l’<strong>ONFPP</strong> (employant au moins 30 employés). [cite: 197]</li>
            [cite_start]<li>Les indemnités de stage (max 12 mois, limite 1 200 000 GNF). [cite: 198]</li>
            [cite_start]<li>Les salaires versés aux apprentis munis d’un contrat d’apprentissage. [cite: 199]</li>
            [cite_start]<li>Les rémunérations versées aux handicapés. [cite: 200]</li>
        </ul>
        <h3>Assiette et Taux (TA)</h3>
        <ul>
            [cite_start]<li>Assiette : Montant du <strong>salaire brut</strong>. [cite: 202]</li>
            [cite_start]<li>Taux d’Imposition : <strong>3%</strong>. [cite: 204]</li>
        </ul>
        <h3>Précision importante sur l'ONFPP</h3>
        <ul>
            [cite_start]<li>Les entreprises dont l'effectif est <strong>supérieur ou égal à 30 employés</strong> sont soumises à l’<strong>ONFPP</strong>. [cite: 215]</li>
            [cite_start]<li><strong>Taux ONFPP :</strong> <strong>1,5%</strong> de la masse salariale globale. [cite: 216]</li>
            [cite_start]<li><strong>Échéance ONFPP :</strong> Au plus tard le <strong>20 de chaque mois</strong>. [cite: 216]</li>
        </ul>
        `
    ),

    // SLIDE 13: TA - MODALITÉS
    createSlide(
        "TA - Modalités de Déclaration et Échéance",
        `
        <h3>Déclaration Électronique</h3>
        <ul>
            [cite_start]<li>Déclaration via la plateforme <strong>"ETAX"</strong> (renseigner la base d’imposition et le montant de la TA). [cite: 211, 212]</li>
        </ul>
        <h3>Échéance</h3>
        <ul>
            [cite_start]<li>Déclaration et paiement : Au plus tard le <strong>15 février</strong> de chaque année (déclaration annuelle). [cite: 213]</li>
        </ul>
        <h3>Sanctions</h3>
        <ul>
            [cite_start]<li>Les sanctions applicables pour défaut de conformité ou paiement tardif sont présentées dans le tableau en annexe. [cite: 214]</li>
        </ul>
        `
    ),

    // SLIDE 14: CAS PRATIQUE N°1 - ÉNONCÉ
    createSlide(
        "CAS PRATIQUE N°1 : Régularisation Taxes Salaires",
        `
        <h3>Contexte</h3>
        [cite_start]<p>L’entreprise <strong>SYCAMORE Guinée</strong> dispose d’un effectif de <strong>250 employés</strong>. Les salaires du mois de septembre, payés le 28 du mois, ont fait l’objet de déclaration au 10 octobre. Il a été omis 5 salariés dont les impôts et taxes sur les salaires perçus n’ont pas été calculés et payés. [cite: 221, 222]</p>
        <h3>Travail demandé</h3>
        [cite_start]<p>Procéder au calcul des impôts et taxes (RTS, VF, ONFPP) sur les salaires perçus par les 5 employés et déterminer le risque en termes de pénalisation. [cite: 223]</p>
        <p><strong>Rémunérations perçues :</strong></p>
        <table style="width: 100%; text-align: right;">
            <thead>
                <tr>
                    <th style="text-align: left;">Employé</th>
                    <th>Salaire de Base</th>
                    <th>Prime transport</th>
                    <th>Indemnité cherté de vie</th>
                    <th>Loyer appartement</th>
                    <th>Prime de Fonction</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="text-align: left;">Employé 1</td><td>4 200 000</td><td>2 000 000</td><td>3 600 000</td><td>3 000 000</td><td>1 500 000</td></tr>
                <tr><td style="text-align: left;">Employé 2</td><td>4 000 000</td><td>1 000 000</td><td>1 500 000</td><td>2 000 000</td><td>1 800 000</td></tr>
                <tr><td style="text-align: left;">Employé 3</td><td>3 600 000</td><td>1 100 000</td><td>1 000 000</td><td>-</td><td>2 000 000</td></tr>
                <tr><td style="text-align: left;">Employé 4</td><td>8 500 000</td><td>2 100 000</td><td>3 600 000</td><td>4 000 000</td><td>6 000 000</td></tr>
                <tr><td style="text-align: left;">Employé 5</td><td>1 000 000</td><td>200 000</td><td>150 000</td><td>-</td><td>-</td></tr>
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
        <p><strong>WASSOLON Technology Sarl</strong> (Fintech, 4 salariés) effectue la paie pour la première fois. [cite_start]En tant que responsable financier, il vous est demandé de valider les calculs d’impôts et taxes sur salaires effectués par le RH. [cite: 262, 263, 264]</p>
        <p><strong>Calculs du RH à valider :</strong></p>
        <table style="width: 100%; text-align: right; font-size: 0.85em;">
            <thead>
                <tr>
                    <th style="text-align: left;">Salarié</th>
                    <th>Salaire de Base</th>
                    <th>Prime transport</th>
                    <th>Ind cherté de vie</th>
                    <th>Loyer appartement</th>
                    <th>Prime de Fonction</th>
                    <th>Salaire Brut</th>
                    <th>RTS</th>
                    <th>VF</th>
                    <th>ONFPP</th>
                    <th>Salaire Net</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="text-align: left;">Salarié 1</td><td>3 000 000</td><td>2 000 000</td><td>1 300 000</td><td>2 000 000</td><td>-</td><td>8 300 000</td><td>250 000</td><td>489 000</td><td>124 500</td><td>7 925 000</td></tr>
                <tr><td style="text-align: left;">Salarié 2</td><td>8 200 000</td><td>800 000</td><td>900 000</td><td>1 000 000</td><td>-</td><td>10 900 000</td><td>567 500</td><td>645 000</td><td>163 500</td><td>10 207 500</td></tr>
                <tr><td style="text-align: left;">Salarié 3</td><td>3 600 000</td><td>1 100 000</td><td>1 000 000</td><td>-</td><td>2 000 000</td><td>7 700 000</td><td>325 000</td><td>453 000</td><td>115 500</td><td>7 250 000</td></tr>
                <tr><td style="text-align: left;">Salarié 5</td><td>1 000 000</td><td>200 000</td><td>150 000</td><td>-</td><td>-</td><td>1 350 000</td><td>14 125</td><td>76 140</td><td>20 250</td><td>1 268 375</td></tr>
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
        <table style="width: 100%; font-size: 0.9em; text-align: right;">
            <thead>
                <tr>
                    <th style="text-align: left;">N° Compte</th>
                    <th style="text-align: left;">Libellé</th>
                    <th>Montant (GNF)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="text-align: left;">661</td><td style="text-align: left;">Charges de personnel</td><td>2 594 716 535</td></tr>
                <tr><td style="text-align: left;">662</td><td style="text-align: left;">Charges sociales</td><td>1 040 920 880</td></tr>
                <tr><td style="text-align: left;">663</td><td style="text-align: left;">Charges d'allocations diverses</td><td>408 059 872</td></tr>
                <tr><td style="text-align: left;">668400</td><td style="text-align: left;">Médecine du travail et pharmacie</td><td>192 162 838</td></tr>
                <tr><td style="text-align: left;">638300</td><td style="text-align: left;">Réception</td><td>799 395 517</td></tr>
                <tr><td style="text-align: left;">625800</td><td style="text-align: left;">Assurance expatriés</td><td>118 055 919</td></tr>
                <tr><td style="text-align: left;">622200</td><td style="text-align: left;">Location résidence personnel de direction</td><td>674 055 779</td></tr>
                <tr><td style="text-align: left;">618120</td><td style="text-align: left;">Voyage et déplacement avions</td><td>1 982 953 948</td></tr>
                <tr><td colspan="2" style="text-align: right;"><strong>TOTAL RECONSTITUÉ</strong></td><td><strong>7 810 321 288</strong></td></tr>
                <tr><td colspan="2" style="text-align: right;">TOTAL DÉCLARÉ</td><td>4 043 697 287</td></tr>
                <tr><td colspan="2" style="text-align: right; color: var(--saddle);"><strong>Écart non déclaré</strong></td><td><strong>3 766 624 001</strong></td></tr>
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
        <table style="width: 100%; font-size: 0.9em; text-align: right;">
            <tbody>
                <tr><td style="text-align: left;">RTS théorique sur écart</td><td>376 662 400</td></tr>
                <tr><td style="text-align: left;">VF théorique sur écart</td><td>225 997 440</td></tr>
                <tr><td style="text-align: left;">Pénalité RTS (40%)</td><td>150 664 960</td></tr>
                <tr><td style="text-align: left;">Pénalité VF (40%)</td><td>90 398 976</td></tr>
                <tr><td style="text-align: left;">Intérêts de retard RTS (1,5%)</td><td>62 149 296</td></tr>
                <tr><td style="text-align: left;">Intérêts de retard VF (1,5%)</td><td>37 289 578</td></tr>
                <tr><td style="text-align: left; color: var(--saddle);"><strong>TOTAL RAPPEL RTS</strong></td><td><strong>589 476 656</strong></td></tr>
                <tr><td style="text-align: left; color: var(--saddle);"><strong>TOTAL RAPPEL VF</strong></td><td><strong>353 685 994</strong></td></tr>
            </tbody>
        </table>
        <h3>Travail Demandé</h3>
        <ol>
            [cite_start]<li><strong>Analyse :</strong> Identifier les comptes de charges entrant effectivement dans l’assiette de la RTS et du VF (soumis, exonéré ou non concerné). [cite: 55, 56]</li>
            [cite_start]<li><strong>Calcul :</strong> Reconstituer la base taxable, vérifier la cohérence des montants du rappel (RTS, VF) et des pénalités/intérêts de retard. [cite: 57, 58, 59]</li>
            [cite_start]<li><strong>Discussion :</strong> Identifier les erreurs de l’administration et proposer les arguments de défense (avec pièces justificatives). [cite: 60, 61, 62]</li>
        </ol>
        `,
        null
    ),

    // SLIDE 18: RNS - DÉFINITION
    createSlide(
        "CHAPITRE 2 : Retenue sur les Revenus Non Salariaux (RNS)",
        `
        <h3>Définition</h3>
        <ul>
            [cite_start]<li>La <strong>RNS</strong> est un prélèvement obligatoire perçu sur certains revenus générés en Guinée par des personnes physiques ou morales <strong>n’ayant pas leur résidence fiscale en Guinée</strong> (prestataires techniques étrangers : géologues, ingénieurs, consultants, etc.). [cite: 64, 80]</li>
            [cite_start]<li>Ces revenus sont des paiements effectués par les débiteurs établis en Guinée en contrepartie de prestations de services. [cite: 65]</li>
        </ul>
        <h3>Responsabilité de Sycamore</h3>
        <ul>
            [cite_start]<li><strong>Redevable réel :</strong> Le prestataire non-résident. [cite: 66]</li>
            <li><strong>Redevable légal :</strong> Le débiteur établi en Guinée (**Sycamore**). [cite_start]La société prélève l'impôt lors du paiement de la prestation et le reverse à l'Administration. [cite: 67, 82]</li>
            [cite_start]<li>En cas de non-prélèvement, Sycamore supporte la charge fiscale et les pénalités. [cite: 83]</li>
        </ul>
        `
    ),

    // SLIDE 19: RNS - MATIÈRE, ASSIETTE & TAUX
    createSlide(
        "RNS - Matière Imposable, Assiette et Taux",
        `
        <h3>Personne Imposable</h3>
        <ul>
            [cite_start]<li>Le prestataire de services non-résident. [cite: 68]</li>
        </ul>
        <h3>Matière Imposable</h3>
        <ul>
            [cite_start]<li>Revenu perçu en contrepartie de la prestation de services (honoraires ou redevances). [cite: 69, 70]</li>
        </ul>
        <h3>Assiette et Taux</h3>
        <ul>
            [cite_start]<li>Assiette : Montant <strong>brut (Hors TVA)</strong> de la prestation. [cite: 71]</li>
            [cite_start]<li>Taux standard : <strong>15%</strong>. [cite: 71, 80]</li>
            [cite_start]<li>Taux réduit si une Convention de non-double imposition est applicable (ex. France, Émirats, etc.). [cite: 81]</li>
        </ul>
        `
    ),

    // SLIDE 20: RNS - MODALITÉS
    createSlide(
        "RNS - Modalités de Déclaration et Échéance",
        `
        <h3>Déclaration Électronique</h3>
        <ul>
            [cite_start]<li>Déclaration via la plateforme <strong>"ETAX"</strong>, avec les annexes relatives aux transactions ayant fait l’objet de RNS. [cite: 72]</li>
        </ul>
        <h3>Échéance</h3>
        <ul>
            [cite_start]<li>Déclaration et paiement : Au plus tard le <strong>15 du mois suivant</strong> le paiement du service. [cite: 72]</li>
        </ul>
        <h3>Sanctions</h3>
        <ul>
            [cite_start]<li>Les sanctions du défaut de déclaration et paiement, ou tardif sont présentées dans le tableau en annexe. [cite: 73]</li>
        </ul>
        `
    ),

    // SLIDE 21: RNS - IMPACT DES CONVENTIONS DE NON DOUBLE IMPOSITION
    createSlide(
        "RNS - Impact des Conventions de Non Double Imposition (CDI)",
        `
        <h3>Qu'est-ce qu'une CDI ?</h3>
        <ul>
            [cite_start]<li>Accord bilatéral visant à éliminer la <strong>double imposition</strong> des revenus des résidents des États signataires. [cite: 75]</li>
            [cite_start]<li>L’accord précise le type de revenu et l’État ayant prérogative d’imposition. [cite: 76]</li>
        </ul>
        <h3>Impact en Guinée</h3>
        <ul>
            [cite_start]<li>La Guinée est signataire de 3 traités de non double imposition qui limitent l’imposition de certains revenus non salariaux (revenus de prestations et redevances). [cite: 77]</li>
            <li>Il est essentiel de vérifier l'existence d'une CDI avec le pays du prestataire pour appliquer le taux correct.</li>
        </ul>
        `
    ),

    // SLIDE 22: RNS - TABLEAU CDI
    createSlide(
        "CDI - Exemples d'Imposition en Guinée (RNS)",
        `
        <table style="width: 100%; text-align: center;">
            <thead>
                <tr>
                    <th style="text-align: left;">PAYS</th>
                    <th>DIVIDENDES</th>
                    <th>INTERETS</th>
                    <th>REDEVANCES</th>
                    <th>FRAIS DE SERVICES</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="text-align: left;"><strong>Taux d’imposition (CGI)</strong></td>
                    <td>15%</td>
                    <td>15%</td>
                    <td>15%</td>
                    <td>15%</td>
                </tr>
                <tr style="background-color: #f0f0f0;">
                    <td style="text-align: left;"><strong>Résidents de France</strong></td>
                    <td>15%</td>
                    <td>10%</td>
                    <td>10%</td>
                    <td><strong>0%</strong></td>
                </tr>
                <tr>
                    <td style="text-align: left;"><strong>Résidents du Maroc</strong></td>
                    <td>5%</td>
                    <td>Dans la limite de 10%</td>
                    <td>10%</td>
                    <td><strong>0%</strong></td>
                </tr>
                <tr style="background-color: #f0f0f0;">
                    <td style="text-align: left;"><strong>Résidents des Emirats Arabes Unis</strong></td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td><strong>0%</strong></td>
                </tr>
            </tbody>
        </table>
        `,
        [cite_start]
    ),
];


export default function Day2Page() {
    return (
        <ContentWrapper
            title="OBLIGATIONS FISCALES : Personnel & Retenues Non Salariales (RNS)"
            date="Mardi 21 octobre 2025"
        >
            <SlideShow slides={slidesData} />
        </ContentWrapper>
    );
}