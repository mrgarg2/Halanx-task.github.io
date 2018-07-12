var element;
var dataRows = []

function configChart(visits) {

    console.log('Visits are',visits);
    
    visits.forEach(visit => {
        date = new Date(visit.date);
        count = visit.count;
        dataRows.push([date, count]);

    });

}

function setElement(ele) {
    element = ele;
}

