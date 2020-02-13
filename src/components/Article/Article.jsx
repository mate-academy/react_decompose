import React from 'react';
import Paragraph from '../Paragraph/Paragraph';
import Caption from '../Caption/Caption';

export default function Article() {
  return (
    <article className="article">
      <Caption className="article__title" text="Headline" />
      <Paragraph />
    </article>
  );
}
