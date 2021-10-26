import React from 'react';
import { ArticleTitle } from './ArticleTitle';
import { ArticleP } from './ArticleP';

export const Article = () => {
  const articleTitle = 'Some title';
  const paragraphs = [
    `In elementum lorem eget est euismod ornare. Phasellus sit amet
     pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
     nibh. Mauris molestie, urna accumsan ornare semper, augue nibh
     posuere lorem, vitae feugiat sem magna eget massa. Vivamus quis
     tincidunt dolor. Fusce efficitur, orci non vestibulum consequat,
     lectus turpis bibendum odio, in efficitur leo felis sed justo. Fusce
     commodo iaculis orci, quis imperdiet urna. Sed mollis facilisis lacus
     non condimentum. Nunc efficitur massa non neque elementum semper.
     Vestibulum lorem arcu, tincidunt in quam et, feugiat venenatis augue.
     Donec sed tincidunt tellus, a facilisis magna. Proin sit amet viverra
     nibh, bibendum gravida felis. Vivamus ut nunc id mauris posuere
     pellentesque. Praesent tincidunt id odio id feugiat.`,
    `In elementum lorem eget est euismod ornare. Phasellus sit amet
     pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
     nibh. Mauris molestie, urna accumsan ornare semper, augue nibh
     posuere lorem, vitae feugiat sem magna eget massa. Vivamus quis
     tincidunt dolor. Fusce efficitur, orci non vestibulum consequat,
     lectus turpis bibendum odio, in efficitur leo felis sed justo. Fusce
     commodo iaculis orci, quis imperdiet urna. Sed mollis facilisis lacus
     non condimentum. Nunc efficitur massa non neque elementum semper.
     Vestibulum lorem arcu, tincidunt in quam et, feugiat venenatis augue.
     Donec sed tincidunt tellus, a facilisis magna. Proin sit amet viverra
     nibh, bibendum gravida felis. Vivamus ut nunc id mauris posuere
     pellentesque. Praesent tincidunt id odio id feugiat.`,
    `In elementum lorem eget est euismod ornare. Phasellus sit amet
     pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
     nibh. Mauris molestie, urna accumsan ornare semper, augue nibh
     posuere lorem, vitae feugiat sem magna eget massa. Vivamus quis
     tincidunt dolor. Fusce efficitur, orci non vestibulum consequat,
     lectus turpis bibendum odio, in efficitur leo felis sed justo. Fusce
     commodo iaculis orci, quis imperdiet urna. Sed mollis facilisis lacus
     non condimentum. Nunc efficitur massa non neque elementum semper.
     Vestibulum lorem arcu, tincidunt in quam et, feugiat venenatis augue.
     Donec sed tincidunt tellus, a facilisis magna. Proin sit amet viverra
     nibh, bibendum gravida felis. Vivamus ut nunc id mauris posuere
     pellentesque. Praesent tincidunt id odio id feugiat.`,
    `In elementum lorem eget est euismod ornare. Phasellus sit amet
     pellentesque mauris. Aliquam quis malesuada ex. Nullam eu aliquam
     nibh. Mauris molestie, urna accumsan ornare semper, augue nibh
     posuere lorem, vitae feugiat sem magna eget massa. Vivamus quis
     tincidunt dolor. Fusce efficitur, orci non vestibulum consequat,
     lectus turpis bibendum odio, in efficitur leo felis sed justo. Fusce
     commodo iaculis orci, quis imperdiet urna. Sed mollis facilisis lacus
     non condimentum. Nunc efficitur massa non neque elementum semper.
     Vestibulum lorem arcu, tincidunt in quam et, feugiat venenatis augue.
     Donec sed tincidunt tellus, a facilisis magna. Proin sit amet viverra
     nibh, bibendum gravida felis. Vivamus ut nunc id mauris posuere
     pellentesque. Praesent tincidunt id odio id feugiat.`,
  ];

  return (
    <article className="article">
      <ArticleTitle title={articleTitle} />
      {paragraphs
        .map((paragraph, i) => (
          <ArticleP key={paragraph.slice(i, 13)} text={paragraph} />
        ))}
    </article>
  );
};
