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

            // Переключатели
            const toggleSchedule = document.getElementById('toggle-schedule');
            const toggleHomework = document.getElementById('toggle-homework');

            toggleSchedule.addEventListener('click', () => {
                scheduleList.style.display = scheduleList.style.display === 'none' ? 'block' : 'none';
            });

            toggleHomework.addEventListener('click', () => {
                homeworkList.style.display = homeworkList.style.display === 'none' ? 'block' : 'none';
            });

            // По умолчанию скрыть элементы
            scheduleList.style.display = 'none';
            homeworkList.style.display = 'none';
        });
});
