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
    },
    {
        id: "rostov",
        name: "Ростов-на-Дону",
        hash: "3A451258d278c5b02779a26383f899ac53e03c75a5c7e828a8a9386dea75dbf566"
    },
    {
        id: "nnovgorog",
        name: "Нижний Новгород",
        hash: "3Ac150ca495511f6be8c05b316b08a90bc0c96610df77985d753205d12da88f7e7"
    },
    {
        id: "karsnodar",
        name: "Краснодар",
        hash: "3Ae4f293f77a38338162c4fa50fc18c752d8c2b76c4b7fb4555ddee859ab29e386"
    },
    {
        id: "kazan",
        name: "Казань",
        hash: "3A61707eb1e084ed1fdb2119e5254885f4dccd88271460c56a4446dafe9abbe8e9"
    }
];

function loadMap(hash, id) {
    let frame = document.createElement("iframe");
    frame.src = "https://yandex.ru/map-widget/v1/?um=constructor%" + hash;
    frame.id = id;
    document.body.appendChild(frame);
}

function loadCities() {
    const toAdd = document.getElementById("license");
    cities.forEach(({ id, name, hash }) => {
        let a = document.createElement("a");
        a.id = "a" + id;
        a.text = name + " | ";
        a.onclick = () => changeCity(id);
        toAdd.appendChild(a);
        loadMap(hash, id);
    });
    setTimeout(() => changeCity("spb"), 1000);
}

function changeCity(currId) {
    document.title = cities.find(c => c.id === currId).name;
    cities.forEach(({ id }) => ["a" + id, id].forEach(uid => document.getElementById(uid).classList[(id === currId) ? "add" : "remove"]("active")));
}