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
  Home.findById(homeId).then(home=>{
    
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
 
 const{houseName,price,location,rating,photoURL,desciption}=req.body;

 const home= new Home(houseName,price,location,rating,photoURL,desciption);
 home.save().then(()=>{
  console.log('home saved successfully');
 })

 res.redirect('/host-home-list');
}

exports.getHostHomes=(req,res,next)=>{
 Home.fetchAll().then(registeredHomes=>{
    res.render("host/host-home-list",{registeredHomes:registeredHomes,
    pageTitle:"Host Home List",
    currentpage:"host-homes",
     })

 } );
 
 
}

exports.postEditHome=(req,res,next)=>{
 
 const{id, houseName,price,location,rating,photoURL,desciption}=req.body;

 const home= new Home(houseName,price,location,rating,photoURL,desciption,id);
 
 home.save().then(result=>{
  console.log("home updated",result);
 });

 res.redirect('/host-home-list');
}

exports.postDeleteHome=(req,res,next)=>{
 
const homeId = req.params.homeId;
console.log('came to delete',homeId);
Home.deleteById(homeId).then(()=>{res.redirect("/host-home-list")}).catch(error=>{
  console.log('error while deleting ',error);
})

}



