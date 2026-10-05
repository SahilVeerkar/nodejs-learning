const Home = require('../models/home');

exports.addHome = (req,res,next)=>{
  
  res.render('host/add-home',{pageTitle:'Add Home to airbnb', currentpage: "HomeAdded"
  }); 
}

exports.postAddHome=(req,res,next)=>{
 
 const{houseName,price,location,rating,photoURL}=req.body;

 const home= new Home(houseName,price,location,rating,photoURL);
 home.save();

 res.render('host/home-added',{pageTitle:'Home Added Successfully',currentpage: "HomeAdded"});
}

exports.getHomes=(req,res,next)=>{
   Home.fetchAll((registeredHomes)=>
    res.render("store/home-list",{registeredHomes:registeredHomes,
    pageTitle:"airbnb Home",
    currentpage:"Home",
     })

   );
 
 
}

