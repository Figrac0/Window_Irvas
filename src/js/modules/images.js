const images = () =>{

    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    if (window.innerWidth > 860) {
        
      }

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImg);

    workSection.addEventListener('click', (e) =>{
        e.preventDefault();

        let target = e.target;

        if (window.innerWidth < 950) {
            return; // Если ширина меньше 950px, не выполнять код и выйти из функции
        }

        if( target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            document.body.style.overflow = "hidden";
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if ( target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
            document.body.style.overflow = "";
        }

        
    });
};

export default images;

