const faqs = document.querySelectorAll(".faqq");

faqs.forEach(faqq => {
    faqq.addEventListener("click", () => {
        faqq.classList.toggle("activeee");
    })
})

icon.addEventListener("click", () => {
    nav.classList.toggle("active")
})
