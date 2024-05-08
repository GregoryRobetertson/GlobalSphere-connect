
import Card from 'react-bootstrap/Card';
 export default function NewsCard({article}) {

        return (
            <Card >
              <Card.Img variant="top" src={article.image}/>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
 }