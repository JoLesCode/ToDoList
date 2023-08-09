function send(){
    var text = document.getElementById("field").value;
    document.getElementById("field").value = "";
    var list = document.getElementById("lst")
    localStorage.setItem(text, false);
    var put = `
    <li>
    <div class="in"><p onclick="remove()">${text}</p>
    </div>
    </li>
    `
    list.insertAdjacentHTML("beforeend", put);
    
}

window.addEventListener("keydown", () => {if(event.keyCode == 13)send()})