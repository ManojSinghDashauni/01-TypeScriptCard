import { useState } from "react";
import Card from "./Card";

export default function App() {
  const [name, setName] = useState<String>("victor");
  const [place, setPlace] = useState<String>("London");
  const [age, setAge] = useState<number>(26);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="bg-blue-300 h-screen w-screen flex justify-center items-center flex-col">
      <Card name={name} Age={age} place={place} />
      <div className="flex flex-col gap-4 mt-6">
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handle} placeholder="Enter Name" id="name" />
        </div>

        <div>
          <label htmlFor="age">age</label>
          <input
            onChange={(e) => setAge(Number(e.target.value))}
            id="age"
            placeholder="Enter age"
          />
        </div>
        <div>
          <label htmlFor="place">place</label>
          <input
            onChange={(e) => setPlace(e.target.value)}
            placeholder="enter place"
            id="place"
          />
        </div>
      </div>
    </div>
  );
}
