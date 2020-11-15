var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BEUfX6N-O95qvEc0HDX7YAOWdFLyjYnO98TxWslpwbHxjVyn9fy8mz44POU4YeJCXkXGKyqpUxz_o-ODfPo05Wc",
    "privateKey": "RWSt-Klr5XKmwYXrKVyyIw1zyEP1Kj0FHQmW5MeVbXc"
};
 
 
webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/ft2vJQlF6YM:APA91bGgVXS691ZXbBfkqAnUr-0V10zmZtEit9oXU5kB3jm5INpwgOuqr7Kbvs9qBXJKw_dOVs-6IClvMMdw7jmMOxi08kbfpo-qc71YVgGmb1V_fApLMScDu8gyUHsXKyLsyv-hujhy",
    "keys": {
        "p256dh": "BCnovtC08In3pUH1NB8Ap1nMi+6z208cbIG2xiU9dhWjY76UJpkhiw+21Mg3DDgJEFabtV7Lg3k+ir7EF0ZwVUc=",
        "auth": "wUzpA0RiCJoxkdC0jXUn4Q=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '497463471206',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);