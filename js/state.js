/* ============================================================
   state.js - 用户状态管理
   ============================================================ */

let _currentUser = null;
let _authListeners = [];

function getCurrentUser() {
    return _currentUser;
}

function setCurrentUser(user) {
    _currentUser = user || null;
    window.currentUser = _currentUser;
    
    // 通知所有监听器
    _authListeners.forEach(fn => {
        try { fn(_currentUser); } catch (e) { /* ignore */ }
    });
    
    // 触发 UI 更新
    if (typeof updateAuthUI === 'function') updateAuthUI();
    if (typeof updateAdminUI === 'function') updateAdminUI();
    if (typeof updateFufuAuthState === 'function') updateFufuAuthState();
    
    return _currentUser;
}

function onAuthChange(listener) {
    if (typeof listener === 'function') {
        _authListeners.push(listener);
    }
}

function getDeviceId() {
    let id = localStorage.getItem('fuunio_device_id');
    if (!id) {
        id = 'device_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('fuunio_device_id', id);
    }
    return id;
}

