import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showNoResultsMessage, showError } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import "./css/loader.css";

document.querySelector(".search-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let searchInput = document.querySelector(".search-input").value.trim();

    if (searchInput === "") {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query!',
            position: 'topRight'
        });
        return;
    }

    fetchImages(searchInput)
        .then(function (hits) {
            if (hits.length === 0) {
                showNoResultsMessage();
            } else {
                renderImages(hits);
            }
        })
        .catch(function (error) {
            showError("There was an error while fetching images. Please try again later.");
        });
});
