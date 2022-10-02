const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".episode__tab");
const panes = $$(".tab-pane");

const tabActive = $(".episode__tab.active");


tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
        $(".episode__tab.active").classList.remove("active");
        $(".tab-pane.active").classList.remove("active");
        this.classList.add("active");
        pane.classList.add("active");
    };
});
