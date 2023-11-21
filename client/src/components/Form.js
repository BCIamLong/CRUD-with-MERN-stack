import { useState } from "react";
import { newUser, updateUser } from "../api";

export default function Form({ user, onSelectedUser, onSetUsers }) {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [description, setDescription] = useState(user ? user.description : "");
  const [image, setImage] = useState(user ? user.image : "");

  async function handleAddUser(e) {
    e.preventDefault();
    if (!name || !description || !email || !image)
      return alert("Please enter required info to add user!");

    const user = await newUser({ name, description, email, image });
    onSetUsers((users) => [...users, user]);
    setName("");
    setEmail("");
    setDescription("");
    setImage("");
  }

  async function handleEditUser(e) {
    e.preventDefault();
    if (!name || !description || !email || !image)
      return alert("Please enter required info to add user!");

    const updatedUser = await updateUser(user._id, {
      name,
      description,
      email,
      image,
    });
    onSetUsers((users) =>
      users.map((acc) => (acc._id === updatedUser?._id ? updatedUser : acc))
    );
    // setName("");
    // setEmail("");
    // setDescription("");
    // setImage("");
  }

  return (
    <form className={`form ${user ? "form--edit" : ""}`}>
      {user && (
        <button className="btn btn--close" onClick={() => onSelectedUser(null)}>
          {" "}
          &times;
        </button>
      )}
      <h2 className="secondary-heading">
        {user ? `Edit user ${user.name}` : "Add new users"}
      </h2>
      <div className="form-item">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="email">Email</label>
        <input
          type="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          wrap="off"
          cols={22}
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="form-item">
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      {user ? (
        <button className="btn btn--add" onClick={handleEditUser}>
          Edit
        </button>
      ) : (
        <button className="btn btn--add" onClick={handleAddUser}>
          Add
        </button>
      )}
    </form>
  );
}
