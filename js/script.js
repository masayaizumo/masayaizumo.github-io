/*--------------------------------*/
/*ハンバーガーメニュー            */
/*--------------------------------*/
$('.hum-wrapper').on('click',function(){
  $('.hum-wrapper').toggleClass('close');
  $('.header-menu').fadeToggle(500);
  $('body').toggleClass('noscroll');
});



/*--------------------------------*/
/*固定ヘッダー                        */
/*--------------------------------*/

$(function() {
  var $win = $(window),
      $fv = $('.fv-wrapper'),
      $header = $('.header-wrapper')
      fvHeight = $fv.outerHeight(),
      fixedClass = 'fixed';

$win.on('load scroll',function(){
  var value = $(this).scrollTop();
    if($win.width()>768)

      if ( value > fvHeight) {
        $header.addClass(fixedClass);
        
      } else {
        $header.removeClass(fixedClass);
        
      }
    

  });
});



/*--------------------------------*/
/*Topへ戻るボタン                   */
/*--------------------------------*/

$(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); //0.5秒かけてトップへ移動
      return false;
  });
});




/*--------------------------------*/
/*各要素をフェードインさせる    */
/*--------------------------------*/

$(function(){
  $(window).scroll(function (){
      $('.left-to-right, .down-to-top').each(function(){
          var elemPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > elemPos - windowHeight + 150){
              $(this).addClass('scrollin');
          }
      });
  });
});
