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
          src={props.img.src}
          className={styles.mainImage}
          alt={props.img.alt}
        />
      </div>
      <div className="info-container">
        <img
          src={locationMarker}
          className="second-image"
          alt="location marker"
        />
        <span>{props.country}</span>
        <a href={props.mapsLink}>View on Google Maps</a>
        <h2 className="entry-title">{props.name}</h2>
        <p className="trip-dates">{props.date}</p>
        <p className="entry-text">{props.description}</p>
        <hr />
      </div>
    </article>
  );
}
