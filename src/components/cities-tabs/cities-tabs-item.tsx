
interface Props{
    cityName: string;
}

export function CitiesTabsItem ({cityName}:Props){
    return (
        <li className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>{cityName}</span>
          </a>
        </li>
    )
}