var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'comments/:id': 'comments'
  },

  home: function () {
    $.ajax('home.html').then(function (page) {
    $('.container').html(page)
    var collection = new ArticleCollection();
    collection.fetch().then(function () {
      _.each(collection.models, function (article) {
        $('ul.articleList').append(
          '<li><a href="#' + article.get('id') + '/comments">' + article.get('title') + '</a></li>');
   });
 });
});
},

 comments: function (article_id) {
   $.ajax('comments.html').then(function (page) {
     $('.container').html(page)
    //  console.log(page)
    var article = new Article({id: article_id});
    $('ul.').empty();
    article.fetch().then(function () {
      _.each(article.get('comments'), function (comment) {
        $('ul').append('<li>' + comment.message + '</li>');
      });
    });
  });
},
 initialize: function() {
  Backbone.history.start();
}
});

$(function(){
var router = new Router();
})
