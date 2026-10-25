import { content } from "@/lib/content";

export function Urgency() {
  if (!content.urgency.heading || !content.urgency.body) return null;

  return (
    <section className="site-shell py-20">
      <h2>{content.urgency.heading}</h2>
      <p>{content.urgency.body}</p>
    </section>
  );
}
