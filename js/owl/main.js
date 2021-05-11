$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function watch(){
    window.location.href = "/watch.html"
}

function info(){
    window.open("https:/www.themoviedb.org/movie/597-titanic")
}
