function calculateAggregate() {
    var studentName = document.getElementById('studentName').value;
    var matricMarks = parseFloat(document.getElementById('matricMarks').value);
    var fscMarks = parseFloat(document.getElementById('fscMarks').value);
    var entryTestMarks = parseFloat(document.getElementById('entryTestMarks').value);

    if (isNaN(matricMarks) || isNaN(fscMarks) || isNaN(entryTestMarks)) {
        alert('Please enter valid marks.');
        return;
    }

    var aggregate = (matricMarks * 0.2) + (fscMarks * 0.3) + (entryTestMarks * 0.5);
    var resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '<p>Student Name: ' + studentName + '</p>';
    resultDiv.innerHTML += '<p>Aggregate: ' + aggregate.toFixed(2) + '%</p>';

    if (aggregate >= 60) {
        alert('You are eligible for admission.');
    } else {
        alert('You are not eligible for admission.');
    }
}
