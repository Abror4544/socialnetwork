import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import { Field, reduxForm } from "redux-form"
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../support/validators";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem
      class={`${s.active}`}
      name={d.name}
      key={d.id}
      id={d.id}
      ava={d.ava}
    />
  ));

  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));


  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messagesBlock}>
        <div className={s.messages}>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
};
const maxLength89 = maxLengthCreator(89)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.typing}>
      <div>
        <Field component={Textarea} validate={[required, maxLength89]} className={s.typingArea} name="newMessageBody" placeholder="Type here..." />
      </div>
      <div>
        <button onClick={() => { document.querySelector(`.${s.messages}`).scrollTo(0, 9999999); }} accessKey="a" className={s.sendBtn}>Send☝</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm"
})(AddMessageForm)

export default Dialogs;
