// frontend test
console.log("frontend change");
console.log("frontend change O1");
console.log("frontend change O2");
console.log("frontend change O2");
// frontend/app.js

function calculateDashboardStats(users) {
  let totalUsers = users.length;
  let activeUsers = 0;
  let premiumUsers = 0;
  let totalRevenue = 0;

  for (let i = 0; i < users.length; i++) {

    if (users[i].isActive) {
      activeUsers++;
    }

    if (users[i].subscription === "premium") {
      premiumUsers++;
      totalRevenue += users[i].monthlyPayment;
    }
  }

  const inactiveUsers = totalUsers - activeUsers;

  return {
    totalUsers,
    activeUsers,
    inactiveUsers,
    premiumUsers,
    totalRevenue,
    averageRevenue:
      premiumUsers > 0
        ? totalRevenue / premiumUsers
        : 0
  };
}

const sampleUsers = [
  {
    name: "Raj",
    isActive: true,
    subscription: "premium",
    monthlyPayment: 499
  },
  {
    name: "Alex",
    isActive: false,
    subscription: "free",
    monthlyPayment: 0
  },
  {
    name: "Sam",
    isActive: true,
    subscription: "premium",
    monthlyPayment: 299
  }
];

console.log(calculateDashboardStats(sampleUsers));


console.log("frontend change O2");
