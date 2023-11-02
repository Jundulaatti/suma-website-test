if(document.getElementById("nav-icon-open")) {
    document.getElementById("nav-icon-open").addEventListener("click", openMenu)
}

if(document.getElementById("nav-icon-close")) {
    document.getElementById("nav-icon-close").addEventListener("click", closeMenu)
}

function openMenu() {
    document.getElementById("nav-links-mobile").classList.add("active");
    document.getElementById("nav-icon-open").style.display = "none"
    document.getElementById("nav-icon-close").style.display ="block"
    document.body.classList.add("no-scroll")
}

function closeMenu() {
    document.getElementById("nav-links-mobile").classList.remove("active");
    document.getElementById("nav-icon-open").style.display = "block";
    document.getElementById("nav-icon-close").style.display = "none";
    document.body.classList.remove("no-scroll")
}


// Sign up for newsletter modal

document.addEventListener("DOMContentLoaded", function() {
    const proPlanModal = document.getElementById("proPlanModal")
    const proBtn = document.getElementById("proWaitlistBtn")
    const proClose = document.getElementById("closeProModal")

    // Function to show the modal
    function showModal() {
        proPlanModal.style.display = "block"
    }

    // Function to hide the modal
    function hideModal() {
        proPlanModal.style.display = "none"
    }

    // Function to hide modal if clicked outside
    function hideModalIfClickedOutside(event) {
        if (event.target === proPlanModal) {
            hideModal()
        }
    }

    // Stop propagation of click inside the modal content to prevent closing when clicking inside
    document.querySelector(".pricing-modal-content").addEventListener("click", function(event) {
        event.stopPropagation();
    });

    proBtn.addEventListener("click", function(event) {
        event.preventDefault()
        showModal()
    })

    // Check if Hubspot form has already been loaded
    if (!window.hbsptProPlanModalLoaded) {
        let hubspotProFormScript = document.createElement("script")
        hubspotProFormScript.src = "//js-eu1.hsforms.net/forms/embed/v2.js"
        hubspotProFormScript.async = true;
        hubspotProFormScript.onload = function() {
            hbspt.forms.create({
                region: "eu1",
                portalId: "139764545",
                formId: "b427d615-d91e-4f49-b07e-c78c2a586469",
                target: "#hubspotFormContainerCard"
            })
        }
        document.body.appendChild(hubspotProFormScript)
        window.hbsptProPlanModalLoaded = true
    }

    if (proClose) {
        proClose.addEventListener("click", hideModal)
    }

    window.addEventListener("click", hideModalIfClickedOutside)
})
