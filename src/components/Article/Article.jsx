// import a css file containig article styles

// Create an Article function returning the HTML of article block

// Add a default export statement for Article component to use it in the other files
import React from 'react';
import './Article.css';

const Article = () => {
  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>

      <p className="article__paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
        mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor
        neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
        Phasellus molestie magna non est bibendum non venenatis nisl tempor.
      </p>

      <p className="article__paragraph">
        Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede
        semper est, vitae luctus metus libero eu augue. Morbi purus libero,
        faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
        elementum hendrerit tortor.
      </p>

      <p className="article__paragraph">
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </p>

      <p className="article__paragraph">
        Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
        wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis.
      </p>

      <p className="article__paragraph">
        Fusce convallis metus id felis luctus adipiscing. Pellentesque egestas,
        neque sit amet convallis pulvinar, justo nulla eleifend augue, ac auctor
        orci leo non est. Quisque id mi. Ut tincidunt tincidunt erat. Etiam
        feugiat lorem non metus. Vestibulum dapibus nunc ac augue.
      </p>
    </article>
  );
};

export default Article;
