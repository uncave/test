document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data.json')
        .then(response => response.json())
        .then(data => {
            const scheduleList = document.getElementById('schedule-list');
            const homeworkList = document.getElementById('homework-list');

            // Очистить предыдущие элементы
            scheduleList.innerHTML = '';
            homeworkList.innerHTML = '';

            data.schedule.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.time}: ${item.subject}`;
                scheduleList.appendChild(li);
            });

            data.homework.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.title} - ${item.description}`;
                homeworkList.appendChild(li);
            });
        });
});
