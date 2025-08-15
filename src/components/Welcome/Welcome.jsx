import './Welcome.css';

const Welcome = () => (
  <section className="welcome">
    <span className="welcome__text">Sticky Header!</span>
  </section>
);

export default Welcome;

// Либо
// export const Welcome = () => (
//     <section className="welcome">
//         <span className="welcome__text">Sticky Header!</span>
//     </section>
//  )

// Либо

//  const Welcome = () => (
//     <section className="welcome">
//         <span className="welcome__text">Sticky Header!</span>
//     </section>
//  )

// export default Welcome;

// Нам нужно оставлять один экспорт, это не ошибка, но этого достаточно, чтобы был один экспорт, если же через default, то импорт без {}
