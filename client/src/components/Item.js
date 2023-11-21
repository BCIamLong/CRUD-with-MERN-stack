import { deleteUser } from "../api";
export default function Item({ user, onSelectedUser, onSetUsers }) {
  async function handleDeleteUser(id) {
    const confirm = window.confirm("Do you sure to delete this user?");
    if (!confirm) return;
    await deleteUser(id);
    onSetUsers((users) => users?.filter((user) => user._id !== id));
  }
  return (
    <li className="item">
      <img className="img" src={user.image} alt={user.name} />
      <div className="info">
        <p className="name">
          {user.name} <span>{user.email}</span>
        </p>
        <p className="description">{user.description}</p>
      </div>
      <div className="options">
        <button className="btn btn--edit" onClick={() => onSelectedUser(user)}>
          Edit
        </button>
        <button
          className="btn btn--delete"
          onClick={() => handleDeleteUser(user._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
