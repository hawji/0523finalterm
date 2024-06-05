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

