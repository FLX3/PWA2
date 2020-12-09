if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/PWA2/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    addBtn.style.display = 'none';
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted');
        } else {
          console.log('User dismissed');
        }
        deferredPrompt = null;
      });
  });
});

function powiadomienie() {
            if (!("Notification" in window)) {
                alert("Ta przeglądarka nie obsługuje powiadomień");
            }else if (Notification.permission === "granted") {
                var notification = new Notification('Powiadomienie!', {
                    body: 'Jakis tekst!'  });
            }else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    if (permission === "granted") {
                        var notification = new Notification('Powiadomienie!', {
                            body: 'Jakis tekst!'  });
                    }
                });
            }
        }
