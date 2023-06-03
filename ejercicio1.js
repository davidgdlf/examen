fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    const postTableBody = document.getElementById('postTableBody');
    data.forEach(post => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      `;
      postTableBody.appendChild(row);
    });
  })
  .catch(error => {
    console.log('Error:', error);
  });
