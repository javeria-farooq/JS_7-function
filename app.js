/* function myFunction() {
    console.log(`start learning JS functions`)
    console.log(`hello`)
}

myFunction() */

/* ab yhn pe kia hgya yhn pe mne kaha h k mn jb bh cl krun t tm console.pe hello hi print krwna
yni k mne cook ko kh dia k mn jb bh tmhn invoke krn t tmhe khana t bnana hi h lkn bs srf yhi 
dish bnani h t ye t hgya simple function. lkn kbhi kbhi esa bh hta h k mn cook ko invoke krke
khud btaoun k aaj ye bnao. lkn ye kl nh bnana kl ka mn tmhn btaoungi kl k menu k lye jgah chor do
t isi trhn function mn bh hta h k mne function bnake oose kaha h k tmhn print t console pe hi
krwna h lkn kia print krwna h uske lye jgah reserved krdo wo jb bnana hga m tmhn oosi wqt bta
dngi. t iske lye kia hta h uske lye hm console pe ek variable rkh dte hn jski wjh se menu ki 
jgah reserved hjti h r jb function ko invoke krte hn oosi wqt oose btate hn k aaj tmhn console
pe ye print krwna h or kl ye print krwya th. is trhn. t isko lkhne ka kia treeqa hta h isko lkhne
ka ye treeqa h k hmne jo myFunction bna k parant khali chore hn usm hm ek variable ko declare 
krdnge (actual m ye variable nh blke ise hm parameters khte hn but kaam variable ki trhn krte hn)
. ab declare krne m yhn hmn koi let wghera use nh krna. bs itna smjhna h k paran m koi bh variable ki
trhn ka name lkh dnge just: myFunction(msg). bs is trhn. ab hm console pe lkhte wqt bh console m
hello nh lkhnge blke: console.log(msg). ye lkhnge isse kia hga isse hm jb function ko invoke
krnge t us wqt oose is msg ki jgah pe lkh k jo bh cheez dnge wo oose is parameter ki value smjh
k wo wli dish console pe bna dga. just like: */

/* function myFunction(msg) {
    console.log(msg)
}

myFunction(`hello`)
myFunction(`start learning JS function`)
myFunction(`you also get this Course`) */ /* is trhn ismn hm hr mrtba alg alg dish bnwa skte hn 
alg alg content print krwa skte hn. r jb parameter ko koi value dte hn t oose argument khte hn.
yni variable ki value. r hm apne function m multiple paramters r arguments bh pass krske hn. */

/* now make a function that sums 2 numbers: */
/* function sum(x, y) {
    console.log(`now the value of sum = ${x + y}`)
}

sum(2, 3)
sum(5, 7)
sum(10, 12)
sum(102, 182) */

//    //  // return:

// function myFunction() {
//     console.log(`hello world`)
// }

// myFunction()

/* function myFunction2() {
    let a = `this is the variable in function`
    return a;
}

// myFunction2()

// console.log(myFunction2)

let val = myFunction2()

console.log(val) */

/* function myFunction(x, y) {
    let sum = x + y
    let mul = x * y
    let div = x / y
    let arr = [sum, mul, div]
    return arr
}

console.log(myFunction(2, 3))
// let arr2 = myFunction(2, 3)
// console.log(arr2) */


//     ///    // arrow functions:
/* const myFunction = (x, y) => {
    console.log(x + y)
}

myFunction(2, 3) */

/* const sum = (x, y) => {
    console.log("sum of 10 & 5 =", x + y)
}

sum(10, 5)

const sub = (x, y) => {
    console.log("sub of 10 & 5 =", x - y)
}

sub(10, 5)

const mul = (x, y) => {
    console.log("multiplication of 10 & 5 =", x * y)
}

mul(10, 5)

const div = (x, y) => {
    console.log("division of 10 & 5 =", x / y)
}

div(10, 5) */

/* const sum = (x, y) => {
    console.log(x + y)
}

const sub = (x, y) => {
    console.log(x - y)
}

const mul = (x, y) => {
    console.log(x * y)
}

const div = (x, y) => {
    console.log(x / y)
}

sum(2, 3)
sub(10, 5)
mul(2, 3)
div(10, 5) */

//    // practice que:
// qno:1

/* function countVowels(str) {
    let count = 0
    for(const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++
            console.log(char)
        }
    }
    
    console.log("There are " + count + "vowels")
    return count;
}

countVowels("javeriaFarooq")

const countVowels2 = (str) => {
   let count = 0
   for(const char of str) {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        count++
        console.log(char)
    }
   }
   console.log("there are ", count, "vowels")
}

countVowels2("alizaFarooq") */

