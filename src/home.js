export class HomePage {
  static generateDiv() {
    const div = document.createElement("div");
    div.id = "home";

    div.appendChild(HomePage.#generateHead());
    div.appendChild(HomePage.#generateFirstText());
    div.appendChild(
      HomePage.#generateImg(
        "https://images.pexels.com/photos/30469701/pexels-photo-30469701.jpeg",
        "5 plates with luxury dishes.",
      ),
    );
    div.appendChild(
      HomePage.#generateImg(
        "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg",
        "A picture of a restaurant.",
      ),
    );
    div.appendChild(HomePage.#generateSecondText());
    div.appendChild(HomePage.#generateFoot());

    return div;
  }

  static #generateHead() {
    const head = document.createElement("div");
    head.classList.add("text", "head");

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Elegent Fork";
    head.appendChild(h1);

    const p = document.createElement("p");
    p.textContent =
      "Where timeless elegance meets contemporary gastronomy. Guided by the rhythm of the seasons, our cuisine celebrates exceptional ingredients, delicate flavors, and meticulous craftsmanship. Every detail, from the first pour to the final course, is thoughtfully considered to create an experience that lingers long after the evening ends.";

    head.appendChild(h1);

    return head;
  }

  static #generateFirstText() {
    return HomePage.#generateTextCell(
      "A Taste of Excellence",
      `From the first bite to the final course, every detail is designed to
          delight the senses. Our carefully curated menu celebrates the beauty
          of simplicity while embracing innovation, offering a dining experience
          that is both familiar and extraordinary.`,
    );
  }

  static #generateSecondText() {
    return HomePage.#generateTextCell(
      "An Exceptional Experience",
      `Step into an atmosphere of understated luxury, where warm lighting,
          elegant interiors, and attentive service set the stage for memorable
          moments. Whether you are joining us for an intimate dinner, a special
          celebration, or an unforgettable evening with friends, Elegant Fork
          invites you to slow down, indulge, and savor every moment.`,
    );
  }

  static #generateFoot() {
    const foot = document.createElement("div");
    foot.classList.add("text", "foot");

    const h2 = document.createElement("h2");
    h2.textContent = "Discover Elegant Fork";
    foot.appendChild(h2);

    const img = HomePage.#generateImg(
      "https://images.pexels.com/photos/30469703/pexels-photo-30469703.jpeg",
      "A glass of juice, with dishes in background.",
    );
    foot.appendChild(img);

    const pStrong = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent =
      "Fine dining. Exceptional ingredients. Unforgettable moments.";
    pStrong.appendChild(strong);
    foot.appendChild(pStrong);

    const p = document.createElement("p");
    p.textContent = "Your table is waiting";

    foot.appendChild(p);

    return foot;
  }

  static #generateTextCell(title, text) {
    const row = document.createElement("div");
    row.classList.add("text");

    const h2 = document.createElement("h2");
    h2.textContent = title;
    row.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = text;
    row.appendChild(p);

    return row;
  }

  static #generateImg(url, alt) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;

    return img;
  }
}
