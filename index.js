// 随机拜年祝福数组
const greetings = [
    "龙年到，祝君龙腾虎跃，事业蒸蒸日上！",
    "祥龙贺岁，愿您新的一年阖家欢乐，幸福安康！",
    "龙年行大运，祝您财源广进，吉祥如意！",
    "金龙送福，愿您在龙年里平安顺遂，梦想成真！"
  ];
  
  // 获取元素
  const messageElement = document.getElementById('message');
  const fireworksContainer = document.getElementById('fireworks-container');
  
  // 显示随机祝福
  function showRandomGreeting() {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    messageElement.textContent = greetings[randomIndex];
  }
  
  // 简单的烟花效果模拟（这里只是简单示例，实际可以更复杂）
  function createFirework() {
    const firework = document.createElement('div');
    firework.style.position = 'absolute';
    firework.style.width = '10px';
    firework.style.height = '10px';
    firework.style.backgroundColor = getRandomColor();
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    firework.style.top = '400px';
    firework.style.animation = 'fireworkAnimation 2s ease-out';
  
    fireworksContainer.appendChild(firework);
  
    setTimeout(() => {
      firework.remove();
    }, 2000);
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // 初始化
  showRandomGreeting();
  for (let i = 0; i < 10; i++) {
    createFirework();
  }
  
  // 动画关键帧
  document.styleSheets[0].insertRule(`
    @keyframes fireworkAnimation {
      to {
        top: 0px;
        transform: scale(3);
        opacity: 0;
      }
    }
  `, document.styleSheets[0].cssRules.length);