let container = document.querySelector('.container')

const fetchUserDetails = async () => {
    const response = await fetch('./_data.json');
    const data = await response.json();
    data.forEach(user => {
        container.innerHTML += `
        <div class="card">
            <div class="imgBox">
                <img src=${user.image} class="avatar">
            </div>
            <div class="details">
                <h2>${user.name}</h2>
                <div><i class="fas fa-envelope-square fa-2x"></i> ${user.email}</div> 
                <p>${user.skills}</p>
                <a href="${user.linkedIN}" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                <blockquote>${user.quotes}</blockquote>
            </div>
       </div>
        `
    })
}

fetchUserDetails();