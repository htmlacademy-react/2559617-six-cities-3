import Header from "../../components/header/header";
import LoginForm from "../../components/login-page/login-form";
import LoginLocations from "../../components/login-page/login-locations";

export default function LoginPage() {
    return (
        <div className="page page--gray page--login">
          <Header showNavigation={false}/>
          
          <main className="page__main page__main--login">
            <div className="page__login-container container">
              <LoginForm/>
              <LoginLocations/>
            </div>
          </main>
    </div>
    )
}