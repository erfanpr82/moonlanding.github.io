const CTA = document.querySelector(".cta a");
const alaret = document.querySelector("#booking-alert");
CTA.classList.remove("hide"); 

alaret.classList.add("hide");

function reval(e)
{
    e.preventDefault();
    CTA.classList.toggle("hide");
    alaret.classList.toggle("hide");


}

CTA.onclick=reval;