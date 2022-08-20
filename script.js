let isClosed = true;

function windowClose()
{
    document.getElementById("menuArea").style.display = "none";
    console.log("c");
    isClosed = true;
}
function windowOpen()
{
    console.log("o");
    document.getElementById("menuArea").style.display = "block";
    isClosed = false;
}
function getClick()
{
    if(isClosed == true)
    {
        windowOpen();
    }
    else
    {
        windowClose();
    } 
}
function colorChange()
{
    let hexColor = document.getElementById("textInput").value;
    document.getElementById("textInput").style.backgroundColor = hexColor;
}
function fullscreenChange()
{
    let element = document.getElementById("textInput");
    element.requestFullscreen();
}
