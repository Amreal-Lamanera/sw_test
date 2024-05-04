const checkPermission = () => {
    if (!('serviceWorker' in navigator)) {
        throw new Error('Service worker non supportato!');
    }

    if (!('Notification' in window)) {
        throw new Error('No support for notification API');
    }

    if (Notification.permission === "denied") {
        alert("Notifications blocked. Please enable them in your browser. 2");
      }
    
    // console.log('OK');
};

const registerSW = async () => {
    const registration = await navigator.serviceWorker.register('sw.js');
    return registration;
};

const requestNotificationPermission = async () => {
    Notification.requestPermission();
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
        alert("Notifications blocked. Please enable them in your browser.");
        throw new Error('Notification permission not granted');
    }


    // window.Notification.permission = 'granted';
    console.log(Notification.permission);
    // else {
    //     new Notification("hello world!");
    // }
};

const main = async () => {
    checkPermission();
    const reg = await registerSW();
    // console.log(reg);
    reg.showNotification("Hello world!");
};

// requestNotificationPermission();

// main();

document.getElementById('test').addEventListener('click', () => {
    main();
});