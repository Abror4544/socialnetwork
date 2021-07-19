import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {
  return (
    <div>
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize} />
      {users.map((u) =>
        <User
          followingInProgress={props.followingInProgress}
          user={u}
          unfollow={props.unfollow}
          follow={props.follow}
          key={u.id} />
      )}
    </div>
  );
};

export default Users;
