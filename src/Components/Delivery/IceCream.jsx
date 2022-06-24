import { TabsNav } from "../Navbar/TabsNav"
import { ZomatoNav } from "../Navbar/ZomatoNav"
import { Filter } from "../FilterPage/Filter"
import axios from "axios"
import { useEffect, useState } from "react"
import "./A.Food.css"

export const IceCream = () => {

    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [iceCreamData , setIceCreamData] = useState([])

    useEffect(()=>{GetRandomData()},[])
    useEffect(()=>{window.scrollTo({ top: 0, behavior: "smooth" })},[])

    const GetRandomData = () => {
        axios.get("http://localhost:8080/IceCream").then((res)=> setIceCreamData(res.data))
    }

    const HandlePrice = (value) => {
        setPrice(value);
        
        if(value == "ascPrice"){
            let ascending = randomData.sort((a,b) => a.price - b.price)
            setRandomData([...ascending])
        }

        else if(value == "descPrice"){
            let descending = randomData.sort((a,b) => b.price - a.price)
            setRandomData([...descending])
        }
    };


    const HandleRating = (value) => {
        setRating(value);

        if(value == "ascRating"){
            let ascending = randomData.sort((a,b) => a.rating - b.rating)
            setRandomData([...ascending])
        }

        else if(value == "descRating"){
            let descending = randomData.sort((a,b) => b.rating - a.rating)
            setRandomData([...descending])
        }
    };




    return(

        <>

        < ZomatoNav />
        < TabsNav />
        < Filter HandlePrice ={HandlePrice} HandleRating ={HandleRating} price={price} rating={rating} />

        <h1 id="headOrder"> Order your IceCream </h1>

        <div className="random">

            {iceCreamData.map((el)=>(

                <div >

                   <div className="imgDiv"><img src={el.imgUrl} /></div>

                    <div className="flxBox">
                        <h1>{el.name}</h1>
                        <span>Rs . {el.price}</span>
                    </div>

                    <div className="priceBox">
                        <p>{el.variety}</p>
                        <span>{el. rating}</span>
                    </div>

                </div>
            ))}
        </div>

        </>
    )
}