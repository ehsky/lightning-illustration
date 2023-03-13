import { createElement } from "lwc";
import Illustration from "c/illustration";

const ILLUSTRATIONS = [
  "Fishing Deals",
  "Lake Mountain",
  "No Events",
  "No Task",
  "Setup",
  "No Access",
  "No Connection",
  "Not Available In Lightning",
  "Page Not Available",
  "Walkthrough Not Available",
  "Going Camping",
  "Maintenance",
  "Gone Fishing",
  "No Access2",
  "No Content",
  "No Preview",
  "Preview",
  "Research",
  "Dessert",
  "Open Road"
];

describe("c-illustration", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("Render default component behavior with no attributes", () => {
    const element = createElement("c-illustration", {
      is: Illustration
    });
    document.body.appendChild(element);

    const div = element.shadowRoot.querySelector("div");
    expect(div.className).toBe("slds-illustration slds-illustration_small");

    const h3 = element.shadowRoot.querySelector("h3");
    expect(h3.className).toBe("slds-text-heading_medium");
    expect(h3.textContent).toBe("");

    const p = element.shadowRoot.querySelector("p");
    expect(p.className).toBe("slds-text-body_regular");
    expect(p.textContent).toBe("");
  });

  ILLUSTRATIONS.forEach((illustration) => {
    it(`Renders "${illustration}" with size "large" with a message header and message body`, () => {
      const MESSAGE_HEADING = "Test Heading";
      const MESSAGE_BODY = "Test Body";

      const element = createElement("c-illustration", {
        is: Illustration
      });
      element.illustration = illustration;
      element.messageHeading = MESSAGE_HEADING;
      element.messageBody = MESSAGE_BODY;
      element.size = "large";
      document.body.appendChild(element);

      const div = element.shadowRoot.querySelector("div");
      expect(div.className).toBe("slds-illustration slds-illustration_large");

      const svg = element.shadowRoot.querySelector("svg");
      expect(svg).toBeTruthy();
      expect(svg.getAttribute("aria-hidden")).toBe("true");

      const h3 = element.shadowRoot.querySelector("h3");
      expect(h3.className).toBe("slds-text-heading_medium");
      expect(h3.textContent).toBe(MESSAGE_HEADING);

      const p = element.shadowRoot.querySelector("p");
      expect(p.className).toBe("slds-text-body_regular");
      expect(p.textContent).toBe(MESSAGE_BODY);
    });
  });
});
