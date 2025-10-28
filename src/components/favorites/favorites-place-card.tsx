interface Props {
  isPremium?: boolean;
  imageSrc: string;
  pricePerNight: number;
  // isFavorite?: boolean;
  rating: number;
  title: string;
  type: string;
}

export function FavoritesPlaceCard({ isPremium, imageSrc, pricePerNight, rating, title, type }: Props): JSX.Element {
  return (
    <article className='favorites__card place-card'>
      {/* Проверка на премиум */}
      {isPremium && (
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
      )}

      <div className='favorites__image-wrapper place-card__image-wrapper'>
        <a href='#'>
          <img className='place-card__image' src={imageSrc} width={150} height={110} alt='Place image' />
        </a>
      </div>

      <div className='favorites__card-info place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{pricePerNight}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <button className='place-card__bookmark-button place-card__bookmark-button--active button' type='button'>
            <svg className='place-card__bookmark-icon' width={18} height={19}>
              <use href='#icon-bookmark'></use>
            </svg>
            <span className='visually-hidden'>In bookmarks</span>
          </button>
        </div>

        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{ width: `${rating}%` }}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>

        <h2 className='place-card__name'>
          <a href='#'>{title}</a>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}
