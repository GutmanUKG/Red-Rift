window.addEventListener('DOMContentLoaded' , function () {

    let logoWhite = document.querySelector('.logo_white'),
        logoBlack = document.querySelector('.logo_black'),
        vacanciesItemWraper = document.querySelectorAll('.vacancies__item_wraper');
      

        const wraperTabs = document.querySelector('.tabs');
        const tabContent = document.querySelectorAll('.info-tabcontent');
        const tab = document.querySelectorAll('.info-header-tab');



// servise Tabs
let serviseItems = document.querySelector('.service_items');
let descrItem = document.querySelectorAll('.service_item');
let listItem = document.querySelectorAll('.list_item');

function hideItem(a) {// Функция для скрытия табов
    if(descrItem[a].classList.contains('item_active')){
        descrItem[a].classList.remove('item_active')
        listItem[a].classList.remove('active')
    }else{
        descrItem[a].classList.add('item_active')
        listItem[a].classList.add('active')
    }
}




serviseItems.addEventListener('click' , function (event) { // на обертку повешан слушатель события на все пункты меню и передан event
        let target = event.target; // засунул в переменную event.target
        if(target && target.classList.contains('list_item') || target.classList.contains('plus')){// проверяет есть ли на элементе класс
            for(let i = 0; i < descrItem.length; i++){// Перебираем все элементы  меню
                if(target == listItem[i]){ // проверяем что наведение соответсвует элементу массива пунктов меню
                    hideItem(i)
                    break;// Прекращаем цикл что бы не работал в холостую
    
                }
            }
        }
    });




// 
    // vacancies Tabs
    vacanciesItemWraper.forEach(function(item){
      item.addEventListener('click', function(event){
          let target = event.target;
          if(target && target.classList.contains('vacancies__item')){
              if(!item.classList.contains('vacancies__item_wraper_active')){
                item.classList.add('vacancies__item_wraper_active');
              }else{
                item.classList.remove('vacancies__item_wraper_active');
              }
              
          }
      })
    })

// filter

let formWrap = document.querySelector('.form');
 function eventDelegate (parent, event, selector, handler, negative = false) {
    let isMatch = function(target) {
        return Array.isArray(selector)
            ? (new RegExp( '\\b' + selector.split(/,\s?/).join('\\b|\\b') + '\\b') ).test(target.classList.value)
            : target.matches(selector);
    };

    parent.addEventListener(event, function (e) {
        let parents = [];

        for (let target = e.target; target && target !== this; target = target.parentNode) {

            let matches = isMatch(target);

            if(matches && !negative) {
                handler(target);
                return false;
            }

            parents.push(target);
        }

        if(!parents.some(function(node) {
            return isMatch(node);
        }) && negative) {
            handler(e.target);
        }

    }, true);
}

eventDelegate(formWrap, 'change', `.custom-checkbox`, function (el) {
   
    Array.from(vacanciesItemWraper).forEach(item => {    
        if(el.dataset.name === 'all') {
            item.classList.remove('item_disable');
          } else {
            if (item.classList.contains(el.dataset.name)) {
              item.classList.remove('item_disable');
            } else {
              item.classList.add('item_disable');
            }
          }
       
       
      });
    
});


// Скролл
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// анимация кота

let catSleep = document.createElement("IMG"),
    catActive = document.createElement('IMG'),
    blockCat = document.querySelector('animation_cat');
    catActive.src = "./img/Cat_2.gif";
    catActive.classList.add('cat_active')
    catSleep.classList.add('test')
    catSleep.src = "./img/Cat_1.gif"

    function TriggerCat (){
        catSleep.style.display = "none",
        document.getElementById('cat_block').appendChild(catActive);
    }
  
      


// Получаем нужный элемент
var element = document.querySelector('.vacancies');

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    document.getElementById('cat_block').appendChild(catSleep);
    setTimeout(TriggerCat, 7100)
  } else {
    // Если элемент не видно, то запускаем этот код
    
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (element);
});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);







const menuWraper = document.querySelector('.menu_wrap');
const inner = document.querySelector('#info');
const innerJobs = document.querySelector('.jobs');
let isFixed = false;

const dummyEqualHeigh = () => {
  menuWraper.style.height = inner.getBoundingClientRect().height + 'px';
};

const makeFixed = () => {
  if (menuWraper.getBoundingClientRect().top <= 0 && !isFixed) {
    menuWraper.classList.add('shapka--fixed');
    isFixed = true;
  } else if (menuWraper.getBoundingClientRect().top > 0 && isFixed) {
    menuWraper.classList.remove('shapka--fixed');
    isFixed = false;
  }
};
function addmenuBlack(){
  console.log('test')
  wraperTabs.classList.add('black')
}
function removeMenuBlack(){
  wraperTabs.classList.remove('black')
}
const makeVxodit = () => {
  const top = innerJobs.getBoundingClientRect().top - menuWraper.getBoundingClientRect().height <= 0;
  const bottom = innerJobs.getBoundingClientRect().bottom - menuWraper.getBoundingClientRect().height > 0;
  if (top && bottom) {
    logoWhite.style.display = "block";
    logoBlack.style.display = "none";
    addmenuBlack();
    

  } else {
    logoWhite.style.display = "none"
    logoBlack.style.display = "block"
    removeMenuBlack();
  }
}

makeVxodit();
dummyEqualHeigh();
makeFixed();
window.addEventListener('resize', () => dummyEqualHeigh());
window.addEventListener('scroll', () => {
  makeFixed();
  makeVxodit();
});


//    Переключение меню


function toggleClass (b){
  if(!tab[b].classList.contains('active')){
    tab[b].classList.add('active');
  }
}

function removeClass(a){
  for(let i = a; i < tab.length; i++){
    tab[i].classList.remove('active');
  }
}


wraperTabs.addEventListener('click', function(event){
  let target = event.target;
  if(target && target.classList.contains('info-header-tab')){

    for(i = 0; i < tab.length; i++){
      if(target == tab[i]){
        removeClass(0);
        toggleClass(i); 
        break
      }
    }
  }
})

// burger_menu

const btnBurger = document.querySelector('.burger_menu');
const menuBurger = document.querySelector('.burger_menu_wraper');
const closeBtn = document.querySelector('.close');
const burgerLink = document.querySelectorAll('.burger_link');
const link_top = document.querySelector('.link_top');
function showBurger(){
  menuBurger.classList.add('burger_menu_wraper_active');
}
function closeBurger(){
  menuBurger.classList.remove('burger_menu_wraper_active')
}
btnBurger.addEventListener('click', function(){
  menuBurger.classList.add('burger_menu_wraper_active');
})
closeBtn.addEventListener('click', function(){
  closeBurger()
})
burgerLink.forEach(function(i){
  i.addEventListener('click', function(){
    closeBurger();
  })
link_top.addEventListener('click', function(){
  closeBurger();
})
})
});
