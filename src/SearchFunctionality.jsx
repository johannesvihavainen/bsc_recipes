import React, { useEffect } from 'react';

function SearchFunctionality() {
    useEffect(() => {
        const getDrinkTitle = document.querySelectorAll('.drink-title');
        const getName = document.querySelectorAll('.prepping');
        const getInput = document.querySelector('.search-box');

        const handleSearch = () => {
            const inputValue = getInput.value.toUpperCase();

            for (let i = 0; i < getDrinkTitle.length; i++) {
                const drinkTitle = getDrinkTitle[i].innerHTML.toUpperCase();
                const nameContent = getName[i] ? getName[i].innerHTML.toUpperCase() : ''; // Safe access to .prepping content

                const itemWrapper = getDrinkTitle[i].closest('.item-wrapper');

                // Check if either the drink title or name content matches the search input
                if (drinkTitle.includes(inputValue) || nameContent.includes(inputValue)) {
                    itemWrapper.style.display = "block";
                } else {
                    itemWrapper.style.display = "none";
                }
            }
        };

        getInput.addEventListener('input', handleSearch);

        return () => {
            getInput.removeEventListener('input', handleSearch);
        };
    }, []);

    return null;
}

export default SearchFunctionality;