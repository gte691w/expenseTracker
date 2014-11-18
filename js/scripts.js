$(document).ready(function(){
	$("#form-expense").submit(function(event){
		event.preventDefault();

		var description = $("#descript").val();
		var price = parseFloat($("#price").val()).toFixed(2);
		var quantity = parseFloat($("#quant").val()).toFixed(2);

		var Purchase = {
			totalPrice: 0,
			totalCost: function(aPrice,aQauntity){
				this.totalPrice = this.totalPrice + aPrice*aQauntity;
			}

		};

		var prodPrice = Object.create(Purchase);
		prodPrice.totalCost(price,quantity);
		var prodCost = prodPrice.totalPrice;


		


		$('#myTable').append('<tr class="child"><td>'+description+'</td><td>'+'$'+price+'</td><td>'+quantity+'</td><td>'+'$'+prodCost+'</td></tr>');
		$("#descript").val("");
		$("#price").val("");
		$("#quant").val("");
		$("#show-expenses").show();
		
  });
});


		
	