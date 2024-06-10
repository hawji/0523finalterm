document.addEventListener('DOMContentLoaded', function() {
  var followCursorImg = document.getElementById('followCursor');

  document.getElementById('cursol1').addEventListener('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    followCursorImg.style.display = 'block';
    followCursorImg.style.left = x + 40 + 'px'; // 마우스 커서에서 약간 오른쪽
    followCursorImg.style.top = y + 40 + 'px'; // 마우스 커서에서 약간 아래쪽
  });

  // 마우스가 div를 벗어날 때 이미지를 숨깁니다.
  document.getElementById('cursol1').addEventListener('mouseleave', function() {
    followCursorImg.style.display = 'none';
  });
});


    


      document.addEventListener('DOMContentLoaded', function() {
  var sectionA1 = document.querySelector('.a1');
  var cursorImg = document.getElementById('cursorImg');

  sectionA1.addEventListener('mouseenter', function() {
    sectionA1.style.cursor = 'none'; // 마우스 커서 숨기기
    cursorImg.style.display = 'block';
    sectionA1.addEventListener('mousemove', updateCursorPosition);
  });

  sectionA1.addEventListener('mouseleave', function() {
    sectionA1.style.cursor = 'auto'; // 마우스 커서 원래대로 표시
    cursorImg.style.display = 'none';
    sectionA1.removeEventListener('mousemove', updateCursorPosition);
  });

  function updateCursorPosition(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorImg.style.left = x + 'px';
    cursorImg.style.top = y + 'px';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var sectionB1 = document.querySelector('.b1');
  var cursorImg = document.getElementById('cdfsdfsdf'); // 변경된 id

  sectionB1.addEventListener('mouseenter', function() {
    sectionB1.style.cursor = 'none'; // 마우스 커서 숨기기
    cursorImg.style.display = 'block';
    sectionB1.addEventListener('mousemove', updateCursorPosition);
  });

  sectionB1.addEventListener('mouseleave', function() {
    sectionB1.style.cursor = 'auto'; // 마우스 커서 원래대로 표시
    cursorImg.style.display = 'none';
    sectionB1.removeEventListener('mousemove', updateCursorPosition);
  });

  function updateCursorPosition(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorImg.style.left = x + 'px';
    cursorImg.style.top = y + 'px';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var sectionF = document.querySelector('.f'); // 클래스 f를 가진 요소 찾기
  var cursorImg = document.getElementById('fefwefwefwef'); // 변경된 id

  sectionF.addEventListener('mouseenter', function() {
    sectionF.style.cursor = 'none'; // 마우스 커서 숨기기
    cursorImg.style.display = 'block';
    sectionF.addEventListener('mousemove', updateCursorPosition);
  });

  sectionF.addEventListener('mouseleave', function() {
    sectionF.style.cursor = 'auto'; // 마우스 커서 원래대로 표시
    cursorImg.style.display = 'none';
    sectionF.removeEventListener('mousemove', updateCursorPosition);
  });

  function updateCursorPosition(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorImg.style.left = x + 'px';
    cursorImg.style.top = y + 'px';
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var sectionH = document.querySelector('.h'); // 클래스 f를 가진 요소 찾기
  var cursorImg = document.getElementById('dfefefdfdf'); // 변경된 id

  sectionH.addEventListener('mouseenter', function() {
    sectionH.style.cursor = 'none'; // 마우스 커서 숨기기
    cursorImg.style.display = 'block';
    sectionH.addEventListener('mousemove', updateCursorPosition);
  });

  sectionF.addEventListener('mouseleave', function() {
    sectionH.style.cursor = 'auto'; // 마우스 커서 원래대로 표시
    cursorImg.style.display = 'none';
    sectionH.removeEventListener('mousemove', updateCursorPosition);
  });

  function updateCursorPosition(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorImg.style.left = x + 'px';
    cursorImg.style.top = y + 'px';
  }
});


document.addEventListener('DOMContentLoaded', function() {
  var sectionasd = document.querySelector('.asd'); // 클래스 f를 가진 요소 찾기
  var cursorImg = document.getElementById('ececezz'); // 변경된 id

  sectionasd.addEventListener('mouseenter', function() {
    sectionasd.style.cursor = 'none'; // 마우스 커서 숨기기
    cursorImg.style.display = 'block';
    sectionasd.addEventListener('mousemove', updateCursorPosition);
  });

  sectionasd.addEventListener('mouseleave', function() {
    sectionasd.style.cursor = 'auto'; // 마우스 커서 원래대로 표시
    cursorImg.style.display = 'none';
    sectionasd.removeEventListener('mousemove', updateCursorPosition);
  });

  function updateCursorPosition(e) {
    var x = e.clientX;
    var y = e.clientY;
    cursorImg.style.left = x + 'px';
    cursorImg.style.top = y + 'px';
  }
});


  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.backgorund'); // backgorund 클래스를 가진 요소를 선택합니다.
    let lastStampTime = 0; // 마지막 도장 이미지가 찍힌 시간을 저장합니다.
    const minStampInterval = 500; // 최소 도장 이미지 간격 (밀리초 단위)
    const stampSize = 500; // 도장 이미지의 크기입니다.

    section.addEventListener('mouseenter', () => {
        // 커서를 숨깁니다.
        section.classList.add('no-cursor');
    });

    section.addEventListener('mouseleave', () => {
        // 커서를 다시 보여줍니다.
        section.classList.remove('no-cursor');
    });

    section.addEventListener('mousemove', (e) => {
        // 현재 시간을 가져옵니다.
        const currentTime = new Date().getTime();

        // 이전 도장 이미지와의 간격을 확인합니다.
        if (currentTime - lastStampTime >= minStampInterval) {
            // 도장 효과를 생성합니다.
            const stampImage = document.createElement('img');
            stampImage.src = 'image/Group%2048.png'; // 도장 이미지 경로를 지정합니다.
            stampImage.className = 'stamp-image';
            stampImage.style.position = 'absolute';
            stampImage.style.width = `${stampSize}px`; // 도장 이미지의 크기를 조정합니다.
            stampImage.style.height = `${stampSize}px`; // 도장 이미지의 크기를 조정합니다.
            stampImage.style.left = `${e.clientX - stampSize / 2}px`; // 도장 이미지를 마우스 위치 중심에 위치시킵니다.
            stampImage.style.top = `${e.clientY - stampSize / 2}px`; // 도장 이미지를 마우스 위치 중심에 위치시킵니다.

            section.appendChild(stampImage); // 도장 이미지를 섹션에 추가합니다.

            // 마지막 도장 이미지가 찍힌 시간을 업데이트합니다.
            lastStampTime = currentTime;

            // 일정 시간 후에 도장 이미지를 제거합니다.
            setTimeout(() => {
                stampImage.remove();
            }, 5000); // 도장이 찍힌 후 1초 후에 이미지를 제거합니다.
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const backgroundMusic = document.getElementById('background-music');
    const volumeRatio = 0.20 // 음량을 줄일 비율 (1/3)

    backgroundMusic.volume = volumeRatio;
});
