
const menu = ({id, title, category, price, img, desc}) => {
    return ( 
        <section>
    <img src={image} alt=""  className="image"/>
    <h2>{title}</h2>
    <h4>{category}</h4>
   <h3>{prijs}</h3>
   <p>{description}</p>
   </section>
     );
    
}
 
export default menu;