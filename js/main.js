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

  let total = 0;
  let period = 0;

  let priceTT = 0;
  let priceCMS = 0;
  let priceDesign = 0;
  let priceLayout = 0;
  let priceFilling = 0;
  let pricePlacement = 0;
  let priceSupport = 0;
  let priceAnimation = 0;
  let priceSEO = 0;
  let priceAdd = 0;

  // проверка чекбокса
  $('input').on('change', function (e) {
    let test = [];
    if(e.target.checked) {
      let type = $(e.target).attr('typeWork');
      switch (type) {
        case 'priceTT':
          priceTT += parseInt($(e.target).val());
          break;
        case "priceCMS":
          priceCMS += parseInt($(e.target).val());
          break;
        case "priceDesign":
          priceDesign += parseInt($(e.target).val());
          break;
        case "priceLayout":
          priceLayout += parseInt($(e.target).val());
          break;
        case "priceFilling":
          priceFilling += parseInt($(e.target).val());
          break;
        case "pricePlacement":
          pricePlacement += parseInt($(e.target).val());
          break;
        case "priceSupport":
          priceSupport += parseInt($(e.target).val());
          break;
        case "priceAnimation":
          priceAnimation += parseInt($(e.target).val());
          break;
        case "priceSEO":
          priceSEO += parseInt($(e.target).val());
          break;
        case "priceAdd":
          priceAdd += parseInt($(e.target).val());
          break;
        default:
          text = "No value found";
      }
      period += +($(e.target).attr('period'));
      console.log($(e.target).attr('period'));
      console.log(period);
      total += +($(e.target).val());

    } else {
      let type = $(e.target).attr('typeWork');
      switch (type) {
        case 'priceTT':
          priceTT -= parseInt($(e.target).val());
          break;
        case "priceCMS":
          priceCMS -= parseInt($(e.target).val());
          break;
        case "priceDesign":
          priceDesign -= parseInt($(e.target).val());
          break;
        case "priceLayout":
          priceLayout -= parseInt($(e.target).val());
          break;
        case "priceFilling":
          priceFilling -= parseInt($(e.target).val());
          break;
        case "pricePlacement":
          pricePlacement -= parseInt($(e.target).val());
          break;
        case "priceSupport":
          priceSupport -= parseInt($(e.target).val());
          break;
        case "priceAnimation":
          priceAnimation -= parseInt($(e.target).val());
          break;
        case "priceSEO":
          priceSEO -= parseInt($(e.target).val());
          break;
        case "priceAdd":
          priceAdd -= parseInt($(e.target).val());
          break;
        default:
          text = "No value found";
      }
      period -= +($(e.target).attr('period'));
      console.log($(e.target).attr('period'));
      console.log(period);
      total -= +($(e.target).val());
    }
    
    

    $("#total").val(Math.ceil(total) + ' ₽');
    $("#period").val(Math.ceil(period) + ' дней');

    if (priceTT >= 0) $('.priceTT').text(priceTT); else $('.priceTT').text(0);
    if (priceCMS >= 0) $('.priceCMS').text(priceCMS); else $('.priceCMS').text(0);
    if (priceDesign >= 0) $('.priceDesign').text(priceDesign); else $('.priceDesign').text(0);
    if (priceLayout >= 0) $('.priceLayout').text(priceLayout); else $('.priceLayout').text(0);
    if (priceFilling >= 0) $('.priceFilling').text(priceFilling); else $('.priceFilling').text(0);
    if (pricePlacement >= 0) $('.pricePlacement').text(pricePlacement); else $('.pricePlacement').text(0);
    if (priceSupport >= 0) $('.priceSupport').text(priceSupport); else $('.priceSupport').text(0);
    if (priceAnimation >= 0) $('.priceAnimation').text(priceAnimation); else $('.priceAnimation').text(0);
    if (priceSEO >= 0) $('.priceSEO').text(priceSEO); else $('.priceSEO').text(0);
    if (priceAdd >= 0) $('.priceAdd').text(priceAdd); else $('.priceAdd').text(0);

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
    // else {
    //   console.log(Number(thisInput.closest('.calc__checkboxNum').children('.calc__checkbox').children('input').val()) * Number(thisInput.val()));
    // }
  });

  period = 0;
  total = 0;
  $('#period').val(period);
  $('#total').val(total);
});