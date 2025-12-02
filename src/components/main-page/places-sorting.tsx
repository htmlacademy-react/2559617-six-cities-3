import { FILTERS } from '../../const';

type PlacesSortingProps = {
  sortType: string;
  setSortType: (type: string) => void;
};

export function PlacesSorting({ sortType, setSortType }: PlacesSortingProps) {
  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span className='places__sorting-type' tabIndex={0}>
        {FILTERS.find((f) => f.id === sortType)?.name || 'Popular'}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use href='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className='places__options places__options--custom places__options--opened'>
        {FILTERS.map((filter) => (
          <li
            key={filter.id}
            className={`places__option ${filter.id === sortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => setSortType(filter.id)}
          >
            {filter.name}
          </li>
        ))}
      </ul>
    </form>
  );
}
