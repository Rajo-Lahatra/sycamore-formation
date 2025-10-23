import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 50px auto;
          background-color: #fff;
          padding: 40px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(72,40,27,0.2);
          border-left: 8px solid #fba519;
          text-align: center;
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #48281b;
          margin-bottom: 20px;
        }
        p {
          color: #654530;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #eea125;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color: #e8a73d;
        }
      `}</style>

      <h1>Merci pour votre évaluation !</h1>
      <p>
        Votre feedback a été enregistré avec succès. Il nous aidera à améliorer 
        continuellement la qualité de nos formations.
      </p>
      <Link href="/" className="button">
        Retour à l'accueil
      </Link>
    </div>
  );
}