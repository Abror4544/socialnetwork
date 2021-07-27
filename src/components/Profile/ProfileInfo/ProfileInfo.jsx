import s from './ProfileInfo.module.css';
import userPhoto from "../../../assets/images/empty.png";
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    }

    return (
        <div>
            <div className={s.avatar}>
                <div className={s.main}>
                    <div className={s.profilePhoto}>
                        <img src={props.profile.photos.large || userPhoto} alt="" />
                        {props.isOwner && <label htmlFor="file-upload" className={s.chooseFile}>
                            Change ava
                        </label>}
                    </div>
                    <input className={s.chooseBase} onChange={onMainPhotoSelected} id={"file-upload"} type="file" />
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} offEditMode={() => { setEditMode(false) }} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={props.profile} isOwner={props.isOwner} />}
            </div>
        </div>
    )
}

export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div className={s.info}>
        <div className={s.infoBlock}>
            <p className={s.title}>Info☻</p>
            <p>Name: <span>{profile.fullName}</span></p>
            <p>About: <span>{profile.aboutMe}</span></p>
            <p>Job: <span>{profile.lookingForAJob === true ? "Ищет работу" : "Работает где-то"}</span></p>
            <p>Job description: <span>{profile.lookingForAJobDescription}</span></p>
        </div>
        <div>
            <p className={s.title}>Contacts☻</p>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
        {isOwner && <div>
            <button className={s.editProfileBtn} onClick={goToEditMode}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Edit my profile
            </button>
        </div>}
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <p className={s.contacts}>{contactTitle}: <span>{contactValue}</span></p>
}

export default ProfileInfo;