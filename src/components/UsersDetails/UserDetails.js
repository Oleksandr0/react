import css from './UserDetails.module.css'

const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email} = user;

    return (
        <div>
            <div className={css.wrap}>
                <div>{id}.</div>
                <div>{name}</div>
                <div>{username}</div>
                <div>{email}</div>
            </div>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;