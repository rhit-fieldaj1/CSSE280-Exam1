document.addEventListener("DOMContentLoaded", (event) => {
    main();
});

main = function() {
    console.log("Ready");

    document.querySelector("#selectBtn").onclick = (event) => {
        console.log("selectBtn");
        
        let img = document.getElementById("owlIMG");
        let txt = document.getElementById("owlName");

        if(img.src.match("images/hedwig.png")) {
            img.src = "images/pigwidgeon.png";
            txt.innerHTML = "Pidwidgeon";
        } else {
            img.src = "images/hedwig.png";
            txt.innerHTML = "Hedwig";
        }
    }

}