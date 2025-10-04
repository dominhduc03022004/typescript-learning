import React, { useEffect, useState } from "react";
import axios from "axios";

function ListUsers() {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        console.log("data: ", data);
        setUsers(data);
      } catch (error) {
        console.log("error: ", error);
      }
    })();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p><strong>Họ và tên:</strong> {user.name}</p>
            <p><strong>Số điện thoại:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsers;
