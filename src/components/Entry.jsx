 import locationMarker from "../assets/location.svg";
import styles from "./Entry.module.css"

export default function Entry(
  props
  // {img,country,mapsLink,name,date,description}
) {
  return (
    <article className="journal-entry">
      <div className={styles.mainImageContainer}>
        <img
          src={props.entry.img.src}
          className={styles.mainImage}
          alt={props.entry.img.alt}
        />
      </div>
      <div className="info-container">
        <img
          src={locationMarker}
          className="second-image"
          alt="location marker"
        />
        <span>{props.entry.country}</span>
        <a href={props.entry.mapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.entry.name}</h2>
        <p className="trip-dates">{props.entry.date}</p>
        <p className="entry-text">{props.entry.description}</p>
        <hr />
      </div>
    </article>
  );
}
