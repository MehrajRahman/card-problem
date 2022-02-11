const cardDistribution = (arr)=>{
    let newArr = [];
    arr.map((obj, index)=>{
        const first = obj.district.slice(0,2).toUpperCase();
        const second = String(obj.currentYear).slice(2,4);
        const third = String(obj.postNo).slice(0,2);
        const forth = obj.birthYear;
        const fifth = "00000";
        const sixth = index + 1;
        const cardNumber = first.concat(second).concat(third).concat(forth).concat(fifth).concat(sixth);
        const newObj = {
            cardNumber : cardNumber,
           
        }
        if(sixth%2 ===0){
            newObj.gift = "R"
        }
        else{
            newObj.gift = "W"
        }
        newObj.priority  = obj.priority,
        newArr.push(newObj);


    })
    function compare( arr ) {
        for ( let i =0; i< arr.length; i++){
        
            let j = i+1;
            while( j<  arr.length ){
                if(arr[i].priority<arr[j].priority){
                    arr[i] = arr[i];
                }else{
                    const second = arr[i]
                    arr[i] = arr[j];
                    arr[j] = second;
                }
                j++;
            }
        }
        return(arr)
      }
    return compare(newArr)


}



// here call the function to get the output
// console.log(cardDistribution([
//     {
//         name: "Mr Rashed",
//         birthYear:1999,
//         currentYear: 2022,
//         postNo:1200,
//         district: "Dhaka",
//         priority:2,


//     },
//     {
//         name: "Mr kashed",
//         birthYear:1995,
//         currentYear: 2022,
//         postNo:1211,
//         district: "Rajshahi",
//         priority:1,
//     }
// ]))
