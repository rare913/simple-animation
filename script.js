gsap.from(".text", {
    y: 20,
    opacity: 0,
    duration: 1.6,
})

gsap.from(".image", {
    y: 20,
    opacity: 0,
    duration: 1.6,
})

gsap.from(".coffee", {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".coffee",
        scroller: "body",
    }

})

gsap.from(".support", {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".coffee",
        scroller: "body",
    }
})

gsap.from(".free-delivery", {
    opacity: 0,
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".coffee",
        scroller: "body",
    }
})