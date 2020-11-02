import Header from './components/header/header';
import Headline from './components/headline/headline';
import SharedButton from './components/button/button';
import ListItem from './components/listitem/listitem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

function App({ posts, fetchPosts}) {

  const fetch = () => {
    fetchPosts();
  }

  const configButton = {
    buttonText: 'Get Posts',
    emitEvent: fetch
  }

  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to get posts!" />
        <SharedButton {...configButton} />
        { posts.length > 0 ?
          (<div>
            {posts.map((post, index) => {
              const {title, body} = post;
              return (
                <ListItem key={index} title={title} desc={body} />
              )
            })}
          </div>) : null
        }
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
