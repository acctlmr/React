import Users from './Users';
import Card from './Card';
import data from './data';

function App() {
  return (
    <div>
      <h1>List of Users</h1>
      { /*
      <Card>
        <h2>This is a Card</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
      </Card>
      <Users name="Rahul" job="Designer" />
      <Users name="Teena" job="Developer" />
      <Users name="Suraj" job="HR" />
  */}
      {data.map((user) => {
        return (
          <Card key={user.id}>
            <Users name={user.name} job={user.job} />
          </Card>
        )
      })}
    </div>
  );
}

export default App;
