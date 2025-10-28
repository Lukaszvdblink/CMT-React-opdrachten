import menu from "./Menu";
import { useState } from "react";
const Menulist = () => {
const [gerechten, setGerechten] = useState(menu);

    return ( 
        <section className="menu-container">
      {gerechten.map((gerecht) => (
        <Menu
          key={gerecht.id}
          id={gerecht.id}
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
 
export default Menulist;