const alertMessage = document.querySelector('.alert');
const alertDIV = document.querySelector('#alert');
const bellIcon = document.querySelector('.notification-mark svg');
const notdiv = document.querySelector('.notification-div');

const user = document.getElementById("messenge");
const message = document.getElementById("textarea");
const send = document.getElementById("send");



alertDIV.innerHTML = `<div class="dashboard-alert">
<p>Alert: You have unreaded messages</p>
<span class="dashboard-alert-esc">x</span>
</div>`;

bellIcon.addEventListener("click", (e) => {
    const notifications = document.querySelector('.notification-div');
    const iconColor = document.querySelector('.svg-line');
    if (notifications.innerHTML === '') {
        const greenMark = document.querySelector('.notification-mark .badge');
        iconColor.setAttribute("fill", "#E5E0E0")
        greenMark.remove()
        notifications.innerHTML = `
            <ul class="notification">
            <li><span class="ul-badge"></span> You have 6 unread message <span class="dashboard-alert-esc">x</span></li>
            <li><span class="ul-badge"></span> You have 3 new followers <span class="dashboard-alert-esc">x</span></li>
            <li><span class="ul-badge"></span> Your password will expire in 7 days <span class="dashboard-alert-esc">x</span></li>
            </ul>
            `;
    } else if (notifications.style.display === 'none') {
        notifications.style.display = '';
        iconColor.setAttribute("fill", "#E5E0E0")
    } else {
        notifications.style.display = 'none';
        iconColor.setAttribute("fill", "white")
    }
});

notdiv.addEventListener('click', (e) => {
    const span = e.target
    if (span.className === 'dashboard-alert-esc') {
        span.parentNode.remove()

    }
});

alertDIV.addEventListener('click', (e) => {
    escButton = e.target
    if (escButton.tagName === 'SPAN') {
        escButton.parentNode.remove();
    }
})

send.addEventListener('click', (e) => {
    e.preventDefault()

    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }

})