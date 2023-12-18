


function submitSurvey () {
    let ageS = document.getElementById('ageID').value;
    let yearlyS = document.getElementById('yearlyID').value;
    let genderS;
    let applyPS = [];
    let howOftenS;
    let checkbox1 = document.getElementsByName("txtG");
    let checkbox2 = document.getElementsByName("txtAP");
    let checkbox3 = document.getElementsByName("txtHO");
    let pay1 = document.getElementById('pay1ID').value;
    let pay2 = document.getElementById('pay2ID').value;
    let commentS = document.getElementById('commentID').value;
    let checkbox4 = document.getElementsByName("fairly");
    let checkbox5 = document.getElementsByName("quality");
    let checkbox6= document.getElementsByName("recommend");
    let fairyS;
    let qualityS;
    let recommedS;
                for (let i = 0; i < checkbox1.length; i++){
                if (checkbox1[i].checked === true){
                    genderS = checkbox1[i].value;
                }
                }   

                for (var i = 0; i < checkbox2.length; i++){
                    if (checkbox2[i].checked === true){
                        applyPS = applyPS + checkbox2[i].value + ',';
                    }
                }
                for (let i = 0; i < checkbox3.length; i++){
                    if (checkbox3[i].checked === true){
                        howOftenS = checkbox3[i].value;
                    }
                }
                for (let i = 0; i < checkbox4.length; i++){
                    if (checkbox4[i].checked === true){
                        fairyS = checkbox4[i].value;
                    }
                }
                for (let i = 0; i < checkbox5.length; i++){
                    if (checkbox5[i].checked === true){
                        qualityS = checkbox5[i].value;
                    }
                }
                for (let i = 0; i < checkbox6.length; i++){
                    if (checkbox6[i].checked === true){
                        recommedS = checkbox6[i].value;
                    }
                }
    let survey = {
        age: ageS,
        yearly: yearlyS,
        gender: genderS + '',
        applyP: applyPS,
        howOften: howOftenS,
        pay: pay1 + ' Dollar ' + pay2 + ' Cents',
        comment: commentS,
        fairy: fairyS,
        quality: qualityS,
        recommed: recommedS
    }
    console.log(survey)
}

