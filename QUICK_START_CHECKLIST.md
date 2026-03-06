# Quick Start Checklist

## For Non-Technical Managers/Content Editors

Welcome! The ICCoSD-25 website is now ready for easy content management. Here's what you need to know:

---

## ✅ What Can You Edit (Without Code)?

### Content You Can Change

- [x] Conference dates
- [x] Email address
- [x] Phone number
- [x] Contact information
- [x] Important dates/deadlines
- [x] Quick links
- [x] Organization logos and links
- [x] Social media links
- [x] Copyright year
- [x] Home page statistics
- [x] Hero image
- [x] Heading text
- [x] Footer content

### How to Edit

1. **Find the file** - Look in `/content/` folder
2. **Open in text editor** - Use any plain text editor (Notepad, VS Code, etc.)
3. **Find the section** - Look for `---SECTION_NAME---`
4. **Edit the data** - Change the information
5. **Save the file** - Ctrl+S or Cmd+S
6. **Reload website** - F5 or refresh in browser
7. **Done!** - Changes appear immediately

---

## 📁 Content Files Guide

### `/content/footer.md`

**What it contains:** Footer information (emails, dates, logos, links)

**Quick edits:**

```yaml
email: "your-email@example.com"          ← Change email
phone: "+91-XXX-XXXXX"                   ← Change phone
institution: "Your Institution"          ← Change school name
conferenceStartDate: "July 25, 2025"     ← Change start date
conferenceEndDate: "July 26, 2025"       ← Change end date
```

**Adding quick links:**

```json
{
  "title": "New Link Name",
  "href": "/page-path",
  "icon": "IconName"
}
```

### `/content/home.md`

**What it contains:** Home page text, statistics, dates

**Quick edits:**

```yaml
heroDate: "July 25-26, 2025"              ← Hero section date
heroLocation: "BIT Mesra, Ranchi"         ← Location
```

**Adding important dates:**

```json
{
  "label": "Submission Deadline",
  "date": "April 15, 2025"
}
```

### `/content/about.md`

**What it contains:** About conference and institution

**Where to edit:**

- Conference description
- BIT Mesra information
- Research tracks
- Conference theme

### `/content/contact.md`

**What it contains:** Contact information and committee details

**Where to edit:**

- Email addresses
- Phone numbers
- Committee member information
- Office address

---

## 🎯 Most Common Edits

### 1. Change Email Address

**File:** `/content/footer.md`

```yaml
email: "newemail@bitmesra.ac.in"
```

Save → Reload → Done!

### 2. Update Conference Dates

**File:** `/content/footer.md`

```yaml
conferenceStartDate: "August 15, 2025"
conferenceEndDate: "August 16, 2025"
```

Save → Reload → Done!

### 3. Add Important Deadline

**File:** `/content/footer.md`
Find section: `---IMPORTANT_DATES---`
Add new entry:

```json
{
  "label": "New Deadline",
  "date": "May 20, 2025"
}
```

Save → Reload → Done!

### 4. Change Phone Number

**File:** `/content/footer.md`

```yaml
phone: "+91-NEW-NUMBER"
phone2: "+91-OTHER-NUMBER"
```

Save → Reload → Done!

### 5. Add Organization Logo

**File:** `/content/footer.md`
Find section: `---ACKNOWLEDGMENTS---`
Add new entry:

```json
{
  "name": "Organization Name",
  "logo": "/logos/org-name.png",
  "url": "https://organization-website.com"
}
```

Then add image file to `/public/logos/org-name.png`
Save → Reload → Done!

### 6. Update Copyright Year

**File:** `/content/footer.md`

```yaml
copyrightYear: 2026
```

Save → Reload → Done!

### 7. Change Hero Image

**File:** `/content/home.md`
Find section: `---HERO_IMAGE---`
Replace with: `/path-to-new-image.jpg`
Add image to `/public/` folder first
Save → Reload → Done!

### 8. Add Quick Navigation Link

**File:** `/content/footer.md`
Find section: `---QUICK_LINKS---`
Add entry:

```json
{
  "title": "Link Name",
  "href": "/link-path",
  "icon": "IconName"
}
```

Save → Reload → Done!

---

## 🔧 Before You Start Editing

### Setup Required (One-time)

- [ ] Download the project code
- [ ] Open `/content/footer.md` in text editor
- [ ] Verify you can see the content
- [ ] Save the file
- [ ] Reload the website
- [ ] Confirm change appeared

### Text Editor Options

**Easy (Recommended):**

- Windows: Notepad, Notepad++, VS Code
- Mac: TextEdit, VS Code
- Linux: gedit, nano, VS Code

**What NOT to use:**

- Word, Google Docs, Excel (they break formatting)
- Notepad with .docx extension (wrong format)

### Backup Strategy

Before major edits:

1. Download current `/content/` folder
2. Store backup on your computer
3. If something breaks, restore from backup

---

## 📋 Important Rules

### Rules for YAML (the header section)

```yaml
✅ Correct:
email: "test@example.com"
phone: "+91-1234567890"

❌ Wrong:
email "test@example.com"        ← Missing colon
phone: +91-1234567890          ← Missing quotes around number
```

**Rule:** Always have: `name: value` with colon and quotes around text

### Rules for JSON (data lists)

```json
✅ Correct:
[
  {
    "title": "Home",
    "href": "/",
    "icon": "Home"
  },
  {
    "title": "About",
    "href": "/about",
    "icon": "Info"
  }
]

❌ Wrong:
[
  {
    "title": "Home",
    "href": "/",
    "icon": "Home"    ← Missing comma here
    {
      "title": "About",
      ...
    }
  }
]

❌ Wrong:
[
  {
    title: "Home",                ← Missing quotes
    href: /,                      ← Missing quotes
    icon: Home                    ← Missing quotes
  }
]
```

**Rule:** Every item needs: `"key": "value",` with commas between items

### Image Path Rule

```yaml
✅ Correct:
/logos/ieee.png
/images/hero.jpg

❌ Wrong:
logos/ieee.png           ← Missing leading slash
./logos/ieee.png         ← Don't use ./
C:\Users\...\image.png   ← Don't use full computer paths
```

**Rule:** Always use `/folder/filename.jpg` format

### Text & Special Characters

```yaml
✅ Correct:
text: "This is a quote: 'example'"
text: "Ampersand & symbol"
text: "Degree: 90°"

❌ Wrong:
text: This is a quote: 'example'    ← Quotes not escaped
text: "Ampersand & symbol"          ← May cause issues
```

**Rule:** Use quotes around text with special characters

---

## 🆘 Troubleshooting

### Problem: "File won't save"

**Solution:**

1. Check file is not open in multiple programs
2. Check you have write permission to folder
3. Try saving with different name first
4. Save as "UTF-8" encoding (not ANSI)

### Problem: "Changes don't appear on website"

**Solution:**

1. Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Wait 30 seconds and refresh again
3. Check file was actually saved
4. Restart development server if needed

### Problem: "Website shows error"

**Solution:**

1. Check for typos in YAML/JSON
2. Verify all quotes match
3. Verify all commas in JSON
4. Use [JSON validator](https://jsonlint.com/) to check JSON blocks
5. Use [YAML validator](https://www.yamllint.com/) to check YAML

### Problem: "Image not showing"

**Solution:**

1. Verify image file exists in `/public/` folder
2. Check image path is correct: `/filename.jpg`
3. Check image format is supported (PNG, JPG, GIF, SVG)
4. Try different image file
5. Check file permissions

### Problem: "Special character shows as ?"

**Solution:**

1. Save file with UTF-8 encoding
2. Don't use special emoji characters
3. For accented characters, use: `é` instead of `é`

---

## 📚 Icon Names Reference

When adding links with icons, use these names:

**Navigation:**
`Home`, `Mail`, `Calendar`, `Users`, `Info`, `Phone`, `MapPin`, `FileText`

**Social Media:**
`Linkedin`, `Twitter`, `Github`, `Facebook`, `Instagram`, `Youtube`

**Actions:**
`Download`, `Share`, `ExternalLink`, `Edit`, `Delete`, `Plus`

**Other:**
`MessageSquare`, `Clock`, `AlertCircle`, `Search`, `Settings`, `Help`

---

## ✨ Best Practices

### Keep in Mind

1. **Save frequently** - Don't lose work
2. **Test changes** - Reload after each major edit
3. **Check formatting** - Use validators
4. **Keep backups** - Store old versions
5. **Ask before deleting** - Don't remove old content without approval

### Content Quality Tips

- ✅ Keep text clear and concise
- ✅ Use correct spelling and grammar
- ✅ Keep dates in consistent format
- ✅ Update dates before they pass
- ✅ Verify all links work
- ✅ Test all email addresses

### File Organization

- ✅ Keep `/content/` files organized
- ✅ Keep `/public/` folder clean
- ✅ Use clear image names
- ✅ Name images with lowercase and hyphens: `conference-hero.jpg`
- ✅ Update README if making big changes

---

## 📞 Quick Help

### I need to...

**Change an email address**
→ See "Most Common Edits #1"

**Update conference dates**
→ See "Most Common Edits #2"

**Add a new deadline**
→ See "Most Common Edits #3"

**Change a phone number**
→ See "Most Common Edits #4"

**Add organization logo**
→ See "Most Common Edits #5"

**Update copyright year**
→ See "Most Common Edits #6"

**Change hero image**
→ See "Most Common Edits #7"

**Add navigation link**
→ See "Most Common Edits #8"

**Can't find something**
→ Read [CONTENT_EDITING_GUIDE.md](./CONTENT_EDITING_GUIDE.md)

**Want to understand micro-interactions**
→ Read [MICRO_INTERACTIONS_GUIDE.md](./MICRO_INTERACTIONS_GUIDE.md)

---

## 🎓 Learning Resources

### For Content Editors

- [CONTENT_EDITING_GUIDE.md](./CONTENT_EDITING_GUIDE.md) - Complete editing guide
- [FOOTER_ENHANCEMENT_GUIDE.md](./FOOTER_ENHANCEMENT_GUIDE.md) - Footer details

### For Developers

- [README.md](./README.md) - Technical overview
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md) - How it works
- [MICRO_INTERACTIONS_GUIDE.md](./MICRO_INTERACTIONS_GUIDE.md) - Animation details

### Online Tools

- [JSON Validator](https://jsonlint.com/) - Check JSON syntax
- [YAML Validator](https://www.yamllint.com/) - Check YAML syntax
- [Regular Text Editor](https://notepad.js.org/) - Online editor
- [Markdown Preview](https://markdownlivepreview.com/) - Preview markdown

---

## 🚀 Deployment

### Before Going Live

- [ ] Updated all email addresses
- [ ] Updated all phone numbers
- [ ] Updated conference dates
- [ ] Updated all important deadlines
- [ ] Added organization logos
- [ ] Updated copyright year
- [ ] Tested all links
- [ ] Verified all text
- [ ] Changed hero image if needed
- [ ] Tested on mobile device

### Deployment Steps

1. Run `pnpm build` (or equivalent)
2. Test production build locally
3. Deploy to Vercel (or your server)
4. Verify all content appears
5. Test all links and forms
6. Check on mobile devices

---

## 💡 Pro Tips

### Time-Saving

1. **Copy-paste existing entries** - Faster than typing new ones
2. **Use search-replace** - Edit multiple dates at once
3. **Keep template snippets** - Copy-paste for consistent format
4. **Batch edits** - Do all edits in one sitting
5. **Schedule updates** - Plan ahead what changes when

### Staying Organized

1. **Maintain a changelog** - Track what you changed
2. **Version file names** - Keep backups with dates
3. **Add comments** - Note why you made changes
4. **Regular reviews** - Check site monthly
5. **Delegate tasks** - Share the workload

### Quality Assurance

1. **Three-step check** - Read, check, reload
2. **Browser testing** - Test on Chrome, Firefox, Safari
3. **Mobile testing** - Test on iPhone and Android
4. **Link testing** - Verify all URLs work
5. **Cross-team review** - Have colleagues review

---

## 🎉 You're Ready!

You now have everything you need to manage the ICCoSD-25 website content without touching any code.

### Next Steps

1. Open `/content/footer.md` in your text editor
2. Make a small test change (like email)
3. Save the file
4. Reload the website
5. Verify the change appeared
6. You're good to go!

---

## 📞 Get Help

**If something breaks:**

1. Check [CONTENT_EDITING_GUIDE.md](./CONTENT_EDITING_GUIDE.md) troubleshooting
2. Use JSON/YAML validators to check syntax
3. Contact the development team
4. Email: iccosd@bitmesra.ac.in

**For technical questions:**

1. Read [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)
2. Check [README.md](./README.md)
3. Contact development team

---

## ✅ Final Checklist

Before editing, confirm:

- [ ] I have the project files
- [ ] I have a text editor (Notepad, VS Code, etc.)
- [ ] I can open `/content/footer.md`
- [ ] I can save files
- [ ] I can reload the website
- [ ] I understand the YAML rules (name: value)
- [ ] I understand the JSON rules (commas, quotes)
- [ ] I have made a backup

**You're all set!** Start editing with confidence.

---

**Last Updated:** March 2025  
**Version:** 1.0  
**Status:** Ready for Use

**Questions?** See the guides or contact the team!
