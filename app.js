let app = document.querySelector('.password-generator')
app.querySelector('.length input').addEventListener('input', function(){
  app.querySelector('.length span').innerText = app.querySelector('.length input').value 
})
app.querySelector('#generate-password').addEventListener('click', function(){
  let settings = {
    length: app.querySelector('.length input').value,
    numbers: app.querySelector('.settings #setting-number').checked,
    specialchars: app.querySelector('.settings #setting-specialchar').checked
  }
  let specialcharArr = ['@', '#', '$', '%', '^', '&', '*', '.', '_']
  let password = ''
  for(let i=0;i<settings.length;i++){
    let r = Math.random()
    if(r > 0.8 && settings.numbers){ // 20% 비율로 숫자가 포함되도록 함 
      password += Math.trunc(Math.random()*9) // 0 ~ 8 숫자중의 하나를 포함함 
    }else if( r > 0.5){ // 30% 비율로 영문자(대문자)가 포함되도록 함 
      password += String.fromCharCode(Math.trunc(Math.random()*26) + 65) // 대문자 A ~ Z (아스키코드표 참고)
    }else{ // 50% 비율로 영문자(소문자)가 포함되도록 함 
      password += String.fromCharCode(Math.trunc(Math.random()*26) + 97) // 소문자 a ~ z (아스키코드표 참고)
    }
    if(r < 0.4 && settings.specialchars){ // 40% 비율로 특수문자가 포함되도록 함 
      password += specialcharArr[Math.trunc(Math.random()*specialcharArr.length)] // 특수문자 배열에서 랜덤한 특수문자 선택
      i++
    }
  }
  app.querySelector('.head .password').innerText = password
})
