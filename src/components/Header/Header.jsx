// import a css file containig header styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files
import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import Navigation from './Navigation/Navigation';
import Article from './Article/Article';

function App() {
  return (
    <>
      <Header />
      <Welcome />
      <Navigation />
      <Article />
    </>
  );
}

export default App;
