// Existing code. TODO: Refactor
// Backbone view for the player portfolio
var PlayerPortfolioView = Backbone.View.extend({
	className: 'player-portfolio-view col-xs-12 col-md-6 text-center',

  divText: '\
            <h1 class="info-view-title">Portfolio</h1>\
            <div class="stock-views-container text-left">\
              <div class="info-item row text-center">\
                <div class="col-md-3"><strong>Symbol</strong></div>\
                <div class="col-md-3"><strong>Shares</strong></div>\
                <div class="col-md-3"><strong>Price/Share</strong></div>\
                <div class="col-md-3"><strong>Total</strong></div>\
              </div>\
            </div>',

  initialize: function() {
    this.render();
    this.collection.on('sync edited remove reset', this.render, this);
  },

  events: {

  },

  numberWithCommas: function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  render: function() {
    this.$el.hide();
    this.$el.empty();
    this.delegateEvents();
    this.$el.show();
    this.$el.append(this.divText);

    var stocks = this.collection.map(function(item){
      return new PlayerStockView({model: item}).render();
    });

    this.$el.find('.stock-views-container').append(stocks);
  }

});