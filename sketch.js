


var input, button, greeting,ageInput,genderInput,heightInput,weightInput ;

function setup() {
  // create canvas
  createCanvas(displayWidth-30,displayHeight);

  input = createInput("name");
  input.position(displayWidth/2 , displayHeight/2-230);

  button = createButton('submit');
  button.position(displayWidth/2+10,displayHeight/2+5);
  button.mousePressed(greet);

  nametext= createElement('h3', 'Name:');
  nametext.position(displayWidth/2-80, displayHeight/2-250);

 

    agetext= createElement('h3', 'Age:');
    agetext.position(displayWidth/2-60,displayHeight/2-215)
    ageInput = createInput("Age");
    ageInput.position(displayWidth/2 , displayHeight/2 - 190);


    gendertext= createElement('h3', 'Gender:');
    gendertext.position(displayWidth/2-100,displayHeight/2-175)
    genderInput = createInput("Gender");
    genderInput.position(displayWidth/2 , displayHeight/2-150);

    heighttext= createElement('h3', 'Height:');
    heighttext.position(displayWidth/2-100,displayHeight/2-135)
    heightInput = createInput("Height");
    heightInput.position(displayWidth/2 , displayHeight/2 -110);

    wttext= createElement('h3', 'Weight:');
    wttext.position(displayWidth/2-100,displayHeight/2-95)
    weightInput = createInput("Weight");
    weightInput.position(displayWidth/2 , displayHeight/2 -70);


  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  

  
  }

