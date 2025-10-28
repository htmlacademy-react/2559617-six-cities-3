import { CitiesTabsItem } from "./cities-tabs-item"

export function CitiesTabsList (){
    return (
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <CitiesTabsItem cityName="Paris" />
              <CitiesTabsItem cityName="Cologne" />
              <CitiesTabsItem cityName="Brussels" />
              <CitiesTabsItem cityName="Amsterdam" />
              <CitiesTabsItem cityName="Hamburg" />
              <CitiesTabsItem cityName="Dusseldorf" />
            </ul>
          </section>
        </div>
    )
}