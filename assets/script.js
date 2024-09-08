document.addEventListener('DOMContentLoaded', function () {
    const scheduleTable = document.getElementById('schedule-table');
    const homeworkTable = document.getElementById('homework-table');

    // Заголовки для расписания
    const scheduleHeaderRow = document.createElement('tr');
    scheduleHeaderRow.innerHTML = `
        <th>День</th>
        <th>Предмет</th>
        <th>Время</th>
        <th>Кабинет</th>
        <th>Преподаватель</th>
    `;
    scheduleTable.appendChild(scheduleHeaderRow);

    // Заполнение таблицы расписания
    scheduleData.forEach(day => {
        day.classes.forEach(cls => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${day.day}</td>
                <td>${cls.subject}</td>
                <td>${cls.time}</td>
                <td>${cls.room}</td>
                <td>${cls.teacher}</td>
            `;
            scheduleTable.appendChild(row);
        });
    });

    // Заголовки для домашнего задания
    const homeworkHeaderRow = document.createElement('tr');
    homeworkHeaderRow.innerHTML = `
        <th>Дата</th>
        <th>Предмет</th>
        <th>Задание</th>
        <th>Срок сдачи</th>
    `;
    homeworkTable.appendChild(homeworkHeaderRow);

    // Заполнение таблицы домашнего задания
    homeworkData.forEach(hw => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${hw.date}</td>
            <td>${hw.subject}</td>
            <td>${hw.task}</td>
            <td>${hw.dueDate}</td>
        `;
        homeworkTable.appendChild(row);
    });
});
