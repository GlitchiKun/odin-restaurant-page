export class MenuPage {
  static generateDiv() {
    const div = document.createElement("div");
    div.id = "menu";

    div.appendChild(MenuPage.#generateHead());
    div.appendChild(MenuPage.#generateAmuseBouche());
    div.appendChild(MenuPage.#generateBegin());
    div.appendChild(MenuPage.#generateMain());
    div.appendChild(MenuPage.#generateCheese());
    div.appendChild(MenuPage.#generateFinal());

    return div;
  }

  static #generateHead() {
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = "Our chief Menu";
    div.appendChild(h1);

    const h2 = document.createElement("h2");
    h2.textContent = "A Journey of Taste & Elegance";
    div.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = `A culinary experience composed with attention,
                    inspired by the finest ingredients of the season.`;
    
    div.appendChild(p);

    return div;
  }

  static #generateAmuseBouche() {
    return this.#generateCourse("Amuse-Bouche", [
      MenuPage.#generateDish(
        "Truffle & Parmesan Tartlet",
        " Black truffle · Aged Parmesan · Chive oil",
      ),
    ]);
  }

  static #generateBegin() {
    return this.#generateCourse("To Begin", [
      MenuPage.#generateDish(
        "Hokkaido Scallop",
        "Cauliflower velouté · Oscietra caviar · Yuzu beurre blanc",
      ),
      MenuPage.#generateDish(
        "Beef Carpaccio",
        "Wagyu beef · Black garlic · Parmesan · Wild rocket · Truffle dressing",
      ),
      MenuPage.#generateDish(
        "Foie Gras Terrine",
        "Fig compote · Toasted brioche · Port reduction · Fleur de sel",
      ),
    ]);
  }

  static #generateMain() {
    return this.#generateCourse("Main", [
      MenuPage.#generateDish(
        "Line-Caught Sea Bass",
        "Artichoke purée · Champagne sauce · Coastal herbs · Lemon pearls",
      ),
      MenuPage.#generateDish(
        "Butter-Poached Lobster",
        "Heritage tomato · Saffron emulsion · Fennel · Shellfish bisque",
      ),
      MenuPage.#generateDish(
        "Black Angus Beef Tenderloin",
        "Celeriac fondant · Morel mushrooms · Bone marrow jus · Garden vegetables",
      ),
      MenuPage.#generateDish(
        "Herb-Crusted Lamb Loin",
        "Spring peas · Mint · Baby carrots · Rosemary jus",
      ),
    ]);
  }

  static #generateCheese() {
    return this.#generateCourse("The Cheese", [
      MenuPage.#generateDish(
        "A Selection of Fine French Cheeses",
        "Seasonal accompaniments · Walnut bread · Fig preserve",
      ),
    ]);
  }

  static #generateFinal() {
    return this.#generateCourse("The Finale", [
      MenuPage.#generateDish(
        "Dark Chocolate & Hazelnut",
        "Valrhona chocolate · Roasted hazelnut · Salted caramel · Vanilla crème",
      ),
      MenuPage.#generateDish(
        "Vanilla & Raspberry",
        "Bourbon vanilla · Fresh raspberry · White chocolate · Rose",
      ),
    ]);
  }

  static #generateCourse(title, dishes) {
    const div = document.createElement("div");
    div.classList.add("course");

    const h3 = document.createElement("h3");
    h3.textContent = title;
    div.appendChild(h3);

    dishes.forEach((d) => {
      div.appendChild(d);
    });

    return div;
  }

  static #generateDish(title, details) {
    const div = document.createElement("div");
    div.classList.add("dish");
    const h4 = document.createElement("h4");
    h4.textContent = title;
    div.appendChild(h4);

    const p = document.createElement("p");
    p.textContent = details;
    div.appendChild(p);

    return div;
  }
}
