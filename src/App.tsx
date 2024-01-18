import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpg";
import NewGoal from "./components/NewGoal.tsx";

export type CourseGoalProps = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoalProps = {
      id: goals.length + 1,
      title: "Learn React + TS",
      description: "Learn it in depth!",
    };

    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
