let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})
const translations = {
    en: {
        home: 'Home',
        shop: 'Shop',
        best: 'Best Selling',
        about: 'About',
        contact: 'contact',
        Signin: 'Sign in',
        discover: 'Discover',
        blissful: 'Blissful Living:',
        comfort: 'Your Comfort',
        craft: 'Our Craftsmanship',
        p: "Crafted for Your Comfort, Built for Your Delight: Unveiling Excellence in Quality and Service.",
        now: 'Shop Now',
        arrival: 'New Arrival',
        shopnow: 'Shop Now',
        chair1: 'Gray Chair',
        chair2: 'Cyan Chair',
        chair3: 'Pink Chair',
        chair4: 'Brown Chair',
        chair5: 'Black Chair',
        chair6: 'Black Modern chair',
        chair7: 'Black Chair',
        chair8: 'Gray sofa',
        collection: 'NEW COLLECTION',
        the: 'The Best Selling',
        wood1: 'Wooden Modern',
        wood2: 'Colorful Modern',
        wood3: 'White Modern',
        wood4: 'Blue Modern',
        aboutus: 'ABOUT US',
        future: 'Furniture Is Important Part For Your Comfort',
        paragraph: 'I Think Every single person would love their house to look cozy,modern or just Overall "Comfortable".Why Choosing US? Well Our Staff + Management Itself has 5+ Years Of experience In this Direction Of a Job.I am sure Our Very Communicative Stuff Would guide you through.This Is What We Do here,We are trying to give you our maximum quality of a certain object.You can also drop A feedback,We would Really Appreciate it and you will Also take a part to Improve our Service.',
        learn: 'Learn More.',
        brands: 'BRANDS',
        partners: 'Our Partners',
        subscribe: 'Subscribe To NewsLetter',
        sub: 'SUBSCRIBE',
        email: 'Enter Your Email...',
        contactvia: 'You Can Contact Us Via Email,Phone,Direct Meeting,Or Any of the Social Medias Listed Below This Text,Our Staff Will Respond You As Soon As It Is Possible.',
        services: 'Services',
        Products: 'Product',
        help: 'Help & Support',
        price: 'Pricing',
        sofa: "Sofa's",
        chair: "Chair's",
        living: 'Living Room',
        office: 'Office',
        p1: 'This Is What We Do here,We are trying to give you our maximum quality of a certain object.You can also drop A feedback,We would Really Appreciate it and you will Also take a part to Improve our Service.'
        
    },
    ge: {
        home: 'მთავარი',
        shop: 'მაღაზია',
        best: 'ყველაზე გაყიდვადი',
        about: 'შესახებ',
        contact: 'კონტაქტი',
        Signin: 'შესვლა',
        discover: 'აღმოაჩინე',
        blissful: 'ნეტარი ცხოვრება:',
        comfort: 'შენი კომფორტი',
        craft: 'ჩვენი შემოქმედეება',
        p: "შექმნილია თქვენი კომფორტისთვის, შექმნილი თქვენი სიამოვნებისთვის: ხარისხსა და მომსახურებაში ბრწყინვალების გამოვავლენთ.",
        now: 'იშოპინგე',
        arrival: 'ახალი',
        shopnow: 'ახლავე იშოპინგე',
        chair1: 'ნაცრისფერი სკამი',
        chair2: 'ცისფერი სკამი',
        chair3: 'ვარდისფერი სკამი',
        chair4: 'ყავისფერი სკამი',
        chair5: 'შავი სკამი',
        chair6: 'შავი თანამედროვე სკამი',
        chair7: 'შავი სკამი',
        chair8: 'ნაცრისფერი მდივანი',
        collection: 'ახალი კოლექცია',
        the: 'ყველაზე გაყიდვადი',
        wood1: 'თანამედროვე ხის',
        wood2: 'ფერადი',
        wood3: 'თანამედროვე თეთრი',
        wood4: 'თანამედროვე ლურჯი',
        aboutus: 'ჩვენს შესახებ',
        future: 'მომავალი მნიშვნელოვანი ნაწილია თქვენი კომფორტისთვის.',
        paragraph: 'მე ვფიქრობ, რომ თითოეულ ადამიანს მოეწონება, რომ მათი სახლი გამოიყურებოდეს მყუდრო, თანამედროვე ან უბრალოდ "კომფორტული". რატომ ავირჩიოთ აშშ? ჩვენს პერსონალს + მენეჯმენტს აქვს 5+ წლიანი გამოცდილება ამ მიმართულებით. დარწმუნებული ვარ, რომ ჩვენი ძალიან კომუნიკაბელური პერსონალი დაგეხმარებათ. ეს არის ის, რასაც ჩვენ ვაკეთებთ აქ, ჩვენ ვცდილობთ მოგაწოდოთ ჩვენი მაქსიმალური ხარისხი ობიექტი. თქვენ ასევე შეგიძლიათ გამოაქვეყნოთ გამოხმაურება, ჩვენ ნამდვილად ვაფასებთ მას და თქვენ ასევე მიიღებთ მონაწილეობას ჩვენი სერვისის გასაუმჯობესებლად.',
        learn: 'გაიგე მეტი.',
        brands: 'ბრენდები',
        partners: 'ჩვენი პარტნიორები',
        subscribe: 'გამოიწერე ჩვენი ნიუსლეთერი',
        sub: 'გამოწერა',
        email: 'შეიყვანე ელ. ფოსტა...',
        contactvia: 'შეგიძლიათ დაგვიკავშირდეთ ელექტრონული ფოსტით, ტელეფონით, პირდაპირი შეხვედრის ან ამ ტექსტის ქვემოთ ჩამოთვლილი ნებისმიერი სოციალური მედიის საშუალებით, ჩვენი პერსონალი გიპასუხებთ, როგორც კი ეს შესაძლებელი იქნება.',
        services: 'სერვისები',
        Products: 'პროდუქტი',
        help: 'დახმარება',
        price: 'ფასები',
        sofa: "დივნები",
        chair: "სკამები",
        living: 'მისაღები ოთახი',
        office: 'ოფისი',
        p1: 'ეს არის ის, რასაც ჩვენ ვაკეთებთ აქ, ჩვენ ვცდილობთ მოგაწოდოთ კონკრეტული ობიექტის ჩვენი მაქსიმალური ხარისხი. თქვენ ასევე შეგიძლიათ გამოხმაუროთ, ჩვენ ნამდვილად ვაფასებთ მას და თქვენ ასევე მიიღებთ მონაწილეობას ჩვენი სერვისის გაუმჯობესებაში.'
    }
};

function switchLanguage(language, event) {
    event.preventDefault();
 
    const translatableElements = document.querySelectorAll('.translatable');
 

    translatableElements.forEach(element => {
        const key = element.dataset.translationKey;
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
 }