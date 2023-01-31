let 제목 = document.querySelector('#title');
if (제목 instanceof Element) {
    제목.innerHTML = '반갑';
}

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com';
}

let 버튼 = document.querySelector('#button');
let 이미지 = document.querySelector('#image');
버튼?.addEventListener('click', function() {
    if (이미지 instanceof HTMLImageElement) {
        이미지.src = 'new.jpg';
    }
})

let 버튼들 = document.querySelectorAll('.naver');
버튼들.forEach(element => {
    if (element instanceof HTMLAnchorElement) {
        element.href = "https://kakao.com";
    }
});