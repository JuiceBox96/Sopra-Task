
/*Write a function, GetIntersection which returns the intersection of these two interval lists.
Write a test method which passes the supplied examples.*/

/* firstList = [[0,2],[5,10],[13,23],[24,25]]
secondList = [[1,5],[8,12],[15,24],[25,26]]

Output:
[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
*/
document.getElementById("results").innerHTML = "Output " + getInterSection;


function getInterSection (firstList, secondList) {
    
    //let local variable used in this case as listOne and listTwo will be compared
    //Came to this conclusion as both are expecting outputs that are in relay to each other
    let listOne = 0;
    let listTwo = 0;
    
    // Output will need to be displayed in an array somewhere!
    let output = [];

//Another way this could have been created is possibly through for loop with another for loop nested. Haven't tested this method. 

// listOne will be less than firstList but also get the whole length of the list. This will also be the same for listTwo.
while (listOne < firstList.length && listTwo < secondList.length) {

    // Had to search and go through past resources used. Found math.max function to be more reliable for the exercise
    let start = Math.max(firstList[listOne][0], secondList[listTwo][0])
    
    // max and min are used to go from smallest integer to largest
    let end = Math.min(firstList[listOne][1], secondList[listTwo][1])

    
//.push used to push (add) to the array. in this case should push to empty outPut variable
switch(start<=end) {
    case 0:
      output.push[start,end]
       break;
    }

switch(firstList[listOne][0] < secondList[listTwo][0]) {
        // listOne and listTwo will initiate the count using ++ increment 
    case 0:
      listOne++
    break;
      case 1:
       listTwo++
    break;
    }
  }
// return Output will be return to the array associated
    return output;
};

