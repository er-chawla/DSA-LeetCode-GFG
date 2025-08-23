import fs from 'fs';

// Function to generate a random string
function randomString(length = 20) {
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from(
        { length },
        () => chars[Math.floor(Math.random() * chars.length)]
    ).join('');
}

let data = [];

for (let i = 0; i < 50000; i++) {
    // Adjust this number until size is ~1MB
    data.push({
        id: i,
        name: randomString(15),
        email: `${randomString(10)}@example.com`,
        age: Math.floor(Math.random() * 63) + 18, // 18 to 80
        address: {
            street: randomString(20),
            city: randomString(10),
            zip: Math.floor(Math.random() * 90000) + 10000,
        },
        is_active: Math.random() < 0.5,
        balance: +(Math.random() * (10000 - 100) + 100).toFixed(2),
    });
}

// Write to file
fs.writeFileSync('dummy_data.json', JSON.stringify(data, null, 2));

console.log('✅ Dummy JSON file created (~1MB).');