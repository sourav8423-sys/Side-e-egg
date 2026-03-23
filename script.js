// Side E-EGG: Interactive Script
document.addEventListener('DOMContentLoaded', () => {
    console.log("Side E-EGG: Saurabh Kushwaha Vision Active.");

    const egg = document.querySelector('.egg-container');
    
    // क्लिक करने पर एक विशेष संदेश (Alert)
    egg.addEventListener('click', () => {
        alert("Side E-EGG: नई दृष्टि, नया जीवन! स्थिति: सिद्धम।");
    });

    // समय के अनुसार स्वागत संदेश (Console में)
    const hours = new Date().getHours();
    let greeting;
    if (hours < 12) greeting = "शुभ प्रभात! Side E-EGG सक्रिय है।";
    else if (hours < 18) greeting = "शुभ दोपहर! विजन पर काम जारी है।";
    else greeting = "शुभ संध्या! झाँसी से डिजिटल विजन लाइव है।";

    console.log(greeting);
});
