$().ready(function () {

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
  let period = 0;
  let total = 0;

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
    } else $(this).closest('.quantity').children('input').val(parseInt(val) + 1);

    total = 0;
    period = 0;
    priceTT = 0;
    priceCMS = 0;
    priceDesign = 0;
    priceLayout = 0;
    priceFilling = 0;
    pricePlacement = 0;
    priceSupport = 0;
    priceAnimation = 0;
    priceSEO = 0;
    priceAdd = 0;
    $("input:checked, option:selected").each(function () {
      let unit = parseInt($(this).val());
      let multiply = parseInt($(this).closest('.calc__checkboxNum').find('input[type="number"]').val());
      let type = $(this).attr('typeWork');
      switch (type) {
        case 'priceTT':
          if (multiply >= 1) priceTT += unit * multiply; else priceTT += unit;
          break;
        case "priceCMS":
          if (multiply >= 1) priceCMS += unit * multiply; else priceCMS += unit;
          break;
        case "priceDesign":
          if (multiply >= 1) priceDesign += unit * multiply; else priceDesign += unit;
          break;
        case "priceLayout":
          if (multiply >= 1) priceLayout += unit * multiply; else priceLayout += unit;
          break;
        case "priceFilling":
          if (multiply >= 1) priceFilling += unit * multiply; else priceFilling += unit;
          break;
        case "pricePlacement":
          if (multiply >= 1) pricePlacement += unit * multiply; else pricePlacement += unit;
          break;
        case "priceSupport":
          if (multiply >= 1) priceSupport += unit * multiply; else priceSupport += unit;
          break;
        case "priceAnimation":
          if (multiply >= 1) priceAnimation += unit * multiply; else priceAnimation += unit;
          break;
        case "priceSEO":
          if (multiply >= 1) priceSEO += unit * multiply; else priceSEO += unit;
          break;
        case "priceAdd":
          if (multiply >= 1) priceAdd += unit * multiply; else priceAdd += unit;
          break;
        default:
          console.log('switch case не работает');
      }
      if (multiply >= 1) {
        total += unit * multiply;
        period += parseInt($(this).attr('period') * multiply);
      } else {
        total += parseInt($(this).val());
        period += parseInt($(this).attr('period'));
      }
    });
    $("#total").val(total + ' ₽');
    $("#period").val(period + ' дней');

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
  });

  // запрет на ввод букв в input
  $('.calc__checkboxNum input').on('input', function () {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
  });

  // проверка чекбокса
  $('input, select').on('change', function (e) {
    total = 0;
    period = 0;
    priceTT = 0;
    priceCMS = 0;
    priceDesign = 0;
    priceLayout = 0;
    priceFilling = 0;
    pricePlacement = 0;
    priceSupport = 0;
    priceAnimation = 0;
    priceSEO = 0;
    priceAdd = 0;

    if ($('input[type="checkbox"]').is(':checked') == true) {
      $(this).closest('.calc__checkboxNum').children('.quantity').addClass('on');
      if ($(this).closest('.calc__checkboxNum').children('.quantity').children('input').val() < 1) {
        $(this).closest('.calc__checkboxNum').children('.quantity').children('input').val(1);
      }
    } else {
      $(this).closest('.calc__checkboxNum').children('.quantity').removeClass('on');
      $(this).closest('.calc__checkboxNum').children('.quantity').children('input').val(0);
    }

    $("input[type='checkbox']:checked, option:selected").each(function () {
      let unit = parseInt($(this).val());
      let multiply = parseInt($(this).closest('.calc__checkboxNum').find('input[type="number"]').val());
      let type = $(this).attr('typeWork');
      switch (type) {
        case 'priceTT':
          if (multiply >= 1) priceTT += unit * multiply; else priceTT += unit;
          break;
        case "priceCMS":
          if (multiply >= 1) priceCMS += unit * multiply; else priceCMS += unit;
          break;
        case "priceDesign":
          if (multiply >= 1) priceDesign += unit * multiply; else priceDesign += unit;
          break;
        case "priceLayout":
          if (multiply >= 1) priceLayout += unit * multiply; else priceLayout += unit;
          break;
        case "priceFilling":
          if (multiply >= 1) priceFilling += unit * multiply; else priceFilling += unit;
          break;
        case "pricePlacement":
          if (multiply >= 1) pricePlacement += unit * multiply; else pricePlacement += unit;
          break;
        case "priceSupport":
          if (multiply >= 1) priceSupport += unit * multiply; else priceSupport += unit;
          break;
        case "priceAnimation":
          if (multiply >= 1) priceAnimation += unit * multiply; else priceAnimation += unit;
          break;
        case "priceSEO":
          if (multiply >= 1) priceSEO += unit * multiply; else priceSEO += unit;
          break;
        case "priceAdd":
          if (multiply >= 1) priceAdd += unit * multiply; else priceAdd += unit;
          break;
        default:
          console.log('switch case не работает');
      }
      if (multiply >= 1) {
        total += unit * multiply;
        period += parseInt($(this).attr('period') * multiply);
      } else {
        total += parseInt($(this).val());
        period += parseInt($(this).attr('period'));
      }
    });

    $("#total").val(total + ' ₽');
    $("#period").val(period + ' дней');

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
          total = 0;
          period = 0;
          priceTT = 0;
          priceCMS = 0;
          priceDesign = 0;
          priceLayout = 0;
          priceFilling = 0;
          pricePlacement = 0;
          priceSupport = 0;
          priceAnimation = 0;
          priceSEO = 0;
          priceAdd = 0;
          $("input:checked, option:selected").each(function () {
            let unit = parseInt($(this).val());
            let multiply = parseInt($(this).closest('.calc__checkboxNum').find('input[type="number"]').val());
            let type = $(this).attr('typeWork');
            switch (type) {
              case 'priceTT':
                if (multiply >= 1) priceTT += unit * multiply; else priceTT += unit;
                break;
              case "priceCMS":
                if (multiply >= 1) priceCMS += unit * multiply; else priceCMS += unit;
                break;
              case "priceDesign":
                if (multiply >= 1) priceDesign += unit * multiply; else priceDesign += unit;
                break;
              case "priceLayout":
                if (multiply >= 1) priceLayout += unit * multiply; else priceLayout += unit;
                break;
              case "priceFilling":
                if (multiply >= 1) priceFilling += unit * multiply; else priceFilling += unit;
                break;
              case "pricePlacement":
                if (multiply >= 1) pricePlacement += unit * multiply; else pricePlacement += unit;
                break;
              case "priceSupport":
                if (multiply >= 1) priceSupport += unit * multiply; else priceSupport += unit;
                break;
              case "priceAnimation":
                if (multiply >= 1) priceAnimation += unit * multiply; else priceAnimation += unit;
                break;
              case "priceSEO":
                if (multiply >= 1) priceSEO += unit * multiply; else priceSEO += unit;
                break;
              case "priceAdd":
                if (multiply >= 1) priceAdd += unit * multiply; else priceAdd += unit;
                break;
              default:
                console.log('switch case не работает');
            }
            if (multiply >= 1) {
              total += unit * multiply;
              period += parseInt($(this).attr('period') * multiply);
            } else {
              total += parseInt($(this).val());
              period += parseInt($(this).attr('period'));
            }
          });
          $("#total").val(total + ' ₽');
          $("#period").val(period + ' дней');

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
        }
      }, 5000);
    }
    if ($(this).val() >= 1) {
      if ($(this).closest('.calc__checkboxNum')) {
        total = 0;
        period = 0;
        priceTT = 0;
        priceCMS = 0;
        priceDesign = 0;
        priceLayout = 0;
        priceFilling = 0;
        pricePlacement = 0;
        priceSupport = 0;
        priceAnimation = 0;
        priceSEO = 0;
        priceAdd = 0;
        $("input:checked, option:selected").each(function () {
          // total += parseInt($(this).val());
          // period += parseInt($(this).attr('period'));
          let unit = parseInt($(this).val());
          let multiply = parseInt($(this).closest('.calc__checkboxNum').find('input[type="number"]').val());
          let type = $(this).attr('typeWork');
          if (multiply >= 1) {
            total += unit * multiply;
            period += parseInt($(this).attr('period') * multiply);
          } else {
            total += parseInt($(this).val());
            period += parseInt($(this).attr('period'));
          }
          switch (type) {
            case 'priceTT':
              if (multiply >= 1) priceTT += unit * multiply; else priceTT += unit;
              break;
            case "priceCMS":
              if (multiply >= 1) priceCMS += unit * multiply; else priceCMS += unit;
              break;
            case "priceDesign":
              if (multiply >= 1) priceDesign += unit * multiply; else priceDesign += unit;
              break;
            case "priceLayout":
              if (multiply >= 1) priceLayout += unit * multiply; else priceLayout += unit;
              break;
            case "priceFilling":
              if (multiply >= 1) priceFilling += unit * multiply; else priceFilling += unit;
              break;
            case "pricePlacement":
              if (multiply >= 1) pricePlacement += unit * multiply; else pricePlacement += unit;
              break;
            case "priceSupport":
              if (multiply >= 1) priceSupport += unit * multiply; else priceSupport += unit;
              break;
            case "priceAnimation":
              if (multiply >= 1) priceAnimation += unit * multiply; else priceAnimation += unit;
              break;
            case "priceSEO":
              if (multiply >= 1) priceSEO += unit * multiply; else priceSEO += unit;
              break;
            case "priceAdd":
              if (multiply >= 1) priceAdd += unit * multiply; else priceAdd += unit;
              break;
            default:
              console.log('switch case не работает');
          }

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
          $("#total").val(total + ' ₽');
          $("#period").val(period + ' дней');

        });
      }
    }
  });

  $('#period').val(period);
  $('#total').val(total);
});