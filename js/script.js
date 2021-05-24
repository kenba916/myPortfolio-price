let $form = $('#js-form')
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $('#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $('#js-error').slideDown()
        }
      } 
    });
    return false; 
  }); 

  $(function(){
    $('button[type=button]').click(function(){
        $('#js-form').submit();
    });
});



  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on('change', function() {

    // !== not equal("" からではなく) $$ かつ   → valueの値がからではなく
   if (
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="email"]').val() !== "" &&
        $('#js-form textarea').val() !== "" &&
        $('#js-form input[type="text-kana"]').val().match( /^([ァ-ン]|ー)+$/ ) &&
        $('#js-form input[name="entry.729393355"]').prop( 'checked' ) === true
    ) {
        $submit.prop('disabled', false)
        $submit.addClass( 'active' )
    } else {
        $submit.prop('disabled', true)
        $submit.removeClass( 'active' )
    }
  });
  

  $( '#js-form input[type="text-kana"]' ).on('change', function() {
    if (
      !$(this).val().match( /^([ァ-ン]|ー)+$/ )
    ) {
      alert( '全角カタカナで入力してください。' )
    }

  }); 

