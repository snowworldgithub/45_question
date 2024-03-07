// maek a list of people to invite to dinner.
let guests: string[] = ["Abdul Qadeer Khan", "Steve Jobs", "Cristiano Ronaldo"];
for (let i = 0; i < guests.length; i++){
console.log("my pleasure to see you at my dinner today sir " + guests [ i ] ) ;
}
console.log("\n unfortunatly mr " +guests[1]+ " is unable to come today \n" );
guests [1]="Bill Gates" ;

for (let i = 0; i < guests.length; i++){
  console.log("my pleasure to see you at my dinner today sir " + guests [ i ] ) ;
  }
  