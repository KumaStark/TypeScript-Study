type GT = '男'|'女';
interface USER {
    id: number,
    username: string,
    gender: GT
};

// console.log(USER);

let user1: USER;
// user1.id = 1;
// user1.username = '张有文';
// user1.gender = '未知';

let user2: USER;

user2.id = 2;
user2.username = 'zMouse';
user2.gender = '男';

type CT = '高级'|'全栈';
interface STUDENT extends USER {
    classType: CT
}

let s1: STUDENT;
s1.id = 1;
s1.username = '张三';
s1.gender = '男';
s1.classType = '高级';