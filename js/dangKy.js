document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const phone = document.getElementById("phone").value.trim();

    // Reset lỗi
    document.querySelectorAll(".error").forEach(el => el.innerText = "");

    // Họ tên
    if (!/^([A-Z][a-zÀ-ỹ]*)(\s[A-Z][a-zÀ-ỹ]*)+$/.test(name)) {
        document.getElementById("errName").innerText = "Mỗi từ trong tên phải viết hoa chữ cái đầu";
        valid = false;
    }

    // Email
    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        document.getElementById("errEmail").innerText = "Email không hợp lệ";
        valid = false;
    }

    // Mật khẩu
    if (!/(?=.*[A-Za-z])(?=.*\d).{6,}/.test(pass)) {
        document.getElementById("errPass").innerText = "Mật khẩu phải chứa chữ, số và ít nhất 6 ký tự";
        valid = false;
    }

    // Nhập lại
    if (confirm !== pass) {
        document.getElementById("errConfirm").innerText = "Mật khẩu không khớp";
        valid = false;
    }

    // Số điện thoại
    if (!/^(09|03|07|06|05|04)\d{8}$/.test(phone)) {
        document.getElementById("errPhone").innerText = "Số điện thoại không hợp lệ";
        valid = false;
    }

    if (valid) {
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("phone", phone);
        localStorage.setItem("password", pass);
        alert("Đăng ký thành công! Mời bạn đăng nhập.");
        window.location.href = "bai5ghep.html";
    }
});