import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard';

const users = [
  {
    fullName: "RahulKumar",
    username:"ra"
  },
  {
    fullName:"Suraj",
    username:"su"
  },
  {
    fullName: "Teena",
    username:"tn"
  },
  {
    fullName:"Kiran",
    username:"kir"
  }
];

function App() {
  return (
    <div style={{ 
      padding: 10,
      display: 'flex',
      flexDirection:'row'
    }}>
      {
        users.map(user => <UserCard isAdmin={user.fullName.length<10} fullName={user.fullName}  username={user.username}/>)
      }
    </div>
  );
}

export default App;
