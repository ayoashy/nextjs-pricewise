import React from 'react';

interface UserType {
  name: string;
  id: number;
}

const FetchComponent = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data: UserType[] = await res.json();

  console.log(data, 'user');

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          {user.name}- {user.id}
        </div>
      ))}
    </div>
  );
};

export default FetchComponent;
