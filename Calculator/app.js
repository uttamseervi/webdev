let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == "C") {
            let strlen = string.length;
            if (strlen != 0) {
                string = string.slice(0, -1);
                document.querySelector('input').value = string;
            }

        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            document.querySelector('input').value = string;

        }

        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
