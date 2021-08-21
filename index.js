const initialPrice = document.querySelector("#initial-price");
const currentPrice = document.querySelector("#current-price");
const quantity = document.querySelector("#quantity");

const tellMe = document.querySelector("#check-button");
const outputArea = document.querySelector("#output-area")

tellMe.addEventListener("click",function clickHandler(){
    // console.log(initialPrice.value)
    // console.log(currentPrice.value)
    // console.log(quantity.value)
    // console.log("Clicked")

    let init = Number(initialPrice.value);
    let curr = Number(currentPrice.value);
    let quant = Number(quantity.value);

    calculateProfitLoss(init, quant, curr);

    if(outputArea.classList.contains("green") || outputArea.classList.contains("red")){
        outputArea.classList.remove("green");
        outputArea.classList.remove("red");
    }if(scene === "profit"){
         outputArea.classList.add("green");
    }if(scene === "loss"){
         outputArea.classList.add("red")
    }if(scene === ""){
        outputArea.classList.remove("green");
        outputArea.classList.remove("red");
     }
    
})

function calculateProfitLoss(initial, quantity, current){

    if(initial != ""  && current != "" && quantity != ""){
        if(initial > current){
            let loss = (initial - current) * quantity;
            let lossPercentage = ((loss/initial)*100).toFixed(2);
    
            showMessage(`Whoops! the loss is ₹ ${loss} and the loss percentage is ${lossPercentage}%`);
            return scene =  "loss"
    
        }else if(current>initial){
            let profit = (current - initial)*quantity;
            let profitPercentage = ((profit/initial)*quantity).toFixed(2);
    
            showMessage(`Yay! the profit is ₹ ${profit} and the profit percentage is ${profitPercentage}%`);
            return scene = "profit"
        }else if(current === initial){
            showMessage("No pain no gain, No gain no pain")
            return scene = ""
        }
    }else{
        showMessage("Please enter valid input")
            return scene = ""
    }
    

}

function showMessage(message){
    outputArea.innerText = message;
}

// calculateProfitLoss(100,1,10)
// calculateProfitLoss(100,1,1000)
// calculateProfitLoss(100,1,100)