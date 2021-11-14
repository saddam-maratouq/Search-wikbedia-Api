1- // after make req from Api dont forget fire the function with if statment to performance the page well 

 2- // dont forget to write params like this way its better than kimz code way  (line 33) 

3- // in primary re-render if the use state take same value 2 use state for exambel the render not fire agin 'rule' 

this rule explain well in this app we do this way to make web site more perfect performance .... 
and also set time out issue ....


 4- //  we use 2 useEffect to handel performance Api fire just one time and ' make it no render '  for only one search for exampel I search in java the api hit one time 
     then I search in php again the Network now just give us 2 request one from java and another one from php  

    // https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=php (first rq) 
    //https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=java (secuend rq)
 
***very very very important usefull for performance the web page and Handel Api***   

///////_________________________________________________________________________________/////// 



 *** very important ***

in point 4 this note not the best one practice there is another one now with useref cuz also useRef also not trigger render + 

if there a lot of data we cant copy this code every time so we use custoumHock to handel this situation ( this is new way I use it in this app ) 

_________________________________________________________________________________________________________________________________________________


