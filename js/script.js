var icon = document.getElementById('icon');
icon.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.container('dark-theme')){
        icon.src = "../images/sun.png";
    }
    else{
        icon.src = "../images/moon.png";
    }
}