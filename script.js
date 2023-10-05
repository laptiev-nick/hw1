const inputs = document.querySelectorAll(".input");
const resultTextArea = document.querySelector(".result");

setInterval(function () {

        let combinedValues = '';
        const inps =  [...inputs];

        inps.forEach((inp, index) => {
            if (inp.value) {
                if (index !== 0) {
                    combinedValues += ','
                }
                combinedValues += inp.value;
            }
        });
        resultTextArea.value = combinedValues;  
    
}, 1000);