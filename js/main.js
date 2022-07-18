$().ready(function () {

  // плюс и минус
  $('.quantity-nav div').on('click', function () {
    let symbol = $(this).text();
    let val = $(this).closest('.quantity').children('input').val();
    let valNow = Number(val) - 1;
    if (symbol === '-') {
      if (val > 0) $(this).closest('.quantity').children('input').val(parseInt(val) - 1);
      if (valNow === 0) {
        $(this).closest('.calc__checkboxNum').children('.calc__checkbox').children('input').removeAttr("checked");
        $(this).closest('.quantity').removeClass('on');
      }
    } else {
      $(this).closest('.quantity').children('input').val(parseInt(val) + 1);
      // console.log(Number(val) + 1);
    }
  });

  // запрет на ввод букв в input
  $('.calc__checkboxNum input').on('input', function () {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
  });

  // проверка чекбокса
  $('input').on('change', function () {
    total = 0;
    period = 0;
    $("input:checked").each(function () {
      total += parseInt($(this).val());
      period += parseInt($(this).attr('period'));
    });
    $("#total").val(Math.ceil(total) + ' ₽');
    $("#period").val(Math.ceil(period) + ' дней');
    if ($(this).prop('checked')) {
      $(this).closest('.calc__checkboxNum').children('.quantity').addClass('on');
      $(this).closest('.calc__checkboxNum').children('.quantity').children('input').val(1);
    } else {
      $(this).closest('.calc__checkboxNum').children('.quantity').removeClass('on');
      $(this).closest('.calc__checkboxNum').children('.quantity').children('input').val(0);
    }
  });

  // проверка ввода в input
  $('input[type=number]').keyup(function () {
    let thisInput = $(this);
    if ($(this).val() < 0) {
      $(this).val(0);
    }
    if (thisInput.val() === '' || thisInput.val() === '0') {
      setTimeout(function () {
        if (thisInput.val() === '' || thisInput.val() === '0') {
          thisInput.val(0);
          thisInput.blur();
          thisInput.closest('.calc__checkboxNum').children('.calc__checkbox').children('input').removeAttr("checked");
          thisInput.closest('.quantity').removeClass('on');
        }
      }, 5000);
    }
  });

  let period = 0;
  let total = 0;
  $('#period').val(period);
  $('#total').val(total);



});