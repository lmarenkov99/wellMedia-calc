jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
jQuery('.quantity').each(function () {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function () {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});
$('.calc__checkboxNum input').on('input', function () {
  $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});

let period = 0;
let total = 0;
document.getElementById('period').value = period;
document.getElementById('total').value = total;


// let workOnCustomer = $('#workOnCustomer').val();
let TT_temporary = 0;
let TT = 0;
let design_temporary = 0;
let design = 0;
let layout_temporary = 0;
let layout = 0;
let placement_temporary = 0;
let placement = 0;
let filling_temporary = 0;
let filling = 0;
let support_temporary = 0;
let support = 0;
let animation_temporary = 0;
let animation = 0;
let seo_temporary = 0;
let seo = 0;
let add_temporary = 0;
let add = 0;
let task = 0;
let typeWeb = 0;
let checkboxValue = 0;
let checkboxNumber = 0;
let checkboxNum = 0;


$(function () {

  $('.calc__checkboxNum input[type="checkbox"]').on('change', function () {
    if ($(this).is(':checked')) {
      checkboxValue = 0;
      checkboxValue = $(this).val();
      checkboxValue = Number(checkboxValue);
    }
    else {
      checkboxNum = 0;
    }
  });

  $('.calc__checkboxNum input[type="number"]').on('change', function () {
    checkboxNumber = 0;
    checkboxNumber = $(this).val();
    checkboxNumber = Number(checkboxNumber);
    checkboxNumber--;

    if (checkboxNumber >= 2) {
      checkboxNum = checkboxValue * checkboxNumber;
    }
    else if (checkboxNumber == 1) {
      checkboxNum = checkboxValue;
    }
    else {
      checkboxNum = 0;
    }
    // $('#total').val(total + task + typeWeb + checkboxNum + ' ₽');
    // $('.priceDesign').text(design + checkboxNum);
    $(function () {
      let num_start = $('.priceDesign').text();
      $({ numberValue: num_start }).animate({ numberValue: design + checkboxNum }, {
        duration: 500,
        easing: "linear",
        step: function (val) {
          $(".priceDesign").text(Math.ceil(val));
        }
      });
    });
    $(function () {
      let num_start = $('#total').val();
      $({ numberValue: num_start }).animate({ numberValue: total + task + typeWeb + checkboxNum }, {
        duration: 500,
        easing: "linear",
        step: function (val) {
          $("#total").val(Math.ceil(val) + ' ₽');
        }
      });
    });
  });

  $('#task-1').on('change', function () {
    if ($(this).is(':checked')) {
      task = 0;
      task = Number(task);
      TT = Number(TT);
      // $('#total').val(total + task + typeWeb + checkboxNum + ' ₽');
      // $('.priceTT').text(task + TT);
      $(function () {
        let num_start = $('.priceTT').text();
        $({ numberValue: num_start }).animate({ numberValue: task + TT }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceTT").text(Math.ceil(val));
          }
        });
      });
      $(function () {
        let num_start = $('#total').val();
        $({ numberValue: num_start }).animate({ numberValue: total + task + typeWeb + checkboxNum }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $("#total").val(Math.ceil(val) + ' ₽');
          }
        });
      });
    }
  });
  $('#task-2').on('change', function () {
    if ($(this).is(':checked')) {
      task = $(this).val();
      task = Number(task);
      // $('#total').val(total + task + typeWeb + checkboxNum + ' ₽');
      // $('.priceTT').text(task + TT);
      $(function () {
        let num_start = $('.priceTT').text();
        $({ numberValue: num_start }).animate({ numberValue: task + TT }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceTT").text(Math.ceil(val));
          }
        });
      });
      $(function () {
        let num_start = $('#total').val();
        $({ numberValue: num_start }).animate({ numberValue: total + task + typeWeb + checkboxNum }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $("#total").val(Math.ceil(val) + ' ₽');
          }
        });
      });
    }
  });
  $('.calc__type input[type="radio"]').on('change', function () {
    if ($(this).is(':checked')) {
      typeWeb = 0;
      typeWeb = $(this).val();
      typeWeb = Number(typeWeb);
      // $('#total').val(total + task + typeWeb + checkboxNum + ' ₽');
      // $('.priceCMS').text(typeWeb);
      $(function () {
        let num_start = $('.priceCMS').text();
        $({ numberValue: num_start }).animate({ numberValue: typeWeb }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceCMS").text(Math.ceil(val));
          }
        });
      });
      $(function () {
        let num_start = $('#total').val();
        $({ numberValue: num_start }).animate({ numberValue: total + task + typeWeb + checkboxNum }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $("#total").val(Math.ceil(val) + ' ₽');
          }
        });
      });
    }
  });


  $('.calc__checkbox input').on('change', function () {
    if ($(this).prop('checked')) {
      let value = $(this).val();
      value = Number(value);
      total = total + value;

      $(function () {
        let num_start = $('#total').val();
        $({ numberValue: num_start }).animate({ numberValue: total + task + typeWeb + checkboxNum }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $("#total").val(Math.ceil(val) + ' ₽');
          }
        });
      });

      let periodTime = $(this).attr('period');
      periodTime = Number(periodTime);
      period = period + periodTime;
      if (period == 1) {
        // $('#period').val(period + ' день');
        $(function () {
          let num_start = $('#period').val();
          $({ numberValue: num_start }).animate({ numberValue: period }, {
            duration: 500,
            easing: "linear",
            step: function (val) {
              $("#period").val(Math.ceil(val) + ' день');
            }
          });
        });
      }
      else if (period <= 0) {
        // $('#period').val(period);
        $(function () {
          let num_start = $('#period').val();
          $({ numberValue: num_start }).animate({ numberValue: period }, {
            duration: 500,
            easing: "linear",
            step: function (val) {
              $("#period").val(Math.ceil(val));
            }
          });
        });
      }
      else if (period <= 4.9) {
        // $('#period').val(period + ' дня');
        $(function () {
          let num_start = $('#period').val();
          $({ numberValue: num_start }).animate({ numberValue: period }, {
            duration: 500,
            easing: "linear",
            step: function (val) {
              $("#period").val((val) + ' дня');
            }
          });
        });
      }
      else {
        // $('#period').val(period + ' дней');
        $(function () {
          let num_start = $('#period').val();
          $({ numberValue: num_start }).animate({ numberValue: period }, {
            duration: 500,
            easing: "linear",
            step: function (val) {
              $("#period").val(Math.ceil(val) + ' дней');
            }
          });
        });
      }
    } else {
      let value = $(this).val();
      value = Number(value);
      total = total - value;
      // $('#total').val(total + task + typeWeb + checkboxNum + ' ₽');

      $(function () {
        let num_start = $('#total').val();
        $({ numberValue: num_start }).animate({ numberValue: total + task + typeWeb + checkboxNum }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $("#total").val(Math.ceil(val) + ' ₽');
          }
        });
      });

      let periodTime = $(this).attr('period');
      periodTime = Number(periodTime);
      period = period - periodTime;
      period = Number(period);
      if (period == 1) {
        // $('#period').val(period + ' день');
        $(function () {
          let num_start = $('#period').val();
          $({ numberValue: num_start }).animate({ numberValue: period }, {
            duration: 500,
            easing: "linear",
            step: function (val) {
              $("#period").val(Math.ceil(val) + ' день');
            }
          });
        });
      }
      else if (period <= 0) {
        // $('#period').val(period);
        $(function () {
          let num_start = $('#period').val();
          $({ numberValue: num_start }).animate({ numberValue: period }, {
            duration: 500,
            easing: "linear",
            step: function (val) {
              $("#period").val(Math.ceil(val));
            }
          });
        });
      }
      else if (period <= 4.9) {
        // $('#period').val(period + ' дня');
        $(function () {
          let num_start = $('#period').val();
          $({ numberValue: num_start }).animate({ numberValue: period }, {
            duration: 500,
            easing: "linear",
            step: function (val) {
              $("#period").val((val) + ' дня');
            }
          });
        });
      }
      else {
        // $('#period').val(period + ' дней');
        $(function () {
          let num_start = $('#period').val();
          $({ numberValue: num_start }).animate({ numberValue: period }, {
            duration: 500,
            easing: "linear",
            step: function (val) {
              $("#period").val(Math.ceil(val) + ' дней');
            }
          });
        });
      }
    }

  });

  $('.calc__TT .calc__checkbox input').on('change', function () {
    if ($(this).prop('checked')) {
      TT_temporary = $(this).val();
      TT_temporary = Number(TT_temporary);
      task = Number(task);
      TT = TT + TT_temporary;
      // $('.priceTT').text(TT + task);
      $(function () {
        let num_start = $('.priceTT').text();
        $({ numberValue: num_start }).animate({ numberValue: TT + task }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceTT").text(Math.ceil(val));
          }
        });
      });
    }
    else {
      TT_temporary = $(this).val();
      TT_temporary = Number(TT_temporary);
      task = Number(task);
      TT = TT - TT_temporary;
      $('.priceTT').text(TT + task);
    }
  });

  $('.calc__design .calc__checkbox input').on('change', function () {
    if ($(this).prop('checked')) {
      design_temporary = $(this).val();
      design_temporary = Number(design_temporary);
      design = design + design_temporary;
      // $('.priceDesign').text(design + checkboxNum);
      $(function () {
        let num_start = $('.priceDesign').text();
        $({ numberValue: num_start }).animate({ numberValue: design + checkboxNum }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceDesign").text(Math.ceil(val));
          }
        });
      });
    }
    else {
      design_temporary = $(this).val();
      design_temporary = Number(design_temporary);
      design = design - design_temporary;
      $('.priceDesign').text(design);
    }
  });
  $('.calc__layout input').on('change', function () {
    if ($(this).prop('checked')) {
      layout_temporary = $(this).val();
      layout_temporary = Number(layout_temporary);
      layout = layout + layout_temporary;
      // $('.priceLayout').text(layout);
      $(function () {
        let num_start = $('.priceLayout').text();
        $({ numberValue: num_start }).animate({ numberValue: layout }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceLayout").text(Math.ceil(val));
          }
        });
      });

    }
    else {
      layout_temporary = $(this).val();
      layout_temporary = Number(layout_temporary);
      layout = layout - layout_temporary;
      $('.priceLayout').text(layout);
    }
  });
  $('.calc__filling .calc__checkbox input').on('change', function () {
    if ($(this).prop('checked')) {
      filling_temporary = $(this).val();
      filling_temporary = Number(filling_temporary);
      filling = filling + filling_temporary;
      // $('.priceTT').text(TT + task);
      $(function () {
        let num_start = $('.priceFilling').text();
        $({ numberValue: num_start }).animate({ numberValue: filling }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceFilling").text(Math.ceil(val));
          }
        });
      });
    }
    else {
      filling_temporary = $(this).val();
      filling_temporary = Number(filling_temporary);
      filling = filling - filling_temporary;
      $('.priceFilling').text(TT + task);
    }
  });
  $('.calc__placement input').on('change', function () {
    if ($(this).prop('checked')) {
      placement_temporary = $(this).val();
      placement_temporary = Number(placement_temporary);
      placement = placement + placement_temporary;
      // $('.pricePlacement').text(placement);
      $(function () {
        let num_start = $('.pricePlacement').text();
        $({ numberValue: num_start }).animate({ numberValue: placement }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".pricePlacement").text(Math.ceil(val));
          }
        });
      });
    }
    else {
      placement_temporary = $(this).val();
      placement_temporary = Number(placement_temporary);
      placement = placement - placement_temporary;
      $('.pricePlacement').text(placement);
    }
  });
  $('.calc__support input').on('change', function () {
    if ($(this).prop('checked')) {
      support_temporary = $(this).val();
      support_temporary = Number(support_temporary);
      support = support + support_temporary;
      // $('.priceSupport').text(support);
      $(function () {
        let num_start = $('.priceSupport').text();
        $({ numberValue: num_start }).animate({ numberValue: support }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceSupport").text(Math.ceil(val));
          }
        });
      });
    }
    else {
      support_temporary = $(this).val();
      support_temporary = Number(support_temporary);
      support = support - support_temporary;
      $('.priceSupport').text(support);
    }
  });
  $('.calc__animation input').on('change', function () {
    if ($(this).prop('checked')) {
      animation_temporary = $(this).val();
      animation_temporary = Number(animation_temporary);
      animation = support + animation_temporary;
      // $('.priceAnimation').text(animation);
      $(function () {
        let num_start = $('.priceAnimation').text();
        $({ numberValue: num_start }).animate({ numberValue: animation }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceAnimation").text(Math.ceil(val));
          }
        });
      });
    }
    else {
      animation_temporary = $(this).val();
      animation_temporary = Number(animation_temporary);
      animation = support - animation_temporary;
      $('.priceAnimation').text(animation);
    }
  });
  $('.calc__seo input').on('change', function () {
    if ($(this).prop('checked')) {
      seo_temporary = $(this).val();
      seo_temporary = Number(seo_temporary);
      seo = + seo_temporary;
      // $('.priceSEO').text(seo);
      $(function () {
        let num_start = $('.priceSEO').text();
        $({ numberValue: num_start }).animate({ numberValue: seo }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceSEO").text(Math.ceil(val));
          }
        });
      });
    }
    else {
      seo_temporary = $(this).val();
      seo_temporary = Number(seo_temporary);
      seo = - seo_temporary;
      $('.priceSEO').text(seo);
    }
  });

  $('.calc__add input').on('change', function () {
    if ($(this).prop('checked')) {
      add_temporary = $(this).val();
      add_temporary = Number(add_temporary);
      add = add + add_temporary;
      // $('.priceAdd').text(add);
      $(function () {
        let num_start = $('.priceAdd').text();
        $({ numberValue: num_start }).animate({ numberValue: add }, {
          duration: 500,
          easing: "linear",
          step: function (val) {
            $(".priceAdd").text(Math.ceil(val));
          }
        });
      });
    }
    else {
      add_temporary = $(this).val();
      add_temporary = Number(add_temporary);
      add = add - add_temporary;
      $('.priceAdd').text(add);
    }
  });
});