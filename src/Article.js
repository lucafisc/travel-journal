export default function Article(props) {
  console.log(props);
  return (
    <section className="article">
      <img src={props.imageUrl} />
      <h2>{props.location}</h2>
      <a src={props.googleMapsUrl}>View on Google Maps</a>
      <h1>{props.title}</h1>
      <p>{props.startDate}</p>
      <p>{props.endDate}</p>
      <p>{props.description}</p>
    </section>
  );
}
