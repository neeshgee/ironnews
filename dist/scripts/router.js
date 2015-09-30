var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    ':id/comments': 'comments'
  },

  home: function () {
    var self = this;
    this.articlecollection.fetch().then(function () {
      $('.container').html(self.pageView.render());
    });
  },

 comments: function (articleId) {
  var article = new Article({ id: articleId});
  article.fetch().then(function () {
    var view = new CommentsView({model: article});
    $('.container').html(view.render());
  });
},

 initialize: function() {
   this.articlecollection = new ArticleCollection();
   this.pageView = new pageView({collection: this.articlecollection});
   Backbone.history.start();
}
});

$(function(){
  var router = new Router();
})
