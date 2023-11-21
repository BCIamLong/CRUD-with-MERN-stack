import { useEffect, useState } from "react";
import UsersBox from "./UsersBox";
import List from "./List";
import Item from "./Item";
import { getUsers } from "../api";
import Form from "./Form";

export default function Main() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState();
  useEffect(
    () => async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    },
    []
  );

  return (
    <main className="main">
      <Form
        key={selectedUser?._id}
        user={selectedUser}
        onSelectedUser={setSelectedUser}
        onSetUsers={setUsers}
      />
      <UsersBox>
        <List>
          {users?.map((user) => (
            <Item
              key={user._id}
              onSelectedUser={setSelectedUser}
              user={user}
              onSetUsers={setUsers}
            />
          ))}
        </List>
      </UsersBox>
    </main>
  );
}
