function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts'
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments'
   
    const selectPostElement = document.getElementById('posts');
    const loadPostButton = document.getElementById('btnLoadPosts');
    const postBodyElement = document.getElementById('post-body');
    const comentListElement = document.getElementById('post-comments');
    const buttonViewPostElement = document.getElementById('btnViewPost');


    loadPostButton.addEventListener('click', () => {
        fetch(postsURL)
            .then(response => response.json())
            .then(posts => {
                Object.values(posts)
                    .forEach(post => {
                        const optionElement = document.createElement('option')
                        optionElement.value = post.id;
                        optionElement.textContent = post.title;
        
                        selectPostElement.appendChild(optionElement);

                    })
               

                

            })
    })


    buttonViewPostElement.addEventListener('click', async () => {
        const selectedPostId = selectPostElement.value;

        const response = await fetch (`${postsURL}/${selectedPostId}`);

        const selectedPost = await response.json()
        postBodyElement.textContent = selectedPost.body


    })



}

attachEvents();