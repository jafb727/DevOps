interface IPerson{
     name: string,
     id: number,
}

const printPerson = (person: IPerson) => {
     return person.name;
};

console.log(printPerson({name:"jose",id:1}));