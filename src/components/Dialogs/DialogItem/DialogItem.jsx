import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`}>
            <div className={`${s.dialog} ${props.class}`}>
                <img src={`${props.ava}`} />{props.name}
            </div>
        </NavLink>
    )
}


export default DialogItem;