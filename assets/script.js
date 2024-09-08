document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data.json')
        .then(response => response.json())
        .then(data => {
            const scheduleCalendar = document.getElementById('schedule-calendar');
            const homeworkList = document.getElementById('homework-list');

            // Очистить предыдущие элементы
            scheduleCalendar.innerHTML = '';
            homeworkList.innerHTML = '';

            // Заполняем календарь
            data.schedule.forEach(day => {
                const dayDiv = document.createElement('div');
                dayDiv.className = 'calendar-day';
                dayDiv.innerHTML = `
                    <h3>${day.date}</h3>
                    <ul>
                        ${day.classes.map(cls => `<li>${cls.time} - ${cls.subject}</li>`).join('')}
                    </ul>
                `;
                scheduleCalendar.appendChild(dayDiv);
            });

            // Заполняем домашние задания
            data.homework.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.title} - ${item.description}`;
                homeworkList.appendChild(li);
            });
        });
});
