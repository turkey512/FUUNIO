/* ============================================================
   auth.js - 登录/注册/登出
   ============================================================ */

let authMode = 'login'; // 'login' | 'signup'

async function initAuth() {
    if (!isSupabaseReady) {
        console.warn('⚠️ Supabase 未配置，Auth 功能不可用');
        if (typeof updateAuthUI === 'function') updateAuthUI();
        return;
    }
    
    try {
        const { data, error } = await supabaseClient.auth.getSession();
        if (error) throw error;
        
        setCurrentUser(data?.session?.user || null);
        
        supabaseClient.auth.onAuthStateChange((event, session) => {
            const user = session?.user || null;
            setCurrentUser(user);
            
            if (event === 'SIGNED_IN') {
                showAuthMessage('登录成功！🎉', 'success');
                setTimeout(closeAuthModal, 800);
            }
            if (event === 'SIGNED_OUT') {
                showAuthMessage('已退出登录', '');
            }
            if (event === 'USER_UPDATED') {
                showAuthMessage('用户信息已更新', 'success');
            }
        });
        
        console.log('✅ Auth 初始化成功');
    } catch (err) {
        console.warn('Auth 初始化失败:', err.message);
    }
}

async function handleAuthSubmit(e) {
    e.preventDefault();
    
    if (!isSupabaseReady) {
        showAuthMessage('Supabase 未配置，请检查网络', 'error');
        return;
    }
    
    const emailEl = document.getElementById('authEmail');
    const passwordEl = document.getElementById('authPassword');
    const submitBtn = document.getElementById('authSubmitBtn');
    
    const email = emailEl?.value?.trim();
    const password = passwordEl?.value;
    
    // 验证
    if (!email || !password) {
        showAuthMessage('请填写邮箱和密码', 'error');
        return;
    }
    if (password.length < 6) {
        showAuthMessage('密码至少 6 位', 'error');
        return;
    }
    if (!email.includes('@') || !email.includes('.')) {
        showAuthMessage('请输入有效的邮箱地址', 'error');
        return;
    }
    
    submitBtn.disabled = true;
    submitBtn.textContent = '处理中...';
    showAuthMessage('', '');
    
    try {
        let result;
        
        if (authMode === 'signup') {
            // ===== 注册 =====
            result = await supabaseClient.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: window.location.origin
                }
            });
            
            if (result.error) {
                if (result.error.message.includes('User already registered')) {
                    showAuthMessage('该邮箱已注册，请直接登录', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = '登录';
                    return;
                }
                if (result.error.message.includes('Password should be at least 6 characters')) {
                    showAuthMessage('密码至少需要 6 位', 'error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = '注册';
                    return;
                }
                throw result.error;
            }
            
            const user = result.data?.user;
            const needsConfirmation = user?.identities?.length === 0;
            
            if (needsConfirmation) {
                showAuthMessage('✅ 注册成功！请查收邮件并点击确认链接。', 'success');
                submitBtn.disabled = false;
                submitBtn.textContent = '注册';
                setTimeout(() => {
                    setAuthMode('login');
                    showAuthMessage('请登录', '');
                }, 3000);
                return;
            }
            
            // 自动登录
            const { data: signInData, error: signInError } = 
                await supabaseClient.auth.signInWithPassword({ email, password });
            
            if (signInError) {
                showAuthMessage('注册成功，请手动登录', 'success');
                setAuthMode('login');
                submitBtn.disabled = false;
                submitBtn.textContent = '登录';
                return;
            }
            
            setCurrentUser(signInData.user);
            showAuthMessage('注册并登录成功！🎉', 'success');
            setTimeout(closeAuthModal, 800);
            
        } else {
            // ===== 登录 =====
            result = await supabaseClient.auth.signInWithPassword({
                email,
                password
            });
            
            if (result.error) {
                if (result.error.message.includes('Invalid login credentials')) {
                    showAuthMessage('❌ 邮箱或密码错误，请重试', 'error');
                } else if (result.error.message.includes('Email not confirmed')) {
                    showAuthMessage('📧 请先点击邮件中的确认链接完成注册', 'error');
                } else {
                    throw result.error;
                }
                submitBtn.disabled = false;
                submitBtn.textContent = '登录';
                return;
            }
            
            setCurrentUser(result.data.user);
            showAuthMessage('登录成功！🎉', 'success');
            setTimeout(closeAuthModal, 800);
        }
        
    } catch (err) {
        console.error('Auth error:', err);
        showAuthMessage(err.message || '操作失败，请重试', 'error');
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = authMode === 'signup' ? '注册' : '登录';
    }
}

async function signOutUser() {
    if (!isSupabaseReady) return;
    
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
        setCurrentUser(null);
        showAuthMessage('已退出登录', 'success');
        closeAuthModal();
    } catch (err) {
        showAuthMessage(err.message || '退出失败，请重试', 'error');
    }
}

function setAuthMode(mode) {
    authMode = mode === 'signup' ? 'signup' : 'login';
    
    const loginTab = document.getElementById('authLoginTab');
    const signupTab = document.getElementById('authSignupTab');
    const submitBtn = document.getElementById('authSubmitBtn');
    const title = document.getElementById('authTitle');
    
    if (loginTab) loginTab.classList.toggle('active', authMode === 'login');
    if (signupTab) signupTab.classList.toggle('active', authMode === 'signup');
    if (submitBtn) submitBtn.textContent = authMode === 'signup' ? '注册' : '登录';
    if (title) title.textContent = authMode === 'signup' ? '注册账号' : '账号登录';
    
    showAuthMessage('', '');
}

function showAuthMessage(message, type = '') {
    const el = document.getElementById('authMessage');
    if (!el) return;
    el.textContent = message || '';
    el.className = `auth-message ${type}`.trim();
}

function updateAuthUI() {
    const user = getCurrentUser();
    const isLoggedIn = Boolean(user);
    
    const navBtn = document.getElementById('authNavBtn');
    const navText = document.getElementById('authNavText');
    if (navText) navText.textContent = isLoggedIn ? '账号' : '登录';
    if (navBtn) {
        navBtn.classList.toggle('signed-in', isLoggedIn);
        navBtn.setAttribute('aria-label', isLoggedIn ? '账号' : '登录');
        navBtn.setAttribute('title', isLoggedIn ? '账号' : '登录');
    }
    
    const title = document.getElementById('authTitle');
    if (title) title.textContent = isLoggedIn ? '账号' : (authMode === 'signup' ? '注册账号' : '账号登录');
    
    const signedIn = document.getElementById('authSignedIn');
    const guestPanel = document.getElementById('authGuestPanel');
    if (signedIn) signedIn.classList.toggle('active', isLoggedIn);
    if (guestPanel) guestPanel.style.display = isLoggedIn ? 'none' : 'block';
    
    if (isLoggedIn && user?.email) {
        const emailEl = document.getElementById('authUserEmail');
        if (emailEl) emailEl.textContent = user.email;
    }
}

function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    updateAuthUI();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    if (!getCurrentUser()) {
        setTimeout(() => document.getElementById('authEmail')?.focus(), 100);
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    showAuthMessage('', '');
}

function updateAdminUI() {
    const btn = document.getElementById('adminStatsBtn');
    const user = getCurrentUser();
    const isAdmin = Boolean(user && user.email && user.email.toLowerCase() === ADMIN_EMAIL);
    if (btn) btn.style.display = isAdmin ? 'inline-flex' : 'none';
    if (!isAdmin && typeof closeStatsPanel === 'function') closeStatsPanel();
}

