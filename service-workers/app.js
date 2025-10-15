const Gallery = {
    images: [
        {
            name: 'Snow Troopers',
            alt: 'Two lego soldiers',
            url: 'gallery/snowTroopers.jpg',
            credit: '<a href="https://www.flickr.com/photos/legofenris/">legOfenris</a>, published under a <a href="https://creativecommons.org/licenses/by-nc-nd/2.0/">Attribution-NonCommercial-NoDerivs 2.0 Generic</a> license.',
        }
    ]
}

const registerServiceWorker = async () => {
    // Check service workers are supported on browser
    // If not supported it doesn't break
    if ("serviceWorker" in navigator) {
        try {
            const registration = await navigator.serviceWorker.register('sw.js', {
                scope: './', // Optional, specify the subset of content we want the worker to control
            });
            if (registration.installing) {
                console.log("Service worker installing");
            } else if (registration.waiting) {
                console.log("Service worker installed");
            } else if (registration.active) {
                console.log("Service worker active");
            }
        } catch (error) {
            console.error(`Registration failed with ${error}`);
        }
    }
};

const imgSection = document.querySelector('section');

const getImageBlob = async (url) => {
    const imageResponse = await fetch(url);
    if (!imageResponse.ok) {
        throw new Error(
            `Image didn't load successfully; error code: ${imageResponse.statusText || imageResponse.status
            }`
        );
    }
    return imageResponse.blob();
};

const createGalleryFigure = async (galleryImage) => {
    try {
        const imageBlob = await getImageBlob(galleryImage.url);
        const myImage = document.createElement('img');
        const myCaption = document.createElement('caption');
        const myFigure = document.createElement('figure');
        const myName = document.createElement('span');
        myName.textContent = `${galleryImage.name}: `;
        const myCredit = document.createElement('span');
        myCredit.innerHTML = `Taken by ${galleryImage.credit}`;
        myCaption.append(myName, myCredit);
        myImage.src = window.URL.createObjectURL(imageBlob);
        myImage.setAttribute('alt', galleryImage.alt);
        myFigure.append(myImage, myCaption);
        imgSection.append(myFigure);
    } catch (error) {
        console.error(error);
    }
};

registerServiceWorker();
Gallery.images.map(createGalleryFigure);