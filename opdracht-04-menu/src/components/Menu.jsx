const menu = ({ title, category, price, img, desc}) => {
    return ( 
        <section>
    <img src={img} alt=""  className="image"/>
    <h2>{title}</h2>
    <h4>{category}</h4>
   <h3>{price}</h3>
   <p>{desc}</p>
   </section>
     );
    
}
 
export default menu;