import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SearhDesign.css";

const SearchPage = () => {
  const [search, setSearch] = useState(null);
  const [dat, setDat] = useState([]);
  const [respData, updData] = useState([]);
  const [check, setCheck] = useState(false);
  const [circleData, setCircleData] = useState([]);

  const fetchCuisine = async () => {
    await axios.get("http://localhost:3000/restaurantData").then((res) => {
      setDat(res.data);
    });
  };

  useEffect(() => {
    fetchCuisine();
  }, []);

  useEffect(() => {
    /* searchRestaurant() */
    if (search !== null) {
      let filtersearch = dat.filter((item) => {
        //  return(search.toLowerCase()==''?item:(item.name.toLowerCase().includes(search)||item.location.toLowerCase().includes(search)
        // ||item.cuisines.split(',').map(ite=>ite.trim()).includes(search)
        return search.toLowerCase() == ""
          ? ""
          : item.name.toLowerCase().includes(search) ||
              item.location.toLowerCase().includes(search) ||
              item.cuisines.split(",").join(",").toLowerCase().includes(search);
      });
      updData(filtersearch);
    }
  }, [search]);
  const handleCircle = (item) => {
    setSearch(item);
  };
  /* const searchRestaurant=()=>{
     let filtersearch=dat.filter((item)=>{
      return(search.toLowerCase()==''?item:(item.name.toLowerCase().includes(search)||item.location.toLowerCase().includes(search)||item.cuisines.split(',').map(ite=>ite.trim()).includes(search)
      ))
    }
    ) 
     
  // return filtersearch; 
  
  updRespData(dat.filter((item)=>{
    return(search.toLowerCase()==''?item:(item.name.toLowerCase().includes(search)||item.location.toLowerCase().includes(search)||item.cuisines.split(',').map(ite=>ite.trim()).includes(search)
    ))
  }))
  
  } */
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const cardItem = () => {
    // const showDataCount=Temparr.length==0?noOfImgToShow:filterDataShow
    return (
      <section id="" className="offer-section ">
        <div className="offer-container">
          {respData.length == 0 ? (
            <div></div>
          ) : (
            <div className="offer-row">
              {(respData.length !== 0 && respData).map((ele, ind) => {
                return (
                  <>
                    {/* <div key={ind} className="offer-column" onClick={(e)=>singleResta(ele.id)}> */}
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
                          {/* <span>
                      <FontAwesomeIcon icon={faStar} />
                    </span> */}
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
          )}
        </div>
      </section>
    );
  };

  return (
    <>
      <div className="srcbtndiv">
        <button className="searcbtn">
          <div className="sercbrletter">
            <input
              placeholder="Search for restaurant and food"
              onChange={handleChange}
              value={search}
            />
          </div>
          <div className="searcicon">
            <img
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png"
              style={{ width: 20 }}
            />
          </div>
        </button>
      </div>

      <div>
        <h2 className="headercuisine">Popular Cuisines</h2>
      </div>

      <div className="searcimages">
        <li>
          {" "}
          <img
            className="img1"
            src="https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp"
          />
          <h5>Biryani</h5>
        </li>
        {/* <li> <img  className='img1' src= "https://www.cookwithnabeela.com/wp-content/uploads/2023/03/MuttonBiryani.webp" /><div onClick={()=>handleCircle("Biryani")}>Biryani</div></li> */}
        <li>
          <img
            className="img1"
            src="https://twoplaidaprons.com/wp-content/uploads/2022/08/Vietnamese-egg-rolls-on-plate-stacked-thumbnail.jpg"
          />
          <h5>Rolls</h5>
        </li>
        <li>
          <img
            className="img1"
            src="https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg"
          />
          <h5>Pizzas</h5>
        </li>
        <li>
          <img
            className="img1"
            src="https://www.vegrecipesofindia.com/wp-content/uploads/2021/09/masala-chai-2.jpg "
          />
          <h5>Tea</h5>
        </li>
        <li>
          <img
            className="img1"
            src=" https://kohinoor-joy.com/wp-content/uploads/2020/01/indo-chinese-food.jpg"
          />
          <h5>Chinese</h5>
        </li>
        <li>
          <img
            className="img1"
            src="https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers.jpg "
          />
          <h5>Burger</h5>
        </li>
        <li>
          <img
            className="img1"
            src=" https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg"
          />
          <h5>Cake</h5>
        </li>
        <li>
          <img
            className="img1"
            src=" https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/366-chocolate-dessert-waffles.jpg "
          />
          <h5>Desserts</h5>
        </li>
        <li>
          <img
            className="img1"
            src=" https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/chitra-sendhil1453210035569e39b33b9db.jpeg "
          />
          <h5>North Indian</h5>
        </li>
        <li>
          <img
            className="img1"
            src="https://sukhis.com/app/uploads/2022/04/image3-4.jpg "
          />
          <h5>South Indian</h5>
        </li>
      </div>
      {cardItem()}
    </>
  );
};
export default SearchPage;
