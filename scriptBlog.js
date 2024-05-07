document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;

    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push({ username: username, message: message });

    localStorage.setItem('comments', JSON.stringify(comments));

    loadComments();
});

function loadComments() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    var commentsDiv = document.getElementById('comments');

    commentsDiv.innerHTML = '';
    comments.forEach(function(comment) {
        var commentDiv = document.createElement('div');
        commentDiv.textContent = comment.username + ': ' + comment.message;
        commentsDiv.appendChild(commentDiv);
    });
}

loadComments();