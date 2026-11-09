const transactions = [
{ id: 1, userId: 101, amount: 100000 },
{ id: 2, userId: 102, amount: 200000 },
{ id: 3, userId: 101, amount: 150000 },
{ id: 4, userId: 103, amount: 300000 },
{ id: 5, userId: 102, amount: 50000 }
];

function aggregateTransactions(data) {
    return data.reduce((acc, curr) => {
        if (!acc[curr.userId]) {
            acc[curr.userId] = { userId: curr.userId, totalAmount: 0, count: 0 };
        }
        acc[curr.userId].totalAmount += curr.amount;
        acc[curr.userId].count += 1;
        return acc;
    }, {});
}
const result = aggregateTransactions(transactions);
console.log(result);