// Function to detect XSS vulnerabilities (Static + Heuristic Analysis)
function detectXSS() {
    const xssPatterns = [
        /<script[^>]*>.*?(alert|prompt|confirm)\(.*?\)<\/script>/gi, // Scripts with suspicious functions
        /on\w+\s*=\s*['"]\s*(alert|prompt|confirm)\(.*?\)['"]/gi, // Inline event handlers with alerts
        /javascript:\s*(alert|prompt|confirm)\(.*?\)/gi,             // JavaScript URIs with alerts
        /eval\(/gi, // Detect usage of eval() which is commonly used in XSS payloads
        /document\.write\(/gi  // Detect document.write(), often used in XSS
    ];

    const elementsToScan = Array.from(document.querySelectorAll('input, textarea, form, div.comment, p.post-content'));
    return elementsToScan.some(element => 
        xssPatterns.some(pattern => pattern.test(element.outerHTML || element.value || element.innerHTML))
    );
}

// Function to detect SQL injection vulnerabilities (Static + Dynamic Analysis)
function detectSQLInjection() {
    const sqlPatterns = [
        /('|\")\s*(OR|AND)\s+['"]?\w+['"]?\s*=\s*['"]?\w+['"]?/gi, // Logical operators with suspicious conditions
        /(UNION\s+SELECT|SELECT\s+\*|DROP\s+TABLE|INSERT\s+INTO|DELETE\s+FROM)/gi, // High-risk SQL keywords
        /--/gi,  // Detects comment injections (e.g., -- is used to comment out SQL)
        /\b(OR|AND)\b\s*([^\s]+)\s*(=|LIKE|>|<|BETWEEN)\s*['"][^\s]+/gi // Detecting complex SQL conditions
    ];

    const elementsToScan = Array.from(document.querySelectorAll('input, textarea, form'));
    return elementsToScan.some(element => 
        sqlPatterns.some(pattern => pattern.test(element.value || ''))
    );
}

// Function to check if the page is not secure (HTTP or mixed content)
function checkSecurity() {
    // Check if the page is served over HTTP (not secure) or has mixed content
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:' && window.location.href.indexOf('http://') !== -1) {
        alert("WARNING: This website is NOT SECURE. The connection is not using HTTPS.");
    }
    // Additional mixed content detection
    const mixedContent = Array.from(document.querySelectorAll('script[src^="http://"], img[src^="http://"], link[href^="http://"]'));
    if (mixedContent.length > 0) {
        alert("WARNING: This website contains mixed content (HTTP resources on an HTTPS page). This is a security risk.");
    }
}

// Main function to scan the page for vulnerabilities and security issues
function scanPage() {
    const isXSS = detectXSS();
    const isSQLi = detectSQLInjection();
    checkSecurity(); // Check if the website is not secure or contains mixed content

    if (isXSS && isSQLi) {
        alert("WARNING: MALICIOUS CONTENT\nPotential Threats: XSS and SQL Injection");
    } else if (isXSS) {
        alert("WARNING: MALICIOUS CONTENT\nPotential Threat: XSS");
    } else if (isSQLi) {
        alert("WARNING: MALICIOUS CONTENT\nPotential Threat: SQL Injection");
    } else {
        alert("SAFE: NO MALICIOUS CONTENT DETECTED");
    }
}

// Run the scan automatically when the content script is loaded
window.addEventListener('load', scanPage);
