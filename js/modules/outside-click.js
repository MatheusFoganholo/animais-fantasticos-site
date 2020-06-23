export default function outsideClick(element, events, callback) {
    // Selecting the global document (html) and creating a shortcut to facility the understanding das funções.
    const html = document.documentElement;
    const outside = 'data-outside';

    // If clicked element hasn't 'data-outside' attribute, it will add.
    if(!element.hasAttribute(outside)) {
        events.forEach(userEvent => {
            html.addEventListener(userEvent, handleOutsideClick);
        })
        element.setAttribute(outside, '');
    }

    // If clicked element do not contains the event target, it will prevent the event to continue firing
    function handleOutsideClick(event) {
        if(!element.contains(event.target)){
            element.removeAttribute(outside);
            events.forEach(userEvent => {
                html.removeEventListener(userEvent, handleOutsideClick);
            })
            callback();
        }
    }
}