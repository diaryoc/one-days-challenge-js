for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let buttonClicked = this.innerHTML
        console.log(buttonClicked)
    })
}

