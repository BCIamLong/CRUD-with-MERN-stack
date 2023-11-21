export async function getUsers() {
  try {
    const res = await fetch("http://localhost:3100/api/v1/users");
    const data = await res.json();
    return data.data.users;
  } catch (err) {
    console.log(err);
  }
}

export async function deleteUser(id) {
  try {
    await fetch(`http://localhost:3100/api/v1/users/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    alert(err);
    console.log(err);
  }
}

export async function newUser(user) {
  try {
    const res = await fetch("http://localhost:3100/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data.data.user;
  } catch (err) {
    console.log(err);
  }
}

export async function updateUser(id, user) {
  try {
    const res = await fetch(`http://localhost:3100/api/v1/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data.data.user;
  } catch (err) {
    console.log(err);
  }
}
