const registeredHomes =[];

exports.addHome = (req,res,next)=>{
  
  res.render('add-home',{pageTitle:'Add Home to airbnb', currentpage: "HomeAdded"
  }); 
}

exports.postAddHome=(req,res,next)=>{
 console.log(req.body);

 registeredHomes.push(req.body);

    res.render('home-added',{pageTitle:'Home Added Successfully',currentpage: "HomeAdded"});
}

exports.getHomes=(req,res,next)=>{
console.log(registeredHomes);
  res.render('home',{registeredHomes: registeredHomes, pageTitle: 'airbnb Home',currentpage: "Home"}); 
}

