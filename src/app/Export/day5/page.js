import DayExport from '../DayExport';
// Importez les slides du jour 5 existant  
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
    // SLIDE 2: REMBOURSEMENT CRÉDIT TVA - TEXTES
    createSlide(
        "REMBOURSEMENT DE CRÉDIT DE TVA - Textes applicables",
        `
        <h3>A- Textes applicables</h3>
        <ul>
            <li><strong>Code général des impôts guinéen</strong> prévoit les dispositions relatives au remboursement du crédit de TVA (section « Remboursement de crédit de TVA ») : articles 387, 388, 388 Ter, etc.</li>
            <li><strong>Instruction ministérielle conjointe n°1976 du 31 janvier 2014</strong>, modifiée et complétée par une instruction de mars 2019. Cette instruction encadre le mécanisme spécifique pour les sociétés minières et autres institutions.</li>
        </ul>

        <h3>B- Assujettis éligibles</h3>
        <ul>
            <li><strong>Principe</strong> : le crédit de TVA (excédent de TVA déductible sur TVA collectée) est <strong>imputable</strong> sur les périodes suivantes mais <strong>non remboursable</strong>.</li>
            <li><strong>Exception</strong> : peuvent déposer une <strong>demande de remboursement</strong> les assujettis dans certaines hypothèses :</li>
            <ul>
                <li>✓ Les opérations imposables au taux zéro (généralement les exportations).</li>
                <li>✓ Les achats de biens immobilisés éligibles à déduction, indépendamment de leur date d'acquisition.</li>
                <li>✓ Les assujettis titulaires d'un <strong>titre minier</strong> ou opérant dans le secteur minier ou pétrolier (recherche ou exploitation) (i.e. les sociétés minières) : ce sont les principaux bénéficiaires dans le contexte guinéen.</li>
            </ul>
        </ul>
        <p>Il est donc admis que les sociétés minières comme SYCAMORE puissent solliciter le remboursement de leurs crédits de TVA, du fait de la nature exportatrice de leur production (taux 0 % sur les ventes d'or exportées, par exemple) et des investissements lourds qu'elles engagent (biens d'équipement avec TVA grevant des immobilisations).</p>
        `
    ),

    // SLIDE 3: CONDITIONS DE REMBOURSEMENT
    createSlide(
        "REMBOURSEMENT DE CRÉDIT DE TVA - Conditions",
        `
        <h3>C- Conditions de remboursement :</h3>

        <ul>
            <li><strong>Crédit de TVA pendant 3 mois consécutifs</strong><br/>
            La demande ne peut être faite que si l'entreprise présente un crédit de TVA (TVA déductible > TVA collectée) pendant au moins trois mois d'affilée.</li>

            <li><strong>Montant minimal de la demande</strong><br/>
            Le montant du crédit réclamé doit être au moins <strong>100 000 000 GNF</strong> (cent millions).</li>

            <li><strong>Délai de prescription / péremption</strong><br/>
            La demande doit être faite dans un délai de 12 mois à compter de la constatation du crédit de TVA ; au-delà, le crédit expire et ne peut plus être remboursé ou imputé.</li>

            <li><strong>Quitus fiscal et obligations fiscales à jour</strong><br/>
            L'entreprise doit être à jour dans ses obligations fiscales (impôts, taxes, contributions) : aucune dette fiscale en cours qui pourrait bloquer le remboursement.</li>

            <li><strong>Non-imputation sur les périodes suivantes</strong><br/>
            Lorsque la demande de remboursement est déposée, le crédit concerné ne peut plus être utilisé pour imputer sur les déclarations TVA des mois suivants : il sort du circuit d'imputation.</li>

            <li><strong>Cautionnement (le cas échéant)</strong><br/>
            L'Administration fiscale peut exiger une caution solvable, si elle estime que la demande présente un risque pour les finances publiques (par exemple un montant trop élevé ou des présomptions de fraude).</li>
        </ul>
        `
    ),

    // SLIDE 4: DOCUMENTS JUSTIFICATIFS
    createSlide(
        "REMBOURSEMENT DE CRÉDIT DE TVA - Documents justificatifs",
        `
        <h3>D- Documents justificatifs à fournir :</h3>
        <p>La demande doit être accompagnée de nombreuses pièces de support. Parmi les pièces exigées :</p>
        <ul>
            <li>Un descriptif de l'activité de l'assujetti (secteur, implantation, projet minier)</li>
            <li>Un relevé des factures d'achat (biens, services, importations) sur trois colonnes : nom et NIF des fournisseurs, dates et montants des factures, montant de la TVA correspondante</li>
            <li>Quitus fiscal de l'assujetti à jour</li>
            <li>Les trois dernières déclarations de TVA (DMU)</li>
            <li>La déclaration de mise en consommation des biens importés (quand la déduction de TVA porte sur des biens importés)</li>
            <li>Copie des factures d'achats locaux (biens et services) et justificatifs de paiement de ces achats</li>
            <li>Selon le cas, des informations complémentaires comme chiffre d'affaires global, chiffre d'affaires exporté ou exonéré, justificatifs d'exportation (douanes, certificat de transport, etc.)</li>
        </ul>
        <p>Il est à noter que l'Administration fiscale peut demander des pièces ou informations additionnelles dans le cadre de l'examen du dossier.</p>
        <p>Enfin, la demande doit être formulée par lettre recommandée ou remise contre décharge ; les pièces justificatives peuvent être transmises au format électronique.</p>
        `
    ),

    // SLIDE 5: INSTRUCTION DEMANDE
    createSlide(
        "REMBOURSEMENT DE CRÉDIT DE TVA - Instruction",
        `
        <h3>E- Instruction de la demande :</h3>
        <ul>
            <li>L'Administration fiscale (Direction nationale des impôts, DGI ou DNI) instruit la demande dans un délai de <strong>30 jours</strong> francs à compter de sa réception.</li>
            <li>Si l'administration demande des renseignements complémentaires, l'assujetti dispose de <strong>15 jours</strong> francs pour répondre, ce qui prolonge le délai d'instruction à <strong>60 jours</strong> au total.</li>
            <li>La décision de l'administration doit être motivée (acceptation ou rejet) et notifiée par lettre recommandée ou remise contre décharge.</li>
        </ul>

        <h3>F- Validation par le comité de gestion et transfert au Trésor :</h3>
        <ul>
            <li>Une fois la liquidation faite, le dossier validé par la DGI est transmis au Comité de gestion du remboursement des crédits de TVA, institué par décision conjointe pour donner une validation finale.</li>
            <li>Le paiement effectif est ensuite assuré par la Paierie Générale du Trésor (PGT), via un compte spécial « Remboursement des crédits de TVA aux entreprises minières ».</li>
            <li>Conformément à l'instruction de 2019, la PGT dispose d'un délai de <strong>5 jours</strong> pour exercer un contrôle de régularité sur le dossier avant mise en paiement, et la procédure complète (de la réception à la mise en paiement) ne doit pas excéder <strong>45 jours</strong>.</li>
            <li>Si des irrégularités sont relevées, la PGT peut retourner le dossier à la DGI avec motifs de rejet, via un bordereau.</li>
        </ul>
        `
    ),

    // SLIDE 6: PRATIQUES ET ENJEUX
    createSlide(
        "REMBOURSEMENT DE CRÉDIT DE TVA - Pratiques et enjeux",
        `
        <h3>G- Pratiques observées, enjeux et risques :</h3>

        <h4>1) Retards et arriérés</h4>
        <ul>
            <li>Dans la pratique, de nombreuses demandes de remboursement restent <strong>en souffrance</strong>, avec des arriérés importants : par exemple, en 2021, 54 demandes étaient en instance pour 240 milliards GNF, dont 140 milliards dûs aux sociétés minières.</li>
            <li>Le montant budgétaire alloué annuellement par l'Etat pour le remboursement des crédits TVA est souvent <strong>insuffisant</strong> par rapport aux demandes réelles des sociétés minières.</li>
            <li>L'IGF a relevé qu'une importante part des demandes est rejetée pour <strong>non-conformité</strong> aux conditions légales ou aux documents justificatifs.</li>
        </ul>

        <h4>2) Difficultés pratiques en raison de la retenue à la source, précompte de TVA</h4>
        <ul>
            <li>La pratique de <strong>retenue à la source de la TVA</strong> sur les factures de biens et services entre les fournisseurs et les sociétés minières complique la récupération du crédit. Certains crédits ne peuvent être entièrement restitués à cause de cette retenue.</li>
            <li>L'administration exige que les fournisseurs dont les factures sont produites comme justificatifs aient déclaré la TVA collectée – il y a des risques si ces fournisseurs sont en infraction ou non immatriculés.</li>
        </ul>
        `
    ),

    // SLIDE 7: RISQUES ET RECOMMANDATIONS
    createSlide(
        "REMBOURSEMENT DE CRÉDIT DE TVA - Risques et recommandations",
        `
        <h4>3) Risque de rejet pour non-conformité</h4>
        <ul>
            <li>Les dossiers peuvent être rejetés pour des <strong>erreurs de présentation</strong>, omissions des pièces justificatives, incohérences dans les montants, non-respect des délais, ou absence de conformité aux déclarations mensuelles (DMU).</li>
            <li>Des <strong>prescriptions</strong> ou critères restrictifs (ex. montant minimal, délai de 12 mois, exigence de caution) peuvent être utilisés par l'administration pour écarter les demandes qu'elle juge non fondées.</li>
        </ul>

        <h4>4) Risques budgétaires de l'État</h4>
        <ul>
            <li>Le mécanisme de remboursement impose une charge budgétaire à l'État, ce qui peut conduire à des <strong>retards de paiement</strong>, voire des refus partiels, selon la capacité financière de l'État à honorer les demandes.</li>
            <li>L'absence de <strong>clé objective de priorité</strong> entre les sociétés minières peut créer des inégalités dans l'allocation des fonds disponibles.</li>
        </ul>

        <h3>H- Nos recommandations pour SYCAMORE : bonnes pratiques</h3>
        <p>Pour maximiser les chances de succès d'un dossier de remboursement et limiter les risques, nous vous recommandons d'adopter les pratiques suivantes :</p>
        `
    ),

    // SLIDE 8: RECOMMANDATIONS DÉTAILLÉES
    createSlide(
        "RECOMMANDATIONS SYCAMORE - Bonnes pratiques",
        `
        <ol>
            <li><strong>Planification anticipée du dossier</strong><br/>
            – Engager une revue interne permanente des dépenses payant de la TVA et suivre la constitution du crédit de TVA.<br/>
            – Maintenir un tableau de suivi mensuel crédible de toutes les factures, paiements et TVA grevée.</li>

            <li><strong>Contrôles de cohérence préalables</strong><br/>
            – Avant dépôt, vérifier que les factures produites comme justificatifs sont correctement émises (nom, numéro NIF, montant, TVA légale).<br/>
            – Vérifier que les fournisseurs ont bien déclaré la TVA correspondante.<br/>
            – Contrôler que les montants dans la demande correspondent aux sommes déclarées dans les DMU.</li>

            <li><strong>Constitution du dossier rigoureusement conforme</strong><br/>
            – Joindre toutes les pièces exigées (quitus, déclarations, factures d'importation, justificatifs d'exportation, etc.).<br/>
            – Si exigé, constituer une caution solvable dès le dépôt.<br/>
            – Respecter le format et les modalités de dépôt (lettre recommandée ou remise contre décharge).</li>

            <li><strong>Suivi diligent du dossier auprès de l'administration / du Trésor</strong><br/>
            – Demander un accusé de réception officiel de la demande.<br/>
            – Répondre rapidement à toute demande de renseignements complémentaires (dans le délai de 15 jours).<br/>
            – Suivre auprès du PGT la phase de mise en paiement, vérifier les retours éventuels de dossiers pour irrégularités.</li>
        </ol>
        `
    ),

    // SLIDE 9: SUITE RECOMMANDATIONS
    createSlide(
        "RECOMMANDATIONS SYCAMORE - Suite",
        `
        <ol start="5">
            <li><strong>Anticipation des risques de retard / de rejet</strong><br/>
            – Préparer une stratégie de recours contentieux (préparer argumentaire, notices légales).<br/>
            – Si possible, dialoguer avec les autorités fiscales ou via les conventions minières pour sécuriser le traitement.<br/>
            – Intégrer dans la trésorerie un budget tampon en cas d'attente prolongée.</li>

            <li><strong>Capitaliser les retours d'expérience</strong><br/>
            – Une fois le dossier clos (accepté ou rejeté), analyser les éventuelles irrégularités, les motifs de rejet pour améliorer les dossiers suivants.<br/>
            – Constituer un <strong>manuel interne</strong> de montage de dossier de remboursement pour standardiser les démarches futures.</li>
        </ol>

        <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid var(--fuel-yellow); margin-top: 20px;">
            <h4 style="margin: 0 0 10px 0;">Point de vigilance important :</h4>
            <p style="margin: 0;">La TVA sur les achats locaux doit être intégralement déclarée par les fournisseurs. En cas de défaut de déclaration par un fournisseur, la TVA déductible correspondante pourrait être rejetée.</p>
        </div>
        `
    ),

    // SLIDE 10: MOYENS GÉNÉRAUX DE CONTRÔLE
    createSlide(
        "MOYENS GÉNÉRAUX DE CONTRÔLES - Demande d'éclaircissements",
        `
        <h3>• DEMANDE D'ECLAIRCISSEMENTS ET DE JUSTIFICATIONS</h3>

        <h4>DEFINITION: Qu'est ce que c'est?</h4>
        <p>Il s'agit du droit détenu par l'administration fiscale de demander au contribuable:</p>
        <ul>
            <li>des éclaircissements ou des justifications sur les éléments mentionnés dans toute déclaration d'impôts, de droits et taxes.</li>
            <li>des justifications et la production de documents au sujet de ses charges déductibles, de ses avoirs ou revenus d'avoir à l'étranger, et de ses bases d'imposition.</li>
            <li>des justifications lorsqu'elle a réuni des éléments permettant d'établir que ce dernier que ce dernier peut avoir des revenus plus importants que ceux qu'il a déclarés.</li>
        </ul>

        <h4>Mentions Essentielles</h4>
        <p>Les demandes d'éclaircissements et de justifications doivent indiquer explicitement les points sur lesquels elles portent et préciser le délai de réponses du contribuable.</p>

        <h4>Délais de Réponses</h4>
        <p>Le délai de réponses est de 30 jours. En cas réponse insuffisante, un délai de 15 jours supplémentaire peut être accordé par mise en demeure, pour des compléments de réponses.</p>

        <h4>Absence de réponse ou réponse tardive</h4>
        <p>Le contribuable est taxé d'office lorsqu'il ne répond pas dans le délai imparti:</p>
        <ul>
            <li>à la demande d'éclaircissements.</li>
            <li>à la mise en demeure.</li>
        </ul>
        `
    ),

    // SLIDE 11: DROIT DE COMMUNICATION
    createSlide(
        "MOYENS GÉNÉRAUX DE CONTRÔLES - Droit de communication",
        `
        <h3>• DROIT DE COMMUNICATION</h3>

        <h4>DEFINITION: Qu'est ce que c'est?</h4>
        <p>Droit conféré aux agents de l'Administration ayant au moins le grade de contrôleur, d'obtenir communication de documents et de renseignements détenus par un redevable ou par un tiers, pour l'établissement de l'assiette, le contrôle et le recouvrement des impôts, droits et taxes.</p>

        <h4>Droit de communication spontané</h4>
        <p>Le droit de communication peut s'exercer spontanément entre agents des impôts, des douanes, de la concurrence et consommation, et des agents de répression des fraudes, sur tous les documents et renseignements détenus ou recueillis dans le cadre de l'ensemble de leurs missions respectives. Toute information recueillie par l'autorité judiciaire présumant une fraude fiscale doit également être communiquée à l'Administration Fiscale.</p>

        <h4>Sur quoi porte le droit de communication?</h4>
        <p>Le droit de communication porte sur les documents comptables, les pièces justificatives de recettes et de dépenses et plus généralement sur tous les documents relatifs à l'activité.</p>
        <p>Il peut s'étendre aux renseignements relatifs aux comptes bancaires et aux transferts de fonds, sans que ne puisse être opposé à l'Administration fiscale, le secret bancaire.</p>
        <p>Pour les professions réglementées soumises au secret professionnel, le droit porte uniquement sur l'identité du client, la date, le montant et la forme du versement effectué en contrepartie de la prestation fournie.</p>
        `
    ),

    // SLIDE 12: SUITE DROIT COMMUNICATION
    createSlide(
        "MOYENS GÉNÉRAUX DE CONTRÔLES - Droit de communication (Suite)",
        `
        <h4>Opposabilité du droit de communication</h4>
        <p>Les documents, pièces ou informations obtenus par l'Administration Fiscale dans le cadre du droit de communication, peuvent être utiliser dans le cadre de l'ensemble des procédures de contrôle et de rectification sans que ces éléments puissent être écartés au seul motif de leur origine.</p>
        <p>Toutefois, l'Administration ne peut se prévaloir de documents, pièces ou informations obtenus dans des conditions déclarées illégales par les tribunaux, même si la détention de ces documents est sans incidence sur la régularité de la procédure elle-même.</p>

        <h4>Sanctions du défaut de communication</h4>
        <p>Le refus de communication des documents ou renseignements demandés par l'Administration dans l'exercice de son droit de communication, l'absence de tenue de ces documents, la destruction de ceux-ci ou tout comportement faisant obstacle à la communication entraîne l'application d'une amende de dix millions (10 000 000) de Francs guinéens.</p>
        <p>L'amende s'applique pour chaque demande pour laquelle tout ou partie des documents ou renseignements sollicités n'ont pas été communiqués.</p>

        <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin-top: 20px;">
            <h4 style="margin: 0 0 10px 0;">Conseil pratique :</h4>
            <p style="margin: 0;">Lors de la réception d'une demande de communication, établir un accusé de réception précisant la date et les documents demandés. Conserver une copie de tous les documents communiqués.</p>
        </div>
        `
    ),

    // SLIDE 13: DROIT D'ENQUÊTE
    createSlide(
        "MOYENS SPÉCIFIQUES DE CONTRÔLES - Droit d'enquête",
        `
        <h3>• DROIT D'ENQUÊTE</h3>

        <h4>DEFINITION: Qu'est ce que c'est?</h4>
        <p>Procédure administrative dont dispose les agents de l'Administration ayant au moins le grade de contrôleur, pour rechercher les manquements aux règles de facturation auxquelles sont soumis les assujettis à la TVA.</p>
        <p>Cette procédure permet d'intervenir de manière inopinée dans les locaux professionnels d'un assujetti, ou d'auditionner sur convocation l'assujetti dans les bureaux de l'Administration fiscale.</p>

        <h4>MODALITÉS D'EXERCICE DU DROIT</h4>
        <p>Les agents des impôts peuvent se faire présenter les factures, la comptabilité matière ainsi que les livres, les registres et les documents professionnels se rapportant à des opérations ayant donné ou devant donner lieu à facturation, et contrôler le système de facturation électronique. Ils peuvent également y recueillir des renseignements et justifications.</p>
        <p>L'entreprise doit, pendant les heures d'activités, donner accès aux agents des impôts, aux locaux à usage professionnel, aux terrains et entrepôts, aux moyens de transport à usage professionnel et à leur chargement. Les locaux affectés au domicile privé ne sont pas concernés.</p>

        <h4>PROCEDURE</h4>
        <p><strong>Avis d'enquête:</strong> Pour exercer le droit, l'Administration Fiscale doit remettre un avis d'enquête au contribuable lors de la première intervention ou convocation.</p>
        <p><strong>Procès-Verbal:</strong> À l'issue de l'enquête, les agents de l'Administration fiscale établissent un procès-verbal consignant les manquements constatés ou l'absence de manquements. La liste des documents dont une copie a été délivrée est annexée au procès-verbal.</p>
        `
    ),

    // SLIDE 14: SUITE DROIT D'ENQUÊTE
    createSlide(
        "MOYENS SPÉCIFIQUES DE CONTRÔLES - Droit d'enquête (Suite)",
        `
        <h4>PROCEDURE (Suite)</h4>
        <p>Le procès-verbal est établi dans un délai de 30 jours suivant la dernière intervention ou convocation, signé par les agents de l'Administration Fiscale et l'assujetti ou son représentant. En cas de refus de signer, mention en est faite au procès-verbal, dont copie lui est remise. (Huissier de justice).</p>

        <h4>Droit de contestation du contribuable</h4>
        <p>Les locaux privés ne sont pas concernés.</p>
        <p>Le contribuable peut faire valoir ses observations dans un délai de 30 jours. Ces observations seront annexées au procès-verbal d'enquête.</p>
        <p>En aucun cas, les enquêtes ne doivent aboutir à une vérification de comptabilité;</p>
        <p>Les constatations opérées au cours de l'enquête ne peuvent être opposées à l'assujetti à la TVA et aux tiers concernés par la facturation que dans le cadre :</p>
        <ul>
            <li>de la procédure de flagrance fiscale ;</li>
            <li>d'une vérification de comptabilité ;</li>
            <li>d'un examen de comptabilité.</li>
        </ul>

        <div style="background-color: #e7f3ff; padding: 15px; border-left: 4px solid #0d6efd; margin-top: 20px;">
            <h4 style="margin: 0 0 10px 0;">Droit du contribuable :</h4>
            <p style="margin: 0;">Le contribuable a le droit de se faire assister par un conseil lors de toute procédure d'enquête. Il peut également contester les constatations dans un délai de 30 jours.</p>
        </div>
        `
    ),

    // SLIDE 15: DROIT DE VISITE ET SAISIE
    createSlide(
        "MOYENS SPÉCIFIQUES DE CONTRÔLES - Droit de visite et de saisie",
        `
        <h3>• DROIT DE VISITE ET DE SAISIE</h3>

        <h4>DEFINITION: Qu'est ce que c'est?</h4>
        <p>Droit détenu par les agents ayant au moins le grade d'inspecteur, pour la recherche des infractions en matière d'impôts directs ou de TVA, à travers la saisie des pièces et documents, quel qu'en soit le support, de nature à apporter la preuve des agissements frauduleux dont la recherche a été autorisée.</p>

        <p>Cette mesure permet à l'Administration fiscale de rechercher en tous lieux, même privés, la preuve d'agissements frauduleux lorsqu'il existe des présomptions qu'un contribuable se soustrait à l'établissement ou au paiement d'impôts directs ou de la TVA:</p>
        <ol type="i">
            <li>en se livrant à des achats ou à des ventes sans facture ;</li>
            <li>en utilisant ou en délivrant des factures ou des documents ne se rapportant pas à des opérations réelles ;</li>
            <li>en omettant sciemment de passer ou de faire passer des écritures comptables ;</li>
            <li>en passant ou en faisant passer sciemment des écritures comptables inexactes ou fictives.</li>
        </ol>

        <h4>PROCEDURE: Autorisation préalable "Ordonnance"</h4>
        <p>L'agent des impôts qui souhaite exercer son droit de visite et de saisie doit saisir d'une demande d'autorisation le Président du Tribunal de Première Instance ou le Juge de Paix dans le ressort duquel sont situés les lieux à visiter.</p>
        `
    ),

    // SLIDE 16: SUITE VISITE ET SAISIE
    createSlide(
        "MOYENS SPÉCIFIQUES DE CONTRÔLES - Droit de visite et de saisie (Suite)",
        `
        <h4>PROCEDURE (Suite)</h4>
        <p>La demande d'autorisation doit comporter tous les éléments d'information en possession de l'Administration fiscale de nature à justifier la visite. Le magistrat doit vérifier que la demande qui lui est soumise est bien fondée.</p>
        <p>Chaque visite doit être autorisée par une ordonnance d'autorisation de visite et de saisie délivrée par le Président du Tribunal de Première Instance ou le Juge de Paix dans le ressort duquel sont situés les lieux à visiter.</p>

        <h4>Contenu de l'ordonnance</h4>
        <p>L'ordonnance doit comporter :</p>
        <ol type="i">
            <li>l'adresse des lieux à visiter ;</li>
            <li>le nom et la qualité du fonctionnaire habilité qui a sollicité et obtenu l'autorisation de procéder aux opérations de visite. Seuls les agents des impôts de catégorie A peuvent exercer le droit de visite et de saisie ;</li>
            <li>l'autorisation donnée au fonctionnaire qui procède aux opérations de visite de recueillir sur place des renseignements et justifications auprès de l'occupant des lieux ou de son représentant et, s'il est présent, du contribuable, ainsi que l'autorisation de demander à ceux-ci de justifier pendant la visite de leur identité et de leur adresse ;</li>
            <li>la mention de la faculté pour le contribuable de faire appel à un conseil de son choix. L'exercice de cette faculté n'entraîne pas la suspension des opérations de visite et de saisie.</li>
        </ol>
        `
    ),

    // SLIDE 17: MODALITÉS VISITE ET SAISIE
    createSlide(
        "MOYENS SPÉCIFIQUES DE CONTRÔLES - Modalités de visite",
        `
        <h4>Modalités et Horaires</h4>
        <p>La visite et la saisie de documents s'effectuent sous l'autorité et le contrôle du juge qui les a autorisées, qui désigne un officier de police judiciaire pour assister au déroulement et rendre compte.</p>
        <p>L'ordonnance est notifiée sur place contre récépissé ou décharge sur le procès-verbal.</p>
        <p>Le temps d'intervalle autorisé pour la visite est de 6 heures à 20 heures.</p>
        <p>La visite est effectuée en présence de l'occupant ou de son représentant. A défaut, l'officier de police judiciaire désigne 2 témoins en dehors de sa juridiction pour assister aux opérations.</p>
        <p>En cas d'obstruction à la visite par l'occupant ou son représentant, mention en est faite sur le PV.</p>

        <h4>Procès – verbal après la visite</h4>
        <p>Un procès-verbal relatant les modalités et le déroulement de l'opération et consignant les constatations effectuées, doit être dressé après les opérations, avec en annexe l'inventaire des pièces et documents saisis (à restituer au plus tard 6 mois après la visite).</p>
        <p>Les originaux du PV signé par l'OPJ, l'agent des impôts et l'occupant (ou son représentant) sont adressés au juge et copie remis à l'occupant.</p>

        <h4>Opposabilité des informations</h4>
        <p>Après restitution des documents saisis, les informations recueillies peuvent être opposées au contribuable dans le cadre de (i) la procédure de flagrance fiscale, (ii) d'un examen de la situation personnelle du contribuable, (iii) d'une vérification de comptabilité, (iv) d'un examen de comptabilité.</p>
        `
    ),

    // SLIDE 18: GARANTIES CONTRIBUABLE
    createSlide(
        "GARANTIES DU CONTRIBUABLE - Visite et saisie",
        `
        <h3>Quelles sont les garanties du contribuable dans cette procédure ?</h3>

        <ul>
            <li>Autorisation préalable du juge par une ordonnance;</li>
            <li>Les opérations doivent se dérouler en présence obligatoire d'un Officier de police judiciaire désigné à cet effet par le juge;</li>
            <li>Aucune perquisition ne peut être effectuée avant six (6) heures ni après vingt et une (21) heures</li>
            <li>Six (6) mois au maximum après les saisies, les documents saisis doivent être restitués au contribuable. A défaut de restitution, les informations recueillies lui sont alors inopposables;</li>
            <li>Les informations recueillies ne sont utilisables, en tout état de cause, que dans le cadre d'une flagrance fiscale ou d'un examen ou vérification de comptabilité.</li>
        </ul>

        <div style="background-color: #d1ecf1; padding: 15px; border-left: 4px solid #0dcaf0; margin-top: 20px;">
            <h4 style="margin: 0 0 10px 0;">Conseil important :</h4>
            <p style="margin: 0;">En cas de visite et saisie, faire immédiatement appel à un conseil fiscal. Vérifier scrupuleusement le respect de toutes les formalités légales. Consigner par écrit toutes les irrégularités éventuelles.</p>
        </div>
        `
    ),

    // SLIDE 19: FLAGRANCE FISCALE
    createSlide(
        "PROCÉDURE DE FLAGRANCE FISCALE - Définition",
        `
        <h3>LA PROCEDURE DE FLAGRANCE FISCALE</h3>

        <h4>DEFINITION [Qu'est-ce-que c'est?]</h4>
        <p>Il s'agit d'une procédure permettant aux agents de l'Administration fiscale ayant au moins le grade d'inspecteur de dresser un procès-verbal des faits frauduleux qu'ils ont été amenés à constater, afin de permettre au receveur des impôts de prendre des mesures conservatoires, sans autorisation préalable judiciaire, à hauteur d'un montant représentatif des impôts et amendes afférents à chaque année, exercice ou période concernés.</p>

        <h4>Quand est ce qu'elle est mise en œuvre?</h4>
        <p>Elle est mise en œuvre en cas de:</p>
        <ol>
            <li>circonstances susceptibles de menacer le recouvrement d'une créance fiscale ; et</li>
            <li>à l'encontre de contribuables se livrant à une activité professionnelle lorsqu'il est constaté l'un des faits suivants :</li>
        </ol>
        <ul>
            <li><strong>L'exercice d'une activité occulte</strong> ;</li>
            <li><strong>l'exercice d'une activité illicite</strong>, telle que le trafic de stupéfiants, de fausse monnaie ou d'armes ;</li>
            <li><strong>la délivrance ou comptabilisation de factures fictives</strong> ;</li>
            <li><strong>(3)</strong> la délivrance ou comptabilisation de factures par un assujetti qui ne pouvait ignorer qu'il participait à un circuit de fraude à la TVA ;</li>
            <li><strong>(4)</strong> la réitération d'achats, de ventes ou des prestations commercialisées non comptabilisées ;</li>
            <li><strong>(5)</strong> l'utilisation frauduleuse de logiciels permissifs de comptabilité ou de caisse de nature à priver la comptabilité de valeur probante ;</li>
            <li><strong>(6)</strong> l'absence réitérée de souscription de déclarations d'impôt.</li>
        </ul>
        `
    ),

    // SLIDE 20: SUITE FLAGRANCE FISCALE
    createSlide(
        "PROCÉDURE DE FLAGRANCE FISCALE - Suite",
        `
        <h4>A quelle occasion la Flagrance Fiscale peut elle être constatée?</h4>
        <p>Les constatations sont effectuées dans le cadre :</p>
        <ul>
            <li>de l'exercice du droit de communication;</li>
            <li>de l'exercice du droit d'enquête pour manquement aux règles de facturation;</li>
            <li>de l'exercice du droit de visite et de saisie pour la recherche des infractions en matière d'impôts directs et de TVA;</li>
            <li>d'un Examen de la Situation Fiscale Personnelle ;</li>
            <li>d'une vérification de comptabilité ;</li>
            <li>d'un examen de comptabilité.</li>
        </ul>

        <h4>PROCEDURE</h4>
        <p><strong>Procès Verbal</strong><br/>
        L'ensemble des faits est constaté dans un procès verbal de flagrance, établi et signé par un agent de catégorie A (qui conserve l'original) et le contribuable (qui conserve la copie).</p>

        <p><strong>Mesures conservatoires</strong><br/>
        Dès notification du PV, le receveur des impôts peut immédiatement prendre des mesures conservatoires, sans autorisation préalable judiciaire, à hauteur d'un montant représentatif des impôts et amendes afférents à chaque année, exercice ou période concernés.</p>

        <p><strong>Délai de reprise:</strong> Prolongé de 10 ans</p>

        <h4>Sanctions</h4>
        <p><strong>Amende:</strong> Minimum de 100 millions, réhaussé à 300 millions pour les Moyennes Entreprises et 1 milliard pour les Grandes Entreprises.</p>
        <p><strong>Majoration:</strong> 80% pour manœuvre frauduleuses en cas de rectification.</p>
        `
    ),

    // Continuer avec les slides suivants pour couvrir tout le contenu...
    // Je vais ajouter quelques slides supplémentaires pour montrer la structure

    // SLIDE 21: VOIES DE RECOURS FLAGRANCE
    createSlide(
        "VOIES DE RECOURS - Flagrance fiscale",
        `
        <h3>• Voies de recours [Que faut-il faire]</h3>
        <p>Lorsque vous faites l'objet d'une procédure de flagrance, vous devez saisir le juge pour obtenir mainlevée des biens saisis.</p>

        <h4>Saisine du juge et délai [Président du TPI]</h4>
        <p>Vous devez vous adresser directement au Président du tribunal qui statue sur les procédures d'urgence. Et cela, dans 8 jours francs à compter de la réception du PV de flagrance.</p>

        <h4>Comment saisir [Requête en Référé]</h4>
        <p>Vous devez agir en référé qui est une procédure d'urgence à travers une « requête » qui est une lettre simple, au contraire d'une « assignation » qui est un exploit d'huissier.</p>

        <h4>Les moyens de défense [comment se défendre?]</h4>
        <p>La procédure du référé ne traite pas au fond le contentieux, donc il s'agit juste de fournir au juge les éléments d'appréciation sur la régularité de la procédure, notamment la violation des conditions de fond ou de forme.</p>

        <h4>Le délai et conséquence de la décision du juge</h4>
        <p>La décision du juge doit intervenir dans un délai de 15 jours à compter de sa saisine.</p>
        <p>S'il doute sur la régularité, il rend une ordonnance de mainlevée.<br/>
        Qui entraine la mainlevée automatique des biens saisis.</p>
        `
    ),

    // SLIDE 22: TYPES DE CONTRÔLES
    createSlide(
        "TYPES DE CONTRÔLES - Vue d'ensemble",
        `
        <h3>CHAPITRE 2 - TYPES DE CONTROLE ET MODALITÉS PRATIQUES</h3>

        <h4>• CONTRÔLE SUR PIÈCE</h4>
        <p><strong>Définition [Qu'est-ce que c'est ?]</strong><br/>
        Le contrôle sur pièce que l'administration envisage depuis ses locaux sans envoie d'un avis préalable. Il n'implique aucune recherche extérieure aux déclarations et est systématique.</p>

        <p><strong>Sur quoi porte le contrôle sur pièce:</strong><br/>
        Il peut porter sur tous les documents joints à toute déclaration d'impôts, que ce soit les documents comptables ou autres documents obtenus par le droit de communication.</p>

        <p><strong>Quelle est finalité ce contrôle?</strong></p>
        <ul>
            <li>S'assurer que le contribuable a fait sa déclaration qu'il n'y a pas d'erreurs, insuffisances, inexactitude, omissions ou dissimulations;</li>
            <li>Que les données fournies sont cohérentes avec celles détenues par l'administration, éventuellement.</li>
        </ul>

        <p><strong>A quoi s'attendre après ce contrôle ?</strong><br/>
        A la fin d'un contrôle sur pièce, si l'administration constate d'irrégularité, elle peut décider de:</p>
        <ul>
            <li>l'envoi d'un avis de vérification de comptabilité ou d'un examen de comptabilité;</li>
            <li>l'envoi d'un avis de contrôle général ou d'ESP.</li>
        </ul>
        `
    ),

    // SLIDE 23: EXAMEN SITUATION FISCALE PERSONNELLE
    createSlide(
        "EXAMEN CONTRADICTOIRE DE LA SITUATION FISCALE PERSONNELLE",
        `
        <h3>EXAMEN CONTRADICTOIRE DE LA SITUATION FISCALE PERSONNELLE (ESP)</h3>

        <h4>• Définition [Qu'est-ce que c'est ?]</h4>
        <p>C'est un contrôle engagé par l'administration à l'encontre des personnes physiques ayant une obligation au titre d'imposition sur les revenus.</p>

        <h4>Les personnes concernées [Qui peut faire l'objet d'un ESP?]</h4>
        <p>Les personnes physiques, nationaux ou étrangers, pourvus qu'elles aient une obligation fiscale en Guinée.</p>

        <h4>A quoi consiste l'ESP?</h4>
        <p>Il s'agit d'établir la cohérence entre, d'une part, les revenus déclarés ou ayant fait l'objet d'une retenue à la source et, d'autre part, la situation patrimoniale, la situation de trésorerie et les éléments du train de vie des contribuables.<br/>
        C'est pour apprécier la situation de l'exploitant ou des principaux dirigeants ou associés de l'entreprise.</p>

        <h4>Où se déroule ce contrôle et quand ?</h4>
        <p>Il peut intervenir à la suite d'un contrôle sur pièce, d'un contrôle de comptabilité ou de manière d'office.</p>
        <p>Il peut se dérouler dans les locaux de l'administration, chez le conseil du contribuable, dans son entreprise ou à son domicile</p>

        <h4>Le déroulement de la procédure:</h4>
        <p><strong>Avis de vérification:</strong> le contribuable doit être informé par un avis de vérification par lettre recommencée avec accusé de réception. Cet examen commence 7 jour franc après la notification de l'avis.</p>
        `
    ),

    // SLIDE 24: SUITE ESP
    createSlide(
        "EXAMEN CONTRADICTOIRE DE LA SITUATION FISCALE PERSONNELLE (Suite)",
        `
        <h4>Contenu de l'avis de vérification:</h4>
        <p>Sous peine de nullité de la procédure, l'avis de vérification doit mentionner :</p>
        <ul>
            <li>les années soumises à vérification, dans la limite du droit de reprise ;</li>
            <li>les noms et grades des vérificateurs ;</li>
            <li>les noms et grades du ou des supérieurs hiérarchiques du vérificateur ;</li>
            <li>que la Charte des droits et obligations du contribuable vérifié peut être consultée sur le site internet de l'Administration fiscale ;</li>
            <li>que les dispositions de la Charte des droits et obligations du contribuable vérifié sont opposables à l'Administration fiscale ;</li>
            <li>que le contribuable a la faculté de se faire assister par un conseil de son choix.</li>
        </ul>

        <p><strong>Débat oral et contradictoire:</strong> Le contribuable doit avoir la possibilité d'avoir un débat oral et contradictoire avec le vérificateur</p>

        <p><strong>La durée :</strong> Je contrôle ne doit pas aller au-delà d'un an sauf cas de découverte d'activité occulte où le délai sera allongé à deux ans. Ce délai est allongé si, en raison des revenus à l'étranger, l'administration a dû recourir à l'assistance internationale.<br/>
        Ce délai court à partir de la réception de l'avis.</p>

        <p>A cette échéance, le vérificateur doit avoir notifié au contribuable une proposition de rectification ou un avis d'absence de rectification.</p>
        `
    ),

    // SLIDE 25: CAS D'IMPOSITION FORFAITAIRE
    createSlide(
        "CAS D'IMPOSITION FORFAITAIRE - ESP",
        `
        <h3>• Cas d'imposition forfaitaire:</h3>

        <p>Lorsque les agents des impôts constatent une disproportion marquée entre le train de vie d'un contribuable et les revenus qu'il a déclarés, ils peuvent, déterminer la base d'imposition en fonction de ce train de vie.</p>

        <p>La disproportion doit être au moins égale au double des revenus déclarés.</p>

        <p>Il s'agit d'une méthode d'évaluation forfaitaire du revenu sans considération de la déclaration souscrite.</p>

        <p>La décision doit être prise par un agent de catégorie A.</p>

        <p>Le contribuable peut apporter la preuve que ses revenus ou l'utilisation de son capital ou les emprunts qu'il a contracté lui ont permis d'assurer son train de vie.</p>

        <h4>Les personnes ne pouvant faire l'objet de cette procédure:</h4>
        <ul>
            <li>des contribuables privés de leur emploi connaissant une baisse passagère de revenus, sous réserve que leur train de vie soit cohérent avec leurs revenus antérieurement déclarés ;</li>
            <li>des contribuables à la retraite dont les ressources ont diminué sans qu'ils aient pour autant réduit certains éléments de leur train de vie, sous réserve que ce train de vie soit cohérent avec leurs revenus antérieurement déclarés ;</li>
            <li>des contribuables dont la hausse passagère du train de vie s'explique en raison d'une succession ou d'une donation ayant été déclarée à l'Administration fiscale.</li>
        </ul>
        `
    ),

    // SLIDE 26: ÉLÉMENTS TRAIN DE VIE
    createSlide(
        "ÉLÉMENTS DE TRAIN DE VIE - ESP",
        `
        <h3>Les éléments de train de vie</h3>
        <p>Les éléments du train de vie à considérer sont :</p>

        <ul>
            <li>le personnel de maison;</li>
            <li>le logement et ses accessoires ;</li>
            <li>les voitures automobiles destinées au transport des personnes ;</li>
            <li>les bateaux de plaisance à voile et/ou à moteur.</li>
        </ul>

        <p><strong>NB:</strong> Le barème mensuel des éléments de train de vie est établi par le CGI en ses articles de 1103.</p>

        <div style="background-color: #f8d7da; padding: 15px; border-left: 4px solid #dc3545; margin-top: 20px;">
            <h4 style="margin: 0 0 10px 0;">Attention :</h4>
            <p style="margin: 0;">L'ESP peut conduire à une imposition forfaitaire basée sur le train de vie lorsque la disproportion avec les revenus déclarés est au moins du double. Cette procédure est particulièrement intrusive et nécessite une défense rigoureuse.</p>
        </div>
        `
    ),

 // SLIDE 1: VÉRIFICATION DE COMPTABILITÉ - Définition et impôts concernés
createSlide(
    "VÉRIFICATION DE COMPTABILITÉ - Définition et impôts concernés",
    `
    <h3>A- Définition</h3>
    <p>Contrôle portant sur les impôts dont les bases d'imposition sont établies à partir de documents comptables.</p>
    <p><strong>Objectifs de l'Administration fiscale :</strong></p>
    <ul>
        <li>Vérifier la régularité, la sincérité et le caractère probant des écritures comptables</li>
        <li>Confronter les écritures comptables aux déclarations du contribuable</li>
        <li>Établir les rehaussements nécessaires le cas échéant</li>
    </ul>

    <h3>B- Impôts concernés</h3>
    <ul>
        <li>Impôt sur les Bénéfices Non Commerciaux</li>
        <li>Impôt sur les Bénéfices de l'Exploitation Agricole</li>
        <li>Impôt sur les Sociétés</li>
        <li>Impôt Minimum Forfaitaire</li>
        <li>Contribution Foncière Unique</li>
        <li>Taxe sur la Valeur Ajoutée</li>
        <li>Taxe sur les Activités Financières</li>
        <li>Taxe sur les Assurances</li>
        <li>Droits d'Accises</li>
    </ul>
    `
),

// SLIDE 2: PROCÉDURE DE VÉRIFICATION - Avis et contenu
createSlide(
    "PROCÉDURE DE VÉRIFICATION - Avis et contenu",
    `
    <h3>C- Procédure de vérification</h3>

    <h4>1) Avis de vérification</h4>
    <ul>
        <li>Notification par <strong>lettre recommandée avec accusé de réception</strong></li>
        <li>Délai minimal de <strong>7 jours francs</strong> avant le début de la vérification</li>
    </ul>

    <h4>2) Contenu obligatoire de l'avis (sous peine de nullité) :</h4>
    <ul>
        <li>Années soumises à vérification</li>
        <li>Impôts et taxes concernés</li>
        <li>Noms et grades des supérieurs hiérarchiques du vérificateur</li>
        <li>Mention de la charte des droits et obligations du contribuable</li>
        <li>Indication que le contribuable peut se faire assister par un conseil</li>
    </ul>
    `
),

// SLIDE 3: PROCÉDURE DE VÉRIFICATION - Suite
createSlide(
    "PROCÉDURE DE VÉRIFICATION - Suite",
    `
    <h4>3) Cas de dépassement du délai de reprise</h4>
    <ul>
        <li>Vérification possible des <strong>3 derniers exercices prescrits</strong></li>
        <li>Redressement limité au montant du déficit imputé ou du crédit de TVA reporté</li>
    </ul>

    <h4>4) Vérification inopinée</h4>
    <ul>
        <li>Possible <strong>sans avis préalable</strong></li>
        <li>Limitation aux constatations matérielles :</li>
        <ul>
            <li>Inventaire physique des moyens de production et du stock</li>
            <li>Inventaire des valeurs en caisse</li>
            <li>Relevé des prix pratiqués</li>
            <li>Vérification de l'existence des documents comptables</li>
            <li>Copie des fichiers informatiques</li>
        </ul>
    </ul>
    `
),

// SLIDE 4: PROCÉDURE DE VÉRIFICATION - Lieu et devoirs
createSlide(
    "PROCÉDURE DE VÉRIFICATION - Lieu et devoirs",
    `
    <h4>5) Lieu et heures de vérification</h4>
    <ul>
        <li>Siège de l'entreprise ou lieu principal d'établissement</li>
        <li>Lieu de conservation des documents (avec accord)</li>
        <li>Heures normales d'ouverture des locaux professionnels</li>
    </ul>

    <h4>6) Débat oral et contradictoire</h4>
    <p>Droit du contribuable à un <strong>débat contradictoire</strong> avec le vérificateur</p>

    <h4>7) Devoirs du contribuable</h4>
    <ul>
        <li>Présentation de <strong>tous les documents comptables</strong> (physiques et électroniques)</li>
        <li>Écritures en <strong>français</strong> et monnaie en <strong>GNF</strong></li>
        <li>Traduction et conversion si nécessaire</li>
    </ul>
    `
),

// SLIDE 5: POUVOIRS DES VÉRIFICATEURS ET DURÉE
createSlide(
    "POUVOIRS DES VÉRIFICATEURS ET DURÉE",
    `
    <h3>D- Pouvoirs des vérificateurs</h3>
    <ul>
        <li>Droit de visiter les locaux et installations professionnelles</li>
        <li>Interdiction d'ouvrir un coffre sans accord du contribuable</li>
        <li>Droit de prendre copie des livres et documents</li>
        <li>Interdiction d'emporter les documents sans demande écrite préalable et remise de reçu</li>
        <li>Limitation des informations demandables pour les professions soumises au secret professionnel</li>
    </ul>

    <h3>E- Durée de la vérification</h3>
    <ul>
        <li><strong>6 mois maximum</strong> pour les PME</li>
        <li><strong>9 mois maximum</strong> pour les grandes entreprises</li>
        <li>Dépassement possible dans certains cas :
            <ul>
                <li>Procès-verbal de flagrance fiscale</li>
                <li>Enquête judiciaire pour fraude fiscale</li>
                <li>Activité occulte du contribuable</li>
                <li>Graves irrégularités comptables</li>
            </ul>
        </li>
    </ul>
    `
),

// SLIDE 6: GARANTIES DU CONTRIBUABLE
createSlide(
    "GARANTIES DU CONTRIBUABLE",
    `
    <h3>F- Garanties du contribuable</h3>
    <ul>
        <li>Information préalable par <strong>avis de vérification complet</strong> (sous peine de nullité)</li>
        <li>Nouvel avis en cas d'action sur de nouveaux éléments</li>
        <li>Respect des délais maximum de vérification (6/9 mois)</li>
        <li>Droit au <strong>débat contradictoire</strong></li>
        <li>Droit d'opposer l'interprétation des textes fiscaux</li>
        <li>Droit de s'appuyer sur un rescrit fiscal</li>
        <li>Interdiction de nouveau contrôle pour la même période et mêmes impôts</li>
        <li>Droit de réponse dans les <strong>90 jours</strong> en cas de proposition de rectification</li>
    </ul>
    `
),

// SLIDE 7: PROCÉDURE DE RECTIFICATION CONTRADICTOIRE
createSlide(
    "PROCÉDURE DE RECTIFICATION CONTRADICTOIRE",
    `
    <h3>G- Procédure de rectification contradictoire</h3>

    <h4>1) Définition</h4>
    <p>Procédure de droit commun permettant à l'administration de corriger les erreurs, insuffisances, inexactitudes, omissions ou dissimulations dans les déclarations fiscales.</p>

    <h4>2) Principes fondamentaux :</h4>
    <ul>
        <li>Caractère <strong>contradictoire</strong></li>
        <li>Charge de la preuve incombant à l'administration</li>
        <li>Procédure de <strong>droit commun</strong></li>
        <li>Effet <strong>interruptif de prescription</strong></li>
    </ul>

    <h4>3) Déroulement :</h4>
    <p>Proposition de rectification envoyée par <strong>lettre recommandée</strong> ou remise en main propre après constatation d'anomalies.</p>
    `
),

// SLIDE 8: MENTIONS OBLIGATOIRES ET RÉPONSE
createSlide(
    "MENTIONS OBLIGATOIRES ET RÉPONSE",
    `
    <h4>4) Mentions obligatoires de la proposition (sous peine de nullité) :</h4>
    <ul>
        <li>Nature et motifs de la rectification</li>
        <li>Montant de la rectification (bases et droits)</li>
        <li>Nature des traitements effectués (si comptabilité informatisée)</li>
        <li>Teneur et origine des renseignements obtenus de tiers</li>
        <li>Grade et signature de l'agent</li>
        <li>Noms et grades des supérieurs hiérarchiques</li>
        <li>Droit à l'assistance par un conseil</li>
        <li>Délai de réponse de <strong>30 jours</strong> (prolongeable de 15 jours)</li>
    </ul>

    <h4>5) Réponse du contribuable :</h4>
    <ul>
        <li>Délai de <strong>30 jours</strong> pour répondre</li>
        <li>Prolongation possible de <strong>15 jours supplémentaires</strong></li>
        <li>Acceptation pure et simple ou présentation d'observations</li>
        <li>L'acceptation n'empêche pas une réclamation contentieuse ultérieure</li>
    </ul>
    `
),

// SLIDE 9: TAXATION D'OFFICE
createSlide(
    "TAXATION D'OFFICE",
    `
    <h3>H- Procédure de taxation d'office</h3>

    <h4>1) Définition</h4>
    <p>Procédure <strong>exceptionnelle</strong> permettant à l'administration d'imposer le contribuable sur la base des seuls éléments à sa disposition, <strong>sans observations préalables</strong> du contribuable.</p>

    <h4>2) Principes :</h4>
    <ul>
        <li>Caractère <strong>non contradictoire</strong></li>
        <li>Charge de la preuve incombant à l'administration</li>
        <li>Procédure <strong>exceptionnelle</strong></li>
    </ul>

    <h4>3) Cas de recours :</h4>
    <ul>
        <li>Défaut ou retard de production des déclarations</li>
        <li>Défaut de réponse aux demandes d'éclaircissements</li>
        <li>Absence de documentation de prix de transfert</li>
        <li>Rejet de comptabilité</li>
        <li>Défaut de désignation d'un représentant fiscal</li>
        <li>Opposition à contrôle fiscal</li>
    </ul>
    `
),

// SLIDE 10: CONDITIONS DE MISE EN ŒUVRE
createSlide(
    "CONDITIONS DE MISE EN ŒUVRE - Taxation d'office",
    `
    <h4>4) Conditions de mise en œuvre :</h4>

    <p><strong>a) Défaut ou retard de production des déclarations :</strong></p>
    <ul>
        <li>Mise en demeure préalable obligatoire (sauf cas particuliers)</li>
        <li>Délai de régularisation de <strong>30 jours</strong></li>
    </ul>

    <p><strong>b) Défaut de réponse aux demandes d'éclaircissements :</strong></p>
    <ul>
        <li>Refus de répondre après mise en demeure</li>
        <li>Réponse partielle, tardive ou non satisfaisante</li>
    </ul>

    <p><strong>c) Absence de documentation de prix de transfert :</strong></p>
    <ul>
        <li>Abstention de présentation</li>
        <li>Documentation incomplète</li>
    </ul>

    <p><strong>d) Rejet de comptabilité :</strong></p>
    <ul>
        <li>Comptabilité irrégulière (omissions, erreurs graves, absence de pièces justificatives)</li>
        <li>Utilisation de logiciel frauduleux</li>
        <li>Doutes sur la sincérité de comptabilité apparemment régulière</li>
        <li>Mise en demeure obligatoire (délai de 15 jours prorogeable)</li>
    </ul>
    `
),

// SLIDE 11: SUITE CONDITIONS ET CONSÉQUENCES
createSlide(
    "SUITE CONDITIONS ET CONSÉQUENCES",
    `
    <p><strong>e) Défaut de désignation d'un représentant fiscal :</strong></p>
    <ul>
        <li>Obligation non satisfaite dans les <strong>60 jours</strong> après mise en demeure</li>
    </ul>

    <p><strong>f) Opposition à contrôle fiscal :</strong></p>
    <ul>
        <li>Opposition à la mise en œuvre du contrôle</li>
        <li>Opposition à l'accès aux documents</li>
        <li>Mise en demeure de <strong>3 jours</strong> pour cesser l'opposition</li>
        <li>Majoration de <strong>100%</strong> des droits en plus de la taxation d'office</li>
        <li>Amende de <strong>25 millions GNF</strong> en cas d'opposition collective</li>
    </ul>

    <h4>5) Conséquences de la taxation d'office :</h4>
    <ul>
        <li>Exclusion de la procédure normale de rectification contradictoire</li>
        <li>Émission d'un avis de mise à recouvrement</li>
        <li>Évaluation des bases "aussi exacte que possible"</li>
        <li>Droits et pénalités majorés</li>
        <li>Notification obligatoire et motivée (sous peine de nullité)</li>
        <li>Interruption de la prescription du droit de reprise</li>
    </ul>
    `
),

// SLIDE 12: RÉGULARISATION SPONTANÉE
createSlide(
    "RÉGULARISATION SPONTANÉE",
    `
    <h3>I- Procédure de régularisation spontanée</h3>

    <h4>1) Conditions de fond :</h4>
    <ul>
        <li>Ne concerne pas une infraction exclusive de bonne foi</li>
        <li>Doit viser <strong>l'ensemble des impôts</strong> soumis à vérification</li>
    </ul>

    <h4>2) Conditions de forme :</h4>
    <ul>
        <li>Demande par <strong>lettre recommandée</strong> ou remise en main propre</li>
        <li>Demande effectuée <strong>avant toute proposition de rectification</strong></li>
        <li>Impossibilité de deuxième demande après première acceptation non honorée</li>
        <li>Déclaration régularisée dans les <strong>30 jours</strong> de l'acceptation</li>
    </ul>

    <h4>3) Conséquences :</h4>
    <ul>
        <li>Paiement des suppléments de droits simples et intérêts de retard</li>
        <li>Exclusion des pénalités fiscales</li>
    </ul>
    `
),

// SLIDE 13: VOIES DE RECOURS - Contentieux de l'assiette
createSlide(
    "VOIES DE RECOURS - Contentieux de l'assiette",
    `
    <h3>J- Voies de recours du contribuable</h3>

    <h4>1) Contentieux de l'assiette</h4>

    <p><strong>a) Dépôt de la réclamation :</strong></p>
    <ul>
        <li>Par <strong>lettre recommandée</strong> ou remise en main propre contre décharge</li>
        <li>Au service des impôts à l'origine de l'imposition</li>
        <li>Permet de contester tous les impôts visés par l'avis de vérification</li>
    </ul>

    <p><strong>b) Objet de la réclamation :</strong></p>
    <ul>
        <li>Réparation d'erreurs dans l'assiette ou la liquidation de l'impôt</li>
        <li>Contestation d'impôts et taxes émis par l'administration</li>
        <li>Restitution d'impôts versés indûment</li>
        <li>Bénéfice d'exonérations ou avantages fiscaux</li>
    </ul>
    `
),

// SLIDE 14: CONDITIONS DE RECEVABILITÉ
createSlide(
    "CONDITIONS DE RECEVABILITÉ",
    `
    <h4>2) Conditions de recevabilité</h4>

    <p><strong>a) Identification et contenu :</strong></p>
    <ul>
        <li>Identification complète du réclamant (nom, NIF, adresse)</li>
        <li>Mention de la nature et du montant des impôts contestés</li>
        <li>Exposé des moyens de fait et de droit</li>
        <li>Joindre l'avis de mise en recouvrement si possible</li>
    </ul>

    <p><strong>b) Pièces justificatives :</strong></p>
    <ul>
        <li>Production des pièces justifiant l'argumentation</li>
        <li>Justificatifs de paiement de la partie non contestée</li>
    </ul>

    <p><strong>c) Délai de réclamation :</strong></p>
    <ul>
        <li>Au plus tard le <strong>31 décembre de la deuxième année</strong> suivant :
            <ul>
                <li>La mise en recouvrement du rôle</li>
                <li>La notification d'un AMR</li>
                <li>Le versement de l'impôt</li>
                <li>La notification de proposition de rectification ou taxation d'office</li>
            </ul>
        </li>
    </ul>
    `
),

// SLIDE 15: CHARGE DE LA PREUVE
createSlide(
    "CHARGE DE LA PREUVE",
    `
    <h4>3) Charge de la preuve</h4>

    <p><strong>a) Preuve à la charge du contribuable :</strong></p>
    <ul>
        <li>En cas de taxation forfaitaire ou d'office</li>
        <li>Litiges sur impositions basées sur ses propres déclarations</li>
        <li>En cas d'accord exprès aux rectifications de l'administration</li>
        <li>Lorsque la réclamation vise à rectifier une erreur à son détriment</li>
    </ul>

    <p><strong>b) Preuve à la charge de l'administration :</strong></p>
    <ul>
        <li>Impôt établi sans déclaration du contribuable</li>
        <li>Contestation de l'obligation de souscrire une déclaration</li>
        <li>Justification d'une évaluation d'office</li>
        <li>Contestation des motifs de procédure d'office</li>
        <li>Compensation entre dégrèvement et omissions</li>
        <li>Établissement de manquements délibérés en cas de pénalités</li>
        <li>Procédure de redressement contradictoire (principe général)</li>
    </ul>
    `
),

// SLIDE 16: SURSI DE PAIEMENT
createSlide(
    "SURSI DE PAIEMENT",
    `
    <h4>4) Sursis de paiement</h4>

    <p><strong>a) Conditions :</strong></p>
    <ul>
        <li>Montant ≤ 10 millions GNF : sursis de droit</li>
        <li>Montant > 10 millions GNF : garanties requises</li>
        <li>Demande unique pour une même créance</li>
    </ul>

    <p><strong>b) Garanties acceptées :</strong></p>
    <ul>
        <li>Versement de consignation</li>
        <li>Caution bancaire</li>
        <li>Caution hypothécaire du dirigeant</li>
        <li>Affectations hypothécaires d'immeubles</li>
    </ul>

    <p><strong>c) Effets du sursis :</strong></p>
    <ul>
        <li>Décision du receveur dans les <strong>15 jours</strong> (sinon acceptation tacite)</li>
        <li><strong>30 jours</strong> pour constituer la garantie</li>
        <li>Suspension de l'exigibilité et de la prescription</li>
    </ul>
    `
),

// SLIDE 17: DÉCISION ADMINISTRATIVE ET RECOURS
createSlide(
    "DÉCISION ADMINISTRATIVE ET RECOURS",
    `
    <h4>5) Décision de l'administration</h4>
    <ul>
        <li>Délai de réponse : <strong>6 mois</strong> (prorogeable de 3 mois)</li>
        <li>Silence après 6 mois = rejet implicite</li>
        <li>Décision de rejet doit être motivée et mentionner les voies de recours</li>
        <li>Notification par lettre recommandée ou remise contre décharge</li>
    </ul>

    <h4>6) Recours devant le juge</h4>
    <ul>
        <li>Possible seulement en cas de rejet total ou partiel</li>
        <li>Délai d'appel : <strong>2 mois</strong></li>
        <li>Décision irrégulière en la forme si absence de mention des voies de recours</li>
    </ul>

    <h4>7) Contentieux de recouvrement</h4>
    <ul>
        <li>Porte sur la régularité formelle des actes de poursuite</li>
        <li>Délai de contestation : <strong>2 mois</strong> à partir de la notification</li>
        <li>Absence de réponse dans les <strong>3 mois</strong> = acceptation tacite</li>
    </ul>
    `
),   
// SLIDE 18: TABLEAU DES INTERACTIONS - Demandes d'éclaircissement
createSlide(
    "TABLEAU DES INTERACTIONS ADMINISTRATION-CONTRIBUABLE",
    `
    <h3>Tableau pratique des interactions</h3>

    <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; font-size: 14px;">
        <tr style="background-color: #f2f2f2;">
            <th width="20%">Nature</th>
            <th width="20%">Acteur</th>
            <th width="25%">Étape</th>
            <th width="15%">Délai</th>
            <th width="20%">Observation</th>
        </tr>
        <tr>
            <td rowspan="2"><strong>Demande d'éclaircissement et justification</strong></td>
            <td>L'administration fiscale</td>
            <td>Envoi d'une demande de justification auprès du contribuable</td>
            <td>Ne concerne pas la période couverte par la prescription</td>
            <td></td>
        </tr>
        <tr>
            <td>Contribuable</td>
            <td>Le contribuable décharge la demande et rédige la justification demandée par l'administration</td>
            <td>30 jours pour répondre</td>
            <td>Mise en demeure possible en 15 jours pour compléter la réponse</td>
        </tr>
    </table>

    <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; font-size: 14px; margin-top: 20px;">
        <tr style="background-color: #f2f2f2;">
            <th width="20%">Nature</th>
            <th width="20%">Acteur</th>
            <th width="25%">Étape</th>
            <th width="15%">Délai</th>
            <th width="20%">Observation</th>
        </tr>
        <tr>
            <td rowspan="2"><strong>Droit de communication</strong></td>
            <td>L'administration fiscale</td>
            <td>Adresse un avis de passage au contribuable</td>
            <td>Période couverte par la prescription</td>
            <td></td>
        </tr>
        <tr>
            <td>Le contribuable</td>
            <td>Communique les documents ou pièces demandés par l'administration</td>
            <td>Présence des agents dans les locaux</td>
            <td>Refus de communication → amende</td>
        </tr>
    </table>
    `
),

// SLIDE 19: TABLEAU DES INTERACTIONS - Suite
createSlide(
    "TABLEAU DES INTERACTIONS - Suite",
    `
    <h3>Tableau pratique des interactions (suite)</h3>

    <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; font-size: 14px;">
        <tr style="background-color: #f2f2f2;">
            <th width="20%">Nature</th>
            <th width="20%">Acteur</th>
            <th width="25%">Étape</th>
            <th width="15%">Délai</th>
            <th width="20%">Observation</th>
        </tr>
        <tr>
            <td rowspan="2"><strong>Droit d'enquête<br>(manquement aux règles de facturation)</strong></td>
            <td>L'administration fiscale</td>
            <td>Remet un avis d'enquête à l'assujetti</td>
            <td>PV établi 30 jours après convocation/visite</td>
            <td></td>
        </tr>
        <tr>
            <td>L'assujetti</td>
            <td>Transmission des documents relatifs aux opérations</td>
            <td>Signature du PV avec copie</td>
            <td></td>
        </tr>
    </table>

    <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; font-size: 14px; margin-top: 20px;">
        <tr style="background-color: #f2f2f2;">
            <th width="20%">Nature</th>
            <th width="20%">Acteur</th>
            <th width="25%">Étape</th>
            <th width="15%">Délai</th>
            <th width="20%">Observation</th>
        </tr>
        <tr>
            <td rowspan="2"><strong>Contrôle sur pièces</strong></td>
            <td>L'administration fiscale</td>
            <td>Adresse une proposition de rectification au contribuable</td>
            <td>Période couverte par la prescription</td>
            <td>Défaut de réponse en 90 jours = acceptation</td>
        </tr>
        <tr>
            <td>Contribuable</td>
            <td>Adresse une réponse sur cette proposition</td>
            <td>30 jours (prorogeable de 15 jours)</td>
            <td>Montant exigible avec mise en demeure</td>
        </tr>
    </table>
    `
),

// SLIDE 20: TABLEAU DES INTERACTIONS - Fin
createSlide(
    "TABLEAU DES INTERACTIONS - Fin",
    `
    <h3>Tableau pratique des interactions (fin)</h3>

    <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; font-size: 14px;">
        <tr style="background-color: #f2f2f2;">
            <th width="20%">Nature</th>
            <th width="20%">Acteur</th>
            <th width="25%">Étape</th>
            <th width="15%">Délai</th>
            <th width="20%">Observation</th>
        </tr>
        <tr>
            <td rowspan="2"><strong>Examen contradictoire de la situation fiscale personnelle</strong></td>
            <td>L'administration fiscale</td>
            <td>Avis de vérification notifié au contribuable</td>
            <td>Début après 7 jours de la notification</td>
            <td>Durée max : 1 an après réception de l'avis</td>
        </tr>
        <tr>
            <td>Contribuable</td>
            <td>Débat oral et contradictoire avec le vérificateur</td>
            <td></td>
            <td></td>
        </tr>
    </table>

    <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; font-size: 14px; margin-top: 20px;">
        <tr style="background-color: #f2f2f2;">
            <th width="20%">Nature</th>
            <th width="20%">Acteur</th>
            <th width="25%">Étape</th>
            <th width="15%">Délai</th>
            <th width="20%">Observation</th>
        </tr>
        <tr>
            <td rowspan="2"><strong>Examen de comptabilité</strong></td>
            <td>L'administration fiscale</td>
            <td>Le contribuable doit être informé par lettre avec décharge</td>
            <td>Début 7 jours après notification</td>
            <td></td>
        </tr>
        <tr>
            <td>Contribuable</td>
            <td>Présente les documents comptables prévus par la loi</td>
            <td>15 jours pour envoyer copie des fichiers comptables</td>
            <td>Défaut de transmission → procès-verbal</td>
        </tr>
    </table>
    `
),

// SLIDE 21: DROITS D'INTERVENTION DE L'ADMINISTRATION
createSlide(
    "DROITS D'INTERVENTION DE L'ADMINISTRATION",
    `
    <h3>Droits d'intervention de l'administration fiscale</h3>

    <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; font-size: 14px;">
        <tr style="background-color: #f2f2f2;">
            <th width="25%">Droit</th>
            <th width="35%">Portée et modalités</th>
            <th width="40%">Obligations du contribuable</th>
        </tr>
        <tr>
            <td><strong>Demande d'éclaircissement ou de justification</strong></td>
            <td>Porte sur tous les comptables sociaux. Délai de 30 jours pour réponse complète</td>
            <td>Réponse complète dans le délai. Information en cas d'empêchement</td>
        </tr>
        <tr>
            <td><strong>Demande de communication</strong></td>
            <td>Exercée auprès du contribuable ou tiers (banque, client). Doit préciser pièces, impôts et délais</td>
            <td>Accusé de réception, respect du délai, réponse complète. Continuité nécessaire</td>
        </tr>
        <tr>
            <td><strong>Droit d'enquête</strong></td>
            <td>Exercé contre les assujettis à la TVA. Administration peut agir à l'improviste ou convoquer</td>
            <td>Recevoir les enquêteurs, présenter factures, comptabilité matière, documents professionnels</td>
        </tr>
        <tr>
            <td><strong>Procédure de visite ou de saisie</strong></td>
            <td>Exercée sur impôts directs et TVA. Nécessite autorisation préalable du juge</td>
            <td>Protégé par exigences formelles : autorisation judiciaire, heures de perquisition, restitution documents</td>
        </tr>
        <tr>
            <td><strong>Flagrance fiscale</strong></td>
            <td>Constats et mesures conservatoires en cas de : menace recouvrement, activité occulte, factures fictives, etc.</td>
            <td>Droit à PV après constats. Saisie du juge sous 8 jours. Possibilité main levée</td>
        </tr>
    </table>
    `
),
// SLIDE : INTRODUCTION Cas pratiques
    createSlide(
        "Jour 5 : Cas pratiques sur le remboursement de crédit TVA & Procédures Fiscales",
        `
        <div style="font-size: 1.1em;">
            <p><strong>5ème Partie : Exercices pratiques et études de cas</strong></p>
            <p style="font-size: 1.2em; color: var(--fuel-yellow);"><strong>Objectifs pédagogiques :</strong></p>
            <ul>
                <li>Mettre en pratique les notions fiscales vues pendant la formation</li>
                <li>Développer la capacité à identifier les erreurs fréquentes en matière fiscale</li>
                <li>Renforcer les compétences dans la préparation et la sécurisation des déclarations fiscales</li>
                <li>Favoriser une interaction dynamique par la résolution de cas réels et simulés</li>
            </ul>
        </div>
        `,
        "JOE-ADAMS & MADISON - SYCAMORE - Fiscalité minière - 24 octobre 2025"
    ),

    createSlide(
        "EXERCICE 1 : Simulation de calcul d'une redevance minière",
        `
        <h3>CAS PRATIQUE</h3>

        <ul>
            <li>Société SYCAMORE produit 5 000 kg d'or sur une période donnée.</li>
            <li>Prix de référence fixé par la Banque Centrale : 600 000 GNF / g.</li>
            <li>Taux de redevance applicable (Code minier, art. 161) : 5% pour l'or.</li>
        </ul>

        <hr/>

        <h3>TRAVAIL DEMANDÉ</h3>
        <p>Il vous est demandé de :</p>
        <ul>
            <li>Déterminer la base imposable (quantité x prix de référence).</li>
            <li>Calculer la redevance due.</li>
            <li>Vérifier l'impact d'un éventuel retard de paiement (pénalités).</li>
        </ul>

        <div style="background-color: #e7f3ff; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h4 style="margin: 0 0 10px 0;">Données de calcul :</h4>
            <p style="margin: 5px 0;">• Production : 5 000 kg = 5 000 × 1 000 = 5 000 000 g</p>
            <p style="margin: 5px 0;">• Prix de référence : 600 000 GNF/g</p>
            <p style="margin: 5px 0;">• Taux redevance : 5%</p>
        </div>
        `
    ),

    // SLIDE 28: EXERCICE 2 - REMBOURSEMENT TVA
    createSlide(
        "EXERCICE 2 : Dossier de remboursement de crédit de TVA",
        `
        <h3>CONTEXTE</h3>

        <ul>
            <li>SYCAMORE a acquis des équipements miniers exonérés de droits de douane mais soumis à TVA.</li>
            <li>TVA déductible cumulée sur la période : 2 milliards GNF.</li>
            <li>TVA collectée sur les ventes locales : 500 millions GNF.</li>
        </ul>

        <hr/>

        <h3>TRAVAIL DEMANDÉ</h3>
        <p>Il vous est demandé de :</p>
        <ul>
            <li>Identifier les pièces justificatives à produire ;</li>
            <li>Déterminer le montant de crédit de TVA à rembourser ;</li>
            <li>Présenter la procédure pratique de demande de remboursement auprès de l'Administration fiscale.</li>
        </ul>

        <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h4 style="margin: 0 0 10px 0;">Rappel des conditions :</h4>
            <p style="margin: 5px 0;">• Crédit pendant 3 mois consécutifs</p>
            <p style="margin: 5px 0;">• Montant minimal : 100 000 000 GNF</p>
            <p style="margin: 5px 0;">• Délai prescription : 12 mois</p>
            <p style="margin: 5px 0;">• Quitus fiscal à jour</p>
        </div>
        `
    ),

    // SLIDE 29: EXERCICE 3 - DÉCLARATION IS & IMF
    createSlide(
        "EXERCICE 3 : Simulation de déclaration IS & IMF",
        `
        <h3>CAS PRATIQUE</h3>

        <ul>
            <li>Résultat comptable SYCAMORE : 100 milliards GNF.</li>
            <li>Réintégrations extra-comptables : +5 milliards GNF.</li>
            <li>Déductions extra-comptables : -3 milliards GNF.</li>
            <li>Taux IS : 35%.</li>
            <li>Taux IMF : 1,5% du chiffre d'affaires.</li>
            <li>Chiffre d'affaires : 200 milliards GNF.</li>
        </ul>

        <hr/>

        <h3>TRAVAIL DEMANDÉ</h3>
        <p>Il vous est demandé de :</p>
        <ul>
            <li>Déterminer le résultat fiscal imposable.</li>
            <li>Calculer l'IS dû.</li>
            <li>Calculer l'IMF et comparer avec l'IS (retenir le plus élevé).</li>
            <li>Discuter les avantages fiscaux miniers applicables (amortissement accéléré, exonérations).</li>
        </ul>

        <div style="background-color: #d1ecf1; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h4 style="margin: 0 0 10px 0;">Formules de calcul :</h4>
            <p style="margin: 5px 0;">• Résultat fiscal = Résultat comptable + Réintégrations - Déductions</p>
            <p style="margin: 5px 0;">• IS = Résultat fiscal × 35%</p>
            <p style="margin: 5px 0;">• IMF = Chiffre d'affaires × 1,5%</p>
            <p style="margin: 5px 0;">• Impôt dû = Max(IS, IMF)</p>
        </div>
        `
    ),

    // SLIDE 30: EXERCICE 4 - RÉPONSE REDRESSEMENT
    createSlide(
        "EXERCICE 4 : Réponse à une notification de redressement fiscal",
        `
        <h3>CAS PRATIQUE</h3>

        <ul>
            <li>L'Administration notifie un redressement de 10 milliards GNF sur la non-déductibilité de certaines charges.</li>
            <li>Délai de réponse : 30 jours.</li>
        </ul>

        <hr/>

        <h3>TRAVAIL DEMANDÉ</h3>
        <p>Il vous est demandé de :</p>

        <ol>
            <li><strong>Rédiger un projet de réponse structurée :</strong>
                <ul>
                    <li>Introduction (rappel de la notification)</li>
                    <li>Moyens juridiques (références au CGI et Code minier)</li>
                    <li>Arguments factuels (contrats, justificatifs)</li>
                    <li>Conclusion (demande d'abandon du redressement ou, à défaut, atténuation)</li>
                </ul>
            </li>
            <li><strong>Simuler une soutenance orale devant l'Administration fiscale.</strong></li>
        </ol>

        <div style="background-color: #f8d7da; padding: 15px; border-radius: 5px; margin-top: 20px;">
            <h4 style="margin: 0 0 10px 0;">Structure type d'une réponse :</h4>
            <p style="margin: 5px 0;">1. En-tête et référence</p>
            <p style="margin: 5px 0;">2. Exposé des faits</p>
            <p style="margin: 5px 0;">3. Discussion juridique</p>
            <p style="margin: 5px 0;">4. Pièces justificatives</p>
            <p style="margin: 5px 0;">5. Conclusion et demande</p>
        </div>
        `
    ),

    // SLIDE 31: TABLEAU DES SANCTIONS
    createSlide(
        "TABLEAU DES SANCTIONS FISCALES",
        `
        <h3>ANNEXE 1: TABLEAU DE SANCTION</h3>

        <table style="width: 100%; border-collapse: collapse; font-size: 0.8em;">
            <thead>
                <tr style="background-color: var(--fuel-yellow);">
                    <th style="padding: 8px; border: 1px solid #ddd;">Nature de sanction</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Base de sanction</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Taux de sanction</th>
                    <th style="padding: 8px; border: 1px solid #ddd;">Observations</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Intérêt de retard</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">L'intérêt de retard s'applique sur le montant des créances de nature fiscale mises à la charge du contribuable ou dont le versement a été différé</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">1,5% par mois ou fraction de mois. Le point de départ de l'intérêt de retard est le premier jour du mois suivant celui au cours duquel l'impôt devait être acquitté.</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">L'intérêt de retard est applicable à sur tous les impôts du droit commun en république de guinée</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Pénalités pour retard ou défaut de déclaration</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Il s'agit des droits qui auraient dû être déclarés ou déclarés tardivement.</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">
                        • 40 % lorsque la déclaration n'a pas été déposée dans les quinze (15) jours suivant la réception d'une mise en demeure de déposer cette déclaration ;<br/>
                        • 80% en cas d'exercice d'une activité occulte ;
                    </td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Ces pénalités sont applicables pour tous les impôts en cas de défaut ou retard de déclaration</td>
                </tr>
                <tr>
                    <td style="padding: 8px; border: 1px solid #ddd;">Pénalités pour insuffisance de déclaration</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">Il s'agit des droits redressés.</td>
                    <td style="padding: 8px; border: 1px solid #ddd;">
                        • 40% en cas de manquement délibéré ;<br/>
                        • 80% en cas d'abus de droit fiscal ;<br/>
                        • 80% en cas de manœuvres frauduleuses ;<br/>
                        • 80% en cas de dissimulation d'une partie du prix stipulé dans un contrat
                    </td>
                    <td style="padding: 8px; border: 1px solid #ddd;">le contribuable a l'obligation de fournir les déclarations ainsi que les preuves justifiant cette déclaration à l'administration fiscale.</td>
                </tr>
            </tbody>
        </table>
        `
    ),

    // SLIDE 32: SYNTHÈSE ET CONCLUSION
    createSlide(
        "SYNTHÈSE GÉNÉRALE ET ÉVALUATION",
        `
        <h3>Points Clés de la Formation - Jour 5</h3>

        <h4>Remboursement Crédit TVA</h4>
        <ul>
            <li>Conditions strictes : 3 mois consécutifs, 100M GNF minimum, délai 12 mois</li>
            <li>Dossier complet avec toutes les pièces justificatives</li>
            <li>Suivi rigoureux des délais administratifs</li>
            <li>Anticipation des risques de rejet</li>
        </ul>

        <h4>Procédures de Contrôle</h4>
        <ul>
            <li>Respect scrupuleux des droits du contribuable</li>
            <li>Assistance systématique par un conseil</li>
            <li>Contestation des irrégularités de procédure</li>
            <li>Utilisation des voies de recours appropriées</li>
        </ul>

        <h4>Bonnes Pratiques SYCAMORE</h4>
        <ul>
            <li>Mise en place d'un manuel de procédures fiscales internes</li>
            <li>Désignation d'un référent fiscal dédié</li>
            <li>Plan de formation continue</li>
            <li>Veille réglementaire active</li>
        </ul>

        <div style="background-color: var(--tulip-tree); color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
            <h4 style="margin: 0 0 15px 0;">Évaluation de la Formation</h4>
            <p style="margin: 0;">Questionnaire de satisfaction et tour de table des acquis - Discussion ouverte sur les préoccupations pratiques</p>
        </div>
        `
    )
];
export default function Day2ExportPage() {
  return <DayExport dayNumber={5} slides={day5Slides} />;
}