import React, { Component } from 'react';
import axios from 'axios';
import {Card, Button,Form} from 'react-bootstrap'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      articles: []
    };
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    });
  }

  handleSearch = () => {
    const apiKey = '1336478d5e4e4fd486c639b2cf5977bb'
    const { query } = this.state;

    axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=8`)
      .then(response => {
        this.setState({
          articles: response.data.articles
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { articles } = this.state;

    return (
      <div className='row'>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={this.handleInputChange}
            />
            <Button variant= "dark" onClick={this.handleSearch}>Search</Button>
          </Form>
        
          {articles.map((article, index) => (
              <div className='col-3' key={index}>
           <Card>
            <Card.Img src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
              {article.description}
              </Card.Text>
              <Button href={article.url}>Readmore</Button>
            </Card.Body>
          </Card>
              </div>
          
          ))}
        
      </div>
    );
  }
}

export default SearchBar;