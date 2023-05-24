import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSearch = () => {
    const apiKey = '1336478d5e4e4fd486c639b2cf5977bb';

    axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}&pageSize=8`)
      .then(response => {
        setArticles(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className='row'>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={handleInputChange}
        />
        <Button variant="dark" onClick={handleSearch}>Search</Button>
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
              <Button href={article.url}>Read more</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default SearchBar;