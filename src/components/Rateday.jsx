import { useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL;

export default function RateDay() {
  const [result, setResult] = useState(null);

  async function submit(e) {
    e.preventDefault();

    const form = e.target;

    const res = await fetch(`${API}/rate-day`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: "demo_user",
        problemsSolved: Number(form.problems.value),
        studyHours: Number(form.hours.value),
        understandingLevel: Number(form.understanding.value),
        notes: form.notes.value
      })
    });

    const data = await res.json();
    setResult(data);
  }

  return (
    <div>
      <h2>Rate My Day</h2>
      <form onSubmit={submit}>
        <input name="problems" placeholder="Problems solved" /><br />
        <input name="hours" placeholder="Study hours" /><br />
        <input name="understanding" placeholder="Understanding (1-10)" /><br />
        <input name="notes" placeholder="Notes" /><br />
        <button>Submit</button>
      </form>

      {result && (
        <div>
          <p>Score: {result.score}</p>
          <p>{result.verdict}</p>
          <p>{result.aiFeedback}</p>
        </div>
      )}
    </div>
  );
}
