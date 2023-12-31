import { Tabs } from './tabs.js'
// import { cookieValidation, cookieFormValidation } from './validate.js'
import { Accordions } from './accordions.js'
import { CopyToClipboard } from './copy.js'
import { Animation } from './animation.js'

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('DOM fully loaded and parsed')
  /**
   * Validation
   * @see public/assets/js/validation.js
   * Call the function from validation.js
   */
  // cookieValidation()
  // cookieFormValidation()
  /**
   * Tabs
   * @see public/assets/js/tabs.js
   * Call the function from tabs.js
   */
  Tabs()
  /**
   * Accordions
   * @see public/assets/js/accordions.js
   * Call the function from accordions.js
   */
  Accordions()

  /**
   * Copy to clipboard
   * @see public/assets/js/copy.js
   * Call the function from copy.js
   */
  CopyToClipboard()

  /**
   * Animation
   * @see public/assets/js/animation.js
   * Call the function from animation.js
   */
  Animation()

  document.addEventListener('modal:done', ({ detail }) => {
    console.log(detail.id)
  })
})
