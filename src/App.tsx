import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoal = {
      id: goals.length + 1,
      title: "Learn React + TS",
      description: "Learn it in depth!",
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  function onDelete(idToDelete: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== idToDelete));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalList goals={goals} onDelete={onDelete} />
    </main>
  );
}
