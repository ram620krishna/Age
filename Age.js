function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const ageResult = document.getElementById('ageResult');

    if (birthdate === '') {
        ageResult.innerHTML = "Please enter your birthdate.";
        return;
    }

    const birthDate = new Date(birthdate);
    const today = new Date();  // Fixed today's date

    // Calculate years, months, days
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    let ageHours = today.getHours() - birthDate.getHours();
    let ageMinutes = today.getMinutes() - birthDate.getMinutes();
    let ageSeconds = today.getSeconds() - birthDate.getSeconds();

    if (ageSeconds < 0) {
        ageMinutes--;
        ageSeconds += 60;
    }

    if (ageMinutes < 0) {
        ageHours--;
        ageMinutes += 60;
    }

    if (ageHours < 0) {
        ageDays--;
        ageHours += 24;
    }

    if (ageDays < 0) {
        ageMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    // Calculate total weeks, days, hours, minutes, and seconds
    const ageInDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInHours = Math.floor((today - birthDate) / (1000 * 60 * 60));
    const ageInMinutes = Math.floor((today - birthDate) / (1000 * 60));
    const ageInSeconds = Math.floor((today - birthDate) / 1000);

    // Display the result in multiple formats
    ageResult.innerHTML = `
        <div><strong>Age:</strong> ${ageYears} years ${ageMonths} months ${ageDays} days</div>
        <div><strong>or</strong> ${ageMonths + ageYears * 12} months ${ageDays} days</div>
        <div><strong>or</strong> ${ageInWeeks} weeks ${ageInDays % 7} days</div>
        <div><strong>or</strong> ${ageInDays} days</div>
        <div><strong>or</strong> ${ageInHours} hours</div>
        <div><strong>or</strong> ${ageInMinutes} minutes</div>
        <div><strong>or</strong> ${ageInSeconds} seconds</div>
    `;
}
