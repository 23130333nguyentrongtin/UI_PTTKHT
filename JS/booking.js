const form = document.getElementById("form-checkout");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Đặt phòng thành công!");
    window.location.href = "home.html";
});