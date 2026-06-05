'use strict';

/* ═══════════════════════════════════════════════════
   AUTH.JS — Session, login, registration, logout
   Used exclusively by login.html
═══════════════════════════════════════════════════ */

const SESSION_KEY = 'bc_session';
const USERS_KEY   = 'bc_users';
const SESSION_TTL = 7 * 24 * 60 * 60 * 1000; // 7 days
const EMAIL_RE    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ── All DOM references up front ── */
const authContainer     = document.getElementById('authContainer');
const chatSection       = document.getElementById('chatSection');
const formAlert         = document.getElementById('formAlert');
const alertText         = document.getElementById('alertText');
const loginTab          = document.getElementById('loginTab');
const registerTab       = document.getElementById('registerTab');
const loginForm         = document.getElementById('loginForm');
const registerForm      = document.getElementById('registerForm');
const authHelpText      = document.getElementById('authHelpText');
const loginEmailEl      = document.getElementById('login-email');
const loginPasswordEl   = document.getElementById('login-password');
const loginEmailHint    = document.getElementById('loginEmailHint');
const loginPasswordHint = document.getElementById('loginPasswordHint');
const loginSubmitBtn    = document.getElementById('loginSubmitBtn');
const regNameEl         = document.getElementById('register-name');
const regEmailEl        = document.getElementById('register-email');
const regPwEl           = document.getElementById('register-password');
const regConfirmEl      = document.getElementById('register-confirm');
const regNameHint       = document.getElementById('registerNameHint');
const regEmailHint      = document.getElementById('registerEmailHint');
const regPwHint         = document.getElementById('registerPwHint');
const regMatchHint      = document.getElementById('registerMatchHint');
const registerSubmitBtn = document.getElementById('registerSubmitBtn');
const logoutBtn         = document.getElementById('logoutBtn');

/* ── Session helpers ── */
function getSession() {
  try {
    const s = JSON.parse(localStorage.getItem(SESSION_KEY));
    if (s && s.expiresAt > Date.now()) return s;
  } catch (_) {}
  return null;
}

function setSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    userId:    user.userId,
    name:      user.name,
    email:     user.email,
    expiresAt: Date.now() + SESSION_TTL
  }));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; }
  catch (_) { return []; }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/* ── Alert helpers ── */
function showAlert(msg, type) {
  formAlert.className = 'alert ' + type + ' visible';
  alertText.textContent = msg;
}

function clearAlert() {
  formAlert.className = 'alert error';
  alertText.textContent = '';
}

/* ── Input validation helpers ── */
function markInvalid(input, hintEl) {
  input.classList.add('error');
  if (hintEl) hintEl.classList.add('visible');
}

function clearInvalid(input, hintEl) {
  input.classList.remove('error');
  if (hintEl) hintEl.classList.remove('visible');
}

/* ── Button state helpers ── */
function setLoading(btn, label) {
  btn.dataset.originalText = btn.textContent;
  btn.textContent = label;
  btn.disabled = true;
}

function setIdle(btn) {
  if (!btn) return;
  btn.textContent = btn.dataset.originalText || btn.textContent;
  btn.disabled = false;
}

/* ── View switching ── */
function showChatSection() {
  authContainer.classList.add('hidden');
  chatSection.classList.remove('hidden');
}

function showAuthSection() {
  chatSection.classList.add('hidden');
  authContainer.classList.remove('hidden');

  /* Reset both forms and button states */
  loginForm.reset();
  registerForm.reset();
  setIdle(loginSubmitBtn);
  setIdle(registerSubmitBtn);

  /* Clear any error states on all inputs */
  [loginEmailEl, loginPasswordEl, regNameEl, regEmailEl, regPwEl, regConfirmEl].forEach(function (el) {
    el.classList.remove('error');
  });
  [loginEmailHint, loginPasswordHint, regNameHint, regEmailHint, regPwHint, regMatchHint].forEach(function (el) {
    el.classList.remove('visible');
  });

  switchTab('login');
  clearAlert();
}

/* ── Tab switching ── */
function switchTab(tab) {
  const isLogin = (tab === 'login');
  loginTab.classList.toggle('active', isLogin);
  registerTab.classList.toggle('active', !isLogin);
  /* toggle(class, true) adds it; toggle(class, false) removes it */
  loginForm.classList.toggle('hidden', !isLogin);
  registerForm.classList.toggle('hidden', isLogin);
  authHelpText.textContent = isLogin
    ? "Don't have an account yet? Create a new profile to access the chatbot."
    : 'Already have an account? Switch to Login above.';
  clearAlert();
}

loginTab.addEventListener('click',    function () { switchTab('login'); });
registerTab.addEventListener('click', function () { switchTab('register'); });

/* ── Password visibility toggles ── */
function bindPasswordToggle(btn, input, svgIcon) {
  if (!btn || !input) return;
  btn.addEventListener('click', function () {
    const showing = input.type === 'text';
    input.type = showing ? 'password' : 'text';
    if (svgIcon) {
      svgIcon.innerHTML = showing
        /* eye (closed → show password) */
        ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>'
        /* eye-off (open → hide password) */
        : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"></path><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
    }
  });
}

bindPasswordToggle(
  document.getElementById('pwToggle'),
  loginPasswordEl,
  document.getElementById('eyeIcon')
);
bindPasswordToggle(
  document.getElementById('pwToggle2'),
  regPwEl,
  document.getElementById('eyeIcon2')
);
bindPasswordToggle(
  document.getElementById('pwToggle3'),
  regConfirmEl,
  document.getElementById('eyeIcon3')
);

/* ── Real-time error clearing ── */
loginEmailEl.addEventListener('input',    function () { clearInvalid(loginEmailEl, loginEmailHint); });
loginPasswordEl.addEventListener('input', function () { clearInvalid(loginPasswordEl, loginPasswordHint); });
regNameEl.addEventListener('input',    function () { clearInvalid(regNameEl, regNameHint); });
regEmailEl.addEventListener('input',   function () { clearInvalid(regEmailEl, regEmailHint); });
regPwEl.addEventListener('input',      function () { clearInvalid(regPwEl, regPwHint); });
regConfirmEl.addEventListener('input', function () { clearInvalid(regConfirmEl, regMatchHint); });

/* ── Login form ── */
loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  clearAlert();

  const email    = loginEmailEl.value.trim();
  const password = loginPasswordEl.value;
  let valid = true;

  if (!email || !email.includes('@')) { markInvalid(loginEmailEl, loginEmailHint); valid = false; }
  if (!password)                      { markInvalid(loginPasswordEl, loginPasswordHint); valid = false; }

  if (!valid) {
    showAlert('Please fill in all fields.', 'error');
    return;
  }

  setLoading(loginSubmitBtn, 'Signing in…');

  setTimeout(function () {
    const users = getUsers();
    const user  = users.find(function (u) {
      return u.email.toLowerCase() === email.toLowerCase() && u.password === password;
    });

    if (!user) {
      setIdle(loginSubmitBtn);
      markInvalid(loginEmailEl, null);
      markInvalid(loginPasswordEl, null);
      showAlert('Incorrect email or password. Please try again.', 'error');
      return;
    }

    setSession(user);
    showAlert('Login successful! Opening chatbot…', 'success');

    /* Re-enable button BEFORE transitioning so it's in a clean state on next logout */
    setIdle(loginSubmitBtn);

    setTimeout(function () { showChatSection(); }, 800);
  }, 400);
});

/* ── Register form ── */
registerForm.addEventListener('submit', function (e) {
  e.preventDefault();
  clearAlert();

  const name    = regNameEl.value.trim();
  const email   = regEmailEl.value.trim();
  const password = regPwEl.value;
  const confirm  = regConfirmEl.value;
  let valid = true;

  if (!name)                   { markInvalid(regNameEl, regNameHint);     valid = false; }
  if (!EMAIL_RE.test(email))   { markInvalid(regEmailEl, regEmailHint);   valid = false; }
  if (password.length < 8)     { markInvalid(regPwEl, regPwHint);         valid = false; }
  if (password !== confirm)    { markInvalid(regConfirmEl, regMatchHint); valid = false; }

  if (!valid) {
    showAlert('Please correct the highlighted fields.', 'error');
    return;
  }

  setLoading(registerSubmitBtn, 'Creating account…');

  setTimeout(function () {
    const users  = getUsers();
    const exists = users.some(function (u) {
      return u.email.toLowerCase() === email.toLowerCase();
    });

    if (exists) {
      setIdle(registerSubmitBtn);
      markInvalid(regEmailEl, regEmailHint);
      showAlert('An account with that email already exists. Please log in.', 'error');
      return;
    }

    users.push({ userId: 'u_' + Date.now(), name: name, email: email, password: password });
    saveUsers(users);

    setIdle(registerSubmitBtn);
    showAlert('Profile created! Please log in now.', 'success');

    setTimeout(function () {
      switchTab('login');
      loginEmailEl.value = email;
    }, 1500);
  }, 400);
});

/* ── Logout ── */
if (logoutBtn) {
  logoutBtn.addEventListener('click', function () {
    clearSession();
    showAuthSection();
  });
}

/* ── Boot: restore session or show auth ── */
if (getSession()) {
  showChatSection();
}
