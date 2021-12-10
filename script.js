const randNum = (num) => {
    return Math.floor(Math.random() * num);
}
const collectiveWisdom = {
    sign: ['sun', 'moon', 'star', 'comet'],
    fortuneOutput: ['good luck', 'bad luck', 'terrible luck', ' awesome luck'],
    advice: ['trust no one', 'ride a bike', 'go swimming', 'fly on a plane'],
},
let personalWisdom = [],

for (let prop in collectiveWisdom){
    let option = randNum(collectiveWisdom[prop].length)

    switch(prop) {
        case sign:
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom(prop)(option)}".`);
        case fortuneOutput:
            personalWisdom.push(`You are having "${collectiveWisdom(prop)(option)}".`);
        case advice:
            personalWisdom.push(`You should: "${collectiveWisdom(prop)(option)}".`);
    }
}

const formated = (wisdom) => {
    const formated = personalWisdom.push("/n");
}
formated(personalWisdom);