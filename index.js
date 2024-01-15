function Carousel(id){
    let items = document.querySelectorAll(id+'.carousel .carousel-item');


items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
}

let carousels =  document.querySelectorAll('.carousel.slide');

for (const carousel of carousels) {
    let id = '#'+carousel.id;
    Carousel(id);
}


function Animation(){
    let bookmarks = document.querySelectorAll('i.fa-regular.fa-bookmark');
    

    for (const book of bookmarks) {
        book.addEventListener('mouseenter',(elem)=>{
            elem.target.parentNode.children[0].classList.add('animate');
            
        });
        book.addEventListener('mouseleave',(elem)=>{
            // elem.target.parentNode.children[0].classList.remove('animate');
            // elem.target.style.color = 'lightgray';
            // elem.target.classList = "fa-regular fa-bookmark";
        });
    }
}

Animation();


