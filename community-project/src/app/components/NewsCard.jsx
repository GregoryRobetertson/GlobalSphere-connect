
import Card from 'react-bootstrap/Card';
 export default function NewsCard({article}) {

        return (

          
            <Card style={{width:"380px", backgroundColor:"lightgray"}} >
              <Card.Img variant="top" src={article.image}/>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.description}
                </Card.Text>
                <a href={article.url}>Read more</a>
              </Card.Body>
            </Card>
          );
 }