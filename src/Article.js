export default function Article(props) {
  return (
    <section className="article">
      <img className="article--cover" src={props.imageUrl} alt={props.alt} />
      <div className="article--text">
        <div className="article--location">
          <h2>{props.location}</h2>
          <a src={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1 className="article--title">{props.title}</h1>
        <div className="article--dates">
          <p>{props.startDate}</p>
          <p>{props.endDate}</p>
        </div>
        <p className="article-description">{props.description}</p>
      </div>
    </section>
  );
}
