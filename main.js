const cities = [
    {
        id: "spb",
        name: "Санкт-Петербург",
        hash: "3Aeaac18d2eb61ec31da1d6d3893afed67260b0ff41e35b2bca606498690add6cf"
    },
    {
        id: "nsk",
        name: "Новосибирск",
        hash: "3Ac97db91a8106980e1de5987fa6b8fa3afb55be118eaa1c52347262422e06e405"
    },
    {
        id: "perm",
        name: "Пермь",
        hash: "3A9b422f3cd97d04a210cd3f7cbba01d83f4965f638974e6d9b298ad08e0fe0466"
    },
    {
        id: "ekb",
        name: "Екатеринбург",
        hash: "3A6ecc7933f9ce3b12cb4a00ead6f4274ff7775af68b8ffef060f54f224c73b647"
    },
    {
        id: "ufa",
        name: "Уфа",
        hash: "3A8ebb059f1f3456695d34b1ffa6a4111af0ee0340a68f30dfe04ea9abab1597b4"
    },
    {
        id: "chl",
        name: "Челябинск",
        hash: "3A75c0666f0ed0c532b2c03c2015cf58a64d8f683e727a2bd1bbc7a5de72a4d836"
    },
    {
        id: "tomsk",
        name: "Томск",
        hash: "3A6d60ef3586376839403ee03a339e3c80d135f3019a4331b13b3358075bb47c3a"
    },
    {
        id: "omsk",
        name: "Омск",
        hash: "3A5036f854227785ab9db4505a58d6bfeb39b969178c40a643bc9699b72a937542"
    }
];

function loadMap(hash) {
    let s = document.createElement("script");
    s.async = true;
    s.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%" + hash + "&amp;width=100%25&amp;height=830&amp;lang=ru_RU&amp;scroll=true";
    document.body.appendChild(s);
}

function loadCities() {
    const toAdd = document.getElementById("license");
    cities.forEach((city, n) => {
        let a = document.createElement("a");
        a.id = city.id;
        a.text = city.name + " | ";
        // a.href = "#";
        a.onclick = () => changeCity(n);
        toAdd.appendChild(a);
        loadMap(city.hash);
    });
    setTimeout(() => changeCity(0), 1000);
}

function changeCity(n) {
    const city = cities[n];
    document.title = city.name;
    cities.forEach((curr_city, i) => {
        document.getElementById(curr_city.id).style.color = (curr_city.id === city.id) ? "#048899" : "black";
        document.querySelectorAll("body > ymaps")[i].style.setProperty('display', (i === n) ? 'block' : 'none', 'important');
    });
}
