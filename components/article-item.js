import Link from "next/link";
import articleStyles from "../src/app/globals.css";
const articleItem = ({ article }) => {
  return ( 
  <link href="/article/[id]" as="{`/article/${article.id}`}">
    <a className="{aritcleStyles.card">
        <h3>{article.title.} &rarr;</h3>
    <p>{article.body}</p>
    </a>
  </link>;
  )
};
export default ArticleItem
