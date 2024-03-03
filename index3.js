let studentMarks = {
    subjects: {
        математика: 5,
        история: 4,
        искуство: 3,
    },
};

for (let key in studentMarks) {
    if (typeof studentMarks[key] === 'object') {
        for (let sub in studentMarks[key]) {
            console.log(`По предмету ${sub} студент получил ${studentMarks[key][sub]}`);
        }
    }

}
