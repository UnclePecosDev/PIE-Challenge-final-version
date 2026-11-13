/* PIE CHALLENGE - Admin TEST MODE (not real authentication).
 * Static-site test convenience: any user with access to the public JS can inspect
 * the demo credentials. Remove before production or use a secure backend.
 * Important: The original player save is never written while testing.
 */
(() => {
  'use strict';
  const storageKey = 'pieChallengeAdminTest';
  const testUser = 'admin';
  const testPass = 'PIE2026';
  let collapsed = false;

  const header = document.querySelector('.topbar');
  const entry = document.createElement('button');
  entry.id = 'pieAdminEntry';
  entry.type = 'button';
  entry.className = 'pie-admin-entry';
  entry.textContent = '🛠 Admin';
  entry.title = 'Mode test (développement)';
  header.appendChild(entry);

  const markup = document.createElement('div');
  markup.innerHTML = `
    <div id="pieAdminLogin" class="pie-admin-login" hidden>
      <form id="pieAdminForm" class="pie-admin-login-card">
        <button type="button" class="pie-admin-x" id="pieAdminClose" aria-label="Fermer">×</button>
        <div class="pie-admin-login-icon">🛠️</div>
        <h2>MODE ADMIN TEST</h2>
        <p>Accès de démonstration pour tester les 7 niveaux rapidement.</p>
        <label for="pieAdminUsername">Utilisateur</label>
        <input id="pieAdminUsername" name="username" autocomplete="username" placeholder="Utilisateur" required>
        <label for="pieAdminPassword">Mot de passe</label>
        <input id="pieAdminPassword" name="password" type="password" autocomplete="current-password" placeholder="Mot de passe" required>
        <p id="pieAdminError" class="pie-admin-error" role="alert"></p>
        <button type="submit" class="pie-admin-primary">🚀 Entrer en mode test</button>
        <small>Compte de test local uniquement — pas une authentification sécurisée.</small>
      </form>
    </div>
    <aside id="pieAdminPanel" class="pie-admin-panel" hidden aria-label="Outils administrateur de test">
      <div class="pie-admin-panel-title">
        <strong>🛠 ADMIN TEST</strong>
        <button id="pieAdminCollapse" type="button" title="Réduire ou agrandir">−</button>
      </div>
      <div id="pieAdminPanelBody" class="pie-admin-panel-body">
        <div class="pie-admin-status" id="pieAdminStatus">Tous les niveaux débloqués — progrès non sauvegardés.</div>
        <label for="pieAdminLevelSelect">Aller au niveau</label>
        <div class="pie-admin-flex">
          <select id="pieAdminLevelSelect" aria-label="Choisir un niveau"></select>
          <button id="pieAdminOpen" type="button" class="pie-admin-primary">Ouvrir</button>
        </div>
        <div class="pie-admin-flex">
          <button id="pieAdminPrevious" type="button">← Question</button>
          <button id="pieAdminNext" type="button">Question →</button>
        </div>
        <div class="pie-admin-flex">
          <button id="pieAdminCorrect" type="button">✅ Correct</button>
          <button id="pieAdminWrong" type="button">❌ Wrong</button>
        </div>
        <button id="pieAdminFinish" type="button" class="pie-admin-primary pie-admin-full">🏆 Tester la fin du niveau</button>
        <button id="pieAdminLogout" type="button" class="pie-admin-logout pie-admin-full">🚪 Quitter le mode test</button>
        <p class="pie-admin-footnote">La progression réelle reste intacte. Niveaux 6 et 7 : contenu inchangé.</p>
      </div>
    </aside>`;
  document.body.appendChild(markup);
  const $ = id => document.getElementById(id);
  const modal = $('pieAdminLogin');
  const panel = $('pieAdminPanel');

  for (const level of levels) {
    const opt = document.createElement('option');
    opt.value = String(level.id - 1);
    opt.textContent = `${level.id} — ${level.title}`;
    $('pieAdminLevelSelect').appendChild(opt);
  }

  function refresh() {
    panel.hidden = !isAdminTest;
    entry.textContent = isAdminTest ? '🛠 Test actif' : '🛠 Admin';
    if (!isAdminTest) return;
    $('pieAdminLevelSelect').value = String(currentLevelIndex);
    const isExam = currentLevelIndex === 5;
    $('pieAdminPrevious').disabled = isExam;
    $('pieAdminNext').disabled = isExam;
    const count = activeQuestions.length || 0;
    $('pieAdminStatus').textContent = isExam
       ? 'Niveau 6 : examen original (iframe). Navigation question désactivée.'
       : `Niveau ${currentLevelIndex + 1} · Question ${currentQuestionIndex + 1}/${count} · progression réelle protégée`;
  }

  function enter() {
    isAdminTest = true;
    sessionStorage.setItem(storageKey, 'true');
    // Reload the REAL saved state as a clean base; admin changes remain memory-only.
    state = loadState();
    modal.hidden = true;
    $('pieAdminForm').reset();
    $('pieAdminError').textContent = '';
    window.PIEFX?.closeVictory();
    showView('levels');
    refresh();
  }

  function logout() {
    isAdminTest = false;
    sessionStorage.removeItem(storageKey);
    // Never persist the test-state, discard it completely.
    state = loadState();
    window.PIEFX?.closeVictory();
    currentLevelIndex = 0;
    currentQuestionIndex = 0;
    showView('levels');
    refresh();
  }

  function openLevel() {
    if (!isAdminTest) return;
    const index = Number($('pieAdminLevelSelect').value);
    if (!Number.isInteger(index) || index < 0 || index >= levels.length) return;
    window.PIEFX?.closeVictory();
    startLevel(index);
    refresh();
  }

  function jumpQuestion(delta) {
    if (!isAdminTest || currentLevelIndex === 5) return;
    window.PIEFX?.closeVictory();
    const total = activeQuestions.length;
    currentQuestionIndex = Math.max(0, Math.min(total - 1, currentQuestionIndex + delta));
    renderQuestion();
    showView('game');
    refresh();
  }

  function testFinish() {
    if (!isAdminTest) return;
    window.PIEFX?.closeVictory();
    finishLevel(); // No localStorage writes in admin mode.
    refresh();
  }

  entry.addEventListener('click', () => {
    if (isAdminTest) { collapsed = false; panel.classList.remove('collapsed'); refresh(); }
    else { modal.hidden = false; $('pieAdminUsername').focus(); }
  });
  $('pieAdminClose').addEventListener('click', () => { modal.hidden = true; });
  modal.addEventListener('click', evt => { if (evt.target === modal) modal.hidden = true; });
  document.addEventListener('keydown', evt => { if (evt.key === 'Escape' && !modal.hidden) modal.hidden = true; });
  $('pieAdminForm').addEventListener('submit', evt => {
    evt.preventDefault();
    const name = $('pieAdminUsername').value.trim();
    const pass = $('pieAdminPassword').value;
    if (name === testUser && pass === testPass) enter();
    else $('pieAdminError').textContent = 'Identifiant ou mot de passe incorrect.';
  });
  $('pieAdminCollapse').addEventListener('click', () => {
    collapsed = !collapsed;
    panel.classList.toggle('collapsed', collapsed);
    $('pieAdminCollapse').textContent = collapsed ? '+' : '−';
  });
  $('pieAdminOpen').addEventListener('click', openLevel);
  $('pieAdminPrevious').addEventListener('click', () => jumpQuestion(-1));
  $('pieAdminNext').addEventListener('click', () => jumpQuestion(1));
  $('pieAdminCorrect').addEventListener('click', () => window.PIEFX?.correct({points:0,message:'⚡ BRAVO ! Test visuel (0 pt)'}));
  $('pieAdminWrong').addEventListener('click', () => window.PIEFX?.wrong({message:'💥 OUPS ! Test visuel'}));
  $('pieAdminFinish').addEventListener('click', testFinish);
  $('pieAdminLogout').addEventListener('click', logout);
  if (isAdminTest) refresh();
  window.PIEADMIN = { refresh, enter, logout };
})();
