import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header"
// import { FavoritesPageEmpty } from "../../components/favorites/favorites-empty"
import { FavoritesSection } from "../../components/favorites/favorites-section"

export function FavoritesPage (){
    return (
      <>
    {/* состояние пустой страницы */}
    {/* <FavoritesPageEmpty /> */}

    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesSection />
          </section>
        </div>
      </main>
      <Footer />
    </div>
    </>
    )
}