var marks = [30,40,45,35];

function marks_average(){
  var sum=0;
for (var i=0; i<marks.length; i=i+1){
  sum =sum+marks[i];

}
var avg = sum/marks.length;
console.log(avg);
}
function setup() {
  createCanvas(400, 400);
marks_average();
}

function draw() {
  background(150);
}