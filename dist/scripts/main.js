// $(function (){
//   $('.content').ready(function (event) {
//     $.ajax({
//       type: 'GET',
//       url: 'https://iron-news.herokuapp.com/articles',
//       data: $(this).serialize()
//     }).done(function (data) {
//       console.log(data)
//       // $('.sidebar h3').text(data.name);
//       // $('.sidebar h4').text(data.login);
//       // //$('.sidebar p').text(data.created_at);
//       // $('.followers').text(data.followers);
//       // $('.following').text(data.following);
//
//     });
//   })
// })



// console.log('thfdh');

_.templateSetting = {
  interpolate : /\{\{(.+?)\}\}/g
};

var articles = Backbone.Model.extend ({
  url: function() {
    return 'https://iron-news.herokuapp.com/articles';

  },
  articlesUrl: function() {
    return this.url() + '{?page}';
    // console.log(this);
  },

  singleArticle: function () {
    return this.url() + '/{id}';
  },


  fetchArticle: function() {
    return $.get(this.articlesUrl());
  },

  fetchSingle: function () {
    return $.get(this.singleArticle());

  }
});


var ArticleView = Backbone.View.extend({
  template: _.template($('#articleTemplate').text()),
  render: function () {
    var rendered = this.template(this.model.attributes);
    return this.$el.html(rendered);
  }
});

var ArticleSummaryView = Backbone.View.extend({
  template: _.template($('#articleSummaryTemplate').text())
})
