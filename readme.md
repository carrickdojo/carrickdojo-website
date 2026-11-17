# Carrick-on-Shannon CoderDojo Club Website

## About this Site

This is the code of the CarrickDojo Website.

We have written our site (as much as possible) in HTML and CSS with a little bit of JavaScript.

This site aims to build off the [HTML and CSS CoderDojo Projects](https://projects.raspberrypi.org/en/coderdojo) and the [Raspberry Pi Web Design Projects](https://projects.raspberrypi.org/en/collections/html_and_css).

> [!NOTE]
> A key goal is to provide a functional site **without any frameworks** or transpiling that anyone can inspect the page and easily understand the underlying code.



> [!WARNING]
> This site breaks some rules and principles of good programming for the sake of simplicity. The plan is to fully document this project and provide context on DRY and SOLID programming and why we use frameworks and tools for developing websites.

## Tasklist

- [ ] Update ninja.html - add Ninja page content
- [ ] Update site.html - update page with final site info
- [ ] Update site.html - add change control section
- [ ] Complete our-hosting.html page
- [ ] Complete our-website.html page
- [ ] Complete our-style-guide.html page
- [ ] Add page - Internet Usage Policy
- [ ] Add page - Website Quiz Page

- [ ] CSS refactor colours.css - colour variables and colour schemes, remove unused
- [ ] CSS refactor fonts.css - remove old font files, finalise typography
- [ ] CSS refactor helpers.css - combine utility css, remove unused
- [ ] CSS refactor animations.css - fix inconsistencies, remove unused

- [ ] Images remove unused images
- [ ] Images ensure optimised images used
- [ ] Images ensure accessibility and alt tags
- [ ] Accessibility fix contrast ratio
- [ ] Accessibility fix ARIA controls

- [x] Ensure privacy policy covers usage of embedded MS Form iFrame

- [x] Add vercel.json
- [x] Add robots.txt, security.txt, etc., document usage
- [x] Add sitemap.xml, update our-website sitemap



## Change Control
**15-10-2025: Sitemap, Robots.txt, and Security.txt**

- Introduced `sitemap.xml` to map out all public pages—homepage, about, contact, resources, and more—making it easier for search engines to find and index our content.  
- Added `robots.txt` to give search engines a green light to crawl the site and point them straight to our sitemap.  
- Added `security.txt` to provide a clear contact for anyone discovering a security issue.

**Why this matters:** These changes improve search visibility, ensure proper indexing of all pages, and give a simple, real-world example of basic SEO and web security practices for learners exploring HTML and CSS.


**17-11-2026:  Refactor and Cleanup**

- We are launching our new site, club.carrickdojo.com alongside our main website.  This site will be a WordPress backend (cms.carrickdojo.com) and a SvelteKit frontend (club.carrickdojo.com).  
- All the guides and projects are being migrated to the new club site.
- We will start testing the new ticketing systems and registration system, ensuring proper handling of all data.
- Ensuring HSTS (HTTP Strict Transport Security) is correctly configured to cover our domains. 

**Why this matters:** We need to ensure all data is handled correctly and need new functionality.  WordPress is a tried and tested solution, however needs very careful care in ensuring security.  We have a single WordPress plugin for our club to handle all our functionality so we are completely in control of the code and data access.