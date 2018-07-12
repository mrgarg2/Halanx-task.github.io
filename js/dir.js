app.directive('gChart',()=>{
    return {
        templateUrl:'./templates/gChart.html',
        link:function(scope,element,attr){
            setElement(element);
            console.log('Elements is',element);
            console.log('Attribute is',scope.visitLog);
            // drawChart();
            // configChart(scope.visitLog);
        }
    }
});

console.log('Char Element is',element);