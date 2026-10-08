const Home = require('../models/home');

exports.addHome = (req,res,next)=>{
  
  res.render('host/edit-home',
    {editing:false,
      pageTitle:'Add Home to airbnb', 
      currentpage: "HomeAdded"
  }); 
}

exports.getEditHome = (req,res,next)=>{
  const homeId = req.params.homeId;
  const editing= req.query.editing === 'true';
  Home.findById(homeId,home=>{
    if(!home){
      console.log("home not found for editing");
      return res.redirect("/host/host-home-list");
    }
    else{
  res.render('host/edit-home',
    {home:home,
      pageTitle:'edit your home', 
      currentpage: "host-homes",
      editing:editing,

  });
    }
  })
  

}

exports.postAddHome=(req,res,next)=>{
 
 const{houseName,price,location,rating,photoURL}=req.body;

 const home= new Home(houseName,price,location,rating,photoURL);
 home.save();

 res.redirect('/host-home-list');
}

exports.getHostHomes=(req,res,next)=>{
   Home.fetchAll((registeredHomes)=>
    res.render("host/host-home-list",{registeredHomes:registeredHomes,
    pageTitle:"Host Home List",
    currentpage:"host-homes",
     })

   );
 
 
}

exports.postEditHome=(req,res,next)=>{
 
 const{id, houseName,price,location,rating,photoURL}=req.body;

 const home= new Home(houseName,price,location,rating,photoURL);
 home.id=id;
 home.save();

 res.redirect('/host-home-list');
}


