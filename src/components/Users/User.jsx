import s from "./Users.module.css";
import userPhoto from "../../assets/images/empty.png";
import { NavLink } from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
  return (
    <div key={user.id} className={s.userContainer}>
      <div className={s.avatarBlock}>
        <div className={s.avatar}>
          <NavLink to={'/profile/' + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div className={s.flwBtn}>
          {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => { unfollow(user.id) }}>Unfollow</button>
            : <button disabled={followingInProgress.some(id => id === user.id)}
              onClick={() => { follow(user.id) }}>Follow </button>}
        </div>
      </div>
      <div className={s.userInfoBlock}>
        <div className={s.personInfo}>
          <h4 className={s.userName}>{user.name}</h4>
          <p className={s.status}>{user.status}</p>
        </div>
        <div className={s.regionInfo}>
          <p className={s.country}>{"u.location.country"}</p>
          <p className={s.city}>{"u.location.city"}</p>
        </div>
      </div>
    </div>)
};

export default User;
