// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const dailyRecordsBtn = document.getElementById('daily-records-btn');
    const weeklyRecordsBtn = document.getElementById('weekly-records-btn');
    const dailyRecordsForm = document.getElementById('daily-records');
    const weeklyRecordsForm = document.getElementById('weekly-records');

    dailyRecordsBtn.addEventListener('click', function() {
        dailyRecordsForm.classList.remove('hidden');
        weeklyRecordsForm.classList.add('hidden');
    });

    weeklyRecordsBtn.addEventListener('click', function() {
        weeklyRecordsForm.classList.remove('hidden');
        dailyRecordsForm.classList.add('hidden');
    });
});
