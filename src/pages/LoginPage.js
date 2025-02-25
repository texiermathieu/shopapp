import PageLayout from "../components/PageLayout.js";
import LoginForm from "../components/LoginForm.js";
import authStore from "../store/authStore.ts";

function LoginPage() {
const login = authStore(state => state.login);
  return (
    <PageLayout titleFr="Se connecter" titleEn="Log in">
      <LoginForm handleLogin={(email,password) => {login(email,password)}} />
    </PageLayout>
  );
}

export default LoginPage;
