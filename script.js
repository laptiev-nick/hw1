<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    </style>
</head>
<body>
    <input type="text" class="input">
    <input type="text" class="input">
    <input type="text" class="input">
    <textarea name="" id="" cols="30" rows="10" class="result"></textarea>
    <script>
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
    </script>
</body>
</html>

