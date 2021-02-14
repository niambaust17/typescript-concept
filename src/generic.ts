// generics is reusable block of code
/*const addID = (obj: object) =>
{
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};

let user = addID({
    name: "Niam",
    age:24
});
console.log(user.id)*/ // don't access name and age but if we use generics then we access it



// in generic way we can receive type. if we don't know which type of data come then we use generic
/*const addID = <T>(obj: T) => // if we pass here string it don't show error to solve this problem next example
{
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};

let user = addID({
    name: "Niam",
    age:24
});
let user2 = "Faruk";
console.log(user.name, user.age, user.id);
addID(user2)*/

const addID = <T extends object >(obj: T) => // if we pass here other than object it give us error
{
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};

let user = addID({
    name: "Niam",
    age:24
});
console.log(user.name, user.age, user.id);

let user2 = 'Arif';
// addID(user2);



// generic in interface in generic way we receive type as a variable
/*interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse<object> = { 
    status: 200,
    type: 'good',
    data: {
        name: 'Hasin',
        age: 24
    }
}*/

// enum type

enum ResType { SUCCESS, FAILURE, UNAUTHENTICATED, FORBIDDEN };

interface APIResponse<T> {
    status: number;
    type: ResType;
    data: T;
}

const response1: APIResponse<object> = { 
    status: 200,
    type: ResType.SUCCESS,
    data: {
        name: 'Hasin',
        age: 24
    }
}

console.log(response1);

// tuples type fixed type order wise if break order it give error
let b: [number, string, object] = [4, 'hello', { name: 'niam' }];
// b[1] = 4; 1 is fixed for string we don't assign number here
