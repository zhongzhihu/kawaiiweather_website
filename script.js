const reveals = document.querySelectorAll(
  ".feature-card, .faq article, .download, .proof-strip div"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal", "is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});
