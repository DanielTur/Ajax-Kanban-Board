// COMMUNICATING WITH SERVER
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  	'X-Client-Id': '2484',
  	'X-Auth-Token': 'f8d800df31a0789c33e5dda4dd060984'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

// CREATING COLUMNS
function setupColumns(columns) {
    columns.forEach(function (column) {
  		var col = new Column(column.id, column.name);
        board.createColumn(col);
        setupCards(col, column.cards);
    });
};

// CREATING CARDS
function setupCards(col, cards) {
	cards.forEach(function (card) {
        var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(card);
  	});
};