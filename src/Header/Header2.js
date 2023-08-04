import React, { useEffect, useState } from 'react'
import './Header2.css'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { filterInfoAction,reqFilterAction,SelectreqFilter } from '../Redux_toolkit/Redux_Slice';
import { useDispatch, useSelector } from 'react-redux';
import restaurantData from './../json/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './Container.css'
import axios from 'axios';
const Header2 = ({show,length}) => {
    let selectReqFilter=useSelector(SelectreqFilter)
    let [items,setItems]=useState([restaurantData])
   
    //  console.log(selectReqFilter)
  
    let dispatch=useDispatch()
    let handleFilters=(req)=>
  {dispatch(reqFilterAction(req))}

    let handleFiltersPageClick=()=>{
    dispatch(filterInfoAction({
      active:true
    }))
  }

 const [Array, setArray] = useState([])
 const [numItemsToShow, setNumItemsToShow] = useState(12)
 const navigate = useNavigate()


 useEffect(() => {
     axios.get(' http://localhost:3000/restaurantData')
         .then(res => setArray(res.data))
         .catch(err => console.log(err))
 }, [])

 const handleShowMore = () => {
     setNumItemsToShow(numItemsToShow + 12)
 }
 const ratingAbove=()=>{
  const sortedArray=[...Array].sort((a,b)=>b.rating-a.rating)
  setArray(sortedArray)
 }
 const DeliveryTime=()=>{
  const sortedArray=[...Array].sort((a,b)=>a.dtime-b.dtime)

  setArray(sortedArray)
 }
 const showMenu = (id) => {
  // console.log(id,"pppppp")
  navigate(`/menu/${id}`);
};
 const LowtoHigh=()=>{
  const sortedArray=[...Array].sort((a,b)=> a.fortwopepole-b.fortwopepole)
  setArray(sortedArray)
  // console.log(sortedArray)
 }
  const HightoLow=()=>{
  const sortedArray=[...Array].sort((a,b)=> b.fortwopepole-a.fortwopepole)
  setArray(sortedArray)
  // console.log(sortedArray)

 }
 const revelence=()=>{
  const sortedArray=[...Array].sort((a,b)=>a.id-b.id)
  setArray(sortedArray)
 }
 let [fixednavbar,setfixed]=useState(false)
 let changenav=()=>{
  if(window.screenY >=120){
    setfixed(true)
  }else{
    setfixed(false)
  }
 }
 window.addEventListener('scroll',changenav)
  return (
   <>
   <div className={fixednavbar ?'offnavbarblock':'offernav1'}></div>
   
    <div className='Header2'>
      <div className='Header2_inside'>
        <div className='Header2_inside_left'>
          <h2>{Array.length} restaurants</h2>
        </div>
              <div className='Header2_inside_right sticky'>
 
          <span className= {selectReqFilter=='' ?  'Header2_inside_right_span' : ''}
             onClick={revelence}>Relevance</span>

          <span className= {selectReqFilter=='deliveryTime' ?  'Header2_inside_right_span':''}
            onClick={DeliveryTime}>Delivery Time</span>

          <span className= {selectReqFilter=='rating' ?  'Header2_inside_right_span': ''}
            onClick={ratingAbove}>Rating</span>

          <span className= {selectReqFilter=='costLowtoHign' ?  'Header2_inside_right_span' : ''}  
            onClick={LowtoHigh}>Cost: Low To High</span>

          <span className= {selectReqFilter=='costHightoLow' ? 'Header2_inside_right_span' :''}
             onClick={HightoLow} >Cost: High To Low</span>

          <span onClick={handleFiltersPageClick} >Filters
            <FilterAltIcon className='Header2_inside_right_searchIcon' style={{color:'#db7c38 '}}/>
          </span>
            
        </div>
        </div>
      </div>
      <>
            <div className='container'>
                <div className='top'>
                    {Array.slice(0, numItemsToShow).map((d, i) => {
                        return (
                            <div className='res1' key={i}>
                                <div className='res2'>
                                    <div className='res4'>
                                        {/* <img style={{ height: "100%", width: "100%" }} src={d.image} alt='' /> */}
                                        <img  onClick={() => showMenu(d.id)} style={{ height: "100%", width: "100%" }} src={d.image} alt='' />

                                    </div>
                                    <div className='res3'>
                                        <div className='hname'>{d.name}</div>
                                        <div className='cuisine'>{d.cuisines}</div>
                                    </div>
                                    <div class="icons">
                                        <div class="_str _str1">
                                            <span class="_star">
                                                <FontAwesomeIcon icon={faStar} className='star' />
                                            </span>
                                            <span>{d.rating}</span>
                                        </div>
                                        <div>•</div>
                                        <div>{d.dtime} MINS</div>
                                        <div>•</div>
                                        <div >{d.price} FOR TWO</div>
                                    </div>
                                    <div class="view">
                                        <span role="button" className="_view _view1">Quick View</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
               
            </div>
            {numItemsToShow < Array.length && (
                   <div className='showmore'>
                     <button onClick={handleShowMore} id='show'>Show More</button>
                   </div>
                )}
        </>
      </>
  )
}

export default Header2