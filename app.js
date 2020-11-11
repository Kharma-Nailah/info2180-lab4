//listen for click
window.onload=function()
{
    var ASbtn=document.getElementById("ACSbtn");
    ASbtn.addEventListener('click',function(mouseEv)
    {
        /*caused event to be dispatched that it needs to be canceled. */
        mouseEv.preventDefault();
        var hrequest=new XMLHttpRequest();
        var PHPurl="superheroes.php";

        /*HANDLING THE RESPONSE TO the AJAX REQUEST */
        hrequest.onreadystatechange=function()
        {

            if (hrequest.readyState===XMLHttpRequest.DONE);
            {
                if (hrequest.status===200)
                {
                    var Avengers=hrequest.responseText;
                    alert(Avengers);
                }

                else
                {
                    alert("We're sorry. There's an issue with the request.")
                }
            }

        }
        hrequest.open("GET",PHPurl);
    hrequest.send();
    });
    
}