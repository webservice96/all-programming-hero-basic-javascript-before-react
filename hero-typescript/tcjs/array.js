"use strict";
var salary = 51520;
var yourFriend = 'Kalam Uddin';
var workerSalary = [120, 201, 540, 452, 5000];
var friends = ['helal', 'belal', 'dalal'];
// get top worker
var topWorker = 0;
for (var _i = 0, workerSalary_1 = workerSalary; _i < workerSalary_1.length; _i++) {
    var worker = workerSalary_1[_i];
    if (worker > topWorker) {
        topWorker = worker;
    }
}
console.log(topWorker);
