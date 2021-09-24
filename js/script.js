'use strict'
{
  const open = document.getElementById('open-1')
  const close = document.getElementById('close-1')
  const modal = document.getElementById('modal-1')
  const mask = document.getElementById('mask-1')
  
  open.addEventListener('click', () => {
    modal.classList.remove('hidden-1');
    mask.classList.remove('hidden-1');
  });
  
  close.addEventListener('click', () => {
    modal.classList.add('hidden-1');
    mask.classList.add('hidden-1');
  });
  
  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });

}


'use strict'
{

const open = document.getElementById('open-2')
const close = document.getElementById('close-2')
const modal= document.getElementById('modal-2')
const mask = document.getElementById('mask-2')

open.addEventListener('click', () => {
  modal.classList.remove('hidden-2');
  mask.classList.remove('hidden-2');
});

close.addEventListener('click', () => {
  modal.classList.add('hidden-2');
  mask.classList.add('hidden-2');
});

mask.addEventListener('click', () => {
  // modal.classList.add('hidden');
  // mask.classList.add('hidden');
  close.click();
});

}

'use strict'
{
const open = document.getElementById('open-3')
const close = document.getElementById('close-3')
const modal = document.getElementById('modal-3')
const mask = document.getElementById('mask-3')

open.addEventListener('click', () => {
  modal.classList.remove('hidden-3');
  mask.classList.remove('hidden-3');
});

close.addEventListener('click', () => {
  modal.classList.add('hidden-3');
  mask.classList.add('hidden-3');
});

mask.addEventListener('click', () => {
  // modal.classList.add('hidden');
  // mask.classList.add('hidden');
  close.click();
});

}


'use strict'
{
const open = document.getElementById('open-4')
const close = document.getElementById('close-4')
const modal = document.getElementById('modal-4')
const mask = document.getElementById('mask-4')

open.addEventListener('click', () => {
  modal.classList.remove('hidden-4');
  mask.classList.remove('hidden-4');
});

close.addEventListener('click', () => {
  modal.classList.add('hidden-4');
  mask.classList.add('hidden-4');
});

mask.addEventListener('click', () => {
  // modal.classList.add('hidden');
  // mask.classList.add('hidden');
  close.click();
});

}

'use strict'
{

const open = document.getElementById('open-5')
const close = document.getElementById('close-5')
const modal = document.getElementById('modal-5')
const mask = document.getElementById('mask-5')

open.addEventListener('click', () => {
  modal.classList.remove('hidden-5');
  mask.classList.remove('hidden-5');
});

close.addEventListener('click', () => {
  modal.classList.add('hidden-5');
  mask.classList.add('hidden-5');
});

mask.addEventListener('click', () => {
  // modal.classList.add('hidden');
  // mask.classList.add('hidden');
  close.click();
});

}

'use strict'
{

const open = document.getElementById('open-6')
const close = document.getElementById('close-6')
const modal = document.getElementById('modal-6')
const mask = document.getElementById('mask-6')

open.addEventListener('click', () => {
  modal.classList.remove('hidden-6');
  mask.classList.remove('hidden-6');
});

close.addEventListener('click', () => {
  modal.classList.add('hidden-6');
  mask.classList.add('hidden-6');
});

mask.addEventListener('click', () => {
  // modal.classList.add('hidden');
  // mask.classList.add('hidden');
  close.click();
});
}

$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

});


