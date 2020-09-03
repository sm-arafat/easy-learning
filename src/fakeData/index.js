import androids from './OnlineCourse'; // load android data


const fakeData = [...androids]; // copy data from androids

// shuffle function for loading data randomly by each action
const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;