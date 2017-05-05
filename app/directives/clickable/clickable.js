nevApp.directive('clickable', function () {
    return {
        restrict: 'A',
        scope: {
            clickable: "="
        },
        link: function (scope, elem, attrs) {
            // elem[].bind('click', function () {
            //     

            // });
            elem[0].addEventListener('click', function () {
                console.log('clicked');
                this.classList.toggle('is-selected')
            })
        }
    }
});