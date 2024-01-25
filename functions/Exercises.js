/*function reverse(str) {
    return str.split('').reverse().join('');
 }
 
 function isPalindrome(str) {
    return reverse(str) === str;
 }
 console.log(isPalindrome("Kumar"));
 console.log(reverse("Kumar"));*/

 function makeLine(num) {
    let line =""

    for (let i=0; i<num; i++) {
        line = line+'#'
    }
    return line
 };


 function makeSquare(size){
        let square =''
    for (let i=0;i<size; i++){
        square += makeLine(5)+ '\n'
        //square.push(makeLine(5));
    }
    /*for (let i=0;i<square.length; i++) {
     console.log(square[i]);*/
     return square
    }
    
 //console.log (makeSquare(5));

 function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle;
  }
  console.log(makeRectangle(5, 3))