import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const goalValue = goalRef.current!.value;
    const summaryValue = summaryRef.current!.value;

    console.log("Goal:", goalValue);
    console.log("Summary:", summaryValue);

    event.currentTarget.reset();
    onAddGoal(goalValue, summaryValue);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal"></label>
        <input ref={goalRef} id="goal" type="text" name="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input ref={summaryRef} id="summary" type="text" name="summary" />
      </p>
      <p>
        <button></button>
      </p>
    </form>
  );
}
