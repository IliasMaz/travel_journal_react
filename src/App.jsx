import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "./data.js";
export default function App() {

  const dataTrip = data.map((place)=>{
    return (
      <Entry
        img={{
          src: place.img.src,
          alt: place.img.src
        }}
        country={place.country}
        mapsLink={place.mapsLink}
        name={place.name}
        date={place.date}
        description={place.description}
      />
    )
  })

  return (
    <>
      <Header />
      <main className="container">
        {dataTrip}
      </main>
    </>
  );
}
