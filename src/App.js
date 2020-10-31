import Header from './components/header/header';
import Headline from './components/headline/headline';

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to get posts!" />
      </section>
    </div>
  );
}

export default App;
