import Header from './components/header/header';
import { Component } from 'react';
import Headline from './components/headline/headline';
import SharedButton from './components/button/button';
import ListItem from './components/listitem/listitem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

const initialState = {
  hideBtn: false
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.updateState();
  }

  updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;
    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="Posts" desc="Click the button to get posts!" />
          {!hideBtn && <SharedButton {...configButton} />}
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
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, {fetchPosts})(App);
