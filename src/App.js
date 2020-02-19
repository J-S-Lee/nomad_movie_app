import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) { // Food component
  return (
    <div>
      <h2>picture of {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = { // it has to be named propTypes
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
}

const foodPicture = [
  {
    id: 1,
    name: "kimchi",
    image: "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 3.1
  },
  {
    id: 2,
    name: "samgyeopsal",
    image: "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 3.8
  },
  {
    id: 3,
    name: "bibimbap",
    image: "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 1.1
  },
  {
    id: 4,
    name: "doncasu",
    image: "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "kimbap",
    image: "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.1
  }
]

function App() {
  return (
    <div className="App">
      {foodPicture.map(current => (
        <Food key={current.id} name={current.name} picture={current.image} rating={current.rating} />
      ))}
    </div>
  );
}

export default App;
