document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data.json')
        .then(response => response.json())
        .then(data => {
            const scheduleContainer = document.getElementById('schedule-container');
            const homeworkList = document.getElementById('homework-list');
            const teachersList = document.getElementById('teachers-list');

            // Заполняем расписание
            data.schedule.forEach(item => {
                const div = document.createElement('div');
                div.className = 'schedule-item';
                div.innerHTML = `
                    <h3>${item.date}</h3>
                    <p>${item.time} - ${item.subject}</p>
                `;
                scheduleContainer.appendChild(div);
            });

            // Заполняем домашние задания
            data.homework.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.title} - ${item.description}`;
                homeworkList.appendChild(li);
            });

            // Заполняем преподавателей
            data.teachers.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.name} - ${item.subject}`;
                teachersList.appendChild(li);
            });
        });
});
