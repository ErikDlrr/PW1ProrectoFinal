/*document.getElementById('commentForm').addEventListener('submit', function(event) {
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

loadComments();*/

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;

    if (!username || !message) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    var commentData = {
        username: username,
        message: message,
        date: new Date().toLocaleString() // Agregar fecha y hora del comentario
    };

    // Guardar comentario en la base de datos
    saveComment(commentData);

    // Limpiar formulario
    document.getElementById('username').value = '';
    document.getElementById('message').value = '';
});

function saveComment(comment) {
    // Simular envío de comentario al servidor (aquí deberías enviar los datos al servidor en una aplicación real)
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));

    // Actualizar la lista de comentarios
    loadComments();
}

function loadComments() {
    var comments = JSON.parse(localStorage.getItem('comments')) || [];
    var commentsDiv = document.getElementById('comments');

    commentsDiv.innerHTML = '';
    comments.forEach(function(comment) {
        var commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
            <strong>${comment.username}</strong> (${comment.date}):<br>
            ${comment.message}
        `;
        commentsDiv.appendChild(commentDiv);
    });
}

loadComments();
