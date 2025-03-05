document.getElementById('scanButton').addEventListener('click', () => {
  // Send a message to content.js to start scanning the page
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];
    chrome.scripting.executeScript(
      {
        target: { tabId: activeTab.id },
        func: scanForVulnerabilities,
      },
      (results) => {
        // Display result in the popup
        const result = results[0].result;
        const statusDiv = document.getElementById('status');
        if (result) {
          statusDiv.textContent = 'No vulnerabilities found!';
          statusDiv.style.color = 'green';
        } else {
          statusDiv.textContent = 'Vulnerabilities detected!';
          statusDiv.style.color = 'red';
        }
      }
    );
  });
});

function scanForVulnerabilities() {
  // Dummy vulnerability scanning function for example purposes
  const bodyText = document.body.innerHTML;

  // Simple checks for XSS and SQL Injection patterns
  const xssPattern = /<script|<img|onerror=|alert\(/i;
  const sqlInjectionPattern = /' OR 1=1|--|UNION SELECT/i;

  if (xssPattern.test(bodyText) || sqlInjectionPattern.test(bodyText)) {
    return false;  // Vulnerabilities detected
  }
  return true;  // No vulnerabilities
}
