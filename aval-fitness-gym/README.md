# Aval Fitness & Gym: static website
Pure HTML/CSS/JS. No build step.

## Run locally
Open `index.html`, or run `python3 -m http.server 8000` and visit http://localhost:8000.

## Features
5 pages, sticky nav with mobile menu, active-link styling, scroll reveal, gallery lightbox (Esc/click-outside close), validated demo contact form, map embed + directions, back-to-top, image fallbacks, reduced-motion support. The nav and footer are injected by `js/script.js`, so edit them there.

## Update
- Instagram: replace `href="#"` in `js/script.js` (marked TODO).
- Phone/address: search for `63696` and `Anangur` across files.
- Photos: see `images/README.md`.

## Deploy on GitHub Pages
Create a repo, push these files to `main`, then Settings > Pages > Deploy from branch > `main` / root. The site appears at `https://<user>.github.io/<repo>/`.

## Notes
The contact form is a demo; nothing is sent. No email, prices, schedules or trainer details were invented.
