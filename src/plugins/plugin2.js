import Core from '@/core/index';

let plugin2 = function(){
    // TODO
    // do something
    console.log('plugin2 do something');

    this.on('event', ()=>{
        // TODO
    })

    this.once('destroy', ()=>{
        // TODO
    })
}

Core.install('plugin2', plugin2);