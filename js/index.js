var buttonUp='img/btn2.png';
var buttonDown='img/btnclckd2.png';
var pressTime=600;
function change(what, audioSrc)
{
new Audio(audioSrc).play();
what.src=buttonDown
setTimeout(function()
{
what.src=buttonUp;
}, pressTime) ;
}
