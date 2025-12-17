import { LoginForm } from '../../components/login-page/login-form';
import { LoginLocations } from '../../components/login-page/login-locations';
import { PageLayout } from '../../components/page-layout/PageLayout';

export function LoginPage(): JSX.Element {
  return (
    <PageLayout
      pageClassName="page page--gray page--login"
      mainClassName="page__main page__main--login"
      showHeaderNavigation={false}
    >
      <div className="page__login-container container">
        <LoginForm />
        <LoginLocations />
      </div>
    </PageLayout>
  );
}
