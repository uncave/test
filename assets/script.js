document.addEventListener("DOMContentLoaded", function() {
    const scheduleBody = document.getElementById("schedule-body");
    const homeworkList = document.getElementById("homework-list");

    // Загружаем расписание
    scheduleData.forEach(daySchedule => {
        daySchedule.lessons.forEach(lesson => {
            const row = document.createElement("tr");
            
            const dayCell = document.createElement("td");
            dayCell.textContent = daySchedule.day;
            row.appendChild(dayCell);
            
            const timeCell = document.createElement("td");
            timeCell.textContent = lesson.time;
            row.appendChild(timeCell);
            
            const subjectCell = document.createElement("td");
            subjectCell.textContent = lesson.subject;
            row.appendChild(subjectCell);
            
            const teacherCell = document.createElement("td");
            teacherCell.textContent = lesson.teacher;
            row.appendChild(teacherCell);
            
            const roomCell = document.createElement("td");
            roomCell.textContent = lesson.room;
            row.appendChild(roomCell);
            
            scheduleBody.appendChild(row);
        });
    });

    // Загружаем домашние задания
    homeworkData.forEach(homework => {
        const listItem = document.createElement("li");
        listItem.textContent = `${homework.subject}: ${homework.task}`;
        homeworkList.appendChild(listItem);
    });
});
