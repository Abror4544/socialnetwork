import React from "react";
import { reduxForm, Field } from "redux-form";
import { maxLengthCreator, required } from "../../../support/validators";
import { Textarea } from "../../common/FormsControls/FormsControls.js";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = React.memo((props) => {

  let postsElements = props.posts.map((p) => (
    <Post message={p.post} likeCount={p.likesCount} />
  ));


  let onAddPost = (values) => {
    props.addPost(values.newPostBody)
  };

  return (
    <div className={s.myPosts}>
      <h2>My posts</h2>
      <AddNewPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

const maxLength30 = maxLengthCreator(30)

const AddNewPost = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.myPost}>
      <Field name="newPostBody" component={Textarea} placeholder={"Post message"} className={s.textarea} validate={[required, maxLength30]} />
      <button>Add post</button>
    </form>
  )
}

const AddNewPostForm = reduxForm({
  form: "newpost"
})(AddNewPost)
export default MyPosts;
