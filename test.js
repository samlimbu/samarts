var users = ["Sam", "Ellie", "Bernie"];

function addUser(username, callback){
       setTimeout(function() {
            users.push(username);
            callback();
       }, 200);
}



addUser("Jake1", function (){
          setTimeout(function(){
              console.log(users);
          }, 100);
      });


/*
      function add(a , b){
        return a + b;
    }
*/    

function calculate(a, b, callback){
    console.log(a+' '+b +'is');
    console.log(callback(a,b));
}      


calculate(1,2,function (a , b){
    return a + b;
});