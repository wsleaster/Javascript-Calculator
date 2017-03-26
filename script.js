 $(document).ready(function() {
    //var one, two, three, four, five, six, seven, eight, nine, zero, clear, add, subtract, equals, multiply, divide;

    /* $('#clear').click(backSpace);
    // $('#clearAll').click(clearAll);
     $('#addition').click(add);
     $('#subtraction').click(minus);
     $('#equals').click(equals);
     $('#multiplication').click(times);
     $('#division').click(divide);
     //$('#exponent').click(powerOf);
     $('#decimal').click(decimal);
     $('#digit1').click(one);
     $('#digit2').click(two);
     $('#digit3').click(three);
     $('#digit4').click(four);
     $('#digit5').click(five);
     $('#digit6').click(six);
     $('#digit7').click(seven);
     $('#digit8').click(eight);
     $('#digit9').click(nine);
     $('#digit0').click(zero);*/
    $('.btn').click(function() {
      var buttonval = $(this).attr('value');
      $('#screen').val($('#screen').val() + buttonval);
    });
    $('#equals').click(function() {
      var inputVal = $('#screen').val();
      $('#screen').val(eval(inputVal));
    });
    $('#clear').click(function() {
      $('#screen').val('');
    });
    $(document).keypress(function (e) {
       var key = e.which;
       if(key == 13) {
          $('#equals').click();
          return false;  }
      });
  });