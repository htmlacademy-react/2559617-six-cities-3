interface Props{
    userPhoto: string;
    userName: string;
    userStatus: string;
}

export function OfferHostUser({userPhoto, userName, userStatus}: Props){
    return(
          <div className="offer__host-user user">
            <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
              <img className="offer__avatar user__avatar" src={userPhoto} width="74" height="74" alt="Host avatar"/>
            </div>
            <span className="offer__user-name">
              {userName}
            </span>
            <span className="offer__user-status">
              {userStatus}
            </span>
          </div>
    )
}