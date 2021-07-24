import s from './ProfileInfo.module.css';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import { reduxForm } from 'redux-form';

const ProfileDataForm = ({ handleSubmit, offEditMode}) => {

    return <form className={s.info} onSubmit={handleSubmit}>
        <div className={s.infoBlock}>
            <p className={s.title}>Info☻</p>
            <p>Name: {createField("Name", "fullName", [], Input)}</p>
            <p>About: <span>{createField("About me...", "aboutMe", [], Textarea)}</span></p>
            <p>Looking for a job: <span>{createField("", "lookingForAJob", [], Input, "checkbox")}</span></p>
            <p>My professional skills: <span>{createField("Type here mf...", "lookingForAJobDescription", [], Textarea)}</span></p>
        </div>
        {/* <div>
            <p className={s.title}>Contacts☻</p>{Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div> */}
        <div>
            <button className={s.editProfileBtn}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Save
            </button>
            <button type="button" className={s.editProfileBtn, s.editProfileBtnCancel} onClick={offEditMode}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Cancel
            </button>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(ProfileDataForm)

export default ProfileDataFormReduxForm;