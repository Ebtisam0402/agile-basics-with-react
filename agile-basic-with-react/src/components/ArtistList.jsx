function ArtistList({ artists }) {
  return (
    <div>
      {artists.map((artist) => (
        <div key={artist.id}>
          <h3>{artist.name}</h3>
          <p>{artist.genre}</p>
        </div>
      ))}
    </div>
  )
}

export default ArtistList