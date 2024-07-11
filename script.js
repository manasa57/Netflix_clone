const trending = [
    { src: "trending1.jpg", name: "RRR" },
    { src: "trending2.jpeg", name: "Kalki" },
    { src: "trending3.jpeg", name: "Pushpa-2" },
    { src: "trending4.jpeg", name: "Beast" },
    { src: "trending5.jpeg", name: "Guntur Karam" },
    { src: "trending1.jpg", name: "RRR" },
    { src: "trending2.jpeg", name: "Kalki" },
    { src: "trending3.jpeg", name: "Pushpa-2" },
    { src: "trending4.jpeg", name: "Beast" },
    { src: "trending5.jpeg", name: "Guntur Karam" }
];

const topPicks = [
    { src: "top1.jpeg", name: "Tears of Steel" },
    { src: "top2.png", name: "Kungfu Pandit" },
    { src: "top3.jpg", name: "Tanhaji" },
    { src: "top4.jpg", name: "Emily in paris" },
    { src: "top5.png", name: "Peaky Blinders" }
];

const loadContent = (contentArray, containerId) => {
    const container = document.getElementById(containerId);
    contentArray.forEach(item => {
        const contentItem = document.createElement('div');
        contentItem.className = 'content-item';
        
        const img = document.createElement('img');
        img.src = item.src;
        contentItem.appendChild(img);
        
        const name = document.createElement('div');
        name.className = 'content-name';
        name.textContent = item.name;
        contentItem.appendChild(name);
        
        container.appendChild(contentItem);
    });
};

const addScrollButtonFunctionality = () => {
    const trendingGrid = document.getElementById('trending');
    const trendingButton = document.getElementById('trending-scroll-button');

    trendingButton.addEventListener('click', () => {
        trendingGrid.scrollBy({ left: 200, behavior: 'smooth' });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    loadContent(trending, 'trending');
    loadContent(topPicks, 'top-picks');
    addScrollButtonFunctionality();
});
