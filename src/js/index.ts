// this is entry point
if('serviceWorker' in navigator) {
    window.addEventListener('load', e => {
        navigator.serviceWorker
            .register('../sw.js')
            .then(registration => console.log(`ServiceWorker Registration Successful! \n\t scope: ${registration.scope}`))
            .catch(reason => console.log(`ServiceWorker Registration Error: ${reason}`));
    });
}