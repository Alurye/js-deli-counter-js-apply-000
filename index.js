var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi"];
function takeANumber(katzDeliLine, customer){
    katzDeliLine.push(customer);
    return "Welcome, " + customer + ". You are number " + katzDeliLine.length  + " in line."


}
const deliLine = ["Steven", "Blake", "Avi"];
function nowServing(deliLine){

  for (var i = 0; i < deliLine.length; i++) {
    if (deliLine.length !== 0) {
      return "Currently serving " + deliLine.shift(deliLine[0]) + ".";
    } else {
        return "There is nobody waiting to be served!";
    }

  }
}




function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    // return "The line is currently: " + counter + ". " + katzDeliLine.join(' ,');
    var lineUpdate = "";
    var counter = 1;

    for (var i = 0; i < katzDeliLine.length; i++) {

            lineUpdate +=  counter + ". " + katzDeliLine[i] + ", ";
         counter++;

         lineUpdate.slice(0, -1);
        // console.log(lineUpdate);

    }

     return "The line is currently: " + lineUpdate;
  }


}
