import CourseGoal from "./CourseGoal";
import { type CourseGoalProps as CGoal } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

export type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );

    return (
      <>
        {warningBox}
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
      </>
    );
  }

  return (
    <>
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
    </>
  );
}
