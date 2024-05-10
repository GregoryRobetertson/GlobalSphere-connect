
import Card from 'react-bootstrap/Card';
 export default function NewsCard({article}) {

        return (
            <Card className='bg-white shadow-[0_2px_18px_-6px_rbga(0,0,0,0.2)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif]' >
              <Card.Img variant="top" src={article.image}/>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.description}
                </Card.Text>
                <a href={article.url} className='px-6 py-2.5 mt-6 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600'>Read more</a>
              </Card.Body>
            </Card>
          );
 }