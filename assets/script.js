document.addEventListener('DOMContentLoaded', function() {
    // Загрузка и отображение расписания
    fetch('schedule.json')
        .then(response => response.json())
        .then(data => {
            const scheduleTable = document.getElementById('schedule-table');
            data.schedule.forEach(day => {
                const dateRow = document.createElement('tr');
                const dateCell = document.createElement('td');
                dateCell.colSpan = 3;
                dateCell.textContent = day.date;
                dateRow.appendChild(dateCell);
                scheduleTable.appendChild(dateRow);

                day.lessons.forEach(lesson => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${lesson.time}</td>
                        <td>${lesson.subject}</td>
                        <td>${lesson.room}</td>
                        <td>${lesson.teacher}</td>
                    `;
                    scheduleTable.appendChild(row);
                });
            });
        });

    // Загрузка и отображение домашних заданий
    fetch('homework.json')
        .then(response => response.json())
        .then(data => {
            const homeworkTable = document.getElementById('homework-table');
            data.homework.forEach(hw => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${hw.date_assigned}</td>
                    <td>${hw.subject}</td>
                    <td>${hw.due_date}</td>
                    <td>${hw.description}</td>
                    <td>${hw.link ? `<a href="${hw.link}" target="_blank">Перейти</a>` : '—'}</td>
                `;
                homeworkTable.appendChild(row);
            });
        });
});
