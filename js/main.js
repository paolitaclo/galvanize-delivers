let itemAndPrice = [
  {
    foodName: 'Royale with Cheese',
    price: '$8.99',
    value: 8.99
  },
  {
    foodName: 'Arugula Pie',
    price: '$11.99',
    value: 11.99
  },
  {
    foodName: 'Smoked Swine',
    price: '$14.99',
    value: 14.99
  },
  {
    foodName: 'Ice Cream Biscut',
    price: '$7.99',
    value: 7.99
  }
];

$(".button-collapse").sideNav();

let subtotal = 0;
$('.add-food').on('click', function (event) {
  let tax;
  let total;
  let stringNum = $(event.target).data('index');
  let indexNum = parseInt(stringNum);
  for (var i = 0; i < itemAndPrice.length; i++) {
    if(i === indexNum) {
      let foodToTable = '<tr>' + '<td>' + itemAndPrice[i].foodName +
      '</td>';
      foodToTable += '<td>' + itemAndPrice[i].price +
      '</td>'+ '</tr>';
      subtotal += itemAndPrice[i].value;
      $('.order-items').append(foodToTable);
    }
  }
  tax = (0.1 * subtotal);
  total = subtotal + tax;
  $('.subTotal').text('$' + subtotal.toFixed(2));

  $('.taxes').text('$' + tax.toFixed(2));

  $('.totalToPay').text('$' + total.toFixed(2));
});
