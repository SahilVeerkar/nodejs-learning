const Favourite = require('../models/favourite');
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
  Favourite.getFavourite(favourite=>{

    Home.fetchAll((registeredHomes)=>{
      const favouriteHomes = registeredHomes.filter(home=>favourite.includes(home.id))
      res.render("store/favourite-list",{
        favouriteHomes:favouriteHomes,
    pageTitle:"my favourites",
    currentpage:"favourites",
     })
    }
    )
  })
    
}

exports.postAddToFavourite=(req,res,next)=>{
   
   Favourite.addToFavourite(req.body.id,error=>{
    if(error){
      console.log("error while marking favourite",error)
    }
    
     res.redirect("/favourite");
   })
  
}
exports.getHomeDetails=(req,res,next)=>{
 const homeId=req.params.homeId;

 
 
 Home.findById(homeId,home=>{


if(!home){
  console.log("Home not found")
  res.redirect("/homes");
 
} 
else{
 res.render("store/home-detail",{
  home:home,
pageTitle:"Home Details",
currentpage:"Home"

 })
}

 })

}
 