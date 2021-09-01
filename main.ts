import { unified } from "unified";
import remarkParse from "remark-parse";

process.on("message", (markdownText: string) => {
  const tree = unified().use(remarkParse).parse(markdownText);
  if (!!process.send) {
    process.send(JSON.stringify(tree));
  }
});
