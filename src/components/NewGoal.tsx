export default function NewGoal() {
  function handleSubmit() {}

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button></button>
      </p>
    </form>
  );
}
