window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector('.info-header'),
        tabCont = document.querySelectorAll('.info-tabcontent');

    function hideTab(a){
        for(let i = a;i<tabCont.length;i++){
            tabCont[i].classList.remove('show');
            tabCont[i].classList.add('hide');
        }
    }

    hideTab(1);

    function showTab (b){
        if(tabCont[b].classList.contains('hide')){
            tabCont[b].classList.add('show');
            tabCont[b].classList.remove('hide');
        }
    }

    info.addEventListener('click',function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')){
            for(let i = 0; i< tab.length;i++){
                if(target == tab[i]){
                    hideTab(0);
                    showTab(i);
                    break;
                }
            }
        }
    });
});