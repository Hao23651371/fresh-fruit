/* layout.js - Shared header & footer for all pages (Nhom9 WebBanTraiCay) */
(function () {

    /* ============================================================
       HEADER HTML
       ============================================================ */
    var headerHTML = [
        '<nav class="navbar navbar-expand-lg fs-navbar sticky-top">',
        '  <div class="container">',
        '    <a class="navbar-brand" href="bai5ghep.html">',
        '      <i class="fa-solid fa-basket-shopping"></i> Fruit Store',
        '    </a>',
        '    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#fsNavbar">',
        '      <span class="navbar-toggler-icon"></span>',
        '    </button>',
        '    <div class="collapse navbar-collapse" id="fsNavbar">',
        '      <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-2">',
        '        <li class="nav-item"><a class="nav-link" href="bai5ghep.html" data-page="bai5ghep"><i class="fa-solid fa-house me-1"></i>Trang chủ</a></li>',
        '        <li class="nav-item"><a class="nav-link" href="gioithieudau.html" data-page="gioithieudau"><i class="fa-solid fa-circle-info me-1"></i>Giới Thiệu</a></li>',
        '        <li class="nav-item"><a class="nav-link" href="khuyenmai.html" data-page="khuyenmai"><i class="fa-solid fa-tag me-1"></i>Khuyến mãi</a></li>',
        '        <li class="nav-item"><a class="nav-link" href="tintuc.html" data-page="tintuc"><i class="fa-solid fa-newspaper me-1"></i>Tin Tức</a></li>',
        '        <li class="nav-item"><a class="nav-link" href="sitemap.html" data-page="sitemap"><i class="fa-solid fa-sitemap me-1"></i>SiteMap</a></li>',
        '      </ul>',
        '      <div class="d-flex align-items-center gap-2 flex-wrap py-1">',
        '        <form class="search-form" action="timkiem.html" method="GET">',
        '          <input type="text" name="query" class="search-input" placeholder="Tim san pham...">',
        '          <button type="submit" class="btn-search"><i class="fa-solid fa-magnifying-glass"></i></button>',
        '        </form>',
        '        <a href="#" class="btn-login" id="navLoginBtn" data-bs-toggle="modal" data-bs-target="#loginModal">',
        '          <i class="fa-regular fa-user me-1"></i><span id="navUserText">Dang nhap</span>',
        '        </a>',
        '        <a href="bai11.html" class="btn-cart position-relative" id="cartBtn">',
        '          <i class="fa-solid fa-bag-shopping me-1"></i>Gio hang',
        '          <span class="position-absolute badge rounded-pill bg-danger" id="cartCount" style="top:-6px;right:-6px;font-size:0.62rem;min-width:18px;height:18px;display:none;">0</span>',
        '        </a>',
        '      </div>',
        '    </div>',
        '  </div>',
        '</nav>',

        /* Login modal */
        '<div class="modal fade" id="loginModal" tabindex="-1">',
        '  <div class="modal-dialog modal-dialog-centered">',
        '    <div class="modal-content">',
        '      <form id="loginForm">',
        '        <div class="modal-header">',
        '          <h5 class="modal-title fw-bold">',
        '            <i class="fa-solid fa-lock me-2"></i>Dang nhap thanh vien',
        '          </h5>',
        '          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>',
        '        </div>',
        '        <div class="modal-body p-4">',
        '          <div class="mb-3">',
        '            <label class="form-label fw-medium"><i class="fa-regular fa-envelope me-1 text-success"></i> Email</label>',
        '            <input type="email" class="form-control" id="loginEmail" placeholder="your@email.com">',
        '            <div class="error mt-1" id="errLoginEmail"></div>',
        '          </div>',
        '          <div class="mb-3">',
        '            <label class="form-label fw-medium"><i class="fa-solid fa-key me-1 text-success"></i> Mat khau</label>',
        '            <div class="input-group">',
        '              <input type="password" class="form-control" id="loginPassword" placeholder="••••••••">',
        '              <button type="button" class="btn btn-outline-secondary" id="togglePass" tabindex="-1">',
        '                <i class="fa-regular fa-eye"></i>',
        '              </button>',
        '            </div>',
        '            <div class="error mt-1" id="errLoginPass"></div>',
        '          </div>',
        '          <div class="alert alert-danger d-none mb-2 py-2" id="loginFail">',
        '            <i class="fa-solid fa-triangle-exclamation me-1"></i> Email hoac mat khau khong dung',
        '          </div>',
        '          <p class="text-center mb-0" style="font-size:0.9rem;">',
        '            Chua co tai khoan? <a href="dktv.html" class="fw-semibold text-success">Dang ky ngay</a>',
        '          </p>',
        '        </div>',
        '        <div class="modal-footer border-0 px-4 pb-4 pt-0">',
        '          <button type="submit" class="btn btn-success w-100 py-2 fw-semibold">',
        '            <i class="fa-solid fa-right-to-bracket me-1"></i> Dang nhap',
        '          </button>',
        '        </div>',
        '      </form>',
        '    </div>',
        '  </div>',
        '</div>'
    ].join('\n');

    /* ============================================================
       FOOTER HTML
       ============================================================ */
    var footerHTML = [
        '<footer class="fs-footer">',
        '  <div class="container">',
        '    <div class="row g-4">',
        '      <div class="col-md-3 col-sm-6">',
        '        <h5><i class="fa-solid fa-basket-shopping me-2" style="color:#ffd700"></i>Fruit Store</h5>',
        '        <p>Cung cap trai cay tuoi ngon, sach se, chat luong cao voi gia tot nhat - giao hang nhanh den tan tay ban.</p>',
        '        <div class="d-flex gap-2 mt-2">',
        '          <a href="#" class="social-btn" onclick="return false;" title="Facebook"><i class="fab fa-facebook-f"></i></a>',
        '          <a href="#" class="social-btn" onclick="return false;" title="Twitter"><i class="fab fa-twitter"></i></a>',
        '          <a href="#" class="social-btn" onclick="return false;" title="Instagram"><i class="fab fa-instagram"></i></a>',
        '          <a href="#" class="social-btn" onclick="return false;" title="YouTube"><i class="fab fa-youtube"></i></a>',
        '        </div>',
        '      </div>',
        '      <div class="col-md-3 col-sm-6">',
        '        <h6><i class="fa-solid fa-address-book me-2"></i>Thong tin lien he</h6>',
        '        <p><i class="fa-solid fa-location-dot me-2"></i>123 Duong Trai Cay, TP. HCM</p>',
        '        <p><i class="fa-solid fa-phone me-2"></i>0123 456 789</p>',
        '        <p><i class="fa-solid fa-envelope me-2"></i>lienhe@traicaytuoi.vn</p>',
        '        <p><i class="fa-solid fa-clock me-2"></i>8:00 - 20:00 (T2 - CN)</p>',
        '      </div>',
        '      <div class="col-md-3 col-sm-6">',
        '        <h6><i class="fa-solid fa-list-check me-2"></i>Chinh sach</h6>',
        '        <a href="#" class="footer-link" onclick="return false;">Chinh sach giao hang</a>',
        '        <a href="#" class="footer-link" onclick="return false;">Chinh sach doi/tra hang</a>',
        '        <a href="#" class="footer-link" onclick="return false;">Bao mat thong tin</a>',
        '        <a href="#" class="footer-link" onclick="return false;">Dieu khoan su dung</a>',
        '      </div>',
        '      <div class="col-md-3 col-sm-6">',
        '        <h6><i class="fa-solid fa-link me-2"></i>Lien ket nhanh</h6>',
        '        <a href="bai5ghep.html" class="footer-link">Trang chu</a>',
        '        <a href="gioithieudau.html" class="footer-link">Gioi thieu</a>',
        '        <a href="khuyenmai.html" class="footer-link">Khuyen mai</a>',
        '        <a href="tintuc.html" class="footer-link">Tin tuc</a>',
        '        <a href="dktv.html" class="footer-link">Dang ky thanh vien</a>',
        '      </div>',
        '    </div>',
        '  </div>',
        '  <div class="footer-bottom">',
        '    <div class="container">',
        '      <span>&copy; 2025 Fruit Store. All rights reserved. | Nhom 9 - Web Ban Trai Cay</span>',
        '    </div>',
        '  </div>',
        '</footer>'
    ].join('\n');

    /* ============================================================
       INJECT
       ============================================================ */
    var headerEl = document.getElementById('header-placeholder');
    if (headerEl) headerEl.outerHTML = headerHTML;

    var footerEl = document.getElementById('footer-placeholder');
    if (footerEl) footerEl.outerHTML = footerHTML;

    /* ============================================================
       CART COUNT
       ============================================================ */
    function updateCartCount() {
        var cart = JSON.parse(localStorage.getItem('cart') || '[]');
        var count = cart.reduce(function (s, i) { return s + (parseInt(i.quantity) || 0); }, 0);
        var badge = document.getElementById('cartCount');
        if (!badge) return;
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }

    /* ============================================================
       ACTIVE NAV LINK
       ============================================================ */
    function setActiveNav() {
        var page = window.location.pathname.split('/').pop().replace('.html', '');
        document.querySelectorAll('.fs-navbar .nav-link[data-page]').forEach(function (link) {
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });
    }

    /* ============================================================
       LOGIN STATE (show name / logout)
       ============================================================ */
    function updateLoginState() {
        var name = localStorage.getItem('name');
        var textEl = document.getElementById('navUserText');
        var btn = document.getElementById('navLoginBtn');
        if (!name || !textEl || !btn) return;

        var shortName = name.trim().split(' ').pop();
        textEl.textContent = shortName;
        var icon = btn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-user-check me-1';

        btn.removeAttribute('data-bs-toggle');
        btn.removeAttribute('data-bs-target');
        btn.onclick = function (e) {
            e.preventDefault();
            if (confirm('Ban co muon dang xuat khong?')) {
                localStorage.removeItem('name');
                localStorage.removeItem('email');
                localStorage.removeItem('phone');
                localStorage.removeItem('password');
                window.location.reload();
            }
        };
    }

    /* ============================================================
       LOGIN FORM
       ============================================================ */
    function initLoginForm() {
        var form = document.getElementById('loginForm');
        if (!form) return;

        /* Toggle password visibility */
        var toggleBtn = document.getElementById('togglePass');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function () {
                var passEl = document.getElementById('loginPassword');
                var icon = this.querySelector('i');
                if (passEl.type === 'password') {
                    passEl.type = 'text';
                    icon.className = 'fa-regular fa-eye-slash';
                } else {
                    passEl.type = 'password';
                    icon.className = 'fa-regular fa-eye';
                }
            });
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            var emailEl    = document.getElementById('loginEmail');
            var passEl     = document.getElementById('loginPassword');
            var errEmail   = document.getElementById('errLoginEmail');
            var errPass    = document.getElementById('errLoginPass');
            var loginFail  = document.getElementById('loginFail');

            if (errEmail)  errEmail.textContent  = '';
            if (errPass)   errPass.textContent   = '';
            if (loginFail) loginFail.classList.add('d-none');

            var email = emailEl ? emailEl.value.trim() : '';
            var pass  = passEl  ? passEl.value         : '';
            var valid = true;

            if (!email) {
                if (errEmail) errEmail.textContent = 'Vui long nhap email';
                valid = false;
            }
            if (!pass) {
                if (errPass) errPass.textContent = 'Vui long nhap mat khau';
                valid = false;
            }
            if (!valid) return;

            var storedEmail = localStorage.getItem('email');
            var storedPass  = localStorage.getItem('password');
            var storedName  = localStorage.getItem('name');

            if (email === storedEmail && pass === storedPass) {
                var modalEl = document.getElementById('loginModal');
                if (modalEl && window.bootstrap) {
                    var modal = bootstrap.Modal.getInstance(modalEl);
                    if (modal) modal.hide();
                }
                alert('Dang nhap thanh cong! Xin chao ' + (storedName || email));
                window.location.reload();
            } else {
                if (loginFail) loginFail.classList.remove('d-none');
            }
        });
    }

    /* ============================================================
       RUN
       ============================================================ */
    updateCartCount();
    setActiveNav();
    updateLoginState();
    initLoginForm();

})();
