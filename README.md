# Reverse-graffiti-website -📖 Project Overview

Welcome to the documentation for the **ECOtag Website**. This site offers environmentally friendly marketing solutions, focusing on innovative graffiti techniques like Reverse Graffiti, Moss Graffiti, and Chalk Graffiti.

- `index.html` 📄 - Landing page of the website.
  ![Index Page](https://pouch.jumpshare.com/preview/w-33Ila07n1A_MFFqeyfEKBlQOAmq8E45VdP3HBVAy3lNgR1HEYVTM38seq_XHcctdq0gq4cBV8IDhqCAg7yt6xg8T-Aa-i84BYjZ1ZyKfo)
- `about.html` 📄 - Information about the company and services.
  ![About Page](https://pouch.jumpshare.com/preview/VASV9ZTX0I2yl5r1CglnirZhuTedzX4IHfy0bcB82g9L-I5DUfLOqV3SeSNGtud7tdq0gq4cBV8IDhqCAg7yt6xg8T-Aa-i84BYjZ1ZyKfo)
- `gdpr.html` 📄 - GDPR compliance page.
  ![GDPR Compliance Page](https://pouch.jumpshare.com/preview/VSzRdK73xeQQHuxmnNYBifOQsG_Htnf2aZvQqF3_Sr69S2DThKL6WM2j_adZUZR9tdq0gq4cBV8IDhqCAg7yt6xg8T-Aa-i84BYjZ1ZyKfo)
- `contact.html` 📄 - Contact form for inquiries.
  ![Contact Page](https://pouch.jumpshare.com/preview/auaRKxy38BYhUrTUNSUJA84GT-S1LbNZjy_SxvIgYQfJQbk6wAzM-8KrDBeK7h4Ftdq0gq4cBV8IDhqCAg7yt6xg8T-Aa-i84BYjZ1ZyKfo)


- **🌐 Purpose**: To promote and provide eco-friendly advertising services.
- **📅 Last Updated**: May 2024



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



Replace `path/to/homepage_screenshot.png` and other paths with actual paths to your screenshot files. This way, the README will visually represent different sections of your website, enhancing the understanding of your project structure and user interface.
# 📧 Setting Up the Contact Form

The contact form uses SMTP.js to send emails directly from the client side, configured with Elastic Email for SMTP service. Follow these steps to configure the SMTP settings properly:

Step 1: Go to https://elasticemail.com/ amd create an acccount
![Index Page](https://pouch.jumpshare.com/preview/yuZh2COSb2CbI4kmTjK_uAvAWnItNlbpUGGJgn_O0zOWmxxnFPS87JsWycPjg_Z17EwCfBAjkJf1wUmR0zMlfGMM4hU977FRhx26gJvndzw)

Step 2: Go to settings and click Create SMTP credentials
![Index Page](https://pouch.jumpshare.com/preview/XkuOOlHr2YcyVoxC_OJaKQBQfZI4F4raIseb3KACYfvmu7aiAbrynlNIiZOHtuZS7EwCfBAjkJf1wUmR0zMlfGMM4hU977FRhx26gJvndzw)

Step 3: Insert email
![Index Page](https://pouch.jumpshare.com/preview/x-sGo9YXB1O5HTj2IERFfwT16Ct2lpdc62baXlj0pUJj2kBhipOM7k3-fPUEQC0k7EwCfBAjkJf1wUmR0zMlfGMM4hU977FRhx26gJvndzw)

Step 4: Copy the password
![Index Page](https://pouch.jumpshare.com/preview/Sv6LQ5BbHvJNXBQbCx-bxK52OiUNcoVVJ9BswCIfparSC638dP6xEU8F_cuQPUW37EwCfBAjkJf1wUmR0zMlfGMM4hU977FRhx26gJvndzw)

Step 5: Open the project in an IDE(in this case Visual Studio Code)
![Index Page](https://pouch.jumpshare.com/preview/43S37xz8lXyoUW9yOJMN8-W5fk7My4jzFXjcRPE-wCnfo0QUp2Oc4UbrUGJ6ya--7EwCfBAjkJf1wUmR0zMlfGMM4hU977FRhx26gJvndzw)

Step 6: Go to main.js
![Index Page](https://pouch.jumpshare.com/preview/V2J4w3IxFWnLj_xuHSTgsp7vrDsYyFf7GFuHBiEtu5MTtXLJYPQeJis6levHfVCY7EwCfBAjkJf1wUmR0zMlfGMM4hU977FRhx26gJvndzw)

Step 7: Add email and password from elastic email in the fields
![Index Page](https://pouch.jumpshare.com/preview/pdFEj2qpADKq-DZ1xuerOE8iiNOWJL0gzjtIEkFdoOxNZ22eXPgP1qJ7nA2vlyOL7EwCfBAjkJf1wUmR0zMlfGMM4hU977FRhx26gJvndzw)


# 📧 To change Elastic Email password for main.js file follow the steps:

Go to Manage STMP Credentials
![Index Page](https://pouch.jumpshare.com/preview/SZk3jdagnkibmJ0CUO5_YQ0tAXCZ_JRDmV1Z1LqCAGf08xM1UpyOyo5sI7vsLtO37EwCfBAjkJf1wUmR0zMlfGMM4hU977FRhx26gJvndzw)

Click meatball menu and change password
![Index Page](https://pouch.jumpshare.com/preview/HkLXZ2PZdV4VSitSnF3kXksRbDsmKZHSuQkAnT8gwlf38uM9L8kyVpqMg7M7I4z-7EwCfBAjkJf1wUmR0zMlfGMM4hU977FRhx26gJvndzw)


2. **Securing Your Credentials**: Avoid hardcoding sensitive credentials directly in your scripts. Consider using environment variables or server-side encryption methods to secure your API keys and passwords.

3. **Testing**: After setting up, test the contact form to ensure that emails are being sent successfully without any errors.

---

**Note**: Always ensure compliance with data protection laws such as GDPR when handling user data through contact forms.
