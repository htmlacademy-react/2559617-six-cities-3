import Header from "../../components/header/header"
import CitiesTabs from "../../components/cities-tabs/cities-tabs"
import CitiesContainer from "../../components/main-page/cities-container"

export default function MainPage() {
    return (
    <div className="page page--gray page--main">
        <Header showNavigation={true}/>

        <main className="page__main page__main--index">
            <CitiesTabs />
            <CitiesContainer />
        </main>
    </div>
    )
}