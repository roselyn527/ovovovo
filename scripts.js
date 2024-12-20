document.addEventListener('DOMContentLoaded', () => {
    const newsSection = document.getElementById('news');
    
    
    
    newsData.forEach(newsItem => {
        const newsElement = document.createElement('p');
        newsElement.textContent = newsItem;
        newsSection.appendChild(newsElement);
    });
});

function showInfo(team) {
    const teamDetails = document.getElementById('team-details');
    let info = '';

    switch(team) {
        case 'manutd':
            info = 'Manchester United is one of the most successful clubs in English football history, with numerous league titles and European trophies.';
            break;
        
        case 'chelsea':
            info = 'Chelsea is known for its strong squad and recent success in both the Premier League and European competitions.';
            break;
        
        case 'arsenal':
            info = 'Arsenal is famed for its attractive style of play and has a history of success in both domestic and international competitions.';
            break;
    }

    teamDetails.textContent = info;
}
