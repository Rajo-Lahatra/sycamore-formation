// src/app/day1/page.js

export default function Day1Page() {
  return (
    <div className="container" style={{paddingTop: '50px'}}>
      <h1 className="content-title">Jour 1 : Support de formation – Introduction & Cadre Fiscal Minier</h1>
      <p className="content-date">20 octobre 2025</p>
      
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
      
      {/* Ajoutez le reste du contenu du jour 1 ici */}
      <section className="slide-section">
        <h3>CONTENU SPÉCIFIQUE JOUR 1 (Cadre Légal)</h3>
        {/* Intégrez le texte de vos slides ici, en utilisant des balises <div>, <h2>, <p> ou <ul> pour structurer le texte brut. */}
        <p>... (Ajouter ici le contenu exact des slides du Jour 1 sur le Cadre Fiscal) ...</p>
      </section>
      
      {/* Section Contact - Utile pour toutes les pages */}
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
  );
}