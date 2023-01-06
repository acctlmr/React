import emojidata from './emojidata';
import Entry from './Entry';

function createEntry(emojiDet) {
  return (
    <Entry key={emojiDet.id} emoji={emojiDet.emoji} name={emojiDet.name} meaning={emojiDet.meaning} />
  )
}

function App() {
  return (
    <div>
      <h1><span>Emojipedia</span></h1>
      
      <dl className="dictionary">{emojidata.map(createEntry)}</dl>
    </div>
  );
}

export default App;
