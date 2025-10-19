// src/app/components/QandA.js
'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export default function QandA({ dayNumber, currentSlide = 1 }) {
  const [questions, setQuestions] = useState([]);
  const [newText, setNewText] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [answerInputs, setAnswerInputs] = useState({});
  const [respondentName, setRespondentName] = useState('');
  const [activeTab, setActiveTab] = useState('question');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [localCurrentSlide, setLocalCurrentSlide] = useState(currentSlide);
  const supabase = createClient();

  // Mettre à jour le slide local quand la prop change
  useEffect(() => {
    setLocalCurrentSlide(currentSlide);
  }, [currentSlide]);

  // Charger les questions et commentaires
  useEffect(() => {
    if (isPanelOpen) {
      fetchQuestions();
    }
  }, [dayNumber, isPanelOpen]);

  const fetchQuestions = async () => {
    const { data, error } = await supabase
      .from('formation_questions')
      .select('*')
      .eq('day_number', dayNumber)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setQuestions(data);
    }
  };

  const addEntry = async () => {
    if (!newText.trim() || !userName.trim()) {
      alert('Veuillez remplir votre nom et votre ' + (activeTab === 'question' ? 'question' : 'commentaire'));
      return;
    }

    setLoading(true);
    const { error } = await supabase
      .from('formation_questions')
      .insert([{
        day_number: dayNumber,
        slide_number: localCurrentSlide,
        type: activeTab,
        question_text: newText.trim(),
        asked_by: userName.trim()
      }]);

    if (!error) {
      setNewText('');
      fetchQuestions();
    } else {
      console.error('Erreur lors de l\'envoi:', error);
      alert('Erreur lors de l\'envoi');
    }
    setLoading(false);
  };

  const submitAnswer = async (questionId) => {
    const answerText = answerInputs[questionId];
    if (!answerText?.trim() || !respondentName.trim()) {
      alert('Veuillez remplir votre nom et votre réponse');
      return;
    }

    const { error } = await supabase
      .from('formation_questions')
      .update({
        answer_text: answerText.trim(),
        answered_by: respondentName.trim(),
        is_answered: true,
        answered_at: new Date().toISOString()
      })
      .eq('id', questionId);

    if (!error) {
      setAnswerInputs({...answerInputs, [questionId]: ''});
      fetchQuestions();
    } else {
      console.error('Erreur lors de la réponse:', error);
      alert('Erreur lors de l'envoi de la réponse');
    }
  };

  // Filtrer les questions et commentaires
  const questionsOnly = questions.filter(q => q.type === 'question');
  const commentsOnly = questions.filter(q => q.type === 'commentaire');

  return (
    <>
      {/* Bouton flottant pour ouvrir le panneau */}
      <button 
        className="qanda-toggle-button"
        onClick={() => setIsPanelOpen(true)}
      >
        💬 Questions & Commentaires
      </button>

      {/* Panneau latéral */}
      {isPanelOpen && (
        <div className="qanda-panel-overlay">
          <div className="qanda-panel">
            <div className="qanda-panel-header">
              <h3>Questions & Commentaires - Jour {dayNumber}</h3>
              <button 
                className="close-button"
                onClick={() => setIsPanelOpen(false)}
              >
                &times;
              </button>
            </div>

            <div className="qanda-panel-content">
              {/* Indicateur de slide actuel */}
              <div className="slide-indicator">
                <strong>Slide actuelle : {localCurrentSlide}</strong>
              </div>

              {/* Onglets Question/Commentaire */}
              <div className="tabs">
                <button 
                  className={`tab ${activeTab === 'question' ? 'active' : ''}`}
                  onClick={() => setActiveTab('question')}
                >
                  ❓ Poser une Question
                </button>
                <button 
                  className={`tab ${activeTab === 'commentaire' ? 'active' : ''}`}
                  onClick={() => setActiveTab('commentaire')}
                >
                  💬 Faire un Commentaire
                </button>
              </div>

              {/* Formulaire dynamique */}
              <div className="entry-form">
                <h4>
                  {activeTab === 'question' ? 'Poser une question' : 'Faire un commentaire'} 
                  <span className="slide-ref">(Slide {localCurrentSlide})</span>
                </h4>
                <div className="form-group">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Votre nom"
                    className="name-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder={
                      activeTab === 'question' 
                        ? `Posez votre question concernant le slide ${localCurrentSlide}...`
                        : `Partagez votre commentaire ou votre réponse sur le slide ${localCurrentSlide}...`
                    }
                    rows="3"
                    disabled={loading}
                  />
                </div>
                <button 
                  onClick={addEntry} 
                  className="content-button"
                  disabled={loading}
                >
                  {loading ? 'Envoi en cours...' : 
                    activeTab === 'question' ? 'Poser la question' : 'Publier le commentaire'
                  }
                </button>
              </div>

              {/* Section pour répondre aux questions */}
              <div className="respondent-section">
                <h4>Répondre aux questions</h4>
                <div className="form-group">
                  <input
                    type="text"
                    value={respondentName}
                    onChange={(e) => setRespondentName(e.target.value)}
                    placeholder="Votre nom (pour les réponses)"
                    className="name-input"
                  />
                </div>
              </div>

              {/* Affichage avec onglets */}
              <div className="display-tabs">
                <div className="display-tab-header">
                  <button 
                    className={`display-tab ${activeTab === 'question' ? 'active' : ''}`}
                    onClick={() => setActiveTab('question')}
                  >
                    Questions ({questionsOnly.length})
                  </button>
                  <button 
                    className={`display-tab ${activeTab === 'commentaire' ? 'active' : ''}`}
                    onClick={() => setActiveTab('commentaire')}
                  >
                    Commentaires ({commentsOnly.length})
                  </button>
                </div>

                <div className="display-content">
                  {activeTab === 'question' ? (
                    <QuestionsList 
                      questions={questionsOnly}
                      answerInputs={answerInputs}
                      setAnswerInputs={setAnswerInputs}
                      submitAnswer={submitAnswer}
                    />
                  ) : (
                    <CommentsList comments={commentsOnly} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Les sous-composants QuestionsList et CommentsList restent identiques...