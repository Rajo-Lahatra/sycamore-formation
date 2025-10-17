// src/app/day1/page.js

export default function Day1Page() {
  return (
    <div className="content-body"> {/* Utilise la classe pour le fond marron */}
      <div className="content-title-header"> {/* Barre de titre de la présentation */}
        <h1>Jour 1 : Introduction & Cadre Fiscal Minier</h1>
        <p className="content-date">20 octobre 2025</p>
      </div>
      
      <div className="content-container"> {/* Conteneur centré pour les slides */}

        <section className="slide-section">
          <h2 className="slide-title">SYCAMORE – Fiscalité minière – Introduction.</h2>
          <p>La formation demandée vise à améliorer les compétences et à renforcer les capacités de l’équipe comptable, financière et juridique de Sycamore Mine Guinée SAU, en matière de fiscalité applicable au secteur minier en République de Guinée.</p>
          <p>Elle permettra notamment de :</p>
          <ul>
            <li>Approfondir la connaissance des participants sur les impôts, taxes et redevances spécifiques aux activités minières en Guinée, ainsi que le régime préférentiel prévu par le Code Minier ;</li>
            <li>Développer l’expertise pratique sur la gestion des obligations fiscales et le montage d’un dossier de remboursement de crédit de TVA ;</li>
            <li>Renforcer la capacité de préparation et de gestion des contrôles fiscaux, ainsi que la maîtrise des voies de recours en cas de contentieux ;</li>
            <li>Outiller les participants pour une gestion fiscale proactive et conforme, garantissant la sécurisation fiscale des opérations minières de la société.</li>
          </ul>
        </section>

        <section className="slide-section">
          <h2 className="slide-title">SYCAMORE – Fiscalité minière – Objectifs de la formation.</h2>
          <h3>OBJECTIF GENERAL</h3>
          <p>En général, l’objectif de cette formation est de fournir aux participants les connaissances et compétences nécessaires pour assurer une gestion fiscale optimale des activités minières de Sycamore Mine Guinée SAU, en vue de :</p>
          <ul>
              <li>La maîtrise des aspects fiscaux du Code Minier et du Code Général des Impôts (CGI) ;</li>
              <li>L’anticipation et la sécurisation des risques fiscaux liés aux opérations ;</li>
              <li>La conformité avec les obligations déclaratives et de paiement.</li>
          </ul>
        </section>
        
        {/* Ajouter le reste du contenu du Jour 1 ici en utilisant <section className="slide-section"> */}

        <section className="slide-section contact-info">
          <h2 className="slide-title">SYCAMORE – Fiscalité minière - Nos Contacts</h2>
          <p><strong>Mohamed Aly Baldé</strong>, Associé - Gérant<br/>
            Mobile: + 224 626 84 74 05 /+224 661 19 13 19<br/>
            Email: mohamed.balde@jmconsulting-gn.com</p>
          <p><strong>Jean Pascal Ouendéno</strong>, Associé<br/>
            Mobile: +224 622 09 81 29<br/>
            Email: jean-pascal.ouendeno@jmconsulting-gn.com</p>
        </section>

      </div>
    </div>
  );
}