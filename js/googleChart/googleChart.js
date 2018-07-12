// Load the Visualization API and the corechart package.
// var element;

google.charts.load('current', { 'packages': ['corechart', 'line'] });

google.charts.setOnLoadCallback(delay);


function delay(){
    setTimeout(drawChart,2000);
}

// google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
// google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('date', 'date');
    data.addColumn('number', 'Number of Customers');

    data.addRows(dataRows);
    // data.addRows([
    //     [new Date(2018,3,24),3],
    //     [new Date(2018,3,25),4],
    //     [new Date(2018,3,26),5]
    // ]);
    var options = {
        hAxis: {
            title: 'Date'
        },
        vAxis: {
            title: 'No. of Customers'
        },
        backgroundColor: '#f1f8e9'
    };

    // Instantiate and draw our chart, passing in some options.
    var div = document.createElement('div');
    div.style.width = '800px';
    div.style.height = '600px';
    console.log('Div is', div);
    console.log('Element is', element);
    element[0].appendChild(div);
    var chart = new google.visualization.LineChart(div);
    chart.draw(data, options);
}