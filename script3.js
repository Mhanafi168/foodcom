document.addEventListener("DOMContentLoaded", function() {
    const eggFacts = [
        "Eggs are a great source of protein, vitamins, and minerals.",
        "Eggs are one of the few foods that naturally contain vitamin D.",
        "Eating eggs can help increase levels of HDL (good) cholesterol.",
        "The color of an egg's shell is determined by the breed of the hen.",
        "Eggs can be stored in the refrigerator for up to one month.",
        "The average hen lays about 250 to 300 eggs per year.",
        "Egg yolks are a good source of choline, which is important for brain health.",
        "Eggs can be cooked in a variety of ways, including boiled, fried, scrambled, and poached."
    ];

    const eggFactsContainer = document.getElementById("eggFacts");

    eggFacts.forEach(function(fact) {
        const factParagraph = document.createElement("p");
        factParagraph.textContent = fact;
        eggFactsContainer.appendChild(factParagraph);
    });
});



