import CourseGoal from "./CourseGoal";

type CourseGoalListProps = {
  goals: { title: string; description: string; id: number }[];
  onDelete: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={() => onDelete(goal.id)}>
              {goal.description}
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}
