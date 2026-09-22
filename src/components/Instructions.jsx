import React from 'react'
import './Instructions.css'

function Instructions({ onStartGame, onShowLeaderboard, onSignOut, userEmail, userNickname, isAnonymous, showLeaderboard }) {
  return (
    <div className="instructions">
      <div className="instructions-content">
        <h2>
          <span className="icon">💀</span>
          ota-legacy
          <span className="icon">💀</span>
        </h2>
        
        {userNickname && !isAnonymous && (
          <p className="user-info">🎮 Игрок: <strong className="nickname-display">{userNickname}</strong></p>
        )}
        
        {isAnonymous && (
          <p className="user-info anonymous">
            <span className="anonymous-badge">👤 Анонимный режим</span>
            <span className="anonymous-warning">Результат не будет сохранён</span>
          </p>
        )}
        
        <div className="tasks">
          <h3>📋 ЗАДАНИЯ:</h3>
          <div className="task">1️⃣ Перенеси 6 серверов из <span className="highlight-green">SELECTEL</span> в <span className="highlight-yellow">YANDEX</span></div>
          <div className="task">2️⃣ Уничтожь все серверы на улице (16 шт)</div>
          <div className="task">3️⃣ Зайди в <span className="highlight-blue">SALO OFFICE</span></div>
        </div>

        <div className="controls">
          <div className="control-group">
            <span className="key">↑</span>
            <span className="key">↓</span>
            <span className="key">←</span>
            <span className="key">→</span>
          </div>
          <div className="control-group">
            <span className="label">или</span>
            <span className="key">W</span>
            <span className="key">A</span>
            <span className="key">S</span>
            <span className="key">D</span>
          </div>
        </div>
        
        <div className="tips">
          <p>🧟 Избегай зомби и Нарине!</p>
          <p>🧟 Зубков - босс! Наносит 2 урона!</p>
          <p>🏢 Прячься в датацентрах</p>
          <p>🏥 Аптечки восстанавливают жизни</p>
          <p>🍺 Пей пиво для скорости, 💊 энтеросгель чтобы протрезветь</p>
          <p>💣 Пробел - поставить мину (3 секунды до взрыва)</p>
          <p>⚠️ Не попади в свой взрыв - мгновенная смерть!</p>
        </div>
        
        <button className="start-btn" onClick={onStartGame}>
          🚀 НАЧАТЬ ИГРУ
        </button>
        
        <div className="menu-actions">
          {!isAnonymous && (
            <button className="action-btn" onClick={onShowLeaderboard}>
              🏆 {showLeaderboard ? 'Скрыть рейтинг' : 'Показать рейтинг'}
            </button>
          )}
          <button className="action-btn exit" onClick={onSignOut}>
            {isAnonymous ? '🏠 Вернуться к входу' : '🚪 Выйти'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Instructions
