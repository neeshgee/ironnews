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

_.templateSettings = {
  interpolate : /\{\{(.+?)\}\}/g
};

var Article = Backbone.Model.extend ({
  url: function() {
    return 'https://iron-news.herokuapp.com/articles/' + this.get('id');
  }
});

var ArticleCollection = Backbone.Collection.extend({
  url: 'https://iron-news.herokuapp.com/articles/',
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


var ArticleView = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#articleTemplate').text()),
  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  }
});

var pageView = Backbone.View.extend({
  tagName: 'ol',
  // template: _.template($('#pageTemplate').text()),

  render: function () {
    var self = this;
    this.collection.each(function(article) {
      var view = new ArticleView({model: article});
      self.$el.append(view.render());
    })

    return this.$el;
  }
});

var CommentsView = Backbone.View.extend({
  tagName: 'ul',
  template: _.template($('#commentsTemplate').text()),

  render: function () {
    var self = this;
    _.each(this.model.get('comments'), function (comment) {
      self.$el.append(self.template(comment));
    })
    return this.$el;
  }
});
