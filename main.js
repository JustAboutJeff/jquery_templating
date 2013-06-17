$(document).ready(function () {
  $("#new_comment_button").on("click", toggleCommentForm );
  $("form#new_comment").on("submit", buildComment );
});

var toggleCommentForm = function(e) {
  $('#new_comment').toggleClass('hide');
};

var buildComment = function(e) {
  e.preventDefault();
  var formComment = getFormValue('textarea');
  var formAuthor = getFormValue('input[type=text]');
  if (formComment && formAuthor) {
    $('<li></li>').appendTo('ul#comment_list');
    $('ul#comment_list li:last-child').loadTemplate($("#template"),
    {
      comment: formComment,
      author: formAuthor
    });
  } else {
    alert("Please enter a comment and author before submit!");
  }

};

var getFormValue = function(DOMObject) {
 return $('form#new_comment >'+DOMObject).val();
};
