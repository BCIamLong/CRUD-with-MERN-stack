export default function AddForm() {
  return (
    <form className="form">
      <h2 className="secondary-heading">Add new users</h2>
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input type="Email" id="email" />
      </div>
      <div className="form-item">
        <label htmlFor="description">Description</label>
        <textarea id="description" wrap="off" cols={22} rows={3}></textarea>
      </div>
      <div className="form-item">
        <label htmlFor="image">Image</label>
        <input type="text" id="image" />
      </div>
      <button className="btn btn--add">Add</button>
    </form>
  );
}
