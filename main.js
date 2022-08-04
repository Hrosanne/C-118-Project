array_1=['pen','paper','book','bottle']
random_no = Math.floor((Math.random()*array_1.length)+1)
Element_of_array = array_1[random_no]

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("White");
}

function clearCanvas(){
    background("White");
}