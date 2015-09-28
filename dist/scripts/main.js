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

var Article = Backbone.Model.extend ({
  url: function() {
    return 'https://iron-news.herokuapp.com/articles/' + this.get('id');
  }
});

var ArticleCollection = Backbone.Collection.extend({
  url: 'https://iron-news.herokuapp.com/articles',
  model: Article
});

// var c = new ArticleCollection();
// c.fethc().then)function () {
//   _.each(c.models, function (article) {
//     console.log;
//
//   })
//
// }




// var fgfhj = new Article().fetchArticleList();

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
