Glamour Beauty Salon & Spa Website
Project Title
Glamour - Beauty Salon and Spa

Introduction
This project delivers a modern, responsive website for Glamour, a Midrand salon offering premium hair, beauty, and skincare. It functions as a digital storefront, enabling online bookings, showcasing services, and enhancing client relationships, all while reflecting the Glamour brand's elegance.

Purpose
The primary purposes of the Glamour Salon Website are to:

Provide an attractive, informative, and user-friendly platform for both new and returning clients.

Enable clients to view available services, browse gallery images, and book appointments conveniently online.

Enhance the salon's professional image and online visibility through SEO-optimized, mobile-responsive design.

Reduce manual administrative work by automating appointment bookings (via Google Form integration).

Offer a central platform for customer engagement, including contact forms and social media integration.

Features
The website includes the following key features:

Responsive Front-end Design: Fully mobile-friendly and adaptable to various screen sizes.

Online Booking Form: Integrated with a Google Form for convenient appointment scheduling.

Services Page: Dynamic display of services with pricing.

Image Gallery: Showcases images of past work and salon ambience, with cards linking to specific service galleries (e.g., Nail Art Gallery).

Contact Form & WhatsApp Integration: Multiple options for client communication.

About Section: Details the salon's history, expertise, and "Our Philosophy" section.

Advanced CSS Styling: Elegant pink and black theme with subtle animations, hover effects, and sophisticated card designs.

Smooth Scrolling: Enhanced navigation experience within the page.

Sticky Header: Header remains visible upon scrolling for easy navigation access.

Technology Stack
Frontend: HTML5, CSS3, JavaScript

Backend (Optional for email sending): Node.js, Express.js, Nodemailer (if a custom backend is desired instead of Google Forms).

Form Submission: Google Forms (current implementation for ease of use).

Hosting: Can be deployed on platforms like Netlify, Vercel, or GitHub Pages.

Installation and Local Setup
Frontend (HTML, CSS, JavaScript)
To run the static website locally:

Clone the repository (or download the index.html, nail-art.html, and any other service HTML files).

Open index.html (and nail-art.html for the gallery sub-page) in your preferred web browser.

Note: For the Google Form in the contact section to work, you will need to create your own Google Form and replace the <iframe> src URL in index.html with your form's embed URL.

Backend (Optional - for custom email sending instead of Google Form)
If you decide to switch from Google Forms to a custom Node.js backend for email sending (as discussed in previous interactions), follow these steps:

Ensure Node.js is installed on your system.

Place the server.js file (provided in previous interactions) in your project root directory.

Create a package.json file in the same directory with the following content:

{
  "name": "glamour-salon-backend",
  "version": "1.0.0",
  "description": "Backend for Glamour Beauty Salon & Spa website",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "body-parser": "^1.20.2",
    "nodemailer": "^6.9.7",
    "cors": "^2.8.5"
  }
}

Open your terminal or command prompt, navigate to the project directory, and run:

npm install

Configure Email Credentials: Open server.js and replace the placeholder email address and password for nodemailer with your actual email service credentials and the recipient email address.

Start the server:

npm start

or

node server.js

The website will then be accessible at http://localhost:3000/index.html.
Usage
Open index.html in your web browser.

Navigate through sections using the main menu.

Click on gallery items to view specific service detail pages (e.g., nail-art.html).

Use the embedded Google Form in the "Contact" section to book appointments.

Interact with WhatsApp and location links for direct communication.

Contributing
Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

License
This project is open-sourced. Please refer to the LICENSE file for more details (if applicable, otherwise state "No specific license provided").

Contact
Glamour Beauty Salon & Spa

Location: Kaalfotein Shoping Center, Midrand 1685

Phone: +27 61 473 6830 | +27 69 241 1538

Email: mudheyipatrick@gmail.co.za

Hours: Mon - Sat: 9 AM - 7 PM

Feel free to reach out for any inquiries or appointments!
