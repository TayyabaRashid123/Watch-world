import React from "react"
const Watches = () => {

const watchData=[
 { id : 1,name : "Rolex", price : 1200 , description : "Luxuary Watch" , image:"/rolex.png"},
        {id:2,name:"Omega",price:8000,description:"Sporty design",image:"/omega.png"},
       { id:3,name:"Patek Phillips",price:25000,description:"Elegant timeplace",image:"/patek.jpg"},
        {id:5,name:"Breitling",price:7000,description:"Bold and rugged",image:"/breitling.png"},
        {id:6,name:"Paxton",price:1000,description:"Afordable and Reasonaable",image:"/paxton.JPG"},
{id:7,name:"Citizen",price:50000,description:"Decent",image:"/citizen.jpg"}
    ]
    return(
<div>
<div className="watches">
    {watchData.map((watch)=>
    (
        <div key={watch.id}className="watch-card">
            <img src={watch.image}alt={watch.image}/>
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className="price">${watch.price}</div>
            <button>Add to Cart</button>
        </div>
    ))}
</div>
</div>

    )
}
export default Watches;