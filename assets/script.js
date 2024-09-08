document.addEventListener('DOMContentLoaded', function () {
    const scheduleTable = document.getElementById('schedule-table');
    const homeworkTable = document.getElementById('homework-table');

    scheduleData.forEach(day => {
        const row = document.createElement('tr');
        const dayCell = document.createElement('td');
        dayCell.textContent = day.day;
        row.appendChild(dayCell);

        day.classes.forEach(cls => {
            const classRow = document.createElement('tr');
            const classCell = document.createElement('td');
            classCell.innerHTML = `<strong>${cls.subject}</strong><br>${cls.time}<br>${cls.room}<br>${cls.teacher}`;
            classRow.appendChild(classCell);
            scheduleTable.appendChild(classRow);
        });

        scheduleTable.appendChild(row);
    });

    homeworkData.forEach(hw => {
        const row = document.createElement('tr');
        const taskCell = document.createElement('td');
        taskCell.innerHTML = `<strong>${hw.subject}</strong><br>${hw.task}<br>Сдать до: ${hw.dueDate}`;
        row.appendChild(taskCell);
        homeworkTable.appendChild(row);
    });
});
