document.addEventListener('DOMContentLoaded', () => {
    fetch('assets/data.json')
        .then(response => response.json())
        .then(data => {
            const scheduleContainer = document.getElementById('schedule-container');
            const homeworkList = document.getElementById('homework-list');
            const teachersList = document.getElementById('teachers-list');
            const newsContainer = document.getElementById('news-container');
            const calendarContainer = document.getElementById('calendar-container');

            // Заполняем расписание
            data.schedule.forEach(item => {
                const div = document.createElement('div');
                div.className = 'schedule-item';
                div.innerHTML = `
                    <h3>${item.date}</h3>
                    <p>${item.subject}</p>
                    <p>${item.timeStart} - ${item.timeEnd}</p>
                    <p>Кабинет: ${item.room}</p>
                    <p>Преподаватель: ${item.teacher}</p>
                `;
                scheduleContainer.appendChild(div);
            });

            // Заполняем домашние задания
            data.homework.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${item.subject}</strong><br>
                    <em>Дата сдачи: ${item.dueDate}</em><br>
                    <p>Задано: ${item.dateAssigned}</p>
                    <p>${item.description}</p>
                    <p>Критерии: ${item.criteria}</p>
                    ${item.link ? `<a href="${item.link}" target="_blank">Тест</a>` : ''}
                `;
                homeworkList.appendChild(li);
            });

            // Заполняем преподавателей
            data.teachers.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${item.name}</strong><br>
                    <p>Предметы: ${item.subjects}</p>
                    ${item.contact ? `<p>Контактные данные: ${item.contact}</p>` : ''}
                `;
                teachersList.appendChild(li);
            });

            // Заполняем новости
            data.news.forEach(item => {
                const div = document.createElement('div');
                div.className = 'news-item';
                div.innerHTML = `
                    <h3>${item.title}</h3>
                    <p>${item.date}</p>
                    <p>${item.content}</p>
                `;
                newsContainer.appendChild(div);
            });

            // Заполняем календарь
            data.calendar.forEach(item => {
                const div = document.createElement('div');
                div.className = 'calendar-item';
                div.innerHTML = `
                    <h3>${item.event}</h3>
                    <p>${item.date}</p>
                    <p>${item.description}</p>
                `;
                calendarContainer.appendChild(div);
            });
        });
});
