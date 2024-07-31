import Input from "@/components/input";
import UserCard from "@/components/user-card";
import { useState } from "react";

let profiles = [
  {
    id: 1,
    firstName: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    phone: "99011090",
    jobTitle: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    firstName: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    address: "456 Oak St, Springfield, IL",
    phone: "99011091",
    jobTitle: "Project Manager",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    firstName: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    address: "789 Pine St, Springfield, IL",
    phone: "99011092",
    jobTitle: "UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    firstName: "Bob Brown",
    age: 35,
    email: "bob.brown@example.com",
    address: "101 Maple St, Springfield, IL",
    phone: "99011093",
    jobTitle: "Product Owner",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    firstName: "Charlie Davis",
    age: 22,
    email: "charlie.davis@example.com",
    address: "202 Elm St, Springfield, IL",
    phone: "99011094",
    jobTitle: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

// liftup

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "John Doe",
      age: 25,
      email: "john.doe@example.com",
      address: "123 Main St, Springfield, IL",
      phone: "99011090",
      jobTitle: "Software Engineer",
      imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      firstName: "Jane Smith",
      age: 30,
      email: "jane.smith@example.com",
      address: "456 Oak St, Springfield, IL",
      phone: "99011091",
      jobTitle: "Project Manager",
      imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      firstName: "Alice Johnson",
      age: 28,
      email: "alice.johnson@example.com",
      address: "789 Pine St, Springfield, IL",
      phone: "99011092",
      jobTitle: "UX Designer",
      imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      firstName: "Bob Brown",
      age: 35,
      email: "bob.brown@example.com",
      address: "101 Maple St, Springfield, IL",
      phone: "99011093",
      jobTitle: "Product Owner",
      imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      firstName: "Charlie Davis",
      age: 22,
      email: "charlie.davis@example.com",
      address: "202 Elm St, Springfield, IL",
      phone: "99011094",
      jobTitle: "Marketing Specialist",
      imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ]);

  const handleChange = (text) => {
    setSearchValue(text);
    // hereglegchiig haij olno
    const findUser = profiles.filter((user) =>
      user.firstName.toLowerCase().includes(text.toLowerCase())
    );
    setUsers(findUser);
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl text-gray-950">User Find Application</h1>
      <div className="flex flex-col gap-5 mt-6">
        <Input handleChange={handleChange} />
        <p>Search value: {searchValue}</p>
        <button
          className="border rounded-lg bg-violet-300"
          onClick={() => {
            console.log("Clear");
            setUsers(null);
          }}
        >
          clear
        </button>
        <button
          className="border rounded-lg bg-violet-300"
          onClick={() => {
            console.log("View");
            setUsers(profiles);
          }}
        >
          View
        </button>
        {users?.map((user) => {
          return (
            <UserCard userImg={user.imageUrl} firstName={user.firstName} />
          );
        })}
        {!users && <p>Хоосон</p>}
      </div>
    </main>
  );
}
