const showAdditionalData = (additional) => {
    if (!additional || Object.keys(additional).length === 0) {
        alert('No Additional Information');
        return;
    }

    const data = Object.entries(additional)
        .map(([key, value]) => `${key}: ${value}`)
        .join('\n');
    alert(data);
};