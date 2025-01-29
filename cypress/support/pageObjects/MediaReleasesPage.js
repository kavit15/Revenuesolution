
class MediaReleasesPage {
    // Locator for the "Ministers" accordion button
    getMinistersAccordionButton() {
      return cy.get(':nth-child(3) > .nsw-filters__item-button').contains('Ministers');
    }
  
    // Locator for the list of checkboxes (e.g., for ministers)
    getCheckboxes() {
      return cy.get('input[type="checkbox"]');
    }
  
    // Method to select a checkbox based on its value
    selectCheckboxByValue(value) {
      this.getCheckboxes().each(($checkbox) => {
        const checkboxValue = $checkbox.val();
        if (checkboxValue === value) {
          cy.wrap($checkbox).check(); // Check the checkbox if it matches the value
        }
      });
    }
  
    // Locator for the "Apply Filters" button
    getApplyFiltersButton() {
      return cy.get('[data-test="finder-submit"]');
    }
  
    // Method to click the "Apply Filters" button
    clickApplyFiltersButton() {
      this.getApplyFiltersButton().click();
    }
  }
  
  export default MediaReleasesPage;
  