function functionality3()
{
    var city=document.getElementById("first").value;// takes input value
    
    var xhr1= new XMLHttpRequest();
        xhr1.open("GET","https://developers.zomato.com/api/v2.1/cities?q="+city+"&apikey=7ae99f2e64d3ca377f284662d383b7ec");
        xhr1.send();
         
    var data;
   var cityid;
    xhr1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         data=JSON.parse(this.responseText);//changing the data into json format 
         console.log(data);
         cityid=data.location_suggestions[0].id;
         console.log(cityid);
		 
		 
         var xhr2= new XMLHttpRequest();
    xhr2.open("GET","https://developers.zomato.com/api/v2.1/search?entity_id="+cityid+"&entity_type=city&apikey=7ae99f2e64d3ca377f284662d383b7ec");
    xhr2.send();
     
    var data1;
    xhr2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     data1=JSON.parse(this.responseText);//changing the data into json format 
     console.log(data1);
		 var items=data1.restaurants.length
		 if(items<6)
		 {
			 if(items%2==0)
			 {
				 var j=items/2;
				 for(var i=0;i<(items/2);i++)
				 {
					 $("#cont").append('<div class="post" style="margin-left:-130px"><img  src="'+data1.restaurants[i].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[i].restaurant.name+'</h2></div></div><div class="post" style=margin-top:-330px;margin-left:550px;"><img src="'+data1.restaurants[i+j].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[i+j].restaurant.name+'</h2></div></div>');
				 }
			 }
			 else if(items==1)
			 {
				 $("#cont").append('<div class="post" style="margin-left:-395px"><img  src="'+data1.restaurants[0].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[i].restaurant.name+'</h2></div></div>');
			 }
			 else if(items==3)
			 {
				 for(var i=0;i<1;i++)
				 {
					 $("#cont").append('<div class="post" style="margin-left:-130px"><img src="'+data1.restaurants[i].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[i].restaurant.name+'</h2></div></div><div class="post" style=margin-top:-330px;margin-left:550px;"><img src="'+data1.restaurants[i+1].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[i+1].restaurant.name+'</h2></div></div>');
				 }
				  $("#cont").append('<div class="post" style="margin-left:-395px"><img src="'+data1.restaurants[2].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[2].restaurant.name+'</h2></div></div>');
			 }
			 else
			 {
				  for(var i=0;i<1;i++)
				 {
					 $("#cont").append('<div class="post" style="margin-left:-130px"><img src="'+data1.restaurants[i].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[i].restaurant.name+'</h2></div></div><div class="post" style=margin-top:-330px;margin-left:550px;"><img src="'+data1.restaurants[i+2].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[i+2].restaurant.name+'</h2></div></div>');
				 }
				  $("#cont").append('<div class="post" style="margin-left:-130px"><img  src="'+data1.restaurants[2].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[2].restaurant.name+'</h2></div></div>');
			 }
		 }
		 else{
			 
		 for(var i=0;i<3;i++)
     {

	 	$("#cont").append(' <div class="post" style="margin-top:100px;margin-left:130px;"><img  src="'+data1.restaurants[i].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[i].restaurant.name+'</h2></div></div><div class="post" style=margin-top:-400px;margin-left:800px;"><img  src="'+data1.restaurants[i+3].restaurant.featured_image+'"><div class="post-s"><h2>'+data1.restaurants[i+3].restaurant.name+'</h2></div></div>'); 

     }
		 }
}
};
}
};
}