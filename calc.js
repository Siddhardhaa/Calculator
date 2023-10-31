document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll('.btn, .btn-operator, .btn-equal, .btn-history, .btn-AC, .btn-clear');
    const his=new createHistory();
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            const value = button.value;

            if (value === "=") {
                try {
                    display.value = eval(display.value);
                    const his=createHistory();
                    const insertValue=his.history(display.value);
                } catch (error) {
                    display.value = "Error";
                }
            } 
            else if (value === "C" || value === "AC") {
                display.value = "";
            }
            else if (button.classList.contains("btn-operator")) {
                display.value += " " + value + " ";
            } else if (value === "History") {
                let f=his.display();
                display.value=f;
            }                        
             else {
                display.value += value;
            }
        });
    });
    function createHistory() {
        const arr = [];
      
        function history(value) {
          if (value !== undefined && value !== "Error") {
            arr.push(value);
            return arr;
          }
        }
      
        function display() {
          return arr[0];
        }
      
        return { history, display };
      }
});
