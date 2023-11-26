const getCookie = (name) => {
    let value = '; ' + document.cookie; //가지고옴
    let parts = value.split(`; ${name}=`);

    if (parts.length === 2) {
        //이때만 실제로 있는 것
        return parts.pop().split(';').shift();
    }
};

const setCookie = (name, value, exp = 5) => {
    //이름, 만료일, 값
    let date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};
const deleteCookie = (name) => {
    let date = new Date('2020-01-01').toUTCString();
    console.log(date);
    document.cookie = name + '=; expires=' + date;
};
export { getCookie, setCookie, deleteCookie };
