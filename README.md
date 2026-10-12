# Yunis Abshir personal website

This is a complete static website. No npm packages, API keys, build process, or backend are required. The email link opens the visitor's email application; the phone link opens a dialler where supported. The GitHub link opens your public profile. No unverified projects are listed. The original CV is not included because it contains personal identification details and outdated contact information.

## Files

- index.html: text, sections, links, and page metadata.
- styles.css: layout, colours, responsive styling, and light/dark themes.
- script.js: theme button, saved theme preference, and copyright year.
- README.md: these instructions; not part of the visible website.

## Save and preview on Windows

1. Extract the ZIP into a folder named yunis-website.
2. Keep index.html, styles.css, and script.js together in that folder.
3. Open index.html in your browser. This site also works from a local file.
4. Edit files in VS Code or another plain-text editor. If using Notepad, select Save as type: All files and encoding UTF-8. Do not save as index.html.txt.
5. Save changes and refresh your browser. Test the theme, links, and a narrow window.

Optional local server if Python is installed: open a terminal in this folder and run:

```sh
python -m http.server 8000
```

Then visit http://localhost:8000. Stop with Ctrl+C.

## Publish with GitHub Pages

1. Sign in to GitHub as younesHassan.
2. Create a public repository named younesHassan.github.io. If it already exists, inspect and back up its contents before replacing anything.
3. Use Add file > Upload files. Upload the three website files at the repository root, not inside a nested folder. Commit the upload to main.
4. Go to Settings > Pages. Under Build and deployment, select Deploy from a branch. Select main and /(root), then Save.
5. Wait for GitHub to publish and show the site URL. Open https://youneshassan.github.io/ and test the site. Inspect Actions if deployment fails.
6. Later changes committed to the publishing branch trigger another deployment.

## Connect a .dev domain

.dev is a domain ending, not a hosting provider. GitHub Pages hosts the files. You separately register a domain. Example only: yunisabshir.dev; its availability and price have not been checked.

1. Use https://get.dev/ to find a registrar. Search for your preferred name, check initial and renewal prices, and register it.
2. Verify ownership in GitHub account Settings > Pages using the TXT record GitHub provides. Keep the verification record.
3. In the website repository's Settings > Pages, enter your actual domain in Custom domain and Save, before adding hosting DNS records. For branch publishing GitHub creates a CNAME file; preserve it on subsequent uploads.
4. In your registrar's DNS editor add the following records. Replace only conflicting web-hosting records; preserve mail and other service records.

| Type | Host/name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | youneshassan.github.io |

Some registrars use a blank host or your full domain instead of @. Use the provider's format. The www CNAME value has no https:// prefix or path. Leave TTL at the default.

5. Wait for the DNS check and certificate provisioning. DNS and HTTPS availability can take up to 24 hours.
6. Enable Enforce HTTPS when available. .dev requires HTTPS; the domain will not work normally until its certificate is ready.
7. Test both https://YOUR-DOMAIN.dev and https://www.YOUR-DOMAIN.dev. With both DNS variants configured GitHub redirects to the domain you selected.

## Update content

Edit index.html for your details, experience, education, contact information, and project descriptions. Edit styles.css for the appearance. Check your Nova Plus end date before changing the listed start date into a full date range. Add only verified projects and qualifications.

The current contact details are Palermo, Italy; younesabshir@gmail.com; +39 352 293 7337. The phone link uses tel:+393522937337.

If you later add a CV download, prepare a public copy with passport number, date of birth, and private address removed and contact details updated.

## Official hosting references

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- https://www.registry.google/domains/dev/

This package has been prepared for you to publish. No domain was purchased and no live deployment was performed.
