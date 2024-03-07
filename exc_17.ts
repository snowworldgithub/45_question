let guests: string[] = ["Abdul Qadeer Khan", "Steve Jobs", "Cristiano Ronaldo"];
for (let i = 0; i < guests.length; i++){
console.log("my pleasure to see you at my dinner today sir " + guests [ i ] ) ;
}
console.log("\n unfortunatly mr " +guests[1]+ " is unable to come today \n" );
guests [1]=" Bill Gates" ;

for (let i = 0; i < guests.length; i++){
  console.log("my pleasure to see you at my dinner today sir " + guests [ i ] ) ;
  }
console.log("hurrah ! now  i have planned to make this dinner bigger...");

guests.unshift("Wasim Akram");
guests.splice(2,0,"Shahid Afridi");
guests.push("Albert Einstein");
for (let i = 0; i < guests.length; i++){
  console.log("now this is going big and happier than before to see you at my dinner today sir " + guests [ i ] ) ;
  }
  console.log("\n total invited" +guests.length);
  console.log("Alas! we are sorry to announce that we have only two sitting capacity for guests");
let removed_guest: string;
let x: number = guests.length;  
while (x>2)  
{
  removed_guest = guests.pop()!;
  console.log("we are sorry to announce that today you are not invited today sir " + removed_guest);
    x=x-1;
}
for (let i=0; i<x;i++)
{
  console.log("\n you are invited today sir " + guests[i]);
}
for (let i=0; i<x;i++)
{
  console.log("\n you are deleted " + guests[i]);
  guests.pop()!;
}
console.log(guests);

 