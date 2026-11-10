"use client";

import { FormEvent, useState } from "react";
import { resumeAnswers } from "@/lib/content";

const suggestions = ["What does Vinh build with AI?", "Tell me about his backend experience", "Why should I interview Vinh?"];

function answerQuestion(question: string) {
  const normalized = question.toLowerCase();
  const match = resumeAnswers
    .map((item) => ({ item, score: item.keywords.filter((keyword) => normalized.includes(keyword)).length }))
    .sort((a, b) => b.score - a.score)[0];

  if (match?.score) return match.item.answer;
  return "Vinh combines production backend depth with hands-on agentic AI experience, making him a strong candidate for backend, AI, and software engineering roles.";
}

export function ResumeAgent() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("Ask about Vinh’s AI systems, backend experience, reliability work, education, or availability.");
  const [asked, setAsked] = useState(false);

  function ask(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return;
    setQuestion(trimmed);
    setAnswer(answerQuestion(trimmed));
    setAsked(true);
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(question);
  }

  return (
    <div className="agent-panel">
      <div className="agent-console" aria-live="polite">
        <div className="agent-console-top">
          <span><i /> Resume agent</span>
          <span>One-sentence mode</span>
        </div>
        {asked && <p className="agent-question"><span>You</span>{question}</p>}
        <p className="agent-answer"><span>Agent</span>{answer}</p>
      </div>
      <form className="agent-form" onSubmit={submit}>
        <label htmlFor="resume-question">Ask Vinh’s résumé</label>
        <div>
          <input id="resume-question" value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="e.g. What is his AI agent experience?" maxLength={160} />
          <button type="submit" aria-label="Ask resume agent">Ask ↗</button>
        </div>
      </form>
      <div className="agent-suggestions" aria-label="Suggested questions">
        {suggestions.map((suggestion) => <button type="button" key={suggestion} onClick={() => ask(suggestion)}>{suggestion}</button>)}
      </div>
      <p className="agent-note">Grounded only in the verified résumé · No data is sent or stored</p>
    </div>
  );
}
