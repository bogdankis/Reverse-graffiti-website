# Reverse-graffiti-website

```markdown
# 📖 Project Overview

Welcome to the documentation for the **ECOtag Website**. This site offers environmentally friendly marketing solutions, focusing on innovative graffiti techniques like Reverse Graffiti, Moss Graffiti, and Chalk Graffiti.

- `index.html` 📄 - Landing page of the website.
  ![Index Page](https://jumpshare.com/v/yNfUGWkdN6ly32BdHiQF)
- `about.html` 📄 - Information about the company and services.
  ![About Page](https://jumpshare.com/v/gnIDX3BEmbQEZd5xnhxA)
- `gdpr.html` 📄 - GDPR compliance page.
  ![GDPR Compliance Page](https://jumpshare.com/v/wDKRDALehvIgBDX77ChL)
- `contact.html` 📄 - Contact form for inquiries.
  ![Contact Page](https://jumpshare.com/v/CynOts38fLIovle2eFjs)


- **🌐 Purpose**: To promote and provide eco-friendly advertising services.
- **🧑‍💻 Authors**: ECOtag Team
- **📅 Last Updated**: May 2024

---

# 🗂️ Project Structure

Here's the basic structure of the project:

Here's the basic structure of the project:

    index.html 📄 - Main HTML file for the webpage.
    about.html 📄 -  About HTML file for section page.
    gdpr.html 📄 -  GDPR HTML file for the General Data Protection Regulation Compliance page.
    contact.html 📄 -  CONTACT HTML file for the conctact of provider.
    styles.css 🎨 - Main CSS file for styling and responsive design.
    main.js ⚙️ - Core JavaScript logic for interactivity and animations.
    assets/ 📂 - Folder for images, icons, and other assets.

---

# 🛠️ Development Setup

The project is straightforward to set up on any local or web server:
- **IDE/Text Editor**: Use Visual Studio Code, Sublime Text, or any preferred editor.
- **Dependencies**: No backend dependencies. Frontend libraries are loaded via CDN.
- **Libraries Used**:
  - **SMTP.js**, **SweetAlert**, **Swiper**, **ScrollReveal**

### ⚙️ Including Libraries

Ensure the necessary libraries are included in your HTML for functionality:

```html
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<script src="https://unpkg.com/scrollreveal"></script>
```

---

# 🏗️ Core Components and Logic

Key features include email integration, interactive alerts, responsive sliders, and on-scroll animations, each enhancing the user experience.

---

# 🚀 Deployment and Hosting

Upload the files to any static hosting service like GitHub Pages, Netlify, or Vercel.

---

# ⚠️ Troubleshooting and FAQs

Common issues might include CDN load failures or SMTP configuration errors.

---

# ⚖️ Licensing and Legal

This project is licensed under the MIT License.

---

# 📚 Additional Resources

Refer to the official documentation for the libraries used for detailed guides and advanced configurations:

- [SMTP.js Documentation](https://smtpjs.com/)
- [SweetAlert Documentation](https://sweetalert2.github.io/)
- [Swiper Documentation](https://swiperjs.com/)
- [ScrollReveal Documentation](https://scrollrevealjs.org/)

---

```

Replace `path/to/homepage_screenshot.png` and other paths with actual paths to your screenshot files. This way, the README will visually represent different sections of your website, enhancing the understanding of your project structure and user interface.
# 📧 Setting Up the Contact Form

The contact form uses SMTP.js to send emails directly from the client side, configured with Elastic Email for SMTP service. Follow these steps to configure the SMTP settings properly:
Step1:

1. **SMTP Configuration**:
   - **Host**: "smtp.elasticemail.com"
   - **Username**: Your Elastic Email account username
   - **Password**: `Use the password provided in your Elastic Email account settings`

   Insert these details in the `Email.send()` method in your `main.js`.

   ```javascript
   Email.send({
       Host: "smtp.elasticemail.com",
       Username: "your_username",
       Password: "your_password",
       To: 'recipient_email@example.com',
       From: "sender_email@example.com",
       Subject: "Subject of the email",
       Body: "Body content of the email"
   }).then(message => alert(message));
   ```

2. **Securing Your Credentials**: Avoid hardcoding sensitive credentials directly in your scripts. Consider using environment variables or server-side encryption methods to secure your API keys and passwords.

3. **Testing**: After setting up, test the contact form to ensure that emails are being sent successfully without any errors.

---

**Note**: Always ensure compliance with data protection laws such as GDPR when handling user data through contact forms.
