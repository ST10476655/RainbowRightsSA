// =========================================
// PART 3 - FAQ ACCORDION FUNCTIONALITY
// =========================================

console.log("Part 3 JavaScript loaded successfully");

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        content.classList.toggle("active");

    });

});


// =========================================
// PART 3 - RESOURCE SEARCH FUNCTIONALITY
// =========================================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const filter = searchInput.value.toLowerCase();

        const cards =
            document.querySelectorAll(".resource-card");

        cards.forEach(card => {

            const text =
                card.textContent.toLowerCase();

            if (text.includes(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}
/* =========================================
   LIGHTBOX GALLERY
========================================= */

const galleryImages =
    document.querySelectorAll(".gallery img");

const lightbox =
    document.getElementById("lightbox");

const lightboxImg =
    document.getElementById("lightbox-img");

if (galleryImages.length > 0) {

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";

            lightboxImg.src = image.src;

        });

    });

}

if (lightbox) {

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}
/* =========================================
   CONTACT PAGE MAP
========================================= */

const mapContainer = document.getElementById("map");

if (mapContainer) {

    const map = L.map("map").setView(
        [-26.2041, 28.0473],
        13
    );

    L.tileLayer(
        "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);

    L.marker([-26.2041, 28.0473])
        .addTo(map)
        .bindPopup("Rainbow Rights South Africa")
        .openPopup();
}
/* =========================================
   ENQUIRY FORM VALIDATION
========================================= */

// Get the enquiry form
const enquiryForm = document.getElementById("enquiryForm");

// Check if the form exists
if (enquiryForm) {

    enquiryForm.addEventListener("submit", function(event) {

        // Stop page refresh
        event.preventDefault();

        // Get form field values
        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const enquiryType =
            document.getElementById("enquiryType").value;

        const message =
            document.getElementById("message").value.trim();

        const response =
            document.getElementById("formResponse");

        // Validate Name
        if (name.length < 3) {

            response.innerHTML =
                "Please enter a valid full name.";

            response.style.color = "red";

            return;

        }

        // Validate Email
        if (email === "") {

            response.innerHTML =
                "Please enter an email address.";

            response.style.color = "red";

            return;

        }

        // Validate Phone
        if (!/^[0-9]{10}$/.test(phone)) {

            response.innerHTML =
                "Please enter a valid 10-digit phone number.";

            response.style.color = "red";

            return;

        }

        // Validate Enquiry Type
        if (enquiryType === "") {

            response.innerHTML =
                "Please select an enquiry type.";

            response.style.color = "red";

            return;

        }

        // Validate Message
        if (message.length < 10) {

            response.innerHTML =
                "Message must contain at least 10 characters.";

            response.style.color = "red";

            return;
        }

        // Success Message
        response.innerHTML =
            "Your enquiry has been submitted successfully. We will contact you soon.";

        response.style.color = "green";

        // Clear form
        enquiryForm.reset();

    });

}