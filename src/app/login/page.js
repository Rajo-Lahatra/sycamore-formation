// Fichier : src/app/login/page.js

import AuthForm from './AuthForm';

// Cette page est un Server Component simple qui rend le Client Component AuthForm
export default function LoginPage() {
  return (
    <div className="login-page-wrapper">
        <AuthForm />
    </div>
  );
}