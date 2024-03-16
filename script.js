let now = new Date();

//Yıl
let yil = now.getFullYear();
let startOfYear = new Date(now.getFullYear(), 0, 1);
let endOfYear = new Date(now.getFullYear(), 3, 6); // 6 Nisan
let yearLength = endOfYear - startOfYear;
let progress = now - startOfYear;
let percentage = ((progress / yearLength) * 100).toFixed(2);
let progressText = document.querySelector('.progress-value');
let progressBar = document.querySelector('.progress');
progressText.innerHTML = percentage + '%';
progressBar.style.width = percentage + '%';
let daysLeft = Math.ceil((endOfYear - now) / (1000 * 60 * 60 * 24));
document.querySelector('.days-left').innerText = daysLeft;

