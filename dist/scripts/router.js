var Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'comments': 'comments'
  },

  home: function () {
    $.ajax('home.html').then(function (page) {
      $('.container').html(page)
      var data = $.get('https://iron-news.herokuapp.com/articles');
        console.log(data)
        $.each(data, function (data) {
          $('.container ol.articleList').append('<li>' + this.title + '</li>');
        });
      });
},
 comments: function () {
   $.ajax('comments.html').then(function (page) {
     $('.container').html(page)
    //  console.log(page)


   })

 },
 initialize: function() {
  Backbone.history.start();
}
});

$(function(){
var router = new Router();
})
