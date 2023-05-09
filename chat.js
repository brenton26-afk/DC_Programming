let api_key = "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";
let prompt = "";
let model = "text-davinci-003";


let generatedText;
let result;

function generateText() {
  fetch("https://api.openai.com/v1/engines/"+model+"/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+api_key
    },
    body: JSON.stringify({
      prompt: prompt,
      max_tokens: 1000
    })
  })
  .then(response => response.json())
  .then(data => {
    generatedText = data.choices[0].text;
    // do something with the generated text
    console.log(generatedText);
    //result = generatedText;
    theText.html("Response: " + generatedText)
  })
  .catch(error => console.error(error));
}

//let input;
let button;
let theText;

function setup() {
  createCanvas(800, 800);
  //generateText();
  background(220)
  
  input = createInput()
  button = createButton("enter")
  input.position(50, 50)
  button.position(150, 150)
  
  theText = createElement('h3',"The response")
  theText.position(10, 250)
  
  button.mousePressed(enter)
}


function enter(){
  background(220)
  const display = input.value();
  prompt = display;
  generateText();
  
}