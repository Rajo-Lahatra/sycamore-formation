// src/components/QandA.js
'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useSlide } from '@/app/contexts/SlideContext'; // Import du contexte

export default function QandA({ dayNumber }) { // Retirer currentSlide des props
  const [questions, setQuestions] = useState([]);
  const [newText, setNewText] = useState('');
  const [userName, setUserName] = useState('');
  const [loading, setLoading] = useState(false);
  const [answerInputs, setAnswerInputs] = useState({});
  const [respondentName, setRespondentName] = useState('');
  const [activeTab, setActiveTab] = useState('question');
  const supabase = createClient();
  
  // Utiliser le contexte pour obtenir le slide courant
  const { currentSlide } = useSlide();

  // Charger les questions et commentaires - MAJ avec currentSlide
  useEffect(() => {
    fetchQuestions();
  }, [dayNumber, currentSlide]); // Ajouter currentSlide comme dépendance

  const fetchQuestions = async () => {
    const { data, error } = await supabase
      .from('formation_questions')
      .select('*')
      .eq('day_number', dayNumber)
      .eq('slide_number', currentSlide) // Filtrer par le slide courant du contexte
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
        slide_number: currentSlide, // Utiliser currentSlide du contexte
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
      alert('Erreur lors de l\'envoi de la réponse');
    }
  };

  // Filtrer les questions et commentaires
  const questionsOnly = questions.filter(q => q.type === 'question');
  const commentsOnly = questions.filter(q => q.type === 'commentaire');

  return (
    <div className="qanda-section">
      <h3>Questions & Commentaires - Jour {dayNumber}</h3>
      
      {/* Indicateur de slide actuel */}
      <div className="slide-indicator">
        <strong>Slide actuelle : {currentSlide}</strong>
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
          <span className="slide-ref">(Slide {currentSlide})</span>
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
                ? `Posez votre question concernant le slide ${currentSlide}...`
                : `Partagez votre commentaire ou votre réponse sur le slide ${currentSlide}...`
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
  );
}

// Sous-composant pour la liste des questions
function QuestionsList({ questions, answerInputs, setAnswerInputs, submitAnswer }) {
  if (questions.length === 0) {
    return <p className="no-entries">Aucune question pour le moment</p>;
  }

  return (
    <div className="questions-list">
      {questions.map((q) => (
        <div key={q.id} className={`question-item ${q.is_answered ? 'answered' : 'pending'}`}>
          <div className="question-header">
            <span className="user-name">{q.asked_by}</span>
            <span className="slide-ref">Slide {q.slide_number}</span>
            <span className="timestamp">
              {new Date(q.created_at).toLocaleString('fr-FR')}
            </span>
          </div>
          <div className="question-content">
            <strong>Question:</strong> {q.question_text}
          </div>
          
          {q.is_answered ? (
            <div className="answer">
              <div className="answer-header">
                <strong>Réponse:</strong> par {q.answered_by} 
                <span className="answer-time">
                  ({new Date(q.answered_at).toLocaleString('fr-FR')})
                </span>
              </div>
              <div className="answer-text">{q.answer_text}</div>
            </div>
          ) : (
            <div className="answer-form">
              <textarea
                value={answerInputs[q.id] || ''}
                onChange={(e) => setAnswerInputs({
                  ...answerInputs, 
                  [q.id]: e.target.value
                })}
                placeholder="Votre réponse..."
                rows="2"
              />
              <button 
                onClick={() => submitAnswer(q.id)}
                className="answer-button"
              >
                Répondre
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Sous-composant pour la liste des commentaires
function CommentsList({ comments }) {
  if (comments.length === 0) {
    return <p className="no-entries">Aucun commentaire pour le moment</p>;
  }

  return (
    <div className="comments-list">
      {comments.map((c) => (
        <div key={c.id} className="comment-item">
          <div className="comment-header">
            <span className="user-name">{c.asked_by}</span>
            <span className="slide-ref">Slide {c.slide_number}</span>
            <span className="timestamp">
              {new Date(c.created_at).toLocaleString('fr-FR')}
            </span>
          </div>
          <div className="comment-content">
            {c.question_text}
          </div>
          {c.is_answered && (
            <div className="comment-response">
              <div className="response-header">
                <strong>Réponse de {c.answered_by}:</strong>
              </div>
              <div className="response-text">{c.answer_text}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}