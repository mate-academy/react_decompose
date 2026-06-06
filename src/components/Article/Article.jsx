// import a css file containig article styles
import "./Article.css" 


// Create an Article function returning the HTML of article block
const Article = () => {
    return(
        <div className="article">
            <h2>Headline</h2>
                <p className="article__paragraph">First paragraph with simple text.</p>
                <p className="article__paragraph">Second paragraph continuing the idea.</p>
                <p className="article__paragraph">Third paragraph adds more detail here.</p>
                <p className="article__paragraph">Fourth paragraph for extra context.</p>
                <p className="article__paragraph">Fifth paragraph concludes the section.</p>
        </div>
    );
};

// Add a default export statement for Article component to use it in the other files
export default Article;
