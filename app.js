const tl = gsap.timeline({ default: { duration: 1, ease: "power4.out" } });

tl.fromTo(
  ".hero-section",
  { scale: 1.26 },
  { scale: 1, ease: "elastic.out(1.5,1)", duration: 2.5, delay: 0.5 }
);

tl.fromTo(".cta1", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta3", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta2", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%");

tl.fromTo(".cta4", { x: "100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta6", { x: "-100%", opacity: 0 }, { x: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta5", { y: "100%", opacity: 0 }, { y: 0, opacity: 1 }, "<20%");
tl.fromTo(".cta-btn", { y: 10, opacity: 0 }, { y: 0, opacity: 1 }, "<");

const logo = document.querySelector(".logo");

const letters = [...logo.textContent];

logo.textContent = "";

letters.forEach((letter) => {
  logo.innerHTML += "<span class='letter'>" + letter + "</span>";
});
console.log(logo.innerHTML);

gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
  ".letter",
  { y: "100%", opacity: 0 },
  { y: 0, opacity: 1, delay: 2, stagger: 0.1, ease: "back.out(3)" }
);
