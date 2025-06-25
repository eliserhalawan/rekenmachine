const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent

        if (value === "C") {
           display.value = ""
        } else if (value === "=") {
           let expression = display.value
              .replace(/×/g, "*")
              .replace(/÷/g, "/")
              .replace(/−/g, "-");
 
            try {
                display.value = eval(expression);
            }catch {
                display.value = "Fout";
            }          
        }else {
             display.value += value;
        } 
    });
});
    
document.addEventListener("keydown",(e) => {
    const key = e.key;

 if ("0123456789+-*/.".includes(key)) {
    let toDisplay = key;

      if (key === "*") toDisplay = "×";
      if (key === "/") toDisplay = "÷";
      if (key === "-") toDisplay = "−";
      //veranderd * naar x voor losse toetsen

      display.value += toDisplay;
 }

 else if (key === "Enter") {
    let expression = display.value
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/−/g, "-");
    //voor de hele string bij de berekening

    try {
        display.value = eval(expression);
    } catch {
        display.value = "Fout";
    }
 }

 else if(key === "Backspace") {
    display.value = display.value.slice(0, -1);

 }

 else if(key === "c") {
    display.value = ""
 }
});
