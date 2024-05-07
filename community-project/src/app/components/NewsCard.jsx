import react from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 export default function NewsCard({article}) {

        return (
            <Card>
              <Card.Img variant="top" src="{image.src}" />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {Card.description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
 }