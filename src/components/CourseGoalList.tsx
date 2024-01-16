import CourseGoal from "./CourseGoal";
import { type CourseGoalProps as CGoal } from "../App";

export type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal
              id={goal.id}
              title={goal.title}
              onDelete={() => onDeleteGoal(goal.id)}
            >
              {goal.description}
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
