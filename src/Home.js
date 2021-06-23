import React, {useState, useEffect} from "react";
import "./Home.css";
import Product from "./Product";
import axios from "axios";
import { useStateValue } from "./StateProvider";


const carLocal = JSON.parse(localStorage.getItem("cart")) || []
function Home() {
  const [{ basket }, dispatch] = useStateValue();
const URL = "http://localhost:5000"
  const [products, setProducts] = useState()
// useEffect(() => {
//   const fetData = async () =>{
//     const {data} = await axios.get(`http://localhost:5000/api/products`)
//     setProducts(data);
//   }
//   fetData()
// }, [])
  
const [ newbasket, setBasket] = useState(carLocal)


useEffect(()=>{
  localStorage.setItem("cart", JSON.stringify(newbasket) )
}, [])




  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        />
        <div className="home__row">
          <Product
          setBasket={setBasket}
          newbasket={newbasket}
            id="3453535435346"
            title="the lean startup: How Constant innovation Creates Radically Successfull business"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
           setBasket={setBasket}
          newbasket={newbasket}
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kittchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
           setBasket={setBasket}
          newbasket={newbasket}
            id="4903850"
            title="Samsung L345 49' Curved"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
           setBasket={setBasket}
         newbasket={newbasket}
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={199.99}
            rating={3}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
           setBasket={setBasket}
          newbasket={newbasket}
            id="325435435"
            title="New Apple iPod Pro (12.9-inch, Wi-Fi, 128GB) = Silver (4th generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
           setBasket={setBasket}
          newbasket={newbasket}
            isLarge
            id="908299322"
            title="Samsung LC$9RG90SSUXEN 59' Curved"
            price={1098.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
