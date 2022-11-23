function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/crgGjqDth/" , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error){
        console.error(error);
   } else{
    console.log(results);
    random_number_R = Math.floor(Math.random() * 255) + 1;
    random_number_G = Math.floor(Math.random() * 255) + 1;
    random_number_B = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear -  ' + results[0].label;
    document.getElementById("result_confidence").innnerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
    document.getElementById("result_label").style.color = "rgb(" + random_number_R + "," + random_number_G  + "," + random_number_R +" )" ;
    document.getElementById("result_confidence").style.color = "rgb(" + random_number_R + "," + random_number_G  + "," + random_number_R +" )" ;
   
    img0 = document.getElementById('Alien1');
    img1 = document.getElementById('Alien2');
    img2 = document.getElementById('Alien3');
    img3 = document.getElementById('Alien4');

    if (results[0].label == "dog")
    {
    img1.src = 'Solid_white.png';
    img2.src = 'dog-png-30.png';
    }
    else
    {
        img1.src = 'Cat.png';
    img2.src = 'Solid_white.png'; 
    } 
   }    
}

