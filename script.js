/* Общие стили */
body, html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

/* Стена с текстурой, созданной градиентом */
#wall {
    width: 100%;
    height: 100%;
    background-color: #4a4a4a;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.1) 75%),
                      linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 25%, transparent 25%, transparent 75%, rgba(0, 0, 0, 0.1) 75%);
    background-size: 6px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

/* Скрытое сообщение */
#message {
    font-family: 'Caveat', cursive;
    font-size: 15vw;
    color: #ffdd77;
    text-shadow: 0 0 15px rgba(255, 165, 0, 0.8), 0 0 25px rgba(255, 165, 0, 0.6);
    -webkit-mask-image: none; /* Управляется через JS */
    mask-image: none;
    text-align: center;
}

/* --- Рисуем зажигалку с помощью CSS --- */
#lighter {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 75px;
    cursor: grab;
    z-index: 10;
    transition: transform 0.2s;
}

#lighter:active {
    cursor: grabbing;
    transform: translateX(-50%) scale(1.1);
}

.lighter-body {
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, #c0c0c0, #e0e0e0, #c0c0c0);
    border: 1px solid #888;
    border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
}

.lighter-top {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 12px;
    background: linear-gradient(to right, #a0a0a0, #d0d0d0, #a0a0a0);
    border: 1px solid #666;
    border-radius: 3px;
}

.wheel {
    position: absolute;
    top: -10px;
    right: 3px;
    width: 12px;
    height: 12px;
    background: repeating-linear-gradient(45deg, #888, #888 1px, #bbb 1px, #bbb 2px);
    border-radius: 50%;
    border: 1px solid #555;
}

/* --- Рисуем и анимируем пламя --- */
#flame {
    position: absolute;
    top: -55px;
    left: 50%;
    width: 20px;
    height: 50px;
    background: radial-gradient(circle at 50% 100%, #ffffff 0%, #ffeea8 20%, #ffc500 60%, rgba(255, 100, 0, 0) 100%);
    border-radius: 50% 50% 20% 20% / 60% 60% 40% 40%;
    transform-origin: bottom center;
    transform: translateX(-50%);
    filter: blur(3px);
    animation: flicker 1.5s infinite linear;
}

@keyframes flicker {
    0%, 100% { transform: translateX(-50%) scale(1, 1); opacity: 1; }
    25% { transform: translateX(-45%) scale(0.95, 1.05); opacity: 0.9; }
    50% { transform: translateX(-55%) scale(1.05, 0.95); opacity: 1; }
    75% { transform: translateX(-50%) scale(0.9, 1); opacity: 0.85; }
}

.hidden {
    display: none;
}

/* Инструкция */
#instruction {
    position: absolute;
    bottom: 120px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 16px;
    transition: opacity 0.5s;
    pointer-events: none;
    z-index: 20;
}

/* Адаптация */
@media (max-width: 768px) {
    #message { font-size: 18vw; }
    #lighter { width: 60px; height: 90px; }
    #instruction { font-size: 14px; bottom: 150px; }
}
