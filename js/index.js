    $(function(){
      $(".p3-enter li").click(function(){
          $(".p3-content").hide();
          $(".p3-enter li").removeClass("color")
          $(".p3-content").eq($(this).index()).show()
          $(this).addClass("color")
      })
    })