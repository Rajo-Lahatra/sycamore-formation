// src/app/page.js

import { createClient } from '@/lib/supabase/client';
import { redirect } from 'next/navigation';
import LogoutButton from './LogoutButton';

export default async function HomePage() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  // Rediriger vers /login si pas connecté
  if (!session) {
    redirect('/login');
  }

  // Fonction pour générer le lien de contenu
  const ContentButton = ({ dayNumber }) => (
    <a href={`/day${dayNumber}`} className="content-button">
      Accéder Contenu
    </a>
  );
    
  return (
    <>
      {/* Bouton de déconnexion en position fixed */}
      <div style={{ 
        position: 'fixed', 
        top: '20px', 
        right: '20px', 
        zIndex: 1000 
      }}>
        <LogoutButton />
      </div>

      <header>
        <div className="logo-container">
          <img 
            src="/logo-jm.png" 
            alt="Logo JM Consulting" 
            className="logo jm-logo" 
          />
          <img 
            src="/logo-sycamore.png" 
            alt="Logo Sycamore Mine Guinée SAU" 
            className="logo sycamore-logo" 
          />
        </div>

        <h1>PLANNING DÉTAILLÉ DE LA FORMATION</h1>
        <p>Fiscalité Minière Guinéenne</p>
        <p>Pour <strong>Sycamore Mine Guinée SAU</strong> | Du 20 au 24 octobre 2025</p>
        
        {/* Message de bienvenue avec l'email de l'utilisateur */}
        <div style={{ 
          marginTop: '10px', 
          padding: '10px', 
          backgroundColor: '#f0f8ff', 
          borderRadius: '5px',
          fontSize: '0.9em'
        }}>
          <strong>Connecté en tant que :</strong> {session.user.email}
        </div>
      </header>

      <div className="container">
        
        <section id="apercu">
            <h2>Aperçu Thématique de la Formation</h2>
            {/* Le contenu de la section Aperçu reste inchangé */}
            <ul>
                <li><strong>Jour 1 : Introduction & Cadre Fiscal Minier</strong> (4h) - Les règles du jeu et le double encadrement légal (Code Minier / CGI).</li>
                <li><strong>Jour 2 : Fiscalité du Personnel (RTS)</strong> (3h) - Maîtriser le calcul de la paie et les obligations déclaratives.</li>
                <li><strong>Jour 3 : TVA, PF, RNS</strong> (3h) - Focus sur les impôts indirects et les retenues à la source.</li>
                <li><strong>Jour 4 : IS & IMF</strong> (3h) - Base imposable, charges déductibles, amortissements miniers et spécificités sectorielles.</li>
                <li><strong>Jour 5 : Remboursement TVA & Contrôle Fiscal</strong> (3h) - Sécuriser les droits de l'entreprise et gérer le risque fiscal.</li>
            </ul>
        </section>

        <section id="programme-detaille">
          <h2>Programme Jour par Jour</h2>

          {/* Jour 1 */}
          <details>
            <summary>Jour 1 : Lundi 20 octobre 2025 - Poser les bases et contextualiser la fiscalité minière.</summary>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Horaire</th>
                  <th>Thème / Activité</th>
                  <th>Méthode</th>
                  <th>Contenu</th> {/* NOUVEAU TITRE DE COLONNE */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09h00 – 09h30</td>
                  <td>Ouverture et présentation des objectifs de la formation</td>
                  <td>Exposé + échanges</td>
                  <td rowSpan="4"><ContentButton dayNumber={1} /></td> {/* BOUTON */}
                </tr>
                <tr>
                  <td>09h30 – 10h15</td>
                  <td>
                    Introduction générale à la fiscalité : principes, distinction impôt/taxe/redevance, système déclaratif
                  </td>
                  <td>Présentation interactive</td>
                </tr>
                <tr>
                  <td>10h15 – 11h15</td>
                  <td>
                    <strong>Cadre légal guinéen et fiscalité minière</strong> : Code Minier vs CGI, conventions minières,
                    redevances spécifiques (RMP, Superficiaire)
                  </td>
                  <td>Présentation + Q/R</td>
                </tr>
                <tr>
                  <td>11h30 – 12h30</td>
                  <td>Identification des obligations fiscales de Sycamore (Calendrier, échéances)</td>
                  <td>Discussion</td>
                </tr>
                
                <tr>
                  <td className="table-break" colSpan="4"> {/* COLSPAN AJUSTÉ À 4 */}
                    11h15 – 11h30 : PAUSE
                  </td>
                </tr>
                <tr>
                  <td>12h30 – 13h00</td>
                  <td>Synthèse et conclusion du jour</td>
                  <td>Discussion ouverte</td>
                  <td></td> {/* LAISSER VIDE SI LE BOUTON EST DANS LE rowspan précédent */}
                </tr>
              </tbody>
            </table>
          </details>

          {/* Jour 2 */}
          <details>
            <summary>Jour 2 : Mardi 21 octobre 2025 - Maîtriser la fiscalité du personnel (RTS).</summary>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Horaire</th>
                  <th>Thème / Activité</th>
                  <th>Méthode</th>
                  <th>Contenu</th> {/* NOUVEAU TITRE DE COLONNE */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09h00 – 10h00</td>
                  <td>
                    <strong>RTS (Impôt sur les salaires)</strong> : calcul, assiette (salaire brut/net), taux progressifs,
                    cotisations sociales, <strong>Versement Forfaitaire (VF)</strong> (6%)
                  </td>
                  <td>Exposé détaillé</td>
                  <td rowSpan="3"><ContentButton dayNumber={2} /></td> {/* BOUTON */}
                </tr>
                <tr>
                  <td>10h00 – 10h45</td>
                  <td>Cas pratiques RTS (calcul de la paie nette)</td>
                  <td>Exercices individuels + correction</td>
                </tr>
                <tr>
                  <td>11h00 – 12h00</td>
                  <td>Obligations déclaratives et paiement : Délais (mensuels), modalités, pénalités de retard ou défaut.</td>
                  <td>Exposé + échanges</td>
                </tr>
                <tr>
                  <td className="table-break" colSpan="4"> {/* COLSPAN AJUSTÉ À 4 */}
                    10h45 – 11h00 : PAUSE
                  </td>
                </tr>
              </tbody>
            </table>
          </details>

          {/* Jour 3 */}
          <details>
            <summary>Jour 3 : Mercredi 22 octobre 2025 - TVA, PF, et Retenues à la Source (RNS).</summary>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Horaire</th>
                  <th>Thème / Activité</th>
                  <th>Méthode</th>
                  <th>Contenu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09h00 – 09h45</td>
                  <td>
                    <strong>RNS et PF</strong> : mécanisme, taux (Honoraires, Location, Services), responsabilités du
                    précompteur et risques
                  </td>
                  <td>Exposé + échanges</td>
                  <td rowSpan="3"><ContentButton dayNumber={3} /></td>
                </tr>
                <tr>
                  <td>09h45 – 10h30</td>
                  <td>
                    <strong>TVA minière</strong> : assiette, déduction, prorata, auto-liquidation, mécanisme du{' '}
                    <strong>précompte TVA</strong> (50%)
                  </td>
                  <td>Présentation détaillée</td>
                </tr>
                <tr>
                  <td>10h45 – 12h00</td>
                  <td>Cas pratiques TVA (Sycamore & Auritrans) : Application du précompte et calcul de la déclaration mensuelle</td>
                  <td>Exercices + corrections collectives</td>
                </tr>
                <tr>
                  <td className="table-break" colSpan="4">
                    10h30 – 10h45 : PAUSE
                  </td>
                </tr>
              </tbody>
            </table>
          </details>

          {/* Jour 4 */}
          <details>
            <summary>Jour 4 : Jeudi 23 octobre 2025 - Maîtriser l'IS, l'IMF et le traitement fiscal des charges minières.</summary>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Horaire</th>
                  <th>Thème / Activité</th>
                  <th>Méthode</th>
                  <th>Contenu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09h00 – 09h45</td>
                  <td>
                    <strong>IS (Impôt sur les Sociétés)</strong> : base imposable (résultat fiscal), charges déductibles,
                    amortissements miniers, <strong>IMF (Impôt Minimum Forfaitaire)</strong>
                  </td>
                  <td>Exposé technique</td>
                  <td rowSpan="3"><ContentButton dayNumber={4} /></td>
                </tr>
                <tr>
                  <td>09h45 – 10h45</td>
                  <td>Cas pratiques IS (MC Lenon Foster & Logistic de Boffa) : Détermination du résultat fiscal et calculs</td>
                  <td>Calculs et discussion</td>
                </tr>
                <tr>
                  <td>11h00 – 12h00</td>
                  <td>
                    Discussion critique sur les spécificités minières (Report des déficits, Amortissements accélérés,
                    Déductibilité des Redevances minières)
                  </td>
                  <td>Débat guidé</td>
                </tr>
                <tr>
                  <td className="table-break" colSpan="4">
                    10h45 – 11h00 : PAUSE
                  </td>
                </tr>
              </tbody>
            </table>
          </details>

          {/* Jour 5 */}
          <details>
            <summary>Jour 5 : Vendredi 24 octobre 2025 - Renforcer les compétences pratiques et la gestion du risque fiscal.</summary>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Horaire</th>
                  <th>Thème / Activité</th>
                  <th>Méthode</th>
                  <th>Contenu</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09h00 – 10h00</td>
                  <td>
                    <strong>Crédit de TVA</strong> : Conditions d'éligibilité, formalisme du dossier de remboursement, suivi
                    administratif et délais de l'Administration
                  </td>
                  <td>Présentation pratique</td>
                  <td rowSpan="3"><ContentButton dayNumber={5} /></td>
                </tr>
                <tr>
                  <td>10h00 – 10h45</td>
                  <td>
                    <strong>Contrôle fiscal</strong> : types (sur pièces, vérification), déroulement, droits du contribuable,
                    voies de recours (Réclamation Contentieuse)
                  </td>
                  <td>Mise en situation théorique</td>
                </tr>
                <tr>
                  <td>11h00 – 12h00</td>
                  <td>
                    Réflexes et bonnes pratiques pour la gestion des relations avec l'Administration fiscale / Synthèse
                    générale et Évaluation
                  </td>
                  <td>Échanges finals</td>
                </tr>
                <tr>
                  <td className="table-break" colSpan="4">
                    10h45 – 11h00 : PAUSE
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </section>
      </div>
    </>
  );
}