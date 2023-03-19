(new IntersectionObserver(function(element,observer){
    if (element[0].intersectionRatio > 0){
        document.documentElement.removeAttribute('class');
    } else {
        document.documentElement.setAttribute('class','sticky-top-stuck');
    };
})).observe(document.querySelector('.before-sticky-top'));
