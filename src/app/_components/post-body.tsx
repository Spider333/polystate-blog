import markdownStyles from "./markdown-styles.module.css";
import { ScrollReveal } from "./scroll-reveal";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <ScrollReveal>
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </ScrollReveal>
    </div>
  );
}
