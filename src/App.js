import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ArticleList from './components/ArticleList';
import Form from './components/Form';

const API_KEY = 'ebf9f02b27954746a2362d6f09993b5b';
const country = 've';

class App extends Component {

  state = {
    articles: [],
    db: {},
    category: 'general',
    loading: false,
  }

  componentDidMount() {
    this.dataBaseNews(this.state.category)
  } 

  changeCategory = category => (
    this.setState({ category }, () => this.dataBaseNews(category))
  )

  dataBaseNews = key => {
    if (this.state.db[key]) {
      const articles = [...this.state.db[key]]
      this.setState({ articles, loading:false })
    } else {
      this.RequestNews(key);
    }
  }

  RequestNews = async (category = 'general') => {
    this.setState({ loading: true })
    const URL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
    const response = await fetch(URL);
    const news = await response.json();
    const articles = news.articles;
    const db = {...this.state.db, [category]: articles}
    this.setState({ db })
    if(this.state.category===category) {
      this.setState({ articles, loading: false })
    }
  }
  
  render() {
    return (
      <Fragment>
        <Header title="Noticias" />
        <div className="container white contenedor-noticias">
          <Form loadin = {this.state.loading} changeCategory={this.changeCategory} />
          {this.state.loading ? <h5 className="center">Cargando...</h5> : <ArticleList articles={this.state.articles}/>}
        </div>
      </Fragment>
    )
  }
}

export default App;
