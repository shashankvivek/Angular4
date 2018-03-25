

var selected_item;
$scope.config = {
    data : getAll,
  fields: {
    title: 'NId',
    body: [{
      name: 'Final Material',
      field: 'finalMaterial_NId'
    },
    {
      name: 'Status',
      field: 'status'
    }, {
      name: 'Initial Quantity',
      field: 'init_qty'
    }]
  },
  selectionChanged: selectionChangeAction,
  sortField : []
}

function selectionChangeAction(item) {
  selected_item = item;
  // emit some events
  // set some button visibility
}

function getAll(option) {
    return (function (extraOption){
        var url = (extraOption) ? 'SOME_URL_HERE'+extraOption : 'SOME_URL_HERE' ;
        return $http.get(url)
    })(option)
}