// set up the variables and make an associative array for cookies separation

var cookieCollection, eachCookieSplitted, cookieObj={};
var cookiePair, i=0;
var theGetCookieExe;
function parseCookie(){
  cookieCollection = document.cookie;
  eachCookie=document.cookie.split(";");
  for(i=0; i<eachCookie.length;i++){
    eachCookieSplitted = eachCookie[i].split("=");
    cookieObj[eachCookieSplitted[0]]= eachCookieSplitted[1];
  }
}


//display the cookie list
function AllCookieList(){
  parseCookie();
    return cookieObj;
}


// set a value for a cookie
function setCookie(CookieName, CookieValue,expiryDate){
  if(!CookieName){
    throw new Error("you did not enter a name for your cookie");
  }
  else if(typeof(CookieName)!== "string"){
    throw new Error("you did not enter a valid name for your cookie")
  }
  else if(!CookieValue){
    throw new Error("you did not enter the value of your cookie");
  }

  // else if(arguments.length<2){
  //   throw new Error("you didn't enter the required info")
  // }

  else if(expiryDate){
    let newDate = new Date(expiryDate);
    document.cookie=CookieName+"="+CookieValue+";expires="+newDate;
  }
  else{
    document.cookie=CookieName+"="+CookieValue+";";
  }

  return document.cookie;
}


//get a certain cookie value
function getCookie(CookieName){
  if(arguments.length !== 1){
    throw new Error("enter the cookie name you want to search for(1argument please)");
  }

  else if(!(CookieName in cookieObj)){
    throw new Error("there is not a cookie with the name you entered");
  }

  else{
    return cookieObj[CookieName];
  }
}


//delete a certain cookie
function deleteCookie(CookieName){
  if(arguments.length !== 1){
    throw new Error("enter the cookie name you want to delete(1 argument)");
  }

  else if(!(CookieName in cookieObj)){
    throw new Error("there wasn't a cookie with the name you entered");
  }
  else{
  let oldDate = new Date().setFullYear(1997);
  document.cookie = CookieName+"= ;expires="+oldDate;
  }
}

// check if a certain cookie is found
function hasCookie(CookieName){
  let check = getCookie(CookieName);

  if(arguments.length !== 1){
    throw new Error("enter the cookie name you want to search for (1 argument please)");
  }
  else if(typeof(CookieName)!== "string"){
    throw new Error("please enter the name in astring format");
  }
  else if (!check){ 
      console.log(false);   
    }
  else{
      console.log(true);
    }
}
