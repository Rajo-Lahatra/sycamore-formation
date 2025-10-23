'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function EvaluationPage() {
  const [loading, setLoading] = useState(false);
  const [showOtherFunction, setShowOtherFunction] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    
    // Récupérer toutes les données du formulaire
    const data = {
      // Informations du participant
      prenom: formData.get('prenom'),
      nom: formData.get('nom'),
      email: formData.get('email'),
      telephone: formData.get('telephone'),
      fonction: formData.get('fonction'),
      autre_fonction: formData.get('autre_fonction'),
      
      // Métadonnées de session
      formation_titre: formData.get('formation_titre'),
      formation_modalite: formData.get('formation_modalite'),
      formation_debut: formData.get('formation_debut'),
      formation_fin: formData.get('formation_fin'),
      
      // Organisation & logistique
      org_objectifs: formData.get('org_objectifs'),
      org_plateforme: formData.get('org_plateforme'),
      org_rythme: formData.get('org_rythme'),
      org_outil: formData.get('org_outil'),
      
      // Contenu & pédagogie
      cont_adequation: formData.get('cont_adequation'),
      cont_equilibre: formData.get('cont_equilibre'),
      cont_supports: formData.get('cont_supports'),
      
      // Thématiques
      t_rts: formData.get('t_rts'),
      t_vf: formData.get('t_vf'),
      t_tva: formData.get('t_tva'),
      t_tva_remb: formData.get('t_tva_remb'),
      t_is: formData.get('t_is'),
      t_rns: formData.get('t_rns'),
      t_pf: formData.get('t_pf'),
      
      // Animation & interaction
      anim_maitrise: formData.get('anim_maitrise'),
      anim_interaction: formData.get('anim_interaction'),
      
      // Résultats & NPS
      res_objectifs: formData.get('res_objectifs'),
      competences: formData.get('competences'),
      nps: formData.get('nps'),
      
      // Feedback qualitatif
      points_forts: formData.get('points_forts'),
      ameliorations: formData.get('ameliorations'),
      besoins_suivi: formData.get('besoins_suivi'),
      
      // Honeypot
      bot_field: formData.get('bot-field'),
      
      created_at: new Date().toISOString(),
    };

    // Vérification honeypot
    if (data.bot_field) {
      console.warn("Détection de bot, soumission ignorée.");
      setLoading(false);
      return;
    }

    try {
      const { data: result, error } = await supabase
        .from('evaluations')
        .insert([data]);

      if (error) throw error;

      router.push('/evaluation/thank-you');
    } catch (error) {
      console.error('Erreur:', error);
      alert('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const toggleAutreFonction = (value) => {
    setShowOtherFunction(value === 'Autre');
  };

  return (
    <div className="container">
      <style jsx>{`
        :root {
          --sun: #fba519;
          --cocoa-bean: #48281b;
          --french-gray: #bcbdc0;
          --tulip-tree: #e8a73d;
          --almond-frost: #8b776a;
          --quincy: #654530;
          --fuel-yellow: #eea125;
          --millbrook: #5a3e30;
        }
        .container {
          max-width: 880px;
          margin: auto;
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(72,40,27,0.2);
          border-left: 8px solid var(--sun);
          font-family: Arial, sans-serif;
        }
        .logo {
          display: block;
          margin: 0 auto 20px auto;
          max-width: 180px;
        }
        h1 {
          text-align: center;
          color: var(--cocoa-bean);
          margin-bottom: 6px;
        }
        .subtitle {
          text-align: center;
          color: var(--millbrook);
          margin: 0 0 24px;
          font-size: 14px;
        }
        label {
          display: block;
          margin-top: 12px;
          font-weight: bold;
          color: var(--millbrook);
        }
        input, select, textarea {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border: 1px solid var(--almond-frost);
          border-radius: 4px;
          background-color: #fdfdfd;
        }
        textarea {
          resize: vertical;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .section-title {
          margin-top: 28px;
          font-size: 18px;
          color: var(--quincy);
          border-bottom: 1px solid var(--almond-frost);
          padding-bottom: 6px;
        }
        .likert {
          display: grid;
          grid-template-columns: 2fr repeat(5, 1fr);
          gap: 8px;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px dashed #e9e9e9;
          font-size: 14px;
        }
        .likert > div:first-child {
          font-weight: 600;
          color: #333;
        }
        .likert label {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: normal;
          color: #333;
        }
        .badge {
          display: inline-block;
          background: #fff7e6;
          color: #8a5a00;
          border: 1px solid #ffd28e;
          border-radius: 999px;
          padding: 2px 10px;
          font-size: 12px;
          margin-left: 6px;
          vertical-align: middle;
        }
        .muted {
          color: #666;
          font-size: 12px;
        }
        .actions {
          margin-top: 24px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        button {
          padding: 12px 20px;
          background-color: var(--fuel-yellow);
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease;
        }
        button.secondary {
          background: #e7e7e7;
          color: #333;
        }
        button:hover:not(:disabled) {
          background-color: var(--tulip-tree);
        }
        button.secondary:hover:not(:disabled) {
          background: #dcdcdc;
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        small.note {
          display: block;
          color: #666;
          margin-top: 6px;
          font-size: 12px;
        }
        .nps {
          display: grid;
          grid-template-columns: repeat(11, 1fr);
          gap: 6px;
          margin-top: 8px;
        }
        .nps label {
          display: block;
          text-align: center;
          font-weight: normal;
          color: #333;
        }
        .hidden {
          display: none;
        }
        @media (max-width: 768px) {
          .grid-2,
          .grid-3 {
            grid-template-columns: 1fr;
          }
          .likert {
            grid-template-columns: 1fr;
            gap: 4px;
          }
          .nps {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      `}</style>

      {/* Logo - à adapter avec votre chemin d'image */}
      <img 
        src="/logo-jm.png" 
        alt="Logo du cabinet" 
        className="logo" 
      />
      
      <h1>Évaluation de la formation – Fiscalité minière</h1>
      <p className="subtitle">Session en ligne • 20–24 octobre 2025 • Sycamore Mine Guinée SAU</p>

      <form onSubmit={handleSubmit} autoComplete="on" noValidate>
        {/* Honeypot anti-bot */}
        <div className="hidden">
          <label>
            Ne pas remplir ce champ : 
            <input name="bot-field" />
          </label>
        </div>

        {/* Métadonnées de session */}
        <input type="hidden" name="formation_titre" value="Fiscalité minière – Sycamore" />
        <input type="hidden" name="formation_modalite" value="En ligne" />
        <input type="hidden" name="formation_debut" value="2025-10-20" />
        <input type="hidden" name="formation_fin" value="2025-10-24" />

        {/* Identité du répondant */}
        <div className="section-title">Informations du participant</div>
        <div className="grid-2">
          <div>
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" required />
          </div>
          <div>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" required />
          </div>
        </div>

        <div className="grid-3">
          <div>
            <label htmlFor="email">Adresse e-mail</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="telephone">Téléphone</label>
            <input type="tel" id="telephone" name="telephone" />
          </div>
          <div>
            <label htmlFor="fonction">Fonction / Département</label>
            <select 
              id="fonction" 
              name="fonction" 
              required 
              onChange={(e) => toggleAutreFonction(e.target.value)}
            >
              <option value="">-- Sélectionner --</option>
              <option>Comptabilité</option>
              <option>Finance</option>
              <option>Juridique</option>
              <option>Conformité</option>
              <option>RH / Paie</option>
              <option>Direction</option>
              <option value="Autre">Autre</option>
            </select>
          </div>
        </div>

        <div className={showOtherFunction ? '' : 'hidden'}>
          <label htmlFor="autre-fonction">Veuillez préciser votre fonction</label>
          <input type="text" id="autre-fonction" name="autre_fonction" />
        </div>

        {/* Organisation & logistique */}
        <div className="section-title">
          Organisation & logistique <span className="badge">en ligne</span>
        </div>
        
        <div className="likert">
          <div>Clarté des objectifs communiqués</div>
          <label><input type="radio" name="org_objectifs" value="1" required /> 1</label>
          <label><input type="radio" name="org_objectifs" value="2" /> 2</label>
          <label><input type="radio" name="org_objectifs" value="3" /> 3</label>
          <label><input type="radio" name="org_objectifs" value="4" /> 4</label>
          <label><input type="radio" name="org_objectifs" value="5" /> 5</label>
        </div>
        
        <div className="likert">
          <div>Qualité de la plateforme (audio, vidéo, accès)</div>
          <label><input type="radio" name="org_plateforme" value="1" required /> 1</label>
          <label><input type="radio" name="org_plateforme" value="2" /> 2</label>
          <label><input type="radio" name="org_plateforme" value="3" /> 3</label>
          <label><input type="radio" name="org_plateforme" value="4" /> 4</label>
          <label><input type="radio" name="org_plateforme" value="5" /> 5</label>
        </div>
        
        <div className="likert">
          <div>Rythme & gestion du temps (20–24 oct.)</div>
          <label><input type="radio" name="org_rythme" value="1" required /> 1</label>
          <label><input type="radio" name="org_rythme" value="2" /> 2</label>
          <label><input type="radio" name="org_rythme" value="3" /> 3</label>
          <label><input type="radio" name="org_rythme" value="4" /> 4</label>
          <label><input type="radio" name="org_rythme" value="5" /> 5</label>
        </div>
        
        <div className="likert">
          <div>Pertinence de l'outil pédagogique (application web interactive utilisée à la place de PowerPoint)</div>
          <label><input type="radio" name="org_outil" value="1" required /> 1</label>
          <label><input type="radio" name="org_outil" value="2" /> 2</label>
          <label><input type="radio" name="org_outil" value="3" /> 3</label>
          <label><input type="radio" name="org_outil" value="4" /> 4</label>
          <label><input type="radio" name="org_outil" value="5" /> 5</label>
        </div>

        {/* Contenu & pédagogie */}
        <div className="section-title">Contenu & pédagogie</div>
        
        <div className="likert">
          <div>Adéquation du contenu au contexte minier guinéen</div>
          <label><input type="radio" name="cont_adequation" value="1" required /> 1</label>
          <label><input type="radio" name="cont_adequation" value="2" /> 2</label>
          <label><input type="radio" name="cont_adequation" value="3" /> 3</label>
          <label><input type="radio" name="cont_adequation" value="4" /> 4</label>
          <label><input type="radio" name="cont_adequation" value="5" /> 5</label>
        </div>
        
        <div className="likert">
          <div>Équilibre théorie / cas pratiques</div>
          <label><input type="radio" name="cont_equilibre" value="1" required /> 1</label>
          <label><input type="radio" name="cont_equilibre" value="2" /> 2</label>
          <label><input type="radio" name="cont_equilibre" value="3" /> 3</label>
          <label><input type="radio" name="cont_equilibre" value="4" /> 4</label>
          <label><input type="radio" name="cont_equilibre" value="5" /> 5</label>
        </div>
        
        <div className="likert">
          <div>Qualité des supports (slides, schémas, tableaux)</div>
          <label><input type="radio" name="cont_supports" value="1" required /> 1</label>
          <label><input type="radio" name="cont_supports" value="2" /> 2</label>
          <label><input type="radio" name="cont_supports" value="3" /> 3</label>
          <label><input type="radio" name="cont_supports" value="4" /> 4</label>
          <label><input type="radio" name="cont_supports" value="5" /> 5</label>
        </div>

        {/* Thématiques */}
        <div className="section-title">Auto-évaluation par thématique (1 = insuffisant, 5 = excellent)</div>
        <div className="muted">Merci d'évaluer l'apport de la formation sur chaque thème abordé.</div>
        
        <div>
          <div className="likert">
            <div>RTS – salaires (assiette, tranches, échéances)</div>
            <label><input type="radio" name="t_rts" value="1" required />1</label>
            <label><input type="radio" name="t_rts" value="2" />2</label>
            <label><input type="radio" name="t_rts" value="3" />3</label>
            <label><input type="radio" name="t_rts" value="4" />4</label>
            <label><input type="radio" name="t_rts" value="5" />5</label>
          </div>
          
          <div className="likert">
            <div>VF – Versement forfaitaire (assiette, exonérations)</div>
            <label><input type="radio" name="t_vf" value="1" required />1</label>
            <label><input type="radio" name="t_vf" value="2" />2</label>
            <label><input type="radio" name="t_vf" value="3" />3</label>
            <label><input type="radio" name="t_vf" value="4" />4</label>
            <label><input type="radio" name="t_vf" value="5" />5</label>
          </div>
          
          <div className="likert">
            <div>TVA – opérations, déduction, précompte, auto-liquidation</div>
            <label><input type="radio" name="t_tva" value="1" required />1</label>
            <label><input type="radio" name="t_tva" value="2" />2</label>
            <label><input type="radio" name="t_tva" value="3" />3</label>
            <label><input type="radio" name="t_tva" value="4" />4</label>
            <label><input type="radio" name="t_tva" value="5" />5</label>
          </div>
          
          <div className="likert">
            <div>Remboursement de crédit de TVA – conditions & dossiers</div>
            <label><input type="radio" name="t_tva_remb" value="1" required />1</label>
            <label><input type="radio" name="t_tva_remb" value="2" />2</label>
            <label><input type="radio" name="t_tva_remb" value="3" />3</label>
            <label><input type="radio" name="t_tva_remb" value="4" />4</label>
            <label><input type="radio" name="t_tva_remb" value="5" />5</label>
          </div>
          
          <div className="likert">
            <div>IS – détermination du résultat fiscal & retraitements</div>
            <label><input type="radio" name="t_is" value="1" required />1</label>
            <label><input type="radio" name="t_is" value="2" />2</label>
            <label><input type="radio" name="t_is" value="3" />3</label>
            <label><input type="radio" name="t_is" value="4" />4</label>
            <label><input type="radio" name="t_is" value="5" />5</label>
          </div>
          
          <div className="likert">
            <div>RNS – prestataires non-résidents & conventions</div>
            <label><input type="radio" name="t_rns" value="1" required />1</label>
            <label><input type="radio" name="t_rns" value="2" />2</label>
            <label><input type="radio" name="t_rns" value="3" />3</label>
            <label><input type="radio" name="t_rns" value="4" />4</label>
            <label><input type="radio" name="t_rns" value="5" />5</label>
          </div>
          
          <div className="likert">
            <div>PF – prélèvement forfaitaire sur achats locaux</div>
            <label><input type="radio" name="t_pf" value="1" required />1</label>
            <label><input type="radio" name="t_pf" value="2" />2</label>
            <label><input type="radio" name="t_pf" value="3" />3</label>
            <label><input type="radio" name="t_pf" value="4" />4</label>
            <label><input type="radio" name="t_pf" value="5" />5</label>
          </div>
        </div>

        {/* Animation */}
        <div className="section-title">Animation & interaction</div>
        
        <div className="likert">
          <div>Maîtrise du sujet par les formateurs</div>
          <label><input type="radio" name="anim_maitrise" value="1" required />1</label>
          <label><input type="radio" name="anim_maitrise" value="2" />2</label>
          <label><input type="radio" name="anim_maitrise" value="3" />3</label>
          <label><input type="radio" name="anim_maitrise" value="4" />4</label>
          <label><input type="radio" name="anim_maitrise" value="5" />5</label>
        </div>
        
        <div className="likert">
          <div>Interactions, questions-réponses, études de cas</div>
          <label><input type="radio" name="anim_interaction" value="1" required />1</label>
          <label><input type="radio" name="anim_interaction" value="2" />2</label>
          <label><input type="radio" name="anim_interaction" value="3" />3</label>
          <label><input type="radio" name="anim_interaction" value="4" />4</label>
          <label><input type="radio" name="anim_interaction" value="5" />5</label>
        </div>

        {/* Résultats & NPS */}
        <div className="section-title">Résultats perçus</div>
        
        <div className="likert">
          <div>Objectifs atteints (globalement)</div>
          <label><input type="radio" name="res_objectifs" value="1" required />1</label>
          <label><input type="radio" name="res_objectifs" value="2" />2</label>
          <label><input type="radio" name="res_objectifs" value="3" />3</label>
          <label><input type="radio" name="res_objectifs" value="4" />4</label>
          <label><input type="radio" name="res_objectifs" value="5" />5</label>
        </div>

        <label htmlFor="competences">Compétences concrètes que vous pouvez appliquer dès maintenant</label>
        <textarea 
          id="competences" 
          name="competences" 
          rows="3" 
          placeholder="Ex. : préparer une DMU TVA, reconstituer une base RTS/VF, monter un dossier de remboursement de crédit TVA…"
        />

        <div className="section-title">Recommandation (NPS)</div>
        <label>Sur une échelle de 0 à 10, quelle est la probabilité que vous recommandiez cette formation à un collègue ?</label>
        <div className="nps">
          <label><input type="radio" name="nps" value="0" required />0</label>
          <label><input type="radio" name="nps" value="1" />1</label>
          <label><input type="radio" name="nps" value="2" />2</label>
          <label><input type="radio" name="nps" value="3" />3</label>
          <label><input type="radio" name="nps" value="4" />4</label>
          <label><input type="radio" name="nps" value="5" />5</label>
          <label><input type="radio" name="nps" value="6" />6</label>
          <label><input type="radio" name="nps" value="7" />7</label>
          <label><input type="radio" name="nps" value="8" />8</label>
          <label><input type="radio" name="nps" value="9" />9</label>
          <label><input type="radio" name="nps" value="10" />10</label>
        </div>
        <small className="note">0 = "Pas du tout probable" • 10 = "Extrêmement probable"</small>

        {/* Feedback qualitatif */}
        <div className="section-title">Feedback qualitatif</div>
        
        <label htmlFor="points_forts">Ce que vous avez le plus apprécié</label>
        <textarea id="points_forts" name="points_forts" rows="3" />

        <label htmlFor="ameliorations">Axes d'amélioration (contenu, rythme, cas, outils…)</label>
        <textarea id="ameliorations" name="ameliorations" rows="3" />

        <label htmlFor="besoins_suivi">Besoins d'accompagnement / sujets à approfondir (post-formation)</label>
        <textarea id="besoins_suivi" name="besoins_suivi" rows="3" />

        <div className="actions">
          <button type="submit" disabled={loading}>
            {loading ? 'Envoi en cours…' : 'Envoyer mon évaluation'}
          </button>
          <button type="reset" className="secondary">
            Réinitialiser
          </button>
        </div>

        <small className="note">
          Les données recueillies sont utilisées aux seules fins d'amélioration de la formation.
        </small>
      </form>
    </div>
  );
}