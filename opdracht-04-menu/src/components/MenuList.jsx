import Menu from "./Menu";
import { useState } from "react";
import data from '../data.js'
const MenuList = () => {
const [gerechten, setGerechten] = useState(data);

    return ( 
        <section className="menu-container">
      {gerechten.map((gerecht) => (
        <Menu
          key={gerecht.id}
          title={gerecht.title}
          category={gerecht.category}
          price={gerecht.price}
          img={gerecht.img}
          desc={gerecht.desc}
        />
      ))}
    </section>
     );
}
 
export default MenuList;