import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
import data from "./data.js";
export default function App() {

  const dataTrip = data.map((entry)=>{
    return (
      <Entry

      key={entry.id}
      {...entry}
      // entry={entry}

      //2
        // key={place.id}
        // img={place.img}
        // country={place.country}
        // mapsLink={place.mapsLink}
        // name={place.name}
        // date={place.date}
        // description={place.description}
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
