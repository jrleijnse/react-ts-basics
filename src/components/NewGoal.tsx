import { useRef, type FormEvent } from "react";

export default function NewGoal() {
  const formRef = useRef<HTMLFormElement>(null);
  const goalRef = useRef<HTMLInputElement>(null);
  const summaryRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const goalValue = goalRef.current!.value;
    const summaryValue = summaryRef.current!.value;

    console.log("Goal:", goalValue);
    console.log("Summary:", summaryValue);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
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
