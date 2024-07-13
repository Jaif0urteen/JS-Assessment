function protect_email(email) {
    const [localPart, domain] = email.split('@');
    const hiddenPart = localPart.slice(0, 5) + '...'; // Keep the first 5 characters of the local part
    return `${hiddenPart}@${domain}`;
}

// Test Data
console.log(protect_email("robin_singh@example.com")); // Output: "robin...@example.com"
