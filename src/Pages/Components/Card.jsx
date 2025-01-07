import PropTypes from "prop-types";

function Card(props) {


	return (
		<article>
			<p>title : {props.data.title}</p>
		</article>
	);
}

Card.propTypes = {
	data: PropTypes.shape({		
		title: PropTypes.string.isRequired,
	}).isRequired,
};

export default Card;


// import PropTypes from "prop-types";

// function Card(props) {
//   const { title, image } = props.data; // Déstructure les propriétés du livre

//   return (
//     <article>
//       <h2>{title}</h2>
//       {image ? (
//         <img src={image} alt={title}/>
//       ) : (
//         <p>Pas de couverture disponible</p>
//       )}
//     </article>
//   );
// }

// Card.propTypes = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string, // Image non obligatoire
//   }).isRequired,
// };

// export default Card;
