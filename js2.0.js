function showMessage(){
            let showMessage = true;
            let number = 0;
            let number2 = 0;
            while(showMessage){
                showMessage = confirm("Do you want to continue?")
                if(showMessage){
                    number = prompt("Input number", "");
                    number2 = parseInt(prompt("Input number2", ""));
                    switch(number2){
                        case 1:
                        console.log(number);
                        break;
                        case 2:
                        console.log(number*number);
                        break;
                        case 3:
                        console.log(number*number*number);
                        break;
                        case 4:
                        console.log(number*number*number*number);
                        break;
                    }
                }else{
                    console.log("Program stopped");
                }
            }
        }

        showMessage();
