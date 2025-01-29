// cypress/e2e/media_releases_spec.js
import MediaReleasesPage from '../support/pageObjects/MediaReleasesPage';

describe('NSW Government Media Releases Filter Test', () => {
  const mediaReleasesPage = new MediaReleasesPage();

  beforeEach(() => {
    // Visit the media releases page before each test
    cy.visit('https://www.nsw.gov.au/media-releases');
  });

  it('Verify that the "Ministers" accordion is visible and clickable', () => {
    // Use the MediaReleasesPage object to interact with the Ministers accordion
    mediaReleasesPage.getMinistersAccordionButton()
      .should('be.visible') // Ensure the button is visible
      .click(); // Click the accordion button
  });

  it('Select the desired value checkbox to filter and apply the filters', () => {
    // Select the checkbox for the Premier
    mediaReleasesPage.selectCheckboxByValue('Premier');

    // Apply the filters after selecting the checkbox
    mediaReleasesPage.clickApplyFiltersButton();
    cy.screenshot('Page after filter'); 

    
  });
});
