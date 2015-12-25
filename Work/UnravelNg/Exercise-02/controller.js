var SiteEditCtrl = function($scope) {
    $scope.sites = sites;
    $scope.startAdd = startAdd;
    $scope.add = add;
    $scope.startEdit = startEdit;
    $scope.save = save;
    $scope.startRemove = startRemove;
    $scope.remove = remove;
    $scope.getSelected = getSelected;
    $scope.cancel = cancel;

    var selected = -1;
    setView('list');

    function setView(view) {
        $scope.view = view;
    }

    function startAdd() {
        $scope.siteBox = '';
        setView('add');
    }

    function add() {
        $scope.sites.push($scope.siteBox);
        setView('list');
    }

    function startEdit(index) {
        selected = index;
        $scope.siteBox = $scope.sites[index];
        setView('edit');
    }

    function save() {
        $scope.sites[selected] = $scope.siteBox;
        setView('list');
    }

    function cancel() {
        setView('list');
    }

    function startRemove(index) {
        selected = index;
        setView('delete');
    }

    function remove() {
        $scope.sites.splice(selected, 1);
        setView('list');
    }

    function getSelected(index) {
        return sites[selected];
    }
};

angular.module('maintenance', [])
    .controller('siteEditCtrl', SiteEditCtrl);