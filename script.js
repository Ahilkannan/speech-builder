function generateSpeech() {
    const topic = document.getElementById("topic").value;
    const tone = document.getElementById("tone").value;
    const audience = document.getElementById("audience").value;

    const speech = `
    <h2>Speech Outline</h2>
    <strong>Hook:</strong> Let's begin with a ${tone} take on "${topic}" for our ${audience}.<br><br>
    <strong>Body:</strong> Here's where we dive into meaningful insights, experiences, and lessons around "${topic}". We maintain a ${tone} delivery to keep our ${audience} engaged.<br><br>
    <strong>Conclusion:</strong> We wrap up with a powerful, ${tone} closing thought that leaves a lasting impression on our ${audience}.<br><br>
    `;

    document.getElementById("output").innerHTML = speech;
}
