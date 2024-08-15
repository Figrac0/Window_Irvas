const modals = () =>{
    function bindModal(triggerSelector, modalSelector, closeSelector, closeCliclOverlay = true){
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();



        trigger.forEach(item =>{
            item.addEventListener('click', (e) =>  {
                if(e.target) {
                    e.preventDefault();
                }

                windows.forEach(item =>{
                    item.style.display ='none';
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight =`${scroll}px`;
                // document.body.classList.add('modal-open');    
            });
        });

        close.addEventListener('click' , () =>{

            windows.forEach(item =>{
                item.style.display ='none';
            });

            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight =`0px`;
            // document.body.classList.remove('modal-open');  
        });

        modal.addEventListener('click', (e) =>{
            if(e.target === modal && closeCliclOverlay) {   //closeCliclOverlay - убираем закрытие опр. окна при клилке на подложку

                windows.forEach(item =>{
                    item.style.display ='none';
                });

                modal.style.display = "none";
                document.body.style.overflow = "";
                document.body.style.marginRight =`0px`;
                // document.body.classList.remove('modal-open');  
            }
        });
   }

   function showModalByTime (selecor, time){
    setTimeout(() => {
        document.querySelector(selecor).style.display ='block';
        document.body.style.overflow = "hidden"; 
    }, time);
   }

   function calcScroll() { //узнаем размер скрола 
    let div = document.createElement('div');
     
    div.style.width ='50px';
    div.style.height ='50px';
    div.style.overflow ='scroll';
    div.style.visibility ='hiden';

    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;




   }
    
   bindModal('.popup_engineer_btn','.popup_engineer','.popup_engineer .popup_close');
   bindModal('.phone_link','.popup', '.popup .popup_close');
   bindModal('.popup_calc_btn' , '.popup_calc','.popup_calc_close');
   showModalByTime('.popup', 60000);
   bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
   bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    

};

export default modals;