import Card from './Cards';
import contacts from './contacts';

function App() {

  function createCard(contact) {
    
    return (
      <Card key={contact.id} name={contact.name} img={contact.imgURL} phone={contact.phone} email={contact.email} />
    );
  }


  return (
    <div>
      <h1 className="heading">List of Contacts</h1>
      { /*
      <Card name={contacts[0].name} img={contacts[0].imgURL} phone={contacts[0].phone} email={contacts[0].email} />
      <Card name={contacts[1].name} img={contacts[1].imgURL} phone={contacts[1].phone} email={contacts[1].email} />
      <Card name={contacts[2].name} img={contacts[2].imgURL} phone={contacts[2].phone} email={contacts[2].email} />
  */}
      { /*
      {contacts.map((contact) => {
        
        return (
          <Card key={contact.id} name={contact.name} img={contact.imgURL} phone={contact.phone} email={contact.email} />
        )
      })}
      */
      }

      {contacts.map(createCard)}
      
    </div>
  );
}

export default App;
