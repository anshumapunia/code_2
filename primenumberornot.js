//check the number is prime or not

let num=13;
  let count=0;
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            count++;
        }
    }
    if(count==2)
    {
        console.log("Yes");
    }
    else 
    {
        console.log("No");
    }
	
	
	
	//check weather the string its palindrome or not
	
	let str="Nurpul";
	
	 let bag="";
    for(let i=str.length-1;i>=0;i--)
    {
        bag+=str[i];
    }
    // console.log(bag);
    if(bag==str)
    {
        console.log("Yes");
    }
    else
    {
        console.log("No");
    }
	
	