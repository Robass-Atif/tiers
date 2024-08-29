document.addEventListener('DOMContentLoaded', function() {
    var aggregateList = document.getElementById('aggregateList');
    var students = JSON.parse(localStorage.getItem('students')) || [];

    if (students.length === 0) {
        aggregateList.innerHTML = '<p>No aggregates found.</p>';
    } else {
        var listHtml = '<ul>';
        students.forEach(function(student) {
            listHtml += '<li>' + student.name + ': ' + student.aggregate + '%</li>';
        });
        listHtml += '</ul>';
        aggregateList.innerHTML = listHtml;
    }
});
