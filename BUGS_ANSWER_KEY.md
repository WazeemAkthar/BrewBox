# BrewBox Task: Answer Key (for the supervisor only, do not share)

## HTML
1. `href="#pricin"` in nav: typo, link never reaches the Pricing section.
2. Hero `<img>` points to a missing file and has no `alt` text.
3. Duplicate `id="plan"` on two pricing cards.
4. Feature cards use `<h4>` directly under `<h2>`: heading level skipped.
5. Form inputs have no `<label>` (accessibility).
6. Email field uses `type="text"` instead of `type="email"` (and no `required`).
7. Footer says © 2019 and the year element has no `id` at all.
8. Third feature card has a stray extra "Really." paragraph and the 2nd card has an inline `style="padding:10px"`, so cards are inconsistent.
9. Pricing button 1: `selectPlan(starter)` is missing quotes, which throws a ReferenceError.

## CSS
10. Navbar is `position: fixed` but the hero has no top padding, so the heading hides under the navbar.
11. `z-index: 1` on navbar is too low for a fixed header and the mobile dropdown.
12. Hero paragraph `#7a5a46` on `#4b2e1e` and `.btn` text `#f5e6d3` on `#e8c9a8` have very poor contrast.
13. `button { outline: none }` removes keyboard focus indicators.
14. No hover/active state on `.btn` or FAQ buttons.
15. Typos: `backgrond-color`, `font-weigth`, `text-align: centre`.
16. Hero `h1` fixed at 64px and never reduced on mobile.
17. `.hero-img` has fixed `width: 600px` with no `max-width: 100%`, so it overflows on phones.
18. `.price-card` has fixed `width: 380px`, causing horizontal scroll on small screens.
19. Features grid becomes 2 columns on mobile instead of 1.
20. Form input `font-size: 12px` is too small (iOS also zooms in below 16px).
21. Mobile menu CSS uses `.active` but JS toggles `.open`.
22. Dark mode CSS uses `body.dark` but JS toggles `dark-mode`.
23. Mobile dropdown has no `left`/width, so it is cramped and unstyled.

## JavaScript
24. Stats counters use `setInterval` with no stop, so the numbers run past the target forever (`target` is never used).
25. FAQ accordion toggles every answer, not just the clicked one.
26. Theme toggle: wrong class name (see #22) and the button text is always "Light".
27. Form validation only checks the length > 0, with no email format check, and the form is not reset after submit.
28. `alert("error")` is a vague, unhelpful message.
29. Mobile menu toggles the wrong class (see #21) and the `aria-label` never updates.
30. Footer script looks for `#current-year`, which does not exist, so it throws a TypeError.
31. Leftover `console.log` in `selectPlan`.
32. Uses `var` everywhere (ask them to modernize to `const`/`let`).

## Suggested task wording for interns
1. Open the page on desktop and a phone-size window (DevTools) and list every bug and UI mistake you find.
2. Fix them in `index.html`, `style.css` and `script.js`.
3. Write a short note for each fix: what was wrong, and why your fix works.
