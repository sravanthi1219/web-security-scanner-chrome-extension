chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.results) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: (results) => {
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = `
              <p>XSS: ${results.xss}</p>
              <p>SQL Injection: ${results.sqlInjection}</p>
            `;
          },
          args: [message.results]
        });
      });
    }
  });