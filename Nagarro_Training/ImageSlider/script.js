const slides = document.getElementsByClassName('slide');

var currSlide = 1;
var minSlide = 1;
var maxSlide = slides.length;
 
slides[0].style.display = 'block';
document.getElementById('mark' + currSlide).style.color = 'rgb(51, 153, 255)';


document.getElementById('leftarrow').addEventListener('click', function() {    
    var slideTo = currSlide - 1;
    if(slideTo < minSlide)
        slideTo = maxSlide;
    
    document.getElementById(currSlide).style.display = 'none';
    document.getElementById('mark' + currSlide).style.color = 'rgb(7, 1, 96)';
    document.getElementById(slideTo).style.display = 'block';
    document.getElementById('mark' + slideTo).style.color = 'rgb(51, 153, 255)';
    currSlide = slideTo;
})

document.getElementById('rightarrow').addEventListener('click', function() {    
    var slideTo = currSlide + 1;
    if(slideTo > maxSlide)
        slideTo = minSlide;
        
    document.getElementById(currSlide).style.display = 'none';
    document.getElementById('mark' + currSlide).style.color = 'rgb(7, 1, 96)';
    document.getElementById(slideTo).style.display = 'block';
    document.getElementById('mark' + slideTo).style.color = 'rgb(51, 153, 255)';
    currSlide = slideTo;
})