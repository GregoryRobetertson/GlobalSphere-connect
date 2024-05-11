import Card from 'react-bootstrap/Card';

export default function NewsCard({ article }) {
    return (
        <Card className='w-full max-w-sm rounded-lg overflow-hidden mx-auto font-sans h-full'>
            <Card.Img variant="top" src={article.image} className="h-48 object-cover" />
            <Card.Body className="h-full flex flex-col justify-between bg-gray-300">
                <Card.Title className="text-xl font-semibold">{article.title}</Card.Title>
                <Card.Text className="text-gray-700">{article.description}</Card.Text>
                <a href={article.url} className='block w-full py-2 text-center text-white bg-blue-500 rounded-md text-sm font-semibold hover:bg-blue-600 transition duration-300'>Read more</a>
            </Card.Body>
        </Card>
    );
}
