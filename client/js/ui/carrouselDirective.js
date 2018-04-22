//Directiva para armar el carrousel.
app.directive('carrousel', function ()
{
    return {
                restrict: 'E',
                transclude: true,
                controller:function()
                {
                    this.index  =0  ;                
                    this.sig = ()=>{
                        this.index++;
                    };

                    this.prev = ()=>{
                        if (this.index>0)
                            this.index--;
                    };                    
                },
                controllerAs:'cc',                
                scope:{
                            bindModel:'=ngModel'
                      },
                templateUrl: './html/carrousel.html'
            };
});