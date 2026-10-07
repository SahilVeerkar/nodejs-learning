const Home = require('../models/home');

exports.getIndex=(req,res,next)=>{
   Home.fetchAll((registeredHomes)=>
    res.render("store/index",{registeredHomes:registeredHomes,
    pageTitle:"airbnb Home",
    currentpage:"index",
     })

   );
 
 
}

exports.getHomes=(req,res,next)=>{
   Home.fetchAll((registeredHomes)=>
    res.render("store/home-list",{registeredHomes:registeredHomes,
    pageTitle:"Home-list",
    currentpage:"Home",
     })

   );
 
 
}
exports.getBooking=(req,res,next)=>{
   
    res.render("store/booking",{
    pageTitle:"my bookings",
    currentpage:"booking",
     })

  
}

exports.getFavouriteList=(req,res,next)=>{
    Home.fetchAll((registeredHomes)=>
      res.render("store/favourite-list",{
        registeredHomes:registeredHomes,
    pageTitle:"my favourites",
    currentpage:"favourites",
     })
    )
    
}
exports.getHomeDetails=(req,res,next)=>{
 const homeId=req.params.homeId;
 console.log("At home details page",homeId);
 Home.findById(homeId,home=>{
 console.log("home detail found",home);
 
 res.render("store/home-detail",{
pageTitle:"Home Details",
currentpage:"Home"

 })
 })

 
 
 
}
 