export class AboutPage {
  static generateDiv() {
    const div = document.createElement("div");
    div.id = "about";
    div.appendChild(this.#generateHead());
    div.appendChild(this.#generateContact());

    return div;
  }

  static #generateHead() {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");

    h1.textContent = "About us";

    div.appendChild(h1);
    return div;
  }

  static #generateContact() {
    const div = document.createElement("div");
    div.appendChild(this.#generatePhone("+1 4722045221"));
    div.appendChild(
      this.#generateAdress(
        "351 W Schuylkill Rd, Ste SQ7 Pottstown, PA 19465 United States",
      ),
    );
    div.appendChild(this.#generateEmail("contact@elegantfork.com"));

    return div;
  }

  static #generateEmail(email) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = "Email: ";
    div.appendChild(span);

    const a = document.createElement("a");

    a.textContent = email;
    a.href = `mailto:${email}`;
    div.appendChild(a);

    return div;
  }

  static #generatePhone(phone) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = "Phone: ";
    div.appendChild(span);

    const a = document.createElement("a");

    a.textContent = phone;
    a.href = `tel:${phone}`;
    div.appendChild(a);

    return div;
  }

  static #generateAdress(postal_adress) {
    const div = document.createElement("div");
    const span = document.createElement("span");
    span.textContent = "Adress: ";
    div.appendChild(span);

    const a = document.createElement("a");

    a.textContent = postal_adress;
    div.appendChild(a);

    return div;
  }
}
