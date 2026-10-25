import { content } from "@/lib/content";

export function Problem() {
  if (!content.problem.heading || !content.problem.body) return null;

  return (
    <section className="site-shell py-20">
      <h2>{content.problem.heading}</h2>
      <p>{content.problem.body}</p>
    </section>
  );
}
