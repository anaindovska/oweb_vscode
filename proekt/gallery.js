
let posts = JSON.parse(localStorage.getItem("posts")) || [
    { id: 1, likes: 0, comments: [] },
    { id: 2, likes: 0, comments: [] },
    { id: 3, likes: 0, comments: [] },
    { id: 4, likes: 0, comments: [] }
];


document.addEventListener("DOMContentLoaded", function() {
    posts.forEach(post => {
        
        document.getElementById(`like-count-${post.id}`).innerText = post.likes;

        
        const commentSection = document.getElementById(`commentSection-${post.id}`);
        post.comments.forEach(comment => {
            const commentElement = document.createElement("p");
            commentElement.textContent = comment;
            commentSection.appendChild(commentElement);
        });
    });
});


function updateLikes(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        localStorage.setItem("posts", JSON.stringify(posts));
        document.getElementById(`like-count-${postId}`).innerText = post.likes;
    }
}


document.querySelectorAll(".like-button").forEach(button => {
    button.addEventListener("click", () => {
        const postId = parseInt(button.dataset.postId, 10);
        updateLikes(postId);
    });
});


function addComment(postId) {
    const commentInput = document.getElementById(`commentInput-${postId}`);
    const commentText = commentInput.value.trim();

    if (commentText) {
        
        const post = posts.find(p => p.id === postId);
        if (post) {
            post.comments.push(commentText);
            localStorage.setItem("posts", JSON.stringify(posts));

            
            const commentSection = document.getElementById(`commentSection-${postId}`);
            const commentElement = document.createElement("p");
            commentElement.textContent = commentText;
            commentSection.appendChild(commentElement);

            
            commentInput.value = "";
        }
    }
}

//localStorage.clear();