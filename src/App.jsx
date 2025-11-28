import Header from "./components/Header.jsx";
import Entry from "./components/Entry.jsx";
export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Entry
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/35/49/ff/mt-olympus.jpg?w=700&h=400&s=1"
          country="Greece - Makedonia"
          mapsLink="https://www.google.com/maps/search/Drive%20to%20Mount%20Olympus,%20Mount%20Olympus,%20Greece"
          name="Olympos"
          date="March - October"
          description="At Macedonia In Greek mythology, Olympus is the home of the Greek gods, on Mytikas peak. The mountain has exceptional biodiversity and rich flora."
        />
        <Entry
          img="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/20/80/c5/tsougrias-beach.jpg?w=1400&h=500&s=1"
          mapsLink="
          https://www.google.com/maps/place/Skiathos/@39.1694464,23.4095034,14369m/data=!3m2!1e3!4b1!4m6!3m5!1s0x14a6e0992b1d42b5:0x4a2e6a478bd85533!8m2!3d39.16352!4d23.4901667!16zL20vMDR2cW5y?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
          date="April - September"
          description="The island is picturesque, unspoilt and blessed with more than 60 beautifully crystal clear waters and beaches. The most famous is Koukounaries, which is considered as the third most beautiful beach in the Mediterranean."
        />
        <Entry
          img="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTK5Kk_E0HaO8yZfJ9oauOXw4LuteAQhjAwkgfR_yXifwADTFrxav4SNODAzhwgAOTgHic67PQc32SLkDVbv0rNB2A&s=19"
          country="Greece - Epirus"
          mapsLink="https://www.google.com/maps/search/%CE%9C%CE%B9%CE%BA%CF%81%CF%8C%20%CE%A0%CE%AC%CF%80%CE%B9%CE%B3%CE%BA%CE%BF%2C%20Zagori%20Municipality%2C%20Ioannina%20Regional%20Unit%2C%20Epirus%2C%20Epirus%20and%20Western%20Macedonia%2C%20440%2004%2C%20Greece"
          name="Papingo"
          date="November - February"
          description="Papingo is a former community in the Ioannina regional unit, Epirus, Greece. Since the 2011 local government reform it has become part of the municipality of Zagori, of which it is a municipal unit. The municipal unit has an area of 34.131 km². It is located in the Vikos–Aoös National Park."
        />
      </main>
    </>
  );
}
