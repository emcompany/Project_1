import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Home.css';

const HomePage = () => {
  const dishes = [
    {
      id: 1,
      name: 'Dish 1',
      image: '/path/to/dish1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Dish 2',
      image: '/path/to/dish2.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      name: 'Dish 3',
      image: '/path/to/dish3.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <div>
      <h1>Welcome to Our Restaurant</h1>
      <p>Experience the best dining in town!</p>

      <div className="dishes-container">
        {dishes.map((dish) => (
          <Card key={dish.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={dish.image} />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>{dish.description}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
