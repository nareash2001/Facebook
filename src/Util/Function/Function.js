import { Findaccountcall, Newpasswordsubmitapi, Otpverifier, Creatstory, Callapi, Creatstorytext, Postcreateimg } from "../../Util/Getdata/getdata"
import { store } from "../../Mobx"
import html2canvas from 'html2canvas'
export const Findaccountvaluechecker = async (data, setData, state, setState) => {
    let obj = { ...state }
    if (data.findaccount.length === 0) {
        obj.view = 1;
        obj.title = " Please fill in at least one field";
        obj.message = "Fill in at least one field to search for your account";

    }
    else {
        let res = await Findaccountcall(data);
        if (res.message === "NOT") {
            setData({ findaccount: "" })
            obj.view = 1;
            obj.title = "No search results";
            obj.message = "Your search did not return any results. Please try again with other information."
        }
        else {
            store.Findaccount = res.mail
            console.log(store.Findaccount)
            obj.status = 1
        }
    }
    setState(obj)
    return
}

export const Valueupdate = (e, data, setData) => {
    let obj = { ...data };
    obj[e.target.name] = e.target.value;
    setData(obj);
}
export const Otpverfication = async (otp, setOtp, otpwarning, setOtpwarning) => {
    let obj = { ...setOtpwarning }
    let obj2 = { ...otp };
    obj.view = 1;
    if (otp.otpcode.length === 0) {
        obj.message = "Please enter a code."
    }
    else if (!(Number.isInteger(Number(otp.otpcode)))) {
        obj.message = "It looks like you entered some letters. Your code is 6 numbers long."
    }
    else if (otp.otpcode.length === 1) {
        obj.message = "You only entered one number. Please check your code and try again."
    }
    else if (otp.otpcode.length < 6) {
        obj.message = `You've only entered ${otp.otpcode.length} numbers. Please check your code and try again.`
    }
    else if (otp.otpcode.length > 6) {
        obj.message = "You've entered more than six numbers. Please check your code and try again."
    }
    else {

        let res = await Otpverifier(otp)
        if (res.message === "NO") {
            obj.message = "The number that you've entered doesn't match your code. Please try again."
        }
        else {
            obj.view = 0;
            obj.status = 1;
        }
    }
    obj2.otpcode = "";
    setOtp(obj2)
    setOtpwarning(obj)
}
export const Regex = (data, setStrength) => {


    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(data)) {
        setStrength(4)
    }
    else if (data.length >= 7) {
        setStrength(3)
    }
    else if (data.length >= 5) {
        setStrength(2)
    }
    else if (data.length >= 0) {
        setStrength(1)
    }
    else {
        setStrength(0)

    }



}
export const Newpasswordsubmit = async (passwordwarning, setPasswordwarning, data, setData, strength, setStrength, store) => {
    let obj = { ...passwordwarning }
    let obj1 = { ...data }
    obj.view = 1;
    if (strength <= 1) {
        obj1.password = ""
        obj.message = "Password must be at least 6 characters in length."
    }
    else if (strength === 2) {
        obj1.password = ""
        obj.message = "Please choose a more secure password."
    }
    else {
        obj.view = 0;
        let res = await Newpasswordsubmitapi(data, store)
        if (res.message === "Changed") {
            Callapi(data, store);
        }

    }

    setPasswordwarning(obj)
    setData(obj1)
    setStrength(0)
}
export const Postcreatedata = (data, setData, divref, setValuelength) => {
    let obj = { ...data }
    obj.value = divref.current.textContent
    if (obj.value.length > 84) {
        setValuelength(2)
    }
    else if (obj.value.length > 0) {
        setValuelength(1)
    }
    else {
        setValuelength(0)
    }
    setData(obj)

}

export const Photocreatestoryfun = async () => {
    var input = document.createElement('input');
    const formData = new FormData();
    input.type = 'file';
    input.accept = "image/png, image/gif, image/jpeg"
    input.onchange = async (e) => {
        var file = e.target.files[0];
        //    console.log(file)
        formData.append("story", file)
        await Creatstory(formData)

        //    console.log(res)
    }

    input.click();
}
export const Textstory = async () => {
    let img = document.getElementById("textstoryimg")
    let canvas = await html2canvas(img, {
        useCORS: true,
    })
    let data = canvas.toDataURL("image/png", 1.0);
    let res = await Creatstorytext(data)
    console.log(res)
}

export const Postimg = async (setImg, setValuelength) => {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = "image/png, image/jpeg"
    input.onchange = async (e) => {
        var file = e.target.files[0];
        setImg({ view: 1, file: URL.createObjectURL(file), formData: file })
        setValuelength(1)

    }
    input.click();
}
export const Postcreate = async (data, img) => {
    if (img.view === 1) {
        const formData=new FormData();
        formData.append("post",img.formData)
        formData.append("caption",data.value)
         await Postcreateimg(formData)
    }
    else {
        console.log("ji")
    }
}
