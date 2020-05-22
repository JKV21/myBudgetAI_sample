
//This is the nav bar animation

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function(){

        //TOGGLE NAV

        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

    });

}

navSlide();

//This is the loading

let logoAI = document.querySelector('#ATOM');

window.addEventListener('load', function(){
    logoAI.classList.remove('animationAI');
});

//This is the cookie animation

const cookieSlide = () => {

    const accept = document.querySelector('.Accept');
    const cookies = document.querySelector('.cookies');
    
    accept.addEventListener('click', function(){
        //TOGGLE COOKIES

        cookies.classList.toggle('cookies-active');
    });

}

cookieSlide();

//Simplified App...



var button = document.getElementById('Submit');
var btn = document.getElementById('Submit1');

let textbox1 = document.getElementById('textbox1');
let textbox2 = document.getElementById('textbox2');
let textbox3 = document.getElementById('textbox3');
let textbox4 = document.getElementById('textbox4');
let textbox5 = document.getElementById('textbox5');
let textbox6 = document.getElementById('textbox6');
let textbox10 = document.getElementById('textbox10');
let textbox11 = document.getElementById('textbox11');
let textbox12 = document.getElementById('textbox12');
let textbox13 = document.getElementById('textbox13');

let score = 0;
let inv;
let answer1;
let answer2;
let answer3;
let answer4;

let budget;
let rent;
let bills;
let insurance;
let percent;
let debt;

let savings;

let Spendings;
let wSpend;

let needs;
let Dneeds;
let Wneeds;

let wants;
let Dwants;
let Wwants;

let money;
let minSavings;
let timeDebt;
let debtVal;
let mounthInsur;

let moneyS
let maxP

let paragraph1 = document.getElementById('par1');
let paragraph2 = document.getElementById('par2');
let paragraph3 = document.getElementById('par3');
let paragraph4 = document.getElementById('par4');


let pa1 = document.querySelector('.PA1');
let pa2 = document.querySelector('.PA2');
let pa3 = document.querySelector('.PA3');
let pa4 = document.querySelector('.PA4');
let pa5 = document.querySelector('.PA5');

let del = document.getElementById('DEL-DATA');

let Sum1 = document.getElementById('Sum1');
let Sum2 = document.getElementById('Sum2');
let Sum3 = document.getElementById('Sum3');
let Sum4 = document.getElementById('Sum4');
let Sum5 = document.getElementById('Sum5');
let Sum6 = document.getElementById('Sum6');
let Sum7 = document.getElementById('Sum7');
let Sum8 = document.getElementById('Sum8');
let Sum9 = document.getElementById('Sum9');

button.addEventListener('click', function(){

    budget = parseFloat(textbox1.value);
    rent = parseFloat(textbox2.value);
    bills = parseFloat(textbox3.value);
    insurance = parseFloat(textbox4.value);
    percent = parseFloat(textbox5.value);
    debt = parseFloat(textbox6.value);

    //THIS IS WHERE WE CHANGE THE MAX PERCENTAGE

    moneyS = budget - mounthInsur - rent - bills ;

    if(moneyS >= 100000){
        maxP = 99;
    }else if(moneyS >= 50000 && moneyS < 100000){
        maxP = 80;
    }else if(moneyS >= 10000 && moneyS < 50000){
        maxP = 60;
    }else if(moneyS < 10000){
        maxP = 40;
    }else{
        maxP = 40;
    }

    if(percent > maxP){
        percent = maxP;
        alert(`myBudgetAI can't save you more than ${maxP}%, based on your budget.`);
    }else{
        percent = percent;
    }

    /*
    if(percent > 40){
        percent = 40;
        alert(`For the time being myBudgetAI can't save up more than 40%`);
    }
    */

    savings = budget * percent / 100;
    mounthInsur = insurance / 12;
    money = budget - savings - mounthInsur - rent - bills ;
    needs = parseInt(money * 55 / 100);
    wants = parseInt(money - needs);

    Spendings = parseInt(money / 30);
    wSpend = Spendings * 7;

    Dneeds = parseInt(needs / 30);
    Wneeds = Dneeds * 7;

    Dwants = parseInt(wants / 30);
    Wwants = Dwants * 7;

    debtVal = savings / 2;

    if(debt >= 1000 && debtVal < 100){
        debtVal += 50;
    }

    minSavings = savings - debtVal;
    timeDebt = parseInt(debt / debtVal);

    if(timeDebt == 0){
        timeDebt = 1;
    }

    /*CHANGE THIS*/

    if(needs > 0 && wants > 0){
        if(textbox1.value.length > 0){
            paragraph1.innerHTML = `Based on you data, with a budget of <b>${budget}</b> in order to save 
            <b>${percent}%</b> of your monthly income (this is the equivalent of <b>${savings}</b>) you should spend 
            a maximum amount of <b>${needs}</b> on your needs and a maximum amounth of <b>${wants}</b> on your 
            wants. This means that you will beneficiate of an average daily budget equal to 
            <b>${Spendings}</b>, which also means that you beneficiate of a weekly budget of <b>${wSpend}</b>.`;
        } else {
            paragraph1.innerHTML = `Please enter your data.`;
        }

        if(debt > 0){
            paragraph2.innerHTML = `Because you are not in the best situation right now 
            (you are in a debt or have a loan of <b>${debt}</b>), to clear up your debt/loan as soon as posible you should not 
            privilage the ammount of <b>${savings}</b> of saved money, but instead you should 
            pay a minimum of <b>${debtVal}</b> a mounth to cover up your debt, and so you will 
            end up with only <b>${minSavings}</b> money saved every mounth, but if you follow up this
            budget plan your debt should end in <b>${timeDebt}</b> mounths. Now you should not wait, 
            let's see what type of investor are you.`;

        } else if(debt == 0 || debt == undefined){
            paragraph2.innerHTML = `If you really don't have any debts, well <b>Congratulations</b>, 
            that means that you either you haven't been to college or you've made enough money to cover 
            up that college debt, I sugest that you start investing your saved money on assests and 
            based on the type of investor you are. You will find out which type of
            investor you are from the questionary below. So let's see what type of investor are you.`;
        } else {
            paragraph2.innerHTML = `Please enter the wright type of data. 
            If you are not in debt or have loans write 0.`;
        }
    } else {
        alert(`myBudgetAI is really sorry...`);
        paragraph1.innerHTML = `I'm really sorry to inform you that not even myBudgetAI can't 
        find a good way to help you in the kind of situation that you are in. I suggest 
        you that if you are part of a family or couple, you should add up everybodys income and 
        then fill the questionaires or maybe consider to save less money for the time being, 
        and remember that the maximum percentage of money you could save is equal to ${maxP}%`;
        paragraph2.innerHTML = `If you haven't filled in your answers in the questionaire, then 
        you should fill it in order to get your advce from myBudgetAI.`;
    }

    if(needs > 0 && wants > 0){

        if(textbox1.value.length > 0 && textbox2.value.length > 0 && textbox3.value.length > 0 && textbox4.value.length > 0 && textbox5.value.length > 0 && textbox6.value.length > 0){
            
            pa1.innerHTML = `Needs are the things that we can't live without, needs include things 
            such as monthly payments and bills, but because you entered all of your monthly and annual 
            payments, I've already subtracted their value from your income so you won't 
            have to worry about them. Needs in your case are things such as health 
            care and groceries. Based on your information with a total amount 
            of <b>${needs}</b> availble to spend each mounth on your needs 
            you have a daily need budget of <b>${Dneeds}</b> and a weekly need 
            budget of <b>${Wneeds}</b>. If you end up not using your whole need budget, 
            then congratulations you can add up that excess money to your savings.`;

            localStorage.setItem('needs', needs);
            localStorage.setItem('Dneeds', Dneeds);
            localStorage.setItem('Wneeds', Wneeds);

            Sum1.innerHTML = `Available: <b>${needs}</b>`;
            Sum2.innerHTML = `Weekly: <b>${Wneeds}</b>`;
            Sum3.innerHTML = `Daily: <b>${Dneeds}</b>`;

            pa2.innerHTML = `Wants are the opposite of needs. Wants are the things that we desire, 
            but in reality they are not important or crucial to our survival. Wants include things 
            such as nights out, expensive clothes, the newest gadgets, subscriptions, going to the 
            gym and so on. I'm not telling you to stop buying all the things that make you happy, 
            no I'm just saying that based on your budget of <b>${wants}</b> availible to spend 
            on wants every mounth you have a daily budget of <b>${Dwants}</b> and a weekly budget 
            of <b>${Wwants}</b> to spend on the things you want. If you end up not using your whole want budget, 
            then congratulations you can add up that excess money to your savings.`;

            localStorage.setItem('wants', wants);
            localStorage.setItem('Wwants', Wwants);
            localStorage.setItem('Dwants', Dwants);

            Sum4.innerHTML = `Available: <b>${wants}</b>`;
            Sum5.innerHTML = `Weekly: <b>${Wwants}</b>`;
            Sum6.innerHTML = `Daily: <b>${Dwants}</b>`;

            pa3.innerHTML = `Saving money is not easy, so before I even start telling you about how 
            you should use the <b>${savings}</b> saved I advice you that every month you should 
            put this money aside, to escape the temptation of using it. Then you should prioritize 
            on adding your monthly savings into an emergency fund in a bank account, because you 
            should have at least three months of emergency savings in case of an unfortunate unforseen 
            event, like losing your job. Once you're done you should check out what type of investor you 
            are, to see in which things you should invest. So what are you waiting for, go ahead 
            and check out your results.`;

            localStorage.setItem('savings', savings);

            Sum7.innerHTML = `Save: <b>${savings}</b>`;

            if(debt > 0){
                pa4.innerHTML = `Because you have a debt of <b>${debt}</b>, instead of saving 
                <b>${savings}</b> a mounth you should save only <b>${minSavings}</b> a 
                month, that you will use as explained earlier in the <b>Savings</b> concept. The other 
                <b>${debtVal}</b> you should use them to pay off your debt, if you follow the 
                instructions you should get out of your debt in <b>${timeDebt}</b> mounths. And so, after 
                you get rid of your debt you can start investing so check which type of investor 
                are, to see in which things you should invest. So what are you waiting for, go ahead 
                and check out your results.`;

                localStorage.setItem('debt', debt);
                localStorage.setItem('debtVal', debtVal);
                localStorage.setItem('minSavings', minSavings);
                localStorage.setItem('timeDebt', timeDebt);

                Sum8.innerHTML = `Minimal: <b>${debtVal}</b>`;

            } else if(debt == 0 || debt == undefined){
                pa4.innerHTML = `Well based on the information you gave myBudgetAI, you are not in 
                debt and you don't have any personal loans, so <b>Congratulations</b>, you 
                are free to start investing and now is the best time to learn which type of 
                investor are you, to see in which things you should invest. So what are you waiting for, 
                go ahead and check out your results.`;

                localStorage.setItem('debt', debt);
                localStorage.setItem('debtVal', debtVal);
                localStorage.setItem('minSavings', minSavings);
                localStorage.setItem('timeDebt', timeDebt);

                Sum8.innerHTML = `Minimal: <b>none</b>`;

            } else {
                pa4.innerHTML = `Fill the textboxes and answer the questions first, then come 
                back to see your results`;
            }
        } else{
            pa1.innerHTML = `Fill the textboxes and answer the questions first, then come 
            back to see your results`;
            pa2.innerHTML = `Fill the textboxes and answer the questions first, then come 
            back to see your results`;
            pa3.innerHTML = `Fill the textboxes and answer the questions first, then come 
            back to see your results`;
            pa4.innerHTML = `Fill the textboxes and answer the questions first, then come 
            back to see your results`;
        }
    } else {

        pa1.innerHTML = `If you paid attention to the advice that myBudgetAI gave you on the 
        first questionaire and you still didn't manage to get a good adivce then, 
        my advice is that you should really reconsider your job and the situation that you 
        are in. You should start learning a high income (high income skills are skills that 
        the marketplace is willing to pay you enough money in order for you to get a decent income
        . You may find out more about high income skills from myBudgetAI's 
        <a href="influence.html"><b>Influencers page</b></a>) or try to find another 
        job.`;
        pa2.innerHTML = `If you paid attention to the advice that myBudgetAI gave you on the 
        first questionaire and you still didn't manage to get a good adivce then, 
        my advice is that you should really reconsider your job and the situation that you 
        are in. You should start learning a high income (high income skills are skills that 
        the marketplace is willing to pay you enough money in order for you to get a decent income
        . You may find out more about high income skills from myBudgetAI's 
        <a href="influence.html"><b>Influencers page</b></a>) or try to find another 
        job.`;
        pa3.innerHTML = `If you paid attention to the advice that myBudgetAI gave you on the 
        first questionaire and you still didn't manage to get a good adivce then, 
        my advice is that you should really reconsider your job and the situation that you 
        are in. You should start learning a high income (high income skills are skills that 
        the marketplace is willing to pay you enough money in order for you to get a decent income
        . You may find out more about high income skills from myBudgetAI's 
        <a href="influence.html"><b>Influencers page</b></a>) or try to find another 
        job.`;
        pa4.innerHTML = `If you paid attention to the advice that myBudgetAI gave you on the 
        first questionaire and you still didn't manage to get a good adivce then, 
        my advice is that you should really reconsider your job and the situation that you 
        are in. You should start learning a high income (high income skills are skills that 
        the marketplace is willing to pay you enough money in order for you to get a decent income
        . You may find out more about high income skills from myBudgetAI's 
        <a href="influence.html"><b>Influencers page</b></a>) or try to find another 
        job.`;
        
    }

});

btn.addEventListener('click', function(){
    
    answer1 = textbox10.value;
    answer2 = textbox11.value;
    answer3 = textbox12.value;
    answer4 = textbox13.value;

    if(answer1 == "Yes"){
        score += 0;
    } else if (answer1 == "No"){
        score += 5;
    } else {
        score += 0;
    }

    if(answer2 == "Liabilities"){
        score += 0;
    } else if (answer2 == "Assets"){
        score += 5;
    } else {
        score += 0;
    }

    if(answer3 == "No"){
        score += 0;
    } else if (answer3 == "Yes"){
        score += 5;
    } else {
        score += 0;
    }

    if(answer4 == "No"){
        score += 0;
    } else if (answer4 == "Yes"){
        score += 5;
    } else {
        score += 0;
    }

    if(score > 15){
        inv = "Type-A";
    } else if(score >= 10){
        inv = "Type-B";
    } else {
        inv = "Type-C";
    }

    if(answer1.length > 0 && answer2.length > 0 && answer3.length > 0 && answer4.length > 0){
        if(inv == "Type-A"){
            paragraph3.innerHTML = `So based on your information you are a <b>${inv}</b>, this means that you 
            are on your way to success, this also means that you know what you are investing in so good luck. 
            You should check out your result down below where you may find some additional advice on investing and 
            what should you do, don't forget to take notes about your advice. You can take notes on the 
            <b><a href="notes.html">Notes page</a></b>.`;
        } else if(inv == "Type-B"){
            paragraph3.innerHTML = `So based on your information you are a <b>${inv}</b>, this means that you 
            are trying to invest but don't know where to start, luckly you are in the best place, 
            check out your result down below where you may find some additional advice on investing and 
            what should you do, don't forget to take notes about your advice. You can take notes on the 
            <b><a href="notes.html">Notes page</a></b>.`;
        } else if(inv == "Type-C"){
            paragraph3.innerHTML = `So based on your information you are a <b>${inv}</b>, which means that 
            you don't invest, which is a pity, but you are not late check out  
            your result down below where you may find some additional advice on investing and 
            what should you do, don't forget to take notes about your advice. You can take notes on the 
            <b><a href="notes.html">Notes page</a></b>.`;
        } 
    
    } else {
        paragraph3.innerHTML = `Answer the questions from the questionaire above if you want 
        myBudgetAI to tell you what type of investor are you and how you should spend your 
        money in order to maximize your profits. <b>Remember that when you answer the 
        questions you should write your answer as shown in the textbox example(start with 
        capitalized letters).</b>`;
    }

    if(textbox10.value.length > 0 && textbox11.value.length > 0 && textbox12.value.length > 0 && textbox13.value.length > 0){

        pa5.innerHTML = `So based on your information you are a <b>${inv}</b> investor 
        you should check ou the <b>${inv}</b> paragraph to find out more about what should 
        you do. If you don't think that the answer is accurate then that means that 
        maybe you weren't honest when responding and maybe you should check out every 
        Type. Take this part of the test with a grain of salt because it's not 100% accurate, 
        because you answered the the questions in a different way then the one expected or 
        because you weren't honest when answering the questions.`;

        localStorage.setItem('inv', inv);

        Sum9.innerHTML = `Investor: <b>${inv}</b>`;

    } else {
        pa5.innerHTML = `Fill the textboxes and answer the questions first, then come 
        back to see your results`;
    }

    score = 0;

});

del.addEventListener('click', function(){

    localStorage.removeItem('needs');
    localStorage.removeItem('Dneeds');
    localStorage.removeItem('Wneeds');

    localStorage.removeItem('wants');
    localStorage.removeItem('Dwants');
    localStorage.removeItem('Wwants');

    localStorage.removeItem('savings');

    localStorage.removeItem('debt');
    localStorage.removeItem('minSavings');
    localStorage.removeItem('debtVal');
    localStorage.removeItem('timeDebt');

    localStorage.removeItem('inv');

    window.location.reload();

});

function getALL(){

    if(localStorage.getItem('needs') > 0 && localStorage.getItem('wants') > 0){
            
        pa1.innerHTML = `Needs are the things that we can't live without, needs include things 
        such as mouthly payments and bills, but because you entered all of your monthly and annual 
        payments, I've already subtracted their value from your income so you won't 
        have to worry about them. Needs in your case are things such as health 
        care and groceries. Based on your information with a total amount 
        of <b>${localStorage.getItem('needs')}</b> availble to spend each mounth on your needs 
        you have a daily need budget of <b>${localStorage.getItem('Dneeds')}</b> and a weekly need 
        budget of <b>${localStorage.getItem('Wneeds')}</b>. If you end up not using your whole need budget, 
        then congratulations you can add up that excess money to your savings.`;

        Sum1.innerHTML = `Available: <b>${localStorage.getItem('needs')}</b>`;
        Sum2.innerHTML = `Weekly: <b>${localStorage.getItem('Wneeds')}</b>`;
        Sum3.innerHTML = `Daily: <b>${localStorage.getItem('Dneeds')}</b>`;

        pa2.innerHTML = `Wants are the opposite of needs. Wants are the things that we desire, 
        but in reality they are not important or crucial to our survival. Wants include things 
        such as nights out, expensive clothes, the newest gadgets, subscriptions, going to the 
        gym and so on. I'm not telling you to stop buying all the things that make you happy, 
        no I'm just saying that based on your budget of <b>${localStorage.getItem('wants')}</b> availible to spend 
        on wants every mounth you have a daily budget of <b>${localStorage.getItem('Dwants')}</b> and a weekly budget 
        of <b>${localStorage.getItem('Wwants')}</b> to spend on the things you want. If you end up not using your whole want budget, 
        then congratulations you can add up that excess money to your savings.`;

        Sum4.innerHTML = `Available: <b>${localStorage.getItem('wants')}</b>`;
        Sum5.innerHTML = `Weekly: <b>${localStorage.getItem('Wwants')}</b>`;
        Sum6.innerHTML = `Daily: <b>${localStorage.getItem('Dwants')}</b>`;

        pa3.innerHTML = `Saving money is not easy, so before I even start telling you about how 
        you should use the <b>${localStorage.getItem('savings')}</b> saved I advice you that every month you should 
        put this money aside, to escape the temptation of using it. Then you should prioritize 
        on adding your monthly savings into an emergency fund in a bank account, because you 
        should have at least three months of emergency savings in case of an unfortunate unforseen 
        event, like losing your job. Once you're done you should check out what type of investor you 
        are, to see in which things you should invest. So what are you waiting for, go ahead 
        and check out your results.`;

        Sum7.innerHTML = `Save: <b>${localStorage.getItem('savings')}</b>`;

        if(localStorage.getItem('debt') > 0){
            pa4.innerHTML = `Because you have a debt of <b>${localStorage.getItem('debt')}</b>, instead of saving 
            <b>${localStorage.getItem('savings')}</b> a mounth you should save only <b>${localStorage.getItem('minSavings')}</b> a 
            month, that you will use as explained earlier in the <b>Savings</b> concept. The other 
            <b>${localStorage.getItem('debtVal')}</b> you should use them to pay off your debt, if you follow the 
            instructions you should get out of your debt in <b>${localStorage.getItem('timeDebt')}</b> mounths. And so, after 
            you get rid of your debt you can start investing so check which type of investor 
            are, to see in which things you should invest. So what are you waiting for, go ahead 
            and check out your results.`;

            Sum8.innerHTML = `Minimal: <b>${localStorage.getItem('debtVal')}</b>`;

        } else {
            pa4.innerHTML = `Well based on the information you gave myBudgetAI, you are not in 
            debt and you don't have any personal loans, so <b>Congratulations</b>, you 
            are free to start investing and now is the best time to learn which type of 
            investor are you, to see in which things you should invest. So what are you waiting for, 
            go ahead and check out your results.`;

            Sum8.innerHTML = `Minimal: <b>none</b>`;

        }
    }

    //AT THE START OF THE APP THERE IS AN ERROR WITH INV LOCAL STORAGE 
    //THIS try => catch CATCHES THE ERROR

    try{
        if(localStorage.getItem('inv').length > 0 || localStorage.getItem('inv') != null || localStorage.getItem('inv') != undefined){

            pa5.innerHTML = `So based on your information you are a <b>${localStorage.getItem('inv')}</b> investor 
            you should check ou the <b>${localStorage.getItem('inv')}</b> paragraph to find out more about what should 
            you do. If you don't think that the answer is accurate then that means that 
            maybe you weren't honest when responding and maybe you should check out every 
            Type. Take this part of the test with a grain of salt because it's not 100% accurate, 
            because you answered the the questions in a different way then the one expected or 
            because you weren't honest when answering the questions, don't forget to take notes about your advice. You can take notes on the 
            <b><a href="notes.html">Notes page</a></b>.`;
    
            Sum9.innerHTML = `Investor: <b>${localStorage.getItem('inv')}</b>`;
    
        } else {
            pa5.innerHTML = `Fill the textboxes and answer the questions first, then come 
            back to see your results`;
        }
    }
    catch(error){
        console.log(`Answer the questions!`);
    }

}

getALL()

















