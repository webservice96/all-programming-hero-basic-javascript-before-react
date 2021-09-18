const salary: number = 51520;
const yourFriend: string = 'Kalam Uddin';
const workerSalary: number[] = [120, 201, 540, 452, 5000];
const friends: string[] = ['helal', 'belal', 'dalal'];

// get top worker
let topWorker = 0;
for (const worker of workerSalary) {
    if (worker > topWorker) {
        topWorker = worker;
    }
}
console.log(topWorker);
