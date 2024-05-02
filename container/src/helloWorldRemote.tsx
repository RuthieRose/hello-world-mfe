import { useEffect, useRef } from 'react';
import { mount } from 'helloworld/HelloWorld';


const HelloWorldRemote = ():JSX.Element => {

    const helloWorldDiv = useRef<HTMLDivElement | null>(null);

    useEffect( () => {
        mount(helloWorldDiv.current)
    }, [])

    return (<div ref={helloWorldDiv}></div>)
}

export default HelloWorldRemote;