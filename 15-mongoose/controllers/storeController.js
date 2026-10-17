const { Result } = require('postcss');
const Favourite = require('../models/favourite');
const Home = require('../models/home');

exports.getIndex=(req,res,next)=>{
   Home.find().then(registeredHomes=>{
 res.render("store/index",{registeredHomes:registeredHomes,
    pageTitle:"airbnb Home",
    currentpage:"index",
   })
   

 } );
 
 
}

exports.getHomes=(req,res,next)=>{
  Home.find().then(registeredHomes=>{
    res.render("store/home-list",{registeredHomes:registeredHomes,
    pageTitle:"Home-list",
    currentpage:"Home",
    })

});
 
 
}
exports.getBooking=(req,res,next)=>{
   
    res.render("store/booking",{
    pageTitle:"my bookings",
    currentpage:"booking",
     })

  
}

exports.getFavouriteList=(req,res,next)=>{
  Favourite.find()
  .populate("houseId")
  .then(favourites=>{
const favouriteHomes =favourites.map(fav=>fav.houseId);
   res.render("store/favourite-list",{
        favouriteHomes:favouriteHomes,
    pageTitle:"my favourites",
    currentpage:"favourites",
     })
    }
    )
}

exports.postAddToFavourite=(req,res,next)=>{
  const homeId= req.body.id;

  Favourite.findOne({houseId:homeId}).then((fav)=>{
    if(fav){
console.log("Already marked as favourites");
    }
    else{
      fav=new Favourite({houseId:homeId});
      fav.save().then((result)=>{
        console.log("fav added",result);
      });
    }
res.redirect("/favourite");

    }).catch(err=>{
      console.log("error while marking favourite",err);
    })

  
}

exports.postRemoveFromFavourite=(req,res,next)=>{
   
const homeId=req.params.homeId;
Favourite.findOneAndDelete({houseId:homeId }).then(result=>{
    console.log("fav remove:",result);
   }).catch(err=>{
console.log("error while marking favourite",err);
   }).finally(()=>{ 
res.redirect("/favourite");
   })
  
}

exports.getHomeDetails=(req,res,next)=>{
 const homeId=req.params.homeId;

 Home.findById(homeId).then(home=>{


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





 