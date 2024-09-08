document.addEventListener("DOMContentLoaded", function() {
    const scheduleTable = document.getElementById('schedule-table');
    const homeworkTable = document.getElementById('homework-table');

    // Функция для загрузки расписания
    function loadSchedule() {
        for (const [day, lessons] of Object.entries(scheduleData)) {
            let dayRow = document.createElement('tr');
            let dayCell = document.createElement('td');
            dayCell.colSpan = 3; // Количество колонок в таблице
            dayCell.innerHTML = `<strong>${day}</strong>`;
            dayRow.appendChild(dayCell);
            scheduleTable.appendChild(dayRow);

            lessons.forEach(lesson => {
                let lessonRow = document.createElement('tr');
                let timeCell = document.createElement('td');
                let subjectCell = document.createElement('td');
                let roomCell = document.createElement('td');

                timeCell.innerText = lesson.time;
                subjectCell.innerText = lesson.subject.replace(/\n/g, '<br>');
                roomCell.innerText = lesson.room;

                lessonRow.appendChild(timeCell);
                lessonRow.appendChild(subjectCell);
                lessonRow.appendChild(roomCell);
                scheduleTable.appendChild(lessonRow);
            });
        }
    }

    // Функция для загрузки домашних заданий
    function loadHomework() {
        homeworkData.forEach(assignment => {
            let homeworkRow = document.createElement('tr');
            let dateCell = document.createElement('td');
            let subjectCell = document.createElement('td');
            let descriptionCell = document.createElement('td');

            dateCell.innerText = assignment.date;
            subjectCell.innerText = assignment.subject;
            descriptionCell.innerText = assignment.description;

            homeworkRow.appendChild(dateCell);
            homeworkRow.appendChild(subjectCell);
            homeworkRow.appendChild(descriptionCell);
            homeworkTable.appendChild(homeworkRow);
        });
    }

    loadSchedule();
    loadHomework();
});
