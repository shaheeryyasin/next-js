import articleStyles from "../src/app/global.css";

const articleList = ({ articles }) => {
    return(
        <div className="articleStyles.grid">
            {articles.map((article) => (
                <h3>{article.title}</h3>
            ))}
        </div>
    )
}
return default articleList