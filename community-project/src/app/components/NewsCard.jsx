'use client';
import react from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 export default function NewsCard({article}) {

        return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="{img.src}" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {Card.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
 }