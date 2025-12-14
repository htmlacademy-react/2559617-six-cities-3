import { ReactNode } from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

type PageLayoutProps = {
  children: ReactNode;
  pageClassName?: string;
  mainClassName?: string;
  showHeaderNavigation?: boolean;
  showFooter?: boolean;
};

export function PageLayout({
  children,
  pageClassName = 'page',
  mainClassName = 'page__main',
  showHeaderNavigation = true,
  showFooter = false,
}: PageLayoutProps): JSX.Element {
  return (
    <div className={pageClassName}>
      <Header showNavigation={showHeaderNavigation} />

      <main className={mainClassName}>
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  );
}
