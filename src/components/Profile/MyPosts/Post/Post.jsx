import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://www.kinonews.ru/insimgs/2021/newsimg/newsimg98663.jpg"/> {props.message}
            <div>
                <span>Likes <b>{props.likeCount}</b></span>
            </div>
        </div>

    )
}
export default Post;