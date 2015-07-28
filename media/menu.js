// ===================================================
//                      MENU
// ===================================================

$(function(){
  // прикручиваем переключение маркеров
  $(document).on( 'click', '.js-menu-toggler', function( e ){
    e.preventDefault();

    $(this)
      .find( 'i' )
        .toggleClass( 'fa-plus' )
        .toggleClass( 'fa-minus' );
  });

  // прикручиваем плагин, которые переключает вид меню с брейкпоинта
  $('.footer_block-title').collapseMenu({
    wrapper: '.footer_block',
  });
});