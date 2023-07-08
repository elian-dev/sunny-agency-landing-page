const Animation = () => {
  const sections = document.querySelectorAll('.animate')

  const options = {
    root: null,
    threshold: 0.2,
    rootMargin: '0px'
  }

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, options)

  sections.forEach((section) => {
    observer.observe(section)
  })
}

export { Animation }
