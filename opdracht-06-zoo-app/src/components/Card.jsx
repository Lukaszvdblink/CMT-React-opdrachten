const Card = ({animals, onShowDetail }) => {
    return ( 
        <section>
            <h2>{animals.name}</h2>
            <p>{animals.descriptions}</p>
            <img src={animals.imageUrl} alt="rt" />   
            <button onClick={() => onShowDetail(animals.id)}>
        Meer info
      </button>
        </section>
     );
};
 
export default Card;