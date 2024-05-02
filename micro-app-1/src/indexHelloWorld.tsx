import ReactDOM from 'react-dom/client';
import HelloWorld from './HelloWorld';


export const mount = (el: Element):void => {
    ReactDOM.createRoot(el).render(<HelloWorld/>)
}