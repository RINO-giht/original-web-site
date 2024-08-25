//Heroメニュー
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    const hero = document.querySelector(".hero");

    if (window.scrollY > hero.offsetHeight) {
        header.classList.add("visible");
    } else {
        header.classList.remove("visible");
    }
});



//fooderのスクロール
document.querySelectorAll('#menu-footer a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのジャンプ動作を防ぐ

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // スムーズにスクロールする
            });
        }
    });
});

let slideIndex = 0;
autoShowSlides();

//スライドショー
function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(autoShowSlides, 6000); // 4秒ごとにスライドが切り替わる
}



//メニューの開閉
function toggleMenu() {
    const moreMenu = document.querySelector(".more");

    if (moreMenu.style.display === "none" || moreMenu.style.display === "") {
        moreMenu.style.display = "block";
    } else {
        moreMenu.style.display = "none";
    }
}
document.querySelector(".more").addEventListener("click", function() {
    this.style.display = "none"; // moreMenu自体を非表示にする
});


//質問の開閉
document.querySelectorAll('.qa-1').forEach(item => {
    item.addEventListener('click', () => {
      const arrowIcon = item.querySelector('i');
      const qa2 = item.nextElementSibling;
  
      if (qa2.style.display === 'none' || qa2.style.display === '') {
        qa2.style.display = 'block';
        arrowIcon.classList.remove('fa-chevron-down');
        arrowIcon.classList.add('fa-chevron-up');
      } else {
        qa2.style.display = 'none';
        arrowIcon.classList.remove('fa-chevron-up');
        arrowIcon.classList.add('fa-chevron-down');
      }
    });
  });

//ハンバーガーメニュー

  document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".menu-btn");
    const menuContents = document.querySelector(".menu-contents");
    const links = document.querySelectorAll(".header-menu a");

    menuBtn.addEventListener("click", function() {
        this.classList.toggle("active");
        menuContents.classList.toggle("show");
    });

    links.forEach(link => {
        link.addEventListener("click", function() {
            // ハンバーガーメニューを閉じる
            menuBtn.classList.remove("active");
            menuContents.classList.remove("show");
        });
    });
});