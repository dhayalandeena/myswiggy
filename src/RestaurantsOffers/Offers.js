import { useState, useEffect } from "react";
import axios from "axios";
import "./OffersDesign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faChevronDown} from "@fortawesome/free-solid-svg-icons";

const Offers = () => {

  const [offer, setOffer] = useState([]);
  const [noOfImgToShow, setNoOfImgToShow] = useState(12);
  const [cuisines,setCuisines]=useState([])
  const[noOfCuisineToShow,setNoOfCuisineToShow]=useState(11)
  
  const fetchData=async ()=>{
    await axios
    .get("http://localhost:3000/restaurantData")
    .then((response) => setOffer(response.data))
    .catch((err) => console.log(err));
     await axios.get("http://localhost:3000/cuisinesNearMe")
     .then((res)=>setCuisines(res.data[0].cName))
      .catch((er)=>console.log(er))
    }



  useEffect(() => {
    fetchData();
      }, []);


  const handleImgToShow = () => {
    setNoOfImgToShow((prevState) => prevState + 12);
  };

  const handleShowMore=()=>{
    setNoOfCuisineToShow(prevState=>prevState+12)
  }

const handleCuisines=(e,ele)=>
{
offer.filter((element,ind)=>console.log("eeee",element.cuisinesArray))
//https://stackoverflow.com/questions/73786887/filter-array-for-objects-with-nested-array-that-contains-a-specific-string

}

  const cardItem=()=>{
    return <section id="" className="offer-section">
    <div className="offer-container">
      <div className="offer-row">
        {offer.slice(0, noOfImgToShow).map((ele, ind) => {
          return (
            <>
              <div key={ind} className="offer-column">
                <div className="offer-img">
                  <img src={ele.image} alt={ele.name} />
                  <div className="offer-heading">
                    <h4 className="offer-head">{ele.offerRange}</h4>
                  </div>
                </div>
                <div className="offer-content">
                  <h3>{ele.name}</h3>
                  <div className="star-icon">
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <h5>{ele.rating}</h5>
                  </div>

                  <div className="offer-desc">
                    <h4>{ele.cuisines}</h4>
                    <h3>{ele.location}</h3>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {noOfImgToShow<offer.length &&
        <div className="showDiv">
          <button onClick={handleImgToShow} className="showbtn">Show more <span>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </span>
</button>
        </div>
      }
    </div>
  </section>

  }


  const cuisineItems=()=>{
return <section className="c-section">
<div className="c-container">
<h3>Cuisines near me</h3>
<div className="c-row">
{cuisines.slice(0,noOfCuisineToShow).map((ele,ind)=>{
return(<>
<div className="c-column">
<button onClick={(e)=>handleCuisines(e,ele)}>{ele}</button>

</div>

</>)
})}
{
noOfCuisineToShow<cuisines.length &&<div className="c-column">
<button onClick={handleShowMore}>show more<span><FontAwesomeIcon icon={faChevronDown} /></span></button>
</div>
}

</div>
</div>
</section>


  }


  return (
    <>
    {cardItem()}
    {cuisineItems()}
          </>
  );
};
export default Offers;
