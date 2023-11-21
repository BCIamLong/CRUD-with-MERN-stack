export default function EditForm({ user, onSelectedUser }) {
  return (
    <form className="form form--edit">
      <button className="btn btn--close" onClick={() => onSelectedUser(null)}>
        &times;
      </button>
      <h2 className="secondary-heading">Edit user</h2>
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={user.name} />
      </div>
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input type="Email" id="email" value={user.email} />
      </div>
      <div className="form-item">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          wrap="off"
          cols={22}
          rows={3}
          value={user.description}
        ></textarea>
      </div>
      <div className="form-item">
        <label htmlFor="image">Image</label>
        <input type="text" id="image" value={user.image} />
      </div>
      <button type="summit" className="btn btn--add">
        Edit
      </button>
    </form>
  );
}
