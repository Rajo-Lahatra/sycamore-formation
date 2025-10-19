// src/app/day3/page.js
'use client';

import SlideShow from '../SlideShow';
import ContentWrapper from '../ContentWrapper';
import React from 'react';
import QandA from '../../components/QandA';

// Fonction d'aide pour générer une structure de slide uniforme
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

// --- Contenu Détaillé du Jour 3 : RNS et TVA ---

const slidesData = [
    // SLIDE 1: INTRODUCTION JOUR 3
    createSlide(
        "Jour 3 : Retenue sur les Revenus Non Salariaux (RNS) et TVA",
        `
        <div style="font-size: 1.1em;">
            <p><strong>3ème Partie : LA FISCALITÉ INDIRECTE ET LES RETENUES À LA SOURCE</strong></p>
            <p style="font-size: 1.2em; color: var(--fuel-yellow);"><strong>Objectif :</strong> Maîtriser le mécanisme de la RNS, de la TVA, et l'application du régime spécial minier.</p>
            <p><strong>Programme :</strong></p>
            <ul>
                <li><strong>CHAPITRE 2 : La Retenue sur les Revenus Non Salariaux (RNS)</strong></li>
                <ul>
                    <li>Définition, Assiette et Taux (CGI vs Conventions)</li>
                    <li>Application de la RNS au secteur minier</li>
                </ul>
                <li><strong>CHAPITRE 3 : La Taxe sur la Valeur Ajoutée (TVA)</strong></li>
                <ul>
                    <li>Mécanismes (Champ d'application, Assiette, Fait générateur)</li>
                    <li>Régime minier (Exonérations, Crédit de TVA)</li>
                </ul>
            </ul>
        </div>
        `,
        "Mercredi 22 octobre 2025"
    ),
    
    // -------------------------------------------------------------------------
    // CHAPITRE 2 : RNS
    // -------------------------------------------------------------------------

    // SLIDE 2: RNS - DÉFINITION
    createSlide(
        "Retenue sur les Revenus Non Salariaux (RNS) : Généralités",
        `
        <h3>Qu’est-ce que la RNS ?</h3>
        <p>La <strong>RNS</strong> est un prélèvement obligatoire perçu sur certains revenus générés en Guinée par des personnes physiques ou morales n’ayant pas leur <strong>résidence fiscale en Guinée</strong>, notamment les prestataires techniques étrangers (géologues, ingénieurs, consultants, etc.).</p>
        <p>Elle concerne les paiements effectués par les débiteurs établis en Guinée en contrepartie de prestations de services.</p>
        <h3>Rôle de l’entreprise minière</h3>
        <ul>
            <li><strong>Redevable réel :</strong> Le prestataire non-résident (il supporte l'impôt).</li>
            <li><strong>Redevable légal :</strong> Le débiteur établi en Guinée (<strong>Sycamore</strong>). Elle doit prélever l'impôt du montant brut lors du paiement et le reverser à l'Administration Fiscale.</li>
        </ul>
        `,
        "CHAPITRE 2 - RETENUE SUR LES REVENUS NON SALARIAUX"
    ),

    // SLIDE 3: RNS - PERSONNES & MATIÈRE IMPOSABLE
    createSlide(
        "RNS - Personnes et Matière Imposable",
        `
        <h3>Personne Imposable</h3>
        <ul>
            <li>Le prestataire de services non-résident (physique ou morale).</li>
        </ul>
        <h3>Matière Imposable</h3>
        <p>Sont soumises à la RNS les rémunérations perçues par le prestataire non-résident. Il s’agit principalement des :</p>
        <ul>
            <li><strong>Honoraires</strong> (études, expertises, conseils techniques).</li>
            <li><strong>Redevances</strong> (pour l'usage de licences, brevets, équipements).</li>
        </ul>
        <h3>Assiette de la RNS</h3>
        <p>La base d’imposition est le <strong>montant brut</strong> des sommes versées, hors TVA (si la TVA est auto-liquidée). En cas d'exonération de TVA, l'assiette est le montant brut.</p>
        `
    ),

    // SLIDE 4: RNS - Taux Standard et Conventions
    createSlide(
        "RNS - Taux applicables (CGI vs. Conventions)",
        `
        <h3>Taux Standard (Code Général des Impôts - CGI)</h3>
        <ul>
            <li>Le taux de droit commun (CGI) est de <strong>15%</strong> du montant brut.</li>
        </ul>
        <h3>Impact des Conventions Fiscales de Non Double Imposition (NDI)</h3>
        <p>Les Conventions de NDI prévoient souvent des taux réduits pour certains revenus afin d'éviter une double imposition. Sycamore doit appliquer le taux le plus favorable.</p>
        <table style="width: 100%; font-size: 0.85em; border-collapse: collapse; text-align: center; margin-top: 10px;">
            <thead>
                <tr style="background-color: var(--fuel-yellow);">
                    <th style="padding: 6px; border: 1px solid #ddd;">PAYS</th>
                    <th style="padding: 6px; border: 1px solid #ddd;">DIVIDENDES</th>
                    <th style="padding: 6px; border: 1px solid #ddd;">INTERETS</th>
                    <th style="padding: 6px; border: 1px solid #ddd;">REDEVANCES</th>
                    <th style="padding: 6px; border: 1px solid #ddd;">FRAIS DE SERVICES</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="text-align: left; padding: 6px; border: 1px solid #ddd;">Taux d’imposition (CGI)</td><td style="padding: 6px; border: 1px solid #ddd;">15%</td><td style="padding: 6px; border: 1px solid #ddd;">15%</td><td style="padding: 6px; border: 1px solid #ddd;">15%</td><td style="padding: 6px; border: 1px solid #ddd;">15%</td></tr>
                <tr><td style="text-align: left; padding: 6px; border: 1px solid #ddd;">Imposition en Guinée (résidents de <strong>France</strong>)</td><td style="padding: 6px; border: 1px solid #ddd;">15%</td><td style="padding: 6px; border: 1px solid #ddd;">10%</td><td style="padding: 6px; border: 1px solid #ddd;">10%</td><td style="padding: 6px; border: 1px solid #ddd;">0%</td></tr>
                <tr><td style="text-align: left; padding: 6px; border: 1px solid #ddd;">Imposition en Guinée (résidents du <strong>Maroc</strong>)</td><td style="padding: 6px; border: 1px solid #ddd;">5%</td><td style="padding: 6px; border: 1px solid #ddd;">10% (max)</td><td style="padding: 6px; border: 1px solid #ddd;">10%</td><td style="padding: 6px; border: 1px solid #ddd;">0%</td></tr>
                <tr style="background-color: #f0f0f0;"><td style="text-align: left; padding: 6px; border: 1px solid #ddd;">Imposition en Guinée (résidents des <strong>EAU</strong>)</td><td style="padding: 6px; border: 1px solid #ddd;">0%</td><td style="padding: 6px; border: 1px solid #ddd;">0%</td><td style="padding: 6px; border: 1px solid #ddd;">0%</td><td style="padding: 6px; border: 1px solid #ddd;">0%</td></tr>
            </tbody>
        </table>
        `
    ),

    // SLIDE 5: RNS - MODALITÉS
    createSlide(
        "RNS - Modalités et Échéance",
        `
        <h3>Déclaration Électronique</h3>
        <ul>
            <li>La RNS est déclarée via la plateforme <strong>"ETAX"</strong>.</li>
            <li>La déclaration doit être accompagnée du reversement des montants retenus.</li>
        </ul>
        <h3>Échéance</h3>
        <ul>
            <li>Déclaration et paiement : Au plus tard le <strong>10ème jour du mois suivant</strong> celui du paiement de la prestation.</li>
        </ul>
        <h3>Sanctions</h3>
        <ul>
            <li>Défaut de retenue/reversement : Majorations de <strong>40% à 80%</strong> du montant non versé, plus des intérêts de retard (1,5% par mois).</li>
        </ul>
        `
    ),
    
    // -------------------------------------------------------------------------
    // CHAPITRE 3 : TVA
    // -------------------------------------------------------------------------

    // SLIDE 6: TVA - PRINCIPES
    createSlide(
        "Taxe sur la Valeur Ajoutée (TVA) : Principes de Base",
        `
        <h3>Définition</h3>
        <p>La <strong>TVA</strong> est un impôt général sur la consommation. Elle est supportée par le consommateur final et est en principe neutre pour les entreprises.</p>
        <h3>Mécanisme (TVA nette à payer ou Crédit)</h3>
        <ul>
            <li><strong>TVA collectée :</strong> Impôt facturé par Sycamore à ses clients (sur les ventes locales).</li>
            <li><strong>TVA déductible :</strong> Impôt payé par Sycamore à ses fournisseurs (sur les achats locaux et l'auto-liquidation).</li>
            <li><strong>Taux Standard :</strong> Le taux normal est de <strong>18%</strong> en Guinée.</li>
        </ul>
        `
    ),

    // SLIDE 7: TVA - CHAMP D'APPLICATION ET RÉGIME MINIER
    createSlide(
        "TVA - Champ d'Application et Exonérations Minières",
        `
        <h3>Opérations Soumises à TVA</h3>
        <ul>
            <li>Les livraisons de biens et les prestations de services réalisées à titre onéreux en Guinée (y compris l'auto-liquidation).</li>
            <li>Les importations.</li>
        </ul>
        <h3>Régime Préférentiel Minier (Code Minier - Art. 169)</h3>
        <p>Les entreprises minières bénéficient d’une exonération de TVA sur :</p>
        <ul>
            <li>Les <strong>importations</strong> d'équipements, matériels et intrants destinés exclusivement aux opérations minières (pendant la période d’exonération).</li>
            <li>Les achats locaux de biens et services liés aux opérations de <strong>recherche et d'exploitation</strong> (pendant la période d’exonération).</li>
        </ul>
        `
    ),

    // SLIDE 8: TVA - FAIT GÉNÉRATEUR ET EXIGIBILITÉ
    createSlide(
        "TVA - Fait Générateur et Exigibilité",
        `
        <p>Ces concepts déterminent le moment où la TVA doit être prise en compte.</p>
        <h3>Fait Générateur (Naissance de la dette fiscale)</h3>
        <ul>
            <li><strong>Livraison de biens :</strong> Moment de la livraison (transfert de propriété).</li>
            <li><strong>Prestation de services :</strong> Exécution du service.</li>
            <li><strong>Importation :</strong> Déclaration en douane.</li>
        </ul>
        <h3>Exigibilité (Droit de l'Administration de réclamer le paiement)</h3>
        <ul>
            <li><strong>Ventes de biens :</strong> Livraison.</li>
            <li><strong>Prestations de services :</strong> Encaissement du prix ou des acomptes (TVA sur les encaissements).</li>
            <li><strong>Importations :</strong> Enlèvement des marchandises.</li>
        </ul>
        `
    ),

    // SLIDE 9: TVA - Droit à Déduction et Auto-liquidation
    createSlide(
        "TVA - Droit à Déduction et Auto-liquidation",
        `
        <h3>Conditions de Déduction</h3>
        <p>La TVA déductible doit :</p>
        <ul>
            <li>Être facturée par un fournisseur assujetti.</li>
            <li>Concerner des biens ou services utilisés pour les besoins de l'exploitation.</li>
        </ul>
        <h3>Auto-liquidation (Achats de services non-résidents)</h3>
        <p>Sycamore doit appliquer le mécanisme d’<strong>auto-liquidation</strong> pour les services achetés à des prestataires étrangers (non immatriculés à la TVA en Guinée).</p>
        <ul>
            <li>Sycamore déclare la TVA comme <strong>collectée</strong> (due à l'État).</li>
            <li>Sycamore déclare immédiatement la même TVA comme <strong>déductible</strong> (récupérable).</li>
            <li>L'opération est neutre, sauf si le droit à déduction est limité par un prorata.</li>
        </ul>
        `
    ),

    // SLIDE 10: TVA - Crédit de TVA
    createSlide(
        "TVA - Gestion du Crédit de TVA",
        `
        <h3>Définition du Crédit de TVA</h3>
        <p>Un Crédit de TVA survient lorsque la **TVA Déductible est supérieure à la TVA Collectée** (situation fréquente en phase d'investissement ou d'exploitation exportatrice).</p>
        <h3>Régime de Remboursement</h3>
        <ul>
            <li>Le Crédit de TVA est en principe reportable sur les mois suivants.</li>
            <li>Les entreprises minières, du fait de leurs exportations exonérées (avec droit à déduction), sont autorisées à demander le <strong>remboursement</strong> du Crédit de TVA accumulé.</li>
            <li>Un dossier de remboursement doit être déposé selon un formalisme strict (attestations, factures, déclaration, etc.).</li>
        </ul>
        `
    ),

    // SLIDE 11: TVA - MODALITÉS ET SANCTIONS
    createSlide(
        "TVA - Modalités de Déclaration et Sanctions",
        `
        <h3>Échéance</h3>
        <ul>
            <li>Déclaration et paiement : Au plus tard le <strong>10ème jour du mois suivant</strong> la période d'imposition (mois civil).</li>
        </ul>
        <h3>Sanctions Spécifiques à la TVA (Exemples)</h3>
        <ul>
            <li>Défaut de déclaration/paiement : Pénalités de <strong>10% à 40%</strong> du montant, plus des intérêts de retard (1,5% par mois).</li>
            <li>Facture non conforme : Pénalité de <strong>80%</strong>.</li>
            <li>Défaut de facturation : <strong>30%</strong> du montant hors taxes de la transaction.</li>
            <li>Facture fictive/fausse : <strong>70%</strong> à <strong>100%</strong> du montant hors taxes.</li>
        </ul>
        `
    ),

    // SLIDE 12: CAS PRATIQUE N°1 - RNS
    createSlide(
        "CAS PRATIQUE N°1 : RNS - Application des Conventions",
        `
        <h3>Contexte</h3>
        <p>Sycamore a procédé à trois paiements de services à des prestataires non-résidents au cours du mois de septembre. Les règlements ont été effectués en octobre, sans application de RNS.</p>
        <table style="width: 100%; text-align: right; border-collapse: collapse; margin-top: 15px;">
            <thead>
                <tr style="background-color: var(--french-gray);">
                    <th style="width: 30%; text-align: left; padding: 8px; border: 1px solid #ddd;">Prestataire</th>
                    <th style="width: 20%; padding: 8px; border: 1px solid #ddd;">Pays de Résidence</th>
                    <th style="width: 30%; padding: 8px; border: 1px solid #ddd;">Nature du Service (HT)</th>
                    <th style="width: 20%; padding: 8px; border: 1px solid #ddd;">Montant Brut (GNF)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">A. Consulting</td><td style="padding: 8px; border: 1px solid #ddd;">France</td><td style="padding: 8px; border: 1px solid #ddd;">Conseil en géologie</td><td style="padding: 8px; border: 1px solid #ddd;">500 000 000</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">B. Tech Sarl</td><td style="padding: 8px; border: 1px solid #ddd;">Émirats Arabes Unis (EAU)</td><td style="padding: 8px; border: 1px solid #ddd;">Location de matériel technique</td><td style="padding: 8px; border: 1px solid #ddd;">350 000 000</td></tr>
                <tr><td style="text-align: left; padding: 8px; border: 1px solid #ddd;">C. Expert Inc.</td><td style="padding: 8px; border: 1px solid #ddd;">Royaume-Uni (pas de convention)</td><td style="padding: 8px; border: 1px solid #ddd;">Audit financier</td><td style="padding: 8px; border: 1px solid #ddd;">1 000 000 000</td></tr>
            </tbody>
        </table>
        <h3>Travail demandé</h3>
        <ol>
            <li>Déterminer si la RNS est due pour chaque paiement en appliquant la Convention de NDI (si applicable).</li>
            <li>Calculer le montant total de la RNS à régulariser.</li>
            <li>Identifier les risques de pénalités de retard (octobre : échéance 10 novembre).</li>
        </ol>
        `,
        null
    ),

    // SLIDE 13: CAS PRATIQUE N°2 - TVA
    createSlide(
        "CAS PRATIQUE N°2 : TVA - Crédit et Auto-liquidation",
        `
        <h3>Contexte</h3>
        <p>Sycamore est en phase d'exploitation, générant 98% de son CA par l'exportation de bauxite (opérations exonérées avec droit à déduction). La comptabilité du mois a révélé les éléments TVA suivants (montants en GNF) :</p>
        <table style="width: 60%; font-size: 0.9em; text-align: right; border-collapse: collapse; margin-top: 10px;">
            <tbody>
                <tr><td style="text-align: left; padding: 6px; border: 1px solid #ddd;">TVA collectée sur ventes accessoires locales</td><td style="padding: 6px; border: 1px solid #ddd;">5 000 000</td></tr>
                <tr><td style="text-align: left; padding: 6px; border: 1px solid #ddd;">TVA sur achats de services locaux (non exonérés)</td><td style="padding: 6px; border: 1px solid #ddd;">45 000 000</td></tr>
                <tr><td style="text-align: left; padding: 6px; border: 1px solid #ddd;">TVA auto-liquidée sur service étranger (France, Conseil)</td><td style="padding: 6px; border: 1px solid #ddd;">30 000 000</td></tr>
                <tr style="background-color: #f0f0f0;"><td style="text-align: left; padding: 6px; border: 1px solid #ddd;"><strong>Crédit de TVA reporté du mois précédent</strong></td><td style="padding: 6px; border: 1px solid #ddd;"><strong>20 000 000</strong></td></tr>
            </tbody>
        </table>
        <h3>Travail demandé</h3>
        <ol>
            <li>Calculer la TVA due ou le Crédit de TVA pour le mois (en tenant compte de l'auto-liquidation).</li>
            <li>Justifier la déductibilité intégrale de la TVA (l'exportation minière est exonérée mais avec droit à déduction, donc pas de prorata défavorable).</li>
            <li>Rappeler les conditions pour une demande de remboursement du Crédit de TVA généré (pièces justificatives et délais).</li>
        </ol>
        `,
        null
    ),
];


export default function Day3Page() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleSlideChange = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  return (
    <ContentWrapper title="Jour 3: TVA, PF, et Retenues à la Source" date="22 octobre 2025">
      <SlideShow slides={slides} onSlideChange={handleSlideChange} />
      <QandA dayNumber={3} currentSlide={currentSlide} />
    </ContentWrapper>
  );
}