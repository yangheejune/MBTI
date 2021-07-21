$(function () {
    let url = window.localtion.href;
    let img = $('.result_img img').attr('src');

    $("meta[property='og\\:url']").attr('content', url)
    $("meta[property='og\\:image']").attr('content', img)
});

const copyBtn = document.querySelector('.copy_btn');
const facebookShare = document.querySelector('.facebook_share');
const kakaoShare = document.querySelector('.kakao_share');

//// 카카오 공유 코드 /////
kakao.init('b67c42075ab60c6b85680a6cd08db240');

function sendLink() {
    let result_url = window.localtion.href;
    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: '나의 개발 유형은?',
            description: '나에게 꼭 맞는 개발 유형을 알아보자!!',
            imageUrl:
            'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
            link: {
            mobileWebUrl: 'https://developers.kakao.com',
            androidExecutionParams: 'test',
            },
        },
        social: {
            likeCount: 10,
            commentCount: 20,
            sharedCount: 30,
        },
        buttons: [
            {
            title: '웹으로 이동',
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
            },
            },
            {
            title: '앱으로 이동',
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
            },
            },
        ]
    });
}

function copyUrl() {
    let tmp = document.createElement('input');
    let url = location.href;

    document.body.appendChild(tmp);
    tmp.value = url;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);

    alert("URL이 복사되었습니다.");
}

function sharefacebook() {
    let url = window.location.href;
    let facebook = 'http://www.facebook.com/sharer/sharer.php?u=';
    let link = facebook + url;
    window.open(link);
}

copyBtn.addEventListener('click', copyUrl);
facebookShare.addEventListener('click', sharefacebook);
kakaoShare.addEventListener('click', sendLink);
