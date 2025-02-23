import PageLayout from "../components/PageLayout.js";
import LoginForm from "../components/LoginForm.js";

function LoginPage() {

  return (
    <PageLayout titleFr="Se connecter" titleEn="Log in">
      <LoginForm handleLogin={() => {}} />
    </PageLayout>
  );
}

export default LoginPage;
