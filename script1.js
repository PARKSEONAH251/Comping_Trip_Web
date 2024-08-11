const wrapper2 = document.querySelector(".dropdown-wrapper-2"),
      selectBtn2 = wrapper2.querySelector(".dropdown-select-btn-2"),
      searchInp2 = wrapper2.querySelector(".dropdown-search-2 input"),
      options2 = wrapper2.querySelector(".dropdown-options-2");

let countries = ["-Asia-","Hong Kong","Taipei","Shanghai","Tokyo","Seoul","Bangkok","Singapore",
    "Kuala Lumpur","Manila","-Europe-","London","Paris","Frankfurt","Rome","Amsterdam","Madrid",
    "-North America-","New York","San Francisco","Los Angeles","Chicago","Vancouver","Toronto"
];

function addCountry2(selectedCountry) {
    options2.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country === selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName2(this)" class="${isSelected}">${country}</li>`;
        options2.insertAdjacentHTML("beforeend", li);
    });
}
addCountry2();

function updateName2(selectedLi) {
    searchInp2.value = "";
    addCountry2(selectedLi.innerText);
    wrapper2.classList.remove("active");
    selectBtn2.firstElementChild.innerText = selectedLi.innerText;
}

searchInp2.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp2.value.toLowerCase();
    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data === selectBtn2.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName2(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options2.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn2.addEventListener("click", () => wrapper2.classList.toggle("active"));
