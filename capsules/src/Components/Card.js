export default function Card(props){

    return(
      <div className='col-sm-6'>
      <div className="card "  key={props.rocket.id}>
    <img src={props.rocket.flickr_images[0]} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.rocket.name}</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a 
      href="#" 
      className="btn btn-primary" 
      data-toggle="modal" 
      data-target={`#popup${props.rocket.id}`}>
        View More
        </a>
    </div>
  </div>
  </div>
    )
}