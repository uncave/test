document.addEventListener("DOMContentLoaded", function() {
    const scheduleTable = document.getElementById('schedule-table');
    const homeworkTable = document.getElementById('homework-table');

    // Функция для загрузки расписания
    function loadSchedule() {
        scheduleData.forEach(day => {
            let row = document.createElement('tr');
            let dayCell = document.createElement('td');
            dayCell.innerHTML = `<strong>${day.day}</strong>`;
            row.appendChild(dayCell);

            day.lessons.forEach(lesson => {
                let lessonRow = document.createElement('tr');
                let timeCell = document.createElement('td');
                let subjectCell = document.createElement('td');
                let roomCell = document.createElement('td');

                timeCell.innerText = lesson.time;
                subjectCell.innerText = lesson.subject;
                roomCell.innerText = lesson.room;

                lessonRow.appendChild(timeCell);
                lessonRow.appendChild(subjectCell);
                lessonRow.appendChild(roomCell);
                scheduleTable.appendChild(lessonRow);
            });
        });
    }

    // Функция для загрузки домашних заданий
    function loadHomework() {
        homeworkData.forEach(day => {
            let row = document.createElement('tr');
            let dateCell = document.createElement('td');
            dateCell.innerHTML = `<strong>${day.date}</strong>`;
            row.appendChild(dateCell);

            day.assignments.forEach(assignment => {
                let assignmentRow = document.createElement('tr');
                let subjectCell = document.createElement('td');
                let descriptionCell = document.createElement('td');

                subjectCell.innerText = assignment.subject;
                descriptionCell.innerText = assignment.description;

                assignmentRow.appendChild(subjectCell);
                assignmentRow.appendChild(descriptionCell);
                homeworkTable.appendChild(assignmentRow);
            });
        });
    }

    loadSchedule();
    loadHomework();
});
