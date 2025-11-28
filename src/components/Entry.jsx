import locationMarker from "../assets/location.svg";
import styles from "./Entry.module.css"

export default function Entry({img,country,mapsLink,name,date,description}) {
  return (
    <article className="journal-entry">
      <div className={styles.mainImageContainer}>
        <img
          src={img}
          className={styles.mainImage}
          alt=" picture"
        />
      </div>
      <div className="info-container">
        <img
          src={locationMarker}
          className="second-image"
          alt="location marker"
        />
        <span>{country}</span>
        <a href={mapsLink} >
          View on Google Maps
        </a>
        <h2 className="entry-title">{name}</h2>
        <p className="trip-dates">{date}</p>
        <p className="entry-text">
          {description}
        </p>
        <hr/>
      </div>

    </article>
  );
}
