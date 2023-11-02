import Card from 'react-bootstrap/Card';

function TeamCard({name, description, photo}) {
  return (
    <Card className='mb-2'>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TeamCard;