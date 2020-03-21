import Core from '@/core/index';

let plugin1 = function(){
    // TODO
    // do something
    console.log('plugin1 do something');

    this.on('event', ()=>{
        // TODO
    })

    this.once('destroy', ()=>{
        // TODO
    })
}

Core.install('plugin1', plugin1);