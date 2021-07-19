import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/empty.png";
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.avatar}>
                <div className={s.main}>
                    <div className={s.profilePhoto}>
                        <img src={props.profile.photos.large != null ? props.photos.large : userPhoto} alt="" />
                        <img src={props.profile.photos.large} />
                    </div>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
                <div className={s.info}>
                    <p>Name: <span>{props.profile.fullName}</span></p>
                    <p>About: <span>{props.profile.aboutMe}</span></p>
                    <p>Facebook: <span>{props.profile.contacts.facebook}</span></p>
                    <p>Website: <span>{props.profile.contacts.website}</span></p>
                    <p>VK: <span>{props.profile.contacts.vk}</span></p>
                    <p>Twitter: <span>{props.profile.contacts.twitter}</span></p>
                    <p>Instagram: <span>{props.profile.contacts.instagram}</span></p>
                    <p>Youtube: <span>{props.profile.contacts.youtube}</span></p>
                    <p>Github: <span>{props.profile.contacts.github}</span></p>
                    <p>Job: <span>{props.profile.lookingForAJob === true ? "Ищет работу" : "Работает где-то"}</span></p>
                    <p>Job description: <span>{props.profile.lookingForAJobDescription}</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;