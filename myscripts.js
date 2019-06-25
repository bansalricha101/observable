 var button=document.querySelector('button');
    console.log("hello");
    Rx.Observable.fromEvent(button,'click')
    .subscribe(
    (value)=>console.log(value.clientX)
    );

    // var observable=Rx.Observable.interval(1000);
    // observable.filter(function(value){
    //     return value %2==0;
    // })
    // .subscribe({
    //     next:function(value){
    //         console.log("Number:-",value);
    //     },
    //     complete:function(value){
    //         console.log("completeed");
    //     }

    // })