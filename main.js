prediction_1 = ""
prediction_2 = ""

Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera ');

function take_snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/jCO-5ZeOy/model.json",modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " +prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        document.getElementById("result_hand_sign").innerHTML = results[0].label;
        document.getElementById("result_hand_sign2").innerHTML = results[1].label;
prediction_1 = results[0].label;
prediction_ = results[1].label;
speak();
if(results[0].label == "peace")
{
    document.getElementById("update_emoji").innerHTML ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fhand-peace-sign-cartoon-vector-15784791&psig=AOvVaw33tpMlpHZsh-YwJIyA9bSp&ust=1671499695710000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJiPheDDhPwCFQAAAAAdAAAAABAE";
}
if(results[0].label == "ok")
{
    document.getElementById("update_emoji").innerHTML ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fstock-illustration-ok-hand-gesture-cartoon-vector-isolated-white-background-image91163634&psig=AOvVaw0hmFK4_IW0V8mRUh6WCsgs&ust=1671499770384000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLDc0IPEhPwCFQAAAAAdAAAAABAE";
}
if(results[0].label =="thumbs up")
{
    document.getElementById("update_emoji").innerHTML ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fthumbs-up-cartoon-hand.html&psig=AOvVaw0hOp3r8VdGkpQrLVIGZ5uK&ust=1671499825615000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCIif_J3EhPwCFQAAAAAdAAAAABAE";
}

f(results[1].label == "peace")
{
    document.getElementById("update_emoji2").innerHTML ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fhand-peace-sign-cartoon-vector-15784791&psig=AOvVaw33tpMlpHZsh-YwJIyA9bSp&ust=1671499695710000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCJiPheDDhPwCFQAAAAAdAAAAABAE";
}
if(results[1].label == "ok")
{
    document.getElementById("update_emoji2").innerHTML ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fstock-illustration-ok-hand-gesture-cartoon-vector-isolated-white-background-image91163634&psig=AOvVaw0hmFK4_IW0V8mRUh6WCsgs&ust=1671499770384000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLDc0IPEhPwCFQAAAAAdAAAAABAE";
}
if(results[1].label =="thumbs up")
{
    document.getElementById("update_emoji2").innerHTML ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fthumbs-up-cartoon-hand.html&psig=AOvVaw0hOp3r8VdGkpQrLVIGZ5uK&ust=1671499825615000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCIif_J3EhPwCFQAAAAAdAAAAABAE";
}

    }
}

