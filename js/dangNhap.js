$(document).ready(function() {
    // Xử lý form đăng nhập
    $('#loginForm').on('submit', function(e) {
        e.preventDefault();

        // Reset lỗi
        $('#errLoginEmail').text('');
        $('#errLoginPass').text('');
        $('#loginFail').addClass('d-none');

        let email = $('#loginEmail').val().trim();
        let password = $('#loginPassword').val();

        let valid = true;

        if (email === '') {
            $('#errLoginEmail').text('Vui lòng nhập email');
            valid = false;
        }

        if (password === '') {
            $('#errLoginPass').text('Vui lòng nhập mật khẩu');
            valid = false;
        }

        if (!valid) return;

        let storedEmail = localStorage.getItem('email');
        let storedPass = localStorage.getItem('password');
        let storedName = localStorage.getItem('name');

        if (email === storedEmail && password === storedPass) {
            // Tạo thông báo trạng thái dạng văn bản cho alert
            const statusMessage = `Đăng nhập thành công`;
            // Hiển thị JavaScript alert
            alert(statusMessage.trim());

            // Ẩn modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
            modal.hide();
        } else {
            $('#loginFail').removeClass('d-none');
        }
    });
});