// import a css file containig article styles
import React from 'react';
import './Article.css';

// Create an Article function returning the HTML of article block
function Article() {
  // Store paragraph texts in an array for dynamic rendering
  const paragraphs = [
    `In elementum lorem eget est euismod ornare. Phasellus sit pellentesque
    mauris. Aliquam quis malesuada ex. Nullam eu lorem, vitae feugiat sem
    magna eget massa. Vivamus quis bibendum odio, in efficitur leo felis sed
    justo. Fusce iaculisorci, quis imperdiet urna. Sed mollis facilisis
    efficitur massa non neque elementum semper. Vestibulum tincidunt in quam
    et, feugiat venenatis augue. Donec tellus, a facilisis magna. Proin sit
    amet viverra felis. Vivamus ut nunc id mauris posuere pellentesque.
    tincidunt id odio id feugiat.`,

    `In ac nisi lacus. Fusce est dolor, tincidunt ut bibendum vitae,
    fermentum ac quam. Aliquam pretium tristique nibh quis iaculis. In et
    cursus ex, eu aliquet ex. Proin facilisis lacus sit amet sapien
    ultrices, ut vehicula arcu lobortis. Vivamus mollis ipsum ut hendrerit
    molestie. Morbi lacinia, sapien eu dictum dignissim, tellus tortor
    congue magna, sit amet bibendum libero nisi id massa.`,

    `Donec arcu elit, euismod vel lobortis eu, fringilla sit amet dolor.
    congue, massa nec sagittis mollis, dui felis ultrices magna, tincidunt
    finibus lorem quam in sem. Morbi odio turpis, pulvinar sit amet
    vulputate quis, ultricies eu libero. Donec ac maximus neque, nec maximus
    nibh. Morbi rhoncus convallis urna, accumsan porta lorem hendrerit in.
    Cras eget nisl dui. Morbi faucibus nisi eget ipsum`,

    `Cras egestas tempor nibh, a fermentum lorem sollicitudin non. Nulla
    facilisi. In at elit id leo tristique condimentum. Donec at est nulla.
    Mauris egestas magna ut laoreet pretium. Sed ultrices suscipit
    vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    nibh, blandit a vulputate at, vehicula non nulla. Aenean ut nulla leo.
    Praesent in ullamcorper est.`,

    `Pellentesque habitant morbi tristique senectus et netus et malesuada
    fames ac turpis egestas. Phasellus bibendum nec arcu eu lobortis. Nam
    convallis faucibus ante sed porta. Nullam ut convallis elit, quis
    venenatis nunc. Curabitur sed sem eget velit condimentum rutrum in et
    orci. Nunc non suscipit eros. Suspendisse porta sem vel justo commodo
    dictum. Aliquam erat ligula, fringilla nec suscipit sed, porta vitae
    turpis. Vestibulum rhoncus placerat nulla vitae suscipit. Curabitur
    consectetur ex ut odio tristique vehicula. Ut ligula tortor, tincidunt
    quis sodales vitae, ornare a turpis. Proin sit amet finibus enim.`,
  ];

  return (
    <article className="article">
      <h1 className="article__title">Headline</h1>
      {paragraphs.map((paragraph, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <p key={index} className="article__paragraph">
          {paragraph}
        </p>
      ))}
    </article>
  );
}

// Add a default export statement for Article component to use it in the other files
export default Article;
