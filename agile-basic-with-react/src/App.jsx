
import './App.css'
import data from './data.json'
import ArtistList from './components/ArtistList'



function App() {
  console.log(data);

  return (
    <>
    <div>
      <h1>Artists</h1>
      <ArtistList artists={data.artists}/>
    </div>
    </>
  )
}

export default App
